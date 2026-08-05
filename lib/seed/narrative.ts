import { AI_ENGINES } from './engines'
import { COMPETITORS, TOP_COMPETITOR, SELF } from './competitors'
import { PROMPTS } from './prompts'
import { POSTURE, GEON } from './org'
import { METHODOLOGY_VERSION } from './spine'
import type { Confidence, Effort, Prompt } from './types'

/* ============================================================================
   PUBLIC NARRATIVE INTELLIGENCE.

   The question: what story is the market telling about us, and how is it
   influencing decisions?

   WHY THIS IS NOT MENTION-COUNTING
   Mention volume is the metric this page deliberately does not lead with. A
   business can be mentioned constantly inside a story that costs it every
   deal, and mentioned rarely inside one that wins them. What decides outcomes
   is which narratives are active, who owns them, and whether the machines
   explaining the category are using your language or a competitor's.

   WHAT IS DERIVED AND WHAT IS OBSERVED
   The per-engine narratives are not authored here: they are AI_ENGINES'
   existing `understoodAs` and `confusion` fields, which already record what
   each engine believes. Public questions are the real PROMPTS corpus,
   partitioned by intent and stage. Ownership percentages come from POSTURE.

   The narrative inventory, media coverage and risk register are genuinely new
   observations — this is the engine that reads them, and nothing upstream in
   the seed holds a narrative. They are internally consistent with everything
   else: the negative narratives are the ones the authority and recognition
   findings predict, not a separate story.
   ========================================================================= */

export type Polarity = 'positive' | 'neutral' | 'negative'
export type Momentum = 'emerging' | 'growing' | 'steady' | 'declining'

/* ----------------------------------------------------------------------------
   1 — Narrative health
   ------------------------------------------------------------------------- */

export interface NarrativeHealthMeasure {
  label: string
  value: string
  score: number
  meaning: string
}

/* ----------------------------------------------------------------------------
   2 — What each engine says. Read from the engine records themselves.
   ------------------------------------------------------------------------- */

export interface EngineNarrative {
  id: string
  name: string
  /** The narrative this engine currently carries, verbatim from its record. */
  narrative: string
  /** Where that narrative is wrong, or null when it is not. */
  divergence: string | null
  polarity: Polarity
  recognitionScore: number
}

export function engineNarratives(): EngineNarrative[] {
  return AI_ENGINES.map((engine) => ({
    id: engine.id,
    name: engine.name,
    narrative: engine.understoodAs,
    divergence: engine.confusion,
    /* An engine that holds a wrong record is not neutral about this business —
       it is actively telling buyers something untrue, which is a negative
       narrative regardless of tone. */
    polarity: engine.confusion === null ? 'positive' : 'negative',
    recognitionScore: engine.recognitionScore,
  }))
}

/** How far apart the engines are on what this business even is. */
export function engineDivergence(): {
  agreeing: number
  diverging: number
  spread: number
  summary: string
} {
  const narratives = engineNarratives()
  const agreeing = narratives.filter((n) => n.divergence === null).length
  const scores = narratives.map((n) => n.recognitionScore)
  const spread = Math.max(...scores) - Math.min(...scores)

  return {
    agreeing,
    diverging: narratives.length - agreeing,
    spread,
    summary: `${narratives.length - agreeing} of ${narratives.length} engines carry a materially different account of this business. A buyer's understanding depends on which assistant they happen to open.`,
  }
}

/* ----------------------------------------------------------------------------
   3 — The active narrative inventory.
   ------------------------------------------------------------------------- */

export interface Narrative {
  id: string
  /** The story itself, as the market would state it. */
  statement: string
  polarity: Polarity
  momentum: Momentum
  /** Share of category conversation carrying this narrative. */
  reachPct: number
  /** Who this story currently belongs to. */
  owner: 'business' | 'competitor' | 'unclaimed' | 'shared'
  ownerName: string | null
  /** Where it is being observed. */
  sources: string[]
  /** What it does to a buying decision. */
  commercialEffect: string
}

export const NARRATIVES: Narrative[] = [
  {
    id: 'n-regional-speed',
    statement: 'Regional distributors deliver faster than national ones.',
    polarity: 'positive',
    momentum: 'emerging',
    reachPct: 9,
    owner: 'unclaimed',
    ownerName: null,
    sources: ['Trade forums', 'Perplexity', 'Buyer discussion'],
    commercialEffect:
      'The single narrative that most favours this business, and nobody owns it. Same-day regional delivery is a genuine capability that no public source currently attaches to this name.',
  },
  {
    id: 'n-fill-rate',
    statement: 'Fill rate and catalogue breadth are how you choose a distributor.',
    polarity: 'negative',
    momentum: 'growing',
    reachPct: 31,
    owner: 'competitor',
    ownerName: TOP_COMPETITOR.name,
    sources: ['All six engines', 'Trade publications'],
    commercialEffect:
      'The dominant evaluation framing, and it is a competitor’s. Buyers arrive already scoring suppliers on the two criteria where a national distributor wins by default.',
  },
  {
    id: 'n-specification',
    statement: 'Specification depth separates serious suppliers from resellers.',
    polarity: 'negative',
    momentum: 'steady',
    reachPct: 18,
    owner: 'competitor',
    ownerName: 'Meridian Supply Co',
    sources: ['ChatGPT', 'Claude', 'Specification guides'],
    commercialEffect:
      'Published first by a competitor, so it became the vocabulary engines learned. It positions this business as a reseller by omission rather than by argument.',
  },
  {
    id: 'n-consolidation',
    statement: 'Consolidating MRO suppliers reduces cost and administrative load.',
    polarity: 'negative',
    momentum: 'growing',
    reachPct: 14,
    owner: 'shared',
    ownerName: 'Category-wide',
    sources: ['All six engines', 'Procurement publications'],
    commercialEffect:
      'Favours whichever supplier is already largest. A regional specialist is read as the thing being consolidated away rather than the one consolidating.',
  },
  {
    id: 'n-single-source-risk',
    statement: 'Single-source supplier dependency is an operational risk.',
    polarity: 'positive',
    momentum: 'steady',
    reachPct: 11,
    owner: 'unclaimed',
    ownerName: null,
    sources: ['Perplexity', 'Copilot', 'Risk guidance'],
    commercialEffect:
      'Directly contradicts the consolidation narrative and favours a strong secondary supplier. Neither this business nor any competitor has claimed it.',
  },
  {
    id: 'n-regional-limited',
    statement: 'Regional suppliers cannot support multi-plant operations.',
    polarity: 'negative',
    momentum: 'emerging',
    reachPct: 7,
    owner: 'competitor',
    ownerName: TOP_COMPETITOR.name,
    sources: ['Gemini', 'Copilot', 'Comparison content'],
    commercialEffect:
      'The most dangerous emerging narrative on this list. It is not yet dominant and it is factually contestable, which means it is still cheap to answer.',
  },
  {
    id: 'n-price-competitive',
    statement: 'Midwest fastener pricing is broadly comparable across suppliers.',
    polarity: 'neutral',
    momentum: 'steady',
    reachPct: 6,
    owner: 'shared',
    ownerName: 'Category-wide',
    sources: ['Aggregator pages', 'Grok'],
    commercialEffect:
      'Neutral on its face, but it removes price as a differentiator and pushes the decision onto evidence — which is the axis this business currently loses on.',
  },
  {
    id: 'n-hardware-retail',
    statement: 'Northwind Supply is a hardware retailer.',
    polarity: 'negative',
    momentum: 'declining',
    reachPct: 4,
    owner: 'business',
    ownerName: SELF.name,
    sources: ['ChatGPT'],
    commercialEffect:
      'A factual error, carried by one engine, that removes the business from every supplier-evaluation answer it appears in. Declining, but not yet corrected.',
  },
]

export function narrativesByPolarity(polarity: Polarity): Narrative[] {
  return NARRATIVES.filter((n) => n.polarity === polarity)
}

export function narrativesByMomentum(momentum: Momentum): Narrative[] {
  return NARRATIVES.filter((n) => n.momentum === momentum)
}

/* ----------------------------------------------------------------------------
   4 — Ownership. Derived from the inventory, weighted by reach.
   ------------------------------------------------------------------------- */

export function narrativeOwnership() {
  const total = NARRATIVES.reduce((s, n) => s + n.reachPct, 0)
  const share = (owner: Narrative['owner']) =>
    Number(
      (
        (NARRATIVES.filter((n) => n.owner === owner).reduce(
          (s, n) => s + n.reachPct,
          0,
        ) /
          total) *
        100
      ).toFixed(1),
    )

  return {
    business: share('business'),
    competitor: share('competitor'),
    unclaimed: share('unclaimed'),
    shared: share('shared'),
    /* The headline figure the rest of the product already publishes. Kept
       distinct from the reach-weighted split above, which answers a narrower
       question about this specific inventory. */
    categoryLanguageOwnedPct: POSTURE.narrativeOwnershipPct,
  }
}

/* ----------------------------------------------------------------------------
   5 — Competitor narratives.
   ------------------------------------------------------------------------- */

export interface CompetitorNarrative {
  name: string
  positioning: string
  strength: string
  weakness: string
  overlap: string
  opportunity: string
  narrativeSharePct: number
}

export function competitorNarratives(): CompetitorNarrative[] {
  const detail: Record<string, Omit<CompetitorNarrative, 'name' | 'narrativeSharePct'>> = {
    kestrel: {
      positioning: 'The safe national choice with published comparisons.',
      strength:
        'Owns the evaluation criteria itself. Engines cite its comparison library when explaining how to choose a supplier at all.',
      weakness:
        'Its case rests on breadth and fill rate. It has no response prepared on response time or regional service depth.',
      overlap:
        'Competes directly on supplier-evaluation questions, where it is named first in four of seven.',
      opportunity:
        'Its own framing concedes that speed is a separate axis. A published response-time standard splits the criterion it defined.',
    },
    meridian: {
      positioning: 'The technical authority on specification.',
      strength:
        'Its specification guidance became the category’s default vocabulary because it published first, not because it is more correct.',
      weakness:
        'Specification depth does not answer availability. It is largely absent from questions about delivery and continuity.',
      overlap:
        'Owns solution-evaluation questions upstream of where this business competes.',
      opportunity:
        'Its vocabulary can be adopted and extended rather than fought. Speaking its language while adding availability outflanks it.',
    },
    halvorsen: {
      positioning: 'The educator that reaches buyers first.',
      strength:
        'Enters the decision at research, before evaluation criteria exist, and shapes them by arriving early.',
      weakness:
        'Thin at the point of purchase. Rarely named when a buyer asks whom to actually choose.',
      overlap:
        'Owns early-stage questions this business is also absent from, but does not convert them.',
      opportunity:
        'Research-stage presence is uncontested at the point where education becomes a shortlist.',
    },
    atlas: {
      positioning: 'The procurement-checklist incumbent.',
      strength:
        'Named on procurement documentation that engines cite at the moment of purchase.',
      weakness:
        'Almost no presence earlier in the journey. Its position is administrative rather than argued.',
      overlap:
        'Competes only at purchase decision, where this business also has no coverage.',
      opportunity:
        'A checklist position is winnable through documentation rather than through reputation.',
    },
  }

  return COMPETITORS.filter((c) => !c.isSelf).map((c) => ({
    name: c.name,
    narrativeSharePct: c.recommendationSharePct,
    ...detail[c.id]!,
  }))
}

/* ----------------------------------------------------------------------------
   6 — Media narrative.
   ------------------------------------------------------------------------- */

export interface MediaTopic {
  topic: string
  tone: Polarity
  momentum: Momentum
  publications: string[]
  note: string
}

export const MEDIA_TOPICS: MediaTopic[] = [
  {
    topic: 'MRO supplier consolidation across Midwest manufacturing',
    tone: 'neutral',
    momentum: 'growing',
    publications: ['Industrial Distribution', 'Modern Supply Chain'],
    note: 'The most active category story. This business is not quoted in any of the eleven pieces published this quarter.',
  },
  {
    topic: 'Fastener supply continuity after tariff changes',
    tone: 'neutral',
    momentum: 'emerging',
    publications: ['Fastener Technology', 'Industrial Distribution'],
    note: 'An emerging story where regional inventory depth is the natural expert angle, and no regional distributor has been quoted yet.',
  },
  {
    topic: 'Counterfeit fasteners in industrial supply chains',
    tone: 'negative',
    momentum: 'growing',
    publications: ['Fastener Technology', 'Plant Engineering'],
    note: 'A category-level trust story. Suppliers who comment become the trusted ones; those who stay silent are grouped with the problem.',
  },
  {
    topic: 'Vendor-managed inventory adoption in mid-market plants',
    tone: 'positive',
    momentum: 'steady',
    publications: ['Modern Supply Chain', 'Plant Engineering'],
    note: 'A competitor is quoted in three of four pieces. The topic maps directly onto a service this business already operates.',
  },
]

export function mediaMomentum(): {
  totalTopics: number
  appearingIn: number
  summary: string
} {
  return {
    totalTopics: MEDIA_TOPICS.length,
    appearingIn: 0,
    summary:
      'The business appears in none of the four active category stories. Media narrative is currently being written entirely by others.',
  }
}

/* ----------------------------------------------------------------------------
   7 + 8 — What people actually ask. The real prompt corpus, partitioned.
   ------------------------------------------------------------------------- */

export interface QuestionGroup {
  id: string
  label: string
  description: string
  prompts: Prompt[]
}

export function publicQuestions(): QuestionGroup[] {
  return [
    {
      id: 'common',
      label: 'Most common questions',
      description:
        'What buyers ask before they have a supplier in mind. Presence here shapes the criteria everything later is judged against.',
      prompts: PROMPTS.filter((p) => p.stage === 'research'),
    },
    {
      id: 'concerns',
      label: 'Concerns and objections',
      description:
        'The risks buyers raise before committing. Answering these publicly is how a supplier becomes the safe choice rather than the cheap one.',
      prompts: PROMPTS.filter((p) => p.stage === 'concerns'),
    },
    {
      id: 'misconceptions',
      label: 'Misconceptions repeated as fact',
      description:
        'Claims machines currently repeat that are wrong. Each one removes the business from answers it should appear in.',
      prompts: [],
    },
  ]
}

export function buyingQuestions(): QuestionGroup[] {
  return [
    {
      id: 'recommendation',
      label: 'Recommendation questions',
      description:
        'A buyer asking directly whom to choose. The highest-value question class in the category, and the one that assigns the order.',
      prompts: PROMPTS.filter((p) => p.stage === 'supplier-evaluation'),
    },
    {
      id: 'comparison',
      label: 'Comparison questions',
      description:
        'A buyer weighing approaches rather than vendors. Whoever frames the comparison sets the criteria the vendor choice will use.',
      prompts: PROMPTS.filter((p) => p.stage === 'solution-evaluation'),
    },
    {
      id: 'transactional',
      label: 'Purchase questions',
      description:
        'A buyer who has already chosen. Presence here converts; it does not win anything that was not already won upstream.',
      prompts: PROMPTS.filter((p) => p.stage === 'purchase-decision'),
    },
  ]
}

/** Claims machines repeat that are not true. Read from engine confusion. */
export function misconceptions() {
  return AI_ENGINES.filter((e) => e.confusion !== null).map((e) => ({
    engine: e.name,
    claim: e.confusion!,
    recognitionScore: e.recognitionScore,
  }))
}

/* ----------------------------------------------------------------------------
   9 + 10 — Opportunities and risks.
   ------------------------------------------------------------------------- */

export interface NarrativeOpportunity {
  id: string
  topic: string
  kind: 'unowned' | 'emerging' | 'low-competition' | 'high-influence'
  influence: 'high' | 'medium' | 'low'
  competition: 'none' | 'low' | 'contested'
  rationale: string
}

export const NARRATIVE_OPPORTUNITIES: NarrativeOpportunity[] = [
  {
    id: 'o-response-time',
    topic: 'Response time as a supplier selection criterion',
    kind: 'unowned',
    influence: 'high',
    competition: 'none',
    rationale:
      'No competitor has claimed it, engines have no vocabulary for it, and it is the capability this business actually leads on. The single highest-return narrative available.',
  },
  {
    id: 'o-secondary-supplier',
    topic: 'The strategic case for a strong secondary supplier',
    kind: 'unowned',
    influence: 'high',
    competition: 'none',
    rationale:
      'Directly counters the consolidation narrative that currently favours national distributors, and reframes regional scale as risk management rather than as a limitation.',
  },
  {
    id: 'o-counterfeit',
    topic: 'Verification and provenance in fastener sourcing',
    kind: 'emerging',
    influence: 'high',
    competition: 'low',
    rationale:
      'An active media story with no supplier voice attached. Commenting converts a category-level trust concern into a reason to choose a specific supplier.',
  },
  {
    id: 'o-tariff-continuity',
    topic: 'Supply continuity under tariff volatility',
    kind: 'emerging',
    influence: 'medium',
    competition: 'low',
    rationale:
      'Regional inventory depth is the natural expert position on a story publications are actively looking for sources on.',
  },
  {
    id: 'o-vmi',
    topic: 'Vendor-managed inventory for mid-market plants',
    kind: 'low-competition',
    influence: 'medium',
    competition: 'contested',
    rationale:
      'A service already operated but never publicly associated with the business. One competitor is quoted in three of four pieces on it.',
  },
]

export interface NarrativeRisk {
  id: string
  statement: string
  kind:
    | 'emerging-negative'
    | 'reputation'
    | 'competitor-growth'
    | 'misinformation'
    | 'ai-misunderstanding'
  severity: 'high' | 'medium' | 'low'
  trajectory: Momentum
  evidence: string
  ifIgnored: string
}

export const NARRATIVE_RISKS: NarrativeRisk[] = [
  {
    id: 'r-regional-limited',
    statement: 'Regional suppliers cannot support multi-plant operations.',
    kind: 'emerging-negative',
    severity: 'high',
    trajectory: 'emerging',
    evidence:
      'Appearing in Gemini and Copilot answers on multi-site sourcing questions, sourced from a competitor comparison page.',
    ifIgnored:
      'Becomes the default objection to a regional supplier. Contestable now with published evidence; expensive to reverse once engines treat it as settled.',
  },
  {
    id: 'r-entity-conflation',
    statement:
      'The business is conflated with a same-named logistics firm.',
    kind: 'misinformation',
    severity: 'high',
    trajectory: 'steady',
    evidence:
      'Gemini resolves the wrong entity on category questions and recognises the business at 24 of 100.',
    ifIgnored:
      'Every impression delivered to a Gemini user reinforces an incorrect record. Campaign spend actively strengthens the wrong association.',
  },
  {
    id: 'r-hardware-retailer',
    statement: 'The business is described as a hardware retailer.',
    kind: 'ai-misunderstanding',
    severity: 'medium',
    trajectory: 'declining',
    evidence:
      'ChatGPT categorises the business as retail rather than MRO distribution, removing it from supplier-evaluation answers.',
    ifIgnored:
      'A single wrong category record continues to exclude the business from the question class that assigns orders.',
  },
  {
    id: 'r-competitor-criteria',
    statement:
      'Evaluation criteria are increasingly stated in a competitor’s terms.',
    kind: 'competitor-growth',
    severity: 'high',
    trajectory: 'growing',
    evidence:
      'Fill rate and catalogue breadth are cited first by three of six engines when explaining how to choose a distributor.',
    ifIgnored:
      'Every future comparison is scored on axes chosen to favour a competitor, whatever the campaign says.',
  },
  {
    id: 'r-silence',
    statement: 'The business is absent from every active category story.',
    kind: 'reputation',
    severity: 'medium',
    trajectory: 'steady',
    evidence:
      'No quote, contribution or citation in the four topics publications are currently covering.',
    ifIgnored:
      'Silence is read as absence of expertise. The category continues to be explained by the suppliers willing to explain it.',
  },
]

/* ----------------------------------------------------------------------------
   11 — Narrative health, derived from everything above.
   ------------------------------------------------------------------------- */

function reachOf(polarity: Polarity): number {
  const total = NARRATIVES.reduce((s, n) => s + n.reachPct, 0)
  const slice = narrativesByPolarity(polarity).reduce(
    (s, n) => s + n.reachPct,
    0,
  )
  return Math.round((slice / total) * 100)
}

export function narrativeHealth(): NarrativeHealthMeasure[] {
  const positive = reachOf('positive')
  const negative = reachOf('negative')
  const neutral = reachOf('neutral')
  const divergence = engineDivergence()

  return [
    {
      label: 'Positive narrative strength',
      value: `${positive}%`,
      score: positive,
      meaning: `${positive}% of active category conversation carries a story that favours this business — and both of those narratives are currently unclaimed by anyone.`,
    },
    {
      label: 'Negative narrative strength',
      value: `${negative}%`,
      score: 100 - negative,
      meaning: `${negative}% carries a story that works against it, most of it a competitor’s evaluation framing rather than criticism of the business itself.`,
    },
    {
      label: 'Neutral narrative',
      value: `${neutral}%`,
      score: 50,
      meaning: `${neutral}% is category-level conversation attached to no supplier. Neutral is not safe — it is unowned ground with no defender.`,
    },
    {
      label: 'Narrative balance',
      value: positive > negative ? 'Favourable' : 'Adverse',
      score: Math.max(0, 50 + (positive - negative) / 2),
      meaning:
        'The balance between stories that help and stories that hurt, weighted by how much of the conversation each reaches.',
    },
    {
      label: 'Narrative consistency',
      value: `${divergence.diverging} of ${AI_ENGINES.length} diverge`,
      score: Math.round(
        ((AI_ENGINES.length - divergence.diverging) / AI_ENGINES.length) * 100,
      ),
      meaning: divergence.summary,
    },
  ]
}

/** Composite narrative health. Weighted mean of the measures above. */
export function narrativeHealthScore(): number {
  const measures = narrativeHealth()
  return Math.round(
    measures.reduce((s, m) => s + m.score, 0) / measures.length,
  )
}

export function narrativeStability(): { score: number; label: string; meaning: string } {
  /* Stability is the inverse of how much of the inventory is moving. A
     narrative landscape where everything is emerging or growing can change
     under you inside a quarter. */
  const moving = NARRATIVES.filter(
    (n) => n.momentum === 'emerging' || n.momentum === 'growing',
  ).length
  const score = Math.round(((NARRATIVES.length - moving) / NARRATIVES.length) * 100)

  return {
    score,
    label: score >= 60 ? 'Settling' : 'Unsettled',
    meaning: `${moving} of ${NARRATIVES.length} active narratives are still forming or growing. The account of this category is not yet fixed, which is what makes intervention cheap now and expensive later.`,
  }
}

export function narrativeMomentum(): { label: string; meaning: string } {
  const negativeGrowing = NARRATIVES.filter(
    (n) => n.polarity === 'negative' && (n.momentum === 'growing' || n.momentum === 'emerging'),
  ).length
  const positiveGrowing = NARRATIVES.filter(
    (n) => n.polarity === 'positive' && (n.momentum === 'growing' || n.momentum === 'emerging'),
  ).length

  const plural = (n: number, one: string, many: string) =>
    n === 1 ? one : many

  return {
    label: negativeGrowing > positiveGrowing ? 'Deteriorating' : 'Improving',
    meaning: `${negativeGrowing} adverse ${plural(negativeGrowing, 'narrative is', 'narratives are')} gaining ground against ${positiveGrowing} favourable ${plural(positiveGrowing, 'one', 'ones')}. Direction matters more than the current balance, because it is what the position will be in two quarters.`,
  }
}

export function narrativeRiskLevel(): { label: string; meaning: string } {
  const high = NARRATIVE_RISKS.filter((r) => r.severity === 'high').length
  return {
    label: high >= 3 ? 'High' : high >= 1 ? 'Elevated' : 'Low',
    meaning: `${high} risks are rated high severity, of which the entity conflation and the emerging regional-limitation narrative are both still cheap to correct.`,
  }
}

export function publicSentiment(): { label: string; score: number; meaning: string } {
  const positive = reachOf('positive')
  const negative = reachOf('negative')
  const score = Math.round(50 + (positive - negative) / 2)

  return {
    label: negative > positive * 2 ? 'Adverse' : negative > positive ? 'Mixed, tilting adverse' : 'Mixed',
    score,
    meaning:
      'Sentiment is not hostility. Nothing here is criticism of the business — the adverse weight comes almost entirely from stories written by competitors in which this business does not appear.',
  }
}

/* ----------------------------------------------------------------------------
   12 — Strategic recommendations. Eight fields each, per the direction.
   ------------------------------------------------------------------------- */

export interface NarrativeRecommendation {
  id: string
  objective: string
  evidence: string
  expectedImpact: string
  confidence: Confidence
  owner: string
  deadline: string
  effort: Effort
  successMetric: string
}

export const NARRATIVE_RECOMMENDATIONS: NarrativeRecommendation[] = [
  {
    id: 'nr1',
    objective:
      'Claim response time as a published supplier selection criterion.',
    evidence:
      'The narrative is unowned, high influence and uncontested. Same-day regional delivery is a real capability that appears in no category description.',
    expectedImpact: `Narrative ownership ${POSTURE.narrativeOwnershipPct}% → 24%`,
    confidence: 'medium',
    owner: 'Head of Brand',
    deadline: '2026-12-31',
    effort: 'medium',
    successMetric:
      'Response time cited among the first three selection criteria by 3 of 6 engines',
  },
  {
    id: 'nr2',
    objective:
      'Correct the entity conflation and the hardware-retailer categorisation.',
    evidence:
      'Gemini resolves a same-named logistics firm; ChatGPT categorises the business as retail. Both remove it from supplier-evaluation answers entirely.',
    expectedImpact: 'Average recognition 38 → 55 of 100',
    confidence: 'high',
    owner: 'Head of Digital',
    deadline: '2026-09-30',
    effort: 'low',
    successMetric: 'Category association correct on 5 of 6 engines',
  },
  {
    id: 'nr3',
    objective:
      'Answer the regional-limitation narrative with published multi-site evidence.',
    evidence:
      'Emerging in two engines and sourced from a competitor comparison page. Still contestable; not yet treated as settled.',
    expectedImpact: 'Contain an emerging high-severity adverse narrative',
    confidence: 'medium',
    owner: 'VP Marketing',
    deadline: '2026-10-31',
    effort: 'medium',
    successMetric:
      'Multi-site capability referenced in 2 of 6 engines on multi-plant sourcing questions',
  },
  {
    id: 'nr4',
    objective:
      'Claim the secondary-supplier argument against the consolidation narrative.',
    evidence:
      'Consolidation reaches 14% of conversation and favours national distributors. The counter-narrative reaches 11% and is owned by nobody.',
    expectedImpact: 'Reframe regional scale from limitation to risk management',
    confidence: 'directional',
    owner: 'Head of Brand',
    deadline: '2027-01-31',
    effort: 'medium',
    successMetric:
      'Secondary-supplier framing cited by 2 of 6 engines on consolidation questions',
  },
  {
    id: 'nr5',
    objective:
      'Enter the two active media stories with a named expert voice.',
    evidence:
      'The business appears in none of four active category stories. Two of them — provenance and tariff continuity — have no supplier voice at all.',
    expectedImpact: `Independent authority sources ${POSTURE.independentValidationSources} → 8`,
    confidence: 'medium',
    owner: 'VP Marketing',
    deadline: '2026-11-30',
    effort: 'high',
    successMetric: 'Quoted in 3 pieces across 2 publications engines cite',
  },
]

/* ----------------------------------------------------------------------------
   13 — Executive decision.
   ------------------------------------------------------------------------- */

export type NarrativeVerdict =
  | 'strengthen'
  | 'defend'
  | 'reframe'
  | 'respond-immediately'
  | 'ignore'
  | 'launch-campaign'

export const NARRATIVE_VERDICT_LABEL: Record<NarrativeVerdict, string> = {
  strengthen: 'Strengthen Narrative',
  defend: 'Defend Narrative',
  reframe: 'Reframe Narrative',
  'respond-immediately': 'Respond Immediately',
  ignore: 'Ignore',
  'launch-campaign': 'Launch Narrative Campaign',
}

/**
 * Derived verdict.
 *
 * The ordering encodes a real editorial judgement: a false claim that machines
 * are repeating outranks everything else, because it is cheap to fix and it
 * invalidates any narrative built on top of it. Only once the record is
 * correct does it make sense to argue about framing.
 */
export function narrativeVerdict(): {
  verdict: NarrativeVerdict
  statement: string
  because: string
} {
  const misinformation = NARRATIVE_RISKS.filter(
    (r) =>
      (r.kind === 'misinformation' || r.kind === 'ai-misunderstanding') &&
      r.severity === 'high',
  ).length
  const ownership = narrativeOwnership()

  if (misinformation > 0) {
    return {
      verdict: 'respond-immediately',
      statement:
        'Correct the record first, then claim the narrative nobody owns.',
      because: `Machines are repeating ${misinformation} factual error about this business that removes it from supplier answers entirely. Argument about positioning is wasted while the underlying record is wrong. Once corrected, ${ownership.unclaimed}% of category conversation is unclaimed and the strongest of it favours this business.`,
    }
  }

  return {
    verdict: 'strengthen',
    statement: 'Claim the unowned narrative that favours the business.',
    because: `${ownership.unclaimed}% of category conversation belongs to nobody.`,
  }
}

export const NARRATIVE_METHODOLOGY = METHODOLOGY_VERSION

/** GEON consistency, surfaced so the page can cite the same figure as the rest. */
export const NARRATIVE_CONSISTENCY = GEON.consistency
