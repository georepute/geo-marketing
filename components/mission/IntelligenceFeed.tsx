'use client'

import { ConfidenceBadge } from '@/components/signal/ConfidenceBadge'
import { dateBrief } from '@/lib/format'
import { useI18n } from '@/lib/i18n/context'
import { useT } from '@/lib/i18n/content/client'
import { cn } from '@/lib/utils/cn'
import type { FeedEvent } from '@/lib/api/types'

/* ============================================================================
   Executive Intelligence Feed — brief §6.3.

   Tone and direction are deliberately separate: a competitor's recommendation
   share rising is "up" in direction and "negative" in tone. Collapsing the two
   is how dashboards end up colouring bad news green.
   ========================================================================= */

const LABELS: Record<FeedEvent['kind'], string> = {
  'recommendation-gained': 'Recommendation gained',
  'citation-lost': 'Citation lost',
  'competitor-surge': 'Competitor surge',
  'search-cost-spike': 'Search cost spike',
  'question-emerging': 'New decision question',
  'narrative-risk': 'Narrative risk',
  'trust-decay': 'Trust signal decayed',
  'timing-window': 'Timing window',
  'regional-opportunity': 'Regional opportunity',
  'action-measured': 'Action measured',
}

const TONE_TOKEN = {
  positive: 'var(--gr-positive)',
  negative: 'var(--gr-critical)',
  neutral: 'var(--gr-neutral)',
} as const

export function IntelligenceFeed({
  events,
  onSelect,
  className,
}: {
  events: FeedEvent[]
  onSelect: (readoutId: string) => void
  className?: string
}) {
  const { intl } = useI18n()
  const t = useT()
  return (
    <ul className={cn('divide-y divide-[var(--gr-line-subtle)]', className)}>
      {events.map((event) => (
        <li key={event.id}>
          <button
            type="button"
            onClick={() => onSelect(event.readoutId)}
            className={cn(
              'group w-full text-start p-4 sm:p-5',
              'hover:bg-inset transition-colors duration-[var(--gr-dur-fast)]',
            )}
          >
            <div className="flex flex-wrap items-center gap-3">
              <span
                aria-hidden
                className="size-1.5 rounded-full shrink-0"
                style={{ background: TONE_TOKEN[event.tone] }}
              />
              <span className="text-label uppercase text-ink-3">
                {t(LABELS[event.kind])}
              </span>
              {event.delta ? (
                <span
                  className="text-label rounded-xs border px-2 py-1"
                  data-numeric=""
                  style={{
                    color: TONE_TOKEN[event.tone],
                    borderColor: `color-mix(in oklab, ${TONE_TOKEN[event.tone]} 35%, transparent)`,
                    background: `color-mix(in oklab, ${TONE_TOKEN[event.tone]} 8%, transparent)`,
                  }}
                >
                  {event.direction === 'up' ? '↑' : event.direction === 'down' ? '↓' : '•'}{' '}
                  {event.delta}
                </span>
              ) : null}
              <span
                className="text-label uppercase text-ink-3 ms-auto whitespace-nowrap"
                data-numeric=""
              >
                {dateBrief(event.observedAt, intl)}
              </span>
            </div>

            <p className="text-body text-ink mt-3 text-balance">
              {event.headline}
            </p>
            <p className="text-caption text-ink-2 mt-2">{event.detail}</p>

            <div className="mt-3 flex items-center gap-3">
              <ConfidenceBadge confidence={event.confidence} />
              <span className="text-label uppercase text-ink-3 group-hover:text-ink-2 transition-colors">
                {t('Open evidence')} <span aria-hidden className="gr-arrow">→</span>
              </span>
            </div>
          </button>
        </li>
      ))}
    </ul>
  )
}
