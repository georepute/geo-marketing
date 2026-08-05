import { seedAdapter } from './adapters/seed.adapter'
import type { DataAdapter } from './types'

/* ============================================================================
   THE SEAM.

   Screens import from this module and nothing else in the data layer. An
   ESLint `no-restricted-imports` rule enforces that — pages may not reach into
   lib/seed or lib/api/adapters directly.

   Going live is a one-line change here:
     import { httpAdapter } from './adapters/http.adapter'
     const ADAPTER: DataAdapter = httpAdapter
   ========================================================================= */

const ADAPTER: DataAdapter = seedAdapter

export const api = ADAPTER

export const getOrg = ADAPTER.getOrg.bind(ADAPTER)
export const getDomainPreview = ADAPTER.getDomainPreview.bind(ADAPTER)
export const getCausalChain = ADAPTER.getCausalChain.bind(ADAPTER)
export const getReadout = ADAPTER.getReadout.bind(ADAPTER)
export const getReadouts = ADAPTER.getReadouts.bind(ADAPTER)
export const getEngines = ADAPTER.getEngines.bind(ADAPTER)
export const getEngine = ADAPTER.getEngine.bind(ADAPTER)
export const getEngineMatrix = ADAPTER.getEngineMatrix.bind(ADAPTER)
export const getCompetitors = ADAPTER.getCompetitors.bind(ADAPTER)
export const getPrompts = ADAPTER.getPrompts.bind(ADAPTER)
export const getStageCoverage = ADAPTER.getStageCoverage.bind(ADAPTER)
export const getSearchObservations = ADAPTER.getSearchObservations.bind(ADAPTER)
export const getGapMatrix = ADAPTER.getGapMatrix.bind(ADAPTER)
export const getEconomics = ADAPTER.getEconomics.bind(ADAPTER)
export const getMissionTiles = ADAPTER.getMissionTiles.bind(ADAPTER)
export const getFeed = ADAPTER.getFeed.bind(ADAPTER)
export const getReconstructableQuestions =
  ADAPTER.getReconstructableQuestions.bind(ADAPTER)
export const getReconstruction = ADAPTER.getReconstruction.bind(ADAPTER)
export const getDecisionGraph = ADAPTER.getDecisionGraph.bind(ADAPTER)
export const getActions = ADAPTER.getActions.bind(ADAPTER)
export const getProducts = ADAPTER.getProducts.bind(ADAPTER)
export const getProduct = ADAPTER.getProduct.bind(ADAPTER)
export const getEcosystem = ADAPTER.getEcosystem.bind(ADAPTER)
export const getCategory = ADAPTER.getCategory.bind(ADAPTER)
export const getCampaignReadiness = ADAPTER.getCampaignReadiness.bind(ADAPTER)
export const getNarrativeIntelligence =
  ADAPTER.getNarrativeIntelligence.bind(ADAPTER)
export const getElectionIntelligence =
  ADAPTER.getElectionIntelligence.bind(ADAPTER)
export const getPlans = ADAPTER.getPlans.bind(ADAPTER)
export const getPlan = ADAPTER.getPlan.bind(ADAPTER)

export type * from './types'
