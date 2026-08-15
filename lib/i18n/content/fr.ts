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
    'Intelligence du récit — maîtrise du récit et évolution',
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
    'Intelligence des décisions concurrentielles',
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
  'Narrative Intelligence': 'Intelligence du récit',
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
}
