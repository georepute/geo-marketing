/* ============================================================================
   Formatting. Intl only — never hand-rolled string assembly, so the app stays
   localization-safe even though v1 ships English only. Plan §1 deviation 2.
   ========================================================================= */

export const LOCALE = 'en-US'
export const CURRENCY = 'USD'

const currency0 = new Intl.NumberFormat(LOCALE, {
  style: 'currency',
  currency: CURRENCY,
  maximumFractionDigits: 0,
})

const currency2 = new Intl.NumberFormat(LOCALE, {
  style: 'currency',
  currency: CURRENCY,
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

const integer = new Intl.NumberFormat(LOCALE, { maximumFractionDigits: 0 })

const decimal1 = new Intl.NumberFormat(LOCALE, {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
})

const dateLong = new Intl.DateTimeFormat(LOCALE, {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
})

const dateShort = new Intl.DateTimeFormat(LOCALE, {
  month: 'short',
  day: 'numeric',
})

/** `$7,200` — whole-dollar money. */
export function money(value: number): string {
  return currency0.format(value)
}

/** `$8.40` — sub-dollar precision. Model-derived money only. */
export function moneyPrecise(value: number): string {
  return currency2.format(value)
}

/**
 * An OBSERVED market cost — a cost-per-click, a break-even threshold, a
 * catalogue price. Distinct from `money`/`moneyPrecise`, which are reserved
 * for model output and are restricted by tests/exposure-guard.test.ts.
 *
 * The distinction is the point: an observed CPC is a fact and needs no
 * confidence interval. A projected exposure is a claim and must never appear
 * without its range, confidence and assumptions.
 */
export function observedCost(value: number): string {
  return currency2.format(value)
}

/**
 * A CATALOGUE PRICE — what a plan, add-on or product costs. Like
 * `observedCost`, this is a fact rather than a claim: a plan costs what it
 * costs, and no confidence interval applies.
 *
 * Kept separate from `money` so tests/exposure-guard.test.ts can restrict
 * model-derived money without also blocking commerce screens.
 */
export function catalogPrice(value: number): string {
  return currency0.format(value)
}

/** `1,240` */
export function count(value: number): string {
  return integer.format(value)
}

/** `4.2%` — one decimal, which is how every recognition figure is quoted. */
export function percent(value: number): string {
  return `${decimal1.format(value)}%`
}

/** `7%` — whole percent, for coverage figures quoted without decimals. */
export function percentWhole(value: number): string {
  return `${integer.format(Math.round(value))}%`
}

/** `Nov 30, 2026` */
export function dateFull(iso: string): string {
  return dateLong.format(new Date(iso))
}

/** `Nov 30` */
export function dateBrief(iso: string): string {
  return dateShort.format(new Date(iso))
}

/**
 * Whole days from `from` to `iso`. Positive means still ahead.
 * `from` is injected so callers stay deterministic in tests.
 */
export function daysUntil(iso: string, from: Date): number {
  const ms = new Date(iso).getTime() - from.getTime()
  return Math.round(ms / 86_400_000)
}

/**
 * Render a value range. Deliberately the ONLY way a spread of money reaches
 * the screen — see components/signal/ExposureRange.tsx and plan §3.3.
 */
export function moneyRange(low: number, high: number): string {
  return `${money(low)} – ${money(high)}`
}

/** `1.4–2.7%` — a percentage spread, for conversion assumptions. */
export function percentRange(low: number, high: number): string {
  return `${decimal1.format(low)}–${decimal1.format(high)}%`
}

/** `per month` → the suffix shown beside an exposure range. */
export function periodLabel(period: 'month' | 'quarter' | 'year'): string {
  return { month: 'per month', quarter: 'per quarter', year: 'per year' }[
    period
  ]
}
