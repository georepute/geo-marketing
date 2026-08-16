'use client'

import { ConfidenceBadge } from '@/components/signal/ConfidenceBadge'
import { ExposureRange } from '@/components/signal/ExposureRange'
import { TrendChip, ScoreMeter } from '@/components/signal/Indicators'
import { TILE_ICON } from '@/lib/visual/icons'
import { useT } from '@/lib/i18n/content/client'
import { cn } from '@/lib/utils/cn'
import type { MissionTile as Tile } from '@/lib/api/types'

/* ============================================================================
   A Mission Control tile — brief §6.1.

   Each tile is a computed position with a readout behind it, never a decorated
   number. Selecting one opens the full evidence chain, which is what makes the
   grid a command environment rather than a summary screen.
   ========================================================================= */

const TONE_TOKEN = {
  critical: 'var(--gr-critical)',
  warning: 'var(--gr-warning)',
  neutral: 'var(--gr-neutral)',
  positive: 'var(--gr-positive)',
} as const

const TONE_METER = {
  critical: 'critical',
  warning: 'brand',
  neutral: 'brand',
  positive: 'positive',
} as const

export function MissionTile({
  tile,
  onSelect,
  className,
}: {
  tile: Tile
  onSelect: (readoutId: string) => void
  className?: string
}) {
  const t = useT()
  const lead = tile.emphasis === 'lead'
  const token = TONE_TOKEN[tile.tone]
  const Icon = TILE_ICON[tile.id]

  return (
    <button
      type="button"
      onClick={() => onSelect(tile.readoutId)}
      className={cn(
        'group relative text-start rounded-md border border-line bg-panel',
        'flex flex-col overflow-hidden',
        'transition-colors duration-[var(--gr-dur-base)] ease-(--ease-standard)',
        'hover:border-line-strong hover:bg-inset',
        lead ? 'p-6' : 'p-5',
        className,
      )}
    >
      {/* Tone rail — a hairline, not a colour wash */}
      <span
        aria-hidden
        className="absolute inset-y-0 start-0 w-0.5"
        style={{ background: token }}
      />

      <div className="flex items-start justify-between gap-3">
        <span className="inline-flex items-center gap-2 min-w-0">
          {Icon ? (
            <Icon
              aria-hidden
              className="size-3.5 shrink-0"
              style={{ color: token }}
            />
          ) : null}
          <span className="text-label uppercase text-ink-3">{tile.label}</span>
        </span>
        <ConfidenceBadge confidence={tile.confidence} showLabel={false} />
      </div>

      {/* Model-derived money never renders as a plain string: it goes through
          <ExposureRange>, which cannot display without a confidence badge and
          an assumptions disclosure. Non-negotiable #5. */}
      {tile.exposure ? (
        <div className="mt-4">
          <ExposureRange exposure={tile.exposure} size={lead ? 'md' : 'sm'} />
        </div>
      ) : (
        <p
          data-numeric=""
          className={cn(
            'text-ink mt-4 leading-none whitespace-nowrap',
            lead ? 'text-display-2' : 'text-data-lg',
          )}
        >
          {tile.value}
        </p>
      )}

      {tile.score !== null ? (
        <ScoreMeter
          score={tile.score}
          tone={TONE_METER[tile.tone]}
          className="mt-4"
        />
      ) : null}

      <p
        className={cn(
          'text-caption text-ink-2 mt-4',
          lead ? 'max-w-md' : 'line-clamp-3',
        )}
      >
        {tile.detail}
      </p>

      <div className="mt-auto pt-4 flex items-center justify-between gap-3">
        <TrendChip trend={tile.trend} />
        <span className="text-label uppercase text-ink-3 group-hover:text-ink-2 transition-colors inline-flex items-center gap-2">
          {t('Evidence')} <span aria-hidden className="gr-arrow">→</span>
        </span>
      </div>
    </button>
  )
}
