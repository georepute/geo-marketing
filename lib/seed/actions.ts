import { SPINE } from './spine'
import { TIMING } from './org'
import type { Action } from './types'

/* ============================================================================
   Prioritised interventions — brief §7 Action Intelligence, eleven fields each.

   Action 1 is the spine prescription verbatim. Every `expectedImpact` target
   is arithmetically reachable from the current value; invariant #6 checks that
   no action promises movement the underlying data cannot support.
   ========================================================================= */

export const ACTIONS: Action[] = [
  {
    id: 'a1',
    action: SPINE.prescription,
    reason:
      'Authority is the lowest GEON vector at 28 and carries the heaviest index weight. It is the constraint holding recognition, recommendation share and coverage down.',
    evidenceRef: 'r-authority',
    expectedImpact: 'Supplier-evaluation coverage 7% → 19%',
    confidence: 'high',
    urgency: 'immediate',
    effort: 'high',
    owner: 'VP Marketing',
    deadline: TIMING.decisionDeadline,
    successMetric: 'Independent source count 3 → 12',
    measuredChange: null,
    horizon: 90,
  },
  {
    id: 'a2',
    action:
      'Publish a canonical entity description and propagate identical category language to trade directories and structured data.',
    reason:
      'Three of six engines misclassify what Northwind sells. No content investment can move an answer while the entity record is wrong.',
    evidenceRef: 'r-recognition',
    expectedImpact: 'Average recognition score 38 → 55',
    confidence: 'high',
    urgency: 'immediate',
    effort: 'low',
    owner: 'Head of Digital',
    deadline: '2026-09-30',
    successMetric: 'Category association correct on 5 of 6 engines',
    measuredChange: null,
    horizon: 30,
  },
  {
    id: 'a3',
    action:
      'Resolve the Gemini entity conflation with the same-named logistics firm.',
    reason:
      'Gemini recognises Northwind at 24 of 100 and recommends it in zero questions. The cause is a disambiguation failure, not a content gap.',
    evidenceRef: 'r-recognition',
    expectedImpact: 'Gemini recognition 24 → 45',
    confidence: 'medium',
    urgency: 'immediate',
    effort: 'low',
    owner: 'Head of Digital',
    deadline: '2026-09-15',
    successMetric: 'Gemini resolves the correct entity on 4 of 6 category questions',
    measuredChange: null,
    horizon: 30,
  },
  {
    id: 'a4',
    action:
      'Build supplier-comparison content against the six highest-volume missed decision questions.',
    reason:
      'Nineteen of twenty-four decisions complete without the brand. These six carry the largest share of decision-stage demand.',
    evidenceRef: 'r-missed-prompts',
    expectedImpact: 'Questions with presence 5 → 12 of 24',
    confidence: 'medium',
    urgency: 'this-quarter',
    effort: 'medium',
    owner: 'Content Lead',
    deadline: '2026-11-15',
    successMetric: 'Presence on 12 of 24 tracked questions',
    measuredChange: null,
    horizon: 60,
  },
  {
    id: 'a5',
    action:
      'Reallocate paid spend from keywords with a viable organic replacement path.',
    reason:
      'Blended CPC runs above break-even. Paid is renting positions that authority would hold, and the cost rises with competitive density.',
    evidenceRef: 'r-paid-dependency',
    expectedImpact: 'Keywords above break-even CPC 13 → 7 of 20',
    confidence: 'medium',
    urgency: 'this-quarter',
    effort: 'low',
    owner: 'Demand Gen Manager',
    deadline: '2026-10-15',
    successMetric: 'Blended CPC below break-even on reallocated set',
    measuredChange: null,
    horizon: 60,
  },
  {
    id: 'a6',
    action:
      'Publish an evaluation framework that makes regional response time a first-class selection criterion.',
    reason:
      'Engines describe the category in a competitor’s language. Northwind’s strongest differentiator is absent from every category description.',
    evidenceRef: 'r-narrative',
    expectedImpact: 'Narrative ownership 12% → 24%',
    confidence: 'directional',
    urgency: 'monitor',
    effort: 'medium',
    owner: 'Head of Brand',
    deadline: '2026-12-31',
    successMetric: 'Response time cited among the first three criteria by 3 of 6 engines',
    measuredChange: null,
    horizon: 90,
  },
]

export function actionsByHorizon(horizon: 30 | 60 | 90): Action[] {
  return ACTIONS.filter((a) => a.horizon === horizon)
}

/** Priority order: immediate first, then lower effort first within a tier. */
export function prioritisedActions(): Action[] {
  const urgencyRank = { immediate: 0, 'this-quarter': 1, monitor: 2 } as const
  const effortRank = { low: 0, medium: 1, high: 2 } as const
  return [...ACTIONS].sort(
    (a, b) =>
      urgencyRank[a.urgency] - urgencyRank[b.urgency] ||
      effortRank[a.effort] - effortRank[b.effort],
  )
}
