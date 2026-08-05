import { cn } from '@/lib/utils/cn'
import type { ReadinessDimension, ReadinessStatus } from '@/lib/seed/campaign'

/* ============================================================================
   READINESS PRIMITIVES.

   One status vocabulary, defined once and used by every surface on the
   campaign page: ready / at risk / blocking. Three states rather than a
   continuous colour ramp, because the page exists to support a binary decision
   — launch or do not — and a gradient invites an executive to negotiate with
   the number instead of acting on it.

   Status is always carried by a word as well as a colour. Nothing here relies
   on colour alone.
   ========================================================================= */

export const STATUS_META: Record<
  ReadinessStatus,
  { label: string; token: string; glyph: string }
> = {
  ready: { label: 'Ready', token: 'var(--gr-positive)', glyph: '●' },
  risk: { label: 'At risk', token: 'var(--gr-warning)', glyph: '◐' },
  blocking: { label: 'Blocking', token: 'var(--gr-critical)', glyph: '▲' },
}

export function StatusChip({
  status,
  className,
}: {
  status: ReadinessStatus
  className?: string
}) {
  const meta = STATUS_META[status]
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-xs border px-2 py-1 shrink-0',
        className,
      )}
      style={{
        borderColor: `color-mix(in oklab, ${meta.token} 40%, transparent)`,
        background: `color-mix(in oklab, ${meta.token} 10%, transparent)`,
      }}
    >
      <span
        aria-hidden
        className="text-[0.65em] leading-none"
        style={{ color: meta.token }}
      >
        {meta.glyph}
      </span>
      <span className="text-label uppercase text-ink-2">{meta.label}</span>
    </span>
  )
}

/**
 * A score bar with the readiness thresholds marked on it.
 *
 * The threshold ticks are the point: a bare bar says "40" and a bar with the
 * gates drawn on it says "40, and the gate is at 70". The second is the one
 * that ends an argument about whether the number is good enough.
 */
export function ReadinessBar({
  score,
  status,
  thresholds,
  className,
}: {
  score: number
  status: ReadinessStatus
  thresholds: { ready: number; risk: number }
  className?: string
}) {
  return (
    <div
      className={cn('relative h-2 rounded-xs bg-inset overflow-hidden', className)}
      role="img"
      aria-label={`${score} of 100 — ${STATUS_META[status].label}. Ready at ${thresholds.ready}.`}
    >
      <div
        className="absolute inset-y-0 start-0 rounded-xs"
        style={{ width: `${score}%`, background: STATUS_META[status].token }}
      />
      {[thresholds.risk, thresholds.ready].map((tick) => (
        <span
          key={tick}
          aria-hidden
          className="absolute inset-y-0 w-px"
          style={{
            insetInlineStart: `${tick}%`,
            background: 'var(--gr-text-tertiary)',
            opacity: 0.55,
          }}
        />
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------------ */

export function DimensionPanel({
  dimension,
  thresholds,
  isConstraint,
}: {
  dimension: ReadinessDimension
  thresholds: { ready: number; risk: number }
  isConstraint: boolean
}) {
  return (
    <section
      className="rounded-md border bg-panel overflow-hidden"
      style={{
        borderColor: isConstraint
          ? 'color-mix(in oklab, var(--gr-critical) 45%, transparent)'
          : 'var(--gr-line-subtle)',
      }}
    >
      {/* --- Header ------------------------------------------------- */}
      <div className="p-5 md:p-6 border-b border-line">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-h3 text-ink">{dimension.label}</h3>
              {isConstraint ? (
                <span
                  className="text-label uppercase"
                  style={{ color: 'var(--gr-critical)' }}
                >
                  Primary constraint
                </span>
              ) : null}
            </div>
            <p className="text-caption text-ink-2 mt-2">{dimension.question}</p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <StatusChip status={dimension.status} />
            <p className="text-data-lg text-ink" data-numeric="">
              {dimension.score}
              <span className="text-body text-ink-3">/100</span>
            </p>
          </div>
        </div>

        <ReadinessBar
          score={dimension.score}
          status={dimension.status}
          thresholds={thresholds}
          className="mt-4"
        />
        <p className="text-label uppercase text-ink-3 mt-2" data-numeric="">
          {Math.round(dimension.weight * 100)}% of the readiness index
        </p>
      </div>

      {/* --- Measures ------------------------------------------------ */}
      <ul className="grid gap-px bg-line sm:grid-cols-2 xl:grid-cols-3">
        {dimension.measures.map((m) => (
          <li key={m.label} className="bg-panel p-5">
            <div className="flex items-baseline justify-between gap-3">
              <p className="text-label uppercase text-ink-3">{m.label}</p>
              <span
                aria-hidden
                className="text-[0.65em] leading-none shrink-0"
                style={{ color: STATUS_META[m.status].token }}
              >
                {STATUS_META[m.status].glyph}
              </span>
            </div>

            <p className="text-body text-ink mt-3" data-numeric="">
              {m.value}
            </p>
            <p className="sr-only">{STATUS_META[m.status].label}</p>
            <p className="text-caption text-ink-2 mt-3">{m.meaning}</p>
          </li>
        ))}
      </ul>

      {/* --- The cost of ignoring it -------------------------------- */}
      <div
        className="p-5 md:p-6 border-t border-line"
        style={{
          background:
            dimension.status === 'blocking'
              ? 'color-mix(in oklab, var(--gr-critical) 6%, transparent)'
              : undefined,
        }}
      >
        <p className="text-label uppercase text-ink-3">If you launch anyway</p>
        <p className="text-caption text-ink-2 mt-2 max-w-3xl">
          {dimension.ifIgnored}
        </p>
      </div>
    </section>
  )
}
