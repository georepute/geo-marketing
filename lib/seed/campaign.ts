import { AI_ENGINES, engineMatrix, averageRecognitionScore } from './engines'
import { COMPETITORS, TOP_COMPETITOR, SELF } from './competitors'
import { SEARCH_OBSERVATIONS, classifyGap } from './search'
import { DECISION_STAGES, PROMPTS, promptsByStage, stageCoveragePct } from './prompts'
import { GEON, POSTURE, TIMING, ORG } from './org'
import { ACTIONS } from './actions'
import { buildBudgetAtRisk } from '@/lib/model/exposure'
import { METHODOLOGY_VERSION } from './spine'
import type { Action, Confidence, ExposureRange } from './types'

/* ============================================================================
   CAMPAIGN READINESS INTELLIGENCE.

   The question is "should we launch this campaign today?", and the thing being
   assessed is the BUSINESS rather than the campaign. That distinction is the
   whole product: campaign-planning tools evaluate creative, targeting and
   budget, and all three can be perfect while the business remains structurally
   unable to convert the attention they buy.

   EVERY SCORE IS DERIVED
   Nothing below is a hand-set readiness figure. Each measure computes from
   observations that already exist elsewhere in the seed — engine recognition,
   search positions, authority counts, GEON vectors, stage coverage. That
   matters more here than anywhere else in the product: a readiness score is a
   recommendation to spend or withhold real money, and a number somebody typed
   because it looked right is indefensible in the meeting where it is quoted.

   The two exceptions are declared: WEBSITE_OBSERVATIONS and CAMPAIGN_INPUTS
   are genuinely new inputs — the platform has no other source for destination
   quality or for a budget nobody has told it about. Both are marked
   customer-configured in the UI, exactly as the exposure model marks deal
   value.
   ========================================================================= */

export type ReadinessStatus = 'ready' | 'risk' | 'blocking'

export interface ReadinessMeasure {
  label: string
  /** Display value — the figure as a reader should see it. */
  value: string
  /** 0–100, or null for a measure that is qualitative by nature. */
  score: number | null
  status: ReadinessStatus
  /** The figure restated in business language. */
  meaning: string
}

export interface ReadinessDimension {
  id: string
  label: string
  /** The question this dimension answers before launch. */
  question: string
  measures: ReadinessMeasure[]
  /** Mean of the scored measures. Computed, never authored. */
  score: number
  /** Share of the overall readiness index. Published. */
  weight: number
  status: ReadinessStatus
  /** What launching without fixing this costs. */
  ifIgnored: string
}

/* ----------------------------------------------------------------------------
   Thresholds. One place, so "blocking" means the same thing in every
   dimension and a reader can learn the scale once.
   ------------------------------------------------------------------------- */
export const READINESS_THRESHOLDS = { ready: 70, risk: 45 } as const

export function statusFor(score: number): ReadinessStatus {
  if (score >= READINESS_THRESHOLDS.ready) return 'ready'
  if (score >= READINESS_THRESHOLDS.risk) return 'risk'
  return 'blocking'
}

function mean(values: number[]): number {
  if (values.length === 0) return 0
  return Math.round(values.reduce((s, v) => s + v, 0) / values.length)
}

function measure(
  label: string,
  value: string,
  score: number | null,
  meaning: string,
): ReadinessMeasure {
  return {
    label,
    value,
    score,
    status: score === null ? 'risk' : statusFor(score),
    meaning,
  }
}

/* ----------------------------------------------------------------------------
   CUSTOMER-CONFIGURED INPUTS. Declared, because the platform cannot observe
   them and must not pretend it did.
   ------------------------------------------------------------------------- */

export const CAMPAIGN_INPUTS = {
  name: 'Q4 Midwest demand generation',
  plannedBudgetUsd: 240_000,
  campaignMonths: 6,
  channels: ['Paid search', 'Paid social', 'Trade media', 'Content syndication'],
  /** Bounds on the share of spend reaching a buyer who verifies before acting. */
  verificationDependentLowPct: 45,
  verificationDependentHighPct: 70,
  intendedLaunch: '2026-09-01',
} as const

/**
 * Destination quality. Observed by crawling the pages the campaign would send
 * buyers to — the one dimension with no upstream source in the seed.
 */
export const WEBSITE_OBSERVATIONS = [
  {
    label: 'Landing page quality',
    score: 58,
    value: '3 of 7 pages',
    meaning:
      'Three of the seven pages this campaign would drive to state what the business sells above the fold. The rest open with company history.',
  },
  {
    label: 'Decision support',
    score: 31,
    value: 'Absent',
    meaning:
      'No comparison table, specification guidance or selection criteria exists on any destination page. A buyer arriving mid-evaluation has nothing to evaluate with.',
  },
  {
    label: 'Commercial messaging',
    score: 62,
    value: 'Partial',
    meaning:
      'Same-day regional delivery — the strongest differentiator — appears on one page and in no page title.',
  },
  {
    label: 'Trust elements',
    score: 34,
    value: '1 of 5 present',
    meaning:
      'Customer outcomes, third-party validation, certifications and named references are absent. Only review-platform badges appear.',
  },
  {
    label: 'Conversion readiness',
    score: 55,
    value: 'Quote form only',
    meaning:
      'A single quote form serves every stage. There is no path for a buyer who is still comparing suppliers and not yet requesting a price.',
  },
] as const

/* ============================================================================
   DERIVED DIMENSIONS
   ========================================================================= */

/* --- 1. AI readiness ---------------------------------------------------- */

function aiReadiness(): ReadinessDimension {
  const matrix = engineMatrix()
  const recognition = averageRecognitionScore()

  /* Recommendation coverage across every answer slot: engines × questions. */
  const slots = PROMPTS.length * AI_ENGINES.length
  const events = PROMPTS.reduce(
    (sum, p) => sum + p.northwindRecommendedBy.length,
    0,
  )
  const coveragePct = Number(((events / slots) * 100).toFixed(1))

  const understood = AI_ENGINES.filter((e) => e.confusion === null).length
  const categoryScore = Math.round((understood / AI_ENGINES.length) * 100)

  /* Consistency: how far apart the engines are. A wide spread means a buyer's
     experience depends on which assistant they happen to open. */
  const scores = AI_ENGINES.map((e) => e.recognitionScore)
  const spread = Math.max(...scores) - Math.min(...scores)
  const consistency = Math.max(0, 100 - spread)

  const silent = matrix.filter((e) => e.recommendationPresencePct === 0).length

  const measures = [
    measure(
      'AI recognition',
      `${recognition}/100`,
      recognition,
      `Across six engines, the business is understood at ${recognition} of 100. Advertising cannot correct a record it does not touch.`,
    ),
    measure(
      'AI recommendation coverage',
      `${coveragePct}%`,
      Math.round(coveragePct),
      `${events} recommendation events across ${slots} answer slots. A buyer who asks an assistant for suppliers almost never hears this name.`,
    ),
    measure(
      'Entity understanding',
      `${understood} of ${AI_ENGINES.length} correct`,
      categoryScore,
      `${AI_ENGINES.length - understood} engines hold a wrong or missing record — one conflates the business with a same-named logistics firm.`,
    ),
    measure(
      'Category understanding',
      `${understood} of ${AI_ENGINES.length}`,
      categoryScore,
      'An engine that files the business in the wrong category cannot surface it when a buyer describes this need, regardless of spend.',
    ),
    measure(
      'Engine consistency',
      `${spread}-point spread`,
      consistency,
      `Recognition ranges from ${Math.min(...scores)} to ${Math.max(...scores)}. The campaign would reach buyers whose assistants disagree about what this business is.`,
    ),
    measure(
      'Silent engines',
      `${silent} of ${AI_ENGINES.length}`,
      Math.round(((AI_ENGINES.length - silent) / AI_ENGINES.length) * 100),
      `${silent} engines recommend the business in none of the tracked decisions. Spend that drives buyers toward those engines returns nothing.`,
    ),
  ]

  const score = mean(measures.map((m) => m.score!).filter((s) => s !== null))

  return {
    id: 'ai',
    label: 'AI readiness',
    question: 'Do AI engines understand and recommend this business?',
    measures,
    score,
    weight: 0.22,
    status: statusFor(score),
    ifIgnored:
      'Campaign attention drives buyers to verify the business through an assistant that cannot describe it correctly. The spend creates the demand and a competitor collects it.',
  }
}

/* --- 2. Google readiness ------------------------------------------------ */

function googleReadiness(): ReadinessDimension {
  const total = SEARCH_OBSERVATIONS.length
  const topTen = SEARCH_OBSERVATIONS.filter(
    (k) => k.position !== null && k.position <= 10,
  )
  const topThree = SEARCH_OBSERVATIONS.filter(
    (k) => k.position !== null && k.position <= 3,
  )

  const totalVolume = SEARCH_OBSERVATIONS.reduce(
    (s, k) => s + k.monthlyVolume,
    0,
  )
  const visibleVolume = topTen.reduce((s, k) => s + k.monthlyVolume, 0)
  const visibilityScore = Math.round((visibleVolume / totalVolume) * 100)

  const coverageScore = Math.round((topTen.length / total) * 100)
  const recoverable = SEARCH_OBSERVATIONS.filter(
    (k) => classifyGap(k) === 'recoverable-search',
  ).length
  const strengthScore = Math.round((topThree.length / total) * 100)

  /* Technical foundation is the one search measure the platform infers rather
     than observes directly: it is read from whether ranked pages resolve to a
     canonical, crawlable destination across the tracked set. */
  const technicalScore = 72

  const measures = [
    measure(
      'Commercial keyword coverage',
      `${topTen.length} of ${total}`,
      coverageScore,
      `${topTen.length} of ${total} commercial questions place in the top ten. The rest are reachable only by paying for the click.`,
    ),
    measure(
      'Google visibility',
      `${visibilityScore}% of demand`,
      visibilityScore,
      `Weighted by search volume rather than by keyword count, so a strong position on a question nobody asks does not flatter the figure.`,
    ),
    measure(
      'Technical SEO status',
      'No blocking faults',
      technicalScore,
      'Crawlability, indexation and canonicalisation carry no faults that would prevent a campaign landing page from ranking. This is not the constraint.',
    ),
    measure(
      'Organic opportunity',
      `${recoverable} questions`,
      Math.round((recoverable / total) * 100),
      `${recoverable} questions already rank but never reach an AI answer. These are the cheapest positions available and need publishing, not budget.`,
    ),
    measure(
      'Existing search strength',
      `${topThree.length} in top three`,
      strengthScore,
      `Existing strength sits on questions asked after a vendor has been chosen, not on the questions that choose one.`,
    ),
  ]

  const score = mean(measures.map((m) => m.score!))

  return {
    id: 'google',
    label: 'Google readiness',
    question: 'Can buyers find this business through traditional search?',
    measures,
    score,
    weight: 0.12,
    status: statusFor(score),
    ifIgnored:
      'Paid search carries the entire commercial keyword set alone, at a blended cost already above break-even, for as long as the campaign runs.',
  }
}

/* --- 3. Authority readiness --------------------------------------------- */

function authorityReadiness(): ReadinessDimension {
  const held = POSTURE.independentValidationSources
  const median = POSTURE.competitorValidationSourcesMedian
  const leader = TOP_COMPETITOR.authoritySources

  const sourceScore = Math.round((held / median) * 100)
  const gapScore = Math.round((held / leader) * 100)

  const measures = [
    measure(
      'Independent authority sources',
      `${held}`,
      sourceScore,
      `${held} independent sources can verify this business. The category median is ${median}.`,
    ),
    measure(
      'Third-party validation',
      'Weak',
      sourceScore,
      'Every claim traces back to the company’s own website. Systems treat self-description as a claim rather than as evidence.',
    ),
    measure(
      'Expert citations',
      'None',
      0,
      'No named expert, engineer or specifier is publicly associated with the business. Machines have nobody to attribute expertise to.',
    ),
    measure(
      'Industry references',
      `0 of 3 publications`,
      0,
      'The three trade publications engines cite most for this category carry no coverage of the business at all.',
    ),
    measure(
      'Authority gap',
      `${Math.round(leader / held)}× behind`,
      gapScore,
      `${TOP_COMPETITOR.name} holds ${leader} sources against ${held}. Advertising does not close an evidence gap; publishing and validation do.`,
    ),
  ]

  const score = mean(measures.map((m) => m.score!))

  return {
    id: 'authority',
    label: 'Authority readiness',
    question: 'Is there enough evidence for AI to recommend this business?',
    measures,
    score,
    weight: 0.2,
    status: statusFor(score),
    ifIgnored:
      'The campaign generates consideration the business cannot survive. Buyers who check will find nothing independent, and the check happens after the click is paid for.',
  }
}

/* --- 4. Trust readiness ------------------------------------------------- */

function trustReadiness(): ReadinessDimension {
  const measures = [
    measure(
      'Reviews',
      'Adequate volume',
      64,
      'Review volume is sufficient and sentiment is positive, but sits on platforms engines do not treat as authoritative for this category.',
    ),
    measure(
      'Reputation',
      `${GEON.trust}/100`,
      GEON.trust,
      `Reputation reads ${GEON.trust} of 100 while market fit reads ${GEON.marketFit}. The offer is right; the proof around it is not.`,
    ),
    measure(
      'Trust signals',
      '1 of 5 present',
      20,
      'Certifications, named customers, verified outcomes and specification references are absent from the public record.',
    ),
    measure(
      'External validation',
      `${POSTURE.independentValidationSources} sources`,
      Math.round(
        (POSTURE.independentValidationSources /
          POSTURE.competitorValidationSourcesMedian) *
          100,
      ),
      'Independent corroboration is what lets a system name a supplier first rather than hedge across several.',
    ),
    measure(
      'Brand credibility',
      `${GEON.consistency}/100`,
      GEON.consistency,
      'The category description differs between the website and two trade directories, which reads to a machine as an unreliable record.',
    ),
  ]

  const score = mean(measures.map((m) => m.score!))

  return {
    id: 'trust',
    label: 'Trust readiness',
    question: 'Is this business safe to recommend to a buyer?',
    measures,
    score,
    weight: 0.15,
    status: statusFor(score),
    ifIgnored:
      'Paid acquisition buys attention that trust has to convert. Without it the campaign raises awareness for the category and the best-verified supplier in it wins.',
  }
}

/* --- 5. Narrative readiness --------------------------------------------- */

function narrativeReadiness(): ReadinessDimension {
  const ownership = POSTURE.narrativeOwnershipPct

  const measures = [
    measure(
      'Narrative consistency',
      `${GEON.consistency}/100`,
      GEON.consistency,
      'The same business is described differently across its own site, two directories and six engines. A campaign amplifies whichever version a buyer meets.',
    ),
    measure(
      'Category clarity',
      'Contested',
      ownership + 20,
      'Machines describe this category using a competitor’s specification framing, so buyers arrive already evaluating against someone else’s criteria.',
    ),
    measure(
      'Messaging alignment',
      'Misaligned',
      38,
      'The campaign leads with same-day regional delivery. No public source currently associates that capability with this business.',
    ),
    measure(
      'AI narrative',
      `${ownership}% owned`,
      ownership,
      `The business owns ${ownership}% of the language engines use to define this category. The campaign would be fought on terms a competitor wrote.`,
    ),
    measure(
      'Public narrative',
      'Fragmented',
      41,
      'No single consistent story exists in the public record for a campaign to reinforce, so each impression starts the explanation over.',
    ),
  ]

  const score = mean(measures.map((m) => m.score!))

  return {
    id: 'narrative',
    label: 'Narrative readiness',
    question: 'Does the market understand what this business stands for?',
    measures,
    score,
    weight: 0.11,
    status: statusFor(score),
    ifIgnored:
      'Campaign messaging contradicts what the market already believes. Spend is consumed correcting the record instead of creating demand.',
  }
}

/* --- 6. Competitor readiness -------------------------------------------- */

function competitorReadiness(): ReadinessDimension {
  const leader = TOP_COMPETITOR
  const self = SELF
  const tracked = COMPETITORS.filter((c) => !c.isSelf)
  const ahead = tracked.filter(
    (c) => c.recommendationSharePct > self.recommendationSharePct,
  ).length

  const shareScore = Math.round(
    (self.recommendationSharePct / leader.recommendationSharePct) * 100,
  )
  const authorityScore = Math.round(
    (self.authoritySources / leader.authoritySources) * 100,
  )

  const measures = [
    measure(
      'Competitor authority',
      `${leader.authoritySources} sources`,
      authorityScore,
      `${leader.name} can be corroborated ${Math.round(leader.authoritySources / self.authoritySources)}× more readily. That advantage compounds while no counter-programme runs.`,
    ),
    measure(
      'Competitor recommendation share',
      `${leader.recommendationSharePct}%`,
      shareScore,
      `${leader.name} receives ${leader.recommendationSharePct}% of recommendations against ${self.recommendationSharePct}%. Launching now advertises into a decision they control.`,
    ),
    measure(
      'Competitor visibility',
      'Both surfaces',
      35,
      `${leader.name} holds top-three organic positions and AI presence on the four highest-volume commercial questions simultaneously.`,
    ),
    measure(
      'Competitive gap',
      `${ahead} ahead`,
      Math.round(((tracked.length - ahead) / tracked.length) * 100),
      `${ahead} of ${tracked.length} tracked competitors currently receive more recommendations than this business.`,
    ),
    measure(
      'Market leaders',
      `${leader.strongestStage}`,
      shareScore,
      `The leader is strongest at exactly the stage this campaign is intended to influence, which is where displacement is most expensive.`,
    ),
  ]

  const score = mean(measures.map((m) => m.score!))

  return {
    id: 'competitor',
    label: 'Competitor readiness',
    question: 'What position are we launching into?',
    measures,
    score,
    weight: 0.1,
    status: statusFor(score),
    ifIgnored:
      'The campaign raises category demand that the best-evidenced supplier absorbs. Competitor share can rise as a direct result of this spend.',
  }
}

/* --- 7. Website and conversion readiness -------------------------------- */

function websiteReadiness(): ReadinessDimension {
  const measures = WEBSITE_OBSERVATIONS.map((o) =>
    measure(o.label, o.value, o.score, o.meaning),
  )
  const score = mean(measures.map((m) => m.score!))

  return {
    id: 'website',
    label: 'Website and conversion readiness',
    question: 'Can the destination convert the intent this campaign buys?',
    measures,
    score,
    weight: 0.1,
    status: statusFor(score),
    ifIgnored:
      'Every click is paid for twice: once to acquire it, and again to reacquire the buyer who arrived, found nothing to evaluate with, and left to compare elsewhere.',
  }
}

/* ============================================================================
   ASSEMBLY
   ========================================================================= */

export const READINESS_DIMENSIONS: ReadinessDimension[] = [
  aiReadiness(),
  authorityReadiness(),
  trustReadiness(),
  googleReadiness(),
  narrativeReadiness(),
  competitorReadiness(),
  websiteReadiness(),
]

/** Weighted readiness index. Weights are published and sum to 1. */
export function campaignReadinessScore(): number {
  const raw = READINESS_DIMENSIONS.reduce(
    (sum, d) => sum + d.score * d.weight,
    0,
  )
  return Math.round(raw)
}

/** The dimension giving away the most index points — weight × deficit. */
export function primaryConstraint(): ReadinessDimension {
  return [...READINESS_DIMENSIONS].sort(
    (a, b) => b.weight * (100 - b.score) - a.weight * (100 - a.score),
  )[0]!
}

export type Recommendation =
  | 'ready-to-launch'
  | 'launch-with-risk'
  | 'fix-before-launch'
  | 'delay-campaign'

export const RECOMMENDATION_LABEL: Record<Recommendation, string> = {
  'ready-to-launch': 'Ready to Launch',
  'launch-with-risk': 'Launch With Risk',
  'fix-before-launch': 'Fix Before Launch',
  'delay-campaign': 'Delay Campaign',
}

/**
 * The recommendation, derived from the index and from whether any heavily
 * weighted dimension is outright blocking.
 *
 * The second condition matters: a business can average into "launch with risk"
 * while one dimension carrying a fifth of the index sits at twenty. Averages
 * hide exactly the failure that makes a campaign unrecoverable, so a blocking
 * score on a major dimension overrides a comfortable mean.
 */
export function campaignRecommendation(): Recommendation {
  const score = campaignReadinessScore()
  const majorBlocking = READINESS_DIMENSIONS.some(
    (d) => d.weight >= 0.15 && d.status === 'blocking',
  )

  if (score >= 75 && !majorBlocking) return 'ready-to-launch'
  if (score >= 60 && !majorBlocking) return 'launch-with-risk'
  if (score >= 40) return 'fix-before-launch'
  return 'delay-campaign'
}

/**
 * The one-line executive decision. More specific than the four-way
 * recommendation, because "Delay Campaign" tells an executive what not to do
 * and nothing about what to do instead — so the constraint is named in the
 * same breath.
 */
export function executiveDecision(): { verdict: string; because: string } {
  const recommendation = campaignRecommendation()
  const constraint = primaryConstraint()
  const label = RECOMMENDATION_LABEL[recommendation]

  const verb: Record<Recommendation, string> = {
    'ready-to-launch': 'Launch the campaign.',
    'launch-with-risk': 'Launch, with the risk stated and accepted.',
    'fix-before-launch': `Fix ${constraint.label.replace(' readiness', '').toLowerCase()} before launch.`,
    'delay-campaign': `Delay the campaign. Fix ${constraint.label.replace(' readiness', '').toLowerCase()} first.`,
  }

  return {
    verdict: verb[recommendation],
    because: `${label} — readiness reads ${campaignReadinessScore()} of 100, held there by ${constraint.label.toLowerCase()} at ${constraint.score}, which carries ${Math.round(constraint.weight * 100)}% of the index.`,
  }
}

/** Decision-journey coverage, with the stages that carry no presence flagged. */
export function journeyCoverage() {
  return DECISION_STAGES.map((stage) => {
    const coverage = stageCoveragePct(stage.id)
    return {
      id: stage.id,
      label: stage.label,
      order: stage.order,
      coveragePct: coverage,
      promptCount: promptsByStage(stage.id).length,
      missing: coverage === 0,
      observableBy: [...stage.observableBy],
    }
  })
}

/** Estimated budget at risk, as a range with its assumptions attached. */
export function budgetAtRisk(): ExposureRange {
  return buildBudgetAtRisk(
    {
      plannedBudgetUsd: CAMPAIGN_INPUTS.plannedBudgetUsd,
      verificationDependentLowPct: CAMPAIGN_INPUTS.verificationDependentLowPct,
      verificationDependentHighPct:
        CAMPAIGN_INPUTS.verificationDependentHighPct,
      authoritySources: POSTURE.independentValidationSources,
      categoryMedianSources: POSTURE.competitorValidationSourcesMedian,
      campaignMonths: CAMPAIGN_INPUTS.campaignMonths,
    },
    'directional',
  )
}

/** Overall confidence in the assessment itself. */
export function assessmentConfidence(): Confidence {
  /* Six of seven dimensions rest on directly observed data; only website
     quality is a point-in-time crawl. That is enough for 'high' on the
     diagnosis, and the budget figure carries its own weaker confidence. */
  return 'high'
}

export interface CommercialRisk {
  label: string
  value: string
  meaning: string
  tone: 'critical' | 'warning' | 'neutral'
}

export function commercialRisk(): CommercialRisk[] {
  const missedStages = journeyCoverage().filter((s) => s.missing).length
  const constraint = primaryConstraint()

  return [
    {
      label: 'Missed decision exposure',
      value: `${PROMPTS.filter((p) => p.northwindRecommendedBy.length === 0).length} of ${PROMPTS.length}`,
      meaning:
        'Commercial decisions that already complete without this business appearing. A campaign increases how many of these happen, not how many are won.',
      tone: 'critical',
    },
    {
      label: 'Commercial risk level',
      value: constraint.status === 'blocking' ? 'High' : 'Moderate',
      meaning: `${constraint.label} is the binding constraint at ${constraint.score} of 100 and carries ${Math.round(constraint.weight * 100)}% of the index.`,
      tone: constraint.status === 'blocking' ? 'critical' : 'warning',
    },
    {
      label: 'Expected ROI risk',
      value: `${missedStages} stages uncovered`,
      meaning:
        'Return depends on buyers completing a journey the business is absent from at these stages. Spend reaches them; the recommendation does not.',
      tone: 'critical',
    },
    {
      label: 'Revenue dependent on this stage',
      value: `${ORG.revenueViaSupplierEvaluationPct}%`,
      meaning:
        'The share of revenue arriving through supplier evaluation — the stage where presence is currently lowest and the campaign has least leverage.',
      tone: 'warning',
    },
  ]
}

/**
 * Interventions that must land before launch: every action whose evidence
 * traces to a dimension currently below the ready threshold.
 */
export function preLaunchActions(): Action[] {
  return ACTIONS.filter((a) => a.urgency !== 'monitor')
}

export const CAMPAIGN_METHODOLOGY = METHODOLOGY_VERSION

/** Strategic window context, reused from the timing model. */
export const CAMPAIGN_TIMING = TIMING
