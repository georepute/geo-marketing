import { INTELLIGENCE_ENGINES } from './engines'

/* ============================================================================
   THE INTELLIGENCE ECOSYSTEM — categories and modules.

   WHY THIS FILE EXISTS
   The marketplace was a flat list of eight purchasable products, which framed
   the platform as a shop. It is not a shop. The thing worth demonstrating is
   that there is an intelligence model behind almost any commercial question a
   business could ask — including questions most businesses have never thought
   to ask, because nobody told them the answer was measurable.

   WHERE THE MODULES COME FROM
   Every module below is generated from a line the engine catalogue already
   declares — a `capability` or a `screen` in engines.ts. Nothing here invents
   product scope. `tests/module-catalogue.test.ts` fails the build if a module
   names a source its engine does not declare, so the two files cannot drift.

   That constraint is load-bearing. A marketplace page is exactly the surface
   where a plausible-sounding capability gets invented to fill a grid, and
   inventing one here would mean selling something that does not exist.

   WHY CAPABILITIES FOR SOME ENGINES AND SCREENS FOR OTHERS
   Most engines declare capabilities that are genuine measurements — "Recognition
   decay", "Compound blind spot", "Replaceability". Two do not: Action
   Intelligence declares the eleven FIELDS every action carries (Owner,
   Deadline, Confidence…), which are attributes rather than things you can
   analyse. For that engine the declared screens are the real units of work, so
   modules are built from those instead.
   ========================================================================= */

export interface IntelligenceCategory {
  slug: string
  name: string
  /** The executive question the whole category answers. */
  question: string
  /** Two sentences. What this category looks at, and why that matters. */
  explanation: string
  /** Engines whose declared scope becomes the modules in this category. */
  engineSlugs: string[]
  /** Purchasable products that cover part of this category. */
  productSlugs: string[]
  order: number
}

export interface IntelligenceModule {
  slug: string
  /** Names the declared capability or screen, verbatim. */
  name: string
  categorySlug: string
  engineSlug: string
  /** The business question this module answers. */
  question: string
  /** What it surfaces that a business would not otherwise know to look for. */
  reveals: string
  /** True when the engine behind it is built in this environment. */
  live: boolean
}

/* ----------------------------------------------------------------------------
   The seven categories. Ordered as a buyer discovers them: can AI find you,
   can it verify you, who beats you, and what do you do about it.
   ------------------------------------------------------------------------- */

export const INTELLIGENCE_CATEGORIES: IntelligenceCategory[] = [
  {
    slug: 'ai-visibility-intelligence',
    name: 'AI Visibility Intelligence',
    question: 'Does AI know the business exists, and what does it think it is?',
    explanation:
      'Whether AI systems hold an accurate, current and unambiguous record of the business, and whether that record survives into the answers buyers receive. Everything else on this page is downstream of it — no measure improves while the underlying record is wrong.',
    engineSlugs: ['ai-recognition', 'ai-search-presence'],
    productSlugs: [
      'ai-recognition-scan',
      'ai-search-presence-scan',
      'decision-journey-diagnostic',
    ],
    order: 1,
  },
  {
    slug: 'search-intelligence',
    name: 'Search Intelligence',
    question:
      'Do the two discovery surfaces agree, and what is the gap costing?',
    explanation:
      'Traditional search and AI-mediated discovery are separate commercial assets that fail independently. This category measures each, classifies every gap between them, and prices what closing the gap is currently costing in paid media.',
    engineSlugs: ['google-vs-ai', 'search-economics'],
    productSlugs: ['google-vs-ai-gap-scan'],
    order: 2,
  },
  {
    slug: 'competitive-intelligence',
    name: 'Competitive Intelligence',
    question: 'Who receives the decision instead, and what do they have?',
    explanation:
      'Not who ranks above you — who gets recommended when a buyer asks a machine whom to choose. The useful output is never the share figure; it is the specific evidence a competitor supplies that you do not, because that is the part you can go and close.',
    engineSlugs: ['competitor-decision'],
    productSlugs: [
      'competitor-recommendation-scan',
      'competitive-position-assessment',
    ],
    order: 3,
  },
  {
    slug: 'trust-intelligence',
    name: 'Trust Intelligence',
    question: 'Is the business safe to recommend?',
    explanation:
      'Visibility creates attention; trust creates selection. A business can be perfectly visible and still be filtered out at the moment a system has to stand behind naming it first, and the reasons for that are specific and fixable.',
    engineSlugs: ['trust-authority'],
    productSlugs: ['trust-signals-scan'],
    order: 4,
  },
  {
    slug: 'content-intelligence',
    name: 'Content Intelligence',
    question: 'Whose language does the market use to describe your category?',
    explanation:
      'Whoever defines a category sets the criteria buyers evaluate against. This category measures how much of that definition you own, where it is fragile, and which of your genuine advantages the market has no vocabulary for.',
    engineSlugs: ['narrative'],
    productSlugs: ['executive-intelligence-brief'],
    order: 5,
  },
  {
    slug: 'market-intelligence',
    name: 'Market Intelligence',
    question: 'Is the market ready, and does the route to it hold?',
    explanation:
      'Timing, geography and distribution — the three conditions that decide whether a correct strategy executed today returns more than the same strategy executed in a year. A right decision at the wrong time is still a wrong decision.',
    engineSlugs: ['strategic-timing', 'global-market', 'distribution'],
    productSlugs: ['executive-intelligence-brief'],
    order: 6,
  },
  {
    slug: 'executive-intelligence',
    name: 'Executive Intelligence',
    question: 'What is it worth, and what happens next?',
    explanation:
      'Where diagnosis becomes a decision. Every gap is priced as a directional range, ranked against every other gap, assigned an owner and a deadline, and then measured after execution to confirm the signal actually moved.',
    engineSlugs: ['action', 'opportunity-revenue'],
    productSlugs: ['executive-intelligence-brief'],
    order: 7,
  },
]

/* ----------------------------------------------------------------------------
   Module specifications, grouped by the engine that provides them.

   `source` must match a capability or screen declared by that engine — the
   catalogue test enforces it. `question` is what a buyer is actually asking.
   `reveals` is the line that should produce "I did not know that could be
   measured", so it names the specific thing found rather than restating the
   module name in a longer form.
   ------------------------------------------------------------------------- */

interface ModuleSpec {
  source: string
  question: string
  reveals: string
}

const SPECS: Record<string, ModuleSpec[]> = {
  /* ------------------------------------------- AI Visibility Intelligence */
  'ai-recognition': [
    {
      source: 'Recognition by engine',
      question: 'Which AI systems know the business exists, and which do not?',
      reveals:
        'Recognition is never uniform. A business can be well understood by one engine and structurally invisible to another that a different half of its buyers use.',
    },
    {
      source: 'Entity understanding',
      question: 'Does AI understand what the business actually does?',
      reveals:
        'The distance between what a company says it is and what machines have independently concluded it is — usually wider than any executive expects.',
    },
    {
      source: 'Category association',
      question:
        'When a buyer describes a need, is the business in the set AI considers?',
      reveals:
        'Whether the business is filed under the categories buyers actually ask about, or under one that is accurate but that nobody searches.',
    },
    {
      source: 'Confusion detection',
      question: 'Is AI confusing the business with someone else?',
      reveals:
        'Name collisions, merged records and mistaken identities — a single unresolved conflation can remove a business from every answer in its category.',
    },
    {
      source: 'Outdated knowledge',
      question:
        'Is AI describing a version of the business that no longer exists?',
      reveals:
        'Discontinued lines, closed locations, former ownership and superseded positioning still being repeated to buyers as current fact.',
    },
    {
      source: 'Source influence',
      question: 'Which sources are shaping what AI believes about the business?',
      reveals:
        'The small set of pages that disproportionately determine every answer given — frequently including a directory nobody at the company knows exists.',
    },
    {
      source: 'Recognition decay',
      question: 'Is the business becoming less recognised over time?',
      reveals:
        'Recognition erodes when competitors keep publishing and you stop. Decay is measurable for months before it shows up as absence.',
    },
  ],

  'ai-search-presence': [
    {
      source: 'Prompt coverage',
      question:
        'Across the questions buyers actually ask, how often does the business appear at all?',
      reveals:
        'Coverage measured against real buying questions rather than keywords — the difference between being findable and being present.',
    },
    {
      source: 'Missed prompts',
      question:
        'Which specific buying questions complete without the business ever being named?',
      reveals:
        'The exact questions where a decision was made and the business was not in the room. These are not lost leads; no lead was ever created.',
    },
    {
      source: 'Citations',
      question:
        'When AI cites a source to justify an answer, is any of it yours?',
      reveals:
        'Being mentioned and being cited are different commercial positions. Only one of them survives into the next answer the system gives.',
    },
    {
      source: 'Recommendation share',
      question:
        'Of all the recommendations made in this category, what share names the business?',
      reveals:
        'A market-share figure for a market nobody is currently measuring — recommendations issued, not clicks received.',
    },
    {
      source: 'Decision stage',
      question: 'At which point in the buying journey does presence collapse?',
      reveals:
        'Losses concentrate at one stage rather than spreading evenly. Locating that stage tells you where intervention returns, and where it returns nothing.',
    },
  ],

  /* ------------------------------------------------- Search Intelligence */
  'google-vs-ai': [
    {
      source: 'Google position',
      question:
        'Where does the business rank on the questions that carry commercial intent?',
      reveals:
        'Position measured only on questions that decide a purchase, with the vanity terms that inflate most reporting deliberately excluded.',
    },
    {
      source: 'AI recommendation presence',
      question:
        'On those same questions, does AI put the business forward at all?',
      reveals:
        'The same question asked of both surfaces, so the two results can finally be compared line by line instead of by anecdote.',
    },
    {
      source: 'Gap classification',
      question: 'What kind of gap is this, and does it deserve investment?',
      reveals:
        'Every gap sorted into a named class with a different remedy and a different cost. Not all absence is the same problem.',
    },
    {
      source: 'Recoverable search',
      question:
        'Where does existing authority already rank but fail to reach AI?',
      reveals:
        'The cheapest wins available: questions where you have already done the work and only the machine-readable form of it is missing.',
    },
    {
      source: 'Strategic blind spot',
      question:
        'Which commercial questions are invisible on both surfaces at once?',
      reveals:
        'Questions where the decision happens entirely without you, and where no channel measurement can show it, because nothing ever reached a channel.',
    },
    {
      source: 'Compound blind spot',
      question: 'Which of those blind spots are also high value?',
      reveals:
        'The most expensive class of gap — absent from both surfaces on a question that carries real volume and real intent.',
    },
    {
      source: 'Channel asymmetry',
      question: 'Do the two discovery surfaces tell the same story about us?',
      reveals:
        'Businesses that dominate one surface and disappear on the other — a divergence that stays invisible while each channel is reported separately.',
    },
  ],

  'search-economics': [
    {
      source: 'CPC',
      question: 'What is the business actually paying per commercial click?',
      reveals:
        'Cost per click weighted by the questions that decide purchases, rather than averaged across an account that includes cheap, irrelevant traffic.',
    },
    {
      source: 'Break-even CPC',
      question: 'Above what price does a click stop making money?',
      reveals:
        'A computed ceiling from deal value, margin and conversion — the number most advertising accounts are managed without ever calculating.',
    },
    {
      source: 'Paid dependency',
      question:
        'How much of current demand would disappear if paid search stopped tomorrow?',
      reveals:
        'Whether paid is buying growth or renting positions that authority would otherwise hold for free.',
    },
    {
      source: 'Bid inflation',
      question: 'Is the cost of the same position rising, and how fast?',
      reveals:
        'Competitive density expressed as a price trend, so the structural cost of staying still becomes visible before the budget review.',
    },
    {
      source: 'Organic replacement potential',
      question: 'Which paid positions could be replaced by owned authority?',
      reveals:
        'A costed switch list — which spend can be retired, what has to be published first, and how long the replacement takes to hold.',
    },
  ],

  /* -------------------------------------------- Competitive Intelligence */
  'competitor-decision': [
    {
      source: 'Recommendation share',
      question: 'Who is being recommended instead of the business, and how often?',
      reveals:
        'Share of decisions rather than share of traffic — measured where the choice is actually made rather than where it is later recorded.',
    },
    {
      source: 'Winning prompts',
      question: 'Which specific questions does each competitor own?',
      reveals:
        'The named questions a rival wins every time, which is what converts a vague sense of losing into a finite list of things to go and fix.',
    },
    {
      source: 'Decision-stage control',
      question: 'At which stage does each competitor take control?',
      reveals:
        'Some rivals win early by shaping the criteria; others win late at vendor selection. The counter-move is completely different for each.',
    },
    {
      source: 'Authority drivers',
      question: 'What specifically makes a competitor recommendable?',
      reveals:
        'The individual assets a machine reaches for when it justifies choosing them — publications, comparisons, specifications, verified outcomes.',
    },
    {
      source: 'Source advantage',
      question: 'How much more evidence supports them than supports us?',
      reveals:
        'A countable ratio of independent sources, which turns an abstract brand gap into a publishing programme with a known scope and cost.',
    },
    {
      source: 'Narrative control',
      question: 'Whose framing do machines use when they explain the category?',
      reveals:
        'Whether buyers are evaluating against criteria a competitor published, which quietly decides the outcome before anyone is compared.',
    },
    {
      source: 'Vulnerability',
      question: 'Where is the leading competitor actually weak?',
      reveals:
        'The questions a dominant rival does not answer, does not cover, or answers badly — the cheapest available places to take share.',
    },
  ],

  /* --------------------------------------------------- Trust Intelligence */
  'trust-authority': [
    {
      source: 'Independent validation',
      question: 'How much of what the business claims can anyone else confirm?',
      reveals:
        'Which claims stand on third-party evidence and which stand only on the company’s own website — machines weight the two very differently.',
    },
    {
      source: 'Source authority',
      question: 'Do the sources that mention the business carry any weight?',
      reveals:
        'Mentions weighted by the credibility of the source, so fifty low-authority listings stop reading as a stronger position than three real ones.',
    },
    {
      source: 'Reputation consistency',
      question: 'Does the business tell the same story everywhere it appears?',
      reveals:
        'Contradictions across the public record — different categories, claims or descriptions between the site, directories and third-party profiles.',
    },
    {
      source: 'Trust decay',
      question: 'Is the evidence supporting the business ageing?',
      reveals:
        'Proof has a shelf life. Case studies, coverage and reviews lose weight with age, and the decline is measurable before selection stops.',
    },
  ],

  /* ------------------------------------------------- Content Intelligence */
  narrative: [
    {
      source: 'Narrative ownership',
      question:
        'How much of the language used to describe this category belongs to the business?',
      reveals:
        'Category vocabulary as an ownable asset, with a percentage attached — a measure most companies have never seen quantified.',
    },
    {
      source: 'Category definition',
      question: 'Which criteria do machines cite first when explaining a choice?',
      reveals:
        'The evaluation criteria the market has settled on, and which competitor published them first.',
    },
    {
      source: 'Fragility',
      question: 'How easily could a competitor take the narrative from us?',
      reveals:
        'Where a position rests on a single source or a single page, and would not survive one competitor publishing a better one.',
    },
    {
      source: 'Strategic silence',
      question: 'Which of our genuine advantages does the market never mention?',
      reveals:
        'Real differentiators that never appear in any category description — strengths the market currently has no vocabulary to express.',
    },
    {
      source: 'Regional variation',
      question: 'Does the business mean the same thing in every market?',
      reveals:
        'Where positioning drifts by geography or language, so a business is a category leader in one market and an unknown in the next.',
    },
  ],

  /* -------------------------------------------------- Market Intelligence */
  'strategic-timing': [
    {
      source: 'Demand maturation',
      question: 'Is this market forming, forming fast, or already settled?',
      reveals:
        'Whether category language is still fluid — because authority built while it is fluid becomes the default answer, and authority built after has to displace one.',
    },
    {
      source: 'Buyer education',
      question: 'Do buyers know enough yet to be worth persuading?',
      reveals:
        'Whether the market is asking informed comparison questions or still asking what the category is, which decides what content is worth producing.',
    },
    {
      source: 'Competitive density',
      question: 'How crowded is the answer set becoming?',
      reveals:
        'The rate at which recommendation slots are being taken, which is what converts "sometime this year" into a dated decision.',
    },
    {
      source: 'Shift velocity',
      question: 'How quickly is the position moving, and in which direction?',
      reveals:
        'Rate of change rather than a snapshot, so a strong position that is deteriorating is not mistaken for a safe one.',
    },
  ],

  'global-market': [
    {
      source: 'Regional strength',
      question: 'Where in the world is the business strong, and where is it absent?',
      reveals:
        'Position measured market by market, which routinely contradicts the single global figure a company believes it has.',
    },
    {
      source: 'Market readiness',
      question: 'Which markets are ready to be entered now?',
      reveals:
        'Demand maturity and competitive density per market, so expansion is sequenced by readiness rather than by proximity or preference.',
    },
    {
      source: 'Pricing perception',
      question: 'Does the market think the business is expensive?',
      reveals:
        'Where the business sits on a price spectrum in the eyes of machines describing it — an assumption that shapes shortlists before any quote is sent.',
    },
    {
      source: 'Country definition',
      question: 'Does the business mean something different in each country?',
      reveals:
        'How category, positioning and reputation change across borders, including markets where the business is understood as a different kind of company entirely.',
    },
  ],

  distribution: [
    {
      source: 'Distributor alignment',
      question: 'Do partners describe the business the way it describes itself?',
      reveals:
        'Where a channel partner’s description of your product is what machines have learned — and where that description is wrong.',
    },
    {
      source: 'Dependency',
      question: 'How much of the market position rests on intermediaries?',
      reveals:
        'The share of visibility owned by partners rather than by the business, which is the share that leaves if the relationship ends.',
    },
    {
      source: 'Replaceability',
      question: 'How easily could the business be swapped out of the channel?',
      reveals:
        'Whether the brand is specified by name or treated as an interchangeable supplier — usually the more expensive answer of the two.',
    },
    {
      source: 'Price justification',
      question: 'Can the channel explain why the business costs more?',
      reveals:
        'Whether the reasons for a premium survive the trip through distribution, or arrive at the buyer as an unexplained higher number.',
    },
  ],

  /* ----------------------------------------------- Executive Intelligence */
  action: [
    {
      source: 'Action Center',
      question: 'What should the business do, in what order?',
      reveals:
        'Every finding converted into an intervention with an owner, a deadline and a stated expected movement — or dropped, if it cannot be.',
    },
    {
      source: 'Priority Queue',
      question: 'Which intervention returns most, and what is currently blocked?',
      reveals:
        'Ranking by exposure, confidence, effort and dependency, so effort does not go into work that cannot move until something else lands.',
    },
    {
      source: '30/60/90-Day Roadmap',
      question: 'What lands this month, this quarter, and this year?',
      reveals:
        'A sequence built from what each intervention actually depends on, rather than from a calendar someone divided into thirds.',
    },
    {
      source: 'Impact Tracker',
      question: 'Did the work move the signal it was supposed to move?',
      reveals:
        'Measured change against the predicted change, including the interventions that did not work — which is the only way the model earns trust.',
    },
  ],

  'opportunity-revenue': [
    {
      source: 'Decision volume',
      question: 'How many buying decisions are actually in play?',
      reveals:
        'The size of the decision market itself, counted in decisions rather than in searches, sessions or impressions.',
    },
    {
      source: 'Deal value',
      question: 'What is one of those decisions worth to the business?',
      reveals:
        'Value per decision by stage and question type, so a high-volume gap is not automatically ranked above a low-volume, high-value one.',
    },
    {
      source: 'Conversion assumptions',
      question: 'What has to be true for this estimate to hold?',
      reveals:
        'Every assumption behind an exposure figure, stated and editable — because a number whose assumptions are hidden cannot be argued with or trusted.',
    },
    {
      source: 'Time to impact',
      question: 'How long before an intervention shows up in the numbers?',
      reveals:
        'The lag between doing the work and seeing the movement, which is what stops a working programme from being cancelled a month too early.',
    },
    {
      source: 'Opportunity range',
      question: 'What is the gap worth, and how confident can we be?',
      reveals:
        'A directional range with its confidence stated — never a single confident figure, and never described as confirmed lost revenue.',
    },
  ],
}

/* ----------------------------------------------------------------------------
   Generation. Modules are produced by walking the engine catalogue, so the
   ecosystem can never claim an engine the platform does not have, and the
   `live` flag can never disagree with the engine's own `built` flag.
   ------------------------------------------------------------------------- */

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/\//g, '-')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

const CATEGORY_BY_ENGINE = new Map<string, IntelligenceCategory>(
  INTELLIGENCE_CATEGORIES.flatMap((category) =>
    category.engineSlugs.map((slug) => [slug, category] as const),
  ),
)

export const INTELLIGENCE_MODULES: IntelligenceModule[] =
  INTELLIGENCE_ENGINES.flatMap((engine) => {
    const specs = SPECS[engine.slug] ?? []
    const category = CATEGORY_BY_ENGINE.get(engine.slug)
    if (!category) return []

    return specs.map((spec) => ({
      /* Prefixed by engine: two engines legitimately declare a capability of
         the same name (recommendation share is measured both as presence and
         as competitive capture), and they are different modules. */
      slug: `${engine.slug}-${slugify(spec.source)}`,
      name: spec.source,
      categorySlug: category.slug,
      engineSlug: engine.slug,
      question: spec.question,
      reveals: spec.reveals,
      live: engine.built,
    }))
  })

/* ----------------------------------------------------------------------------
   Lookups.
   ------------------------------------------------------------------------- */

export function getCategory(slug: string): IntelligenceCategory | undefined {
  return INTELLIGENCE_CATEGORIES.find((c) => c.slug === slug)
}

export function modulesForCategory(slug: string): IntelligenceModule[] {
  return INTELLIGENCE_MODULES.filter((m) => m.categorySlug === slug)
}

export function moduleCount(slug: string): number {
  return modulesForCategory(slug).length
}

/** Total modules across the ecosystem. Computed — never a typed-in figure. */
export function totalModuleCount(): number {
  return INTELLIGENCE_MODULES.length
}

/** Modules demonstrable in this environment, i.e. behind a built engine. */
export function liveModuleCount(): number {
  return INTELLIGENCE_MODULES.filter((m) => m.live).length
}

/** The declared sources for an engine — capabilities, or screens where the
    capabilities are attributes rather than measurements. Used by the
    catalogue test to prove no module was invented. */
export function declaredSources(engineSlug: string): string[] {
  const engine = INTELLIGENCE_ENGINES.find((e) => e.slug === engineSlug)
  if (!engine) return []
  return [...engine.capabilities, ...engine.screens]
}
