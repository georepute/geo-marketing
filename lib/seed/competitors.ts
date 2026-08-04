import { SPINE } from './spine'
import type { CompetitorId } from './types'

/* ============================================================================
   Competitor set — brief §18 Competitor.

   Kestrel's share is pinned to the spine. The set sums to exactly 100%, which
   invariant #1 enforces: a share table that does not total 100 is the single
   fastest way to destroy the credibility of everything around it.
   ========================================================================= */

export interface Competitor {
  id: CompetitorId
  name: string
  domain: string
  /** Share of AI recommendations across the 24 seeded decision questions. */
  recommendationSharePct: number
  /** Independent authority sources the engines cite for this brand. */
  authoritySources: number
  /** Decision stage where this brand is strongest. */
  strongestStage: string
  isSelf: boolean
  whyTheyWin: string | null
}

export const COMPETITORS: Competitor[] = [
  {
    id: 'kestrel',
    name: 'Kestrel Industrial',
    domain: 'kestrelindustrial.com',
    recommendationSharePct: SPINE.topCompetitorRecommendationSharePct,
    authoritySources: 21,
    strongestStage: 'Supplier Evaluation',
    isSelf: false,
    whyTheyWin:
      'Kestrel is cited by three independent trade publications and maintains a public supplier-comparison library. Engines reach for that evidence when a buyer asks whom to choose.',
  },
  {
    id: 'meridian',
    name: 'Meridian Supply Co',
    domain: 'meridiansupply.com',
    recommendationSharePct: 18,
    authoritySources: 14,
    strongestStage: 'Solution Evaluation',
    isSelf: false,
    whyTheyWin:
      'Meridian publishes specification guidance that engines treat as category-defining language.',
  },
  {
    id: 'halvorsen',
    name: 'Halvorsen Industrial',
    domain: 'halvorsenindustrial.com',
    recommendationSharePct: 11,
    authoritySources: 9,
    strongestStage: 'Research',
    isSelf: false,
    whyTheyWin:
      'Halvorsen owns early-stage research questions, entering the decision before evaluation begins.',
  },
  {
    id: 'atlas',
    name: 'Atlas Trade Group',
    domain: 'atlastradegroup.com',
    recommendationSharePct: 7,
    authoritySources: 6,
    strongestStage: 'Purchase Decision',
    isSelf: false,
    whyTheyWin:
      'Atlas is named on procurement checklists that engines cite at the point of purchase.',
  },
  {
    id: 'northwind',
    name: 'Northwind Supply',
    domain: 'northwindsupply.com',
    recommendationSharePct: 4.2,
    authoritySources: 3,
    strongestStage: 'Research',
    isSelf: true,
    whyTheyWin: null,
  },
]

/** Recommendations attributed to no tracked brand. Balances the set to 100%. */
export const UNATTRIBUTED_SHARE_PCT = 28.8

export const TOP_COMPETITOR = COMPETITORS[0]!
export const SELF = COMPETITORS.find((c) => c.isSelf)!

/** Total of every tracked share plus the unattributed remainder. Must be 100. */
export function totalRecommendationShare(): number {
  const tracked = COMPETITORS.reduce(
    (sum, c) => sum + c.recommendationSharePct,
    0,
  )
  return Number((tracked + UNATTRIBUTED_SHARE_PCT).toFixed(1))
}
