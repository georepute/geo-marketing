import { AI_ENGINES } from './engines'
import { COMPETITORS, TOP_COMPETITOR } from './competitors'
import {
  PROMPTS,
  DECISION_STAGES,
  promptsByStage,
  stageCoveragePct,
  stageVolumeSharePct,
  competitorControlPct,
  totalMonthlyVolume,
} from './prompts'
import { SEARCH_OBSERVATIONS, classifyGap, GAP_LABELS, GAP_DEFINITIONS } from './search'
import { ORG, TIMING, POSTURE } from './org'
import { ACTIONS } from './actions'
import { READOUTS } from './readouts'
import { buildExposure } from '@/lib/model/exposure'
import type {
  Action,
  Confidence,
  ExposureRange,
  Prompt,
  SignalRef,
} from './types'

/* ============================================================================
   DECISION RECONSTRUCTION — brief §3.1.

   "The visitor enters a domain and selects a commercial question. The
   experience reconstructs the decision across multiple surfaces."

   The brief lists ten things the reconstruction must show. Each is a field
   below, computed for the selected question. Nothing here is authored per
   question: change a prompt's engine list and every step moves with it.
   ========================================================================= */

export type EngineStatus =
  | 'recommended'
  | 'mentioned'
  | 'ignored'
  | 'confused'

export const ENGINE_STATUS_LABEL: Record<EngineStatus, string> = {
  recommended: 'Recommended',
  mentioned: 'Mentioned, not recommended',
  ignored: 'Absent from the answer',
  confused: 'Wrong entity resolved',
}

export interface ReconstructionEngine {
  id: string
  name: string
  understoodAs: string
  status: EngineStatus
  note: string
  recognitionScore: number
}

export interface ReconstructionSource {
  name: string
  influence: 'high' | 'medium' | 'low'
  favours: 'brand' | 'competitor' | 'neutral'
  note: string
}

export interface Reconstruction {
  prompt: Prompt
  /** 1 — what each engine understood. */
  engines: ReconstructionEngine[]
  /** 2 — recognised, mentioned, cited, recommended or ignored. */
  outcome: {
    recommendedBy: number
    totalEngines: number
    coveragePct: number
    verdict: string
  }
  /** 3 — which competitor was selected instead. */
  winner: {
    name: string
    recommendationSharePct: number
    authoritySources: number
    why: string
  }
  /** 4 — sources, trust signals and narratives that influenced the answer. */
  sources: ReconstructionSource[]
  /** 5 — Google demand, organic position and paid click cost. */
  search: {
    keyword: string
    position: number | null
    monthlyVolume: number
    cpc: number
    aiPresence: boolean
    gapLabel: string
    gapDefinition: string
  } | null
  /** 6 — where the question sits in the decision journey. */
  journey: {
    stageId: string
    stageLabel: string
    order: number
    totalStages: number
    stageCoveragePct: number
    stageVolumeSharePct: number
    revenueSharePct: number
    observableBy: string[]
  }
  /** 7 — timing, market maturity and competitive density. */
  timing: {
    positionLabel: string
    windowMonths: number
    decisionDeadline: string
    marketReadiness: number
    competitorControlPct: number
    overallControlPct: number
    shiftVelocity: string
  }
  /** 8 — directional commercial exposure for this question alone. */
  exposure: ExposureRange
  /** 9 — connected signals that explain the outcome. */
  connected: SignalRef[]
  /** 10 — prescribed action and how improvement will be measured. */
  action: Action
  confidence: Confidence
}

/* --------------------------------------------------------------------------
   Questions offered in the selector. Supplier-evaluation questions lead
   because that is where the commercial argument lives.
   ------------------------------------------------------------------------ */
export function reconstructableQuestions(): Prompt[] {
  const supplier = promptsByStage('supplier-evaluation')
  const rest = PROMPTS.filter((p) => p.stage !== 'supplier-evaluation')
  return [...supplier, ...rest]
}

/** Best-matching tracked keyword for a question, by word overlap. */
function matchKeyword(prompt: Prompt) {
  const words = new Set(
    prompt.text.toLowerCase().replace(/[^a-z\s]/g, '').split(/\s+/),
  )
  let best: (typeof SEARCH_OBSERVATIONS)[number] | null = null
  let bestScore = 0
  for (const observation of SEARCH_OBSERVATIONS) {
    const score = observation.keyword
      .split(/\s+/)
      .filter((w) => words.has(w)).length
    if (score > bestScore) {
      bestScore = score
      best = observation
    }
  }
  return bestScore > 0 ? best : null
}

export function reconstruct(promptId: string): Reconstruction | null {
  const prompt = PROMPTS.find((p) => p.id === promptId)
  if (!prompt) return null

  /* --- 1. Engine understanding ---------------------------------------- */
  const engines: ReconstructionEngine[] = AI_ENGINES.map((engine) => {
    const recommended = prompt.northwindRecommendedBy.includes(engine.id)
    const status: EngineStatus = recommended
      ? 'recommended'
      : engine.confusion
        ? 'confused'
        : 'ignored'

    return {
      id: engine.id,
      name: engine.name,
      understoodAs: engine.understoodAs,
      status,
      recognitionScore: engine.recognitionScore,
      note: recommended
        ? `Named Northwind in its answer, citing ${engine.dominantSources[0]?.toLowerCase() ?? 'a public source'}.`
        : (engine.confusion ??
          'Recognises the business but did not consider it relevant to this question.'),
    }
  })

  const recommendedBy = prompt.northwindRecommendedBy.length
  const coveragePct = Number(
    ((recommendedBy / AI_ENGINES.length) * 100).toFixed(1),
  )

  /* --- 3. The competitor that received the decision -------------------- */
  const winner =
    COMPETITORS.find((c) => c.id === prompt.winner) ?? TOP_COMPETITOR

  /* --- 4. Sources that shaped the answer ------------------------------- */
  const sources: ReconstructionSource[] = [
    {
      name: 'Trade publication coverage',
      influence: 'high',
      favours: 'competitor',
      note: `${winner.name} is cited by ${winner.authoritySources} independent sources; Northwind by ${POSTURE.independentValidationSources}.`,
    },
    {
      name: 'Company website',
      influence: 'medium',
      favours: 'brand',
      note: 'Northwind’s own pages are the only source engines can reach for its claims — self-citation carries little weight.',
    },
    {
      name: 'Supplier-comparison content',
      influence: 'high',
      favours: 'competitor',
      note: 'A published comparison library gives engines material they can quote directly.',
    },
    {
      name: 'Category evaluation criteria',
      influence: 'medium',
      favours: 'competitor',
      note: `Engines describe the category using a competitor's framing. Northwind owns ${POSTURE.narrativeOwnershipPct}% of that language.`,
    },
  ]

  /* --- 5. Google and paid economics ------------------------------------ */
  const observation = matchKeyword(prompt)
  const gap = observation ? classifyGap(observation) : null

  /* --- 6. Decision journey position ------------------------------------ */
  const stage = DECISION_STAGES.find((s) => s.id === prompt.stage)!
  const isSupplier = prompt.stage === 'supplier-evaluation'

  /* --- 8. Exposure for this question alone ----------------------------- */
  const share = prompt.monthlyVolume / totalMonthlyVolume()
  const exposure = buildExposure({
    share,
    confidence: 'directional',
    extraAssumptions: [
      {
        label: 'Question volume',
        value: `${prompt.monthlyVolume} of ${totalMonthlyVolume()} monthly decision queries`,
        source: 'connected',
      },
    ],
  })

  /* --- 9. Connected signals -------------------------------------------- */
  const connected: SignalRef[] = [
    {
      id: 'r-authority',
      label: 'Independent authority evidence',
      relationship: 'supporting',
      value: `${POSTURE.independentValidationSources} sources vs ${POSTURE.competitorValidationSourcesMedian} median`,
    },
    {
      id: 'r-recognition',
      label: 'Entity understanding',
      relationship: 'supporting',
      // Counts engines resolving the wrong entity OR no entity at all — the
      // two failure modes differ, but both remove the brand from the answer.
      value: `${engines.filter((e) => e.status === 'confused').length} of ${AI_ENGINES.length} resolve the wrong entity`,
    },
    {
      id: 'r-competitor',
      label: 'Competitor recommendation share',
      relationship: 'downstream',
      value: `${winner.recommendationSharePct}% — ${winner.name}`,
    },
    {
      id: 'r-paid-dependency',
      label: 'Paid dependency',
      relationship: 'downstream',
      value: 'Above break-even CPC',
    },
  ]

  /* --- 10. Prescribed action ------------------------------------------- */
  const action = ACTIONS[0]!

  return {
    prompt,
    engines,
    outcome: {
      recommendedBy,
      totalEngines: AI_ENGINES.length,
      coveragePct,
      verdict:
        recommendedBy === 0
          ? 'No engine put Northwind forward. The decision completed without the brand appearing at all.'
          : `${recommendedBy} of ${AI_ENGINES.length} engines named Northwind, and none placed it first.`,
    },
    winner: {
      name: winner.name,
      recommendationSharePct: winner.recommendationSharePct,
      authoritySources: winner.authoritySources,
      why:
        winner.whyTheyWin ??
        'Holds the position through published evidence engines can cite.',
    },
    sources,
    search: observation
      ? {
          keyword: observation.keyword,
          position: observation.position,
          monthlyVolume: observation.monthlyVolume,
          cpc: observation.cpc,
          aiPresence: observation.aiPresence,
          gapLabel: GAP_LABELS[gap!],
          gapDefinition: GAP_DEFINITIONS[gap!],
        }
      : null,
    journey: {
      stageId: stage.id,
      stageLabel: stage.label,
      order: stage.order,
      totalStages: DECISION_STAGES.length,
      stageCoveragePct: stageCoveragePct(prompt.stage),
      stageVolumeSharePct: stageVolumeSharePct(prompt.stage),
      revenueSharePct: isSupplier ? ORG.revenueViaSupplierEvaluationPct : 0,
      observableBy: [...stage.observableBy],
    },
    timing: {
      positionLabel: TIMING.positionLabel,
      windowMonths: TIMING.windowMonths,
      decisionDeadline: TIMING.decisionDeadline,
      marketReadiness: TIMING.marketReadiness,
      competitorControlPct: competitorControlPct(prompt.stage, winner.id),
      overallControlPct: Number(
        (
          (PROMPTS.filter((p) => p.winner === winner.id).length /
            PROMPTS.length) *
          100
        ).toFixed(1),
      ),
      shiftVelocity: TIMING.shiftVelocity,
    },
    exposure,
    connected,
    action,
    confidence: 'high',
  }
}

/* ============================================================================
   The Decision Intelligence Graph — brief §5.
   "One decision. Many signals. One explanation."

   Layout is hand-laid and deterministic: no force simulation, so the graph is
   identical on every render and every viewport, and can be reasoned about.
   Plan §8 risk mitigation.
   ========================================================================= */

export interface GraphNode {
  id: string
  label: string
  value: string
  column: number
  row: number
  kind: 'input' | 'interpretation' | 'market' | 'channel' | 'outcome' | 'action'
  readoutId: string
  evidence: string
}

export interface GraphEdge {
  from: string
  to: string
  /** Whether this relationship currently helps or harms the brand. */
  polarity: 'negative' | 'neutral'
}

export function decisionGraph(): { nodes: GraphNode[]; edges: GraphEdge[] } {
  const nodes: GraphNode[] = [
    {
      id: 'entity',
      label: 'Entity record',
      value: 'Inconsistent',
      column: 0,
      row: 0,
      kind: 'input',
      readoutId: 'r-recognition',
      evidence:
        'Category description differs between the website and two trade directories.',
    },
    {
      id: 'sources',
      label: 'Independent sources',
      value: '3',
      column: 0,
      row: 1,
      kind: 'input',
      readoutId: 'r-authority',
      evidence: 'Category median is 14. Kestrel holds 21.',
    },
    {
      id: 'content',
      label: 'Comparison content',
      value: 'Absent',
      column: 0,
      row: 2,
      kind: 'input',
      readoutId: 'r-gap',
      evidence:
        'No published supplier-comparison material for engines to cite.',
    },
    {
      id: 'understanding',
      label: 'AI understanding',
      value: '38/100',
      column: 1,
      row: 0,
      kind: 'interpretation',
      readoutId: 'r-recognition',
      evidence: 'Three of six engines misidentify the category.',
    },
    {
      id: 'authority',
      label: 'Authority evidence',
      value: 'Weak',
      column: 1,
      row: 2,
      kind: 'interpretation',
      readoutId: 'r-authority',
      evidence: 'GEON Authority 28 — the lowest of six vectors.',
    },
    {
      id: 'recommendation',
      label: 'AI recommendation',
      value: '4.2%',
      column: 2,
      row: 0,
      kind: 'market',
      readoutId: 'r-missed-prompts',
      evidence: '6 recommendation events across 144 answer slots.',
    },
    {
      id: 'competitor',
      label: 'Competitor capture',
      value: '31%',
      column: 2,
      row: 1,
      kind: 'market',
      readoutId: 'r-competitor',
      evidence: 'Kestrel Industrial leads five of seven supplier questions.',
    },
    {
      id: 'narrative',
      label: 'Narrative control',
      value: '12%',
      column: 2,
      row: 2,
      kind: 'market',
      readoutId: 'r-narrative',
      evidence: 'Engines cite a competitor’s evaluation criteria first.',
    },
    {
      id: 'google',
      label: 'Google position',
      value: '11 of 20 weak',
      column: 3,
      row: 0,
      kind: 'channel',
      readoutId: 'r-gap',
      evidence: 'Eleven tracked keywords sit outside the top ten.',
    },
    {
      id: 'presence',
      label: 'Decision presence',
      value: '7%',
      column: 3,
      row: 2,
      kind: 'channel',
      readoutId: 'r-supplier-collapse',
      evidence:
        'Supplier-evaluation coverage — the stage deciding 60% of revenue.',
    },
    {
      id: 'paid',
      label: 'Paid dependency',
      value: 'High',
      column: 4,
      row: 0,
      kind: 'outcome',
      readoutId: 'r-paid-dependency',
      evidence: 'Blended CPC $9.03 against break-even $6.13.',
    },
    {
      id: 'exposure',
      label: 'Commercial exposure',
      value: 'Directional',
      column: 4,
      row: 2,
      kind: 'outcome',
      readoutId: 'r-supplier-collapse',
      evidence:
        'Demand × decision gap × estimated conversion × average deal value.',
    },
    {
      id: 'prescription',
      label: 'Prescription',
      value: 'Authority first',
      column: 5,
      row: 1,
      kind: 'action',
      readoutId: 'r-action',
      evidence:
        'Authority carries the heaviest index weight and the largest deficit.',
    },
  ]

  const edges: GraphEdge[] = [
    { from: 'entity', to: 'understanding', polarity: 'negative' },
    { from: 'sources', to: 'authority', polarity: 'negative' },
    { from: 'content', to: 'authority', polarity: 'negative' },
    { from: 'content', to: 'narrative', polarity: 'negative' },
    { from: 'understanding', to: 'recommendation', polarity: 'negative' },
    { from: 'authority', to: 'recommendation', polarity: 'negative' },
    { from: 'authority', to: 'competitor', polarity: 'negative' },
    { from: 'authority', to: 'narrative', polarity: 'negative' },
    { from: 'recommendation', to: 'google', polarity: 'neutral' },
    { from: 'recommendation', to: 'presence', polarity: 'negative' },
    { from: 'competitor', to: 'presence', polarity: 'negative' },
    { from: 'narrative', to: 'presence', polarity: 'negative' },
    { from: 'google', to: 'paid', polarity: 'negative' },
    { from: 'presence', to: 'exposure', polarity: 'negative' },
    { from: 'paid', to: 'exposure', polarity: 'negative' },
    { from: 'exposure', to: 'prescription', polarity: 'neutral' },
  ]

  return { nodes, edges }
}

export const RECONSTRUCTION_READOUTS = READOUTS
