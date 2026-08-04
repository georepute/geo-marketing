'use client'

import { catalogPrice } from '@/lib/format'
import { cn } from '@/lib/utils/cn'

/* ============================================================================
   Catalogue pricing.

   Deliberately NOT routed through <ExposureRange>. A price is an observed
   fact — a plan costs what it costs — and makes no predictive claim, so it
   needs no confidence interval. Model-derived money is the restricted case;
   see components/signal/ExposureRange.tsx and tests/exposure-guard.test.ts.

   PLACEHOLDER PRICING. The brief names no plans or prices (plan §7 Q4), so
   every figure here is invented and labelled as such on the pricing page.
   ========================================================================= */

export function Price({
  amount,
  period,
  size = 'md',
  className,
}: {
  amount: number
  period?: 'month' | 'year' | 'one-time'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}) {
  const valueClass = {
    sm: 'text-data',
    md: 'text-data-lg',
    lg: 'text-display-2',
  }[size]

  const suffix =
    period === 'month'
      ? '/ month'
      : period === 'year'
        ? '/ year'
        : period === 'one-time'
          ? 'one-time'
          : null

  return (
    <span className={cn('inline-flex items-baseline gap-2', className)}>
      <span data-numeric="" className={cn(valueClass, 'text-ink')}>
        {catalogPrice(amount)}
      </span>
      {suffix ? (
        <span className="text-caption text-ink-3">{suffix}</span>
      ) : null}
    </span>
  )
}
