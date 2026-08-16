/* ============================================================================
   Core Commercial Copy System — brief §19, VERBATIM.
   Non-negotiable #6: use the exact headline copy from the doc's copy system.
   Do not paraphrase these strings. Every other UI string also lives here so
   the app stays localization-safe (plan §1, deviation 2).
   ========================================================================= */

export const copy = {
  /* --- §19 verbatim ------------------------------------------------------ */
  category: 'THE DECISION INTELLIGENCE OPERATING SYSTEM',
  heroPrimary: 'See Where Your Business Is Recognized, Recommended and Chosen.',
  heroContinuation: 'And where the decision goes somewhere else.',
  categoryPositioning:
    'Traditional platforms optimize channels. GeoRepute reconstructs decisions.',
  analyticsDisruption: 'Your analytics start too late.',
  aiRecognition: 'Do AI engines understand what your business is?',
  aiPresence: 'Are you present when customers ask AI whom to choose?',
  googleVsAi: 'A business can exist in AI and disappear in Google.',
  competitors:
    'See where competitors receive the decision before you receive the lead.',
  narrative:
    'When the market explains your category, whose language does it use?',
  searchEconomics: 'Know when paid search becomes too expensive to justify.',
  trust: 'Visibility creates attention. Trust creates selection.',
  opportunity: 'Not every visibility gap is worth fixing.',
  timing: 'The right decision at the wrong time is still the wrong decision.',
  action: 'The platform does not end with insight.',
  marketplace: 'Buy the intelligence you need.',
  partner: 'Build a recurring business around Decision Intelligence.',
  signatureExperience: 'Reconstruct the decision.',
  finalCta: 'Do not let the market decide what your business is without you.',

  /* --- Brief §5, home-section headlines (verbatim) ----------------------- */
  home: {
    heroCtaPrimary: 'Analyze My Business',
    heroCtaSecondary: 'Explore Intelligence Products',
    heroCtaEnterprise: 'Book an Executive Briefing',
    disruptionSub:
      'The customer decision often begins before the visit, click, lead or CRM event exists.',
    liveEntry: 'See what the market understands about your business.',
    liveEntrySub: 'Allow a domain entry with a controlled instant preview.',
    googleVsAiFull:
      'A business can exist in AI and disappear in Google. Or dominate Google and disappear when buyers ask AI.',
    googleVsAiSub:
      'Present the two discovery surfaces as separate commercial assets.',
    graph: 'One decision. Many signals. One explanation.',
    graphSub:
      'Show how AI, Google, paid acquisition, competitors, narrative, trust, geography and content connect.',
    engines: 'Twelve intelligence engines. One operating system.',
    enginesSub: 'Present each engine through the business question it answers.',
    marketplaceSub:
      'Customers can purchase a focused diagnostic without committing to the full platform.',
    competitorCapture:
      'See where competitors receive the decision before you receive the lead.',
    executive: 'Not more data. A decision position.',
    finalCtaSub: 'Choose the right route.',
    finalRoutes: [
      'Start My Analysis',
      'Buy an Intelligence Product',
      'Book an Enterprise Briefing',
      'Join the Partner Network',
    ],
  },

  /* ==========================================================================
     EXECUTIVE FRAME — product direction, "Every page must answer one
     executive question".

     The home page is not a feature tour. It is a sequence of seven executive
     questions, each answered in business language and each closing on a
     decision rather than an insight. Product names never lead; the question
     leads and the machinery is named underneath it.

     Vocabulary discipline lives here too. The direction bans "analytics",
     "reports", "SEO", "scans" and "dashboards" as self-description — the one
     survivor is §19's `analyticsDisruption`, which attacks the category
     rather than claiming membership of it.
     ======================================================================= */
  exec: {
    /* The seven questions, in the order the page asks them. */
    q1: 'Does AI know your business?',
    q2: 'Where are you losing decisions?',
    q3: 'Why is your competitor recommended instead?',
    q4: 'Why doesn’t AI trust you yet?',
    q5: 'How much time is left?',
    q6: 'What should happen next?',
    q7: 'What is the executive position?',

    /* Section-level labels. */
    prescriptionLabel: 'Executive Prescription',
    interventionLabel: 'Strategic Intervention',
    recoveryLabel: 'Decision Recovery Plan',
    windowLabel: 'Strategic Window',
    actionPlanLabel: 'Executive Action Plan',
    positionLabel: 'Executive Position',

    /* The three questions every KPI must answer. */
    kpiWhat: 'What it is',
    kpiWhy: 'Why it matters',
    kpiImpact: 'Business impact',

    /* Labels on the prescription block that closes every section. */
    executiveQuestion: 'Executive question',
    ownerLabel: 'Owner',
    deadlineLabel: 'Deadline',

    /* Standing explanation of the two composite measures, so a number is
       never displayed without the sentence that makes it mean something. */
    decisionHealthDefinition:
      'Decision Health measures whether AI systems can recognise, verify and safely recommend your business at the moment a buyer is choosing a supplier.',
    strategicWindowDefinition:
      'The Strategic Window is the period during which category language is still forming. Authority built inside it becomes the default answer. Authority built after it has to displace an incumbent recommendation, which costs materially more.',

    /* Standing caption under any composite figure. */
    everyFigureCaption:
      'Every figure carries its evidence, its confidence and the limits of what it can claim.',
  },

  /* --- Navigation (brief §4, restricted to routes built in v1) -----------
     Grouped rather than flat. Four unrelated links in a row is the shape of a
     brochure; an operating system navigates by what you are trying to do.
     Every item carries the question it answers, because brief §7 requires the
     product be presented through its business questions rather than features.
     -------------------------------------------------------------------- */
  nav: {
    engines: 'Intelligence Engines',
    marketplace: 'Intelligence Marketplace',
    methodology: 'Methodology',
    pricing: 'Pricing',
    signIn: 'Sign In',
    startAnalysis: 'Start Analysis',

    groups: [
      {
        id: 'platform',
        label: 'Platform',
        summary: 'The decision environment itself.',
        items: [
          {
            href: '/app/mission-control',
            label: 'Executive Mission Control',
            description:
              'Ten measures, one decision position, each opening its evidence.',
          },
          {
            href: '/app/reconstruct',
            label: 'Decision Reconstruction',
            description:
              'Enter a domain, pick a commercial question, watch the decision rebuild.',
          },
          {
            href: '/app/campaign-readiness',
            label: 'Campaign Readiness',
            description:
              'Should we launch this campaign today? Assesses the business, not the campaign.',
          },
          {
            href: '/app/narrative',
            label: 'Narrative Intelligence',
            description:
              'What story is the market telling, and how is it influencing decisions?',
          },
          {
            href: '/app/actions',
            label: 'Strategic Action Center',
            description:
              'Prioritised interventions with owners, deadlines and measurement.',
          },
          {
            href: '/election-intelligence',
            label: 'Election Intelligence',
            description:
              'Which narratives are moving the electorate, who is carrying them, and what must change.',
          },
        ],
        feature: {
          eyebrow: 'Signature experience',
          title: 'Reconstruct the decision.',
          body: 'Ten surfaces, one commercial question, from what each engine understood to what must change next.',
          href: '/app/reconstruct',
          cta: 'Open the reconstruction',
        },
      },
      {
        id: 'engines',
        label: 'Intelligence Engines',
        summary: 'Twelve engines. Four built in this environment.',
        items: [
          {
            href: '/engines/ai-recognition',
            label: 'AI Recognition',
            description: 'Do AI engines understand who the business is?',
          },
          {
            href: '/engines/google-vs-ai',
            label: 'Google vs AI Visibility',
            description:
              'Does it exist consistently across both discovery surfaces?',
          },
          {
            href: '/engines/competitor-decision',
            label: 'Competitor Decision',
            description: 'Who receives the decision instead, and why?',
          },
          {
            href: '/engines/action',
            label: 'Action Intelligence',
            description: 'What must happen next, by whom and by when?',
          },
        ],
        allHref: '/engines',
        allLabel: 'See all twelve engines',
      },
      {
        id: 'marketplace',
        label: 'Marketplace',
        summary: 'Intelligence for questions most businesses never measure.',
        /* Navigates the ecosystem by category rather than by price tier. The
           tiers still exist and still describe who is buying, but they are a
           commercial ladder — they say nothing about what can be known, which
           is what someone opening this menu is trying to find out. */
        items: [
          {
            href: '/marketplace/category/ai-visibility-intelligence',
            label: 'AI Visibility Intelligence',
            description:
              'Does AI know the business exists, and what does it think it is?',
          },
          {
            href: '/marketplace/category/competitive-intelligence',
            label: 'Competitive Intelligence',
            description: 'Who receives the decision instead, and what do they have?',
          },
          {
            href: '/marketplace/category/executive-intelligence',
            label: 'Executive Intelligence',
            description: 'What is it worth, and what happens next?',
          },
        ],
        allHref: '/marketplace',
        allLabel: 'See the full intelligence ecosystem',
      },
    ],

    /* `flag` names an entry in lib/flags.ts. An item carrying one is only
       rendered while that flag is on — this is how doc §4 removes Pricing
       from the navigation without deleting the route. */
    flat: [
      /* Doc §10: "Add a primary navigation item: How It Works." It leads the
         flat group because it is the product story, not a reference page. */
      { href: '/how-it-works', label: 'How It Works' },
      { href: '/methodology', label: 'Methodology' },
      { href: '/pricing', label: 'Pricing', flag: 'pricing' },
    ],
  },

  /* ==========================================================================
     COMMERCE — doc §4 and §7.

     Public pricing is withheld until the final structure exists. These are
     the strings that stand in its place: a purchase surface without a number
     still has to tell the reader how to proceed, and "contact us" is not an
     answer to "what does this cost".
     ======================================================================= */
  commerce: {
    briefingCta: 'Book an Intelligence Briefing',
    briefingCtaShort: 'Book a briefing',
    termsOnRequest: 'Commercial terms are issued on request.',
    termsOnRequestLong:
      'Scope, depth and commercial terms are set against the questions you need answered. Both are confirmed in the briefing.',
  },

  /* --- Briefing and booking (doc §5) ------------------------------------- */
  briefing: {
    eyebrow: 'Executive briefing',
    title: 'See the decision environment your business is being judged in.',
    sub: 'A working session against your own market, not a product walkthrough. We reconstruct one commercial decision in your category and show you what determined it.',
    covers: 'What the session covers',
    coversItems: [
      'How AI engines currently describe your business, engine by engine.',
      'One real buying decision in your category, reconstructed end to end.',
      'Which competitor receives that decision today, and the evidence putting them there.',
      'The gaps between the two, ranked by commercial consequence.',
      'What would have to change, in what order, and how movement would be measured.',
    ],
    who: 'Who it is for',
    whoBody:
      'Executive teams accountable for market position, and the strategists advising them. No preparation is required.',
    duration: '45 minutes',
    durationLabel: 'Duration',
    formatLabel: 'Format',
    format: 'Video call',
    costLabel: 'Cost',
    cost: 'None',

    /* --- The scheduling panel (doc §5) ---------------------------------- */
    scheduleLabel: 'Arrange the session',
    pickDate: 'Choose a date',
    pickTime: 'Choose a time',
    noTimes: 'No times available on this date.',
    loadingTimes: 'Checking availability…',
    timeZoneNote: 'Times shown in your local time zone',
    noticeNote: 'The earliest available session is 48 hours from now.',
    nameLabel: 'Full name',
    emailLabel: 'Work email',
    orgLabel: 'Organisation',
    notesLabel: 'What would you like the session to cover?',
    optional: 'Optional',
    submit: 'Confirm the briefing',
    submitting: 'Confirming…',
    back: 'Change time',

    confirmedTitle: 'The briefing is confirmed.',
    confirmedBody:
      'A calendar invitation is on its way to your inbox, and to ours. Reschedule and cancel links are in that email.',
    confirmedAdd: 'Booked for',

    /* Failure states. Each says what happened and what to do next, because
       "something went wrong" on a booking form loses the meeting. */
    errorConflict:
      'That time was taken while you were filling this in. Choose another and nothing else will be lost.',
    errorInvalid: 'Please check the details and try again.',
    errorUpstream:
      'The calendar could not be reached. Try again in a moment, or email us and we will arrange it directly.',

    /* Shown when CAL_API_KEY is absent — see lib/booking/config.ts. */
    unconfiguredTitle: 'Scheduling opens shortly.',
    unconfiguredBody:
      'In the meantime, start the reconstruction on your own domain. The briefing begins from whatever it returns.',
  },

  /* --- Readout anatomy section labels (brief §13) ------------------------ */
  readout: {
    executiveTruth: 'Executive Truth',
    businessMeaning: 'Business Meaning',
    evidence: 'Evidence',
    connectedSignals: 'Connected Signals',
    competitorContext: 'Competitor Context',
    commercialExposure: 'Commercial Exposure',
    timing: 'Timing',
    trend: 'Trend',
    prescription: 'Prescription',
    expectedMovement: 'Expected Movement',
    ownerDeadline: 'Owner and Deadline',
    measurement: 'Measurement',
    showEvidence: 'Show evidence',
    hideEvidence: 'Hide evidence',
    howDetermined: 'How this was determined',
  },

  /* --- Confidence vocabulary (brief §15.3, verbatim definitions) --------- */
  confidence: {
    high: {
      label: 'High confidence',
      definition:
        'Multiple current and reliable evidence sources support the conclusion.',
    },
    medium: {
      label: 'Medium confidence',
      definition: 'Evidence is meaningful but partially estimated or incomplete.',
    },
    directional: {
      label: 'Directional',
      definition: 'Useful for prioritization, not an audited or verified fact.',
    },
    'insufficient-history': {
      label: 'Insufficient history',
      definition:
        'The platform must withhold predictive conclusions until enough evidence exists.',
    },
  },

  /* --- Exposure language. Non-negotiable #5: never "confirmed lost
         revenue". These are the only permitted framings. ----------------- */
  exposure: {
    label: 'Directional commercial exposure',
    caption: 'Directional estimate — not confirmed lost revenue.',
    assumptionsLabel: 'Assumptions',
    formulaLabel: 'Model',
    formula: 'Demand × Decision Gap × Estimated Conversion × Average Deal Value',
    limitation:
      'All values are shown as ranges. No value is described as confirmed lost revenue. Every model exposes its assumptions and data boundaries.',
  },

  /* --- Role lens (brief §16, role-based depth) --------------------------- */
  roleLens: {
    label: 'Depth',
    executive: 'Executive',
    analyst: 'Analyst',
    operator: 'Operator',
    hint: 'Changes how much detail opens by default. No data is hidden.',
  },

  /* ==========================================================================
     ACCESSIBLE NAMES — doc §8.

     These are read aloud rather than seen, which is exactly why they were the
     strings most likely to be left in English by a translation pass that
     worked from the visible page. A screen-reader user navigating the Hebrew
     site should not meet an English landmark.
     ======================================================================= */
  a11y: {
    skipToContent: 'Skip to content',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    navigate: 'Navigate',
    primaryNav: 'Primary',
    mobileNav: 'Mobile',
    footerNav: 'Footer',
    breadcrumb: 'Breadcrumb',
  },

  /* ==========================================================================
     THE CLOSED LOOP — requirements doc §9 and §10.

     "This should be treated as a core part of the GeoRepute website and
     product story, not as a secondary feature."

     The argument, in one line: analysis is not the product. The product is a
     cycle that diagnoses, decides, executes, measures its own execution
     against the original diagnosis, and uses the result to decide what
     happens next.
     ======================================================================= */
  loop: {
    navLabel: 'How It Works',
    eyebrow: 'The GeoRepute closed loop',
    title: 'From Intelligence to Execution. From Execution Back to Intelligence.',
    lede: 'GeoRepute doesn’t just analyze what is happening. It understands why it is happening, decides what needs to change, executes the strategy, measures what changed — and uses the result to decide what happens next.',

    /* The problem the loop answers. */
    fragmentedLabel: 'The disconnected model',
    fragmentedLede: 'Most businesses operate through disconnected systems.',
    fragmentedItems: [
      'One platform measures Google.',
      'Another monitors AI.',
      'Another analyzes competitors.',
      'Someone builds the strategy.',
      'Someone else creates the content.',
      'Another system distributes it.',
      'Analytics measures what happened afterward.',
    ],
    fragmentedClose:
      'Different systems. Different teams. Different datasets. Different objectives. And often no direct connection between the original diagnosis and the final result.',

    connectedLede: 'GeoRepute connects the entire decision cycle.',
    connectedBody:
      'It starts with deep intelligence across the business, market, competitors, customers, Google, AI engines and the wider digital environment. It turns that intelligence into a strategy built around defined business objectives. Then it creates and distributes the content and media required to execute that strategy. Then it measures whether those actions actually changed the signals they were designed to change. And what the system learns becomes the intelligence for the next cycle.',

    cycle: 'PLAN → DO → CHECK → ACT → REPEAT',
    cycleSub: 'One continuous intelligence-to-execution loop.',

    /* --- The four stages ------------------------------------------------ */
    stages: [
      {
        id: 'plan',
        index: '01',
        name: 'PLAN',
        headline: 'Understand the reality before deciding what to do.',
        lede: 'Every cycle begins with deep diagnosis. GeoRepute scans and connects intelligence across the business, its competitors, its market and the digital environments influencing customer decisions.',
        signalsLabel: 'The system analyzes signals across',
        signals: [
          'AI Engines',
          'Google',
          'Search',
          'Competitors',
          'Market',
          'Digital Presence',
          'Authority',
          'Trust',
          'Narratives',
          'Content',
          'Customer Questions',
          'Decision Journeys',
          'Digital Sources',
          'Languages',
          'Connected Business Data',
        ],
        connective:
          'It doesn’t look at these signals separately. It connects them to reconstruct the bigger picture.',
        question: 'What does the market actually understand about your business?',
        determinesLabel: 'GeoRepute determines',
        determines: [
          'How the business is understood and represented',
          'What AI engines know about it',
          'When AI recommends it — and when it doesn’t',
          'What Google shows at critical moments',
          'What customers encounter before they ever reach the website',
          'Which questions influence the buying decision',
          'Where the business enters the consideration set',
          'Where it disappears',
          'Which competitors receive the decision instead',
          'Why those competitors are being selected',
          'Which sources and evidence strengthen them',
          'Which narratives shape the category',
          'Where trust and authority are missing',
          'Where information gaps exist',
          'Which audiences are being reached',
          'Which opportunities remain open',
          'Which threats are emerging',
          'What is changing in the market',
          'And which signals must change to move the business toward its objective',
        ],
        outcomeLabel: 'Intelligence becomes strategy.',
        outcome:
          'The client defines the objectives. GeoRepute determines the path. The system turns the diagnosis into a focused strategy and prioritized execution plan built around those objectives.',
        notThis: '“What should we post this month?”',
        butThis: [
          'What needs to change?',
          'Why does it need to change?',
          'Who needs to encounter it?',
          'Where should they encounter it?',
          'What needs to exist there?',
          'And which measurable signal should move if the strategy works?',
        ],
      },
      {
        id: 'do',
        index: '02',
        name: 'DO',
        headline:
          'Don’t create what the business wants to say. Create what the customer needs to encounter.',
        lede: 'This is where intelligence becomes execution. GeoRepute does not start with a blank content calendar. It starts with the gaps discovered during PLAN.',
        signalsLabel: 'Published across connected digital assets',
        signals: [
          'Website',
          'Social platforms',
          'Articles',
          'Business profiles',
          'Content environments',
          'Connected publishing channels',
        ],
        connective:
          'The system understands what is missing between the business and the decision it wants to influence.',
        question: 'What must the customer encounter to decide differently?',
        determinesLabel: 'It determines',
        determines: [
          'What information customers are missing',
          'Which questions need to be answered',
          'Which narratives need to be created, strengthened or corrected',
          'Which objections need to be addressed',
          'Which trust signals need to exist',
          'Which authority gaps need to be closed',
          'What content is required',
          'What media is required',
          'Which format fits the objective',
          'Which audience needs to encounter it',
          'In which language',
          'At which stage of the decision journey',
          'On which digital property or channel',
          'And in what sequence',
        ],
        outcomeLabel: 'Then GeoRepute executes.',
        outcome:
          'The system generates the required content and media according to the strategy and distributes and publishes it across the connected digital assets of the business or project. Each asset exists for a reason. Each piece of content is connected to an identified gap. Each action is connected to a defined objective. Each objective is connected to a signal the system expects to change.',
        notThis: 'Content is the strategy.',
        butThis: ['Content is the execution layer of the intelligence.'],
      },
      {
        id: 'check',
        index: '03',
        name: 'CHECK',
        headline: 'Don’t measure what was published. Measure what changed.',
        lede: 'Publishing is not success. Views are not success. Completing an action is not success. The question is whether the action changed the reason it was created in the first place.',
        signalsLabel: 'The system compares',
        signals: ['BEFORE', 'ACTION', 'AFTER'],
        connective:
          'After execution, GeoRepute returns to the environment and measures it again. It checks whether the targeted signals actually moved.',
        question: 'Did the signals this action was built to move actually move?',
        determinesLabel: 'It asks',
        determines: [
          'Did AI understanding change?',
          'Did recommendation presence increase?',
          'Did the business enter decisions where it was previously absent?',
          'Did authority strengthen?',
          'Did trust improve?',
          'Did the narrative move?',
          'Did Google visibility change?',
          'Did customers begin encountering the missing information?',
          'Did the competitive gap narrow?',
          'Is the same competitor still receiving the decision?',
          'Did the market respond as expected?',
        ],
        outcomeLabel:
          'GeoRepute measures the impact of its own execution against the original diagnosis.',
        outcome:
          'That creates a direct connection between what the system discovered, what it decided, what it executed and what actually changed.',
        notThis: 'Completing the action.',
        butThis: ['Moving the signal the action was created to move.'],
      },
      {
        id: 'act',
        index: '04',
        name: 'ACT',
        headline: 'The result becomes the intelligence for the next decision.',
        lede: 'The market has now changed. So the strategy cannot remain static. GeoRepute feeds the new results back into its intelligence layer.',
        signalsLabel: 'Based on that new reality, GeoRepute can adjust',
        signals: [
          'Strategy',
          'Priorities',
          'Narratives',
          'Messages',
          'Content',
          'Media',
          'Distribution',
          'Channels',
          'Timing',
          'Target signals',
          'The next actions',
        ],
        connective:
          'What works can be reinforced. What fails to produce the expected movement can be changed. New opportunities enter the plan. New risks are addressed.',
        question: 'What should happen next, and why?',
        determinesLabel: 'The system determines',
        determines: [
          'What worked.',
          'What didn’t.',
          'What moved.',
          'What didn’t move enough.',
          'What changed in the market.',
          'What competitors changed.',
          'What new gaps appeared.',
          'And what should happen next.',
        ],
        outcomeLabel: 'And the system runs again.',
        outcome:
          'PLAN → DO → CHECK → ACT → PLAN. The output of one cycle becomes the intelligence of the next.',
        notThis: 'A strategy built once.',
        butThis: ['A strategy that re-decides every cycle.'],
      },
    ],

    /* --- The seven-step loop, the animated centrepiece ------------------- */
    stepsLabel: 'The closed loop',
    stepsSub: 'One system. One continuous learning cycle.',
    steps: [
      {
        n: '1',
        name: 'UNDERSTAND',
        body: 'Deep diagnosis of the business, market, competitors and decision environment.',
      },
      {
        n: '2',
        name: 'DECIDE',
        body: 'Turn intelligence into a strategy aligned with defined objectives.',
      },
      {
        n: '3',
        name: 'CREATE',
        body: 'Generate the content and media required by the strategy.',
      },
      {
        n: '4',
        name: 'DISTRIBUTE',
        body: 'Publish across connected digital assets and channels.',
      },
      {
        n: '5',
        name: 'MEASURE',
        body: 'Re-scan the environment and measure what actually changed.',
      },
      {
        n: '6',
        name: 'LEARN',
        body: 'Understand which actions moved the targeted signals and which did not.',
      },
      {
        n: '7',
        name: 'CORRECT',
        body: 'Adjust strategy, content, distribution and priorities.',
      },
    ],
    stepsClose: 'Every cycle makes the next cycle more informed.',

    /* --- Before / after, doc §9 CHECK. Demonstration figures. ------------ */
    movementLabel: 'Before → Action → After',
    movementCaption:
      'Illustrative movement across one cycle. Demonstration data — not a customer result.',
    movementColumns: ['Signal', 'Before', 'After', 'Target'],
    movement: [
      { signal: 'AI Recognition', before: '38', after: '51', target: '55' },
      { signal: 'Authority', before: '28', after: '39', target: '45' },
      { signal: 'Decision Presence', before: '7%', after: '14%', target: '19%' },
      { signal: 'Recommendation Share', before: '4.2%', after: '8.1%', target: '11%' },
      { signal: 'Narrative Ownership', before: '12%', after: '18%', target: '24%' },
    ],

    /* --- Why this changes the model ------------------------------------- */
    whyLabel: 'Why this changes the model',
    whyTraditionalLabel: 'The traditional model is fragmented',
    whyTraditional:
      'Research → Strategy → Agency → Content → Distribution → Analytics → Meeting → New Strategy',
    whyClosedLabel: 'GeoRepute closes the gap',
    whyClosed:
      'Intelligence → Decision → Execution → Measurement → Learning → Correction',
    whyBody:
      'The same intelligence that identifies the problem guides the strategy. The strategy determines what gets created. The execution is measured against the original objective. And the result determines what the system does next.',

    /* --- Not another content engine ------------------------------------- */
    notEngineLabel: 'Not another content engine',
    notEngineHeadline: 'The content is an output. The intelligence is the brain.',
    notEngineBody:
      'GeoRepute is not designed to produce more content. It is designed to determine what needs to exist in the market to influence the next decision.',
    notEngineItems: [
      'Sometimes that requires content.',
      'Sometimes authority.',
      'Sometimes evidence.',
      'Sometimes a narrative correction.',
      'Sometimes answering questions customers cannot currently resolve.',
      'Sometimes strengthening a specific digital property.',
      'Sometimes closing a competitive gap.',
    ],
    notEngineClose:
      'The system decides from the intelligence. Then it executes what the strategy requires.',

    /* --- The difference -------------------------------------------------- */
    differenceLabel: 'The difference',
    difference: [
      { term: 'Analytics', says: 'tells you what happened.' },
      { term: 'Intelligence', says: 'tells you why.' },
      { term: 'Strategy', says: 'tells you what should change.' },
      { term: 'Execution', says: 'makes the change.' },
      { term: 'Measurement', says: 'tells you whether it worked.' },
    ],
    differenceClose: 'GeoRepute connects all five — and runs the cycle again.',

    /* --- Living strategy -------------------------------------------------- */
    livingLabel: 'From a snapshot to a living strategy',
    livingItems: [
      'Markets move.',
      'Competitors move.',
      'Customer questions change.',
      'Google changes.',
      'AI systems change.',
      'Narratives change.',
      'The information surrounding a business changes.',
    ],
    livingBody:
      'A strategy built once cannot continuously respond to a market that never stops moving. GeoRepute turns strategy from a static document into a living system.',
    livingVerbs: [
      'Observes.',
      'Understands.',
      'Decides.',
      'Executes.',
      'Measures.',
      'Learns.',
      'Adapts.',
    ],

    /* --- Close ------------------------------------------------------------ */
    ctaHeadline: 'See the closed loop in action.',
    ctaBody:
      'Don’t just see another dashboard. See how GeoRepute moves from intelligence to strategy, from strategy to execution, and from execution back into measurable intelligence.',
    ctaPrimary: 'Book a Live Demo',
    ctaSecondary: 'See How GeoRepute Works',

    /* Homepage band — the concise version, immediately after the hero. */
    homeEyebrow: 'The closed loop',
    homeHeadline: 'Analysis is where most platforms stop. It is where this one starts.',
    homeSub:
      'GeoRepute diagnoses the decision environment, turns that into a strategy, executes it, measures whether the signals it targeted actually moved, and uses the result to decide what happens next.',
    homeCta: 'See how the loop runs',
  },

  /* ==========================================================================
     ELECTION INTELLIGENCE — requirements doc §3.

     "This should be presented as a serious intelligence solution."

     The same machinery as the commercial product, pointed at a different
     decision. A voter choosing a candidate and a buyer choosing a supplier
     are both deciding under the influence of narratives they did not author,
     carried by sources they did not choose, in languages the campaign may
     not be watching.

     EVERY EXAMPLE ON THIS SURFACE IS FICTIONAL. The doc is explicit: no real
     political client data, no confidential information. The seeded subject
     (lib/seed/election.ts) is an invented county race, labelled as such
     wherever it renders.
     ======================================================================= */
  election: {
    navLabel: 'Election Intelligence',
    eyebrow: 'Real-time election intelligence',
    title: 'Know what is moving the election — and what will move it back.',
    lede: 'GeoRepute reconstructs how a political position is actually formed: which narratives are circulating, who is carrying them, which audiences are moving, and what has to change to move them back.',

    /* The doc's key message, stated where it cannot be missed. */
    keyMessageLabel: 'The distinction that matters',
    keyMessageNot: 'The system does not only show what is happening.',
    keyMessage:
      'It explains why the political position is changing, who is influencing it, where support is being lost or gained, and what should be done now to change the direction.',

    /* --- Audiences (doc §3) --------------------------------------------- */
    forLabel: 'Built for',
    audiences: [
      {
        name: 'National elections',
        body: 'Country-scale narrative and perception intelligence across every language and region in play.',
      },
      {
        name: 'Local elections',
        body: 'District-level resolution, where a few thousand persuadable voters decide the seat.',
      },
      {
        name: 'Political parties',
        body: 'Party-level perception tracked separately from the candidates who carry it.',
      },
      {
        name: 'Candidates',
        body: 'How a candidate is understood, described and recommended across the surfaces voters actually use.',
      },
      {
        name: 'Campaign headquarters',
        body: 'One operational picture the whole campaign works from, updated as the environment moves.',
      },
      {
        name: 'Political strategists',
        body: 'The evidence behind a strategic call, with the assumptions and limits stated.',
      },
      {
        name: 'Election war rooms',
        body: 'Live narrative movement, emerging risks and prioritised responses during the decisive window.',
      },
    ],

    /* --- Capability clusters (doc §3, every listed capability) ----------- */
    capabilitiesLabel: 'What the system analyzes',
    capabilitiesSub:
      'Every capability below is a question the campaign can put to the system and get an evidenced answer to.',
    capabilities: [
      {
        id: 'perception',
        name: 'Perception and narrative',
        question: 'What is the electorate actually being told about this candidate?',
        items: [
          'Public perception',
          'Political narratives',
          'Positive and negative narratives',
          'Narrative movement',
          'Candidate and party perception',
        ],
      },
      {
        id: 'opponent',
        name: 'Opponent and influence',
        question: 'Who is strengthening the position, and who is damaging it?',
        items: [
          'Competitor and opponent narratives',
          'Who is strengthening a candidate or party',
          'Who is damaging them',
          'Media and online information sources',
          'Social and digital signals',
        ],
      },
      {
        id: 'audience',
        name: 'Audience movement',
        question: 'Which voters are moving, in which direction, and over what?',
        items: [
          'Which audiences are moving closer',
          'Which audiences are moving away',
          'Which issues are changing voter perception',
        ],
      },
      {
        id: 'discovery',
        name: 'Search and AI visibility',
        question: 'What does a voter find when they look this candidate up?',
        items: [
          'Google visibility',
          'AI engine visibility and recommendations',
          'What each engine leads with',
          'Where the accounts diverge from one another',
        ],
      },
      {
        id: 'language',
        name: 'Multilingual intelligence',
        question: 'Is the same candidate being described differently in each language?',
        items: [
          'Multilingual political intelligence',
          'Narrative gaps between languages and audiences',
        ],
      },
      {
        id: 'risk',
        name: 'Risk and opportunity',
        question: 'What is emerging, and what is still unclaimed?',
        items: [
          'Risks and emerging threats',
          'Opportunities',
          'Unowned issues available to the campaign',
        ],
      },
      {
        id: 'action',
        name: 'Prioritized action',
        question: 'What should happen now, and how will we know it worked?',
        items: [
          'Prioritized actions',
          'What should be done immediately',
          'Who should be responsible',
          'What needs to change',
          'How movement should be measured over time',
        ],
      },
    ],

    /* --- Product screens (doc §3, "Real Product Screens") ---------------- */
    screensLabel: 'Inside the system',
    screensSub:
      'The Election Intelligence surfaces, on demonstration data. No real candidate, party or campaign appears anywhere on this page.',

    /* --- Live demo pointer ----------------------------------------------- */
    liveLabel: 'See it running',
    liveHeadline: 'Election Mode is live in this environment.',
    liveBody:
      'Narrative Intelligence switches subject from a commercial organisation to a fictional county race, so the structure of the analysis can be examined end to end before any real campaign data is involved.',
    liveCta: 'Open Election Mode',

    /* --- Confidentiality, stated plainly --------------------------------- */
    confidentialLabel: 'On confidentiality',
    confidentialBody:
      'Campaign intelligence is handled as campaign intelligence. No client race, candidate or dataset appears in any public material, demonstration or reference. Every example on this page is an invented subject built to show the shape of the analysis.',

    /* --- CTAs (doc §3, verbatim) ----------------------------------------- */
    ctaHeadline: 'The position is already moving. The question is in which direction.',
    ctaPrimary: 'See What Is Moving the Election',
    ctaSecondary: 'Book an Election Intelligence Briefing',
  },

  /* --- Product shell (doc §8: dashboards are translated too) ------------- */
  appNav: {
    ariaLabel: 'Product',
    exit: 'Exit',
    observed: 'Observed',
    environment: 'Seeded demonstration environment · Methodology GEON-2.4',
    methodologyLink: 'How these conclusions are reached',
    items: [
      { href: '/app/mission-control', label: 'Mission Control' },
      { href: '/app/reconstruct', label: 'Decision Reconstruction' },
      { href: '/app/campaign-readiness', label: 'Campaign Readiness' },
      { href: '/app/narrative', label: 'Narrative Intelligence' },
      { href: '/app/actions', label: 'Action Center' },
    ],
  },

  /* --- Footer (doc §8: every menu is translated) -------------------------- */
  footer: {
    ariaLabel: 'Footer',
    limitationLead: 'Directional modelling.',
    limitationTail:
      'Commercial figures are estimates for prioritisation, not audited financial statements.',
    rights: 'GeoRepute. Decision Intelligence Infrastructure.',
    environment: 'Demonstration environment · Seeded data',
    photography: 'Photography via',
    columns: [
      {
        title: 'Product',
        links: [
          { href: '/app/mission-control', label: 'Executive Mission Control' },
          { href: '/app/reconstruct', label: 'Decision Reconstruction' },
          { href: '/app/actions', label: 'Action Center' },
          { href: '/engines', label: 'Intelligence Engines' },
          { href: '/briefing', label: 'Book a Briefing' },
          { href: '/pricing', label: 'Pricing and Plans', flag: 'pricing' },
        ],
      },
      {
        title: 'Intelligence',
        links: [
          { href: '/marketplace', label: 'Intelligence Marketplace' },
          { href: '/engines/ai-recognition', label: 'AI Recognition' },
          { href: '/engines/google-vs-ai', label: 'Google vs AI Visibility' },
          { href: '/engines/competitor-decision', label: 'Competitor Decision' },
          { href: '/engines/action', label: 'Action Intelligence' },
        ],
      },
      {
        title: 'Methodology',
        links: [
          { href: '/methodology#geon', label: 'The GEON framework' },
          { href: '/methodology#sources', label: 'Evidence sources' },
          { href: '/methodology#confidence', label: 'Confidence model' },
          { href: '/methodology#model', label: 'Financial model' },
          { href: '/methodology#limitations', label: 'Limitations' },
        ],
      },
      {
        title: 'Company',
        links: [
          { href: '/blog', label: 'Intelligence Notes' },
          { href: '/signin', label: 'Sign In' },
          { href: '/legal#privacy', label: 'Privacy' },
          { href: '/legal#terms', label: 'Terms of service' },
          { href: '/legal#data', label: 'Data processing' },
          { href: '/legal#security', label: 'Security' },
        ],
      },
    ],
  },

  /* --- Blog (doc §8) ------------------------------------------------------ */
  blog: {
    eyebrow: 'Intelligence notes',
    title: 'Intelligence Notes',
    lede: 'Writing on how businesses are recognised, evaluated, recommended and chosen — and on what can be done about it.',
    readTime: 'min read',
    more: 'More from Intelligence Notes',
    empty: 'The first articles are being prepared.',
    ctaBody:
      'Every argument on this site can be run against your own market.',
  },

  /* --- Partner ecosystem (doc §8) ---------------------------------------- */
  ecosystem: {
    label: 'Ecosystem',
    partners: [
      {
        name: 'GINTEX',
        href: 'https://gintex.com',
        description: 'The group behind GeoRepute.',
      },
      {
        name: 'copyup.ai',
        href: 'https://copyup.ai',
        description: 'Content and media execution.',
      },
      {
        name: 'onlineperception.ai',
        href: 'https://onlineperception.ai',
        description: 'Perception measurement.',
      },
    ],
  },

  /* --- Language switcher (doc §8) ---------------------------------------- */
  language: {
    label: 'Language',
    choose: 'Choose a language',
    /* Announced with the endonym, which is never translated — the point of
       listing a language in its own script is that it is recognisable to
       someone who cannot read the current one. */
    current: 'Current language',
  },

  meta: {
    description:
      'GeoRepute reconstructs how businesses are recognized, evaluated, recommended, trusted and chosen across AI engines, Google, digital channels and market perception.',
  },
} as const

export type Copy = typeof copy
