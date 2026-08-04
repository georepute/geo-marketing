import { buildExposure } from '@/lib/model/exposure'
import { METHODOLOGY_VERSION, SPINE } from './spine'
import { TIMING } from './org'
import { TOP_COMPETITOR } from './competitors'
import type { Readout } from './types'

/* ============================================================================
   Twelve readouts, each carrying all twelve §13 sections.

   `r-supplier-collapse` is the canonical one: its exposure is the full-book
   figure the spine pins. Every other readout addresses a slice of the same
   demand and therefore carries a proportional share of it — which is why no
   two readouts can contradict each other on money.
   ========================================================================= */

const DEADLINE = TIMING.decisionDeadline
const WINDOW = `${TIMING.windowMonths} months — closes ${TIMING.windowClosesAt}`

export const READOUTS: Readout[] = [
  /* ---------------------------------------------------------------- 1 --- */
  {
    id: 'r-supplier-collapse',
    engineId: 'ai-recognition',
    title: 'The revenue-deciding stage is the stage least defended',
    executiveTruth:
      'Northwind appears in 7% of supplier-evaluation answers — the stage that decides 60% of revenue and that Kestrel controls in five of seven questions.',
    businessMeaning:
      'Buyers at supplier evaluation have already chosen a solution and are choosing a vendor. This stage carries under 15% of query volume, so volume-led tooling ranks it as unimportant — while it decides most of the revenue. Absence here is exclusion from the shortlist at the moment the order is assigned.',
    evidence: [
      {
        subject: 'Which industrial fastener suppliers are most reliable in the Midwest?',
        source: 'Perplexity',
        observation: 'Northwind listed fourth of five suppliers.',
        observedAt: '2026-07-31',
      },
      {
        subject: 'Best MRO distributors for manufacturing plants',
        source: 'All six engines',
        observation: 'Northwind absent from every answer. Kestrel named first in four.',
        observedAt: '2026-07-30',
      },
      {
        subject: 'Who are the top industrial supply companies for fasteners?',
        source: 'All six engines',
        observation: 'Northwind absent. No engine cited a Northwind source.',
        observedAt: '2026-07-29',
      },
    ],
    connectedSignals: [
      { id: 'r-authority', label: 'Independent authority evidence', relationship: 'supporting', value: 'Weak — 3 sources' },
      { id: 'r-recognition', label: 'Entity understanding', relationship: 'supporting', value: '38 of 100 average' },
      { id: 'r-competitor', label: 'Competitor recommendation share', relationship: 'downstream', value: '31% — Kestrel Industrial' },
      { id: 'r-paid-dependency', label: 'Paid dependency', relationship: 'downstream', value: 'High' },
    ],
    competitorContext: {
      competitor: TOP_COMPETITOR.name,
      benefit: 'Receives 31% of all recommendations and is named first in four of seven supplier-evaluation answers.',
      why: TOP_COMPETITOR.whyTheyWin!,
    },
    commercialExposure: buildExposure({ share: 1, confidence: 'directional' }),
    timing: { window: WINDOW, urgency: 'immediate', decisionDeadline: DEADLINE },
    trend: 'deteriorating',
    prescription: SPINE.prescription,
    expectedMovement: {
      signal: 'Supplier-evaluation coverage',
      from: 7,
      to: 19,
      unit: '%',
    },
    ownerDeadline: { owner: 'VP Marketing', deadline: DEADLINE },
    measurement:
      'Re-run the supplier-evaluation prompt set monthly. Coverage is verified by recommendation slots won across all six engines, not by traffic.',
    confidence: 'high',
    methodologyVersion: METHODOLOGY_VERSION,
  },

  /* ---------------------------------------------------------------- 2 --- */
  {
    id: 'r-recognition',
    engineId: 'ai-recognition',
    title: 'Entity understanding is incomplete or wrong',
    executiveTruth:
      'Three of six AI engines misidentify what Northwind sells, and one does not recognise it as a distinct business at all.',
    businessMeaning:
      'An engine that cannot categorise a business cannot recommend it. This is upstream of every visibility metric: no amount of content moves an answer if the entity record is wrong.',
    evidence: [
      { subject: 'Entity category association', source: 'ChatGPT', observation: 'Classified as a hardware retailer, not an MRO distributor.', observedAt: '2026-07-29' },
      { subject: 'Entity disambiguation', source: 'Gemini', observation: 'Conflated with a same-named logistics firm.', observedAt: '2026-07-28' },
      { subject: 'Entity record', source: 'Grok', observation: 'No stable entity record. Category answered without naming any Midwest distributor.', observedAt: '2026-07-27' },
    ],
    connectedSignals: [
      { id: 'r-supplier-collapse', label: 'Supplier-evaluation coverage', relationship: 'downstream', value: '7%' },
      { id: 'r-authority', label: 'Source influence', relationship: 'supporting', value: '3 independent sources' },
    ],
    competitorContext: {
      competitor: TOP_COMPETITOR.name,
      benefit: 'Correctly categorised by all six engines.',
      why: 'Consistent category language across its own site, trade directories and three independent publications gives engines a single unambiguous record to resolve.',
    },
    commercialExposure: buildExposure({ share: 0.44, confidence: 'directional' }),
    timing: { window: WINDOW, urgency: 'immediate', decisionDeadline: DEADLINE },
    trend: 'stable',
    prescription:
      'Publish a single canonical entity description and propagate identical category language to trade directories and structured data.',
    expectedMovement: { signal: 'Average recognition score', from: 38, to: 55, unit: '/100' },
    ownerDeadline: { owner: 'Head of Digital', deadline: '2026-09-30' },
    measurement:
      'Re-observe entity understanding per engine. Success is category association correct on five of six engines.',
    confidence: 'high',
    methodologyVersion: METHODOLOGY_VERSION,
  },

  /* ---------------------------------------------------------------- 3 --- */
  {
    id: 'r-gap',
    engineId: 'google-vs-ai',
    title: 'Channel asymmetry between Google and AI discovery',
    executiveTruth:
      'Eleven of twenty tracked commercial keywords sit outside the Google top ten and receive no AI recommendation — the decision happens on neither surface.',
    businessMeaning:
      'Google rank and AI recommendation are separate commercial assets. Northwind ranks first for account setup — a question asked only after the vendor has already been chosen — and is absent from every question that decides who that vendor is.',
    evidence: [
      { subject: 'industrial fastener supplier', source: 'Google + 6 engines', observation: 'Not in top 100 organic. No AI recommendation. 320 searches per month.', observedAt: '2026-07-31' },
      { subject: 'industrial supply account setup', source: 'Google + Perplexity', observation: 'Position 1 organic, AI present. Volume 40 per month.', observedAt: '2026-07-31' },
      { subject: 'fastener sourcing best practices', source: 'Google + ChatGPT', observation: 'Position 3 and recommended — the pattern that works.', observedAt: '2026-07-30' },
    ],
    connectedSignals: [
      { id: 'r-paid-dependency', label: 'Blended CPC vs break-even', relationship: 'downstream', value: 'Above break-even' },
      { id: 'r-supplier-collapse', label: 'Supplier-evaluation coverage', relationship: 'supporting', value: '7%' },
    ],
    competitorContext: {
      competitor: TOP_COMPETITOR.name,
      benefit: 'Holds top-three organic positions and AI presence on the four highest-volume commercial questions.',
      why: 'Its supplier-comparison library ranks organically and is the source engines cite, so one asset serves both surfaces.',
    },
    commercialExposure: buildExposure({ share: 0.62, confidence: 'medium' }),
    timing: { window: WINDOW, urgency: 'this-quarter', decisionDeadline: DEADLINE },
    trend: 'deteriorating',
    prescription:
      'Build supplier-comparison content against the eleven compound and strategic blind-spot questions, structured so it is both rankable and citable.',
    expectedMovement: { signal: 'Questions with AI presence', from: 3, to: 9, unit: ' of 20' },
    ownerDeadline: { owner: 'Content Lead', deadline: '2026-10-31' },
    measurement:
      'Track gap classification per keyword monthly. Success is six keywords moving out of blind-spot classification.',
    confidence: 'high',
    methodologyVersion: METHODOLOGY_VERSION,
  },

  /* ---------------------------------------------------------------- 4 --- */
  {
    id: 'r-competitor',
    engineId: 'competitor-decision',
    title: 'Kestrel Industrial captures the decision before the lead exists',
    executiveTruth:
      'Kestrel receives 31% of all AI recommendations across the tracked decision set; Northwind receives 4.2%.',
    businessMeaning:
      'This gap is not brand preference. It is an evidence gap: Kestrel supplies engines with material they can cite, and Northwind does not. The lead never reaches the CRM because the decision resolved before contact.',
    evidence: [
      { subject: 'Recommendation share across 24 decision questions', source: 'All six engines', observation: 'Kestrel 31%, Meridian 18%, Halvorsen 11%, Atlas 7%, Northwind 4.2%.', observedAt: '2026-07-31' },
      { subject: 'Independent authority sources cited', source: 'Engine citation analysis', observation: 'Kestrel 21 sources, Northwind 3.', observedAt: '2026-07-30' },
      { subject: 'Supplier-evaluation first mention', source: 'All six engines', observation: 'Kestrel named first in four of seven questions.', observedAt: '2026-07-30' },
    ],
    connectedSignals: [
      { id: 'r-authority', label: 'Authority evidence', relationship: 'supporting', value: 'Weak' },
      { id: 'r-supplier-collapse', label: 'Supplier-evaluation coverage', relationship: 'supporting', value: '7%' },
      { id: 'r-narrative', label: 'Narrative ownership', relationship: 'downstream', value: '12%' },
    ],
    competitorContext: {
      competitor: TOP_COMPETITOR.name,
      benefit: 'Receives the recommendation in 31% of decisions and controls the supplier-evaluation stage.',
      why: TOP_COMPETITOR.whyTheyWin!,
    },
    commercialExposure: buildExposure({ share: 0.78, confidence: 'directional' }),
    timing: { window: WINDOW, urgency: 'immediate', decisionDeadline: DEADLINE },
    trend: 'deteriorating',
    prescription:
      'Publish an independent, verifiable supplier-comparison resource and secure third-party validation in at least two trade publications.',
    expectedMovement: { signal: 'Recommendation share', from: 4.2, to: 11, unit: '%' },
    ownerDeadline: { owner: 'VP Marketing', deadline: DEADLINE },
    measurement:
      'Recommendation share re-measured across the same 24 questions monthly, with engine and date recorded per observation.',
    confidence: 'high',
    methodologyVersion: METHODOLOGY_VERSION,
  },

  /* ---------------------------------------------------------------- 5 --- */
  {
    id: 'r-authority',
    engineId: 'competitor-decision',
    title: 'Independent authority evidence is weak',
    executiveTruth:
      'Three independent sources reference Northwind; the competitor median is fourteen.',
    businessMeaning:
      'Engines do not recommend what they cannot corroborate. Authority is the lowest GEON vector at 28 of 100, and it is the constraint that holds every other signal down.',
    evidence: [
      { subject: 'Independent source count', source: 'Citation analysis', observation: 'Northwind 3. Kestrel 21. Category median 14.', observedAt: '2026-07-31' },
      { subject: 'Trade publication coverage', source: 'Public web', observation: 'No coverage in the three publications engines cite most for this category.', observedAt: '2026-07-28' },
      { subject: 'Source influence', source: 'All six engines', observation: 'Every Northwind mention traces to its own website. No third-party corroboration.', observedAt: '2026-07-30' },
    ],
    connectedSignals: [
      { id: 'r-competitor', label: 'Recommendation share', relationship: 'downstream', value: '4.2%' },
      { id: 'r-trust', label: 'Trust readiness', relationship: 'downstream', value: '44 of 100' },
    ],
    competitorContext: {
      competitor: TOP_COMPETITOR.name,
      benefit: 'Twenty-one independent sources give engines corroboration on demand.',
      why: 'Sustained trade-publication presence means engines can support a Kestrel recommendation with evidence that is not Kestrel’s own.',
    },
    commercialExposure: buildExposure({ share: 0.55, confidence: 'medium' }),
    timing: { window: WINDOW, urgency: 'immediate', decisionDeadline: DEADLINE },
    trend: 'stable',
    prescription:
      'Secure independent validation: trade-publication contribution, verifiable customer outcomes and third-party specification references.',
    expectedMovement: { signal: 'GEON Authority', from: 28, to: 45, unit: '/100' },
    ownerDeadline: { owner: 'VP Marketing', deadline: '2026-12-15' },
    measurement:
      'Independent source count re-observed monthly, with each new source recorded by publication and date.',
    confidence: 'high',
    methodologyVersion: METHODOLOGY_VERSION,
  },

  /* ---------------------------------------------------------------- 6 --- */
  {
    id: 'r-paid-dependency',
    engineId: 'google-vs-ai',
    title: 'Paid search is compensating for a structural visibility failure',
    executiveTruth:
      'Blended CPC runs above the break-even cost per click, and paid spend is covering questions where the brand has no organic or AI presence.',
    businessMeaning:
      'Paid acquisition is not buying growth here; it is renting the positions that authority would otherwise hold. The cost is structural and rises as competitive density increases.',
    evidence: [
      { subject: 'Blended CPC across 20 tracked keywords', source: 'Google Ads', observation: 'Volume-weighted blended CPC exceeds computed break-even.', observedAt: '2026-07-31' },
      { subject: 'industrial supply company', source: 'Google', observation: 'No organic position in the top 100. Paid CPC $11.00, 140 searches per month.', observedAt: '2026-07-31' },
      { subject: 'Break-even model', source: 'Customer-configured', observation: 'Average order value $690, gross margin 24%, site conversion 3.7%.', observedAt: '2026-07-31' },
    ],
    connectedSignals: [
      { id: 'r-gap', label: 'Compound blind spots', relationship: 'supporting', value: 'Blind-spot keywords' },
      { id: 'r-supplier-collapse', label: 'Supplier-evaluation coverage', relationship: 'supporting', value: '7%' },
    ],
    competitorContext: {
      competitor: TOP_COMPETITOR.name,
      benefit: 'Holds organic and AI presence on the same questions Northwind must buy.',
      why: 'Owned authority removes the need to bid, so Kestrel’s cost per decision falls as Northwind’s rises.',
    },
    commercialExposure: buildExposure({ share: 0.36, confidence: 'medium' }),
    timing: { window: WINDOW, urgency: 'this-quarter', decisionDeadline: DEADLINE },
    trend: 'deteriorating',
    prescription:
      'Reallocate spend from keywords with a viable organic replacement path, and hold paid only where break-even still clears.',
    expectedMovement: { signal: 'Keywords above break-even CPC', from: 13, to: 7, unit: ' of 20' },
    ownerDeadline: { owner: 'Demand Gen Manager', deadline: '2026-10-15' },
    measurement:
      'Compare blended CPC against break-even monthly, and track organic replacement on reallocated keywords.',
    confidence: 'medium',
    methodologyVersion: METHODOLOGY_VERSION,
  },

  /* ---------------------------------------------------------------- 7 --- */
  {
    id: 'r-missed-prompts',
    engineId: 'ai-recognition',
    title: 'Nineteen of twenty-four decisions occur without the brand',
    executiveTruth:
      'No AI engine names Northwind in nineteen of the twenty-four tracked decision questions.',
    businessMeaning:
      'These are not lost leads, because no lead was ever created. The decision completed inside the engine, and conventional analytics recorded nothing at all.',
    evidence: [
      { subject: 'Best MRO distributors for manufacturing plants', source: 'All six engines', observation: 'Absent. 35 searches per month.', observedAt: '2026-07-30' },
      { subject: 'Which MRO supplier has the best fill rate?', source: 'All six engines', observation: 'Absent. Meridian named first.', observedAt: '2026-07-29' },
      { subject: 'Industrial fastener supplier with same-day shipping', source: 'All six engines', observation: 'Absent, despite same-day shipping being an operational strength.', observedAt: '2026-07-29' },
    ],
    connectedSignals: [
      { id: 'r-supplier-collapse', label: 'Supplier-evaluation coverage', relationship: 'supporting', value: '7%' },
      { id: 'r-recognition', label: 'Entity understanding', relationship: 'supporting', value: 'Incomplete on 3 engines' },
    ],
    competitorContext: {
      competitor: TOP_COMPETITOR.name,
      benefit: 'Named in seventeen of the nineteen questions where Northwind is absent.',
      why: 'Kestrel has published material addressing each question directly; engines reach for what exists.',
    },
    commercialExposure: buildExposure({ share: 0.79, confidence: 'directional' }),
    timing: { window: WINDOW, urgency: 'immediate', decisionDeadline: DEADLINE },
    trend: 'deteriorating',
    prescription:
      'Prioritise the six highest-volume missed questions and publish material that answers each one directly and citably.',
    expectedMovement: { signal: 'Questions with presence', from: 5, to: 12, unit: ' of 24' },
    ownerDeadline: { owner: 'Content Lead', deadline: '2026-11-15' },
    measurement:
      'Re-run all 24 questions monthly across all six engines; record presence per engine per question.',
    confidence: 'high',
    methodologyVersion: METHODOLOGY_VERSION,
  },

  /* ---------------------------------------------------------------- 8 --- */
  {
    id: 'r-narrative',
    engineId: 'competitor-decision',
    title: 'The category is described in a competitor’s language',
    executiveTruth:
      'Northwind owns 12% of the language engines use to define this category.',
    businessMeaning:
      'Whoever defines the category sets the criteria buyers evaluate against. Competing on someone else’s definition means competing on terms chosen to favour them.',
    evidence: [
      { subject: 'Category definition language', source: 'All six engines', observation: 'Engines describe MRO distribution using Meridian’s specification framing.', observedAt: '2026-07-30' },
      { subject: 'Evaluation criteria cited', source: 'ChatGPT, Claude, Perplexity', observation: 'Fill rate and catalogue breadth cited first — Kestrel’s published criteria.', observedAt: '2026-07-29' },
      { subject: 'Northwind differentiators', source: 'All six engines', observation: 'Same-day regional delivery not referenced in any category description.', observedAt: '2026-07-30' },
    ],
    connectedSignals: [
      { id: 'r-competitor', label: 'Recommendation share', relationship: 'downstream', value: '4.2%' },
      { id: 'r-authority', label: 'Authority evidence', relationship: 'supporting', value: 'Weak' },
    ],
    competitorContext: {
      competitor: 'Meridian Supply Co',
      benefit: 'Its specification guidance has become the category’s default vocabulary.',
      why: 'Publishing evaluation criteria before competitors did made that framing the one engines learned.',
    },
    commercialExposure: buildExposure({ share: 0.41, confidence: 'directional' }),
    timing: { window: WINDOW, urgency: 'this-quarter', decisionDeadline: DEADLINE },
    trend: 'stable',
    prescription:
      'Publish a defensible evaluation framework that makes regional response time a first-class selection criterion.',
    expectedMovement: { signal: 'Narrative ownership', from: 12, to: 24, unit: '%' },
    ownerDeadline: { owner: 'Head of Brand', deadline: '2026-12-31' },
    measurement:
      'Track which criteria engines cite first when asked how to choose a distributor.',
    confidence: 'medium',
    methodologyVersion: METHODOLOGY_VERSION,
  },

  /* ---------------------------------------------------------------- 9 --- */
  {
    id: 'r-trust',
    engineId: 'competitor-decision',
    title: 'Visible enough to find, not trusted enough to recommend',
    executiveTruth:
      'Trust reads 44 of 100 while Market Fit reads 72 — the offer matches demand, but the proof does not support a recommendation.',
    businessMeaning:
      'Visibility creates attention; trust creates selection. A business can be found and still be filtered out at the moment an engine has to stand behind a recommendation.',
    evidence: [
      { subject: 'Independent validation', source: 'Citation analysis', observation: '3 sources against a category median of 14.', observedAt: '2026-07-31' },
      { subject: 'Review corpus', source: 'Public review platforms', observation: 'Volume adequate, but no third-party verification engines treat as authoritative.', observedAt: '2026-07-28' },
      { subject: 'Reputation consistency', source: 'Cross-source comparison', observation: 'Category description differs between the website and two trade directories.', observedAt: '2026-07-27' },
    ],
    connectedSignals: [
      { id: 'r-authority', label: 'Authority evidence', relationship: 'supporting', value: 'Weak — 3 sources' },
      { id: 'r-supplier-collapse', label: 'Supplier-evaluation coverage', relationship: 'downstream', value: '7%' },
    ],
    competitorContext: {
      competitor: TOP_COMPETITOR.name,
      benefit: 'Independent validation lets engines recommend it without hedging.',
      why: 'Corroborated claims reduce the risk an engine takes in naming a supplier first.',
    },
    commercialExposure: buildExposure({ share: 0.33, confidence: 'medium' }),
    timing: { window: WINDOW, urgency: 'this-quarter', decisionDeadline: DEADLINE },
    trend: 'stable',
    prescription:
      'Resolve category description inconsistency across all public sources, then pursue verifiable third-party validation.',
    expectedMovement: { signal: 'GEON Trust', from: 44, to: 58, unit: '/100' },
    ownerDeadline: { owner: 'Head of Digital', deadline: '2026-11-30' },
    measurement:
      'Re-observe reputation consistency across all tracked public sources monthly.',
    confidence: 'medium',
    methodologyVersion: METHODOLOGY_VERSION,
  },

  /* --------------------------------------------------------------- 10 --- */
  {
    id: 'r-timing',
    engineId: 'competitor-decision',
    title: 'The window is open and closing',
    executiveTruth:
      'The market is emerging with roughly seven months of open window; competitive density is rising 8% per quarter.',
    businessMeaning:
      'Category language is still forming, so authority built now compounds. Once engines settle on a stable answer set, displacing an incumbent recommendation costs materially more.',
    evidence: [
      { subject: 'Query maturity', source: 'Search trend analysis', observation: 'Supplier-evaluation phrasing still varied — the category has no fixed vocabulary yet.', observedAt: '2026-07-31' },
      { subject: 'Competitive density', source: 'Recommendation analysis', observation: 'Rising 8% quarter over quarter.', observedAt: '2026-07-31' },
      { subject: 'Market readiness', source: 'Composite model', observation: '63 of 100 — buyers are educated, answers are not yet fixed.', observedAt: '2026-07-31' },
    ],
    connectedSignals: [
      { id: 'r-competitor', label: 'Competitor share', relationship: 'supporting', value: '31%' },
      { id: 'r-authority', label: 'Authority evidence', relationship: 'supporting', value: 'Weak' },
    ],
    competitorContext: {
      competitor: TOP_COMPETITOR.name,
      benefit: 'Building authority while the category vocabulary is still forming.',
      why: 'Early definition becomes the default answer once engines stabilise.',
    },
    commercialExposure: buildExposure({ share: 0.5, confidence: 'directional' }),
    timing: { window: WINDOW, urgency: 'immediate', decisionDeadline: DEADLINE },
    trend: 'deteriorating',
    prescription:
      'Commit authority investment before the decision deadline, while displacement cost remains low.',
    expectedMovement: { signal: 'Market readiness', from: 63, to: 63, unit: '/100' },
    ownerDeadline: { owner: 'Chief Executive', deadline: DEADLINE },
    measurement:
      'Track competitive density and query maturity quarterly; re-assess window duration each cycle.',
    confidence: 'directional',
    methodologyVersion: METHODOLOGY_VERSION,
  },

  /* --------------------------------------------------------------- 11 --- */
  {
    id: 'r-action',
    engineId: 'action',
    title: 'Prioritised intervention sequence',
    executiveTruth:
      'Six interventions are prioritised; the first two address authority evidence and supplier-comparison coverage.',
    businessMeaning:
      'Diagnosis without sequence produces activity, not movement. Each intervention names an owner, a deadline, the signal it should move and how that movement will be verified.',
    evidence: [
      { subject: 'Priority ranking model', source: 'Composite', observation: 'Ranked by exposure, confidence, urgency, effort and competitor pressure.', observedAt: '2026-07-31' },
      { subject: 'Top intervention', source: 'Derived from §13.1 chain', observation: 'Independent authority evidence — the constraint holding every downstream signal.', observedAt: '2026-07-31' },
      { subject: 'Effort assessment', source: 'Customer-configured', observation: 'Two of six interventions are low effort with measurable movement inside 60 days.', observedAt: '2026-07-31' },
    ],
    connectedSignals: [
      { id: 'r-authority', label: 'Authority evidence', relationship: 'supporting', value: 'Weak' },
      { id: 'r-supplier-collapse', label: 'Supplier-evaluation coverage', relationship: 'downstream', value: '7% → 19% target' },
    ],
    competitorContext: {
      competitor: TOP_COMPETITOR.name,
      benefit: 'Holds position while no counter-intervention is running.',
      why: 'Advantage compounds in the absence of a response.',
    },
    commercialExposure: buildExposure({ share: 1, confidence: 'directional' }),
    timing: { window: WINDOW, urgency: 'immediate', decisionDeadline: DEADLINE },
    trend: 'stable',
    prescription: SPINE.prescription,
    expectedMovement: { signal: 'Decision Health Index', from: 41, to: 56, unit: '/100' },
    ownerDeadline: { owner: 'VP Marketing', deadline: DEADLINE },
    measurement:
      'Each action carries its own success metric. Impact is verified by signal movement after execution, not by task completion.',
    confidence: 'medium',
    methodologyVersion: METHODOLOGY_VERSION,
  },

  /* --------------------------------------------------------------- 12 --- */
  {
    id: 'r-decision-health',
    engineId: 'ai-recognition',
    title: 'Decision Health Index at 41 of 100',
    executiveTruth:
      'Decision Health reads 41 of 100, held down primarily by Authority at 28.',
    businessMeaning:
      'The index is a weighted function of the six GEON vectors, not a score assigned by judgement. Market Fit at 72 confirms the offer matches demand; the constraint is entirely on the evidence side.',
    evidence: [
      { subject: 'GEON vectors', source: 'Composite model', observation: 'Visibility 34, Authority 28, Context 61, Trust 44, Consistency 57, Market Fit 72.', observedAt: '2026-07-31' },
      { subject: 'Index weighting', source: 'Methodology GEON-2.4', observation: 'Visibility .25, Authority .30, Context .10, Trust .20, Consistency .075, Market Fit .075.', observedAt: '2026-07-31' },
      { subject: 'Binding constraint', source: 'Sensitivity analysis', observation: 'Authority carries the heaviest weight and the lowest score.', observedAt: '2026-07-31' },
    ],
    connectedSignals: [
      { id: 'r-authority', label: 'GEON Authority', relationship: 'supporting', value: '28 of 100' },
      { id: 'r-trust', label: 'GEON Trust', relationship: 'supporting', value: '44 of 100' },
      { id: 'r-action', label: 'Prioritised interventions', relationship: 'downstream', value: '6 sequenced' },
    ],
    competitorContext: {
      competitor: TOP_COMPETITOR.name,
      benefit: 'Leads on the two most heavily weighted vectors.',
      why: 'Authority and Visibility are where its investment has concentrated.',
    },
    commercialExposure: buildExposure({ share: 1, confidence: 'directional' }),
    timing: { window: WINDOW, urgency: 'immediate', decisionDeadline: DEADLINE },
    trend: 'deteriorating',
    prescription:
      'Direct investment at Authority first — it carries the highest weight and the largest deficit.',
    expectedMovement: { signal: 'Decision Health Index', from: 41, to: 56, unit: '/100' },
    ownerDeadline: { owner: 'Chief Executive', deadline: DEADLINE },
    measurement:
      'Recompute the index from re-observed GEON vectors monthly. The weighting is published and versioned.',
    confidence: 'high',
    methodologyVersion: METHODOLOGY_VERSION,
  },
]

export function getReadout(id: string): Readout | undefined {
  return READOUTS.find((r) => r.id === id)
}

export function readoutsForEngine(engineId: string): Readout[] {
  return READOUTS.filter((r) => r.engineId === engineId)
}

/* ============================================================================
   The causal signal chain — brief §13.1, reproduced exactly.
   Every value is read from the spine or derived; none is typed here.
   ========================================================================= */

export interface ChainNode {
  id: string
  label: string
  /** Rendered value. Formatted by the component, not here. */
  value: string
  readoutId: string | null
  kind: 'signal' | 'exposure' | 'prescription'
}
