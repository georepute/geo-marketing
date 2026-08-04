import { cn } from '@/lib/utils/cn'
import type { Trend, Urgency, Effort } from '@/lib/seed/types'

/* ============================================================================
   Small status indicators. Every one pairs a glyph with a word so meaning is
   never carried by colour alone (§16 accessibility, plan §5.1).
   ========================================================================= */

const TREND_META: Record<Trend, { glyph: string; label: string; token: string }> = {
  improving: { glyph: '▲', label: 'Improving', token: 'var(--gr-positive)' },
  stable: { glyph: '■', label: 'Stable', token: 'var(--gr-neutral)' },
  deteriorating: { glyph: '▼', label: 'Deteriorating', token: 'var(--gr-critical)' },
}

export function TrendChip({ trend, className }: { trend: Trend; className?: string }) {
  const m = TREND_META[trend]
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-xs border border-line bg-inset px-2 py-1',
        className,
      )}
    >
      <span aria-hidden className="text-[0.65em] leading-none" style={{ color: m.token }}>
        {m.glyph}
      </span>
      <span className="text-label uppercase text-ink-2">{m.label}</span>
    </span>
  )
}

/* ----------------------------------------------------------------------- */

const URGENCY_META: Record<Urgency, { label: string; token: string }> = {
  immediate: { label: 'Immediate', token: 'var(--gr-critical)' },
  'this-quarter': { label: 'This quarter', token: 'var(--gr-warning)' },
  monitor: { label: 'Monitor', token: 'var(--gr-neutral)' },
}

export function UrgencyChip({
  urgency,
  className,
}: {
  urgency: Urgency
  className?: string
}) {
  const m = URGENCY_META[urgency]
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-xs border px-2 py-1',
        className,
      )}
      style={{
        borderColor: `color-mix(in oklab, ${m.token} 40%, transparent)`,
        background: `color-mix(in oklab, ${m.token} 10%, transparent)`,
      }}
    >
      <span aria-hidden className="size-1.5 rounded-full" style={{ background: m.token }} />
      <span className="text-label uppercase text-ink-2">{m.label}</span>
    </span>
  )
}

/* ----------------------------------------------------------------------- */

const EFFORT_FILLED: Record<Effort, number> = { low: 1, medium: 2, high: 3 }

export function EffortMeter({ effort, className }: { effort: Effort; className?: string }) {
  const filled = EFFORT_FILLED[effort]
  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <span aria-hidden className="inline-flex gap-1">
        {[1, 2, 3].map((i) => (
          <span
            key={i}
            className="block h-2.5 w-1 rounded-[1px]"
            style={{
              background:
                i <= filled ? 'var(--gr-brand-400)' : 'var(--gr-line-strong)',
            }}
          />
        ))}
      </span>
      <span className="text-label uppercase text-ink-2 capitalize">{effort} effort</span>
    </span>
  )
}

/* ----------------------------------------------------------------------- */

/** A 0–100 score with a hairline meter. Used for GEON and readiness figures. */
export function ScoreMeter({
  score,
  max = 100,
  tone = 'brand',
  className,
}: {
  score: number
  max?: number
  tone?: 'brand' | 'critical' | 'positive'
  className?: string
}) {
  const pct = Math.max(0, Math.min(100, (score / max) * 100))
  const token = {
    brand: 'var(--gr-brand-400)',
    critical: 'var(--gr-critical)',
    positive: 'var(--gr-positive)',
  }[tone]

  return (
    <span
      className={cn('block h-1 w-full rounded-[1px] bg-inset overflow-hidden', className)}
      role="img"
      aria-label={`${score} out of ${max}`}
    >
      <span
        className="block h-full rounded-[1px] transition-[width] duration-[var(--gr-dur-reveal)] ease-(--ease-enter)"
        style={{ width: `${pct}%`, background: token }}
      />
    </span>
  )
}

/* ----------------------------------------------------------------------- */

/** Relationship marker used in the Connected Signals section. */
export function RelationshipTag({
  relationship,
}: {
  relationship: 'supporting' | 'downstream'
}) {
  const isSupporting = relationship === 'supporting'
  return (
    <span className="inline-flex items-center gap-1 text-label uppercase text-ink-3">
      <span aria-hidden>{isSupporting ? '↑' : '↓'}</span>
      {isSupporting ? 'Supporting' : 'Downstream'}
    </span>
  )
}
