import { NextResponse, type NextRequest } from 'next/server'
import { fetchSlots } from '@/lib/booking/cal'
import { MIN_NOTICE_HOURS } from '@/lib/booking/config'

/* ============================================================================
   GET /api/booking/slots?timeZone=Europe/London

   Availability, already filtered to the bookable window. The 48-hour floor is
   applied before the response is built, so a slot inside the notice period is
   never sent to a browser at all.
   ========================================================================= */

/** Availability is live state — never prerender or cache this route. */
export const dynamic = 'force-dynamic'

/** IANA zone names: letters, digits, +, -, _, / and . only. */
const TIME_ZONE = /^[A-Za-z0-9+\-_/.]{1,64}$/

export async function GET(request: NextRequest) {
  const requested = request.nextUrl.searchParams.get('timeZone') ?? 'UTC'
  const timeZone = TIME_ZONE.test(requested) ? requested : 'UTC'

  const result = await fetchSlots(timeZone)

  if (!result.ok) {
    /* `unconfigured` is a 503 rather than a 500: the site is working, the
       calendar simply is not connected yet, and the UI renders its fallback
       on exactly this signal. */
    const status = result.reason === 'unconfigured' ? 503 : 502
    return NextResponse.json(
      { ok: false, reason: result.reason, message: result.message },
      { status, headers: { 'Cache-Control': 'no-store' } },
    )
  }

  return NextResponse.json(
    {
      ok: true,
      timeZone,
      minNoticeHours: MIN_NOTICE_HOURS,
      slots: result.slots,
    },
    { headers: { 'Cache-Control': 'no-store' } },
  )
}
