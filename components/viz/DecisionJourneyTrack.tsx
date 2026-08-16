'use client'

import { cn } from '@/lib/utils/cn'
import { useT } from '@/lib/i18n/content/client'
import { count, percent, percentWhole } from '@/lib/format'
import type { StageCoverage } from '@/lib/api/types'

/* ============================================================================
   THE DECISION JOURNEY — brief §5 Market Disruption.

   "Show the five-stage decision journey. Overlay which tools can see each
   stage and where GeoRepute creates visibility."

   This is the single most important visual on the home page, because it is the
   one that proves the category claim. The overlay is the argument: conventional
   tooling begins observing at stage four, and only after the decision has
   already narrowed.
   ========================================================================= */

const TOOL_ROWS = [
  {
    name: 'Analytics and CRM',
    note: 'Requires a visit, form or record to exist',
    seesFrom: 5,
    isUs: false,
  },
  {
    name: 'SEO platforms',
    note: 'Requires a tracked query with search volume',
    seesFrom: 4,
    isUs: false,
  },
  {
    name: 'GeoRepute',
    note: 'Observes the decision itself, at every stage',
    seesFrom: 1,
    isUs: true,
  },
] as const

export function DecisionJourneyTrack({
  stages,
  className,
}: {
  stages: StageCoverage[]
  className?: string
}) {
  const t = useT()
  const ordered = [...stages].sort((a, b) => a.order - b.order)
  const totalVolume = ordered.reduce((s, x) => s + x.monthlyVolume, 0)

  return (
    <div className={cn('min-w-0', className)}>
      <div className="overflow-x-auto -mx-1 px-1">
        <div className="min-w-[46rem]">
          {/* --- Stage headers ------------------------------------------ */}
          <div
            className="grid gap-2"
            style={{ gridTemplateColumns: `13rem repeat(${ordered.length}, 1fr)` }}
          >
            <div />
            {ordered.map((stage) => {
              const invisible = stage.observableBy.length === 0
              return (
                <div key={stage.id} className="min-w-0">
                  <p className="text-label uppercase text-ink-3">
                    {t('Stage {n}', { n: stage.order })}
                  </p>
                  <p className="text-caption text-ink mt-1 leading-tight">
                    {stage.label}
                  </p>
                  <p
                    className="text-caption text-ink-3 mt-2"
                    data-numeric=""
                  >
                    {t('{volume}/mo · {share}', {
                      volume: count(stage.monthlyVolume),
                      share: percent(
                        (stage.monthlyVolume / totalVolume) * 100,
                      ),
                    })}
                  </p>
                  <p
                    className="text-caption mt-1"
                    data-numeric=""
                    style={{
                      color: invisible
                        ? 'var(--gr-critical)'
                        : 'var(--gr-text-tertiary)',
                    }}
                  >
                    {t('{pct} coverage', {
                      pct: percentWhole(stage.coveragePct),
                    })}
                  </p>
                </div>
              )
            })}
          </div>

          {/* --- Tool coverage overlay ---------------------------------- */}
          <div className="mt-5 space-y-2">
            {TOOL_ROWS.map((tool) => (
              <div
                key={tool.name}
                className="grid gap-2 items-center"
                style={{
                  gridTemplateColumns: `13rem repeat(${ordered.length}, 1fr)`,
                }}
              >
                <div className="pe-4 min-w-0">
                  <p
                    className="text-caption leading-tight"
                    style={{
                      color: tool.isUs
                        ? 'var(--gr-brand-300)'
                        : 'var(--gr-text-secondary)',
                    }}
                  >
                    {t(tool.name)}
                  </p>
                  <p className="text-label uppercase text-ink-3 mt-1 leading-tight">
                    {t(tool.note)}
                  </p>
                </div>

                {ordered.map((stage) => {
                  const visible = stage.order >= tool.seesFrom
                  return (
                    <div key={stage.id} className="h-9 relative">
                      <span
                        className={cn(
                          'absolute inset-0 rounded-sm border',
                          'transition-colors duration-[var(--gr-dur-base)]',
                        )}
                        style={
                          visible
                            ? tool.isUs
                              ? {
                                  borderColor:
                                    'color-mix(in oklab, var(--gr-brand-400) 55%, transparent)',
                                  background:
                                    'color-mix(in oklab, var(--gr-brand-400) 16%, transparent)',
                                }
                              : {
                                  borderColor: 'var(--gr-line-strong)',
                                  background: 'var(--gr-surface-inset)',
                                }
                            : {
                                borderColor: 'var(--gr-line-subtle)',
                                background: 'transparent',
                                borderStyle: 'dashed',
                              }
                        }
                      />
                      <span className="absolute inset-0 grid place-items-center">
                        <span
                          className="text-label uppercase"
                          style={{
                            color: visible
                              ? tool.isUs
                                ? 'var(--gr-brand-300)'
                                : 'var(--gr-text-secondary)'
                              : 'var(--gr-text-tertiary)',
                          }}
                        >
                          {visible ? t('Visible') : t('Blind')}
                        </span>
                      </span>
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- The conclusion, stated plainly -------------------------- */}
      <div
        className="mt-6 rounded-md border p-5"
        style={{
          borderColor: 'color-mix(in oklab, var(--gr-critical) 30%, transparent)',
          background: 'color-mix(in oklab, var(--gr-critical) 6%, transparent)',
        }}
      >
        <p className="text-label uppercase text-ink-3">
          {t('Executive conclusion')}
        </p>
        <p className="text-body-lg text-ink mt-2 max-w-3xl text-balance">
          {t('Conventional tooling begins observing at stage four — after the buyer has already decided what to buy and is choosing whom to buy it from.')}
        </p>
        <p className="text-caption text-ink-2 mt-3 max-w-3xl">
          {t('The first three stages generate no visit, click, lead or CRM record. They are not measured badly; they are not measured at all.')}
        </p>
      </div>
    </div>
  )
}
