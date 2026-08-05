/* ============================================================================
   Core domain types. Brief §18 (Core Product Data Model).
   ========================================================================= */

export type Confidence =
  | 'high'
  | 'medium'
  | 'directional'
  | 'insufficient-history'

export type Trend = 'improving' | 'stable' | 'deteriorating'

export type Urgency = 'immediate' | 'this-quarter' | 'monitor'

export type Effort = 'low' | 'medium' | 'high'

/** Brief §5 — the five-stage decision journey. */
export type DecisionStage =
  | 'research'
  | 'concerns'
  | 'solution-evaluation'
  | 'supplier-evaluation'
  | 'purchase-decision'

export type AiEngineId =
  | 'chatgpt'
  | 'claude'
  | 'gemini'
  | 'perplexity'
  | 'copilot'
  | 'grok'

export type CompetitorId =
  | 'kestrel'
  | 'meridian'
  | 'halvorsen'
  | 'atlas'
  | 'northwind'

/* --------------------------------------------------------------------------
   Commercial exposure. Non-negotiable #5: never "confirmed lost revenue".
   A scalar money value is deliberately unrepresentable — there is no shape
   here that holds a single number without a range and a confidence.
   ------------------------------------------------------------------------ */
export interface ExposureAssumption {
  label: string
  value: string
  source: 'connected' | 'customer-configured' | 'benchmark'
}

export interface ExposureRange {
  low: number
  high: number
  currency: 'USD'
  period: 'month' | 'quarter' | 'year'
  confidence: Confidence
  assumptions: ExposureAssumption[]
  methodologyVersion: string
}

/* --------------------------------------------------------------------------
   Readout anatomy — brief §13. All twelve sections are required.
   ------------------------------------------------------------------------ */
export interface Evidence {
  /** What was observed, e.g. a prompt text or a keyword. */
  subject: string
  /** Where it was observed. */
  source: string
  /** The observation itself. */
  observation: string
  /** ISO date of observation. */
  observedAt: string
}

export interface SignalRef {
  id: string
  label: string
  relationship: 'supporting' | 'downstream'
  value: string
}

export interface Readout {
  id: string
  /** Which engine surface this readout belongs to. */
  engineId: string
  title: string
  executiveTruth: string
  businessMeaning: string
  evidence: Evidence[]
  connectedSignals: SignalRef[]
  competitorContext: { competitor: string; benefit: string; why: string }
  commercialExposure: ExposureRange
  timing: { window: string; urgency: Urgency; decisionDeadline: string }
  trend: Trend
  prescription: string
  expectedMovement: {
    signal: string
    from: number
    to: number
    unit: string
  }
  ownerDeadline: { owner: string; deadline: string }
  measurement: string
  confidence: Confidence
  methodologyVersion: string
}

/* --------------------------------------------------------------------------
   Action — brief §7 Action Intelligence, eleven fields.
   ------------------------------------------------------------------------ */
export interface Action {
  id: string
  action: string
  reason: string
  evidenceRef: string
  expectedImpact: string
  confidence: Confidence
  urgency: Urgency
  effort: Effort
  owner: string
  deadline: string
  successMetric: string
  measuredChange: string | null
  horizon: 30 | 60 | 90
  /**
   * Action ids that must land before this one can move its signal.
   *
   * Not scheduling metadata — a causal claim, and every entry is read off a
   * sentence that already exists in the readout this action cites. An
   * intervention with an unmet dependency is activity, not movement, which is
   * exactly what the sequence exists to prevent.
   */
  dependsOn: string[]
}

/* --------------------------------------------------------------------------
   Prompt / query — brief §18.
   ------------------------------------------------------------------------ */
export interface Prompt {
  id: string
  text: string
  stage: DecisionStage
  intent: 'informational' | 'comparative' | 'transactional'
  monthlyVolume: number
  /** Engines that recommended Northwind in their answer. */
  northwindRecommendedBy: AiEngineId[]
  /** Which competitor the majority of engines put forward instead. */
  winner: CompetitorId
}

/* --------------------------------------------------------------------------
   Search observation — brief §18.
   ------------------------------------------------------------------------ */
export interface SearchObservation {
  keyword: string
  /** Google organic position, or null when not ranking in the top 100. */
  position: number | null
  monthlyVolume: number
  cpc: number
  competition: 'low' | 'medium' | 'high'
  /** Whether any AI engine surfaces Northwind for this keyword. */
  aiPresence: boolean
}

/* --------------------------------------------------------------------------
   Commerce — brief §9, §10, §11.
   ------------------------------------------------------------------------ */
export type ProductTier = 'entry' | 'advanced' | 'premium'

export type IntelligenceDepth =
  | 'Snapshot'
  | 'Advanced'
  | 'Strategic'
  | 'Executive'

export interface IntelligenceProduct {
  slug: string
  name: string
  tier: ProductTier
  /** Brief §9: the exact executive question the product answers. */
  businessQuestion: string
  decisionConsequence: string
  detects: string[]
  requiredInputs: string[]
  scope: string
  depth: IntelligenceDepth
  delivery: string[]
  confidence: Confidence
  timeToDelivery: string
  priceUsd: number
  upgradePath: string
  /** Readout surfaced as the sample outcome on the detail page. */
  sampleReadoutId: string
}

export interface Plan {
  slug: string
  name: string
  tagline: string
  monthlyUsd: number
  annualUsd: number
  domains: number
  seats: number
  features: string[]
  highlight: boolean
}
