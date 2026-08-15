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
  'Decision Health Index 41 → 56/100': 'Índice de saúde da decisão 41 → 56/100',
  Composite: 'Compósito',
  'Composite model': 'Modelo compósito',
  'Index weighting': 'Ponderação do índice',
  'GEON vectors': 'Vetores GEON',
  'GEON Authority': 'Autoridade GEON',
  'GEON Trust': 'Confiança GEON',
  'GEON Authority 28 → 45/100': 'Autoridade GEON 28 → 45/100',
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
  'Average recognition score 38 → 55/100':
    'Pontuação média de reconhecimento 38 → 55/100',
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
  'Publish a canonical entity description and propagate identical…':
    'Publique uma descrição canónica da entidade e propague linguagem idêntica…',
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
  'Recommendation share 4.2 → 11%': 'Quota de recomendações 4,2 → 11%',
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
  'Supplier-evaluation coverage 7 → 19%':
    'Cobertura na avaliação de fornecedores 7 → 19%',
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
  'Competitor Decision Intelligence': 'Inteligência de decisões da concorrência',
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
  'Narrative Intelligence': 'Inteligência da narrativa',
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
}
