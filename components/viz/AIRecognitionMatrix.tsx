'use client'

import { ScoreMeter } from '@/components/signal/Indicators'
import { percent } from '@/lib/format'
import { cn } from '@/lib/utils/cn'
import { useT } from '@/lib/i18n/content/client'
import type { EngineMatrixRow } from '@/lib/api/types'

/* ============================================================================
   AI RECOGNITION MATRIX — brief §7 and §16.1.
   "Show where AI understands or fails to understand the business."

   The matrix separates two questions engines answer independently:
     · Does it know WHO the business is?      (recognition, entity, category)
     · Does it put the business FORWARD?      (recommendation presence)

   A high recognition score with zero recommendation presence is the most
   commercially dangerous cell in the grid, and conflating the two is what
   makes conventional AI-visibility tooling shallow.
   ========================================================================= */

function statusFor(row: EngineMatrixRow) {
  if (row.confusion && row.recognitionScore < 30) {
    return { label: 'Not resolved', token: 'var(--gr-critical)' }
  }
  if (row.confusion) {
    return { label: 'Wrong entity', token: 'var(--gr-critical)' }
  }
  return { label: 'Resolved', token: 'var(--gr-positive)' }
}

export function AIRecognitionMatrix({
  rows,
  className,
}: {
  rows: EngineMatrixRow[]
  className?: string
}) {
  const t = useT()
  return (
    <div className={cn('min-w-0', className)}>
      <div className="rounded-md border border-line bg-panel overflow-x-auto">
        <table className="w-full min-w-[46rem]">
          <thead>
            <tr className="text-label uppercase text-ink-3">
              <th className="text-start font-normal p-4">{t('Engine')}</th>
              <th className="text-start font-normal p-4 w-[13rem]">
                {t('Entity understanding')}
              </th>
              <th className="text-start font-normal p-4">
                {t('Category resolved')}
              </th>
              <th className="text-start font-normal p-4">
                {t('Recommendation presence')}
              </th>
              <th className="text-start font-normal p-4">
                {t('What it believes')}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const status = statusFor(row)
              const silent = row.recommendationPresencePct === 0
              return (
                <tr key={row.id} className="border-t border-line align-top">
                  <td className="p-4">
                    <span className="text-body text-ink">{t(row.name)}</span>
                  </td>

                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <ScoreMeter
                        score={row.recognitionScore}
                        tone={row.recognitionScore < 40 ? 'critical' : 'brand'}
                        className="flex-1 min-w-16"
                      />
                      <span
                        className="text-caption text-ink whitespace-nowrap"
                        data-numeric=""
                      >
                        {row.recognitionScore}/100
                      </span>
                    </div>
                  </td>

                  <td className="p-4">
                    <span className="inline-flex items-center gap-2">
                      <span
                        aria-hidden
                        className="size-1.5 rounded-full shrink-0"
                        style={{ background: status.token }}
                      />
                      <span className="text-caption text-ink-2">
                        {t(status.label)}
                      </span>
                    </span>
                  </td>

                  <td className="p-4">
                    <span
                      className="text-data whitespace-nowrap"
                      data-numeric=""
                      style={{
                        color: silent
                          ? 'var(--gr-critical)'
                          : 'var(--gr-text-primary)',
                      }}
                    >
                      {percent(row.recommendationPresencePct)}
                    </span>
                    {silent ? (
                      <span className="block text-label uppercase text-ink-3 mt-1">
                        {t('Never recommends')}
                      </span>
                    ) : null}
                  </td>

                  <td className="p-4">
                    <p className="text-caption text-ink-2">{t(row.understoodAs)}</p>
                    {row.confusion ? (
                      <p
                        className="text-caption mt-2"
                        style={{ color: 'var(--gr-critical)' }}
                      >
                        {t(row.confusion)}
                      </p>
                    ) : null}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <p className="text-caption text-ink-3 mt-3 max-w-3xl">
        {t('Entity understanding and recommendation presence are separate measures. An engine can resolve the business correctly and still never put it forward — recognition is necessary for a recommendation, not sufficient.')}
      </p>
    </div>
  )
}
