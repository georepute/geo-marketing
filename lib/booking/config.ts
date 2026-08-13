/* ============================================================================
   BOOKING CONFIGURATION — requirements doc §5.

   Cal.com holds the calendar. It owns availability, conflict prevention and
   the confirmation emails to both the visitor and the host, which are three
   of the six requirements in §5 and the three that are genuinely hard to get
   right from scratch. We own the interface, so the experience stays native
   to this site rather than an obvious embed.

   NO SECRETS IN THIS REPOSITORY. The API key is server-only and read from the
   environment. It is deliberately NOT prefixed NEXT_PUBLIC_, so it cannot be
   inlined into a browser bundle even by accident.

   UNTIL THE KEY EXISTS the booking surface reports itself unconfigured and
   the page falls back to a request form. That is a visible, honest state
   rather than a calendar that throws when someone tries to use it.
   ========================================================================= */

/** Minimum notice, doc §5: "at least 48 hours from the current time". */
export const MIN_NOTICE_HOURS = 48

/** How far ahead to offer. Beyond this, availability is guesswork. */
export const BOOKING_WINDOW_DAYS = 30

/**
 * Cal.com pins breaking changes to a dated version header rather than a path
 * segment, and the two endpoints we use are on different dates. Both are
 * overridable so a Cal.com upgrade does not require a code change.
 */
export const CAL_SLOTS_API_VERSION =
  process.env.CAL_SLOTS_API_VERSION ?? '2024-09-04'
export const CAL_BOOKINGS_API_VERSION =
  process.env.CAL_BOOKINGS_API_VERSION ?? '2024-08-13'

export const CAL_API_BASE = process.env.CAL_API_BASE ?? 'https://api.cal.com/v2'

export interface BookingConfig {
  apiKey: string
  eventTypeId: number
}

/**
 * Server-side configuration, or `null` when the credentials are absent.
 *
 * Returning null rather than throwing is deliberate: an unconfigured site
 * should degrade to a request form, not to a 500.
 */
export function bookingConfig(): BookingConfig | null {
  const apiKey = process.env.CAL_API_KEY?.trim()
  const rawEventType = process.env.CAL_EVENT_TYPE_ID?.trim()

  if (!apiKey || !rawEventType) return null

  const eventTypeId = Number.parseInt(rawEventType, 10)
  if (!Number.isFinite(eventTypeId)) return null

  return { apiKey, eventTypeId }
}

/**
 * Whether booking is live.
 *
 * Exposed to the client through the page, not through a NEXT_PUBLIC_ variable
 * — the client only ever learns the boolean, never the credentials.
 */
export function isBookingConfigured(): boolean {
  return bookingConfig() !== null
}

/** The earliest instant a visitor may book. */
export function earliestBookable(now: Date = new Date()): Date {
  return new Date(now.getTime() + MIN_NOTICE_HOURS * 60 * 60 * 1000)
}

/** The end of the offered window. */
export function latestBookable(now: Date = new Date()): Date {
  return new Date(now.getTime() + BOOKING_WINDOW_DAYS * 24 * 60 * 60 * 1000)
}
