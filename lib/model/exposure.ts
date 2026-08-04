import {
  EXPOSURE_INPUTS,
  METHODOLOGY_VERSION,
  SPINE,
} from '@/lib/seed/spine'
import type { Confidence, ExposureRange } from '@/lib/seed/types'
import { count, money, percent, percentRange } from '@/lib/format'

/* ============================================================================
   The directional commercial model. Brief §15.4:

     Demand × Decision Gap × Estimated Conversion × Average Deal Value

   Brief §15.4 constraints, all enforced here rather than left to callers:
     · All values must be shown as ranges.
     · No value may be described as confirmed lost revenue.
     · Every model must expose its assumptions and data boundaries.
     · Prediction must not appear when history is insufficient.
   ========================================================================= */

/** Exposure figures are presented to the nearest $100. Precision would imply
    an accuracy the model does not have. */
function roundToHundred(value: number): number {
  return Math.round(value / 100) * 100
}

export interface ExposureComputation {
  low: number
  high: number
  rawLow: number
  rawHigh: number
}

/**
 * Run the model. `share` scales demand to the slice of questions a given
 * readout concerns; the full-book figure uses share = 1.
 */
export function computeExposure(share = 1): ExposureComputation {
  const {
    monthlyDecisionQueries,
    decisionGapPct,
    conversionLowPct,
    conversionHighPct,
    averageDealValueUsd,
  } = EXPOSURE_INPUTS

  const missedDecisions =
    monthlyDecisionQueries * share * (decisionGapPct / 100)

  const rawLow =
    missedDecisions * (conversionLowPct / 100) * averageDealValueUsd
  const rawHigh =
    missedDecisions * (conversionHighPct / 100) * averageDealValueUsd

  return {
    low: roundToHundred(rawLow),
    high: roundToHundred(rawHigh),
    rawLow,
    rawHigh,
  }
}

/** Missed decision events per month, before any conversion assumption. */
export function missedDecisionEvents(share = 1): number {
  return (
    EXPOSURE_INPUTS.monthlyDecisionQueries *
    share *
    (EXPOSURE_INPUTS.decisionGapPct / 100)
  )
}

/**
 * Build a full `ExposureRange`. Every one carries its assumptions — the type
 * has no shape that permits a bare number, and this is the only constructor.
 */
export function buildExposure(options: {
  share?: number
  confidence: Confidence
  period?: 'month' | 'quarter' | 'year'
  extraAssumptions?: ExposureRange['assumptions']
}): ExposureRange {
  const { share = 1, confidence, period = 'month', extraAssumptions = [] } =
    options
  const { low, high } = computeExposure(share)

  return {
    low,
    high,
    currency: 'USD',
    period,
    confidence,
    methodologyVersion: METHODOLOGY_VERSION,
    assumptions: [
      {
        label: 'Demand',
        value: `${count(
          Math.round(EXPOSURE_INPUTS.monthlyDecisionQueries * share),
        )} decision-stage queries per month`,
        source: 'connected',
      },
      {
        label: 'Decision gap',
        value: percent(EXPOSURE_INPUTS.decisionGapPct),
        source: 'benchmark',
      },
      {
        label: 'Estimated conversion',
        value: percentRange(
          EXPOSURE_INPUTS.conversionLowPct,
          EXPOSURE_INPUTS.conversionHighPct,
        ),
        source: 'customer-configured',
      },
      {
        label: 'Average deal value',
        value: money(EXPOSURE_INPUTS.averageDealValueUsd),
        source: 'customer-configured',
      },
      ...extraAssumptions,
    ],
  }
}

/**
 * The full-book exposure. This is the figure the spine pins, and the one the
 * invariant suite checks against §13.1.
 */
export function primaryExposure(): ExposureRange {
  return buildExposure({ share: 1, confidence: 'directional' })
}

/** Does the model still reproduce the brief's §13.1 range? */
export function matchesSpine(): boolean {
  const { low, high } = computeExposure(1)
  return low === SPINE.exposureLowUsd && high === SPINE.exposureHighUsd
}
