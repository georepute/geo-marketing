import {
  Activity,
  Boxes,
  BrainCircuit,
  ClipboardList,
  Compass,
  Crosshair,
  FileSearch,
  Gauge,
  Globe,
  LineChart,
  Megaphone,
  Network,
  Radar,
  ScanSearch,
  ShieldCheck,
  Split,
  Target,
  Timer,
  TrendingUp,
  Users,
  type LucideIcon,
} from 'lucide-react'

/* ============================================================================
   Icon assignments.

   Fixed in one place so a concept wears the same glyph everywhere it appears.
   Icons here are navigational aids, never decoration — every one maps to a
   real engine, tier or measure, and each is paired with a text label so it is
   never the sole carrier of meaning.
   ========================================================================= */

export const ENGINE_ICON: Record<string, LucideIcon> = {
  'ai-recognition': BrainCircuit,
  'google-vs-ai': Split,
  'competitor-decision': Crosshair,
  action: ClipboardList,
  'ai-search-presence': ScanSearch,
  'search-economics': LineChart,
  narrative: Megaphone,
  'trust-authority': ShieldCheck,
  'opportunity-revenue': TrendingUp,
  'strategic-timing': Timer,
  distribution: Network,
  'global-market': Globe,
}

/** The seven intelligence categories. Slugs never collide with engine slugs. */
export const CATEGORY_ICON: Record<string, LucideIcon> = {
  'ai-visibility-intelligence': Radar,
  'search-intelligence': Split,
  'competitive-intelligence': Crosshair,
  'trust-intelligence': ShieldCheck,
  'content-intelligence': Megaphone,
  'market-intelligence': Globe,
  'executive-intelligence': Compass,
}

export const TIER_ICON: Record<string, LucideIcon> = {
  entry: ScanSearch,
  advanced: FileSearch,
  premium: Compass,
}

/** Mission Control tiles, keyed by tile id. */
export const TILE_ICON: Record<string, LucideIcon> = {
  'decision-health': Gauge,
  'revenue-exposure': TrendingUp,
  'ai-recognition': BrainCircuit,
  'google-vs-ai': Split,
  'decision-presence': Radar,
  'competitive-capture': Crosshair,
  'narrative-ownership': Megaphone,
  'trust-readiness': ShieldCheck,
  'paid-dependency': LineChart,
  'timing-window': Timer,
}

/**
 * Merged lookup for components that receive an icon across the server/client
 * boundary. A React component is a function, and functions cannot be passed
 * as props from a Server Component — so the key travels instead, and the
 * client resolves it here. Engine slugs and tier names do not collide.
 */
export const ICON_BY_KEY: Record<string, LucideIcon> = {
  ...ENGINE_ICON,
  ...CATEGORY_ICON,
  ...TIER_ICON,
  ...TILE_ICON,
}

export const MISC_ICON = {
  activity: Activity,
  boxes: Boxes,
  target: Target,
  users: Users,
} as const
