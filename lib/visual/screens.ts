/* ============================================================================
   PRODUCT SCREEN SLOTS — the register of every real screenshot the site is
   waiting on.

   Requirements doc §2 asks for real dashboards, reports, analytics, action
   plans, competitor analysis, AI/search analysis and executive screens
   throughout the site. Those images do not exist in this repository and must
   never be invented, so every one of them is declared here as a slot: a
   reserved, correctly-proportioned frame with a caption, alt text and the
   exact path the real file goes to.

   HOW TO FILL A SLOT
     1. Export the screen from the platform as PNG (or WebP) at 2× the
        rendered width — 2400px wide covers every layout on this site.
     2. ANONYMISE IT. No customer names, no real domains, no personal data,
        no confidential figures. Doc §2 and §3 are explicit: demo or
        anonymised data only, real interface. This is the one rule that
        cannot be relaxed.
     3. Save it to the `file` path below, under `public/`.
     4. Flip `ready` to `true` in this file.
     5. Re-read `alt` and `caption` and correct them so they describe the
        image you actually supplied.

   Nothing else changes. The frame already reserves the right space, so
   filling a slot never shifts the layout around it.

   `npm run screens` prints the outstanding slots as a checklist.
   ========================================================================= */

export interface ScreenSlot {
  /** Path under `public/`, written as a root-relative URL. */
  file: string
  /**
   * Width ÷ height of the real export. The frame reserves this ratio before
   * any image loads, so a slot filled later cannot cause layout shift.
   */
  aspect: number
  /** Visible under the frame. Explains what the reader is looking at. */
  caption: string
  /**
   * Read to screen-reader users in place of the image. These screens carry
   * the argument of the section they sit in, so none of them is decorative
   * and none may be empty.
   */
  alt: string
  /** Which surface of the platform to capture. Written for whoever exports. */
  surface: string
  /** Flip to `true` once the anonymised file is in place. */
  ready: boolean
}

/* Standard ratios, so a page of slots reads as one series rather than a
   ragged pile of arbitrary rectangles. */
const WIDE = 16 / 10 /* a full application window */
const PANEL = 4 / 3 /* a single panel or card lifted out of a screen */
const TALL = 3 / 4 /* a narrow column: action list, feed, report sidebar */

export const SCREEN_SLOTS = {
  /* ---------------------------------------------------------------------
     EXECUTIVE / MISSION CONTROL
     ------------------------------------------------------------------- */
  'mission-control': {
    file: '/screens/mission-control.png',
    aspect: 1263 / 856,
    surface: 'Executive Mission Control — full window, all measures visible',
    caption:
      'The early-warning view: where AI representation is heading if nothing changes, and the date after which each correction stops being cheap. Real interface, demonstration run.',
    alt: 'An early-warning screen listing four dated risks to AI representation, each with the point after which recovery becomes a rebuild rather than a repair, above live signal readings and a closing action window.',
    ready: true,
  },
  'executive-position': {
    file: '/screens/executive-position.png',
    aspect: PANEL,
    surface: 'Mission Control → the composite Decision Health position panel',
    caption:
      'One decision position rather than ten measures. Anonymised demonstration data.',
    alt: 'A panel resolving ten separate intelligence measures into a single weighted decision-health position, with the contribution of each vector shown alongside.',
    ready: false,
  },

  /* ---------------------------------------------------------------------
     DIAGNOSIS / PLAN
     ------------------------------------------------------------------- */
  'deep-diagnosis': {
    file: '/screens/deep-diagnosis.png',
    aspect: 1600 / 732,
    surface: 'Deep Diagnosis — the full scan result across connected signals',
    caption:
      'Every prompt that shapes the buyer decision, with the monthly volume behind it and the revenue at stake on each. Real interface, demonstration run.',
    alt: 'A table of buyer decision moments, each row carrying its monthly search volume, the engine leading the answer, the brand visibility on it, the buyer intent it signals and a directional revenue range.',
    ready: true,
  },
  'decision-reconstruction': {
    file: '/screens/decision-reconstruction.png',
    aspect: WIDE,
    surface: 'Decision Reconstruction — a completed reconstruction',
    caption:
      'One commercial question, reconstructed from what each engine understood to what must change. Anonymised demonstration data.',
    alt: 'A decision reconstruction showing how a single buying decision resolved, tracing each contributing signal from initial recognition through to the supplier that received the decision.',
    ready: false,
  },
  'market-intelligence': {
    file: '/screens/market-intelligence.png',
    aspect: 1265 / 657,
    surface: 'Market Intelligence — category and demand view',
    caption:
      'Where the commercial demand a business already intercepts actually originates. Real interface, demonstration run.',
    alt: 'A rotatable globe showing the geographic footprint of search-engine visibility, with the countries carrying measured commercial demand highlighted and counted beneath it.',
    ready: true,
  },
  'trust-authority': {
    file: '/screens/trust-authority.png',
    aspect: PANEL,
    surface: 'Trust & Authority — independent-source verification view',
    caption:
      'What a system can cite when it has to justify a recommendation. Anonymised demonstration data.',
    alt: 'A trust and authority panel counting the independent sources that corroborate a business against those corroborating its competitors.',
    ready: false,
  },

  /* ---------------------------------------------------------------------
     COMPETITOR / AI / SEARCH
     ------------------------------------------------------------------- */
  'competitor-intelligence': {
    file: '/screens/competitor-intelligence.png',
    aspect: 1259 / 680,
    surface: 'Competitive Intelligence — the comparison matrix',
    caption:
      'Each engine profiled across mention rate, sentiment and query share, beside the volume that weights them. Real interface, demonstration run.',
    alt: 'A radar chart profiling each AI engine across mention rate, sentiment and query share, beside a bar chart of the analysis query volume run on each engine.',
    ready: true,
  },
  'ai-intelligence': {
    file: '/screens/ai-intelligence.png',
    aspect: 1589 / 659,
    surface: 'AI Intelligence — per-engine recognition and recommendation',
    caption:
      'Recommendation share engine by engine, beside the topics led, the topics lagged and the topics no brand has claimed. Real interface, demonstration run.',
    alt: 'A per-engine recommendation share table covering ChatGPT, Claude, Gemini, Perplexity and Copilot with brand and competitor top-three counts, beside lists of topics led, topics lagged and topics unclaimed by anyone.',
    ready: true,
  },
  'google-vs-ai': {
    file: '/screens/google-vs-ai.png',
    aspect: 593 / 467,
    surface: 'Google vs AI Visibility — the gap matrix',
    caption:
      'The two discovery surfaces set side by side: what Google indexes against what the AI engines cite back. Real interface, demonstration run.',
    alt: 'A section contrasting search-engine visibility — indexable pages, organic impressions, ranking signals — against AI-mediated discovery, being what ChatGPT, Gemini, Perplexity and Copilot cite back.',
    ready: true,
  },
  'search-intelligence': {
    file: '/screens/search-intelligence.png',
    aspect: PANEL,
    surface: 'Search Intelligence — query and economics view',
    caption:
      'Where the decision is reachable, and what reaching it costs. Anonymised demonstration data.',
    alt: 'A search intelligence panel relating commercial query coverage to the cost of reaching those queries through paid acquisition.',
    ready: false,
  },
  'narrative-intelligence': {
    file: '/screens/narrative-intelligence.png',
    aspect: WIDE,
    surface: 'Narrative Intelligence — narrative ownership and movement',
    caption:
      'Which account of the category is circulating, and whose language it uses. Anonymised demonstration data.',
    alt: 'A narrative intelligence screen listing the narratives circulating about a business and its category, each with its polarity, reach and direction of movement.',
    ready: false,
  },

  /* ---------------------------------------------------------------------
     STRATEGY / EXECUTION / MEASUREMENT — the closed loop
     ------------------------------------------------------------------- */
  strategy: {
    file: '/screens/strategy.png',
    aspect: 1592 / 743,
    surface: 'Strategy — objectives translated into targeted signals',
    caption:
      'What the market already pays for the positions a business does not hold organically, and where budget should go first. Real interface, demonstration run.',
    alt: 'A cost-per-click intelligence table pricing each commercial term against its monthly volume, with the annual cost of absence and the paid spend currently compensating for it stated above it.',
    ready: true,
  },
  'action-plan': {
    file: '/screens/action-plan.png',
    aspect: TALL,
    surface: 'Action Plan — the prioritised intervention list',
    caption:
      'Every action carries an owner, a deadline and the signal it must move. Anonymised demonstration data.',
    alt: 'A prioritised action plan listing interventions in sequence, each with a named owner, a deadline, the effort involved and the measurable signal it is expected to move.',
    ready: false,
  },
  'content-media': {
    file: '/screens/content-media.png',
    aspect: PANEL,
    surface: 'Content & media generation — output bound to identified gaps',
    caption:
      'Each asset traced back to the gap it was created to close. Anonymised demonstration data.',
    alt: 'A generation screen showing produced content and media assets, each linked to the specific information gap and audience it was created to address.',
    ready: false,
  },
  calendar: {
    file: '/screens/calendar.png',
    aspect: WIDE,
    surface: 'Execution calendar — sequenced distribution',
    caption:
      'Sequence and timing, derived from the strategy rather than from a posting cadence. Anonymised demonstration data.',
    alt: 'An execution calendar showing planned assets sequenced across channels and dates, ordered by the decision stage each is intended to influence.',
    ready: false,
  },
  distribution: {
    file: '/screens/distribution.png',
    aspect: PANEL,
    surface: 'Distribution — connected digital assets and publishing state',
    caption:
      'Where each asset was published, across connected properties. Anonymised demonstration data.',
    alt: 'A distribution screen listing connected digital properties and channels with the publication state of each asset across them.',
    ready: false,
  },
  'before-after': {
    file: '/screens/before-after.png',
    aspect: 835 / 562,
    surface: 'Measurement — the before → action → after comparison table',
    caption:
      'Exposure stated as a range with its confidence and its inputs, never as a single confirmed figure. Real interface, demonstration run.',
    alt: 'A commercial exposure model showing monthly revenue at risk, daily cost and projected recovery value as ranges, with the conversion, deal-value and benchmark inputs printed beneath and a medium-confidence marker.',
    ready: true,
  },
  learning: {
    file: '/screens/learning.png',
    aspect: PANEL,
    surface: 'Learning — measured outcome feeding the next recommendation',
    caption:
      'The previous recommendation, what it moved, and the corrected recommendation that follows. Anonymised demonstration data.',
    alt: 'A learning screen placing a previous recommendation beside its measured outcome and the corrected recommendation the system derived from that result.',
    ready: false,
  },

  /* ---------------------------------------------------------------------
     ELECTION INTELLIGENCE — doc §3. Fictional subjects only.
     ------------------------------------------------------------------- */
  'election-war-room': {
    file: '/screens/election-war-room.png',
    aspect: WIDE,
    surface: 'Election War Room — the live operational view',
    caption:
      'The Election War Room. Fictional race, demonstration data — no real candidate, party or campaign.',
    alt: 'An election war room screen showing live narrative movement, audience segments and emerging risks for a campaign, arranged for rapid operational decisions.',
    ready: false,
  },
  'election-candidate': {
    file: '/screens/election-candidate.png',
    aspect: WIDE,
    surface: 'Candidate / party dashboard — the standing position',
    caption:
      'Candidate and party position. Fictional race, demonstration data — no real candidate, party or campaign.',
    alt: 'A candidate dashboard showing public trust, recognition and narrative consistency measures for a candidate alongside the equivalent measures for their opponent.',
    ready: false,
  },
  'election-narrative': {
    file: '/screens/election-narrative.png',
    aspect: WIDE,
    surface: 'Election narrative intelligence — positive vs negative narratives',
    caption:
      'Which narratives are strengthening the position and which are damaging it. Fictional race, demonstration data.',
    alt: 'An election narrative screen separating positive from negative narratives about a candidate, each with its reach, direction of movement and the sources carrying it.',
    ready: false,
  },
  'election-polarity': {
    file: '/screens/election-polarity.png',
    aspect: PANEL,
    surface: 'Positive vs negative narratives — the polarity split',
    caption:
      'Positive against negative, by reach and by direction of travel. Fictional race, demonstration data.',
    alt: 'A panel splitting the narratives about a candidate into positive and negative, with the reach and momentum of each side shown side by side.',
    ready: false,
  },
  'election-audience': {
    file: '/screens/election-audience.png',
    aspect: PANEL,
    surface: 'Audience / segment movement — who is moving toward and away',
    caption:
      'Which audiences are moving closer and which are moving away. Fictional race, demonstration data.',
    alt: 'An audience movement panel showing voter segments and regions, with the direction and size of the shift in sentiment for each.',
    ready: false,
  },
  'election-opponent': {
    file: '/screens/election-opponent.png',
    aspect: PANEL,
    surface: 'Opponent intelligence — competing narratives and ownership',
    caption:
      'What the opposing account is, and which issues it owns. Fictional race, demonstration data.',
    alt: 'An opponent intelligence panel comparing the narratives associated with each candidate and identifying which issues each one currently owns.',
    ready: false,
  },
  'election-sources': {
    file: '/screens/election-sources.png',
    aspect: PANEL,
    surface: 'Influencers and sources shaping the narrative',
    caption:
      'Who is strengthening the position and who is damaging it. Fictional race, demonstration data.',
    alt: 'A sources panel listing the media outlets, accounts and information sources carrying each narrative, with their reach and the direction of their effect.',
    ready: false,
  },
  'election-ai-google': {
    file: '/screens/election-ai-google.png',
    aspect: PANEL,
    surface: 'AI + Google election intelligence — per-engine narrative leads',
    caption:
      'What each AI engine and Google surface leads with. Fictional race, demonstration data.',
    alt: 'A panel showing what each AI engine and search surface leads with when asked about a candidate, and where those accounts diverge from one another.',
    ready: false,
  },
  'election-multilingual': {
    file: '/screens/election-multilingual.png',
    aspect: PANEL,
    surface: 'Multilingual intelligence — narrative gaps between languages',
    caption:
      'Where the account of a candidate differs by language. Fictional race, demonstration data.',
    alt: 'A multilingual intelligence panel comparing the narratives circulating about a candidate in each language, highlighting where the accounts diverge.',
    ready: false,
  },
  'election-risk': {
    file: '/screens/election-risk.png',
    aspect: PANEL,
    surface: 'Risks and opportunities — emerging threats and open positions',
    caption:
      'Emerging threats and unclaimed positions, ranked. Fictional race, demonstration data.',
    alt: 'A risk and opportunity panel ranking emerging narrative threats alongside unclaimed issues available to the campaign.',
    ready: false,
  },
  'election-actions': {
    file: '/screens/election-actions.png',
    aspect: TALL,
    surface: 'Recommended actions — the campaign action plan',
    caption:
      'What to do now, who owns it, and how the movement will be measured. Fictional race, demonstration data.',
    alt: 'A campaign action plan listing prioritised recommended actions, each with an owner, a deadline and the perception signal it is expected to move.',
    ready: false,
  },
  'election-trend': {
    file: '/screens/election-trend.png',
    aspect: PANEL,
    surface: 'Trend over time — narrative movement across the cycle',
    caption:
      'How the position has moved across the cycle. Fictional race, demonstration data.',
    alt: 'A trend chart tracking how narrative ownership and public trust for a candidate have moved over the course of an election cycle.',
    ready: false,
  },
} as const satisfies Record<string, ScreenSlot>

export type ScreenSlotId = keyof typeof SCREEN_SLOTS

/* ---------------------------------------------------------------------------
   Which screen belongs to which engine.

   Doc §2 asks for a real screen wherever the site discusses an intelligence
   engine. The engine roster (lib/seed/engines.ts) is longer than the screen
   register because several engines share a surface — AI Recognition and AI
   Search Presence are two questions asked of the same panel — so this is a
   deliberate many-to-one map rather than a missing-slot list.
   ------------------------------------------------------------------------ */
export const ENGINE_SCREEN: Record<string, ScreenSlotId> = {
  'ai-recognition': 'ai-intelligence',
  'ai-search-presence': 'ai-intelligence',
  'google-vs-ai': 'google-vs-ai',
  'search-economics': 'search-intelligence',
  'competitor-decision': 'competitor-intelligence',
  narrative: 'narrative-intelligence',
  'trust-authority': 'trust-authority',
  action: 'action-plan',
  'opportunity-revenue': 'executive-position',
  'strategic-timing': 'mission-control',
  distribution: 'distribution',
  'global-market': 'market-intelligence',
}

/**
 * Which screen a marketplace product delivers.
 *
 * Keyed by product slug rather than derived from the engine, because
 * `IntelligenceProduct` carries no engine reference — the two catalogues are
 * deliberately independent, and a product can be the output of more than one
 * engine.
 */
export const PRODUCT_SCREEN: Record<string, ScreenSlotId> = {
  'ai-recognition-scan': 'ai-intelligence',
  'ai-search-presence-scan': 'ai-intelligence',
  'google-vs-ai-gap-scan': 'google-vs-ai',
  'competitor-recommendation-scan': 'competitor-intelligence',
  'competitive-position-assessment': 'competitor-intelligence',
  'trust-signals-scan': 'trust-authority',
  'decision-journey-diagnostic': 'decision-reconstruction',
  'executive-intelligence-brief': 'executive-position',
}

/** Slots still waiting on a real anonymised export. Used by `npm run screens`. */
export function pendingSlots(): (ScreenSlot & { id: ScreenSlotId })[] {
  return (Object.entries(SCREEN_SLOTS) as [ScreenSlotId, ScreenSlot][])
    .filter(([, slot]) => !slot.ready)
    .map(([id, slot]) => ({ id, ...slot }))
}
