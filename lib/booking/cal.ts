import {
  CAL_API_BASE,
  CAL_BOOKINGS_API_VERSION,
  CAL_SLOTS_API_VERSION,
  bookingConfig,
  earliestBookable,
  latestBookable,
} from './config'

/* ============================================================================
   Cal.com client.

   Two calls: what is free, and take one of them. Everything else — conflict
   detection, calendar sync, the confirmation emails to visitor and host — is
   Cal.com's job, which is the reason for using it rather than reimplementing
   a scheduling system.

   SERVER ONLY. This module reads CAL_API_KEY, which has no NEXT_PUBLIC_
   prefix and is therefore never inlined into a client bundle — importing it
   from a Client Component yields `undefined` and an unconfigured result
   rather than a leaked key. It is reached exclusively through the route
   handlers in app/api/booking/, and tests/booking.test.ts fails the build if
   a Client Component imports it.
   ========================================================================= */

export interface Slot {
  /** ISO 8601 start instant, UTC. */
  start: string
}

export type SlotsResult =
  | { ok: true; slots: Slot[] }
  | { ok: false; reason: 'unconfigured' | 'upstream'; message: string }

export type BookingResult =
  | { ok: true; uid: string; start: string }
  | {
      ok: false
      reason: 'unconfigured' | 'conflict' | 'invalid' | 'upstream'
      message: string
    }

/* ---------------------------------------------------------------------------
   Availability.
   ------------------------------------------------------------------------ */

export async function fetchSlots(timeZone: string): Promise<SlotsResult> {
  const config = bookingConfig()
  if (!config) {
    return {
      ok: false,
      reason: 'unconfigured',
      message: 'Booking is not configured.',
    }
  }

  /* The 48-hour floor is applied to the REQUEST, not only to the response.
     Asking Cal.com for a narrower window means a slot inside the notice
     period is never transmitted, so it cannot be revealed by anyone reading
     the network response and then posted back. Doc §5 requires unavailable
     times to be hidden; a time inside the notice period is unavailable. */
  const start = earliestBookable()
  const end = latestBookable()

  const url = new URL(`${CAL_API_BASE}/slots`)
  url.searchParams.set('eventTypeId', String(config.eventTypeId))
  url.searchParams.set('start', start.toISOString())
  url.searchParams.set('end', end.toISOString())
  url.searchParams.set('timeZone', timeZone)

  let response: Response
  try {
    response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
        'cal-api-version': CAL_SLOTS_API_VERSION,
      },
      /* Availability is live state. Caching it is how two people are shown
         the same slot. */
      cache: 'no-store',
    })
  } catch {
    return {
      ok: false,
      reason: 'upstream',
      message: 'Could not reach the calendar.',
    }
  }

  if (!response.ok) {
    return {
      ok: false,
      reason: 'upstream',
      message: `Calendar returned ${response.status}.`,
    }
  }

  const payload: unknown = await response.json()
  return { ok: true, slots: normaliseSlots(payload, start) }
}

/**
 * Cal.com has shipped several slot payload shapes across API versions:
 * `{ data: { "2026-08-20": [{ start }] } }` and `{ data: [{ start }] }` both
 * occur in the wild. Normalising here keeps that churn out of the routes and
 * the UI, and an unrecognised shape yields no slots rather than throwing.
 */
function normaliseSlots(payload: unknown, notBefore: Date): Slot[] {
  const data = (payload as { data?: unknown })?.data
  if (!data) return []

  const collected: Slot[] = []

  const take = (entry: unknown) => {
    const start = (entry as { start?: unknown })?.start
    if (typeof start === 'string') collected.push({ start })
  }

  if (Array.isArray(data)) {
    data.forEach(take)
  } else if (typeof data === 'object') {
    for (const value of Object.values(data as Record<string, unknown>)) {
      if (Array.isArray(value)) value.forEach(take)
    }
  }

  /* Belt and braces on the notice period, and a stable order. */
  const floor = notBefore.getTime()
  return collected
    .filter((slot) => {
      const time = Date.parse(slot.start)
      return Number.isFinite(time) && time >= floor
    })
    .sort((a, b) => a.start.localeCompare(b.start))
}

/* ---------------------------------------------------------------------------
   Booking.
   ------------------------------------------------------------------------ */

export interface BookingRequest {
  start: string
  name: string
  email: string
  timeZone: string
  /** Free-text context from the visitor. Optional. */
  notes?: string
  organisation?: string
  /** Locale, so Cal.com sends the confirmation in the right language. */
  language?: string
}

export async function createBooking(
  request: BookingRequest,
): Promise<BookingResult> {
  const config = bookingConfig()
  if (!config) {
    return {
      ok: false,
      reason: 'unconfigured',
      message: 'Booking is not configured.',
    }
  }

  /* Re-check the notice period server-side. The client already filters, but
     the client is not a security boundary and this endpoint is public. */
  const requested = Date.parse(request.start)
  if (!Number.isFinite(requested)) {
    return { ok: false, reason: 'invalid', message: 'Invalid start time.' }
  }
  if (requested < earliestBookable().getTime()) {
    return {
      ok: false,
      reason: 'invalid',
      message: 'That time is inside the minimum notice period.',
    }
  }

  let response: Response
  try {
    response = await fetch(`${CAL_API_BASE}/bookings`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
        'cal-api-version': CAL_BOOKINGS_API_VERSION,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        start: new Date(requested).toISOString(),
        eventTypeId: config.eventTypeId,
        attendee: {
          name: request.name,
          email: request.email,
          timeZone: request.timeZone,
          language: request.language ?? 'en',
        },
        /* Cal.com maps these onto the event type's booking fields and
           includes them in both confirmation emails. */
        bookingFieldsResponses: {
          ...(request.organisation ? { title: request.organisation } : {}),
          ...(request.notes ? { notes: request.notes } : {}),
        },
      }),
      cache: 'no-store',
    })
  } catch {
    return {
      ok: false,
      reason: 'upstream',
      message: 'Could not reach the calendar.',
    }
  }

  if (response.status === 409) {
    /* Doc §5: prevent double booking. Cal.com is the authority on this — it
       holds the calendar and can reject a race that our slot list, fetched
       seconds earlier, cannot see. */
    return {
      ok: false,
      reason: 'conflict',
      message: 'That time was just taken.',
    }
  }

  if (!response.ok) {
    return {
      ok: false,
      reason: 'upstream',
      message: `Calendar returned ${response.status}.`,
    }
  }

  const payload = (await response.json()) as {
    data?: { uid?: string; start?: string }
  }

  return {
    ok: true,
    uid: payload.data?.uid ?? '',
    start: payload.data?.start ?? new Date(requested).toISOString(),
  }
}
