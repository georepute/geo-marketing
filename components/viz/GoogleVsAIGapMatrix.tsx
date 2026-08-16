'use client'

import { cn } from '@/lib/utils/cn'
import { useT } from '@/lib/i18n/content/client'
import type { Translate } from '@/lib/i18n/content/format'
import { count } from '@/lib/format'
import type { GapRow } from '@/lib/api/types'

/* ============================================================================
   GOOGLE vs AI GAP MATRIX — brief §5 and §16.1.

   "Use a side-by-side matrix: Google visibility, AI recognition, AI
   recommendation, gap classification, recoverable search opportunity and
   compound blind spot. Show one executive conclusion before technical detail."

   The two surfaces are presented as separate commercial assets, because that
   is the point: strength on one says nothing about the other.
   ========================================================================= */

const GAP_TOKEN: Record<string, string> = {
  aligned: 'var(--gr-positive)',
  'partial-ai-visibility': 'var(--gr-info)',
  'recoverable-search': 'var(--gr-warning)',
  'strategic-blind-spot': 'var(--gr-critical)',
  'compound-blind-spot': 'var(--gr-critical)',
}

function googleState(
  position: number | null,
  t: Translate,
): { label: string; strong: boolean } {
  if (position === null) return { label: t('Not in top 100'), strong: false }
  return {
    label: t('Position {n}', { n: position }),
    strong: position <= 3,
  }
}

export function GoogleVsAIGapMatrix({
  rows,
  limit,
  className,
}: {
  rows: GapRow[]
  limit?: number
  className?: string
}) {
  const t = useT()
  const shown = limit ? rows.slice(0, limit) : rows
  const compound = rows.filter((r) => r.gap === 'compound-blind-spot').length
  const recoverable = rows.filter((r) => r.gap === 'recoverable-search').length
  const aligned = rows.filter((r) => r.gap === 'aligned').length

  return (
    <div className={cn('min-w-0', className)}>
      {/* --- Executive conclusion, before any detail (§5) ------------- */}
      <div className="grid gap-px bg-line border border-line rounded-md overflow-hidden sm:grid-cols-3 mb-6">
        <Summary
          value={`${compound}`}
          total={rows.length}
          label={t('Compound blind spots')}
          note={t('Absent from both surfaces on high-value questions. The most expensive class of gap.')}
          tone="critical"
        />
        <Summary
          value={`${recoverable}`}
          total={rows.length}
          label={t('Recoverable search')}
          note={t('Ranking in Google but absent from AI answers. Existing authority is not reaching the AI surface.')}
          tone="warning"
        />
        <Summary
          value={`${aligned}`}
          total={rows.length}
          label={t('Aligned')}
          note={t('Visible in Google and recommended by AI. No action required.')}
          tone="positive"
        />
      </div>

      {/* --- The matrix ---------------------------------------------- */}
      <div className="rounded-md border border-line bg-panel overflow-x-auto">
        <table className="w-full min-w-[44rem]">
          <thead>
            <tr className="text-label uppercase text-ink-3">
              <th className="text-start font-normal p-4">
                {t('Commercial question')}
              </th>
              <th className="text-start font-normal p-4">{t('Volume')}</th>
              <th className="text-start font-normal p-4">
                {t('Google visibility')}
              </th>
              <th className="text-start font-normal p-4">
                {t('AI recommendation')}
              </th>
              <th className="text-start font-normal p-4">
                {t('Classification')}
              </th>
            </tr>
          </thead>
          <tbody>
            {shown.map((row) => {
              const google = googleState(row.position, t)
              const token = GAP_TOKEN[row.gap] ?? 'var(--gr-neutral)'
              return (
                <tr key={row.keyword} className="border-t border-line">
                  <td className="p-4 text-caption text-ink font-mono">
                    {row.keyword}
                  </td>
                  <td className="p-4 text-caption text-ink-2" data-numeric="">
                    {count(row.monthlyVolume)}
                  </td>
                  <td className="p-4">
                    <Cell
                      label={google.label}
                      strong={google.strong}
                      mono
                    />
                  </td>
                  <td className="p-4">
                    <Cell
                      label={row.aiPresence ? t('Recommended') : t('Absent')}
                      strong={row.aiPresence}
                    />
                  </td>
                  <td className="p-4">
                    <span
                      className="inline-flex items-center gap-2 rounded-xs border px-2 py-1"
                      style={{
                        borderColor: `color-mix(in oklab, ${token} 38%, transparent)`,
                        background: `color-mix(in oklab, ${token} 9%, transparent)`,
                      }}
                    >
                      <span
                        aria-hidden
                        className="size-1.5 rounded-full"
                        style={{ background: token }}
                      />
                      <span className="text-label uppercase text-ink-2">
                        {row.gapLabel}
                      </span>
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {limit && rows.length > limit ? (
        <p className="text-caption text-ink-3 mt-3" data-numeric="">
          {t('Showing {shown} of {total} tracked commercial questions.', {
            shown: limit,
            total: rows.length,
          })}
        </p>
      ) : null}
    </div>
  )
}

/* ------------------------------------------------------------------------ */

function Cell({
  label,
  strong,
  mono,
}: {
  label: string
  strong: boolean
  mono?: boolean
}) {
  return (
    <span className="inline-flex items-center gap-2">
      <span
        aria-hidden
        className="size-1.5 rounded-full shrink-0"
        style={{
          background: strong ? 'var(--gr-positive)' : 'var(--gr-critical)',
        }}
      />
      <span
        className={cn('text-caption', mono && 'font-mono')}
        style={{
          color: strong ? 'var(--gr-text-primary)' : 'var(--gr-text-secondary)',
        }}
      >
        {label}
      </span>
    </span>
  )
}

function Summary({
  value,
  total,
  label,
  note,
  tone,
}: {
  value: string
  total: number
  label: string
  note: string
  tone: 'critical' | 'warning' | 'positive'
}) {
  const t = useT()
  const token = {
    critical: 'var(--gr-critical)',
    warning: 'var(--gr-warning)',
    positive: 'var(--gr-positive)',
  }[tone]

  return (
    <div className="bg-panel p-5">
      <p className="text-label uppercase text-ink-3">{label}</p>
      <p className="mt-3" data-numeric="">
        <span className="text-data-lg" style={{ color: token }}>
          {value}
        </span>
        <span className="text-body text-ink-3">
          {' '}
          {t('of {total}', { total })}
        </span>
      </p>
      <p className="text-caption text-ink-2 mt-3">{note}</p>
    </div>
  )
}
