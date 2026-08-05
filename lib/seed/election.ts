import { AI_ENGINES } from './engines'
import type { Polarity, Momentum } from './narrative'

/* ============================================================================
   ELECTION MODE — optional political narrative intelligence.

   WHY THIS IS A SEPARATE SUBJECT
   Every other surface in this environment reconstructs Northwind Supply, an
   industrial distributor. A political narrative cannot be reconstructed for an
   MRO distributor without inventing a story that contradicts everything else
   in the seed, so Election Mode switches the SUBJECT rather than adding a
   section about the same one. The UI states that switch plainly.

   The subject is explicitly fictional and labelled as such wherever it renders.
   That is not a disclaimer for its own sake: this is a mode that analyses real
   public figures in production, and a demonstration that blurred the line
   between a seeded example and a real person would be the single most
   damaging thing this page could do.

   The structure is identical to the commercial page — narratives, ownership,
   momentum, risk, regional variation — because the underlying claim of the
   product is that a decision is a decision. Only the vocabulary changes.
   ========================================================================= */

export const ELECTION_SUBJECT = {
  name: 'Riverbend County — District 4',
  candidate: 'A. Marchetti',
  opponent: 'D. Okonkwo',
  race: 'County Commission',
  cycleEndsAt: '2026-11-03',
  /** Stated on every surface. This subject does not exist. */
  fictional: true,
} as const

export interface ElectionMeasure {
  label: string
  value: string
  score: number | null
  meaning: string
}

export const ELECTION_MEASURES: ElectionMeasure[] = [
  {
    label: 'Public trust',
    value: '47/100',
    score: 47,
    meaning:
      'Trust reads below recognition, which means more people know the candidate than are prepared to vouch for them. The gap is the persuadable middle.',
  },
  {
    label: 'Candidate recognition',
    value: '61/100',
    score: 61,
    meaning:
      'Six of six engines resolve the candidate correctly. Recognition is not the constraint in this race; the account attached to it is.',
  },
  {
    label: 'Opponent recognition',
    value: '54/100',
    score: 54,
    meaning:
      'Lower recognition but a more consistent account. Every engine describes the opponent the same way; three describe the candidate differently.',
  },
  {
    label: 'Narrative consistency',
    value: '3 of 6 diverge',
    score: 50,
    meaning:
      'Half the engines lead with the candidate’s infrastructure record and half with a two-year-old procedural dispute. Which one a voter meets is arbitrary.',
  },
]

export interface ElectionNarrative {
  id: string
  statement: string
  subject: 'candidate' | 'opponent' | 'shared'
  polarity: Polarity
  momentum: Momentum
  reachPct: number
  note: string
}

export const ELECTION_NARRATIVES: ElectionNarrative[] = [
  {
    id: 'e-infrastructure',
    statement: 'Delivered the county road and drainage programme on schedule.',
    subject: 'candidate',
    polarity: 'positive',
    momentum: 'steady',
    reachPct: 24,
    note: 'The strongest asset, and the one three engines omit entirely in favour of the procedural story.',
  },
  {
    id: 'e-procurement',
    statement: 'Questions raised over a 2024 contract award process.',
    subject: 'candidate',
    polarity: 'negative',
    momentum: 'declining',
    reachPct: 19,
    note: 'Resolved without finding, but two engines still surface it before any record of office. Declining reach, disproportionate placement.',
  },
  {
    id: 'e-housing',
    statement: 'Housing costs are the defining issue in the district.',
    subject: 'shared',
    polarity: 'neutral',
    momentum: 'growing',
    reachPct: 22,
    note: 'The fastest-growing topic in the district and neither candidate is strongly associated with a position on it.',
  },
  {
    id: 'e-opponent-schools',
    statement: 'Opponent is the schools candidate.',
    subject: 'opponent',
    polarity: 'negative',
    momentum: 'growing',
    reachPct: 21,
    note: 'A clean, single-issue association the opponent has built and the candidate has no equivalent of.',
  },
  {
    id: 'e-turnout',
    statement: 'Turnout in District 4 decides the county commission balance.',
    subject: 'shared',
    polarity: 'neutral',
    momentum: 'emerging',
    reachPct: 14,
    note: 'Coverage framing rather than a candidate narrative, but it shapes which voters are being reached at all.',
  },
]

export interface RegionalSentiment {
  region: string
  sentiment: number
  swing: 'candidate' | 'opponent' | 'undecided'
  dominantTopic: string
  note: string
}

export const REGIONAL_SENTIMENT: RegionalSentiment[] = [
  {
    region: 'Riverbend North',
    sentiment: 63,
    swing: 'candidate',
    dominantTopic: 'Infrastructure delivery',
    note: 'The infrastructure record lands here and nowhere else. Highest trust, lowest persuadable population.',
  },
  {
    region: 'Riverbend South',
    sentiment: 38,
    swing: 'opponent',
    dominantTopic: 'School funding',
    note: 'The opponent’s single-issue association is strongest here. Contesting it directly is expensive.',
  },
  {
    region: 'Millford',
    sentiment: 49,
    swing: 'undecided',
    dominantTopic: 'Housing costs',
    note: 'The largest undecided bloc, and its dominant topic is the one neither candidate owns. The decisive ground.',
  },
  {
    region: 'East Riverbend',
    sentiment: 52,
    swing: 'undecided',
    dominantTopic: 'Housing costs',
    note: 'Second-largest persuadable population, same unowned topic. The two together decide the seat.',
  },
]

export const SWING_TOPICS = [
  {
    topic: 'Housing costs',
    ownedBy: null,
    influence: 'high' as const,
    note: 'Growing fastest, unowned by either candidate, and dominant in both undecided regions. The single highest-value position available in this race.',
  },
  {
    topic: 'School funding',
    ownedBy: ELECTION_SUBJECT.opponent,
    influence: 'high' as const,
    note: 'Firmly held. Contesting it directly costs more than claiming an unowned topic of equal influence.',
  },
  {
    topic: 'County procurement transparency',
    ownedBy: null,
    influence: 'medium' as const,
    note: 'Unowned, and the candidate’s own resolved dispute makes a transparency position credible rather than defensive.',
  },
  {
    topic: 'Road and drainage maintenance',
    ownedBy: ELECTION_SUBJECT.candidate,
    influence: 'medium' as const,
    note: 'Already held but under-propagated — three engines never mention it.',
  },
]

/** What each engine currently leads with. Reuses the real engine roster. */
export function engineElectionNarratives() {
  const leads: Record<string, { leads: string; polarity: Polarity }> = {
    chatgpt: { leads: 'Infrastructure record, then the procurement dispute.', polarity: 'positive' },
    claude: { leads: 'Infrastructure record and committee service.', polarity: 'positive' },
    gemini: { leads: 'The 2024 procurement dispute, before any record of office.', polarity: 'negative' },
    perplexity: { leads: 'Infrastructure record with the dispute cited and marked resolved.', polarity: 'positive' },
    copilot: { leads: 'The procurement dispute, without noting it was resolved.', polarity: 'negative' },
    grok: { leads: 'Social discussion of the dispute; no record of office.', polarity: 'negative' },
  }

  return AI_ENGINES.map((engine) => ({
    id: engine.id,
    name: engine.name,
    ...leads[engine.id]!,
  }))
}

export function electionVerdict(): { statement: string; because: string } {
  const undecided = REGIONAL_SENTIMENT.filter((r) => r.swing === 'undecided')
  const unowned = SWING_TOPICS.filter((t) => t.ownedBy === null && t.influence === 'high')

  return {
    statement: 'Claim housing, and correct the placement of the resolved dispute.',
    because: `${undecided.length} of ${REGIONAL_SENTIMENT.length} regions are undecided and both are dominated by the same unowned topic. ${unowned.length} high-influence topic belongs to nobody. Meanwhile two engines lead with a dispute that closed without finding — a placement problem, not a reputation problem, and cheaper to fix than either.`,
  }
}
