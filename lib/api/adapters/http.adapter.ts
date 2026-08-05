import type { DataAdapter } from '../types'

/* ============================================================================
   HTTP adapter — the drop-in point for a real backend.

   Deliberately unimplemented in v1. Its value is that it exists and typechecks:
   the moment a backend appears, this file is filled in and `client.ts` switches
   one constant. No screen changes, because no screen knows an adapter exists.
   ========================================================================= */

function notImplemented(method: string): never {
  throw new Error(
    `httpAdapter.${method} is not implemented. v1 is a seeded prototype — ` +
      `see lib/api/adapters/seed.adapter.ts. To go live, implement this ` +
      `adapter against the same DataAdapter contract and switch ADAPTER in ` +
      `lib/api/client.ts.`,
  )
}

export const httpAdapter: DataAdapter = {
  getOrg: () => notImplemented('getOrg'),
  getDomainPreview: () => notImplemented('getDomainPreview'),
  getCausalChain: () => notImplemented('getCausalChain'),
  getReadout: () => notImplemented('getReadout'),
  getReadouts: () => notImplemented('getReadouts'),
  getEngines: () => notImplemented('getEngines'),
  getEngine: () => notImplemented('getEngine'),
  getEngineMatrix: () => notImplemented('getEngineMatrix'),
  getCompetitors: () => notImplemented('getCompetitors'),
  getPrompts: () => notImplemented('getPrompts'),
  getStageCoverage: () => notImplemented('getStageCoverage'),
  getSearchObservations: () => notImplemented('getSearchObservations'),
  getGapMatrix: () => notImplemented('getGapMatrix'),
  getEconomics: () => notImplemented('getEconomics'),
  getMissionTiles: () => notImplemented('getMissionTiles'),
  getFeed: () => notImplemented('getFeed'),
  getReconstructableQuestions: () =>
    notImplemented('getReconstructableQuestions'),
  getReconstruction: () => notImplemented('getReconstruction'),
  getDecisionGraph: () => notImplemented('getDecisionGraph'),
  getActions: () => notImplemented('getActions'),
  getProducts: () => notImplemented('getProducts'),
  getProduct: () => notImplemented('getProduct'),
  getEcosystem: () => notImplemented('getEcosystem'),
  getCategory: () => notImplemented('getCategory'),
  getCampaignReadiness: () => notImplemented('getCampaignReadiness'),
  getNarrativeIntelligence: () => notImplemented('getNarrativeIntelligence'),
  getElectionIntelligence: () => notImplemented('getElectionIntelligence'),
  getPlans: () => notImplemented('getPlans'),
  getPlan: () => notImplemented('getPlan'),
}
