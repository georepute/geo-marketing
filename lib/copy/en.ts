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

  meta: {
    description:
      'GeoRepute reconstructs how businesses are recognized, evaluated, recommended, trusted and chosen across AI engines, Google, digital channels and market perception.',
  },
} as const

export type Copy = typeof copy
