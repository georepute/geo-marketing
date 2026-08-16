import type { DictionaryMeta, PartialDictionary } from '../types'

/* ============================================================================
   Spanish (es) — LTR.

   Translated against lib/i18n/GLOSSARY.md. Neutral international register
   rather than region-specific idiom, addressed formally (usted) to an
   executive reader.

   NOT YET REVIEWED BY A NATIVE SPEAKER.
   ========================================================================= */

export const meta: DictionaryMeta = {
  reviewed: false,
  notes:
    'Complete first-pass translation, neutral international Spanish. scripts/i18n-review.mjs passes; every ? and ! carries its opening ¿ / ¡. This pass restored Inteligencia narrativa and Inteligencia de decisión de la competencia, which had drifted to Inteligencia del relato / de decisiones de la competencia in the overlay. STILL NEEDS a native speaker for register and for anything that reads as region-specific rather than neutral.',
}

export const dictionary: PartialDictionary = {
  /* --- §19 core commercial copy ---------------------------------------- */
  category: 'EL SISTEMA OPERATIVO DE INTELIGENCIA DE DECISIÓN',
  heroPrimary: 'Vea dónde su empresa es reconocida, recomendada y elegida.',
  heroContinuation: 'Y dónde la decisión se va a otra parte.',
  categoryPositioning:
    'Las plataformas tradicionales optimizan canales. GeoRepute reconstruye decisiones.',
  analyticsDisruption: 'Su analítica empieza demasiado tarde.',
  aiRecognition: '¿Entienden los motores de IA qué es su empresa?',
  aiPresence: '¿Está presente cuando los clientes preguntan a la IA a quién elegir?',
  googleVsAi: 'Una empresa puede existir en la IA y desaparecer en Google.',
  competitors:
    'Vea dónde los competidores reciben la decisión antes de que usted reciba el contacto.',
  narrative: 'Cuando el mercado explica su categoría, ¿de quién es el lenguaje que usa?',
  searchEconomics:
    'Sepa cuándo la búsqueda de pago se vuelve demasiado cara para justificarla.',
  trust: 'La visibilidad genera atención. La confianza genera elección.',
  opportunity: 'No toda brecha de visibilidad merece corregirse.',
  timing: 'La decisión correcta en el momento equivocado sigue siendo la decisión equivocada.',
  action: 'La plataforma no termina en el hallazgo.',
  marketplace: 'Compre la inteligencia que necesita.',
  partner: 'Construya un negocio recurrente en torno a la inteligencia de decisión.',
  signatureExperience: 'Reconstruya la decisión.',
  finalCta: 'No deje que el mercado decida qué es su empresa sin usted.',

  /* --- Home ------------------------------------------------------------- */
  home: {
    heroCtaPrimary: 'Analizar mi empresa',
    heroCtaSecondary: 'Explorar productos de inteligencia',
    heroCtaEnterprise: 'Reservar una sesión ejecutiva',
    disruptionSub:
      'La decisión del cliente suele comenzar antes de que exista una visita, un clic, un contacto o un registro en el CRM.',
    liveEntry: 'Vea qué entiende el mercado sobre su empresa.',
    liveEntrySub: 'Introduzca un dominio y obtenga una vista previa inmediata y controlada.',
    googleVsAiFull:
      'Una empresa puede existir en la IA y desaparecer en Google. O dominar Google y desaparecer cuando los compradores preguntan a la IA.',
    googleVsAiSub:
      'Dos superficies de descubrimiento, como dos activos comerciales distintos.',
    graph: 'Una decisión. Muchas señales. Una explicación.',
    graphSub:
      'Cómo se conectan la IA, Google, la captación de pago, los competidores, la narrativa, la confianza, la geografía y el contenido.',
    engines: 'Doce motores de inteligencia. Un sistema operativo.',
    enginesSub:
      'Cada motor se presenta a través de la pregunta de negocio que responde.',
    marketplaceSub:
      'Se puede adquirir un diagnóstico específico sin comprometerse con la plataforma completa.',
    competitorCapture:
      'Vea dónde los competidores reciben la decisión antes de que usted reciba el contacto.',
    executive: 'No más datos. Una posición de decisión.',
    finalCtaSub: 'Elija la vía correcta.',
    finalRoutes: [
      'Iniciar mi análisis',
      'Comprar un producto de inteligencia',
      'Reservar una sesión corporativa',
      'Unirse a la red de socios',
    ],
  },

  /* --- Executive frame -------------------------------------------------- */
  exec: {
    q1: '¿Conoce la IA su empresa?',
    q2: '¿Dónde está perdiendo decisiones?',
    q3: '¿Por qué recomiendan a su competidor en su lugar?',
    q4: '¿Por qué la IA todavía no confía en usted?',
    q5: '¿Cuánto tiempo queda?',
    q6: '¿Qué debe ocurrir ahora?',
    q7: '¿Cuál es la posición ejecutiva?',

    prescriptionLabel: 'Prescripción ejecutiva',
    interventionLabel: 'Intervención estratégica',
    recoveryLabel: 'Plan de recuperación de decisiones',
    windowLabel: 'Ventana estratégica',
    actionPlanLabel: 'Plan de acción ejecutivo',
    positionLabel: 'Posición ejecutiva',

    kpiWhat: 'Qué es',
    kpiWhy: 'Por qué importa',
    kpiImpact: 'Impacto comercial',

    executiveQuestion: 'Pregunta ejecutiva',
    ownerLabel: 'Responsable',
    deadlineLabel: 'Fecha límite',

    decisionHealthDefinition:
      'La salud de decisión mide si los sistemas de IA pueden reconocer, verificar y recomendar con seguridad su empresa en el momento en que un comprador elige proveedor.',
    strategicWindowDefinition:
      'La ventana estratégica es el periodo en el que el lenguaje de la categoría aún se está formando. La autoridad construida dentro de ella se convierte en la respuesta por defecto. La construida después debe desplazar una recomendación ya establecida, lo que cuesta bastante más.',

    everyFigureCaption:
      'Cada cifra lleva su evidencia, su nivel de confianza y los límites de lo que puede afirmar.',
  },

  /* --- Navigation ------------------------------------------------------- */
  nav: {
    engines: 'Motores de inteligencia',
    marketplace: 'Mercado de inteligencia',
    methodology: 'Metodología',
    pricing: 'Precios',
    signIn: 'Iniciar sesión',
    startAnalysis: 'Iniciar análisis',

    groups: [
      {
        label: 'Plataforma',
        summary: 'El propio entorno de decisión.',
        items: [
          {
            label: 'Centro de mando ejecutivo',
            description:
              'Diez medidas, una posición de decisión, y cada una abre su evidencia.',
          },
          {
            label: 'Reconstrucción de la decisión',
            description:
              'Introduzca un dominio, elija una pregunta comercial y vea cómo se reconstruye la decisión.',
          },
          {
            label: 'Preparación de campaña',
            description:
              '¿Lanzamos esta campaña hoy? Se evalúa la empresa, no la campaña.',
          },
          {
            label: 'Inteligencia narrativa',
            description: '¿Qué historia cuenta el mercado y cómo influye en las decisiones?',
          },
          {
            label: 'Centro de acción estratégica',
            description:
              'Intervenciones priorizadas con responsables, plazos y medición.',
          },
          {
            label: 'Inteligencia electoral',
            description:
              'Qué narrativas mueven al electorado, quién las sostiene y qué debe cambiar.',
          },
        ],
        feature: {
          eyebrow: 'Experiencia distintiva',
          title: 'Reconstruya la decisión.',
          body: 'Diez superficies, una pregunta comercial, desde lo que entendió cada motor hasta lo que debe cambiar.',
          cta: 'Abrir la reconstrucción',
        },
      },
      {
        label: 'Motores de inteligencia',
        summary: 'Doce motores. Cuatro construidos en este entorno.',
        items: [
          {
            label: 'Reconocimiento por IA',
            description: '¿Entienden los motores de IA quién es la empresa?',
          },
          {
            label: 'Visibilidad Google frente a IA',
            description:
              '¿Existe de forma coherente en ambas superficies de descubrimiento?',
          },
          {
            label: 'Decisión del competidor',
            description: '¿Quién recibe la decisión en su lugar y por qué?',
          },
          {
            label: 'Inteligencia de acción',
            description: '¿Qué debe ocurrir ahora, por parte de quién y para cuándo?',
          },
        ],
        allLabel: 'Ver los doce motores',
      },
      {
        label: 'Mercado',
        summary:
          'Inteligencia para preguntas que la mayoría de las empresas nunca ha medido.',
        items: [
          {
            label: 'Inteligencia de visibilidad en IA',
            description: '¿Sabe la IA que la empresa existe y qué cree que es?',
          },
          {
            label: 'Inteligencia competitiva',
            description: '¿Quién recibe la decisión en su lugar y de qué dispone?',
          },
          {
            label: 'Inteligencia ejecutiva',
            description: '¿Cuánto vale y qué ocurre a continuación?',
          },
        ],
        allLabel: 'Ver todo el ecosistema de inteligencia',
      },
    ],

    flat: [
      { label: 'Cómo funciona' },
      { label: 'Metodología' },
      { label: 'Precios' },
    ],
  },

  /* --- Commerce --------------------------------------------------------- */
  commerce: {
    briefingCta: 'Reservar una sesión de inteligencia',
    briefingCtaShort: 'Reservar sesión',
    termsOnRequest: 'Las condiciones comerciales se facilitan a petición.',
    termsOnRequestLong:
      'El alcance, la profundidad y las condiciones comerciales se fijan según las preguntas que necesita responder. Ambos se confirman en la sesión.',
  },

  /* --- Briefing and booking --------------------------------------------- */
  briefing: {
    eyebrow: 'Sesión ejecutiva',
    title: 'Vea el entorno de decisión en el que se juzga a su empresa.',
    sub: 'Una sesión de trabajo sobre su propio mercado, no una demostración del producto. Reconstruimos una decisión comercial de su categoría y le mostramos qué la determinó.',
    covers: 'Qué cubre la sesión',
    coversItems: [
      'Cómo describen hoy los motores de IA a su empresa, motor por motor.',
      'Una decisión de compra real de su categoría, reconstruida de principio a fin.',
      'Qué competidor recibe hoy esa decisión y la evidencia que lo sitúa ahí.',
      'Las brechas entre ambos, ordenadas por consecuencia comercial.',
      'Qué tendría que cambiar, en qué orden y cómo se mediría el movimiento.',
    ],
    who: 'A quién va dirigida',
    whoBody:
      'A equipos directivos responsables de la posición de mercado y a los estrategas que los asesoran. No requiere preparación.',
    duration: '45 minutos',
    durationLabel: 'Duración',
    formatLabel: 'Formato',
    format: 'Videollamada',
    costLabel: 'Coste',
    cost: 'Ninguno',

    scheduleLabel: 'Concertar la sesión',
    pickDate: 'Elija una fecha',
    pickTime: 'Elija una hora',
    noTimes: 'No hay horas disponibles en esta fecha.',
    loadingTimes: 'Comprobando disponibilidad…',
    timeZoneNote: 'Horas mostradas en su zona horaria',
    noticeNote: 'La sesión disponible más próxima es dentro de 48 horas.',
    nameLabel: 'Nombre completo',
    emailLabel: 'Correo profesional',
    orgLabel: 'Organización',
    notesLabel: '¿Qué le gustaría tratar en la sesión?',
    optional: 'Opcional',
    submit: 'Confirmar la sesión',
    submitting: 'Confirmando…',
    back: 'Cambiar la hora',

    confirmedTitle: 'La sesión está confirmada.',
    confirmedBody:
      'Va camino una invitación de calendario a su correo y al nuestro. Los enlaces para reprogramar y cancelar están en ese mensaje.',
    confirmedAdd: 'Reservada para el',

    errorConflict:
      'Esa hora se ocupó mientras rellenaba los datos. Elija otra y no se perderá nada más.',
    errorInvalid: 'Revise los datos e inténtelo de nuevo.',
    errorUpstream:
      'No se pudo contactar con el calendario. Inténtelo en un momento o escríbanos y lo concertamos directamente.',

    unconfiguredTitle: 'La reserva se abre en breve.',
    unconfiguredBody:
      'Mientras tanto, inicie la reconstrucción en su propio dominio. La sesión parte de lo que esta revele.',
  },

  /* --- Blog ------------------------------------------------------------- */
  blog: {
    eyebrow: 'Notas de inteligencia',
    title: 'Notas de inteligencia',
    lede: 'Textos sobre cómo las empresas son reconocidas, evaluadas, recomendadas y elegidas — y qué puede hacerse al respecto.',
    readTime: 'min de lectura',
    more: 'Más notas de inteligencia',
    empty: 'Los primeros artículos están en preparación.',
    ctaBody: 'Cada argumento de este sitio puede comprobarse en su propio mercado.',
  },

  /* --- Ecosystem -------------------------------------------------------- */
  ecosystem: {
    label: 'Ecosistema',
    partners: [
      { description: 'El grupo detrás de GeoRepute.' },
      { description: 'Ejecución de contenido y medios.' },
      { description: 'Medición de la percepción.' },
    ],
  },

  /* --- Product shell ---------------------------------------------------- */
  appNav: {
    ariaLabel: 'Producto',
    exit: 'Salir',
    observed: 'Observado el',
    environment:
      'Entorno de demostración con datos iniciales · Metodología GEON-2.4',
    methodologyLink: 'Cómo se alcanzan estas conclusiones',
    items: [
      { label: 'Centro de mando' },
      { label: 'Reconstrucción de la decisión' },
      { label: 'Preparación de campaña' },
      { label: 'Inteligencia narrativa' },
      { label: 'Centro de acción' },
    ],
  },

  /* --- Accessible names ------------------------------------------------- */
  a11y: {
    skipToContent: 'Saltar al contenido',
    openMenu: 'Abrir el menú',
    closeMenu: 'Cerrar el menú',
    navigate: 'Navegar',
    primaryNav: 'Principal',
    mobileNav: 'Móvil',
    footerNav: 'Pie de página',
    breadcrumb: 'Ruta de navegación',
  },

  language: {
    label: 'Idioma',
    choose: 'Elija un idioma',
    current: 'Idioma actual',
  },

  /* --- Footer. Arrays of objects merge element-wise, so every `href` here
         comes from the English source and only the label is replaced. ----- */
  footer: {
    ariaLabel: 'Pie de página',
    limitationLead: 'Modelización direccional.',
    limitationTail:
      'Las cifras comerciales son estimaciones para priorizar, no estados financieros auditados.',
    rights: 'GeoRepute. Infraestructura de inteligencia de decisión.',
    environment: 'Entorno de demostración · Datos de partida',
    photography: 'Fotografías vía',
    columns: [
      {
        title: 'Producto',
        links: [
          { label: 'Centro de mando ejecutivo' },
          { label: 'Reconstrucción de la decisión' },
          { label: 'Centro de acciones' },
          { label: 'Motores de inteligencia' },
          { label: 'Reservar una sesión informativa' },
          { label: 'Precios y planes' },
        ],
      },
      {
        title: 'Inteligencia',
        links: [
          { label: 'Mercado de inteligencia' },
          { label: 'Reconocimiento por IA' },
          { label: 'Google frente a la IA' },
          { label: 'Decisión de la competencia' },
          { label: 'Inteligencia de acción' },
        ],
      },
      {
        title: 'Metodología',
        links: [
          { label: 'El marco GEON' },
          { label: 'Fuentes de evidencia' },
          { label: 'Modelo de confianza' },
          { label: 'Modelo financiero' },
          { label: 'Limitaciones' },
        ],
      },
      {
        title: 'Empresa',
        links: [
          { label: 'Notas de inteligencia' },
          { label: 'Iniciar sesión' },
          { label: 'Privacidad' },
          { label: 'Términos del servicio' },
          { label: 'Tratamiento de datos' },
          { label: 'Seguridad' },
        ],
      },
    ],
  },

  /* --- Readout anatomy -------------------------------------------------- */
  readout: {
    executiveTruth: 'Verdad ejecutiva',
    businessMeaning: 'Significado comercial',
    evidence: 'Evidencia',
    connectedSignals: 'Señales conectadas',
    competitorContext: 'Contexto competitivo',
    commercialExposure: 'Exposición comercial',
    timing: 'Momento',
    trend: 'Tendencia',
    prescription: 'Prescripción',
    expectedMovement: 'Movimiento esperado',
    ownerDeadline: 'Responsable y plazo',
    measurement: 'Medición',
    showEvidence: 'Mostrar evidencia',
    hideEvidence: 'Ocultar evidencia',
    howDetermined: 'Cómo se ha determinado',
  },

  /* --- Confidence ------------------------------------------------------- */
  confidence: {
    high: {
      label: 'Confianza alta',
      definition:
        'Varias fuentes de evidencia actuales y fiables respaldan la conclusión.',
    },
    medium: {
      label: 'Confianza media',
      definition:
        'La evidencia es significativa pero está parcialmente estimada o incompleta.',
    },
    directional: {
      label: 'Orientativo',
      definition:
        'Útil para priorizar; no es un hecho auditado ni verificado.',
    },
    'insufficient-history': {
      label: 'Historial insuficiente',
      definition:
        'La plataforma se abstiene de conclusiones predictivas hasta que exista evidencia suficiente.',
    },
  },

  /* --- Exposure. The negation must survive translation. ----------------- */
  exposure: {
    label: 'Exposición comercial orientativa',
    caption: 'Estimación orientativa — no son ingresos perdidos confirmados.',
    assumptionsLabel: 'Supuestos',
    formulaLabel: 'Modelo',
    formula:
      'Demanda × Brecha de decisión × Conversión estimada × Valor medio de operación',
    limitation:
      'Todos los valores se muestran como rangos. Ningún valor se describe como ingresos perdidos confirmados. Cada modelo expone sus supuestos y los límites de sus datos.',
  },

  roleLens: {
    label: 'Profundidad',
    executive: 'Dirección',
    analyst: 'Analista',
    operator: 'Operador',
    hint: 'Cambia cuánto detalle se abre por defecto. No se oculta ningún dato.',
  },

  /* --- The Closed Loop (doc §9/§10) ------------------------------------- */
  loop: {
    navLabel: 'Cómo funciona',
    eyebrow: 'El circuito cerrado de GeoRepute',
    title: 'De la inteligencia a la ejecución. De la ejecución de vuelta a la inteligencia.',
    lede: 'GeoRepute no se limita a analizar lo que ocurre. Entiende por qué ocurre, decide qué debe cambiar, ejecuta la estrategia, mide qué cambió — y usa el resultado para decidir qué sucede a continuación.',

    fragmentedLabel: 'El modelo desconectado',
    fragmentedLede: 'La mayoría de las empresas opera con sistemas inconexos.',
    fragmentedItems: [
      'Una plataforma mide Google.',
      'Otra monitoriza la IA.',
      'Otra analiza a los competidores.',
      'Alguien construye la estrategia.',
      'Otra persona crea el contenido.',
      'Otro sistema lo distribuye.',
      'La analítica mide lo que ocurrió después.',
    ],
    fragmentedClose:
      'Sistemas distintos. Equipos distintos. Datos distintos. Objetivos distintos. Y a menudo ninguna conexión directa entre el diagnóstico inicial y el resultado final.',

    connectedLede: 'GeoRepute conecta todo el ciclo de decisión.',
    connectedBody:
      'Empieza con inteligencia profunda sobre la empresa, el mercado, los competidores, los clientes, Google, los motores de IA y el entorno digital más amplio. Convierte esa inteligencia en una estrategia construida en torno a objetivos de negocio definidos. Después crea y distribuye el contenido y los medios necesarios para ejecutar esa estrategia. Después mide si esas acciones cambiaron realmente las señales que debían cambiar. Y lo que el sistema aprende se convierte en la inteligencia del siguiente ciclo.',

    cycle: 'PLANIFICAR → EJECUTAR → COMPROBAR → CORREGIR → REPETIR',
    cycleSub: 'Un circuito continuo de la inteligencia a la ejecución.',

    stages: [
      {
        name: 'PLANIFICAR',
        headline: 'Entienda la realidad antes de decidir qué hacer.',
        lede: 'Cada ciclo comienza con un diagnóstico profundo. GeoRepute rastrea y conecta inteligencia sobre la empresa, sus competidores, su mercado y los entornos digitales que influyen en las decisiones de los clientes.',
        signalsLabel: 'El sistema analiza señales procedentes de',
        signals: [
          'Motores de IA',
          'Google',
          'Búsqueda',
          'Competidores',
          'Mercado',
          'Presencia digital',
          'Autoridad',
          'Confianza',
          'Narrativas',
          'Contenido',
          'Preguntas de clientes',
          'Recorridos de decisión',
          'Fuentes digitales',
          'Idiomas',
          'Datos de negocio conectados',
        ],
        connective:
          'No observa estas señales por separado: las conecta para reconstruir el cuadro completo.',
        question: '¿Qué entiende realmente el mercado sobre su empresa?',
        determinesLabel: 'GeoRepute determina',
        determines: [
          'Cómo se entiende y se representa la empresa',
          'Qué saben de ella los motores de IA',
          'Cuándo la recomienda la IA — y cuándo no',
          'Qué muestra Google en los momentos críticos',
          'Con qué se encuentran los clientes antes siquiera de llegar al sitio',
          'Qué preguntas influyen en la decisión de compra',
          'Dónde entra la empresa en el conjunto considerado',
          'Dónde desaparece',
          'Qué competidores reciben la decisión en su lugar',
          'Por qué se elige a esos competidores',
          'Qué fuentes y evidencias los refuerzan',
          'Qué narrativas configuran la categoría',
          'Dónde faltan confianza y autoridad',
          'Dónde existen lagunas de información',
          'A qué audiencias se está llegando',
          'Qué oportunidades siguen abiertas',
          'Qué amenazas están surgiendo',
          'Qué está cambiando en el mercado',
          'Y qué señales deben cambiar para acercar la empresa a su objetivo',
        ],
        outcomeLabel: 'La inteligencia se convierte en estrategia.',
        outcome:
          'El cliente define los objetivos. GeoRepute determina el camino. El sistema convierte el diagnóstico en una estrategia enfocada y un plan de ejecución priorizado en torno a esos objetivos.',
        notThis: '«¿Qué publicamos este mes?»',
        butThis: [
          '¿Qué debe cambiar?',
          '¿Por qué debe cambiar?',
          '¿Quién necesita encontrárselo?',
          '¿Dónde debe encontrárselo?',
          '¿Qué debe existir ahí?',
          '¿Y qué señal medible debería moverse si la estrategia funciona?',
        ],
      },
      {
        name: 'EJECUTAR',
        headline:
          'No cree lo que la empresa quiere decir. Cree lo que el cliente necesita encontrar.',
        lede: 'Aquí la inteligencia se convierte en ejecución. GeoRepute no parte de un calendario de contenidos en blanco, sino de las lagunas descubiertas al planificar.',
        signalsLabel: 'Se publica en los activos digitales conectados',
        signals: [
          'Sitio web',
          'Plataformas sociales',
          'Artículos',
          'Perfiles de empresa',
          'Entornos de contenido',
          'Canales de publicación conectados',
        ],
        connective:
          'El sistema entiende qué falta entre la empresa y la decisión sobre la que quiere influir.',
        question: '¿Con qué debe encontrarse el cliente para decidir de otro modo?',
        determinesLabel: 'Determina',
        determines: [
          'Qué información les falta a los clientes',
          'Qué preguntas hay que responder',
          'Qué narrativas hay que crear, reforzar o corregir',
          'Qué objeciones hay que atender',
          'Qué señales de confianza deben existir',
          'Qué lagunas de autoridad hay que cerrar',
          'Qué contenido se requiere',
          'Qué medios se requieren',
          'Qué formato encaja con el objetivo',
          'Qué audiencia debe encontrárselo',
          'En qué idioma',
          'En qué etapa del recorrido de decisión',
          'En qué activo o canal digital',
          'Y en qué secuencia',
        ],
        outcomeLabel: 'Después GeoRepute ejecuta.',
        outcome:
          'El sistema genera el contenido y los medios requeridos según la estrategia y los distribuye y publica en los activos digitales conectados de la empresa o el proyecto. Cada activo existe por una razón. Cada pieza de contenido está ligada a una laguna identificada. Cada acción está ligada a un objetivo definido. Cada objetivo está ligado a una señal cuyo cambio el sistema espera.',
        notThis: 'El contenido es la estrategia.',
        butThis: ['El contenido es la capa de ejecución de la inteligencia.'],
      },
      {
        name: 'COMPROBAR',
        headline: 'No mida lo publicado. Mida lo que cambió.',
        lede: 'Publicar no es éxito. Las visualizaciones no son éxito. Completar una acción no es éxito. La cuestión es si la acción cambió el motivo por el que se creó.',
        signalsLabel: 'El sistema compara',
        signals: ['ANTES', 'ACCIÓN', 'DESPUÉS'],
        connective:
          'Tras la ejecución, GeoRepute vuelve al entorno y lo mide de nuevo. Comprueba si las señales objetivo se movieron realmente.',
        question: '¿Se movieron las señales que esta acción debía mover?',
        determinesLabel: 'Pregunta',
        determines: [
          '¿Cambió la comprensión de la IA?',
          '¿Aumentó la presencia en recomendaciones?',
          '¿Entró la empresa en decisiones de las que antes estaba ausente?',
          '¿Se reforzó la autoridad?',
          '¿Mejoró la confianza?',
          '¿Se movió la narrativa?',
          '¿Cambió la visibilidad en Google?',
          '¿Empezaron los clientes a encontrar la información que faltaba?',
          '¿Se estrechó la brecha competitiva?',
          '¿Sigue recibiendo la decisión el mismo competidor?',
          '¿Respondió el mercado como se esperaba?',
        ],
        outcomeLabel:
          'GeoRepute mide el impacto de su propia ejecución frente al diagnóstico inicial.',
        outcome:
          'Eso crea una conexión directa entre lo que el sistema descubrió, lo que decidió, lo que ejecutó y lo que realmente cambió.',
        notThis: 'Completar la acción.',
        butThis: ['Mover la señal para la que se creó la acción.'],
      },
      {
        name: 'CORREGIR',
        headline: 'El resultado se convierte en la inteligencia de la siguiente decisión.',
        lede: 'El mercado ya ha cambiado. Por tanto la estrategia no puede permanecer estática. GeoRepute devuelve los nuevos resultados a su capa de inteligencia.',
        signalsLabel: 'Sobre esa nueva realidad, GeoRepute puede ajustar',
        signals: [
          'Estrategia',
          'Prioridades',
          'Narrativas',
          'Mensajes',
          'Contenido',
          'Medios',
          'Distribución',
          'Canales',
          'Momento',
          'Señales objetivo',
          'Las siguientes acciones',
        ],
        connective:
          'Lo que funciona puede reforzarse. Lo que no produce el movimiento esperado puede cambiarse. Nuevas oportunidades entran en el plan. Nuevos riesgos se atienden.',
        question: '¿Qué debe ocurrir ahora, y por qué?',
        determinesLabel: 'El sistema determina',
        determines: [
          'Qué funcionó.',
          'Qué no.',
          'Qué se movió.',
          'Qué no se movió lo suficiente.',
          'Qué cambió en el mercado.',
          'Qué cambiaron los competidores.',
          'Qué nuevas lagunas aparecieron.',
          'Y qué debe ocurrir a continuación.',
        ],
        outcomeLabel: 'Y el sistema vuelve a ejecutarse.',
        outcome:
          'PLANIFICAR → EJECUTAR → COMPROBAR → CORREGIR → PLANIFICAR. El resultado de un ciclo se convierte en la inteligencia del siguiente.',
        notThis: 'Una estrategia construida una sola vez.',
        butThis: ['Una estrategia que vuelve a decidirse en cada ciclo.'],
      },
    ],

    stepsLabel: 'El circuito cerrado',
    stepsSub: 'Un sistema. Un ciclo de aprendizaje continuo.',
    steps: [
      {
        name: 'ENTENDER',
        body: 'Diagnóstico profundo de la empresa, el mercado, los competidores y el entorno de decisión.',
      },
      {
        name: 'DECIDIR',
        body: 'Convertir la inteligencia en una estrategia alineada con objetivos definidos.',
      },
      { name: 'CREAR', body: 'Generar el contenido y los medios que la estrategia requiere.' },
      {
        name: 'DISTRIBUIR',
        body: 'Publicar en los activos y canales digitales conectados.',
      },
      {
        name: 'MEDIR',
        body: 'Volver a rastrear el entorno y medir qué cambió realmente.',
      },
      {
        name: 'APRENDER',
        body: 'Entender qué acciones movieron las señales objetivo y cuáles no.',
      },
      {
        name: 'CORREGIR',
        body: 'Ajustar estrategia, contenido, distribución y prioridades.',
      },
    ],
    stepsClose: 'Cada ciclo hace que el siguiente esté mejor informado.',

    movementLabel: 'Antes → Acción → Después',
    movementCaption:
      'Movimiento ilustrativo en un ciclo. Datos de demostración — no es un resultado de cliente.',
    movementColumns: ['Señal', 'Antes', 'Después', 'Objetivo'],
    /* Only the signal name translates; before/after/target are figures and
       come through from the English source by element-wise merge. */
    movement: [
      { signal: 'Reconocimiento por IA' },
      { signal: 'Autoridad' },
      { signal: 'Presencia en la decisión' },
      { signal: 'Cuota de recomendaciones' },
      { signal: 'Dominio del relato' },
    ],

    whyLabel: 'Por qué esto cambia el modelo',
    whyTraditionalLabel: 'El modelo tradicional está fragmentado',
    whyTraditional:
      'Investigación → Estrategia → Agencia → Contenido → Distribución → Analítica → Reunión → Nueva estrategia',
    whyClosedLabel: 'GeoRepute cierra la brecha',
    whyClosed:
      'Inteligencia → Decisión → Ejecución → Medición → Aprendizaje → Corrección',
    whyBody:
      'La misma inteligencia que identifica el problema guía la estrategia. La estrategia determina qué se crea. La ejecución se mide frente al objetivo inicial. Y el resultado determina qué hace el sistema a continuación.',

    notEngineLabel: 'No es otro motor de contenido',
    notEngineHeadline: 'El contenido es un producto. La inteligencia es el cerebro.',
    notEngineBody:
      'GeoRepute no está diseñada para producir más contenido. Está diseñada para determinar qué debe existir en el mercado para influir en la siguiente decisión.',
    notEngineItems: [
      'A veces eso requiere contenido.',
      'A veces autoridad.',
      'A veces evidencia.',
      'A veces una corrección de narrativa.',
      'A veces responder preguntas que los clientes no logran resolver.',
      'A veces reforzar una propiedad digital concreta.',
      'A veces cerrar una brecha competitiva.',
    ],
    notEngineClose:
      'El sistema decide a partir de la inteligencia. Después ejecuta lo que la estrategia requiere.',

    differenceLabel: 'La diferencia',
    difference: [
      { term: 'La analítica', says: 'le dice qué pasó.' },
      { term: 'La inteligencia', says: 'le dice por qué.' },
      { term: 'La estrategia', says: 'le dice qué debe cambiar.' },
      { term: 'La ejecución', says: 'realiza el cambio.' },
      { term: 'La medición', says: 'le dice si funcionó.' },
    ],
    differenceClose: 'GeoRepute conecta las cinco — y vuelve a ejecutar el ciclo.',

    livingLabel: 'De una instantánea a una estrategia viva',
    livingItems: [
      'Los mercados se mueven.',
      'Los competidores se mueven.',
      'Las preguntas de los clientes cambian.',
      'Google cambia.',
      'Los sistemas de IA cambian.',
      'Las narrativas cambian.',
      'La información que rodea a una empresa cambia.',
    ],
    livingBody:
      'Una estrategia construida una sola vez no puede responder de forma continua a un mercado que no deja de moverse. GeoRepute convierte la estrategia de documento estático en sistema vivo.',
    livingVerbs: [
      'Observa.',
      'Entiende.',
      'Decide.',
      'Ejecuta.',
      'Mide.',
      'Aprende.',
      'Se adapta.',
    ],

    ctaHeadline: 'Vea el circuito cerrado en acción.',
    ctaBody:
      'No se limite a otro panel más. Vea cómo GeoRepute pasa de la inteligencia a la estrategia, de la estrategia a la ejecución, y de la ejecución de vuelta a inteligencia medible.',
    ctaPrimary: 'Reservar una demostración en directo',
    ctaSecondary: 'Ver cómo funciona GeoRepute',

    homeEyebrow: 'El circuito cerrado',
    homeHeadline:
      'El análisis es donde se detienen la mayoría de las plataformas. Es donde esta empieza.',
    homeSub:
      'GeoRepute diagnostica el entorno de decisión, lo convierte en estrategia, la ejecuta, mide si las señales objetivo se movieron realmente y usa el resultado para decidir qué sucede a continuación.',
    homeCta: 'Ver cómo funciona el circuito',
  },

  /* --- Election Intelligence (doc §3) ----------------------------------- */
  election: {
    navLabel: 'Inteligencia electoral',
    eyebrow: 'Inteligencia electoral en tiempo real',
    title: 'Sepa qué está moviendo la elección — y qué la hará volver.',
    lede: 'GeoRepute reconstruye cómo se forma realmente una posición política: qué narrativas circulan, quién las sostiene, qué audiencias se mueven y qué debe cambiar para recuperarlas.',

    keyMessageLabel: 'La distinción que importa',
    keyMessageNot: 'El sistema no solo muestra lo que está ocurriendo.',
    keyMessage:
      'Explica por qué está cambiando la posición política, quién influye en ella, dónde se pierde o se gana apoyo y qué debe hacerse ahora para cambiar la dirección.',

    forLabel: 'Diseñado para',
    audiences: [
      {
        name: 'Elecciones nacionales',
        body: 'Inteligencia narrativa y de percepción a escala de país, en cada idioma y región en juego.',
      },
      {
        name: 'Elecciones locales',
        body: 'Resolución a nivel de distrito, donde unos pocos miles de indecisos deciden el escaño.',
      },
      {
        name: 'Partidos políticos',
        body: 'La percepción del partido medida por separado de los candidatos que la sostienen.',
      },
      {
        name: 'Candidatos',
        body: 'Cómo se entiende, describe y recomienda a un candidato en las superficies que los votantes usan de verdad.',
      },
      {
        name: 'Cuarteles de campaña',
        body: 'Una única imagen operativa con la que trabaja toda la campaña, actualizada según se mueve el entorno.',
      },
      {
        name: 'Estrategas políticos',
        body: 'La evidencia detrás de una decisión estratégica, con los supuestos y los límites declarados.',
      },
      {
        name: 'Salas de crisis electorales',
        body: 'Movimiento narrativo en vivo, riesgos emergentes y respuestas priorizadas durante la ventana decisiva.',
      },
    ],

    capabilitiesLabel: 'Qué analiza el sistema',
    capabilitiesSub:
      'Cada capacidad siguiente es una pregunta que la campaña puede plantear al sistema y obtener una respuesta respaldada por evidencia.',
    capabilities: [
      {
        name: 'Percepción y narrativa',
        question: '¿Qué se le está contando realmente al electorado sobre este candidato?',
        items: [
          'Percepción pública',
          'Narrativas políticas',
          'Narrativas positivas y negativas',
          'Movimiento narrativo',
          'Percepción del candidato y del partido',
        ],
      },
      {
        name: 'Oponente e influencia',
        question: '¿Quién refuerza la posición y quién la daña?',
        items: [
          'Narrativas de competidores y oponentes',
          'Quién refuerza a un candidato o partido',
          'Quién los daña',
          'Medios y fuentes de información en línea',
          'Señales sociales y digitales',
        ],
      },
      {
        name: 'Movimiento de audiencias',
        question: '¿Qué votantes se mueven, en qué dirección y por qué motivo?',
        items: [
          'Qué audiencias se acercan',
          'Qué audiencias se alejan',
          'Qué asuntos cambian la percepción del votante',
        ],
      },
      {
        name: 'Visibilidad en búsqueda e IA',
        question: '¿Qué encuentra un votante cuando busca a este candidato?',
        items: [
          'Visibilidad en Google',
          'Visibilidad y recomendaciones en motores de IA',
          'Con qué abre cada motor',
          'Dónde divergen sus versiones entre sí',
        ],
      },
      {
        name: 'Inteligencia multilingüe',
        question: '¿Se describe al mismo candidato de forma distinta en cada idioma?',
        items: [
          'Inteligencia política multilingüe',
          'Brechas narrativas entre idiomas y audiencias',
        ],
      },
      {
        name: 'Riesgo y oportunidad',
        question: '¿Qué está surgiendo y qué sigue sin reclamar?',
        items: [
          'Riesgos y amenazas emergentes',
          'Oportunidades',
          'Asuntos sin dueño disponibles para la campaña',
        ],
      },
      {
        name: 'Acción priorizada',
        question: '¿Qué debe ocurrir ahora y cómo sabremos que funcionó?',
        items: [
          'Acciones priorizadas',
          'Qué debe hacerse de inmediato',
          'Quién debe ser responsable',
          'Qué debe cambiar',
          'Cómo debe medirse el movimiento a lo largo del tiempo',
        ],
      },
    ],

    screensLabel: 'Dentro del sistema',
    screensSub:
      'Las superficies de inteligencia electoral, con datos de demostración. En esta página no aparece ningún candidato, partido o campaña reales.',

    liveLabel: 'Véalo funcionando',
    liveHeadline: 'El modo Elección está activo en este entorno.',
    liveBody:
      'La inteligencia narrativa cambia de sujeto: de una organización comercial a una contienda local ficticia, de modo que la estructura del análisis pueda examinarse de principio a fin antes de que intervenga ningún dato real de campaña.',
    liveCta: 'Abrir el modo Elección',

    confidentialLabel: 'Sobre la confidencialidad',
    confidentialBody:
      'La inteligencia de campaña se trata como inteligencia de campaña. Ninguna contienda, candidato o conjunto de datos de cliente aparece en material público, demostración o referencia. Cada ejemplo de esta página es un sujeto inventado, construido para mostrar la forma del análisis.',

    ctaHeadline: 'La posición ya se está moviendo. La cuestión es en qué dirección.',
    ctaPrimary: 'Ver qué está moviendo la elección',
    ctaSecondary: 'Reservar una sesión de inteligencia electoral',
  },

  meta: {
    description:
      'GeoRepute reconstruye cómo las empresas son reconocidas, evaluadas, recomendadas, consideradas fiables y elegidas en motores de IA, Google, canales digitales y percepción del mercado.',
  },
}
