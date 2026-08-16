import type { ContentOverlay } from './index'

/* ============================================================================
   Portuguese content overlay — the seeded demonstration prose.

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

   VARIANT. Written in European Portuguese, matching the `pt` locale in
   lib/i18n/config.ts. If the client wants pt-BR the split is a new locale
   entry rather than an edit to this file — the two differ in vocabulary
   ("ecrã"/"tela", "equipa"/"equipe") often enough that one file cannot
   serve both honestly.

   Anything absent falls through to English by construction.
   ========================================================================= */

export const content: ContentOverlay = {
  /* --- Organisation and market ---------------------------------------- */
  'Industrial MRO and fastener distribution':
    'Distribuição de consumíveis industriais e fixadores',
  'United States — Midwest': 'Estados Unidos — Midwest',

  /* ==========================================================================
     HOME PAGE — the prose written inline on the section components.

     Tokens in braces are substituted after lookup, so a translation may put
     {pct} wherever Portuguese needs it. <b>…</b> marks an emphasised run and
     is rendered as a styled span, never as markup — it can move too.
     ======================================================================= */

  /* --- The premise ------------------------------------------------------ */
  'The shift': 'A viragem',
  '{n} of {total}': '{n} de {total}',
  'By the time a visit, a click, a lead or a CRM record exists, the buyer has already decided which suppliers are worth contacting. That decision now happens inside AI systems, and it leaves no trace in any tool you currently own.':
    'Quando surge uma visita, um clique, um contacto ou um registo no CRM, o comprador já decidiu que fornecedores vale a pena contactar. Essa decisão acontece agora dentro dos sistemas de IA e não deixa rasto em nenhuma ferramenta que possua.',
  'commercial decisions complete without your business being named at all.':
    'decisões comerciais concluem-se sem que a sua empresa seja sequer mencionada.',
  'No lead was lost, because no lead was ever created. Conventional measurement recorded nothing.':
    'Nenhum contacto se perdeu, porque nunca foi criado nenhum. A medição convencional não registou nada.',
  'presence at the stage where the supplier is actually chosen.':
    'de presença na fase em que o fornecedor é efetivamente escolhido.',
  'That stage carries {volume} of the query volume and decides {revenue} of the revenue. Volume-ranked tooling calls it unimportant.':
    'Essa fase concentra {volume} do volume de pesquisas e decide {revenue} da receita. As ferramentas que ordenam por volume consideram-na irrelevante.',
  'more independent evidence supports the competitor engines recommend instead.':
    'mais provas independentes sustentam o concorrente que os motores recomendam em vez de si.',
  'Not a brand-preference gap. An evidence gap, and evidence can be commissioned.':
    'Não é uma lacuna de preferência de marca, mas de provas — e as provas podem ser encomendadas.',

  /* --- Q1 · Does AI know your business? --------------------------------- */
  'Entity understanding': 'Compreensão da entidade',
  'AI systems understand what your business is in {score} of 100 commercial evaluations. One engine holds no stable record of you at all.':
    'Os sistemas de IA compreendem o que é a sua empresa em {score} de cada 100 avaliações comerciais. Um dos motores não guarda qualquer registo estável sobre si.',
  'A system that cannot categorise a business cannot recommend it. This sits upstream of every other measure on this page.':
    'Um sistema que não consegue categorizar uma empresa não a pode recomendar. Isto antecede todas as outras medidas desta página.',
  'Content and advertising investment cannot move an answer while the underlying record is wrong. Spend on either is spend against a locked door.':
    'O investimento em conteúdo e publicidade não move uma resposta enquanto o registo subjacente estiver errado. Gastar em qualquer um deles é gastar contra uma porta fechada.',
  'Highest-risk engine': 'Motor de maior risco',
  '{engine} understands your business at {score} of 100 and names it in none of the tracked decisions.':
    'O {engine} compreende a sua empresa em {score} de 100 e não a menciona em nenhuma das decisões monitorizadas.',
  'Recognition is not uniform across AI systems, and buyers do not all use the same one. A single weak engine removes your business from every decision made through it.':
    'O reconhecimento não é uniforme entre sistemas de IA, e os compradores não usam todos o mesmo. Um único motor fraco retira a sua empresa de todas as decisões tomadas através dele.',
  'Every buyer who asks this engine receives a supplier shortlist your business is structurally absent from — and no measurement you own records that it happened.':
    'Todos os compradores que consultam este motor recebem uma lista restrita de fornecedores de que a sua empresa está estruturalmente ausente — e nenhuma medição sua regista que isso aconteceu.',
  'Decision presence': 'Presença na decisão',
  'Present in only {present} of supplier evaluations. Missing from {missing} of AI buying decisions.':
    'Presente em apenas {present} das avaliações de fornecedores. Ausente em {missing} das decisões de compra mediadas por IA.',
  'Supplier evaluation is the moment a buyer stops choosing a solution and starts choosing a vendor. It is the stage that assigns the order.':
    'A avaliação de fornecedores é o momento em que o comprador deixa de escolher uma solução e começa a escolher um fornecedor. É a fase que atribui a encomenda.',
  'Absence here is exclusion from the shortlist for the {revenue} of revenue that arrives through supplier evaluation.':
    'A ausência aqui significa exclusão da lista restrita para os {revenue} da receita que chegam através da avaliação de fornecedores.',
  'Recognition is cheap to fix and blocks everything else. It is the only intervention on this page that can be completed in under thirty days.':
    'O reconhecimento é barato de corrigir e bloqueia tudo o resto. É a única intervenção desta página que pode ser concluída em menos de trinta dias.',

  /* --- Q2 · Where are you losing decisions? ------------------------------ */
  'Losses are not spread evenly across the buying journey. They concentrate at one stage — and it is the stage conventional measurement is least able to see.':
    'As perdas não se distribuem uniformemente pelo percurso de compra. Concentram-se numa fase — precisamente aquela que a medição convencional pior consegue ver.',
  'Where presence collapses': 'Onde a presença colapsa',
  'Coverage falls to {pct} at supplier evaluation — the last stage before the order is assigned.':
    'A cobertura cai para {pct} na avaliação de fornecedores — a última fase antes de a encomenda ser atribuída.',
  'Earlier stages shape opinion. This stage selects the vendor. A business can lead the first three stages and still never be contacted.':
    'As fases anteriores moldam a opinião. Esta fase seleciona o fornecedor. Uma empresa pode liderar as três primeiras e mesmo assim nunca ser contactada.',
  'The competitor named here receives the enquiry. Your business is not compared and rejected — it is never compared at all.':
    'O concorrente mencionado aqui recebe o pedido. A sua empresa não é comparada e rejeitada — nunca chega a ser comparada.',
  'Blind-spot questions': 'Perguntas em ponto cego',
  '{n} commercial questions return no AI recommendation and no Google position in the top ten. The decision happens on neither surface.':
    '{n} perguntas comerciais não devolvem recomendação de IA nem posição nos dez primeiros resultados do Google. A decisão não acontece em nenhuma das superfícies.',
  'Google rank and AI recommendation are separate commercial assets. Strength in one does not carry into the other.':
    'A posição no Google e a recomendação da IA são ativos comerciais distintos. A força num não se transfere para o outro.',
  'These questions are currently reachable only by buying the click — which is why paid cost rises while organic position stays flat.':
    'Estas perguntas só são hoje alcançáveis comprando o clique — daí o custo pago subir enquanto a posição orgânica estagna.',
  'Supplier evaluation carries {volume} of the query volume and decides {revenue} of the revenue. Ranking work by volume puts it last.':
    'A avaliação de fornecedores concentra {volume} do volume de pesquisas e decide {revenue} da receita. Ordenar o trabalho por volume coloca-a em último lugar.',

  /* --- Q3 · Why is the competitor recommended? --------------------------- */
  '{competitor} can be verified through {theirs} independent sources. Your business can be verified through {ours}.':
    'A {competitor} pode ser verificada através de {theirs} fontes independentes. A sua empresa pode ser verificada através de {ours}.',
  'Share of recommendations is the symptom. The cause is what a system can cite when it has to justify naming one supplier ahead of another.':
    'A quota de recomendações é o sintoma. A causa é aquilo que um sistema pode citar quando tem de justificar por que nomeia um fornecedor antes de outro.',
  'Receives the decision': 'Recebe a decisão',
  'Your business': 'A sua empresa',
  'Authority advantage': 'Vantagem de autoridade',
  'Why the decision goes to them': 'Porque é que a decisão vai para eles',
  'The category median is <b>{n}</b> independent sources. This is not a brand-preference gap that marketing spend closes. It is an evidence gap, and evidence is something a business can commission.':
    'A mediana da categoria é de <b>{n}</b> fontes independentes. Não é uma lacuna de preferência de marca que o investimento em marketing resolva. É uma lacuna de provas, e as provas são algo que uma empresa pode encomendar.',
  'authority source': 'fonte de autoridade',
  'authority sources': 'fontes de autoridade',
  'Named in <b>{pct}</b> of AI buying decisions.':
    'Mencionada em <b>{pct}</b> das decisões de compra mediadas por IA.',
  'Closing {multiple}× is a publishing and validation programme with a known cost, not a brand campaign with an unknown one.':
    'Fechar uma lacuna de {multiple}× é um programa de publicação e validação com um custo conhecido, não uma campanha de marca com um custo desconhecido.',

  /* --- Q4 · What evidence is missing? ------------------------------------ */
  'How the gap becomes a lost decision':
    'Como a lacuna se transforma numa decisão perdida',
  'Every node below opens the evidence behind it, with its confidence and its limits.':
    'Cada nó abaixo abre as provas que o sustentam, com o seu nível de confiança e os seus limites.',
  'Systems do not recommend what they cannot corroborate. Self-description is treated as a claim; third-party reference is treated as evidence.':
    'Os sistemas não recomendam o que não conseguem corroborar. A autodescrição é tratada como uma alegação; a referência de terceiros é tratada como prova.',

  /* --- Q5 · How much time is left? --------------------------------------- */
  'The window is an observation about category formation, not a sales deadline. It is re-assessed every quarter and it can move in either direction.':
    'A janela é uma observação sobre a formação da categoria, não um prazo comercial. É reavaliada todos os trimestres e pode mover-se em qualquer direção.',
  'Authority established before the answer set stabilises':
    'Autoridade estabelecida antes de o conjunto de respostas estabilizar',

  /* --- Q6 · What should happen next? ------------------------------------- */
  'Six interventions, sequenced. Each names its owner, its deadline, the signal it must move and what has to land before it can move it.':
    'Seis intervenções, sequenciadas. Cada uma indica o seu responsável, o seu prazo, o sinal que tem de mover e o que precisa de estar concluído antes de o poder mover.',
  'Diagnosis without sequence produces activity rather than movement. Impact is verified by signal movement after execution — never by task completion.':
    'Um diagnóstico sem sequência produz atividade, não movimento. O impacto é verificado pelo deslocamento do sinal após a execução — nunca pela conclusão de uma tarefa.',
  'Ordered by commercial exposure, urgency, effort and competitive pressure.':
    'Ordenado por exposição comercial, urgência, esforço e pressão concorrencial.',
  'Open the full intervention plan': 'Abrir o plano de intervenção completo',
  Priority: 'Prioridade',
  'Expected impact': 'Impacto esperado',
  'Verified by: {metric}': 'Verificado por: {metric}',
  Owner: 'Responsável',
  Deadline: 'Prazo',
  Dependencies: 'Dependências',
  and: 'e',
  'Cannot move its signal until <b>{blockers}</b> lands.':
    'Não consegue mover o seu sinal enquanto <b>{blockers}</b> não estiver concluído.',
  'None. Can start immediately.': 'Nenhuma. Pode começar de imediato.',

  /* --- Q7 · The executive position --------------------------------------- */
  'Decision Health': 'Saúde da decisão',
  'The binding constraint': 'A restrição determinante',
  'Held down primarily by {vector}.': 'Travada sobretudo por {vector}.',
  '{vector} reads <b>{score} of 100</b> and carries the heaviest weight in the index at <b>{weight}%</b>. Lowest score, largest lever — every other measure is capped by it.':
    '{vector} regista <b>{score} de 100</b> e tem o peso mais elevado do índice, <b>{weight}%</b>. A pontuação mais baixa e a maior alavanca: todas as outras medidas ficam limitadas por ela.',
  '{vector} reads <b>{score}</b>. The offer matches demand. The constraint is entirely on the evidence side, which is the side a business can change.':
    '{vector} regista <b>{score}</b>. A oferta corresponde à procura. A restrição está inteiramente do lado das provas, que é o lado que uma empresa pode alterar.',
  'What Decision Health is made of': 'De que é feita a saúde da decisão',
  'Weighted, published, recomputed monthly':
    'Ponderado, publicado e recalculado mensalmente',
  'Binding constraint': 'Restrição determinante',
  'weight {pct}%': 'peso {pct}%',
  'Authority carries the heaviest weight in the index and the largest deficit. Every other vector is capped by it, so it is the only starting point that moves more than one measure.':
    'A autoridade tem o peso mais elevado do índice e o maior défice. Todos os outros vetores ficam limitados por ela, pelo que é o único ponto de partida que move mais do que uma medida.',
  'Open the full executive position': 'Abrir a posição executiva completa',

  /* --- Run it on your own business --------------------------------------- */
  'Enter a domain and one signal is released immediately. The rest of the position requires an account or a purchase — and the locked panels state exactly what sits behind them.':
    'Introduza um domínio e um sinal é libertado de imediato. O resto da posição exige uma conta ou uma compra — e os painéis bloqueados indicam exatamente o que contêm.',
  'Your domain': 'O seu domínio',
  'Run instant preview': 'Executar pré-visualização instantânea',
  'Re-run preview': 'Executar novamente a pré-visualização',
  'Seeded demonstration. This environment always reconstructs Northwind Supply, an industrial distributor, so every figure stays verifiable.':
    'Demonstração com dados iniciais. Este ambiente reconstrói sempre a Northwind Supply, um distribuidor industrial, para que cada número se mantenha verificável.',
  'AI recognition': 'Reconhecimento por IA',
  'Best Google position': 'Melhor posição no Google',
  'Not ranking': 'Sem posicionamento',
  'Narrative ownership': 'Domínio da narrativa',
  'Strongest competitor': 'Concorrente mais forte',
  '{score}/100 recognition': 'reconhecimento {score}/100',
  '{pct} of recommendations': '{pct} das recomendações',
  'Unlocked signal': 'Sinal desbloqueado',
  'Behind the gate': 'Atrás do acesso',
  '<b>{n}</b> further readouts, each with evidence, exposure and a prescribed action.':
    'Mais <b>{n}</b> análises, cada uma com as suas provas, a sua exposição e uma ação prescrita.',
  'Competitor capture, authority evidence, paid dependency, missed decisions, narrative control, trust readiness and strategic timing.':
    'Captura pela concorrência, provas de autoridade, dependência do pago, decisões perdidas, controlo da narrativa, preparação para a confiança e momento estratégico.',
  'Unlock full intelligence': 'Desbloquear a inteligência completa',
  'Buy a single answer': 'Comprar uma única resposta',
  'See a single answer': 'Ver uma única resposta',

  /* --- The ecosystem and the machinery ----------------------------------- */
  'The intelligence ecosystem': 'O ecossistema de inteligência',
  'Seven questions were asked above. {n} models stand behind them.':
    'Foram colocadas sete perguntas acima. Por trás delas estão {n} modelos.',
  'Every category holds the models that answer one kind of commercial question — including a great many that businesses have never been able to measure, because nothing existed to measure them with.':
    'Cada categoria reúne os modelos que respondem a um tipo de pergunta comercial — incluindo muitas que as empresas nunca conseguiram medir, porque não existia nada com que as medir.',
  'intelligence modules in total, each answering one business question with evidence, analysis and a recommendation.':
    'módulos de inteligência no total, cada um respondendo a uma pergunta de negócio com provas, análise e uma recomendação.',
  'Explore the intelligence ecosystem': 'Explorar o ecossistema de inteligência',
  Underneath: 'Por baixo',
  'Every answer on this page is produced by an intelligence engine.':
    'Todas as respostas desta página são produzidas por um motor de inteligência.',
  'Twelve engines run beneath the questions. They are named here for completeness — nobody buys an engine, and nothing above required you to know one existed.':
    'Doze motores funcionam por baixo destas perguntas. São nomeados aqui por rigor: ninguém compra um motor, e nada do que precede exigia saber que existia.',
  'Four engines are built in this environment. All twelve appear on the':
    'Quatro motores estão implementados neste ambiente. Os doze aparecem na',
  'engines overview': 'visão geral dos motores',

  /* --- The close ---------------------------------------------------------- */
  'Every day the window stays open, the same position costs less to take. Every day after it closes, it costs more.':
    'Cada dia em que a janela permanece aberta, tomar a mesma posição custa menos. Cada dia depois de fechar, custa mais.',
  'See how AI decides about you': 'Veja como a IA decide sobre si',
  'Every figure on this page is computed from {n} tracked commercial decisions across six AI engines.':
    'Cada número desta página é calculado a partir de {n} decisões comerciais monitorizadas em seis motores de IA.',
  'See the methodology': 'Consultar a metodologia',

  /* --- Hero · trust strip and the reconstruction ------------------------- */
  'Six AI engines observed': 'Seis motores de IA observados',
  '24 commercial decisions tracked': '24 decisões comerciais monitorizadas',
  'Evidence on every claim': 'Provas em todas as afirmações',
  'Confidence and limits stated': 'Confiança e limites declarados',
  'A buyer asks AI': 'Um comprador pergunta à IA',
  'AI looks for proof it can cite': 'A IA procura uma prova que possa citar',
  'Independent sources an engine can cite when it recommends a supplier. Your own website does not count — engines treat self-description as a claim, not as evidence.':
    'Fontes independentes que um motor pode citar quando recomenda um fornecedor. O seu próprio site não conta — os motores tratam a autodescrição como uma alegação, não como prova.',
  'So AI recommends': 'E por isso a IA recomenda',
  'Your business was named by <b>{named} of {total}</b> engines. Not because the offer is weaker — because <b>{theirs} sources outrank {ours}</b> when a system has to stand behind an answer.':
    'A sua empresa foi mencionada por <b>{named} de {total}</b> motores. Não porque a oferta seja mais fraca, mas porque <b>{theirs} fontes se sobrepõem a {ours}</b> quando um sistema tem de responder por uma resposta.',
  'What changes the answer': 'O que muda a resposta',
  '{n} sources': '{n} fontes',
  '{name}: {n} independent sources': '{name}: {n} fontes independentes',
  'A reconstruction of one AI buying decision: the question a buyer asked, the {theirs} independent sources supporting {winner} against {ours} supporting your business — a {advantage}× evidence advantage — the resulting recommendation, and the intervention that changes it.':
    'Reconstrução de uma decisão de compra mediada por IA: a pergunta feita por um comprador, as {theirs} fontes independentes que sustentam a {winner} contra as {ours} que sustentam a sua empresa — uma vantagem de provas de {advantage}× — a recomendação resultante e a intervenção que a altera.',

  /* --- The strategic window ---------------------------------------------- */
  '{position} market': 'Mercado {position}',
  '{n} months open': 'aberta há {n} meses',
  '<b>{n}</b> days of advantage remain': 'Restam <b>{n}</b> dias de vantagem',
  'After <b>{date}</b>, the same position still exists — it just has to be taken from an incumbent recommendation rather than claimed from open ground.':
    'Depois de <b>{date}</b>, a mesma posição continua a existir — só que terá de ser retirada a uma recomendação já instalada em vez de ocupada em terreno livre.',
  Today: 'Hoje',
  'Window opened': 'A janela abriu',
  'Advantage holds until': 'A vantagem mantém-se até',
  'Window closes': 'A janela fecha',
  'Category language began forming.':
    'A linguagem da categoria começou a formar-se.',
  'Authority built before this becomes the default answer.':
    'A autoridade construída antes desta data torna-se a resposta por omissão.',
  'Displacement cost rises materially.':
    'O custo de deslocação sobe de forma significativa.',
  'Why this estimate exists': 'Porque existe esta estimativa',
  'Market readiness reads <b>{n} of 100</b>. Buyers are educated. The answers they receive are not yet fixed.':
    'A maturidade do mercado regista <b>{n} de 100</b>. Os compradores estão informados. As respostas que recebem ainda não estão fixadas.',

  /* --- The decision journey ----------------------------------------------- */
  'Stage {n}': 'Fase {n}',
  '{volume}/mo · {share}': '{volume}/mês · {share}',
  '{pct} coverage': 'cobertura {pct}',
  'Analytics and CRM': 'Analítica e CRM',
  'Requires a visit, form or record to exist':
    'Exige que exista uma visita, um formulário ou um registo',
  'SEO platforms': 'Plataformas de SEO',
  'Requires a tracked query with search volume':
    'Exige uma pesquisa monitorizada com volume de procura',
  'Observes the decision itself, at every stage':
    'Observa a própria decisão, em todas as fases',
  Visible: 'Visível',
  Blind: 'Cego',
  'Executive conclusion': 'Conclusão executiva',
  'Conventional tooling begins observing at stage four — after the buyer has already decided what to buy and is choosing whom to buy it from.':
    'As ferramentas convencionais começam a observar na quarta fase — depois de o comprador já ter decidido o que comprar e estar a escolher a quem.',
  'The first three stages generate no visit, click, lead or CRM record. They are not measured badly; they are not measured at all.':
    'As três primeiras fases não geram visita, clique, contacto nem registo no CRM. Não são mal medidas: não são medidas de todo.',

  /* --- The Google vs AI gap matrix ---------------------------------------- */
  'Compound blind spots': 'Pontos cegos compostos',
  'Absent from both surfaces on high-value questions. The most expensive class of gap.':
    'Ausente em ambas as superfícies em perguntas de elevado valor. A classe de lacuna mais dispendiosa.',
  'Recoverable search': 'Pesquisa recuperável',
  'Ranking in Google but absent from AI answers. Existing authority is not reaching the AI surface.':
    'Posicionado no Google mas ausente das respostas de IA. A autoridade existente não chega à superfície da IA.',
  Aligned: 'Alinhado',
  'Visible in Google and recommended by AI. No action required.':
    'Visível no Google e recomendado pela IA. Não requer ação.',
  'of {total}': 'de {total}',
  'Commercial question': 'Pergunta comercial',
  Volume: 'Volume',
  'Google visibility': 'Visibilidade no Google',
  'AI recommendation': 'Recomendação da IA',
  Classification: 'Classificação',
  'Not in top 100': 'Fora dos 100 primeiros',
  'Position {n}': 'Posição {n}',
  Recommended: 'Recomendado',
  Absent: 'Ausente',
  'Showing {shown} of {total} tracked commercial questions.':
    'A mostrar {shown} de {total} perguntas comerciais monitorizadas.',

  /* --- The decision graph -------------------------------------------------- */
  Input: 'Entrada',
  Interpretation: 'Interpretação',
  Market: 'Mercado',
  Channel: 'Canal',
  Outcome: 'Resultado',
  Action: 'Ação',
  'Decision intelligence graph. Thirteen connected signals ending in a prescription.':
    'Grafo de inteligência de decisão. Treze sinais ligados que terminam numa prescrição.',
  '{label}: {value}. {kind}. {evidence} Activate to open the readout.':
    '{label}: {value}. {kind}. {evidence} Ative para abrir a análise.',
  'Hover or focus a node to isolate its relationships. Select any node to open the evidence behind it.':
    'Passe o cursor sobre um nó ou coloque-lhe o foco para isolar as suas relações. Selecione qualquer nó para abrir as provas que o sustentam.',
  'Read the graph as a table': 'Ler o grafo como tabela',
  Signal: 'Sinal',
  Value: 'Valor',
  'Leads to': 'Conduz a',
  Evidence: 'Provas',

  /* --- Product screen slots ------------------------------------------------- */
  'Awaiting real screen': 'A aguardar a captura real',
  'Anonymised or demonstration data only. No customer names, domains, personal data or confidential figures.':
    'Apenas dados anonimizados ou de demonstração. Sem nomes de clientes, domínios, dados pessoais ou números confidenciais.',
  'Executive Mission Control — full window, all measures visible':
    'Centro de comando executivo — janela completa, todas as medidas visíveis',
  'Executive Mission Control. Every measure opens the evidence behind it. Anonymised demonstration data.':
    'Centro de comando executivo. Cada medida abre as provas que a sustentam. Dados de demonstração anonimizados.',
  'Action Plan — the prioritised intervention list':
    'Plano de ação — a lista priorizada de intervenções',
  'Every action carries an owner, a deadline and the signal it must move. Anonymised demonstration data.':
    'Cada ação tem um responsável, um prazo e o sinal que deve mover. Dados de demonstração anonimizados.',

  /* --- Chrome outside the dictionary --------------------------------------- */
  'Switch to light theme': 'Mudar para o tema claro',
  'Switch to dark theme': 'Mudar para o tema escuro',
  'Powered by Gintex': 'Desenvolvido com Gintex',
  'GeoRepute — home': 'GeoRepute — início',
  Open: 'Abrir',

  /* --- Effort, urgency, trend and confidence chips ------------------------- */
  'low effort': 'esforço baixo',
  'medium effort': 'esforço médio',
  'high effort': 'esforço elevado',
  Immediate: 'Imediato',
  'This quarter': 'Este trimestre',
  Monitor: 'A monitorizar',
  Improving: 'A melhorar',
  Stable: 'Estável',
  Deteriorating: 'A piorar',
  High: 'Elevada',
  Medium: 'Média',
  Directional: 'Direcional',
  'Insufficient history': 'Histórico insuficiente',

  /* --- Score-meter accessible name ------------------------------------------ */
  '{score} out of {max}': '{score} em {max}',

  /* --- Image credit --------------------------------------------------------- */
  'NASA on Unsplash': 'NASA no Unsplash',

  /* --- The demonstration's buyer queries -------------------------------------
     Translated rather than left as literal English search strings. A reader is
     being shown what an AI buying decision looks like, and a buyer reading a
     Portuguese page types Portuguese. FLAGGED FOR THE CLIENT: if the demo is
     ever pointed at a real Portuguese-speaking market, these should be
     replaced with the phrases that market actually searches, not translations
     of the US ones — that is a content decision, not a translation one. */
  'Which industrial fastener suppliers are most reliable in the Midwest?':
    'Que fornecedores de fixadores industriais são os mais fiáveis no Midwest?',
  'industrial fastener supplier': 'fornecedor de fixadores industriais',
  'fastener distributor midwest': 'distribuidor de fixadores midwest',
  'vendor managed inventory mro': 'gestão de stock pelo fornecedor mro',
  'hydraulic fittings supplier': 'fornecedor de acessórios hidráulicos',
  'industrial supply company': 'empresa de material industrial',
  'bulk fasteners chicago': 'fixadores a granel chicago',
  'grade 8 bolts bulk': 'parafusos classe 8 a granel',
  'mro distributor': 'distribuidor de consumíveis de manutenção',

  /* ==========================================================================
     THE HOW-IT-WORKS PAGE.

     Almost all of it comes from the `loop` dictionary block. What lands here
     is the one inline label and the screenshot slots the four stages render —
     ProductScreen puts both `surface` and `caption` through t().
     ======================================================================= */

  'From the platform': 'A partir da plataforma',

  /* --- PLAN · the diagnosis surfaces --------------------------------------- */
  'Deep Diagnosis — the full scan result across connected signals':
    'Diagnóstico profundo — o resultado completo da análise nos sinais ligados',
  'Deep Diagnosis across AI engines, search, competitors, market and digital presence. Anonymised demonstration data.':
    'Diagnóstico profundo em motores de IA, pesquisa, concorrentes, mercado e presença digital. Dados de demonstração anonimizados.',
  'Competitive Intelligence — the comparison matrix':
    'Inteligência competitiva — a matriz de comparação',
  'Who receives the decision instead, and the evidence that puts them there. Anonymised demonstration data.':
    'Quem recebe a decisão em seu lugar e as provas que o colocam aí. Dados de demonstração anonimizados.',
  'AI Intelligence — per-engine recognition and recommendation':
    'Inteligência de IA — reconhecimento e recomendação por motor',
  'What each AI engine understands, and when it recommends. Anonymised demonstration data.':
    'O que cada motor de IA compreende e quando recomenda. Dados de demonstração anonimizados.',
  'Google vs AI Visibility — the gap matrix':
    'Visibilidade Google versus IA — a matriz de lacunas',
  'Two discovery surfaces, measured separately. Anonymised demonstration data.':
    'Duas superfícies de descoberta, medidas em separado. Dados de demonstração anonimizados.',
  'Market Intelligence — category and demand view':
    'Inteligência de mercado — vista de categoria e procura',
  'What is changing in the market, and which of it is addressable. Anonymised demonstration data.':
    'O que está a mudar no mercado e que parte disso é acionável. Dados de demonstração anonimizados.',
  'Narrative Intelligence — narrative ownership and movement':
    'Inteligência narrativa — domínio da narrativa e o seu movimento',
  'Which account of the category is circulating, and whose language it uses. Anonymised demonstration data.':
    'Que versão da categoria circula e na linguagem de quem está formulada. Dados de demonstração anonimizados.',
  'Trust & Authority — independent-source verification view':
    'Confiança e autoridade — vista de verificação por fontes independentes',
  'What a system can cite when it has to justify a recommendation. Anonymised demonstration data.':
    'O que um sistema pode citar quando tem de justificar uma recomendação. Dados de demonstração anonimizados.',

  /* --- DO · the execution surfaces ----------------------------------------- */
  'Strategy — objectives translated into targeted signals':
    'Estratégia — objetivos traduzidos em sinais direcionados',
  'Objectives in, prioritised strategy out. Each objective bound to a signal expected to move. Anonymised demonstration data.':
    'Entram objetivos, sai uma estratégia priorizada. Cada objetivo está ligado a um sinal que se espera mover. Dados de demonstração anonimizados.',
  'Content & media generation — output bound to identified gaps':
    'Produção de conteúdo e media — produção ligada às lacunas identificadas',
  'Each asset traced back to the gap it was created to close. Anonymised demonstration data.':
    'Cada peça é rastreada até à lacuna que foi criada para fechar. Dados de demonstração anonimizados.',
  'Execution calendar — sequenced distribution':
    'Calendário de execução — distribuição sequenciada',
  'Sequence and timing, derived from the strategy rather than from a posting cadence. Anonymised demonstration data.':
    'Sequência e calendário, derivados da estratégia e não de uma cadência de publicação. Dados de demonstração anonimizados.',
  'Distribution — connected digital assets and publishing state':
    'Distribuição — ativos digitais ligados e estado de publicação',
  'Where each asset was published, across connected properties. Anonymised demonstration data.':
    'Onde cada peça foi publicada, em todas as propriedades ligadas. Dados de demonstração anonimizados.',

  /* --- CHECK and ACT ------------------------------------------------------- */
  'Measurement — the before → action → after comparison table':
    'Medição — a tabela comparativa antes → ação → depois',
  'Not what was published. What changed. Anonymised demonstration data.':
    'Não o que foi publicado. O que mudou. Dados de demonstração anonimizados.',
  'Learning — measured outcome feeding the next recommendation':
    'Aprendizagem — resultado medido que alimenta a recomendação seguinte',
  'The previous recommendation, what it moved, and the corrected recommendation that follows. Anonymised demonstration data.':
    'A recomendação anterior, o que moveu, e a recomendação corrigida que daí resulta. Dados de demonstração anonimizados.',

  /* ==========================================================================
     THE METHODOLOGY PAGE.

     The evidence sources, model rules and limitations reach t() through a
     variable rather than a literal, so scripts/i18n-keys.mjs cannot see them.
     They are listed here by hand; the page audit is what catches a miss.
     ======================================================================= */

  /* --- Hero ---------------------------------------------------------------- */
  'The stronger the claim, the stronger the evidence path must be.':
    'Quanto mais forte a afirmação, mais sólido tem de ser o percurso das provas.',
  'Every conclusion in this system can be traced to a date, a source, an engine, a prompt or a connected dataset. This page states how, and where the boundaries are.':
    'Todas as conclusões deste sistema podem ser rastreadas até uma data, uma fonte, um motor, uma pesquisa ou um conjunto de dados ligado. Esta página explica como, e onde estão os limites.',
  'Methodology version {version} · observed {date}':
    'Metodologia versão {version} · observado a {date}',

  /* --- GEON ---------------------------------------------------------------- */
  'The GEON framework': 'O framework GEON',
  'Six vectors, one published weighting': 'Seis vetores, uma ponderação publicada',
  'The Decision Health Index is a weighted function of these six vectors — not a score assigned by judgement. The weighting is published below so the index can be recomputed independently.':
    'O índice de saúde da decisão é uma função ponderada destes seis vetores — não uma pontuação atribuída por juízo. A ponderação é publicada abaixo para que o índice possa ser recalculado de forma independente.',
  'Decision Health Index weighting': 'Ponderação do índice de saúde da decisão',
  'Yields <b>{score} of 100</b> for the seeded organisation. Authority carries the heaviest weight and the lowest score, which is why it is the binding constraint.':
    'Dá <b>{score} de 100</b> para a organização de demonstração. A autoridade tem o peso mais elevado e a pontuação mais baixa, razão pela qual é a restrição determinante.',
  'GEON assessment. {readings}. Lowest vector is {lowest}.':
    'Avaliação GEON. {readings}. O vetor mais baixo é {lowest}.',
  '{label} {score} of 100': '{label} {score} de 100',

  /* --- Evidence sources ---------------------------------------------------- */
  'Where the observations come from': 'De onde vêm as observações',
  'This environment observes <b>{questions}</b> decision questions across six AI engines, and <b>{keywords}</b> commercial keywords in Google.':
    'Este ambiente observa <b>{questions}</b> perguntas de decisão em seis motores de IA e <b>{keywords}</b> palavras-chave comerciais no Google.',
  'Public AI responses': 'Respostas públicas de IA',
  'Answers observed from six engines against a fixed question set, recorded with engine, date and full response.':
    'Respostas observadas em seis motores face a um conjunto fixo de perguntas, registadas com o motor, a data e a resposta integral.',
  'Third-party search and market data':
    'Dados de pesquisa e de mercado de terceiros',
  'Keyword volume, organic position, competition and cost per click.':
    'Volume de palavras-chave, posição orgânica, concorrência e custo por clique.',
  'Connected first-party analytics': 'Analítica própria ligada',
  'Search Console and Analytics, where the customer connects them. Improves confidence; never required.':
    'Search Console e Analytics, quando o cliente os liga. Aumentam a confiança; nunca são obrigatórios.',
  'Public competitor information': 'Informação pública sobre concorrentes',
  'Published positions, citations and the sources engines reach for when recommending a competitor.':
    'Posições publicadas, citações e fontes a que os motores recorrem quando recomendam um concorrente.',
  'Public content, reputation and trust signals':
    'Conteúdo público, reputação e sinais de confiança',
  'Independent validation, review corpora and cross-source consistency.':
    'Validação independente, corpora de avaliações e consistência entre fontes.',
  'Customer-configured business assumptions':
    'Pressupostos de negócio configurados pelo cliente',
  'Average deal value, conversion rates and revenue split by decision stage. Always labelled as customer-provided.':
    'Valor médio do negócio, taxas de conversão e repartição da receita por fase de decisão. Sempre assinalados como fornecidos pelo cliente.',
  'Historical GeoRepute scans and action outcomes':
    'Análises anteriores da GeoRepute e resultados das ações',
  'Prior observations and whether an executed action moved the signal it targeted.':
    'Observações anteriores e se uma ação executada moveu o sinal que visava.',

  /* --- Confidence ---------------------------------------------------------- */
  'Every conclusion carries its own confidence':
    'Cada conclusão tem a sua própria confiança',
  'Confidence is attached to the individual conclusion, not to the product. Two findings in the same readout can carry different confidence, and they frequently do.':
    'A confiança está associada à conclusão individual, não ao produto. Duas constatações da mesma análise podem ter níveis de confiança diferentes, e frequentemente têm.',

  /* --- Financial model ----------------------------------------------------- */
  'Financial model': 'Modelo financeiro',
  'Directional, ranged, and never described as confirmed':
    'Direcional, em intervalos, e nunca descrito como confirmado',
  'The model': 'O modelo',
  'All values are shown as ranges, never as point estimates.':
    'Todos os valores são apresentados como intervalos, nunca como estimativas pontuais.',
  'No value is described as confirmed lost revenue.':
    'Nenhum valor é descrito como receita perdida confirmada.',
  'Every model exposes its assumptions and data boundaries.':
    'Cada modelo expõe os seus pressupostos e os limites dos seus dados.',
  'Connected first-party conversion data improves confidence.':
    'Dados de conversão próprios ligados aumentam a confiança.',
  'Prediction is withheld when history is insufficient.':
    'A previsão é retida quando o histórico é insuficiente.',
  'Every exported brief carries methodology and limitation language.':
    'Todos os relatórios exportados incluem o texto de metodologia e limitações.',
  'Search economics, derived': 'Economia da pesquisa, derivada',
  'Blended CPC': 'CPC combinado',
  /* 'Break-even CPC' and 'Above break-even' already have entries in the seed
     section below. */
  'Break-even is average order value × gross margin × site conversion. Paid dependency is classified from the ratio of blended CPC to break-even — it is derived, never asserted.':
    'O ponto de equilíbrio é o valor médio da encomenda × margem bruta × conversão do site. A dependência do pago é classificada a partir da relação entre o CPC combinado e esse ponto: é derivada, nunca afirmada.',

  /* --- Limitations --------------------------------------------------------- */
  Limitations: 'Limitações',
  'What this system cannot tell you': 'O que este sistema não lhe consegue dizer',
  'AI engine answers vary between runs and between users. Observations are point-in-time samples, not guarantees of what any individual buyer sees.':
    'As respostas dos motores de IA variam entre execuções e entre utilizadores. As observações são amostras num dado momento, não garantias do que um comprador concreto vê.',
  'Commercial exposure is a directional model built on customer-configured assumptions. It is useful for prioritisation and is not an audited financial statement.':
    'A exposição comercial é um modelo direcional construído sobre pressupostos configurados pelo cliente. Serve para priorizar e não é uma demonstração financeira auditada.',
  'Attribution between an executed action and a signal movement is correlational. The system records both and reports the relationship; it does not claim causation.':
    'A atribuição entre uma ação executada e o movimento de um sinal é correlacional. O sistema regista ambos e reporta a relação; não reivindica causalidade.',
  'Competitor authority counts reflect sources engines cite publicly. A competitor may hold private advantages this system cannot observe.':
    'A contagem de fontes de autoridade dos concorrentes reflete o que os motores citam publicamente. Um concorrente pode deter vantagens privadas que este sistema não consegue observar.',
  'Where history is insufficient, predictive conclusions are withheld rather than estimated.':
    'Quando o histórico é insuficiente, as conclusões preditivas são retidas em vez de estimadas.',
  'This demonstration environment': 'Este ambiente de demonstração',
  'Northwind Supply is a fictional organisation. Its figures are seeded, internally consistent and derived from a single set of anchor facts — <b>{presence}</b> recommendation presence, <b>{coverage}</b> supplier-evaluation coverage, <b>{share}</b> competitor share. Every other number on this site is computed from those, and a test suite fails the build if any screen disagrees.':
    'A Northwind Supply é uma organização fictícia. Os seus números partem de dados iniciais, são internamente consistentes e derivam de um único conjunto de factos de referência — <b>{presence}</b> de presença em recomendações, <b>{coverage}</b> de cobertura na avaliação de fornecedores e <b>{share}</b> de quota do concorrente. Todos os outros números deste site são calculados a partir deles, e um conjunto de testes faz falhar a compilação se algum ecrã os contrariar.',
  'Open Mission Control': 'Abrir o centro de comando',
  'See the engines': 'Ver os motores',

  /* ==========================================================================
     THE SEED DATA — signal names, readout prose and marketplace copy.
     ======================================================================= */

  /* --- GEON vector definitions -------------------------------------------- */
  'Whether systems understand what the business does, who it serves and when to recommend it.':
    'Se os sistemas compreendem o que a empresa faz, quem serve e quando a recomendar.',
  'The strength of reputation, validation and proof surrounding the business.':
    'A solidez da reputação, da validação e das provas que rodeiam a empresa.',
  'How consistently the business appears across AI and digital environments.':
    'A consistência com que a empresa aparece em ambientes de IA e digitais.',
  'Whether the same accurate story appears across channels, markets and languages.':
    'Se a mesma narrativa rigorosa aparece em todos os canais, mercados e idiomas.',
  'How closely positioning matches customer demand and buying intent.':
    'Até que ponto o posicionamento corresponde à procura dos clientes e à intenção de compra.',
  'Whether the business is recognized as a credible expert or category leader.':
    'Se a empresa é reconhecida como especialista credível ou líder de categoria.',

  /* --- Engine business questions ------------------------------------------ */
  'Does AI know the business exists, and what does it think it is?':
    'A IA sabe que a empresa existe e o que pensa que ela é?',
  'Do the two discovery surfaces agree, and what is the gap costing?':
    'As duas superfícies de descoberta coincidem, e quanto custa a lacuna?',
  'Who receives the decision instead, and what do they have?':
    'Quem recebe a decisão em seu lugar, e o que tem?',
  'What must happen next, by whom and by when?':
    'O que tem de acontecer a seguir, por quem e até quando?',
  'Where do competitors receive the decision before the business receives the lead?':
    'Onde é que os concorrentes recebem a decisão antes de a empresa receber o contacto?',
  'Do AI engines understand who the business is and when it should be considered?':
    'Os motores de IA compreendem quem é a empresa e quando deve ser considerada?',
  'Does the business exist consistently across traditional search and AI-mediated discovery?':
    'A empresa existe de forma consistente na pesquisa tradicional e na descoberta mediada por IA?',
  'Whose language does the market use to describe your category?':
    'Com a linguagem de quem descreve o mercado a sua categoria?',
  'Is the market ready, and does the route to it hold?':
    'O mercado está preparado, e o caminho até ele aguenta?',

  /* --- Readout evidence and executive truths ------------------------------ */
  'Decision Health reads 41 of 100, held down primarily by Authority at 28.':
    'A saúde da decisão regista 41 de 100, travada sobretudo pela autoridade em 28.',
  'Authority carries the heaviest index weight and the largest deficit.':
    'A autoridade tem o peso mais elevado do índice e o maior défice.',
  'GEON Authority 28 — the lowest of six vectors.':
    'Autoridade GEON em 28 — o mais baixo dos seis vetores.',
  'Three independent sources reference Northwind; the competitor median is fourteen.':
    'Três fontes independentes referem a Northwind; a mediana dos concorrentes é catorze.',
  'No published supplier-comparison material for engines to cite.':
    'Não existe material publicado de comparação de fornecedores que os motores possam citar.',
  'Category description differs between the website and two trade directories.':
    'A descrição da categoria difere entre o site e dois diretórios setoriais.',
  'Three of six engines misidentify the category.':
    'Três de seis motores identificam mal a categoria.',
  'No stable entity record. Answers reference the category without naming Northwind at all.':
    'Não há registo estável da entidade. As respostas referem a categoria sem sequer nomear a Northwind.',
  'Kestrel Industrial leads five of seven supplier questions.':
    'A Kestrel Industrial lidera cinco das sete perguntas sobre fornecedores.',
  'Engines cite a competitor’s evaluation criteria first.':
    'Os motores citam primeiro os critérios de avaliação de um concorrente.',
  'Eleven tracked keywords sit outside the top ten.':
    'Onze palavras-chave monitorizadas ficam fora dos dez primeiros lugares.',
  'Blended CPC $9.03 against break-even $6.13.':
    'CPC combinado de 9,03 $ contra um ponto de equilíbrio de 6,13 $.',
  '6 recommendation events across 144 answer slots.':
    '6 ocorrências em recomendações em 144 espaços de resposta.',
  'Supplier-evaluation coverage — the stage deciding 60% of revenue.':
    'Cobertura na avaliação de fornecedores — a fase que decide 60% da receita.',
  'Supplier-evaluation phrasing still varied — the category has no fixed vocabulary yet.':
    'A formulação na avaliação de fornecedores ainda varia — a categoria ainda não tem vocabulário fixo.',
  '63 of 100 — buyers are educated, answers are not yet fixed.':
    '63 de 100 — os compradores estão informados, as respostas ainda não estão fixadas.',
  'Demand × decision gap × estimated conversion × average deal value.':
    'Procura × lacuna de decisão × conversão estimada × valor médio do negócio.',

  /* --- The action plan ----------------------------------------------------- */
  'Direct investment at Authority first — it carries the highest weight and the largest deficit.':
    'Direcione primeiro o investimento para a autoridade — tem o peso mais elevado e o maior défice.',
  'Build supplier-comparison content against the six highest-volume missed decision questions.':
    'Crie conteúdo de comparação de fornecedores para as seis perguntas de decisão perdidas com maior volume.',
  'Strengthen independent authority evidence and supplier-comparison coverage.':
    'Reforce as provas de autoridade independentes e a cobertura de comparação de fornecedores.',
  'Resolve the Gemini entity conflation with the same-named logistics firm.':
    'Resolva a confusão de entidades no Gemini com a empresa de logística homónima.',
  'Reallocate paid spend from keywords with a viable organic replacement path.':
    'Realoque o investimento pago das palavras-chave que tenham um caminho viável de substituição orgânica.',
  'Response time cited among the first three criteria by 3 of 6 engines':
    'Tempo de resposta citado entre os três primeiros critérios por 3 de 6 motores',
  'Gemini resolves the correct entity on 4 of 6 category questions':
    'O Gemini identifica a entidade correta em 4 de 6 perguntas de categoria',
  'Blended CPC below break-even on reallocated set':
    'CPC combinado abaixo do ponto de equilíbrio no conjunto realocado',
  'Category association correct on 5 of 6 engines':
    'Associação de categoria correta em 5 de 6 motores',
  'Gemini recognition 24 → 45': 'Reconhecimento no Gemini 24 → 45',

  /* --- Composite measures and the GEON vectors ---------------------------- */
  'Methodology GEON-2.4': 'Metodologia GEON-2.4',
  'Decision Health Index': 'Índice de saúde da decisão',
  'Decision Health Index at 41 of 100':
    'Índice de saúde da decisão em 41 de 100',
  Composite: 'Compósito',
  'Composite model': 'Modelo compósito',
  'Index weighting': 'Ponderação do índice',
  'GEON vectors': 'Vetores GEON',
  'GEON Authority': 'Autoridade GEON',
  'GEON Trust': 'Confiança GEON',
  '38 of 100 average': '38 de 100 em média',
  '44 of 100': '44 de 100',
  '28 of 100': '28 de 100',
  'The index is a weighted function of the six GEON vectors, not a score assigned by judgement. Market Fit at 72 confirms the offer matches demand; the constraint is entirely on the evidence side.':
    'O índice é uma função ponderada dos seis vetores GEON, não uma pontuação atribuída por juízo. O ajuste ao mercado em 72 confirma que a oferta corresponde à procura; a restrição está inteiramente do lado das provas.',
  'Recompute the index from re-observed GEON vectors monthly. The weighting is published and versioned.':
    'Recalcule o índice a partir dos vetores GEON reobservados todos os meses. A ponderação é publicada e versionada.',

  /* --- Recognition --------------------------------------------------------- */
  'Recognition by engine': 'Reconhecimento por motor',
  'AI Recognition Matrix': 'Matriz de reconhecimento por IA',
  'AI Recognition Intelligence': 'Inteligência de reconhecimento por IA',
  'AI Visibility Intelligence': 'Inteligência de visibilidade em IA',
  'AI Search Presence': 'Presença na pesquisa com IA',
  'Entity Understanding': 'Compreensão da entidade',
  'Entity category association': 'Associação da entidade a uma categoria',
  'Category association': 'Associação de categoria',
  'Entity disambiguation': 'Desambiguação da entidade',
  'Entity record': 'Registo da entidade',
  'Confusion detection': 'Deteção de confusão',
  'Confusion Detector': 'Detetor de confusão',
  'Outdated knowledge': 'Conhecimento desatualizado',
  'Average recognition score': 'Pontuação média de reconhecimento',
  'Average recognition score 38 → 55':
    'Pontuação média de reconhecimento 38 → 55',
  'Correctly categorised by all six engines.':
    'Corretamente categorizada pelos seis motores.',
  'All six engines': 'Os seis motores',
  'Incomplete on 3 engines': 'Incompleto em 3 motores',
  Inconsistent: 'Inconsistente',
  'Recognition decay': 'Degradação do reconhecimento',
  'AI understanding': 'Compreensão por parte da IA',
  'An engine that cannot categorise a business cannot recommend it. This is upstream of every visibility metric: no amount of content moves an answer if the entity record is wrong.':
    'Um motor que não consegue categorizar uma empresa não a pode recomendar. Isto antecede qualquer métrica de visibilidade: nenhuma quantidade de conteúdo move uma resposta se o registo da entidade estiver errado.',
  'Recognition is never uniform. A business can be well understood by one engine and structurally invisible to another that a different half of its buyers use.':
    'O reconhecimento nunca é uniforme. Uma empresa pode ser bem compreendida por um motor e estruturalmente invisível para outro, usado pela outra metade dos seus compradores.',
  'Whether AI systems hold an accurate, current and unambiguous record of the business, and whether that record survives into the answers buyers receive. Everything else on this page is downstream of it — no measure improves while the underlying record is wrong.':
    'Se os sistemas de IA mantêm um registo rigoroso, atual e inequívoco da empresa, e se esse registo sobrevive até às respostas que os compradores recebem. Todo o resto desta página decorre daí: nenhuma medida melhora enquanto o registo subjacente estiver errado.',
  'Whether the business is filed under the categories buyers actually ask about, or under one that is accurate but that nobody searches.':
    'Se a empresa está classificada nas categorias sobre as quais os compradores realmente perguntam, ou numa que é rigorosa mas que ninguém pesquisa.',
  'Contradictions across the public record — different categories, claims or descriptions between the site, directories and third-party profiles.':
    'Contradições no registo público — categorias, alegações ou descrições diferentes entre o site, os diretórios e os perfis de terceiros.',
  'The distance between what a company says it is and what machines have independently concluded it is — usually wider than any executive expects.':
    'A distância entre o que uma empresa diz ser e aquilo que as máquinas concluíram de forma independente que ela é — habitualmente maior do que qualquer gestor espera.',
  'Consistent category language across its own site, trade directories and three independent publications gives engines a single unambiguous record to resolve.':
    'Uma linguagem de categoria consistente no seu próprio site, nos diretórios setoriais e em três publicações independentes dá aos motores um único registo inequívoco a resolver.',
  'Three of six engines misclassify what Northwind sells. No content investment can move an answer while the entity record is wrong.':
    'Três de seis motores classificam mal o que a Northwind vende. Nenhum investimento em conteúdo pode mover uma resposta enquanto o registo da entidade estiver errado.',
  'Three of six AI engines misidentify what Northwind sells, and one does not recognise it as a distinct business at all.':
    'Três de seis motores de IA identificam mal o que a Northwind vende, e um não a reconhece sequer como uma empresa distinta.',
  'Gemini recognises Northwind at 24 of 100 and recommends it in zero questions. The cause is a disambiguation failure, not a content gap.':
    'O Gemini reconhece a Northwind em 24 de 100 e não a recomenda em nenhuma pergunta. A causa é uma falha de desambiguação, não uma lacuna de conteúdo.',
  'Publish a single canonical entity description and propagate identical category language to trade directories and structured data.':
    'Publique uma única descrição canónica da entidade e propague linguagem de categoria idêntica para os diretórios setoriais e os dados estruturados.',
  'Publish a canonical entity description and propagate identical category language to trade directories and structured data.':
    'Publique uma descrição canónica da entidade e propague linguagem de categoria idêntica para os diretórios setoriais e os dados estruturados.',
  'Re-observe entity understanding per engine. Success is category association correct on five of six engines.':
    'Reobserve a compreensão da entidade motor a motor. O sucesso é a associação de categoria correta em cinco de seis motores.',
  'Resolve category description inconsistency across all public sources, then pursue verifiable third-party validation.':
    'Resolva a inconsistência na descrição da categoria em todas as fontes públicas e procure depois validação verificável de terceiros.',

  /* --- Decision stage and recommendation ---------------------------------- */
  'Decision-stage control': 'Controlo na fase de decisão',
  'Decision stage': 'Fase de decisão',
  'Decision volume': 'Volume de decisões',
  'AI recommendation presence': 'Presença nas recomendações da IA',
  'Recommendation share': 'Quota de recomendações',
  'Recommendation analysis': 'Análise de recomendações',
  'Recommendation Map': 'Mapa de recomendações',
  'Competitor recommendation share': 'Quota de recomendações do concorrente',
  'Competitor share': 'Quota do concorrente',
  'Competitor capture': 'Captura pelo concorrente',
  'Questions with AI presence': 'Perguntas com presença em IA',
  'Questions with presence': 'Perguntas com presença',
  'Questions with presence 5 → 12 of 24':
    'Perguntas com presença 5 → 12 de 24',
  'Prompt coverage': 'Cobertura de pesquisas',
  'Missed prompts': 'Pesquisas perdidas',
  'Missed Prompts': 'Pesquisas perdidas',
  'Winning prompts': 'Pesquisas ganhas',
  'Query Inventory': 'Inventário de pesquisas',
  'Presence on 12 of 24 tracked questions':
    'Presença em 12 das 24 perguntas monitorizadas',
  'Supplier-evaluation first mention':
    'Primeira menção na avaliação de fornecedores',
  'Supplier-evaluation coverage': 'Cobertura na avaliação de fornecedores',
  'Supplier-evaluation coverage 7% → 19%':
    'Cobertura na avaliação de fornecedores 7% → 19%',
  '7% → 19% target': 'meta 7% → 19%',
  'Share of decisions rather than share of traffic — measured where the choice is actually made rather than where it is later recorded.':
    'Quota de decisões em vez de quota de tráfego — medida onde a escolha é efetivamente feita, não onde é registada depois.',
  'Position measured only on questions that decide a purchase, with the vanity terms that inflate most reporting deliberately excluded.':
    'Posição medida apenas nas perguntas que decidem uma compra, com os termos de vaidade que inflacionam a maioria dos relatórios deliberadamente excluídos.',
  'The named questions a rival wins every time, which is what converts a vague sense of losing into a finite list of things to go and fix.':
    'As perguntas concretas que um rival ganha sempre — é isso que transforma uma vaga sensação de perda numa lista finita de coisas a corrigir.',
  'These are not lost leads, because no lead was ever created. The decision completed inside the engine, and conventional analytics recorded nothing at all.':
    'Não são contactos perdidos, porque nunca foi criado nenhum. A decisão concluiu-se dentro do motor e a analítica convencional não registou nada.',
  'Nineteen of twenty-four decisions complete without the brand. These six carry the largest share of decision-stage demand.':
    'Dezanove de vinte e quatro decisões concluem-se sem a marca. Estas seis concentram a maior parte da procura na fase de decisão.',
  'Northwind appears in 7% of supplier-evaluation answers — the stage that decides 60% of revenue and that Kestrel controls in five of seven questions.':
    'A Northwind aparece em 7% das respostas de avaliação de fornecedores — a fase que decide 60% da receita e que a Kestrel controla em cinco de sete perguntas.',
  'The stage that decides 60% of revenue carries under 15% of query volume — so the weakness is invisible to volume-led tooling.':
    'A fase que decide 60% da receita concentra menos de 15% do volume de pesquisas — pelo que a fragilidade é invisível para ferramentas guiadas pelo volume.',
  'The stage where the vendor is chosen. Presence here decides whether the business reaches the shortlist at all.':
    'A fase em que o fornecedor é escolhido. A presença aqui decide se a empresa chega sequer à lista restrita.',
  'Buyers at supplier evaluation have already chosen a solution and are choosing a vendor. This stage carries under 15% of query volume, so volume-led tooling ranks it as unimportant — while it decides most of the revenue. Absence here is exclusion from the shortlist at the moment the order is assigned.':
    'Na avaliação de fornecedores, os compradores já escolheram uma solução e estão a escolher um fornecedor. Esta fase concentra menos de 15% do volume de pesquisas, pelo que as ferramentas guiadas pelo volume a consideram irrelevante — enquanto decide a maior parte da receita. A ausência aqui significa exclusão da lista restrita no momento em que a encomenda é atribuída.',
  'Prioritise the six highest-volume missed questions and publish material that answers each one directly and citably.':
    'Priorize as seis perguntas perdidas com maior volume e publique material que responda a cada uma de forma direta e citável.',
  'Re-run all 24 questions monthly across all six engines; record presence per engine per question.':
    'Volte a executar as 24 perguntas mensalmente nos seis motores; registe a presença por motor e por pergunta.',
  'Re-run the supplier-evaluation prompt set monthly. Coverage is verified by recommendation slots won across all six engines, not by traffic.':
    'Volte a executar mensalmente o conjunto de pesquisas de avaliação de fornecedores. A cobertura é verificada pelos espaços de recomendação ganhos nos seis motores, não pelo tráfego.',
  'Recommendation share re-measured across the same 24 questions monthly, with engine and date recorded per observation.':
    'Quota de recomendações remedida mensalmente nas mesmas 24 perguntas, com motor e data registados em cada observação.',

  /* --- Authority and sources ----------------------------------------------- */
  'Independent authority evidence': 'Provas de autoridade independentes',
  'Independent authority evidence is weak':
    'As provas de autoridade independentes são fracas',
  'Independent authority sources cited':
    'Fontes de autoridade independentes citadas',
  'Independent sources': 'Fontes independentes',
  'Independent source count': 'Número de fontes independentes',
  'Independent source count 3 → 12': 'Número de fontes independentes 3 → 12',
  'Independent validation': 'Validação independente',
  '3 independent sources': '3 fontes independentes',
  '3 sources against a category median of 14.':
    '3 fontes contra uma mediana de categoria de 14.',
  'Category median is 14. Kestrel holds 21.':
    'A mediana da categoria é 14. A Kestrel tem 21.',
  'Kestrel 21 sources, Northwind 3.': 'Kestrel 21 fontes, Northwind 3.',
  'Weak — 3 sources': 'Fraco — 3 fontes',
  'Authority evidence': 'Provas de autoridade',
  'Authority Signals': 'Sinais de autoridade',
  'Authority drivers': 'Motores da autoridade',
  'Authority first': 'A autoridade primeiro',
  'Authority Gap': 'Lacuna de autoridade',
  Authority: 'Autoridade',
  'Source authority': 'Autoridade da fonte',
  'Source advantage': 'Vantagem em fontes',
  'Source influence': 'Influência da fonte',
  'Source Influence Map': 'Mapa de influência das fontes',
  Citations: 'Citações',
  'Citation analysis': 'Análise de citações',
  'Engine citation analysis': 'Análise de citações por motor',
  'Cross-source comparison': 'Comparação entre fontes',
  'Trade publication coverage': 'Cobertura na imprensa setorial',
  'Public review platforms': 'Plataformas públicas de avaliações',
  'Review corpus': 'Corpus de avaliações',
  'Public web': 'Web pública',
  'Mentions weighted by the credibility of the source, so fifty low-authority listings stop reading as a stronger position than three real ones.':
    'Menções ponderadas pela credibilidade da fonte, para que cinquenta registos de baixa autoridade deixem de parecer uma posição mais forte do que três reais.',
  'Which claims stand on third-party evidence and which stand only on the company’s own website — machines weight the two very differently.':
    'Que alegações assentam em provas de terceiros e quais assentam apenas no site da própria empresa — as máquinas ponderam as duas de forma muito diferente.',
  'Engines do not recommend what they cannot corroborate. Authority is the lowest GEON vector at 28 of 100, and it is the constraint that holds every other signal down.':
    'Os motores não recomendam o que não conseguem corroborar. A autoridade é o vetor GEON mais baixo, com 28 de 100, e é a restrição que trava todos os outros sinais.',
  'Authority is the lowest GEON vector at 28 and carries the heaviest index weight. It is the constraint holding recognition, recommendation share and coverage down.':
    'A autoridade é o vetor GEON mais baixo, com 28, e tem o peso mais elevado do índice. É a restrição que trava o reconhecimento, a quota de recomendações e a cobertura.',
  'Engines cannot corroborate a recommendation from three sources when the category median is fourteen.':
    'Os motores não conseguem corroborar uma recomendação a partir de três fontes quando a mediana da categoria é catorze.',
  'Publish an independent, verifiable supplier-comparison resource and secure third-party validation in at least two trade publications.':
    'Publique um recurso de comparação de fornecedores independente e verificável e obtenha validação de terceiros em pelo menos duas publicações setoriais.',
  'Secure independent validation: trade-publication contribution, verifiable customer outcomes and third-party specification references.':
    'Obtenha validação independente: colaboração na imprensa setorial, resultados de clientes verificáveis e referências de especificações de terceiros.',
  'Independent source count re-observed monthly, with each new source recorded by publication and date.':
    'Número de fontes independentes reobservado mensalmente, com cada nova fonte registada por publicação e data.',
  'Build supplier-comparison content against the eleven compound and strategic blind-spot questions, structured so it is both rankable and citable.':
    'Crie conteúdo de comparação de fornecedores para as onze perguntas em ponto cego composto e estratégico, estruturado para ser simultaneamente posicionável e citável.',

  /* --- Trust ---------------------------------------------------------------- */
  Trust: 'Confiança',
  'Trust decay': 'Degradação da confiança',
  'Trust readiness': 'Preparação para a confiança',
  'Trust Intelligence': 'Inteligência de confiança',
  'Trust and Authority Diagnostics': 'Diagnóstico de confiança e autoridade',
  'Reputation consistency': 'Consistência da reputação',
  'Reputation Momentum': 'Dinâmica da reputação',
  Consistency: 'Consistência',
  'Is the business safe to recommend?': 'É seguro recomendar esta empresa?',
  'Buyer Confidence': 'Confiança do comprador',
  'Visibility creates attention; trust creates selection. A business can be perfectly visible and still be filtered out at the moment a system has to stand behind naming it first, and the reasons for that are specific and fixable.':
    'A visibilidade cria atenção; a confiança cria seleção. Uma empresa pode estar perfeitamente visível e ainda assim ser excluída no momento em que um sistema tem de responder por a ter nomeado primeiro — e as razões são concretas e corrigíveis.',
  'Visibility creates attention; trust creates selection. A business can be found and still be filtered out at the moment an engine has to stand behind a recommendation.':
    'A visibilidade cria atenção; a confiança cria seleção. Uma empresa pode ser encontrada e ainda assim ser excluída no momento em que um motor tem de responder por uma recomendação.',
  'Trust reads 44 of 100 while Market Fit reads 72 — the offer matches demand, but the proof does not support a recommendation.':
    'A confiança regista 44 de 100 enquanto o ajuste ao mercado regista 72 — a oferta corresponde à procura, mas as provas não sustentam uma recomendação.',

  /* --- Competitive ---------------------------------------------------------- */
  'Competitive Intelligence': 'Inteligência competitiva',
  'Competitor Decision Intelligence': 'Inteligência de decisão da concorrência',
  'Executive Intelligence': 'Inteligência executiva',
  'Competitive density': 'Densidade concorrencial',
  Replaceability: 'Substituibilidade',
  'Replaceability Index': 'Índice de substituibilidade',
  'Distributor alignment': 'Alinhamento dos distribuidores',
  'Distributor Map': 'Mapa de distribuidores',
  'Northwind differentiators': 'Fatores de diferenciação da Northwind',
  'Evaluation criteria cited': 'Critérios de avaliação citados',
  'Strength Drivers': 'Motores da força',
  Vulnerability: 'Vulnerabilidade',
  Fragility: 'Fragilidade',
  Dependency: 'Dependência',
  'Dependency Risk': 'Risco de dependência',
  'Northwind listed fourth of five suppliers.':
    'A Northwind surge em quarto lugar entre cinco fornecedores.',
  'Absent. Meridian named first.': 'Ausente. A Meridian é nomeada primeiro.',
  'Absent. 35 searches per month.': 'Ausente. 35 pesquisas por mês.',
  'Not who ranks above you — who gets recommended when a buyer asks a machine whom to choose. The useful output is never the share figure; it is the specific evidence a competitor supplies that you do not, because that is the part you can go and close.':
    'Não quem se posiciona acima de si, mas quem é recomendado quando um comprador pergunta a uma máquina quem escolher. O resultado útil nunca é o número da quota: é a prova concreta que um concorrente fornece e que você não fornece, porque é essa a parte que pode ir fechar.',
  'Some rivals win early by shaping the criteria; others win late at vendor selection. The counter-move is completely different for each.':
    'Alguns rivais ganham cedo, moldando os critérios; outros ganham tarde, na seleção do fornecedor. A resposta é completamente diferente em cada caso.',
  'Where a position rests on a single source or a single page, and would not survive one competitor publishing a better one.':
    'Onde uma posição assenta numa única fonte ou numa única página, e não sobreviveria a um concorrente publicar algo melhor.',
  'Kestrel is cited by three independent trade publications and maintains a public supplier-comparison library. Engines reach for that evidence when a buyer asks whom to choose.':
    'A Kestrel é citada por três publicações setoriais independentes e mantém uma biblioteca pública de comparação de fornecedores. Os motores recorrem a essas provas quando um comprador pergunta quem escolher.',
  'Kestrel receives 31% of all AI recommendations across the tracked decision set; Northwind receives 4.2%.':
    'A Kestrel recebe 31% de todas as recomendações de IA no conjunto de decisões monitorizado; a Northwind recebe 4,2%.',
  'Receives 31% of all recommendations and is named first in four of seven supplier-evaluation answers.':
    'Recebe 31% de todas as recomendações e é nomeada em primeiro lugar em quatro das sete respostas de avaliação de fornecedores.',
  'This gap is not brand preference. It is an evidence gap: Kestrel supplies engines with material they can cite, and Northwind does not. The lead never reaches the CRM because the decision resolved before contact.':
    'Esta lacuna não é de preferência de marca, mas de provas: a Kestrel fornece aos motores material que podem citar, e a Northwind não. O contacto nunca chega ao CRM porque a decisão se resolveu antes.',
  'Sustained trade-publication presence means engines can support a Kestrel recommendation with evidence that is not Kestrel’s own.':
    'Uma presença sustentada na imprensa setorial permite aos motores fundamentar uma recomendação da Kestrel com provas que não são da própria Kestrel.',
  'Its supplier-comparison library ranks organically and is the source engines cite, so one asset serves both surfaces.':
    'A sua biblioteca de comparação de fornecedores posiciona-se organicamente e é a fonte que os motores citam, pelo que um único ativo serve as duas superfícies.',
  'Kestrel has published material addressing each question directly; engines reach for what exists.':
    'A Kestrel publicou material que responde diretamente a cada pergunta; os motores recorrem ao que existe.',
  'Holds top-three organic positions and AI presence on the four highest-volume commercial questions.':
    'Ocupa posições orgânicas entre as três primeiras e tem presença em IA nas quatro perguntas comerciais de maior volume.',
  'Publishing evaluation criteria before competitors did made that framing the one engines learned.':
    'Ter publicado os critérios de avaliação antes dos concorrentes fez desse enquadramento aquele que os motores aprenderam.',
  'Halvorsen owns early-stage research questions, entering the decision before evaluation begins.':
    'A Halvorsen domina as perguntas de pesquisa em fase inicial, entrando na decisão antes de a avaliação começar.',
  'Owned authority removes the need to bid, so Kestrel’s cost per decision falls as Northwind’s rises.':
    'A autoridade própria elimina a necessidade de licitar, pelo que o custo por decisão da Kestrel desce enquanto o da Northwind sobe.',
  'The evaluation criteria the market has settled on, and which competitor published them first.':
    'Os critérios de avaliação que o mercado adotou, e qual o concorrente que os publicou primeiro.',
  'Publish an evaluation framework that makes regional response time a first-class selection criterion.':
    'Publique um referencial de avaliação que torne o tempo de resposta regional um critério de seleção de primeira ordem.',
  'Publish a defensible evaluation framework that makes regional response time a first-class selection criterion.':
    'Publique um referencial de avaliação defensável que torne o tempo de resposta regional um critério de seleção de primeira ordem.',

  /* --- Google vs AI --------------------------------------------------------- */
  'Google vs AI Visibility Intelligence':
    'Inteligência de visibilidade: Google versus IA',
  'Google position': 'Posição no Google',
  'Channel asymmetry': 'Assimetria de canais',
  'Gap Matrix': 'Matriz de lacunas',
  'Gap classification': 'Classificação da lacuna',
  'Strategic blind spot': 'Ponto cego estratégico',
  'Compound blind spot': 'Ponto cego composto',
  'Compound Blind Spot': 'Ponto cego composto',
  'Blind-spot keywords': 'Palavras-chave em ponto cego',
  'Traditional search and AI-mediated discovery are separate commercial assets that fail independently. This category measures each, classifies every gap between them, and prices what closing the gap is currently costing in paid media.':
    'A pesquisa tradicional e a descoberta mediada por IA são ativos comerciais distintos que falham de forma independente. Esta categoria mede cada um, classifica todas as lacunas entre eles e quantifica o que fechar essa lacuna está a custar atualmente em meios pagos.',
  'Google rank and AI recommendation are separate commercial assets. Northwind ranks first for account setup — a question asked only after the vendor has already been chosen — and is absent from every question that decides who that vendor is.':
    'A posição no Google e a recomendação da IA são ativos comerciais distintos. A Northwind ocupa o primeiro lugar para a abertura de conta — uma pergunta feita apenas depois de o fornecedor já ter sido escolhido — e está ausente de todas as perguntas que decidem quem é esse fornecedor.',
  'The same question asked of both surfaces, so the two results can finally be compared line by line instead of by anecdote.':
    'A mesma pergunta colocada às duas superfícies, para que os dois resultados possam finalmente ser comparados linha a linha em vez de por anedota.',
  'Every gap sorted into a named class with a different remedy and a different cost. Not all absence is the same problem.':
    'Cada lacuna classificada numa categoria com nome, com o seu próprio remédio e o seu próprio custo. Nem toda a ausência é o mesmo problema.',
  'Eleven of twenty tracked commercial keywords sit outside the Google top ten and receive no AI recommendation — the decision happens on neither surface.':
    'Onze das vinte palavras-chave comerciais monitorizadas ficam fora dos dez primeiros lugares do Google e não recebem recomendação da IA — a decisão não acontece em nenhuma das superfícies.',
  'Absent from both surfaces on a high-value commercial question. The most expensive class of gap.':
    'Ausente em ambas as superfícies numa pergunta comercial de elevado valor. A classe de lacuna mais dispendiosa.',
  'Absent from AI answers and outside the Google top ten. The decision happens without the brand.':
    'Ausente das respostas de IA e fora dos dez primeiros do Google. A decisão acontece sem a marca.',
  'Track gap classification per keyword monthly. Success is six keywords moving out of blind-spot classification.':
    'Acompanhe mensalmente a classificação da lacuna por palavra-chave. O sucesso são seis palavras-chave a sair da classificação de ponto cego.',

  /* --- Search economics ------------------------------------------------------ */
  'Search Economics': 'Economia da pesquisa',
  'Search Cost Intelligence': 'Inteligência do custo de pesquisa',
  'Search Intelligence': 'Inteligência de pesquisa',
  'Search trend analysis': 'Análise de tendências de pesquisa',
  'Break-even CPC': 'CPC de equilíbrio',
  'Break-Even CPC': 'CPC de equilíbrio',
  'Break-even model': 'Modelo de ponto de equilíbrio',
  'Above break-even': 'Acima do ponto de equilíbrio',
  'Blended CPC vs break-even': 'CPC combinado face ao ponto de equilíbrio',
  'Blended CPC across 20 tracked keywords':
    'CPC combinado em 20 palavras-chave monitorizadas',
  'Keywords above break-even CPC':
    'Palavras-chave acima do CPC de equilíbrio',
  'Keywords above break-even CPC 13 → 7 of 20':
    'Palavras-chave acima do CPC de equilíbrio 13 → 7 de 20',
  '11 of 20 weak': '11 de 20 fracas',
  'Bid inflation': 'Inflação das licitações',
  'Paid dependency': 'Dependência do pago',
  'AI vs Paid': 'IA face ao pago',
  'Recoverable Search Opportunity': 'Oportunidade de pesquisa recuperável',
  'Recoverable search opportunity': 'Oportunidade de pesquisa recuperável',
  'Organic replacement potential': 'Potencial de substituição orgânica',
  'Paid acquisition is not buying growth here; it is renting the positions that authority would otherwise hold. The cost is structural and rises as competitive density increases.':
    'A aquisição paga não está a comprar crescimento aqui; está a alugar as posições que a autoridade de outro modo ocuparia. O custo é estrutural e sobe à medida que a densidade concorrencial aumenta.',
  'Blended CPC runs above break-even. Paid is renting positions that authority would hold, and the cost rises with competitive density.':
    'O CPC combinado está acima do ponto de equilíbrio. O pago aluga posições que a autoridade ocuparia, e o custo sobe com a densidade concorrencial.',
  'Blended CPC runs above the break-even cost per click, and paid spend is covering questions where the brand has no organic or AI presence.':
    'O CPC combinado ultrapassa o custo por clique de equilíbrio, e o investimento pago está a cobrir perguntas nas quais a marca não tem presença orgânica nem em IA.',
  'Reallocate spend from keywords with a viable organic replacement path, and hold paid only where break-even still clears.':
    'Realoque o investimento das palavras-chave com um caminho viável de substituição orgânica e mantenha o pago apenas onde o ponto de equilíbrio ainda é ultrapassado.',
  'Compare blended CPC against break-even monthly, and track organic replacement on reallocated keywords.':
    'Compare mensalmente o CPC combinado com o ponto de equilíbrio e acompanhe a substituição orgânica nas palavras-chave realocadas.',

  /* --- Narrative -------------------------------------------------------------- */
  'Narrative Intelligence': 'Inteligência narrativa',
  'Narrative ownership 12% → 24%': 'Domínio da narrativa 12% → 24%',
  'Narrative control': 'Controlo da narrativa',
  'Narrative War Room': 'Sala de crise da narrativa',
  'Category definition': 'Definição da categoria',
  'Category definition language': 'Linguagem de definição da categoria',
  'Comparison content': 'Conteúdo comparativo',
  'Content Intelligence': 'Inteligência de conteúdo',
  'Buyer education': 'Formação do comprador',
  'Pricing perception': 'Perceção de preços',
  'Price justification': 'Justificação do preço',
  'Strategic silence': 'Silêncio estratégico',
  'Whoever defines a category sets the criteria buyers evaluate against. This category measures how much of that definition you own, where it is fragile, and which of your genuine advantages the market has no vocabulary for.':
    'Quem define uma categoria fixa os critérios pelos quais os compradores avaliam. Esta categoria mede que parte dessa definição lhe pertence, onde é frágil e para quais das suas vantagens reais o mercado não tem vocabulário.',
  'Whoever defines the category sets the criteria buyers evaluate against. Competing on someone else’s definition means competing on terms chosen to favour them.':
    'Quem define a categoria fixa os critérios pelos quais os compradores avaliam. Competir com a definição de outro significa competir em termos escolhidos para o favorecer.',
  'Engines describe the category in a competitor’s language. Northwind’s strongest differentiator is absent from every category description.':
    'Os motores descrevem a categoria na linguagem de um concorrente. O fator de diferenciação mais forte da Northwind está ausente de todas as descrições da categoria.',
  'Whether the market is asking informed comparison questions or still asking what the category is, which decides what content is worth producing.':
    'Se o mercado coloca perguntas comparativas informadas ou ainda pergunta o que é a categoria — o que determina que conteúdo vale a pena produzir.',
  'Category vocabulary as an ownable asset, with a percentage attached — a measure most companies have never seen quantified.':
    'O vocabulário da categoria como um ativo que se pode deter, com uma percentagem associada — uma medida que a maioria das empresas nunca viu quantificada.',

  /* --- Strategic timing -------------------------------------------------------- */
  'Strategic Timing Intelligence': 'Inteligência do momento estratégico',
  'Strategic Timing Window': 'Janela de momento estratégico',
  'The window is open and closing': 'A janela está aberta e a fechar-se',
  '7 months — closes 2027-02-28': '7 meses — fecha a 28/02/2027',
  'Query maturity': 'Maturidade das pesquisas',
  'Query maturity accelerating': 'A maturidade das pesquisas está a acelerar',
  'Demand maturation': 'Maturação da procura',
  'Shift velocity': 'Velocidade da viragem',
  'Rising 8% quarter over quarter.': 'A subir 8% de trimestre para trimestre.',
  'Moderate — 8% quarter-over-quarter':
    'Moderada — 8% de trimestre para trimestre',
  'Time to impact': 'Tempo até ao impacto',
  Urgency: 'Urgência',
  Emerging: 'Emergente',
  'Timing, geography and distribution — the three conditions that decide whether a correct strategy executed today returns more than the same strategy executed in a year. A right decision at the wrong time is still a wrong decision.':
    'Momento, geografia e distribuição — as três condições que decidem se uma estratégia correta executada hoje rende mais do que a mesma executada daqui a um ano. Uma decisão certa no momento errado continua a ser uma decisão errada.',
  'Category language is still forming, so authority built now compounds. Once engines settle on a stable answer set, displacing an incumbent recommendation costs materially more.':
    'A linguagem da categoria ainda se está a formar, pelo que a autoridade construída agora acumula-se. Assim que os motores fixarem um conjunto de respostas estável, deslocar uma recomendação instalada custará substancialmente mais.',
  'Whether category language is still fluid — because authority built while it is fluid becomes the default answer, and authority built after has to displace one.':
    'Se a linguagem da categoria ainda é fluida — porque a autoridade construída enquanto o é torna-se a resposta por omissão, e a construída depois tem de deslocar uma.',
  'The rate at which recommendation slots are being taken, which is what converts "sometime this year" into a dated decision.':
    'O ritmo a que os espaços de recomendação estão a ser ocupados — é isso que converte «algures este ano» numa decisão com data.',
  'The market is emerging with roughly seven months of open window; competitive density is rising 8% per quarter.':
    'O mercado é emergente, com uma janela aberta de cerca de sete meses; a densidade concorrencial sobe 8% por trimestre.',
  'Commit authority investment before the decision deadline, while displacement cost remains low.':
    'Comprometa o investimento em autoridade antes do prazo de decisão, enquanto o custo de deslocação se mantém baixo.',

  /* --- Exposure and opportunity ------------------------------------------------ */
  'Directional commercial exposure': 'Exposição comercial direcional',
  'Commercial exposure': 'Exposição comercial',
  'Revenue Exposure': 'Exposição da receita',
  'Opportunity and Revenue Intelligence':
    'Inteligência de oportunidades e receita',
  'Opportunity range': 'Intervalo de oportunidade',
  'Opportunity Signal Map': 'Mapa de sinais de oportunidade',
  'Estimated conversion': 'Conversão estimada',
  'Conversion assumptions': 'Pressupostos de conversão',
  'Average deal value': 'Valor médio do negócio',
  'Deal value': 'Valor do negócio',
  'Decision gap': 'Lacuna de decisão',
  Demand: 'Procura',
  'Sensitivity analysis': 'Análise de sensibilidade',
  'Priority ranking model': 'Modelo de ordenação de prioridades',
  'What is it worth, and what happens next?':
    'Quanto vale, e o que acontece a seguir?',
  'Demand × decision gap × estimated conversion × average deal value. A range, never a confirmed figure.':
    'Procura × lacuna de decisão × conversão estimada × valor médio do negócio. Um intervalo, nunca um número confirmado.',
  'How crowded is the answer set becoming?':
    'Quão saturado está a ficar o conjunto de respostas?',

  /* --- Action ------------------------------------------------------------------ */
  'Action Intelligence': 'Inteligência de ação',
  'Action Center': 'Central de ações',
  'Prioritised interventions': 'Intervenções priorizadas',
  'Prioritised intervention sequence': 'Sequência priorizada de intervenções',
  'Top intervention': 'Intervenção principal',
  'Priority Queue': 'Fila de prioridades',
  '30/60/90-Day Roadmap': 'Roteiro de 30/60/90 dias',
  '6 sequenced': '6 sequenciadas',
  Effort: 'Esforço',
  'Effort assessment': 'Avaliação do esforço',
  'Measured change': 'Alteração medida',
  'Impact Tracker': 'Monitor de impacto',
  'Success metric': 'Métrica de sucesso',
  Prescription: 'Prescrição',
  Confidence: 'Confiança',
  Context: 'Contexto',
  Concerns: 'Reservas',
  Weak: 'Fraco',
  'Where diagnosis becomes a decision. Every gap is priced as a directional range, ranked against every other gap, assigned an owner and a deadline, and then measured after execution to confirm the signal actually moved.':
    'Onde o diagnóstico se torna decisão. Cada lacuna é quantificada como um intervalo direcional, ordenada face a todas as outras, atribuída a um responsável com um prazo, e depois medida após a execução para confirmar que o sinal se moveu de facto.',
  'Diagnosis without sequence produces activity, not movement. Each intervention names an owner, a deadline, the signal it should move and how that movement will be verified.':
    'Um diagnóstico sem sequência produz atividade, não movimento. Cada intervenção indica um responsável, um prazo, o sinal que deve mover e como esse movimento será verificado.',
  'Every finding converted into an intervention with an owner, a deadline and a stated expected movement — or dropped, if it cannot be.':
    'Cada conclusão convertida numa intervenção com responsável, prazo e um movimento esperado declarado — ou descartada, se não for possível.',
  'Ranking by exposure, confidence, effort and dependency, so effort does not go into work that cannot move until something else lands.':
    'Ordenação por exposição, confiança, esforço e dependência, para que o esforço não vá para trabalho que não pode avançar enquanto outra coisa não estiver concluída.',
  'A sequence built from what each intervention actually depends on, rather than from a calendar someone divided into thirds.':
    'Uma sequência construída a partir daquilo de que cada intervenção realmente depende, em vez de um calendário que alguém dividiu em terços.',
  'Each action carries its own success metric. Impact is verified by signal movement after execution, not by task completion.':
    'Cada ação tem a sua própria métrica de sucesso. O impacto é verificado pelo deslocamento do sinal após a execução, não pela conclusão da tarefa.',
  'Six interventions are prioritised; the first two address authority evidence and supplier-comparison coverage.':
    'São priorizadas seis intervenções; as duas primeiras abordam as provas de autoridade e a cobertura de comparação de fornecedores.',

  /* --- The decision journey ----------------------------------------------------- */
  'Decision Journey': 'Percurso da decisão',
  Research: 'Pesquisa',
  'Solution Evaluation': 'Avaliação de soluções',
  'Supplier Evaluation': 'Avaliação de fornecedores',
  'Purchase Decision': 'Decisão de compra',
  'Decision Hijack': 'Sequestro da decisão',

  /* --- Market --------------------------------------------------------------------- */
  'Market Intelligence': 'Inteligência de mercado',
  'Global Market Intelligence': 'Inteligência de mercado global',
  'Global Visibility Matrix': 'Matriz de visibilidade global',
  'Market readiness': 'Maturidade do mercado',
  'Market Readiness Gauge': 'Indicador de maturidade do mercado',
  'Market Entry Readiness': 'Preparação para a entrada no mercado',
  'Market Fit': 'Ajuste ao mercado',
  'Regional variation': 'Variação regional',
  'Regional strength': 'Força regional',
  'Country definition': 'Definição do país',
  'Distribution Intelligence': 'Inteligência de distribuição',
  'Scenario Simulator': 'Simulador de cenários',
  Analytics: 'Analítica',
  Visibility: 'Visibilidade',
  Ownership: 'Domínio',

  /* --- Roles and model provenance -------------------------------------------------- */
  'VP Marketing': 'Diretor de marketing',
  'Head of Digital': 'Responsável de digital',
  'Head of Brand': 'Responsável de marca',
  'Chief Executive': 'Diretor executivo',
  'Content Lead': 'Responsável de conteúdo',
  'Demand Gen Manager': 'Gestor de geração de procura',
  'Customer-configured': 'Configurado pelo cliente',
  'Derived from §13.1 chain': 'Derivado da cadeia §13.1',
  /* A product name. Recorded rather than translated, so its absence from the
     rest of this file reads as a decision and not an oversight. */
  'Google Ads': 'Google Ads',

  /* ==========================================================================
     ELECTION INTELLIGENCE

     The race, the candidates and the county are invented. Nothing here is
     transliterated: Portuguese shares the Latin alphabet, so Riverbend and
     the candidate initials are already in their Portuguese form. They will
     show up in a diff-mode audit as identical to English, which is correct
     rather than a gap — see the note at the head of i18n-audit.mjs.
     ====================================================================== */
  'Demonstration subject': 'Sujeito da demonstração',
  'Entirely fictional. No real person, party or race.':
    'Inteiramente fictício. Nenhuma pessoa, partido ou disputa reais.',
  Race: 'Disputa',
  'County Commission': 'Assembleia do condado',
  'Riverbend County — District 4': 'Condado de Riverbend — círculo 4',
  Candidate: 'Candidato',
  Opponent: 'Adversário',
  /* Already in their Portuguese form — he, ar and ru transliterate these into
     their own scripts, Portuguese has nothing to change. Recorded as
     identities so `i18n-port.mjs he pt` reports parity instead of a gap. */
  'A. Marchetti': 'A. Marchetti',
  'D. Okonkwo': 'D. Okonkwo',
  'Election War Room — the live operational view':
    'Sala de operações eleitoral — a vista operacional em direto',
  'The Election War Room. Fictional race, demonstration data — no real candidate, party or campaign.':
    'A sala de operações eleitoral. Disputa fictícia, dados de demonstração — nenhum candidato, partido ou campanha reais.',
  'Candidate / party dashboard — the standing position':
    'Painel de candidato e partido — a posição atual',
  'Candidate and party position. Fictional race, demonstration data — no real candidate, party or campaign.':
    'Posição do candidato e do partido. Disputa fictícia, dados de demonstração — nenhum candidato, partido ou campanha reais.',
  'Election narrative intelligence — positive vs negative narratives':
    'Inteligência narrativa eleitoral — narrativas positivas contra negativas',
  'Which narratives are strengthening the position and which are damaging it. Fictional race, demonstration data.':
    'Que narrativas reforçam a posição e quais a prejudicam. Disputa fictícia, dados de demonstração.',
  'Positive vs negative narratives — the polarity split':
    'Narrativas positivas contra negativas — a divisão de polaridade',
  'Positive against negative, by reach and by direction of travel. Fictional race, demonstration data.':
    'O positivo contra o negativo, por alcance e por sentido de evolução. Disputa fictícia, dados de demonstração.',
  'Audience / segment movement — who is moving toward and away':
    'Movimento de audiências e segmentos — quem se aproxima e quem se afasta',
  'Which audiences are moving closer and which are moving away. Fictional race, demonstration data.':
    'Que audiências se aproximam e quais se afastam. Disputa fictícia, dados de demonstração.',
  'Opponent intelligence — competing narratives and ownership':
    'Inteligência sobre o adversário — narrativas concorrentes e titularidade',
  'What the opposing account is, and which issues it owns. Fictional race, demonstration data.':
    'Qual é o relato do lado oposto e que temas detém. Disputa fictícia, dados de demonstração.',
  'Influencers and sources shaping the narrative':
    'Influenciadores e fontes que moldam a narrativa',
  'Who is strengthening the position and who is damaging it. Fictional race, demonstration data.':
    'Quem reforça a posição e quem a prejudica. Disputa fictícia, dados de demonstração.',
  'AI + Google election intelligence — per-engine narrative leads':
    'Inteligência eleitoral de IA e Google — a narrativa dominante por motor',
  'What each AI engine and Google surface leads with. Fictional race, demonstration data.':
    'Com que abre cada motor de IA e cada superfície do Google. Disputa fictícia, dados de demonstração.',
  'Multilingual intelligence — narrative gaps between languages':
    'Inteligência multilingue — lacunas narrativas entre línguas',
  'Where the account of a candidate differs by language. Fictional race, demonstration data.':
    'Onde o relato de um candidato difere consoante a língua. Disputa fictícia, dados de demonstração.',
  'Risks and opportunities — emerging threats and open positions':
    'Riscos e oportunidades — ameaças emergentes e posições livres',
  'Emerging threats and unclaimed positions, ranked. Fictional race, demonstration data.':
    'Ameaças emergentes e posições por reclamar, ordenadas. Disputa fictícia, dados de demonstração.',
  'Recommended actions — the campaign action plan':
    'Ações recomendadas — o plano de ação da campanha',
  'What to do now, who owns it, and how the movement will be measured. Fictional race, demonstration data.':
    'O que fazer agora, quem o assume e como será medido o movimento. Disputa fictícia, dados de demonstração.',
  'Trend over time — narrative movement across the cycle':
    'Tendência ao longo do tempo — o movimento narrativo durante o ciclo',
  'How the position has moved across the cycle. Fictional race, demonstration data.':
    'Como a posição se moveu ao longo do ciclo. Disputa fictícia, dados de demonstração.',

  /* ==========================================================================
     INTELLIGENCE ENGINES
     ====================================================================== */
  'Intelligence engines': 'Motores de inteligência',
  'Each engine answers a board-level business question, produces a connected intelligence readout and routes the user into action. Not a feature list — a set of questions the business needs answered.':
    'Cada motor responde a uma questão de negócio ao nível da administração, produz uma leitura de inteligência interligada e encaminha o utilizador para a ação. Não é uma lista de funcionalidades, mas um conjunto de perguntas a que o negócio precisa de resposta.',
  'Built in this environment · 4 of 12': 'Construído neste ambiente · 4 de 12',
  'Four engines, built to full depth': 'Quatro motores, desenvolvidos em toda a profundidade',
  'Each carries a real seeded outcome, its evidence, its commercial consequence and the action it prescribes. They chain into one another — together they form the causal argument rather than four samples of it.':
    'Cada um traz um resultado pré-carregado real, as suas provas, a sua consequência comercial e a ação que prescreve. Encadeiam-se uns nos outros: em conjunto formam o argumento causal e não quatro amostras dele.',
  'The full operating system': 'O sistema operativo completo',
  'Eight further engines available in the platform':
    'Mais oito motores disponíveis na plataforma',
  'These are part of the operating system but are not built in this demonstration environment. Their business questions are listed so the shape of the full system is visible.':
    'Fazem parte do sistema operativo, mas não estão construídos neste ambiente de demonstração. As suas questões de negócio são listadas para que a forma do sistema completo fique visível.',
  'Available in platform': 'Disponível na plataforma',
  'Is the business present when customers ask AI whom to choose?':
    'O negócio está presente quando os clientes perguntam à IA quem escolher?',
  'Which gap is commercially meaningful enough to fix first?':
    'Que lacuna tem relevância comercial suficiente para ser corrigida primeiro?',
  'When does paid search become structurally inefficient?':
    'Quando é que a pesquisa paga se torna estruturalmente ineficiente?',
  'Is the business visible but still unsafe to recommend?':
    'O negócio é visível mas ainda arriscado de recomendar?',
  'When the market explains the category, whose language does it use?':
    'Quando o mercado explica a categoria, de quem é o vocabulário que usa?',
  'Is the market ready, and how long is the window open?':
    'O mercado está pronto e durante quanto tempo permanece aberta a janela?',
  'How does the business change across countries, languages and markets?':
    'Como muda o negócio de país para país, de língua para língua e de mercado para mercado?',
  'Does the route to market strengthen the brand or transfer power to intermediaries?':
    'O canal de chegada ao mercado reforça a marca ou transfere poder para os intermediários?',
  'See plans': 'Ver planos',

  /* ==========================================================================
     MARKETPLACE
     ====================================================================== */
  'Seven categories of decision intelligence, each holding the models that answer one kind of commercial question. Most of them measure things a business has never been able to see — not because the questions are exotic, but because nothing existed to answer them.':
    'Sete categorias de inteligência de decisão, cada uma com os modelos que respondem a um tipo de questão comercial. A maioria mede coisas que um negócio nunca conseguiu ver — não porque as perguntas sejam exóticas, mas porque não existia nada que lhes respondesse.',
  'Intelligence categories': 'Categorias de inteligência',
  'Intelligence modules': 'Módulos de inteligência',
  'Engines beneath them': 'Motores subjacentes',
  'of these modules run live in this environment against a real reconstructed business. The rest are available in the platform.':
    'destes módulos funcionam em direto neste ambiente sobre um negócio realmente reconstruído. Os restantes estão disponíveis na plataforma.',
  'Start with the question you actually have.':
    'Comece pela pergunta que realmente tem.',
  'Each category opens into the modules underneath it. Every module answers one business question and returns evidence, an analysis and a recommendation — never a figure on its own.':
    'Cada categoria abre nos módulos que contém. Cada módulo responde a uma questão de negócio e devolve provas, uma análise e uma recomendação — nunca um número isolado.',
  'What you are buying': 'O que está a comprar',
  'The document is the output. The intelligence is the product.':
    'O documento é o resultado. A inteligência é o produto.',
  'How the models work': 'Como funcionam os modelos',
  'Every claim carries the observation behind it — which engine, which question, which date. A conclusion you cannot audit is an opinion.':
    'Cada afirmação traz consigo a observação que a sustenta: que motor, que pergunta, que data. Uma conclusão que não se pode auditar é uma opinião.',
  'What the evidence means commercially, what is causing it, and how confident the model can honestly be. Limits are stated, never implied.':
    'O que as provas significam em termos comerciais, o que as está a causar e com que confiança o modelo se pode honestamente pronunciar. Os limites são declarados, nunca subentendidos.',
  'What to do, who owns it, by when, and what signal should move as a result. Verified afterwards against what actually moved.':
    'O que fazer, quem o assume, até quando e que sinal deve mover-se em consequência. Depois é confrontado com o que realmente se moveu.',
  'Whatever the business question, there is already intelligence built for it.':
    'Seja qual for a questão de negócio, já existe inteligência construída para ela.',
  'See a module run live': 'Ver um módulo em funcionamento',
  'Monitor continuously instead': 'Ou monitorizar de forma contínua',
  '7 live in demo': '7 ativos na demonstração',
  '4 live in demo': '4 ativos na demonstração',
  Analysis: 'Análise',
  Recommendation: 'Recomendação',
  modules: 'módulos',
  Explore: 'Explorar',
  '+ 1 more': '+ mais 1',
  '+ 2 more': '+ mais 2',
  '+ 4 more': '+ mais 4',
  '+ 6 more': '+ mais 6',
  '+ {n} more': '+ mais {n}',
  '{n} live in demo': '{n} ativos na demonstração',
  '<b>{n}</b> of these modules run live in this environment against a real reconstructed business. The rest are available in the platform.':
    '<b>{n}</b> destes módulos funcionam em direto neste ambiente sobre um negócio realmente reconstruído. Os restantes estão disponíveis na plataforma.',
  'Built in this environment · {n} of {total}': 'Construído neste ambiente · {n} de {total}',

  /* ==========================================================================
     LEGAL
     `localStorage` stays Latin — it is the storage API by name, and the page
     has to name it precisely.
     ====================================================================== */
  Legal: 'Informação legal',
  'Legal and data handling': 'Informação legal e tratamento de dados',
  'Legal and data handling | GeoRepute': 'Informação legal e tratamento de dados | GeoRepute',
  'Privacy, terms, data processing and security posture for the GeoRepute demonstration environment.':
    'Privacidade, condições, tratamento de dados e postura de segurança do ambiente de demonstração da GeoRepute.',
  'What this environment does and does not do with data.':
    'O que este ambiente faz com os dados e o que não faz.',
  'This is a demonstration build. Rather than reproduce boilerplate that would not apply to it, each section below states the actual position.':
    'Esta é uma versão de demonstração. Em vez de reproduzir fórmulas genéricas que não se lhe aplicariam, cada secção abaixo expõe a situação real.',
  Privacy: 'Privacidade',
  'This environment collects nothing. There is no analytics script, no tag manager, no session recording and no third-party tracker on any page.':
    'Este ambiente não recolhe nada. Nenhuma página contém script de análise, gestor de etiquetas, gravação de sessões ou rastreador de terceiros.',
  'The only data stored about you is your theme preference and any demonstration purchases, both held in your browser’s localStorage and readable only by this site. Nothing is transmitted anywhere. Clearing site data removes all of it, and the purchase-confirmation screen offers a reset control.':
    'Os únicos dados guardados sobre si são a preferência de tema e eventuais compras de demonstração, ambos mantidos no localStorage do seu navegador e legíveis apenas por este sítio. Nada é transmitido para lado nenhum. Limpar os dados do sítio remove tudo, e o ecrã de confirmação de compra disponibiliza um controlo de reposição.',
  'Terms of service': 'Condições do serviço',
  'No commercial terms apply. Nothing on this site constitutes an offer, and no contract can be formed through it.':
    'Não se aplicam quaisquer condições comerciais. Nada neste sítio constitui uma oferta, e não pode ser celebrado nenhum contrato através dele.',
  'Pricing shown throughout is placeholder and clearly marked as such on the pricing page. The checkout collects no payment details and processes no charge.':
    'Os preços apresentados são provisórios e estão claramente assinalados como tal na página de preços. O processo de pagamento não recolhe dados bancários nem processa qualquer cobrança.',
  'Data processing': 'Tratamento de dados',
  'Northwind Supply is a fictional organisation. Every figure attributed to it is seeded, internally consistent and derived from a published set of anchor facts. No real company’s data appears anywhere in this environment.':
    'A Northwind Supply é uma organização fictícia. Todos os números que lhe são atribuídos estão pré-carregados, são internamente coerentes e derivam de um conjunto publicado de factos de referência. Em nenhum ponto deste ambiente aparecem dados de uma empresa real.',
  'Competitor names, domains and citation counts are invented. Any resemblance to an operating business is coincidental and unintended.':
    'Os nomes de concorrentes, os domínios e as contagens de citações são inventados. Qualquer semelhança com um negócio em atividade é casual e não intencional.',
  'AI engines are referenced by their public product names for accuracy of description. No affiliation, endorsement or partnership is claimed or implied.':
    'Os motores de IA são referidos pelos seus nomes públicos de produto por rigor descritivo. Não se reivindica nem se subentende qualquer afiliação, aprovação ou parceria.',
  Security: 'Segurança',
  'There is no authentication, no user account and no server-side session. The sign-in screen requests no password because none is checked — inviting a real credential into a demonstration would be a hazard, not a convenience.':
    'Não há autenticação, conta de utilizador nem sessão do lado do servidor. O ecrã de entrada não pede palavra-passe porque nenhuma é verificada: convidar uma credencial verdadeira para dentro de uma demonstração seria um perigo, não uma comodidade.',
  'No external network requests are made at runtime. Fonts are self-hosted, all visuals are generated in CSS or SVG, and the content security posture assumes no third-party origin is trusted.':
    'Não são feitos pedidos de rede externos em tempo de execução. Os tipos de letra estão alojados localmente, todos os elementos visuais são gerados em CSS ou SVG, e a postura de segurança de conteúdo parte do princípio de que nenhuma origem de terceiros é de confiança.',
  'Before this platform is operated commercially, these sections must be replaced with reviewed policies covering the real data flows, retention periods, sub-processors and jurisdictions involved.':
    'Antes de esta plataforma ser explorada comercialmente, estas secções terão de ser substituídas por políticas revistas que cubram os fluxos de dados reais, os prazos de conservação, os subcontratantes e as jurisdições envolvidas.',
  'Return home': 'Voltar ao início',

  /* ==========================================================================
     SIGN IN
     ====================================================================== */
  'Sign In': 'Entrar',
  'Sign In | GeoRepute': 'Entrar | GeoRepute',
  Home: 'Início',
  'Enter the demonstration workspace': 'Entrar na área de trabalho de demonstração',
  'This environment has no authentication. Every visitor sees the same seeded organisation, Northwind Supply, so that every figure stays verifiable against the published methodology.':
    'Este ambiente não tem autenticação. Todos os visitantes veem a mesma organização pré-carregada, a Northwind Supply, para que cada número continue verificável face à metodologia publicada.',
  Workspace: 'Área de trabalho',
  'northwindsupply.com · US Midwest': 'northwindsupply.com · Midwest dos EUA',
  'Continue to Mission Control': 'Continuar para o centro de comando',
  'No password is requested because none is checked. Real authentication drops in behind the same route without changing this screen’s place in the flow.':
    'Não é pedida palavra-passe porque nenhuma é verificada. Uma autenticação a sério encaixa por trás da mesma rota sem alterar o lugar deste ecrã no percurso.',

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
  'Public narrative intelligence': 'Inteligência narrativa pública',
  'Public Narrative Intelligence | GeoRepute': 'Inteligência narrativa pública | GeoRepute',
  'Public Narrative Intelligence': 'Inteligência narrativa pública',
  'What story is the market telling about us?':
    'Que história está o mercado a contar sobre nós?',
  'Not how often the business is mentioned. Which accounts of it are active, who owns each one, and which of them decide whether it gets chosen.':
    'Não com que frequência o negócio é mencionado. Mas que relatos sobre ele estão ativos, quem detém cada um e quais deles decidem se é escolhido.',
  'Election mode': 'Modo eleições',
  'Political intelligence': 'Inteligência política',
  Health: 'Estado',
  'Narrative health': 'Estado da narrativa',
  'Overall public sentiment': 'Sentimento público global',
  'A weighted read of how much active conversation helps against how much hurts.':
    'Uma leitura ponderada de quanta conversa ativa ajuda face a quanta prejudica.',
  'Narrative momentum': 'Dinâmica narrativa',
  'Narrative stability': 'Estabilidade narrativa',
  'Narrative balance': 'Equilíbrio narrativo',
  'Positive narrative strength': 'Força da narrativa positiva',
  'Negative narrative strength': 'Força da narrativa negativa',
  'Neutral narrative': 'Narrativa neutra',
  'The balance between stories that help and stories that hurt, weighted by how much of the conversation each reaches.':
    'O equilíbrio entre as histórias que ajudam e as que prejudicam, ponderado pela parte da conversa que cada uma alcança.',
  '20% of active category conversation carries a story that favours this business — and both of those narratives are currently unclaimed by anyone.':
    '20 % da conversa ativa da categoria transporta uma história que favorece este negócio — e nenhuma dessas duas narrativas está reclamada por quem quer que seja.',
  '74% carries a story that works against it, most of it a competitor’s evaluation framing rather than criticism of the business itself.':
    '74 % transporta uma história que joga contra ele, e na maior parte trata-se do enquadramento de avaliação de um concorrente e não de crítica ao próprio negócio.',
  '6% is category-level conversation attached to no supplier. Neutral is not safe — it is unowned ground with no defender.':
    '6 % é conversa ao nível da categoria não associada a nenhum fornecedor. Neutro não quer dizer seguro: é terreno sem dono e sem defensor.',
  'Sentiment is not hostility. Nothing here is criticism of the business — the adverse weight comes almost entirely from stories written by competitors in which this business does not appear.':
    'O sentimento não é hostilidade. Nada disto é crítica ao negócio: o peso adverso vem quase inteiramente de histórias escritas por concorrentes nas quais este negócio nem sequer aparece.',
  '3 adverse narratives are gaining ground against 1 favourable one. Direction matters more than the current balance, because it is what the position will be in two quarters.':
    '3 narrativas adversas ganham terreno face a 1 favorável. A direção importa mais do que o equilíbrio atual, porque é a posição que se terá daqui a dois trimestres.',
  '4 of 8 active narratives are still forming or growing. The account of this category is not yet fixed, which is what makes intervention cheap now and expensive later.':
    '4 das 8 narrativas ativas continuam a formar-se ou a crescer. O relato desta categoria ainda não está fixado, e é isso que torna a intervenção barata agora e cara mais tarde.',
  Landscape: 'Panorama',
  'Every active narrative in this category': 'Todas as narrativas ativas desta categoria',
  'Sorted by reach. The owner column is the one that matters — a favourable story nobody owns is an asset waiting to be claimed.':
    'Ordenadas por alcance. A coluna do detentor é a que importa: uma história favorável que ninguém detém é um ativo à espera de ser reclamado.',
  'Who owns the story': 'Quem detém a história',
  'Share of active conversation, weighted by reach. Unclaimed is not neutral ground — it is ground with no defender.':
    'Quota da conversa ativa, ponderada pelo alcance. Por reclamar não é terreno neutro: é terreno sem defensor.',
  Business: 'Negócio',
  Competitors: 'Concorrentes',
  Shared: 'Partilhado',
  Unclaimed: 'Por reclamar',
  'Business: 4%': 'Negócio: 4 %',
  'Competitors: 56%': 'Concorrentes: 56 %',
  'Shared: 20%': 'Partilhado: 20 %',
  'Unclaimed: 20%': 'Por reclamar: 20 %',
  'Category language owned': 'Vocabulário da categoria detido',
  'The share of the vocabulary engines use to define this category that belongs to this business. Whoever holds this sets the criteria every comparison is scored against.':
    'A parte do vocabulário que os motores usam para definir esta categoria que pertence a este negócio. Quem a detém fixa os critérios pelos quais cada comparação é pontuada.',
  'The split above measures this specific narrative inventory. This figure measures the category’s language as a whole, and is the same one Mission Control publishes.':
    'A divisão acima mede este inventário narrativo em concreto. Este número mede o vocabulário da categoria no seu todo, e é o mesmo que o centro de comando publica.',
  'The business holds': 'O negócio detém',
  'The business holds <b>{pct}%</b>, and every point of it is the hardware-retailer error rather than anything it chose to say. Ownership counts the stories attached to a name; it does not ask whether they help.':
    'O negócio detém <b>{pct} %</b>, e cada ponto disso vem do erro da loja de ferragens e não de algo que ele tenha escolhido dizer. A titularidade conta as histórias associadas a um nome; não pergunta se ajudam.',
  'Weighted by reach rather than counted, so a story reaching a third of the category is not equal to one reaching a twentieth.':
    'Ponderado pelo alcance em vez de contado, de modo que uma história que chega a um terço da categoria não equivale a outra que chega a um vigésimo.',
  Reach: 'Alcance',
  'Owned by': 'Detida por',
  Influence: 'Influência',
  Competition: 'Concorrência',
  Opportunity: 'Oportunidade',
  Strength: 'Força',
  Weakness: 'Fraqueza',
  Risk: 'Risco',
  Media: 'Comunicação social',
  Questions: 'Perguntas',
  'If ignored': 'Se for ignorado',
  'Overlap with us': 'Sobreposição connosco',
  Unsettled: 'Por assentar',
  '— absent': '— ausente',
  '{level} severity': 'Gravidade {level}',
  '+ {n} more tracked': '+ mais {n} em acompanhamento',
  '31 % share': '31 % de quota',
  '18 % share': '18 % de quota',
  '11 % share': '11 % de quota',
  '7 % share': '7 % de quota',
  '{pct}% share': '{pct} % de quota',
  Growing: 'A crescer',
  Steady: 'Estável',
  Declining: 'Em recuo',
  Contested: 'Disputada',
  Neutral: 'Neutra',
  Favourable: 'Favorável',
  Adverse: 'Adversa',
  'Favourable · emerging': 'Favorável · emergente',
  'Favourable · steady': 'Favorável · estável',
  'Adverse · emerging': 'Adversa · emergente',
  'Adverse · growing': 'Adversa · a crescer',
  'Adverse · steady': 'Adversa · estável',
  'Adverse · declining': 'Adversa · em recuo',
  'Neutral · steady': 'Neutra · estável',

  /* --- Competitor narratives ------------------------------------------------------- */
  'The story each competitor is telling': 'A história que cada concorrente conta',
  'Every position has a weakness built into it. A narrative strong enough to dominate is usually narrow enough to outflank.':
    'Toda a posição traz uma fraqueza incorporada. Uma narrativa forte o suficiente para dominar costuma ser estreita o suficiente para ser contornada.',
  'The safe national choice with published comparisons.':
    'A escolha nacional segura, com comparações publicadas.',
  'The technical authority on specification.': 'A autoridade técnica em especificações.',
  'The educator that reaches buyers first.':
    'O divulgador que chega primeiro aos compradores.',
  'The procurement-checklist incumbent.':
    'O que já consta nas listas de verificação de compras.',
  'Owns the evaluation criteria itself. Engines cite its comparison library when explaining how to choose a supplier at all.':
    'Detém os próprios critérios de avaliação. Os motores citam a sua biblioteca de comparações quando explicam, pura e simplesmente, como escolher um fornecedor.',
  'Its case rests on breadth and fill rate. It has no response prepared on response time or regional service depth.':
    'O seu argumento assenta na amplitude de catálogo e na taxa de satisfação de encomendas. Não tem resposta preparada quanto ao tempo de resposta nem à profundidade do serviço regional.',
  'Competes directly on supplier-evaluation questions, where it is named first in four of seven.':
    'Concorre diretamente nas perguntas de avaliação de fornecedores, onde é nomeado em primeiro lugar em quatro de sete.',
  'Its vocabulary can be adopted and extended rather than fought. Speaking its language while adding availability outflanks it.':
    'O seu vocabulário pode ser adotado e alargado em vez de combatido. Falar a sua língua acrescentando a disponibilidade contorna-o.',
  'Specification depth does not answer availability. It is largely absent from questions about delivery and continuity.':
    'A profundidade de especificações não responde à disponibilidade. Está em larga medida ausente das perguntas sobre entrega e continuidade.',
  'Owns solution-evaluation questions upstream of where this business competes.':
    'Detém as perguntas de avaliação de soluções, numa fase anterior àquela em que este negócio concorre.',
  'Its own framing concedes that speed is a separate axis. A published response-time standard splits the criterion it defined.':
    'O seu próprio enquadramento admite que a rapidez é um eixo à parte. Uma norma publicada de tempo de resposta divide o critério que ele mesmo definiu.',
  'Enters the decision at research, before evaluation criteria exist, and shapes them by arriving early.':
    'Entra na decisão na fase de pesquisa, antes de existirem critérios de avaliação, e molda-os por chegar cedo.',
  'Almost no presence earlier in the journey. Its position is administrative rather than argued.':
    'Quase sem presença nas fases anteriores do percurso. A sua posição é administrativa e não argumentada.',
  'Owns early-stage questions this business is also absent from, but does not convert them.':
    'Detém perguntas de fase inicial de que este negócio também está ausente, mas não as converte.',
  'Thin at the point of purchase. Rarely named when a buyer asks whom to actually choose.':
    'Fraco no ponto de compra. Raramente nomeado quando um comprador pergunta quem escolher na prática.',
  'Research-stage presence is uncontested at the point where education becomes a shortlist.':
    'A sua presença na fase de pesquisa não é disputada por ninguém exatamente onde a divulgação se transforma em lista restrita.',
  'Named on procurement documentation that engines cite at the moment of purchase.':
    'Nomeado na documentação de compras que os motores citam no momento da compra.',
  'Competes only at purchase decision, where this business also has no coverage.':
    'Só concorre na decisão de compra, onde este negócio também não tem cobertura.',
  'A checklist position is winnable through documentation rather than through reputation.':
    'Uma posição em lista de verificação ganha-se com documentação e não com reputação.',

  /* --- Media narratives ------------------------------------------------------------ */
  'What publications are actually writing about':
    'Sobre o que escrevem realmente as publicações',
  'The business appears in none of four active category stories. Two of them — provenance and tariff continuity — have no supplier voice at all.':
    'O negócio não aparece em nenhum dos quatro temas ativos da categoria. Dois deles — a proveniência e a continuidade face às tarifas — não têm qualquer voz de fornecedor.',
  'The business appears in none of the four active category stories. Media narrative is currently being written entirely by others.':
    'O negócio não aparece em nenhum dos quatro temas ativos da categoria. A narrativa mediática está a ser escrita neste momento inteiramente por outros.',
  'MRO supplier consolidation across Midwest manufacturing':
    'Consolidação de fornecedores de MRO na indústria do Midwest',
  'Counterfeit fasteners in industrial supply chains':
    'Fixadores contrafeitos nas cadeias de abastecimento industriais',
  'Verification and provenance in fastener sourcing':
    'Verificação e proveniência no aprovisionamento de fixadores',
  'Fastener supply continuity after tariff changes':
    'Continuidade do fornecimento de fixadores após as alterações tarifárias',
  'Supply continuity under tariff volatility':
    'Continuidade do abastecimento perante a volatilidade tarifária',
  'Vendor-managed inventory adoption in mid-market plants':
    'Adoção da gestão de stock pelo fornecedor em fábricas de mercado médio',
  'Vendor-managed inventory for mid-market plants':
    'Gestão de stock pelo fornecedor para fábricas de mercado médio',
  'The most active category story. This business is not quoted in any of the eleven pieces published this quarter.':
    'O tema mais ativo da categoria. Este negócio não é citado em nenhuma das onze peças publicadas neste trimestre.',
  'A category-level trust story. Suppliers who comment become the trusted ones; those who stay silent are grouped with the problem.':
    'Um tema de confiança ao nível da categoria. Os fornecedores que comentam passam a ser os fiáveis; os que se calam ficam agrupados com o problema.',
  'An emerging story where regional inventory depth is the natural expert angle, and no regional distributor has been quoted yet.':
    'Um tema emergente em que a profundidade do stock regional é o ângulo de perito natural, e no qual ainda não foi citado nenhum distribuidor regional.',
  'A service already operated but never publicly associated with the business. One competitor is quoted in three of four pieces on it.':
    'Um serviço já prestado mas nunca associado publicamente ao negócio. Um concorrente é citado em três das quatro peças sobre o assunto.',
  'A competitor is quoted in three of four pieces. The topic maps directly onto a service this business already operates.':
    'Um concorrente é citado em três de quatro peças. O tema corresponde diretamente a um serviço que este negócio já presta.',
  'Regional inventory depth is the natural expert position on a story publications are actively looking for sources on.':
    'A profundidade do stock regional é a posição de perito natural num tema para o qual as publicações procuram fontes ativamente.',
  'An active media story with no supplier voice attached. Commenting converts a category-level trust concern into a reason to choose a specific supplier.':
    'Um tema mediático ativo sem qualquer voz de fornecedor associada. Comentar transforma uma preocupação de confiança ao nível da categoria numa razão para escolher um fornecedor concreto.',
  'No quote, contribution or citation in the four topics publications are currently covering.':
    'Nem uma citação, nem um contributo, nem uma referência nos quatro temas que as publicações cobrem atualmente.',
  'Silence is read as absence of expertise. The category continues to be explained by the suppliers willing to explain it.':
    'O silêncio é lido como ausência de competência. A categoria continua a ser explicada pelos fornecedores dispostos a explicá-la.',

  /* --- Question landscape ---------------------------------------------------------- */
  'What the market actually wants to know': 'O que o mercado quer realmente saber',
  'The real question corpus, partitioned by what a buyer is trying to decide when they ask it.':
    'O corpo real de perguntas, dividido consoante o que um comprador está a tentar decidir ao formulá-las.',
  'Most common questions': 'Perguntas mais frequentes',
  'Public questions': 'Perguntas públicas',
  'AI buying questions': 'Perguntas de compra à IA',
  'Recommendation questions': 'Perguntas de recomendação',
  'Comparison questions': 'Perguntas de comparação',
  'Purchase questions': 'Perguntas de compra',
  'Concerns and objections': 'Reservas e objeções',
  'A buyer asking directly whom to choose. The highest-value question class in the category, and the one that assigns the order.':
    'Um comprador que pergunta diretamente quem escolher. A classe de perguntas de maior valor da categoria, e aquela que atribui a encomenda.',
  'A buyer weighing approaches rather than vendors. Whoever frames the comparison sets the criteria the vendor choice will use.':
    'Um comprador que pondera abordagens em vez de fornecedores. Quem enquadra a comparação fixa os critérios que serão usados para escolher o fornecedor.',
  'What buyers ask before they have a supplier in mind. Presence here shapes the criteria everything later is judged against.':
    'O que os compradores perguntam antes de terem um fornecedor em mente. A presença aqui molda os critérios pelos quais tudo o resto será julgado.',
  'A buyer who has already chosen. Presence here converts; it does not win anything that was not already won upstream.':
    'Um comprador que já escolheu. A presença aqui converte; não ganha nada que não tenha já sido ganho antes.',
  'The risks buyers raise before committing. Answering these publicly is how a supplier becomes the safe choice rather than the cheap one.':
    'Os riscos que os compradores levantam antes de se comprometerem. Responder-lhes em público é o que torna um fornecedor a escolha segura em vez da escolha barata.',

  /* --- Opportunities and risks ----------------------------------------------------- */
  'Stories nobody owns': 'Histórias que ninguém detém',
  'Ranked by influence against competition. The best of these are high influence and uncontested, which is the rarest combination in any category.':
    'Ordenadas por influência face à concorrência. As melhores são de influência elevada e sem disputa, a combinação mais rara em qualquer categoria.',
  'The single narrative that most favours this business, and nobody owns it. Same-day regional delivery is a genuine capability that no public source currently attaches to this name.':
    'A narrativa que mais favorece este negócio, e ninguém a detém. A entrega regional no próprio dia é uma capacidade real que nenhuma fonte pública associa hoje a este nome.',
  'No competitor has claimed it, engines have no vocabulary for it, and it is the capability this business actually leads on. The single highest-return narrative available.':
    'Nenhum concorrente a reclamou, os motores não têm vocabulário para ela, e é a capacidade em que este negócio realmente lidera. A narrativa disponível de maior retorno.',
  'Directly counters the consolidation narrative that currently favours national distributors, and reframes regional scale as risk management rather than as a limitation.':
    'Contraria diretamente a narrativa de consolidação que hoje favorece os distribuidores nacionais e reformula a escala regional como gestão de risco e não como limitação.',
  'Directly contradicts the consolidation narrative and favours a strong secondary supplier. Neither this business nor any competitor has claimed it.':
    'Contradiz diretamente a narrativa de consolidação e favorece um segundo fornecedor forte. Não foi reclamada nem por este negócio nem por qualquer concorrente.',
  'Consolidation reaches 14% of conversation and favours national distributors. The counter-narrative reaches 11% and is owned by nobody.':
    'A consolidação atinge 14 % da conversa e favorece os distribuidores nacionais. A contranarrativa atinge 11 % e não é detida por ninguém.',
  'Threats before they become the default': 'As ameaças antes de se tornarem a norma',
  'An emerging narrative is contestable. A settled one has to be displaced. The difference in cost between the two is the reason this section exists.':
    'Uma narrativa emergente pode ser contestada. Uma já assente tem de ser deslocada. A diferença de custo entre as duas é a razão de ser desta secção.',
  '3 risks are rated high severity, of which the entity conflation and the emerging regional-limitation narrative are both still cheap to correct.':
    '3 riscos estão classificados como de gravidade elevada; destes, a confusão de entidades e a narrativa emergente de limitação regional continuam baratos de corrigir.',
  'The most dangerous emerging narrative on this list. It is not yet dominant and it is factually contestable, which means it is still cheap to answer.':
    'A narrativa emergente mais perigosa desta lista. Ainda não é dominante e é factualmente contestável, o que significa que responder-lhe continua a ser barato.',
  'Becomes the default objection to a regional supplier. Contestable now with published evidence; expensive to reverse once engines treat it as settled.':
    'Torna-se a objeção por defeito a um fornecedor regional. Contestável agora com provas publicadas; cara de inverter assim que os motores a tratarem como assente.',
  'A factual error, carried by one engine, that removes the business from every supplier-evaluation answer it appears in. Declining, but not yet corrected.':
    'Um erro factual, sustentado por um único motor, que retira o negócio de todas as respostas de avaliação de fornecedores em que surge. Em recuo, mas ainda por corrigir.',
  'A single wrong category record continues to exclude the business from the question class that assigns orders.':
    'Um único registo de categoria errado continua a excluir o negócio da classe de perguntas que atribui as encomendas.',
  'Every future comparison is scored on axes chosen to favour a competitor, whatever the campaign says.':
    'Toda a comparação futura é pontuada em eixos escolhidos para favorecer um concorrente, diga o que disser a campanha.',
  'Every impression delivered to a Gemini user reinforces an incorrect record. Campaign spend actively strengthens the wrong association.':
    'Cada impressão entregue a um utilizador do Gemini reforça um registo incorreto. O investimento da campanha consolida ativamente a associação errada.',
  'Emerging in two engines and sourced from a competitor comparison page. Still contestable; not yet treated as settled.':
    'Emergente em dois motores e proveniente de uma página comparativa de um concorrente. Ainda contestável; ainda não tratada como assente.',
  'Appearing in Gemini and Copilot answers on multi-site sourcing questions, sourced from a competitor comparison page.':
    'Surge nas respostas do Gemini e do Copilot a perguntas de aprovisionamento multiunidade, proveniente de uma página comparativa de um concorrente.',
  'ChatGPT categorises the business as retail rather than MRO distribution, removing it from supplier-evaluation answers.':
    'O ChatGPT classifica o negócio como retalho em vez de distribuição de MRO, retirando-o das respostas de avaliação de fornecedores.',
  'Fill rate and catalogue breadth are cited first by three of six engines when explaining how to choose a distributor.':
    'A taxa de satisfação de encomendas e a amplitude do catálogo são o primeiro que três de seis motores citam ao explicar como escolher um distribuidor.',
  'Favours whichever supplier is already largest. A regional specialist is read as the thing being consolidated away rather than the one consolidating.':
    'Favorece o fornecedor que já é o maior. Um especialista regional é lido como aquilo que a consolidação absorve e não como quem consolida.',
  'Its specification guidance became the category’s default vocabulary because it published first, not because it is more correct.':
    'O seu guia de especificações tornou-se o vocabulário por defeito da categoria porque publicou primeiro, não porque esteja mais correto.',
  'Published first by a competitor, so it became the vocabulary engines learned. It positions this business as a reseller by omission rather than by argument.':
    'Foi publicado primeiro por um concorrente, pelo que se tornou o vocabulário que os motores aprenderam. Coloca este negócio na posição de revendedor por omissão e não por argumento.',
  'Neutral on its face, but it removes price as a differentiator and pushes the decision onto evidence — which is the axis this business currently loses on.':
    'Neutra à superfície, mas retira o preço como fator de diferenciação e empurra a decisão para as provas — que é o eixo em que este negócio perde neste momento.',
  'Contain an emerging high-severity adverse narrative':
    'Conter uma narrativa adversa emergente de gravidade elevada',
  'Respond Immediately': 'Responder de imediato',

  /* --- Misconceptions and engine reads --------------------------------------------- */
  'What each engine currently says this business is':
    'O que cada motor diz neste momento que este negócio é',
  'Claims machines currently repeat that are wrong. Each one removes the business from answers it should appear in.':
    'Afirmações que as máquinas repetem hoje e que estão erradas. Cada uma retira o negócio de respostas em que deveria constar.',
  'Misconceptions repeated as fact': 'Ideias erradas repetidas como factos',
  'Gemini resolves a same-named logistics firm; ChatGPT categorises the business as retail. Both remove it from supplier-evaluation answers entirely.':
    'O Gemini resolve para uma empresa de logística homónima; o ChatGPT classifica o negócio como retalho. Ambos o retiram por completo das respostas de avaliação de fornecedores.',
  'Gemini resolves the wrong entity on category questions and recognises the business at 24 of 100.':
    'Nas perguntas de categoria, o Gemini resolve para a entidade errada e reconhece o negócio com 24 em 100.',
  'Accurate. No divergence from the intended account.':
    'Correto. Sem divergência face ao relato pretendido.',
  '4 of 6 diverge': '4 em 6 divergem',
  'Machines are repeating 1 factual error about this business that removes it from supplier answers entirely. Argument about positioning is wasted while the underlying record is wrong. Once corrected, 20% of category conversation is unclaimed and the strongest of it favours this business.':
    'As máquinas repetem 1 erro factual sobre este negócio que o retira por completo das respostas sobre fornecedores. Discutir posicionamento é tempo perdido enquanto o registo de base estiver errado. Depois de corrigido, 20 % da conversa da categoria está por reclamar e a sua parte mais forte favorece este negócio.',
  ', and every point of it is the hardware-retailer error rather than anything it chose to say. Ownership counts the stories attached to a name; it does not ask whether they help.':
    ', e cada ponto disso vem do erro da loja de ferragens e não de algo que ele tenha escolhido dizer. A titularidade conta as histórias associadas a um nome; não pergunta se ajudam.',
  'Fill rate and catalogue breadth are how you choose a distributor.':
    'Um distribuidor escolhe-se pela taxa de satisfação de encomendas e pela amplitude do catálogo.',
  'Consolidating MRO suppliers reduces cost and administrative load.':
    'Consolidar fornecedores de MRO reduz o custo e a carga administrativa.',
  'Midwest fastener pricing is broadly comparable across suppliers.':
    'Os preços dos fixadores no Midwest são em geral comparáveis entre fornecedores.',
  'Specification depth separates serious suppliers from resellers.':
    'A profundidade de especificações separa os fornecedores sérios dos revendedores.',
  'Evaluation criteria are increasingly stated in a competitor’s terms.':
    'Os critérios de avaliação são cada vez mais formulados nos termos de um concorrente.',
  'The business is conflated with a same-named logistics firm.':
    'O negócio é confundido com uma empresa de logística homónima.',
  'Single-source supplier dependency is an operational risk.':
    'Depender de um único fornecedor é um risco operacional.',
  'Regional suppliers cannot support multi-plant operations.':
    'Os fornecedores regionais não conseguem servir operações com várias fábricas.',
  'Regional distributors deliver faster than national ones.':
    'Os distribuidores regionais entregam mais depressa do que os nacionais.',
  'The business is absent from every active category story.':
    'O negócio está ausente de todos os temas ativos da categoria.',
  'The business is described as a hardware retailer.':
    'O negócio é descrito como uma loja de ferragens a retalho.',
  'Northwind Supply is a hardware retailer.':
    'A Northwind Supply é uma loja de ferragens a retalho.',
  'Observed in {sources}.': 'Observado em: {sources}.',
  'How much of the conversation works for us':
    'Que parte da conversa joga a nosso favor',
  'Quoted in 3 pieces across 2 publications engines cite':
    'Citado em 3 peças distribuídas por 2 publicações a que os motores recorrem',
  'Multi-site capability referenced in 2 of 6 engines on multi-plant sourcing questions':
    'Capacidade multiunidade referida em 2 de 6 motores nas perguntas de aprovisionamento com várias fábricas',
  'Response time cited among the first three selection criteria by 3 of 6 engines':
    'Tempo de resposta citado entre os três primeiros critérios de seleção por 3 de 6 motores',
  'Secondary-supplier framing cited by 2 of 6 engines on consolidation questions':
    'Enquadramento do segundo fornecedor citado por 2 de 6 motores nas perguntas de consolidação',
  'The dominant evaluation framing, and it is a competitor’s. Buyers arrive already scoring suppliers on the two criteria where a national distributor wins by default.':
    'O enquadramento de avaliação dominante, e é o de um concorrente. Os compradores chegam já a pontuar fornecedores pelos dois critérios em que um distribuidor nacional ganha por defeito.',
  "4 of 6 engines carry a materially different account of this business. A buyer's understanding depends on which assistant they happen to open.":
    '4 de 6 motores sustentam um relato substancialmente diferente deste negócio. O que um comprador entende depende do assistente que calha abrir.',

  /* --- Source names. Capitalised to match the seed exactly. ------------------------- */
  'Trade forums': 'Fóruns do setor',
  'Buyer discussion': 'Discussões de compradores',
  'Procurement publications': 'Publicações de compras',
  'Specification guides': 'Guias de especificações',
  'Risk guidance': 'Orientações sobre riscos',
  'Aggregator pages': 'Páginas de agregadores',
  'Trade publications': 'Publicações do setor',
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
  'Narrative action plan': 'Plano de ação narrativo',
  'Open narrative action plan': 'Abrir o plano de ação narrativo',
  'Monitor narrative changes': 'Monitorizar as mudanças narrativas',
  'Check readiness before campaigning': 'Verificar a preparação antes de fazer campanha',
  'Each carries its objective, the evidence behind it, the movement expected, a confidence, an owner, a deadline, an effort estimate and how success is verified.':
    'Cada um traz o seu objetivo, as provas que o sustentam, o movimento esperado, um nível de confiança, um responsável, um prazo, uma estimativa de esforço e a forma como o êxito é verificado.',
  'Correct the record first, then claim the narrative nobody owns.':
    'Corrija primeiro o registo e reclame depois a narrativa que ninguém detém.',
  'Correct the entity conflation and the hardware-retailer categorisation.':
    'Corrigir a confusão de entidades e a classificação como loja de ferragens a retalho.',
  'Claim response time as a published supplier selection criterion.':
    'Reclamar o tempo de resposta como critério publicado de seleção de fornecedores.',
  'Answer the regional-limitation narrative with published multi-site evidence.':
    'Responder à narrativa de limitação regional com provas publicadas de operação multiunidade.',
  'Claim the secondary-supplier argument against the consolidation narrative.':
    'Reclamar o argumento do segundo fornecedor face à narrativa de consolidação.',
  'Enter the two active media stories with a named expert voice.':
    'Entrar nos dois temas mediáticos ativos com uma voz de perito identificada.',
  'Reframe regional scale from limitation to risk management':
    'Reformular a escala regional: de limitação a gestão de risco',
  'The narrative is unowned, high influence and uncontested. Same-day regional delivery is a real capability that appears in no category description.':
    'A narrativa não tem dono, tem influência elevada e não é disputada. A entrega regional no próprio dia é uma capacidade real que não consta de nenhuma descrição da categoria.',
  'Response time as a supplier selection criterion':
    'O tempo de resposta como critério de seleção de fornecedores',
  'The strategic case for a strong secondary supplier':
    'O argumento estratégico a favor de um segundo fornecedor forte',
  'Independent authority sources 3 → 8': 'Fontes de autoridade independentes 3 → 8',
  'Average recognition 38 → 55 of 100': 'Reconhecimento médio 38 → 55 em 100',

  /* ==========================================================================
     CAMPAIGN READINESS INTELLIGENCE
     ====================================================================== */
  'Campaign readiness intelligence': 'Inteligência de preparação de campanha',
  'Campaign Readiness Intelligence | GeoRepute':
    'Inteligência de preparação de campanha | GeoRepute',
  'Campaign Readiness Intelligence': 'Inteligência de preparação de campanha',
  'Should we launch this campaign today?': 'Devemos lançar esta campanha hoje?',
  'This assessment evaluates the business, not the campaign. Creative, targeting and budget can all be correct while the business remains structurally unable to convert the attention they buy.':
    'Esta avaliação incide sobre o negócio e não sobre a campanha. A criatividade, a segmentação e o orçamento podem estar todos certos enquanto o negócio continua estruturalmente incapaz de converter a atenção que compram.',
  Campaign: 'Campanha',
  'Q4 Midwest demand generation': 'Geração de procura no Midwest — 4.º trimestre',
  'Intended launch': 'Lançamento previsto',
  Duration: 'Duração',
  '6 months': '6 meses',
  '7 months': '7 meses',
  '{n} months': '{n} meses',
  Channels: 'Canais',
  'Paid search · Paid social · Trade media · Content syndication':
    'Pesquisa paga · Redes sociais pagas · Imprensa do setor · Sindicação de conteúdos',
  'Paid search': 'Pesquisa paga',
  'Paid social': 'Redes sociais pagas',
  'Trade media': 'Imprensa do setor',
  'Content syndication': 'Sindicação de conteúdos',
  'Estimated budget at risk': 'Orçamento estimado em risco',
  'Executive decision': 'Decisão da administração',
  'Executive recommendation': 'Recomendação à administração',
  'Delay Campaign': 'Adiar a campanha',
  'Delay the campaign. Fix authority first.':
    'Adie a campanha. Trate primeiro da autoridade.',
  'Delay Campaign — readiness reads 32 of 100, held there by authority readiness at 11, which carries 20% of the index.':
    'Adiar a campanha — a preparação marca 32 em 100, mantida aí pela preparação em autoridade, que está em 11 e pesa 20 % do índice.',
  'Campaign readiness score': 'Pontuação de preparação da campanha',
  'Primary constraint': 'Restrição principal',
  'Authority readiness is the binding constraint at 11 of 100 and carries 20% of the index.':
    'A preparação em autoridade é a restrição determinante, com 11 em 100, e pesa 20 % do índice.',
  'Strategic window': 'Janela estratégica',
  'Advantage holds until {date}.': 'A vantagem mantém-se até {date}.',
  'Decision journey gaps': 'Lacunas no percurso de decisão',
  'Presence at every stage.': 'Presença em todas as fases.',
  '2 stages uncovered': '2 fases sem cobertura',
  'Assessment confidence': 'Confiança da avaliação',
  'Six of seven dimensions rest on directly observed data.':
    'Seis das sete dimensões assentam em dados observados diretamente.',
  Assessment: 'Avaliação',
  'Seven readiness dimensions, weighted into one index':
    'Sete dimensões de preparação, ponderadas num único índice',
  'Every score is computed from observed data rather than assigned. The weights are published and sum to one.':
    'Cada pontuação é calculada a partir de dados observados em vez de atribuída. As ponderações estão publicadas e somam um.',
  'Ready at 70 and above. At risk from 45 . Blocking below 45 .':
    'Pronto a partir de 70. Em risco a partir de 45. Bloqueante abaixo de 45.',
  'Ready at {ready} and above. At risk from {risk}. Blocking below {risk}.':
    'Pronto a partir de {ready}. Em risco a partir de {risk}. Bloqueante abaixo de {risk}.',
  Ready: 'Pronto',
  'At risk': 'Em risco',
  Blocking: 'Bloqueante',
  '{score} of 100 — {status}. Ready at {gate}.':
    '{score} em 100 — {status}. Pronto a partir de {gate}.',
  '{n}% of the readiness index': '{n} % do índice de preparação',
  '{score} of 100 · {weight}% of the index': '{score} em 100 · {weight} % do índice',
  or: 'ou',
  None: 'Nenhuma',
  '2 of 5': '2 em 5',
  '2 of 6': '2 em 6',
  'Launching remains available and is sometimes correct — a product deadline or a competitive move can outweigh a readiness score. This assessment states the cost of that choice so it is made deliberately rather than by default.':
    'Lançar continua a ser possível e por vezes acertado: um prazo de produto ou um movimento da concorrência podem pesar mais do que uma pontuação de preparação. Esta avaliação expõe o custo dessa escolha para que seja feita deliberadamente e não por inércia.',
  'Each carries a priority, an owner, a deadline, an effort estimate, its dependencies, the movement it should produce and how confident the model is in that.':
    'Cada uma traz uma prioridade, um responsável, um prazo, uma estimativa de esforço, as suas dependências, o movimento que deve produzir e a confiança do modelo nisso.',
  '{n} tracked questions': '{n} perguntas em acompanhamento',

  /* --- The seven readiness dimensions ---------------------------------------------- */
  'AI readiness': 'Preparação para a IA',
  'Do AI engines understand and recommend this business?':
    'Os motores de IA compreendem este negócio e recomendam-no?',
  'Across six engines, the business is understood at 38 of 100. Advertising cannot correct a record it does not touch.':
    'Ao longo de seis motores, o negócio é compreendido com 38 em 100. A publicidade não consegue corrigir um registo em que não toca.',
  'Authority readiness': 'Preparação em autoridade',
  'Is there enough evidence for AI to recommend this business?':
    'Existem provas suficientes para que a IA recomende este negócio?',
  '3 independent sources can verify this business. The category median is 14.':
    '3 fontes independentes conseguem verificar este negócio. A mediana da categoria é 14.',
  'Google readiness': 'Preparação no Google',
  'Can buyers find this business through traditional search?':
    'Conseguem os compradores encontrar este negócio pela pesquisa tradicional?',
  '9 of 20 commercial questions place in the top ten. The rest are reachable only by paying for the click.':
    '9 de 20 perguntas comerciais ficam entre os dez primeiros resultados. Às restantes só se chega pagando o clique.',
  'Narrative readiness': 'Preparação narrativa',
  'Does the market understand what this business stands for?':
    'O mercado percebe o que este negócio representa?',
  'The business owns 12% of the language engines use to define this category. The campaign would be fought on terms a competitor wrote.':
    'O negócio detém 12 % do vocabulário que os motores usam para definir esta categoria. A campanha seria travada em termos escritos por um concorrente.',
  Reputation: 'Reputação',
  'Is this business safe to recommend to a buyer?':
    'É seguro recomendar este negócio a um comprador?',
  'Reputation reads 44 of 100 while market fit reads 72. The offer is right; the proof around it is not.':
    'A reputação marca 44 em 100 enquanto a adequação ao mercado marca 72. A oferta está certa; as provas em torno dela não estão.',
  'Conversion readiness': 'Preparação para a conversão',
  'Can the destination convert the intent this campaign buys?':
    'Consegue o destino converter a intenção que esta campanha compra?',
  'A single quote form serves every stage. There is no path for a buyer who is still comparing suppliers and not yet requesting a price.':
    'Um único formulário de orçamento serve todas as fases. Não existe percurso para um comprador que ainda está a comparar fornecedores e ainda não pede preço.',
  'Competitor readiness': 'Preparação dos concorrentes',
  'Kestrel Industrial holds top-three organic positions and AI presence on the four highest-volume commercial questions simultaneously.':
    'A Kestrel Industrial mantém em simultâneo posições nos três primeiros lugares orgânicos e presença na IA nas quatro perguntas comerciais de maior volume.',

  /* --- Dimension detail signals ---------------------------------------------------- */
  'Category understanding': 'Compreensão da categoria',
  '2 of 6 correct': '2 em 6 corretos',
  'An engine that files the business in the wrong category cannot surface it when a buyer describes this need, regardless of spend.':
    'Um motor que arquiva o negócio na categoria errada não o consegue mostrar quando um comprador descreve esta necessidade, por muito que se gaste.',
  'AI recommendation coverage': 'Cobertura de recomendações da IA',
  '6 recommendation events across 144 answer slots. A buyer who asks an assistant for suppliers almost never hears this name.':
    '6 ocorrências como recomendação em 144 lugares de resposta. Um comprador que pede fornecedores a um assistente quase nunca ouve este nome.',
  'Engine consistency': 'Coerência entre motores',
  '37-point spread': 'diferença de 37 pontos',
  'Recognition ranges from 21 to 58. The campaign would reach buyers whose assistants disagree about what this business is.':
    'O reconhecimento varia entre 21 e 58. A campanha chegaria a compradores cujos assistentes divergem sobre o que este negócio é.',
  'Silent engines': 'Motores silenciosos',
  '2 engines recommend the business in none of the tracked decisions. Spend that drives buyers toward those engines returns nothing.':
    '2 motores não recomendam o negócio em nenhuma das decisões acompanhadas. O investimento que leva compradores até esses motores não devolve nada.',
  'Independent authority sources': 'Fontes de autoridade independentes',
  '3 sources': '3 fontes',
  'Independent corroboration is what lets a system name a supplier first rather than hedge across several.':
    'É a corroboração independente que permite a um sistema nomear um fornecedor em primeiro lugar em vez de se resguardar entre vários.',
  'Third-party validation': 'Validação por terceiros',
  '1 of 5 present': '1 em 5 presente',
  'Certifications, named customers, verified outcomes and specification references are absent from the public record.':
    'Certificações, clientes identificados, resultados verificados e referências de especificações estão ausentes do registo público.',
  'Industry references': 'Referências do setor',
  '0 of 3 publications': '0 em 3 publicações',
  'The three trade publications engines cite most for this category carry no coverage of the business at all.':
    'As três publicações do setor que os motores mais citam nesta categoria não dedicam qualquer cobertura ao negócio.',
  'Competitor authority': 'Autoridade do concorrente',
  '7× behind': '7× atrás',
  'Kestrel Industrial can be corroborated 7× more readily. That advantage compounds while no counter-programme runs.':
    'A Kestrel Industrial pode ser corroborada 7 vezes mais facilmente. Essa vantagem acumula-se enquanto não houver um programa que a contrarie.',
  'Commercial keyword coverage': 'Cobertura de pesquisas comerciais',
  '9 of 20': '9 em 20',
  'Weighted by search volume rather than by keyword count, so a strong position on a question nobody asks does not flatter the figure.':
    'Ponderado pelo volume de pesquisa e não pelo número de termos, para que uma posição forte numa pergunta que ninguém faz não embeleze o número.',
  'Technical SEO status': 'Estado do SEO técnico',
  'No blocking faults': 'Sem falhas bloqueantes',
  'Crawlability, indexation and canonicalisation carry no faults that would prevent a campaign landing page from ranking. This is not the constraint.':
    'O rastreio, a indexação e a canonicalização não apresentam falhas que impeçam uma página de destino de campanha de se posicionar. A restrição não está aqui.',
  'Organic opportunity': 'Oportunidade orgânica',
  '6 questions': '6 perguntas',
  '6 questions already rank but never reach an AI answer. These are the cheapest positions available and need publishing, not budget.':
    '6 perguntas já se posicionam mas nunca chegam a uma resposta de IA. São as posições mais baratas disponíveis e precisam de publicação, não de orçamento.',
  'Category clarity': 'Clareza da categoria',
  Fragmented: 'Fragmentada',
  'The same business is described differently across its own site, two directories and six engines. A campaign amplifies whichever version a buyer meets.':
    'O mesmo negócio é descrito de forma diferente no seu próprio sítio, em dois diretórios e em seis motores. Uma campanha amplifica a versão com que o comprador se cruza.',
  'Public narrative': 'Narrativa pública',
  'Machines describe this category using a competitor’s specification framing, so buyers arrive already evaluating against someone else’s criteria.':
    'As máquinas descrevem esta categoria com o enquadramento de especificações de um concorrente, pelo que os compradores chegam já a avaliar segundo os critérios de outro.',
  'Messaging alignment': 'Alinhamento das mensagens',
  Misaligned: 'Desalinhadas',
  'The campaign leads with same-day regional delivery. No public source currently associates that capability with this business.':
    'A campanha abre com a entrega regional no próprio dia. Nenhuma fonte pública associa hoje essa capacidade a este negócio.',
  'Trust signals': 'Sinais de confiança',
  'Every claim traces back to the company’s own website. Systems treat self-description as a claim rather than as evidence.':
    'Todas as afirmações remetem para o próprio sítio da empresa. Os sistemas tratam a autodescrição como afirmação e não como prova.',
  Reviews: 'Avaliações',
  'Adequate volume': 'Volume adequado',
  'Review volume is sufficient and sentiment is positive, but sits on platforms engines do not treat as authoritative for this category.':
    'O volume de avaliações é suficiente e o sentimento é positivo, mas estão em plataformas que os motores não tratam como fidedignas para esta categoria.',
  'Brand credibility': 'Credibilidade da marca',
  'Expert citations': 'Citações de peritos',
  'No named expert, engineer or specifier is publicly associated with the business. Machines have nobody to attribute expertise to.':
    'Nenhum perito, engenheiro ou prescritor identificado está publicamente associado ao negócio. As máquinas não têm a quem atribuir competência.',
  'External validation': 'Validação externa',
  'Customer outcomes, third-party validation, certifications and named references are absent. Only review-platform badges appear.':
    'Os resultados de clientes, a validação por terceiros, as certificações e as referências identificadas estão ausentes. Apenas surgem selos de plataformas de avaliações.',
  'Landing page quality': 'Qualidade das páginas de destino',
  '3 of 7 pages': '3 em 7 páginas',
  'Three of the seven pages this campaign would drive to state what the business sells above the fold. The rest open with company history.':
    'Três das sete páginas para onde esta campanha encaminharia indicam o que o negócio vende logo no primeiro ecrã. As restantes abrem com a história da empresa.',
  'Decision support': 'Apoio à decisão',
  'No comparison table, specification guidance or selection criteria exists on any destination page. A buyer arriving mid-evaluation has nothing to evaluate with.':
    'Em nenhuma página de destino existe tabela comparativa, guia de especificações ou critérios de seleção. Um comprador que chega a meio da avaliação não tem com que avaliar.',
  'Trust elements': 'Elementos de confiança',
  'Quote form only': 'Apenas formulário de orçamento',
  'Commercial messaging': 'Mensagens comerciais',
  'Same-day regional delivery — the strongest differentiator — appears on one page and in no page title.':
    'A entrega regional no próprio dia — o fator de diferenciação mais forte — surge numa única página e em nenhum título de página.',
  'Market leaders': 'Líderes de mercado',
  '4 ahead': '4 à frente',
  '4 of 4 tracked competitors currently receive more recommendations than this business.':
    'Os 4 concorrentes acompanhados recebem hoje mais recomendações do que este negócio.',
  'Competitor visibility': 'Visibilidade dos concorrentes',
  '4 in top three': '4 nos três primeiros',
  'Authority gap': 'Défice de autoridade',
  '21 sources': '21 fontes',
  'Kestrel Industrial holds 21 sources against 3. Advertising does not close an evidence gap; publishing and validation do.':
    'A Kestrel Industrial tem 21 fontes contra 3. Um défice de provas não se fecha com publicidade, mas com publicação e validação.',
  'Competitive gap': 'Défice competitivo',
  '12% owned': '12 % detidos',
  'Existing search strength': 'Força atual na pesquisa',
  'Existing strength sits on questions asked after a vendor has been chosen, not on the questions that choose one.':
    'A força atual assenta em perguntas feitas depois de escolhido o fornecedor, não nas perguntas que escolhem um.',
  'The leader is strongest at exactly the stage this campaign is intended to influence, which is where displacement is most expensive.':
    'O líder é mais forte precisamente na fase que esta campanha pretende influenciar, que é onde deslocá-lo custa mais caro.',
  '4 engines hold a wrong or missing record — one conflates the business with a same-named logistics firm.':
    '4 motores têm um registo errado ou inexistente — um confunde o negócio com uma empresa de logística homónima.',
  'The category description differs between the website and two trade directories, which reads to a machine as an unreliable record.':
    'A descrição da categoria difere entre o sítio e dois diretórios do setor, o que uma máquina lê como um registo pouco fiável.',
  'No single consistent story exists in the public record for a campaign to reinforce, so each impression starts the explanation over.':
    'Não existe no registo público um relato único e coerente que uma campanha possa reforçar, pelo que cada impressão recomeça a explicação.',
  'Kestrel Industrial receives 31% of recommendations against 4.2%. Launching now advertises into a decision they control.':
    'A Kestrel Industrial recebe 31 % das recomendações contra 4,2 %. Lançar agora é anunciar dentro de uma decisão que eles controlam.',

  /* --- Journey coverage ------------------------------------------------------------ */
  Coverage: 'Cobertura',
  'Where the campaign would reach buyers, and where it would not':
    'Onde a campanha chegaria aos compradores e onde não chegaria',
  'Stage 1': 'Fase 1',
  'Stage 2': 'Fase 2',
  'Stage 3': 'Fase 3',
  'Stage 4': 'Fase 4',
  'Stage 5': 'Fase 5',
  'Invisible to every conventional measurement tool.':
    'Invisível para qualquer ferramenta de medição convencional.',
  'Visible to {tools}.': 'Visível para {tools}.',
  'No presence at {stages}.': 'Sem presença em: {stages}.',
  'A campaign creates demand across the whole journey. It converts only at the stages where the business is actually present.':
    'Uma campanha cria procura ao longo de todo o percurso. Só converte nas fases em que o negócio está efetivamente presente.',

  /* --- Commercial risk ------------------------------------------------------------- */
  'Commercial risk': 'Risco comercial',
  'Commercial risk level': 'Nível de risco comercial',
  'What launching today would cost': 'O que custaria lançar hoje',
  'Missed decision exposure': 'Exposição a decisões perdidas',
  '19 of 24': '19 em 24',
  'Commercial decisions that already complete without this business appearing. A campaign increases how many of these happen, not how many are won.':
    'Decisões comerciais que já se concluem sem que este negócio apareça. Uma campanha aumenta quantas delas acontecem, não quantas são ganhas.',
  'Revenue dependent on this stage': 'Receita dependente desta fase',
  '38% of demand': '38 % da procura',
  'The share of revenue arriving through supplier evaluation — the stage where presence is currently lowest and the campaign has least leverage.':
    'A parte da receita que chega pela avaliação de fornecedores — a fase em que a presença é hoje mais baixa e em que a campanha tem menos alavancagem.',
  'Expected ROI risk': 'Risco no retorno previsto',
  'Return depends on buyers completing a journey the business is absent from at these stages. Spend reaches them; the recommendation does not.':
    'O retorno depende de os compradores completarem um percurso de que o negócio está ausente nestas fases. O investimento chega até eles; a recomendação não.',
  "Risk here is not the chance the campaign underperforms. It is the mechanism by which spend converts into a competitor's advantage.":
    'O risco aqui não é a probabilidade de a campanha render abaixo do previsto. É o mecanismo pelo qual o investimento se converte em vantagem para um concorrente.',
  'Every click is paid for twice: once to acquire it, and again to reacquire the buyer who arrived, found nothing to evaluate with, and left to compare elsewhere.':
    'Cada clique é pago duas vezes: uma para o obter e outra para voltar a captar o comprador que chegou, não encontrou com que avaliar e foi comparar noutro lado.',
  'Paid acquisition buys attention that trust has to convert. Without it the campaign raises awareness for the category and the best-verified supplier in it wins.':
    'A aquisição paga compra uma atenção que a confiança tem de converter. Sem ela, a campanha dá a conhecer a categoria e ganha o fornecedor mais bem verificado dessa categoria.',
  'The campaign generates consideration the business cannot survive. Buyers who check will find nothing independent, and the check happens after the click is paid for.':
    'A campanha gera uma fase de ponderação que o negócio não sobrevive. Os compradores que verificarem não encontrarão nada independente, e a verificação acontece depois de o clique estar pago.',
  'Campaign attention drives buyers to verify the business through an assistant that cannot describe it correctly. The spend creates the demand and a competitor collects it.':
    'A atenção da campanha leva os compradores a verificar o negócio através de um assistente incapaz de o descrever corretamente. O investimento cria a procura e é um concorrente que a recolhe.',
  'Campaign messaging contradicts what the market already believes. Spend is consumed correcting the record instead of creating demand.':
    'As mensagens da campanha contradizem aquilo em que o mercado já acredita. O investimento consome-se a corrigir o registo em vez de criar procura.',
  'Paid search carries the entire commercial keyword set alone, at a blended cost already above break-even, for as long as the campaign runs.':
    'A pesquisa paga sustenta sozinha todo o conjunto de termos comerciais, a um custo combinado que já ultrapassa o ponto de equilíbrio, durante todo o tempo em que a campanha decorrer.',
  'The campaign raises category demand that the best-evidenced supplier absorbs. Competitor share can rise as a direct result of this spend.':
    'A campanha aumenta a procura da categoria, que é absorvida pelo fornecedor com melhores provas. A quota do concorrente pode subir como consequência direta deste investimento.',
  'Both surfaces': 'Ambas as superfícies',
  Partial: 'Parcial',

  /* --- Interventions and the decision ---------------------------------------------- */
  Intervention: 'Intervenção',
  'Required before launch': 'Necessário antes do lançamento',
  'Blocked until priority {n} lands.': 'Bloqueado até a prioridade {n} ficar concluída.',
  'If you launch anyway': 'Se lançar mesmo assim',
  'Launch campaign': 'Lançar a campanha',
  'Fix readiness first': 'Corrigir primeiro a preparação',
  'Open Executive Action Plan': 'Abrir o plano de ação para a administração',
  'Review the full position': 'Rever a posição completa',
  'Website and conversion readiness': 'Preparação do sítio e da conversão',
  'What position are we launching into?': 'Para que posição estamos a lançar?',
  'AI narrative': 'Narrativa na IA',
  'Narrative consistency': 'Coerência narrativa',
  "Engines describe the category using a competitor's framing. Northwind owns 12% of that language.":
    'Os motores descrevem a categoria com o enquadramento de um concorrente. A Northwind detém 12 % desse vocabulário.',

  /* ==========================================================================
     DECISION RECONSTRUCTION

     Display labels only. 'brand', 'competitor', 'supporting', 'downstream',
     'high', 'medium', 'low' are enum discriminants in the seed graph — an
     entry keyed on any of them rewrites the data itself and breaks every
     lookup. The component maps them to the capitalised labels below.
     ====================================================================== */
  'Decision Reconstruction': 'Reconstrução da decisão',
  'Decision Reconstruction | GeoRepute': 'Reconstrução da decisão | GeoRepute',
  'Signature experience': 'Experiência distintiva',
  'Enter a domain and choose a commercial question. The system reconstructs what each surface understood, who received the decision and why.':
    'Introduza um domínio e escolha uma questão comercial. O sistema reconstrói o que cada superfície compreendeu, quem ficou com a decisão e porquê.',
  'Seeded environment — this demonstration always reconstructs {org}.':
    'Ambiente pré-carregado — esta demonstração reconstrói sempre a {org}.',
  Domain: 'Domínio',
  'Understood as: {what}': 'Compreendido como: {what}',
  Brand: 'Marca',
  Competitor: 'Concorrente',
  Low: 'Baixo',
  Supporting: 'De apoio',
  Downstream: 'A jusante',
  '{n} tracked decision questions. Supplier-evaluation questions appear first — that is where the vendor is chosen.':
    '{n} perguntas de decisão em acompanhamento. As perguntas de avaliação de fornecedores aparecem primeiro — é aí que o fornecedor é escolhido.',
  'An MRO and fastener distributor serving manufacturers':
    'Um distribuidor de MRO e fixadores ao serviço dos fabricantes',
  'Midwest industrial fastener and MRO distributor':
    'Distribuidor de fixadores industriais e de MRO do Midwest',
  'A regional industrial supplier in the US Midwest':
    'Um fornecedor industrial regional no Midwest dos EUA',
  'Industrial supply company, category association incomplete':
    'Empresa de fornecimento industrial, associação de categoria incompleta',
  'Unclear — associates the name with unrelated businesses':
    'Pouco claro — associa o nome a negócios sem relação',
  'Not recognized as a distinct business entity':
    'Não é reconhecida como uma entidade empresarial distinta',
  '{n} independent sources support this brand. Northwind has 3.':
    '{n} fontes independentes sustentam esta marca. A Northwind tem 3.',
  '{name} controls': 'A {name} controla',
  'across the whole set. Competitive density is shifting at {velocity}.':
    'em todo o conjunto. A densidade competitiva está a mudar a um ritmo {velocity}.',
  'This is the exposure attributable to this single question. The full-book figure across all {n} tracked decisions is materially larger and appears in Mission Control.':
    'Esta é a exposição imputável apenas a esta pergunta. O número global das {n} decisões em acompanhamento é substancialmente maior e consta do centro de comando.',
  'stage {n} of {total}': 'fase {n} de {total}',
  Present: 'Presente',
  'Observable by {tools} — but only after the decision has already narrowed.':
    'Observável por {tools} — mas apenas depois de a decisão já se ter estreitado.',
  'No conventional tool observes this stage. There is no visit, click, lead or CRM event to record — which is why the weakness is invisible until revenue moves.':
    'Nenhuma ferramenta convencional observa esta fase. Não há visita, clique, contacto ou evento de CRM para registar — e é por isso que a fraqueza permanece invisível até a receita se mexer.',
  'Reconstruction confidence across all ten surfaces.':
    'Confiança da reconstrução nas dez superfícies.',
  'What each AI engine understood about the business':
    'O que cada motor de IA compreendeu sobre o negócio',
  'Whether the brand was recognised, mentioned, cited, recommended or ignored':
    'Se a marca foi reconhecida, mencionada, citada, recomendada ou ignorada',
  'Which competitor was selected instead': 'Que concorrente foi escolhido em vez dela',
  'Which sources, trust signals and narratives influenced the answer':
    'Que fontes, sinais de confiança e narrativas influenciaram a resposta',
  'What Google demand, organic position and paid click cost indicate':
    'O que indicam a procura no Google, a posição orgânica e o custo do clique pago',
  'Where the question sits in the customer decision journey':
    'Onde se situa a pergunta no percurso de decisão do cliente',
  'What timing, market maturity and competitive density indicate':
    'O que indicam o momento, a maturidade do mercado e a densidade competitiva',
  'What the directional commercial exposure may be':
    'Qual poderá ser a exposição comercial em ordem de grandeza',
  'Which connected signals explain the outcome':
    'Que sinais interligados explicam o resultado',
  'What action is prescribed and how improvement will be measured':
    'Que ação é prescrita e como será medida a melhoria',
  'Decision intelligence graph': 'Grafo de inteligência de decisão',
  'Mentioned only': 'Apenas mencionada',
  'Wrong entity': 'Entidade errada',
  'Named Northwind in its answer, citing company website.':
    'Nomeou a Northwind na sua resposta, citando o sítio da empresa.',
  'Recognises the business but did not consider it relevant to this question.':
    'Reconhece o negócio mas não o considerou relevante para esta pergunta.',
  'Describes Northwind as a hardware retailer rather than an MRO distributor, which removes it from supplier-evaluation answers.':
    'Descreve a Northwind como uma loja de ferragens a retalho em vez de um distribuidor de MRO, o que a retira das respostas de avaliação de fornecedores.',
  'Knows the company exists but not which product categories it carries, so it is omitted from specification-led questions.':
    'Sabe que a empresa existe mas não que categorias de produto comercializa, pelo que é omitida das perguntas conduzidas por especificações.',
  'Conflates Northwind Supply with a same-named logistics firm, so category association fails entirely.':
    'Confunde a Northwind Supply com uma empresa de logística homónima, pelo que a associação de categoria falha por completo.',
  '1 of 6 engines named Northwind, and none placed it first.':
    '1 em 6 motores nomeou a Northwind, e nenhum a colocou em primeiro lugar.',
  '4 of 6 resolve the wrong entity': '4 em 6 resolvem para a entidade errada',
  'engines recommended the business on this question':
    'motores recomendaram o negócio nesta pergunta',
  'of all recommendations across the tracked decision set':
    'do total de recomendações no conjunto de decisões em acompanhamento',
  'Kestrel Industrial is cited by 21 independent sources; Northwind by 3.':
    'A Kestrel Industrial é citada por 21 fontes independentes; a Northwind, por 3.',
  '3 sources vs 14 median': '3 fontes contra uma mediana de 14',
  'Northwind’s own pages are the only source engines can reach for its claims — self-citation carries little weight.':
    'As próprias páginas da Northwind são a única fonte a que os motores conseguem chegar para as suas afirmações — e a autocitação pesa pouco.',
  'A published comparison library gives engines material they can quote directly.':
    'Uma biblioteca de comparações publicada dá aos motores material que podem citar diretamente.',
  'Category evaluation criteria': 'Critérios de avaliação da categoria',
  'Supplier-comparison content': 'Conteúdos de comparação de fornecedores',
  'Company website': 'Sítio da empresa',
  Source: 'Fonte',
  Favours: 'Favorece',
  'Why it matters': 'Porque importa',
  'Monthly volume': 'Volume mensal',
  'Paid CPC': 'CPC pago',
  'AI presence': 'Presença na IA',
  'Closest tracked keyword': 'Termo acompanhado mais próximo',
  'Above break-even CPC': 'Acima do CPC de equilíbrio',
  'Coverage at this stage': 'Cobertura nesta fase',
  'Share of query volume': 'Quota do volume de pesquisas',
  'Share of revenue decided': 'Quota da receita que se decide',
  'of questions at this stage against': 'das perguntas desta fase contra',
  'Market position': 'Posição no mercado',
  'Window remaining': 'Janela restante',
  'Buy this as an intelligence product': 'Comprar isto como produto de inteligência',

  /* --- The 24 tracked buyer questions. Translated on the same reasoning as the
         home page's search queries — a buyer in this market asks in Portuguese. */
  'Which fastener supplier should we choose for a new plant?':
    'Que fornecedor de fixadores devemos escolher para uma fábrica nova?',
  'Who are the top industrial supply companies for fasteners?':
    'Quais são as melhores empresas de fornecimento industrial para fixadores?',
  'Best MRO distributors for manufacturing plants':
    'Melhores distribuidores de MRO para fábricas',
  'Top rated industrial supply vendors near Chicago':
    'Fornecedores de material industrial mais bem avaliados perto de Chicago',
  'Which MRO supplier has the best fill rate?':
    'Que fornecedor de MRO tem a melhor taxa de satisfação de encomendas?',
  'Recommended industrial distributors for hydraulic components':
    'Distribuidores industriais recomendados para componentes hidráulicos',
  'Compare industrial distributor service levels':
    'Comparar níveis de serviço de distribuidores industriais',
  'Is a national or regional MRO distributor better?':
    'É melhor um distribuidor de MRO nacional ou regional?',
  'Should we consolidate MRO suppliers or keep multiple vendors?':
    'Devemos consolidar os fornecedores de MRO ou manter vários?',
  'What should an MRO supply agreement include?':
    'O que deve incluir um contrato de fornecimento de MRO?',
  'Risks of single-source supplier dependency for MRO':
    'Riscos de depender de um único fornecedor de MRO',
  'Vendor-managed inventory vs consignment for MRO supplies':
    'Gestão de stock pelo fornecedor ou consignação para consumíveis de MRO',
  'What is vendor-managed inventory for MRO supplies?':
    'O que é a gestão de stock pelo fornecedor para consumíveis de MRO?',
  'How do I reduce MRO inventory carrying costs?':
    'Como reduzo os custos de manutenção de stock de MRO?',
  'Best practices for industrial fastener sourcing':
    'Boas práticas de aprovisionamento de fixadores industriais',
  'What is the difference between grade 5 and grade 8 fasteners?':
    'Qual é a diferença entre fixadores de classe 5 e de classe 8?',
  'What causes premature bolt failure in high-vibration equipment?':
    'O que provoca a rotura prematura de parafusos em equipamentos de vibração elevada?',
  'How often should hydraulic fittings be replaced?':
    'Com que frequência devem ser substituídas as uniões hidráulicas?',
  'How to avoid counterfeit fasteners in the supply chain':
    'Como evitar fixadores contrafeitos na cadeia de abastecimento',
  'What are the most common industrial supply delivery failures?':
    'Quais são as falhas de entrega mais comuns no fornecimento industrial?',
  'Industrial fastener supplier with same-day shipping':
    'Fornecedor de fixadores industriais com expedição no próprio dia',
  'Get a quote for bulk grade 8 fasteners':
    'Pedir orçamento para fixadores de classe 8 a granel',
  'Set up an MRO supply account': 'Abrir uma conta de fornecimento de MRO',

  /* ==========================================================================
     EXECUTIVE MISSION CONTROL
     ====================================================================== */
  'Executive Mission Control': 'Centro de comando executivo',
  'Executive Mission Control | GeoRepute': 'Centro de comando executivo | GeoRepute',
  'Not more data. A decision position.': 'Não mais dados. Uma posição de decisão.',
  'Ten measures, each with evidence behind it': 'Dez medidas, cada uma com provas por trás',
  'Every figure is computed from observed data. Select any tile to open the full readout, its evidence and its prescribed action.':
    'Cada número é calculado a partir de dados observados. Selecione qualquer cartão para abrir a leitura completa, as suas provas e a ação prescrita.',
  Position: 'Posição',
  Explanation: 'Explicação',
  Execution: 'Execução',
  'AI Recognition Position': 'Posição de reconhecimento pela IA',
  'Average entity understanding across six engines. Three misidentify the category.':
    'Compreensão média da entidade em seis motores. Três identificam mal a categoria.',
  'Google vs AI Gap': 'Défice entre o Google e a IA',
  'Keywords absent from AI answers and outside the Google top ten. The decision happens on neither surface.':
    'Termos ausentes das respostas de IA e fora dos dez primeiros do Google. A decisão não acontece em nenhuma das superfícies.',
  'Decision Presence': 'Presença na decisão',
  'Supplier-evaluation coverage. 19 of 24 decisions complete without the brand.':
    'Cobertura da avaliação de fornecedores. 19 em 24 decisões concluem-se sem a marca.',
  'Competitive Capture': 'Captura competitiva',
  'Kestrel Industrial receives the recommendation. Northwind receives 4.2%.':
    'A Kestrel Industrial fica com a recomendação. A Northwind recebe 4,2 %.',
  'Narrative Ownership': 'Titularidade da narrativa',
  'Share of the language engines use to define the category. The criteria cited first are a competitor’s.':
    'Quota do vocabulário que os motores usam para definir a categoria. Os critérios citados em primeiro lugar são de um concorrente.',
  'Trust Readiness': 'Preparação em confiança',
  'The recommendation goes to the supplier engines can support with evidence.':
    'A recomendação vai para o fornecedor que os motores conseguem sustentar com provas.',
  'Paid Dependency': 'Dependência do pago',
  'Blended CPC runs above break-even. Paid is renting the positions authority would hold.':
    'O CPC combinado ultrapassa o ponto de equilíbrio. O pago está a alugar as posições que a autoridade ocuparia.',
  'Weighted across six GEON vectors. Authority at 28 is the binding constraint.':
    'Ponderado por seis vetores GEON. A autoridade, em 28, é a restrição determinante.',
  'ChatGPT supplier recommendation presence':
    'Presença nas recomendações de fornecedores do ChatGPT',
  'The most-used engine puts Northwind forward in one of twenty-four decision questions.':
    'O motor mais utilizado propõe a Northwind numa de vinte e quatro perguntas de decisão.',
  '3 independent sources against a category median of 14.':
    '3 fontes independentes contra uma mediana de categoria de 14.',
  'Authority is the binding constraint, so it is where intervention begins.':
    'A autoridade é a restrição determinante, pelo que é por aí que a intervenção começa.',
  'Paid search is bought to cover the questions authority no longer wins.':
    'A pesquisa paga é comprada para cobrir as perguntas que a autoridade já não ganha.',
  'Emerging market at 63/100 readiness. Query maturity accelerating.':
    'Mercado emergente com uma preparação de 63/100. A maturidade das pesquisas está a acelerar.',
  'The window remains open but is narrowing. Displacement cost rises once engines settle on a stable answer set.':
    'A janela continua aberta mas está a estreitar-se. O custo de deslocação sobe assim que os motores assentam num conjunto estável de respostas.',
  'Decision deadline': 'Prazo de decisão',
  'Timing window': 'Janela temporal',
  months: 'meses',
  'Causal signal chain': 'Cadeia causal de sinais',
  'The measures above are not independent. This is the chain that connects them, ending in the intervention it implies.':
    'As medidas acima não são independentes. Esta é a cadeia que as liga e que termina na intervenção que implica.',
  'One decision. Many signals. One explanation.':
    'Uma decisão. Muitos sinais. Uma explicação.',
  'Open evidence': 'Abrir as provas',
  'Open Action Center': 'Abrir o centro de ação',
  'Reconstruct the decision': 'Reconstruir a decisão',
  'Explore intelligence engines': 'Explorar os motores de inteligência',

  /* --- Executive intelligence feed ------------------------------------------------- */
  'Executive intelligence feed': 'Fluxo de inteligência para a administração',
  '{n} events': '{n} eventos',
  'Competitor surge': 'Avanço de um concorrente',
  'Kestrel Industrial gained the first recommendation on two more supplier questions':
    'A Kestrel Industrial ficou com a primeira recomendação em mais duas perguntas sobre fornecedores',
  'Kestrel now leads four of seven supplier-evaluation answers, up from two. Both new wins cite a trade publication added in June.':
    'A Kestrel lidera agora quatro das sete respostas de avaliação de fornecedores, contra duas anteriormente. Ambas as novas vitórias citam uma publicação do setor acrescentada em junho.',
  'Citation lost': 'Citação perdida',
  'Perplexity stopped citing the Northwind capability page':
    'O Perplexity deixou de citar a página de capacidades da Northwind',
  'The page was cited on three questions in June and none in July. Perplexity now resolves the same questions to competitor sources.':
    'A página foi citada em três perguntas em junho e em nenhuma em julho. O Perplexity resolve agora essas mesmas perguntas para fontes concorrentes.',
  '3 → 0 citations': '3 → 0 citações',
  '25 searches/mo': '25 pesquisas/mês',
  '+1 question': '+1 pergunta',
  '+2 questions': '+2 perguntas',
  '+8% QoQ': '+8 % trimestre a trimestre',
  '+8% CPC': '+8 % de CPC',
  'per month': 'por mês',
  '$3,200 – $6,200 per month': '3 200 $ – 6 200 $ por mês',
  'per quarter': 'por trimestre',
  'per year': 'por ano',
  'Narrative risk': 'Risco narrativo',
  'Engines adopted a competitor’s evaluation criteria':
    'Os motores adotaram os critérios de avaliação de um concorrente',
  'Fill rate and catalogue breadth are now cited first when engines explain how to choose a distributor. Regional response time is not referenced.':
    'A taxa de satisfação de encomendas e a amplitude do catálogo são agora o primeiro a ser citado quando os motores explicam como escolher um distribuidor. O tempo de resposta regional não é referido.',
  'Trust signal decayed': 'Sinal de confiança degradado',
  'Category description diverged across two trade directories':
    'A descrição da categoria divergiu em dois diretórios do setor',
  'Two directories now describe Northwind differently from its own site. Inconsistency is the mechanism behind entity confusion on ChatGPT and Copilot.':
    'Dois diretórios descrevem agora a Northwind de forma diferente do seu próprio sítio. É essa incoerência que está por trás da confusão de entidade no ChatGPT e no Copilot.',
  'Search cost spike': 'Subida do custo de pesquisa',
  'Blended CPC moved further above break-even':
    'O CPC combinado afastou-se ainda mais acima do ponto de equilíbrio',
  '“industrial supply company” rose to $11.00 with no organic position in the top 100. Paid is covering a question authority does not reach.':
    '«empresa de fornecimento industrial» subiu para 11,00 $ sem qualquer posição orgânica entre os 100 primeiros resultados. O pago está a cobrir uma pergunta a que a autoridade não chega.',
  'New decision question': 'Nova pergunta de decisão',
  'A new supplier-evaluation question entered the tracked set':
    'Uma nova pergunta de avaliação de fornecedores entrou no conjunto em acompanhamento',
  '“Which MRO supplier has the best fill rate?” appeared with measurable volume. Northwind is absent from every engine answering it.':
    '«Que fornecedor de MRO tem a melhor taxa de satisfação de encomendas?» apareceu com volume mensurável. A Northwind está ausente de todos os motores que lhe respondem.',
  'Recommendation gained': 'Recomendação ganha',
  'Claude began recommending Northwind for regional distributor questions':
    'O Claude começou a recomendar a Northwind em perguntas sobre distribuidores regionais',
  'First recommendation on “Top rated industrial supply vendors near Chicago”. Regional specificity is the differentiator the answer cites.':
    'Primeira recomendação em «Fornecedores de material industrial mais bem avaliados perto de Chicago». A especificidade regional é o fator de diferenciação que a resposta cita.',
  'Regional opportunity': 'Oportunidade regional',
  'Midwest regional questions show weaker competitive density':
    'As perguntas regionais do Midwest mostram uma densidade competitiva mais fraca',
  'Questions naming a Midwest location carry lower competitor control than national equivalents — the cheapest available entry point.':
    'As perguntas que nomeiam um local do Midwest estão menos controladas pela concorrência do que as equivalentes nacionais — o ponto de entrada mais barato disponível.',
  'Competitive density rose 8% quarter over quarter':
    'A densidade competitiva subiu 8 % de um trimestre para o outro',

  /* ==========================================================================
     STRATEGIC ACTION CENTER
     ====================================================================== */
  'Strategic Action Center': 'Centro de ação estratégica',
  'Prioritised interventions with owner, deadline, expected movement and how impact is verified after execution.':
    'Intervenções priorizadas com responsável, prazo, movimento esperado e a forma como o impacto é verificado após a execução.',
  '{n}-day': '{n} dias',
  'Each intervention names an owner, a deadline, the signal it should move and how that movement will be verified.':
    'Cada intervenção indica um responsável, um prazo, o sinal que deve mover e como esse movimento será verificado.',
  Interventions: 'Intervenções',
  Measured: 'Medido',
  'Verified after execution': 'Verificado após a execução',
  View: 'Ver',
  'Priority queue': 'Fila de prioridades',
  '30/60/90 roadmap': 'Roteiro 30/60/90',
  'day horizon': 'dias de horizonte',
  'Ranked by urgency, then by effort — cheapest decisive move first':
    'Ordenado por urgência e depois por esforço — primeiro o movimento decisivo mais barato',
  'Priority {n}': 'Prioridade {n}',
  'Not yet measured — verified after execution.':
    'Ainda não medido — verificado após a execução.',
  'View evidence': 'Ver as provas',
  'How impact is verified': 'Como se verifica o impacto',
  'Completion is not impact. Each action is verified by re-observing the signal it targets, across the same engines and questions, after execution. Until that re-observation happens, measured change stays empty rather than assumed.':
    'Concluir não é ter impacto. Cada ação é verificada voltando a observar o sinal a que se dirige, nos mesmos motores e nas mesmas perguntas, depois de executada. Enquanto essa nova observação não acontecer, a variação medida fica vazia em vez de ser presumida.',
  'Back to Mission Control': 'Voltar ao centro de comando',
  'Read the methodology': 'Ler a metodologia',

  /* Page descriptions. These render into <meta name="description"> rather than
     into the page, so the render audit cannot see them — it reads visible
     prose and a short list of perceivable attributes. Four of them sat in
     English through every clean audit this site has passed. */
  'Decision Health, revenue exposure, competitive capture, narrative control and strategic timing in one decision position.':
    'Saúde da decisão, exposição da receita, captura competitiva, controlo da narrativa e momento estratégico numa única posição de decisão.',
  'Should we launch this campaign today? A pre-campaign assessment of the business rather than the campaign — AI, authority, trust, narrative, competitive position and destination readiness, weighted into one decision.':
    'Devemos lançar esta campanha hoje? Uma avaliação, anterior à campanha, do negócio e não da campanha: IA, autoridade, confiança, narrativa, posição competitiva e preparação do destino, ponderadas numa única decisão.',
  'What story is the market telling about us, and how is it influencing decisions? Active narratives, who owns each one, where they are heading, and what should change.':
    'Que história está o mercado a contar sobre nós e como está a influenciar decisões? As narrativas ativas, quem detém cada uma, para onde caminham e o que deve mudar.',
  'Enter a domain and select a commercial question. Reconstruct what each AI engine understood, who received the decision, why, and what must change.':
    'Introduza um domínio e selecione uma questão comercial. Reconstrua o que cada motor de IA compreendeu, quem ficou com a decisão, porquê e o que tem de mudar.',

  /* ==========================================================================
     MARKETPLACE AND ENGINE DETAIL PAGES

     Nineteen routes that were never audited until the route list was
     enumerated properly. Composites the audit prints — "Entry · Snapshot",
     "12 modules", "Next: …" — are NOT keys; the component joins two halves.
     ====================================================================== */

  /* --- Product page chrome --------------------------------------------------------- */
  Breadcrumb: 'Trilho de navegação',
  'Intelligence Marketplace': 'Mercado de inteligência',
  'Intelligence Engines': 'Motores de inteligência',
  'Product detail': 'Detalhe do produto',
  'Everything needed to decide, without a sales call':
    'Tudo o que é preciso para decidir, sem chamada comercial',
  'What you receive': 'O que recebe',
  'A real readout from this product, on seeded data':
    'Uma leitura real deste produto, sobre dados pré-carregados',
  'Every intelligence product returns the same twelve-section anatomy: executive truth, business meaning, evidence, connected signals, competitor context, commercial exposure, timing, trend, prescription, expected movement, owner and measurement.':
    'Todos os produtos de inteligência devolvem a mesma anatomia de doze secções: verdade para a administração, significado de negócio, provas, sinais interligados, contexto dos concorrentes, exposição comercial, timing, tendência, prescrição, movimento esperado, responsável e medição.',
  'One-time purchase. Placeholder pricing.':
    'Compra única. Preços provisórios.',
  'Buy this intelligence product': 'Comprar este produto de inteligência',
  'Buy {name}': 'Comprar {name}',
  'Compare with a subscription': 'Comparar com uma subscrição',
  'See the full ecosystem': 'Ver o ecossistema completo',
  'by {date}': 'até {date}',

  /* --- The eleven product fields --------------------------------------------------- */
  'Business question': 'Questão de negócio',
  'Decision consequence': 'Consequência para a decisão',
  'What it detects': 'O que deteta',
  'Required inputs': 'Dados necessários',
  Scope: 'Âmbito',
  'Intelligence depth': 'Profundidade de inteligência',
  Delivery: 'Entrega',
  'Time to delivery': 'Prazo de entrega',
  'Commercial terms': 'Condições comerciais',
  'Upgrade path': 'Caminho de evolução',
  Depth: 'Profundidade',
  Date: 'Data',
  Finding: 'Constatação',
  Engine: 'Motor',
  Observed: 'Observado',
  Live: 'Ativo',
  You: 'Vocês',

  /* Tier display labels. The component maps the lowercase discriminants
     (entry / advanced / premium) onto these before translating — see the
     TIER_LABEL note in marketplace/[slug]/page.tsx. */
  Entry: 'Base',
  'Advanced tier': 'Avançado',
  Premium: 'Premium',
  /* Depth values. Already capitalised in the seed, so no collision. */
  Snapshot: 'Instantâneo',
  Advanced: 'Aprofundado',
  Strategic: 'Estratégico',
  Executive: 'Executivo',

  /* --- Category page --------------------------------------------------------------- */
  'All intelligence categories': 'Todas as categorias de inteligência',
  'Other intelligence categories': 'Outras categorias de inteligência',
  'Every module answers one question.': 'Cada módulo responde a uma pergunta.',
  'Each returns the evidence behind its answer, what that answer means commercially, and what should change as a result.':
    'Cada um devolve as provas que sustentam a sua resposta, o que essa resposta significa comercialmente e o que deve mudar em consequência.',
  'Buy this intelligence': 'Comprar esta inteligência',
  'Take one question, or take the whole category.':
    'Leve uma pergunta, ou leve a categoria inteira.',
  'Each purchase states what it examines, what it needs from you, how confident it can be and what it costs. No sales call is required to find any of that out.':
    'Cada compra indica o que examina, o que precisa de si, com que confiança se pode pronunciar e quanto custa. Não é necessária qualquer chamada comercial para saber nada disso.',
  'One engine produces this category.': 'Um motor produz esta categoria.',
  '{n} engines produce this category.': '{n} motores produzem esta categoria.',
  'Engines are the machinery, not the offer. Nothing above required you to know one existed.':
    'Os motores são a maquinaria, não a oferta. Nada do que está acima exigia que soubesse que existia algum.',
  '{n} modules': '{n} módulos',
  '<b>{n}</b> intelligence modules in this category.':
    '<b>{n}</b> módulos de inteligência nesta categoria.',
  '<b>{n}</b> intelligence modules in this category · <b>{live}</b> running live in this environment.':
    '<b>{n}</b> módulos de inteligência nesta categoria · <b>{live}</b> em funcionamento neste ambiente.',
  Built: 'Construído',
  'In platform': 'Na plataforma',
  'In the platform': 'Na plataforma',

  /* --- Engine detail page ---------------------------------------------------------- */
  'Intelligence readout': 'Leitura de inteligência',
  'What this engine concluded': 'A que este motor chegou',
  'Signal, evidence, consequence, action': 'Sinal, prova, consequência, ação',
  'Screens this engine provides': 'Ecrãs que este motor disponibiliza',
  'Next: {name}': 'Seguinte: {name}',

  /* --- Delivery, scope and inputs -------------------------------------------------- */
  'After scan completion — typically under 20 minutes':
    'Ao concluir a análise — normalmente em menos de 20 minutos',
  'After scan completion — typically under 30 minutes':
    'Ao concluir a análise — normalmente em menos de 30 minutos',
  'After scan completion — typically under 60 minutes':
    'Ao concluir a análise — normalmente em menos de 60 minutos',
  'Expert-reviewed — within 3 business days':
    'Revisto por um especialista — em 3 dias úteis',
  'Optional: Search Console': 'Opcional: Search Console',
  'Optional: Search Console and Analytics':
    'Opcional: Search Console e Google Analytics',
  'Up to 4 competitors': 'Até 4 concorrentes',
  'Google + 6 engines': 'Google + 6 motores',
  '6 AI engines · entity and category association · 1 market':
    '6 motores de IA · associação de entidade e categoria · 1 mercado',
  '6 AI engines · 20 commercial questions · 4 competitors · 1 market':
    '6 motores de IA · 20 questões comerciais · 4 concorrentes · 1 mercado',
  '6 AI engines · 24 decision questions · 4 competitors':
    '6 motores de IA · 24 questões de decisão · 4 concorrentes',
  '6 AI engines · 24 decision questions · 5 decision stages':
    '6 motores de IA · 24 questões de decisão · 5 fases de decisão',
  '6 AI engines · 24 questions · 20 keywords · 4 competitors · full GEON assessment':
    '6 motores de IA · 24 questões · 20 termos · 4 concorrentes · avaliação GEON completa',
  '6 AI engines · 24 questions · 4 competitors · citation analysis':
    '6 motores de IA · 24 questões · 4 concorrentes · análise de citações',
  '6 AI engines · 24 questions · 5 stages · 4 competitors':
    '6 motores de IA · 24 questões · 5 fases · 4 concorrentes',
  'Public trust and reputation sources · 1 market':
    'Fontes públicas de confiança e reputação · 1 mercado',
  'Continuous monitoring, additional markets, or the full platform with history and alerts.':
    'Monitorização contínua, mercados adicionais, ou a plataforma completa com histórico e alertas.',
  'Continuous monitoring, quarterly executive regeneration, or enterprise implementation.':
    'Monitorização contínua, regeneração executiva trimestral, ou implementação empresarial.',
  'Continuous prompt monitoring and visibility trends.':
    'Monitorização contínua de consultas e tendências de visibilidade.',
  'Continuous competitor monitoring and momentum tracking.':
    'Monitorização contínua dos concorrentes e acompanhamento da dinâmica.',
  'Continuous monitoring with stage-level alerting.':
    'Monitorização contínua com alertas ao nível da fase.',
  'Competitive War Room with continuous monitoring.':
    'Sala de operações competitiva com monitorização contínua.',
  'Recognition history and decay monitoring.':
    'Histórico de reconhecimento e monitorização do desgaste.',
  'Reputation momentum and trust decay monitoring.':
    'Dinâmica de reputação e monitorização do desgaste da confiança.',
  'Interactive workspace': 'Área de trabalho interativa',
  'Downloadable intelligence brief': 'Relatório de inteligência para descarregar',
  'Expert interpretation': 'Interpretação de especialista',
  'Evidence pack': 'Dossiê de provas',
  'Action plan': 'Plano de ação',
  ' of 20': ' de 20',
  ' of 24': ' de 24',

  /* --- Product names. Descriptive rather than branded, so translated. -------------- */
  'AI Recognition Scan': 'Análise de reconhecimento por IA',
  'AI Recognition Scan | GeoRepute': 'Análise de reconhecimento por IA | GeoRepute',
  'AI Search Presence Scan': 'Análise de presença na pesquisa com IA',
  'AI Search Presence Scan | GeoRepute':
    'Análise de presença na pesquisa com IA | GeoRepute',
  'Google vs AI Gap Scan': 'Análise do desvio entre o Google e a IA',
  'Google vs AI Gap Scan | GeoRepute':
    'Análise do desvio entre o Google e a IA | GeoRepute',
  'Competitor Recommendation Scan': 'Análise das recomendações da concorrência',
  'Competitor Recommendation Scan | GeoRepute':
    'Análise das recomendações da concorrência | GeoRepute',
  'Trust Signals Scan': 'Análise dos sinais de confiança',
  'Trust Signals Scan | GeoRepute': 'Análise dos sinais de confiança | GeoRepute',
  'Decision Journey Diagnostic': 'Diagnóstico do percurso de decisão',
  'Decision Journey Diagnostic | GeoRepute':
    'Diagnóstico do percurso de decisão | GeoRepute',
  'Competitive Position Assessment': 'Avaliação da posição competitiva',
  'Competitive Position Assessment | GeoRepute':
    'Avaliação da posição competitiva | GeoRepute',
  'Executive Intelligence Brief': 'Relatório de inteligência para a administração',
  'Executive Intelligence Brief | GeoRepute':
    'Relatório de inteligência para a administração | GeoRepute',
  'Decision Reconstruction — a completed reconstruction':
    'Reconstrução da decisão — uma reconstrução concluída',
  'Mission Control → the composite Decision Health position panel':
    'Centro de comando → o painel de posição composto de Saúde da decisão',
  'One commercial question, reconstructed from what each engine understood to what must change. Anonymised demonstration data.':
    'Uma questão comercial, reconstruída desde o que cada motor compreendeu até ao que tem de mudar. Dados de demonstração anonimizados.',
  'One decision position rather than ten measures. Anonymised demonstration data.':
    'Uma posição de decisão em vez de dez medidas. Dados de demonstração anonimizados.',

  /* --- Module business questions ---------------------------------------------------
     The category page leads with the question, not the module name. */
  'Does AI understand what the business actually does?':
    'A IA percebe o que o negócio faz realmente?',
  'Do AI engines understand who the business is and what it offers?':
    'Os motores de IA percebem quem é o negócio e o que oferece?',
  'Which AI systems know the business exists, and which do not?':
    'Que sistemas de IA sabem que o negócio existe e quais não sabem?',
  'Is AI confusing the business with someone else?':
    'A IA está a confundir o negócio com outra entidade?',
  'Is AI describing a version of the business that no longer exists?':
    'A IA está a descrever uma versão do negócio que já não existe?',
  'Is the business becoming less recognised over time?':
    'O negócio está a ser cada vez menos reconhecido com o tempo?',
  'Is the business visible when customers ask for recommendations?':
    'O negócio é visível quando os clientes pedem recomendações?',
  'When a buyer describes a need, is the business in the set AI considers?':
    'Quando um comprador descreve uma necessidade, o negócio faz parte do conjunto que a IA considera?',
  'Across the questions buyers actually ask, how often does the business appear at all?':
    'Nas perguntas que os compradores realmente fazem, com que frequência o negócio sequer aparece?',
  'Of all the recommendations made in this category, what share names the business?':
    'De todas as recomendações feitas nesta categoria, que percentagem nomeia o negócio?',
  'On those same questions, does AI put the business forward at all?':
    'Nessas mesmas perguntas, a IA chega sequer a propor o negócio?',
  'Do the two discovery surfaces tell the same story about us?':
    'As duas superfícies de descoberta contam a mesma história sobre nós?',
  'Is the business aligned across traditional search and AI discovery?':
    'O negócio está alinhado entre a pesquisa tradicional e a descoberta por IA?',
  'Which commercial questions are invisible on both surfaces at once?':
    'Que questões comerciais são invisíveis nas duas superfícies ao mesmo tempo?',
  'Where does the business rank on the questions that carry commercial intent?':
    'Onde é que o negócio se posiciona nas perguntas com intenção comercial?',
  'Where does existing authority already rank but fail to reach AI?':
    'Onde é que a autoridade existente já se posiciona mas não chega à IA?',
  'What kind of gap is this, and does it deserve investment?':
    'Que tipo de lacuna é esta e merece investimento?',
  'What is the business actually paying per commercial click?':
    'Quanto está o negócio a pagar realmente por clique comercial?',
  'Above what price does a click stop making money?':
    'Acima de que preço um clique deixa de dar lucro?',
  'How much of current demand would disappear if paid search stopped tomorrow?':
    'Que parte da procura atual desapareceria se a pesquisa paga parasse amanhã?',
  'Which paid positions could be replaced by owned authority?':
    'Que posições pagas poderiam ser substituídas por autoridade própria?',
  'Is the cost of the same position rising, and how fast?':
    'O custo da mesma posição está a subir, e a que ritmo?',
  'Who is being recommended instead of the business, and how often?':
    'Quem está a ser recomendado em vez do negócio, e com que frequência?',
  'Who is recommended instead, where and why?':
    'Quem é recomendado em vez dele, onde e porquê?',
  'Why do competitors capture the decision?':
    'Porque é que os concorrentes captam a decisão?',
  'What specifically makes a competitor recommendable?':
    'O que torna um concorrente recomendável, em concreto?',
  'How much more evidence supports them than supports us?':
    'Quanto mais provas os sustentam a eles do que a nós?',
  'Which specific questions does each competitor own?':
    'Que perguntas concretas cada concorrente detém?',
  'At which stage does each competitor take control?':
    'Em que fase cada concorrente assume o controlo?',
  'Where is the leading competitor actually weak?':
    'Onde é que o concorrente líder é realmente fraco?',
  'How easily could a competitor take the narrative from us?':
    'Com que facilidade um concorrente nos poderia tirar a narrativa?',
  'Do the sources that mention the business carry any weight?':
    'As fontes que mencionam o negócio têm algum peso?',
  'How much of what the business claims can anyone else confirm?':
    'Que parte do que o negócio afirma pode ser confirmada por outra pessoa?',
  'When AI cites a source to justify an answer, is any of it yours?':
    'Quando a IA cita uma fonte para justificar uma resposta, alguma é vossa?',
  'Which sources are shaping what AI believes about the business?':
    'Que fontes estão a moldar o que a IA acredita sobre o negócio?',
  'Which trust signals strengthen or weaken recommendation readiness?':
    'Que sinais de confiança reforçam ou enfraquecem a aptidão para ser recomendado?',
  'Is the evidence supporting the business ageing?':
    'As provas que sustentam o negócio estão a envelhecer?',
  'Where does the business disappear during the buyer decision process?':
    'Onde é que o negócio desaparece durante o processo de decisão do comprador?',
  'At which point in the buying journey does presence collapse?':
    'Em que ponto do percurso de compra a presença colapsa?',
  'Which specific buying questions complete without the business ever being named?':
    'Que perguntas de compra concretas se concluem sem que o negócio seja alguma vez nomeado?',
  'How many buying decisions are actually in play?':
    'Quantas decisões de compra estão realmente em jogo?',
  'What is one of those decisions worth to the business?':
    'Quanto vale uma dessas decisões para o negócio?',
  'What is the gap worth, and how confident can we be?':
    'Quanto vale a lacuna e com que confiança o podemos afirmar?',
  'What has to be true for this estimate to hold?':
    'O que tem de ser verdade para que esta estimativa se mantenha?',
  'Which of those blind spots are also high value?':
    'Quais desses pontos cegos são também de valor elevado?',
  'Which of our genuine advantages does the market never mention?':
    'Quais das nossas vantagens reais o mercado nunca menciona?',
  'How much of the language used to describe this category belongs to the business?':
    'Que parte do vocabulário usado para descrever esta categoria pertence ao negócio?',
  'Whose framing do machines use when they explain the category?':
    'De quem é o enquadramento que as máquinas usam quando explicam a categoria?',
  'Which criteria do machines cite first when explaining a choice?':
    'Que critérios as máquinas citam primeiro ao explicar uma escolha?',
  'Does the market think the business is expensive?':
    'O mercado acha que o negócio é caro?',
  'Is this market forming, forming fast, or already settled?':
    'Este mercado está a formar-se, a formar-se depressa, ou já assentou?',
  'Do buyers know enough yet to be worth persuading?':
    'Os compradores já sabem o suficiente para valer a pena convencê-los?',
  'Which markets are ready to be entered now?':
    'Que mercados estão prontos para se entrar agora?',
  'How quickly is the position moving, and in which direction?':
    'Com que rapidez a posição se move, e em que direção?',
  'Where in the world is the business strong, and where is it absent?':
    'Onde no mundo é o negócio forte, e onde está ausente?',
  'Does the business mean the same thing in every market?':
    'O negócio significa a mesma coisa em todos os mercados?',
  'Does the business mean something different in each country?':
    'O negócio significa algo diferente em cada país?',
  'Does the business tell the same story everywhere it appears?':
    'O negócio conta a mesma história em todo o lado onde aparece?',
  'Do partners describe the business the way it describes itself?':
    'Os parceiros descrevem o negócio como ele se descreve a si próprio?',
  'How much of the market position rests on intermediaries?':
    'Que parte da posição no mercado assenta em intermediários?',
  'How easily could the business be swapped out of the channel?':
    'Com que facilidade o negócio poderia ser substituído dentro do canal?',
  'Can the channel explain why the business costs more?':
    'O canal consegue explicar porque é que o negócio custa mais?',
  'What is the complete management position on risk, opportunity, timing and action?':
    'Qual é a posição completa da gestão quanto a risco, oportunidade, timing e ação?',
  'What should the business do, in what order?':
    'O que deve o negócio fazer, e por que ordem?',
  'Which intervention returns most, and what is currently blocked?':
    'Que intervenção rende mais, e o que está bloqueado neste momento?',
  'What lands this month, this quarter, and this year?':
    'O que fica concluído este mês, este trimestre e este ano?',
  'How long before an intervention shows up in the numbers?':
    'Quanto tempo até uma intervenção aparecer nos números?',
  'Did the work move the signal it was supposed to move?':
    'O trabalho moveu o sinal que era suposto mover?',

  /* --- What each module detects, and why it matters commercially ------------------- */
  'An engine that cannot categorise a business cannot recommend it. Entity confusion sits upstream of every visibility metric — content investment cannot move an answer while the underlying record is wrong.':
    'Um motor que não consegue classificar um negócio não o consegue recomendar. A confusão de entidade situa-se a montante de qualquer métrica de visibilidade: investir em conteúdo não move uma resposta enquanto o registo de base estiver errado.',
  'Name collisions, merged records and mistaken identities — a single unresolved conflation can remove a business from every answer in its category.':
    'Colisões de nomes, registos fundidos e identidades trocadas: uma única confusão por resolver pode retirar um negócio de todas as respostas da sua categoria.',
  'Discontinued lines, closed locations, former ownership and superseded positioning still being repeated to buyers as current fact.':
    'Linhas descontinuadas, instalações encerradas, propriedade anterior e posicionamento ultrapassado, ainda repetidos aos compradores como facto atual.',
  'Recognition erodes when competitors keep publishing and you stop. Decay is measurable for months before it shows up as absence.':
    'O reconhecimento erode-se quando os concorrentes continuam a publicar e vocês param. O desgaste é mensurável durante meses antes de se manifestar como ausência.',
  'Entity understanding and recommendation presence are separate measures. An engine can resolve the business correctly and still never put it forward — recognition is necessary for a recommendation, not sufficient.':
    'A compreensão da entidade e a presença em recomendações são medidas distintas. Um motor pode identificar corretamente o negócio e mesmo assim nunca o propor: o reconhecimento é necessário para uma recomendação, mas não suficiente.',
  'Coverage measured against real buying questions rather than keywords — the difference between being findable and being present.':
    'Cobertura medida face a perguntas de compra reais e não a palavras-chave: a diferença entre poder ser encontrado e estar presente.',
  'A market-share figure for a market nobody is currently measuring — recommendations issued, not clicks received.':
    'Um número de quota para um mercado que ninguém está a medir: recomendações emitidas, não cliques recebidos.',
  'A business ranking in Google can still be absent from every AI answer that decides the vendor. The reverse is equally common. Each surface is a separate commercial asset, and channel asymmetry is invisible to both SEO and analytics tooling.':
    'Um negócio bem posicionado no Google pode continuar ausente de todas as respostas de IA que decidem o fornecedor. O inverso é igualmente comum. Cada superfície é um ativo comercial distinto, e a assimetria entre canais é invisível tanto para o SEO como para a analítica.',
  'Businesses that dominate one surface and disappear on the other — a divergence that stays invisible while each channel is reported separately.':
    'Negócios que dominam uma superfície e desaparecem na outra — uma divergência que permanece invisível enquanto cada canal for reportado em separado.',
  'The most expensive class of gap — absent from both surfaces on a question that carries real volume and real intent.':
    'A classe de lacuna mais cara: ausente das duas superfícies numa pergunta com volume real e intenção real.',
  'The cheapest wins available: questions where you have already done the work and only the machine-readable form of it is missing.':
    'Os ganhos mais baratos disponíveis: perguntas em que o trabalho já foi feito e só falta a sua forma legível por máquina.',
  'Cost per click weighted by the questions that decide purchases, rather than averaged across an account that includes cheap, irrelevant traffic.':
    'Custo por clique ponderado pelas perguntas que decidem compras, em vez de uma média sobre uma conta que inclui tráfego barato e irrelevante.',
  'A computed ceiling from deal value, margin and conversion — the number most advertising accounts are managed without ever calculating.':
    'Um teto calculado a partir do valor do negócio, da margem e da conversão — o número que a maioria das contas de publicidade nunca chega a calcular.',
  'A costed switch list — which spend can be retired, what has to be published first, and how long the replacement takes to hold.':
    'Uma lista de substituição orçamentada: que despesa pode ser retirada, o que tem de ser publicado primeiro e quanto tempo o substituto demora a firmar-se.',
  'Competitive density expressed as a price trend, so the structural cost of staying still becomes visible before the budget review.':
    'A densidade competitiva expressa como tendência de preço, para que o custo estrutural de ficar parado se torne visível antes da revisão orçamental.',
  'Whether paid is buying growth or renting positions that authority would otherwise hold for free.':
    'Se o pago está a comprar crescimento ou a alugar posições que a autoridade manteria gratuitamente.',
  'Knowing a competitor wins is not actionable. Knowing which evidence engines cite when they recommend that competitor is. This separates brand preference from an evidence gap you can close.':
    'Saber que um concorrente ganha não é acionável. Saber que provas os motores citam quando o recomendam, é. Isso separa a preferência de marca de uma lacuna de provas que se pode fechar.',
  'The individual assets a machine reaches for when it justifies choosing them — publications, comparisons, specifications, verified outcomes.':
    'Os elementos concretos a que uma máquina recorre para justificar escolhê-los: publicações, comparações, especificações, resultados verificados.',
  'Structured comparison of the evidence each competitor supplies to engines, and what it would take to match it. Converts a share gap into a specific, costed evidence programme.':
    'Comparação estruturada das provas que cada concorrente fornece aos motores e do que seria preciso para as igualar. Converte uma diferença de quota num programa de provas concreto e orçamentado.',
  'The questions a dominant rival does not answer, does not cover, or answers badly — the cheapest available places to take share.':
    'As perguntas a que um rival dominante não responde, não cobre ou responde mal — os lugares mais baratos disponíveis para ganhar quota.',
  'The share of visibility owned by partners rather than by the business, which is the share that leaves if the relationship ends.':
    'A parte da visibilidade detida por parceiros e não pelo negócio — é a parte que se vai embora se a relação terminar.',
  'Visibility creates attention; trust creates selection. A business can be found and still be filtered out when an engine has to stand behind naming it first.':
    'A visibilidade cria atenção; a confiança cria escolha. Um negócio pode ser encontrado e ainda assim ser filtrado quando um motor tem de responder por nomeá-lo em primeiro lugar.',
  'A countable ratio of independent sources, which turns an abstract brand gap into a publishing programme with a known scope and cost.':
    'Um rácio contável de fontes independentes, que transforma uma lacuna de marca abstrata num programa editorial com âmbito e custo conhecidos.',
  'Being mentioned and being cited are different commercial positions. Only one of them survives into the next answer the system gives.':
    'Ser mencionado e ser citado são posições comerciais diferentes. Só uma delas sobrevive até à resposta seguinte que o sistema dá.',
  'The small set of pages that disproportionately determine every answer given — frequently including a directory nobody at the company knows exists.':
    'O pequeno conjunto de páginas que determina de forma desproporcionada cada resposta dada — incluindo frequentemente um diretório cuja existência ninguém na empresa conhece.',
  'Proof has a shelf life. Case studies, coverage and reviews lose weight with age, and the decline is measurable before selection stops.':
    'A prova tem prazo de validade. Casos de estudo, cobertura e avaliações perdem peso com a idade, e o declínio é mensurável antes de a escolha cessar.',
  'Most businesses lose the decision at one specific stage, not evenly across the journey. Locating that stage tells you where intervention returns most, and where further investment returns nothing.':
    'A maioria dos negócios perde a decisão numa fase específica, e não de forma uniforme ao longo do percurso. Localizar essa fase indica onde a intervenção rende mais e onde continuar a investir não rende nada.',
  'Losses concentrate at one stage rather than spreading evenly. Locating that stage tells you where intervention returns, and where it returns nothing.':
    'As perdas concentram-se numa fase em vez de se distribuírem por igual. Localizar essa fase indica onde a intervenção rende e onde não rende nada.',
  'The exact questions where a decision was made and the business was not in the room. These are not lost leads; no lead was ever created.':
    'As perguntas exatas em que foi tomada uma decisão e o negócio não estava na sala. Não são contactos perdidos: nunca chegou a ser criado nenhum.',
  'Questions where the decision happens entirely without you, and where no channel measurement can show it, because nothing ever reached a channel.':
    'Perguntas em que a decisão acontece inteiramente sem vocês e que nenhuma medição de canal consegue mostrar, porque nada chegou sequer a um canal.',
  'Presence averaged across all questions hides the collapse that matters. What decides revenue is presence at the supplier-evaluation stage, and that figure is usually far lower than the headline.':
    'A presença calculada como média de todas as perguntas esconde o colapso que importa. O que decide a receita é a presença na fase de avaliação de fornecedores, e esse número costuma ser muito inferior ao anunciado.',
  'The size of the decision market itself, counted in decisions rather than in searches, sessions or impressions.':
    'A dimensão do próprio mercado de decisões, contada em decisões e não em pesquisas, sessões ou impressões.',
  'Value per decision by stage and question type, so a high-volume gap is not automatically ranked above a low-volume, high-value one.':
    'Valor por decisão consoante a fase e o tipo de pergunta, para que uma lacuna de grande volume não fique automaticamente acima de outra de baixo volume e valor elevado.',
  'A directional range with its confidence stated — never a single confident figure, and never described as confirmed lost revenue.':
    'Um intervalo indicativo com o seu grau de confiança declarado — nunca um número único e categórico, e nunca descrito como receita perdida confirmada.',
  'Every assumption behind an exposure figure, stated and editable — because a number whose assumptions are hidden cannot be argued with or trusted.':
    'Cada pressuposto por trás de um número de exposição, declarado e editável — porque com um número cujos pressupostos estão escondidos não se pode discutir nem confiar.',
  'Real differentiators that never appear in any category description — strengths the market currently has no vocabulary to express.':
    'Diferenciadores reais que não aparecem em nenhuma descrição da categoria — forças para as quais o mercado ainda não tem vocabulário.',
  'Whether buyers are evaluating against criteria a competitor published, which quietly decides the outcome before anyone is compared.':
    'Se os compradores estão a avaliar segundo critérios publicados por um concorrente, o que decide em silêncio o resultado antes de alguém ser comparado.',
  'Where the business sits on a price spectrum in the eyes of machines describing it — an assumption that shapes shortlists before any quote is sent.':
    'Onde o negócio se situa na escala de preços aos olhos das máquinas que o descrevem — um pressuposto que molda listas restritas antes de ser enviado qualquer orçamento.',
  'Demand maturity and competitive density per market, so expansion is sequenced by readiness rather than by proximity or preference.':
    'Maturidade da procura e densidade competitiva por mercado, para que a expansão seja ordenada por preparação e não por proximidade ou preferência.',
  'Rate of change rather than a snapshot, so a strong position that is deteriorating is not mistaken for a safe one.':
    'Ritmo de mudança em vez de um instantâneo, para que uma posição forte mas em deterioração não seja confundida com uma posição segura.',
  'Position measured market by market, which routinely contradicts the single global figure a company believes it has.':
    'Posição medida mercado a mercado, o que contradiz rotineiramente o único número global que uma empresa julga ter.',
  'How category, positioning and reputation change across borders, including markets where the business is understood as a different kind of company entirely.':
    'Como a categoria, o posicionamento e a reputação mudam de país para país, incluindo mercados onde o negócio é entendido como um tipo de empresa completamente diferente.',
  'Where positioning drifts by geography or language, so a business is a category leader in one market and an unknown in the next.':
    'Onde o posicionamento se desvia por geografia ou língua, ao ponto de um negócio ser líder de categoria num mercado e um desconhecido no seguinte.',
  'Where a channel partner’s description of your product is what machines have learned — and where that description is wrong.':
    'Onde a descrição que um parceiro de canal faz do vosso produto é aquilo que as máquinas aprenderam — e onde essa descrição está errada.',
  'Whether the brand is specified by name or treated as an interchangeable supplier — usually the more expensive answer of the two.':
    'Se a marca é indicada pelo nome ou tratada como fornecedor substituível — normalmente a mais cara das duas respostas.',
  'Whether the reasons for a premium survive the trip through distribution, or arrive at the buyer as an unexplained higher number.':
    'Se as razões de um preço superior sobrevivem à passagem pela distribuição ou chegam ao comprador como um número mais alto e sem explicação.',
  'A board-ready position rather than a dashboard. States what is happening, what it means commercially, what the directional exposure is, how long the window stays open, and what must change — with owners and deadlines.':
    'Uma posição pronta para a administração, não um painel. Indica o que está a acontecer, o que significa comercialmente, qual a exposição indicativa, quanto tempo a janela permanece aberta e o que tem de mudar — com responsáveis e prazos.',
  'Ranked by exposure, confidence, urgency, effort and competitor pressure.':
    'Ordenado por exposição, confiança, urgência, esforço e pressão da concorrência.',
  'The lag between doing the work and seeing the movement, which is what stops a working programme from being cancelled a month too early.':
    'O desfasamento entre fazer o trabalho e ver o movimento — é isso que impede que um programa que funciona seja cancelado um mês cedo demais.',
  'Measured change against the predicted change, including the interventions that did not work — which is the only way the model earns trust.':
    'A mudança medida face à mudança prevista, incluindo as intervenções que não resultaram — a única forma de o modelo conquistar confiança.',
  'Corroborated claims reduce the risk an engine takes in naming a supplier first.':
    'Afirmações corroboradas reduzem o risco que um motor corre ao nomear um fornecedor em primeiro lugar.',

  /* --- Readout labels and competitor findings -------------------------------------- */
  'Category description': 'Descrição da categoria',
  'Category resolved': 'Categoria resolvida',
  'Confusion and conflation': 'Confusão e sobreposição',
  'Recommendation presence': 'Presença em recomendações',
  'Recommendation share and momentum': 'Quota de recomendações e dinâmica',
  'Recommendation share by stage': 'Quota de recomendações por fase',
  'Recommendation share across 24 decision questions':
    'Quota de recomendações em 24 questões de decisão',
  'Mentions and citations': 'Menções e citações',
  'Social proof quality': 'Qualidade da prova social',
  'Source advantage analysis': 'Análise da vantagem em fontes',
  'Authority driver comparison': 'Comparação dos motores de autoridade',
  'Competitor vulnerability': 'Vulnerabilidade do concorrente',
  'Competitor control per stage': 'Controlo dos concorrentes por fase',
  'Competitive threat': 'Ameaça competitiva',
  'Default vendor threat': 'Ameaça do fornecedor por omissão',
  'Why the competitor wins': 'Porque é que o concorrente ganha',
  'Why they win': 'Porque é que ganham',
  'Winning questions': 'Perguntas ganhas',
  'Missed decision questions': 'Questões de decisão perdidas',
  'Gap classification per commercial question':
    'Classificação da lacuna por questão comercial',
  'Question-to-stage mapping': 'Correspondência entre pergunta e fase',
  'Stage-by-stage coverage': 'Cobertura fase a fase',
  'The stage where presence collapses': 'A fase em que a presença colapsa',
  'Strongest stage': 'Fase mais forte',
  'Decision-journey position': 'Posição no percurso de decisão',
  'Revenue concentration by stage': 'Concentração da receita por fase',
  'Revenue split by decision stage': 'Repartição da receita por fase de decisão',
  'Directional revenue exposure': 'Exposição indicativa da receita',
  'Paid dependency exposure': 'Exposição à dependência do pago',
  'Strategic blind spots': 'Pontos cegos estratégicos',
  'Strategic timing window': 'Janela estratégica',
  'Market and language': 'Mercado e língua',
  'What it believes': 'No que acredita',
  'Not resolved': 'Não resolvido',
  Resolved: 'Resolvido',
  'Never recommends': 'Nunca recomenda',
  Unattributed: 'Não atribuído',
  'Independent authority evidence — the constraint holding every downstream signal.':
    'Provas de autoridade independentes — a restrição que segura todos os sinais a jusante.',
  'Classified as a hardware retailer, not an MRO distributor.':
    'Classificado como loja de ferragens a retalho, e não como distribuidor de MRO.',
  'Conflated with a same-named logistics firm.':
    'Confundido com uma empresa de logística homónima.',
  'No stable entity record. Category answered without naming any Midwest distributor.':
    'Sem registo estável de entidade. A categoria foi respondida sem nomear qualquer distribuidor do Midwest.',
  'No AI engine names Northwind in nineteen of the twenty-four tracked decision questions.':
    'Nenhum motor de IA nomeia a Northwind em dezanove das vinte e quatro questões de decisão acompanhadas.',
  'Named in seventeen of the nineteen questions where Northwind is absent.':
    'Nomeado em dezassete das dezanove perguntas em que a Northwind está ausente.',
  'Kestrel named first in four of seven questions.':
    'Kestrel nomeada em primeiro lugar em quatro de sete perguntas.',
  'Receives the recommendation in 31% of decisions and controls the supplier-evaluation stage.':
    'Recebe a recomendação em 31 % das decisões e controla a fase de avaliação de fornecedores.',
  'Leads on the two most heavily weighted vectors.':
    'Lidera nos dois vetores de maior peso.',
  'Authority and Visibility are where its investment has concentrated.':
    'A autoridade e a visibilidade são onde o seu investimento se concentrou.',
  'Independent validation lets engines recommend it without hedging.':
    'A validação independente permite aos motores recomendá-la sem reservas.',
  'Advantage compounds in the absence of a response.':
    'A vantagem acumula-se na ausência de resposta.',
  'Holds position while no counter-intervention is running.':
    'Mantém a posição enquanto não houver uma contra-intervenção em curso.',
  'Meridian publishes specification guidance that engines treat as category-defining language.':
    'A Meridian publica orientações de especificação que os motores tratam como o vocabulário que define a categoria.',
  'Atlas is named on procurement checklists that engines cite at the point of purchase.':
    'A Atlas é nomeada em listas de verificação de compras que os motores citam no momento da compra.',
  'Two of six interventions are low effort with measurable movement inside 60 days.':
    'Duas das seis intervenções exigem pouco esforço e produzem movimento mensurável em menos de 60 dias.',
  'Kestrel Industrial 31%. Meridian Supply Co 18%. Halvorsen Industrial 11%. Atlas Trade Group 7%. Northwind Supply 4.2%. Unattributed 28.8%':
    'Kestrel Industrial 31 %. Meridian Supply Co 18 %. Halvorsen Industrial 11 %. Atlas Trade Group 7 %. Northwind Supply 4,2 %. Não atribuído 28,8 %',
  'Not in top 100 organic. No AI recommendation. 320 searches per month.':
    'Fora dos 100 primeiros resultados orgânicos. Sem recomendação de IA. 320 pesquisas por mês.',
  'Position 1 organic, AI present. Volume 40 per month.':
    'Posição 1 em orgânico, presença na IA. Volume de 40 por mês.',
  'Position 3 and recommended — the pattern that works.':
    'Posição 3 e recomendado — o padrão que funciona.',

  /* --- Tracked commercial keywords. Translated on the same reasoning as the
         home page's search queries — see the note beside those. ------------------- */
  'anchor bolts supplier': 'fornecedor de chumbadouros',
  'fastener catalog request': 'pedido de catálogo de fixadores',
  'fastener sourcing best practices':
    'boas práticas de aprovisionamento de fixadores',
  'industrial distributor fill rate':
    'taxa de satisfação de encomendas de distribuidor industrial',
  'industrial supply account setup': 'abrir conta de fornecimento industrial',
  'industrial supply near me': 'fornecimento industrial perto de mim',
  'maintenance repair operations supplier':
    'fornecedor de manutenção reparação e operação',
  'mro consolidation vendor': 'fornecedor para consolidação de MRO',
  'mro supply agreement': 'contrato de fornecimento de MRO',
  'plant maintenance supplies': 'consumíveis de manutenção fabril',
  'same day fastener shipping': 'expedição de fixadores no próprio dia',
  'stainless steel fasteners supplier': 'fornecedor de fixadores em inox',
}
