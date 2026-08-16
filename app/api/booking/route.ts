import { NextResponse, type NextRequest } from 'next/server'
import { z } from 'zod'
import { createBooking } from '@/lib/booking/cal'

/* ============================================================================
   POST /api/booking

   Takes a slot. Cal.com performs the authoritative conflict check — it holds
   the calendar and can reject a race that the slot list, fetched seconds
   earlier, cannot see — and sends the confirmation to both the visitor and
   the host (doc §5).

   This is a public endpoint, so every field is validated here rather than
   trusted from the form.
   ========================================================================= */

export const dynamic = 'force-dynamic'

const BookingBody = z.object({
  start: z.string().min(1).max(64),
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  timeZone: z.string().trim().min(1).max(64),
  organisation: z.string().trim().max(160).optional(),
  notes: z.string().trim().max(2000).optional(),
  language: z.string().trim().max(12).optional(),
})

export async function POST(request: NextRequest) {
  let payload: unknown
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json(
      { ok: false, reason: 'invalid', message: 'Malformed request.' },
      { status: 400 },
    )
  }

  const parsed = BookingBody.safeParse(payload)
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        reason: 'invalid',
        message: 'Please check the details and try again.',
      },
      { status: 400 },
    )
  }

  const result = await createBooking(parsed.data)

  if (!result.ok) {
    const status =
      result.reason === 'conflict'
        ? 409
        : result.reason === 'invalid'
          ? 400
          : result.reason === 'unconfigured'
            ? 503
            : 502

    return NextResponse.json(
      { ok: false, reason: result.reason, message: result.message },
      { status, headers: { 'Cache-Control': 'no-store' } },
    )
  }

  return NextResponse.json(
    { ok: true, uid: result.uid, start: result.start },
    { headers: { 'Cache-Control': 'no-store' } },
  )
}
