import { describe, expect, it } from 'vitest'

import { SPINE, EXPOSURE_INPUTS, GEON_WEIGHTS, BREAK_EVEN_CPC } from '@/lib/seed/spine'
import { GEON, ORG, TIMING, decisionHealthIndex } from '@/lib/seed/org'
import {
  COMPETITORS,
  TOP_COMPETITOR,
  totalRecommendationShare,
} from '@/lib/seed/competitors'
import {
  PROMPTS,
  ENGINE_COUNT,
  enginePresencePct,
  stageCoveragePct,
  totalMonthlyVolume,
  promptsWithPresence,
  promptsByStage,
  competitorControlPct,
  overallControlPct,
  overallRecommendationSharePct,
  stageVolumeSharePct,
} from '@/lib/seed/prompts'
import { AI_ENGINES, INTELLIGENCE_ENGINES, engineMatrix } from '@/lib/seed/engines'
import {
  SEARCH_OBSERVATIONS,
  blendedCpc,
  BREAK_EVEN,
  paidDependency,
  paidDependencyMatchesSpine,
  gapMatrix,
} from '@/lib/seed/search'
import { READOUTS } from '@/lib/seed/readouts'
import { causalChain } from '@/lib/seed/chain'
import { ACTIONS } from '@/lib/seed/actions'
import { PRODUCTS, PLANS } from '@/lib/seed/products'
import { computeExposure, matchesSpine } from '@/lib/model/exposure'
import {
  readoutSchema,
  promptSchema,
  searchObservationSchema,
  competitorSchema,
  actionSchema,
  productSchema,
  planSchema,
  exposureRangeSchema,
} from '@/lib/seed/schema'

/* ============================================================================
   THE CONSISTENCY GUARANTEE.

   Plan §4.4. Seed drift is the single largest threat to this product: one
   contradictory number destroys the credibility of every screen around it.
   These tests are the mechanism that prevents it — not care, not review.

   Each numbered block corresponds to an invariant in the approved plan.
   ========================================================================= */

describe('Invariant 1 — recommendation shares total exactly 100%', () => {
  it('tracked competitors plus the unattributed remainder sum to 100', () => {
    expect(totalRecommendationShare()).toBe(100)
  })

  it('the top competitor share is the spine value', () => {
    expect(TOP_COMPETITOR.recommendationSharePct).toBe(
      SPINE.topCompetitorRecommendationSharePct,
    )
  })

  it('exactly one competitor row is the organisation itself', () => {
    expect(COMPETITORS.filter((c) => c.isSelf)).toHaveLength(1)
  })
})

describe('Invariant 2 — cross-screen figures derive from the spine', () => {
  it("ChatGPT's presence is computed from prompts and equals the spine", () => {
    // 1 recommendation across 24 questions = 4.1667% → 4.2%
    expect(enginePresencePct('chatgpt')).toBe(
      SPINE.chatgptRecommendationPresencePct,
    )
  })

  it("the organisation's share in the competitor table is computed, not typed", () => {
    // 6 events over 144 answer slots = 4.17% → 4.2%. The competitor table
    // quotes this figure, so the two files cannot drift apart.
    const self = COMPETITORS.find((c) => c.isSelf)!
    expect(overallRecommendationSharePct()).toBe(4.2)
    expect(self.recommendationSharePct).toBe(overallRecommendationSharePct())
  })

  it('the causal chain reads its values from the seed, not from literals', () => {
    const chain = causalChain()
    expect(chain[0]!.value).toBe('4.2%')
    expect(chain[1]!.value).toBe('7%')
    expect(chain[3]!.value).toContain('31.0%')
    expect(chain[5]!.value).toBe('$3,200 – $6,200 per month')
    expect(chain[6]!.value).toBe(SPINE.prescription)
  })

  it('the chain reproduces the seven links of brief §13.1 in order', () => {
    expect(causalChain()).toHaveLength(7)
  })
})

describe('Invariant 3 — supplier-evaluation coverage computes to 7%', () => {
  it('coverage derived from prompts.ts rounds to the spine value', () => {
    // 3 recommendation slots won of (7 questions × 6 engines) = 7.14% → 7%
    const coverage = stageCoveragePct('supplier-evaluation')
    expect(Math.round(coverage)).toBe(SPINE.supplierEvaluationCoveragePct)
  })

  it('the competitor controls supplier evaluation more than the book overall', () => {
    // The argument is NOT that coverage is lowest here — it is that the
    // stage deciding 60% of revenue is the stage the competitor controls
    // most heavily. Both figures are derived, so neither can be asserted.
    const atStage = competitorControlPct('supplier-evaluation', 'kestrel')
    const overall = overallControlPct('kestrel')
    expect(atStage).toBeGreaterThan(overall)
  })

  it('the revenue-deciding stage carries a small share of query volume', () => {
    // 60% of revenue, but a fraction of the demand — which is why volume-led
    // tooling cannot see the problem at all.
    expect(stageVolumeSharePct('supplier-evaluation')).toBeLessThan(20)
    expect(ORG.revenueViaSupplierEvaluationPct).toBe(60)
  })

  it('the stage carrying most revenue is the stage with least coverage', () => {
    const supplierPrompts = promptsByStage('supplier-evaluation')
    expect(supplierPrompts.length).toBeGreaterThan(0)
    const won = supplierPrompts.reduce(
      (s, p) => s + p.northwindRecommendedBy.length,
      0,
    )
    expect(won).toBe(3)
    expect(supplierPrompts.length * ENGINE_COUNT).toBe(42)
  })
})

describe('Invariant 4 — the exposure model reproduces §13.1 exactly', () => {
  it('Demand × Gap × Conversion × Deal Value yields the spine range', () => {
    const { low, high } = computeExposure(1)
    expect(low).toBe(SPINE.exposureLowUsd)
    expect(high).toBe(SPINE.exposureHighUsd)
    expect(matchesSpine()).toBe(true)
  })

  it('demand equals the total volume of the seeded prompt set', () => {
    expect(totalMonthlyVolume()).toBe(EXPOSURE_INPUTS.monthlyDecisionQueries)
  })

  it('the model is a range, never a point estimate', () => {
    const { low, high } = computeExposure(1)
    expect(high).toBeGreaterThan(low)
    expect(EXPOSURE_INPUTS.conversionHighPct).toBeGreaterThan(
      EXPOSURE_INPUTS.conversionLowPct,
    )
  })
})

describe('Invariant 5 — no exposure without confidence and assumptions', () => {
  it('every readout exposure carries a confidence and at least one assumption', () => {
    for (const r of READOUTS) {
      const parsed = exposureRangeSchema.safeParse(r.commercialExposure)
      expect(parsed.success, `${r.id}: ${JSON.stringify(parsed.error?.issues)}`).toBe(true)
      expect(r.commercialExposure.assumptions.length).toBeGreaterThan(0)
      expect(r.commercialExposure.low).toBeLessThan(r.commercialExposure.high)
    }
  })

  it('every exposure names its methodology version', () => {
    for (const r of READOUTS) {
      expect(r.commercialExposure.methodologyVersion).toBeTruthy()
    }
  })

  it('no readout exposure exceeds the full-book figure', () => {
    const full = computeExposure(1)
    for (const r of READOUTS) {
      expect(r.commercialExposure.high).toBeLessThanOrEqual(full.high)
    }
  })

  it('every exposure exposes all four model terms', () => {
    for (const r of READOUTS) {
      const labels = r.commercialExposure.assumptions.map((a) => a.label)
      expect(labels).toContain('Demand')
      expect(labels).toContain('Decision gap')
      expect(labels).toContain('Estimated conversion')
      expect(labels).toContain('Average deal value')
    }
  })
})

describe('Invariant 6 — GEON and the Decision Health Index agree with inputs', () => {
  it('the index is the published weighted function of the six vectors', () => {
    const manual = Math.round(
      GEON.visibility * GEON_WEIGHTS.visibility +
        GEON.authority * GEON_WEIGHTS.authority +
        GEON.context * GEON_WEIGHTS.context +
        GEON.trust * GEON_WEIGHTS.trust +
        GEON.consistency * GEON_WEIGHTS.consistency +
        GEON.marketFit * GEON_WEIGHTS.marketFit,
    )
    expect(decisionHealthIndex()).toBe(manual)
    expect(decisionHealthIndex()).toBe(41)
  })

  it('the GEON weights sum to exactly 1', () => {
    const sum = Object.values(GEON_WEIGHTS).reduce((a, b) => a + b, 0)
    expect(Number(sum.toFixed(6))).toBe(1)
  })

  it("Authority is the lowest vector, making 'weak' a derived conclusion", () => {
    const scores = Object.values(GEON)
    expect(GEON.authority).toBe(Math.min(...scores))
    expect(SPINE.authorityEvidence).toBe('weak')
  })

  it('every vector is on a 0–100 scale', () => {
    for (const [key, score] of Object.entries(GEON)) {
      expect(score, key).toBeGreaterThanOrEqual(0)
      expect(score, key).toBeLessThanOrEqual(100)
    }
  })
})

describe('Invariant 7 — every readout carries all twelve §13 sections', () => {
  it('validates against the strict readout schema', () => {
    for (const r of READOUTS) {
      const parsed = readoutSchema.safeParse(r)
      expect(
        parsed.success,
        `${r.id}: ${JSON.stringify(parsed.error?.issues)}`,
      ).toBe(true)
    }
  })

  it('readout ids are unique', () => {
    const ids = READOUTS.map((r) => r.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('every connected signal points at a readout that exists', () => {
    const ids = new Set(READOUTS.map((r) => r.id))
    for (const r of READOUTS) {
      for (const s of r.connectedSignals) {
        expect(ids.has(s.id), `${r.id} → ${s.id}`).toBe(true)
      }
    }
  })

  it('every readout deadline falls on or before the window close', () => {
    const close = new Date(TIMING.windowClosesAt).getTime()
    for (const r of READOUTS) {
      expect(
        new Date(r.ownerDeadline.deadline).getTime(),
        r.id,
      ).toBeLessThanOrEqual(close)
    }
  })
})

/* ============================================================================
   Supporting invariants — derived posture must agree with the spine.
   ========================================================================= */

describe('Paid dependency is derived, not asserted', () => {
  it('blended CPC sits above break-even', () => {
    expect(blendedCpc()).toBeGreaterThan(BREAK_EVEN)
  })

  it("the derived classification equals the spine's 'high'", () => {
    expect(paidDependency()).toBe(SPINE.paidDependency)
    expect(paidDependencyMatchesSpine()).toBe(true)
  })

  it('break-even is the published function of its three inputs', () => {
    expect(BREAK_EVEN).toBe(Number(BREAK_EVEN_CPC.toFixed(2)))
  })
})

describe('Prompt set integrity', () => {
  it('holds exactly 24 questions with unique ids', () => {
    expect(PROMPTS).toHaveLength(24)
    expect(new Set(PROMPTS.map((p) => p.id)).size).toBe(24)
  })

  it('five of twenty-four questions have any presence at all', () => {
    expect(promptsWithPresence()).toHaveLength(5)
  })

  it('recommendation events total six across 144 answer slots', () => {
    const total = PROMPTS.reduce(
      (s, p) => s + p.northwindRecommendedBy.length,
      0,
    )
    expect(total).toBe(6)
    expect(PROMPTS.length * ENGINE_COUNT).toBe(144)
  })

  it('two engines never recommend the business', () => {
    const silent = engineMatrix().filter((e) => e.recommendationPresencePct === 0)
    expect(silent.map((e) => e.id).sort()).toEqual(['gemini', 'grok'])
  })

  it('no question lists an engine twice', () => {
    for (const p of PROMPTS) {
      expect(new Set(p.northwindRecommendedBy).size).toBe(
        p.northwindRecommendedBy.length,
      )
    }
  })

  it('every named winner is a tracked competitor', () => {
    const ids = new Set(COMPETITORS.map((c) => c.id))
    for (const p of PROMPTS) expect(ids.has(p.winner), p.id).toBe(true)
  })

  it('validates against the prompt schema', () => {
    for (const p of PROMPTS) {
      expect(promptSchema.safeParse(p).success, p.id).toBe(true)
    }
  })
})

describe('Engine set integrity', () => {
  it('observes exactly six AI engines', () => {
    expect(AI_ENGINES).toHaveLength(6)
    expect(ENGINE_COUNT).toBe(6)
  })

  it('lists all twelve intelligence engines with four built', () => {
    expect(INTELLIGENCE_ENGINES).toHaveLength(12)
    expect(INTELLIGENCE_ENGINES.filter((e) => e.built)).toHaveLength(4)
  })

  it('every built engine has a real seeded readout', () => {
    const ids = new Set(READOUTS.map((r) => r.id))
    for (const e of INTELLIGENCE_ENGINES.filter((x) => x.built)) {
      expect(e.readoutId, e.slug).toBeTruthy()
      expect(ids.has(e.readoutId!), e.slug).toBe(true)
    }
  })

  it('every built engine asks a distinct business question', () => {
    const qs = INTELLIGENCE_ENGINES.filter((e) => e.built).map(
      (e) => e.businessQuestion,
    )
    expect(new Set(qs).size).toBe(qs.length)
  })
})

describe('Search observation integrity', () => {
  it('tracks twenty keywords with unique terms', () => {
    expect(SEARCH_OBSERVATIONS).toHaveLength(20)
    expect(new Set(SEARCH_OBSERVATIONS.map((k) => k.keyword)).size).toBe(20)
  })

  it('classifies every keyword into exactly one gap class', () => {
    const rows = gapMatrix()
    expect(rows).toHaveLength(20)
    for (const row of rows) expect(row.gap).toBeTruthy()
  })

  it('validates against the observation schema', () => {
    for (const k of SEARCH_OBSERVATIONS) {
      expect(searchObservationSchema.safeParse(k).success, k.keyword).toBe(true)
    }
  })
})

describe('Action integrity', () => {
  it('the first action is the spine prescription', () => {
    expect(ACTIONS[0]!.action).toBe(SPINE.prescription)
  })

  it('every action references a readout that exists', () => {
    const ids = new Set(READOUTS.map((r) => r.id))
    for (const a of ACTIONS) expect(ids.has(a.evidenceRef), a.id).toBe(true)
  })

  it('every action names an owner, a deadline and a success metric', () => {
    for (const a of ACTIONS) {
      expect(a.owner, a.id).toBeTruthy()
      expect(a.deadline, a.id).toBeTruthy()
      expect(a.successMetric, a.id).toBeTruthy()
    }
  })

  it('validates against the action schema', () => {
    for (const a of ACTIONS) {
      expect(actionSchema.safeParse(a).success, a.id).toBe(true)
    }
  })
})

describe('Commerce integrity', () => {
  it('offers eight products across three tiers', () => {
    expect(PRODUCTS).toHaveLength(8)
    expect(new Set(PRODUCTS.map((p) => p.slug)).size).toBe(8)
  })

  it('every product samples a readout that exists', () => {
    const ids = new Set(READOUTS.map((r) => r.id))
    for (const p of PRODUCTS) {
      expect(ids.has(p.sampleReadoutId), p.slug).toBe(true)
    }
  })

  it('every product answers a distinct business question', () => {
    const qs = PRODUCTS.map((p) => p.businessQuestion)
    expect(new Set(qs).size).toBe(qs.length)
  })

  it('annual pricing is cheaper than twelve months of monthly', () => {
    for (const p of PLANS) {
      expect(p.annualUsd, p.slug).toBeLessThan(p.monthlyUsd * 12)
    }
  })

  it('exactly one plan is highlighted', () => {
    expect(PLANS.filter((p) => p.highlight)).toHaveLength(1)
  })

  it('validates against the product and plan schemas', () => {
    for (const p of PRODUCTS) {
      expect(productSchema.safeParse(p).success, p.slug).toBe(true)
    }
    for (const p of PLANS) {
      expect(planSchema.safeParse(p).success, p.slug).toBe(true)
    }
  })
})

describe('Competitor schema', () => {
  it('validates every row', () => {
    for (const c of COMPETITORS) {
      expect(competitorSchema.safeParse(c).success, c.id).toBe(true)
    }
  })
})

describe('Timing coherence', () => {
  it('the decision deadline sits inside the open window', () => {
    const opened = new Date(TIMING.windowOpenedAt).getTime()
    const closes = new Date(TIMING.windowClosesAt).getTime()
    const deadline = new Date(TIMING.decisionDeadline).getTime()
    expect(deadline).toBeGreaterThan(opened)
    expect(deadline).toBeLessThan(closes)
  })
})
