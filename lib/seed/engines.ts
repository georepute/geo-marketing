import type { AiEngineId } from './types'
import { enginePresencePct } from './prompts'

/* ============================================================================
   Part 1 — the six AI engines observed. Brief §5: "six AI engines".

   Two distinct metrics, deliberately kept apart:

     · recommendationPresencePct — DERIVED from prompts.ts. How often this
       engine actually puts Northwind forward. ChatGPT's value is the spine's
       4.2%.

     · recognitionScore — an entity-understanding score (0–100). A different
       question: does the engine know who Northwind is at all, regardless of
       whether it recommends them?

   Conflating the two is the mistake that makes AI-visibility tools shallow.
   ========================================================================= */

export interface AiEngine {
  id: AiEngineId
  name: string
  /** 0–100. Does the engine understand the entity? Brief §7 AI Recognition. */
  recognitionScore: number
  /** What the engine believes Northwind is. Brief §7 entity understanding. */
  understoodAs: string
  /** Where that understanding is wrong or stale. */
  confusion: string | null
  /** Sources this engine leans on when answering category questions. */
  dominantSources: string[]
  lastObserved: string
}

export const AI_ENGINES: AiEngine[] = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    recognitionScore: 41,
    understoodAs: 'A regional industrial supplier in the US Midwest',
    confusion:
      'Describes Northwind as a hardware retailer rather than an MRO distributor, which removes it from supplier-evaluation answers.',
    dominantSources: ['Trade directories', 'Company website', 'Wikipedia'],
    lastObserved: '2026-07-29',
  },
  {
    id: 'claude',
    name: 'Claude',
    recognitionScore: 47,
    understoodAs: 'An MRO and fastener distributor serving manufacturers',
    confusion: null,
    dominantSources: ['Company website', 'Industry publications'],
    lastObserved: '2026-07-30',
  },
  {
    id: 'gemini',
    name: 'Gemini',
    recognitionScore: 24,
    understoodAs: 'Unclear — associates the name with unrelated businesses',
    confusion:
      'Conflates Northwind Supply with a same-named logistics firm, so category association fails entirely.',
    dominantSources: ['Local listings', 'Aggregator pages'],
    lastObserved: '2026-07-28',
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    recognitionScore: 58,
    understoodAs: 'Midwest industrial fastener and MRO distributor',
    confusion: null,
    dominantSources: [
      'Company website',
      'Trade publications',
      'Customer reviews',
    ],
    lastObserved: '2026-07-31',
  },
  {
    id: 'copilot',
    name: 'Copilot',
    recognitionScore: 38,
    understoodAs: 'Industrial supply company, category association incomplete',
    confusion:
      'Knows the company exists but not which product categories it carries, so it is omitted from specification-led questions.',
    dominantSources: ['Business directories', 'Company website'],
    lastObserved: '2026-07-29',
  },
  {
    id: 'grok',
    name: 'Grok',
    recognitionScore: 21,
    understoodAs: 'Not recognized as a distinct business entity',
    confusion:
      'No stable entity record. Answers reference the category without naming Northwind at all.',
    dominantSources: ['Social discussion', 'Aggregator pages'],
    lastObserved: '2026-07-27',
  },
]

/** Engine rows with their derived presence figures attached. */
export function engineMatrix() {
  return AI_ENGINES.map((e) => ({
    ...e,
    recommendationPresencePct: enginePresencePct(e.id),
  }))
}

/**
 * The engine carrying the most commercial risk: lowest recognition among
 * those that never recommend Northwind. Surfaced on the Home preview.
 */
export function highestRiskEngine(): AiEngine {
  const silent = engineMatrix().filter((e) => e.recommendationPresencePct === 0)
  const pool = silent.length > 0 ? silent : engineMatrix()
  return pool.reduce((worst, e) =>
    e.recognitionScore < worst.recognitionScore ? e : worst,
  )
}

export function averageRecognitionScore(): number {
  const sum = AI_ENGINES.reduce((s, e) => s + e.recognitionScore, 0)
  return Math.round(sum / AI_ENGINES.length)
}

/* ============================================================================
   Part 2 — the twelve intelligence engines. Brief §7.

   All twelve are listed so the overview reads as a complete operating system.
   `built: true` marks the four constructed in v1 (plan §2); the other eight
   render as "Available in platform" rather than 404ing.
   ========================================================================= */

export interface IntelligenceEngine {
  slug: string
  name: string
  /** Brief §7: each engine must answer a board-level business question. */
  businessQuestion: string
  capabilities: string[]
  screens: string[]
  built: boolean
  /** Readout used as this engine's real seeded outcome. */
  readoutId: string | null
  order: number
}

export const INTELLIGENCE_ENGINES: IntelligenceEngine[] = [
  {
    slug: 'ai-recognition',
    name: 'AI Recognition Intelligence',
    businessQuestion:
      'Do AI engines understand who the business is and when it should be considered?',
    capabilities: [
      'Recognition by engine',
      'Entity understanding',
      'Category association',
      'Confusion detection',
      'Outdated knowledge',
      'Source influence',
      'Recognition decay',
    ],
    screens: [
      'AI Recognition Matrix',
      'Entity Understanding',
      'Source Influence Map',
      'Confusion Detector',
    ],
    built: true,
    readoutId: 'r-recognition',
    order: 1,
  },
  {
    slug: 'google-vs-ai',
    name: 'Google vs AI Visibility Intelligence',
    businessQuestion:
      'Does the business exist consistently across traditional search and AI-mediated discovery?',
    capabilities: [
      'Google position',
      'AI recommendation presence',
      'Gap classification',
      'Recoverable search',
      'Strategic blind spot',
      'Compound blind spot',
      'Channel asymmetry',
    ],
    screens: [
      'Gap Matrix',
      'Query Inventory',
      'Recoverable Search Opportunity',
      'Compound Blind Spot',
    ],
    built: true,
    readoutId: 'r-gap',
    order: 2,
  },
  {
    slug: 'competitor-decision',
    name: 'Competitor Decision Intelligence',
    businessQuestion:
      'Where do competitors receive the decision before the business receives the lead?',
    capabilities: [
      'Recommendation share',
      'Winning prompts',
      'Decision-stage control',
      'Authority drivers',
      'Source advantage',
      'Narrative control',
      'Vulnerability',
    ],
    screens: [
      'Recommendation Map',
      'Decision Hijack',
      'Strength Drivers',
      'Authority Gap',
    ],
    built: true,
    readoutId: 'r-competitor',
    order: 3,
  },
  {
    slug: 'action',
    name: 'Action Intelligence',
    businessQuestion: 'What must happen next, by whom and by when?',
    capabilities: [
      'Action',
      'Evidence',
      'Expected impact',
      'Confidence',
      'Urgency',
      'Effort',
      'Owner',
      'Deadline',
      'Success metric',
      'Measured change',
    ],
    screens: [
      'Action Center',
      'Priority Queue',
      '30/60/90-Day Roadmap',
      'Impact Tracker',
    ],
    built: true,
    readoutId: 'r-action',
    order: 4,
  },
  {
    slug: 'ai-search-presence',
    name: 'AI Search Presence',
    businessQuestion:
      'Is the business present when customers ask AI whom to choose?',
    capabilities: [
      'Prompt coverage',
      'Missed prompts',
      'Citations',
      'Recommendation share',
      'Decision stage',
    ],
    screens: ['AI Search Presence', 'Missed Prompts', 'Decision Journey'],
    built: false,
    readoutId: null,
    order: 5,
  },
  {
    slug: 'search-economics',
    name: 'Search Economics',
    businessQuestion: 'When does paid search become structurally inefficient?',
    capabilities: [
      'CPC',
      'Break-even CPC',
      'Paid dependency',
      'Bid inflation',
      'Organic replacement potential',
    ],
    screens: ['Search Cost Intelligence', 'Break-Even CPC', 'AI vs Paid'],
    built: false,
    readoutId: null,
    order: 6,
  },
  {
    slug: 'narrative',
    name: 'Narrative Intelligence',
    businessQuestion:
      'When the market explains the category, whose language does it use?',
    capabilities: [
      'Narrative ownership',
      'Category definition',
      'Fragility',
      'Strategic silence',
      'Regional variation',
    ],
    screens: ['Narrative War Room', 'Ownership', 'Fragility'],
    built: false,
    readoutId: null,
    order: 7,
  },
  {
    slug: 'trust-authority',
    name: 'Trust and Authority Diagnostics',
    businessQuestion: 'Is the business visible but still unsafe to recommend?',
    capabilities: [
      'Independent validation',
      'Source authority',
      'Reputation consistency',
      'Trust decay',
    ],
    screens: ['Authority Signals', 'Buyer Confidence', 'Reputation Momentum'],
    built: false,
    readoutId: null,
    order: 8,
  },
  {
    slug: 'opportunity-revenue',
    name: 'Opportunity and Revenue Intelligence',
    businessQuestion:
      'Which gap is commercially meaningful enough to fix first?',
    capabilities: [
      'Decision volume',
      'Deal value',
      'Conversion assumptions',
      'Time to impact',
      'Opportunity range',
    ],
    screens: ['Opportunity Signal Map', 'Revenue Exposure', 'Scenario Simulator'],
    built: false,
    readoutId: null,
    order: 9,
  },
  {
    slug: 'strategic-timing',
    name: 'Strategic Timing Intelligence',
    businessQuestion: 'Is the market ready, and how long is the window open?',
    capabilities: [
      'Demand maturation',
      'Buyer education',
      'Competitive density',
      'Shift velocity',
    ],
    screens: ['Strategic Timing Window', 'Market Readiness Gauge'],
    built: false,
    readoutId: null,
    order: 10,
  },
  {
    slug: 'distribution',
    name: 'Distribution Intelligence',
    businessQuestion:
      'Does the route to market strengthen the brand or transfer power to intermediaries?',
    capabilities: [
      'Distributor alignment',
      'Dependency',
      'Replaceability',
      'Price justification',
    ],
    screens: ['Distributor Map', 'Dependency Risk', 'Replaceability Index'],
    built: false,
    readoutId: null,
    order: 11,
  },
  {
    slug: 'global-market',
    name: 'Global Market Intelligence',
    businessQuestion:
      'How does the business change across countries, languages and markets?',
    capabilities: [
      'Regional strength',
      'Market readiness',
      'Pricing perception',
      'Country definition',
    ],
    screens: ['Global Visibility Matrix', 'Market Entry Readiness'],
    built: false,
    readoutId: null,
    order: 12,
  },
]

export const BUILT_ENGINES = INTELLIGENCE_ENGINES.filter((e) => e.built)
