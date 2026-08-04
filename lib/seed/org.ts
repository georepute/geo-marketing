import { GEON_WEIGHTS, SPINE, AS_OF } from './spine'

/* ============================================================================
   Northwind Supply — the single fictional organisation. Brief §18 Organization.
   ========================================================================= */

export const ORG = {
  id: 'northwind',
  name: 'Northwind Supply',
  domain: 'northwindsupply.com',
  category: 'Industrial MRO and fastener distribution',
  businessType: 'B2B distributor',
  market: 'United States — Midwest',
  language: 'en-US',
  annualRevenueUsd: 48_000_000,
  /** 60% of revenue arrives through supplier-evaluation RFQs — which is
      precisely the stage where the spine says coverage collapses to 7%. */
  revenueViaSupplierEvaluationPct: 60,
  connectedSources: [
    'Google Search Console',
    'Google Analytics',
    'Google Business Profile',
  ],
  asOf: AS_OF,
} as const

/* ----------------------------------------------------------------------------
   GEON vectors — brief §15.1. Authority is the lowest vector, which is what
   makes the spine's `authorityEvidence: 'weak'` true rather than asserted.
   ------------------------------------------------------------------------- */
export const GEON = {
  visibility: 34,
  authority: 28,
  context: 61,
  trust: 44,
  consistency: 57,
  marketFit: 72,
} as const

export const GEON_VECTORS = [
  {
    key: 'visibility',
    label: 'Visibility',
    score: GEON.visibility,
    definition:
      'How consistently the business appears across AI and digital environments.',
  },
  {
    key: 'authority',
    label: 'Authority',
    score: GEON.authority,
    definition:
      'Whether the business is recognized as a credible expert or category leader.',
  },
  {
    key: 'context',
    label: 'Context',
    score: GEON.context,
    definition:
      'Whether systems understand what the business does, who it serves and when to recommend it.',
  },
  {
    key: 'trust',
    label: 'Trust',
    score: GEON.trust,
    definition:
      'The strength of reputation, validation and proof surrounding the business.',
  },
  {
    key: 'consistency',
    label: 'Consistency',
    score: GEON.consistency,
    definition:
      'Whether the same accurate story appears across channels, markets and languages.',
  },
  {
    key: 'marketFit',
    label: 'Market Fit',
    score: GEON.marketFit,
    definition:
      'How closely positioning matches customer demand and buying intent.',
  },
] as const

/**
 * Decision Health Index — a published weighted function of the six GEON
 * vectors, never a hand-set figure. Brief §6.1.
 */
export function decisionHealthIndex(): number {
  const raw =
    GEON.visibility * GEON_WEIGHTS.visibility +
    GEON.authority * GEON_WEIGHTS.authority +
    GEON.context * GEON_WEIGHTS.context +
    GEON.trust * GEON_WEIGHTS.trust +
    GEON.consistency * GEON_WEIGHTS.consistency +
    GEON.marketFit * GEON_WEIGHTS.marketFit
  return Math.round(raw)
}

/* ----------------------------------------------------------------------------
   Strategic timing — brief §7 Strategic Timing Intelligence.
   The decision deadline sits inside the open window, never beyond it.
   ------------------------------------------------------------------------- */
export const TIMING = {
  position: 'emerging' as const,
  positionLabel: 'Emerging',
  windowOpenedAt: '2026-05-01',
  windowClosesAt: '2027-02-28',
  windowMonths: 7,
  decisionDeadline: '2026-11-30',
  marketReadiness: 63,
  dominantSignal: 'Query maturity accelerating',
  shiftVelocity: 'Moderate — 8% quarter-over-quarter',
} as const

/* ----------------------------------------------------------------------------
   Narrative + trust posture. Derived from the spine's weak-authority finding.
   ------------------------------------------------------------------------- */
export const POSTURE = {
  authorityEvidence: SPINE.authorityEvidence,
  paidDependency: SPINE.paidDependency,
  narrativeOwnershipPct: 12,
  independentValidationSources: 3,
  competitorValidationSourcesMedian: 14,
} as const
