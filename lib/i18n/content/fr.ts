import type { ContentOverlay } from './index'

/* ============================================================================
   French content overlay — the seeded demonstration prose.

   Keyed by the English source string. See ./index.ts for why.

   WHAT IS DELIBERATELY NOT TRANSLATED
     · Company names in the demonstration — Northwind Supply, Kestrel
       Industrial, Meridian Supply Co, Atlas Trade Group, Halvorsen
       Industrial. They are proper nouns; translating them would make the
       competitor comparison incoherent.
     · AI engine names — ChatGPT, Claude, Gemini, Perplexity, Copilot, Grok —
       and Google. Product names.
     · File paths under public/, and the locale code the compact language
       switcher shows in place of the endonym.

   The example search queries ARE translated — see the note beside them.

   Anything absent falls through to English by construction.
   ========================================================================= */

export const content: ContentOverlay = {
  /* --- Organisation and market ---------------------------------------- */
  'Industrial MRO and fastener distribution':
    'Distribution de consommables industriels et de fixations',
  'United States — Midwest': 'États-Unis — Midwest',

  /* ==========================================================================
     HOME PAGE — the prose written inline on the section components.

     Tokens in braces are substituted after lookup, so a translation may put
     {pct} wherever French needs it. <b>…</b> marks an emphasised run and is
     rendered as a styled span, never as markup — it can move too.
     ======================================================================= */

  /* --- The premise ------------------------------------------------------ */
  'The shift': 'Le basculement',
  '{n} of {total}': '{n} sur {total}',
  'By the time a visit, a click, a lead or a CRM record exists, the buyer has already decided which suppliers are worth contacting. That decision now happens inside AI systems, and it leaves no trace in any tool you currently own.':
    'Lorsqu’une visite, un clic, un prospect ou une fiche CRM apparaît, l’acheteur a déjà décidé quels fournisseurs méritent d’être contactés. Cette décision se prend désormais à l’intérieur des systèmes d’IA et ne laisse aucune trace dans les outils dont vous disposez.',
  'commercial decisions complete without your business being named at all.':
    'décisions commerciales s’achèvent sans que votre entreprise soit citée une seule fois.',
  'No lead was lost, because no lead was ever created. Conventional measurement recorded nothing.':
    'Aucun prospect n’a été perdu, car aucun prospect n’a jamais été créé. La mesure conventionnelle n’a rien enregistré.',
  'presence at the stage where the supplier is actually chosen.':
    'de présence à l’étape où le fournisseur est réellement choisi.',
  'That stage carries {volume} of the query volume and decides {revenue} of the revenue. Volume-ranked tooling calls it unimportant.':
    'Cette étape représente {volume} du volume de requêtes et décide de {revenue} du chiffre d’affaires. Les outils classés par volume la jugent secondaire.',
  'more independent evidence supports the competitor engines recommend instead.':
    'de preuves indépendantes en plus soutiennent le concurrent que les moteurs recommandent à votre place.',
  'Not a brand-preference gap. An evidence gap, and evidence can be commissioned.':
    'Ce n’est pas un écart de préférence de marque, mais un écart de preuves — et des preuves, cela se commande.',

  /* --- Q1 · Does AI know your business? --------------------------------- */
  'Entity understanding': 'Compréhension de l’entité',
  'AI systems understand what your business is in {score} of 100 commercial evaluations. One engine holds no stable record of you at all.':
    'Les systèmes d’IA comprennent ce qu’est votre entreprise dans {score} évaluations commerciales sur 100. Un moteur n’en conserve aucune fiche stable.',
  'A system that cannot categorise a business cannot recommend it. This sits upstream of every other measure on this page.':
    'Un système incapable de catégoriser une entreprise ne peut pas la recommander. Cela se situe en amont de toutes les autres mesures de cette page.',
  'Content and advertising investment cannot move an answer while the underlying record is wrong. Spend on either is spend against a locked door.':
    'Aucun investissement en contenu ou en publicité ne déplacera une réponse tant que la fiche sous-jacente est fausse. Dépenser sur l’un ou l’autre revient à dépenser contre une porte verrouillée.',
  'Highest-risk engine': 'Moteur le plus à risque',
  '{engine} understands your business at {score} of 100 and names it in none of the tracked decisions.':
    '{engine} comprend votre entreprise à {score} sur 100 et ne la cite dans aucune des décisions suivies.',
  'Recognition is not uniform across AI systems, and buyers do not all use the same one. A single weak engine removes your business from every decision made through it.':
    'La reconnaissance n’est pas uniforme d’un système d’IA à l’autre, et les acheteurs n’utilisent pas tous le même. Un seul moteur défaillant retire votre entreprise de chaque décision qui passe par lui.',
  'Every buyer who asks this engine receives a supplier shortlist your business is structurally absent from — and no measurement you own records that it happened.':
    'Chaque acheteur qui interroge ce moteur reçoit une liste restreinte de fournisseurs dont votre entreprise est structurellement absente — et aucune de vos mesures n’en garde trace.',
  'Decision presence': 'Présence dans la décision',
  'Present in only {present} of supplier evaluations. Missing from {missing} of AI buying decisions.':
    'Présente dans seulement {present} des évaluations de fournisseurs. Absente de {missing} des décisions d’achat passant par l’IA.',
  'Supplier evaluation is the moment a buyer stops choosing a solution and starts choosing a vendor. It is the stage that assigns the order.':
    'L’évaluation des fournisseurs est le moment où l’acheteur cesse de choisir une solution et commence à choisir un fournisseur. C’est l’étape qui attribue la commande.',
  'Absence here is exclusion from the shortlist for the {revenue} of revenue that arrives through supplier evaluation.':
    'Une absence ici équivaut à une exclusion de la liste restreinte pour les {revenue} du chiffre d’affaires qui passent par l’évaluation des fournisseurs.',
  'Recognition is cheap to fix and blocks everything else. It is the only intervention on this page that can be completed in under thirty days.':
    'La reconnaissance coûte peu à corriger et bloque tout le reste. C’est la seule intervention de cette page réalisable en moins de trente jours.',

  /* --- Q2 · Where are you losing decisions? ------------------------------ */
  'Losses are not spread evenly across the buying journey. They concentrate at one stage — and it is the stage conventional measurement is least able to see.':
    'Les pertes ne se répartissent pas uniformément sur le parcours d’achat. Elles se concentrent sur une étape — celle que la mesure conventionnelle voit le moins bien.',
  'Where presence collapses': 'Où la présence s’effondre',
  'Coverage falls to {pct} at supplier evaluation — the last stage before the order is assigned.':
    'La couverture tombe à {pct} lors de l’évaluation des fournisseurs — la dernière étape avant l’attribution de la commande.',
  'Earlier stages shape opinion. This stage selects the vendor. A business can lead the first three stages and still never be contacted.':
    'Les étapes précédentes façonnent l’opinion. Celle-ci sélectionne le fournisseur. Une entreprise peut dominer les trois premières étapes et n’être jamais contactée.',
  'The competitor named here receives the enquiry. Your business is not compared and rejected — it is never compared at all.':
    'Le concurrent cité ici reçoit la demande. Votre entreprise n’est pas comparée puis écartée — elle n’est jamais comparée du tout.',
  'Blind-spot questions': 'Questions en angle mort',
  '{n} commercial questions return no AI recommendation and no Google position in the top ten. The decision happens on neither surface.':
    '{n} questions commerciales ne renvoient aucune recommandation de l’IA ni aucune position dans les dix premiers résultats Google. La décision ne se joue sur aucune des deux surfaces.',
  'Google rank and AI recommendation are separate commercial assets. Strength in one does not carry into the other.':
    'Le classement Google et la recommandation de l’IA sont deux actifs commerciaux distincts. La force dans l’un ne se transmet pas à l’autre.',
  'These questions are currently reachable only by buying the click — which is why paid cost rises while organic position stays flat.':
    'Ces questions ne sont aujourd’hui accessibles qu’en achetant le clic — d’où la hausse du coût payant alors que la position organique stagne.',
  'Supplier evaluation carries {volume} of the query volume and decides {revenue} of the revenue. Ranking work by volume puts it last.':
    'L’évaluation des fournisseurs représente {volume} du volume de requêtes et décide de {revenue} du chiffre d’affaires. Classer les travaux par volume la relègue en dernier.',

  /* --- Q3 · Why is the competitor recommended? --------------------------- */
  '{competitor} can be verified through {theirs} independent sources. Your business can be verified through {ours}.':
    '{competitor} peut être vérifiée par {theirs} sources indépendantes. Votre entreprise peut l’être par {ours}.',
  'Share of recommendations is the symptom. The cause is what a system can cite when it has to justify naming one supplier ahead of another.':
    'La part de recommandations est le symptôme. La cause tient à ce qu’un système peut citer lorsqu’il doit justifier d’avoir nommé un fournisseur avant un autre.',
  'Receives the decision': 'Reçoit la décision',
  'Your business': 'Votre entreprise',
  'Authority advantage': 'Avantage d’autorité',
  'Why the decision goes to them': 'Pourquoi la décision leur revient',
  'The category median is <b>{n}</b> independent sources. This is not a brand-preference gap that marketing spend closes. It is an evidence gap, and evidence is something a business can commission.':
    'La médiane de la catégorie est de <b>{n}</b> sources indépendantes. Ce n’est pas un écart de préférence de marque que des dépenses marketing viendraient combler. C’est un écart de preuves — et des preuves, une entreprise peut les commander.',
  'authority source': 'source d’autorité',
  'authority sources': 'sources d’autorité',
  'Named in <b>{pct}</b> of AI buying decisions.':
    'Citée dans <b>{pct}</b> des décisions d’achat passant par l’IA.',
  'Closing {multiple}× is a publishing and validation programme with a known cost, not a brand campaign with an unknown one.':
    'Combler un écart de {multiple}× est un programme de publication et de validation au coût connu, non une campagne de marque au coût inconnu.',

  /* --- Q4 · What evidence is missing? ------------------------------------ */
  'How the gap becomes a lost decision':
    'Comment l’écart devient une décision perdue',
  'Every node below opens the evidence behind it, with its confidence and its limits.':
    'Chaque nœud ci-dessous ouvre les preuves qui le sous-tendent, avec leur niveau de confiance et leurs limites.',
  'Systems do not recommend what they cannot corroborate. Self-description is treated as a claim; third-party reference is treated as evidence.':
    'Les systèmes ne recommandent pas ce qu’ils ne peuvent corroborer. L’autodescription est traitée comme une affirmation ; une référence tierce est traitée comme une preuve.',

  /* --- Q5 · How much time is left? --------------------------------------- */
  'The window is an observation about category formation, not a sales deadline. It is re-assessed every quarter and it can move in either direction.':
    'La fenêtre est une observation sur la formation de la catégorie, non une échéance commerciale. Elle est réévaluée chaque trimestre et peut se déplacer dans les deux sens.',
  'Authority established before the answer set stabilises':
    'Autorité établie avant que l’ensemble des réponses ne se stabilise',

  /* --- Q6 · What should happen next? ------------------------------------- */
  'Six interventions, sequenced. Each names its owner, its deadline, the signal it must move and what has to land before it can move it.':
    'Six interventions, séquencées. Chacune désigne son responsable, son échéance, le signal qu’elle doit déplacer et ce qui doit aboutir avant qu’elle le puisse.',
  'Diagnosis without sequence produces activity rather than movement. Impact is verified by signal movement after execution — never by task completion.':
    'Un diagnostic sans séquence produit de l’activité, pas du mouvement. L’impact se vérifie au déplacement du signal après exécution — jamais à l’achèvement d’une tâche.',
  'Ordered by commercial exposure, urgency, effort and competitive pressure.':
    'Classé par exposition commerciale, urgence, effort et pression concurrentielle.',
  'Open the full intervention plan': 'Ouvrir le plan d’intervention complet',
  Priority: 'Priorité',
  'Expected impact': 'Impact attendu',
  'Verified by: {metric}': 'Vérifié par : {metric}',
  Owner: 'Responsable',
  Deadline: 'Échéance',
  Dependencies: 'Dépendances',
  and: 'et',
  'Cannot move its signal until <b>{blockers}</b> lands.':
    'Ne peut déplacer son signal tant que <b>{blockers}</b> n’a pas abouti.',
  'None. Can start immediately.': 'Aucune. Peut démarrer immédiatement.',

  /* --- Q7 · The executive position --------------------------------------- */
  'Decision Health': 'Santé décisionnelle',
  'The binding constraint': 'La contrainte déterminante',
  'Held down primarily by {vector}.': 'Freinée principalement par {vector}.',
  '{vector} reads <b>{score} of 100</b> and carries the heaviest weight in the index at <b>{weight}%</b>. Lowest score, largest lever — every other measure is capped by it.':
    '{vector} affiche <b>{score} sur 100</b> et porte le poids le plus lourd de l’indice, à <b>{weight}%</b>. Score le plus bas, levier le plus grand : toutes les autres mesures y sont plafonnées.',
  '{vector} reads <b>{score}</b>. The offer matches demand. The constraint is entirely on the evidence side, which is the side a business can change.':
    '{vector} affiche <b>{score}</b>. L’offre correspond à la demande. La contrainte se situe entièrement du côté des preuves — le côté qu’une entreprise peut changer.',
  'What Decision Health is made of': 'Ce qui compose la santé décisionnelle',
  'Weighted, published, recomputed monthly':
    'Pondéré, publié, recalculé chaque mois',
  'Binding constraint': 'Contrainte déterminante',
  'weight {pct}%': 'poids {pct}%',
  'Authority carries the heaviest weight in the index and the largest deficit. Every other vector is capped by it, so it is the only starting point that moves more than one measure.':
    'L’autorité porte le poids le plus lourd de l’indice et le déficit le plus important. Tous les autres vecteurs y sont plafonnés : c’est donc le seul point de départ qui déplace plus d’une mesure.',
  'Open the full executive position': 'Ouvrir la position exécutive complète',

  /* --- Run it on your own business --------------------------------------- */
  'Enter a domain and one signal is released immediately. The rest of the position requires an account or a purchase — and the locked panels state exactly what sits behind them.':
    'Saisissez un domaine et un signal se débloque immédiatement. Le reste de la position exige un compte ou un achat — et les panneaux verrouillés indiquent précisément ce qu’ils contiennent.',
  'Your domain': 'Votre domaine',
  'Run instant preview': 'Lancer l’aperçu instantané',
  'Re-run preview': 'Relancer l’aperçu',
  'Seeded demonstration. This environment always reconstructs Northwind Supply, an industrial distributor, so every figure stays verifiable.':
    'Démonstration sur données de départ. Cet environnement reconstruit toujours Northwind Supply, un distributeur industriel, afin que chaque chiffre reste vérifiable.',
  'AI recognition': 'Reconnaissance par l’IA',
  'Best Google position': 'Meilleure position Google',
  'Not ranking': 'Non classé',
  'Narrative ownership': 'Maîtrise du récit',
  'Strongest competitor': 'Concurrent le plus fort',
  '{score}/100 recognition': 'reconnaissance {score}/100',
  '{pct} of recommendations': '{pct} des recommandations',
  'Unlocked signal': 'Signal débloqué',
  'Behind the gate': 'Derrière l’accès',
  '<b>{n}</b> further readouts, each with evidence, exposure and a prescribed action.':
    '<b>{n}</b> analyses supplémentaires, chacune avec ses preuves, son exposition et une action prescrite.',
  'Competitor capture, authority evidence, paid dependency, missed decisions, narrative control, trust readiness and strategic timing.':
    'Captation par les concurrents, preuves d’autorité, dépendance au payant, décisions manquées, contrôle du récit, préparation à la confiance et calendrier stratégique.',
  'Unlock full intelligence': 'Débloquer l’intelligence complète',
  'Buy a single answer': 'Acheter une seule réponse',
  'See a single answer': 'Voir une seule réponse',

  /* --- The ecosystem and the machinery ----------------------------------- */
  'The intelligence ecosystem': 'L’écosystème d’intelligence',
  'Seven questions were asked above. {n} models stand behind them.':
    'Sept questions ont été posées ci-dessus. {n} modèles les soutiennent.',
  'Every category holds the models that answer one kind of commercial question — including a great many that businesses have never been able to measure, because nothing existed to measure them with.':
    'Chaque catégorie regroupe les modèles qui répondent à un type de question commerciale — dont un grand nombre que les entreprises n’ont jamais pu mesurer, faute d’instrument pour le faire.',
  'intelligence modules in total, each answering one business question with evidence, analysis and a recommendation.':
    'modules d’intelligence au total, chacun répondant à une question métier avec preuves, analyse et recommandation.',
  'Explore the intelligence ecosystem': 'Explorer l’écosystème d’intelligence',
  Underneath: 'En dessous',
  'Every answer on this page is produced by an intelligence engine.':
    'Chaque réponse de cette page est produite par un moteur d’intelligence.',
  'Twelve engines run beneath the questions. They are named here for completeness — nobody buys an engine, and nothing above required you to know one existed.':
    'Douze moteurs fonctionnent sous ces questions. Ils sont nommés ici par souci d’exhaustivité : personne n’achète un moteur, et rien de ce qui précède n’exigeait d’en connaître l’existence.',
  'Four engines are built in this environment. All twelve appear on the':
    'Quatre moteurs sont implémentés dans cet environnement. Les douze figurent dans la',
  'engines overview': 'vue d’ensemble des moteurs',

  /* --- The close ---------------------------------------------------------- */
  'Every day the window stays open, the same position costs less to take. Every day after it closes, it costs more.':
    'Chaque jour où la fenêtre reste ouverte, la même position coûte moins cher à prendre. Chaque jour après sa fermeture, elle coûte davantage.',
  'See how AI decides about you': 'Voyez comment l’IA décide à votre sujet',
  'Every figure on this page is computed from {n} tracked commercial decisions across six AI engines.':
    'Chaque chiffre de cette page est calculé à partir de {n} décisions commerciales suivies sur six moteurs d’IA.',
  'See the methodology': 'Consulter la méthodologie',

  /* --- Hero · trust strip and the reconstruction ------------------------- */
  'Six AI engines observed': 'Six moteurs d’IA observés',
  '24 commercial decisions tracked': '24 décisions commerciales suivies',
  'Evidence on every claim': 'Une preuve pour chaque affirmation',
  'Confidence and limits stated': 'Confiance et limites indiquées',
  'A buyer asks AI': 'Un acheteur interroge l’IA',
  'AI looks for proof it can cite':
    'L’IA cherche une preuve qu’elle peut citer',
  'Independent sources an engine can cite when it recommends a supplier. Your own website does not count — engines treat self-description as a claim, not as evidence.':
    'Sources indépendantes qu’un moteur peut citer lorsqu’il recommande un fournisseur. Votre propre site ne compte pas : les moteurs traitent l’autodescription comme une affirmation, non comme une preuve.',
  'So AI recommends': 'L’IA recommande donc',
  'Your business was named by <b>{named} of {total}</b> engines. Not because the offer is weaker — because <b>{theirs} sources outrank {ours}</b> when a system has to stand behind an answer.':
    'Votre entreprise a été citée par <b>{named} moteurs sur {total}</b>. Non parce que l’offre est plus faible, mais parce que <b>{theirs} sources l’emportent sur {ours}</b> lorsqu’un système doit assumer une réponse.',
  'What changes the answer': 'Ce qui change la réponse',
  '{n} sources': '{n} sources',
  '{name}: {n} independent sources': '{name} : {n} sources indépendantes',
  'A reconstruction of one AI buying decision: the question a buyer asked, the {theirs} independent sources supporting {winner} against {ours} supporting your business — a {advantage}× evidence advantage — the resulting recommendation, and the intervention that changes it.':
    'Reconstruction d’une décision d’achat passant par l’IA : la question posée par un acheteur, les {theirs} sources indépendantes soutenant {winner} contre {ours} soutenant votre entreprise — un avantage de preuves de {advantage}× — la recommandation qui en résulte, et l’intervention qui la modifie.',

  /* --- The strategic window ---------------------------------------------- */
  '{position} market': 'Marché {position}',
  '{n} months open': 'ouverte depuis {n} mois',
  '<b>{n}</b> days of advantage remain': 'Il reste <b>{n}</b> jours d’avantage',
  'After <b>{date}</b>, the same position still exists — it just has to be taken from an incumbent recommendation rather than claimed from open ground.':
    'Après le <b>{date}</b>, la même position existe toujours — il faudra simplement l’arracher à une recommandation établie au lieu de l’occuper sur un terrain libre.',
  Today: 'Aujourd’hui',
  'Window opened': 'Ouverture de la fenêtre',
  'Advantage holds until': 'L’avantage tient jusqu’au',
  'Window closes': 'Fermeture de la fenêtre',
  'Category language began forming.':
    'Le langage de la catégorie a commencé à se former.',
  'Authority built before this becomes the default answer.':
    'L’autorité construite avant cette date devient la réponse par défaut.',
  'Displacement cost rises materially.':
    'Le coût de déplacement augmente sensiblement.',
  'Why this estimate exists': 'Pourquoi cette estimation existe',
  'Market readiness reads <b>{n} of 100</b>. Buyers are educated. The answers they receive are not yet fixed.':
    'La maturité du marché s’établit à <b>{n} sur 100</b>. Les acheteurs sont informés. Les réponses qu’ils reçoivent ne sont pas encore figées.',

  /* --- The decision journey ----------------------------------------------- */
  'Stage {n}': 'Étape {n}',
  '{volume}/mo · {share}': '{volume}/mois · {share}',
  '{pct} coverage': 'couverture {pct}',
  'Analytics and CRM': 'Analytique et CRM',
  'Requires a visit, form or record to exist':
    'Exige qu’une visite, un formulaire ou une fiche existe',
  'SEO platforms': 'Plateformes SEO',
  'Requires a tracked query with search volume':
    'Exige une requête suivie disposant d’un volume de recherche',
  'Observes the decision itself, at every stage':
    'Observe la décision elle-même, à chaque étape',
  Visible: 'Visible',
  Blind: 'Aveugle',
  'Executive conclusion': 'Conclusion pour la direction',
  'Conventional tooling begins observing at stage four — after the buyer has already decided what to buy and is choosing whom to buy it from.':
    'Les outils conventionnels commencent à observer à la quatrième étape — une fois que l’acheteur a décidé quoi acheter et choisit auprès de qui.',
  'The first three stages generate no visit, click, lead or CRM record. They are not measured badly; they are not measured at all.':
    'Les trois premières étapes ne génèrent ni visite, ni clic, ni prospect, ni fiche CRM. Elles ne sont pas mal mesurées : elles ne le sont pas du tout.',

  /* --- The Google vs AI gap matrix ---------------------------------------- */
  'Compound blind spots': 'Angles morts composés',
  'Absent from both surfaces on high-value questions. The most expensive class of gap.':
    'Absent des deux surfaces sur des questions à forte valeur. La catégorie d’écart la plus coûteuse.',
  'Recoverable search': 'Recherche récupérable',
  'Ranking in Google but absent from AI answers. Existing authority is not reaching the AI surface.':
    'Classé dans Google mais absent des réponses de l’IA. L’autorité existante n’atteint pas la surface de l’IA.',
  Aligned: 'Aligné',
  'Visible in Google and recommended by AI. No action required.':
    'Visible dans Google et recommandé par l’IA. Aucune action requise.',
  'of {total}': 'sur {total}',
  'Commercial question': 'Question commerciale',
  Volume: 'Volume',
  'Google visibility': 'Visibilité Google',
  'AI recommendation': 'Recommandation de l’IA',
  Classification: 'Classification',
  'Not in top 100': 'Hors des 100 premiers',
  'Position {n}': 'Position {n}',
  Recommended: 'Recommandé',
  Absent: 'Absent',
  'Showing {shown} of {total} tracked commercial questions.':
    'Affichage de {shown} questions commerciales suivies sur {total}.',

  /* --- The decision graph -------------------------------------------------- */
  Input: 'Entrée',
  Interpretation: 'Interprétation',
  Market: 'Marché',
  Channel: 'Canal',
  Outcome: 'Résultat',
  Action: 'Action',
  'Decision intelligence graph. Thirteen connected signals ending in a prescription.':
    'Graphe d’intelligence décisionnelle. Treize signaux reliés aboutissant à une prescription.',
  '{label}: {value}. {kind}. {evidence} Activate to open the readout.':
    '{label} : {value}. {kind}. {evidence} Activez pour ouvrir l’analyse.',
  'Hover or focus a node to isolate its relationships. Select any node to open the evidence behind it.':
    'Survolez un nœud ou placez-y le focus pour isoler ses relations. Sélectionnez un nœud pour ouvrir les preuves qui le sous-tendent.',
  'Read the graph as a table': 'Lire le graphe sous forme de tableau',
  Signal: 'Signal',
  Value: 'Valeur',
  'Leads to': 'Mène à',
  Evidence: 'Preuves',

  /* --- Product screen slots ------------------------------------------------- */
  'Awaiting real screen': 'En attente de la capture réelle',
  'Anonymised or demonstration data only. No customer names, domains, personal data or confidential figures.':
    'Données anonymisées ou de démonstration uniquement. Aucun nom de client, domaine, donnée personnelle ni chiffre confidentiel.',
  'Executive Mission Control — full window, all measures visible':
    'Centre de commandement exécutif — fenêtre complète, toutes les mesures visibles',
  'Executive Mission Control. Every measure opens the evidence behind it. Anonymised demonstration data.':
    'Centre de commandement exécutif. Chaque mesure ouvre les preuves qui la sous-tendent. Données de démonstration anonymisées.',
  'Action Plan — the prioritised intervention list':
    'Plan d’action — la liste priorisée des interventions',
  'Every action carries an owner, a deadline and the signal it must move. Anonymised demonstration data.':
    'Chaque action porte un responsable, une échéance et le signal qu’elle doit déplacer. Données de démonstration anonymisées.',

  /* --- Chrome outside the dictionary --------------------------------------- */
  'Switch to light theme': 'Passer au thème clair',
  'Switch to dark theme': 'Passer au thème sombre',
  'Powered by Gintex': 'Propulsé par Gintex',
  'GeoRepute — home': 'GeoRepute — accueil',
  Open: 'Ouvrir',

  /* --- Effort, urgency, trend and confidence chips ------------------------- */
  'low effort': 'effort faible',
  'medium effort': 'effort moyen',
  'high effort': 'effort élevé',
  Immediate: 'Immédiat',
  'This quarter': 'Ce trimestre',
  Monitor: 'À surveiller',
  Improving: 'En amélioration',
  Stable: 'Stable',
  Deteriorating: 'En dégradation',
  High: 'Élevée',
  Medium: 'Moyenne',
  Directional: 'Directionnelle',
  'Insufficient history': 'Historique insuffisant',

  /* --- Score-meter accessible name ------------------------------------------ */
  '{score} out of {max}': '{score} sur {max}',

  /* --- Image credit --------------------------------------------------------- */
  'NASA on Unsplash': 'NASA sur Unsplash',

  /* --- The demonstration's buyer queries -------------------------------------
     Translated rather than left as literal English search strings. A reader is
     being shown what an AI buying decision looks like, and a buyer reading a
     French page types French. FLAGGED FOR THE CLIENT: if the demo is ever
     pointed at a real French-speaking market, these should be replaced with
     the phrases that market actually searches, not translations of the US
     ones — that is a content decision, not a translation one. */
  'Which industrial fastener suppliers are most reliable in the Midwest?':
    'Quels fournisseurs de fixations industrielles sont les plus fiables dans le Midwest ?',
  'industrial fastener supplier': 'fournisseur de fixations industrielles',
  'fastener distributor midwest': 'distributeur de fixations midwest',
  'vendor managed inventory mro': 'gestion des stocks par le fournisseur mro',
  'hydraulic fittings supplier': 'fournisseur de raccords hydrauliques',
  'industrial supply company': 'société de fournitures industrielles',
  'bulk fasteners chicago': 'fixations en vrac chicago',
  'grade 8 bolts bulk': 'boulons classe 8 en vrac',
  'mro distributor': 'distributeur de consommables industriels',

  /* ==========================================================================
     THE HOW-IT-WORKS PAGE.

     Almost all of it comes from the `loop` dictionary block. What lands here
     is the one inline label and the screenshot slots the four stages render —
     ProductScreen puts both `surface` and `caption` through t().
     ======================================================================= */

  'From the platform': 'Depuis la plateforme',

  /* --- PLAN · the diagnosis surfaces --------------------------------------- */
  'Deep Diagnosis — the full scan result across connected signals':
    'Diagnostic approfondi — le résultat complet de l’analyse sur les signaux connectés',
  'Deep Diagnosis across AI engines, search, competitors, market and digital presence. Anonymised demonstration data.':
    'Diagnostic approfondi sur les moteurs d’IA, la recherche, les concurrents, le marché et la présence numérique. Données de démonstration anonymisées.',
  'Competitive Intelligence — the comparison matrix':
    'Intelligence concurrentielle — la matrice de comparaison',
  'Who receives the decision instead, and the evidence that puts them there. Anonymised demonstration data.':
    'Qui reçoit la décision à votre place, et les preuves qui l’y placent. Données de démonstration anonymisées.',
  'AI Intelligence — per-engine recognition and recommendation':
    'Intelligence IA — reconnaissance et recommandation par moteur',
  'What each AI engine understands, and when it recommends. Anonymised demonstration data.':
    'Ce que comprend chaque moteur d’IA, et quand il recommande. Données de démonstration anonymisées.',
  'Google vs AI Visibility — the gap matrix':
    'Visibilité Google face à l’IA — la matrice des écarts',
  'Two discovery surfaces, measured separately. Anonymised demonstration data.':
    'Deux surfaces de découverte, mesurées séparément. Données de démonstration anonymisées.',
  'Market Intelligence — category and demand view':
    'Intelligence de marché — vue catégorie et demande',
  'What is changing in the market, and which of it is addressable. Anonymised demonstration data.':
    'Ce qui change sur le marché, et la part sur laquelle on peut agir. Données de démonstration anonymisées.',
  'Narrative Intelligence — narrative ownership and movement':
    'Intelligence narrative — maîtrise du récit et évolution',
  'Which account of the category is circulating, and whose language it uses. Anonymised demonstration data.':
    'Quelle version de la catégorie circule, et dans le langage de qui elle est formulée. Données de démonstration anonymisées.',
  'Trust & Authority — independent-source verification view':
    'Confiance et autorité — vue de vérification par sources indépendantes',
  'What a system can cite when it has to justify a recommendation. Anonymised demonstration data.':
    'Ce qu’un système peut citer lorsqu’il doit justifier une recommandation. Données de démonstration anonymisées.',

  /* --- DO · the execution surfaces ----------------------------------------- */
  'Strategy — objectives translated into targeted signals':
    'Stratégie — des objectifs traduits en signaux ciblés',
  'Objectives in, prioritised strategy out. Each objective bound to a signal expected to move. Anonymised demonstration data.':
    'Des objectifs en entrée, une stratégie priorisée en sortie. Chaque objectif est rattaché à un signal censé bouger. Données de démonstration anonymisées.',
  'Content & media generation — output bound to identified gaps':
    'Production de contenus et de médias — une production rattachée aux écarts identifiés',
  'Each asset traced back to the gap it was created to close. Anonymised demonstration data.':
    'Chaque contenu remonte jusqu’à l’écart qu’il a été créé pour combler. Données de démonstration anonymisées.',
  'Execution calendar — sequenced distribution':
    'Calendrier d’exécution — diffusion séquencée',
  'Sequence and timing, derived from the strategy rather than from a posting cadence. Anonymised demonstration data.':
    'Séquence et calendrier, dérivés de la stratégie plutôt que d’un rythme de publication. Données de démonstration anonymisées.',
  'Distribution — connected digital assets and publishing state':
    'Diffusion — actifs numériques connectés et état de publication',
  'Where each asset was published, across connected properties. Anonymised demonstration data.':
    'Où chaque contenu a été publié, sur l’ensemble des propriétés connectées. Données de démonstration anonymisées.',

  /* --- CHECK and ACT ------------------------------------------------------- */
  'Measurement — the before → action → after comparison table':
    'Mesure — le tableau comparatif avant → action → après',
  'Not what was published. What changed. Anonymised demonstration data.':
    'Non pas ce qui a été publié. Ce qui a changé. Données de démonstration anonymisées.',
  'Learning — measured outcome feeding the next recommendation':
    'Apprentissage — un résultat mesuré qui alimente la recommandation suivante',
  'The previous recommendation, what it moved, and the corrected recommendation that follows. Anonymised demonstration data.':
    'La recommandation précédente, ce qu’elle a déplacé, et la recommandation corrigée qui en découle. Données de démonstration anonymisées.',

  /* ==========================================================================
     THE METHODOLOGY PAGE.

     The evidence sources, model rules and limitations reach t() through a
     variable rather than a literal, so scripts/i18n-keys.mjs cannot see them.
     They are listed here by hand; the page audit is what catches a miss.
     ======================================================================= */

  /* --- Hero ---------------------------------------------------------------- */
  'The stronger the claim, the stronger the evidence path must be.':
    'Plus l’affirmation est forte, plus le chemin de preuves doit l’être.',
  'Every conclusion in this system can be traced to a date, a source, an engine, a prompt or a connected dataset. This page states how, and where the boundaries are.':
    'Chaque conclusion de ce système peut être remontée jusqu’à une date, une source, un moteur, une requête ou un jeu de données connecté. Cette page explique comment, et où se situent les limites.',
  'Methodology version {version} · observed {date}':
    'Méthodologie version {version} · observé le {date}',

  /* --- GEON ---------------------------------------------------------------- */
  'The GEON framework': 'Le cadre GEON',
  'Six vectors, one published weighting': 'Six vecteurs, une pondération publiée',
  'The Decision Health Index is a weighted function of these six vectors — not a score assigned by judgement. The weighting is published below so the index can be recomputed independently.':
    'L’indice de santé décisionnelle est une fonction pondérée de ces six vecteurs — non une note attribuée au jugement. La pondération est publiée ci-dessous afin que l’indice puisse être recalculé de façon indépendante.',
  'Decision Health Index weighting': 'Pondération de l’indice de santé décisionnelle',
  'Yields <b>{score} of 100</b> for the seeded organisation. Authority carries the heaviest weight and the lowest score, which is why it is the binding constraint.':
    'Donne <b>{score} sur 100</b> pour l’organisation de démonstration. L’autorité porte le poids le plus lourd et la note la plus basse, ce qui en fait la contrainte déterminante.',
  'GEON assessment. {readings}. Lowest vector is {lowest}.':
    'Évaluation GEON. {readings}. Le vecteur le plus bas est {lowest}.',
  '{label} {score} of 100': '{label} {score} sur 100',

  /* --- Evidence sources ---------------------------------------------------- */
  'Where the observations come from': 'D’où proviennent les observations',
  'This environment observes <b>{questions}</b> decision questions across six AI engines, and <b>{keywords}</b> commercial keywords in Google.':
    'Cet environnement observe <b>{questions}</b> questions décisionnelles sur six moteurs d’IA, et <b>{keywords}</b> mots-clés commerciaux dans Google.',
  'Public AI responses': 'Réponses publiques des IA',
  'Answers observed from six engines against a fixed question set, recorded with engine, date and full response.':
    'Réponses observées sur six moteurs à partir d’un jeu de questions fixe, consignées avec le moteur, la date et la réponse intégrale.',
  'Third-party search and market data':
    'Données tierces de recherche et de marché',
  'Keyword volume, organic position, competition and cost per click.':
    'Volume des mots-clés, position organique, concurrence et coût par clic.',
  'Connected first-party analytics': 'Analytique propriétaire connectée',
  'Search Console and Analytics, where the customer connects them. Improves confidence; never required.':
    'Search Console et Analytics, lorsque le client les connecte. Améliorent la confiance ; jamais obligatoires.',
  'Public competitor information': 'Informations publiques sur les concurrents',
  'Published positions, citations and the sources engines reach for when recommending a competitor.':
    'Positions publiées, citations et sources auxquelles les moteurs recourent lorsqu’ils recommandent un concurrent.',
  'Public content, reputation and trust signals':
    'Contenu public, réputation et signaux de confiance',
  'Independent validation, review corpora and cross-source consistency.':
    'Validation indépendante, corpus d’avis et cohérence entre les sources.',
  'Customer-configured business assumptions':
    'Hypothèses métier configurées par le client',
  'Average deal value, conversion rates and revenue split by decision stage. Always labelled as customer-provided.':
    'Valeur moyenne d’une affaire, taux de conversion et répartition du chiffre d’affaires par étape décisionnelle. Toujours signalées comme fournies par le client.',
  'Historical GeoRepute scans and action outcomes':
    'Analyses GeoRepute antérieures et résultats des actions',
  'Prior observations and whether an executed action moved the signal it targeted.':
    'Observations antérieures et constat de savoir si une action exécutée a déplacé le signal qu’elle visait.',

  /* --- Confidence ---------------------------------------------------------- */
  'Every conclusion carries its own confidence':
    'Chaque conclusion porte sa propre confiance',
  'Confidence is attached to the individual conclusion, not to the product. Two findings in the same readout can carry different confidence, and they frequently do.':
    'La confiance est rattachée à la conclusion individuelle, non au produit. Deux constats d’une même analyse peuvent porter des niveaux de confiance différents, et c’est fréquemment le cas.',

  /* --- Financial model ----------------------------------------------------- */
  'Financial model': 'Modèle financier',
  'Directional, ranged, and never described as confirmed':
    'Directionnel, exprimé en fourchettes, et jamais décrit comme confirmé',
  'The model': 'Le modèle',
  'All values are shown as ranges, never as point estimates.':
    'Toutes les valeurs sont présentées en fourchettes, jamais en estimations ponctuelles.',
  'No value is described as confirmed lost revenue.':
    'Aucune valeur n’est décrite comme un chiffre d’affaires perdu confirmé.',
  'Every model exposes its assumptions and data boundaries.':
    'Chaque modèle expose ses hypothèses et ses limites de données.',
  'Connected first-party conversion data improves confidence.':
    'Les données de conversion propriétaires connectées améliorent la confiance.',
  'Prediction is withheld when history is insufficient.':
    'La prédiction est suspendue lorsque l’historique est insuffisant.',
  'Every exported brief carries methodology and limitation language.':
    'Chaque note exportée reprend le libellé de méthodologie et de limites.',
  'Search economics, derived': 'Économie de la recherche, calculée',
  'Blended CPC': 'CPC mixte',
  /* 'Break-even CPC' and 'Above break-even' already have entries in the seed
     section below. */
  'Break-even is average order value × gross margin × site conversion. Paid dependency is classified from the ratio of blended CPC to break-even — it is derived, never asserted.':
    'Le seuil de rentabilité correspond au panier moyen × marge brute × conversion du site. La dépendance au payant est classée à partir du rapport entre le CPC mixte et ce seuil : elle est calculée, jamais affirmée.',

  /* --- Limitations --------------------------------------------------------- */
  Limitations: 'Limites',
  'What this system cannot tell you': 'Ce que ce système ne peut pas vous dire',
  'AI engine answers vary between runs and between users. Observations are point-in-time samples, not guarantees of what any individual buyer sees.':
    'Les réponses des moteurs d’IA varient d’une exécution à l’autre et d’un utilisateur à l’autre. Les observations sont des échantillons à un instant donné, non des garanties de ce que voit un acheteur donné.',
  'Commercial exposure is a directional model built on customer-configured assumptions. It is useful for prioritisation and is not an audited financial statement.':
    'L’exposition commerciale est un modèle directionnel bâti sur des hypothèses configurées par le client. Elle sert à prioriser et ne constitue pas un état financier audité.',
  'Attribution between an executed action and a signal movement is correlational. The system records both and reports the relationship; it does not claim causation.':
    'Le lien entre une action exécutée et le déplacement d’un signal est corrélationnel. Le système consigne les deux et rend compte de la relation ; il ne revendique aucune causalité.',
  'Competitor authority counts reflect sources engines cite publicly. A competitor may hold private advantages this system cannot observe.':
    'Le décompte des sources d’autorité des concurrents reflète ce que les moteurs citent publiquement. Un concurrent peut détenir des avantages privés que ce système ne peut observer.',
  'Where history is insufficient, predictive conclusions are withheld rather than estimated.':
    'Lorsque l’historique est insuffisant, les conclusions prédictives sont suspendues plutôt qu’estimées.',
  'This demonstration environment': 'Cet environnement de démonstration',
  'Northwind Supply is a fictional organisation. Its figures are seeded, internally consistent and derived from a single set of anchor facts — <b>{presence}</b> recommendation presence, <b>{coverage}</b> supplier-evaluation coverage, <b>{share}</b> competitor share. Every other number on this site is computed from those, and a test suite fails the build if any screen disagrees.':
    'Northwind Supply est une organisation fictive. Ses chiffres proviennent de données de départ, sont cohérents entre eux et dérivés d’un jeu unique de faits d’ancrage — <b>{presence}</b> de présence dans les recommandations, <b>{coverage}</b> de couverture à l’évaluation des fournisseurs, <b>{share}</b> de part concurrente. Tous les autres chiffres du site en sont calculés, et une suite de tests fait échouer la compilation si un écran les contredit.',
  'Open Mission Control': 'Ouvrir le centre de commandement',
  'See the engines': 'Voir les moteurs',

  /* ==========================================================================
     THE SEED DATA — signal names, readout prose and marketplace copy.
     ======================================================================= */

  /* --- GEON vector definitions -------------------------------------------- */
  'Whether systems understand what the business does, who it serves and when to recommend it.':
    'Si les systèmes comprennent ce que fait l’entreprise, qui elle sert et quand la recommander.',
  'The strength of reputation, validation and proof surrounding the business.':
    'La force de la réputation, des validations et des preuves qui entourent l’entreprise.',
  'How consistently the business appears across AI and digital environments.':
    'La constance avec laquelle l’entreprise apparaît dans les environnements d’IA et numériques.',
  'Whether the same accurate story appears across channels, markets and languages.':
    'Si le même récit exact apparaît à travers les canaux, les marchés et les langues.',
  'How closely positioning matches customer demand and buying intent.':
    'À quel point le positionnement correspond à la demande des clients et à l’intention d’achat.',
  'Whether the business is recognized as a credible expert or category leader.':
    'Si l’entreprise est reconnue comme un expert crédible ou un leader de catégorie.',

  /* --- Engine business questions ------------------------------------------ */
  'Does AI know the business exists, and what does it think it is?':
    'L’IA sait-elle que l’entreprise existe, et que pense-t-elle qu’elle est ?',
  'Do the two discovery surfaces agree, and what is the gap costing?':
    'Les deux surfaces de découverte concordent-elles, et combien coûte l’écart ?',
  'Who receives the decision instead, and what do they have?':
    'Qui reçoit la décision à votre place, et de quoi dispose-t-il ?',
  'What must happen next, by whom and by when?':
    'Que doit-il se passer ensuite, par qui et pour quand ?',
  'Where do competitors receive the decision before the business receives the lead?':
    'Où les concurrents reçoivent-ils la décision avant que l’entreprise ne reçoive le prospect ?',
  'Do AI engines understand who the business is and when it should be considered?':
    'Les moteurs d’IA comprennent-ils qui est l’entreprise et quand elle doit être envisagée ?',
  'Does the business exist consistently across traditional search and AI-mediated discovery?':
    'L’entreprise existe-t-elle de façon cohérente dans la recherche traditionnelle et dans la découverte médiée par l’IA ?',
  'Whose language does the market use to describe your category?':
    'De quel langage le marché se sert-il pour décrire votre catégorie ?',
  'Is the market ready, and does the route to it hold?':
    'Le marché est-il prêt, et la route qui y mène tient-elle ?',

  /* --- Readout evidence and executive truths ------------------------------ */
  'Decision Health reads 41 of 100, held down primarily by Authority at 28.':
    'La santé décisionnelle s’établit à 41 sur 100, freinée principalement par l’autorité à 28.',
  'Authority carries the heaviest index weight and the largest deficit.':
    'L’autorité porte le poids le plus lourd de l’indice et le déficit le plus important.',
  'GEON Authority 28 — the lowest of six vectors.':
    'Autorité GEON à 28 — le plus bas des six vecteurs.',
  'Three independent sources reference Northwind; the competitor median is fourteen.':
    'Trois sources indépendantes citent Northwind ; la médiane des concurrents est de quatorze.',
  'No published supplier-comparison material for engines to cite.':
    'Aucun matériel de comparaison de fournisseurs publié que les moteurs pourraient citer.',
  'Category description differs between the website and two trade directories.':
    'La description de la catégorie diffère entre le site web et deux annuaires professionnels.',
  'Three of six engines misidentify the category.':
    'Trois moteurs sur six identifient mal la catégorie.',
  'No stable entity record. Answers reference the category without naming Northwind at all.':
    'Aucune fiche d’entité stable. Les réponses évoquent la catégorie sans jamais nommer Northwind.',
  'Kestrel Industrial leads five of seven supplier questions.':
    'Kestrel Industrial domine cinq des sept questions relatives aux fournisseurs.',
  'Engines cite a competitor’s evaluation criteria first.':
    'Les moteurs citent d’abord les critères d’évaluation d’un concurrent.',
  'Eleven tracked keywords sit outside the top ten.':
    'Onze mots-clés suivis se situent hors des dix premières positions.',
  'Blended CPC $9.03 against break-even $6.13.':
    'CPC mixte de 9,03 $ contre un seuil de rentabilité à 6,13 $.',
  '6 recommendation events across 144 answer slots.':
    '6 occurrences de recommandation sur 144 emplacements de réponse.',
  'Supplier-evaluation coverage — the stage deciding 60% of revenue.':
    'Couverture de l’évaluation des fournisseurs — l’étape qui décide de 60 % du chiffre d’affaires.',
  'Supplier-evaluation phrasing still varied — the category has no fixed vocabulary yet.':
    'Les formulations à l’étape d’évaluation des fournisseurs varient encore — la catégorie n’a pas encore de vocabulaire fixe.',
  '63 of 100 — buyers are educated, answers are not yet fixed.':
    '63 sur 100 — les acheteurs sont informés, les réponses ne sont pas encore figées.',
  'Demand × decision gap × estimated conversion × average deal value.':
    'Demande × écart décisionnel × conversion estimée × valeur moyenne d’une affaire.',

  /* --- The action plan ----------------------------------------------------- */
  'Direct investment at Authority first — it carries the highest weight and the largest deficit.':
    'Orientez d’abord l’investissement vers l’autorité — elle porte le poids le plus élevé et le déficit le plus important.',
  'Build supplier-comparison content against the six highest-volume missed decision questions.':
    'Créez du contenu de comparaison de fournisseurs pour les six questions décisionnelles manquées au plus fort volume.',
  'Strengthen independent authority evidence and supplier-comparison coverage.':
    'Renforcez les preuves d’autorité indépendantes et la couverture de comparaison des fournisseurs.',
  'Resolve the Gemini entity conflation with the same-named logistics firm.':
    'Résolvez la confusion d’entité dans Gemini avec la société de logistique homonyme.',
  'Reallocate paid spend from keywords with a viable organic replacement path.':
    'Réaffectez les dépenses payantes des mots-clés disposant d’une voie de remplacement organique viable.',
  'Response time cited among the first three criteria by 3 of 6 engines':
    'Délai de réponse cité parmi les trois premiers critères par 3 moteurs sur 6',
  'Gemini resolves the correct entity on 4 of 6 category questions':
    'Gemini identifie la bonne entité sur 4 des 6 questions de catégorie',
  'Blended CPC below break-even on reallocated set':
    'CPC mixte sous le seuil de rentabilité sur l’ensemble réaffecté',
  'Category association correct on 5 of 6 engines':
    'Association de catégorie correcte sur 5 moteurs sur 6',
  'Gemini recognition 24 → 45': 'Reconnaissance Gemini 24 → 45',

  /* --- Composite measures and the GEON vectors ---------------------------- */
  'Methodology GEON-2.4': 'Méthodologie GEON-2.4',
  'Decision Health Index': 'Indice de santé décisionnelle',
  'Decision Health Index at 41 of 100':
    'Indice de santé décisionnelle à 41 sur 100',
  'Decision Health Index 41 → 56/100':
    'Indice de santé décisionnelle 41 → 56/100',
  Composite: 'Composite',
  'Composite model': 'Modèle composite',
  'Index weighting': 'Pondération de l’indice',
  'GEON vectors': 'Vecteurs GEON',
  'GEON Authority': 'Autorité GEON',
  'GEON Trust': 'Confiance GEON',
  'GEON Authority 28 → 45/100': 'Autorité GEON 28 → 45/100',
  '38 of 100 average': '38 sur 100 en moyenne',
  '44 of 100': '44 sur 100',
  '28 of 100': '28 sur 100',
  'The index is a weighted function of the six GEON vectors, not a score assigned by judgement. Market Fit at 72 confirms the offer matches demand; the constraint is entirely on the evidence side.':
    'L’indice est une fonction pondérée des six vecteurs GEON, non une note attribuée au jugement. L’adéquation au marché à 72 confirme que l’offre correspond à la demande ; la contrainte se situe entièrement du côté des preuves.',
  'Recompute the index from re-observed GEON vectors monthly. The weighting is published and versioned.':
    'Recalculez l’indice à partir des vecteurs GEON réobservés chaque mois. La pondération est publiée et versionnée.',

  /* --- Recognition --------------------------------------------------------- */
  'Recognition by engine': 'Reconnaissance par moteur',
  'AI Recognition Matrix': 'Matrice de reconnaissance par l’IA',
  'AI Recognition Intelligence': 'Intelligence de reconnaissance par l’IA',
  'AI Visibility Intelligence': 'Intelligence de visibilité dans l’IA',
  'AI Search Presence': 'Présence dans la recherche IA',
  'Entity Understanding': 'Compréhension de l’entité',
  'Entity category association': 'Association de l’entité à une catégorie',
  'Category association': 'Association de catégorie',
  'Entity disambiguation': 'Désambiguïsation de l’entité',
  'Entity record': 'Fiche d’entité',
  'Confusion detection': 'Détection de confusion',
  'Confusion Detector': 'Détecteur de confusion',
  'Outdated knowledge': 'Connaissances obsolètes',
  'Average recognition score': 'Score de reconnaissance moyen',
  'Average recognition score 38 → 55':
    'Score de reconnaissance moyen 38 → 55',
  'Average recognition score 38 → 55/100':
    'Score de reconnaissance moyen 38 → 55/100',
  'Correctly categorised by all six engines.':
    'Correctement catégorisée par les six moteurs.',
  'All six engines': 'Les six moteurs',
  'Incomplete on 3 engines': 'Incomplet sur 3 moteurs',
  Inconsistent: 'Incohérent',
  'Recognition decay': 'Érosion de la reconnaissance',
  'AI understanding': 'Compréhension par l’IA',
  'An engine that cannot categorise a business cannot recommend it. This is upstream of every visibility metric: no amount of content moves an answer if the entity record is wrong.':
    'Un moteur incapable de catégoriser une entreprise ne peut pas la recommander. Cela se situe en amont de toute métrique de visibilité : aucun volume de contenu ne déplace une réponse si la fiche d’entité est fausse.',
  'Recognition is never uniform. A business can be well understood by one engine and structurally invisible to another that a different half of its buyers use.':
    'La reconnaissance n’est jamais uniforme. Une entreprise peut être bien comprise par un moteur et structurellement invisible pour un autre qu’utilise une autre moitié de ses acheteurs.',
  'Whether AI systems hold an accurate, current and unambiguous record of the business, and whether that record survives into the answers buyers receive. Everything else on this page is downstream of it — no measure improves while the underlying record is wrong.':
    'Si les systèmes d’IA détiennent une fiche exacte, à jour et sans ambiguïté de l’entreprise, et si cette fiche subsiste jusque dans les réponses que reçoivent les acheteurs. Tout le reste de cette page en découle : aucune mesure ne s’améliore tant que la fiche sous-jacente est fausse.',
  'Whether the business is filed under the categories buyers actually ask about, or under one that is accurate but that nobody searches.':
    'Si l’entreprise est classée dans les catégories sur lesquelles les acheteurs interrogent réellement, ou dans une catégorie exacte mais que personne ne recherche.',
  'Contradictions across the public record — different categories, claims or descriptions between the site, directories and third-party profiles.':
    'Contradictions dans les données publiques — catégories, affirmations ou descriptions différentes entre le site, les annuaires et les profils tiers.',
  'The distance between what a company says it is and what machines have independently concluded it is — usually wider than any executive expects.':
    'L’écart entre ce qu’une entreprise dit être et ce que les machines ont conclu de façon indépendante — généralement plus large que ne l’imagine aucun dirigeant.',
  'Consistent category language across its own site, trade directories and three independent publications gives engines a single unambiguous record to resolve.':
    'Un langage de catégorie cohérent sur son propre site, dans les annuaires professionnels et trois publications indépendantes donne aux moteurs une fiche unique et sans ambiguïté à résoudre.',
  'Three of six engines misclassify what Northwind sells. No content investment can move an answer while the entity record is wrong.':
    'Trois moteurs sur six classent mal ce que vend Northwind. Aucun investissement en contenu ne peut déplacer une réponse tant que la fiche d’entité est fausse.',
  'Three of six AI engines misidentify what Northwind sells, and one does not recognise it as a distinct business at all.':
    'Trois moteurs d’IA sur six identifient mal ce que vend Northwind, et un ne la reconnaît pas du tout comme une entreprise distincte.',
  'Gemini recognises Northwind at 24 of 100 and recommends it in zero questions. The cause is a disambiguation failure, not a content gap.':
    'Gemini reconnaît Northwind à 24 sur 100 et ne la recommande dans aucune question. La cause est un échec de désambiguïsation, non un manque de contenu.',
  'Publish a single canonical entity description and propagate identical category language to trade directories and structured data.':
    'Publiez une description d’entité canonique unique et propagez un langage de catégorie identique vers les annuaires professionnels et les données structurées.',
  'Publish a canonical entity description and propagate identical category language to trade directories and structured data.':
    'Publiez une description d’entité canonique et propagez un langage de catégorie identique vers les annuaires professionnels et les données structurées.',
  'Publish a canonical entity description and propagate identical…':
    'Publiez une description d’entité canonique et propagez un langage identique…',
  'Re-observe entity understanding per engine. Success is category association correct on five of six engines.':
    'Réobservez la compréhension de l’entité moteur par moteur. Le succès correspond à une association de catégorie correcte sur cinq moteurs sur six.',
  'Resolve category description inconsistency across all public sources, then pursue verifiable third-party validation.':
    'Résolvez l’incohérence de la description de catégorie sur toutes les sources publiques, puis recherchez une validation tierce vérifiable.',

  /* --- Decision stage and recommendation ---------------------------------- */
  'Decision-stage control': 'Maîtrise de l’étape décisionnelle',
  'Decision stage': 'Étape décisionnelle',
  'Decision volume': 'Volume de décisions',
  'AI recommendation presence': 'Présence dans les recommandations de l’IA',
  'Recommendation share': 'Part de recommandations',
  'Recommendation share 4.2 → 11%': 'Part de recommandations 4,2 → 11 %',
  'Recommendation analysis': 'Analyse des recommandations',
  'Recommendation Map': 'Carte des recommandations',
  'Competitor recommendation share': 'Part de recommandations du concurrent',
  'Competitor share': 'Part du concurrent',
  'Competitor capture': 'Captation par le concurrent',
  'Questions with AI presence': 'Questions avec présence dans l’IA',
  'Questions with presence': 'Questions avec présence',
  'Questions with presence 5 → 12 of 24':
    'Questions avec présence 5 → 12 sur 24',
  'Prompt coverage': 'Couverture des requêtes',
  'Missed prompts': 'Requêtes manquées',
  'Missed Prompts': 'Requêtes manquées',
  'Winning prompts': 'Requêtes gagnées',
  'Query Inventory': 'Inventaire des requêtes',
  'Presence on 12 of 24 tracked questions':
    'Présence sur 12 des 24 questions suivies',
  'Supplier-evaluation first mention':
    'Première mention à l’évaluation des fournisseurs',
  'Supplier-evaluation coverage': 'Couverture de l’évaluation des fournisseurs',
  'Supplier-evaluation coverage 7% → 19%':
    'Couverture de l’évaluation des fournisseurs 7 % → 19 %',
  'Supplier-evaluation coverage 7 → 19%':
    'Couverture de l’évaluation des fournisseurs 7 → 19 %',
  '7% → 19% target': 'objectif 7 % → 19 %',
  'Share of decisions rather than share of traffic — measured where the choice is actually made rather than where it is later recorded.':
    'Part des décisions plutôt que part du trafic — mesurée là où le choix se fait réellement, et non là où il est enregistré ensuite.',
  'Position measured only on questions that decide a purchase, with the vanity terms that inflate most reporting deliberately excluded.':
    'Position mesurée uniquement sur les questions qui décident d’un achat, les termes de vanité qui gonflent la plupart des rapports étant délibérément exclus.',
  'The named questions a rival wins every time, which is what converts a vague sense of losing into a finite list of things to go and fix.':
    'Les questions précises qu’un rival remporte à chaque fois — ce qui transforme un vague sentiment de perte en une liste finie de choses à corriger.',
  'These are not lost leads, because no lead was ever created. The decision completed inside the engine, and conventional analytics recorded nothing at all.':
    'Ce ne sont pas des prospects perdus, car aucun prospect n’a jamais été créé. La décision s’est achevée dans le moteur, et l’analytique conventionnelle n’a rien enregistré.',
  'Nineteen of twenty-four decisions complete without the brand. These six carry the largest share of decision-stage demand.':
    'Dix-neuf décisions sur vingt-quatre s’achèvent sans la marque. Ces six-là concentrent la plus grande part de la demande à l’étape décisionnelle.',
  'Northwind appears in 7% of supplier-evaluation answers — the stage that decides 60% of revenue and that Kestrel controls in five of seven questions.':
    'Northwind apparaît dans 7 % des réponses d’évaluation de fournisseurs — l’étape qui décide de 60 % du chiffre d’affaires et que Kestrel contrôle sur cinq questions sur sept.',
  'The stage that decides 60% of revenue carries under 15% of query volume — so the weakness is invisible to volume-led tooling.':
    'L’étape qui décide de 60 % du chiffre d’affaires représente moins de 15 % du volume de requêtes — la faiblesse est donc invisible aux outils pilotés par le volume.',
  'The stage where the vendor is chosen. Presence here decides whether the business reaches the shortlist at all.':
    'L’étape où le fournisseur est choisi. La présence ici décide si l’entreprise atteint seulement la liste restreinte.',
  'Buyers at supplier evaluation have already chosen a solution and are choosing a vendor. This stage carries under 15% of query volume, so volume-led tooling ranks it as unimportant — while it decides most of the revenue. Absence here is exclusion from the shortlist at the moment the order is assigned.':
    'À l’étape d’évaluation des fournisseurs, les acheteurs ont déjà choisi une solution et choisissent un fournisseur. Cette étape représente moins de 15 % du volume de requêtes : les outils pilotés par le volume la jugent donc secondaire, alors qu’elle décide de l’essentiel du chiffre d’affaires. Une absence ici équivaut à une exclusion de la liste restreinte au moment où la commande est attribuée.',
  'Prioritise the six highest-volume missed questions and publish material that answers each one directly and citably.':
    'Priorisez les six questions manquées au plus fort volume et publiez des contenus qui répondent à chacune directement et de façon citable.',
  'Re-run all 24 questions monthly across all six engines; record presence per engine per question.':
    'Relancez les 24 questions chaque mois sur les six moteurs ; consignez la présence par moteur et par question.',
  'Re-run the supplier-evaluation prompt set monthly. Coverage is verified by recommendation slots won across all six engines, not by traffic.':
    'Relancez chaque mois le jeu de requêtes d’évaluation des fournisseurs. La couverture se vérifie aux emplacements de recommandation gagnés sur les six moteurs, non au trafic.',
  'Recommendation share re-measured across the same 24 questions monthly, with engine and date recorded per observation.':
    'Part de recommandations remesurée chaque mois sur les mêmes 24 questions, avec moteur et date consignés pour chaque observation.',

  /* --- Authority and sources ----------------------------------------------- */
  'Independent authority evidence': 'Preuves d’autorité indépendantes',
  'Independent authority evidence is weak':
    'Les preuves d’autorité indépendantes sont faibles',
  'Independent authority sources cited':
    'Sources d’autorité indépendantes citées',
  'Independent sources': 'Sources indépendantes',
  'Independent source count': 'Nombre de sources indépendantes',
  'Independent source count 3 → 12': 'Nombre de sources indépendantes 3 → 12',
  'Independent validation': 'Validation indépendante',
  '3 independent sources': '3 sources indépendantes',
  '3 sources against a category median of 14.':
    '3 sources contre une médiane de catégorie de 14.',
  'Category median is 14. Kestrel holds 21.':
    'La médiane de la catégorie est de 14. Kestrel en détient 21.',
  'Kestrel 21 sources, Northwind 3.': 'Kestrel 21 sources, Northwind 3.',
  'Weak — 3 sources': 'Faible — 3 sources',
  'Authority evidence': 'Preuves d’autorité',
  'Authority Signals': 'Signaux d’autorité',
  'Authority drivers': 'Moteurs de l’autorité',
  'Authority first': 'L’autorité d’abord',
  'Authority Gap': 'Écart d’autorité',
  Authority: 'Autorité',
  'Source authority': 'Autorité de la source',
  'Source advantage': 'Avantage en sources',
  'Source influence': 'Influence de la source',
  'Source Influence Map': 'Carte d’influence des sources',
  Citations: 'Citations',
  'Citation analysis': 'Analyse des citations',
  'Engine citation analysis': 'Analyse des citations par moteur',
  'Cross-source comparison': 'Comparaison entre sources',
  'Trade publication coverage': 'Couverture par la presse professionnelle',
  'Public review platforms': 'Plateformes d’avis publiques',
  'Review corpus': 'Corpus d’avis',
  'Public web': 'Web public',
  'Mentions weighted by the credibility of the source, so fifty low-authority listings stop reading as a stronger position than three real ones.':
    'Mentions pondérées par la crédibilité de la source, afin que cinquante inscriptions peu fiables cessent d’apparaître comme une position plus forte que trois véritables.',
  'Which claims stand on third-party evidence and which stand only on the company’s own website — machines weight the two very differently.':
    'Quelles affirmations reposent sur des preuves tierces et lesquelles ne reposent que sur le site de l’entreprise — les machines pondèrent les deux très différemment.',
  'Engines do not recommend what they cannot corroborate. Authority is the lowest GEON vector at 28 of 100, and it is the constraint that holds every other signal down.':
    'Les moteurs ne recommandent pas ce qu’ils ne peuvent corroborer. L’autorité est le vecteur GEON le plus bas, à 28 sur 100, et c’est la contrainte qui retient tous les autres signaux.',
  'Authority is the lowest GEON vector at 28 and carries the heaviest index weight. It is the constraint holding recognition, recommendation share and coverage down.':
    'L’autorité est le vecteur GEON le plus bas, à 28, et porte le poids le plus lourd de l’indice. C’est la contrainte qui retient la reconnaissance, la part de recommandations et la couverture.',
  'Engines cannot corroborate a recommendation from three sources when the category median is fourteen.':
    'Les moteurs ne peuvent corroborer une recommandation à partir de trois sources quand la médiane de la catégorie est de quatorze.',
  'Publish an independent, verifiable supplier-comparison resource and secure third-party validation in at least two trade publications.':
    'Publiez une ressource de comparaison de fournisseurs indépendante et vérifiable, et obtenez une validation tierce dans au moins deux publications professionnelles.',
  'Secure independent validation: trade-publication contribution, verifiable customer outcomes and third-party specification references.':
    'Obtenez une validation indépendante : contribution à la presse professionnelle, résultats clients vérifiables et références de spécifications tierces.',
  'Independent source count re-observed monthly, with each new source recorded by publication and date.':
    'Nombre de sources indépendantes réobservé chaque mois, chaque nouvelle source étant consignée avec sa publication et sa date.',
  'Build supplier-comparison content against the eleven compound and strategic blind-spot questions, structured so it is both rankable and citable.':
    'Créez du contenu de comparaison de fournisseurs pour les onze questions en angle mort composé et stratégique, structuré pour être à la fois classable et citable.',

  /* --- Trust ---------------------------------------------------------------- */
  Trust: 'Confiance',
  'Trust decay': 'Érosion de la confiance',
  'Trust readiness': 'Préparation à la confiance',
  'Trust Intelligence': 'Intelligence de la confiance',
  'Trust and Authority Diagnostics': 'Diagnostics de confiance et d’autorité',
  'Reputation consistency': 'Cohérence de la réputation',
  'Reputation Momentum': 'Dynamique de réputation',
  Consistency: 'Cohérence',
  'Is the business safe to recommend?':
    'Est-il sûr de recommander cette entreprise ?',
  'Buyer Confidence': 'Confiance de l’acheteur',
  'Visibility creates attention; trust creates selection. A business can be perfectly visible and still be filtered out at the moment a system has to stand behind naming it first, and the reasons for that are specific and fixable.':
    'La visibilité crée l’attention ; la confiance crée la sélection. Une entreprise peut être parfaitement visible et pourtant être écartée au moment où un système doit assumer de l’avoir nommée en premier — et les raisons en sont précises et corrigeables.',
  'Visibility creates attention; trust creates selection. A business can be found and still be filtered out at the moment an engine has to stand behind a recommendation.':
    'La visibilité crée l’attention ; la confiance crée la sélection. Une entreprise peut être trouvée et pourtant écartée au moment où un moteur doit assumer une recommandation.',
  'Trust reads 44 of 100 while Market Fit reads 72 — the offer matches demand, but the proof does not support a recommendation.':
    'La confiance s’établit à 44 sur 100 tandis que l’adéquation au marché atteint 72 — l’offre correspond à la demande, mais les preuves ne soutiennent pas une recommandation.',

  /* --- Competitive ---------------------------------------------------------- */
  'Competitive Intelligence': 'Intelligence concurrentielle',
  'Competitor Decision Intelligence':
    'Intelligence décisionnelle concurrentielle',
  'Executive Intelligence': 'Intelligence pour la direction',
  'Competitive density': 'Densité concurrentielle',
  Replaceability: 'Remplaçabilité',
  'Replaceability Index': 'Indice de remplaçabilité',
  'Distributor alignment': 'Alignement des distributeurs',
  'Distributor Map': 'Carte des distributeurs',
  'Northwind differentiators': 'Facteurs de différenciation de Northwind',
  'Evaluation criteria cited': 'Critères d’évaluation cités',
  'Strength Drivers': 'Moteurs de la force',
  Vulnerability: 'Vulnérabilité',
  Fragility: 'Fragilité',
  Dependency: 'Dépendance',
  'Dependency Risk': 'Risque de dépendance',
  'Northwind listed fourth of five suppliers.':
    'Northwind est citée quatrième sur cinq fournisseurs.',
  'Absent. Meridian named first.': 'Absente. Meridian citée en premier.',
  'Absent. 35 searches per month.': 'Absente. 35 recherches par mois.',
  'Not who ranks above you — who gets recommended when a buyer asks a machine whom to choose. The useful output is never the share figure; it is the specific evidence a competitor supplies that you do not, because that is the part you can go and close.':
    'Non pas qui se classe au-dessus de vous, mais qui est recommandé quand un acheteur demande à une machine qui choisir. Le résultat utile n’est jamais le chiffre de part de marché : c’est la preuve précise qu’un concurrent fournit et que vous ne fournissez pas, car c’est cela que vous pouvez aller combler.',
  'Some rivals win early by shaping the criteria; others win late at vendor selection. The counter-move is completely different for each.':
    'Certains rivaux gagnent tôt en façonnant les critères ; d’autres gagnent tard, à la sélection du fournisseur. La contre-attaque est totalement différente dans chaque cas.',
  'Where a position rests on a single source or a single page, and would not survive one competitor publishing a better one.':
    'Là où une position repose sur une seule source ou une seule page, et ne survivrait pas à la publication d’une meilleure par un concurrent.',
  'Kestrel is cited by three independent trade publications and maintains a public supplier-comparison library. Engines reach for that evidence when a buyer asks whom to choose.':
    'Kestrel est citée par trois publications professionnelles indépendantes et entretient une bibliothèque publique de comparaison de fournisseurs. Les moteurs puisent dans ces preuves quand un acheteur demande qui choisir.',
  'Kestrel receives 31% of all AI recommendations across the tracked decision set; Northwind receives 4.2%.':
    'Kestrel reçoit 31 % de toutes les recommandations de l’IA sur l’ensemble des décisions suivies ; Northwind en reçoit 4,2 %.',
  'Receives 31% of all recommendations and is named first in four of seven supplier-evaluation answers.':
    'Reçoit 31 % de toutes les recommandations et est citée en premier dans quatre des sept réponses d’évaluation de fournisseurs.',
  'This gap is not brand preference. It is an evidence gap: Kestrel supplies engines with material they can cite, and Northwind does not. The lead never reaches the CRM because the decision resolved before contact.':
    'Cet écart n’est pas une préférence de marque, mais un écart de preuves : Kestrel fournit aux moteurs des éléments qu’ils peuvent citer, Northwind non. Le prospect n’atteint jamais le CRM parce que la décision s’est tranchée avant tout contact.',
  'Sustained trade-publication presence means engines can support a Kestrel recommendation with evidence that is not Kestrel’s own.':
    'Une présence soutenue dans la presse professionnelle permet aux moteurs d’étayer une recommandation de Kestrel par des preuves qui ne viennent pas de Kestrel elle-même.',
  'Its supplier-comparison library ranks organically and is the source engines cite, so one asset serves both surfaces.':
    'Sa bibliothèque de comparaison de fournisseurs se classe organiquement et constitue la source que citent les moteurs : un seul actif sert donc les deux surfaces.',
  'Kestrel has published material addressing each question directly; engines reach for what exists.':
    'Kestrel a publié des contenus traitant directement chaque question ; les moteurs puisent dans ce qui existe.',
  'Holds top-three organic positions and AI presence on the four highest-volume commercial questions.':
    'Occupe les trois premières positions organiques et une présence dans l’IA sur les quatre questions commerciales au plus fort volume.',
  'Publishing evaluation criteria before competitors did made that framing the one engines learned.':
    'Avoir publié les critères d’évaluation avant les concurrents a fait de ce cadrage celui que les moteurs ont appris.',
  'Halvorsen owns early-stage research questions, entering the decision before evaluation begins.':
    'Halvorsen possède les questions de recherche en amont, entrant dans la décision avant même que l’évaluation ne commence.',
  'Owned authority removes the need to bid, so Kestrel’s cost per decision falls as Northwind’s rises.':
    'Une autorité détenue en propre supprime le besoin d’enchérir : le coût par décision de Kestrel baisse tandis que celui de Northwind augmente.',
  'The evaluation criteria the market has settled on, and which competitor published them first.':
    'Les critères d’évaluation sur lesquels le marché s’est fixé, et le concurrent qui les a publiés en premier.',
  'Publish an evaluation framework that makes regional response time a first-class selection criterion.':
    'Publiez un cadre d’évaluation qui fait du délai de réponse régional un critère de sélection de premier plan.',
  'Publish a defensible evaluation framework that makes regional response time a first-class selection criterion.':
    'Publiez un cadre d’évaluation défendable qui fait du délai de réponse régional un critère de sélection de premier plan.',

  /* --- Google vs AI --------------------------------------------------------- */
  'Google vs AI Visibility Intelligence':
    'Intelligence de visibilité : Google face à l’IA',
  'Google position': 'Position Google',
  'Channel asymmetry': 'Asymétrie des canaux',
  'Gap Matrix': 'Matrice des écarts',
  'Gap classification': 'Classification de l’écart',
  'Strategic blind spot': 'Angle mort stratégique',
  'Compound blind spot': 'Angle mort composé',
  'Compound Blind Spot': 'Angle mort composé',
  'Blind-spot keywords': 'Mots-clés en angle mort',
  'Traditional search and AI-mediated discovery are separate commercial assets that fail independently. This category measures each, classifies every gap between them, and prices what closing the gap is currently costing in paid media.':
    'La recherche traditionnelle et la découverte médiée par l’IA sont deux actifs commerciaux distincts qui défaillent indépendamment. Cette catégorie mesure chacun, classe tout écart entre eux et chiffre ce que combler cet écart coûte actuellement en média payant.',
  'Google rank and AI recommendation are separate commercial assets. Northwind ranks first for account setup — a question asked only after the vendor has already been chosen — and is absent from every question that decides who that vendor is.':
    'Le classement Google et la recommandation de l’IA sont deux actifs commerciaux distincts. Northwind se classe première sur l’ouverture de compte — une question posée seulement après le choix du fournisseur — et est absente de toutes celles qui décident de l’identité de ce fournisseur.',
  'The same question asked of both surfaces, so the two results can finally be compared line by line instead of by anecdote.':
    'La même question posée aux deux surfaces, afin que les deux résultats puissent enfin être comparés ligne à ligne plutôt que par anecdote.',
  'Every gap sorted into a named class with a different remedy and a different cost. Not all absence is the same problem.':
    'Chaque écart classé dans une catégorie nommée, avec son remède et son coût propres. Toute absence n’est pas le même problème.',
  'Eleven of twenty tracked commercial keywords sit outside the Google top ten and receive no AI recommendation — the decision happens on neither surface.':
    'Onze des vingt mots-clés commerciaux suivis se situent hors des dix premiers résultats Google et ne reçoivent aucune recommandation de l’IA — la décision ne se joue sur aucune des deux surfaces.',
  'Absent from both surfaces on a high-value commercial question. The most expensive class of gap.':
    'Absent des deux surfaces sur une question commerciale à forte valeur. La catégorie d’écart la plus coûteuse.',
  'Absent from AI answers and outside the Google top ten. The decision happens without the brand.':
    'Absent des réponses de l’IA et hors des dix premiers résultats Google. La décision se prend sans la marque.',
  'Track gap classification per keyword monthly. Success is six keywords moving out of blind-spot classification.':
    'Suivez la classification de l’écart par mot-clé chaque mois. Le succès correspond à six mots-clés sortant de la catégorie angle mort.',

  /* --- Search economics ------------------------------------------------------ */
  'Search Economics': 'Économie de la recherche',
  'Search Cost Intelligence': 'Intelligence du coût de la recherche',
  'Search Intelligence': 'Intelligence de la recherche',
  'Search trend analysis': 'Analyse des tendances de recherche',
  'Break-even CPC': 'CPC de rentabilité',
  'Break-Even CPC': 'CPC de rentabilité',
  'Break-even model': 'Modèle de rentabilité',
  'Above break-even': 'Au-dessus du seuil de rentabilité',
  'Blended CPC vs break-even': 'CPC mixte face au seuil de rentabilité',
  'Blended CPC across 20 tracked keywords':
    'CPC mixte sur 20 mots-clés suivis',
  'Keywords above break-even CPC':
    'Mots-clés au-dessus du CPC de rentabilité',
  'Keywords above break-even CPC 13 → 7 of 20':
    'Mots-clés au-dessus du CPC de rentabilité 13 → 7 sur 20',
  '11 of 20 weak': '11 sur 20 faibles',
  'Bid inflation': 'Inflation des enchères',
  'Paid dependency': 'Dépendance au payant',
  'AI vs Paid': 'IA face au payant',
  'Recoverable Search Opportunity': 'Opportunité de recherche récupérable',
  'Recoverable search opportunity': 'Opportunité de recherche récupérable',
  'Organic replacement potential': 'Potentiel de remplacement organique',
  'Paid acquisition is not buying growth here; it is renting the positions that authority would otherwise hold. The cost is structural and rises as competitive density increases.':
    'L’acquisition payante n’achète pas de la croissance ici ; elle loue les positions que l’autorité occuperait autrement. Ce coût est structurel et augmente avec la densité concurrentielle.',
  'Blended CPC runs above break-even. Paid is renting positions that authority would hold, and the cost rises with competitive density.':
    'Le CPC mixte dépasse le seuil de rentabilité. Le payant loue des positions que l’autorité occuperait, et le coût augmente avec la densité concurrentielle.',
  'Blended CPC runs above the break-even cost per click, and paid spend is covering questions where the brand has no organic or AI presence.':
    'Le CPC mixte dépasse le coût par clic de rentabilité, et les dépenses payantes couvrent des questions où la marque n’a ni présence organique ni présence dans l’IA.',
  'Reallocate spend from keywords with a viable organic replacement path, and hold paid only where break-even still clears.':
    'Réaffectez les dépenses des mots-clés disposant d’une voie de remplacement organique viable, et ne conservez le payant que là où le seuil de rentabilité est encore atteint.',
  'Compare blended CPC against break-even monthly, and track organic replacement on reallocated keywords.':
    'Comparez chaque mois le CPC mixte au seuil de rentabilité et suivez le remplacement organique sur les mots-clés réaffectés.',

  /* --- Narrative -------------------------------------------------------------- */
  'Narrative Intelligence': 'Intelligence narrative',
  'Narrative ownership 12% → 24%': 'Maîtrise du récit 12 % → 24 %',
  'Narrative control': 'Contrôle du récit',
  'Narrative War Room': 'Cellule de crise du récit',
  'Category definition': 'Définition de la catégorie',
  'Category definition language': 'Langage de définition de la catégorie',
  'Comparison content': 'Contenu comparatif',
  'Content Intelligence': 'Intelligence du contenu',
  'Buyer education': 'Formation de l’acheteur',
  'Pricing perception': 'Perception des prix',
  'Price justification': 'Justification du prix',
  'Strategic silence': 'Silence stratégique',
  'Whoever defines a category sets the criteria buyers evaluate against. This category measures how much of that definition you own, where it is fragile, and which of your genuine advantages the market has no vocabulary for.':
    'Celui qui définit une catégorie fixe les critères sur lesquels les acheteurs évaluent. Cette catégorie mesure quelle part de cette définition vous détenez, où elle est fragile, et pour lesquels de vos avantages réels le marché n’a aucun vocabulaire.',
  'Whoever defines the category sets the criteria buyers evaluate against. Competing on someone else’s definition means competing on terms chosen to favour them.':
    'Celui qui définit la catégorie fixe les critères sur lesquels les acheteurs évaluent. Concourir sur la définition d’un autre, c’est concourir sur des termes choisis pour l’avantager.',
  'Engines describe the category in a competitor’s language. Northwind’s strongest differentiator is absent from every category description.':
    'Les moteurs décrivent la catégorie dans le langage d’un concurrent. Le plus fort facteur de différenciation de Northwind est absent de toutes les descriptions de catégorie.',
  'Whether the market is asking informed comparison questions or still asking what the category is, which decides what content is worth producing.':
    'Si le marché pose des questions de comparaison éclairées ou demande encore ce qu’est la catégorie — ce qui détermine quel contenu vaut la peine d’être produit.',
  'Category vocabulary as an ownable asset, with a percentage attached — a measure most companies have never seen quantified.':
    'Le vocabulaire de la catégorie comme actif que l’on peut détenir, assorti d’un pourcentage — une mesure que la plupart des entreprises n’ont jamais vue chiffrée.',

  /* --- Strategic timing -------------------------------------------------------- */
  'Strategic Timing Intelligence': 'Intelligence du calendrier stratégique',
  'Strategic Timing Window': 'Fenêtre de calendrier stratégique',
  'The window is open and closing': 'La fenêtre est ouverte et se referme',
  '7 months — closes 2027-02-28': '7 mois — se referme le 28/02/2027',
  'Query maturity': 'Maturité des requêtes',
  'Query maturity accelerating': 'Maturité des requêtes en accélération',
  'Demand maturation': 'Maturation de la demande',
  'Shift velocity': 'Vitesse de basculement',
  'Rising 8% quarter over quarter.': 'En hausse de 8 % d’un trimestre à l’autre.',
  'Moderate — 8% quarter-over-quarter': 'Modérée — 8 % d’un trimestre à l’autre',
  'Time to impact': 'Délai avant impact',
  Urgency: 'Urgence',
  Emerging: 'Émergent',
  'Timing, geography and distribution — the three conditions that decide whether a correct strategy executed today returns more than the same strategy executed in a year. A right decision at the wrong time is still a wrong decision.':
    'Calendrier, géographie et distribution — les trois conditions qui déterminent si une stratégie juste exécutée aujourd’hui rapporte plus que la même exécutée dans un an. Une bonne décision au mauvais moment reste une mauvaise décision.',
  'Category language is still forming, so authority built now compounds. Once engines settle on a stable answer set, displacing an incumbent recommendation costs materially more.':
    'Le langage de la catégorie se forme encore : l’autorité construite maintenant se capitalise. Une fois que les moteurs se seront fixés sur un ensemble de réponses stable, déloger une recommandation établie coûtera sensiblement plus cher.',
  'Whether category language is still fluid — because authority built while it is fluid becomes the default answer, and authority built after has to displace one.':
    'Si le langage de la catégorie est encore mouvant — car l’autorité construite pendant cette période devient la réponse par défaut, tandis que celle construite après doit en déloger une.',
  'The rate at which recommendation slots are being taken, which is what converts "sometime this year" into a dated decision.':
    'Le rythme auquel les emplacements de recommandation sont pris — ce qui transforme « un jour cette année » en une décision datée.',
  'The market is emerging with roughly seven months of open window; competitive density is rising 8% per quarter.':
    'Le marché est émergent, avec une fenêtre ouverte d’environ sept mois ; la densité concurrentielle augmente de 8 % par trimestre.',
  'Commit authority investment before the decision deadline, while displacement cost remains low.':
    'Engagez l’investissement en autorité avant l’échéance décisionnelle, tant que le coût de déplacement reste faible.',

  /* --- Exposure and opportunity ------------------------------------------------ */
  'Directional commercial exposure': 'Exposition commerciale directionnelle',
  'Commercial exposure': 'Exposition commerciale',
  'Revenue Exposure': 'Exposition du chiffre d’affaires',
  'Opportunity and Revenue Intelligence':
    'Intelligence des opportunités et du chiffre d’affaires',
  'Opportunity range': 'Fourchette d’opportunité',
  'Opportunity Signal Map': 'Carte des signaux d’opportunité',
  'Estimated conversion': 'Conversion estimée',
  'Conversion assumptions': 'Hypothèses de conversion',
  'Average deal value': 'Valeur moyenne d’une affaire',
  'Deal value': 'Valeur de l’affaire',
  'Decision gap': 'Écart décisionnel',
  Demand: 'Demande',
  'Sensitivity analysis': 'Analyse de sensibilité',
  'Priority ranking model': 'Modèle de classement des priorités',
  'What is it worth, and what happens next?':
    'Quelle en est la valeur, et que se passe-t-il ensuite ?',
  'Demand × decision gap × estimated conversion × average deal value. A range, never a confirmed figure.':
    'Demande × écart décisionnel × conversion estimée × valeur moyenne d’une affaire. Une fourchette, jamais un chiffre confirmé.',
  'How crowded is the answer set becoming?':
    'À quel point l’ensemble des réponses se sature-t-il ?',

  /* --- Action ------------------------------------------------------------------ */
  'Action Intelligence': 'Intelligence d’action',
  'Action Center': 'Centre d’actions',
  'Prioritised interventions': 'Interventions priorisées',
  'Prioritised intervention sequence': 'Séquence d’interventions priorisées',
  'Top intervention': 'Intervention prioritaire',
  'Priority Queue': 'File de priorités',
  '30/60/90-Day Roadmap': 'Feuille de route 30/60/90 jours',
  '6 sequenced': '6 séquencées',
  Effort: 'Effort',
  'Effort assessment': 'Évaluation de l’effort',
  'Measured change': 'Changement mesuré',
  'Impact Tracker': 'Suivi d’impact',
  'Success metric': 'Indicateur de réussite',
  Prescription: 'Prescription',
  Confidence: 'Confiance',
  Context: 'Contexte',
  Concerns: 'Réserves',
  Weak: 'Faible',
  'Where diagnosis becomes a decision. Every gap is priced as a directional range, ranked against every other gap, assigned an owner and a deadline, and then measured after execution to confirm the signal actually moved.':
    'Là où le diagnostic devient décision. Chaque écart est chiffré sous forme de fourchette directionnelle, classé face à tous les autres, doté d’un responsable et d’une échéance, puis mesuré après exécution pour confirmer que le signal s’est réellement déplacé.',
  'Diagnosis without sequence produces activity, not movement. Each intervention names an owner, a deadline, the signal it should move and how that movement will be verified.':
    'Un diagnostic sans séquence produit de l’activité, non du mouvement. Chaque intervention désigne un responsable, une échéance, le signal qu’elle doit déplacer et la manière dont ce déplacement sera vérifié.',
  'Every finding converted into an intervention with an owner, a deadline and a stated expected movement — or dropped, if it cannot be.':
    'Chaque constat converti en intervention avec un responsable, une échéance et un déplacement attendu déclaré — ou abandonné, si c’est impossible.',
  'Ranking by exposure, confidence, effort and dependency, so effort does not go into work that cannot move until something else lands.':
    'Classement par exposition, confiance, effort et dépendance, afin que l’effort ne parte pas dans un travail qui ne peut avancer tant qu’autre chose n’a pas abouti.',
  'A sequence built from what each intervention actually depends on, rather than from a calendar someone divided into thirds.':
    'Une séquence construite à partir de ce dont chaque intervention dépend réellement, plutôt que d’un calendrier que quelqu’un a découpé en tiers.',
  'Each action carries its own success metric. Impact is verified by signal movement after execution, not by task completion.':
    'Chaque action porte son propre indicateur de réussite. L’impact se vérifie au déplacement du signal après exécution, non à l’achèvement de la tâche.',
  'Six interventions are prioritised; the first two address authority evidence and supplier-comparison coverage.':
    'Six interventions sont priorisées ; les deux premières portent sur les preuves d’autorité et la couverture de comparaison des fournisseurs.',

  /* --- The decision journey ----------------------------------------------------- */
  'Decision Journey': 'Parcours décisionnel',
  Research: 'Recherche',
  'Solution Evaluation': 'Évaluation des solutions',
  'Supplier Evaluation': 'Évaluation des fournisseurs',
  'Purchase Decision': 'Décision d’achat',
  'Decision Hijack': 'Détournement de décision',

  /* --- Market --------------------------------------------------------------------- */
  'Market Intelligence': 'Intelligence de marché',
  'Global Market Intelligence': 'Intelligence de marché mondiale',
  'Global Visibility Matrix': 'Matrice de visibilité mondiale',
  'Market readiness': 'Maturité du marché',
  'Market Readiness Gauge': 'Jauge de maturité du marché',
  'Market Entry Readiness': 'Préparation à l’entrée sur le marché',
  'Market Fit': 'Adéquation au marché',
  'Regional variation': 'Variation régionale',
  'Regional strength': 'Force régionale',
  'Country definition': 'Définition du pays',
  'Distribution Intelligence': 'Intelligence de la distribution',
  'Scenario Simulator': 'Simulateur de scénarios',
  Analytics: 'Analytique',
  Visibility: 'Visibilité',
  Ownership: 'Maîtrise',

  /* --- Roles and model provenance -------------------------------------------------- */
  'VP Marketing': 'Directeur marketing',
  'Head of Digital': 'Responsable du digital',
  'Head of Brand': 'Responsable de la marque',
  'Chief Executive': 'Directeur général',
  'Content Lead': 'Responsable du contenu',
  'Demand Gen Manager': 'Responsable de la génération de demande',
  'Customer-configured': 'Configuré par le client',
  'Derived from §13.1 chain': 'Dérivé de la chaîne §13.1',
  /* A product name. Recorded rather than translated, so its absence from the
     rest of this file reads as a decision and not an oversight. */
  'Google Ads': 'Google Ads',

  /* ==========================================================================
     ELECTION INTELLIGENCE

     The race, the candidates and the county are invented. Unlike he, ar and
     ru, nothing here is transliterated: French shares the Latin alphabet, so
     Riverbend and the candidate initials are already in their French form.
     They will show up in a diff-mode audit as identical to English, which is
     correct rather than a gap — see the note at the head of i18n-audit.mjs.
     ====================================================================== */
  'Demonstration subject': 'Sujet de démonstration',
  'Entirely fictional. No real person, party or race.':
    'Entièrement fictif. Aucune personne, aucun parti et aucune élection réels.',
  Race: 'Élection',
  'County Commission': 'Conseil de comté',
  'Riverbend County — District 4': 'Comté de Riverbend — district 4',
  Candidate: 'Candidat',
  Opponent: 'Adversaire',
  /* Already in their French form — he, ar and ru transliterate these into
     their own scripts, French has nothing to change. Recorded as identities
     so `i18n-port.mjs he fr` reports parity instead of flagging a gap. */
  'A. Marchetti': 'A. Marchetti',
  'D. Okonkwo': 'D. Okonkwo',
  'Election War Room — the live operational view':
    'Cellule de campagne — la vue opérationnelle en direct',
  'The Election War Room. Fictional race, demonstration data — no real candidate, party or campaign.':
    'La cellule de campagne. Élection fictive, données de démonstration — aucun candidat, parti ni campagne réels.',
  'Candidate / party dashboard — the standing position':
    'Tableau de bord candidat / parti — la position actuelle',
  'Candidate and party position. Fictional race, demonstration data — no real candidate, party or campaign.':
    'Position du candidat et du parti. Élection fictive, données de démonstration — aucun candidat, parti ni campagne réels.',
  'Election narrative intelligence — positive vs negative narratives':
    'Intelligence narrative électorale — récits positifs contre récits négatifs',
  'Which narratives are strengthening the position and which are damaging it. Fictional race, demonstration data.':
    'Quels récits renforcent la position et lesquels lui nuisent. Élection fictive, données de démonstration.',
  'Positive vs negative narratives — the polarity split':
    'Récits positifs contre négatifs — la répartition des polarités',
  'Positive against negative, by reach and by direction of travel. Fictional race, demonstration data.':
    'Le positif face au négatif, par portée et par sens d’évolution. Élection fictive, données de démonstration.',
  'Audience / segment movement — who is moving toward and away':
    'Mouvement des audiences et des segments — qui se rapproche et qui s’éloigne',
  'Which audiences are moving closer and which are moving away. Fictional race, demonstration data.':
    'Quelles audiences se rapprochent et lesquelles s’éloignent. Élection fictive, données de démonstration.',
  'Opponent intelligence — competing narratives and ownership':
    'Intelligence sur l’adversaire — récits concurrents et propriété',
  'What the opposing account is, and which issues it owns. Fictional race, demonstration data.':
    'Quel est le récit adverse et quels sujets il possède. Élection fictive, données de démonstration.',
  'Influencers and sources shaping the narrative':
    'Influenceurs et sources qui façonnent le récit',
  'Who is strengthening the position and who is damaging it. Fictional race, demonstration data.':
    'Qui renforce la position et qui lui nuit. Élection fictive, données de démonstration.',
  'AI + Google election intelligence — per-engine narrative leads':
    'Intelligence électorale IA et Google — le récit dominant par moteur',
  'What each AI engine and Google surface leads with. Fictional race, demonstration data.':
    'Par quoi commence chaque moteur d’IA et chaque surface Google. Élection fictive, données de démonstration.',
  'Multilingual intelligence — narrative gaps between languages':
    'Intelligence multilingue — écarts de récit entre les langues',
  'Where the account of a candidate differs by language. Fictional race, demonstration data.':
    'Là où le récit d’un candidat diffère selon la langue. Élection fictive, données de démonstration.',
  'Risks and opportunities — emerging threats and open positions':
    'Risques et opportunités — menaces émergentes et positions libres',
  'Emerging threats and unclaimed positions, ranked. Fictional race, demonstration data.':
    'Menaces émergentes et positions non revendiquées, classées. Élection fictive, données de démonstration.',
  'Recommended actions — the campaign action plan':
    'Actions recommandées — le plan d’action de campagne',
  'What to do now, who owns it, and how the movement will be measured. Fictional race, demonstration data.':
    'Quoi faire maintenant, qui en est responsable et comment le mouvement sera mesuré. Élection fictive, données de démonstration.',
  'Trend over time — narrative movement across the cycle':
    'Évolution dans le temps — le mouvement du récit sur le cycle',
  'How the position has moved across the cycle. Fictional race, demonstration data.':
    'Comment la position a évolué sur le cycle. Élection fictive, données de démonstration.',

  /* ==========================================================================
     INTELLIGENCE ENGINES
     ====================================================================== */
  'Intelligence engines': 'Moteurs d’intelligence',
  'Each engine answers a board-level business question, produces a connected intelligence readout and routes the user into action. Not a feature list — a set of questions the business needs answered.':
    'Chaque moteur répond à une question d’entreprise de niveau conseil d’administration, produit un relevé d’intelligence connecté et oriente l’utilisateur vers l’action. Ce n’est pas une liste de fonctionnalités, mais un ensemble de questions auxquelles l’entreprise a besoin de réponses.',
  'Built in this environment · 4 of 12': 'Construit dans cet environnement · 4 sur 12',
  'Four engines, built to full depth': 'Quatre moteurs, développés en pleine profondeur',
  'Each carries a real seeded outcome, its evidence, its commercial consequence and the action it prescribes. They chain into one another — together they form the causal argument rather than four samples of it.':
    'Chacun porte un résultat préchargé réel, ses preuves, sa conséquence commerciale et l’action qu’il prescrit. Ils s’enchaînent les uns aux autres : ensemble, ils forment le raisonnement causal plutôt que quatre échantillons de celui-ci.',
  'The full operating system': 'Le système d’exploitation complet',
  'Eight further engines available in the platform':
    'Huit moteurs supplémentaires disponibles dans la plateforme',
  'These are part of the operating system but are not built in this demonstration environment. Their business questions are listed so the shape of the full system is visible.':
    'Ils font partie du système d’exploitation mais ne sont pas construits dans cet environnement de démonstration. Leurs questions d’entreprise sont listées afin que la forme du système complet reste visible.',
  'Available in platform': 'Disponible dans la plateforme',
  'Is the business present when customers ask AI whom to choose?':
    'L’entreprise est-elle présente quand les clients demandent à l’IA qui choisir ?',
  'Which gap is commercially meaningful enough to fix first?':
    'Quel écart est assez significatif commercialement pour être corrigé en premier ?',
  'When does paid search become structurally inefficient?':
    'À quel moment la recherche payante devient-elle structurellement inefficace ?',
  'Is the business visible but still unsafe to recommend?':
    'L’entreprise est-elle visible mais encore risquée à recommander ?',
  'When the market explains the category, whose language does it use?':
    'Quand le marché explique la catégorie, quel vocabulaire emploie-t-il ?',
  'Is the market ready, and how long is the window open?':
    'Le marché est-il prêt, et combien de temps la fenêtre reste-t-elle ouverte ?',
  'How does the business change across countries, languages and markets?':
    'Comment l’entreprise change-t-elle d’un pays, d’une langue et d’un marché à l’autre ?',
  'Does the route to market strengthen the brand or transfer power to intermediaries?':
    'Le circuit de distribution renforce-t-il la marque ou transfère-t-il le pouvoir aux intermédiaires ?',
  'See plans': 'Voir les formules',

  /* ==========================================================================
     MARKETPLACE
     ====================================================================== */
  'Seven categories of decision intelligence, each holding the models that answer one kind of commercial question. Most of them measure things a business has never been able to see — not because the questions are exotic, but because nothing existed to answer them.':
    'Sept catégories d’intelligence décisionnelle, chacune contenant les modèles qui répondent à un type de question commerciale. La plupart mesurent des choses qu’une entreprise n’a jamais pu voir — non pas parce que les questions sont exotiques, mais parce que rien n’existait pour y répondre.',
  'Intelligence categories': 'Catégories d’intelligence',
  'Intelligence modules': 'Modules d’intelligence',
  'Engines beneath them': 'Moteurs sous-jacents',
  'of these modules run live in this environment against a real reconstructed business. The rest are available in the platform.':
    'de ces modules fonctionnent en direct dans cet environnement sur une entreprise réellement reconstruite. Les autres sont disponibles dans la plateforme.',
  'Start with the question you actually have.':
    'Commencez par la question que vous vous posez vraiment.',
  'Each category opens into the modules underneath it. Every module answers one business question and returns evidence, an analysis and a recommendation — never a figure on its own.':
    'Chaque catégorie s’ouvre sur les modules qu’elle contient. Chaque module répond à une question d’entreprise et renvoie des preuves, une analyse et une recommandation — jamais un chiffre isolé.',
  'What you are buying': 'Ce que vous achetez',
  'The document is the output. The intelligence is the product.':
    'Le document est le livrable. L’intelligence est le produit.',
  'How the models work': 'Comment fonctionnent les modèles',
  'Every claim carries the observation behind it — which engine, which question, which date. A conclusion you cannot audit is an opinion.':
    'Chaque affirmation porte l’observation qui la fonde — quel moteur, quelle question, quelle date. Une conclusion que l’on ne peut auditer est une opinion.',
  'What the evidence means commercially, what is causing it, and how confident the model can honestly be. Limits are stated, never implied.':
    'Ce que les preuves signifient commercialement, ce qui les cause et le degré de confiance que le modèle peut honnêtement afficher. Les limites sont énoncées, jamais sous-entendues.',
  'What to do, who owns it, by when, and what signal should move as a result. Verified afterwards against what actually moved.':
    'Quoi faire, qui en est responsable, pour quand, et quel signal doit bouger en conséquence. Vérifié ensuite face à ce qui a réellement bougé.',
  'Whatever the business question, there is already intelligence built for it.':
    'Quelle que soit la question d’entreprise, une intelligence a déjà été construite pour elle.',
  'See a module run live': 'Voir un module en fonctionnement',
  'Monitor continuously instead': 'Ou surveiller en continu',
  '7 live in demo': '7 actifs en démo',
  '4 live in demo': '4 actifs en démo',
  Analysis: 'Analyse',
  Recommendation: 'Recommandation',
  modules: 'modules',
  Explore: 'Explorer',
  '+ 1 more': '+ 1 autre',
  '+ 2 more': '+ 2 autres',
  '+ 4 more': '+ 4 autres',
  '+ 6 more': '+ 6 autres',
  '+ {n} more': '+ {n} autres',
  '{n} live in demo': '{n} actifs en démo',
  '<b>{n}</b> of these modules run live in this environment against a real reconstructed business. The rest are available in the platform.':
    '<b>{n}</b> de ces modules fonctionnent en direct dans cet environnement sur une entreprise réellement reconstruite. Les autres sont disponibles dans la plateforme.',
  'Built in this environment · {n} of {total}':
    'Construit dans cet environnement · {n} sur {total}',

  /* ==========================================================================
     LEGAL
     `localStorage` stays Latin — it is the storage API by name, and the page
     has to name it precisely.
     ====================================================================== */
  Legal: 'Mentions légales',
  'Legal and data handling': 'Mentions légales et traitement des données',
  'Legal and data handling | GeoRepute':
    'Mentions légales et traitement des données | GeoRepute',
  'Privacy, terms, data processing and security posture for the GeoRepute demonstration environment.':
    'Confidentialité, conditions, traitement des données et posture de sécurité de l’environnement de démonstration GeoRepute.',
  'What this environment does and does not do with data.':
    'Ce que cet environnement fait — et ne fait pas — avec les données.',
  'This is a demonstration build. Rather than reproduce boilerplate that would not apply to it, each section below states the actual position.':
    'Ceci est une version de démonstration. Plutôt que de reproduire des formules types qui ne s’y appliqueraient pas, chaque section ci-dessous énonce la situation réelle.',
  Privacy: 'Confidentialité',
  'This environment collects nothing. There is no analytics script, no tag manager, no session recording and no third-party tracker on any page.':
    'Cet environnement ne collecte rien. Aucune page ne contient de script d’analyse, de gestionnaire de balises, d’enregistrement de session ni de traceur tiers.',
  'The only data stored about you is your theme preference and any demonstration purchases, both held in your browser’s localStorage and readable only by this site. Nothing is transmitted anywhere. Clearing site data removes all of it, and the purchase-confirmation screen offers a reset control.':
    'Les seules données conservées à votre sujet sont votre préférence de thème et vos éventuels achats de démonstration, tous deux stockés dans le localStorage de votre navigateur et lisibles uniquement par ce site. Rien n’est transmis nulle part. Effacer les données du site les supprime intégralement, et l’écran de confirmation d’achat propose une commande de réinitialisation.',
  'Terms of service': 'Conditions d’utilisation',
  'No commercial terms apply. Nothing on this site constitutes an offer, and no contract can be formed through it.':
    'Aucune condition commerciale ne s’applique. Rien sur ce site ne constitue une offre, et aucun contrat ne peut être conclu par son intermédiaire.',
  'Pricing shown throughout is placeholder and clearly marked as such on the pricing page. The checkout collects no payment details and processes no charge.':
    'Les tarifs affichés sont fictifs et clairement signalés comme tels sur la page des tarifs. Le paiement ne collecte aucune coordonnée bancaire et ne traite aucun prélèvement.',
  'Data processing': 'Traitement des données',
  'Northwind Supply is a fictional organisation. Every figure attributed to it is seeded, internally consistent and derived from a published set of anchor facts. No real company’s data appears anywhere in this environment.':
    'Northwind Supply est une organisation fictive. Chaque chiffre qui lui est attribué est préchargé, cohérent en interne et dérivé d’un ensemble publié de faits d’ancrage. Les données d’aucune entreprise réelle n’apparaissent nulle part dans cet environnement.',
  'Competitor names, domains and citation counts are invented. Any resemblance to an operating business is coincidental and unintended.':
    'Les noms de concurrents, les domaines et les nombres de citations sont inventés. Toute ressemblance avec une entreprise en activité serait fortuite et involontaire.',
  'AI engines are referenced by their public product names for accuracy of description. No affiliation, endorsement or partnership is claimed or implied.':
    'Les moteurs d’IA sont désignés par leurs noms de produit publics par souci de précision descriptive. Aucune affiliation, approbation ou association n’est revendiquée ni sous-entendue.',
  Security: 'Sécurité',
  'There is no authentication, no user account and no server-side session. The sign-in screen requests no password because none is checked — inviting a real credential into a demonstration would be a hazard, not a convenience.':
    'Il n’y a ni authentification, ni compte utilisateur, ni session côté serveur. L’écran de connexion ne demande aucun mot de passe parce qu’aucun n’est vérifié : inviter un véritable identifiant dans une démonstration serait un danger, non une commodité.',
  'No external network requests are made at runtime. Fonts are self-hosted, all visuals are generated in CSS or SVG, and the content security posture assumes no third-party origin is trusted.':
    'Aucune requête réseau externe n’est émise à l’exécution. Les polices sont hébergées localement, tous les visuels sont générés en CSS ou en SVG, et la posture de sécurité du contenu part du principe qu’aucune origine tierce n’est de confiance.',
  'Before this platform is operated commercially, these sections must be replaced with reviewed policies covering the real data flows, retention periods, sub-processors and jurisdictions involved.':
    'Avant toute exploitation commerciale de cette plateforme, ces sections devront être remplacées par des politiques revues couvrant les flux de données réels, les durées de conservation, les sous-traitants et les juridictions concernées.',
  'Return home': 'Retour à l’accueil',

  /* ==========================================================================
     SIGN IN
     ====================================================================== */
  'Sign In': 'Connexion',
  'Sign In | GeoRepute': 'Connexion | GeoRepute',
  Home: 'Accueil',
  'Enter the demonstration workspace': 'Entrer dans l’espace de démonstration',
  'This environment has no authentication. Every visitor sees the same seeded organisation, Northwind Supply, so that every figure stays verifiable against the published methodology.':
    'Cet environnement ne comporte aucune authentification. Chaque visiteur voit la même organisation préchargée, Northwind Supply, afin que chaque chiffre reste vérifiable au regard de la méthodologie publiée.',
  Workspace: 'Espace de travail',
  'northwindsupply.com · US Midwest': 'northwindsupply.com · Midwest américain',
  'Continue to Mission Control': 'Continuer vers le centre de commandement',
  'No password is requested because none is checked. Real authentication drops in behind the same route without changing this screen’s place in the flow.':
    'Aucun mot de passe n’est demandé parce qu’aucun n’est vérifié. Une véritable authentification s’insère derrière la même route sans changer la place de cet écran dans le parcours.',

  /* ==========================================================================
     PUBLIC NARRATIVE INTELLIGENCE

     Trade-publication mastheads (Industrial Distribution, Modern Supply
     Chain, Fastener Technology, Plant Engineering) stay Latin. They are
     invented proper nouns, like the competitor names.

     Nothing here may be keyed on a bare lowercase enum value — 'emerging',
     'growing', 'steady', 'declining' are discriminants in the seed graph and
     translating them rewrites the data. The component maps them to
     capitalised labels; translate those.
     ====================================================================== */
  'Public narrative intelligence': 'Intelligence narrative publique',
  'Public Narrative Intelligence | GeoRepute': 'Intelligence narrative publique | GeoRepute',
  'Public Narrative Intelligence': 'Intelligence narrative publique',
  'What story is the market telling about us?':
    'Quelle histoire le marché raconte-t-il à notre sujet ?',
  'Not how often the business is mentioned. Which accounts of it are active, who owns each one, and which of them decide whether it gets chosen.':
    'Non pas la fréquence à laquelle l’entreprise est mentionnée. Mais quels récits la concernant sont actifs, qui possède chacun d’eux, et lesquels décident si elle est choisie.',
  'Election mode': 'Mode élections',
  'Political intelligence': 'Intelligence politique',
  Health: 'État',
  'Narrative health': 'État du récit',
  'Overall public sentiment': 'Sentiment public global',
  'A weighted read of how much active conversation helps against how much hurts.':
    'Une lecture pondérée de la part de conversation active qui aide face à celle qui nuit.',
  'Narrative momentum': 'Dynamique du récit',
  'Narrative stability': 'Stabilité du récit',
  'Narrative balance': 'Équilibre des récits',
  'Positive narrative strength': 'Force du récit positif',
  'Negative narrative strength': 'Force du récit négatif',
  'Neutral narrative': 'Récit neutre',
  'The balance between stories that help and stories that hurt, weighted by how much of the conversation each reaches.':
    'L’équilibre entre les récits qui aident et ceux qui nuisent, pondéré par la part de conversation que chacun atteint.',
  '20% of active category conversation carries a story that favours this business — and both of those narratives are currently unclaimed by anyone.':
    '20 % de la conversation active de la catégorie portent un récit favorable à cette entreprise — et ces deux récits ne sont actuellement revendiqués par personne.',
  '74% carries a story that works against it, most of it a competitor’s evaluation framing rather than criticism of the business itself.':
    '74 % portent un récit qui joue contre elle, et il s’agit surtout du cadre d’évaluation d’un concurrent plutôt que d’une critique de l’entreprise elle-même.',
  '6% is category-level conversation attached to no supplier. Neutral is not safe — it is unowned ground with no defender.':
    '6 % relèvent d’une conversation de catégorie rattachée à aucun fournisseur. Neutre ne veut pas dire sûr : c’est un terrain sans propriétaire et sans défenseur.',
  'Sentiment is not hostility. Nothing here is criticism of the business — the adverse weight comes almost entirely from stories written by competitors in which this business does not appear.':
    'Le sentiment n’est pas de l’hostilité. Rien ici ne constitue une critique de l’entreprise : le poids défavorable provient presque entièrement de récits écrits par des concurrents dans lesquels cette entreprise n’apparaît pas.',
  '3 adverse narratives are gaining ground against 1 favourable one. Direction matters more than the current balance, because it is what the position will be in two quarters.':
    '3 récits défavorables gagnent du terrain contre 1 récit favorable. La direction compte davantage que l’équilibre actuel, car c’est elle qui donne la position dans deux trimestres.',
  '4 of 8 active narratives are still forming or growing. The account of this category is not yet fixed, which is what makes intervention cheap now and expensive later.':
    '4 des 8 récits actifs sont encore en formation ou en croissance. Le récit de cette catégorie n’est pas encore figé, et c’est précisément ce qui rend l’intervention peu coûteuse maintenant et coûteuse plus tard.',
  Landscape: 'Paysage',
  'Every active narrative in this category': 'Tous les récits actifs de cette catégorie',
  'Sorted by reach. The owner column is the one that matters — a favourable story nobody owns is an asset waiting to be claimed.':
    'Trié par portée. La colonne du propriétaire est celle qui compte : un récit favorable que personne ne possède est un actif qui attend d’être revendiqué.',
  'Who owns the story': 'Qui possède le récit',
  'Share of active conversation, weighted by reach. Unclaimed is not neutral ground — it is ground with no defender.':
    'Part de la conversation active, pondérée par la portée. Non revendiqué ne signifie pas terrain neutre : c’est un terrain sans défenseur.',
  Business: 'Entreprise',
  Competitors: 'Concurrents',
  Shared: 'Partagé',
  Unclaimed: 'Non revendiqué',
  'Business: 4%': 'Entreprise : 4 %',
  'Competitors: 56%': 'Concurrents : 56 %',
  'Shared: 20%': 'Partagé : 20 %',
  'Unclaimed: 20%': 'Non revendiqué : 20 %',
  'Category language owned': 'Vocabulaire de la catégorie possédé',
  'The share of the vocabulary engines use to define this category that belongs to this business. Whoever holds this sets the criteria every comparison is scored against.':
    'La part du vocabulaire employé par les moteurs pour définir cette catégorie qui appartient à cette entreprise. Celui qui la détient fixe les critères sur lesquels chaque comparaison est notée.',
  'The split above measures this specific narrative inventory. This figure measures the category’s language as a whole, and is the same one Mission Control publishes.':
    'La répartition ci-dessus mesure cet inventaire de récits précis. Ce chiffre-ci mesure le vocabulaire de la catégorie dans son ensemble, et c’est celui que publie le centre de commandement.',
  'The business holds': 'L’entreprise détient',
  'The business holds <b>{pct}%</b>, and every point of it is the hardware-retailer error rather than anything it chose to say. Ownership counts the stories attached to a name; it does not ask whether they help.':
    'L’entreprise détient <b>{pct} %</b>, et chacun de ces points relève de l’erreur du détaillant de quincaillerie plutôt que de ce qu’elle a choisi de dire. La propriété compte les récits attachés à un nom ; elle ne demande pas s’ils aident.',
  'Weighted by reach rather than counted, so a story reaching a third of the category is not equal to one reaching a twentieth.':
    'Pondéré par la portée plutôt que compté, de sorte qu’un récit atteignant un tiers de la catégorie n’équivaut pas à un récit qui en atteint un vingtième.',
  Reach: 'Portée',
  'Owned by': 'Détenu par',
  Influence: 'Influence',
  Competition: 'Concurrence',
  Opportunity: 'Opportunité',
  Strength: 'Force',
  Weakness: 'Faiblesse',
  Risk: 'Risque',
  Media: 'Médias',
  Questions: 'Questions',
  'If ignored': 'Si ignoré',
  'Overlap with us': 'Recoupement avec nous',
  Unsettled: 'Non figé',
  '— absent': '— absent',
  '{level} severity': 'Gravité {level}',
  '+ {n} more tracked': '+ {n} autres suivis',
  '31 % share': '31 % de part',
  '18 % share': '18 % de part',
  '11 % share': '11 % de part',
  '7 % share': '7 % de part',
  '{pct}% share': '{pct} % de part',
  Growing: 'En croissance',
  Steady: 'Stable',
  Declining: 'En recul',
  Contested: 'Contesté',
  Neutral: 'Neutre',
  Favourable: 'Favorable',
  Adverse: 'Défavorable',
  'Favourable · emerging': 'Favorable · émergent',
  'Favourable · steady': 'Favorable · stable',
  'Adverse · emerging': 'Défavorable · émergent',
  'Adverse · growing': 'Défavorable · en croissance',
  'Adverse · steady': 'Défavorable · stable',
  'Adverse · declining': 'Défavorable · en recul',
  'Neutral · steady': 'Neutre · stable',

  /* --- Competitor narratives ------------------------------------------------------- */
  'The story each competitor is telling': 'Le récit que raconte chaque concurrent',
  'Every position has a weakness built into it. A narrative strong enough to dominate is usually narrow enough to outflank.':
    'Toute position comporte une faiblesse intrinsèque. Un récit assez fort pour dominer est généralement assez étroit pour être contourné.',
  'The safe national choice with published comparisons.':
    'Le choix national sûr, avec des comparaisons publiées.',
  'The technical authority on specification.':
    'L’autorité technique en matière de spécifications.',
  'The educator that reaches buyers first.':
    'Le pédagogue qui atteint les acheteurs en premier.',
  'The procurement-checklist incumbent.':
    'Celui qui est déjà inscrit dans les listes de contrôle achats.',
  'Owns the evaluation criteria itself. Engines cite its comparison library when explaining how to choose a supplier at all.':
    'Possède les critères d’évaluation eux-mêmes. Les moteurs citent sa bibliothèque de comparaisons lorsqu’ils expliquent comment choisir un fournisseur, tout simplement.',
  'Its case rests on breadth and fill rate. It has no response prepared on response time or regional service depth.':
    'Son argumentaire repose sur l’étendue du catalogue et le taux de service. Il n’a aucune réponse prête sur le délai de réaction ni sur la profondeur du service régional.',
  'Competes directly on supplier-evaluation questions, where it is named first in four of seven.':
    'Concurrence directement sur les questions d’évaluation de fournisseurs, où il est cité en premier dans quatre cas sur sept.',
  'Its vocabulary can be adopted and extended rather than fought. Speaking its language while adding availability outflanks it.':
    'Son vocabulaire peut être adopté et étendu plutôt que combattu. Parler sa langue en y ajoutant la disponibilité le prend à revers.',
  'Specification depth does not answer availability. It is largely absent from questions about delivery and continuity.':
    'La profondeur des spécifications ne répond pas à la disponibilité. Il est largement absent des questions de livraison et de continuité.',
  'Owns solution-evaluation questions upstream of where this business competes.':
    'Possède les questions d’évaluation de solutions, en amont du terrain où cette entreprise concourt.',
  'Its own framing concedes that speed is a separate axis. A published response-time standard splits the criterion it defined.':
    'Son propre cadrage concède que la rapidité constitue un axe distinct. Un standard de délai de réaction publié scinde le critère qu’il a lui-même défini.',
  'Enters the decision at research, before evaluation criteria exist, and shapes them by arriving early.':
    'Entre dans la décision au stade de la recherche, avant que les critères d’évaluation n’existent, et les façonne en arrivant tôt.',
  'Almost no presence earlier in the journey. Its position is administrative rather than argued.':
    'Presque aucune présence plus tôt dans le parcours. Sa position est administrative plutôt qu’argumentée.',
  'Owns early-stage questions this business is also absent from, but does not convert them.':
    'Possède des questions de stade précoce dont cette entreprise est également absente, mais ne les convertit pas.',
  'Thin at the point of purchase. Rarely named when a buyer asks whom to actually choose.':
    'Peu présent au point d’achat. Rarement cité lorsqu’un acheteur demande qui choisir concrètement.',
  'Research-stage presence is uncontested at the point where education becomes a shortlist.':
    'Sa présence au stade de la recherche n’est contestée par personne, précisément là où la pédagogie devient une liste restreinte.',
  'Named on procurement documentation that engines cite at the moment of purchase.':
    'Cité dans la documentation achats à laquelle les moteurs renvoient au moment de l’achat.',
  'Competes only at purchase decision, where this business also has no coverage.':
    'Ne concourt qu’à la décision d’achat, où cette entreprise n’a pas non plus de couverture.',
  'A checklist position is winnable through documentation rather than through reputation.':
    'Une position en liste de contrôle se gagne par la documentation plutôt que par la réputation.',

  /* --- Media narratives ------------------------------------------------------------ */
  'What publications are actually writing about':
    'Ce sur quoi les publications écrivent réellement',
  'The business appears in none of four active category stories. Two of them — provenance and tariff continuity — have no supplier voice at all.':
    'L’entreprise n’apparaît dans aucun des quatre sujets actifs de la catégorie. Deux d’entre eux — la traçabilité et la continuité face aux droits de douane — n’ont aucune voix de fournisseur.',
  'The business appears in none of the four active category stories. Media narrative is currently being written entirely by others.':
    'L’entreprise n’apparaît dans aucun des quatre sujets actifs de la catégorie. Le récit médiatique est actuellement écrit entièrement par d’autres.',
  'MRO supplier consolidation across Midwest manufacturing':
    'Consolidation des fournisseurs MRO dans l’industrie du Midwest',
  'Counterfeit fasteners in industrial supply chains':
    'Fixations contrefaites dans les chaînes d’approvisionnement industrielles',
  'Verification and provenance in fastener sourcing':
    'Vérification et traçabilité dans l’approvisionnement en fixations',
  'Fastener supply continuity after tariff changes':
    'Continuité de l’approvisionnement en fixations après les changements de droits de douane',
  'Supply continuity under tariff volatility':
    'Continuité d’approvisionnement face à la volatilité des droits de douane',
  'Vendor-managed inventory adoption in mid-market plants':
    'Adoption des stocks gérés par le fournisseur dans les usines de taille intermédiaire',
  'Vendor-managed inventory for mid-market plants':
    'Stocks gérés par le fournisseur pour les usines de taille intermédiaire',
  'The most active category story. This business is not quoted in any of the eleven pieces published this quarter.':
    'Le sujet le plus actif de la catégorie. Cette entreprise n’est citée dans aucun des onze articles publiés ce trimestre.',
  'A category-level trust story. Suppliers who comment become the trusted ones; those who stay silent are grouped with the problem.':
    'Un sujet de confiance à l’échelle de la catégorie. Les fournisseurs qui s’expriment deviennent ceux à qui l’on fait confiance ; ceux qui se taisent sont assimilés au problème.',
  'An emerging story where regional inventory depth is the natural expert angle, and no regional distributor has been quoted yet.':
    'Un sujet émergent où la profondeur des stocks régionaux constitue l’angle d’expert naturel, et où aucun distributeur régional n’a encore été cité.',
  'A service already operated but never publicly associated with the business. One competitor is quoted in three of four pieces on it.':
    'Un service déjà exploité mais jamais publiquement associé à l’entreprise. Un concurrent est cité dans trois des quatre articles qui en traitent.',
  'A competitor is quoted in three of four pieces. The topic maps directly onto a service this business already operates.':
    'Un concurrent est cité dans trois articles sur quatre. Le sujet correspond directement à un service que cette entreprise exploite déjà.',
  'Regional inventory depth is the natural expert position on a story publications are actively looking for sources on.':
    'La profondeur des stocks régionaux est la position d’expert naturelle sur un sujet pour lequel les publications recherchent activement des sources.',
  'An active media story with no supplier voice attached. Commenting converts a category-level trust concern into a reason to choose a specific supplier.':
    'Un sujet médiatique actif auquel aucune voix de fournisseur n’est rattachée. S’exprimer transforme une préoccupation de confiance de catégorie en raison de choisir un fournisseur précis.',
  'No quote, contribution or citation in the four topics publications are currently covering.':
    'Aucune citation, contribution ni référence dans les quatre sujets que les publications couvrent actuellement.',
  'Silence is read as absence of expertise. The category continues to be explained by the suppliers willing to explain it.':
    'Le silence se lit comme une absence d’expertise. La catégorie continue d’être expliquée par les fournisseurs disposés à l’expliquer.',

  /* --- Question landscape ---------------------------------------------------------- */
  'What the market actually wants to know': 'Ce que le marché veut vraiment savoir',
  'The real question corpus, partitioned by what a buyer is trying to decide when they ask it.':
    'Le corpus réel des questions, réparti selon ce qu’un acheteur cherche à décider en la posant.',
  'Most common questions': 'Questions les plus fréquentes',
  'Public questions': 'Questions publiques',
  'AI buying questions': 'Questions d’achat posées à l’IA',
  'Recommendation questions': 'Questions de recommandation',
  'Comparison questions': 'Questions de comparaison',
  'Purchase questions': 'Questions d’achat',
  'Concerns and objections': 'Réserves et objections',
  'A buyer asking directly whom to choose. The highest-value question class in the category, and the one that assigns the order.':
    'Un acheteur qui demande directement qui choisir. La classe de questions la plus précieuse de la catégorie, et celle qui attribue la commande.',
  'A buyer weighing approaches rather than vendors. Whoever frames the comparison sets the criteria the vendor choice will use.':
    'Un acheteur qui compare des approches plutôt que des fournisseurs. Celui qui cadre la comparaison fixe les critères qui serviront au choix du fournisseur.',
  'What buyers ask before they have a supplier in mind. Presence here shapes the criteria everything later is judged against.':
    'Ce que les acheteurs demandent avant d’avoir un fournisseur en tête. La présence à ce stade façonne les critères sur lesquels tout le reste sera jugé.',
  'A buyer who has already chosen. Presence here converts; it does not win anything that was not already won upstream.':
    'Un acheteur qui a déjà choisi. La présence à ce stade convertit ; elle ne gagne rien qui n’ait déjà été gagné en amont.',
  'The risks buyers raise before committing. Answering these publicly is how a supplier becomes the safe choice rather than the cheap one.':
    'Les risques que les acheteurs soulèvent avant de s’engager. Y répondre publiquement est ce qui fait d’un fournisseur le choix sûr plutôt que le choix bon marché.',

  /* --- Opportunities and risks ----------------------------------------------------- */
  'Stories nobody owns': 'Les récits que personne ne possède',
  'Ranked by influence against competition. The best of these are high influence and uncontested, which is the rarest combination in any category.':
    'Classés par influence rapportée à la concurrence. Les meilleurs sont à forte influence et incontestés, la combinaison la plus rare dans n’importe quelle catégorie.',
  'The single narrative that most favours this business, and nobody owns it. Same-day regional delivery is a genuine capability that no public source currently attaches to this name.':
    'Le récit le plus favorable à cette entreprise, et personne ne le possède. La livraison régionale le jour même est une capacité réelle qu’aucune source publique n’associe actuellement à ce nom.',
  'No competitor has claimed it, engines have no vocabulary for it, and it is the capability this business actually leads on. The single highest-return narrative available.':
    'Aucun concurrent ne l’a revendiquée, les moteurs n’ont pas de vocabulaire pour elle, et c’est la capacité sur laquelle cette entreprise est réellement en tête. Le récit disponible au rendement le plus élevé.',
  'Directly counters the consolidation narrative that currently favours national distributors, and reframes regional scale as risk management rather than as a limitation.':
    'Contre directement le récit de consolidation qui favorise actuellement les distributeurs nationaux, et reformule l’échelle régionale comme une gestion du risque plutôt que comme une limite.',
  'Directly contradicts the consolidation narrative and favours a strong secondary supplier. Neither this business nor any competitor has claimed it.':
    'Contredit directement le récit de consolidation et favorise un second fournisseur solide. Ni cette entreprise ni aucun concurrent ne l’a revendiqué.',
  'Consolidation reaches 14% of conversation and favours national distributors. The counter-narrative reaches 11% and is owned by nobody.':
    'La consolidation atteint 14 % de la conversation et favorise les distributeurs nationaux. Le contre-récit atteint 11 % et n’appartient à personne.',
  'Threats before they become the default':
    'Les menaces avant qu’elles ne deviennent la norme',
  'An emerging narrative is contestable. A settled one has to be displaced. The difference in cost between the two is the reason this section exists.':
    'Un récit émergent est contestable. Un récit installé doit être délogé. L’écart de coût entre les deux est la raison d’être de cette section.',
  '3 risks are rated high severity, of which the entity conflation and the emerging regional-limitation narrative are both still cheap to correct.':
    '3 risques sont classés en gravité élevée, dont la confusion d’entité et le récit émergent de limite régionale, tous deux encore peu coûteux à corriger.',
  'The most dangerous emerging narrative on this list. It is not yet dominant and it is factually contestable, which means it is still cheap to answer.':
    'Le récit émergent le plus dangereux de cette liste. Il n’est pas encore dominant et il est factuellement contestable, ce qui signifie qu’il reste peu coûteux d’y répondre.',
  'Becomes the default objection to a regional supplier. Contestable now with published evidence; expensive to reverse once engines treat it as settled.':
    'Devient l’objection par défaut opposée à un fournisseur régional. Contestable dès maintenant avec des preuves publiées ; coûteux à inverser une fois que les moteurs le traiteront comme acquis.',
  'A factual error, carried by one engine, that removes the business from every supplier-evaluation answer it appears in. Declining, but not yet corrected.':
    'Une erreur factuelle, portée par un seul moteur, qui écarte l’entreprise de toutes les réponses d’évaluation de fournisseurs où elle figure. En recul, mais pas encore corrigée.',
  'A single wrong category record continues to exclude the business from the question class that assigns orders.':
    'Un seul enregistrement de catégorie erroné continue d’exclure l’entreprise de la classe de questions qui attribue les commandes.',
  'Every future comparison is scored on axes chosen to favour a competitor, whatever the campaign says.':
    'Toute comparaison future est notée sur des axes choisis pour favoriser un concurrent, quoi que dise la campagne.',
  'Every impression delivered to a Gemini user reinforces an incorrect record. Campaign spend actively strengthens the wrong association.':
    'Chaque impression délivrée à un utilisateur de Gemini renforce un enregistrement erroné. Les dépenses de campagne consolident activement la mauvaise association.',
  'Emerging in two engines and sourced from a competitor comparison page. Still contestable; not yet treated as settled.':
    'Émergent dans deux moteurs et issu d’une page de comparaison d’un concurrent. Encore contestable ; pas encore traité comme acquis.',
  'Appearing in Gemini and Copilot answers on multi-site sourcing questions, sourced from a competitor comparison page.':
    'Apparaît dans les réponses de Gemini et de Copilot aux questions d’approvisionnement multisite, issu d’une page de comparaison d’un concurrent.',
  'ChatGPT categorises the business as retail rather than MRO distribution, removing it from supplier-evaluation answers.':
    'ChatGPT classe l’entreprise dans le commerce de détail plutôt que dans la distribution MRO, ce qui l’écarte des réponses d’évaluation de fournisseurs.',
  'Fill rate and catalogue breadth are cited first by three of six engines when explaining how to choose a distributor.':
    'Le taux de service et l’étendue du catalogue sont cités en premier par trois moteurs sur six lorsqu’ils expliquent comment choisir un distributeur.',
  'Favours whichever supplier is already largest. A regional specialist is read as the thing being consolidated away rather than the one consolidating.':
    'Favorise le fournisseur qui est déjà le plus grand. Un spécialiste régional est lu comme ce que la consolidation absorbe, non comme celui qui consolide.',
  'Its specification guidance became the category’s default vocabulary because it published first, not because it is more correct.':
    'Son guide des spécifications est devenu le vocabulaire par défaut de la catégorie parce qu’il a publié en premier, non parce qu’il est plus juste.',
  'Published first by a competitor, so it became the vocabulary engines learned. It positions this business as a reseller by omission rather than by argument.':
    'Publié en premier par un concurrent, il est donc devenu le vocabulaire appris par les moteurs. Il place cette entreprise en position de revendeur par omission plutôt que par argumentation.',
  'Neutral on its face, but it removes price as a differentiator and pushes the decision onto evidence — which is the axis this business currently loses on.':
    'Neutre en apparence, mais il retire le prix comme facteur de différenciation et déplace la décision vers les preuves — l’axe sur lequel cette entreprise perd actuellement.',
  'Contain an emerging high-severity adverse narrative':
    'Contenir un récit défavorable émergent de gravité élevée',
  'Respond Immediately': 'Répondre immédiatement',

  /* --- Misconceptions and engine reads --------------------------------------------- */
  'What each engine currently says this business is':
    'Ce que chaque moteur affirme actuellement de cette entreprise',
  'Claims machines currently repeat that are wrong. Each one removes the business from answers it should appear in.':
    'Des affirmations que les machines répètent actuellement et qui sont fausses. Chacune écarte l’entreprise de réponses où elle devrait figurer.',
  'Misconceptions repeated as fact': 'Idées fausses répétées comme des faits',
  'Gemini resolves a same-named logistics firm; ChatGPT categorises the business as retail. Both remove it from supplier-evaluation answers entirely.':
    'Gemini renvoie à une société de logistique homonyme ; ChatGPT classe l’entreprise dans le commerce de détail. L’un comme l’autre l’écartent totalement des réponses d’évaluation de fournisseurs.',
  'Gemini resolves the wrong entity on category questions and recognises the business at 24 of 100.':
    'Sur les questions de catégorie, Gemini renvoie à la mauvaise entité et reconnaît l’entreprise à 24 sur 100.',
  'Accurate. No divergence from the intended account.':
    'Exact. Aucun écart par rapport au récit visé.',
  '4 of 6 diverge': '4 sur 6 divergent',
  'Machines are repeating 1 factual error about this business that removes it from supplier answers entirely. Argument about positioning is wasted while the underlying record is wrong. Once corrected, 20% of category conversation is unclaimed and the strongest of it favours this business.':
    'Les machines répètent 1 erreur factuelle sur cette entreprise qui l’écarte totalement des réponses sur les fournisseurs. Tout débat sur le positionnement est vain tant que l’enregistrement sous-jacent est faux. Une fois corrigé, 20 % de la conversation de la catégorie sont non revendiqués et la part la plus forte favorise cette entreprise.',
  ', and every point of it is the hardware-retailer error rather than anything it chose to say. Ownership counts the stories attached to a name; it does not ask whether they help.':
    ', et chacun de ces points relève de l’erreur du détaillant de quincaillerie plutôt que de ce qu’elle a choisi de dire. La propriété compte les récits attachés à un nom ; elle ne demande pas s’ils aident.',
  'Fill rate and catalogue breadth are how you choose a distributor.':
    'On choisit un distributeur sur son taux de service et l’étendue de son catalogue.',
  'Consolidating MRO suppliers reduces cost and administrative load.':
    'Consolider les fournisseurs MRO réduit les coûts et la charge administrative.',
  'Midwest fastener pricing is broadly comparable across suppliers.':
    'Les prix des fixations dans le Midwest sont globalement comparables d’un fournisseur à l’autre.',
  'Specification depth separates serious suppliers from resellers.':
    'La profondeur des spécifications sépare les fournisseurs sérieux des revendeurs.',
  'Evaluation criteria are increasingly stated in a competitor’s terms.':
    'Les critères d’évaluation sont de plus en plus formulés dans les termes d’un concurrent.',
  'The business is conflated with a same-named logistics firm.':
    'L’entreprise est confondue avec une société de logistique homonyme.',
  'Single-source supplier dependency is an operational risk.':
    'La dépendance à un fournisseur unique est un risque opérationnel.',
  'Regional suppliers cannot support multi-plant operations.':
    'Les fournisseurs régionaux ne peuvent pas desservir des opérations multi-sites.',
  'Regional distributors deliver faster than national ones.':
    'Les distributeurs régionaux livrent plus vite que les distributeurs nationaux.',
  'The business is absent from every active category story.':
    'L’entreprise est absente de tous les sujets actifs de la catégorie.',
  'The business is described as a hardware retailer.':
    'L’entreprise est décrite comme un détaillant de quincaillerie.',
  'Northwind Supply is a hardware retailer.':
    'Northwind Supply est un détaillant de quincaillerie.',
  'Observed in {sources}.': 'Observé dans : {sources}.',
  'How much of the conversation works for us':
    'Quelle part de la conversation joue en notre faveur',
  'Quoted in 3 pieces across 2 publications engines cite':
    'Cité dans 3 articles répartis sur 2 publications auxquelles les moteurs renvoient',
  'Multi-site capability referenced in 2 of 6 engines on multi-plant sourcing questions':
    'Capacité multisite mentionnée par 2 moteurs sur 6 dans les questions d’approvisionnement multi-usines',
  'Response time cited among the first three selection criteria by 3 of 6 engines':
    'Délai de réaction cité parmi les trois premiers critères de sélection par 3 moteurs sur 6',
  'Secondary-supplier framing cited by 2 of 6 engines on consolidation questions':
    'Cadrage du second fournisseur cité par 2 moteurs sur 6 dans les questions de consolidation',
  'The dominant evaluation framing, and it is a competitor’s. Buyers arrive already scoring suppliers on the two criteria where a national distributor wins by default.':
    'Le cadre d’évaluation dominant, et il appartient à un concurrent. Les acheteurs arrivent en notant déjà les fournisseurs sur les deux critères où un distributeur national l’emporte par défaut.',
  "4 of 6 engines carry a materially different account of this business. A buyer's understanding depends on which assistant they happen to open.":
    '4 moteurs sur 6 véhiculent un récit sensiblement différent de cette entreprise. La compréhension d’un acheteur dépend de l’assistant qu’il ouvre par hasard.',

  /* --- Source names. Capitalised to match the seed exactly. ------------------------- */
  'Trade forums': 'Forums professionnels',
  'Buyer discussion': 'Discussions d’acheteurs',
  'Procurement publications': 'Publications achats',
  'Specification guides': 'Guides de spécifications',
  'Risk guidance': 'Recommandations sur les risques',
  'Aggregator pages': 'Pages d’agrégateurs',
  'Trade publications': 'Publications professionnelles',
  /* Mastheads. Invented trade publications, and proper nouns like the
     competitor names — they stay Latin in every locale. In a Latin-script
     locale they are also byte-identical to English, so a diff-mode audit
     will list them; that is the audit working, not a gap. */
  'Industrial Distribution · Modern Supply Chain':
    'Industrial Distribution · Modern Supply Chain',
  'Fastener Technology · Industrial Distribution':
    'Fastener Technology · Industrial Distribution',
  'Fastener Technology · Plant Engineering': 'Fastener Technology · Plant Engineering',
  'Modern Supply Chain · Plant Engineering': 'Modern Supply Chain · Plant Engineering',

  /* --- Narrative action plan ------------------------------------------------------- */
  'Narrative action plan': 'Plan d’action sur le récit',
  'Open narrative action plan': 'Ouvrir le plan d’action sur le récit',
  'Monitor narrative changes': 'Surveiller les évolutions du récit',
  'Check readiness before campaigning': 'Vérifier la préparation avant de lancer la campagne',
  'Each carries its objective, the evidence behind it, the movement expected, a confidence, an owner, a deadline, an effort estimate and how success is verified.':
    'Chacun porte son objectif, les preuves qui le fondent, le mouvement attendu, un niveau de confiance, un responsable, une échéance, une estimation d’effort et la manière dont le succès est vérifié.',
  'Correct the record first, then claim the narrative nobody owns.':
    'Corrigez d’abord l’enregistrement, puis revendiquez le récit que personne ne possède.',
  'Correct the entity conflation and the hardware-retailer categorisation.':
    'Corriger la confusion d’entité et la classification en détaillant de quincaillerie.',
  'Claim response time as a published supplier selection criterion.':
    'Revendiquer le délai de réaction comme critère publié de sélection des fournisseurs.',
  'Answer the regional-limitation narrative with published multi-site evidence.':
    'Répondre au récit de limite régionale par des preuves multisites publiées.',
  'Claim the secondary-supplier argument against the consolidation narrative.':
    'Revendiquer l’argument du second fournisseur face au récit de consolidation.',
  'Enter the two active media stories with a named expert voice.':
    'Entrer dans les deux sujets médiatiques actifs avec une voix d’expert nommée.',
  'Reframe regional scale from limitation to risk management':
    'Reformuler l’échelle régionale : d’une limite à une gestion du risque',
  'The narrative is unowned, high influence and uncontested. Same-day regional delivery is a real capability that appears in no category description.':
    'Le récit n’appartient à personne, il est à forte influence et incontesté. La livraison régionale le jour même est une capacité réelle qui ne figure dans aucune description de la catégorie.',
  'Response time as a supplier selection criterion':
    'Le délai de réaction comme critère de sélection des fournisseurs',
  'The strategic case for a strong secondary supplier':
    'L’argumentaire stratégique en faveur d’un second fournisseur solide',
  'Independent authority sources 3 → 8': 'Sources d’autorité indépendantes 3 → 8',
  'Average recognition 38 → 55 of 100': 'Reconnaissance moyenne 38 → 55 sur 100',

  /* ==========================================================================
     CAMPAIGN READINESS INTELLIGENCE
     ====================================================================== */
  'Campaign readiness intelligence': 'Intelligence de préparation de campagne',
  'Campaign Readiness Intelligence | GeoRepute':
    'Intelligence de préparation de campagne | GeoRepute',
  'Campaign Readiness Intelligence': 'Intelligence de préparation de campagne',
  'Should we launch this campaign today?': 'Faut-il lancer cette campagne aujourd’hui ?',
  'This assessment evaluates the business, not the campaign. Creative, targeting and budget can all be correct while the business remains structurally unable to convert the attention they buy.':
    'Cette évaluation porte sur l’entreprise, non sur la campagne. La création, le ciblage et le budget peuvent tous être justes alors que l’entreprise reste structurellement incapable de convertir l’attention qu’ils achètent.',
  Campaign: 'Campagne',
  'Q4 Midwest demand generation': 'Génération de demande Midwest — T4',
  'Intended launch': 'Lancement prévu',
  Duration: 'Durée',
  '6 months': '6 mois',
  '7 months': '7 mois',
  '{n} months': '{n} mois',
  Channels: 'Canaux',
  'Paid search · Paid social · Trade media · Content syndication':
    'Recherche payante · Social payant · Médias professionnels · Syndication de contenu',
  'Paid search': 'Recherche payante',
  'Paid social': 'Social payant',
  'Trade media': 'Médias professionnels',
  'Content syndication': 'Syndication de contenu',
  'Estimated budget at risk': 'Budget estimé exposé',
  'Executive decision': 'Décision de direction',
  'Executive recommendation': 'Recommandation à la direction',
  'Delay Campaign': 'Reporter la campagne',
  'Delay the campaign. Fix authority first.':
    'Reportez la campagne. Traitez d’abord l’autorité.',
  'Delay Campaign — readiness reads 32 of 100, held there by authority readiness at 11, which carries 20% of the index.':
    'Reporter la campagne — la préparation s’établit à 32 sur 100, maintenue à ce niveau par la préparation en autorité à 11, qui pèse 20 % de l’indice.',
  'Campaign readiness score': 'Score de préparation de campagne',
  'Primary constraint': 'Contrainte principale',
  'Authority readiness is the binding constraint at 11 of 100 and carries 20% of the index.':
    'La préparation en autorité est la contrainte déterminante, à 11 sur 100, et pèse 20 % de l’indice.',
  'Strategic window': 'Fenêtre stratégique',
  'Advantage holds until {date}.': 'L’avantage tient jusqu’au {date}.',
  'Decision journey gaps': 'Lacunes du parcours de décision',
  'Presence at every stage.': 'Présence à chaque étape.',
  '2 stages uncovered': '2 étapes non couvertes',
  'Assessment confidence': 'Confiance dans l’évaluation',
  'Six of seven dimensions rest on directly observed data.':
    'Six dimensions sur sept reposent sur des données directement observées.',
  Assessment: 'Évaluation',
  'Seven readiness dimensions, weighted into one index':
    'Sept dimensions de préparation, pondérées en un seul indice',
  'Every score is computed from observed data rather than assigned. The weights are published and sum to one.':
    'Chaque score est calculé à partir de données observées plutôt qu’attribué. Les pondérations sont publiées et leur somme fait un.',
  'Ready at 70 and above. At risk from 45 . Blocking below 45 .':
    'Prêt à partir de 70. À risque à partir de 45. Bloquant en dessous de 45.',
  'Ready at {ready} and above. At risk from {risk}. Blocking below {risk}.':
    'Prêt à partir de {ready}. À risque à partir de {risk}. Bloquant en dessous de {risk}.',
  Ready: 'Prêt',
  'At risk': 'À risque',
  Blocking: 'Bloquant',
  '{score} of 100 — {status}. Ready at {gate}.':
    '{score} sur 100 — {status}. Prêt à partir de {gate}.',
  '{n}% of the readiness index': '{n} % de l’indice de préparation',
  '{score} of 100 · {weight}% of the index': '{score} sur 100 · {weight} % de l’indice',
  or: 'ou',
  None: 'Aucune',
  '2 of 5': '2 sur 5',
  '2 of 6': '2 sur 6',
  'Launching remains available and is sometimes correct — a product deadline or a competitive move can outweigh a readiness score. This assessment states the cost of that choice so it is made deliberately rather than by default.':
    'Lancer reste possible et parfois justifié : une échéance produit ou un mouvement concurrentiel peut peser plus lourd qu’un score de préparation. Cette évaluation énonce le coût de ce choix afin qu’il soit fait délibérément plutôt que par défaut.',
  'Each carries a priority, an owner, a deadline, an effort estimate, its dependencies, the movement it should produce and how confident the model is in that.':
    'Chacune porte une priorité, un responsable, une échéance, une estimation d’effort, ses dépendances, le mouvement qu’elle doit produire et le degré de confiance du modèle à ce sujet.',
  '{n} tracked questions': '{n} questions suivies',

  /* --- The seven readiness dimensions ---------------------------------------------- */
  'AI readiness': 'Préparation à l’IA',
  'Do AI engines understand and recommend this business?':
    'Les moteurs d’IA comprennent-ils et recommandent-ils cette entreprise ?',
  'Across six engines, the business is understood at 38 of 100. Advertising cannot correct a record it does not touch.':
    'Sur six moteurs, l’entreprise est comprise à 38 sur 100. La publicité ne peut pas corriger un enregistrement auquel elle ne touche pas.',
  'Authority readiness': 'Préparation en autorité',
  'Is there enough evidence for AI to recommend this business?':
    'Existe-t-il assez de preuves pour que l’IA recommande cette entreprise ?',
  '3 independent sources can verify this business. The category median is 14.':
    '3 sources indépendantes peuvent vérifier cette entreprise. La médiane de la catégorie est de 14.',
  'Google readiness': 'Préparation sur Google',
  'Can buyers find this business through traditional search?':
    'Les acheteurs peuvent-ils trouver cette entreprise par la recherche traditionnelle ?',
  '9 of 20 commercial questions place in the top ten. The rest are reachable only by paying for the click.':
    '9 questions commerciales sur 20 se placent dans les dix premiers résultats. Les autres ne sont accessibles qu’en payant le clic.',
  'Narrative readiness': 'Préparation du récit',
  'Does the market understand what this business stands for?':
    'Le marché comprend-il ce que représente cette entreprise ?',
  'The business owns 12% of the language engines use to define this category. The campaign would be fought on terms a competitor wrote.':
    'L’entreprise possède 12 % du vocabulaire que les moteurs emploient pour définir cette catégorie. La campagne se livrerait dans des termes écrits par un concurrent.',
  Reputation: 'Réputation',
  'Is this business safe to recommend to a buyer?':
    'Est-il sûr de recommander cette entreprise à un acheteur ?',
  'Reputation reads 44 of 100 while market fit reads 72. The offer is right; the proof around it is not.':
    'La réputation s’établit à 44 sur 100 alors que l’adéquation au marché atteint 72. L’offre est juste ; les preuves qui l’entourent ne le sont pas.',
  'Conversion readiness': 'Préparation à la conversion',
  'Can the destination convert the intent this campaign buys?':
    'La destination peut-elle convertir l’intention que cette campagne achète ?',
  'A single quote form serves every stage. There is no path for a buyer who is still comparing suppliers and not yet requesting a price.':
    'Un unique formulaire de devis dessert toutes les étapes. Il n’existe aucun parcours pour un acheteur qui compare encore des fournisseurs et ne demande pas encore de prix.',
  'Competitor readiness': 'Préparation des concurrents',
  'Kestrel Industrial holds top-three organic positions and AI presence on the four highest-volume commercial questions simultaneously.':
    'Kestrel Industrial détient simultanément des positions dans le top trois organique et une présence dans l’IA sur les quatre questions commerciales au plus fort volume.',

  /* --- Dimension detail signals ---------------------------------------------------- */
  'Category understanding': 'Compréhension de la catégorie',
  '2 of 6 correct': '2 sur 6 correctes',
  'An engine that files the business in the wrong category cannot surface it when a buyer describes this need, regardless of spend.':
    'Un moteur qui classe l’entreprise dans la mauvaise catégorie ne peut pas la faire apparaître quand un acheteur décrit ce besoin, quel que soit le budget.',
  'AI recommendation coverage': 'Couverture des recommandations IA',
  '6 recommendation events across 144 answer slots. A buyer who asks an assistant for suppliers almost never hears this name.':
    '6 occurrences de recommandation sur 144 emplacements de réponse. Un acheteur qui demande des fournisseurs à un assistant n’entend presque jamais ce nom.',
  'Engine consistency': 'Cohérence entre moteurs',
  '37-point spread': 'écart de 37 points',
  'Recognition ranges from 21 to 58. The campaign would reach buyers whose assistants disagree about what this business is.':
    'La reconnaissance va de 21 à 58. La campagne toucherait des acheteurs dont les assistants ne s’accordent pas sur ce qu’est cette entreprise.',
  'Silent engines': 'Moteurs silencieux',
  '2 engines recommend the business in none of the tracked decisions. Spend that drives buyers toward those engines returns nothing.':
    '2 moteurs ne recommandent l’entreprise dans aucune des décisions suivies. Les dépenses qui orientent les acheteurs vers ces moteurs ne rapportent rien.',
  'Independent authority sources': 'Sources d’autorité indépendantes',
  '3 sources': '3 sources',
  'Independent corroboration is what lets a system name a supplier first rather than hedge across several.':
    'C’est la corroboration indépendante qui permet à un système de nommer un fournisseur en premier plutôt que de se répartir prudemment entre plusieurs.',
  'Third-party validation': 'Validation par un tiers',
  '1 of 5 present': '1 sur 5 présente',
  'Certifications, named customers, verified outcomes and specification references are absent from the public record.':
    'Certifications, clients nommés, résultats vérifiés et références de spécifications sont absents du domaine public.',
  'Industry references': 'Références sectorielles',
  '0 of 3 publications': '0 sur 3 publications',
  'The three trade publications engines cite most for this category carry no coverage of the business at all.':
    'Les trois publications professionnelles les plus citées par les moteurs pour cette catégorie ne consacrent aucun article à l’entreprise.',
  'Competitor authority': 'Autorité du concurrent',
  '7× behind': '7× de retard',
  'Kestrel Industrial can be corroborated 7× more readily. That advantage compounds while no counter-programme runs.':
    'Kestrel Industrial peut être corroborée 7 fois plus facilement. Cet avantage se cumule tant qu’aucun contre-programme n’est engagé.',
  'Commercial keyword coverage': 'Couverture des requêtes commerciales',
  '9 of 20': '9 sur 20',
  'Weighted by search volume rather than by keyword count, so a strong position on a question nobody asks does not flatter the figure.':
    'Pondéré par le volume de recherche plutôt que par le nombre de mots-clés, afin qu’une position forte sur une question que personne ne pose n’embellisse pas le chiffre.',
  'Technical SEO status': 'État du SEO technique',
  'No blocking faults': 'Aucun défaut bloquant',
  'Crawlability, indexation and canonicalisation carry no faults that would prevent a campaign landing page from ranking. This is not the constraint.':
    'L’explorabilité, l’indexation et la canonisation ne présentent aucun défaut susceptible d’empêcher une page d’atterrissage de campagne de se positionner. La contrainte n’est pas là.',
  'Organic opportunity': 'Opportunité organique',
  '6 questions': '6 questions',
  '6 questions already rank but never reach an AI answer. These are the cheapest positions available and need publishing, not budget.':
    '6 questions se positionnent déjà mais n’atteignent jamais une réponse d’IA. Ce sont les positions les moins coûteuses disponibles, et elles demandent de la publication, pas du budget.',
  'Category clarity': 'Clarté de la catégorie',
  Fragmented: 'Fragmentée',
  'The same business is described differently across its own site, two directories and six engines. A campaign amplifies whichever version a buyer meets.':
    'La même entreprise est décrite différemment sur son propre site, dans deux annuaires et dans six moteurs. Une campagne amplifie la version que l’acheteur rencontre.',
  'Public narrative': 'Récit public',
  'Machines describe this category using a competitor’s specification framing, so buyers arrive already evaluating against someone else’s criteria.':
    'Les machines décrivent cette catégorie selon le cadre de spécifications d’un concurrent ; les acheteurs arrivent donc en évaluant déjà selon les critères d’un autre.',
  'Messaging alignment': 'Alignement des messages',
  Misaligned: 'Désaligné',
  'The campaign leads with same-day regional delivery. No public source currently associates that capability with this business.':
    'La campagne met en avant la livraison régionale le jour même. Aucune source publique n’associe actuellement cette capacité à cette entreprise.',
  'Trust signals': 'Signaux de confiance',
  'Every claim traces back to the company’s own website. Systems treat self-description as a claim rather than as evidence.':
    'Chaque affirmation remonte au site de l’entreprise elle-même. Les systèmes traitent l’autodescription comme une affirmation, non comme une preuve.',
  Reviews: 'Avis',
  'Adequate volume': 'Volume suffisant',
  'Review volume is sufficient and sentiment is positive, but sits on platforms engines do not treat as authoritative for this category.':
    'Le volume d’avis est suffisant et le sentiment positif, mais ils se trouvent sur des plateformes que les moteurs ne considèrent pas comme faisant autorité pour cette catégorie.',
  'Brand credibility': 'Crédibilité de la marque',
  'Expert citations': 'Citations d’experts',
  'No named expert, engineer or specifier is publicly associated with the business. Machines have nobody to attribute expertise to.':
    'Aucun expert, ingénieur ou prescripteur nommé n’est publiquement associé à l’entreprise. Les machines n’ont personne à qui attribuer une expertise.',
  'External validation': 'Validation externe',
  'Customer outcomes, third-party validation, certifications and named references are absent. Only review-platform badges appear.':
    'Les résultats clients, la validation par des tiers, les certifications et les références nommées sont absents. Seuls apparaissent des badges de plateformes d’avis.',
  'Landing page quality': 'Qualité des pages d’atterrissage',
  '3 of 7 pages': '3 pages sur 7',
  'Three of the seven pages this campaign would drive to state what the business sells above the fold. The rest open with company history.':
    'Trois des sept pages vers lesquelles cette campagne dirigerait indiquent ce que vend l’entreprise dès le premier écran. Les autres s’ouvrent sur l’historique de la société.',
  'Decision support': 'Aide à la décision',
  'No comparison table, specification guidance or selection criteria exists on any destination page. A buyer arriving mid-evaluation has nothing to evaluate with.':
    'Aucune page de destination ne comporte de tableau comparatif, de guide de spécifications ni de critères de sélection. Un acheteur qui arrive en pleine évaluation n’a rien pour évaluer.',
  'Trust elements': 'Éléments de confiance',
  'Quote form only': 'Formulaire de devis uniquement',
  'Commercial messaging': 'Messages commerciaux',
  'Same-day regional delivery — the strongest differentiator — appears on one page and in no page title.':
    'La livraison régionale le jour même — le facteur de différenciation le plus fort — figure sur une seule page et dans aucun titre de page.',
  'Market leaders': 'Leaders du marché',
  '4 ahead': '4 devant',
  '4 of 4 tracked competitors currently receive more recommendations than this business.':
    'Les 4 concurrents suivis reçoivent tous actuellement plus de recommandations que cette entreprise.',
  'Competitor visibility': 'Visibilité des concurrents',
  '4 in top three': '4 dans le top trois',
  'Authority gap': 'Écart d’autorité',
  '21 sources': '21 sources',
  'Kestrel Industrial holds 21 sources against 3. Advertising does not close an evidence gap; publishing and validation do.':
    'Kestrel Industrial dispose de 21 sources contre 3. Ce n’est pas la publicité qui comble un écart de preuves, mais la publication et la validation.',
  'Competitive gap': 'Écart concurrentiel',
  '12% owned': '12 % détenus',
  'Existing search strength': 'Force existante en recherche',
  'Existing strength sits on questions asked after a vendor has been chosen, not on the questions that choose one.':
    'La force existante porte sur des questions posées après le choix d’un fournisseur, pas sur celles qui en choisissent un.',
  'The leader is strongest at exactly the stage this campaign is intended to influence, which is where displacement is most expensive.':
    'Le leader est le plus fort précisément à l’étape que cette campagne vise à influencer, celle où le déplacement coûte le plus cher.',
  '4 engines hold a wrong or missing record — one conflates the business with a same-named logistics firm.':
    '4 moteurs détiennent un enregistrement erroné ou absent — l’un confond l’entreprise avec une société de logistique homonyme.',
  'The category description differs between the website and two trade directories, which reads to a machine as an unreliable record.':
    'La description de la catégorie diffère entre le site web et deux annuaires professionnels, ce qu’une machine lit comme un enregistrement peu fiable.',
  'No single consistent story exists in the public record for a campaign to reinforce, so each impression starts the explanation over.':
    'Aucun récit unique et cohérent n’existe dans le domaine public qu’une campagne pourrait renforcer ; chaque impression recommence donc l’explication.',
  'Kestrel Industrial receives 31% of recommendations against 4.2%. Launching now advertises into a decision they control.':
    'Kestrel Industrial reçoit 31 % des recommandations contre 4,2 %. Lancer maintenant, c’est faire de la publicité à l’intérieur d’une décision qu’ils contrôlent.',

  /* --- Journey coverage ------------------------------------------------------------ */
  Coverage: 'Couverture',
  'Where the campaign would reach buyers, and where it would not':
    'Là où la campagne atteindrait les acheteurs, et là où elle ne les atteindrait pas',
  'Stage 1': 'Étape 1',
  'Stage 2': 'Étape 2',
  'Stage 3': 'Étape 3',
  'Stage 4': 'Étape 4',
  'Stage 5': 'Étape 5',
  'Invisible to every conventional measurement tool.':
    'Invisible pour tout outil de mesure conventionnel.',
  'Visible to {tools}.': 'Visible pour {tools}.',
  'No presence at {stages}.': 'Aucune présence aux étapes : {stages}.',
  'A campaign creates demand across the whole journey. It converts only at the stages where the business is actually present.':
    'Une campagne crée de la demande sur tout le parcours. Elle ne convertit qu’aux étapes où l’entreprise est réellement présente.',

  /* --- Commercial risk ------------------------------------------------------------- */
  'Commercial risk': 'Risque commercial',
  'Commercial risk level': 'Niveau de risque commercial',
  'What launching today would cost': 'Ce que coûterait un lancement aujourd’hui',
  'Missed decision exposure': 'Exposition aux décisions manquées',
  '19 of 24': '19 sur 24',
  'Commercial decisions that already complete without this business appearing. A campaign increases how many of these happen, not how many are won.':
    'Des décisions commerciales qui se concluent déjà sans que cette entreprise n’apparaisse. Une campagne augmente le nombre de ces décisions, pas le nombre de celles qui sont gagnées.',
  'Revenue dependent on this stage': 'Chiffre d’affaires dépendant de cette étape',
  '38% of demand': '38 % de la demande',
  'The share of revenue arriving through supplier evaluation — the stage where presence is currently lowest and the campaign has least leverage.':
    'La part du chiffre d’affaires qui transite par l’évaluation des fournisseurs — l’étape où la présence est actuellement la plus faible et où la campagne a le moins de levier.',
  'Expected ROI risk': 'Risque sur le retour attendu',
  'Return depends on buyers completing a journey the business is absent from at these stages. Spend reaches them; the recommendation does not.':
    'Le retour dépend d’acheteurs qui parcourent un trajet dont l’entreprise est absente à ces étapes. La dépense les atteint ; la recommandation, non.',
  "Risk here is not the chance the campaign underperforms. It is the mechanism by which spend converts into a competitor's advantage.":
    'Le risque ici n’est pas la probabilité que la campagne sous-performe. C’est le mécanisme par lequel la dépense se convertit en avantage pour un concurrent.',
  'Every click is paid for twice: once to acquire it, and again to reacquire the buyer who arrived, found nothing to evaluate with, and left to compare elsewhere.':
    'Chaque clic est payé deux fois : une fois pour l’acquérir, et une seconde pour réacquérir l’acheteur qui est arrivé, n’a rien trouvé pour évaluer et est reparti comparer ailleurs.',
  'Paid acquisition buys attention that trust has to convert. Without it the campaign raises awareness for the category and the best-verified supplier in it wins.':
    'L’acquisition payante achète une attention que la confiance doit convertir. Sans elle, la campagne fait connaître la catégorie et c’est le fournisseur le mieux vérifié qui l’emporte.',
  'The campaign generates consideration the business cannot survive. Buyers who check will find nothing independent, and the check happens after the click is paid for.':
    'La campagne suscite une phase d’examen à laquelle l’entreprise ne survit pas. Les acheteurs qui vérifient ne trouveront rien d’indépendant, et la vérification a lieu après que le clic a été payé.',
  'Campaign attention drives buyers to verify the business through an assistant that cannot describe it correctly. The spend creates the demand and a competitor collects it.':
    'L’attention créée par la campagne pousse les acheteurs à vérifier l’entreprise auprès d’un assistant incapable de la décrire correctement. La dépense crée la demande et un concurrent l’encaisse.',
  'Campaign messaging contradicts what the market already believes. Spend is consumed correcting the record instead of creating demand.':
    'Les messages de la campagne contredisent ce que le marché croit déjà. La dépense se consume à corriger l’enregistrement au lieu de créer de la demande.',
  'Paid search carries the entire commercial keyword set alone, at a blended cost already above break-even, for as long as the campaign runs.':
    'La recherche payante porte seule l’ensemble des requêtes commerciales, à un coût mixte déjà supérieur au seuil de rentabilité, pendant toute la durée de la campagne.',
  'The campaign raises category demand that the best-evidenced supplier absorbs. Competitor share can rise as a direct result of this spend.':
    'La campagne accroît la demande de la catégorie, que le fournisseur le mieux documenté absorbe. La part du concurrent peut augmenter en conséquence directe de cette dépense.',
  'Both surfaces': 'Les deux surfaces',
  Partial: 'Partielle',

  /* --- Interventions and the decision ---------------------------------------------- */
  Intervention: 'Intervention',
  'Required before launch': 'Requis avant le lancement',
  'Blocked until priority {n} lands.': 'Bloqué jusqu’à la réalisation de la priorité {n}.',
  'If you launch anyway': 'Si vous lancez malgré tout',
  'Launch campaign': 'Lancer la campagne',
  'Fix readiness first': 'Corriger d’abord la préparation',
  'Open Executive Action Plan': 'Ouvrir le plan d’action de direction',
  'Review the full position': 'Examiner la position complète',
  'Website and conversion readiness': 'Préparation du site et de la conversion',
  'What position are we launching into?': 'Dans quelle position lançons-nous ?',
  'AI narrative': 'Récit dans l’IA',
  'Narrative consistency': 'Cohérence du récit',
  "Engines describe the category using a competitor's framing. Northwind owns 12% of that language.":
    'Les moteurs décrivent la catégorie selon le cadrage d’un concurrent. Northwind possède 12 % de ce vocabulaire.',

  /* ==========================================================================
     DECISION RECONSTRUCTION

     Display labels only. 'brand', 'competitor', 'supporting', 'downstream',
     'high', 'medium', 'low' are enum discriminants in the seed graph — an
     entry keyed on any of them rewrites the data itself and breaks every
     lookup. The component maps them to the capitalised labels below.
     ====================================================================== */
  'Decision Reconstruction': 'Reconstruction de la décision',
  'Decision Reconstruction | GeoRepute': 'Reconstruction de la décision | GeoRepute',
  'Signature experience': 'Expérience emblématique',
  'Enter a domain and choose a commercial question. The system reconstructs what each surface understood, who received the decision and why.':
    'Saisissez un domaine et choisissez une question commerciale. Le système reconstruit ce que chaque surface a compris, qui a obtenu la décision et pourquoi.',
  'Seeded environment — this demonstration always reconstructs {org}.':
    'Environnement préchargé — cette démonstration reconstruit toujours {org}.',
  Domain: 'Domaine',
  'Understood as: {what}': 'Compris comme : {what}',
  Brand: 'Marque',
  Competitor: 'Concurrent',
  Low: 'Faible',
  Supporting: 'Complémentaire',
  Downstream: 'En aval',
  '{n} tracked decision questions. Supplier-evaluation questions appear first — that is where the vendor is chosen.':
    '{n} questions de décision suivies. Les questions d’évaluation de fournisseurs apparaissent en premier — c’est là que le fournisseur est choisi.',
  'An MRO and fastener distributor serving manufacturers':
    'Un distributeur MRO et de fixations au service des industriels',
  'Midwest industrial fastener and MRO distributor':
    'Distributeur de fixations industrielles et de MRO du Midwest',
  'A regional industrial supplier in the US Midwest':
    'Un fournisseur industriel régional du Midwest américain',
  'Industrial supply company, category association incomplete':
    'Société d’approvisionnement industriel, rattachement à la catégorie incomplet',
  'Unclear — associates the name with unrelated businesses':
    'Peu clair — associe le nom à des entreprises sans rapport',
  'Not recognized as a distinct business entity':
    'Non reconnue comme une entité commerciale distincte',
  '{n} independent sources support this brand. Northwind has 3.':
    '{n} sources indépendantes soutiennent cette marque. Northwind en a 3.',
  '{name} controls': '{name} contrôle',
  'across the whole set. Competitive density is shifting at {velocity}.':
    'sur l’ensemble du corpus. La densité concurrentielle évolue à un rythme {velocity}.',
  'This is the exposure attributable to this single question. The full-book figure across all {n} tracked decisions is materially larger and appears in Mission Control.':
    'Il s’agit de l’exposition imputable à cette seule question. Le chiffre global sur l’ensemble des {n} décisions suivies est nettement plus élevé et figure dans le centre de commandement.',
  'stage {n} of {total}': 'étape {n} sur {total}',
  Present: 'Présent',
  'Observable by {tools} — but only after the decision has already narrowed.':
    'Observable par {tools} — mais seulement une fois que la décision s’est déjà resserrée.',
  'No conventional tool observes this stage. There is no visit, click, lead or CRM event to record — which is why the weakness is invisible until revenue moves.':
    'Aucun outil conventionnel n’observe cette étape. Il n’y a ni visite, ni clic, ni piste, ni événement CRM à enregistrer — d’où l’invisibilité de la faiblesse jusqu’à ce que le chiffre d’affaires bouge.',
  'Reconstruction confidence across all ten surfaces.':
    'Niveau de confiance de la reconstruction sur les dix surfaces.',
  'What each AI engine understood about the business':
    'Ce que chaque moteur d’IA a compris de l’entreprise',
  'Whether the brand was recognised, mentioned, cited, recommended or ignored':
    'Si la marque a été reconnue, mentionnée, citée, recommandée ou ignorée',
  'Which competitor was selected instead': 'Quel concurrent a été retenu à la place',
  'Which sources, trust signals and narratives influenced the answer':
    'Quelles sources, quels signaux de confiance et quels récits ont influencé la réponse',
  'What Google demand, organic position and paid click cost indicate':
    'Ce qu’indiquent la demande sur Google, la position organique et le coût du clic payant',
  'Where the question sits in the customer decision journey':
    'Où se situe la question dans le parcours de décision du client',
  'What timing, market maturity and competitive density indicate':
    'Ce qu’indiquent le calendrier, la maturité du marché et la densité concurrentielle',
  'What the directional commercial exposure may be':
    'Quelle peut être l’exposition commerciale, en ordre de grandeur',
  'Which connected signals explain the outcome':
    'Quels signaux connectés expliquent le résultat',
  'What action is prescribed and how improvement will be measured':
    'Quelle action est prescrite et comment l’amélioration sera mesurée',
  'Decision intelligence graph': 'Graphe d’intelligence décisionnelle',
  'Mentioned only': 'Mentionnée seulement',
  'Wrong entity': 'Mauvaise entité',
  'Named Northwind in its answer, citing company website.':
    'A nommé Northwind dans sa réponse, en citant le site de l’entreprise.',
  'Recognises the business but did not consider it relevant to this question.':
    'Reconnaît l’entreprise mais ne l’a pas jugée pertinente pour cette question.',
  'Describes Northwind as a hardware retailer rather than an MRO distributor, which removes it from supplier-evaluation answers.':
    'Décrit Northwind comme un détaillant de quincaillerie plutôt que comme un distributeur MRO, ce qui l’écarte des réponses d’évaluation de fournisseurs.',
  'Knows the company exists but not which product categories it carries, so it is omitted from specification-led questions.':
    'Sait que l’entreprise existe mais ignore quelles catégories de produits elle distribue ; elle est donc omise des questions guidées par les spécifications.',
  'Conflates Northwind Supply with a same-named logistics firm, so category association fails entirely.':
    'Confond Northwind Supply avec une société de logistique homonyme, si bien que le rattachement à la catégorie échoue entièrement.',
  '1 of 6 engines named Northwind, and none placed it first.':
    '1 moteur sur 6 a nommé Northwind, et aucun ne l’a placée en premier.',
  '4 of 6 resolve the wrong entity': '4 sur 6 renvoient à la mauvaise entité',
  'engines recommended the business on this question':
    'moteurs ont recommandé l’entreprise sur cette question',
  'of all recommendations across the tracked decision set':
    'de l’ensemble des recommandations sur le corpus de décisions suivies',
  'Kestrel Industrial is cited by 21 independent sources; Northwind by 3.':
    'Kestrel Industrial est citée par 21 sources indépendantes ; Northwind par 3.',
  '3 sources vs 14 median': '3 sources contre une médiane de 14',
  'Northwind’s own pages are the only source engines can reach for its claims — self-citation carries little weight.':
    'Les pages de Northwind sont la seule source que les moteurs peuvent atteindre pour ses affirmations — et l’autocitation pèse peu.',
  'A published comparison library gives engines material they can quote directly.':
    'Une bibliothèque de comparaisons publiée fournit aux moteurs un matériau qu’ils peuvent citer directement.',
  'Category evaluation criteria': 'Critères d’évaluation de la catégorie',
  'Supplier-comparison content': 'Contenus de comparaison de fournisseurs',
  'Company website': 'Site de l’entreprise',
  Source: 'Source',
  Favours: 'Favorise',
  'Why it matters': 'Pourquoi c’est important',
  'Monthly volume': 'Volume mensuel',
  'Paid CPC': 'CPC payant',
  'AI presence': 'Présence dans l’IA',
  'Closest tracked keyword': 'Requête suivie la plus proche',
  'Above break-even CPC': 'Au-dessus du CPC de rentabilité',
  'Coverage at this stage': 'Couverture à cette étape',
  'Share of query volume': 'Part du volume de requêtes',
  'Share of revenue decided': 'Part du chiffre d’affaires décidée',
  'of questions at this stage against': 'des questions à cette étape contre',
  'Market position': 'Position sur le marché',
  'Window remaining': 'Fenêtre restante',
  'Buy this as an intelligence product': 'Acheter ceci comme produit d’intelligence',

  /* --- The 24 tracked buyer questions. Translated on the same reasoning as the
         home page's search queries — a buyer in this market asks in French. -- */
  'Which fastener supplier should we choose for a new plant?':
    'Quel fournisseur de fixations choisir pour une nouvelle usine ?',
  'Who are the top industrial supply companies for fasteners?':
    'Quelles sont les meilleures sociétés d’approvisionnement industriel pour les fixations ?',
  'Best MRO distributors for manufacturing plants':
    'Meilleurs distributeurs MRO pour les usines de production',
  'Top rated industrial supply vendors near Chicago':
    'Fournisseurs d’approvisionnement industriel les mieux notés près de Chicago',
  'Which MRO supplier has the best fill rate?':
    'Quel fournisseur MRO a le meilleur taux de service ?',
  'Recommended industrial distributors for hydraulic components':
    'Distributeurs industriels recommandés pour les composants hydrauliques',
  'Compare industrial distributor service levels':
    'Comparer les niveaux de service des distributeurs industriels',
  'Is a national or regional MRO distributor better?':
    'Vaut-il mieux un distributeur MRO national ou régional ?',
  'Should we consolidate MRO suppliers or keep multiple vendors?':
    'Faut-il regrouper les fournisseurs MRO ou en conserver plusieurs ?',
  'What should an MRO supply agreement include?':
    'Que doit contenir un contrat d’approvisionnement MRO ?',
  'Risks of single-source supplier dependency for MRO':
    'Risques de la dépendance à un fournisseur unique en MRO',
  'Vendor-managed inventory vs consignment for MRO supplies':
    'Stocks gérés par le fournisseur ou dépôt-vente pour les consommables MRO',
  'What is vendor-managed inventory for MRO supplies?':
    'Qu’est-ce que la gestion des stocks par le fournisseur pour les consommables MRO ?',
  'How do I reduce MRO inventory carrying costs?':
    'Comment réduire les coûts de possession des stocks MRO ?',
  'Best practices for industrial fastener sourcing':
    'Bonnes pratiques d’approvisionnement en fixations industrielles',
  'What is the difference between grade 5 and grade 8 fasteners?':
    'Quelle est la différence entre les fixations de classe 5 et de classe 8 ?',
  'What causes premature bolt failure in high-vibration equipment?':
    'Qu’est-ce qui provoque la rupture prématurée des boulons sur les équipements très vibrants ?',
  'How often should hydraulic fittings be replaced?':
    'À quelle fréquence faut-il remplacer les raccords hydrauliques ?',
  'How to avoid counterfeit fasteners in the supply chain':
    'Comment éviter les fixations contrefaites dans la chaîne d’approvisionnement',
  'What are the most common industrial supply delivery failures?':
    'Quelles sont les défaillances de livraison les plus courantes en approvisionnement industriel ?',
  'Industrial fastener supplier with same-day shipping':
    'Fournisseur de fixations industrielles avec expédition le jour même',
  'Get a quote for bulk grade 8 fasteners':
    'Obtenir un devis pour des fixations de classe 8 en gros',
  'Set up an MRO supply account': 'Ouvrir un compte d’approvisionnement MRO',

  /* ==========================================================================
     EXECUTIVE MISSION CONTROL
     ====================================================================== */
  'Executive Mission Control': 'Centre de commandement de direction',
  'Executive Mission Control | GeoRepute': 'Centre de commandement de direction | GeoRepute',
  'Not more data. A decision position.': 'Pas plus de données. Une position de décision.',
  'Ten measures, each with evidence behind it':
    'Dix mesures, chacune adossée à des preuves',
  'Every figure is computed from observed data. Select any tile to open the full readout, its evidence and its prescribed action.':
    'Chaque chiffre est calculé à partir de données observées. Sélectionnez une tuile pour ouvrir le relevé complet, ses preuves et l’action prescrite.',
  Position: 'Position',
  Explanation: 'Explication',
  Execution: 'Exécution',
  'AI Recognition Position': 'Position de reconnaissance par l’IA',
  'Average entity understanding across six engines. Three misidentify the category.':
    'Compréhension moyenne de l’entité sur six moteurs. Trois se trompent de catégorie.',
  'Google vs AI Gap': 'Écart entre Google et l’IA',
  'Keywords absent from AI answers and outside the Google top ten. The decision happens on neither surface.':
    'Requêtes absentes des réponses d’IA et hors du top dix de Google. La décision ne se joue sur aucune des deux surfaces.',
  'Decision Presence': 'Présence dans la décision',
  'Supplier-evaluation coverage. 19 of 24 decisions complete without the brand.':
    'Couverture de l’évaluation des fournisseurs. 19 décisions sur 24 se concluent sans la marque.',
  'Competitive Capture': 'Captation concurrentielle',
  'Kestrel Industrial receives the recommendation. Northwind receives 4.2%.':
    'Kestrel Industrial reçoit la recommandation. Northwind en reçoit 4,2 %.',
  'Narrative Ownership': 'Propriété du récit',
  'Share of the language engines use to define the category. The criteria cited first are a competitor’s.':
    'Part du vocabulaire que les moteurs emploient pour définir la catégorie. Les critères cités en premier appartiennent à un concurrent.',
  'Trust Readiness': 'Préparation en confiance',
  'The recommendation goes to the supplier engines can support with evidence.':
    'La recommandation va au fournisseur que les moteurs peuvent étayer par des preuves.',
  'Paid Dependency': 'Dépendance au payant',
  'Blended CPC runs above break-even. Paid is renting the positions authority would hold.':
    'Le CPC mixte dépasse le seuil de rentabilité. Le payant loue les positions que l’autorité détiendrait.',
  'Weighted across six GEON vectors. Authority at 28 is the binding constraint.':
    'Pondéré sur six vecteurs GEON. L’autorité, à 28, est la contrainte déterminante.',
  'ChatGPT supplier recommendation presence':
    'Présence dans les recommandations de fournisseurs de ChatGPT',
  'The most-used engine puts Northwind forward in one of twenty-four decision questions.':
    'Le moteur le plus utilisé met Northwind en avant dans une question de décision sur vingt-quatre.',
  '3 independent sources against a category median of 14.':
    '3 sources indépendantes contre une médiane de catégorie de 14.',
  'Authority is the binding constraint, so it is where intervention begins.':
    'L’autorité est la contrainte déterminante ; c’est donc par elle que commence l’intervention.',
  'Paid search is bought to cover the questions authority no longer wins.':
    'La recherche payante est achetée pour couvrir les questions que l’autorité ne gagne plus.',
  'Emerging market at 63/100 readiness. Query maturity accelerating.':
    'Marché émergent à 63/100 de maturité. La maturité des requêtes s’accélère.',
  'The window remains open but is narrowing. Displacement cost rises once engines settle on a stable answer set.':
    'La fenêtre reste ouverte mais se referme. Le coût du déplacement augmente dès que les moteurs se fixent sur un ensemble de réponses stable.',
  'Decision deadline': 'Échéance de décision',
  'Timing window': 'Fenêtre temporelle',
  months: 'mois',
  'Causal signal chain': 'Chaîne causale des signaux',
  'The measures above are not independent. This is the chain that connects them, ending in the intervention it implies.':
    'Les mesures ci-dessus ne sont pas indépendantes. Voici la chaîne qui les relie, jusqu’à l’intervention qu’elle implique.',
  'One decision. Many signals. One explanation.':
    'Une décision. De nombreux signaux. Une explication.',
  'Open evidence': 'Ouvrir les preuves',
  'Open Action Center': 'Ouvrir le centre d’action',
  'Reconstruct the decision': 'Reconstruire la décision',
  'Explore intelligence engines': 'Explorer les moteurs d’intelligence',

  /* --- Executive intelligence feed ------------------------------------------------- */
  'Executive intelligence feed': 'Fil d’intelligence pour la direction',
  '{n} events': '{n} événements',
  'Competitor surge': 'Poussée d’un concurrent',
  'Kestrel Industrial gained the first recommendation on two more supplier questions':
    'Kestrel Industrial a obtenu la première recommandation sur deux questions fournisseurs supplémentaires',
  'Kestrel now leads four of seven supplier-evaluation answers, up from two. Both new wins cite a trade publication added in June.':
    'Kestrel arrive désormais en tête de quatre réponses d’évaluation de fournisseurs sur sept, contre deux auparavant. Les deux nouveaux gains citent une publication professionnelle ajoutée en juin.',
  'Citation lost': 'Citation perdue',
  'Perplexity stopped citing the Northwind capability page':
    'Perplexity a cessé de citer la page de capacités de Northwind',
  'The page was cited on three questions in June and none in July. Perplexity now resolves the same questions to competitor sources.':
    'La page était citée sur trois questions en juin et sur aucune en juillet. Perplexity renvoie désormais ces mêmes questions vers des sources concurrentes.',
  '3 → 0 citations': '3 → 0 citations',
  '25 searches/mo': '25 recherches/mois',
  '+1 question': '+1 question',
  '+2 questions': '+2 questions',
  '+8% QoQ': '+8 % T/T',
  '+8% CPC': '+8 % de CPC',
  'per month': 'par mois',
  '$3,200 – $6,200 per month': '3 200 $ – 6 200 $ par mois',
  'per quarter': 'par trimestre',
  'per year': 'par an',
  'Narrative risk': 'Risque narratif',
  'Engines adopted a competitor’s evaluation criteria':
    'Les moteurs ont adopté les critères d’évaluation d’un concurrent',
  'Fill rate and catalogue breadth are now cited first when engines explain how to choose a distributor. Regional response time is not referenced.':
    'Le taux de service et l’étendue du catalogue sont désormais cités en premier lorsque les moteurs expliquent comment choisir un distributeur. Le délai de réaction régional n’est pas mentionné.',
  'Trust signal decayed': 'Signal de confiance dégradé',
  'Category description diverged across two trade directories':
    'La description de la catégorie a divergé dans deux annuaires professionnels',
  'Two directories now describe Northwind differently from its own site. Inconsistency is the mechanism behind entity confusion on ChatGPT and Copilot.':
    'Deux annuaires décrivent désormais Northwind différemment de son propre site. C’est cette incohérence qui produit la confusion d’entité sur ChatGPT et Copilot.',
  'Search cost spike': 'Envolée du coût de recherche',
  'Blended CPC moved further above break-even':
    'Le CPC mixte s’est encore éloigné au-dessus du seuil de rentabilité',
  '“industrial supply company” rose to $11.00 with no organic position in the top 100. Paid is covering a question authority does not reach.':
    '« société d’approvisionnement industriel » est montée à 11,00 $ sans aucune position organique dans les 100 premiers résultats. Le payant couvre une question que l’autorité n’atteint pas.',
  'New decision question': 'Nouvelle question de décision',
  'A new supplier-evaluation question entered the tracked set':
    'Une nouvelle question d’évaluation de fournisseurs est entrée dans le corpus suivi',
  '“Which MRO supplier has the best fill rate?” appeared with measurable volume. Northwind is absent from every engine answering it.':
    '« Quel fournisseur MRO a le meilleur taux de service ? » est apparue avec un volume mesurable. Northwind est absente de tous les moteurs qui y répondent.',
  'Recommendation gained': 'Recommandation gagnée',
  'Claude began recommending Northwind for regional distributor questions':
    'Claude a commencé à recommander Northwind sur les questions de distributeurs régionaux',
  'First recommendation on “Top rated industrial supply vendors near Chicago”. Regional specificity is the differentiator the answer cites.':
    'Première recommandation sur « Fournisseurs d’approvisionnement industriel les mieux notés près de Chicago ». C’est la spécificité régionale que la réponse retient comme facteur de différenciation.',
  'Regional opportunity': 'Opportunité régionale',
  'Midwest regional questions show weaker competitive density':
    'Les questions régionales du Midwest présentent une densité concurrentielle plus faible',
  'Questions naming a Midwest location carry lower competitor control than national equivalents — the cheapest available entry point.':
    'Les questions nommant un lieu du Midwest sont moins contrôlées par les concurrents que leurs équivalents nationaux — le point d’entrée le moins coûteux disponible.',
  'Competitive density rose 8% quarter over quarter':
    'La densité concurrentielle a augmenté de 8 % d’un trimestre à l’autre',

  /* ==========================================================================
     STRATEGIC ACTION CENTER
     ====================================================================== */
  'Strategic Action Center': 'Centre d’action stratégique',
  'Prioritised interventions with owner, deadline, expected movement and how impact is verified after execution.':
    'Interventions hiérarchisées, avec responsable, échéance, mouvement attendu et méthode de vérification de l’impact après exécution.',
  '{n}-day': '{n} jours',
  'Each intervention names an owner, a deadline, the signal it should move and how that movement will be verified.':
    'Chaque intervention désigne un responsable, une échéance, le signal qu’elle doit faire bouger et la manière dont ce mouvement sera vérifié.',
  Interventions: 'Interventions',
  Measured: 'Mesuré',
  'Verified after execution': 'Vérifié après exécution',
  View: 'Voir',
  'Priority queue': 'File des priorités',
  '30/60/90 roadmap': 'Feuille de route 30/60/90',
  'day horizon': 'jours d’horizon',
  'Ranked by urgency, then by effort — cheapest decisive move first':
    'Classé par urgence, puis par effort — le geste décisif le moins coûteux en premier',
  'Priority {n}': 'Priorité {n}',
  'Not yet measured — verified after execution.':
    'Pas encore mesuré — vérifié après exécution.',
  'View evidence': 'Voir les preuves',
  'How impact is verified': 'Comment l’impact est vérifié',
  'Completion is not impact. Each action is verified by re-observing the signal it targets, across the same engines and questions, after execution. Until that re-observation happens, measured change stays empty rather than assumed.':
    'Achever n’est pas produire un impact. Chaque action est vérifiée en réobservant le signal qu’elle vise, sur les mêmes moteurs et les mêmes questions, après exécution. Tant que cette réobservation n’a pas eu lieu, la variation mesurée reste vide plutôt que supposée.',
  'Back to Mission Control': 'Retour au centre de commandement',
  'Read the methodology': 'Lire la méthodologie',

  /* Page descriptions. These render into <meta name="description"> rather than
     into the page, so the render audit cannot see them — it reads visible
     prose and a short list of perceivable attributes. Four of them sat in
     English through every clean audit this site has passed. */
  'Decision Health, revenue exposure, competitive capture, narrative control and strategic timing in one decision position.':
    'État de la décision, exposition du chiffre d’affaires, captation concurrentielle, contrôle du récit et calendrier stratégique en une seule position de décision.',
  'Should we launch this campaign today? A pre-campaign assessment of the business rather than the campaign — AI, authority, trust, narrative, competitive position and destination readiness, weighted into one decision.':
    'Faut-il lancer cette campagne aujourd’hui ? Une évaluation, avant campagne, de l’entreprise plutôt que de la campagne : IA, autorité, confiance, récit, position concurrentielle et préparation de la destination, pondérés en une seule décision.',
  'What story is the market telling about us, and how is it influencing decisions? Active narratives, who owns each one, where they are heading, and what should change.':
    'Quelle histoire le marché raconte-t-il à notre sujet, et comment influence-t-elle les décisions ? Les récits actifs, qui possède chacun d’eux, où ils vont et ce qui doit changer.',
  'Enter a domain and select a commercial question. Reconstruct what each AI engine understood, who received the decision, why, and what must change.':
    'Saisissez un domaine et sélectionnez une question commerciale. Reconstruisez ce que chaque moteur d’IA a compris, qui a obtenu la décision, pourquoi, et ce qui doit changer.',

  /* ==========================================================================
     MARKETPLACE AND ENGINE DETAIL PAGES

     Nineteen routes that were never audited until the route list was
     enumerated properly. Composites the audit prints — "Entry · Snapshot",
     "12 modules", "Next: …" — are NOT keys; the component joins two halves.
     ====================================================================== */

  /* --- Product page chrome --------------------------------------------------------- */
  Breadcrumb: 'Fil d’Ariane',
  'Intelligence Marketplace': 'Place de marché de l’intelligence',
  'Intelligence Engines': 'Moteurs d’intelligence',
  'Product detail': 'Détail du produit',
  'Everything needed to decide, without a sales call':
    'Tout ce qu’il faut pour décider, sans rendez-vous commercial',
  'What you receive': 'Ce que vous recevez',
  'A real readout from this product, on seeded data':
    'Un relevé réel de ce produit, sur des données préchargées',
  'Every intelligence product returns the same twelve-section anatomy: executive truth, business meaning, evidence, connected signals, competitor context, commercial exposure, timing, trend, prescription, expected movement, owner and measurement.':
    'Chaque produit d’intelligence renvoie la même structure en douze sections : vérité pour la direction, signification commerciale, preuves, signaux connectés, contexte concurrentiel, exposition commerciale, calendrier, tendance, prescription, mouvement attendu, responsable et mesure.',
  'One-time purchase. Placeholder pricing.':
    'Achat unique. Tarification provisoire.',
  'Buy this intelligence product': 'Acheter ce produit d’intelligence',
  'Buy {name}': 'Acheter {name}',
  'Compare with a subscription': 'Comparer avec un abonnement',
  'See the full ecosystem': 'Voir l’écosystème complet',
  'by {date}': 'd’ici le {date}',

  /* --- The eleven product fields --------------------------------------------------- */
  'Business question': 'Question d’entreprise',
  'Decision consequence': 'Conséquence sur la décision',
  'What it detects': 'Ce qu’il détecte',
  'Required inputs': 'Éléments requis',
  Scope: 'Périmètre',
  'Intelligence depth': 'Profondeur d’intelligence',
  Delivery: 'Livraison',
  'Time to delivery': 'Délai de livraison',
  'Commercial terms': 'Conditions commerciales',
  'Upgrade path': 'Évolution possible',
  Depth: 'Profondeur',
  Date: 'Date',
  Finding: 'Constat',
  Engine: 'Moteur',
  Observed: 'Observé',
  Live: 'En service',
  You: 'Vous',

  /* Tier display labels. The component maps the lowercase discriminants
     (entry / advanced / premium) onto these before translating — see the
     TIER_LABEL note in marketplace/[slug]/page.tsx. */
  Entry: 'Essentiel',
  'Advanced tier': 'Avancé',
  Premium: 'Premium',
  /* Depth values. Already capitalised in the seed, so no collision. */
  Snapshot: 'Instantané',
  Advanced: 'Approfondi',
  Strategic: 'Stratégique',
  Executive: 'Direction',

  /* --- Category page --------------------------------------------------------------- */
  'All intelligence categories': 'Toutes les catégories d’intelligence',
  'Other intelligence categories': 'Autres catégories d’intelligence',
  'Every module answers one question.': 'Chaque module répond à une question.',
  'Each returns the evidence behind its answer, what that answer means commercially, and what should change as a result.':
    'Chacun renvoie les preuves qui fondent sa réponse, ce que cette réponse signifie commercialement et ce qui doit changer en conséquence.',
  'Buy this intelligence': 'Acheter cette intelligence',
  'Take one question, or take the whole category.':
    'Prenez une question, ou prenez la catégorie entière.',
  'Each purchase states what it examines, what it needs from you, how confident it can be and what it costs. No sales call is required to find any of that out.':
    'Chaque achat indique ce qu’il examine, ce dont il a besoin de votre part, le degré de confiance qu’il peut afficher et ce qu’il coûte. Aucun rendez-vous commercial n’est nécessaire pour le savoir.',
  'One engine produces this category.': 'Un moteur produit cette catégorie.',
  '{n} engines produce this category.': '{n} moteurs produisent cette catégorie.',
  'Engines are the machinery, not the offer. Nothing above required you to know one existed.':
    'Les moteurs sont la machinerie, pas l’offre. Rien de ce qui précède n’exigeait que vous sachiez qu’il en existait un.',
  '{n} modules': '{n} modules',
  '<b>{n}</b> intelligence modules in this category.':
    '<b>{n}</b> modules d’intelligence dans cette catégorie.',
  '<b>{n}</b> intelligence modules in this category · <b>{live}</b> running live in this environment.':
    '<b>{n}</b> modules d’intelligence dans cette catégorie · <b>{live}</b> en fonctionnement dans cet environnement.',
  Built: 'Construit',
  'In platform': 'Dans la plateforme',
  'In the platform': 'Dans la plateforme',

  /* --- Engine detail page ---------------------------------------------------------- */
  'Intelligence readout': 'Relevé d’intelligence',
  'What this engine concluded': 'Ce que ce moteur a conclu',
  'Signal, evidence, consequence, action': 'Signal, preuve, conséquence, action',
  'Screens this engine provides': 'Les écrans que fournit ce moteur',
  'Next: {name}': 'Suivant : {name}',

  /* --- Delivery, scope and inputs -------------------------------------------------- */
  'After scan completion — typically under 20 minutes':
    'À la fin de l’analyse — généralement moins de 20 minutes',
  'After scan completion — typically under 30 minutes':
    'À la fin de l’analyse — généralement moins de 30 minutes',
  'After scan completion — typically under 60 minutes':
    'À la fin de l’analyse — généralement moins de 60 minutes',
  'Expert-reviewed — within 3 business days':
    'Revu par un expert — sous 3 jours ouvrés',
  'Optional: Search Console': 'Facultatif : Search Console',
  'Optional: Search Console and Analytics':
    'Facultatif : Search Console et Google Analytics',
  'Up to 4 competitors': 'Jusqu’à 4 concurrents',
  'Google + 6 engines': 'Google + 6 moteurs',
  '6 AI engines · entity and category association · 1 market':
    '6 moteurs d’IA · association d’entité et de catégorie · 1 marché',
  '6 AI engines · 20 commercial questions · 4 competitors · 1 market':
    '6 moteurs d’IA · 20 questions commerciales · 4 concurrents · 1 marché',
  '6 AI engines · 24 decision questions · 4 competitors':
    '6 moteurs d’IA · 24 questions de décision · 4 concurrents',
  '6 AI engines · 24 decision questions · 5 decision stages':
    '6 moteurs d’IA · 24 questions de décision · 5 étapes de décision',
  '6 AI engines · 24 questions · 20 keywords · 4 competitors · full GEON assessment':
    '6 moteurs d’IA · 24 questions · 20 requêtes · 4 concurrents · évaluation GEON complète',
  '6 AI engines · 24 questions · 4 competitors · citation analysis':
    '6 moteurs d’IA · 24 questions · 4 concurrents · analyse des citations',
  '6 AI engines · 24 questions · 5 stages · 4 competitors':
    '6 moteurs d’IA · 24 questions · 5 étapes · 4 concurrents',
  'Public trust and reputation sources · 1 market':
    'Sources publiques de confiance et de réputation · 1 marché',
  'Continuous monitoring, additional markets, or the full platform with history and alerts.':
    'Surveillance continue, marchés supplémentaires, ou plateforme complète avec historique et alertes.',
  'Continuous monitoring, quarterly executive regeneration, or enterprise implementation.':
    'Surveillance continue, régénération trimestrielle pour la direction, ou déploiement en entreprise.',
  'Continuous prompt monitoring and visibility trends.':
    'Surveillance continue des requêtes et tendances de visibilité.',
  'Continuous competitor monitoring and momentum tracking.':
    'Surveillance continue des concurrents et suivi de la dynamique.',
  'Continuous monitoring with stage-level alerting.':
    'Surveillance continue avec alertes au niveau de l’étape.',
  'Competitive War Room with continuous monitoring.':
    'Cellule concurrentielle avec surveillance continue.',
  'Recognition history and decay monitoring.':
    'Historique de reconnaissance et surveillance de l’érosion.',
  'Reputation momentum and trust decay monitoring.':
    'Dynamique de réputation et surveillance de l’érosion de la confiance.',
  'Interactive workspace': 'Espace de travail interactif',
  'Downloadable intelligence brief': 'Note d’intelligence téléchargeable',
  'Expert interpretation': 'Interprétation d’expert',
  'Evidence pack': 'Dossier de preuves',
  'Action plan': 'Plan d’action',
  ' of 20': ' sur 20',
  ' of 24': ' sur 24',

  /* --- Product names. Descriptive rather than branded, so translated. -------------- */
  'AI Recognition Scan': 'Analyse de reconnaissance par l’IA',
  'AI Recognition Scan | GeoRepute': 'Analyse de reconnaissance par l’IA | GeoRepute',
  'AI Search Presence Scan': 'Analyse de présence dans la recherche IA',
  'AI Search Presence Scan | GeoRepute':
    'Analyse de présence dans la recherche IA | GeoRepute',
  'Google vs AI Gap Scan': 'Analyse de l’écart Google / IA',
  'Google vs AI Gap Scan | GeoRepute': 'Analyse de l’écart Google / IA | GeoRepute',
  'Competitor Recommendation Scan': 'Analyse des recommandations concurrentes',
  'Competitor Recommendation Scan | GeoRepute':
    'Analyse des recommandations concurrentes | GeoRepute',
  'Trust Signals Scan': 'Analyse des signaux de confiance',
  'Trust Signals Scan | GeoRepute': 'Analyse des signaux de confiance | GeoRepute',
  'Decision Journey Diagnostic': 'Diagnostic du parcours de décision',
  'Decision Journey Diagnostic | GeoRepute':
    'Diagnostic du parcours de décision | GeoRepute',
  'Competitive Position Assessment': 'Évaluation de la position concurrentielle',
  'Competitive Position Assessment | GeoRepute':
    'Évaluation de la position concurrentielle | GeoRepute',
  'Executive Intelligence Brief': 'Note d’intelligence pour la direction',
  'Executive Intelligence Brief | GeoRepute':
    'Note d’intelligence pour la direction | GeoRepute',
  'Decision Reconstruction — a completed reconstruction':
    'Reconstruction de la décision — une reconstruction achevée',
  'Mission Control → the composite Decision Health position panel':
    'Centre de commandement → le panneau de position composite « Santé de la décision »',
  'One commercial question, reconstructed from what each engine understood to what must change. Anonymised demonstration data.':
    'Une question commerciale, reconstruite depuis ce que chaque moteur a compris jusqu’à ce qui doit changer. Données de démonstration anonymisées.',
  'One decision position rather than ten measures. Anonymised demonstration data.':
    'Une position de décision plutôt que dix mesures. Données de démonstration anonymisées.',

  /* --- Module business questions ---------------------------------------------------
     The category page leads with the question, not the module name. */
  'Does AI understand what the business actually does?':
    'L’IA comprend-elle ce que fait réellement l’entreprise ?',
  'Do AI engines understand who the business is and what it offers?':
    'Les moteurs d’IA comprennent-ils qui est l’entreprise et ce qu’elle propose ?',
  'Which AI systems know the business exists, and which do not?':
    'Quels systèmes d’IA savent que l’entreprise existe, et lesquels l’ignorent ?',
  'Is AI confusing the business with someone else?':
    'L’IA confond-elle l’entreprise avec quelqu’un d’autre ?',
  'Is AI describing a version of the business that no longer exists?':
    'L’IA décrit-elle une version de l’entreprise qui n’existe plus ?',
  'Is the business becoming less recognised over time?':
    'L’entreprise est-elle de moins en moins reconnue avec le temps ?',
  'Is the business visible when customers ask for recommendations?':
    'L’entreprise est-elle visible quand les clients demandent des recommandations ?',
  'When a buyer describes a need, is the business in the set AI considers?':
    'Quand un acheteur décrit un besoin, l’entreprise fait-elle partie de l’ensemble que l’IA considère ?',
  'Across the questions buyers actually ask, how often does the business appear at all?':
    'Sur les questions que les acheteurs posent réellement, à quelle fréquence l’entreprise apparaît-elle, ne serait-ce qu’une fois ?',
  'Of all the recommendations made in this category, what share names the business?':
    'Sur toutes les recommandations faites dans cette catégorie, quelle part nomme l’entreprise ?',
  'On those same questions, does AI put the business forward at all?':
    'Sur ces mêmes questions, l’IA met-elle seulement l’entreprise en avant ?',
  'Do the two discovery surfaces tell the same story about us?':
    'Les deux surfaces de découverte racontent-elles la même histoire à notre sujet ?',
  'Is the business aligned across traditional search and AI discovery?':
    'L’entreprise est-elle alignée entre la recherche traditionnelle et la découverte par l’IA ?',
  'Which commercial questions are invisible on both surfaces at once?':
    'Quelles questions commerciales sont invisibles sur les deux surfaces à la fois ?',
  'Where does the business rank on the questions that carry commercial intent?':
    'Où l’entreprise se classe-t-elle sur les questions à intention commerciale ?',
  'Where does existing authority already rank but fail to reach AI?':
    'Où l’autorité existante se classe-t-elle déjà sans parvenir jusqu’à l’IA ?',
  'What kind of gap is this, and does it deserve investment?':
    'De quel type d’écart s’agit-il, et mérite-t-il un investissement ?',
  'What is the business actually paying per commercial click?':
    'Combien l’entreprise paie-t-elle réellement par clic commercial ?',
  'Above what price does a click stop making money?':
    'Au-dessus de quel prix un clic cesse-t-il d’être rentable ?',
  'How much of current demand would disappear if paid search stopped tomorrow?':
    'Quelle part de la demande actuelle disparaîtrait si la recherche payante s’arrêtait demain ?',
  'Which paid positions could be replaced by owned authority?':
    'Quelles positions payantes pourraient être remplacées par une autorité détenue en propre ?',
  'Is the cost of the same position rising, and how fast?':
    'Le coût de la même position augmente-t-il, et à quelle vitesse ?',
  'Who is being recommended instead of the business, and how often?':
    'Qui est recommandé à la place de l’entreprise, et à quelle fréquence ?',
  'Who is recommended instead, where and why?':
    'Qui est recommandé à la place, où et pourquoi ?',
  'Why do competitors capture the decision?':
    'Pourquoi les concurrents captent-ils la décision ?',
  'What specifically makes a competitor recommendable?':
    'Qu’est-ce qui rend précisément un concurrent recommandable ?',
  'How much more evidence supports them than supports us?':
    'De combien les preuves qui les soutiennent dépassent-elles celles qui nous soutiennent ?',
  'Which specific questions does each competitor own?':
    'Quelles questions précises chaque concurrent possède-t-il ?',
  'At which stage does each competitor take control?':
    'À quelle étape chaque concurrent prend-il le contrôle ?',
  'Where is the leading competitor actually weak?':
    'Où le concurrent dominant est-il réellement faible ?',
  'How easily could a competitor take the narrative from us?':
    'Avec quelle facilité un concurrent pourrait-il nous prendre le récit ?',
  'Do the sources that mention the business carry any weight?':
    'Les sources qui mentionnent l’entreprise ont-elles le moindre poids ?',
  'How much of what the business claims can anyone else confirm?':
    'Quelle part de ce que l’entreprise affirme quelqu’un d’autre peut-il confirmer ?',
  'When AI cites a source to justify an answer, is any of it yours?':
    'Quand l’IA cite une source pour justifier une réponse, y en a-t-il une qui soit la vôtre ?',
  'Which sources are shaping what AI believes about the business?':
    'Quelles sources façonnent ce que l’IA croit au sujet de l’entreprise ?',
  'Which trust signals strengthen or weaken recommendation readiness?':
    'Quels signaux de confiance renforcent ou affaiblissent l’aptitude à être recommandé ?',
  'Is the evidence supporting the business ageing?':
    'Les preuves qui soutiennent l’entreprise vieillissent-elles ?',
  'Where does the business disappear during the buyer decision process?':
    'Où l’entreprise disparaît-elle au cours du processus de décision de l’acheteur ?',
  'At which point in the buying journey does presence collapse?':
    'À quel point du parcours d’achat la présence s’effondre-t-elle ?',
  'Which specific buying questions complete without the business ever being named?':
    'Quelles questions d’achat précises se concluent sans que l’entreprise soit jamais nommée ?',
  'How many buying decisions are actually in play?':
    'Combien de décisions d’achat sont réellement en jeu ?',
  'What is one of those decisions worth to the business?':
    'Combien vaut l’une de ces décisions pour l’entreprise ?',
  'What is the gap worth, and how confident can we be?':
    'Combien vaut l’écart, et avec quelle confiance pouvons-nous l’affirmer ?',
  'What has to be true for this estimate to hold?':
    'Que faut-il pour que cette estimation tienne ?',
  'Which of those blind spots are also high value?':
    'Lesquels de ces angles morts sont aussi à forte valeur ?',
  'Which of our genuine advantages does the market never mention?':
    'Lesquels de nos avantages réels le marché ne mentionne-t-il jamais ?',
  'How much of the language used to describe this category belongs to the business?':
    'Quelle part du vocabulaire employé pour décrire cette catégorie appartient à l’entreprise ?',
  'Whose framing do machines use when they explain the category?':
    'De qui les machines empruntent-elles le cadrage lorsqu’elles expliquent la catégorie ?',
  'Which criteria do machines cite first when explaining a choice?':
    'Quels critères les machines citent-elles en premier pour expliquer un choix ?',
  'Does the market think the business is expensive?':
    'Le marché juge-t-il l’entreprise chère ?',
  'Is this market forming, forming fast, or already settled?':
    'Ce marché se forme-t-il, se forme-t-il vite, ou est-il déjà figé ?',
  'Do buyers know enough yet to be worth persuading?':
    'Les acheteurs en savent-ils déjà assez pour qu’il vaille la peine de les convaincre ?',
  'Which markets are ready to be entered now?':
    'Quels marchés sont prêts à être abordés dès maintenant ?',
  'How quickly is the position moving, and in which direction?':
    'À quelle vitesse la position évolue-t-elle, et dans quel sens ?',
  'Where in the world is the business strong, and where is it absent?':
    'Où dans le monde l’entreprise est-elle forte, et où est-elle absente ?',
  'Does the business mean the same thing in every market?':
    'L’entreprise signifie-t-elle la même chose sur chaque marché ?',
  'Does the business mean something different in each country?':
    'L’entreprise signifie-t-elle quelque chose de différent dans chaque pays ?',
  'Does the business tell the same story everywhere it appears?':
    'L’entreprise raconte-t-elle la même histoire partout où elle apparaît ?',
  'Do partners describe the business the way it describes itself?':
    'Les partenaires décrivent-ils l’entreprise comme elle se décrit elle-même ?',
  'How much of the market position rests on intermediaries?':
    'Quelle part de la position sur le marché repose sur des intermédiaires ?',
  'How easily could the business be swapped out of the channel?':
    'Avec quelle facilité l’entreprise pourrait-elle être remplacée dans le circuit ?',
  'Can the channel explain why the business costs more?':
    'Le circuit sait-il expliquer pourquoi l’entreprise coûte plus cher ?',
  'What is the complete management position on risk, opportunity, timing and action?':
    'Quelle est la position complète de la direction sur le risque, l’opportunité, le calendrier et l’action ?',
  'What should the business do, in what order?':
    'Que doit faire l’entreprise, et dans quel ordre ?',
  'Which intervention returns most, and what is currently blocked?':
    'Quelle intervention rapporte le plus, et qu’est-ce qui est actuellement bloqué ?',
  'What lands this month, this quarter, and this year?':
    'Qu’est-ce qui aboutit ce mois-ci, ce trimestre et cette année ?',
  'How long before an intervention shows up in the numbers?':
    'Combien de temps avant qu’une intervention apparaisse dans les chiffres ?',
  'Did the work move the signal it was supposed to move?':
    'Le travail a-t-il fait bouger le signal qu’il devait faire bouger ?',

  /* --- What each module detects, and why it matters commercially ------------------- */
  'An engine that cannot categorise a business cannot recommend it. Entity confusion sits upstream of every visibility metric — content investment cannot move an answer while the underlying record is wrong.':
    'Un moteur incapable de classer une entreprise ne peut pas la recommander. La confusion d’entité se situe en amont de toute métrique de visibilité : investir dans le contenu ne fera pas bouger une réponse tant que l’enregistrement sous-jacent est faux.',
  'Name collisions, merged records and mistaken identities — a single unresolved conflation can remove a business from every answer in its category.':
    'Homonymies, fiches fusionnées et identités erronées : une seule confusion non résolue peut écarter une entreprise de toutes les réponses de sa catégorie.',
  'Discontinued lines, closed locations, former ownership and superseded positioning still being repeated to buyers as current fact.':
    'Gammes arrêtées, sites fermés, ancien actionnariat et positionnement dépassé, toujours répétés aux acheteurs comme des faits actuels.',
  'Recognition erodes when competitors keep publishing and you stop. Decay is measurable for months before it shows up as absence.':
    'La reconnaissance s’érode quand les concurrents continuent de publier et que vous cessez. L’érosion est mesurable pendant des mois avant de se traduire par une absence.',
  'Entity understanding and recommendation presence are separate measures. An engine can resolve the business correctly and still never put it forward — recognition is necessary for a recommendation, not sufficient.':
    'La compréhension de l’entité et la présence en recommandation sont deux mesures distinctes. Un moteur peut identifier correctement l’entreprise sans jamais la mettre en avant : la reconnaissance est nécessaire à une recommandation, mais pas suffisante.',
  'Coverage measured against real buying questions rather than keywords — the difference between being findable and being present.':
    'Une couverture mesurée par rapport aux vraies questions d’achat plutôt qu’aux mots-clés : la différence entre pouvoir être trouvé et être présent.',
  'A market-share figure for a market nobody is currently measuring — recommendations issued, not clicks received.':
    'Un chiffre de part de marché pour un marché que personne ne mesure aujourd’hui : des recommandations émises, non des clics reçus.',
  'A business ranking in Google can still be absent from every AI answer that decides the vendor. The reverse is equally common. Each surface is a separate commercial asset, and channel asymmetry is invisible to both SEO and analytics tooling.':
    'Une entreprise bien classée dans Google peut malgré tout être absente de chaque réponse d’IA qui désigne le fournisseur. L’inverse est tout aussi courant. Chaque surface est un actif commercial distinct, et l’asymétrie entre canaux échappe autant aux outils SEO qu’à l’analytique.',
  'Businesses that dominate one surface and disappear on the other — a divergence that stays invisible while each channel is reported separately.':
    'Des entreprises qui dominent une surface et disparaissent sur l’autre — un écart qui reste invisible tant que chaque canal est suivi séparément.',
  'The most expensive class of gap — absent from both surfaces on a question that carries real volume and real intent.':
    'La catégorie d’écart la plus coûteuse : absent des deux surfaces sur une question qui porte un volume réel et une intention réelle.',
  'The cheapest wins available: questions where you have already done the work and only the machine-readable form of it is missing.':
    'Les gains les moins coûteux disponibles : des questions où le travail est déjà fait et où seule sa forme lisible par une machine manque.',
  'Cost per click weighted by the questions that decide purchases, rather than averaged across an account that includes cheap, irrelevant traffic.':
    'Un coût par clic pondéré par les questions qui décident des achats, plutôt que moyenné sur un compte incluant du trafic bon marché et hors sujet.',
  'A computed ceiling from deal value, margin and conversion — the number most advertising accounts are managed without ever calculating.':
    'Un plafond calculé à partir de la valeur d’affaire, de la marge et de la conversion — le chiffre que la plupart des comptes publicitaires ne calculent jamais.',
  'A costed switch list — which spend can be retired, what has to be published first, and how long the replacement takes to hold.':
    'Une liste de bascule chiffrée : quelles dépenses peuvent être arrêtées, ce qu’il faut publier d’abord, et combien de temps le remplacement met à tenir.',
  'Competitive density expressed as a price trend, so the structural cost of staying still becomes visible before the budget review.':
    'La densité concurrentielle exprimée comme une tendance de prix, afin que le coût structurel de l’immobilité devienne visible avant l’arbitrage budgétaire.',
  'Whether paid is buying growth or renting positions that authority would otherwise hold for free.':
    'Savoir si le payant achète de la croissance ou loue des positions que l’autorité tiendrait gratuitement.',
  'Knowing a competitor wins is not actionable. Knowing which evidence engines cite when they recommend that competitor is. This separates brand preference from an evidence gap you can close.':
    'Savoir qu’un concurrent gagne n’est pas actionnable. Savoir quelles preuves les moteurs citent lorsqu’ils le recommandent l’est. Cela sépare la préférence de marque d’un déficit de preuves que l’on peut combler.',
  'The individual assets a machine reaches for when it justifies choosing them — publications, comparisons, specifications, verified outcomes.':
    'Les éléments précis vers lesquels une machine se tourne pour justifier son choix : publications, comparatifs, spécifications, résultats vérifiés.',
  'Structured comparison of the evidence each competitor supplies to engines, and what it would take to match it. Converts a share gap into a specific, costed evidence programme.':
    'Comparaison structurée des preuves que chaque concurrent fournit aux moteurs, et de ce qu’il faudrait pour les égaler. Convertit un écart de part en un programme de preuves précis et chiffré.',
  'The questions a dominant rival does not answer, does not cover, or answers badly — the cheapest available places to take share.':
    'Les questions auxquelles un rival dominant ne répond pas, qu’il ne couvre pas ou traite mal — les endroits les moins coûteux pour prendre des parts.',
  'The share of visibility owned by partners rather than by the business, which is the share that leaves if the relationship ends.':
    'La part de visibilité détenue par les partenaires plutôt que par l’entreprise — celle qui s’en va si la relation prend fin.',
  'Visibility creates attention; trust creates selection. A business can be found and still be filtered out when an engine has to stand behind naming it first.':
    'La visibilité crée l’attention ; la confiance crée la sélection. Une entreprise peut être trouvée et pourtant écartée lorsqu’un moteur doit assumer de la nommer en premier.',
  'A countable ratio of independent sources, which turns an abstract brand gap into a publishing programme with a known scope and cost.':
    'Un rapport dénombrable de sources indépendantes, qui transforme un écart de marque abstrait en un programme éditorial au périmètre et au coût connus.',
  'Being mentioned and being cited are different commercial positions. Only one of them survives into the next answer the system gives.':
    'Être mentionné et être cité sont deux positions commerciales distinctes. Une seule des deux survit à la réponse suivante du système.',
  'The small set of pages that disproportionately determine every answer given — frequently including a directory nobody at the company knows exists.':
    'Le petit ensemble de pages qui détermine de façon disproportionnée chaque réponse donnée — incluant souvent un annuaire dont personne dans l’entreprise ne soupçonne l’existence.',
  'Proof has a shelf life. Case studies, coverage and reviews lose weight with age, and the decline is measurable before selection stops.':
    'La preuve a une durée de vie. Études de cas, couverture presse et avis perdent du poids avec l’âge, et le déclin est mesurable avant que la sélection ne cesse.',
  'Most businesses lose the decision at one specific stage, not evenly across the journey. Locating that stage tells you where intervention returns most, and where further investment returns nothing.':
    'La plupart des entreprises perdent la décision à une étape précise, et non uniformément sur le parcours. Localiser cette étape indique où l’intervention rapporte le plus, et où tout investissement supplémentaire ne rapporte rien.',
  'Losses concentrate at one stage rather than spreading evenly. Locating that stage tells you where intervention returns, and where it returns nothing.':
    'Les pertes se concentrent à une étape plutôt que de se répartir uniformément. Localiser cette étape indique où l’intervention rapporte, et où elle ne rapporte rien.',
  'The exact questions where a decision was made and the business was not in the room. These are not lost leads; no lead was ever created.':
    'Les questions exactes où une décision a été prise sans que l’entreprise soit dans la pièce. Ce ne sont pas des pistes perdues : aucune piste n’a jamais été créée.',
  'Questions where the decision happens entirely without you, and where no channel measurement can show it, because nothing ever reached a channel.':
    'Des questions où la décision se prend entièrement sans vous et qu’aucune mesure de canal ne peut révéler, parce que rien n’a jamais atteint un canal.',
  'Presence averaged across all questions hides the collapse that matters. What decides revenue is presence at the supplier-evaluation stage, and that figure is usually far lower than the headline.':
    'Une présence moyennée sur toutes les questions masque l’effondrement qui compte. Ce qui décide du chiffre d’affaires, c’est la présence à l’étape d’évaluation des fournisseurs, et ce chiffre est généralement bien inférieur à celui affiché.',
  'The size of the decision market itself, counted in decisions rather than in searches, sessions or impressions.':
    'La taille du marché des décisions lui-même, comptée en décisions plutôt qu’en recherches, sessions ou impressions.',
  'Value per decision by stage and question type, so a high-volume gap is not automatically ranked above a low-volume, high-value one.':
    'La valeur par décision selon l’étape et le type de question, afin qu’un écart à fort volume ne soit pas automatiquement classé au-dessus d’un écart à faible volume et forte valeur.',
  'A directional range with its confidence stated — never a single confident figure, and never described as confirmed lost revenue.':
    'Une fourchette indicative avec son niveau de confiance énoncé — jamais un chiffre unique et assuré, et jamais présentée comme un chiffre d’affaires perdu confirmé.',
  'Every assumption behind an exposure figure, stated and editable — because a number whose assumptions are hidden cannot be argued with or trusted.':
    'Chaque hypothèse derrière un chiffre d’exposition, énoncée et modifiable — car un nombre dont les hypothèses sont cachées ne peut être ni discuté ni cru.',
  'Real differentiators that never appear in any category description — strengths the market currently has no vocabulary to express.':
    'De vrais facteurs de différenciation qui n’apparaissent dans aucune description de la catégorie — des forces que le marché n’a pour l’instant pas de mots pour exprimer.',
  'Whether buyers are evaluating against criteria a competitor published, which quietly decides the outcome before anyone is compared.':
    'Savoir si les acheteurs évaluent selon des critères publiés par un concurrent, ce qui décide silencieusement de l’issue avant toute comparaison.',
  'Where the business sits on a price spectrum in the eyes of machines describing it — an assumption that shapes shortlists before any quote is sent.':
    'Où l’entreprise se situe sur l’échelle des prix aux yeux des machines qui la décrivent — une hypothèse qui façonne les listes restreintes avant tout devis.',
  'Demand maturity and competitive density per market, so expansion is sequenced by readiness rather than by proximity or preference.':
    'Maturité de la demande et densité concurrentielle par marché, afin que l’expansion soit ordonnée par degré de préparation plutôt que par proximité ou préférence.',
  'Rate of change rather than a snapshot, so a strong position that is deteriorating is not mistaken for a safe one.':
    'Le rythme du changement plutôt qu’un instantané, afin qu’une position forte mais qui se dégrade ne soit pas prise pour une position sûre.',
  'Position measured market by market, which routinely contradicts the single global figure a company believes it has.':
    'Une position mesurée marché par marché, ce qui contredit régulièrement le chiffre mondial unique qu’une entreprise croit détenir.',
  'How category, positioning and reputation change across borders, including markets where the business is understood as a different kind of company entirely.':
    'Comment la catégorie, le positionnement et la réputation changent d’un pays à l’autre, y compris sur les marchés où l’entreprise est comprise comme une tout autre sorte de société.',
  'Where positioning drifts by geography or language, so a business is a category leader in one market and an unknown in the next.':
    'Là où le positionnement dérive selon la géographie ou la langue, de sorte qu’une entreprise est leader de catégorie sur un marché et inconnue sur le suivant.',
  'Where a channel partner’s description of your product is what machines have learned — and where that description is wrong.':
    'Là où la description de votre produit par un partenaire de distribution est ce que les machines ont appris — et là où cette description est fausse.',
  'Whether the brand is specified by name or treated as an interchangeable supplier — usually the more expensive answer of the two.':
    'Savoir si la marque est prescrite nommément ou traitée comme un fournisseur interchangeable — généralement la plus coûteuse des deux réponses.',
  'Whether the reasons for a premium survive the trip through distribution, or arrive at the buyer as an unexplained higher number.':
    'Savoir si les raisons d’un prix supérieur survivent au passage par la distribution, ou parviennent à l’acheteur sous forme d’un chiffre plus élevé et inexpliqué.',
  'A board-ready position rather than a dashboard. States what is happening, what it means commercially, what the directional exposure is, how long the window stays open, and what must change — with owners and deadlines.':
    'Une position prête pour le conseil d’administration plutôt qu’un tableau de bord. Elle énonce ce qui se passe, ce que cela signifie commercialement, quelle est l’exposition indicative, combien de temps la fenêtre reste ouverte et ce qui doit changer — avec responsables et échéances.',
  'Ranked by exposure, confidence, urgency, effort and competitor pressure.':
    'Classé par exposition, confiance, urgence, effort et pression concurrentielle.',
  'The lag between doing the work and seeing the movement, which is what stops a working programme from being cancelled a month too early.':
    'Le décalage entre l’exécution du travail et l’apparition du mouvement — c’est lui qui évite qu’un programme qui fonctionne soit arrêté un mois trop tôt.',
  'Measured change against the predicted change, including the interventions that did not work — which is the only way the model earns trust.':
    'Le changement mesuré face au changement prédit, y compris les interventions qui n’ont pas fonctionné — seule manière pour le modèle de gagner la confiance.',
  'Corroborated claims reduce the risk an engine takes in naming a supplier first.':
    'Des affirmations corroborées réduisent le risque qu’un moteur prend en nommant un fournisseur en premier.',

  /* --- Readout labels and competitor findings -------------------------------------- */
  'Category description': 'Description de la catégorie',
  'Category resolved': 'Catégorie identifiée',
  'Confusion and conflation': 'Confusion et amalgame',
  'Recommendation presence': 'Présence en recommandation',
  'Recommendation share and momentum': 'Part de recommandations et dynamique',
  'Recommendation share by stage': 'Part de recommandations par étape',
  'Recommendation share across 24 decision questions':
    'Part de recommandations sur 24 questions de décision',
  'Mentions and citations': 'Mentions et citations',
  'Social proof quality': 'Qualité de la preuve sociale',
  'Source advantage analysis': 'Analyse de l’avantage en sources',
  'Authority driver comparison': 'Comparaison des leviers d’autorité',
  'Competitor vulnerability': 'Vulnérabilité du concurrent',
  'Competitor control per stage': 'Contrôle des concurrents par étape',
  'Competitive threat': 'Menace concurrentielle',
  'Default vendor threat': 'Menace du fournisseur par défaut',
  'Why the competitor wins': 'Pourquoi le concurrent l’emporte',
  'Why they win': 'Pourquoi ils l’emportent',
  'Winning questions': 'Questions gagnées',
  'Missed decision questions': 'Questions de décision manquées',
  'Gap classification per commercial question':
    'Classification de l’écart par question commerciale',
  'Question-to-stage mapping': 'Correspondance question / étape',
  'Stage-by-stage coverage': 'Couverture étape par étape',
  'The stage where presence collapses': 'L’étape où la présence s’effondre',
  'Strongest stage': 'Étape la plus forte',
  'Decision-journey position': 'Position dans le parcours de décision',
  'Revenue concentration by stage': 'Concentration du chiffre d’affaires par étape',
  'Revenue split by decision stage':
    'Répartition du chiffre d’affaires par étape de décision',
  'Directional revenue exposure': 'Exposition indicative du chiffre d’affaires',
  'Paid dependency exposure': 'Exposition à la dépendance au payant',
  'Strategic blind spots': 'Angles morts stratégiques',
  'Strategic timing window': 'Fenêtre stratégique',
  'Market and language': 'Marché et langue',
  'What it believes': 'Ce qu’il croit',
  'Not resolved': 'Non identifié',
  Resolved: 'Identifié',
  'Never recommends': 'Ne recommande jamais',
  Unattributed: 'Non attribué',
  'Independent authority evidence — the constraint holding every downstream signal.':
    'Preuves d’autorité indépendantes — la contrainte qui retient tous les signaux en aval.',
  'Classified as a hardware retailer, not an MRO distributor.':
    'Classée comme quincaillerie de détail, et non comme distributeur MRO.',
  'Conflated with a same-named logistics firm.':
    'Confondue avec une société de logistique homonyme.',
  'No stable entity record. Category answered without naming any Midwest distributor.':
    'Aucun enregistrement d’entité stable. La catégorie a été traitée sans nommer un seul distributeur du Midwest.',
  'No AI engine names Northwind in nineteen of the twenty-four tracked decision questions.':
    'Aucun moteur d’IA ne nomme Northwind dans dix-neuf des vingt-quatre questions de décision suivies.',
  'Named in seventeen of the nineteen questions where Northwind is absent.':
    'Nommé dans dix-sept des dix-neuf questions où Northwind est absente.',
  'Kestrel named first in four of seven questions.':
    'Kestrel citée en premier dans quatre questions sur sept.',
  'Receives the recommendation in 31% of decisions and controls the supplier-evaluation stage.':
    'Reçoit la recommandation dans 31 % des décisions et contrôle l’étape d’évaluation des fournisseurs.',
  'Leads on the two most heavily weighted vectors.':
    'En tête sur les deux vecteurs les plus fortement pondérés.',
  'Authority and Visibility are where its investment has concentrated.':
    'L’autorité et la visibilité sont là où son investissement s’est concentré.',
  'Independent validation lets engines recommend it without hedging.':
    'La validation indépendante permet aux moteurs de la recommander sans réserve.',
  'Advantage compounds in the absence of a response.':
    'L’avantage se cumule en l’absence de réponse.',
  'Holds position while no counter-intervention is running.':
    'Conserve sa position tant qu’aucune contre-intervention n’est engagée.',
  'Meridian publishes specification guidance that engines treat as category-defining language.':
    'Meridian publie des guides de spécifications que les moteurs traitent comme le vocabulaire qui définit la catégorie.',
  'Atlas is named on procurement checklists that engines cite at the point of purchase.':
    'Atlas figure sur des listes de contrôle achats que les moteurs citent au moment de l’achat.',
  'Two of six interventions are low effort with measurable movement inside 60 days.':
    'Deux interventions sur six demandent peu d’effort pour un mouvement mesurable en moins de 60 jours.',
  'Kestrel Industrial 31%. Meridian Supply Co 18%. Halvorsen Industrial 11%. Atlas Trade Group 7%. Northwind Supply 4.2%. Unattributed 28.8%':
    'Kestrel Industrial 31 %. Meridian Supply Co 18 %. Halvorsen Industrial 11 %. Atlas Trade Group 7 %. Northwind Supply 4,2 %. Non attribué 28,8 %',
  'Not in top 100 organic. No AI recommendation. 320 searches per month.':
    'Hors des 100 premiers résultats organiques. Aucune recommandation d’IA. 320 recherches par mois.',
  'Position 1 organic, AI present. Volume 40 per month.':
    'Position 1 en organique, présence dans l’IA. Volume de 40 par mois.',
  'Position 3 and recommended — the pattern that works.':
    'Position 3 et recommandé — le schéma qui fonctionne.',

  /* --- Tracked commercial keywords. Translated on the same reasoning as the
         home page's search queries — see the note beside those. ------------------- */
  'anchor bolts supplier': 'fournisseur de boulons d’ancrage',
  'fastener catalog request': 'demande de catalogue de fixations',
  'fastener sourcing best practices':
    'bonnes pratiques d’approvisionnement en fixations',
  'industrial distributor fill rate': 'taux de service distributeur industriel',
  'industrial supply account setup':
    'ouverture de compte fourniture industrielle',
  'industrial supply near me': 'fourniture industrielle près de chez moi',
  'maintenance repair operations supplier':
    'fournisseur maintenance réparation exploitation',
  'mro consolidation vendor': 'fournisseur pour consolidation MRO',
  'mro supply agreement': 'contrat d’approvisionnement MRO',
  'plant maintenance supplies': 'consommables de maintenance industrielle',
  'same day fastener shipping': 'expédition de fixations le jour même',
  'stainless steel fasteners supplier': 'fournisseur de fixations inox',
}
