import { count, dateFull, daysUntil } from '@/lib/format'
import { copy } from '@/lib/copy/en'
import type { OrgSummary } from '@/lib/api/types'

/* ============================================================================
   STRATEGIC WINDOW.

   Product direction: "Rename Decision Deadline to Strategic Window or
   Advantage Window. Always explain why the timing estimate exists."

   Both halves of that instruction matter. "Decision deadline" is a date an
   executive has no reason to believe — it reads as manufactured scarcity, and
   a fabricated deadline poisons every honest number beside it. A window is a
   market condition, and a market condition can be evidenced.

   So the estimate never appears alone. The three observations that produce it
   sit directly underneath, and the second panel states in plain terms what
   changes when the window shuts: not that the opportunity vanishes, but that
   the price of the same result goes up because the incumbent answer has to be
   displaced rather than merely joined.
   ========================================================================= */

function position(iso: string, start: number, span: number): number {
  const at = ((new Date(iso).getTime() - start) / span) * 100
  return Math.min(Math.max(at, 0), 100)
}

export function StrategicWindow({
  timing,
  asOf,
  evidence,
}: {
  timing: OrgSummary['timing']
  /** Observation date. Injected so the rendering stays deterministic. */
  asOf: string
  /** Why the estimate exists — the observations behind it. */
  evidence: { subject: string; observation: string }[]
}) {
  const start = new Date(timing.windowOpenedAt).getTime()
  const span = new Date(timing.windowClosesAt).getTime() - start

  const now = position(asOf, start, span)
  const advantage = position(timing.decisionDeadline, start, span)
  const daysOfAdvantage = daysUntil(timing.decisionDeadline, new Date(asOf))

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
      {/* --- The window itself ---------------------------------------- */}
      <div className="rounded-md border border-line bg-panel p-6 md:p-8">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <p className="text-label uppercase text-ink-3">
            {copy.exec.windowLabel} — {timing.positionLabel} market
          </p>
          <p className="text-caption text-ink-2" data-numeric="">
            {timing.windowMonths} months open
          </p>
        </div>

        <p className="text-display-2 text-ink mt-4">
          <span data-numeric="">{count(daysOfAdvantage)}</span> days of
          advantage remain
        </p>
        <p className="text-body text-ink-2 mt-3 max-w-prose">
          After{' '}
          <span className="text-ink" data-numeric="">
            {dateFull(timing.decisionDeadline)}
          </span>
          , the same position still exists — it just has to be taken from an
          incumbent recommendation rather than claimed from open ground.
        </p>

        {/* --- Timeline ---------------------------------------------- */}
        <div className="mt-10">
          <div className="relative h-2 rounded-xs bg-inset overflow-hidden">
            {/* Elapsed */}
            <div
              className="absolute inset-y-0 start-0 rounded-xs"
              style={{
                width: `${now}%`,
                background: 'var(--gr-line-strong)',
              }}
            />
            {/* Advantage remaining — the segment that is actually scarce. */}
            <div
              className="absolute inset-y-0 rounded-xs"
              style={{
                insetInlineStart: `${now}%`,
                width: `${Math.max(advantage - now, 0)}%`,
                background: 'var(--gr-positive)',
              }}
            />
            {/* Displacement-cost period */}
            <div
              className="absolute inset-y-0 rounded-xs"
              style={{
                insetInlineStart: `${advantage}%`,
                width: `${Math.max(100 - advantage, 0)}%`,
                background:
                  'color-mix(in oklab, var(--gr-critical) 45%, transparent)',
              }}
            />
          </div>

          {/* Today marker */}
          <div className="relative h-6">
            <span
              aria-hidden
              className="absolute top-0 h-3 w-px bg-ink"
              style={{ insetInlineStart: `${now}%` }}
            />
            <span
              className="absolute top-3.5 text-label uppercase text-ink -translate-x-1/2 whitespace-nowrap"
              style={{ insetInlineStart: `${now}%` }}
            >
              Today
            </span>
          </div>

          <dl className="grid gap-px bg-line border border-line rounded-sm overflow-hidden mt-6 sm:grid-cols-3">
            <Marker
              label="Window opened"
              value={dateFull(timing.windowOpenedAt)}
              note="Category language began forming."
            />
            <Marker
              label="Advantage holds until"
              value={dateFull(timing.decisionDeadline)}
              note="Authority built before this becomes the default answer."
              tone="positive"
            />
            <Marker
              label="Window closes"
              value={dateFull(timing.windowClosesAt)}
              note="Displacement cost rises materially."
              tone="critical"
            />
          </dl>
        </div>
      </div>

      {/* --- Why the estimate exists ---------------------------------- */}
      <div className="rounded-md border border-line bg-panel p-6 md:p-8">
        <p className="text-label uppercase text-ink-3">
          Why this estimate exists
        </p>
        <p className="text-body text-ink-2 mt-4">
          {copy.exec.strategicWindowDefinition}
        </p>

        <ul className="mt-6 grid gap-4 border-t border-line pt-6">
          {evidence.map((item) => (
            <li key={item.subject}>
              <p className="text-caption text-ink">{item.subject}</p>
              <p className="text-caption text-ink-3 mt-1">{item.observation}</p>
            </li>
          ))}
        </ul>

        <p className="text-caption text-ink-3 mt-6 pt-6 border-t border-line">
          Market readiness reads{' '}
          <span className="text-ink-2" data-numeric="">
            {timing.marketReadiness} of 100
          </span>
          . Buyers are educated. The answers they receive are not yet fixed.
        </p>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------------ */

function Marker({
  label,
  value,
  note,
  tone,
}: {
  label: string
  value: string
  note: string
  tone?: 'positive' | 'critical'
}) {
  return (
    <div className="bg-panel p-4">
      <p
        className="text-label uppercase"
        style={{
          color:
            tone === 'positive'
              ? 'var(--gr-positive)'
              : tone === 'critical'
                ? 'var(--gr-critical)'
                : 'var(--gr-text-tertiary)',
        }}
      >
        {label}
      </p>
      <p className="text-caption text-ink mt-2" data-numeric="">
        {value}
      </p>
      <p className="text-caption text-ink-3 mt-2">{note}</p>
    </div>
  )
}
