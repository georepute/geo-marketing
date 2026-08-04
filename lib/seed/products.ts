import type { IntelligenceProduct, Plan } from './types'

/* ============================================================================
   Intelligence Marketplace — brief §11. Eight products across the three tiers.
   Every product carries all eleven §9 detail fields, so the detail page is
   complete for any of them without a sales call.

   PRICING IS PLACEHOLDER. The brief names no plans or prices (plan §7 Q4).
   Every price below is invented and marked as such in the UI.
   ========================================================================= */

export const PRODUCTS: IntelligenceProduct[] = [
  {
    slug: 'google-vs-ai-gap-scan',
    name: 'Google vs AI Gap Scan',
    tier: 'entry',
    businessQuestion:
      'Is the business aligned across traditional search and AI discovery?',
    decisionConsequence:
      'A business ranking in Google can still be absent from every AI answer that decides the vendor. The reverse is equally common. Each surface is a separate commercial asset, and channel asymmetry is invisible to both SEO and analytics tooling.',
    detects: [
      'Gap classification per commercial question',
      'Recoverable search opportunity',
      'Strategic blind spots',
      'Compound blind spots',
      'Channel asymmetry',
      'Paid dependency exposure',
    ],
    requiredInputs: [
      'Domain',
      'Market and language',
      'Up to 4 competitors',
      'Average deal value',
      'Optional: Search Console',
    ],
    scope: '6 AI engines · 20 commercial questions · 4 competitors · 1 market',
    depth: 'Snapshot',
    delivery: [
      'Interactive workspace',
      'Downloadable intelligence brief',
      'Evidence pack',
    ],
    confidence: 'high',
    timeToDelivery: 'After scan completion — typically under 30 minutes',
    priceUsd: 490,
    upgradePath:
      'Continuous monitoring, additional markets, or the full platform with history and alerts.',
    sampleReadoutId: 'r-gap',
  },
  {
    slug: 'ai-recognition-scan',
    name: 'AI Recognition Scan',
    tier: 'entry',
    businessQuestion:
      'Do AI engines understand who the business is and what it offers?',
    decisionConsequence:
      'An engine that cannot categorise a business cannot recommend it. Entity confusion sits upstream of every visibility metric — content investment cannot move an answer while the underlying record is wrong.',
    detects: [
      'Recognition by engine',
      'Entity understanding',
      'Category association',
      'Confusion and conflation',
      'Outdated knowledge',
      'Source influence',
    ],
    requiredInputs: ['Domain', 'Market and language', 'Category description'],
    scope: '6 AI engines · entity and category association · 1 market',
    depth: 'Snapshot',
    delivery: ['Interactive workspace', 'Downloadable intelligence brief'],
    confidence: 'high',
    timeToDelivery: 'After scan completion — typically under 20 minutes',
    priceUsd: 390,
    upgradePath: 'Recognition history and decay monitoring.',
    sampleReadoutId: 'r-recognition',
  },
  {
    slug: 'competitor-recommendation-scan',
    name: 'Competitor Recommendation Scan',
    tier: 'entry',
    businessQuestion: 'Who is recommended instead, where and why?',
    decisionConsequence:
      'Knowing a competitor wins is not actionable. Knowing which evidence engines cite when they recommend that competitor is. This separates brand preference from an evidence gap you can close.',
    detects: [
      'Recommendation share',
      'Winning questions',
      'Decision-stage control',
      'Authority drivers',
      'Source advantage',
      'Competitor vulnerability',
    ],
    requiredInputs: ['Domain', 'Up to 4 competitors', 'Market and language'],
    scope: '6 AI engines · 24 decision questions · 4 competitors',
    depth: 'Snapshot',
    delivery: ['Interactive workspace', 'Evidence pack'],
    confidence: 'high',
    timeToDelivery: 'After scan completion — typically under 30 minutes',
    priceUsd: 490,
    upgradePath: 'Continuous competitor monitoring and momentum tracking.',
    sampleReadoutId: 'r-competitor',
  },
  {
    slug: 'ai-search-presence-scan',
    name: 'AI Search Presence Scan',
    tier: 'entry',
    businessQuestion:
      'Is the business visible when customers ask for recommendations?',
    decisionConsequence:
      'Presence averaged across all questions hides the collapse that matters. What decides revenue is presence at the supplier-evaluation stage, and that figure is usually far lower than the headline.',
    detects: [
      'Prompt coverage',
      'Missed decision questions',
      'Mentions and citations',
      'Recommendation share by stage',
      'Decision-journey position',
    ],
    requiredInputs: ['Domain', 'Market and language', 'Category description'],
    scope: '6 AI engines · 24 decision questions · 5 decision stages',
    depth: 'Snapshot',
    delivery: ['Interactive workspace', 'Downloadable intelligence brief'],
    confidence: 'high',
    timeToDelivery: 'After scan completion — typically under 30 minutes',
    priceUsd: 390,
    upgradePath: 'Continuous prompt monitoring and visibility trends.',
    sampleReadoutId: 'r-missed-prompts',
  },
  {
    slug: 'trust-signals-scan',
    name: 'Trust Signals Scan',
    tier: 'entry',
    businessQuestion:
      'Which trust signals strengthen or weaken recommendation readiness?',
    decisionConsequence:
      'Visibility creates attention; trust creates selection. A business can be found and still be filtered out when an engine has to stand behind naming it first.',
    detects: [
      'Independent validation',
      'Source authority',
      'Reputation consistency',
      'Social proof quality',
      'Trust decay',
    ],
    requiredInputs: ['Domain', 'Market and language'],
    scope: 'Public trust and reputation sources · 1 market',
    depth: 'Snapshot',
    delivery: ['Interactive workspace'],
    confidence: 'medium',
    timeToDelivery: 'After scan completion — typically under 20 minutes',
    priceUsd: 290,
    upgradePath: 'Reputation momentum and trust decay monitoring.',
    sampleReadoutId: 'r-trust',
  },
  {
    slug: 'decision-journey-diagnostic',
    name: 'Decision Journey Diagnostic',
    tier: 'advanced',
    businessQuestion:
      'Where does the business disappear during the buyer decision process?',
    decisionConsequence:
      'Most businesses lose the decision at one specific stage, not evenly across the journey. Locating that stage tells you where intervention returns most, and where further investment returns nothing.',
    detects: [
      'Stage-by-stage coverage',
      'The stage where presence collapses',
      'Competitor control per stage',
      'Question-to-stage mapping',
      'Revenue concentration by stage',
    ],
    requiredInputs: [
      'Domain',
      'Market and language',
      'Up to 4 competitors',
      'Average deal value',
      'Revenue split by decision stage',
    ],
    scope: '6 AI engines · 24 questions · 5 stages · 4 competitors',
    depth: 'Advanced',
    delivery: [
      'Interactive workspace',
      'Downloadable intelligence brief',
      'Evidence pack',
      'Action plan',
    ],
    confidence: 'high',
    timeToDelivery: 'After scan completion — typically under 60 minutes',
    priceUsd: 1_450,
    upgradePath: 'Continuous monitoring with stage-level alerting.',
    sampleReadoutId: 'r-supplier-collapse',
  },
  {
    slug: 'competitive-position-assessment',
    name: 'Competitive Position Assessment',
    tier: 'advanced',
    businessQuestion: 'Why do competitors capture the decision?',
    decisionConsequence:
      'Structured comparison of the evidence each competitor supplies to engines, and what it would take to match it. Converts a share gap into a specific, costed evidence programme.',
    detects: [
      'Recommendation share and momentum',
      'Authority driver comparison',
      'Source advantage analysis',
      'Narrative control',
      'Competitor vulnerability',
      'Default vendor threat',
    ],
    requiredInputs: [
      'Domain',
      'Up to 4 competitors',
      'Market and language',
      'Average deal value',
    ],
    scope: '6 AI engines · 24 questions · 4 competitors · citation analysis',
    depth: 'Strategic',
    delivery: [
      'Interactive workspace',
      'Downloadable intelligence brief',
      'Evidence pack',
      'Action plan',
    ],
    confidence: 'high',
    timeToDelivery: 'After scan completion — typically under 60 minutes',
    priceUsd: 1_450,
    upgradePath: 'Competitive War Room with continuous monitoring.',
    sampleReadoutId: 'r-competitor',
  },
  {
    slug: 'executive-intelligence-brief',
    name: 'Executive Intelligence Brief',
    tier: 'premium',
    businessQuestion:
      'What is the complete management position on risk, opportunity, timing and action?',
    decisionConsequence:
      'A board-ready position rather than a dashboard. States what is happening, what it means commercially, what the directional exposure is, how long the window stays open, and what must change — with owners and deadlines.',
    detects: [
      'Decision Health Index',
      'Directional revenue exposure',
      'Competitive threat',
      'Narrative control',
      'Strategic timing window',
      'Prioritised intervention sequence',
    ],
    requiredInputs: [
      'Domain',
      'Market and language',
      'Up to 4 competitors',
      'Average deal value',
      'Revenue split by decision stage',
      'Optional: Search Console and Analytics',
    ],
    scope:
      '6 AI engines · 24 questions · 20 keywords · 4 competitors · full GEON assessment',
    depth: 'Executive',
    delivery: [
      'Interactive workspace',
      'Downloadable intelligence brief',
      'Evidence pack',
      'Action plan',
      'Expert interpretation',
    ],
    confidence: 'high',
    timeToDelivery: 'Expert-reviewed — within 3 business days',
    priceUsd: 3_900,
    upgradePath:
      'Continuous monitoring, quarterly executive regeneration, or enterprise implementation.',
    sampleReadoutId: 'r-decision-health',
  },
]

export function getProduct(slug: string): IntelligenceProduct | undefined {
  return PRODUCTS.find((p) => p.slug === slug)
}

export function productsByTier(tier: IntelligenceProduct['tier']) {
  return PRODUCTS.filter((p) => p.tier === tier)
}

/* ============================================================================
   Subscription plans — brief §10. THREE TIERS, PLACEHOLDER PRICING.
   ========================================================================= */

export const PLANS: Plan[] = [
  {
    slug: 'signal',
    name: 'Signal',
    tagline: 'Continuous monitoring for a single domain and market.',
    monthlyUsd: 490,
    annualUsd: 4_900,
    domains: 1,
    seats: 3,
    features: [
      'All four intelligence engines',
      'Monthly scan across 6 AI engines',
      'Executive Mission Control',
      'Decision Reconstruction',
      'Signal history and alerts',
      'Action Center with owners and deadlines',
      'Downloadable intelligence briefs',
    ],
    highlight: false,
  },
  {
    slug: 'professional',
    name: 'Professional',
    tagline: 'Multi-market monitoring with competitor and narrative tracking.',
    monthlyUsd: 1_290,
    annualUsd: 12_900,
    domains: 3,
    seats: 10,
    features: [
      'Everything in Signal',
      'Weekly scan cadence',
      'Up to 3 domains and 3 markets',
      'Competitor momentum tracking',
      'Narrative and trust diagnostics',
      'Historical comparison and trend analysis',
      'Evidence pack export',
      'Priority processing',
    ],
    highlight: true,
  },
  {
    slug: 'enterprise',
    name: 'Enterprise',
    tagline: 'Portfolio-scale intelligence with expert interpretation.',
    monthlyUsd: 3_900,
    annualUsd: 39_000,
    domains: 10,
    seats: 50,
    features: [
      'Everything in Professional',
      'Up to 10 domains and unlimited markets',
      'Expert interpretation on every executive layer',
      'Quarterly executive briefing',
      'White-label export',
      'Role-based access and audit logs',
      'Implementation support',
    ],
    highlight: false,
  },
]

export function getPlan(slug: string): Plan | undefined {
  return PLANS.find((p) => p.slug === slug)
}

/* --------------------------------------------------------------------------
   Add-ons — brief §10.3. Placeholder pricing.
   ------------------------------------------------------------------------ */
export const ADD_ONS = [
  { name: 'Additional domain', priceUsd: 190, period: 'month' },
  { name: 'Additional market or region', priceUsd: 140, period: 'month' },
  { name: 'Additional competitor set', priceUsd: 90, period: 'month' },
  { name: 'Additional AI engine', priceUsd: 120, period: 'month' },
  { name: 'Historical backfill', priceUsd: 650, period: 'one-time' },
  { name: 'Expert interpretation', priceUsd: 900, period: 'one-time' },
  { name: 'White-label export', priceUsd: 240, period: 'month' },
] as const
