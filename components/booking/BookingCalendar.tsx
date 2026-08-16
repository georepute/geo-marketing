'use client'

import { useEffect, useMemo, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { useI18n } from '@/lib/i18n/context'
import { cn } from '@/lib/utils/cn'

/* ============================================================================
   BOOKING CALENDAR — requirements doc §5.

   Three steps in one panel: pick a date, pick a time, give us your details.
   Deliberately not an embedded widget — doc §5 asks for the booking
   experience to feel native to the site, so this is our markup, our tokens
   and our type, talking to Cal.com through our own API routes.

   WHAT THIS COMPONENT DOES NOT DO
   It does not decide what is available. Every slot it renders came from the
   server, which got it from the calendar; the component only groups them by
   day. The 48-hour floor is applied server-side before the response is built,
   so an unbookable time is never in the browser to be selected. This is the
   presentation of availability, never the authority on it.

   All times render in the visitor's own zone, resolved from the browser
   rather than assumed, and that zone is sent with the booking so the invite
   lands correctly.
   ========================================================================= */

interface Slot {
  start: string
}

type Phase = 'loading' | 'ready' | 'unconfigured' | 'failed'

export function BookingCalendar({ interest }: { interest?: string }) {
  const { dict, locale, intl } = useI18n()
  const b = dict.briefing

  const [phase, setPhase] = useState<Phase>('loading')
  const [slots, setSlots] = useState<Slot[]>([])
  const [selectedDay, setSelectedDay] = useState<string | null>(null)
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [confirmed, setConfirmed] = useState<string | null>(null)

  /* The browser is the only thing that actually knows this. */
  const timeZone = useMemo(
    () => Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC',
    [],
  )

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const response = await fetch(
          `/api/booking/slots?timeZone=${encodeURIComponent(timeZone)}`,
          { cache: 'no-store' },
        )
        if (cancelled) return

        if (response.status === 503) {
          setPhase('unconfigured')
          return
        }
        if (!response.ok) {
          setPhase('failed')
          return
        }

        const payload = (await response.json()) as { slots?: Slot[] }
        if (cancelled) return

        setSlots(payload.slots ?? [])
        setPhase('ready')
      } catch {
        if (!cancelled) setPhase('failed')
      }
    }

    void load()
    return () => {
      cancelled = true
    }
  }, [timeZone])

  /* Group by local calendar day. Doing this in the visitor's zone rather than
     UTC matters: a 23:00 UTC slot is tomorrow for a good part of the world,
     and grouping by the UTC date would file it under the wrong day. */
  const days = useMemo(() => {
    const dayKey = new Intl.DateTimeFormat('en-CA', {
      timeZone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })

    const grouped = new Map<string, Slot[]>()
    for (const slot of slots) {
      const key = dayKey.format(new Date(slot.start))
      const bucket = grouped.get(key)
      if (bucket) bucket.push(slot)
      else grouped.set(key, [slot])
    }
    return grouped
  }, [slots, timeZone])

  const dayKeys = useMemo(() => [...days.keys()].sort(), [days])

  /* Default to the first day that has anything in it. */
  useEffect(() => {
    if (selectedDay === null && dayKeys.length > 0) {
      setSelectedDay(dayKeys[0]!)
    }
  }, [dayKeys, selectedDay])

  const dayLabel = useMemo(
    () =>
      new Intl.DateTimeFormat(intl, {
        timeZone,
        weekday: 'short',
        day: 'numeric',
        month: 'short',
      }),
    [intl, timeZone],
  )

  const timeLabel = useMemo(
    () => new Intl.DateTimeFormat(intl, { timeZone, hour: '2-digit', minute: '2-digit' }),
    [intl, timeZone],
  )

  /* --- Unconfigured: no API key. Honest fallback, not a broken calendar. */
  if (phase === 'unconfigured' || phase === 'failed') {
    return (
      <div>
        <p className="text-label uppercase text-brand-300">
          {b.scheduleLabel}
        </p>
        <p className="text-h3 text-ink mt-4">{b.unconfiguredTitle}</p>
        <p className="text-body text-ink-2 mt-3">{b.unconfiguredBody}</p>
      </div>
    )
  }

  /* --- Confirmed ------------------------------------------------------- */
  if (confirmed) {
    return (
      <div>
        <p
          className="text-label uppercase"
          style={{ color: 'var(--gr-positive)' }}
        >
          {b.confirmedAdd}
        </p>
        <p className="text-h3 text-ink mt-3">
          {dayLabel.format(new Date(confirmed))},{' '}
          {timeLabel.format(new Date(confirmed))}
        </p>
        <p className="text-h2 text-ink mt-6">{b.confirmedTitle}</p>
        <p className="text-body text-ink-2 mt-3">{b.confirmedBody}</p>
      </div>
    )
  }

  const daySlots = selectedDay ? (days.get(selectedDay) ?? []) : []

  async function submit(form: FormData) {
    if (!selectedSlot) return
    setSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          start: selectedSlot,
          timeZone,
          language: locale,
          name: String(form.get('name') ?? ''),
          email: String(form.get('email') ?? ''),
          organisation: String(form.get('organisation') ?? ''),
          notes:
            [String(form.get('notes') ?? ''), interest ? `Interest: ${interest}` : '']
              .filter(Boolean)
              .join('\n') || undefined,
        }),
      })

      const payload = (await response.json()) as {
        ok?: boolean
        reason?: string
        start?: string
      }

      if (response.ok && payload.ok) {
        setConfirmed(payload.start ?? selectedSlot)
        return
      }

      if (payload.reason === 'conflict') {
        setError(b.errorConflict)
        /* Drop the taken slot so it cannot be chosen again, and send them
           back to the grid rather than leaving them on a dead form. */
        setSlots((current) => current.filter((s) => s.start !== selectedSlot))
        setSelectedSlot(null)
      } else if (payload.reason === 'invalid') {
        setError(b.errorInvalid)
      } else {
        setError(b.errorUpstream)
      }
    } catch {
      setError(b.errorUpstream)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div>
      <p className="text-label uppercase text-brand-300">{b.scheduleLabel}</p>

      {phase === 'loading' ? (
        <p className="text-caption text-ink-3 mt-5">{b.loadingTimes}</p>
      ) : null}

      {phase === 'ready' && !selectedSlot ? (
        <>
          {/* --- Date ------------------------------------------------- */}
          <fieldset className="mt-6">
            <legend className="text-label uppercase text-ink-3">
              {b.pickDate}
            </legend>
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
              {dayKeys.map((key) => {
                const first = days.get(key)![0]!
                const active = key === selectedDay
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSelectedDay(key)}
                    aria-pressed={active}
                    className={cn(
                      'shrink-0 rounded-sm border px-3.5 py-2.5 text-caption',
                      'transition-colors duration-[var(--gr-dur-fast)]',
                      active
                        ? 'border-brand-400 bg-panel text-ink'
                        : 'border-line text-ink-2 hover:border-line-strong hover:text-ink',
                    )}
                  >
                    {dayLabel.format(new Date(first.start))}
                  </button>
                )
              })}
            </div>
          </fieldset>

          {/* --- Time ------------------------------------------------- */}
          <fieldset className="mt-6">
            <legend className="text-label uppercase text-ink-3">
              {b.pickTime}
            </legend>
            {daySlots.length === 0 ? (
              <p className="text-caption text-ink-3 mt-4">{b.noTimes}</p>
            ) : (
              <div className="grid grid-cols-3 gap-2 mt-4">
                {daySlots.map((slot) => (
                  <button
                    key={slot.start}
                    type="button"
                    onClick={() => setSelectedSlot(slot.start)}
                    className={cn(
                      'rounded-sm border border-line px-2 py-2.5 text-caption text-ink-2',
                      'transition-colors duration-[var(--gr-dur-fast)]',
                      'hover:border-brand-400 hover:text-ink',
                    )}
                    data-numeric=""
                  >
                    {timeLabel.format(new Date(slot.start))}
                  </button>
                ))}
              </div>
            )}
          </fieldset>

          <p className="text-caption text-ink-3 mt-5 pt-4 border-t border-line">
            {b.timeZoneNote} — {timeZone}. {b.noticeNote}
          </p>
        </>
      ) : null}

      {/* --- Details --------------------------------------------------- */}
      {selectedSlot ? (
        <form action={submit} className="mt-6">
          <div className="rounded-sm border border-line bg-inset px-4 py-3 flex items-center justify-between gap-3">
            <span className="text-caption text-ink" data-numeric="">
              {dayLabel.format(new Date(selectedSlot))},{' '}
              {timeLabel.format(new Date(selectedSlot))}
            </span>
            <button
              type="button"
              onClick={() => setSelectedSlot(null)}
              className="text-caption text-ink-3 hover:text-ink transition-colors shrink-0"
            >
              {b.back}
            </button>
          </div>

          <div className="mt-5 space-y-4">
            <Field id="gr-booking-name" label={b.nameLabel}>
              <input
                id="gr-booking-name"
                name="name"
                required
                autoComplete="name"
                className={inputClass}
              />
            </Field>

            <Field id="gr-booking-email" label={b.emailLabel}>
              <input
                id="gr-booking-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className={inputClass}
              />
            </Field>

            <Field
              id="gr-booking-org"
              label={b.orgLabel}
              hint={b.optional}
            >
              <input
                id="gr-booking-org"
                name="organisation"
                autoComplete="organization"
                className={inputClass}
              />
            </Field>

            <Field
              id="gr-booking-notes"
              label={b.notesLabel}
              hint={b.optional}
            >
              <textarea
                id="gr-booking-notes"
                name="notes"
                rows={3}
                className={cn(inputClass, 'resize-y')}
              />
            </Field>
          </div>

          {error ? (
            <p
              role="alert"
              className="text-caption mt-5"
              style={{ color: 'var(--gr-critical)' }}
            >
              {error}
            </p>
          ) : null}

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full mt-6"
            disabled={submitting}
          >
            {submitting ? b.submitting : b.submit}
          </Button>
        </form>
      ) : null}

      {/* A conflict returns the visitor to the grid, so the message has to
          render there too rather than only inside the form. */}
      {error && !selectedSlot ? (
        <p
          role="alert"
          className="text-caption mt-5"
          style={{ color: 'var(--gr-critical)' }}
        >
          {error}
        </p>
      ) : null}
    </div>
  )
}

/* ------------------------------------------------------------------------ */

const inputClass = cn(
  'w-full rounded-sm border border-line bg-canvas px-3.5 py-2.5',
  'text-body text-ink placeholder:text-ink-3',
  'focus:border-brand-400 outline-none',
  'transition-colors duration-[var(--gr-dur-fast)]',
)

function Field({
  id,
  label,
  hint,
  children,
}: {
  id: string
  label: string
  hint?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="flex items-baseline justify-between gap-3 mb-2"
      >
        <span className="text-caption text-ink-2">{label}</span>
        {hint ? (
          <span className="text-label uppercase text-ink-3">{hint}</span>
        ) : null}
      </label>
      {children}
    </div>
  )
}
