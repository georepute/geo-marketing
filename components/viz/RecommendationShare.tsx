'use client'

import { count, percent } from '@/lib/format'
import { cn } from '@/lib/utils/cn'
import { useT } from '@/lib/i18n/content/client'
import type { Competitor } from '@/lib/api/types'

/* ============================================================================
   COMPETITOR RECOMMENDATION MAP — brief §7 and §16.1.
   "Show who captures the recommendation and why."

   The authority column is the argument. Share is the symptom; the number of
   independent sources an engine can cite is the cause, and the two columns
   move together down the table.
   ========================================================================= */

export function RecommendationShare({
  competitors,
  unattributedPct,
  className,
}: {
  competitors: Competitor[]
  unattributedPct: number
  className?: string
}) {
  const ordered = [...competitors].sort(
    (a, b) => b.recommendationSharePct - a.recommendationSharePct,
  )
  const t = useT()
  const maxSources = Math.max(...competitors.map((c) => c.authoritySources))

  return (
    <div className={cn('min-w-0', className)}>
      {/* --- Share bar ------------------------------------------------ */}
      <div
        className="flex h-9 w-full rounded-sm overflow-hidden border border-line"
        role="img"
        aria-label={ordered
          .map((c) => `${t(c.name)} ${c.recommendationSharePct}%`)
          .concat(`${t('Unattributed')} ${unattributedPct}%`)
          .join('. ')}
      >
        {ordered.map((competitor, i) => (
          <span
            key={competitor.id}
            className="h-full transition-opacity duration-[var(--gr-dur-base)]"
            style={{
              width: `${competitor.recommendationSharePct}%`,
              background: competitor.isSelf
                ? 'var(--gr-brand-400)'
                : `color-mix(in oklab, var(--gr-critical) ${88 - i * 14}%, var(--gr-surface-inset))`,
            }}
          />
        ))}
        <span
          className="h-full"
          style={{
            width: `${unattributedPct}%`,
            background: 'var(--gr-surface-inset)',
          }}
        />
      </div>

      <div className="flex flex-wrap gap-x-5 gap-y-2 mt-3">
        {ordered.map((competitor) => (
          <span key={competitor.id} className="inline-flex items-center gap-2">
            <span
              aria-hidden
              className="size-2 rounded-[1px]"
              style={{
                background: competitor.isSelf
                  ? 'var(--gr-brand-400)'
                  : 'var(--gr-critical)',
              }}
            />
            <span className="text-label uppercase text-ink-3">
              {t(competitor.name)}
            </span>
          </span>
        ))}
        <span className="inline-flex items-center gap-2">
          <span
            aria-hidden
            className="size-2 rounded-[1px]"
            style={{ background: 'var(--gr-surface-inset)' }}
          />
          <span className="text-label uppercase text-ink-3">
            {t('Unattributed')}
          </span>
        </span>
      </div>

      {/* --- Detail table --------------------------------------------- */}
      <div className="mt-6 rounded-md border border-line bg-panel overflow-x-auto">
        <table className="w-full min-w-[42rem]">
          <thead>
            <tr className="text-label uppercase text-ink-3">
              <th className="text-start font-normal p-4">{t('Brand')}</th>
              <th className="text-start font-normal p-4">
                {t('Recommendation share')}
              </th>
              <th className="text-start font-normal p-4 w-[12rem]">
                {t('Independent sources')}
              </th>
              <th className="text-start font-normal p-4">
                {t('Strongest stage')}
              </th>
              <th className="text-start font-normal p-4">{t('Why they win')}</th>
            </tr>
          </thead>
          <tbody>
            {ordered.map((competitor) => (
              <tr
                key={competitor.id}
                className="border-t border-line align-top"
                style={
                  competitor.isSelf
                    ? {
                        background:
                          'color-mix(in oklab, var(--gr-brand-500) 8%, transparent)',
                      }
                    : undefined
                }
              >
                <td className="p-4">
                  <span className="text-body text-ink">{t(competitor.name)}</span>
                  {competitor.isSelf ? (
                    <span className="block text-label uppercase text-brand-300 mt-1">
                      {t('You')}
                    </span>
                  ) : null}
                </td>
                <td className="p-4">
                  <span className="text-data text-ink" data-numeric="">
                    {percent(competitor.recommendationSharePct)}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <span
                      className="block h-1 rounded-[1px] bg-inset overflow-hidden flex-1 min-w-12"
                      aria-hidden
                    >
                      <span
                        className="block h-full rounded-[1px]"
                        style={{
                          width: `${(competitor.authoritySources / maxSources) * 100}%`,
                          background: competitor.isSelf
                            ? 'var(--gr-critical)'
                            : 'var(--gr-brand-400)',
                        }}
                      />
                    </span>
                    <span className="text-caption text-ink" data-numeric="">
                      {count(competitor.authoritySources)}
                    </span>
                  </div>
                </td>
                <td className="p-4 text-caption text-ink-2">
                  {t(competitor.strongestStage)}
                </td>
                <td className="p-4 text-caption text-ink-2 max-w-md">
                  {competitor.whyTheyWin ? t(competitor.whyTheyWin) : '—'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
