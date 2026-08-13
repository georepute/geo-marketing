'use client'

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/Primitives'
import { useDict } from '@/lib/i18n/context'
import { cn } from '@/lib/utils/cn'
import type { Confidence } from '@/lib/seed/types'

/* ============================================================================
   Confidence. Brief §15.3.

   Encoded as GLYPH + LABEL + COLOUR, never colour alone — the filled fraction
   of the disc reads as certainty even in greyscale, and the label is always
   present for screen readers. Plan §5.1.
   ========================================================================= */

const GLYPH: Record<Confidence, string> = {
  high: '●',
  medium: '◐',
  directional: '◔',
  'insufficient-history': '○',
}

const TOKEN: Record<Confidence, string> = {
  high: 'var(--gr-conf-high)',
  medium: 'var(--gr-conf-medium)',
  directional: 'var(--gr-conf-directional)',
  'insufficient-history': 'var(--gr-conf-insufficient)',
}

const SHORT: Record<Confidence, string> = {
  high: 'High',
  medium: 'Medium',
  directional: 'Directional',
  'insufficient-history': 'Insufficient history',
}

export function ConfidenceBadge({
  confidence,
  showLabel = true,
  className,
}: {
  confidence: Confidence
  showLabel?: boolean
  className?: string
}) {
  const copy = useDict()
  const definition = copy.confidence[confidence].definition

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span
          className={cn(
            'inline-flex items-center gap-2 rounded-xs px-2 py-1',
            'border border-line bg-inset cursor-help align-middle',
            className,
          )}
        >
          <span
            aria-hidden
            className="text-[0.8em] leading-none"
            style={{ color: TOKEN[confidence] }}
          >
            {GLYPH[confidence]}
          </span>
          {showLabel ? (
            <span className="text-label uppercase text-ink-2">
              {SHORT[confidence]}
            </span>
          ) : null}
          <span className="sr-only">
            {copy.confidence[confidence].label}. {definition}
          </span>
        </span>
      </TooltipTrigger>
      <TooltipContent>
        <p className="text-caption text-ink font-medium">
          {copy.confidence[confidence].label}
        </p>
        <p className="text-caption text-ink-2 mt-1">{definition}</p>
      </TooltipContent>
    </Tooltip>
  )
}
