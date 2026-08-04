'use client'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/Primitives'
import { ConfidenceBadge } from './ConfidenceBadge'
import { money, periodLabel } from '@/lib/format'
import { copy } from '@/lib/copy/en'
import { cn } from '@/lib/utils/cn'
import type { ExposureRange as Exposure } from '@/lib/seed/types'

/* ============================================================================
   THE COMPLIANCE COMPONENT. Non-negotiable #5.

   Brief §15.4: all values shown as ranges; no value described as confirmed
   lost revenue; every model exposes its assumptions and data boundaries.

   This is the only component in the system that renders money derived from a
   model, and its prop type (`ExposureRange`) has no shape that carries a bare
   number. There is no code path to "$4,700 lost".
   ========================================================================= */

const SOURCE_LABEL = {
  connected: 'Connected data',
  'customer-configured': 'You configured this',
  benchmark: 'Category benchmark',
} as const

export function ExposureRange({
  exposure,
  size = 'md',
  className,
}: {
  exposure: Exposure
  size?: 'sm' | 'md' | 'lg'
  className?: string
}) {
  const valueClass = {
    sm: 'text-data',
    md: 'text-data-lg',
    lg: 'text-display-2',
  }[size]

  return (
    <div className={cn('min-w-0', className)}>
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span
          data-numeric=""
          className={cn(valueClass, 'text-ink whitespace-nowrap')}
        >
          {money(exposure.low)}
          <span className="text-ink-3 px-1">–</span>
          {money(exposure.high)}
        </span>
        <span className="text-caption text-ink-2">
          {periodLabel(exposure.period)}
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-2 mt-2">
        <ConfidenceBadge confidence={exposure.confidence} />
        <AssumptionsDisclosure exposure={exposure} />
      </div>

      {/* The disclaimer is not optional decoration — it is the constraint. */}
      <p className="text-caption text-ink-3 mt-2 max-w-prose">
        {copy.exposure.caption}
      </p>
    </div>
  )
}

/* ----------------------------------------------------------------------- */

export function AssumptionsDisclosure({ exposure }: { exposure: Exposure }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={cn(
            'text-label uppercase text-ink-2 hover:text-ink',
            'border-b border-dotted border-line-strong',
            'transition-colors duration-[var(--gr-dur-fast)]',
          )}
        >
          {copy.exposure.assumptionsLabel} ({exposure.assumptions.length})
        </button>
      </PopoverTrigger>

      <PopoverContent className="w-96">
        <p className="text-label uppercase text-ink-3">
          {copy.exposure.formulaLabel}
        </p>
        <p className="text-caption text-ink mt-2 font-mono">
          {copy.exposure.formula}
        </p>

        <hr className="border-0 border-t border-line my-4" />

        <p className="text-label uppercase text-ink-3 mb-3">
          {copy.exposure.assumptionsLabel}
        </p>
        <dl className="space-y-3">
          {exposure.assumptions.map((a) => (
            <div key={a.label} className="grid grid-cols-[8rem_1fr] gap-3">
              <dt className="text-caption text-ink-2">{a.label}</dt>
              <dd>
                <span className="text-caption text-ink" data-numeric="">
                  {a.value}
                </span>
                <span className="block text-label uppercase text-ink-3 mt-1">
                  {SOURCE_LABEL[a.source]}
                </span>
              </dd>
            </div>
          ))}
        </dl>

        <hr className="border-0 border-t border-line my-4" />

        <p className="text-caption text-ink-3">{copy.exposure.limitation}</p>
        <p className="text-label uppercase text-ink-3 mt-3">
          Methodology {exposure.methodologyVersion}
        </p>
      </PopoverContent>
    </Popover>
  )
}
