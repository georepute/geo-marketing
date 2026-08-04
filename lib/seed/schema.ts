import { z } from 'zod'

/* ============================================================================
   Zod schemas for every seed entity. Validated at module load by
   tests/seed-invariants.test.ts, so a malformed record fails the build rather
   than rendering as something subtly wrong.
   ========================================================================= */

export const confidenceSchema = z.enum([
  'high',
  'medium',
  'directional',
  'insufficient-history',
])

export const trendSchema = z.enum(['improving', 'stable', 'deteriorating'])
export const urgencySchema = z.enum(['immediate', 'this-quarter', 'monitor'])
export const effortSchema = z.enum(['low', 'medium', 'high'])

export const decisionStageSchema = z.enum([
  'research',
  'concerns',
  'solution-evaluation',
  'supplier-evaluation',
  'purchase-decision',
])

export const aiEngineIdSchema = z.enum([
  'chatgpt',
  'claude',
  'gemini',
  'perplexity',
  'copilot',
  'grok',
])

const isoDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'expected YYYY-MM-DD')

/* --------------------------------------------------------------------------
   Exposure. The schema itself enforces non-negotiable #5: a range with
   low < high, a confidence, and at least one assumption. There is no valid
   shape that carries a bare number.
   ------------------------------------------------------------------------ */
export const exposureAssumptionSchema = z.object({
  label: z.string().min(1),
  value: z.string().min(1),
  source: z.enum(['connected', 'customer-configured', 'benchmark']),
})

export const exposureRangeSchema = z
  .object({
    low: z.number().nonnegative(),
    high: z.number().nonnegative(),
    currency: z.literal('USD'),
    period: z.enum(['month', 'quarter', 'year']),
    confidence: confidenceSchema,
    assumptions: z.array(exposureAssumptionSchema).min(1),
    methodologyVersion: z.string().min(1),
  })
  .refine((e) => e.low < e.high, {
    message: 'exposure must be a range: low must be strictly less than high',
  })

/* --------------------------------------------------------------------------
   Readout — all twelve §13 sections required. `.strict()` means a section
   cannot be quietly dropped or renamed without failing validation.
   ------------------------------------------------------------------------ */
export const evidenceSchema = z.object({
  subject: z.string().min(1),
  source: z.string().min(1),
  observation: z.string().min(1),
  observedAt: isoDate,
})

export const signalRefSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  relationship: z.enum(['supporting', 'downstream']),
  value: z.string().min(1),
})

export const readoutSchema = z
  .object({
    id: z.string().min(1),
    engineId: z.string().min(1),
    title: z.string().min(1),
    executiveTruth: z.string().min(1),
    businessMeaning: z.string().min(1),
    evidence: z.array(evidenceSchema).min(1),
    connectedSignals: z.array(signalRefSchema).min(1),
    competitorContext: z.object({
      competitor: z.string().min(1),
      benefit: z.string().min(1),
      why: z.string().min(1),
    }),
    commercialExposure: exposureRangeSchema,
    timing: z.object({
      window: z.string().min(1),
      urgency: urgencySchema,
      decisionDeadline: isoDate,
    }),
    trend: trendSchema,
    prescription: z.string().min(1),
    expectedMovement: z.object({
      signal: z.string().min(1),
      from: z.number(),
      to: z.number(),
      unit: z.string(),
    }),
    ownerDeadline: z.object({
      owner: z.string().min(1),
      deadline: isoDate,
    }),
    measurement: z.string().min(1),
    confidence: confidenceSchema,
    methodologyVersion: z.string().min(1),
  })
  .strict()

/* --------------------------------------------------------------------------
   Remaining entities.
   ------------------------------------------------------------------------ */
export const promptSchema = z.object({
  id: z.string().min(1),
  text: z.string().min(1),
  stage: decisionStageSchema,
  intent: z.enum(['informational', 'comparative', 'transactional']),
  monthlyVolume: z.number().int().positive(),
  northwindRecommendedBy: z.array(aiEngineIdSchema),
  winner: z.string().min(1),
})

export const searchObservationSchema = z.object({
  keyword: z.string().min(1),
  position: z.number().int().positive().nullable(),
  monthlyVolume: z.number().int().positive(),
  cpc: z.number().positive(),
  competition: z.enum(['low', 'medium', 'high']),
  aiPresence: z.boolean(),
})

export const competitorSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  domain: z.string().min(1),
  recommendationSharePct: z.number().min(0).max(100),
  authoritySources: z.number().int().nonnegative(),
  strongestStage: z.string().min(1),
  isSelf: z.boolean(),
  whyTheyWin: z.string().min(1).nullable(),
})

export const actionSchema = z.object({
  id: z.string().min(1),
  action: z.string().min(1),
  reason: z.string().min(1),
  evidenceRef: z.string().min(1),
  expectedImpact: z.string().min(1),
  confidence: confidenceSchema,
  urgency: urgencySchema,
  effort: effortSchema,
  owner: z.string().min(1),
  deadline: isoDate,
  successMetric: z.string().min(1),
  measuredChange: z.string().nullable(),
  horizon: z.union([z.literal(30), z.literal(60), z.literal(90)]),
})

export const productSchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(1),
  tier: z.enum(['entry', 'advanced', 'premium']),
  businessQuestion: z.string().min(1),
  decisionConsequence: z.string().min(1),
  detects: z.array(z.string()).min(1),
  requiredInputs: z.array(z.string()).min(1),
  scope: z.string().min(1),
  depth: z.enum(['Snapshot', 'Advanced', 'Strategic', 'Executive']),
  delivery: z.array(z.string()).min(1),
  confidence: confidenceSchema,
  timeToDelivery: z.string().min(1),
  priceUsd: z.number().positive(),
  upgradePath: z.string().min(1),
  sampleReadoutId: z.string().min(1),
})

export const planSchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(1),
  tagline: z.string().min(1),
  monthlyUsd: z.number().positive(),
  annualUsd: z.number().positive(),
  domains: z.number().int().positive(),
  seats: z.number().int().positive(),
  features: z.array(z.string()).min(1),
  highlight: z.boolean(),
})
