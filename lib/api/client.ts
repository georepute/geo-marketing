import { seedAdapter } from './adapters/seed.adapter'
import { contentFor, translateContent } from '@/lib/i18n/content'
import { DEFAULT_LOCALE, isLocale } from '@/lib/i18n/config'
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

/* ---------------------------------------------------------------------------
   LOCALISATION AT THE SEAM.

   Every screen already goes through this module and nothing else in the data
   layer, so wrapping the getters here translates the seeded demonstration
   prose for the whole site at once — no call site changes, and no page can
   bypass it by accident.

   The locale comes from the route. `next/root-params` is unavailable outside
   a [locale] route — sitemap.ts and robots.ts call these getters too — so the
   failure is caught and English returned. Those surfaces emit URLs, not prose.
   ------------------------------------------------------------------------ */

async function activeLocale(): Promise<string> {
  try {
    const { locale } = await import('next/root-params')
    const value = await locale()
    return isLocale(value) ? value : DEFAULT_LOCALE
  } catch {
    return DEFAULT_LOCALE
  }
}

/** Wrap an adapter method so its result comes back in the active language. */
function localised<A extends unknown[], R>(
  method: (...args: A) => Promise<R>,
): (...args: A) => Promise<R> {
  return async (...args: A) => {
    const result = await method(...args)
    const overlay = await contentFor(await activeLocale())
    return translateContent(result, overlay)
  }
}

export const getOrg = localised(ADAPTER.getOrg.bind(ADAPTER))
export const getDomainPreview = localised(ADAPTER.getDomainPreview.bind(ADAPTER))
export const getCausalChain = localised(ADAPTER.getCausalChain.bind(ADAPTER))
export const getReadout = localised(ADAPTER.getReadout.bind(ADAPTER))
export const getReadouts = localised(ADAPTER.getReadouts.bind(ADAPTER))
export const getEngines = localised(ADAPTER.getEngines.bind(ADAPTER))
export const getEngine = localised(ADAPTER.getEngine.bind(ADAPTER))
export const getEngineMatrix = localised(ADAPTER.getEngineMatrix.bind(ADAPTER))
export const getCompetitors = localised(ADAPTER.getCompetitors.bind(ADAPTER))
export const getPrompts = localised(ADAPTER.getPrompts.bind(ADAPTER))
export const getStageCoverage = localised(ADAPTER.getStageCoverage.bind(ADAPTER))
export const getSearchObservations = localised(ADAPTER.getSearchObservations.bind(ADAPTER))
export const getGapMatrix = localised(ADAPTER.getGapMatrix.bind(ADAPTER))
export const getEconomics = localised(ADAPTER.getEconomics.bind(ADAPTER))
export const getMissionTiles = localised(ADAPTER.getMissionTiles.bind(ADAPTER))
export const getFeed = localised(ADAPTER.getFeed.bind(ADAPTER))
export const getReconstructableQuestions =
  localised(ADAPTER.getReconstructableQuestions.bind(ADAPTER))
export const getReconstruction = localised(ADAPTER.getReconstruction.bind(ADAPTER))
export const getDecisionGraph = localised(ADAPTER.getDecisionGraph.bind(ADAPTER))
export const getActions = localised(ADAPTER.getActions.bind(ADAPTER))
export const getProducts = localised(ADAPTER.getProducts.bind(ADAPTER))
export const getProduct = localised(ADAPTER.getProduct.bind(ADAPTER))
export const getEcosystem = localised(ADAPTER.getEcosystem.bind(ADAPTER))
export const getCategory = localised(ADAPTER.getCategory.bind(ADAPTER))
export const getCampaignReadiness = localised(ADAPTER.getCampaignReadiness.bind(ADAPTER))
export const getNarrativeIntelligence =
  localised(ADAPTER.getNarrativeIntelligence.bind(ADAPTER))
export const getElectionIntelligence =
  localised(ADAPTER.getElectionIntelligence.bind(ADAPTER))
export const getPlans = localised(ADAPTER.getPlans.bind(ADAPTER))
export const getPlan = localised(ADAPTER.getPlan.bind(ADAPTER))

export type * from './types'
