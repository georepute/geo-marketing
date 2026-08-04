import { BREAK_EVEN_CPC, SPINE } from './spine'
import type { SearchObservation } from './types'

/* ============================================================================
   Google search observations. Brief §18 Search Observation.

   The blended CPC sitting above break-even is what makes the spine's
   `paidDependency: 'high'` a computed conclusion rather than an assertion.
   ========================================================================= */

export const SEARCH_OBSERVATIONS: SearchObservation[] = [
  { keyword: 'industrial fastener supplier', position: null, monthlyVolume: 320, cpc: 9.2, competition: 'high', aiPresence: false },
  { keyword: 'mro distributor', position: 14, monthlyVolume: 260, cpc: 9.8, competition: 'high', aiPresence: false },
  { keyword: 'grade 8 bolts bulk', position: 3, monthlyVolume: 210, cpc: 6.4, competition: 'medium', aiPresence: false },
  { keyword: 'hydraulic fittings supplier', position: 22, monthlyVolume: 190, cpc: 10.5, competition: 'high', aiPresence: false },
  { keyword: 'fastener distributor midwest', position: 2, monthlyVolume: 170, cpc: 7.1, competition: 'medium', aiPresence: true },
  { keyword: 'vendor managed inventory mro', position: 31, monthlyVolume: 150, cpc: 10.2, competition: 'high', aiPresence: false },
  { keyword: 'industrial supply company', position: null, monthlyVolume: 140, cpc: 11.0, competition: 'high', aiPresence: false },
  { keyword: 'bulk fasteners chicago', position: 7, monthlyVolume: 130, cpc: 5.9, competition: 'medium', aiPresence: false },
  { keyword: 'maintenance repair operations supplier', position: 18, monthlyVolume: 120, cpc: 9.2, competition: 'high', aiPresence: false },
  { keyword: 'stainless steel fasteners supplier', position: 5, monthlyVolume: 110, cpc: 6.8, competition: 'medium', aiPresence: false },
  { keyword: 'same day fastener shipping', position: 12, monthlyVolume: 95, cpc: 8.6, competition: 'medium', aiPresence: false },
  { keyword: 'mro supply agreement', position: 9, monthlyVolume: 90, cpc: 7.4, competition: 'low', aiPresence: false },
  { keyword: 'industrial distributor fill rate', position: 26, monthlyVolume: 85, cpc: 8.9, competition: 'medium', aiPresence: false },
  { keyword: 'fastener sourcing best practices', position: 3, monthlyVolume: 80, cpc: 4.2, competition: 'low', aiPresence: true },
  { keyword: 'plant maintenance supplies', position: null, monthlyVolume: 75, cpc: 9.6, competition: 'high', aiPresence: false },
  { keyword: 'anchor bolts supplier', position: 6, monthlyVolume: 70, cpc: 6.2, competition: 'medium', aiPresence: false },
  { keyword: 'industrial supply near me', position: 19, monthlyVolume: 65, cpc: 9.4, competition: 'high', aiPresence: false },
  { keyword: 'mro consolidation vendor', position: 34, monthlyVolume: 60, cpc: 10.8, competition: 'medium', aiPresence: false },
  { keyword: 'fastener catalog request', position: 8, monthlyVolume: 50, cpc: 5.4, competition: 'low', aiPresence: false },
  { keyword: 'industrial supply account setup', position: 1, monthlyVolume: 40, cpc: 3.9, competition: 'low', aiPresence: true },
]

/** Volume-weighted blended CPC across the tracked keyword set. */
export function blendedCpc(): number {
  const totalVolume = SEARCH_OBSERVATIONS.reduce(
    (s, k) => s + k.monthlyVolume,
    0,
  )
  const weighted = SEARCH_OBSERVATIONS.reduce(
    (s, k) => s + k.monthlyVolume * k.cpc,
    0,
  )
  return Number((weighted / totalVolume).toFixed(2))
}

export const BREAK_EVEN = Number(BREAK_EVEN_CPC.toFixed(2))

/**
 * Paid dependency, derived. Blended CPC above break-even means paid traffic is
 * compensating for a structural visibility failure — brief §7 Search Economics.
 */
export function paidDependency(): 'high' | 'moderate' | 'low' {
  const ratio = blendedCpc() / BREAK_EVEN
  if (ratio >= 1.25) return 'high'
  if (ratio >= 1.0) return 'moderate'
  return 'low'
}

/** Does the derived dependency agree with the spine? */
export function paidDependencyMatchesSpine(): boolean {
  return paidDependency() === SPINE.paidDependency
}

export function topThree(): SearchObservation[] {
  return SEARCH_OBSERVATIONS.filter((k) => k.position !== null && k.position <= 3)
}

export function pageTwoOrWorse(): SearchObservation[] {
  return SEARCH_OBSERVATIONS.filter((k) => k.position === null || k.position > 10)
}

export function midPage(): SearchObservation[] {
  return SEARCH_OBSERVATIONS.filter(
    (k) => k.position !== null && k.position > 3 && k.position <= 10,
  )
}

/* --------------------------------------------------------------------------
   Gap classification — brief §7 Google vs AI Visibility Intelligence.
   Four surfaces × two states, and the compound blind spot is the dangerous one.
   ------------------------------------------------------------------------ */
export type GapClass =
  | 'aligned'
  | 'partial-ai-visibility'
  | 'recoverable-search'
  | 'strategic-blind-spot'
  | 'compound-blind-spot'

export const GAP_LABELS: Record<GapClass, string> = {
  aligned: 'Aligned',
  'partial-ai-visibility': 'Partial AI visibility',
  'recoverable-search': 'Recoverable search opportunity',
  'strategic-blind-spot': 'Strategic blind spot',
  'compound-blind-spot': 'Compound blind spot',
}

export const GAP_DEFINITIONS: Record<GapClass, string> = {
  aligned: 'Visible in Google and recommended by AI. No action required.',
  'partial-ai-visibility':
    'Recommended by AI but weak in Google. The AI surface is carrying the channel alone.',
  'recoverable-search':
    'Ranking in Google but absent from AI answers. Existing authority is not reaching the AI surface.',
  'strategic-blind-spot':
    'Absent from AI answers and outside the Google top ten. The decision happens without the brand.',
  'compound-blind-spot':
    'Absent from both surfaces on a high-value commercial question. The most expensive class of gap.',
}

export function classifyGap(k: SearchObservation): GapClass {
  const rankedWell = k.position !== null && k.position <= 3
  const rankedAtAll = k.position !== null && k.position <= 10
  if (rankedWell && k.aiPresence) return 'aligned'
  if (k.aiPresence && !rankedAtAll) return 'partial-ai-visibility'
  if (rankedAtAll && !k.aiPresence) return 'recoverable-search'
  if (!rankedAtAll && !k.aiPresence && k.monthlyVolume >= 140)
    return 'compound-blind-spot'
  return 'strategic-blind-spot'
}

export function gapMatrix() {
  return SEARCH_OBSERVATIONS.map((k) => ({ ...k, gap: classifyGap(k) }))
}

export function gapCounts(): Record<GapClass, number> {
  const base: Record<GapClass, number> = {
    aligned: 0,
    'partial-ai-visibility': 0,
    'recoverable-search': 0,
    'strategic-blind-spot': 0,
    'compound-blind-spot': 0,
  }
  for (const row of gapMatrix()) base[row.gap] += 1
  return base
}
