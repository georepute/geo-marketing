import { GEON, POSTURE, TIMING, decisionHealthIndex } from './org'
import { TOP_COMPETITOR } from './competitors'
import { averageRecognitionScore } from './engines'
import { stageCoveragePct, missedPrompts, PROMPTS } from './prompts'
import { gapCounts, paidDependency } from './search'
import { buildExposure } from '@/lib/model/exposure'
import { count, percent, percentWhole } from '@/lib/format'
import type { Confidence, ExposureRange, Trend } from './types'

/* ============================================================================
   Executive Mission Control — the ten tiles of brief §6.1.

   Every value is DERIVED. A tile is not a number someone chose to display; it
   is a computed position with a readout behind it, which is what separates
   this from a marketing dashboard.
   ========================================================================= */

export interface MissionTile {
  id: string
  label: string
  /** The headline figure. Empty when `exposure` carries the value instead. */
  value: string
  /**
   * Set only on tiles whose headline is model-derived money. The tile then
   * renders <ExposureRange>, which cannot display without a confidence badge
   * and an assumptions disclosure. A tile must never format money itself —
   * non-negotiable #5.
   */
  exposure: ExposureRange | null
  /** Supporting context under the figure. */
  detail: string
  /** 0–100 where a meter is meaningful, else null. */
  score: number | null
  tone: 'critical' | 'warning' | 'neutral' | 'positive'
  trend: Trend
  confidence: Confidence
  readoutId: string
  /** Tiles that carry the argument get more grid area. */
  emphasis: 'lead' | 'standard'
}

export function missionTiles(): MissionTile[] {
  const health = decisionHealthIndex()
  const gaps = gapCounts()
  const supplierCoverage = stageCoveragePct('supplier-evaluation')
  const blindSpots =
    gaps['compound-blind-spot'] + gaps['strategic-blind-spot']

  return [
    {
      id: 'decision-health',
      label: 'Decision Health Index',
      value: `${health}`,
      exposure: null,
      detail: `Weighted across six GEON vectors. Authority at ${GEON.authority} is the binding constraint.`,
      score: health,
      tone: 'critical',
      trend: 'deteriorating',
      confidence: 'high',
      readoutId: 'r-decision-health',
      emphasis: 'lead',
    },
    {
      id: 'revenue-exposure',
      label: 'Revenue Exposure',
      // The tile renders <ExposureRange>, so the range arrives with its
      // confidence and assumptions attached rather than as a formatted string.
      value: '',
      exposure: buildExposure({ share: 1, confidence: 'directional' }),
      detail:
        'Demand × decision gap × estimated conversion × average deal value.',
      score: null,
      tone: 'critical',
      trend: 'deteriorating',
      confidence: 'directional',
      readoutId: 'r-supplier-collapse',
      emphasis: 'lead',
    },
    {
      id: 'ai-recognition',
      label: 'AI Recognition Position',
      value: `${averageRecognitionScore()}`,
      exposure: null,
      detail: `Average entity understanding across six engines. Three misidentify the category.`,
      score: averageRecognitionScore(),
      tone: 'critical',
      trend: 'stable',
      confidence: 'high',
      readoutId: 'r-recognition',
      emphasis: 'standard',
    },
    {
      id: 'google-vs-ai',
      label: 'Google vs AI Gap',
      value: `${blindSpots}/20`,
      exposure: null,
      detail:
        'Keywords absent from AI answers and outside the Google top ten. The decision happens on neither surface.',
      score: Math.round(((20 - blindSpots) / 20) * 100),
      tone: 'critical',
      trend: 'deteriorating',
      confidence: 'high',
      readoutId: 'r-gap',
      emphasis: 'standard',
    },
    {
      id: 'decision-presence',
      label: 'Decision Presence',
      value: percentWhole(supplierCoverage),
      exposure: null,
      detail: `Supplier-evaluation coverage. ${count(missedPrompts().length)} of ${count(PROMPTS.length)} decisions complete without the brand.`,
      score: Math.round(supplierCoverage),
      tone: 'critical',
      trend: 'deteriorating',
      confidence: 'high',
      readoutId: 'r-missed-prompts',
      emphasis: 'standard',
    },
    {
      id: 'competitive-capture',
      label: 'Competitive Capture',
      value: percent(TOP_COMPETITOR.recommendationSharePct),
      exposure: null,
      detail: `${TOP_COMPETITOR.name} receives the recommendation. Northwind receives 4.2%.`,
      score: Math.round(TOP_COMPETITOR.recommendationSharePct),
      tone: 'critical',
      trend: 'deteriorating',
      confidence: 'high',
      readoutId: 'r-competitor',
      emphasis: 'standard',
    },
    {
      id: 'narrative-ownership',
      label: 'Narrative Ownership',
      value: percentWhole(POSTURE.narrativeOwnershipPct),
      exposure: null,
      detail:
        'Share of the language engines use to define the category. The criteria cited first are a competitor’s.',
      score: POSTURE.narrativeOwnershipPct,
      tone: 'warning',
      trend: 'stable',
      confidence: 'medium',
      readoutId: 'r-narrative',
      emphasis: 'standard',
    },
    {
      id: 'trust-readiness',
      label: 'Trust Readiness',
      value: `${GEON.trust}`,
      exposure: null,
      detail: `${POSTURE.independentValidationSources} independent sources against a category median of ${POSTURE.competitorValidationSourcesMedian}.`,
      score: GEON.trust,
      tone: 'warning',
      trend: 'stable',
      confidence: 'medium',
      readoutId: 'r-trust',
      emphasis: 'standard',
    },
    {
      id: 'paid-dependency',
      label: 'Paid Dependency',
      value: paidDependency() === 'high' ? 'High' : 'Moderate',
      exposure: null,
      detail:
        'Blended CPC runs above break-even. Paid is renting the positions authority would hold.',
      score: null,
      tone: 'warning',
      trend: 'deteriorating',
      confidence: 'medium',
      readoutId: 'r-paid-dependency',
      emphasis: 'standard',
    },
    {
      id: 'timing-window',
      label: 'Strategic Timing Window',
      value: `${TIMING.windowMonths} months`,
      exposure: null,
      detail: `${TIMING.positionLabel} market at ${TIMING.marketReadiness}/100 readiness. ${TIMING.dominantSignal}.`,
      score: TIMING.marketReadiness,
      tone: 'warning',
      trend: 'deteriorating',
      confidence: 'directional',
      readoutId: 'r-timing',
      emphasis: 'standard',
    },
  ]
}
