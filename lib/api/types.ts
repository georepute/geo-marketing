import type {
  Action,
  Confidence,
  ExposureRange,
  IntelligenceProduct,
  Plan,
  Prompt,
  Readout,
  SearchObservation,
} from '@/lib/seed/types'
import type { AiEngine, IntelligenceEngine } from '@/lib/seed/engines'
import type { Competitor } from '@/lib/seed/competitors'
import type { ChainLink } from '@/lib/seed/chain'
import type { FeedEvent } from '@/lib/seed/feed'
import type { MissionTile } from '@/lib/seed/missionControl'
import type {
  GraphEdge,
  GraphNode,
  Reconstruction,
} from '@/lib/seed/reconstruction'

/* ============================================================================
   Transport types for the API seam.

   Every response carries `source`, so a screen can always say where its data
   came from. In v1 that is always 'seed'; when a real backend lands it becomes
   'live' and nothing else about the call site changes.
   ========================================================================= */

export interface Envelope<T> {
  data: T
  source: 'seed' | 'live'
  /** When the underlying observation was made, not when it was fetched. */
  asOf: string
  methodologyVersion: string
}

export interface OrgSummary {
  id: string
  name: string
  domain: string
  category: string
  market: string
  decisionHealthIndex: number
  geon: { key: string; label: string; score: number; definition: string }[]
  timing: {
    position: string
    positionLabel: string
    windowMonths: number
    windowOpenedAt: string
    windowClosesAt: string
    decisionDeadline: string
    marketReadiness: number
    dominantSignal: string
    shiftVelocity: string
  }
}

export interface EngineMatrixRow extends AiEngine {
  recommendationPresencePct: number
}

/** The gated preview returned by the Home domain-entry field. Brief §5. */
export interface DomainPreview {
  domain: string
  recognised: boolean
  /** Average entity-understanding score across the six engines. */
  recognitionScore: number
  /** Best Google organic position across the tracked keyword set. */
  bestGooglePosition: number | null
  narrativeOwnershipPct: number
  /** Supplier-evaluation coverage — the figure that carries the story. */
  decisionPresencePct: number
  highestRiskEngine: { name: string; recognitionScore: number; reason: string }
  strongestCompetitor: { name: string; recommendationSharePct: number }
  /** The one signal released before the paywall. Brief §5. */
  unlockedSignal: {
    label: string
    value: string
    meaning: string
    confidence: Confidence
  }
  /** How many further signals sit behind the gate. */
  lockedSignalCount: number
}

export interface StageCoverage {
  id: string
  label: string
  order: number
  promptCount: number
  coveragePct: number
  monthlyVolume: number
  observableBy: string[]
}

export interface GapRow extends SearchObservation {
  gap: string
  gapLabel: string
  gapDefinition: string
}

export interface EconomicsSummary {
  blendedCpc: number
  breakEvenCpc: number
  paidDependency: 'high' | 'moderate' | 'low'
  keywordsAboveBreakEven: number
  totalKeywords: number
}

export interface MarketplaceCatalogue {
  entry: IntelligenceProduct[]
  advanced: IntelligenceProduct[]
  premium: IntelligenceProduct[]
}

export type {
  Action,
  ChainLink,
  Competitor,
  ExposureRange,
  FeedEvent,
  GraphEdge,
  GraphNode,
  IntelligenceEngine,
  IntelligenceProduct,
  MissionTile,
  Plan,
  Prompt,
  Readout,
  Reconstruction,
  SearchObservation,
}

/* --------------------------------------------------------------------------
   The adapter contract. `seed.adapter.ts` implements it today; an HTTP
   adapter implements the identical shape when a backend exists.
   ------------------------------------------------------------------------ */
export interface DataAdapter {
  getOrg(): Promise<Envelope<OrgSummary>>
  getDomainPreview(domain: string): Promise<Envelope<DomainPreview>>
  getCausalChain(): Promise<Envelope<ChainLink[]>>
  getReadout(id: string): Promise<Envelope<Readout | null>>
  getReadouts(): Promise<Envelope<Readout[]>>
  getEngines(): Promise<Envelope<IntelligenceEngine[]>>
  getEngine(slug: string): Promise<Envelope<IntelligenceEngine | null>>
  getEngineMatrix(): Promise<Envelope<EngineMatrixRow[]>>
  getCompetitors(): Promise<Envelope<Competitor[]>>
  getPrompts(): Promise<Envelope<Prompt[]>>
  getStageCoverage(): Promise<Envelope<StageCoverage[]>>
  getSearchObservations(): Promise<Envelope<SearchObservation[]>>
  getGapMatrix(): Promise<Envelope<GapRow[]>>
  getEconomics(): Promise<Envelope<EconomicsSummary>>
  getMissionTiles(): Promise<Envelope<MissionTile[]>>
  getFeed(): Promise<Envelope<FeedEvent[]>>
  getReconstructableQuestions(): Promise<Envelope<Prompt[]>>
  getReconstruction(promptId: string): Promise<Envelope<Reconstruction | null>>
  getDecisionGraph(): Promise<
    Envelope<{ nodes: GraphNode[]; edges: GraphEdge[] }>
  >
  getActions(): Promise<Envelope<Action[]>>
  getProducts(): Promise<Envelope<MarketplaceCatalogue>>
  getProduct(slug: string): Promise<Envelope<IntelligenceProduct | null>>
  getPlans(): Promise<Envelope<Plan[]>>
  getPlan(slug: string): Promise<Envelope<Plan | null>>
}
