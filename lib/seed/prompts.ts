import type { AiEngineId, DecisionStage, Prompt } from './types'

/* ============================================================================
   The 24 seeded decision questions.

   Every headline percentage in the product is computed from this table — none
   is typed twice. Two derivations are load-bearing and pinned to the spine:

     · ChatGPT recommends Northwind in exactly 1 of 24 questions
       → 1/24 = 4.1667% → 4.2%   (SPINE.chatgptRecommendationPresencePct)

     · Northwind appears in 3 of the 42 supplier-evaluation answer slots
       (7 questions × 6 engines)
       → 3/42 = 7.14% → 7%       (SPINE.supplierEvaluationCoveragePct)

     · 6 recommendation events across 144 answer slots (24 × 6)
       → 6/144 = 4.17% → 4.2%    (Northwind's own recommendation share, which
                                  is why the competitor table cannot drift
                                  from this file)

   Total monthly volume across all 24 = 1,240, which is the Demand term of the
   §15.4 exposure model. Change a volume here and the exposure range moves —
   which is exactly the point.
   ========================================================================= */

export const DECISION_STAGES: {
  id: DecisionStage
  label: string
  order: number
  /** Which conventional tooling can observe this stage at all. */
  observableBy: string[]
}[] = [
  { id: 'research', label: 'Research', order: 1, observableBy: [] },
  { id: 'concerns', label: 'Concerns', order: 2, observableBy: [] },
  {
    id: 'solution-evaluation',
    label: 'Solution Evaluation',
    order: 3,
    observableBy: [],
  },
  {
    id: 'supplier-evaluation',
    label: 'Supplier Evaluation',
    order: 4,
    observableBy: ['SEO platforms'],
  },
  {
    id: 'purchase-decision',
    label: 'Purchase Decision',
    order: 5,
    observableBy: ['SEO platforms', 'Analytics', 'CRM'],
  },
]

export const PROMPTS: Prompt[] = [
  /* --- Research (6) — 550/mo ------------------------------------------- */
  {
    id: 'q01',
    text: 'What is the difference between grade 5 and grade 8 fasteners?',
    stage: 'research',
    intent: 'informational',
    monthlyVolume: 140,
    northwindRecommendedBy: [],
    winner: 'halvorsen',
  },
  {
    id: 'q02',
    text: 'How do I reduce MRO inventory carrying costs?',
    stage: 'research',
    intent: 'informational',
    monthlyVolume: 110,
    northwindRecommendedBy: [],
    winner: 'meridian',
  },
  {
    id: 'q03',
    text: 'What causes premature bolt failure in high-vibration equipment?',
    stage: 'research',
    intent: 'informational',
    monthlyVolume: 95,
    northwindRecommendedBy: [],
    winner: 'halvorsen',
  },
  {
    id: 'q04',
    text: 'Best practices for industrial fastener sourcing',
    stage: 'research',
    intent: 'informational',
    monthlyVolume: 80,
    northwindRecommendedBy: ['chatgpt'],
    winner: 'kestrel',
  },
  {
    id: 'q05',
    text: 'How often should hydraulic fittings be replaced?',
    stage: 'research',
    intent: 'informational',
    monthlyVolume: 70,
    northwindRecommendedBy: [],
    winner: 'halvorsen',
  },
  {
    id: 'q06',
    text: 'What is vendor-managed inventory for MRO supplies?',
    stage: 'research',
    intent: 'informational',
    monthlyVolume: 55,
    northwindRecommendedBy: [],
    winner: 'meridian',
  },

  /* --- Concerns (3) — 140/mo -------------------------------------------- */
  {
    id: 'q07',
    text: 'Risks of single-source supplier dependency for MRO',
    stage: 'concerns',
    intent: 'informational',
    monthlyVolume: 60,
    northwindRecommendedBy: [],
    winner: 'kestrel',
  },
  {
    id: 'q08',
    text: 'How to avoid counterfeit fasteners in the supply chain',
    stage: 'concerns',
    intent: 'informational',
    monthlyVolume: 45,
    northwindRecommendedBy: [],
    winner: 'kestrel',
  },
  {
    id: 'q09',
    text: 'What are the most common industrial supply delivery failures?',
    stage: 'concerns',
    intent: 'informational',
    monthlyVolume: 35,
    northwindRecommendedBy: [],
    winner: 'meridian',
  },

  /* --- Solution Evaluation (5) — 300/mo --------------------------------- */
  {
    id: 'q10',
    text: 'Vendor-managed inventory vs consignment for MRO supplies',
    stage: 'solution-evaluation',
    intent: 'comparative',
    monthlyVolume: 90,
    northwindRecommendedBy: [],
    winner: 'meridian',
  },
  {
    id: 'q11',
    text: 'Should we consolidate MRO suppliers or keep multiple vendors?',
    stage: 'solution-evaluation',
    intent: 'comparative',
    monthlyVolume: 75,
    northwindRecommendedBy: [],
    winner: 'kestrel',
  },
  {
    id: 'q12',
    text: 'Compare industrial distributor service levels',
    stage: 'solution-evaluation',
    intent: 'comparative',
    monthlyVolume: 60,
    northwindRecommendedBy: [],
    winner: 'kestrel',
  },
  {
    id: 'q13',
    text: 'Is a national or regional MRO distributor better?',
    stage: 'solution-evaluation',
    intent: 'comparative',
    monthlyVolume: 45,
    northwindRecommendedBy: ['claude', 'copilot'],
    winner: 'meridian',
  },
  {
    id: 'q14',
    text: 'What should an MRO supply agreement include?',
    stage: 'solution-evaluation',
    intent: 'informational',
    monthlyVolume: 30,
    northwindRecommendedBy: [],
    winner: 'kestrel',
  },

  /* --- Supplier Evaluation (7) — 180/mo. The collapse. ------------------ */
  {
    id: 'q15',
    text: 'Which industrial fastener suppliers are most reliable in the Midwest?',
    stage: 'supplier-evaluation',
    intent: 'comparative',
    monthlyVolume: 40,
    northwindRecommendedBy: ['perplexity'],
    winner: 'kestrel',
  },
  {
    id: 'q16',
    text: 'Best MRO distributors for manufacturing plants',
    stage: 'supplier-evaluation',
    intent: 'comparative',
    monthlyVolume: 35,
    northwindRecommendedBy: [],
    winner: 'kestrel',
  },
  {
    id: 'q17',
    text: 'Who are the top industrial supply companies for fasteners?',
    stage: 'supplier-evaluation',
    intent: 'comparative',
    monthlyVolume: 30,
    northwindRecommendedBy: [],
    winner: 'kestrel',
  },
  {
    id: 'q18',
    text: 'Which MRO supplier has the best fill rate?',
    stage: 'supplier-evaluation',
    intent: 'comparative',
    monthlyVolume: 25,
    northwindRecommendedBy: [],
    winner: 'meridian',
  },
  {
    id: 'q19',
    text: 'Recommended industrial distributors for hydraulic components',
    stage: 'supplier-evaluation',
    intent: 'comparative',
    monthlyVolume: 20,
    northwindRecommendedBy: ['perplexity'],
    winner: 'kestrel',
  },
  {
    id: 'q20',
    text: 'Which fastener supplier should we choose for a new plant?',
    stage: 'supplier-evaluation',
    intent: 'comparative',
    monthlyVolume: 18,
    northwindRecommendedBy: [],
    winner: 'kestrel',
  },
  {
    id: 'q21',
    text: 'Top rated industrial supply vendors near Chicago',
    stage: 'supplier-evaluation',
    intent: 'comparative',
    monthlyVolume: 12,
    northwindRecommendedBy: ['claude'],
    winner: 'atlas',
  },

  /* --- Purchase Decision (3) — 70/mo ------------------------------------ */
  {
    id: 'q22',
    text: 'Get a quote for bulk grade 8 fasteners',
    stage: 'purchase-decision',
    intent: 'transactional',
    monthlyVolume: 30,
    northwindRecommendedBy: [],
    winner: 'atlas',
  },
  {
    id: 'q23',
    text: 'Industrial fastener supplier with same-day shipping',
    stage: 'purchase-decision',
    intent: 'transactional',
    monthlyVolume: 25,
    northwindRecommendedBy: [],
    winner: 'atlas',
  },
  {
    id: 'q24',
    text: 'Set up an MRO supply account',
    stage: 'purchase-decision',
    intent: 'transactional',
    monthlyVolume: 15,
    northwindRecommendedBy: [],
    winner: 'kestrel',
  },
]

/* ============================================================================
   Derivations. Every figure below is computed — none is typed.
   ========================================================================= */

export const ENGINE_COUNT = 6

/** Total monthly demand — the Demand term of the §15.4 exposure model. */
export function totalMonthlyVolume(): number {
  return PROMPTS.reduce((sum, p) => sum + p.monthlyVolume, 0)
}

export function promptsByStage(stage: DecisionStage): Prompt[] {
  return PROMPTS.filter((p) => p.stage === stage)
}

/** Share of all 24 questions in which a given engine recommends Northwind. */
export function enginePresencePct(engine: AiEngineId): number {
  const hits = PROMPTS.filter((p) =>
    p.northwindRecommendedBy.includes(engine),
  ).length
  return Number(((hits / PROMPTS.length) * 100).toFixed(1))
}

/**
 * Coverage within one decision stage: recommendation slots won, over
 * (questions in stage × engines). This is the figure that collapses to 7% at
 * supplier evaluation.
 */
export function stageCoveragePct(stage: DecisionStage): number {
  const inStage = promptsByStage(stage)
  if (inStage.length === 0) return 0
  const slots = inStage.length * ENGINE_COUNT
  const won = inStage.reduce((sum, p) => sum + p.northwindRecommendedBy.length, 0)
  return Number(((won / slots) * 100).toFixed(1))
}

/** Questions where at least one engine recommends Northwind. */
export function promptsWithPresence(): Prompt[] {
  return PROMPTS.filter((p) => p.northwindRecommendedBy.length > 0)
}

/** Questions where no engine recommends Northwind — the missed decisions. */
export function missedPrompts(): Prompt[] {
  return PROMPTS.filter((p) => p.northwindRecommendedBy.length === 0)
}

/** Total recommendation events across every engine and question. */
export function totalRecommendationEvents(): number {
  return PROMPTS.reduce((sum, p) => sum + p.northwindRecommendedBy.length, 0)
}

/**
 * Overall recommendation share: events won over every answer slot
 * (24 questions × 6 engines). This is the figure the competitor table quotes
 * for Northwind, so the two cannot disagree.
 */
export function overallRecommendationSharePct(): number {
  const slots = PROMPTS.length * ENGINE_COUNT
  return Number(((totalRecommendationEvents() / slots) * 100).toFixed(1))
}

/**
 * How much of a stage a single competitor controls, by first-named winner.
 * Kestrel's control is highest at supplier evaluation — which is the real
 * argument, rather than a claim that coverage is lowest there.
 */
export function competitorControlPct(
  stage: DecisionStage,
  competitorId: string,
): number {
  const inStage = promptsByStage(stage)
  if (inStage.length === 0) return 0
  const wins = inStage.filter((p) => p.winner === competitorId).length
  return Number(((wins / inStage.length) * 100).toFixed(1))
}

/** Overall control across all 24 questions, for comparison against a stage. */
export function overallControlPct(competitorId: string): number {
  const wins = PROMPTS.filter((p) => p.winner === competitorId).length
  return Number(((wins / PROMPTS.length) * 100).toFixed(1))
}

/** Share of total monthly demand sitting in one stage. */
export function stageVolumeSharePct(stage: DecisionStage): number {
  const inStage = promptsByStage(stage)
  const volume = inStage.reduce((s, p) => s + p.monthlyVolume, 0)
  return Number(((volume / totalMonthlyVolume()) * 100).toFixed(1))
}
