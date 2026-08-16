'use client'

import { ConfidenceBadge } from '@/components/signal/ConfidenceBadge'
import { UrgencyChip, EffortMeter } from '@/components/signal/Indicators'
import { Button } from '@/components/ui/Button'
import { dateFull } from '@/lib/format'
import { useT } from '@/lib/i18n/content/client'
import { useI18n } from '@/lib/i18n/context'
import { cn } from '@/lib/utils/cn'
import type { Action } from '@/lib/seed/types'

/* ============================================================================
   Action card — brief §7 Action Intelligence.

   All eleven required fields render: action, reason, evidence, expected impact,
   confidence, urgency, effort, owner, deadline, success metric and measured
   change. "The platform does not end with insight" (§19) is only true if every
   one of them is present, so none is optional.
   ========================================================================= */

export function ActionCard({
  action: a,
  rank,
  onOpenEvidence,
  className,
}: {
  action: Action
  rank?: number
  onOpenEvidence?: (readoutId: string) => void
  className?: string
}) {
  const t = useT()
  const { intl } = useI18n()
  return (
    <article
      className={cn(
        'rounded-md border border-line bg-panel overflow-hidden',
        className,
      )}
    >
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-3">
          {typeof rank === 'number' ? (
            <span
              className="grid place-items-center size-6 rounded-xs bg-brand-700 text-ink text-label"
              data-numeric=""
              aria-label={t('Priority {n}', { n: rank })}
            >
              {rank}
            </span>
          ) : null}
          <UrgencyChip urgency={a.urgency} />
          <ConfidenceBadge confidence={a.confidence} />
          <span className="text-label uppercase text-ink-3 ms-auto" data-numeric="">
            {t('{n}-day', { n: a.horizon })}
          </span>
        </div>

        {/* Action */}
        <h3 className="text-h3 text-ink mt-4 text-balance">{a.action}</h3>

        {/* Reason */}
        <p className="text-caption text-ink-2 mt-3 max-w-prose">{a.reason}</p>
      </div>

      {/* Impact · effort · owner · deadline */}
      <div className="grid gap-px bg-line border-t border-line sm:grid-cols-2 lg:grid-cols-4">
        <Cell label={t('Expected impact')}>
          <span className="text-caption text-ink" data-numeric="">
            {a.expectedImpact}
          </span>
        </Cell>
        <Cell label={t('Effort')}>
          <EffortMeter effort={a.effort} />
        </Cell>
        <Cell label={t('Owner')}>
          <span className="text-caption text-ink">{a.owner}</span>
        </Cell>
        <Cell label={t('Deadline')}>
          <span className="text-caption text-ink" data-numeric="">
            {dateFull(a.deadline, intl)}
          </span>
        </Cell>
      </div>

      {/* Success metric + measured change */}
      <div className="p-5 border-t border-line flex flex-wrap items-end justify-between gap-4">
        <div className="min-w-0">
          <p className="text-label uppercase text-ink-3">{t('Success metric')}</p>
          <p className="text-caption text-ink mt-2" data-numeric="">
            {a.successMetric}
          </p>
          <p className="text-label uppercase text-ink-3 mt-4">
            {t('Measured change')}
          </p>
          <p className="text-caption text-ink-2 mt-2">
            {a.measuredChange ?? t('Not yet measured — verified after execution.')}
          </p>
        </div>

        {onOpenEvidence ? (
          <Button
            size="sm"
            variant="secondary"
            onClick={() => onOpenEvidence(a.evidenceRef)}
          >
            {t('View evidence')}
          </Button>
        ) : null}
      </div>
    </article>
  )
}

function Cell({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="bg-panel p-4">
      <p className="text-label uppercase text-ink-3">{label}</p>
      <div className="mt-2">{children}</div>
    </div>
  )
}
