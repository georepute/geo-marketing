/* ============================================================================
   THE SPINE — canonical, immutable.

   Brief §13.1 hands us a complete, internally consistent causal chain. These
   seven facts are that chain, verbatim. Every other number in the seed is
   DERIVED ARITHMETIC from them.

   Nothing in this file may be edited to make a screen look better. If a screen
   disagrees with the spine, the screen is wrong. tests/seed-invariants.test.ts
   fails the build when that happens.
   ========================================================================= */

export const SPINE = {
  /** ChatGPT supplier-recommendation presence. §13.1 */
  chatgptRecommendationPresencePct: 4.2,

  /** Share of supplier-evaluation answers in which Northwind appears. §13.1 */
  supplierEvaluationCoveragePct: 7,

  /** Independent authority evidence. §13.1 */
  authorityEvidence: 'weak',

  /** Top competitor's recommendation share. §13.1 */
  topCompetitorRecommendationSharePct: 31,

  /** Paid dependency. §13.1 */
  paidDependency: 'high',

  /** Directional commercial exposure, per month. §13.1 */
  exposureLowUsd: 3_200,
  exposureHighUsd: 6_200,

  /** Prescription. §13.1 */
  prescription:
    'Strengthen independent authority evidence and supplier-comparison coverage.',
} as const

/* ----------------------------------------------------------------------------
   Model inputs. Brief §15.4:
     Demand × Decision Gap × Estimated Conversion × Average Deal Value

   These four are chosen so the formula reproduces the spine exposure range
   exactly once rounded to the nearest $100. They are shown to the user on
   every exposure disclosure — the model is never hidden.
   ------------------------------------------------------------------------- */
export const EXPOSURE_INPUTS = {
  /** Monthly decision-stage query volume. Equals the sum of all prompt volumes. */
  monthlyDecisionQueries: 1_240,
  /** Share of those queries where a competitor is recommended and Northwind is
      a viable but unlisted supplier. */
  decisionGapPct: 26.8,
  /** Estimated query-to-order conversion, as a range. Never a point estimate. */
  conversionLowPct: 1.4,
  conversionHighPct: 2.7,
  /** Average order value. Industrial MRO repeat consumables, not contracts. */
  averageDealValueUsd: 690,
} as const

/* ----------------------------------------------------------------------------
   Paid-search economics. Blended CPC above break-even is what makes the
   spine's `paidDependency: 'high'` true rather than asserted.
   ------------------------------------------------------------------------- */
export const ECONOMICS_INPUTS = {
  grossMarginPct: 24,
  siteConversionPct: 3.7,
} as const

/** Break-even CPC = AOV × gross margin × site conversion. */
export const BREAK_EVEN_CPC =
  EXPOSURE_INPUTS.averageDealValueUsd *
  (ECONOMICS_INPUTS.grossMarginPct / 100) *
  (ECONOMICS_INPUTS.siteConversionPct / 100)

/* ----------------------------------------------------------------------------
   GEON weights (brief §15.1). The Decision Health Index is a published
   weighted function of the six vectors — not a magic number. Weights sum to 1.
   ------------------------------------------------------------------------- */
export const GEON_WEIGHTS = {
  visibility: 0.25,
  authority: 0.3,
  context: 0.1,
  trust: 0.2,
  consistency: 0.075,
  marketFit: 0.075,
} as const

/** The date every "as of" figure in the seed is measured from. */
export const AS_OF = '2026-07-31' as const

/** Methodology version stamped onto every readout and exposure model. */
export const METHODOLOGY_VERSION = 'GEON-2.4' as const
