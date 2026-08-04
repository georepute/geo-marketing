import type { Confidence } from './types'

/* ============================================================================
   Executive Intelligence Feed — brief §6.3.

   The brief names ten event types. Each entry below is one of them, and every
   entry is consistent with the seed: the engines, competitors, keywords and
   figures referenced all exist elsewhere in the data.

   `readoutId` is what turns the feed from a notification list into an entry
   point — every event opens the evidence behind it.
   ========================================================================= */

export type FeedKind =
  | 'recommendation-gained'
  | 'citation-lost'
  | 'competitor-surge'
  | 'search-cost-spike'
  | 'question-emerging'
  | 'narrative-risk'
  | 'trust-decay'
  | 'timing-window'
  | 'regional-opportunity'
  | 'action-measured'

export interface FeedEvent {
  id: string
  kind: FeedKind
  headline: string
  detail: string
  /** Signed movement where one applies, for the delta chip. */
  delta: string | null
  direction: 'up' | 'down' | 'neutral'
  /** Whether the movement is commercially good or bad — not the same thing. */
  tone: 'positive' | 'negative' | 'neutral'
  observedAt: string
  readoutId: string
  confidence: Confidence
}

export const FEED_LABELS: Record<FeedKind, string> = {
  'recommendation-gained': 'Recommendation gained',
  'citation-lost': 'Citation lost',
  'competitor-surge': 'Competitor surge',
  'search-cost-spike': 'Search cost spike',
  'question-emerging': 'New decision question',
  'narrative-risk': 'Narrative risk',
  'trust-decay': 'Trust signal decayed',
  'timing-window': 'Timing window',
  'regional-opportunity': 'Regional opportunity',
  'action-measured': 'Action measured',
}

export const FEED: FeedEvent[] = [
  {
    id: 'f1',
    kind: 'competitor-surge',
    headline: 'Kestrel Industrial gained the first recommendation on two more supplier questions',
    detail:
      'Kestrel now leads four of seven supplier-evaluation answers, up from two. Both new wins cite a trade publication added in June.',
    delta: '+2 questions',
    direction: 'up',
    tone: 'negative',
    observedAt: '2026-07-31',
    readoutId: 'r-competitor',
    confidence: 'high',
  },
  {
    id: 'f2',
    kind: 'citation-lost',
    headline: 'Perplexity stopped citing the Northwind capability page',
    detail:
      'The page was cited on three questions in June and none in July. Perplexity now resolves the same questions to competitor sources.',
    delta: '3 → 0 citations',
    direction: 'down',
    tone: 'negative',
    observedAt: '2026-07-30',
    readoutId: 'r-authority',
    confidence: 'high',
  },
  {
    id: 'f3',
    kind: 'recommendation-gained',
    headline: 'Claude began recommending Northwind for regional distributor questions',
    detail:
      'First recommendation on “Top rated industrial supply vendors near Chicago”. Regional specificity is the differentiator the answer cites.',
    delta: '+1 question',
    direction: 'up',
    tone: 'positive',
    observedAt: '2026-07-29',
    readoutId: 'r-missed-prompts',
    confidence: 'high',
  },
  {
    id: 'f4',
    kind: 'search-cost-spike',
    headline: 'Blended CPC moved further above break-even',
    detail:
      '“industrial supply company” rose to $11.00 with no organic position in the top 100. Paid is covering a question authority does not reach.',
    delta: '+8% CPC',
    direction: 'up',
    tone: 'negative',
    observedAt: '2026-07-31',
    readoutId: 'r-paid-dependency',
    confidence: 'medium',
  },
  {
    id: 'f5',
    kind: 'trust-decay',
    headline: 'Category description diverged across two trade directories',
    detail:
      'Two directories now describe Northwind differently from its own site. Inconsistency is the mechanism behind entity confusion on ChatGPT and Copilot.',
    delta: null,
    direction: 'neutral',
    tone: 'negative',
    observedAt: '2026-07-28',
    readoutId: 'r-trust',
    confidence: 'medium',
  },
  {
    id: 'f6',
    kind: 'narrative-risk',
    headline: 'Engines adopted a competitor’s evaluation criteria',
    detail:
      'Fill rate and catalogue breadth are now cited first when engines explain how to choose a distributor. Regional response time is not referenced.',
    delta: null,
    direction: 'neutral',
    tone: 'negative',
    observedAt: '2026-07-30',
    readoutId: 'r-narrative',
    confidence: 'medium',
  },
  {
    id: 'f7',
    kind: 'question-emerging',
    headline: 'A new supplier-evaluation question entered the tracked set',
    detail:
      '“Which MRO supplier has the best fill rate?” appeared with measurable volume. Northwind is absent from every engine answering it.',
    delta: '25 searches/mo',
    direction: 'up',
    tone: 'neutral',
    observedAt: '2026-07-27',
    readoutId: 'r-missed-prompts',
    confidence: 'high',
  },
  {
    id: 'f8',
    kind: 'timing-window',
    headline: 'Competitive density rose 8% quarter over quarter',
    detail:
      'The window remains open but is narrowing. Displacement cost rises once engines settle on a stable answer set.',
    delta: '+8% QoQ',
    direction: 'up',
    tone: 'negative',
    observedAt: '2026-07-31',
    readoutId: 'r-timing',
    confidence: 'directional',
  },
  {
    id: 'f9',
    kind: 'regional-opportunity',
    headline: 'Midwest regional questions show weaker competitive density',
    detail:
      'Questions naming a Midwest location carry lower competitor control than national equivalents — the cheapest available entry point.',
    delta: null,
    direction: 'neutral',
    tone: 'positive',
    observedAt: '2026-07-26',
    readoutId: 'r-gap',
    confidence: 'directional',
  },
]

export function feedByRecency(): FeedEvent[] {
  return [...FEED].sort(
    (a, b) =>
      new Date(b.observedAt).getTime() - new Date(a.observedAt).getTime(),
  )
}
