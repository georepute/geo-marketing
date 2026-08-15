import type { DictionaryMeta, PartialDictionary } from '../types'

/* ============================================================================
   French (fr) — LTR.

   Translated against lib/i18n/GLOSSARY.md. Vouvoiement throughout. French has
   a genuine term for this category — « intelligence décisionnelle » — so the
   English is not borrowed, which also keeps the copy clear of the
   marketing-software register requirements doc §9 bans.

   NOT YET REVIEWED BY A NATIVE SPEAKER.
   ========================================================================= */

export const meta: DictionaryMeta = {
  reviewed: false,
  notes:
    'Complete first-pass translation, vouvoiement. Requires native review against lib/i18n/GLOSSARY.md before launch.',
}

export const dictionary: PartialDictionary = {
  /* --- §19 core commercial copy ---------------------------------------- */
  category: 'LE SYSTÈME D’EXPLOITATION DE L’INTELLIGENCE DÉCISIONNELLE',
  heroPrimary:
    'Voyez où votre entreprise est reconnue, recommandée et choisie.',
  heroContinuation: 'Et où la décision va ailleurs.',
  categoryPositioning:
    'Les plateformes traditionnelles optimisent des canaux. GeoRepute reconstruit des décisions.',
  analyticsDisruption: 'Vos analyses commencent trop tard.',
  aiRecognition: 'Les moteurs d’IA comprennent-ils ce qu’est votre entreprise ?',
  aiPresence:
    'Êtes-vous présent lorsque les clients demandent à l’IA qui choisir ?',
  googleVsAi: 'Une entreprise peut exister dans l’IA et disparaître dans Google.',
  competitors:
    'Voyez où vos concurrents obtiennent la décision avant que vous n’obteniez le contact.',
  narrative:
    'Quand le marché explique votre catégorie, de quel langage se sert-il ?',
  searchEconomics:
    'Sachez quand la recherche payante devient trop coûteuse pour être justifiée.',
  trust: 'La visibilité crée l’attention. La confiance crée la sélection.',
  opportunity: 'Tout écart de visibilité ne mérite pas d’être comblé.',
  timing:
    'La bonne décision au mauvais moment reste une mauvaise décision.',
  action: 'La plateforme ne s’arrête pas à l’analyse.',
  marketplace: 'Achetez l’intelligence dont vous avez besoin.',
  partner:
    'Construisez une activité récurrente autour de l’intelligence décisionnelle.',
  signatureExperience: 'Reconstruisez la décision.',
  finalCta:
    'Ne laissez pas le marché décider de ce qu’est votre entreprise sans vous.',

  /* --- Home ------------------------------------------------------------- */
  home: {
    heroCtaPrimary: 'Analyser mon entreprise',
    heroCtaSecondary: 'Explorer les produits d’intelligence',
    heroCtaEnterprise: 'Réserver un briefing de direction',
    disruptionSub:
      'La décision du client commence souvent avant qu’une visite, un clic, un contact ou un enregistrement CRM n’existe.',
    liveEntry: 'Voyez ce que le marché comprend de votre entreprise.',
    liveEntrySub: 'Saisissez un domaine et obtenez un aperçu immédiat et maîtrisé.',
    googleVsAiFull:
      'Une entreprise peut exister dans l’IA et disparaître dans Google. Ou dominer Google et disparaître quand les acheteurs interrogent l’IA.',
    googleVsAiSub:
      'Deux surfaces de découverte, comme deux actifs commerciaux distincts.',
    graph: 'Une décision. De nombreux signaux. Une explication.',
    graphSub:
      'Comment l’IA, Google, l’acquisition payante, les concurrents, le récit, la confiance, la géographie et le contenu se relient.',
    engines: 'Douze moteurs d’intelligence. Un système d’exploitation.',
    enginesSub:
      'Chaque moteur est présenté par la question métier à laquelle il répond.',
    marketplaceSub:
      'Un diagnostic ciblé peut être acheté sans s’engager sur la plateforme complète.',
    competitorCapture:
      'Voyez où vos concurrents obtiennent la décision avant que vous n’obteniez le contact.',
    executive: 'Pas plus de données. Une position de décision.',
    finalCtaSub: 'Choisissez la bonne voie.',
    finalRoutes: [
      'Lancer mon analyse',
      'Acheter un produit d’intelligence',
      'Réserver un briefing entreprise',
      'Rejoindre le réseau de partenaires',
    ],
  },

  /* --- Executive frame -------------------------------------------------- */
  exec: {
    q1: 'L’IA connaît-elle votre entreprise ?',
    q2: 'Où perdez-vous des décisions ?',
    q3: 'Pourquoi votre concurrent est-il recommandé à votre place ?',
    q4: 'Pourquoi l’IA ne vous fait-elle pas encore confiance ?',
    q5: 'Combien de temps reste-t-il ?',
    q6: 'Que doit-il se passer ensuite ?',
    q7: 'Quelle est la position de direction ?',

    prescriptionLabel: 'Prescription de direction',
    interventionLabel: 'Intervention stratégique',
    recoveryLabel: 'Plan de reconquête des décisions',
    windowLabel: 'Fenêtre stratégique',
    actionPlanLabel: 'Plan d’action de direction',
    positionLabel: 'Position de direction',

    kpiWhat: 'De quoi il s’agit',
    kpiWhy: 'Pourquoi c’est important',
    kpiImpact: 'Impact commercial',

    executiveQuestion: 'Question de direction',
    ownerLabel: 'Responsable',
    deadlineLabel: 'Échéance',

    decisionHealthDefinition:
      'La santé décisionnelle mesure si les systèmes d’IA peuvent reconnaître, vérifier et recommander votre entreprise en toute sûreté au moment où un acheteur choisit un fournisseur.',
    strategicWindowDefinition:
      'La fenêtre stratégique est la période pendant laquelle le langage de la catégorie se forme encore. L’autorité construite à l’intérieur devient la réponse par défaut. Celle construite après doit déloger une recommandation établie, ce qui coûte nettement plus cher.',

    everyFigureCaption:
      'Chaque chiffre porte ses preuves, son niveau de confiance et les limites de ce qu’il peut affirmer.',
  },

  /* --- Navigation ------------------------------------------------------- */
  nav: {
    engines: 'Moteurs d’intelligence',
    marketplace: 'Place de marché de l’intelligence',
    methodology: 'Méthodologie',
    pricing: 'Tarifs',
    signIn: 'Connexion',
    startAnalysis: 'Lancer l’analyse',

    groups: [
      {
        label: 'Plateforme',
        summary: 'L’environnement de décision lui-même.',
        items: [
          {
            label: 'Centre de commande exécutif',
            description:
              'Dix mesures, une position de décision, et chacune ouvre ses preuves.',
          },
          {
            label: 'Reconstruction de la décision',
            description:
              'Saisissez un domaine, choisissez une question commerciale et voyez la décision se reconstruire.',
          },
          {
            label: 'Préparation de campagne',
            description:
              'Faut-il lancer cette campagne aujourd’hui ? On évalue l’entreprise, pas la campagne.',
          },
          {
            label: 'Intelligence narrative',
            description:
              'Quel récit le marché raconte-t-il, et comment influence-t-il les décisions ?',
          },
          {
            label: 'Centre d’action stratégique',
            description:
              'Interventions priorisées avec responsables, échéances et mesure.',
          },
          {
            label: 'Intelligence électorale',
            description:
              'Quels récits déplacent l’électorat, qui les porte, et ce qui doit changer.',
          },
        ],
        feature: {
          eyebrow: 'Expérience signature',
          title: 'Reconstruisez la décision.',
          body: 'Dix surfaces, une question commerciale, de ce que chaque moteur a compris à ce qui doit changer.',
          cta: 'Ouvrir la reconstruction',
        },
      },
      {
        label: 'Moteurs d’intelligence',
        summary: 'Douze moteurs. Quatre présents dans cet environnement.',
        items: [
          {
            label: 'Reconnaissance par l’IA',
            description: 'Les moteurs d’IA comprennent-ils qui est l’entreprise ?',
          },
          {
            label: 'Visibilité Google et IA',
            description:
              'Existe-t-elle de façon cohérente sur les deux surfaces de découverte ?',
          },
          {
            label: 'Décision concurrente',
            description: 'Qui obtient la décision à votre place, et pourquoi ?',
          },
          {
            label: 'Intelligence de l’action',
            description: 'Que doit-il se passer, par qui et pour quand ?',
          },
        ],
        allLabel: 'Voir les douze moteurs',
      },
      {
        label: 'Place de marché',
        summary:
          'De l’intelligence pour des questions que la plupart des entreprises n’ont jamais mesurées.',
        items: [
          {
            label: 'Intelligence de visibilité IA',
            description:
              'L’IA sait-elle que l’entreprise existe, et que pense-t-elle qu’elle est ?',
          },
          {
            label: 'Intelligence concurrentielle',
            description: 'Qui obtient la décision à votre place, et de quoi dispose-t-il ?',
          },
          {
            label: 'Intelligence de direction',
            description: 'Combien cela vaut-il, et que se passe-t-il ensuite ?',
          },
        ],
        allLabel: 'Voir tout l’écosystème d’intelligence',
      },
    ],

    flat: [
      { label: 'Comment ça marche' },
      { label: 'Méthodologie' },
      { label: 'Tarifs' },
    ],
  },

  /* --- Commerce --------------------------------------------------------- */
  commerce: {
    briefingCta: 'Réserver un briefing d’intelligence',
    briefingCtaShort: 'Réserver un briefing',
    termsOnRequest: 'Les conditions commerciales sont communiquées sur demande.',
    termsOnRequestLong:
      'Le périmètre, la profondeur et les conditions commerciales sont définis d’après les questions auxquelles vous devez répondre. Les deux sont confirmés lors du briefing.',
  },

  /* --- Briefing and booking --------------------------------------------- */
  briefing: {
    eyebrow: 'Briefing de direction',
    title: 'Voyez l’environnement de décision dans lequel votre entreprise est jugée.',
    sub: 'Une séance de travail sur votre propre marché, pas une démonstration produit. Nous reconstruisons une décision commerciale de votre catégorie et vous montrons ce qui l’a déterminée.',
    covers: 'Ce que couvre la séance',
    coversItems: [
      'Comment les moteurs d’IA décrivent aujourd’hui votre entreprise, moteur par moteur.',
      'Une véritable décision d’achat de votre catégorie, reconstruite de bout en bout.',
      'Quel concurrent obtient cette décision aujourd’hui, et les preuves qui l’y placent.',
      'Les écarts entre les deux, classés par conséquence commerciale.',
      'Ce qui devrait changer, dans quel ordre, et comment le mouvement serait mesuré.',
    ],
    who: 'À qui cela s’adresse',
    whoBody:
      'Aux équipes de direction responsables de la position sur le marché, et aux stratèges qui les conseillent. Aucune préparation n’est nécessaire.',
    duration: '45 minutes',
    durationLabel: 'Durée',
    formatLabel: 'Format',
    format: 'Visioconférence',
    costLabel: 'Coût',
    cost: 'Aucun',

    scheduleLabel: 'Organiser la séance',
    pickDate: 'Choisissez une date',
    pickTime: 'Choisissez un horaire',
    noTimes: 'Aucun horaire disponible à cette date.',
    loadingTimes: 'Vérification des disponibilités…',
    timeZoneNote: 'Horaires affichés dans votre fuseau horaire',
    noticeNote: 'La séance disponible la plus proche est dans 48 heures.',
    nameLabel: 'Nom complet',
    emailLabel: 'E-mail professionnel',
    orgLabel: 'Organisation',
    notesLabel: 'Que souhaitez-vous aborder pendant la séance ?',
    optional: 'Facultatif',
    submit: 'Confirmer le briefing',
    submitting: 'Confirmation…',
    back: 'Changer d’horaire',

    confirmedTitle: 'Le briefing est confirmé.',
    confirmedBody:
      'Une invitation d’agenda part vers votre boîte et vers la nôtre. Les liens pour reporter ou annuler sont dans cet e-mail.',
    confirmedAdd: 'Réservé pour le',

    errorConflict:
      'Cet horaire a été pris pendant que vous remplissiez le formulaire. Choisissez-en un autre, rien d’autre ne sera perdu.',
    errorInvalid: 'Veuillez vérifier les informations et réessayer.',
    errorUpstream:
      'L’agenda n’a pas pu être contacté. Réessayez dans un instant, ou écrivez-nous et nous fixerons directement un créneau.',

    unconfiguredTitle: 'La prise de rendez-vous ouvre prochainement.',
    unconfiguredBody:
      'En attendant, lancez la reconstruction sur votre propre domaine. Le briefing part de ce qu’elle révèle.',
  },

  /* --- Blog ------------------------------------------------------------- */
  blog: {
    eyebrow: 'Notes d’intelligence',
    title: 'Notes d’intelligence',
    lede: 'Écrits sur la façon dont les entreprises sont reconnues, évaluées, recommandées et choisies — et sur ce qu’on peut y faire.',
    readTime: 'min de lecture',
    more: 'Autres notes d’intelligence',
    empty: 'Les premiers articles sont en préparation.',
    ctaBody: 'Chaque argument de ce site peut être vérifié sur votre marché.',
  },

  /* --- Ecosystem -------------------------------------------------------- */
  ecosystem: {
    label: 'Écosystème',
    partners: [
      { description: 'Le groupe derrière GeoRepute.' },
      { description: 'Création de contenu et de médias.' },
      { description: 'Mesure de la perception.' },
    ],
  },

  /* --- Product shell ---------------------------------------------------- */
  appNav: {
    ariaLabel: 'Produit',
    exit: 'Quitter',
    observed: 'Observé le',
    environment:
      'Environnement de démonstration à données initiales · Méthodologie GEON-2.4',
    methodologyLink: 'Comment ces conclusions sont établies',
    items: [
      { label: 'Centre de commande' },
      { label: 'Reconstruction de la décision' },
      { label: 'Préparation de campagne' },
      { label: 'Intelligence narrative' },
      { label: 'Centre d’action' },
    ],
  },

  /* --- Accessible names ------------------------------------------------- */
  a11y: {
    skipToContent: 'Aller au contenu',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    navigate: 'Naviguer',
    primaryNav: 'Principale',
    mobileNav: 'Mobile',
    footerNav: 'Pied de page',
    breadcrumb: 'Fil d’Ariane',
  },

  language: {
    label: 'Langue',
    choose: 'Choisissez une langue',
    current: 'Langue actuelle',
  },

  /* --- Footer. Arrays of objects merge element-wise, so every `href` here
         comes from the English source and only the label is replaced. ----- */
  footer: {
    ariaLabel: 'Pied de page',
    limitationLead: 'Modélisation directionnelle.',
    limitationTail:
      'Les chiffres commerciaux sont des estimations destinées à la priorisation, et non des états financiers audités.',
    rights: 'GeoRepute. Infrastructure d’intelligence décisionnelle.',
    environment: 'Environnement de démonstration · Données de départ',
    photography: 'Photographies via',
    columns: [
      {
        title: 'Produit',
        links: [
          { label: 'Centre de commandement exécutif' },
          { label: 'Reconstruction de décision' },
          { label: 'Centre d’actions' },
          { label: 'Moteurs d’intelligence' },
          { label: 'Réserver un briefing' },
          { label: 'Tarifs et formules' },
        ],
      },
      {
        title: 'Intelligence',
        links: [
          { label: 'Place de marché de l’intelligence' },
          { label: 'Reconnaissance par l’IA' },
          { label: 'Google face à l’IA' },
          { label: 'Décision concurrentielle' },
          { label: 'Intelligence d’action' },
        ],
      },
      {
        title: 'Méthodologie',
        links: [
          { label: 'Le cadre GEON' },
          { label: 'Sources de preuves' },
          { label: 'Modèle de confiance' },
          { label: 'Modèle financier' },
          { label: 'Limites' },
        ],
      },
      {
        title: 'Entreprise',
        links: [
          { label: 'Notes d’intelligence' },
          { label: 'Connexion' },
          { label: 'Confidentialité' },
          { label: 'Conditions d’utilisation' },
          { label: 'Traitement des données' },
          { label: 'Sécurité' },
        ],
      },
    ],
  },

  /* --- Readout anatomy -------------------------------------------------- */
  readout: {
    executiveTruth: 'Vérité de direction',
    businessMeaning: 'Signification commerciale',
    evidence: 'Preuves',
    connectedSignals: 'Signaux liés',
    competitorContext: 'Contexte concurrentiel',
    commercialExposure: 'Exposition commerciale',
    timing: 'Calendrier',
    trend: 'Tendance',
    prescription: 'Prescription',
    expectedMovement: 'Mouvement attendu',
    ownerDeadline: 'Responsable et échéance',
    measurement: 'Mesure',
    showEvidence: 'Afficher les preuves',
    hideEvidence: 'Masquer les preuves',
    howDetermined: 'Comment cela a été établi',
  },

  /* --- Confidence ------------------------------------------------------- */
  confidence: {
    high: {
      label: 'Confiance élevée',
      definition:
        'Plusieurs sources de preuves actuelles et fiables appuient la conclusion.',
    },
    medium: {
      label: 'Confiance moyenne',
      definition:
        'Les preuves sont significatives mais partiellement estimées ou incomplètes.',
    },
    directional: {
      label: 'Indicatif',
      definition:
        'Utile pour prioriser, il ne s’agit pas d’un fait audité ni vérifié.',
    },
    'insufficient-history': {
      label: 'Historique insuffisant',
      definition:
        'La plateforme s’abstient de conclusions prédictives tant que les preuves ne sont pas suffisantes.',
    },
  },

  /* --- Exposure. The negation must survive translation. ----------------- */
  exposure: {
    label: 'Exposition commerciale indicative',
    caption:
      'Estimation indicative — il ne s’agit pas d’un chiffre d’affaires perdu confirmé.',
    assumptionsLabel: 'Hypothèses',
    formulaLabel: 'Modèle',
    formula:
      'Demande × Écart de décision × Conversion estimée × Valeur moyenne d’une affaire',
    limitation:
      'Toutes les valeurs sont présentées sous forme de fourchettes. Aucune valeur n’est décrite comme un chiffre d’affaires perdu confirmé. Chaque modèle expose ses hypothèses et les limites de ses données.',
  },

  roleLens: {
    label: 'Profondeur',
    executive: 'Direction',
    analyst: 'Analyste',
    operator: 'Opérateur',
    hint: 'Modifie le niveau de détail ouvert par défaut. Aucune donnée n’est masquée.',
  },

  /* --- The Closed Loop (doc §9/§10) ------------------------------------- */
  loop: {
    navLabel: 'Comment ça marche',
    eyebrow: 'La boucle fermée GeoRepute',
    title: 'De l’intelligence à l’exécution. De l’exécution à l’intelligence.',
    lede: 'GeoRepute ne se contente pas d’analyser ce qui se passe. Elle comprend pourquoi cela se passe, décide de ce qui doit changer, exécute la stratégie, mesure ce qui a changé — et se sert du résultat pour décider de la suite.',

    fragmentedLabel: 'Le modèle disloqué',
    fragmentedLede:
      'La plupart des entreprises fonctionnent avec des systèmes déconnectés.',
    fragmentedItems: [
      'Une plateforme mesure Google.',
      'Une autre surveille l’IA.',
      'Une autre analyse les concurrents.',
      'Quelqu’un bâtit la stratégie.',
      'Quelqu’un d’autre crée le contenu.',
      'Un autre système le diffuse.',
      'L’analytique mesure ce qui s’est passé ensuite.',
    ],
    fragmentedClose:
      'Des systèmes différents. Des équipes différentes. Des données différentes. Des objectifs différents. Et souvent aucun lien direct entre le diagnostic initial et le résultat final.',

    connectedLede: 'GeoRepute relie tout le cycle de décision.',
    connectedBody:
      'Elle commence par une intelligence approfondie de l’entreprise, du marché, des concurrents, des clients, de Google, des moteurs d’IA et de l’environnement numérique élargi. Elle transforme cette intelligence en une stratégie bâtie autour d’objectifs commerciaux définis. Puis elle crée et diffuse le contenu et les médias nécessaires à l’exécution de cette stratégie. Puis elle mesure si ces actions ont réellement modifié les signaux qu’elles devaient modifier. Et ce que le système apprend devient l’intelligence du cycle suivant.',

    cycle: 'PLANIFIER → EXÉCUTER → VÉRIFIER → CORRIGER → RECOMMENCER',
    cycleSub: 'Une boucle continue de l’intelligence à l’exécution.',

    stages: [
      {
        name: 'PLANIFIER',
        headline: 'Comprendre la réalité avant de décider quoi faire.',
        lede: 'Chaque cycle commence par un diagnostic approfondi. GeoRepute analyse et relie l’intelligence sur l’entreprise, ses concurrents, son marché et les environnements numériques qui influencent les décisions des clients.',
        signalsLabel: 'Le système analyse des signaux issus de',
        signals: [
          'Moteurs d’IA',
          'Google',
          'Recherche',
          'Concurrents',
          'Marché',
          'Présence numérique',
          'Autorité',
          'Confiance',
          'Récits',
          'Contenu',
          'Questions des clients',
          'Parcours de décision',
          'Sources numériques',
          'Langues',
          'Données d’entreprise connectées',
        ],
        connective:
          'Elle ne considère pas ces signaux isolément : elle les relie pour reconstituer le tableau d’ensemble.',
        question: 'Que comprend réellement le marché de votre entreprise ?',
        determinesLabel: 'GeoRepute détermine',
        determines: [
          'Comment l’entreprise est comprise et représentée',
          'Ce que les moteurs d’IA savent d’elle',
          'Quand l’IA la recommande — et quand elle ne le fait pas',
          'Ce que Google affiche aux moments décisifs',
          'Ce que les clients rencontrent avant même d’atteindre le site',
          'Quelles questions influencent la décision d’achat',
          'Où l’entreprise entre dans l’ensemble considéré',
          'Où elle disparaît',
          'Quels concurrents obtiennent la décision à sa place',
          'Pourquoi ces concurrents sont retenus',
          'Quelles sources et preuves les renforcent',
          'Quels récits façonnent la catégorie',
          'Où manquent la confiance et l’autorité',
          'Où se situent les lacunes d’information',
          'Quelles audiences sont atteintes',
          'Quelles opportunités restent ouvertes',
          'Quelles menaces émergent',
          'Ce qui change sur le marché',
          'Et quels signaux doivent changer pour rapprocher l’entreprise de son objectif',
        ],
        outcomeLabel: 'L’intelligence devient stratégie.',
        outcome:
          'Le client définit les objectifs. GeoRepute détermine le chemin. Le système transforme le diagnostic en une stratégie ciblée et un plan d’exécution priorisé autour de ces objectifs.',
        notThis: '« Que publier ce mois-ci ? »',
        butThis: [
          'Qu’est-ce qui doit changer ?',
          'Pourquoi cela doit-il changer ?',
          'Qui doit le rencontrer ?',
          'Où doit-il le rencontrer ?',
          'Que doit-il exister là ?',
          'Et quel signal mesurable devrait bouger si la stratégie fonctionne ?',
        ],
      },
      {
        name: 'EXÉCUTER',
        headline:
          'Ne créez pas ce que l’entreprise veut dire. Créez ce que le client a besoin de rencontrer.',
        lede: 'C’est ici que l’intelligence devient exécution. GeoRepute ne part pas d’un calendrier de contenu vierge, mais des lacunes découvertes lors de la planification.',
        signalsLabel: 'Publié sur les actifs numériques connectés',
        signals: [
          'Site web',
          'Plateformes sociales',
          'Articles',
          'Fiches d’entreprise',
          'Environnements de contenu',
          'Canaux de publication connectés',
        ],
        connective:
          'Le système comprend ce qui manque entre l’entreprise et la décision qu’elle veut influencer.',
        question: 'Que doit rencontrer le client pour décider autrement ?',
        determinesLabel: 'Il détermine',
        determines: [
          'Quelles informations manquent aux clients',
          'À quelles questions il faut répondre',
          'Quels récits créer, renforcer ou corriger',
          'Quelles objections traiter',
          'Quels signaux de confiance doivent exister',
          'Quelles lacunes d’autorité combler',
          'Quel contenu est requis',
          'Quels médias sont requis',
          'Quel format convient à l’objectif',
          'Quelle audience doit le rencontrer',
          'Dans quelle langue',
          'À quelle étape du parcours de décision',
          'Sur quel actif ou canal numérique',
          'Et dans quel ordre',
        ],
        outcomeLabel: 'Puis GeoRepute exécute.',
        outcome:
          'Le système produit le contenu et les médias requis selon la stratégie, puis les diffuse et les publie sur les actifs numériques connectés de l’entreprise ou du projet. Chaque actif existe pour une raison. Chaque contenu est relié à une lacune identifiée. Chaque action est reliée à un objectif défini. Chaque objectif est relié à un signal dont le système attend l’évolution.',
        notThis: 'Le contenu est la stratégie.',
        butThis: ['Le contenu est la couche d’exécution de l’intelligence.'],
      },
      {
        name: 'VÉRIFIER',
        headline: 'Ne mesurez pas ce qui a été publié. Mesurez ce qui a changé.',
        lede: 'Publier n’est pas réussir. Les vues ne sont pas une réussite. Terminer une action n’est pas une réussite. La question est de savoir si l’action a modifié la raison pour laquelle elle a été créée.',
        signalsLabel: 'Le système compare',
        signals: ['AVANT', 'ACTION', 'APRÈS'],
        connective:
          'Après l’exécution, GeoRepute retourne dans l’environnement et le mesure à nouveau. Elle vérifie si les signaux visés ont réellement bougé.',
        question: 'Les signaux que cette action devait déplacer ont-ils bougé ?',
        determinesLabel: 'Elle demande',
        determines: [
          'La compréhension de l’IA a-t-elle changé ?',
          'La présence dans les recommandations a-t-elle augmenté ?',
          'L’entreprise est-elle entrée dans des décisions dont elle était absente ?',
          'L’autorité s’est-elle renforcée ?',
          'La confiance s’est-elle améliorée ?',
          'Le récit a-t-il bougé ?',
          'La visibilité Google a-t-elle changé ?',
          'Les clients ont-ils commencé à rencontrer l’information manquante ?',
          'L’écart concurrentiel s’est-il réduit ?',
          'Le même concurrent obtient-il toujours la décision ?',
          'Le marché a-t-il réagi comme prévu ?',
        ],
        outcomeLabel:
          'GeoRepute mesure l’impact de sa propre exécution au regard du diagnostic initial.',
        outcome:
          'Cela crée un lien direct entre ce que le système a découvert, ce qu’il a décidé, ce qu’il a exécuté et ce qui a réellement changé.',
        notThis: 'Avoir terminé l’action.',
        butThis: ['Avoir déplacé le signal pour lequel l’action a été créée.'],
      },
      {
        name: 'CORRIGER',
        headline: 'Le résultat devient l’intelligence de la décision suivante.',
        lede: 'Le marché a désormais changé. La stratégie ne peut donc rester figée. GeoRepute réinjecte les nouveaux résultats dans sa couche d’intelligence.',
        signalsLabel: 'Sur la base de cette nouvelle réalité, GeoRepute peut ajuster',
        signals: [
          'La stratégie',
          'Les priorités',
          'Les récits',
          'Les messages',
          'Le contenu',
          'Les médias',
          'La diffusion',
          'Les canaux',
          'Le calendrier',
          'Les signaux visés',
          'Les prochaines actions',
        ],
        connective:
          'Ce qui fonctionne peut être renforcé. Ce qui ne produit pas le mouvement attendu peut être modifié. De nouvelles opportunités entrent au plan. De nouveaux risques sont traités.',
        question: 'Que doit-il se passer maintenant, et pourquoi ?',
        determinesLabel: 'Le système détermine',
        determines: [
          'Ce qui a fonctionné.',
          'Ce qui n’a pas fonctionné.',
          'Ce qui a bougé.',
          'Ce qui n’a pas assez bougé.',
          'Ce qui a changé sur le marché.',
          'Ce que les concurrents ont changé.',
          'Quelles nouvelles lacunes sont apparues.',
          'Et ce qui doit se passer ensuite.',
        ],
        outcomeLabel: 'Et le système repart.',
        outcome:
          'PLANIFIER → EXÉCUTER → VÉRIFIER → CORRIGER → PLANIFIER. Le résultat d’un cycle devient l’intelligence du suivant.',
        notThis: 'Une stratégie établie une fois.',
        butThis: ['Une stratégie qui se redécide à chaque cycle.'],
      },
    ],

    stepsLabel: 'La boucle fermée',
    stepsSub: 'Un système. Un cycle d’apprentissage continu.',
    steps: [
      {
        name: 'COMPRENDRE',
        body: 'Diagnostic approfondi de l’entreprise, du marché, des concurrents et de l’environnement de décision.',
      },
      {
        name: 'DÉCIDER',
        body: 'Transformer l’intelligence en une stratégie alignée sur des objectifs définis.',
      },
      { name: 'CRÉER', body: 'Produire le contenu et les médias qu’exige la stratégie.' },
      {
        name: 'DIFFUSER',
        body: 'Publier sur les actifs et canaux numériques connectés.',
      },
      {
        name: 'MESURER',
        body: 'Réanalyser l’environnement et mesurer ce qui a réellement changé.',
      },
      {
        name: 'APPRENDRE',
        body: 'Comprendre quelles actions ont déplacé les signaux visés et lesquelles non.',
      },
      {
        name: 'CORRIGER',
        body: 'Ajuster la stratégie, le contenu, la diffusion et les priorités.',
      },
    ],
    stepsClose: 'Chaque cycle rend le suivant mieux informé.',

    movementLabel: 'Avant → Action → Après',
    movementCaption:
      'Mouvement illustratif sur un cycle. Données de démonstration — pas un résultat client.',
    movementColumns: ['Signal', 'Avant', 'Après', 'Cible'],

    whyLabel: 'Pourquoi cela change le modèle',
    whyTraditionalLabel: 'Le modèle traditionnel est fragmenté',
    whyTraditional:
      'Recherche → Stratégie → Agence → Contenu → Diffusion → Analytique → Réunion → Nouvelle stratégie',
    whyClosedLabel: 'GeoRepute comble l’écart',
    whyClosed:
      'Intelligence → Décision → Exécution → Mesure → Apprentissage → Correction',
    whyBody:
      'La même intelligence qui identifie le problème guide la stratégie. La stratégie détermine ce qui est créé. L’exécution est mesurée au regard de l’objectif initial. Et le résultat détermine ce que le système fait ensuite.',

    notEngineLabel: 'Pas un moteur de contenu de plus',
    notEngineHeadline: 'Le contenu est un produit. L’intelligence est le cerveau.',
    notEngineBody:
      'GeoRepute n’est pas conçue pour produire davantage de contenu. Elle est conçue pour déterminer ce qui doit exister sur le marché afin d’influencer la décision suivante.',
    notEngineItems: [
      'Cela demande parfois du contenu.',
      'Parfois de l’autorité.',
      'Parfois des preuves.',
      'Parfois une correction de récit.',
      'Parfois des réponses à des questions que les clients ne peuvent résoudre.',
      'Parfois le renforcement d’une propriété numérique précise.',
      'Parfois la fermeture d’un écart concurrentiel.',
    ],
    notEngineClose:
      'Le système décide à partir de l’intelligence. Puis il exécute ce que la stratégie exige.',

    differenceLabel: 'La différence',
    difference: [
      { term: 'L’analytique', says: 'vous dit ce qui s’est passé.' },
      { term: 'L’intelligence', says: 'vous dit pourquoi.' },
      { term: 'La stratégie', says: 'vous dit ce qui doit changer.' },
      { term: 'L’exécution', says: 'réalise le changement.' },
      { term: 'La mesure', says: 'vous dit si cela a fonctionné.' },
    ],
    differenceClose:
      'GeoRepute relie les cinq — et relance le cycle.',

    livingLabel: 'De l’instantané à la stratégie vivante',
    livingItems: [
      'Les marchés bougent.',
      'Les concurrents bougent.',
      'Les questions des clients changent.',
      'Google change.',
      'Les systèmes d’IA changent.',
      'Les récits changent.',
      'L’information autour d’une entreprise change.',
    ],
    livingBody:
      'Une stratégie établie une seule fois ne peut répondre en continu à un marché qui ne cesse de bouger. GeoRepute transforme la stratégie d’un document figé en un système vivant.',
    livingVerbs: [
      'Observe.',
      'Comprend.',
      'Décide.',
      'Exécute.',
      'Mesure.',
      'Apprend.',
      'S’adapte.',
    ],

    ctaHeadline: 'Voyez la boucle fermée à l’œuvre.',
    ctaBody:
      'Ne vous contentez pas d’un tableau de bord de plus. Voyez comment GeoRepute passe de l’intelligence à la stratégie, de la stratégie à l’exécution, et de l’exécution à une intelligence mesurable.',
    ctaPrimary: 'Réserver une démonstration',
    ctaSecondary: 'Voir comment fonctionne GeoRepute',

    homeEyebrow: 'La boucle fermée',
    homeHeadline:
      'L’analyse est là où s’arrêtent la plupart des plateformes. C’est là que celle-ci commence.',
    homeSub:
      'GeoRepute diagnostique l’environnement de décision, le transforme en stratégie, l’exécute, mesure si les signaux visés ont réellement bougé, et se sert du résultat pour décider de la suite.',
    homeCta: 'Voir comment la boucle fonctionne',
  },

  /* --- Election Intelligence (doc §3) ----------------------------------- */
  election: {
    navLabel: 'Intelligence électorale',
    eyebrow: 'Intelligence électorale en temps réel',
    title: 'Sachez ce qui fait bouger l’élection — et ce qui la fera revenir.',
    lede: 'GeoRepute reconstruit la façon dont une position politique se forme réellement : quels récits circulent, qui les porte, quelles audiences bougent, et ce qui doit changer pour les ramener.',

    keyMessageLabel: 'La distinction qui compte',
    keyMessageNot: 'Le système ne se contente pas de montrer ce qui se passe.',
    keyMessage:
      'Il explique pourquoi la position politique change, qui l’influence, où le soutien se perd ou se gagne, et ce qu’il faut faire maintenant pour inverser la tendance.',

    forLabel: 'Conçu pour',
    audiences: [
      {
        name: 'Élections nationales',
        body: 'Intelligence narrative et perception à l’échelle d’un pays, dans chaque langue et chaque région concernée.',
      },
      {
        name: 'Élections locales',
        body: 'Résolution au niveau de la circonscription, où quelques milliers d’indécis emportent le siège.',
      },
      {
        name: 'Partis politiques',
        body: 'La perception du parti mesurée séparément des candidats qui la portent.',
      },
      {
        name: 'Candidats',
        body: 'Comment un candidat est compris, décrit et recommandé sur les surfaces que les électeurs utilisent réellement.',
      },
      {
        name: 'Quartiers généraux de campagne',
        body: 'Une image opérationnelle unique pour toute la campagne, actualisée à mesure que l’environnement bouge.',
      },
      {
        name: 'Stratèges politiques',
        body: 'Les preuves derrière une décision stratégique, hypothèses et limites explicitées.',
      },
      {
        name: 'Cellules de crise électorales',
        body: 'Mouvement des récits en direct, risques émergents et réponses priorisées pendant la fenêtre décisive.',
      },
    ],

    capabilitiesLabel: 'Ce que le système analyse',
    capabilitiesSub:
      'Chaque capacité ci-dessous est une question que la campagne peut poser au système et à laquelle elle obtient une réponse étayée.',
    capabilities: [
      {
        name: 'Perception et récit',
        question: 'Que dit-on réellement à l’électorat de ce candidat ?',
        items: [
          'Perception publique',
          'Récits politiques',
          'Récits positifs et négatifs',
          'Mouvement des récits',
          'Perception du candidat et du parti',
        ],
      },
      {
        name: 'Adversaire et influence',
        question: 'Qui renforce la position, et qui lui nuit ?',
        items: [
          'Récits des concurrents et des adversaires',
          'Qui renforce un candidat ou un parti',
          'Qui leur nuit',
          'Médias et sources d’information en ligne',
          'Signaux sociaux et numériques',
        ],
      },
      {
        name: 'Mouvement des audiences',
        question: 'Quels électeurs bougent, dans quel sens, et sur quoi ?',
        items: [
          'Quelles audiences se rapprochent',
          'Quelles audiences s’éloignent',
          'Quels sujets modifient la perception des électeurs',
        ],
      },
      {
        name: 'Visibilité recherche et IA',
        question: 'Que trouve un électeur lorsqu’il cherche ce candidat ?',
        items: [
          'Visibilité Google',
          'Visibilité et recommandations des moteurs d’IA',
          'Ce que chaque moteur met en avant',
          'Où leurs versions divergent',
        ],
      },
      {
        name: 'Intelligence multilingue',
        question: 'Le même candidat est-il décrit différemment selon la langue ?',
        items: [
          'Intelligence politique multilingue',
          'Écarts de récit entre langues et audiences',
        ],
      },
      {
        name: 'Risque et opportunité',
        question: 'Qu’est-ce qui émerge, et qu’est-ce qui reste inoccupé ?',
        items: [
          'Risques et menaces émergentes',
          'Opportunités',
          'Sujets sans propriétaire, disponibles pour la campagne',
        ],
      },
      {
        name: 'Action priorisée',
        question: 'Que doit-il se passer maintenant, et comment saurons-nous que cela a marché ?',
        items: [
          'Actions priorisées',
          'Ce qu’il faut faire immédiatement',
          'Qui doit en être responsable',
          'Ce qui doit changer',
          'Comment le mouvement doit être mesuré dans le temps',
        ],
      },
    ],

    screensLabel: 'À l’intérieur du système',
    screensSub:
      'Les surfaces de l’intelligence électorale, sur données de démonstration. Aucun candidat, parti ou campagne réels n’apparaît sur cette page.',

    liveLabel: 'Voir en fonctionnement',
    liveHeadline: 'Le mode Élection est actif dans cet environnement.',
    liveBody:
      'L’intelligence narrative change de sujet : d’une organisation commerciale à une course locale fictive, afin que la structure de l’analyse puisse être examinée de bout en bout avant que la moindre donnée réelle de campagne n’intervienne.',
    liveCta: 'Ouvrir le mode Élection',

    confidentialLabel: 'Sur la confidentialité',
    confidentialBody:
      'L’intelligence de campagne est traitée comme telle. Aucune course, aucun candidat, aucun jeu de données client n’apparaît dans un support public, une démonstration ou une référence. Chaque exemple de cette page est un sujet inventé, construit pour montrer la forme de l’analyse.',

    ctaHeadline: 'La position bouge déjà. La question est de savoir dans quel sens.',
    ctaPrimary: 'Voir ce qui fait bouger l’élection',
    ctaSecondary: 'Réserver un briefing d’intelligence électorale',
  },

  meta: {
    description:
      'GeoRepute reconstruit la façon dont les entreprises sont reconnues, évaluées, recommandées, jugées dignes de confiance et choisies à travers les moteurs d’IA, Google, les canaux numériques et la perception du marché.',
  },
}
