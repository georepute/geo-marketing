import { AS_OF, METHODOLOGY_VERSION } from '@/lib/seed/spine'
import { ORG, GEON_VECTORS, TIMING, POSTURE, decisionHealthIndex } from '@/lib/seed/org'
import { COMPETITORS, TOP_COMPETITOR } from '@/lib/seed/competitors'
import {
  INTELLIGENCE_ENGINES,
  engineMatrix,
  highestRiskEngine,
  averageRecognitionScore,
} from '@/lib/seed/engines'
import {
  DECISION_STAGES,
  PROMPTS,
  promptsByStage,
  stageCoveragePct,
} from '@/lib/seed/prompts'
import {
  SEARCH_OBSERVATIONS,
  blendedCpc,
  BREAK_EVEN,
  paidDependency,
  gapMatrix,
  GAP_LABELS,
  GAP_DEFINITIONS,
} from '@/lib/seed/search'
import { READOUTS, getReadout } from '@/lib/seed/readouts'
import { causalChain } from '@/lib/seed/chain'
import { ACTIONS } from '@/lib/seed/actions'
import { feedByRecency } from '@/lib/seed/feed'
import { missionTiles } from '@/lib/seed/missionControl'
import {
  decisionGraph,
  reconstruct,
  reconstructableQuestions,
} from '@/lib/seed/reconstruction'
import { PRODUCTS, PLANS, productsByTier, getProduct } from '@/lib/seed/products'
import { percentWhole } from '@/lib/format'
import type {
  DataAdapter,
  DomainPreview,
  EconomicsSummary,
  Envelope,
  MarketplaceCatalogue,
  OrgSummary,
  StageCoverage,
} from '../types'

/* ============================================================================
   Seed adapter — the v1 implementation of DataAdapter.

   THIS IS THE SEAM. Screens never import from lib/seed directly; they call
   lib/api/client, which delegates here. Swapping this for an HTTP adapter is
   the entire migration to a real backend.

   Latency is simulated so loading states are exercised in development rather
   than discovered in production.
   ========================================================================= */

const MIN_LATENCY_MS = 40
const MAX_LATENCY_MS = 90

/** Deterministic pseudo-latency, seeded by the call name — no Math.random,
    so server renders stay stable and reproducible. */
function latencyFor(key: string): number {
  let hash = 0
  for (let i = 0; i < key.length; i += 1) hash = (hash * 31 + key.charCodeAt(i)) % 997
  const span = MAX_LATENCY_MS - MIN_LATENCY_MS
  return MIN_LATENCY_MS + (hash % span)
}

async function envelope<T>(key: string, data: T): Promise<Envelope<T>> {
  if (process.env.NODE_ENV === 'development') {
    await new Promise((resolve) => setTimeout(resolve, latencyFor(key)))
  }
  return { data, source: 'seed', asOf: AS_OF, methodologyVersion: METHODOLOGY_VERSION }
}

export const seedAdapter: DataAdapter = {
  async getOrg() {
    const summary: OrgSummary = {
      id: ORG.id,
      name: ORG.name,
      domain: ORG.domain,
      category: ORG.category,
      market: ORG.market,
      decisionHealthIndex: decisionHealthIndex(),
      geon: GEON_VECTORS.map((v) => ({ ...v })),
      timing: {
        position: TIMING.position,
        positionLabel: TIMING.positionLabel,
        windowMonths: TIMING.windowMonths,
        windowOpenedAt: TIMING.windowOpenedAt,
        windowClosesAt: TIMING.windowClosesAt,
        decisionDeadline: TIMING.decisionDeadline,
        marketReadiness: TIMING.marketReadiness,
        dominantSignal: TIMING.dominantSignal,
        shiftVelocity: TIMING.shiftVelocity,
      },
    }
    return envelope('org', summary)
  },

  async getDomainPreview(domain: string) {
    const risky = highestRiskEngine()
    const ranked = SEARCH_OBSERVATIONS.filter((k) => k.position !== null)
    const best = ranked.length
      ? Math.min(...ranked.map((k) => k.position as number))
      : null
    const coverage = stageCoveragePct('supplier-evaluation')

    const preview: DomainPreview = {
      domain,
      recognised: true,
      recognitionScore: averageRecognitionScore(),
      bestGooglePosition: best,
      narrativeOwnershipPct: POSTURE.narrativeOwnershipPct,
      decisionPresencePct: coverage,
      highestRiskEngine: {
        name: risky.name,
        recognitionScore: risky.recognitionScore,
        reason:
          risky.confusion ??
          'Recognises the business but does not recommend it in any tracked decision.',
      },
      strongestCompetitor: {
        name: TOP_COMPETITOR.name,
        recommendationSharePct: TOP_COMPETITOR.recommendationSharePct,
      },
      unlockedSignal: {
        label: 'Supplier-evaluation coverage',
        value: percentWhole(coverage),
        meaning:
          'The stage where the vendor is chosen. Presence here decides whether the business reaches the shortlist at all.',
        confidence: 'high',
      },
      lockedSignalCount: READOUTS.length - 1,
    }
    return envelope(`preview:${domain}`, preview)
  },

  async getCausalChain() {
    return envelope('chain', causalChain())
  },

  async getReadout(id: string) {
    return envelope(`readout:${id}`, getReadout(id) ?? null)
  },

  async getReadouts() {
    return envelope('readouts', READOUTS)
  },

  async getEngines() {
    return envelope('engines', INTELLIGENCE_ENGINES)
  },

  async getEngine(slug: string) {
    return envelope(
      `engine:${slug}`,
      INTELLIGENCE_ENGINES.find((e) => e.slug === slug) ?? null,
    )
  },

  async getEngineMatrix() {
    return envelope('engine-matrix', engineMatrix())
  },

  async getCompetitors() {
    return envelope('competitors', COMPETITORS)
  },

  async getPrompts() {
    return envelope('prompts', PROMPTS)
  },

  async getStageCoverage() {
    const rows: StageCoverage[] = DECISION_STAGES.map((s) => {
      const inStage = promptsByStage(s.id)
      return {
        id: s.id,
        label: s.label,
        order: s.order,
        promptCount: inStage.length,
        coveragePct: stageCoveragePct(s.id),
        monthlyVolume: inStage.reduce((sum, p) => sum + p.monthlyVolume, 0),
        observableBy: [...s.observableBy],
      }
    })
    return envelope('stage-coverage', rows)
  },

  async getSearchObservations() {
    return envelope('search', SEARCH_OBSERVATIONS)
  },

  async getGapMatrix() {
    const rows = gapMatrix().map((row) => ({
      ...row,
      gapLabel: GAP_LABELS[row.gap],
      gapDefinition: GAP_DEFINITIONS[row.gap],
    }))
    return envelope('gap-matrix', rows)
  },

  async getEconomics() {
    const summary: EconomicsSummary = {
      blendedCpc: blendedCpc(),
      breakEvenCpc: BREAK_EVEN,
      paidDependency: paidDependency(),
      keywordsAboveBreakEven: SEARCH_OBSERVATIONS.filter(
        (k) => k.cpc > BREAK_EVEN,
      ).length,
      totalKeywords: SEARCH_OBSERVATIONS.length,
    }
    return envelope('economics', summary)
  },

  async getMissionTiles() {
    return envelope('mission-tiles', missionTiles())
  },

  async getFeed() {
    return envelope('feed', feedByRecency())
  },

  async getReconstructableQuestions() {
    return envelope('recon-questions', reconstructableQuestions())
  },

  async getReconstruction(promptId: string) {
    return envelope(`recon:${promptId}`, reconstruct(promptId))
  },

  async getDecisionGraph() {
    return envelope('graph', decisionGraph())
  },

  async getActions() {
    return envelope('actions', ACTIONS)
  },

  async getProducts() {
    const catalogue: MarketplaceCatalogue = {
      entry: productsByTier('entry'),
      advanced: productsByTier('advanced'),
      premium: productsByTier('premium'),
    }
    return envelope('products', catalogue)
  },

  async getProduct(slug: string) {
    return envelope(`product:${slug}`, getProduct(slug) ?? null)
  },

  async getPlans() {
    return envelope('plans', PLANS)
  },

  async getPlan(slug: string) {
    return envelope(`plan:${slug}`, PLANS.find((p) => p.slug === slug) ?? null)
  },
}

export const ALL_PRODUCTS = PRODUCTS
