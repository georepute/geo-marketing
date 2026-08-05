import { AS_OF, GEON_WEIGHTS, METHODOLOGY_VERSION } from '@/lib/seed/spine'
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
import {
  INTELLIGENCE_CATEGORIES,
  getCategory as getIntelligenceCategory,
  liveModuleCount,
  modulesForCategory,
  totalModuleCount,
} from '@/lib/seed/modules'
import {
  CAMPAIGN_INPUTS,
  READINESS_DIMENSIONS,
  READINESS_THRESHOLDS,
  RECOMMENDATION_LABEL,
  assessmentConfidence,
  budgetAtRisk,
  campaignReadinessScore,
  campaignRecommendation,
  commercialRisk,
  executiveDecision,
  journeyCoverage,
  preLaunchActions,
  primaryConstraint,
} from '@/lib/seed/campaign'
import {
  MEDIA_TOPICS,
  NARRATIVES,
  NARRATIVE_OPPORTUNITIES,
  NARRATIVE_RECOMMENDATIONS,
  NARRATIVE_RISKS,
  NARRATIVE_VERDICT_LABEL,
  buyingQuestions,
  competitorNarratives,
  engineDivergence,
  engineNarratives,
  mediaMomentum,
  misconceptions,
  narrativeHealth,
  narrativeHealthScore,
  narrativeMomentum,
  narrativeOwnership,
  narrativeRiskLevel,
  narrativeStability,
  narrativeVerdict,
  publicQuestions,
  publicSentiment,
} from '@/lib/seed/narrative'
import {
  ELECTION_MEASURES,
  ELECTION_NARRATIVES,
  ELECTION_SUBJECT,
  REGIONAL_SENTIMENT,
  SWING_TOPICS,
  electionVerdict,
  engineElectionNarratives,
} from '@/lib/seed/election'
import { percentWhole } from '@/lib/format'
import type {
  CampaignReadiness,
  CategoryDetail,
  DataAdapter,
  DomainPreview,
  EconomicsSummary,
  EcosystemSummary,
  ElectionIntelligence,
  Envelope,
  MarketplaceCatalogue,
  NarrativeIntelligence,
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
      indexWeights: { ...GEON_WEIGHTS },
      revenueViaSupplierEvaluationPct: ORG.revenueViaSupplierEvaluationPct,
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

  /* --------------------------------------------------------------------
     The intelligence ecosystem. Counts are computed from the catalogue on
     every call rather than stored, so a category card can never advertise a
     module count the category page then contradicts.
     ------------------------------------------------------------------ */
  async getEcosystem() {
    const categories = INTELLIGENCE_CATEGORIES.map((category) => {
      const modules = modulesForCategory(category.slug)
      return {
        ...category,
        moduleCount: modules.length,
        liveModuleCount: modules.filter((m) => m.live).length,
        /* Three is the preview length that reads as a sample rather than as
           a truncated list — enough to show range, short enough that the
           card stays scannable. */
        preview: modules.slice(0, 3),
      }
    })

    const summary: EcosystemSummary = {
      categories,
      totalModules: totalModuleCount(),
      liveModules: liveModuleCount(),
      totalEngines: INTELLIGENCE_ENGINES.length,
    }
    return envelope('ecosystem', summary)
  },

  async getCategory(slug: string) {
    const category = getIntelligenceCategory(slug)
    if (!category) return envelope(`category:${slug}`, null)

    const detail: CategoryDetail = {
      ...category,
      modules: modulesForCategory(slug),
      products: category.productSlugs
        .map((s) => getProduct(s))
        .filter((p): p is NonNullable<typeof p> => Boolean(p)),
      engines: category.engineSlugs
        .map((s) => INTELLIGENCE_ENGINES.find((e) => e.slug === s))
        .filter((e): e is NonNullable<typeof e> => Boolean(e)),
    }
    return envelope(`category:${slug}`, detail)
  },

  /* --------------------------------------------------------------------
     Campaign Readiness. Every score is computed by the model on call, so
     the page cannot display a readiness figure the seed disagrees with.
     ------------------------------------------------------------------ */
  async getCampaignReadiness() {
    const recommendation = campaignRecommendation()

    const readiness: CampaignReadiness = {
      campaign: {
        name: CAMPAIGN_INPUTS.name,
        plannedBudgetUsd: CAMPAIGN_INPUTS.plannedBudgetUsd,
        campaignMonths: CAMPAIGN_INPUTS.campaignMonths,
        channels: [...CAMPAIGN_INPUTS.channels],
        intendedLaunch: CAMPAIGN_INPUTS.intendedLaunch,
      },
      score: campaignReadinessScore(),
      recommendation,
      recommendationLabel: RECOMMENDATION_LABEL[recommendation],
      decision: executiveDecision(),
      constraint: primaryConstraint(),
      dimensions: READINESS_DIMENSIONS,
      journey: journeyCoverage(),
      risks: commercialRisk(),
      budgetAtRisk: budgetAtRisk(),
      confidence: assessmentConfidence(),
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
      actions: preLaunchActions(),
      thresholds: { ...READINESS_THRESHOLDS },
    }
    return envelope('campaign-readiness', readiness)
  },

  async getNarrativeIntelligence() {
    const verdict = narrativeVerdict()

    const intelligence: NarrativeIntelligence = {
      health: narrativeHealth(),
      healthScore: narrativeHealthScore(),
      stability: narrativeStability(),
      momentum: narrativeMomentum(),
      risk: narrativeRiskLevel(),
      sentiment: publicSentiment(),
      verdict,
      verdictLabel: NARRATIVE_VERDICT_LABEL[verdict.verdict],
      engines: engineNarratives(),
      divergence: engineDivergence(),
      narratives: NARRATIVES,
      ownership: narrativeOwnership(),
      competitors: competitorNarratives(),
      media: MEDIA_TOPICS,
      mediaMomentum: mediaMomentum(),
      publicQuestions: publicQuestions(),
      buyingQuestions: buyingQuestions(),
      misconceptions: misconceptions(),
      opportunities: NARRATIVE_OPPORTUNITIES,
      risks: NARRATIVE_RISKS,
      recommendations: NARRATIVE_RECOMMENDATIONS,
    }
    return envelope('narrative', intelligence)
  },

  async getElectionIntelligence() {
    const intelligence: ElectionIntelligence = {
      subject: ELECTION_SUBJECT,
      measures: ELECTION_MEASURES,
      narratives: ELECTION_NARRATIVES,
      regions: REGIONAL_SENTIMENT,
      swingTopics: SWING_TOPICS,
      engines: engineElectionNarratives(),
      verdict: electionVerdict(),
    }
    return envelope('election', intelligence)
  },

  async getPlans() {
    return envelope('plans', PLANS)
  },

  async getPlan(slug: string) {
    return envelope(`plan:${slug}`, PLANS.find((p) => p.slug === slug) ?? null)
  },
}

export const ALL_PRODUCTS = PRODUCTS
