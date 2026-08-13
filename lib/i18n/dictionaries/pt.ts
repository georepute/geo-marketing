import type { DictionaryMeta, PartialDictionary } from '../types'

/* ============================================================================
   Portuguese (pt) — LTR, European Portuguese (pt-PT).

   Translated against lib/i18n/GLOSSARY.md. Formal register, addressed to an
   executive reader.

   NOTE ON VARIANT. This is pt-PT, matching the `intl` setting in
   lib/i18n/config.ts. If Brazil becomes a target market, add `pt-BR` as its
   own locale rather than compromising between the two — the vocabulary
   differences in a commercial register are large enough to read as wrong in
   both.

   NOT YET REVIEWED BY A NATIVE SPEAKER.
   ========================================================================= */

export const meta: DictionaryMeta = {
  reviewed: false,
  notes:
    'Complete first-pass translation, European Portuguese (pt-PT). Requires native review against lib/i18n/GLOSSARY.md before launch. If Brazil is a target, add pt-BR as a separate locale rather than blending the two.',
}

export const dictionary: PartialDictionary = {
  /* --- §19 core commercial copy ---------------------------------------- */
  category: 'O SISTEMA OPERATIVO DE INTELIGÊNCIA DE DECISÃO',
  heroPrimary: 'Veja onde a sua empresa é reconhecida, recomendada e escolhida.',
  heroContinuation: 'E onde a decisão segue para outro lado.',
  categoryPositioning:
    'As plataformas tradicionais otimizam canais. A GeoRepute reconstrói decisões.',
  analyticsDisruption: 'As suas análises começam demasiado tarde.',
  aiRecognition: 'Os motores de IA compreendem o que é a sua empresa?',
  aiPresence: 'Está presente quando os clientes perguntam à IA quem escolher?',
  googleVsAi: 'Uma empresa pode existir na IA e desaparecer no Google.',
  competitors:
    'Veja onde os concorrentes recebem a decisão antes de si receber o contacto.',
  narrative: 'Quando o mercado explica a sua categoria, de quem é a linguagem que usa?',
  searchEconomics:
    'Saiba quando a pesquisa paga se torna demasiado cara para se justificar.',
  trust: 'A visibilidade cria atenção. A confiança cria escolha.',
  opportunity: 'Nem toda a lacuna de visibilidade merece ser corrigida.',
  timing: 'A decisão certa no momento errado continua a ser a decisão errada.',
  action: 'A plataforma não termina na conclusão.',
  marketplace: 'Compre a inteligência de que precisa.',
  partner: 'Construa um negócio recorrente em torno da inteligência de decisão.',
  signatureExperience: 'Reconstrua a decisão.',
  finalCta: 'Não deixe o mercado decidir o que é a sua empresa sem si.',

  /* --- Home ------------------------------------------------------------- */
  home: {
    heroCtaPrimary: 'Analisar a minha empresa',
    heroCtaSecondary: 'Explorar produtos de inteligência',
    heroCtaEnterprise: 'Marcar uma sessão executiva',
    disruptionSub:
      'A decisão do cliente começa muitas vezes antes de existir uma visita, um clique, um contacto ou um registo no CRM.',
    liveEntry: 'Veja o que o mercado compreende sobre a sua empresa.',
    liveEntrySub: 'Introduza um domínio e obtenha uma pré-visualização imediata e controlada.',
    googleVsAiFull:
      'Uma empresa pode existir na IA e desaparecer no Google. Ou dominar o Google e desaparecer quando os compradores perguntam à IA.',
    googleVsAiSub:
      'Duas superfícies de descoberta, como dois ativos comerciais distintos.',
    graph: 'Uma decisão. Muitos sinais. Uma explicação.',
    graphSub:
      'Como se ligam a IA, o Google, a aquisição paga, os concorrentes, a narrativa, a confiança, a geografia e o conteúdo.',
    engines: 'Doze motores de inteligência. Um sistema operativo.',
    enginesSub:
      'Cada motor é apresentado pela questão de negócio a que responde.',
    marketplaceSub:
      'É possível adquirir um diagnóstico focado sem se comprometer com a plataforma completa.',
    competitorCapture:
      'Veja onde os concorrentes recebem a decisão antes de si receber o contacto.',
    executive: 'Não mais dados. Uma posição de decisão.',
    finalCtaSub: 'Escolha o caminho certo.',
    finalRoutes: [
      'Iniciar a minha análise',
      'Comprar um produto de inteligência',
      'Marcar uma sessão empresarial',
      'Aderir à rede de parceiros',
    ],
  },

  /* --- Executive frame -------------------------------------------------- */
  exec: {
    q1: 'A IA conhece a sua empresa?',
    q2: 'Onde está a perder decisões?',
    q3: 'Porque é que recomendam o seu concorrente em vez de si?',
    q4: 'Porque é que a IA ainda não confia em si?',
    q5: 'Quanto tempo resta?',
    q6: 'O que deve acontecer a seguir?',
    q7: 'Qual é a posição executiva?',

    prescriptionLabel: 'Prescrição executiva',
    interventionLabel: 'Intervenção estratégica',
    recoveryLabel: 'Plano de recuperação de decisões',
    windowLabel: 'Janela estratégica',
    actionPlanLabel: 'Plano de ação executivo',
    positionLabel: 'Posição executiva',

    kpiWhat: 'O que é',
    kpiWhy: 'Porque importa',
    kpiImpact: 'Impacto comercial',

    decisionHealthDefinition:
      'A saúde de decisão mede se os sistemas de IA conseguem reconhecer, verificar e recomendar com segurança a sua empresa no momento em que um comprador escolhe um fornecedor.',
    strategicWindowDefinition:
      'A janela estratégica é o período em que a linguagem da categoria ainda se está a formar. A autoridade construída dentro dela torna-se a resposta por omissão. A construída depois tem de deslocar uma recomendação já instalada, o que custa consideravelmente mais.',

    everyFigureCaption:
      'Cada número traz consigo as suas evidências, o seu nível de confiança e os limites do que pode afirmar.',
  },

  /* --- Navigation ------------------------------------------------------- */
  nav: {
    engines: 'Motores de inteligência',
    marketplace: 'Mercado de inteligência',
    methodology: 'Metodologia',
    pricing: 'Preços',
    signIn: 'Iniciar sessão',
    startAnalysis: 'Iniciar análise',

    groups: [
      {
        label: 'Plataforma',
        summary: 'O próprio ambiente de decisão.',
        items: [
          {
            label: 'Centro de comando executivo',
            description:
              'Dez medidas, uma posição de decisão, e cada uma abre as suas evidências.',
          },
          {
            label: 'Reconstrução da decisão',
            description:
              'Introduza um domínio, escolha uma questão comercial e veja a decisão a ser reconstruída.',
          },
          {
            label: 'Preparação da campanha',
            description:
              'Devemos lançar esta campanha hoje? Avalia-se a empresa, não a campanha.',
          },
          {
            label: 'Inteligência narrativa',
            description: 'Que história conta o mercado e como influencia as decisões?',
          },
          {
            label: 'Centro de ação estratégica',
            description:
              'Intervenções priorizadas com responsáveis, prazos e medição.',
          },
          {
            label: 'Inteligência eleitoral',
            description:
              'Que narrativas movem o eleitorado, quem as sustenta e o que tem de mudar.',
          },
        ],
        feature: {
          eyebrow: 'Experiência distintiva',
          title: 'Reconstrua a decisão.',
          body: 'Dez superfícies, uma questão comercial, do que cada motor compreendeu ao que tem de mudar.',
          cta: 'Abrir a reconstrução',
        },
      },
      {
        label: 'Motores de inteligência',
        summary: 'Doze motores. Quatro construídos neste ambiente.',
        items: [
          {
            label: 'Reconhecimento por IA',
            description: 'Os motores de IA compreendem quem é a empresa?',
          },
          {
            label: 'Visibilidade Google versus IA',
            description:
              'Existe de forma coerente em ambas as superfícies de descoberta?',
          },
          {
            label: 'Decisão do concorrente',
            description: 'Quem recebe a decisão em vez de si, e porquê?',
          },
          {
            label: 'Inteligência de ação',
            description: 'O que tem de acontecer a seguir, por quem e até quando?',
          },
        ],
        allLabel: 'Ver os doze motores',
      },
      {
        label: 'Mercado',
        summary:
          'Inteligência para questões que a maioria das empresas nunca mediu.',
        items: [
          {
            label: 'Inteligência de visibilidade na IA',
            description: 'A IA sabe que a empresa existe e o que julga que ela é?',
          },
          {
            label: 'Inteligência competitiva',
            description: 'Quem recebe a decisão em vez de si, e o que tem?',
          },
          {
            label: 'Inteligência executiva',
            description: 'Quanto vale e o que acontece a seguir?',
          },
        ],
        allLabel: 'Ver todo o ecossistema de inteligência',
      },
    ],

    flat: [
      { label: 'Como funciona' },
      { label: 'Metodologia' },
      { label: 'Preços' },
    ],
  },

  /* --- Commerce --------------------------------------------------------- */
  commerce: {
    briefingCta: 'Marcar uma sessão de inteligência',
    briefingCtaShort: 'Marcar sessão',
    termsOnRequest: 'As condições comerciais são fornecidas mediante pedido.',
    termsOnRequestLong:
      'O âmbito, a profundidade e as condições comerciais são definidos face às questões a que precisa de responder. Ambos são confirmados na sessão.',
  },

  /* --- Briefing and booking --------------------------------------------- */
  briefing: {
    eyebrow: 'Sessão executiva',
    title: 'Veja o ambiente de decisão em que a sua empresa está a ser avaliada.',
    sub: 'Uma sessão de trabalho sobre o seu próprio mercado, não uma demonstração do produto. Reconstruímos uma decisão comercial da sua categoria e mostramos-lhe o que a determinou.',
    covers: 'O que a sessão abrange',
    coversItems: [
      'Como os motores de IA descrevem hoje a sua empresa, motor a motor.',
      'Uma decisão de compra real da sua categoria, reconstruída de ponta a ponta.',
      'Que concorrente recebe hoje essa decisão e as evidências que o colocam aí.',
      'As lacunas entre os dois, ordenadas por consequência comercial.',
      'O que teria de mudar, por que ordem e como o movimento seria medido.',
    ],
    who: 'A quem se destina',
    whoBody:
      'A equipas executivas responsáveis pela posição no mercado e aos estrategas que as aconselham. Não exige preparação.',
    duration: '45 minutos',
    durationLabel: 'Duração',
    formatLabel: 'Formato',
    format: 'Videochamada',
    costLabel: 'Custo',
    cost: 'Nenhum',

    scheduleLabel: 'Agendar a sessão',
    pickDate: 'Escolha uma data',
    pickTime: 'Escolha uma hora',
    noTimes: 'Não há horas disponíveis nesta data.',
    loadingTimes: 'A verificar disponibilidade…',
    timeZoneNote: 'Horas apresentadas no seu fuso horário',
    noticeNote: 'A sessão disponível mais próxima é daqui a 48 horas.',
    nameLabel: 'Nome completo',
    emailLabel: 'E-mail profissional',
    orgLabel: 'Organização',
    notesLabel: 'O que gostaria que a sessão abordasse?',
    optional: 'Opcional',
    submit: 'Confirmar a sessão',
    submitting: 'A confirmar…',
    back: 'Alterar a hora',

    confirmedTitle: 'A sessão está confirmada.',
    confirmedBody:
      'Segue um convite de calendário para a sua caixa de correio e para a nossa. As ligações para remarcar e cancelar estão nessa mensagem.',
    confirmedAdd: 'Marcada para',

    errorConflict:
      'Essa hora foi ocupada enquanto preenchia os dados. Escolha outra e nada mais se perde.',
    errorInvalid: 'Verifique os dados e tente novamente.',
    errorUpstream:
      'Não foi possível contactar o calendário. Tente daqui a instantes ou escreva-nos e marcamos diretamente.',

    unconfiguredTitle: 'As marcações abrem em breve.',
    unconfiguredBody:
      'Entretanto, inicie a reconstrução no seu próprio domínio. A sessão parte do que ela revelar.',
  },

  /* --- Blog ------------------------------------------------------------- */
  blog: {
    eyebrow: 'Notas de inteligência',
    title: 'Notas de inteligência',
    lede: 'Textos sobre como as empresas são reconhecidas, avaliadas, recomendadas e escolhidas — e o que se pode fazer quanto a isso.',
    readTime: 'min de leitura',
    more: 'Mais notas de inteligência',
    empty: 'Os primeiros artigos estão a ser preparados.',
    ctaBody: 'Todos os argumentos deste site podem ser verificados no seu mercado.',
  },

  /* --- Ecosystem -------------------------------------------------------- */
  ecosystem: {
    label: 'Ecossistema',
    partners: [
      { description: 'O grupo por trás da GeoRepute.' },
      { description: 'Criação de conteúdo e media.' },
      { description: 'Medição da perceção.' },
    ],
  },

  /* --- Product shell ---------------------------------------------------- */
  appNav: {
    ariaLabel: 'Produto',
    exit: 'Sair',
    observed: 'Observado a',
    environment:
      'Ambiente de demonstração com dados iniciais · Metodologia GEON-2.4',
    methodologyLink: 'Como se chega a estas conclusões',
    items: [
      { label: 'Centro de comando' },
      { label: 'Reconstrução da decisão' },
      { label: 'Preparação da campanha' },
      { label: 'Inteligência narrativa' },
      { label: 'Centro de ação' },
    ],
  },

  /* --- Accessible names ------------------------------------------------- */
  a11y: {
    skipToContent: 'Saltar para o conteúdo',
    openMenu: 'Abrir o menu',
    closeMenu: 'Fechar o menu',
    navigate: 'Navegar',
    primaryNav: 'Principal',
    mobileNav: 'Móvel',
    footerNav: 'Rodapé',
    breadcrumb: 'Trilho de navegação',
  },

  language: {
    label: 'Idioma',
    choose: 'Escolha um idioma',
    current: 'Idioma atual',
  },

  /* --- Readout anatomy -------------------------------------------------- */
  readout: {
    executiveTruth: 'Verdade executiva',
    businessMeaning: 'Significado comercial',
    evidence: 'Evidências',
    connectedSignals: 'Sinais ligados',
    competitorContext: 'Contexto competitivo',
    commercialExposure: 'Exposição comercial',
    timing: 'Momento',
    trend: 'Tendência',
    prescription: 'Prescrição',
    expectedMovement: 'Movimento esperado',
    ownerDeadline: 'Responsável e prazo',
    measurement: 'Medição',
    showEvidence: 'Mostrar evidências',
    hideEvidence: 'Ocultar evidências',
    howDetermined: 'Como foi determinado',
  },

  /* --- Confidence ------------------------------------------------------- */
  confidence: {
    high: {
      label: 'Confiança elevada',
      definition:
        'Várias fontes de evidência atuais e fiáveis sustentam a conclusão.',
    },
    medium: {
      label: 'Confiança média',
      definition:
        'As evidências são significativas mas parcialmente estimadas ou incompletas.',
    },
    directional: {
      label: 'Indicativo',
      definition:
        'Útil para priorizar; não é um facto auditado nem verificado.',
    },
    'insufficient-history': {
      label: 'Histórico insuficiente',
      definition:
        'A plataforma abstém-se de conclusões preditivas até existirem evidências suficientes.',
    },
  },

  /* --- Exposure. The negation must survive translation. ----------------- */
  exposure: {
    label: 'Exposição comercial indicativa',
    caption: 'Estimativa indicativa — não é receita perdida confirmada.',
    assumptionsLabel: 'Pressupostos',
    formulaLabel: 'Modelo',
    formula:
      'Procura × Lacuna de decisão × Conversão estimada × Valor médio do negócio',
    limitation:
      'Todos os valores são apresentados como intervalos. Nenhum valor é descrito como receita perdida confirmada. Cada modelo expõe os seus pressupostos e os limites dos seus dados.',
  },

  roleLens: {
    label: 'Profundidade',
    executive: 'Direção',
    analyst: 'Analista',
    operator: 'Operador',
    hint: 'Altera o detalhe aberto por omissão. Nenhum dado é ocultado.',
  },

  /* --- The Closed Loop (doc §9/§10) ------------------------------------- */
  loop: {
    navLabel: 'Como funciona',
    eyebrow: 'O circuito fechado da GeoRepute',
    title: 'Da inteligência à execução. Da execução de volta à inteligência.',
    lede: 'A GeoRepute não se limita a analisar o que está a acontecer. Compreende porque está a acontecer, decide o que tem de mudar, executa a estratégia, mede o que mudou — e usa o resultado para decidir o que acontece a seguir.',

    fragmentedLabel: 'O modelo desligado',
    fragmentedLede: 'A maioria das empresas opera através de sistemas desligados.',
    fragmentedItems: [
      'Uma plataforma mede o Google.',
      'Outra monitoriza a IA.',
      'Outra analisa os concorrentes.',
      'Alguém constrói a estratégia.',
      'Outra pessoa cria o conteúdo.',
      'Outro sistema distribui-o.',
      'A analítica mede o que aconteceu depois.',
    ],
    fragmentedClose:
      'Sistemas diferentes. Equipas diferentes. Dados diferentes. Objetivos diferentes. E muitas vezes nenhuma ligação direta entre o diagnóstico inicial e o resultado final.',

    connectedLede: 'A GeoRepute liga todo o ciclo de decisão.',
    connectedBody:
      'Começa com inteligência profunda sobre a empresa, o mercado, os concorrentes, os clientes, o Google, os motores de IA e o ambiente digital mais amplo. Transforma essa inteligência numa estratégia construída em torno de objetivos de negócio definidos. Depois cria e distribui o conteúdo e os media necessários para executar essa estratégia. Depois mede se essas ações alteraram de facto os sinais que deviam alterar. E o que o sistema aprende torna-se a inteligência do ciclo seguinte.',

    cycle: 'PLANEAR → EXECUTAR → VERIFICAR → CORRIGIR → REPETIR',
    cycleSub: 'Um circuito contínuo da inteligência à execução.',

    stages: [
      {
        name: 'PLANEAR',
        headline: 'Compreenda a realidade antes de decidir o que fazer.',
        lede: 'Cada ciclo começa com um diagnóstico profundo. A GeoRepute analisa e liga inteligência sobre a empresa, os seus concorrentes, o seu mercado e os ambientes digitais que influenciam as decisões dos clientes.',
        signalsLabel: 'O sistema analisa sinais provenientes de',
        signals: [
          'Motores de IA',
          'Google',
          'Pesquisa',
          'Concorrentes',
          'Mercado',
          'Presença digital',
          'Autoridade',
          'Confiança',
          'Narrativas',
          'Conteúdo',
          'Perguntas dos clientes',
          'Percursos de decisão',
          'Fontes digitais',
          'Idiomas',
          'Dados de negócio ligados',
        ],
        connective:
          'Não olha para estes sinais isoladamente: liga-os para reconstruir o quadro maior.',
        question: 'O que compreende realmente o mercado sobre a sua empresa?',
        determinesLabel: 'A GeoRepute determina',
        determines: [
          'Como a empresa é compreendida e representada',
          'O que os motores de IA sabem sobre ela',
          'Quando a IA a recomenda — e quando não',
          'O que o Google mostra nos momentos críticos',
          'Com o que os clientes se deparam antes sequer de chegarem ao site',
          'Que perguntas influenciam a decisão de compra',
          'Onde a empresa entra no conjunto considerado',
          'Onde desaparece',
          'Que concorrentes recebem a decisão em vez dela',
          'Porque são escolhidos esses concorrentes',
          'Que fontes e evidências os reforçam',
          'Que narrativas moldam a categoria',
          'Onde faltam confiança e autoridade',
          'Onde existem lacunas de informação',
          'Que audiências estão a ser alcançadas',
          'Que oportunidades permanecem abertas',
          'Que ameaças estão a surgir',
          'O que está a mudar no mercado',
          'E que sinais têm de mudar para aproximar a empresa do seu objetivo',
        ],
        outcomeLabel: 'A inteligência torna-se estratégia.',
        outcome:
          'O cliente define os objetivos. A GeoRepute determina o caminho. O sistema transforma o diagnóstico numa estratégia focada e num plano de execução priorizado em torno desses objetivos.',
        notThis: '«O que publicamos este mês?»',
        butThis: [
          'O que tem de mudar?',
          'Porque tem de mudar?',
          'Quem precisa de se deparar com isso?',
          'Onde deve deparar-se com isso?',
          'O que tem de existir aí?',
          'E que sinal mensurável deve mover-se se a estratégia funcionar?',
        ],
      },
      {
        name: 'EXECUTAR',
        headline:
          'Não crie o que a empresa quer dizer. Crie aquilo com que o cliente precisa de se deparar.',
        lede: 'É aqui que a inteligência se torna execução. A GeoRepute não parte de um calendário de conteúdos em branco, mas das lacunas descobertas no planeamento.',
        signalsLabel: 'Publicado nos ativos digitais ligados',
        signals: [
          'Site',
          'Plataformas sociais',
          'Artigos',
          'Perfis de empresa',
          'Ambientes de conteúdo',
          'Canais de publicação ligados',
        ],
        connective:
          'O sistema compreende o que falta entre a empresa e a decisão que pretende influenciar.',
        question: 'Com o que tem o cliente de se deparar para decidir de outra forma?',
        determinesLabel: 'Determina',
        determines: [
          'Que informação falta aos clientes',
          'A que perguntas é preciso responder',
          'Que narrativas criar, reforçar ou corrigir',
          'Que objeções há que responder',
          'Que sinais de confiança têm de existir',
          'Que lacunas de autoridade há que fechar',
          'Que conteúdo é necessário',
          'Que media são necessários',
          'Que formato serve o objetivo',
          'Que audiência tem de se deparar com isso',
          'Em que idioma',
          'Em que fase do percurso de decisão',
          'Em que ativo ou canal digital',
          'E em que sequência',
        ],
        outcomeLabel: 'Depois a GeoRepute executa.',
        outcome:
          'O sistema gera o conteúdo e os media necessários segundo a estratégia e distribui-os e publica-os nos ativos digitais ligados da empresa ou do projeto. Cada ativo existe por uma razão. Cada peça de conteúdo está ligada a uma lacuna identificada. Cada ação está ligada a um objetivo definido. Cada objetivo está ligado a um sinal cuja alteração o sistema espera.',
        notThis: 'O conteúdo é a estratégia.',
        butThis: ['O conteúdo é a camada de execução da inteligência.'],
      },
      {
        name: 'VERIFICAR',
        headline: 'Não meça o que foi publicado. Meça o que mudou.',
        lede: 'Publicar não é sucesso. Visualizações não são sucesso. Concluir uma ação não é sucesso. A questão é se a ação alterou a razão pela qual foi criada.',
        signalsLabel: 'O sistema compara',
        signals: ['ANTES', 'AÇÃO', 'DEPOIS'],
        connective:
          'Após a execução, a GeoRepute regressa ao ambiente e mede-o de novo. Verifica se os sinais visados se moveram de facto.',
        question: 'Os sinais que esta ação foi criada para mover moveram-se?',
        determinesLabel: 'Pergunta',
        determines: [
          'A compreensão da IA mudou?',
          'A presença em recomendações aumentou?',
          'A empresa entrou em decisões de que antes estava ausente?',
          'A autoridade reforçou-se?',
          'A confiança melhorou?',
          'A narrativa moveu-se?',
          'A visibilidade no Google mudou?',
          'Os clientes começaram a deparar-se com a informação em falta?',
          'A distância competitiva diminuiu?',
          'O mesmo concorrente continua a receber a decisão?',
          'O mercado respondeu como esperado?',
        ],
        outcomeLabel:
          'A GeoRepute mede o impacto da sua própria execução face ao diagnóstico inicial.',
        outcome:
          'Isso cria uma ligação direta entre o que o sistema descobriu, o que decidiu, o que executou e o que mudou de facto.',
        notThis: 'Concluir a ação.',
        butThis: ['Mover o sinal para o qual a ação foi criada.'],
      },
      {
        name: 'CORRIGIR',
        headline: 'O resultado torna-se a inteligência da decisão seguinte.',
        lede: 'O mercado já mudou. Por isso a estratégia não pode manter-se estática. A GeoRepute devolve os novos resultados à sua camada de inteligência.',
        signalsLabel: 'Com base nessa nova realidade, a GeoRepute pode ajustar',
        signals: [
          'Estratégia',
          'Prioridades',
          'Narrativas',
          'Mensagens',
          'Conteúdo',
          'Media',
          'Distribuição',
          'Canais',
          'Calendário',
          'Sinais visados',
          'As ações seguintes',
        ],
        connective:
          'O que funciona pode ser reforçado. O que não produz o movimento esperado pode ser alterado. Novas oportunidades entram no plano. Novos riscos são tratados.',
        question: 'O que deve acontecer agora, e porquê?',
        determinesLabel: 'O sistema determina',
        determines: [
          'O que funcionou.',
          'O que não funcionou.',
          'O que se moveu.',
          'O que não se moveu o suficiente.',
          'O que mudou no mercado.',
          'O que os concorrentes mudaram.',
          'Que novas lacunas apareceram.',
          'E o que deve acontecer a seguir.',
        ],
        outcomeLabel: 'E o sistema corre de novo.',
        outcome:
          'PLANEAR → EXECUTAR → VERIFICAR → CORRIGIR → PLANEAR. O resultado de um ciclo torna-se a inteligência do seguinte.',
        notThis: 'Uma estratégia construída uma só vez.',
        butThis: ['Uma estratégia que volta a decidir-se em cada ciclo.'],
      },
    ],

    stepsLabel: 'O circuito fechado',
    stepsSub: 'Um sistema. Um ciclo de aprendizagem contínuo.',
    steps: [
      {
        name: 'COMPREENDER',
        body: 'Diagnóstico profundo da empresa, do mercado, dos concorrentes e do ambiente de decisão.',
      },
      {
        name: 'DECIDIR',
        body: 'Transformar a inteligência numa estratégia alinhada com objetivos definidos.',
      },
      { name: 'CRIAR', body: 'Gerar o conteúdo e os media que a estratégia exige.' },
      {
        name: 'DISTRIBUIR',
        body: 'Publicar nos ativos e canais digitais ligados.',
      },
      {
        name: 'MEDIR',
        body: 'Voltar a analisar o ambiente e medir o que mudou de facto.',
      },
      {
        name: 'APRENDER',
        body: 'Compreender que ações moveram os sinais visados e quais não.',
      },
      {
        name: 'CORRIGIR',
        body: 'Ajustar estratégia, conteúdo, distribuição e prioridades.',
      },
    ],
    stepsClose: 'Cada ciclo torna o ciclo seguinte mais informado.',

    movementLabel: 'Antes → Ação → Depois',
    movementCaption:
      'Movimento ilustrativo ao longo de um ciclo. Dados de demonstração — não é um resultado de cliente.',
    movementColumns: ['Sinal', 'Antes', 'Depois', 'Alvo'],

    whyLabel: 'Porque isto muda o modelo',
    whyTraditionalLabel: 'O modelo tradicional está fragmentado',
    whyTraditional:
      'Investigação → Estratégia → Agência → Conteúdo → Distribuição → Analítica → Reunião → Nova estratégia',
    whyClosedLabel: 'A GeoRepute fecha a lacuna',
    whyClosed:
      'Inteligência → Decisão → Execução → Medição → Aprendizagem → Correção',
    whyBody:
      'A mesma inteligência que identifica o problema orienta a estratégia. A estratégia determina o que é criado. A execução é medida face ao objetivo inicial. E o resultado determina o que o sistema faz a seguir.',

    notEngineLabel: 'Não é mais um motor de conteúdo',
    notEngineHeadline: 'O conteúdo é um produto. A inteligência é o cérebro.',
    notEngineBody:
      'A GeoRepute não foi concebida para produzir mais conteúdo. Foi concebida para determinar o que tem de existir no mercado para influenciar a decisão seguinte.',
    notEngineItems: [
      'Por vezes isso exige conteúdo.',
      'Por vezes autoridade.',
      'Por vezes evidências.',
      'Por vezes uma correção de narrativa.',
      'Por vezes responder a perguntas que os clientes não conseguem resolver.',
      'Por vezes reforçar uma propriedade digital concreta.',
      'Por vezes fechar uma lacuna competitiva.',
    ],
    notEngineClose:
      'O sistema decide a partir da inteligência. Depois executa o que a estratégia exige.',

    differenceLabel: 'A diferença',
    difference: [
      { term: 'A analítica', says: 'diz-lhe o que aconteceu.' },
      { term: 'A inteligência', says: 'diz-lhe porquê.' },
      { term: 'A estratégia', says: 'diz-lhe o que deve mudar.' },
      { term: 'A execução', says: 'realiza a mudança.' },
      { term: 'A medição', says: 'diz-lhe se resultou.' },
    ],
    differenceClose: 'A GeoRepute liga as cinco — e volta a correr o ciclo.',

    livingLabel: 'De um instantâneo a uma estratégia viva',
    livingItems: [
      'Os mercados movem-se.',
      'Os concorrentes movem-se.',
      'As perguntas dos clientes mudam.',
      'O Google muda.',
      'Os sistemas de IA mudam.',
      'As narrativas mudam.',
      'A informação em torno de uma empresa muda.',
    ],
    livingBody:
      'Uma estratégia construída uma só vez não consegue responder continuamente a um mercado que nunca para de se mover. A GeoRepute transforma a estratégia de documento estático em sistema vivo.',
    livingVerbs: [
      'Observa.',
      'Compreende.',
      'Decide.',
      'Executa.',
      'Mede.',
      'Aprende.',
      'Adapta-se.',
    ],

    ctaHeadline: 'Veja o circuito fechado em ação.',
    ctaBody:
      'Não fique por mais um painel. Veja como a GeoRepute passa da inteligência à estratégia, da estratégia à execução, e da execução de volta a inteligência mensurável.',
    ctaPrimary: 'Marcar uma demonstração ao vivo',
    ctaSecondary: 'Ver como funciona a GeoRepute',

    homeEyebrow: 'O circuito fechado',
    homeHeadline:
      'A análise é onde a maioria das plataformas para. É onde esta começa.',
    homeSub:
      'A GeoRepute diagnostica o ambiente de decisão, transforma-o em estratégia, executa-a, mede se os sinais visados se moveram de facto e usa o resultado para decidir o que acontece a seguir.',
    homeCta: 'Ver como funciona o circuito',
  },

  /* --- Election Intelligence (doc §3) ----------------------------------- */
  election: {
    navLabel: 'Inteligência eleitoral',
    eyebrow: 'Inteligência eleitoral em tempo real',
    title: 'Saiba o que está a mover a eleição — e o que a fará voltar.',
    lede: 'A GeoRepute reconstrói como se forma realmente uma posição política: que narrativas circulam, quem as sustenta, que audiências se movem e o que tem de mudar para as trazer de volta.',

    keyMessageLabel: 'A distinção que importa',
    keyMessageNot: 'O sistema não se limita a mostrar o que está a acontecer.',
    keyMessage:
      'Explica porque está a mudar a posição política, quem a influencia, onde se perde ou se ganha apoio e o que deve ser feito agora para mudar a direção.',

    forLabel: 'Concebido para',
    audiences: [
      {
        name: 'Eleições nacionais',
        body: 'Inteligência narrativa e de perceção à escala do país, em cada idioma e região em jogo.',
      },
      {
        name: 'Eleições locais',
        body: 'Resolução ao nível do círculo, onde alguns milhares de indecisos decidem o lugar.',
      },
      {
        name: 'Partidos políticos',
        body: 'A perceção do partido medida separadamente dos candidatos que a sustentam.',
      },
      {
        name: 'Candidatos',
        body: 'Como um candidato é compreendido, descrito e recomendado nas superfícies que os eleitores usam de facto.',
      },
      {
        name: 'Sedes de campanha',
        body: 'Uma única imagem operacional com que toda a campanha trabalha, atualizada à medida que o ambiente se move.',
      },
      {
        name: 'Estrategas políticos',
        body: 'As evidências por trás de uma decisão estratégica, com pressupostos e limites declarados.',
      },
      {
        name: 'Salas de operações eleitorais',
        body: 'Movimento narrativo em direto, riscos emergentes e respostas priorizadas na janela decisiva.',
      },
    ],

    capabilitiesLabel: 'O que o sistema analisa',
    capabilitiesSub:
      'Cada capacidade abaixo é uma pergunta que a campanha pode colocar ao sistema e obter uma resposta sustentada em evidências.',
    capabilities: [
      {
        name: 'Perceção e narrativa',
        question: 'O que está realmente a ser dito ao eleitorado sobre este candidato?',
        items: [
          'Perceção pública',
          'Narrativas políticas',
          'Narrativas positivas e negativas',
          'Movimento narrativo',
          'Perceção do candidato e do partido',
        ],
      },
      {
        name: 'Adversário e influência',
        question: 'Quem reforça a posição e quem a prejudica?',
        items: [
          'Narrativas de concorrentes e adversários',
          'Quem reforça um candidato ou partido',
          'Quem os prejudica',
          'Media e fontes de informação online',
          'Sinais sociais e digitais',
        ],
      },
      {
        name: 'Movimento de audiências',
        question: 'Que eleitores se movem, em que direção e por causa de quê?',
        items: [
          'Que audiências se aproximam',
          'Que audiências se afastam',
          'Que temas mudam a perceção dos eleitores',
        ],
      },
      {
        name: 'Visibilidade em pesquisa e IA',
        question: 'O que encontra um eleitor quando procura este candidato?',
        items: [
          'Visibilidade no Google',
          'Visibilidade e recomendações em motores de IA',
          'Com o que abre cada motor',
          'Onde as versões divergem entre si',
        ],
      },
      {
        name: 'Inteligência multilingue',
        question: 'O mesmo candidato é descrito de forma diferente em cada idioma?',
        items: [
          'Inteligência política multilingue',
          'Lacunas narrativas entre idiomas e audiências',
        ],
      },
      {
        name: 'Risco e oportunidade',
        question: 'O que está a surgir e o que continua por reclamar?',
        items: [
          'Riscos e ameaças emergentes',
          'Oportunidades',
          'Temas sem dono disponíveis para a campanha',
        ],
      },
      {
        name: 'Ação priorizada',
        question: 'O que deve acontecer agora e como saberemos que resultou?',
        items: [
          'Ações priorizadas',
          'O que deve ser feito de imediato',
          'Quem deve ser responsável',
          'O que tem de mudar',
          'Como o movimento deve ser medido ao longo do tempo',
        ],
      },
    ],

    screensLabel: 'Dentro do sistema',
    screensSub:
      'As superfícies de inteligência eleitoral, com dados de demonstração. Nenhum candidato, partido ou campanha reais aparecem nesta página.',

    liveLabel: 'Veja em funcionamento',
    liveHeadline: 'O modo Eleição está ativo neste ambiente.',
    liveBody:
      'A inteligência narrativa muda de sujeito: de uma organização comercial para uma corrida local ficcional, para que a estrutura da análise possa ser examinada de ponta a ponta antes de qualquer dado real de campanha entrar em jogo.',
    liveCta: 'Abrir o modo Eleição',

    confidentialLabel: 'Sobre confidencialidade',
    confidentialBody:
      'A inteligência de campanha é tratada como inteligência de campanha. Nenhuma corrida, candidato ou conjunto de dados de cliente aparece em material público, demonstração ou referência. Cada exemplo desta página é um sujeito inventado, construído para mostrar a forma da análise.',

    ctaHeadline: 'A posição já se está a mover. A questão é em que direção.',
    ctaPrimary: 'Ver o que está a mover a eleição',
    ctaSecondary: 'Marcar uma sessão de inteligência eleitoral',
  },

  meta: {
    description:
      'A GeoRepute reconstrói como as empresas são reconhecidas, avaliadas, recomendadas, merecedoras de confiança e escolhidas em motores de IA, no Google, em canais digitais e na perceção do mercado.',
  },
}
