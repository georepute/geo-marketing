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
        summary: 'Buy one diagnostic, or monitor continuously.',
        items: [
          {
            href: '/marketplace',
            label: 'Entry scans',
            description:
              'One focused examination of a single business question.',
          },
          {
            href: '/marketplace/decision-journey-diagnostic',
            label: 'Advanced diagnostics',
            description:
              'Why a condition exists, with a structured comparison.',
          },
          {
            href: '/marketplace/executive-intelligence-brief',
            label: 'Executive briefs',
            description:
              'A board-ready position with risk, timing and prescribed actions.',
          },
        ],
        allHref: '/marketplace',
        allLabel: 'Browse all intelligence products',
      },
    ],

    flat: [
      { href: '/methodology', label: 'Methodology' },
      { href: '/pricing', label: 'Pricing' },
    ],
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
