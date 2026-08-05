import { describe, expect, it } from 'vitest'
import {
  CAMPAIGN_INPUTS,
  READINESS_DIMENSIONS,
  READINESS_THRESHOLDS,
  RECOMMENDATION_LABEL,
  budgetAtRisk,
  campaignReadinessScore,
  campaignRecommendation,
  commercialRisk,
  executiveDecision,
  journeyCoverage,
  preLaunchActions,
  primaryConstraint,
  statusFor,
} from '@/lib/seed/campaign'
import {
  NARRATIVES,
  NARRATIVE_OPPORTUNITIES,
  NARRATIVE_RECOMMENDATIONS,
  NARRATIVE_RISKS,
  engineNarratives,
  narrativeHealth,
  narrativeOwnership,
  narrativeVerdict,
  publicSentiment,
} from '@/lib/seed/narrative'
import {
  ELECTION_MEASURES,
  ELECTION_NARRATIVES,
  ELECTION_SUBJECT,
  REGIONAL_SENTIMENT,
  engineElectionNarratives,
} from '@/lib/seed/election'
import { AI_ENGINES } from '@/lib/seed/engines'
import { DECISION_STAGES } from '@/lib/seed/prompts'
import { POSTURE } from '@/lib/seed/org'

/* ============================================================================
   CAMPAIGN READINESS AND NARRATIVE INTELLIGENCE — invariants.

   Campaign readiness recommends spending or withholding a real budget, which
   makes it the highest-stakes computation in the product. The guards below
   exist because the two ways a readiness score goes wrong are both silent:
   a weight set that no longer sums to one, and a recommendation that drifts
   out of step with the score it claims to be derived from.
   ========================================================================= */

describe('The readiness index is a published weighted function', () => {
  it('has weights that sum to exactly one', () => {
    const total = READINESS_DIMENSIONS.reduce((s, d) => s + d.weight, 0)
    expect(Number(total.toFixed(4))).toBe(1)
  })

  it('gives every dimension at least one scored measure', () => {
    for (const d of READINESS_DIMENSIONS) {
      const scored = d.measures.filter((m) => m.score !== null)
      expect(scored.length, d.id).toBeGreaterThan(0)
    }
  })

  it('keeps every measure score inside 0–100', () => {
    for (const d of READINESS_DIMENSIONS) {
      for (const m of d.measures) {
        if (m.score === null) continue
        expect(m.score, `${d.id}/${m.label}`).toBeGreaterThanOrEqual(0)
        expect(m.score, `${d.id}/${m.label}`).toBeLessThanOrEqual(100)
      }
    }
  })

  it('reproduces each dimension score as the mean of its measures', () => {
    for (const d of READINESS_DIMENSIONS) {
      const scored = d.measures
        .map((m) => m.score)
        .filter((s): s is number => s !== null)
      const expected = Math.round(
        scored.reduce((s, v) => s + v, 0) / scored.length,
      )
      expect(d.score, d.id).toBe(expected)
    }
  })

  it('reproduces the index as the weighted mean of the dimensions', () => {
    const expected = Math.round(
      READINESS_DIMENSIONS.reduce((s, d) => s + d.score * d.weight, 0),
    )
    expect(campaignReadinessScore()).toBe(expected)
  })

  it('assigns each dimension the status its own score implies', () => {
    for (const d of READINESS_DIMENSIONS) {
      expect(d.status, d.id).toBe(statusFor(d.score))
    }
  })
})

describe('The recommendation follows the evidence', () => {
  it('never clears a launch while a heavily weighted dimension is blocking', () => {
    const recommendation = campaignRecommendation()
    const majorBlocking = READINESS_DIMENSIONS.some(
      (d) => d.weight >= 0.15 && d.status === 'blocking',
    )
    if (majorBlocking) {
      expect(['fix-before-launch', 'delay-campaign']).toContain(recommendation)
    }
  })

  it('never clears a launch below the ready threshold', () => {
    if (campaignReadinessScore() < READINESS_THRESHOLDS.ready) {
      expect(campaignRecommendation()).not.toBe('ready-to-launch')
    }
  })

  it('names the constraint carrying the largest weighted deficit', () => {
    const constraint = primaryConstraint()
    const deficit = (d: (typeof READINESS_DIMENSIONS)[number]) =>
      d.weight * (100 - d.score)
    for (const d of READINESS_DIMENSIONS) {
      expect(deficit(constraint)).toBeGreaterThanOrEqual(deficit(d))
    }
  })

  it('states the decision in terms of the constraint it identified', () => {
    const decision = executiveDecision()
    const constraint = primaryConstraint()
    expect(decision.because).toContain(String(constraint.score))
    expect(decision.because).toContain(
      RECOMMENDATION_LABEL[campaignRecommendation()],
    )
    expect(decision.verdict.length).toBeGreaterThan(10)
  })
})

describe('Budget at risk is a claim, so it is bounded and disclosed', () => {
  const exposure = budgetAtRisk()

  it('is a range, never a point estimate', () => {
    expect(exposure.high).toBeGreaterThan(exposure.low)
  })

  it('cannot exceed the budget it is drawn from', () => {
    expect(exposure.high).toBeLessThanOrEqual(CAMPAIGN_INPUTS.plannedBudgetUsd)
  })

  it('carries a confidence and its full assumption set', () => {
    expect(exposure.confidence).toBeTruthy()
    expect(exposure.assumptions.length).toBeGreaterThanOrEqual(4)
    for (const a of exposure.assumptions) {
      expect(a.label.length).toBeGreaterThan(0)
      expect(a.value.length).toBeGreaterThan(0)
    }
  })

  it('discloses the planned budget and the failure rate it used', () => {
    const labels = exposure.assumptions.map((a) => a.label).join(' ')
    expect(labels).toContain('Planned campaign budget')
    expect(labels).toContain('Verification failure rate')
  })
})

describe('Readiness coverage matches the rest of the seed', () => {
  it('covers every decision stage', () => {
    expect(journeyCoverage()).toHaveLength(DECISION_STAGES.length)
  })

  it('flags a stage as missing only when coverage is genuinely zero', () => {
    for (const stage of journeyCoverage()) {
      expect(stage.missing, stage.id).toBe(stage.coveragePct === 0)
    }
  })

  it('proposes only actions that are not merely monitored', () => {
    const actions = preLaunchActions()
    expect(actions.length).toBeGreaterThan(0)
    for (const a of actions) expect(a.urgency).not.toBe('monitor')
  })

  it('states a meaning for every commercial risk', () => {
    for (const r of commercialRisk()) {
      expect(r.meaning.length, r.label).toBeGreaterThan(40)
    }
  })
})

/* ========================================================================= */

describe('Narrative intelligence is internally consistent', () => {
  it('reads one narrative per engine, from the engine records themselves', () => {
    const narratives = engineNarratives()
    expect(narratives).toHaveLength(AI_ENGINES.length)
    for (const n of narratives) {
      const engine = AI_ENGINES.find((e) => e.id === n.id)!
      expect(n.narrative).toBe(engine.understoodAs)
      expect(n.divergence).toBe(engine.confusion)
      /* An engine holding a wrong record is telling buyers something untrue,
         which is adverse regardless of tone. */
      expect(n.polarity).toBe(engine.confusion === null ? 'positive' : 'negative')
    }
  })

  it('splits ownership into shares that total one hundred', () => {
    const o = narrativeOwnership()
    const total = o.business + o.competitor + o.unclaimed + o.shared
    expect(Math.round(total)).toBe(100)
  })

  it('publishes the same category-language figure as the rest of the product', () => {
    expect(narrativeOwnership().categoryLanguageOwnedPct).toBe(
      POSTURE.narrativeOwnershipPct,
    )
  })

  it('gives every narrative an owner name unless it is unclaimed', () => {
    for (const n of NARRATIVES) {
      if (n.owner === 'unclaimed') expect(n.ownerName, n.id).toBeNull()
      else expect(n.ownerName, n.id).toBeTruthy()
      expect(n.sources.length, n.id).toBeGreaterThan(0)
      expect(n.commercialEffect.length, n.id).toBeGreaterThan(60)
    }
  })

  it('keeps every health measure inside 0–100', () => {
    for (const m of narrativeHealth()) {
      expect(m.score, m.label).toBeGreaterThanOrEqual(0)
      expect(m.score, m.label).toBeLessThanOrEqual(100)
    }
  })

  it('derives sentiment rather than asserting it', () => {
    const s = publicSentiment()
    expect(s.score).toBeGreaterThanOrEqual(0)
    expect(s.score).toBeLessThanOrEqual(100)
    expect(s.label.length).toBeGreaterThan(0)
  })

  /* The editorial rule the verdict encodes: a false claim machines are
     repeating outranks any argument about positioning, because positioning
     built on a wrong record is wasted. */
  it('prioritises correcting a false record over reframing', () => {
    const highMisinformation = NARRATIVE_RISKS.filter(
      (r) =>
        (r.kind === 'misinformation' || r.kind === 'ai-misunderstanding') &&
        r.severity === 'high',
    ).length
    if (highMisinformation > 0) {
      expect(narrativeVerdict().verdict).toBe('respond-immediately')
    }
  })

  it('gives every recommendation all eight required fields', () => {
    for (const r of NARRATIVE_RECOMMENDATIONS) {
      expect(r.objective.length, r.id).toBeGreaterThan(10)
      expect(r.evidence.length, r.id).toBeGreaterThan(30)
      expect(r.expectedImpact.length, r.id).toBeGreaterThan(5)
      expect(r.confidence, r.id).toBeTruthy()
      expect(r.owner.length, r.id).toBeGreaterThan(2)
      expect(r.deadline, r.id).toMatch(/^\d{4}-\d{2}-\d{2}$/)
      expect(r.effort, r.id).toBeTruthy()
      expect(r.successMetric.length, r.id).toBeGreaterThan(10)
    }
  })

  it('states what every risk costs if ignored', () => {
    for (const r of NARRATIVE_RISKS) {
      expect(r.ifIgnored.length, r.id).toBeGreaterThan(50)
      expect(r.evidence.length, r.id).toBeGreaterThan(30)
    }
  })

  it('finds at least one uncontested high-influence opportunity', () => {
    const best = NARRATIVE_OPPORTUNITIES.filter(
      (o) => o.competition === 'none' && o.influence === 'high',
    )
    expect(best.length).toBeGreaterThan(0)
  })
})

/* ========================================================================= */

describe('Election mode never passes seeded data off as a real record', () => {
  it('marks its subject as fictional', () => {
    expect(ELECTION_SUBJECT.fictional).toBe(true)
  })

  it('analyses a different subject from every other surface', () => {
    /* The commercial pages reconstruct Northwind Supply. If election mode ever
       started analysing the same subject, it would be inventing a political
       record for a company that has none. */
    expect(ELECTION_SUBJECT.candidate).not.toContain('Northwind')
    expect(ELECTION_SUBJECT.name).not.toContain('Northwind')
  })

  it('names both a candidate and an opponent', () => {
    expect(ELECTION_SUBJECT.candidate).toBeTruthy()
    expect(ELECTION_SUBJECT.opponent).toBeTruthy()
    expect(ELECTION_SUBJECT.candidate).not.toBe(ELECTION_SUBJECT.opponent)
  })

  it('reuses the real engine roster rather than inventing engines', () => {
    const narratives = engineElectionNarratives()
    expect(narratives).toHaveLength(AI_ENGINES.length)
    const ids = new Set(AI_ENGINES.map((e) => e.id))
    for (const n of narratives) expect(ids.has(n.id), n.id).toBe(true)
  })

  it('keeps every measure and region inside a sane range', () => {
    for (const m of ELECTION_MEASURES) {
      if (m.score === null) continue
      expect(m.score, m.label).toBeGreaterThanOrEqual(0)
      expect(m.score, m.label).toBeLessThanOrEqual(100)
    }
    for (const r of REGIONAL_SENTIMENT) {
      expect(r.sentiment, r.region).toBeGreaterThanOrEqual(0)
      expect(r.sentiment, r.region).toBeLessThanOrEqual(100)
      expect(r.note.length, r.region).toBeGreaterThan(30)
    }
  })

  it('gives every narrative a note explaining its effect', () => {
    for (const n of ELECTION_NARRATIVES) {
      expect(n.note.length, n.id).toBeGreaterThan(40)
      expect(n.reachPct, n.id).toBeGreaterThan(0)
    }
  })
})
