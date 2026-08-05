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

/* ============================================================================
   CAMPAIGN BUDGET AT RISK.

   A second model, deliberately separate from the decision-gap model above,
   because it answers a different question and rests on different assumptions.

     Planned spend × Verification-dependent share × Verification failure rate

   The middle term is the share of campaign spend that reaches a buyer who will
   go on to check the business against a third party before acting. The last is
   how often that check currently fails, taken from the ratio of independent
   sources held to the category median.

   The range comes from the honest uncertainty in the middle term: some buyers
   act without verifying, and nobody can say precisely how many. Presenting a
   single figure here would be the most dangerous kind of false precision on
   this page, because it is the number an executive would quote in a budget
   meeting.
   ========================================================================= */

export interface BudgetRiskInputs {
  plannedBudgetUsd: number
  /** Low and high bounds on the share of spend exposed to verification. */
  verificationDependentLowPct: number
  verificationDependentHighPct: number
  /** Independent sources held, against the category median. */
  authoritySources: number
  categoryMedianSources: number
  campaignMonths: number
}

export function buildBudgetAtRisk(
  inputs: BudgetRiskInputs,
  confidence: Confidence,
): ExposureRange {
  const {
    plannedBudgetUsd,
    verificationDependentLowPct,
    verificationDependentHighPct,
    authoritySources,
    categoryMedianSources,
    campaignMonths,
  } = inputs

  /* Failure rate: how far short of the category median the evidence falls.
     Clamped at 0 so a business at or above the median carries no risk from
     this term rather than a negative one. */
  const failureRate = Math.max(
    0,
    1 - authoritySources / categoryMedianSources,
  )

  const low = roundToHundred(
    plannedBudgetUsd * (verificationDependentLowPct / 100) * failureRate,
  )
  const high = roundToHundred(
    plannedBudgetUsd * (verificationDependentHighPct / 100) * failureRate,
  )

  return {
    low,
    high,
    currency: 'USD',
    period: 'quarter',
    confidence,
    methodologyVersion: METHODOLOGY_VERSION,
    assumptions: [
      {
        label: 'Planned campaign budget',
        value: `${money(plannedBudgetUsd)} over ${campaignMonths} months`,
        source: 'customer-configured',
      },
      {
        label: 'Spend reaching a buyer who verifies',
        value: percentRange(
          verificationDependentLowPct,
          verificationDependentHighPct,
        ),
        source: 'benchmark',
      },
      {
        label: 'Verification failure rate',
        value: `${percent(Number((failureRate * 100).toFixed(1)))} — ${count(
          authoritySources,
        )} independent sources against a category median of ${count(
          categoryMedianSources,
        )}`,
        source: 'connected',
      },
      {
        label: 'Model',
        value:
          'Planned spend × verification-dependent share × verification failure rate',
        source: 'benchmark',
      },
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
