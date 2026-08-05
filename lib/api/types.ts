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
import type {
  IntelligenceCategory,
  IntelligenceModule,
} from '@/lib/seed/modules'
import type {
  CommercialRisk,
  ReadinessDimension,
  Recommendation,
  journeyCoverage,
} from '@/lib/seed/campaign'
import type {
  CompetitorNarrative,
  EngineNarrative,
  MediaTopic,
  Narrative,
  NarrativeHealthMeasure,
  NarrativeOpportunity,
  NarrativeRecommendation,
  NarrativeRisk,
  NarrativeVerdict,
  QuestionGroup,
  engineDivergence,
  mediaMomentum,
  misconceptions,
  narrativeOwnership,
} from '@/lib/seed/narrative'
import type {
  ELECTION_SUBJECT,
  ElectionMeasure,
  ElectionNarrative,
  RegionalSentiment,
  SWING_TOPICS,
  engineElectionNarratives,
} from '@/lib/seed/election'
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
  /**
   * The published index weighting, keyed by GEON vector.
   *
   * Travels with the index rather than being imported as a constant, because
   * a screen that shows a composite score has to be able to show what produced
   * it — and because the weighting is versioned, so it is data rather than a
   * fact about the codebase.
   */
  indexWeights: Record<string, number>
  /** Share of revenue arriving through supplier-evaluation decisions. */
  revenueViaSupplierEvaluationPct: number
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

/**
 * A category with its modules already attached and counted.
 *
 * The counts travel with the category rather than being derived at the call
 * site, because a category card's headline figure is the whole point of the
 * page and it must not be possible for a screen to compute it differently
 * from the category screen it links to.
 */
export interface CategorySummary extends IntelligenceCategory {
  moduleCount: number
  liveModuleCount: number
  /** A short preview — the first few modules, for the category card. */
  preview: IntelligenceModule[]
}

export interface CategoryDetail extends IntelligenceCategory {
  modules: IntelligenceModule[]
  /** Purchasable products covering this category, resolved. */
  products: IntelligenceProduct[]
  /** Engines behind the modules, resolved. */
  engines: IntelligenceEngine[]
}

export interface EcosystemSummary {
  categories: CategorySummary[]
  totalModules: number
  liveModules: number
  totalEngines: number
}

/* --------------------------------------------------------------------------
   Campaign Readiness — "should we launch this campaign today?"
   ------------------------------------------------------------------------ */
export interface CampaignReadiness {
  campaign: {
    name: string
    plannedBudgetUsd: number
    campaignMonths: number
    channels: string[]
    intendedLaunch: string
  }
  score: number
  recommendation: Recommendation
  recommendationLabel: string
  decision: { verdict: string; because: string }
  constraint: ReadinessDimension
  dimensions: ReadinessDimension[]
  journey: ReturnType<typeof journeyCoverage>
  risks: CommercialRisk[]
  budgetAtRisk: ExposureRange
  confidence: Confidence
  timing: OrgSummary['timing']
  actions: Action[]
  thresholds: { ready: number; risk: number }
}

/* --------------------------------------------------------------------------
   Narrative Intelligence — "what story is the market telling about us?"
   ------------------------------------------------------------------------ */
export interface NarrativeIntelligence {
  health: NarrativeHealthMeasure[]
  healthScore: number
  stability: { score: number; label: string; meaning: string }
  momentum: { label: string; meaning: string }
  risk: { label: string; meaning: string }
  sentiment: { label: string; score: number; meaning: string }
  verdict: {
    verdict: NarrativeVerdict
    statement: string
    because: string
  }
  verdictLabel: string
  engines: EngineNarrative[]
  divergence: ReturnType<typeof engineDivergence>
  narratives: Narrative[]
  ownership: ReturnType<typeof narrativeOwnership>
  competitors: CompetitorNarrative[]
  media: MediaTopic[]
  mediaMomentum: ReturnType<typeof mediaMomentum>
  publicQuestions: QuestionGroup[]
  buyingQuestions: QuestionGroup[]
  misconceptions: ReturnType<typeof misconceptions>
  opportunities: NarrativeOpportunity[]
  risks: NarrativeRisk[]
  recommendations: NarrativeRecommendation[]
}

export interface ElectionIntelligence {
  subject: typeof ELECTION_SUBJECT
  measures: ElectionMeasure[]
  narratives: ElectionNarrative[]
  regions: RegionalSentiment[]
  swingTopics: typeof SWING_TOPICS
  engines: ReturnType<typeof engineElectionNarratives>
  verdict: { statement: string; because: string }
}

export type {
  Action,
  ChainLink,
  Competitor,
  ExposureRange,
  FeedEvent,
  GraphEdge,
  GraphNode,
  IntelligenceCategory,
  IntelligenceEngine,
  IntelligenceModule,
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
  getEcosystem(): Promise<Envelope<EcosystemSummary>>
  getCategory(slug: string): Promise<Envelope<CategoryDetail | null>>
  getCampaignReadiness(): Promise<Envelope<CampaignReadiness>>
  getNarrativeIntelligence(): Promise<Envelope<NarrativeIntelligence>>
  getElectionIntelligence(): Promise<Envelope<ElectionIntelligence>>
  getPlans(): Promise<Envelope<Plan[]>>
  getPlan(slug: string): Promise<Envelope<Plan | null>>
}
