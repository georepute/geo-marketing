import type { ContentOverlay } from './index'

/* ============================================================================
   Spanish content overlay — the seeded demonstration prose.

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
    'Distribución de suministros industriales y fijaciones',
  'United States — Midwest': 'Estados Unidos — Medio Oeste',

  /* ==========================================================================
     HOME PAGE — the prose written inline on the section components.

     Tokens in braces are substituted after lookup, so a translation may put
     {pct} wherever Spanish needs it. <b>…</b> marks an emphasised run and is
     rendered as a styled span, never as markup — it can move too.
     ======================================================================= */

  /* --- The premise ------------------------------------------------------ */
  'The shift': 'El cambio',
  '{n} of {total}': '{n} de {total}',
  'By the time a visit, a click, a lead or a CRM record exists, the buyer has already decided which suppliers are worth contacting. That decision now happens inside AI systems, and it leaves no trace in any tool you currently own.':
    'Para cuando existe una visita, un clic, un cliente potencial o un registro en el CRM, el comprador ya ha decidido con qué proveedores vale la pena contactar. Esa decisión ocurre ahora dentro de los sistemas de IA y no deja rastro en ninguna herramienta que usted posea.',
  'commercial decisions complete without your business being named at all.':
    'decisiones comerciales se completan sin que su empresa sea mencionada en absoluto.',
  'No lead was lost, because no lead was ever created. Conventional measurement recorded nothing.':
    'No se perdió ningún cliente potencial, porque nunca se creó ninguno. La medición convencional no registró nada.',
  'presence at the stage where the supplier is actually chosen.':
    'de presencia en la etapa donde el proveedor se elige realmente.',
  'That stage carries {volume} of the query volume and decides {revenue} of the revenue. Volume-ranked tooling calls it unimportant.':
    'Esa etapa concentra {volume} del volumen de consultas y decide {revenue} de los ingresos. Las herramientas que ordenan por volumen la consideran irrelevante.',
  'more independent evidence supports the competitor engines recommend instead.':
    'más evidencia independiente respalda al competidor que los motores recomiendan en su lugar.',
  'Not a brand-preference gap. An evidence gap, and evidence can be commissioned.':
    'No es una brecha de preferencia de marca, sino de evidencia — y la evidencia se puede encargar.',

  /* --- Q1 · Does AI know your business? --------------------------------- */
  'Entity understanding': 'Comprensión de la entidad',
  'AI systems understand what your business is in {score} of 100 commercial evaluations. One engine holds no stable record of you at all.':
    'Los sistemas de IA comprenden qué es su empresa en {score} de cada 100 evaluaciones comerciales. Un motor no conserva ningún registro estable sobre usted.',
  'A system that cannot categorise a business cannot recommend it. This sits upstream of every other measure on this page.':
    'Un sistema que no puede categorizar una empresa no puede recomendarla. Esto antecede a cualquier otra medida de esta página.',
  'Content and advertising investment cannot move an answer while the underlying record is wrong. Spend on either is spend against a locked door.':
    'La inversión en contenido y publicidad no puede mover una respuesta mientras el registro subyacente sea erróneo. Gastar en cualquiera de las dos es gastar contra una puerta cerrada.',
  'Highest-risk engine': 'Motor de mayor riesgo',
  '{engine} understands your business at {score} of 100 and names it in none of the tracked decisions.':
    '{engine} comprende su empresa con {score} de 100 y no la menciona en ninguna de las decisiones monitorizadas.',
  'Recognition is not uniform across AI systems, and buyers do not all use the same one. A single weak engine removes your business from every decision made through it.':
    'El reconocimiento no es uniforme entre sistemas de IA, y los compradores no usan todos el mismo. Un solo motor débil elimina a su empresa de cada decisión tomada a través de él.',
  'Every buyer who asks this engine receives a supplier shortlist your business is structurally absent from — and no measurement you own records that it happened.':
    'Cada comprador que consulta este motor recibe una lista corta de proveedores de la que su empresa está estructuralmente ausente — y ninguna medición suya registra que ocurriera.',
  'Decision presence': 'Presencia en la decisión',
  'Present in only {present} of supplier evaluations. Missing from {missing} of AI buying decisions.':
    'Presente en solo {present} de las evaluaciones de proveedores. Ausente en {missing} de las decisiones de compra mediadas por IA.',
  'Supplier evaluation is the moment a buyer stops choosing a solution and starts choosing a vendor. It is the stage that assigns the order.':
    'La evaluación de proveedores es el momento en que el comprador deja de elegir una solución y empieza a elegir un proveedor. Es la etapa que asigna el pedido.',
  'Absence here is exclusion from the shortlist for the {revenue} of revenue that arrives through supplier evaluation.':
    'La ausencia aquí supone la exclusión de la lista corta para el {revenue} de los ingresos que llegan mediante la evaluación de proveedores.',
  'Recognition is cheap to fix and blocks everything else. It is the only intervention on this page that can be completed in under thirty days.':
    'El reconocimiento es barato de corregir y bloquea todo lo demás. Es la única intervención de esta página que puede completarse en menos de treinta días.',

  /* --- Q2 · Where are you losing decisions? ------------------------------ */
  'Losses are not spread evenly across the buying journey. They concentrate at one stage — and it is the stage conventional measurement is least able to see.':
    'Las pérdidas no se reparten de forma uniforme por el recorrido de compra. Se concentran en una etapa — precisamente la que la medición convencional peor ve.',
  'Where presence collapses': 'Dónde se desploma la presencia',
  'Coverage falls to {pct} at supplier evaluation — the last stage before the order is assigned.':
    'La cobertura cae a {pct} en la evaluación de proveedores — la última etapa antes de asignar el pedido.',
  'Earlier stages shape opinion. This stage selects the vendor. A business can lead the first three stages and still never be contacted.':
    'Las etapas previas configuran la opinión. Esta etapa selecciona al proveedor. Una empresa puede liderar las tres primeras y aun así no recibir nunca un contacto.',
  'The competitor named here receives the enquiry. Your business is not compared and rejected — it is never compared at all.':
    'El competidor mencionado aquí recibe la consulta. Su empresa no es comparada y descartada: no llega a compararse en absoluto.',
  'Blind-spot questions': 'Preguntas en punto ciego',
  '{n} commercial questions return no AI recommendation and no Google position in the top ten. The decision happens on neither surface.':
    '{n} preguntas comerciales no devuelven recomendación de IA ni posición en los diez primeros resultados de Google. La decisión no ocurre en ninguna de las dos superficies.',
  'Google rank and AI recommendation are separate commercial assets. Strength in one does not carry into the other.':
    'La posición en Google y la recomendación de la IA son activos comerciales distintos. La fortaleza en uno no se traslada al otro.',
  'These questions are currently reachable only by buying the click — which is why paid cost rises while organic position stays flat.':
    'A estas preguntas solo se llega hoy comprando el clic — por eso el coste de pago sube mientras la posición orgánica se mantiene plana.',
  'Supplier evaluation carries {volume} of the query volume and decides {revenue} of the revenue. Ranking work by volume puts it last.':
    'La evaluación de proveedores concentra {volume} del volumen de consultas y decide {revenue} de los ingresos. Ordenar el trabajo por volumen la deja en último lugar.',

  /* --- Q3 · Why is the competitor recommended? --------------------------- */
  '{competitor} can be verified through {theirs} independent sources. Your business can be verified through {ours}.':
    '{competitor} puede verificarse mediante {theirs} fuentes independientes. Su empresa puede verificarse mediante {ours}.',
  'Share of recommendations is the symptom. The cause is what a system can cite when it has to justify naming one supplier ahead of another.':
    'La cuota de recomendaciones es el síntoma. La causa es aquello que un sistema puede citar cuando debe justificar por qué nombra a un proveedor antes que a otro.',
  'Receives the decision': 'Recibe la decisión',
  'Your business': 'Su empresa',
  'Authority advantage': 'Ventaja de autoridad',
  'Why the decision goes to them': 'Por qué la decisión les corresponde a ellos',
  'The category median is <b>{n}</b> independent sources. This is not a brand-preference gap that marketing spend closes. It is an evidence gap, and evidence is something a business can commission.':
    'La mediana de la categoría es de <b>{n}</b> fuentes independientes. No es una brecha de preferencia de marca que el gasto en marketing cierre. Es una brecha de evidencia, y la evidencia es algo que una empresa puede encargar.',
  'authority source': 'fuente de autoridad',
  'authority sources': 'fuentes de autoridad',
  'Named in <b>{pct}</b> of AI buying decisions.':
    'Mencionada en <b>{pct}</b> de las decisiones de compra mediadas por IA.',
  'Closing {multiple}× is a publishing and validation programme with a known cost, not a brand campaign with an unknown one.':
    'Cerrar una brecha de {multiple}× es un programa de publicación y validación con un coste conocido, no una campaña de marca con uno desconocido.',

  /* --- Q4 · What evidence is missing? ------------------------------------ */
  'How the gap becomes a lost decision':
    'Cómo la brecha se convierte en una decisión perdida',
  'Every node below opens the evidence behind it, with its confidence and its limits.':
    'Cada nodo de abajo abre la evidencia que lo sustenta, con su nivel de confianza y sus límites.',
  'Systems do not recommend what they cannot corroborate. Self-description is treated as a claim; third-party reference is treated as evidence.':
    'Los sistemas no recomiendan lo que no pueden corroborar. La autodescripción se trata como una afirmación; la referencia de terceros se trata como evidencia.',

  /* --- Q5 · How much time is left? --------------------------------------- */
  'The window is an observation about category formation, not a sales deadline. It is re-assessed every quarter and it can move in either direction.':
    'La ventana es una observación sobre la formación de la categoría, no un plazo de ventas. Se reevalúa cada trimestre y puede moverse en cualquier dirección.',
  'Authority established before the answer set stabilises':
    'Autoridad establecida antes de que el conjunto de respuestas se estabilice',

  /* --- Q6 · What should happen next? ------------------------------------- */
  'Six interventions, sequenced. Each names its owner, its deadline, the signal it must move and what has to land before it can move it.':
    'Seis intervenciones, secuenciadas. Cada una indica su responsable, su fecha límite, la señal que debe mover y lo que debe completarse antes de poder moverla.',
  'Diagnosis without sequence produces activity rather than movement. Impact is verified by signal movement after execution — never by task completion.':
    'El diagnóstico sin secuencia produce actividad, no movimiento. El impacto se verifica por el desplazamiento de la señal tras la ejecución, nunca por la finalización de una tarea.',
  'Ordered by commercial exposure, urgency, effort and competitive pressure.':
    'Ordenado por exposición comercial, urgencia, esfuerzo y presión competitiva.',
  'Open the full intervention plan': 'Abrir el plan de intervención completo',
  Priority: 'Prioridad',
  'Expected impact': 'Impacto esperado',
  'Verified by: {metric}': 'Verificado por: {metric}',
  Owner: 'Responsable',
  Deadline: 'Fecha límite',
  Dependencies: 'Dependencias',
  and: 'y',
  'Cannot move its signal until <b>{blockers}</b> lands.':
    'No puede mover su señal hasta que se complete <b>{blockers}</b>.',
  'None. Can start immediately.': 'Ninguna. Puede iniciarse de inmediato.',

  /* --- Q7 · The executive position --------------------------------------- */
  'Decision Health': 'Salud de la decisión',
  'The binding constraint': 'La restricción determinante',
  'Held down primarily by {vector}.': 'Frenada principalmente por {vector}.',
  '{vector} reads <b>{score} of 100</b> and carries the heaviest weight in the index at <b>{weight}%</b>. Lowest score, largest lever — every other measure is capped by it.':
    '{vector} marca <b>{score} de 100</b> y soporta el mayor peso del índice, un <b>{weight}%</b>. La puntuación más baja y la palanca más grande: todas las demás medidas quedan limitadas por ella.',
  '{vector} reads <b>{score}</b>. The offer matches demand. The constraint is entirely on the evidence side, which is the side a business can change.':
    '{vector} marca <b>{score}</b>. La oferta se ajusta a la demanda. La restricción está por completo en el lado de la evidencia, que es el lado que una empresa puede cambiar.',
  'What Decision Health is made of': 'De qué se compone la salud de la decisión',
  'Weighted, published, recomputed monthly':
    'Ponderado, publicado y recalculado mensualmente',
  'Binding constraint': 'Restricción determinante',
  'weight {pct}%': 'peso {pct}%',
  'Authority carries the heaviest weight in the index and the largest deficit. Every other vector is capped by it, so it is the only starting point that moves more than one measure.':
    'La autoridad soporta el mayor peso del índice y el mayor déficit. Todos los demás vectores quedan limitados por ella, de modo que es el único punto de partida que mueve más de una medida.',
  'Open the full executive position': 'Abrir la posición ejecutiva completa',

  /* --- Run it on your own business --------------------------------------- */
  'Enter a domain and one signal is released immediately. The rest of the position requires an account or a purchase — and the locked panels state exactly what sits behind them.':
    'Introduzca un dominio y se libera una señal de inmediato. El resto de la posición requiere una cuenta o una compra, y los paneles bloqueados indican exactamente qué contienen.',
  'Your domain': 'Su dominio',
  'Run instant preview': 'Ejecutar vista previa instantánea',
  'Re-run preview': 'Volver a ejecutar la vista previa',
  'Seeded demonstration. This environment always reconstructs Northwind Supply, an industrial distributor, so every figure stays verifiable.':
    'Demostración con datos de partida. Este entorno siempre reconstruye Northwind Supply, un distribuidor industrial, de modo que cada cifra sigue siendo verificable.',
  'AI recognition': 'Reconocimiento por IA',
  'Best Google position': 'Mejor posición en Google',
  'Not ranking': 'Sin posicionamiento',
  'Narrative ownership': 'Dominio del relato',
  'Strongest competitor': 'Competidor más fuerte',
  '{score}/100 recognition': 'reconocimiento {score}/100',
  '{pct} of recommendations': '{pct} de las recomendaciones',
  'Unlocked signal': 'Señal desbloqueada',
  'Behind the gate': 'Tras el acceso',
  '<b>{n}</b> further readouts, each with evidence, exposure and a prescribed action.':
    '<b>{n}</b> análisis adicionales, cada uno con su evidencia, su exposición y una acción prescrita.',
  'Competitor capture, authority evidence, paid dependency, missed decisions, narrative control, trust readiness and strategic timing.':
    'Captura por competidores, evidencia de autoridad, dependencia del pago, decisiones perdidas, control del relato, preparación para la confianza y momento estratégico.',
  'Unlock full intelligence': 'Desbloquear la inteligencia completa',
  'Buy a single answer': 'Comprar una sola respuesta',
  'See a single answer': 'Ver una sola respuesta',

  /* --- The ecosystem and the machinery ----------------------------------- */
  'The intelligence ecosystem': 'El ecosistema de inteligencia',
  'Seven questions were asked above. {n} models stand behind them.':
    'Arriba se plantearon siete preguntas. Detrás de ellas hay {n} modelos.',
  'Every category holds the models that answer one kind of commercial question — including a great many that businesses have never been able to measure, because nothing existed to measure them with.':
    'Cada categoría reúne los modelos que responden a un tipo de pregunta comercial, incluidas muchas que las empresas nunca han podido medir, porque no existía nada con qué medirlas.',
  'intelligence modules in total, each answering one business question with evidence, analysis and a recommendation.':
    'módulos de inteligencia en total, cada uno responde a una pregunta de negocio con evidencia, análisis y una recomendación.',
  'Explore the intelligence ecosystem': 'Explorar el ecosistema de inteligencia',
  Underneath: 'Por debajo',
  'Every answer on this page is produced by an intelligence engine.':
    'Cada respuesta de esta página la produce un motor de inteligencia.',
  'Twelve engines run beneath the questions. They are named here for completeness — nobody buys an engine, and nothing above required you to know one existed.':
    'Doce motores funcionan bajo estas preguntas. Se nombran aquí por exhaustividad: nadie compra un motor, y nada de lo anterior exigía saber que existía.',
  'Four engines are built in this environment. All twelve appear on the':
    'En este entorno hay cuatro motores implementados. Los doce aparecen en la',
  'engines overview': 'vista general de motores',

  /* --- The close ---------------------------------------------------------- */
  'Every day the window stays open, the same position costs less to take. Every day after it closes, it costs more.':
    'Cada día que la ventana permanece abierta, tomar la misma posición cuesta menos. Cada día después de que se cierre, cuesta más.',
  'See how AI decides about you': 'Vea cómo la IA decide sobre usted',
  'Every figure on this page is computed from {n} tracked commercial decisions across six AI engines.':
    'Cada cifra de esta página se calcula a partir de {n} decisiones comerciales monitorizadas en seis motores de IA.',
  'See the methodology': 'Ver la metodología',

  /* --- Hero · trust strip and the reconstruction ------------------------- */
  'Six AI engines observed': 'Seis motores de IA observados',
  '24 commercial decisions tracked': '24 decisiones comerciales monitorizadas',
  'Evidence on every claim': 'Evidencia en cada afirmación',
  'Confidence and limits stated': 'Confianza y límites declarados',
  'A buyer asks AI': 'Un comprador consulta a la IA',
  'AI looks for proof it can cite':
    'La IA busca una prueba que pueda citar',
  'Independent sources an engine can cite when it recommends a supplier. Your own website does not count — engines treat self-description as a claim, not as evidence.':
    'Fuentes independientes que un motor puede citar cuando recomienda un proveedor. Su propio sitio web no cuenta: los motores tratan la autodescripción como una afirmación, no como evidencia.',
  'So AI recommends': 'Y por eso la IA recomienda',
  'Your business was named by <b>{named} of {total}</b> engines. Not because the offer is weaker — because <b>{theirs} sources outrank {ours}</b> when a system has to stand behind an answer.':
    'Su empresa fue mencionada por <b>{named} de {total}</b> motores. No porque la oferta sea más débil, sino porque <b>{theirs} fuentes superan a {ours}</b> cuando un sistema debe responder por una respuesta.',
  'What changes the answer': 'Qué cambia la respuesta',
  '{n} sources': '{n} fuentes',
  '{name}: {n} independent sources': '{name}: {n} fuentes independientes',
  'A reconstruction of one AI buying decision: the question a buyer asked, the {theirs} independent sources supporting {winner} against {ours} supporting your business — a {advantage}× evidence advantage — the resulting recommendation, and the intervention that changes it.':
    'Reconstrucción de una decisión de compra mediada por IA: la pregunta que hizo un comprador, las {theirs} fuentes independientes que respaldan a {winner} frente a las {ours} que respaldan a su empresa — una ventaja de evidencia de {advantage}× — la recomendación resultante y la intervención que la cambia.',

  /* --- The strategic window ---------------------------------------------- */
  '{position} market': 'Mercado {position}',
  '{n} months open': 'abierta {n} meses',
  '<b>{n}</b> days of advantage remain': 'Quedan <b>{n}</b> días de ventaja',
  'After <b>{date}</b>, the same position still exists — it just has to be taken from an incumbent recommendation rather than claimed from open ground.':
    'Después del <b>{date}</b>, la misma posición sigue existiendo — solo que habrá que arrebatarla a una recomendación ya asentada en lugar de ocuparla en terreno libre.',
  Today: 'Hoy',
  'Window opened': 'La ventana se abrió',
  'Advantage holds until': 'La ventaja se mantiene hasta',
  'Window closes': 'La ventana se cierra',
  'Category language began forming.':
    'El lenguaje de la categoría empezó a formarse.',
  'Authority built before this becomes the default answer.':
    'La autoridad construida antes de esta fecha se convierte en la respuesta por defecto.',
  'Displacement cost rises materially.':
    'El coste de desplazamiento sube de forma sustancial.',
  'Why this estimate exists': 'Por qué existe esta estimación',
  'Market readiness reads <b>{n} of 100</b>. Buyers are educated. The answers they receive are not yet fixed.':
    'La madurez del mercado marca <b>{n} de 100</b>. Los compradores están informados. Las respuestas que reciben aún no están fijadas.',

  /* --- The decision journey ----------------------------------------------- */
  'Stage {n}': 'Etapa {n}',
  '{volume}/mo · {share}': '{volume}/mes · {share}',
  '{pct} coverage': 'cobertura {pct}',
  'Analytics and CRM': 'Analítica y CRM',
  'Requires a visit, form or record to exist':
    'Requiere que exista una visita, un formulario o un registro',
  'SEO platforms': 'Plataformas de SEO',
  'Requires a tracked query with search volume':
    'Requiere una consulta monitorizada con volumen de búsqueda',
  'Observes the decision itself, at every stage':
    'Observa la decisión en sí, en cada etapa',
  Visible: 'Visible',
  Blind: 'Ciego',
  'Executive conclusion': 'Conclusión ejecutiva',
  'Conventional tooling begins observing at stage four — after the buyer has already decided what to buy and is choosing whom to buy it from.':
    'Las herramientas convencionales empiezan a observar en la cuarta etapa, cuando el comprador ya ha decidido qué comprar y está eligiendo a quién.',
  'The first three stages generate no visit, click, lead or CRM record. They are not measured badly; they are not measured at all.':
    'Las tres primeras etapas no generan visita, clic, cliente potencial ni registro en el CRM. No se miden mal: no se miden en absoluto.',

  /* --- The Google vs AI gap matrix ---------------------------------------- */
  'Compound blind spots': 'Puntos ciegos compuestos',
  'Absent from both surfaces on high-value questions. The most expensive class of gap.':
    'Ausente en ambas superficies en preguntas de alto valor. La clase de brecha más cara.',
  'Recoverable search': 'Búsqueda recuperable',
  'Ranking in Google but absent from AI answers. Existing authority is not reaching the AI surface.':
    'Posicionado en Google pero ausente de las respuestas de IA. La autoridad existente no llega a la superficie de la IA.',
  Aligned: 'Alineado',
  'Visible in Google and recommended by AI. No action required.':
    'Visible en Google y recomendado por la IA. No requiere acción.',
  'of {total}': 'de {total}',
  'Commercial question': 'Pregunta comercial',
  Volume: 'Volumen',
  'Google visibility': 'Visibilidad en Google',
  'AI recommendation': 'Recomendación de la IA',
  Classification: 'Clasificación',
  'Not in top 100': 'Fuera de los 100 primeros',
  'Position {n}': 'Posición {n}',
  Recommended: 'Recomendado',
  Absent: 'Ausente',
  'Showing {shown} of {total} tracked commercial questions.':
    'Mostrando {shown} de {total} preguntas comerciales monitorizadas.',

  /* --- The decision graph -------------------------------------------------- */
  Input: 'Entrada',
  Interpretation: 'Interpretación',
  Market: 'Mercado',
  Channel: 'Canal',
  Outcome: 'Resultado',
  Action: 'Acción',
  'Decision intelligence graph. Thirteen connected signals ending in a prescription.':
    'Grafo de inteligencia de decisión. Trece señales conectadas que terminan en una prescripción.',
  '{label}: {value}. {kind}. {evidence} Activate to open the readout.':
    '{label}: {value}. {kind}. {evidence} Actívelo para abrir el análisis.',
  'Hover or focus a node to isolate its relationships. Select any node to open the evidence behind it.':
    'Pase el cursor sobre un nodo o enfóquelo para aislar sus relaciones. Seleccione cualquier nodo para abrir la evidencia que lo sustenta.',
  'Read the graph as a table': 'Leer el grafo como tabla',
  Signal: 'Señal',
  Value: 'Valor',
  'Leads to': 'Conduce a',
  Evidence: 'Evidencia',

  /* --- Product screen slots ------------------------------------------------- */
  'Awaiting real screen': 'A la espera de la captura real',
  'Anonymised or demonstration data only. No customer names, domains, personal data or confidential figures.':
    'Solo datos anonimizados o de demostración. Sin nombres de clientes, dominios, datos personales ni cifras confidenciales.',
  'Executive Mission Control — full window, all measures visible':
    'Centro de mando ejecutivo — ventana completa, todas las medidas visibles',
  'Executive Mission Control. Every measure opens the evidence behind it. Anonymised demonstration data.':
    'Centro de mando ejecutivo. Cada medida abre la evidencia que la sustenta. Datos de demostración anonimizados.',
  'Action Plan — the prioritised intervention list':
    'Plan de acción — la lista priorizada de intervenciones',
  'Every action carries an owner, a deadline and the signal it must move. Anonymised demonstration data.':
    'Cada acción lleva un responsable, una fecha límite y la señal que debe mover. Datos de demostración anonimizados.',

  /* --- Chrome outside the dictionary --------------------------------------- */
  'Switch to light theme': 'Cambiar al tema claro',
  'Switch to dark theme': 'Cambiar al tema oscuro',
  'Powered by Gintex': 'Con tecnología de Gintex',
  'GeoRepute — home': 'GeoRepute — inicio',
  Open: 'Abrir',

  /* --- Effort, urgency, trend and confidence chips ------------------------- */
  'low effort': 'esfuerzo bajo',
  'medium effort': 'esfuerzo medio',
  'high effort': 'esfuerzo alto',
  Immediate: 'Inmediato',
  'This quarter': 'Este trimestre',
  Monitor: 'Vigilar',
  Improving: 'Mejorando',
  Stable: 'Estable',
  Deteriorating: 'Empeorando',
  High: 'Alta',
  Medium: 'Media',
  Directional: 'Direccional',
  'Insufficient history': 'Histórico insuficiente',

  /* --- Score-meter accessible name ------------------------------------------ */
  '{score} out of {max}': '{score} de {max}',

  /* --- Image credit --------------------------------------------------------- */
  'NASA on Unsplash': 'NASA en Unsplash',

  /* --- The demonstration's buyer queries -------------------------------------
     Translated rather than left as literal English search strings. A reader is
     being shown what an AI buying decision looks like, and a buyer reading a
     Spanish page types Spanish. FLAGGED FOR THE CLIENT: if the demo is ever
     pointed at a real Spanish-speaking market, these should be replaced with
     the phrases that market actually searches, not translations of the US
     ones — that is a content decision, not a translation one. */
  'Which industrial fastener suppliers are most reliable in the Midwest?':
    '¿Qué proveedores de fijaciones industriales son los más fiables en el Medio Oeste?',
  'industrial fastener supplier': 'proveedor de fijaciones industriales',
  'fastener distributor midwest': 'distribuidor de fijaciones medio oeste',
  'vendor managed inventory mro': 'inventario gestionado por proveedor mro',
  'hydraulic fittings supplier': 'proveedor de racores hidráulicos',
  'industrial supply company': 'empresa de suministros industriales',
  'bulk fasteners chicago': 'fijaciones a granel chicago',
  'grade 8 bolts bulk': 'pernos grado 8 a granel',
  'mro distributor': 'distribuidor de suministros de mantenimiento',

  /* ==========================================================================
     THE HOW-IT-WORKS PAGE.

     Almost all of it comes from the `loop` dictionary block. What lands here
     is the one inline label and the screenshot slots the four stages render —
     ProductScreen puts both `surface` and `caption` through t().
     ======================================================================= */

  'From the platform': 'Desde la plataforma',

  /* --- PLAN · the diagnosis surfaces --------------------------------------- */
  'Deep Diagnosis — the full scan result across connected signals':
    'Diagnóstico profundo — el resultado completo del análisis en las señales conectadas',
  'Deep Diagnosis across AI engines, search, competitors, market and digital presence. Anonymised demonstration data.':
    'Diagnóstico profundo en motores de IA, búsqueda, competidores, mercado y presencia digital. Datos de demostración anonimizados.',
  'Competitive Intelligence — the comparison matrix':
    'Inteligencia competitiva — la matriz de comparación',
  'Who receives the decision instead, and the evidence that puts them there. Anonymised demonstration data.':
    'Quién recibe la decisión en su lugar y la evidencia que lo sitúa ahí. Datos de demostración anonimizados.',
  'AI Intelligence — per-engine recognition and recommendation':
    'Inteligencia de IA — reconocimiento y recomendación por motor',
  'What each AI engine understands, and when it recommends. Anonymised demonstration data.':
    'Qué entiende cada motor de IA y cuándo recomienda. Datos de demostración anonimizados.',
  'Google vs AI Visibility — the gap matrix':
    'Visibilidad Google frente a la IA — la matriz de brechas',
  'Two discovery surfaces, measured separately. Anonymised demonstration data.':
    'Dos superficies de descubrimiento, medidas por separado. Datos de demostración anonimizados.',
  'Market Intelligence — category and demand view':
    'Inteligencia de mercado — vista de categoría y demanda',
  'What is changing in the market, and which of it is addressable. Anonymised demonstration data.':
    'Qué está cambiando en el mercado y qué parte es abordable. Datos de demostración anonimizados.',
  'Narrative Intelligence — narrative ownership and movement':
    'Inteligencia narrativa — dominio del relato y su evolución',
  'Which account of the category is circulating, and whose language it uses. Anonymised demonstration data.':
    'Qué versión de la categoría circula y con el lenguaje de quién está formulada. Datos de demostración anonimizados.',
  'Trust & Authority — independent-source verification view':
    'Confianza y autoridad — vista de verificación por fuentes independientes',
  'What a system can cite when it has to justify a recommendation. Anonymised demonstration data.':
    'Qué puede citar un sistema cuando debe justificar una recomendación. Datos de demostración anonimizados.',

  /* --- DO · the execution surfaces ----------------------------------------- */
  'Strategy — objectives translated into targeted signals':
    'Estrategia — objetivos traducidos en señales concretas',
  'Objectives in, prioritised strategy out. Each objective bound to a signal expected to move. Anonymised demonstration data.':
    'Entran objetivos, sale una estrategia priorizada. Cada objetivo va ligado a una señal que se espera mover. Datos de demostración anonimizados.',
  'Content & media generation — output bound to identified gaps':
    'Generación de contenido y medios — producción ligada a las brechas detectadas',
  'Each asset traced back to the gap it was created to close. Anonymised demonstration data.':
    'Cada pieza se rastrea hasta la brecha que se creó para cerrar. Datos de demostración anonimizados.',
  'Execution calendar — sequenced distribution':
    'Calendario de ejecución — distribución secuenciada',
  'Sequence and timing, derived from the strategy rather than from a posting cadence. Anonymised demonstration data.':
    'Secuencia y ritmo, derivados de la estrategia y no de una cadencia de publicación. Datos de demostración anonimizados.',
  'Distribution — connected digital assets and publishing state':
    'Distribución — activos digitales conectados y estado de publicación',
  'Where each asset was published, across connected properties. Anonymised demonstration data.':
    'Dónde se publicó cada pieza, en todas las propiedades conectadas. Datos de demostración anonimizados.',

  /* --- CHECK and ACT ------------------------------------------------------- */
  'Measurement — the before → action → after comparison table':
    'Medición — la tabla comparativa antes → acción → después',
  'Not what was published. What changed. Anonymised demonstration data.':
    'No lo que se publicó. Lo que cambió. Datos de demostración anonimizados.',
  'Learning — measured outcome feeding the next recommendation':
    'Aprendizaje — resultado medido que alimenta la siguiente recomendación',
  'The previous recommendation, what it moved, and the corrected recommendation that follows. Anonymised demonstration data.':
    'La recomendación anterior, qué movió y la recomendación corregida que se deriva. Datos de demostración anonimizados.',

  /* ==========================================================================
     THE METHODOLOGY PAGE.

     The evidence sources, model rules and limitations reach t() through a
     variable rather than a literal, so scripts/i18n-keys.mjs cannot see them.
     They are listed here by hand; the page audit is what catches a miss.
     ======================================================================= */

  /* --- Hero ---------------------------------------------------------------- */
  'The stronger the claim, the stronger the evidence path must be.':
    'Cuanto más fuerte es la afirmación, más sólido debe ser el camino probatorio.',
  'Every conclusion in this system can be traced to a date, a source, an engine, a prompt or a connected dataset. This page states how, and where the boundaries are.':
    'Toda conclusión de este sistema puede rastrearse hasta una fecha, una fuente, un motor, una consulta o un conjunto de datos conectado. Esta página explica cómo, y dónde están los límites.',
  'Methodology version {version} · observed {date}':
    'Metodología versión {version} · observado el {date}',

  /* --- GEON ---------------------------------------------------------------- */
  'The GEON framework': 'El marco GEON',
  'Six vectors, one published weighting': 'Seis vectores, una ponderación publicada',
  'The Decision Health Index is a weighted function of these six vectors — not a score assigned by judgement. The weighting is published below so the index can be recomputed independently.':
    'El índice de salud de la decisión es una función ponderada de estos seis vectores, no una puntuación asignada por criterio. La ponderación se publica más abajo para que el índice pueda recalcularse de forma independiente.',
  'Decision Health Index weighting': 'Ponderación del índice de salud de la decisión',
  'Yields <b>{score} of 100</b> for the seeded organisation. Authority carries the heaviest weight and the lowest score, which is why it is the binding constraint.':
    'Arroja <b>{score} de 100</b> para la organización de demostración. La autoridad soporta el mayor peso y la puntuación más baja, y por eso es la restricción determinante.',
  'GEON assessment. {readings}. Lowest vector is {lowest}.':
    'Evaluación GEON. {readings}. El vector más bajo es {lowest}.',
  '{label} {score} of 100': '{label} {score} de 100',

  /* --- Evidence sources ---------------------------------------------------- */
  'Where the observations come from': 'De dónde proceden las observaciones',
  'This environment observes <b>{questions}</b> decision questions across six AI engines, and <b>{keywords}</b> commercial keywords in Google.':
    'Este entorno observa <b>{questions}</b> preguntas de decisión en seis motores de IA y <b>{keywords}</b> palabras clave comerciales en Google.',
  'Public AI responses': 'Respuestas públicas de la IA',
  'Answers observed from six engines against a fixed question set, recorded with engine, date and full response.':
    'Respuestas observadas en seis motores frente a un conjunto fijo de preguntas, registradas con el motor, la fecha y la respuesta íntegra.',
  'Third-party search and market data':
    'Datos de búsqueda y mercado de terceros',
  'Keyword volume, organic position, competition and cost per click.':
    'Volumen de palabras clave, posición orgánica, competencia y coste por clic.',
  'Connected first-party analytics': 'Analítica propia conectada',
  'Search Console and Analytics, where the customer connects them. Improves confidence; never required.':
    'Search Console y Analytics, cuando el cliente los conecta. Mejoran la confianza; nunca son obligatorios.',
  'Public competitor information': 'Información pública sobre competidores',
  'Published positions, citations and the sources engines reach for when recommending a competitor.':
    'Posiciones publicadas, citas y fuentes a las que recurren los motores al recomendar a un competidor.',
  'Public content, reputation and trust signals':
    'Contenido público, reputación y señales de confianza',
  'Independent validation, review corpora and cross-source consistency.':
    'Validación independiente, corpus de reseñas y coherencia entre fuentes.',
  'Customer-configured business assumptions':
    'Supuestos de negocio configurados por el cliente',
  'Average deal value, conversion rates and revenue split by decision stage. Always labelled as customer-provided.':
    'Valor medio de la operación, tasas de conversión y reparto de ingresos por etapa de decisión. Siempre etiquetados como aportados por el cliente.',
  'Historical GeoRepute scans and action outcomes':
    'Análisis anteriores de GeoRepute y resultados de las acciones',
  'Prior observations and whether an executed action moved the signal it targeted.':
    'Observaciones previas y si una acción ejecutada movió la señal a la que apuntaba.',

  /* --- Confidence ---------------------------------------------------------- */
  'Every conclusion carries its own confidence':
    'Cada conclusión lleva su propia confianza',
  'Confidence is attached to the individual conclusion, not to the product. Two findings in the same readout can carry different confidence, and they frequently do.':
    'La confianza se adjunta a la conclusión concreta, no al producto. Dos hallazgos del mismo análisis pueden tener confianzas distintas, y con frecuencia las tienen.',

  /* --- Financial model ----------------------------------------------------- */
  'Financial model': 'Modelo financiero',
  'Directional, ranged, and never described as confirmed':
    'Direccional, por rangos y nunca descrito como confirmado',
  'The model': 'El modelo',
  'All values are shown as ranges, never as point estimates.':
    'Todos los valores se muestran como rangos, nunca como estimaciones puntuales.',
  'No value is described as confirmed lost revenue.':
    'Ningún valor se describe como ingresos perdidos confirmados.',
  'Every model exposes its assumptions and data boundaries.':
    'Cada modelo expone sus supuestos y sus límites de datos.',
  'Connected first-party conversion data improves confidence.':
    'Los datos de conversión propios conectados mejoran la confianza.',
  'Prediction is withheld when history is insufficient.':
    'La predicción se retiene cuando el histórico es insuficiente.',
  'Every exported brief carries methodology and limitation language.':
    'Todo informe exportado incorpora el texto de metodología y limitaciones.',
  'Search economics, derived': 'Economía de la búsqueda, derivada',
  'Blended CPC': 'CPC combinado',
  /* 'Break-even CPC' and 'Above break-even' already have entries in the seed
     section below. */
  'Break-even is average order value × gross margin × site conversion. Paid dependency is classified from the ratio of blended CPC to break-even — it is derived, never asserted.':
    'El punto de equilibrio es el valor medio del pedido × margen bruto × conversión del sitio. La dependencia del pago se clasifica a partir de la relación entre el CPC combinado y ese punto: se deriva, nunca se afirma.',

  /* --- Limitations --------------------------------------------------------- */
  Limitations: 'Limitaciones',
  'What this system cannot tell you': 'Lo que este sistema no puede decirle',
  'AI engine answers vary between runs and between users. Observations are point-in-time samples, not guarantees of what any individual buyer sees.':
    'Las respuestas de los motores de IA varían entre ejecuciones y entre usuarios. Las observaciones son muestras en un momento dado, no garantías de lo que ve un comprador concreto.',
  'Commercial exposure is a directional model built on customer-configured assumptions. It is useful for prioritisation and is not an audited financial statement.':
    'La exposición comercial es un modelo direccional construido sobre supuestos configurados por el cliente. Sirve para priorizar y no es un estado financiero auditado.',
  'Attribution between an executed action and a signal movement is correlational. The system records both and reports the relationship; it does not claim causation.':
    'La atribución entre una acción ejecutada y el movimiento de una señal es correlacional. El sistema registra ambos e informa de la relación; no afirma causalidad.',
  'Competitor authority counts reflect sources engines cite publicly. A competitor may hold private advantages this system cannot observe.':
    'El recuento de fuentes de autoridad de los competidores refleja lo que los motores citan públicamente. Un competidor puede tener ventajas privadas que este sistema no puede observar.',
  'Where history is insufficient, predictive conclusions are withheld rather than estimated.':
    'Cuando el histórico es insuficiente, las conclusiones predictivas se retienen en lugar de estimarse.',
  'This demonstration environment': 'Este entorno de demostración',
  'Northwind Supply is a fictional organisation. Its figures are seeded, internally consistent and derived from a single set of anchor facts — <b>{presence}</b> recommendation presence, <b>{coverage}</b> supplier-evaluation coverage, <b>{share}</b> competitor share. Every other number on this site is computed from those, and a test suite fails the build if any screen disagrees.':
    'Northwind Supply es una organización ficticia. Sus cifras parten de datos de origen, son coherentes entre sí y se derivan de un único conjunto de hechos ancla: <b>{presence}</b> de presencia en recomendaciones, <b>{coverage}</b> de cobertura en la evaluación de proveedores y <b>{share}</b> de cuota del competidor. Todas las demás cifras del sitio se calculan a partir de ellas, y una batería de pruebas hace fallar la compilación si alguna pantalla las contradice.',
  'Open Mission Control': 'Abrir el centro de mando',
  'See the engines': 'Ver los motores',

  /* ==========================================================================
     THE SEED DATA — signal names, readout prose and marketplace copy.
     ======================================================================= */

  /* --- GEON vector definitions -------------------------------------------- */
  'Whether systems understand what the business does, who it serves and when to recommend it.':
    'Si los sistemas comprenden qué hace la empresa, a quién sirve y cuándo recomendarla.',
  'The strength of reputation, validation and proof surrounding the business.':
    'La solidez de la reputación, la validación y las pruebas que rodean a la empresa.',
  'How consistently the business appears across AI and digital environments.':
    'Con qué coherencia aparece la empresa en entornos de IA y digitales.',
  'Whether the same accurate story appears across channels, markets and languages.':
    'Si el mismo relato preciso aparece en todos los canales, mercados e idiomas.',
  'How closely positioning matches customer demand and buying intent.':
    'Con qué precisión el posicionamiento se ajusta a la demanda del cliente y a la intención de compra.',
  'Whether the business is recognized as a credible expert or category leader.':
    'Si la empresa es reconocida como experto creíble o líder de categoría.',

  /* --- Engine business questions ------------------------------------------ */
  'Does AI know the business exists, and what does it think it is?':
    '¿Sabe la IA que la empresa existe, y qué cree que es?',
  'Do the two discovery surfaces agree, and what is the gap costing?':
    '¿Coinciden las dos superficies de descubrimiento, y cuánto cuesta la brecha?',
  'Who receives the decision instead, and what do they have?':
    '¿Quién recibe la decisión en su lugar, y qué tiene?',
  'What must happen next, by whom and by when?':
    '¿Qué debe ocurrir a continuación, por parte de quién y para cuándo?',
  'Where do competitors receive the decision before the business receives the lead?':
    '¿Dónde reciben los competidores la decisión antes de que la empresa reciba el contacto?',
  'Do AI engines understand who the business is and when it should be considered?':
    '¿Comprenden los motores de IA quién es la empresa y cuándo debe considerarse?',
  'Does the business exist consistently across traditional search and AI-mediated discovery?':
    '¿Existe la empresa de forma coherente tanto en la búsqueda tradicional como en el descubrimiento mediado por IA?',
  'Whose language does the market use to describe your category?':
    '¿Con el lenguaje de quién describe el mercado su categoría?',
  'Is the market ready, and does the route to it hold?':
    '¿Está el mercado preparado, y se sostiene la ruta hacia él?',

  /* --- Readout evidence and executive truths ------------------------------ */
  'Decision Health reads 41 of 100, held down primarily by Authority at 28.':
    'La salud de la decisión marca 41 de 100, frenada principalmente por la autoridad en 28.',
  'Authority carries the heaviest index weight and the largest deficit.':
    'La autoridad soporta el mayor peso del índice y el mayor déficit.',
  'GEON Authority 28 — the lowest of six vectors.':
    'Autoridad GEON en 28: el más bajo de los seis vectores.',
  'Three independent sources reference Northwind; the competitor median is fourteen.':
    'Tres fuentes independientes citan a Northwind; la mediana de los competidores es catorce.',
  'No published supplier-comparison material for engines to cite.':
    'No hay material publicado de comparación de proveedores que los motores puedan citar.',
  'Category description differs between the website and two trade directories.':
    'La descripción de la categoría difiere entre el sitio web y dos directorios sectoriales.',
  'Three of six engines misidentify the category.':
    'Tres de seis motores identifican mal la categoría.',
  'No stable entity record. Answers reference the category without naming Northwind at all.':
    'No hay registro estable de la entidad. Las respuestas aluden a la categoría sin nombrar a Northwind en absoluto.',
  'Kestrel Industrial leads five of seven supplier questions.':
    'Kestrel Industrial lidera cinco de las siete preguntas sobre proveedores.',
  'Engines cite a competitor’s evaluation criteria first.':
    'Los motores citan primero los criterios de evaluación de un competidor.',
  'Eleven tracked keywords sit outside the top ten.':
    'Once palabras clave monitorizadas quedan fuera de los diez primeros puestos.',
  'Blended CPC $9.03 against break-even $6.13.':
    'CPC combinado de 9,03 $ frente a un punto de equilibrio de 6,13 $.',
  '6 recommendation events across 144 answer slots.':
    '6 apariciones en recomendaciones sobre 144 espacios de respuesta.',
  'Supplier-evaluation coverage — the stage deciding 60% of revenue.':
    'Cobertura en la evaluación de proveedores: la etapa que decide el 60 % de los ingresos.',
  'Supplier-evaluation phrasing still varied — the category has no fixed vocabulary yet.':
    'La formulación en la evaluación de proveedores aún varía: la categoría todavía no tiene un vocabulario fijo.',
  '63 of 100 — buyers are educated, answers are not yet fixed.':
    '63 de 100: los compradores están informados, las respuestas aún no están fijadas.',
  'Demand × decision gap × estimated conversion × average deal value.':
    'Demanda × brecha de decisión × conversión estimada × valor medio de la operación.',

  /* --- The action plan ----------------------------------------------------- */
  'Direct investment at Authority first — it carries the highest weight and the largest deficit.':
    'Dirija la inversión primero a la autoridad: soporta el mayor peso y el mayor déficit.',
  'Build supplier-comparison content against the six highest-volume missed decision questions.':
    'Cree contenido de comparación de proveedores para las seis preguntas de decisión perdidas de mayor volumen.',
  'Strengthen independent authority evidence and supplier-comparison coverage.':
    'Refuerce la evidencia de autoridad independiente y la cobertura de comparación de proveedores.',
  'Resolve the Gemini entity conflation with the same-named logistics firm.':
    'Resuelva la confusión de entidades en Gemini con la empresa de logística homónima.',
  'Reallocate paid spend from keywords with a viable organic replacement path.':
    'Reasigne el gasto de pago de las palabras clave que tengan una vía viable de sustitución orgánica.',
  'Response time cited among the first three criteria by 3 of 6 engines':
    'Tiempo de respuesta citado entre los tres primeros criterios por 3 de 6 motores',
  'Gemini resolves the correct entity on 4 of 6 category questions':
    'Gemini identifica la entidad correcta en 4 de 6 preguntas de categoría',
  'Blended CPC below break-even on reallocated set':
    'CPC combinado por debajo del punto de equilibrio en el conjunto reasignado',
  'Category association correct on 5 of 6 engines':
    'Asociación de categoría correcta en 5 de 6 motores',
  'Gemini recognition 24 → 45': 'Reconocimiento en Gemini 24 → 45',

  /* --- Composite measures and the GEON vectors ---------------------------- */
  'Methodology GEON-2.4': 'Metodología GEON-2.4',
  'Decision Health Index': 'Índice de salud de la decisión',
  'Decision Health Index at 41 of 100':
    'Índice de salud de la decisión en 41 de 100',
  Composite: 'Compuesto',
  'Composite model': 'Modelo compuesto',
  'Index weighting': 'Ponderación del índice',
  'GEON vectors': 'Vectores GEON',
  'GEON Authority': 'Autoridad GEON',
  'GEON Trust': 'Confianza GEON',
  '38 of 100 average': '38 de 100 de media',
  '44 of 100': '44 de 100',
  '28 of 100': '28 de 100',
  'The index is a weighted function of the six GEON vectors, not a score assigned by judgement. Market Fit at 72 confirms the offer matches demand; the constraint is entirely on the evidence side.':
    'El índice es una función ponderada de los seis vectores GEON, no una puntuación asignada por criterio. El ajuste al mercado en 72 confirma que la oferta responde a la demanda; la restricción está por completo en el lado de la evidencia.',
  'Recompute the index from re-observed GEON vectors monthly. The weighting is published and versioned.':
    'Recalcule el índice a partir de los vectores GEON reobservados cada mes. La ponderación está publicada y versionada.',

  /* --- Recognition --------------------------------------------------------- */
  'Recognition by engine': 'Reconocimiento por motor',
  'AI Recognition Matrix': 'Matriz de reconocimiento por IA',
  'AI Recognition Intelligence': 'Inteligencia de reconocimiento por IA',
  'AI Visibility Intelligence': 'Inteligencia de visibilidad en IA',
  'AI Search Presence': 'Presencia en la búsqueda con IA',
  'Entity Understanding': 'Comprensión de la entidad',
  'Entity category association': 'Asociación de la entidad a una categoría',
  'Category association': 'Asociación de categoría',
  'Entity disambiguation': 'Desambiguación de la entidad',
  'Entity record': 'Registro de la entidad',
  'Confusion detection': 'Detección de confusión',
  'Confusion Detector': 'Detector de confusión',
  'Outdated knowledge': 'Conocimiento desactualizado',
  'Average recognition score': 'Puntuación media de reconocimiento',
  'Average recognition score 38 → 55':
    'Puntuación media de reconocimiento 38 → 55',
  'Correctly categorised by all six engines.':
    'Categorizada correctamente por los seis motores.',
  'All six engines': 'Los seis motores',
  'Incomplete on 3 engines': 'Incompleto en 3 motores',
  Inconsistent: 'Inconsistente',
  'Recognition decay': 'Deterioro del reconocimiento',
  'AI understanding': 'Comprensión por parte de la IA',
  'An engine that cannot categorise a business cannot recommend it. This is upstream of every visibility metric: no amount of content moves an answer if the entity record is wrong.':
    'Un motor que no puede categorizar una empresa no puede recomendarla. Esto antecede a cualquier métrica de visibilidad: ninguna cantidad de contenido mueve una respuesta si el registro de la entidad es erróneo.',
  'Recognition is never uniform. A business can be well understood by one engine and structurally invisible to another that a different half of its buyers use.':
    'El reconocimiento nunca es uniforme. Una empresa puede ser bien comprendida por un motor y estructuralmente invisible para otro que usa la otra mitad de sus compradores.',
  'Whether AI systems hold an accurate, current and unambiguous record of the business, and whether that record survives into the answers buyers receive. Everything else on this page is downstream of it — no measure improves while the underlying record is wrong.':
    'Si los sistemas de IA mantienen un registro exacto, actualizado e inequívoco de la empresa, y si ese registro sobrevive hasta las respuestas que reciben los compradores. Todo lo demás en esta página se deriva de ello: ninguna medida mejora mientras el registro subyacente sea erróneo.',
  'Whether the business is filed under the categories buyers actually ask about, or under one that is accurate but that nobody searches.':
    'Si la empresa está clasificada en las categorías por las que los compradores realmente preguntan, o en una que es exacta pero que nadie busca.',
  'Contradictions across the public record — different categories, claims or descriptions between the site, directories and third-party profiles.':
    'Contradicciones en el registro público: categorías, afirmaciones o descripciones distintas entre el sitio, los directorios y los perfiles de terceros.',
  'The distance between what a company says it is and what machines have independently concluded it is — usually wider than any executive expects.':
    'La distancia entre lo que una empresa dice ser y lo que las máquinas han concluido de forma independiente que es; suele ser mayor de lo que cualquier directivo espera.',
  'Consistent category language across its own site, trade directories and three independent publications gives engines a single unambiguous record to resolve.':
    'Un lenguaje de categoría coherente en su propio sitio, en los directorios sectoriales y en tres publicaciones independientes da a los motores un único registro inequívoco que resolver.',
  'Three of six engines misclassify what Northwind sells. No content investment can move an answer while the entity record is wrong.':
    'Tres de seis motores clasifican mal lo que vende Northwind. Ninguna inversión en contenido puede mover una respuesta mientras el registro de la entidad sea erróneo.',
  'Three of six AI engines misidentify what Northwind sells, and one does not recognise it as a distinct business at all.':
    'Tres de seis motores de IA identifican mal lo que vende Northwind, y uno no la reconoce en absoluto como una empresa diferenciada.',
  'Gemini recognises Northwind at 24 of 100 and recommends it in zero questions. The cause is a disambiguation failure, not a content gap.':
    'Gemini reconoce a Northwind con 24 de 100 y no la recomienda en ninguna pregunta. La causa es un fallo de desambiguación, no una carencia de contenido.',
  'Publish a single canonical entity description and propagate identical category language to trade directories and structured data.':
    'Publique una única descripción canónica de la entidad y propague un lenguaje de categoría idéntico a los directorios sectoriales y a los datos estructurados.',
  'Publish a canonical entity description and propagate identical category language to trade directories and structured data.':
    'Publique una descripción canónica de la entidad y propague un lenguaje de categoría idéntico a los directorios sectoriales y a los datos estructurados.',
  'Re-observe entity understanding per engine. Success is category association correct on five of six engines.':
    'Reobserve la comprensión de la entidad motor por motor. El éxito es una asociación de categoría correcta en cinco de seis motores.',
  'Resolve category description inconsistency across all public sources, then pursue verifiable third-party validation.':
    'Resuelva la incoherencia en la descripción de la categoría en todas las fuentes públicas y, a continuación, busque una validación verificable de terceros.',

  /* --- Decision stage and recommendation ---------------------------------- */
  'Decision-stage control': 'Control en la etapa de decisión',
  'Decision stage': 'Etapa de decisión',
  'Decision volume': 'Volumen de decisiones',
  'AI recommendation presence': 'Presencia en las recomendaciones de la IA',
  'Recommendation share': 'Cuota de recomendaciones',
  'Recommendation analysis': 'Análisis de recomendaciones',
  'Recommendation Map': 'Mapa de recomendaciones',
  'Competitor recommendation share': 'Cuota de recomendaciones del competidor',
  'Competitor share': 'Cuota del competidor',
  'Competitor capture': 'Captura por el competidor',
  'Questions with AI presence': 'Preguntas con presencia en IA',
  'Questions with presence': 'Preguntas con presencia',
  'Questions with presence 5 → 12 of 24':
    'Preguntas con presencia 5 → 12 de 24',
  'Prompt coverage': 'Cobertura de consultas',
  'Missed prompts': 'Consultas perdidas',
  'Missed Prompts': 'Consultas perdidas',
  'Winning prompts': 'Consultas ganadas',
  'Query Inventory': 'Inventario de consultas',
  'Presence on 12 of 24 tracked questions':
    'Presencia en 12 de las 24 preguntas monitorizadas',
  'Supplier-evaluation first mention':
    'Primera mención en la evaluación de proveedores',
  'Supplier-evaluation coverage': 'Cobertura en la evaluación de proveedores',
  'Supplier-evaluation coverage 7% → 19%':
    'Cobertura en la evaluación de proveedores 7 % → 19 %',
  '7% → 19% target': 'objetivo 7 % → 19 %',
  'Share of decisions rather than share of traffic — measured where the choice is actually made rather than where it is later recorded.':
    'Cuota de decisiones en lugar de cuota de tráfico: medida donde realmente se toma la elección, no donde se registra después.',
  'Position measured only on questions that decide a purchase, with the vanity terms that inflate most reporting deliberately excluded.':
    'Posición medida solo en las preguntas que deciden una compra, excluyendo deliberadamente los términos de vanidad que inflan la mayoría de los informes.',
  'The named questions a rival wins every time, which is what converts a vague sense of losing into a finite list of things to go and fix.':
    'Las preguntas concretas que un rival gana siempre, que es lo que convierte una vaga sensación de pérdida en una lista finita de cosas que corregir.',
  'These are not lost leads, because no lead was ever created. The decision completed inside the engine, and conventional analytics recorded nothing at all.':
    'No son clientes potenciales perdidos, porque nunca se creó ninguno. La decisión se completó dentro del motor y la analítica convencional no registró nada.',
  'Nineteen of twenty-four decisions complete without the brand. These six carry the largest share of decision-stage demand.':
    'Diecinueve de veinticuatro decisiones se completan sin la marca. Estas seis concentran la mayor parte de la demanda en la etapa de decisión.',
  'Northwind appears in 7% of supplier-evaluation answers — the stage that decides 60% of revenue and that Kestrel controls in five of seven questions.':
    'Northwind aparece en el 7 % de las respuestas de evaluación de proveedores, la etapa que decide el 60 % de los ingresos y que Kestrel controla en cinco de siete preguntas.',
  'The stage that decides 60% of revenue carries under 15% of query volume — so the weakness is invisible to volume-led tooling.':
    'La etapa que decide el 60 % de los ingresos concentra menos del 15 % del volumen de consultas, de modo que la debilidad es invisible para las herramientas guiadas por volumen.',
  'The stage where the vendor is chosen. Presence here decides whether the business reaches the shortlist at all.':
    'La etapa en la que se elige al proveedor. La presencia aquí decide si la empresa llega siquiera a la lista corta.',
  'Buyers at supplier evaluation have already chosen a solution and are choosing a vendor. This stage carries under 15% of query volume, so volume-led tooling ranks it as unimportant — while it decides most of the revenue. Absence here is exclusion from the shortlist at the moment the order is assigned.':
    'En la evaluación de proveedores, los compradores ya han elegido una solución y están eligiendo proveedor. Esta etapa concentra menos del 15 % del volumen de consultas, por lo que las herramientas guiadas por volumen la consideran irrelevante, mientras decide la mayor parte de los ingresos. La ausencia aquí supone la exclusión de la lista corta en el momento en que se asigna el pedido.',
  'Prioritise the six highest-volume missed questions and publish material that answers each one directly and citably.':
    'Priorice las seis preguntas perdidas de mayor volumen y publique material que responda a cada una de forma directa y citable.',
  'Re-run all 24 questions monthly across all six engines; record presence per engine per question.':
    'Vuelva a ejecutar las 24 preguntas cada mes en los seis motores; registre la presencia por motor y por pregunta.',
  'Re-run the supplier-evaluation prompt set monthly. Coverage is verified by recommendation slots won across all six engines, not by traffic.':
    'Vuelva a ejecutar mensualmente el conjunto de consultas de evaluación de proveedores. La cobertura se verifica por los espacios de recomendación ganados en los seis motores, no por el tráfico.',
  'Recommendation share re-measured across the same 24 questions monthly, with engine and date recorded per observation.':
    'Cuota de recomendaciones remedida mensualmente sobre las mismas 24 preguntas, registrando motor y fecha en cada observación.',

  /* --- Authority and sources ----------------------------------------------- */
  'Independent authority evidence': 'Evidencia de autoridad independiente',
  'Independent authority evidence is weak':
    'La evidencia de autoridad independiente es débil',
  'Independent authority sources cited':
    'Fuentes de autoridad independientes citadas',
  'Independent sources': 'Fuentes independientes',
  'Independent source count': 'Número de fuentes independientes',
  'Independent source count 3 → 12': 'Número de fuentes independientes 3 → 12',
  'Independent validation': 'Validación independiente',
  '3 independent sources': '3 fuentes independientes',
  '3 sources against a category median of 14.':
    '3 fuentes frente a una mediana de categoría de 14.',
  'Category median is 14. Kestrel holds 21.':
    'La mediana de la categoría es 14. Kestrel tiene 21.',
  'Kestrel 21 sources, Northwind 3.': 'Kestrel 21 fuentes, Northwind 3.',
  'Weak — 3 sources': 'Débil — 3 fuentes',
  'Authority evidence': 'Evidencia de autoridad',
  'Authority Signals': 'Señales de autoridad',
  'Authority drivers': 'Impulsores de la autoridad',
  'Authority first': 'La autoridad primero',
  'Authority Gap': 'Brecha de autoridad',
  Authority: 'Autoridad',
  'Source authority': 'Autoridad de la fuente',
  'Source advantage': 'Ventaja en fuentes',
  'Source influence': 'Influencia de la fuente',
  'Source Influence Map': 'Mapa de influencia de fuentes',
  Citations: 'Citas',
  'Citation analysis': 'Análisis de citas',
  'Engine citation analysis': 'Análisis de citas por motor',
  'Cross-source comparison': 'Comparación entre fuentes',
  'Trade publication coverage': 'Cobertura en prensa sectorial',
  'Public review platforms': 'Plataformas públicas de reseñas',
  'Review corpus': 'Corpus de reseñas',
  'Public web': 'Web pública',
  'Mentions weighted by the credibility of the source, so fifty low-authority listings stop reading as a stronger position than three real ones.':
    'Menciones ponderadas por la credibilidad de la fuente, de modo que cincuenta listados de baja autoridad dejen de parecer una posición más fuerte que tres reales.',
  'Which claims stand on third-party evidence and which stand only on the company’s own website — machines weight the two very differently.':
    'Qué afirmaciones se apoyan en evidencia de terceros y cuáles solo en el propio sitio web de la empresa: las máquinas ponderan ambas de forma muy distinta.',
  'Engines do not recommend what they cannot corroborate. Authority is the lowest GEON vector at 28 of 100, and it is the constraint that holds every other signal down.':
    'Los motores no recomiendan lo que no pueden corroborar. La autoridad es el vector GEON más bajo, con 28 de 100, y es la restricción que frena a todas las demás señales.',
  'Authority is the lowest GEON vector at 28 and carries the heaviest index weight. It is the constraint holding recognition, recommendation share and coverage down.':
    'La autoridad es el vector GEON más bajo, con 28, y soporta el mayor peso del índice. Es la restricción que frena el reconocimiento, la cuota de recomendaciones y la cobertura.',
  'Engines cannot corroborate a recommendation from three sources when the category median is fourteen.':
    'Los motores no pueden corroborar una recomendación a partir de tres fuentes cuando la mediana de la categoría es catorce.',
  'Publish an independent, verifiable supplier-comparison resource and secure third-party validation in at least two trade publications.':
    'Publique un recurso de comparación de proveedores independiente y verificable, y obtenga validación de terceros en al menos dos publicaciones sectoriales.',
  'Secure independent validation: trade-publication contribution, verifiable customer outcomes and third-party specification references.':
    'Obtenga validación independiente: colaboración en prensa sectorial, resultados de clientes verificables y referencias de especificaciones de terceros.',
  'Independent source count re-observed monthly, with each new source recorded by publication and date.':
    'Número de fuentes independientes reobservado cada mes, registrando cada nueva fuente con su publicación y fecha.',
  'Build supplier-comparison content against the eleven compound and strategic blind-spot questions, structured so it is both rankable and citable.':
    'Cree contenido de comparación de proveedores para las once preguntas en punto ciego compuesto y estratégico, estructurado para que sea a la vez posicionable y citable.',

  /* --- Trust ---------------------------------------------------------------- */
  Trust: 'Confianza',
  'Trust decay': 'Deterioro de la confianza',
  'Trust readiness': 'Preparación para la confianza',
  'Trust Intelligence': 'Inteligencia de confianza',
  'Trust and Authority Diagnostics': 'Diagnóstico de confianza y autoridad',
  'Reputation consistency': 'Coherencia de la reputación',
  'Reputation Momentum': 'Impulso de la reputación',
  Consistency: 'Coherencia',
  'Is the business safe to recommend?':
    '¿Es seguro recomendar esta empresa?',
  'Buyer Confidence': 'Confianza del comprador',
  'Visibility creates attention; trust creates selection. A business can be perfectly visible and still be filtered out at the moment a system has to stand behind naming it first, and the reasons for that are specific and fixable.':
    'La visibilidad genera atención; la confianza genera selección. Una empresa puede ser perfectamente visible y aun así quedar descartada en el momento en que un sistema debe responder por haberla nombrado primero, y las razones son concretas y subsanables.',
  'Visibility creates attention; trust creates selection. A business can be found and still be filtered out at the moment an engine has to stand behind a recommendation.':
    'La visibilidad genera atención; la confianza genera selección. Una empresa puede ser encontrada y aun así quedar descartada en el momento en que un motor debe responder por una recomendación.',
  'Trust reads 44 of 100 while Market Fit reads 72 — the offer matches demand, but the proof does not support a recommendation.':
    'La confianza marca 44 de 100 mientras el ajuste al mercado marca 72: la oferta responde a la demanda, pero las pruebas no sostienen una recomendación.',

  /* --- Competitive ---------------------------------------------------------- */
  'Competitive Intelligence': 'Inteligencia competitiva',
  'Competitor Decision Intelligence':
    'Inteligencia de decisión de la competencia',
  'Executive Intelligence': 'Inteligencia ejecutiva',
  'Competitive density': 'Densidad competitiva',
  Replaceability: 'Reemplazabilidad',
  'Replaceability Index': 'Índice de reemplazabilidad',
  'Distributor alignment': 'Alineación de distribuidores',
  'Distributor Map': 'Mapa de distribuidores',
  'Northwind differentiators': 'Diferenciadores de Northwind',
  'Evaluation criteria cited': 'Criterios de evaluación citados',
  'Strength Drivers': 'Impulsores de la fortaleza',
  Vulnerability: 'Vulnerabilidad',
  Fragility: 'Fragilidad',
  Dependency: 'Dependencia',
  'Dependency Risk': 'Riesgo de dependencia',
  'Northwind listed fourth of five suppliers.':
    'Northwind aparece en cuarto lugar de cinco proveedores.',
  'Absent. Meridian named first.': 'Ausente. Meridian mencionada en primer lugar.',
  'Absent. 35 searches per month.': 'Ausente. 35 búsquedas al mes.',
  'Not who ranks above you — who gets recommended when a buyer asks a machine whom to choose. The useful output is never the share figure; it is the specific evidence a competitor supplies that you do not, because that is the part you can go and close.':
    'No quién se posiciona por encima de usted, sino a quién se recomienda cuando un comprador pregunta a una máquina a quién elegir. El resultado útil nunca es la cifra de cuota: es la evidencia concreta que aporta un competidor y usted no, porque esa es la parte que puede ir a cerrar.',
  'Some rivals win early by shaping the criteria; others win late at vendor selection. The counter-move is completely different for each.':
    'Algunos rivales ganan pronto, moldeando los criterios; otros ganan tarde, en la selección del proveedor. La contramedida es completamente distinta en cada caso.',
  'Where a position rests on a single source or a single page, and would not survive one competitor publishing a better one.':
    'Donde una posición se sostiene sobre una sola fuente o una sola página, y no sobreviviría a que un competidor publicara algo mejor.',
  'Kestrel is cited by three independent trade publications and maintains a public supplier-comparison library. Engines reach for that evidence when a buyer asks whom to choose.':
    'Kestrel es citada por tres publicaciones sectoriales independientes y mantiene una biblioteca pública de comparación de proveedores. Los motores recurren a esa evidencia cuando un comprador pregunta a quién elegir.',
  'Kestrel receives 31% of all AI recommendations across the tracked decision set; Northwind receives 4.2%.':
    'Kestrel recibe el 31 % de todas las recomendaciones de IA en el conjunto de decisiones monitorizado; Northwind recibe el 4,2 %.',
  'Receives 31% of all recommendations and is named first in four of seven supplier-evaluation answers.':
    'Recibe el 31 % de todas las recomendaciones y es mencionada en primer lugar en cuatro de las siete respuestas de evaluación de proveedores.',
  'This gap is not brand preference. It is an evidence gap: Kestrel supplies engines with material they can cite, and Northwind does not. The lead never reaches the CRM because the decision resolved before contact.':
    'Esta brecha no es de preferencia de marca, sino de evidencia: Kestrel proporciona a los motores material que pueden citar, y Northwind no. El contacto nunca llega al CRM porque la decisión se resolvió antes.',
  'Sustained trade-publication presence means engines can support a Kestrel recommendation with evidence that is not Kestrel’s own.':
    'Una presencia sostenida en prensa sectorial permite a los motores respaldar una recomendación de Kestrel con evidencia que no procede de la propia Kestrel.',
  'Its supplier-comparison library ranks organically and is the source engines cite, so one asset serves both surfaces.':
    'Su biblioteca de comparación de proveedores se posiciona de forma orgánica y es la fuente que citan los motores, de modo que un solo activo sirve a ambas superficies.',
  'Kestrel has published material addressing each question directly; engines reach for what exists.':
    'Kestrel ha publicado material que aborda cada pregunta directamente; los motores recurren a lo que existe.',
  'Holds top-three organic positions and AI presence on the four highest-volume commercial questions.':
    'Ocupa posiciones orgánicas entre las tres primeras y tiene presencia en IA en las cuatro preguntas comerciales de mayor volumen.',
  'Publishing evaluation criteria before competitors did made that framing the one engines learned.':
    'Publicar los criterios de evaluación antes que los competidores hizo que ese encuadre fuera el que aprendieron los motores.',
  'Halvorsen owns early-stage research questions, entering the decision before evaluation begins.':
    'Halvorsen domina las preguntas de investigación en fase temprana, entrando en la decisión antes de que comience la evaluación.',
  'Owned authority removes the need to bid, so Kestrel’s cost per decision falls as Northwind’s rises.':
    'La autoridad propia elimina la necesidad de pujar, de modo que el coste por decisión de Kestrel baja mientras el de Northwind sube.',
  'The evaluation criteria the market has settled on, and which competitor published them first.':
    'Los criterios de evaluación que el mercado ha adoptado, y qué competidor los publicó primero.',
  'Publish an evaluation framework that makes regional response time a first-class selection criterion.':
    'Publique un marco de evaluación que convierta el tiempo de respuesta regional en un criterio de selección de primer orden.',
  'Publish a defensible evaluation framework that makes regional response time a first-class selection criterion.':
    'Publique un marco de evaluación defendible que convierta el tiempo de respuesta regional en un criterio de selección de primer orden.',

  /* --- Google vs AI --------------------------------------------------------- */
  'Google vs AI Visibility Intelligence':
    'Inteligencia de visibilidad: Google frente a la IA',
  'Google position': 'Posición en Google',
  'Channel asymmetry': 'Asimetría de canales',
  'Gap Matrix': 'Matriz de brechas',
  'Gap classification': 'Clasificación de la brecha',
  'Strategic blind spot': 'Punto ciego estratégico',
  'Compound blind spot': 'Punto ciego compuesto',
  'Compound Blind Spot': 'Punto ciego compuesto',
  'Blind-spot keywords': 'Palabras clave en punto ciego',
  'Traditional search and AI-mediated discovery are separate commercial assets that fail independently. This category measures each, classifies every gap between them, and prices what closing the gap is currently costing in paid media.':
    'La búsqueda tradicional y el descubrimiento mediado por IA son activos comerciales distintos que fallan de forma independiente. Esta categoría mide cada uno, clasifica toda brecha entre ellos y cuantifica lo que cerrar esa brecha está costando ahora en medios de pago.',
  'Google rank and AI recommendation are separate commercial assets. Northwind ranks first for account setup — a question asked only after the vendor has already been chosen — and is absent from every question that decides who that vendor is.':
    'La posición en Google y la recomendación de la IA son activos comerciales distintos. Northwind ocupa el primer puesto para la apertura de cuenta —una pregunta que solo se hace tras haber elegido proveedor— y está ausente de toda pregunta que decide quién es ese proveedor.',
  'The same question asked of both surfaces, so the two results can finally be compared line by line instead of by anecdote.':
    'La misma pregunta planteada a ambas superficies, de modo que los dos resultados puedan compararse al fin línea por línea en lugar de por anécdotas.',
  'Every gap sorted into a named class with a different remedy and a different cost. Not all absence is the same problem.':
    'Cada brecha clasificada en una categoría con nombre, con su propio remedio y su propio coste. No toda ausencia es el mismo problema.',
  'Eleven of twenty tracked commercial keywords sit outside the Google top ten and receive no AI recommendation — the decision happens on neither surface.':
    'Once de las veinte palabras clave comerciales monitorizadas quedan fuera de los diez primeros resultados de Google y no reciben recomendación de la IA: la decisión no ocurre en ninguna de las dos superficies.',
  'Absent from both surfaces on a high-value commercial question. The most expensive class of gap.':
    'Ausente en ambas superficies en una pregunta comercial de alto valor. La clase de brecha más cara.',
  'Absent from AI answers and outside the Google top ten. The decision happens without the brand.':
    'Ausente de las respuestas de IA y fuera de los diez primeros de Google. La decisión ocurre sin la marca.',
  'Track gap classification per keyword monthly. Success is six keywords moving out of blind-spot classification.':
    'Haga seguimiento mensual de la clasificación de la brecha por palabra clave. El éxito son seis palabras clave que salen de la clasificación de punto ciego.',

  /* --- Search economics ------------------------------------------------------ */
  'Search Economics': 'Economía de la búsqueda',
  'Search Cost Intelligence': 'Inteligencia del coste de búsqueda',
  'Search Intelligence': 'Inteligencia de búsqueda',
  'Search trend analysis': 'Análisis de tendencias de búsqueda',
  'Break-even CPC': 'CPC de equilibrio',
  'Break-Even CPC': 'CPC de equilibrio',
  'Break-even model': 'Modelo de punto de equilibrio',
  'Above break-even': 'Por encima del punto de equilibrio',
  'Blended CPC vs break-even': 'CPC combinado frente al punto de equilibrio',
  'Blended CPC across 20 tracked keywords':
    'CPC combinado en 20 palabras clave monitorizadas',
  'Keywords above break-even CPC':
    'Palabras clave por encima del CPC de equilibrio',
  'Keywords above break-even CPC 13 → 7 of 20':
    'Palabras clave por encima del CPC de equilibrio 13 → 7 de 20',
  '11 of 20 weak': '11 de 20 débiles',
  'Bid inflation': 'Inflación de pujas',
  'Paid dependency': 'Dependencia del pago',
  'AI vs Paid': 'IA frente a pago',
  'Recoverable Search Opportunity': 'Oportunidad de búsqueda recuperable',
  'Recoverable search opportunity': 'Oportunidad de búsqueda recuperable',
  'Organic replacement potential': 'Potencial de sustitución orgánica',
  'Paid acquisition is not buying growth here; it is renting the positions that authority would otherwise hold. The cost is structural and rises as competitive density increases.':
    'La captación de pago no compra crecimiento aquí; alquila las posiciones que de otro modo ocuparía la autoridad. El coste es estructural y aumenta a medida que crece la densidad competitiva.',
  'Blended CPC runs above break-even. Paid is renting positions that authority would hold, and the cost rises with competitive density.':
    'El CPC combinado supera el punto de equilibrio. El pago alquila posiciones que ocuparía la autoridad, y el coste sube con la densidad competitiva.',
  'Blended CPC runs above the break-even cost per click, and paid spend is covering questions where the brand has no organic or AI presence.':
    'El CPC combinado supera el coste por clic de equilibrio, y el gasto de pago está cubriendo preguntas en las que la marca no tiene presencia orgánica ni en IA.',
  'Reallocate spend from keywords with a viable organic replacement path, and hold paid only where break-even still clears.':
    'Reasigne el gasto de las palabras clave que tengan una vía viable de sustitución orgánica y mantenga el pago solo donde aún se supere el punto de equilibrio.',
  'Compare blended CPC against break-even monthly, and track organic replacement on reallocated keywords.':
    'Compare mensualmente el CPC combinado con el punto de equilibrio y haga seguimiento de la sustitución orgánica en las palabras clave reasignadas.',

  /* --- Narrative -------------------------------------------------------------- */
  'Narrative Intelligence': 'Inteligencia narrativa',
  'Narrative ownership 12% → 24%': 'Dominio del relato 12 % → 24 %',
  'Narrative control': 'Control del relato',
  'Narrative War Room': 'Sala de crisis del relato',
  'Category definition': 'Definición de la categoría',
  'Category definition language': 'Lenguaje de definición de la categoría',
  'Comparison content': 'Contenido comparativo',
  'Content Intelligence': 'Inteligencia de contenido',
  'Buyer education': 'Formación del comprador',
  'Pricing perception': 'Percepción de precios',
  'Price justification': 'Justificación del precio',
  'Strategic silence': 'Silencio estratégico',
  'Whoever defines a category sets the criteria buyers evaluate against. This category measures how much of that definition you own, where it is fragile, and which of your genuine advantages the market has no vocabulary for.':
    'Quien define una categoría fija los criterios con los que evalúan los compradores. Esta categoría mide qué parte de esa definición domina usted, dónde es frágil y para cuáles de sus ventajas reales el mercado no tiene vocabulario.',
  'Whoever defines the category sets the criteria buyers evaluate against. Competing on someone else’s definition means competing on terms chosen to favour them.':
    'Quien define la categoría fija los criterios con los que evalúan los compradores. Competir sobre la definición de otro significa competir en términos elegidos para favorecerle.',
  'Engines describe the category in a competitor’s language. Northwind’s strongest differentiator is absent from every category description.':
    'Los motores describen la categoría con el lenguaje de un competidor. El diferenciador más fuerte de Northwind está ausente de todas las descripciones de la categoría.',
  'Whether the market is asking informed comparison questions or still asking what the category is, which decides what content is worth producing.':
    'Si el mercado formula preguntas comparativas informadas o todavía pregunta qué es la categoría, lo que determina qué contenido vale la pena producir.',
  'Category vocabulary as an ownable asset, with a percentage attached — a measure most companies have never seen quantified.':
    'El vocabulario de la categoría como un activo que se puede poseer, con un porcentaje asociado: una medida que la mayoría de las empresas nunca ha visto cuantificada.',

  /* --- Strategic timing -------------------------------------------------------- */
  'Strategic Timing Intelligence': 'Inteligencia del momento estratégico',
  'Strategic Timing Window': 'Ventana de momento estratégico',
  'The window is open and closing': 'La ventana está abierta y se está cerrando',
  '7 months — closes 2027-02-28': '7 meses — se cierra el 28/02/2027',
  'Query maturity': 'Madurez de las consultas',
  'Query maturity accelerating': 'La madurez de las consultas se acelera',
  'Demand maturation': 'Maduración de la demanda',
  'Shift velocity': 'Velocidad del cambio',
  'Rising 8% quarter over quarter.': 'Sube un 8 % trimestre a trimestre.',
  'Moderate — 8% quarter-over-quarter': 'Moderada — 8 % trimestre a trimestre',
  'Time to impact': 'Tiempo hasta el impacto',
  Urgency: 'Urgencia',
  Emerging: 'Emergente',
  'Timing, geography and distribution — the three conditions that decide whether a correct strategy executed today returns more than the same strategy executed in a year. A right decision at the wrong time is still a wrong decision.':
    'Momento, geografía y distribución: las tres condiciones que deciden si una estrategia correcta ejecutada hoy rinde más que la misma ejecutada dentro de un año. Una decisión acertada en el momento equivocado sigue siendo una decisión equivocada.',
  'Category language is still forming, so authority built now compounds. Once engines settle on a stable answer set, displacing an incumbent recommendation costs materially more.':
    'El lenguaje de la categoría aún se está formando, de modo que la autoridad construida ahora se acumula. Una vez que los motores fijen un conjunto de respuestas estable, desplazar a una recomendación asentada costará sustancialmente más.',
  'Whether category language is still fluid — because authority built while it is fluid becomes the default answer, and authority built after has to displace one.':
    'Si el lenguaje de la categoría sigue siendo fluido, porque la autoridad construida mientras lo es se convierte en la respuesta por defecto, y la construida después tiene que desplazar a una.',
  'The rate at which recommendation slots are being taken, which is what converts "sometime this year" into a dated decision.':
    'El ritmo al que se ocupan los espacios de recomendación, que es lo que convierte «en algún momento de este año» en una decisión con fecha.',
  'The market is emerging with roughly seven months of open window; competitive density is rising 8% per quarter.':
    'El mercado es emergente, con una ventana abierta de unos siete meses; la densidad competitiva sube un 8 % por trimestre.',
  'Commit authority investment before the decision deadline, while displacement cost remains low.':
    'Comprometa la inversión en autoridad antes de la fecha límite de decisión, mientras el coste de desplazamiento siga siendo bajo.',

  /* --- Exposure and opportunity ------------------------------------------------ */
  'Directional commercial exposure': 'Exposición comercial direccional',
  'Commercial exposure': 'Exposición comercial',
  'Revenue Exposure': 'Exposición de ingresos',
  'Opportunity and Revenue Intelligence':
    'Inteligencia de oportunidades e ingresos',
  'Opportunity range': 'Rango de oportunidad',
  'Opportunity Signal Map': 'Mapa de señales de oportunidad',
  'Estimated conversion': 'Conversión estimada',
  'Conversion assumptions': 'Supuestos de conversión',
  'Average deal value': 'Valor medio de la operación',
  'Deal value': 'Valor de la operación',
  'Decision gap': 'Brecha de decisión',
  Demand: 'Demanda',
  'Sensitivity analysis': 'Análisis de sensibilidad',
  'Priority ranking model': 'Modelo de ordenación de prioridades',
  'What is it worth, and what happens next?':
    '¿Cuánto vale y qué ocurre a continuación?',
  'Demand × decision gap × estimated conversion × average deal value. A range, never a confirmed figure.':
    'Demanda × brecha de decisión × conversión estimada × valor medio de la operación. Un rango, nunca una cifra confirmada.',
  'How crowded is the answer set becoming?':
    '¿Hasta qué punto se está saturando el conjunto de respuestas?',

  /* --- Action ------------------------------------------------------------------ */
  'Action Intelligence': 'Inteligencia de acción',
  'Action Center': 'Centro de acciones',
  'Prioritised interventions': 'Intervenciones priorizadas',
  'Prioritised intervention sequence': 'Secuencia priorizada de intervenciones',
  'Top intervention': 'Intervención principal',
  'Priority Queue': 'Cola de prioridades',
  '30/60/90-Day Roadmap': 'Hoja de ruta de 30/60/90 días',
  '6 sequenced': '6 secuenciadas',
  Effort: 'Esfuerzo',
  'Effort assessment': 'Evaluación del esfuerzo',
  'Measured change': 'Cambio medido',
  'Impact Tracker': 'Seguimiento del impacto',
  'Success metric': 'Métrica de éxito',
  Prescription: 'Prescripción',
  Confidence: 'Confianza',
  Context: 'Contexto',
  Concerns: 'Reservas',
  Weak: 'Débil',
  'Where diagnosis becomes a decision. Every gap is priced as a directional range, ranked against every other gap, assigned an owner and a deadline, and then measured after execution to confirm the signal actually moved.':
    'Donde el diagnóstico se convierte en decisión. Cada brecha se cuantifica como un rango direccional, se ordena frente a todas las demás, se le asigna un responsable y una fecha límite, y después se mide tras la ejecución para confirmar que la señal realmente se movió.',
  'Diagnosis without sequence produces activity, not movement. Each intervention names an owner, a deadline, the signal it should move and how that movement will be verified.':
    'El diagnóstico sin secuencia produce actividad, no movimiento. Cada intervención indica un responsable, una fecha límite, la señal que debe mover y cómo se verificará ese movimiento.',
  'Every finding converted into an intervention with an owner, a deadline and a stated expected movement — or dropped, if it cannot be.':
    'Cada hallazgo convertido en una intervención con responsable, fecha límite y un movimiento esperado declarado — o descartado, si no es posible.',
  'Ranking by exposure, confidence, effort and dependency, so effort does not go into work that cannot move until something else lands.':
    'Ordenación por exposición, confianza, esfuerzo y dependencia, para que el esfuerzo no se dedique a un trabajo que no puede avanzar hasta que otra cosa se complete.',
  'A sequence built from what each intervention actually depends on, rather than from a calendar someone divided into thirds.':
    'Una secuencia construida a partir de aquello de lo que cada intervención realmente depende, en lugar de un calendario que alguien dividió en tercios.',
  'Each action carries its own success metric. Impact is verified by signal movement after execution, not by task completion.':
    'Cada acción lleva su propia métrica de éxito. El impacto se verifica por el desplazamiento de la señal tras la ejecución, no por la finalización de la tarea.',
  'Six interventions are prioritised; the first two address authority evidence and supplier-comparison coverage.':
    'Se priorizan seis intervenciones; las dos primeras abordan la evidencia de autoridad y la cobertura de comparación de proveedores.',

  /* --- The decision journey ----------------------------------------------------- */
  'Decision Journey': 'Recorrido de la decisión',
  Research: 'Investigación',
  'Solution Evaluation': 'Evaluación de soluciones',
  'Supplier Evaluation': 'Evaluación de proveedores',
  'Purchase Decision': 'Decisión de compra',
  'Decision Hijack': 'Secuestro de la decisión',

  /* --- Market --------------------------------------------------------------------- */
  'Market Intelligence': 'Inteligencia de mercado',
  'Global Market Intelligence': 'Inteligencia de mercado global',
  'Global Visibility Matrix': 'Matriz de visibilidad global',
  'Market readiness': 'Madurez del mercado',
  'Market Readiness Gauge': 'Indicador de madurez del mercado',
  'Market Entry Readiness': 'Preparación para la entrada en el mercado',
  'Market Fit': 'Ajuste al mercado',
  'Regional variation': 'Variación regional',
  'Regional strength': 'Fortaleza regional',
  'Country definition': 'Definición del país',
  'Distribution Intelligence': 'Inteligencia de distribución',
  'Scenario Simulator': 'Simulador de escenarios',
  Analytics: 'Analítica',
  Visibility: 'Visibilidad',
  Ownership: 'Dominio',

  /* --- Roles and model provenance -------------------------------------------------- */
  'VP Marketing': 'Director de marketing',
  'Head of Digital': 'Responsable de digital',
  'Head of Brand': 'Responsable de marca',
  'Chief Executive': 'Director general',
  'Content Lead': 'Responsable de contenido',
  'Demand Gen Manager': 'Responsable de generación de demanda',
  'Customer-configured': 'Configurado por el cliente',
  'Derived from §13.1 chain': 'Derivado de la cadena §13.1',
  /* A product name. Recorded rather than translated, so its absence from the
     rest of this file reads as a decision and not an oversight. */
  'Google Ads': 'Google Ads',

  /* ==========================================================================
     ELECTION INTELLIGENCE

     The race, the candidates and the county are invented. Nothing here is
     transliterated: Spanish shares the Latin alphabet, so Riverbend and the
     candidate initials are already in their Spanish form. They will show up
     in a diff-mode audit as identical to English, which is correct rather
     than a gap — see the note at the head of i18n-audit.mjs.
     ====================================================================== */
  'Demonstration subject': 'Sujeto de demostración',
  'Entirely fictional. No real person, party or race.':
    'Totalmente ficticio. Ninguna persona, partido o contienda reales.',
  Race: 'Contienda',
  'County Commission': 'Comisión del condado',
  'Riverbend County — District 4': 'Condado de Riverbend — distrito 4',
  Candidate: 'Candidato',
  Opponent: 'Rival',
  /* Already in their Spanish form — he, ar and ru transliterate these into
     their own scripts, Spanish has nothing to change. Recorded as identities
     so `i18n-port.mjs he es` reports parity instead of flagging a gap. */
  'A. Marchetti': 'A. Marchetti',
  'D. Okonkwo': 'D. Okonkwo',
  'Election War Room — the live operational view':
    'Sala de operaciones electoral — la vista operativa en directo',
  'The Election War Room. Fictional race, demonstration data — no real candidate, party or campaign.':
    'La sala de operaciones electoral. Contienda ficticia, datos de demostración: ningún candidato, partido o campaña reales.',
  'Candidate / party dashboard — the standing position':
    'Panel de candidato y partido — la posición actual',
  'Candidate and party position. Fictional race, demonstration data — no real candidate, party or campaign.':
    'Posición del candidato y del partido. Contienda ficticia, datos de demostración: ningún candidato, partido o campaña reales.',
  'Election narrative intelligence — positive vs negative narratives':
    'Inteligencia narrativa electoral — narrativas positivas frente a negativas',
  'Which narratives are strengthening the position and which are damaging it. Fictional race, demonstration data.':
    'Qué narrativas refuerzan la posición y cuáles la dañan. Contienda ficticia, datos de demostración.',
  'Positive vs negative narratives — the polarity split':
    'Narrativas positivas frente a negativas — el reparto de polaridad',
  'Positive against negative, by reach and by direction of travel. Fictional race, demonstration data.':
    'Lo positivo frente a lo negativo, por alcance y por dirección de avance. Contienda ficticia, datos de demostración.',
  'Audience / segment movement — who is moving toward and away':
    'Movimiento de audiencias y segmentos — quién se acerca y quién se aleja',
  'Which audiences are moving closer and which are moving away. Fictional race, demonstration data.':
    'Qué audiencias se acercan y cuáles se alejan. Contienda ficticia, datos de demostración.',
  'Opponent intelligence — competing narratives and ownership':
    'Inteligencia sobre el rival — narrativas en competencia y titularidad',
  'What the opposing account is, and which issues it owns. Fictional race, demonstration data.':
    'Cuál es el relato del contrario y qué asuntos posee. Contienda ficticia, datos de demostración.',
  'Influencers and sources shaping the narrative':
    'Personas influyentes y fuentes que moldean la narrativa',
  'Who is strengthening the position and who is damaging it. Fictional race, demonstration data.':
    'Quién refuerza la posición y quién la daña. Contienda ficticia, datos de demostración.',
  'AI + Google election intelligence — per-engine narrative leads':
    'Inteligencia electoral de IA y Google — la narrativa dominante por motor',
  'What each AI engine and Google surface leads with. Fictional race, demonstration data.':
    'Con qué encabeza cada motor de IA y cada superficie de Google. Contienda ficticia, datos de demostración.',
  'Multilingual intelligence — narrative gaps between languages':
    'Inteligencia multilingüe — brechas narrativas entre idiomas',
  'Where the account of a candidate differs by language. Fictional race, demonstration data.':
    'Dónde difiere el relato de un candidato según el idioma. Contienda ficticia, datos de demostración.',
  'Risks and opportunities — emerging threats and open positions':
    'Riesgos y oportunidades — amenazas emergentes y posiciones libres',
  'Emerging threats and unclaimed positions, ranked. Fictional race, demonstration data.':
    'Amenazas emergentes y posiciones sin reclamar, ordenadas. Contienda ficticia, datos de demostración.',
  'Recommended actions — the campaign action plan':
    'Acciones recomendadas — el plan de acción de la campaña',
  'What to do now, who owns it, and how the movement will be measured. Fictional race, demonstration data.':
    'Qué hacer ahora, quién lo asume y cómo se medirá el movimiento. Contienda ficticia, datos de demostración.',
  'Trend over time — narrative movement across the cycle':
    'Tendencia en el tiempo — el movimiento narrativo a lo largo del ciclo',
  'How the position has moved across the cycle. Fictional race, demonstration data.':
    'Cómo se ha movido la posición a lo largo del ciclo. Contienda ficticia, datos de demostración.',

  /* ==========================================================================
     INTELLIGENCE ENGINES
     ====================================================================== */
  'Intelligence engines': 'Motores de inteligencia',
  'Each engine answers a board-level business question, produces a connected intelligence readout and routes the user into action. Not a feature list — a set of questions the business needs answered.':
    'Cada motor responde a una pregunta de negocio de nivel consejo, produce una lectura de inteligencia conectada y encamina al usuario hacia la acción. No es una lista de funciones, sino un conjunto de preguntas que el negocio necesita resolver.',
  'Built in this environment · 4 of 12': 'Construido en este entorno · 4 de 12',
  'Four engines, built to full depth': 'Cuatro motores, desarrollados en toda su profundidad',
  'Each carries a real seeded outcome, its evidence, its commercial consequence and the action it prescribes. They chain into one another — together they form the causal argument rather than four samples of it.':
    'Cada uno lleva un resultado precargado real, sus pruebas, su consecuencia comercial y la acción que prescribe. Se encadenan entre sí: juntos forman el argumento causal, no cuatro muestras de él.',
  'The full operating system': 'El sistema operativo completo',
  'Eight further engines available in the platform':
    'Otros ocho motores disponibles en la plataforma',
  'These are part of the operating system but are not built in this demonstration environment. Their business questions are listed so the shape of the full system is visible.':
    'Forman parte del sistema operativo, pero no están construidos en este entorno de demostración. Sus preguntas de negocio se enumeran para que la forma del sistema completo quede visible.',
  'Available in platform': 'Disponible en la plataforma',
  'Is the business present when customers ask AI whom to choose?':
    '¿Está presente el negocio cuando los clientes preguntan a la IA a quién elegir?',
  'Which gap is commercially meaningful enough to fix first?':
    '¿Qué brecha tiene suficiente relevancia comercial para corregirla primero?',
  'When does paid search become structurally inefficient?':
    '¿Cuándo pasa la búsqueda de pago a ser estructuralmente ineficiente?',
  'Is the business visible but still unsafe to recommend?':
    '¿Es visible el negocio pero todavía arriesgado de recomendar?',
  'When the market explains the category, whose language does it use?':
    'Cuando el mercado explica la categoría, ¿de quién es el vocabulario que emplea?',
  'Is the market ready, and how long is the window open?':
    '¿Está listo el mercado y cuánto tiempo permanece abierta la ventana?',
  'How does the business change across countries, languages and markets?':
    '¿Cómo cambia el negocio de un país, un idioma y un mercado a otro?',
  'Does the route to market strengthen the brand or transfer power to intermediaries?':
    '¿La ruta al mercado refuerza la marca o transfiere poder a los intermediarios?',
  'See plans': 'Ver planes',

  /* ==========================================================================
     MARKETPLACE
     ====================================================================== */
  'Seven categories of decision intelligence, each holding the models that answer one kind of commercial question. Most of them measure things a business has never been able to see — not because the questions are exotic, but because nothing existed to answer them.':
    'Siete categorías de inteligencia de decisión, cada una con los modelos que responden a un tipo de pregunta comercial. La mayoría mide cosas que un negocio nunca ha podido ver, no porque las preguntas sean exóticas, sino porque no existía nada que las respondiera.',
  'Intelligence categories': 'Categorías de inteligencia',
  'Intelligence modules': 'Módulos de inteligencia',
  'Engines beneath them': 'Motores subyacentes',
  'of these modules run live in this environment against a real reconstructed business. The rest are available in the platform.':
    'de estos módulos funcionan en directo en este entorno sobre un negocio realmente reconstruido. El resto están disponibles en la plataforma.',
  'Start with the question you actually have.':
    'Empiece por la pregunta que realmente tiene.',
  'Each category opens into the modules underneath it. Every module answers one business question and returns evidence, an analysis and a recommendation — never a figure on its own.':
    'Cada categoría se despliega en los módulos que contiene. Cada módulo responde a una pregunta de negocio y devuelve pruebas, un análisis y una recomendación; nunca una cifra suelta.',
  'What you are buying': 'Qué está comprando',
  'The document is the output. The intelligence is the product.':
    'El documento es el entregable. La inteligencia es el producto.',
  'How the models work': 'Cómo funcionan los modelos',
  'Every claim carries the observation behind it — which engine, which question, which date. A conclusion you cannot audit is an opinion.':
    'Cada afirmación lleva detrás la observación que la sostiene: qué motor, qué pregunta, qué fecha. Una conclusión que no se puede auditar es una opinión.',
  'What the evidence means commercially, what is causing it, and how confident the model can honestly be. Limits are stated, never implied.':
    'Qué significan las pruebas en términos comerciales, qué las causa y con cuánta confianza puede el modelo pronunciarse honestamente. Los límites se declaran, nunca se insinúan.',
  'What to do, who owns it, by when, and what signal should move as a result. Verified afterwards against what actually moved.':
    'Qué hacer, quién lo asume, para cuándo y qué señal debe moverse como consecuencia. Después se contrasta con lo que realmente se movió.',
  'Whatever the business question, there is already intelligence built for it.':
    'Sea cual sea la pregunta de negocio, ya hay inteligencia construida para ella.',
  'See a module run live': 'Ver un módulo en funcionamiento',
  'Monitor continuously instead': 'O bien monitorizar de forma continua',
  '7 live in demo': '7 activos en la demo',
  '4 live in demo': '4 activos en la demo',
  Analysis: 'Análisis',
  Recommendation: 'Recomendación',
  modules: 'módulos',
  Explore: 'Explorar',
  '+ 1 more': '+ 1 más',
  '+ 2 more': '+ 2 más',
  '+ 4 more': '+ 4 más',
  '+ 6 more': '+ 6 más',
  '+ {n} more': '+ {n} más',
  '{n} live in demo': '{n} activos en la demo',
  '<b>{n}</b> of these modules run live in this environment against a real reconstructed business. The rest are available in the platform.':
    '<b>{n}</b> de estos módulos funcionan en directo en este entorno sobre un negocio realmente reconstruido. El resto están disponibles en la plataforma.',
  'Built in this environment · {n} of {total}': 'Construido en este entorno · {n} de {total}',

  /* ==========================================================================
     LEGAL
     `localStorage` stays Latin — it is the storage API by name, and the page
     has to name it precisely.
     ====================================================================== */
  Legal: 'Aviso legal',
  'Legal and data handling': 'Aviso legal y tratamiento de datos',
  'Legal and data handling | GeoRepute': 'Aviso legal y tratamiento de datos | GeoRepute',
  'Privacy, terms, data processing and security posture for the GeoRepute demonstration environment.':
    'Privacidad, condiciones, tratamiento de datos y postura de seguridad del entorno de demostración de GeoRepute.',
  'What this environment does and does not do with data.':
    'Qué hace este entorno con los datos y qué no hace.',
  'This is a demonstration build. Rather than reproduce boilerplate that would not apply to it, each section below states the actual position.':
    'Esta es una versión de demostración. En lugar de reproducir fórmulas genéricas que no le serían aplicables, cada apartado expone la situación real.',
  Privacy: 'Privacidad',
  'This environment collects nothing. There is no analytics script, no tag manager, no session recording and no third-party tracker on any page.':
    'Este entorno no recopila nada. Ninguna página contiene script de analítica, gestor de etiquetas, grabación de sesiones ni rastreador de terceros.',
  'The only data stored about you is your theme preference and any demonstration purchases, both held in your browser’s localStorage and readable only by this site. Nothing is transmitted anywhere. Clearing site data removes all of it, and the purchase-confirmation screen offers a reset control.':
    'Los únicos datos que se almacenan sobre usted son su preferencia de tema y las compras de demostración que realice, ambos guardados en el localStorage de su navegador y legibles solo por este sitio. No se transmite nada a ninguna parte. Borrar los datos del sitio los elimina por completo, y la pantalla de confirmación de compra ofrece un control de reinicio.',
  'Terms of service': 'Condiciones del servicio',
  'No commercial terms apply. Nothing on this site constitutes an offer, and no contract can be formed through it.':
    'No se aplica ninguna condición comercial. Nada en este sitio constituye una oferta, y no puede formalizarse ningún contrato a través de él.',
  'Pricing shown throughout is placeholder and clearly marked as such on the pricing page. The checkout collects no payment details and processes no charge.':
    'Los precios que se muestran son provisionales y están claramente señalados como tales en la página de precios. El proceso de pago no recoge datos bancarios ni tramita ningún cargo.',
  'Data processing': 'Tratamiento de datos',
  'Northwind Supply is a fictional organisation. Every figure attributed to it is seeded, internally consistent and derived from a published set of anchor facts. No real company’s data appears anywhere in this environment.':
    'Northwind Supply es una organización ficticia. Cada cifra que se le atribuye está precargada, es coherente internamente y deriva de un conjunto publicado de hechos de referencia. En ningún punto de este entorno aparecen datos de una empresa real.',
  'Competitor names, domains and citation counts are invented. Any resemblance to an operating business is coincidental and unintended.':
    'Los nombres de competidores, los dominios y los recuentos de citas son inventados. Cualquier parecido con un negocio en activo es casual y no intencionado.',
  'AI engines are referenced by their public product names for accuracy of description. No affiliation, endorsement or partnership is claimed or implied.':
    'Los motores de IA se mencionan por sus nombres públicos de producto por precisión descriptiva. No se reclama ni se insinúa ninguna afiliación, respaldo o asociación.',
  Security: 'Seguridad',
  'There is no authentication, no user account and no server-side session. The sign-in screen requests no password because none is checked — inviting a real credential into a demonstration would be a hazard, not a convenience.':
    'No hay autenticación, ni cuenta de usuario, ni sesión en servidor. La pantalla de acceso no pide contraseña porque no se comprueba ninguna: invitar a introducir una credencial real en una demostración sería un riesgo, no una comodidad.',
  'No external network requests are made at runtime. Fonts are self-hosted, all visuals are generated in CSS or SVG, and the content security posture assumes no third-party origin is trusted.':
    'No se realizan solicitudes de red externas en tiempo de ejecución. Las tipografías se alojan localmente, todos los elementos visuales se generan en CSS o SVG, y la postura de seguridad de contenido parte de que ningún origen de terceros es de confianza.',
  'Before this platform is operated commercially, these sections must be replaced with reviewed policies covering the real data flows, retention periods, sub-processors and jurisdictions involved.':
    'Antes de explotar comercialmente esta plataforma, estos apartados deberán sustituirse por políticas revisadas que cubran los flujos de datos reales, los plazos de conservación, los subencargados y las jurisdicciones implicadas.',
  'Return home': 'Volver al inicio',

  /* ==========================================================================
     SIGN IN
     ====================================================================== */
  'Sign In': 'Acceder',
  'Sign In | GeoRepute': 'Acceder | GeoRepute',
  Home: 'Inicio',
  'Enter the demonstration workspace': 'Entrar en el espacio de demostración',
  'This environment has no authentication. Every visitor sees the same seeded organisation, Northwind Supply, so that every figure stays verifiable against the published methodology.':
    'Este entorno no tiene autenticación. Todos los visitantes ven la misma organización precargada, Northwind Supply, de modo que cada cifra siga siendo verificable frente a la metodología publicada.',
  Workspace: 'Espacio de trabajo',
  'northwindsupply.com · US Midwest': 'northwindsupply.com · Medio Oeste de EE. UU.',
  'Continue to Mission Control': 'Continuar al centro de mando',
  'No password is requested because none is checked. Real authentication drops in behind the same route without changing this screen’s place in the flow.':
    'No se pide contraseña porque no se comprueba ninguna. Una autenticación real encaja detrás de la misma ruta sin cambiar el lugar de esta pantalla en el flujo.',

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
  'Public narrative intelligence': 'Inteligencia narrativa pública',
  'Public Narrative Intelligence | GeoRepute': 'Inteligencia narrativa pública | GeoRepute',
  'Public Narrative Intelligence': 'Inteligencia narrativa pública',
  'What story is the market telling about us?':
    '¿Qué historia cuenta el mercado sobre nosotros?',
  'Not how often the business is mentioned. Which accounts of it are active, who owns each one, and which of them decide whether it gets chosen.':
    'No con qué frecuencia se menciona el negocio. Sino qué relatos sobre él están activos, quién posee cada uno y cuáles deciden si se le elige.',
  'Election mode': 'Modo elecciones',
  'Political intelligence': 'Inteligencia política',
  Health: 'Estado',
  'Narrative health': 'Estado de la narrativa',
  'Overall public sentiment': 'Sentimiento público general',
  'A weighted read of how much active conversation helps against how much hurts.':
    'Una lectura ponderada de cuánta conversación activa ayuda frente a cuánta perjudica.',
  'Narrative momentum': 'Impulso narrativo',
  'Narrative stability': 'Estabilidad narrativa',
  'Narrative balance': 'Equilibrio narrativo',
  'Positive narrative strength': 'Fuerza de la narrativa positiva',
  'Negative narrative strength': 'Fuerza de la narrativa negativa',
  'Neutral narrative': 'Narrativa neutra',
  'The balance between stories that help and stories that hurt, weighted by how much of the conversation each reaches.':
    'El equilibrio entre las historias que ayudan y las que perjudican, ponderado por la parte de la conversación que alcanza cada una.',
  '20% of active category conversation carries a story that favours this business — and both of those narratives are currently unclaimed by anyone.':
    'El 20 % de la conversación activa de la categoría lleva una historia que favorece a este negocio, y ninguna de esas dos narrativas está reclamada por nadie en este momento.',
  '74% carries a story that works against it, most of it a competitor’s evaluation framing rather than criticism of the business itself.':
    'El 74 % lleva una historia que actúa en su contra, y en su mayor parte es el marco de evaluación de un competidor más que una crítica al negocio en sí.',
  '6% is category-level conversation attached to no supplier. Neutral is not safe — it is unowned ground with no defender.':
    'El 6 % es conversación de categoría no vinculada a ningún proveedor. Lo neutro no es seguro: es terreno sin dueño y sin defensor.',
  'Sentiment is not hostility. Nothing here is criticism of the business — the adverse weight comes almost entirely from stories written by competitors in which this business does not appear.':
    'El sentimiento no es hostilidad. Nada de esto es una crítica al negocio: el peso adverso procede casi por completo de historias escritas por competidores en las que este negocio ni siquiera aparece.',
  '3 adverse narratives are gaining ground against 1 favourable one. Direction matters more than the current balance, because it is what the position will be in two quarters.':
    '3 narrativas adversas ganan terreno frente a 1 favorable. La dirección importa más que el equilibrio actual, porque es la posición que se tendrá dentro de dos trimestres.',
  '4 of 8 active narratives are still forming or growing. The account of this category is not yet fixed, which is what makes intervention cheap now and expensive later.':
    '4 de las 8 narrativas activas siguen formándose o creciendo. El relato de esta categoría aún no está fijado, y eso es precisamente lo que abarata la intervención ahora y la encarece después.',
  Landscape: 'Panorama',
  'Every active narrative in this category': 'Todas las narrativas activas de esta categoría',
  'Sorted by reach. The owner column is the one that matters — a favourable story nobody owns is an asset waiting to be claimed.':
    'Ordenadas por alcance. La columna del propietario es la que importa: una historia favorable que nadie posee es un activo esperando a que lo reclamen.',
  'Who owns the story': 'Quién posee la historia',
  'Share of active conversation, weighted by reach. Unclaimed is not neutral ground — it is ground with no defender.':
    'Cuota de conversación activa, ponderada por alcance. Sin reclamar no significa terreno neutral: es terreno sin defensor.',
  Business: 'Negocio',
  Competitors: 'Competidores',
  Shared: 'Compartido',
  Unclaimed: 'Sin reclamar',
  'Business: 4%': 'Negocio: 4 %',
  'Competitors: 56%': 'Competidores: 56 %',
  'Shared: 20%': 'Compartido: 20 %',
  'Unclaimed: 20%': 'Sin reclamar: 20 %',
  'Category language owned': 'Vocabulario de la categoría en propiedad',
  'The share of the vocabulary engines use to define this category that belongs to this business. Whoever holds this sets the criteria every comparison is scored against.':
    'La parte del vocabulario que los motores emplean para definir esta categoría que pertenece a este negocio. Quien la posee fija los criterios con los que se puntúa cada comparación.',
  'The split above measures this specific narrative inventory. This figure measures the category’s language as a whole, and is the same one Mission Control publishes.':
    'El reparto anterior mide este inventario narrativo concreto. Esta cifra mide el vocabulario de la categoría en su conjunto, y es la misma que publica el centro de mando.',
  'The business holds': 'El negocio posee',
  'The business holds <b>{pct}%</b>, and every point of it is the hardware-retailer error rather than anything it chose to say. Ownership counts the stories attached to a name; it does not ask whether they help.':
    'El negocio posee un <b>{pct} %</b>, y cada punto procede del error de la ferretería minorista y no de nada que él eligiera decir. La titularidad cuenta las historias asociadas a un nombre; no pregunta si ayudan.',
  'Weighted by reach rather than counted, so a story reaching a third of the category is not equal to one reaching a twentieth.':
    'Ponderado por alcance en lugar de contado, de modo que una historia que llega a un tercio de la categoría no equivale a otra que llega a una veinteava parte.',
  Reach: 'Alcance',
  'Owned by': 'En manos de',
  Influence: 'Influencia',
  Competition: 'Competencia',
  Opportunity: 'Oportunidad',
  Strength: 'Fortaleza',
  Weakness: 'Debilidad',
  Risk: 'Riesgo',
  Media: 'Medios',
  Questions: 'Preguntas',
  'If ignored': 'Si se ignora',
  'Overlap with us': 'Solapamiento con nosotros',
  Unsettled: 'Sin asentar',
  '— absent': '— ausente',
  '{level} severity': 'Gravedad {level}',
  '+ {n} more tracked': '+ {n} más en seguimiento',
  '31 % share': '31 % de cuota',
  '18 % share': '18 % de cuota',
  '11 % share': '11 % de cuota',
  '7 % share': '7 % de cuota',
  '{pct}% share': '{pct} % de cuota',
  Growing: 'En crecimiento',
  Steady: 'Estable',
  Declining: 'En retroceso',
  Contested: 'Disputada',
  Neutral: 'Neutra',
  Favourable: 'Favorable',
  Adverse: 'Adversa',
  'Favourable · emerging': 'Favorable · emergente',
  'Favourable · steady': 'Favorable · estable',
  'Adverse · emerging': 'Adversa · emergente',
  'Adverse · growing': 'Adversa · en crecimiento',
  'Adverse · steady': 'Adversa · estable',
  'Adverse · declining': 'Adversa · en retroceso',
  'Neutral · steady': 'Neutra · estable',

  /* --- Competitor narratives ------------------------------------------------------- */
  'The story each competitor is telling': 'La historia que cuenta cada competidor',
  'Every position has a weakness built into it. A narrative strong enough to dominate is usually narrow enough to outflank.':
    'Toda posición lleva incorporada una debilidad. Una narrativa lo bastante fuerte para dominar suele ser lo bastante estrecha para flanquearla.',
  'The safe national choice with published comparisons.':
    'La opción nacional segura, con comparativas publicadas.',
  'The technical authority on specification.':
    'La autoridad técnica en materia de especificaciones.',
  'The educator that reaches buyers first.':
    'El divulgador que llega antes a los compradores.',
  'The procurement-checklist incumbent.':
    'El que ya figura en las listas de verificación de compras.',
  'Owns the evaluation criteria itself. Engines cite its comparison library when explaining how to choose a supplier at all.':
    'Posee los propios criterios de evaluación. Los motores citan su biblioteca de comparativas cuando explican, sin más, cómo elegir un proveedor.',
  'Its case rests on breadth and fill rate. It has no response prepared on response time or regional service depth.':
    'Su argumento se apoya en la amplitud de catálogo y la tasa de servicio. No tiene respuesta preparada sobre el tiempo de reacción ni sobre la profundidad del servicio regional.',
  'Competes directly on supplier-evaluation questions, where it is named first in four of seven.':
    'Compite directamente en las preguntas de evaluación de proveedores, donde se le nombra primero en cuatro de siete.',
  'Its vocabulary can be adopted and extended rather than fought. Speaking its language while adding availability outflanks it.':
    'Su vocabulario puede adoptarse y ampliarse en lugar de combatirse. Hablar su idioma añadiendo la disponibilidad lo flanquea.',
  'Specification depth does not answer availability. It is largely absent from questions about delivery and continuity.':
    'La profundidad de especificaciones no responde a la disponibilidad. Está en gran medida ausente de las preguntas sobre entrega y continuidad.',
  'Owns solution-evaluation questions upstream of where this business competes.':
    'Posee las preguntas de evaluación de soluciones, en una fase anterior a aquella en la que compite este negocio.',
  'Its own framing concedes that speed is a separate axis. A published response-time standard splits the criterion it defined.':
    'Su propio planteamiento admite que la rapidez es un eje aparte. Un estándar publicado de tiempo de reacción parte en dos el criterio que él mismo definió.',
  'Enters the decision at research, before evaluation criteria exist, and shapes them by arriving early.':
    'Entra en la decisión en la fase de investigación, antes de que existan criterios de evaluación, y los moldea por llegar pronto.',
  'Almost no presence earlier in the journey. Its position is administrative rather than argued.':
    'Casi sin presencia en las fases anteriores del recorrido. Su posición es administrativa más que argumentada.',
  'Owns early-stage questions this business is also absent from, but does not convert them.':
    'Posee preguntas de fase temprana de las que este negocio también está ausente, pero no las convierte.',
  'Thin at the point of purchase. Rarely named when a buyer asks whom to actually choose.':
    'Débil en el punto de compra. Rara vez se le nombra cuando un comprador pregunta a quién elegir en la práctica.',
  'Research-stage presence is uncontested at the point where education becomes a shortlist.':
    'Su presencia en la fase de investigación no la disputa nadie justo donde la divulgación se convierte en lista corta.',
  'Named on procurement documentation that engines cite at the moment of purchase.':
    'Aparece nombrado en la documentación de compras que los motores citan en el momento de la compra.',
  'Competes only at purchase decision, where this business also has no coverage.':
    'Solo compite en la decisión de compra, donde este negocio tampoco tiene cobertura.',
  'A checklist position is winnable through documentation rather than through reputation.':
    'Una posición en lista de verificación se gana con documentación, no con reputación.',

  /* --- Media narratives ------------------------------------------------------------ */
  'What publications are actually writing about': 'Sobre qué escriben realmente las publicaciones',
  'The business appears in none of four active category stories. Two of them — provenance and tariff continuity — have no supplier voice at all.':
    'El negocio no aparece en ninguno de los cuatro temas activos de la categoría. Dos de ellos —la trazabilidad y la continuidad ante los aranceles— no tienen voz de proveedor alguna.',
  'The business appears in none of the four active category stories. Media narrative is currently being written entirely by others.':
    'El negocio no aparece en ninguno de los cuatro temas activos de la categoría. La narrativa mediática la escriben ahora mismo otros por completo.',
  'MRO supplier consolidation across Midwest manufacturing':
    'Consolidación de proveedores MRO en la industria del Medio Oeste',
  'Counterfeit fasteners in industrial supply chains':
    'Fijaciones falsificadas en las cadenas de suministro industriales',
  'Verification and provenance in fastener sourcing':
    'Verificación y trazabilidad en el abastecimiento de fijaciones',
  'Fastener supply continuity after tariff changes':
    'Continuidad del suministro de fijaciones tras los cambios arancelarios',
  'Supply continuity under tariff volatility':
    'Continuidad del suministro ante la volatilidad arancelaria',
  'Vendor-managed inventory adoption in mid-market plants':
    'Adopción del inventario gestionado por el proveedor en plantas de mercado medio',
  'Vendor-managed inventory for mid-market plants':
    'Inventario gestionado por el proveedor para plantas de mercado medio',
  'The most active category story. This business is not quoted in any of the eleven pieces published this quarter.':
    'El tema más activo de la categoría. A este negocio no se le cita en ninguna de las once piezas publicadas este trimestre.',
  'A category-level trust story. Suppliers who comment become the trusted ones; those who stay silent are grouped with the problem.':
    'Un tema de confianza a escala de categoría. Los proveedores que se pronuncian pasan a ser los fiables; los que callan quedan agrupados con el problema.',
  'An emerging story where regional inventory depth is the natural expert angle, and no regional distributor has been quoted yet.':
    'Un tema emergente en el que la profundidad del inventario regional es el ángulo experto natural, y en el que todavía no se ha citado a ningún distribuidor regional.',
  'A service already operated but never publicly associated with the business. One competitor is quoted in three of four pieces on it.':
    'Un servicio que ya se presta pero que nunca se ha asociado públicamente al negocio. A un competidor se le cita en tres de las cuatro piezas que lo tratan.',
  'A competitor is quoted in three of four pieces. The topic maps directly onto a service this business already operates.':
    'A un competidor se le cita en tres de cada cuatro piezas. El tema se corresponde directamente con un servicio que este negocio ya presta.',
  'Regional inventory depth is the natural expert position on a story publications are actively looking for sources on.':
    'La profundidad del inventario regional es la posición experta natural en un tema para el que las publicaciones buscan fuentes activamente.',
  'An active media story with no supplier voice attached. Commenting converts a category-level trust concern into a reason to choose a specific supplier.':
    'Un tema mediático activo sin ninguna voz de proveedor asociada. Pronunciarse convierte una preocupación de confianza de categoría en una razón para elegir a un proveedor concreto.',
  'No quote, contribution or citation in the four topics publications are currently covering.':
    'Ni una cita, ni una aportación, ni una mención en los cuatro temas que las publicaciones cubren ahora mismo.',
  'Silence is read as absence of expertise. The category continues to be explained by the suppliers willing to explain it.':
    'El silencio se lee como ausencia de experiencia. La categoría la siguen explicando los proveedores dispuestos a explicarla.',

  /* --- Question landscape ---------------------------------------------------------- */
  'What the market actually wants to know': 'Qué quiere saber realmente el mercado',
  'The real question corpus, partitioned by what a buyer is trying to decide when they ask it.':
    'El corpus real de preguntas, dividido según lo que un comprador intenta decidir al formularlas.',
  'Most common questions': 'Preguntas más frecuentes',
  'Public questions': 'Preguntas públicas',
  'AI buying questions': 'Preguntas de compra a la IA',
  'Recommendation questions': 'Preguntas de recomendación',
  'Comparison questions': 'Preguntas de comparación',
  'Purchase questions': 'Preguntas de compra',
  'Concerns and objections': 'Dudas y objeciones',
  'A buyer asking directly whom to choose. The highest-value question class in the category, and the one that assigns the order.':
    'Un comprador que pregunta directamente a quién elegir. La clase de pregunta de mayor valor de la categoría, y la que adjudica el pedido.',
  'A buyer weighing approaches rather than vendors. Whoever frames the comparison sets the criteria the vendor choice will use.':
    'Un comprador que sopesa enfoques en vez de proveedores. Quien enmarca la comparación fija los criterios con los que se elegirá al proveedor.',
  'What buyers ask before they have a supplier in mind. Presence here shapes the criteria everything later is judged against.':
    'Lo que preguntan los compradores antes de tener a un proveedor en mente. La presencia aquí moldea los criterios con los que se juzgará todo lo posterior.',
  'A buyer who has already chosen. Presence here converts; it does not win anything that was not already won upstream.':
    'Un comprador que ya ha elegido. La presencia aquí convierte; no gana nada que no se hubiera ganado antes.',
  'The risks buyers raise before committing. Answering these publicly is how a supplier becomes the safe choice rather than the cheap one.':
    'Los riesgos que plantean los compradores antes de comprometerse. Responderlos en público es lo que convierte a un proveedor en la opción segura y no en la barata.',

  /* --- Opportunities and risks ----------------------------------------------------- */
  'Stories nobody owns': 'Historias que no posee nadie',
  'Ranked by influence against competition. The best of these are high influence and uncontested, which is the rarest combination in any category.':
    'Ordenadas por influencia frente a competencia. Las mejores son de alta influencia y sin disputa, la combinación más rara en cualquier categoría.',
  'The single narrative that most favours this business, and nobody owns it. Same-day regional delivery is a genuine capability that no public source currently attaches to this name.':
    'La narrativa que más favorece a este negocio, y nadie la posee. La entrega regional en el mismo día es una capacidad real que ninguna fuente pública asocia hoy a este nombre.',
  'No competitor has claimed it, engines have no vocabulary for it, and it is the capability this business actually leads on. The single highest-return narrative available.':
    'Ningún competidor la ha reclamado, los motores no tienen vocabulario para ella y es la capacidad en la que este negocio realmente destaca. La narrativa disponible de mayor rendimiento.',
  'Directly counters the consolidation narrative that currently favours national distributors, and reframes regional scale as risk management rather than as a limitation.':
    'Rebate directamente la narrativa de consolidación que hoy favorece a los distribuidores nacionales y replantea la escala regional como gestión de riesgos y no como limitación.',
  'Directly contradicts the consolidation narrative and favours a strong secondary supplier. Neither this business nor any competitor has claimed it.':
    'Contradice directamente la narrativa de consolidación y favorece a un segundo proveedor sólido. No la ha reclamado ni este negocio ni ningún competidor.',
  'Consolidation reaches 14% of conversation and favours national distributors. The counter-narrative reaches 11% and is owned by nobody.':
    'La consolidación alcanza el 14 % de la conversación y favorece a los distribuidores nacionales. La contranarrativa alcanza el 11 % y no la posee nadie.',
  'Threats before they become the default': 'Las amenazas antes de que se vuelvan la norma',
  'An emerging narrative is contestable. A settled one has to be displaced. The difference in cost between the two is the reason this section exists.':
    'Una narrativa emergente se puede rebatir. Una asentada hay que desplazarla. La diferencia de coste entre ambas es la razón de ser de este apartado.',
  '3 risks are rated high severity, of which the entity conflation and the emerging regional-limitation narrative are both still cheap to correct.':
    '3 riesgos están calificados de gravedad alta; de ellos, la confusión de entidades y la narrativa emergente de limitación regional siguen siendo baratos de corregir.',
  'The most dangerous emerging narrative on this list. It is not yet dominant and it is factually contestable, which means it is still cheap to answer.':
    'La narrativa emergente más peligrosa de esta lista. Todavía no es dominante y es rebatible con hechos, lo que significa que responderla sigue siendo barato.',
  'Becomes the default objection to a regional supplier. Contestable now with published evidence; expensive to reverse once engines treat it as settled.':
    'Se convierte en la objeción por defecto ante un proveedor regional. Rebatible ahora con pruebas publicadas; caro de revertir en cuanto los motores la den por asentada.',
  'A factual error, carried by one engine, that removes the business from every supplier-evaluation answer it appears in. Declining, but not yet corrected.':
    'Un error factual, sostenido por un solo motor, que aparta al negocio de todas las respuestas de evaluación de proveedores en las que figura. En retroceso, pero aún sin corregir.',
  'A single wrong category record continues to exclude the business from the question class that assigns orders.':
    'Un único registro de categoría equivocado sigue excluyendo al negocio de la clase de preguntas que adjudica los pedidos.',
  'Every future comparison is scored on axes chosen to favour a competitor, whatever the campaign says.':
    'Toda comparación futura se puntúa sobre ejes elegidos para favorecer a un competidor, diga lo que diga la campaña.',
  'Every impression delivered to a Gemini user reinforces an incorrect record. Campaign spend actively strengthens the wrong association.':
    'Cada impresión entregada a un usuario de Gemini refuerza un registro incorrecto. El gasto de la campaña consolida activamente la asociación equivocada.',
  'Emerging in two engines and sourced from a competitor comparison page. Still contestable; not yet treated as settled.':
    'Emergente en dos motores y procedente de una página comparativa de un competidor. Todavía rebatible; aún no se da por asentada.',
  'Appearing in Gemini and Copilot answers on multi-site sourcing questions, sourced from a competitor comparison page.':
    'Aparece en las respuestas de Gemini y Copilot a preguntas de abastecimiento multiplanta, procedente de una página comparativa de un competidor.',
  'ChatGPT categorises the business as retail rather than MRO distribution, removing it from supplier-evaluation answers.':
    'ChatGPT clasifica al negocio como comercio minorista en vez de distribución MRO, lo que lo aparta de las respuestas de evaluación de proveedores.',
  'Fill rate and catalogue breadth are cited first by three of six engines when explaining how to choose a distributor.':
    'La tasa de servicio y la amplitud de catálogo son lo primero que citan tres de seis motores al explicar cómo elegir un distribuidor.',
  'Favours whichever supplier is already largest. A regional specialist is read as the thing being consolidated away rather than the one consolidating.':
    'Favorece al proveedor que ya es el mayor. Un especialista regional se lee como aquello que la consolidación absorbe, no como quien consolida.',
  'Its specification guidance became the category’s default vocabulary because it published first, not because it is more correct.':
    'Su guía de especificaciones se convirtió en el vocabulario por defecto de la categoría porque publicó primero, no porque sea más correcta.',
  'Published first by a competitor, so it became the vocabulary engines learned. It positions this business as a reseller by omission rather than by argument.':
    'La publicó primero un competidor, así que se convirtió en el vocabulario que aprendieron los motores. Sitúa a este negocio como revendedor por omisión, no por argumento.',
  'Neutral on its face, but it removes price as a differentiator and pushes the decision onto evidence — which is the axis this business currently loses on.':
    'Neutra en apariencia, pero elimina el precio como factor diferenciador y desplaza la decisión hacia las pruebas, que es el eje en el que este negocio pierde ahora mismo.',
  'Contain an emerging high-severity adverse narrative':
    'Contener una narrativa adversa emergente de gravedad alta',
  'Respond Immediately': 'Responder de inmediato',

  /* --- Misconceptions and engine reads --------------------------------------------- */
  'What each engine currently says this business is':
    'Qué dice cada motor ahora mismo que es este negocio',
  'Claims machines currently repeat that are wrong. Each one removes the business from answers it should appear in.':
    'Afirmaciones que las máquinas repiten hoy y que son falsas. Cada una aparta al negocio de respuestas en las que debería figurar.',
  'Misconceptions repeated as fact': 'Ideas erróneas repetidas como hechos',
  'Gemini resolves a same-named logistics firm; ChatGPT categorises the business as retail. Both remove it from supplier-evaluation answers entirely.':
    'Gemini resuelve hacia una empresa de logística homónima; ChatGPT clasifica al negocio como comercio minorista. Ambos lo apartan por completo de las respuestas de evaluación de proveedores.',
  'Gemini resolves the wrong entity on category questions and recognises the business at 24 of 100.':
    'En las preguntas de categoría, Gemini resuelve hacia la entidad equivocada y reconoce al negocio con un 24 sobre 100.',
  'Accurate. No divergence from the intended account.':
    'Correcto. Sin divergencia respecto del relato previsto.',
  '4 of 6 diverge': '4 de 6 divergen',
  'Machines are repeating 1 factual error about this business that removes it from supplier answers entirely. Argument about positioning is wasted while the underlying record is wrong. Once corrected, 20% of category conversation is unclaimed and the strongest of it favours this business.':
    'Las máquinas repiten 1 error factual sobre este negocio que lo aparta por completo de las respuestas sobre proveedores. Discutir sobre posicionamiento es tiempo perdido mientras el registro de base sea falso. Una vez corregido, el 20 % de la conversación de la categoría está sin reclamar y su parte más potente favorece a este negocio.',
  ', and every point of it is the hardware-retailer error rather than anything it chose to say. Ownership counts the stories attached to a name; it does not ask whether they help.':
    ', y cada punto procede del error de la ferretería minorista y no de nada que él eligiera decir. La titularidad cuenta las historias asociadas a un nombre; no pregunta si ayudan.',
  'Fill rate and catalogue breadth are how you choose a distributor.':
    'Un distribuidor se elige por su tasa de servicio y la amplitud de su catálogo.',
  'Consolidating MRO suppliers reduces cost and administrative load.':
    'Consolidar proveedores MRO reduce el coste y la carga administrativa.',
  'Midwest fastener pricing is broadly comparable across suppliers.':
    'Los precios de las fijaciones en el Medio Oeste son en general comparables entre proveedores.',
  'Specification depth separates serious suppliers from resellers.':
    'La profundidad de especificaciones separa a los proveedores serios de los revendedores.',
  'Evaluation criteria are increasingly stated in a competitor’s terms.':
    'Los criterios de evaluación se formulan cada vez más en los términos de un competidor.',
  'The business is conflated with a same-named logistics firm.':
    'Se confunde al negocio con una empresa de logística homónima.',
  'Single-source supplier dependency is an operational risk.':
    'Depender de un único proveedor es un riesgo operativo.',
  'Regional suppliers cannot support multi-plant operations.':
    'Los proveedores regionales no pueden dar servicio a operaciones multiplanta.',
  'Regional distributors deliver faster than national ones.':
    'Los distribuidores regionales entregan más rápido que los nacionales.',
  'The business is absent from every active category story.':
    'El negocio está ausente de todos los temas activos de la categoría.',
  'The business is described as a hardware retailer.':
    'Se describe al negocio como una ferretería minorista.',
  'Northwind Supply is a hardware retailer.':
    'Northwind Supply es una ferretería minorista.',
  'Observed in {sources}.': 'Observado en: {sources}.',
  'How much of the conversation works for us':
    'Qué parte de la conversación juega a nuestro favor',
  'Quoted in 3 pieces across 2 publications engines cite':
    'Citado en 3 piezas repartidas en 2 publicaciones a las que recurren los motores',
  'Multi-site capability referenced in 2 of 6 engines on multi-plant sourcing questions':
    'Capacidad multiplanta mencionada en 2 de 6 motores en preguntas de abastecimiento multiplanta',
  'Response time cited among the first three selection criteria by 3 of 6 engines':
    'Tiempo de reacción citado entre los tres primeros criterios de selección por 3 de 6 motores',
  'Secondary-supplier framing cited by 2 of 6 engines on consolidation questions':
    'Planteamiento del segundo proveedor citado por 2 de 6 motores en preguntas de consolidación',
  'The dominant evaluation framing, and it is a competitor’s. Buyers arrive already scoring suppliers on the two criteria where a national distributor wins by default.':
    'El marco de evaluación dominante, y es el de un competidor. Los compradores llegan puntuando ya a los proveedores con los dos criterios en los que un distribuidor nacional gana por defecto.',
  "4 of 6 engines carry a materially different account of this business. A buyer's understanding depends on which assistant they happen to open.":
    '4 de 6 motores sostienen un relato sustancialmente distinto de este negocio. Lo que entienda un comprador depende del asistente que le toque abrir.',

  /* --- Source names. Capitalised to match the seed exactly. ------------------------- */
  'Trade forums': 'Foros del sector',
  'Buyer discussion': 'Debates de compradores',
  'Procurement publications': 'Publicaciones de compras',
  'Specification guides': 'Guías de especificaciones',
  'Risk guidance': 'Orientaciones sobre riesgos',
  'Aggregator pages': 'Páginas de agregadores',
  'Trade publications': 'Publicaciones del sector',
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
  'Narrative action plan': 'Plan de acción narrativo',
  'Open narrative action plan': 'Abrir el plan de acción narrativo',
  'Monitor narrative changes': 'Monitorizar los cambios narrativos',
  'Check readiness before campaigning': 'Comprobar la preparación antes de hacer campaña',
  'Each carries its objective, the evidence behind it, the movement expected, a confidence, an owner, a deadline, an effort estimate and how success is verified.':
    'Cada uno lleva su objetivo, las pruebas que lo sostienen, el movimiento esperado, un nivel de confianza, un responsable, un plazo, una estimación de esfuerzo y cómo se verifica el éxito.',
  'Correct the record first, then claim the narrative nobody owns.':
    'Corrija primero el registro y reclame después la narrativa que no posee nadie.',
  'Correct the entity conflation and the hardware-retailer categorisation.':
    'Corregir la confusión de entidades y la clasificación como ferretería minorista.',
  'Claim response time as a published supplier selection criterion.':
    'Reclamar el tiempo de reacción como criterio publicado de selección de proveedores.',
  'Answer the regional-limitation narrative with published multi-site evidence.':
    'Responder a la narrativa de limitación regional con pruebas multiplanta publicadas.',
  'Claim the secondary-supplier argument against the consolidation narrative.':
    'Reclamar el argumento del segundo proveedor frente a la narrativa de consolidación.',
  'Enter the two active media stories with a named expert voice.':
    'Entrar en los dos temas mediáticos activos con una voz experta con nombre propio.',
  'Reframe regional scale from limitation to risk management':
    'Replantear la escala regional: de limitación a gestión de riesgos',
  'The narrative is unowned, high influence and uncontested. Same-day regional delivery is a real capability that appears in no category description.':
    'La narrativa no tiene dueño, es de alta influencia y nadie la disputa. La entrega regional en el mismo día es una capacidad real que no figura en ninguna descripción de la categoría.',
  'Response time as a supplier selection criterion':
    'El tiempo de reacción como criterio de selección de proveedores',
  'The strategic case for a strong secondary supplier':
    'El argumento estratégico a favor de un segundo proveedor sólido',
  'Independent authority sources 3 → 8': 'Fuentes de autoridad independientes 3 → 8',
  'Average recognition 38 → 55 of 100': 'Reconocimiento medio 38 → 55 sobre 100',

  /* ==========================================================================
     CAMPAIGN READINESS INTELLIGENCE
     ====================================================================== */
  'Campaign readiness intelligence': 'Inteligencia de preparación de campaña',
  'Campaign Readiness Intelligence | GeoRepute':
    'Inteligencia de preparación de campaña | GeoRepute',
  'Campaign Readiness Intelligence': 'Inteligencia de preparación de campaña',
  'Should we launch this campaign today?': '¿Deberíamos lanzar esta campaña hoy?',
  'This assessment evaluates the business, not the campaign. Creative, targeting and budget can all be correct while the business remains structurally unable to convert the attention they buy.':
    'Esta evaluación valora el negocio, no la campaña. La creatividad, la segmentación y el presupuesto pueden ser todos correctos mientras el negocio sigue siendo estructuralmente incapaz de convertir la atención que compran.',
  Campaign: 'Campaña',
  'Q4 Midwest demand generation': 'Generación de demanda en el Medio Oeste — T4',
  'Intended launch': 'Lanzamiento previsto',
  Duration: 'Duración',
  '6 months': '6 meses',
  '7 months': '7 meses',
  '{n} months': '{n} meses',
  Channels: 'Canales',
  'Paid search · Paid social · Trade media · Content syndication':
    'Búsqueda de pago · Social de pago · Medios del sector · Sindicación de contenidos',
  'Paid search': 'Búsqueda de pago',
  'Paid social': 'Social de pago',
  'Trade media': 'Medios del sector',
  'Content syndication': 'Sindicación de contenidos',
  'Estimated budget at risk': 'Presupuesto estimado en riesgo',
  'Executive decision': 'Decisión directiva',
  'Executive recommendation': 'Recomendación a la dirección',
  'Delay Campaign': 'Aplazar la campaña',
  'Delay the campaign. Fix authority first.':
    'Aplace la campaña. Corrija antes la autoridad.',
  'Delay Campaign — readiness reads 32 of 100, held there by authority readiness at 11, which carries 20% of the index.':
    'Aplazar la campaña: la preparación marca 32 sobre 100, retenida ahí por la preparación en autoridad, que está en 11 y pesa el 20 % del índice.',
  'Campaign readiness score': 'Puntuación de preparación de campaña',
  'Primary constraint': 'Restricción principal',
  'Authority readiness is the binding constraint at 11 of 100 and carries 20% of the index.':
    'La preparación en autoridad es la restricción determinante, con 11 sobre 100, y pesa el 20 % del índice.',
  'Strategic window': 'Ventana estratégica',
  'Advantage holds until {date}.': 'La ventaja se mantiene hasta el {date}.',
  'Decision journey gaps': 'Huecos en el recorrido de decisión',
  'Presence at every stage.': 'Presencia en todas las etapas.',
  '2 stages uncovered': '2 etapas sin cubrir',
  'Assessment confidence': 'Confianza de la evaluación',
  'Six of seven dimensions rest on directly observed data.':
    'Seis de las siete dimensiones se apoyan en datos observados directamente.',
  Assessment: 'Evaluación',
  'Seven readiness dimensions, weighted into one index':
    'Siete dimensiones de preparación, ponderadas en un único índice',
  'Every score is computed from observed data rather than assigned. The weights are published and sum to one.':
    'Cada puntuación se calcula a partir de datos observados en lugar de asignarse. Las ponderaciones están publicadas y suman uno.',
  'Ready at 70 and above. At risk from 45 . Blocking below 45 .':
    'Listo a partir de 70. En riesgo desde 45. Bloqueante por debajo de 45.',
  'Ready at {ready} and above. At risk from {risk}. Blocking below {risk}.':
    'Listo a partir de {ready}. En riesgo desde {risk}. Bloqueante por debajo de {risk}.',
  Ready: 'Listo',
  'At risk': 'En riesgo',
  Blocking: 'Bloqueante',
  '{score} of 100 — {status}. Ready at {gate}.':
    '{score} sobre 100 — {status}. Listo a partir de {gate}.',
  '{n}% of the readiness index': '{n} % del índice de preparación',
  '{score} of 100 · {weight}% of the index': '{score} sobre 100 · {weight} % del índice',
  or: 'o',
  None: 'Ninguna',
  '2 of 5': '2 de 5',
  '2 of 6': '2 de 6',
  'Launching remains available and is sometimes correct — a product deadline or a competitive move can outweigh a readiness score. This assessment states the cost of that choice so it is made deliberately rather than by default.':
    'Lanzar sigue siendo posible y a veces acertado: un plazo de producto o un movimiento de la competencia pueden pesar más que una puntuación de preparación. Esta evaluación expone el coste de esa elección para que se tome de forma deliberada y no por inercia.',
  'Each carries a priority, an owner, a deadline, an effort estimate, its dependencies, the movement it should produce and how confident the model is in that.':
    'Cada una lleva una prioridad, un responsable, un plazo, una estimación de esfuerzo, sus dependencias, el movimiento que debería producir y la confianza del modelo en ello.',
  '{n} tracked questions': '{n} preguntas en seguimiento',

  /* --- The seven readiness dimensions ---------------------------------------------- */
  'AI readiness': 'Preparación ante la IA',
  'Do AI engines understand and recommend this business?':
    '¿Entienden los motores de IA este negocio y lo recomiendan?',
  'Across six engines, the business is understood at 38 of 100. Advertising cannot correct a record it does not touch.':
    'A lo largo de seis motores, el negocio se entiende con un 38 sobre 100. La publicidad no puede corregir un registro que no toca.',
  'Authority readiness': 'Preparación en autoridad',
  'Is there enough evidence for AI to recommend this business?':
    '¿Hay pruebas suficientes para que la IA recomiende este negocio?',
  '3 independent sources can verify this business. The category median is 14.':
    '3 fuentes independientes pueden verificar este negocio. La mediana de la categoría es 14.',
  'Google readiness': 'Preparación en Google',
  'Can buyers find this business through traditional search?':
    '¿Pueden los compradores encontrar este negocio mediante la búsqueda tradicional?',
  '9 of 20 commercial questions place in the top ten. The rest are reachable only by paying for the click.':
    '9 de 20 preguntas comerciales se sitúan entre los diez primeros resultados. Al resto solo se llega pagando el clic.',
  'Narrative readiness': 'Preparación narrativa',
  'Does the market understand what this business stands for?':
    '¿Entiende el mercado qué representa este negocio?',
  'The business owns 12% of the language engines use to define this category. The campaign would be fought on terms a competitor wrote.':
    'El negocio posee el 12 % del vocabulario que los motores emplean para definir esta categoría. La campaña se libraría en términos escritos por un competidor.',
  Reputation: 'Reputación',
  'Is this business safe to recommend to a buyer?':
    '¿Es seguro recomendar este negocio a un comprador?',
  'Reputation reads 44 of 100 while market fit reads 72. The offer is right; the proof around it is not.':
    'La reputación marca 44 sobre 100 mientras que el encaje con el mercado marca 72. La oferta es la correcta; las pruebas que la rodean no lo son.',
  'Conversion readiness': 'Preparación para la conversión',
  'Can the destination convert the intent this campaign buys?':
    '¿Puede el destino convertir la intención que compra esta campaña?',
  'A single quote form serves every stage. There is no path for a buyer who is still comparing suppliers and not yet requesting a price.':
    'Un único formulario de presupuesto sirve para todas las etapas. No hay ningún camino para un comprador que todavía compara proveedores y aún no pide precio.',
  'Competitor readiness': 'Preparación de los competidores',
  'Kestrel Industrial holds top-three organic positions and AI presence on the four highest-volume commercial questions simultaneously.':
    'Kestrel Industrial mantiene a la vez posiciones entre las tres primeras en orgánico y presencia en IA en las cuatro preguntas comerciales de mayor volumen.',

  /* --- Dimension detail signals ---------------------------------------------------- */
  'Category understanding': 'Comprensión de la categoría',
  '2 of 6 correct': '2 de 6 correctos',
  'An engine that files the business in the wrong category cannot surface it when a buyer describes this need, regardless of spend.':
    'Un motor que archiva el negocio en la categoría equivocada no puede mostrarlo cuando un comprador describe esta necesidad, por mucho que se gaste.',
  'AI recommendation coverage': 'Cobertura de recomendaciones de IA',
  '6 recommendation events across 144 answer slots. A buyer who asks an assistant for suppliers almost never hears this name.':
    '6 apariciones como recomendación sobre 144 huecos de respuesta. Un comprador que pide proveedores a un asistente casi nunca oye este nombre.',
  'Engine consistency': 'Coherencia entre motores',
  '37-point spread': 'diferencia de 37 puntos',
  'Recognition ranges from 21 to 58. The campaign would reach buyers whose assistants disagree about what this business is.':
    'El reconocimiento va de 21 a 58. La campaña llegaría a compradores cuyos asistentes discrepan sobre qué es este negocio.',
  'Silent engines': 'Motores silenciosos',
  '2 engines recommend the business in none of the tracked decisions. Spend that drives buyers toward those engines returns nothing.':
    '2 motores no recomiendan el negocio en ninguna de las decisiones en seguimiento. El gasto que lleva compradores hacia esos motores no devuelve nada.',
  'Independent authority sources': 'Fuentes de autoridad independientes',
  '3 sources': '3 fuentes',
  'Independent corroboration is what lets a system name a supplier first rather than hedge across several.':
    'Es la corroboración independiente lo que permite a un sistema nombrar primero a un proveedor en lugar de repartirse con cautela entre varios.',
  'Third-party validation': 'Validación de terceros',
  '1 of 5 present': '1 de 5 presente',
  'Certifications, named customers, verified outcomes and specification references are absent from the public record.':
    'Certificaciones, clientes con nombre, resultados verificados y referencias de especificaciones están ausentes del registro público.',
  'Industry references': 'Referencias sectoriales',
  '0 of 3 publications': '0 de 3 publicaciones',
  'The three trade publications engines cite most for this category carry no coverage of the business at all.':
    'Las tres publicaciones del sector que más citan los motores en esta categoría no dedican cobertura alguna al negocio.',
  'Competitor authority': 'Autoridad del competidor',
  '7× behind': '7× por detrás',
  'Kestrel Industrial can be corroborated 7× more readily. That advantage compounds while no counter-programme runs.':
    'A Kestrel Industrial se la puede corroborar 7 veces más fácilmente. Esa ventaja se acumula mientras no haya un programa que la contrarreste.',
  'Commercial keyword coverage': 'Cobertura de búsquedas comerciales',
  '9 of 20': '9 de 20',
  'Weighted by search volume rather than by keyword count, so a strong position on a question nobody asks does not flatter the figure.':
    'Ponderado por volumen de búsqueda y no por número de términos, de modo que una posición fuerte en una pregunta que nadie hace no maquille la cifra.',
  'Technical SEO status': 'Estado del SEO técnico',
  'No blocking faults': 'Sin fallos bloqueantes',
  'Crawlability, indexation and canonicalisation carry no faults that would prevent a campaign landing page from ranking. This is not the constraint.':
    'El rastreo, la indexación y la canonicalización no presentan fallos que impidan posicionar una página de aterrizaje de campaña. La restricción no está aquí.',
  'Organic opportunity': 'Oportunidad orgánica',
  '6 questions': '6 preguntas',
  '6 questions already rank but never reach an AI answer. These are the cheapest positions available and need publishing, not budget.':
    '6 preguntas ya posicionan pero nunca llegan a una respuesta de IA. Son las posiciones más baratas disponibles y necesitan publicación, no presupuesto.',
  'Category clarity': 'Claridad de la categoría',
  Fragmented: 'Fragmentada',
  'The same business is described differently across its own site, two directories and six engines. A campaign amplifies whichever version a buyer meets.':
    'El mismo negocio se describe de forma distinta en su propio sitio, en dos directorios y en seis motores. Una campaña amplifica la versión con la que se topa el comprador.',
  'Public narrative': 'Narrativa pública',
  'Machines describe this category using a competitor’s specification framing, so buyers arrive already evaluating against someone else’s criteria.':
    'Las máquinas describen esta categoría con el marco de especificaciones de un competidor, así que los compradores llegan evaluando ya con los criterios de otro.',
  'Messaging alignment': 'Alineación de los mensajes',
  Misaligned: 'Desalineados',
  'The campaign leads with same-day regional delivery. No public source currently associates that capability with this business.':
    'La campaña encabeza con la entrega regional en el mismo día. Ninguna fuente pública asocia hoy esa capacidad con este negocio.',
  'Trust signals': 'Señales de confianza',
  'Every claim traces back to the company’s own website. Systems treat self-description as a claim rather than as evidence.':
    'Cada afirmación remite al propio sitio de la empresa. Los sistemas tratan la autodescripción como una afirmación, no como una prueba.',
  Reviews: 'Reseñas',
  'Adequate volume': 'Volumen suficiente',
  'Review volume is sufficient and sentiment is positive, but sits on platforms engines do not treat as authoritative for this category.':
    'El volumen de reseñas es suficiente y el sentimiento es positivo, pero están en plataformas que los motores no consideran autorizadas para esta categoría.',
  'Brand credibility': 'Credibilidad de la marca',
  'Expert citations': 'Citas de expertos',
  'No named expert, engineer or specifier is publicly associated with the business. Machines have nobody to attribute expertise to.':
    'Ningún experto, ingeniero o prescriptor con nombre está asociado públicamente al negocio. Las máquinas no tienen a quién atribuir la experiencia.',
  'External validation': 'Validación externa',
  'Customer outcomes, third-party validation, certifications and named references are absent. Only review-platform badges appear.':
    'Los resultados de clientes, la validación de terceros, las certificaciones y las referencias con nombre están ausentes. Solo aparecen distintivos de plataformas de reseñas.',
  'Landing page quality': 'Calidad de las páginas de aterrizaje',
  '3 of 7 pages': '3 de 7 páginas',
  'Three of the seven pages this campaign would drive to state what the business sells above the fold. The rest open with company history.':
    'Tres de las siete páginas a las que dirigiría esta campaña indican qué vende el negocio en la primera pantalla. El resto abre con la historia de la empresa.',
  'Decision support': 'Apoyo a la decisión',
  'No comparison table, specification guidance or selection criteria exists on any destination page. A buyer arriving mid-evaluation has nothing to evaluate with.':
    'En ninguna página de destino existe una tabla comparativa, una guía de especificaciones o unos criterios de selección. Un comprador que llega a mitad de la evaluación no tiene con qué evaluar.',
  'Trust elements': 'Elementos de confianza',
  'Quote form only': 'Solo formulario de presupuesto',
  'Commercial messaging': 'Mensajes comerciales',
  'Same-day regional delivery — the strongest differentiator — appears on one page and in no page title.':
    'La entrega regional en el mismo día —el diferenciador más potente— aparece en una sola página y en ningún título de página.',
  'Market leaders': 'Líderes del mercado',
  '4 ahead': '4 por delante',
  '4 of 4 tracked competitors currently receive more recommendations than this business.':
    'Los 4 competidores en seguimiento reciben hoy más recomendaciones que este negocio.',
  'Competitor visibility': 'Visibilidad de los competidores',
  '4 in top three': '4 entre los tres primeros',
  'Authority gap': 'Brecha de autoridad',
  '21 sources': '21 fuentes',
  'Kestrel Industrial holds 21 sources against 3. Advertising does not close an evidence gap; publishing and validation do.':
    'Kestrel Industrial cuenta con 21 fuentes frente a 3. Una brecha de pruebas no se cierra con publicidad, sino publicando y validando.',
  'Competitive gap': 'Brecha competitiva',
  '12% owned': '12 % en propiedad',
  'Existing search strength': 'Fortaleza actual en búsqueda',
  'Existing strength sits on questions asked after a vendor has been chosen, not on the questions that choose one.':
    'La fortaleza actual está en preguntas que se hacen después de elegir proveedor, no en las que eligen a uno.',
  'The leader is strongest at exactly the stage this campaign is intended to influence, which is where displacement is most expensive.':
    'El líder es más fuerte justo en la etapa sobre la que esta campaña pretende influir, que es donde desplazarlo cuesta más caro.',
  '4 engines hold a wrong or missing record — one conflates the business with a same-named logistics firm.':
    '4 motores tienen un registro erróneo o inexistente; uno confunde el negocio con una empresa de logística homónima.',
  'The category description differs between the website and two trade directories, which reads to a machine as an unreliable record.':
    'La descripción de la categoría difiere entre el sitio web y dos directorios del sector, lo que una máquina lee como un registro poco fiable.',
  'No single consistent story exists in the public record for a campaign to reinforce, so each impression starts the explanation over.':
    'No existe en el registro público un relato único y coherente que una campaña pueda reforzar, así que cada impresión empieza la explicación de nuevo.',
  'Kestrel Industrial receives 31% of recommendations against 4.2%. Launching now advertises into a decision they control.':
    'Kestrel Industrial recibe el 31 % de las recomendaciones frente a un 4,2 %. Lanzar ahora es anunciarse dentro de una decisión que ellos controlan.',

  /* --- Journey coverage ------------------------------------------------------------ */
  Coverage: 'Cobertura',
  'Where the campaign would reach buyers, and where it would not':
    'Dónde llegaría la campaña a los compradores y dónde no',
  'Stage 1': 'Etapa 1',
  'Stage 2': 'Etapa 2',
  'Stage 3': 'Etapa 3',
  'Stage 4': 'Etapa 4',
  'Stage 5': 'Etapa 5',
  'Invisible to every conventional measurement tool.':
    'Invisible para cualquier herramienta de medición convencional.',
  'Visible to {tools}.': 'Visible para {tools}.',
  'No presence at {stages}.': 'Sin presencia en: {stages}.',
  'A campaign creates demand across the whole journey. It converts only at the stages where the business is actually present.':
    'Una campaña genera demanda en todo el recorrido. Solo convierte en las etapas en las que el negocio está realmente presente.',

  /* --- Commercial risk ------------------------------------------------------------- */
  'Commercial risk': 'Riesgo comercial',
  'Commercial risk level': 'Nivel de riesgo comercial',
  'What launching today would cost': 'Lo que costaría lanzar hoy',
  'Missed decision exposure': 'Exposición por decisiones perdidas',
  '19 of 24': '19 de 24',
  'Commercial decisions that already complete without this business appearing. A campaign increases how many of these happen, not how many are won.':
    'Decisiones comerciales que ya se completan sin que este negocio aparezca. Una campaña aumenta cuántas de ellas ocurren, no cuántas se ganan.',
  'Revenue dependent on this stage': 'Ingresos que dependen de esta etapa',
  '38% of demand': '38 % de la demanda',
  'The share of revenue arriving through supplier evaluation — the stage where presence is currently lowest and the campaign has least leverage.':
    'La parte de los ingresos que llega a través de la evaluación de proveedores: la etapa donde la presencia es hoy más baja y donde la campaña tiene menos palanca.',
  'Expected ROI risk': 'Riesgo sobre el retorno previsto',
  'Return depends on buyers completing a journey the business is absent from at these stages. Spend reaches them; the recommendation does not.':
    'El retorno depende de que los compradores completen un recorrido del que el negocio está ausente en estas etapas. El gasto les llega; la recomendación no.',
  "Risk here is not the chance the campaign underperforms. It is the mechanism by which spend converts into a competitor's advantage.":
    'El riesgo aquí no es la probabilidad de que la campaña rinda por debajo de lo previsto. Es el mecanismo por el que el gasto se convierte en ventaja para un competidor.',
  'Every click is paid for twice: once to acquire it, and again to reacquire the buyer who arrived, found nothing to evaluate with, and left to compare elsewhere.':
    'Cada clic se paga dos veces: una para conseguirlo y otra para volver a captar al comprador que llegó, no encontró con qué evaluar y se marchó a comparar a otra parte.',
  'Paid acquisition buys attention that trust has to convert. Without it the campaign raises awareness for the category and the best-verified supplier in it wins.':
    'La captación de pago compra una atención que la confianza tiene que convertir. Sin ella, la campaña da a conocer la categoría y gana el proveedor mejor verificado de esa categoría.',
  'The campaign generates consideration the business cannot survive. Buyers who check will find nothing independent, and the check happens after the click is paid for.':
    'La campaña genera una fase de consideración que el negocio no sobrevive. Los compradores que comprueben no encontrarán nada independiente, y la comprobación ocurre después de haber pagado el clic.',
  'Campaign attention drives buyers to verify the business through an assistant that cannot describe it correctly. The spend creates the demand and a competitor collects it.':
    'La atención de la campaña lleva a los compradores a verificar el negocio con un asistente incapaz de describirlo correctamente. El gasto crea la demanda y la recoge un competidor.',
  'Campaign messaging contradicts what the market already believes. Spend is consumed correcting the record instead of creating demand.':
    'Los mensajes de la campaña contradicen lo que el mercado ya cree. El gasto se consume corrigiendo el registro en lugar de crear demanda.',
  'Paid search carries the entire commercial keyword set alone, at a blended cost already above break-even, for as long as the campaign runs.':
    'La búsqueda de pago sostiene ella sola todo el conjunto de términos comerciales, a un coste combinado que ya supera el punto de equilibrio, mientras dure la campaña.',
  'The campaign raises category demand that the best-evidenced supplier absorbs. Competitor share can rise as a direct result of this spend.':
    'La campaña eleva la demanda de la categoría, que absorbe el proveedor con mejores pruebas. La cuota del competidor puede subir como consecuencia directa de este gasto.',
  'Both surfaces': 'Ambas superficies',
  Partial: 'Parcial',

  /* --- Interventions and the decision ---------------------------------------------- */
  Intervention: 'Intervención',
  'Required before launch': 'Necesario antes del lanzamiento',
  'Blocked until priority {n} lands.': 'Bloqueado hasta que se complete la prioridad {n}.',
  'If you launch anyway': 'Si lanza de todos modos',
  'Launch campaign': 'Lanzar la campaña',
  'Fix readiness first': 'Corregir antes la preparación',
  'Open Executive Action Plan': 'Abrir el plan de acción directivo',
  'Review the full position': 'Revisar la posición completa',
  'Website and conversion readiness': 'Preparación del sitio y de la conversión',
  'What position are we launching into?': '¿A qué posición estamos lanzando?',
  'AI narrative': 'Narrativa en la IA',
  'Narrative consistency': 'Coherencia narrativa',
  "Engines describe the category using a competitor's framing. Northwind owns 12% of that language.":
    'Los motores describen la categoría con el planteamiento de un competidor. Northwind posee el 12 % de ese vocabulario.',

  /* ==========================================================================
     DECISION RECONSTRUCTION

     Display labels only. 'brand', 'competitor', 'supporting', 'downstream',
     'high', 'medium', 'low' are enum discriminants in the seed graph — an
     entry keyed on any of them rewrites the data itself and breaks every
     lookup. The component maps them to the capitalised labels below.
     ====================================================================== */
  'Decision Reconstruction': 'Reconstrucción de la decisión',
  'Decision Reconstruction | GeoRepute': 'Reconstrucción de la decisión | GeoRepute',
  'Signature experience': 'Experiencia distintiva',
  'Enter a domain and choose a commercial question. The system reconstructs what each surface understood, who received the decision and why.':
    'Introduzca un dominio y elija una pregunta comercial. El sistema reconstruye qué entendió cada superficie, quién se llevó la decisión y por qué.',
  'Seeded environment — this demonstration always reconstructs {org}.':
    'Entorno precargado: esta demostración reconstruye siempre {org}.',
  Domain: 'Dominio',
  'Understood as: {what}': 'Entendido como: {what}',
  Brand: 'Marca',
  Competitor: 'Competidor',
  Low: 'Bajo',
  Supporting: 'De apoyo',
  Downstream: 'Posterior',
  '{n} tracked decision questions. Supplier-evaluation questions appear first — that is where the vendor is chosen.':
    '{n} preguntas de decisión en seguimiento. Las preguntas de evaluación de proveedores aparecen primero: ahí es donde se elige al proveedor.',
  'An MRO and fastener distributor serving manufacturers':
    'Un distribuidor de MRO y fijaciones al servicio de los fabricantes',
  'Midwest industrial fastener and MRO distributor':
    'Distribuidor de fijaciones industriales y MRO del Medio Oeste',
  'A regional industrial supplier in the US Midwest':
    'Un proveedor industrial regional del Medio Oeste de EE. UU.',
  'Industrial supply company, category association incomplete':
    'Empresa de suministro industrial, asociación de categoría incompleta',
  'Unclear — associates the name with unrelated businesses':
    'Poco claro: asocia el nombre con negocios sin relación',
  'Not recognized as a distinct business entity':
    'No se reconoce como una entidad empresarial diferenciada',
  '{n} independent sources support this brand. Northwind has 3.':
    '{n} fuentes independientes respaldan esta marca. Northwind tiene 3.',
  '{name} controls': '{name} controla',
  'across the whole set. Competitive density is shifting at {velocity}.':
    'en todo el conjunto. La densidad competitiva se mueve a un ritmo {velocity}.',
  'This is the exposure attributable to this single question. The full-book figure across all {n} tracked decisions is materially larger and appears in Mission Control.':
    'Esta es la exposición atribuible solo a esta pregunta. La cifra global de las {n} decisiones en seguimiento es sustancialmente mayor y figura en el centro de mando.',
  'stage {n} of {total}': 'etapa {n} de {total}',
  Present: 'Presente',
  'Observable by {tools} — but only after the decision has already narrowed.':
    'Observable con {tools}, pero solo una vez que la decisión ya se ha estrechado.',
  'No conventional tool observes this stage. There is no visit, click, lead or CRM event to record — which is why the weakness is invisible until revenue moves.':
    'Ninguna herramienta convencional observa esta etapa. No hay visita, clic, oportunidad ni evento de CRM que registrar, y por eso la debilidad resulta invisible hasta que se mueven los ingresos.',
  'Reconstruction confidence across all ten surfaces.':
    'Confianza de la reconstrucción en las diez superficies.',
  'What each AI engine understood about the business':
    'Qué entendió cada motor de IA sobre el negocio',
  'Whether the brand was recognised, mentioned, cited, recommended or ignored':
    'Si la marca fue reconocida, mencionada, citada, recomendada o ignorada',
  'Which competitor was selected instead': 'Qué competidor se eligió en su lugar',
  'Which sources, trust signals and narratives influenced the answer':
    'Qué fuentes, señales de confianza y narrativas influyeron en la respuesta',
  'What Google demand, organic position and paid click cost indicate':
    'Qué indican la demanda en Google, la posición orgánica y el coste del clic de pago',
  'Where the question sits in the customer decision journey':
    'Dónde se sitúa la pregunta en el recorrido de decisión del cliente',
  'What timing, market maturity and competitive density indicate':
    'Qué indican el momento, la madurez del mercado y la densidad competitiva',
  'What the directional commercial exposure may be':
    'Cuál puede ser la exposición comercial en orden de magnitud',
  'Which connected signals explain the outcome':
    'Qué señales conectadas explican el resultado',
  'What action is prescribed and how improvement will be measured':
    'Qué acción se prescribe y cómo se medirá la mejora',
  'Decision intelligence graph': 'Grafo de inteligencia de decisión',
  'Mentioned only': 'Solo mencionada',
  'Wrong entity': 'Entidad equivocada',
  'Named Northwind in its answer, citing company website.':
    'Nombró a Northwind en su respuesta, citando el sitio de la empresa.',
  'Recognises the business but did not consider it relevant to this question.':
    'Reconoce el negocio pero no lo consideró relevante para esta pregunta.',
  'Describes Northwind as a hardware retailer rather than an MRO distributor, which removes it from supplier-evaluation answers.':
    'Describe a Northwind como una ferretería minorista en lugar de un distribuidor MRO, lo que la aparta de las respuestas de evaluación de proveedores.',
  'Knows the company exists but not which product categories it carries, so it is omitted from specification-led questions.':
    'Sabe que la empresa existe pero no qué categorías de producto maneja, así que se la omite en las preguntas guiadas por especificaciones.',
  'Conflates Northwind Supply with a same-named logistics firm, so category association fails entirely.':
    'Confunde a Northwind Supply con una empresa de logística homónima, de modo que la asociación de categoría falla por completo.',
  '1 of 6 engines named Northwind, and none placed it first.':
    '1 de 6 motores nombró a Northwind, y ninguno la situó en primer lugar.',
  '4 of 6 resolve the wrong entity': '4 de 6 resuelven hacia la entidad equivocada',
  'engines recommended the business on this question':
    'motores recomendaron el negocio en esta pregunta',
  'of all recommendations across the tracked decision set':
    'del total de recomendaciones en el conjunto de decisiones en seguimiento',
  'Kestrel Industrial is cited by 21 independent sources; Northwind by 3.':
    'A Kestrel Industrial la citan 21 fuentes independientes; a Northwind, 3.',
  '3 sources vs 14 median': '3 fuentes frente a una mediana de 14',
  'Northwind’s own pages are the only source engines can reach for its claims — self-citation carries little weight.':
    'Las propias páginas de Northwind son la única fuente que los motores pueden alcanzar para sus afirmaciones, y la autocita pesa poco.',
  'A published comparison library gives engines material they can quote directly.':
    'Una biblioteca de comparativas publicada da a los motores material que pueden citar directamente.',
  'Category evaluation criteria': 'Criterios de evaluación de la categoría',
  'Supplier-comparison content': 'Contenidos de comparación de proveedores',
  'Company website': 'Sitio de la empresa',
  Source: 'Fuente',
  Favours: 'Favorece a',
  'Why it matters': 'Por qué importa',
  'Monthly volume': 'Volumen mensual',
  'Paid CPC': 'CPC de pago',
  'AI presence': 'Presencia en IA',
  'Closest tracked keyword': 'Término en seguimiento más cercano',
  'Above break-even CPC': 'Por encima del CPC de equilibrio',
  'Coverage at this stage': 'Cobertura en esta etapa',
  'Share of query volume': 'Cuota del volumen de consultas',
  'Share of revenue decided': 'Cuota de ingresos que se decide',
  'of questions at this stage against': 'de las preguntas de esta etapa frente a',
  'Market position': 'Posición en el mercado',
  'Window remaining': 'Ventana restante',
  'Buy this as an intelligence product': 'Comprar esto como producto de inteligencia',

  /* --- The 24 tracked buyer questions. Translated on the same reasoning as the
         home page's search queries — a buyer in this market asks in Spanish. - */
  'Which fastener supplier should we choose for a new plant?':
    '¿Qué proveedor de fijaciones deberíamos elegir para una planta nueva?',
  'Who are the top industrial supply companies for fasteners?':
    '¿Cuáles son las mejores empresas de suministro industrial para fijaciones?',
  'Best MRO distributors for manufacturing plants':
    'Mejores distribuidores MRO para plantas de fabricación',
  'Top rated industrial supply vendors near Chicago':
    'Proveedores de suministro industrial mejor valorados cerca de Chicago',
  'Which MRO supplier has the best fill rate?':
    '¿Qué proveedor MRO tiene la mejor tasa de servicio?',
  'Recommended industrial distributors for hydraulic components':
    'Distribuidores industriales recomendados para componentes hidráulicos',
  'Compare industrial distributor service levels':
    'Comparar los niveles de servicio de los distribuidores industriales',
  'Is a national or regional MRO distributor better?':
    '¿Es mejor un distribuidor MRO nacional o regional?',
  'Should we consolidate MRO suppliers or keep multiple vendors?':
    '¿Consolidamos los proveedores MRO o mantenemos varios?',
  'What should an MRO supply agreement include?':
    '¿Qué debe incluir un contrato de suministro MRO?',
  'Risks of single-source supplier dependency for MRO':
    'Riesgos de depender de un único proveedor de MRO',
  'Vendor-managed inventory vs consignment for MRO supplies':
    'Inventario gestionado por el proveedor frente a depósito para suministros MRO',
  'What is vendor-managed inventory for MRO supplies?':
    '¿Qué es el inventario gestionado por el proveedor para suministros MRO?',
  'How do I reduce MRO inventory carrying costs?':
    '¿Cómo reduzco los costes de mantener inventario MRO?',
  'Best practices for industrial fastener sourcing':
    'Buenas prácticas de abastecimiento de fijaciones industriales',
  'What is the difference between grade 5 and grade 8 fasteners?':
    '¿Cuál es la diferencia entre las fijaciones de grado 5 y las de grado 8?',
  'What causes premature bolt failure in high-vibration equipment?':
    '¿Qué provoca el fallo prematuro de los pernos en equipos de alta vibración?',
  'How often should hydraulic fittings be replaced?':
    '¿Con qué frecuencia hay que sustituir los racores hidráulicos?',
  'How to avoid counterfeit fasteners in the supply chain':
    'Cómo evitar fijaciones falsificadas en la cadena de suministro',
  'What are the most common industrial supply delivery failures?':
    '¿Cuáles son los fallos de entrega más habituales en el suministro industrial?',
  'Industrial fastener supplier with same-day shipping':
    'Proveedor de fijaciones industriales con envío en el mismo día',
  'Get a quote for bulk grade 8 fasteners':
    'Pedir presupuesto de fijaciones de grado 8 al por mayor',
  'Set up an MRO supply account': 'Abrir una cuenta de suministro MRO',

  /* ==========================================================================
     EXECUTIVE MISSION CONTROL
     ====================================================================== */
  'Executive Mission Control': 'Centro de mando directivo',
  'Executive Mission Control | GeoRepute': 'Centro de mando directivo | GeoRepute',
  'Not more data. A decision position.': 'No más datos. Una posición de decisión.',
  'Ten measures, each with evidence behind it': 'Diez medidas, cada una con pruebas detrás',
  'Every figure is computed from observed data. Select any tile to open the full readout, its evidence and its prescribed action.':
    'Cada cifra se calcula a partir de datos observados. Seleccione cualquier tarjeta para abrir la lectura completa, sus pruebas y la acción prescrita.',
  Position: 'Posición',
  Explanation: 'Explicación',
  Execution: 'Ejecución',
  'AI Recognition Position': 'Posición de reconocimiento por la IA',
  'Average entity understanding across six engines. Three misidentify the category.':
    'Comprensión media de la entidad en seis motores. Tres identifican mal la categoría.',
  'Google vs AI Gap': 'Brecha entre Google y la IA',
  'Keywords absent from AI answers and outside the Google top ten. The decision happens on neither surface.':
    'Términos ausentes de las respuestas de IA y fuera de los diez primeros de Google. La decisión no ocurre en ninguna de las dos superficies.',
  'Decision Presence': 'Presencia en la decisión',
  'Supplier-evaluation coverage. 19 of 24 decisions complete without the brand.':
    'Cobertura de la evaluación de proveedores. 19 de 24 decisiones se completan sin la marca.',
  'Competitive Capture': 'Captura competitiva',
  'Kestrel Industrial receives the recommendation. Northwind receives 4.2%.':
    'Kestrel Industrial se lleva la recomendación. Northwind recibe un 4,2 %.',
  'Narrative Ownership': 'Titularidad de la narrativa',
  'Share of the language engines use to define the category. The criteria cited first are a competitor’s.':
    'Cuota del vocabulario que los motores usan para definir la categoría. Los criterios que se citan primero son de un competidor.',
  'Trust Readiness': 'Preparación en confianza',
  'The recommendation goes to the supplier engines can support with evidence.':
    'La recomendación va al proveedor que los motores pueden respaldar con pruebas.',
  'Paid Dependency': 'Dependencia del pago',
  'Blended CPC runs above break-even. Paid is renting the positions authority would hold.':
    'El CPC combinado supera el punto de equilibrio. El pago alquila las posiciones que mantendría la autoridad.',
  'Weighted across six GEON vectors. Authority at 28 is the binding constraint.':
    'Ponderado sobre seis vectores GEON. La autoridad, en 28, es la restricción determinante.',
  'ChatGPT supplier recommendation presence':
    'Presencia en las recomendaciones de proveedores de ChatGPT',
  'The most-used engine puts Northwind forward in one of twenty-four decision questions.':
    'El motor más utilizado propone a Northwind en una de veinticuatro preguntas de decisión.',
  '3 independent sources against a category median of 14.':
    '3 fuentes independientes frente a una mediana de categoría de 14.',
  'Authority is the binding constraint, so it is where intervention begins.':
    'La autoridad es la restricción determinante, así que por ahí empieza la intervención.',
  'Paid search is bought to cover the questions authority no longer wins.':
    'La búsqueda de pago se compra para cubrir las preguntas que la autoridad ya no gana.',
  'Emerging market at 63/100 readiness. Query maturity accelerating.':
    'Mercado emergente con una preparación de 63/100. La madurez de las consultas se acelera.',
  'The window remains open but is narrowing. Displacement cost rises once engines settle on a stable answer set.':
    'La ventana sigue abierta pero se estrecha. El coste de desplazar sube en cuanto los motores se asientan en un conjunto estable de respuestas.',
  'Decision deadline': 'Plazo de decisión',
  'Timing window': 'Ventana temporal',
  months: 'meses',
  'Causal signal chain': 'Cadena causal de señales',
  'The measures above are not independent. This is the chain that connects them, ending in the intervention it implies.':
    'Las medidas anteriores no son independientes. Esta es la cadena que las conecta y termina en la intervención que implica.',
  'One decision. Many signals. One explanation.':
    'Una decisión. Muchas señales. Una explicación.',
  'Open evidence': 'Abrir las pruebas',
  'Open Action Center': 'Abrir el centro de acción',
  'Reconstruct the decision': 'Reconstruir la decisión',
  'Explore intelligence engines': 'Explorar los motores de inteligencia',

  /* --- Executive intelligence feed ------------------------------------------------- */
  'Executive intelligence feed': 'Flujo de inteligencia para dirección',
  '{n} events': '{n} eventos',
  'Competitor surge': 'Avance de un competidor',
  'Kestrel Industrial gained the first recommendation on two more supplier questions':
    'Kestrel Industrial se llevó la primera recomendación en dos preguntas de proveedores más',
  'Kestrel now leads four of seven supplier-evaluation answers, up from two. Both new wins cite a trade publication added in June.':
    'Kestrel encabeza ahora cuatro de las siete respuestas de evaluación de proveedores, frente a dos antes. Las dos nuevas victorias citan una publicación del sector añadida en junio.',
  'Citation lost': 'Cita perdida',
  'Perplexity stopped citing the Northwind capability page':
    'Perplexity dejó de citar la página de capacidades de Northwind',
  'The page was cited on three questions in June and none in July. Perplexity now resolves the same questions to competitor sources.':
    'La página se citó en tres preguntas en junio y en ninguna en julio. Perplexity resuelve ahora esas mismas preguntas hacia fuentes de la competencia.',
  '3 → 0 citations': '3 → 0 citas',
  '25 searches/mo': '25 búsquedas/mes',
  '+1 question': '+1 pregunta',
  '+2 questions': '+2 preguntas',
  '+8% QoQ': '+8 % intertrimestral',
  '+8% CPC': '+8 % de CPC',
  'per month': 'al mes',
  '$3,200 – $6,200 per month': '3.200 $ – 6.200 $ al mes',
  'per quarter': 'al trimestre',
  'per year': 'al año',
  'Narrative risk': 'Riesgo narrativo',
  'Engines adopted a competitor’s evaluation criteria':
    'Los motores adoptaron los criterios de evaluación de un competidor',
  'Fill rate and catalogue breadth are now cited first when engines explain how to choose a distributor. Regional response time is not referenced.':
    'La tasa de servicio y la amplitud de catálogo son ahora lo primero que se cita cuando los motores explican cómo elegir un distribuidor. El tiempo de reacción regional no se menciona.',
  'Trust signal decayed': 'Señal de confianza degradada',
  'Category description diverged across two trade directories':
    'La descripción de la categoría divergió en dos directorios del sector',
  'Two directories now describe Northwind differently from its own site. Inconsistency is the mechanism behind entity confusion on ChatGPT and Copilot.':
    'Dos directorios describen ahora a Northwind de forma distinta a su propio sitio. Esa incoherencia es el mecanismo que hay detrás de la confusión de entidad en ChatGPT y Copilot.',
  'Search cost spike': 'Repunte del coste de búsqueda',
  'Blended CPC moved further above break-even':
    'El CPC combinado se alejó aún más por encima del punto de equilibrio',
  '“industrial supply company” rose to $11.00 with no organic position in the top 100. Paid is covering a question authority does not reach.':
    '«empresa de suministro industrial» subió a 11,00 $ sin ninguna posición orgánica entre los 100 primeros resultados. El pago cubre una pregunta a la que la autoridad no llega.',
  'New decision question': 'Nueva pregunta de decisión',
  'A new supplier-evaluation question entered the tracked set':
    'Una nueva pregunta de evaluación de proveedores entró en el conjunto en seguimiento',
  '“Which MRO supplier has the best fill rate?” appeared with measurable volume. Northwind is absent from every engine answering it.':
    '«¿Qué proveedor MRO tiene la mejor tasa de servicio?» apareció con volumen medible. Northwind está ausente de todos los motores que la responden.',
  'Recommendation gained': 'Recomendación ganada',
  'Claude began recommending Northwind for regional distributor questions':
    'Claude empezó a recomendar a Northwind en preguntas sobre distribuidores regionales',
  'First recommendation on “Top rated industrial supply vendors near Chicago”. Regional specificity is the differentiator the answer cites.':
    'Primera recomendación en «Proveedores de suministro industrial mejor valorados cerca de Chicago». La especificidad regional es el diferenciador que cita la respuesta.',
  'Regional opportunity': 'Oportunidad regional',
  'Midwest regional questions show weaker competitive density':
    'Las preguntas regionales del Medio Oeste muestran una densidad competitiva más débil',
  'Questions naming a Midwest location carry lower competitor control than national equivalents — the cheapest available entry point.':
    'Las preguntas que nombran un lugar del Medio Oeste están menos controladas por la competencia que sus equivalentes nacionales: el punto de entrada más barato disponible.',
  'Competitive density rose 8% quarter over quarter':
    'La densidad competitiva subió un 8 % de un trimestre a otro',

  /* ==========================================================================
     STRATEGIC ACTION CENTER
     ====================================================================== */
  'Strategic Action Center': 'Centro de acción estratégica',
  'Prioritised interventions with owner, deadline, expected movement and how impact is verified after execution.':
    'Intervenciones priorizadas con responsable, plazo, movimiento esperado y cómo se verifica el impacto tras la ejecución.',
  '{n}-day': '{n} días',
  'Each intervention names an owner, a deadline, the signal it should move and how that movement will be verified.':
    'Cada intervención designa un responsable, un plazo, la señal que debe mover y cómo se verificará ese movimiento.',
  Interventions: 'Intervenciones',
  Measured: 'Medido',
  'Verified after execution': 'Verificado tras la ejecución',
  View: 'Ver',
  'Priority queue': 'Cola de prioridades',
  '30/60/90 roadmap': 'Hoja de ruta 30/60/90',
  'day horizon': 'días de horizonte',
  'Ranked by urgency, then by effort — cheapest decisive move first':
    'Ordenado por urgencia y luego por esfuerzo: primero el movimiento decisivo más barato',
  'Priority {n}': 'Prioridad {n}',
  'Not yet measured — verified after execution.':
    'Todavía sin medir: se verifica tras la ejecución.',
  'View evidence': 'Ver las pruebas',
  'How impact is verified': 'Cómo se verifica el impacto',
  'Completion is not impact. Each action is verified by re-observing the signal it targets, across the same engines and questions, after execution. Until that re-observation happens, measured change stays empty rather than assumed.':
    'Completar no es tener impacto. Cada acción se verifica volviendo a observar la señal a la que apunta, en los mismos motores y preguntas, después de ejecutarla. Hasta que esa nueva observación ocurra, el cambio medido queda vacío en lugar de darse por supuesto.',
  'Back to Mission Control': 'Volver al centro de mando',
  'Read the methodology': 'Leer la metodología',

  /* Page descriptions. These render into <meta name="description"> rather than
     into the page, so the render audit cannot see them — it reads visible
     prose and a short list of perceivable attributes. Four of them sat in
     English through every clean audit this site has passed. */
  'Decision Health, revenue exposure, competitive capture, narrative control and strategic timing in one decision position.':
    'Salud de la decisión, exposición de ingresos, captura competitiva, control narrativo y momento estratégico en una única posición de decisión.',
  'Should we launch this campaign today? A pre-campaign assessment of the business rather than the campaign — AI, authority, trust, narrative, competitive position and destination readiness, weighted into one decision.':
    '¿Deberíamos lanzar esta campaña hoy? Una evaluación previa a la campaña del negocio, no de la campaña: IA, autoridad, confianza, narrativa, posición competitiva y preparación del destino, ponderadas en una única decisión.',
  'What story is the market telling about us, and how is it influencing decisions? Active narratives, who owns each one, where they are heading, and what should change.':
    '¿Qué historia cuenta el mercado sobre nosotros y cómo influye en las decisiones? Las narrativas activas, quién posee cada una, hacia dónde van y qué debería cambiar.',
  'Enter a domain and select a commercial question. Reconstruct what each AI engine understood, who received the decision, why, and what must change.':
    'Introduzca un dominio y seleccione una pregunta comercial. Reconstruya qué entendió cada motor de IA, quién se llevó la decisión, por qué y qué debe cambiar.',

  /* ==========================================================================
     MARKETPLACE AND ENGINE DETAIL PAGES

     Nineteen routes that were never audited until the route list was
     enumerated properly. Composites the audit prints — "Entry · Snapshot",
     "12 modules", "Next: …" — are NOT keys; the component joins two halves.
     ====================================================================== */

  /* --- Product page chrome --------------------------------------------------------- */
  Breadcrumb: 'Ruta de navegación',
  'Intelligence Marketplace': 'Mercado de inteligencia',
  'Intelligence Engines': 'Motores de inteligencia',
  'Product detail': 'Detalle del producto',
  'Everything needed to decide, without a sales call':
    'Todo lo necesario para decidir, sin llamada comercial',
  'What you receive': 'Qué recibe',
  'A real readout from this product, on seeded data':
    'Una lectura real de este producto, sobre datos precargados',
  'Every intelligence product returns the same twelve-section anatomy: executive truth, business meaning, evidence, connected signals, competitor context, commercial exposure, timing, trend, prescription, expected movement, owner and measurement.':
    'Todo producto de inteligencia devuelve la misma anatomía de doce secciones: verdad directiva, significado de negocio, pruebas, señales conectadas, contexto competitivo, exposición comercial, momento, tendencia, prescripción, movimiento esperado, responsable y medición.',
  'One-time purchase. Placeholder pricing.':
    'Compra única. Precios provisionales.',
  'Buy this intelligence product': 'Comprar este producto de inteligencia',
  'Buy {name}': 'Comprar {name}',
  'Compare with a subscription': 'Comparar con una suscripción',
  'See the full ecosystem': 'Ver el ecosistema completo',
  'by {date}': 'para el {date}',

  /* --- The eleven product fields --------------------------------------------------- */
  'Business question': 'Pregunta de negocio',
  'Decision consequence': 'Consecuencia para la decisión',
  'What it detects': 'Qué detecta',
  'Required inputs': 'Datos necesarios',
  Scope: 'Alcance',
  'Intelligence depth': 'Profundidad de inteligencia',
  Delivery: 'Entrega',
  'Time to delivery': 'Plazo de entrega',
  'Commercial terms': 'Condiciones comerciales',
  'Upgrade path': 'Vía de ampliación',
  Depth: 'Profundidad',
  Date: 'Fecha',
  Finding: 'Hallazgo',
  Engine: 'Motor',
  Observed: 'Observado',
  Live: 'Activo',
  You: 'Ustedes',

  /* Tier display labels. The component maps the lowercase discriminants
     (entry / advanced / premium) onto these before translating — see the
     TIER_LABEL note in marketplace/[slug]/page.tsx. */
  Entry: 'Básico',
  'Advanced tier': 'Avanzado',
  Premium: 'Premium',
  /* Depth values. Already capitalised in the seed, so no collision. */
  Snapshot: 'Instantánea',
  Advanced: 'Ampliado',
  Strategic: 'Estratégico',
  Executive: 'Directivo',

  /* --- Category page --------------------------------------------------------------- */
  'All intelligence categories': 'Todas las categorías de inteligencia',
  'Other intelligence categories': 'Otras categorías de inteligencia',
  'Every module answers one question.': 'Cada módulo responde a una pregunta.',
  'Each returns the evidence behind its answer, what that answer means commercially, and what should change as a result.':
    'Cada uno devuelve las pruebas que sostienen su respuesta, lo que esa respuesta significa comercialmente y lo que debería cambiar en consecuencia.',
  'Buy this intelligence': 'Comprar esta inteligencia',
  'Take one question, or take the whole category.':
    'Llévese una pregunta, o llévese la categoría entera.',
  'Each purchase states what it examines, what it needs from you, how confident it can be and what it costs. No sales call is required to find any of that out.':
    'Cada compra indica qué examina, qué necesita de usted, con cuánta confianza puede pronunciarse y cuánto cuesta. No hace falta una llamada comercial para averiguar nada de eso.',
  'One engine produces this category.': 'Un motor produce esta categoría.',
  '{n} engines produce this category.': '{n} motores producen esta categoría.',
  'Engines are the machinery, not the offer. Nothing above required you to know one existed.':
    'Los motores son la maquinaria, no la oferta. Nada de lo anterior exigía que supiera que existía alguno.',
  '{n} modules': '{n} módulos',
  '<b>{n}</b> intelligence modules in this category.':
    '<b>{n}</b> módulos de inteligencia en esta categoría.',
  '<b>{n}</b> intelligence modules in this category · <b>{live}</b> running live in this environment.':
    '<b>{n}</b> módulos de inteligencia en esta categoría · <b>{live}</b> funcionando en este entorno.',
  Built: 'Construido',
  'In platform': 'En la plataforma',
  'In the platform': 'En la plataforma',

  /* --- Engine detail page ---------------------------------------------------------- */
  'Intelligence readout': 'Lectura de inteligencia',
  'What this engine concluded': 'A qué concluyó este motor',
  'Signal, evidence, consequence, action': 'Señal, prueba, consecuencia, acción',
  'Screens this engine provides': 'Pantallas que aporta este motor',
  'Next: {name}': 'Siguiente: {name}',

  /* --- Delivery, scope and inputs -------------------------------------------------- */
  'After scan completion — typically under 20 minutes':
    'Al terminar el análisis: normalmente en menos de 20 minutos',
  'After scan completion — typically under 30 minutes':
    'Al terminar el análisis: normalmente en menos de 30 minutos',
  'After scan completion — typically under 60 minutes':
    'Al terminar el análisis: normalmente en menos de 60 minutos',
  'Expert-reviewed — within 3 business days':
    'Revisado por un experto: en 3 días hábiles',
  'Optional: Search Console': 'Opcional: Search Console',
  'Optional: Search Console and Analytics':
    'Opcional: Search Console y Google Analytics',
  'Up to 4 competitors': 'Hasta 4 competidores',
  'Google + 6 engines': 'Google + 6 motores',
  '6 AI engines · entity and category association · 1 market':
    '6 motores de IA · asociación de entidad y categoría · 1 mercado',
  '6 AI engines · 20 commercial questions · 4 competitors · 1 market':
    '6 motores de IA · 20 preguntas comerciales · 4 competidores · 1 mercado',
  '6 AI engines · 24 decision questions · 4 competitors':
    '6 motores de IA · 24 preguntas de decisión · 4 competidores',
  '6 AI engines · 24 decision questions · 5 decision stages':
    '6 motores de IA · 24 preguntas de decisión · 5 etapas de decisión',
  '6 AI engines · 24 questions · 20 keywords · 4 competitors · full GEON assessment':
    '6 motores de IA · 24 preguntas · 20 términos · 4 competidores · evaluación GEON completa',
  '6 AI engines · 24 questions · 4 competitors · citation analysis':
    '6 motores de IA · 24 preguntas · 4 competidores · análisis de citas',
  '6 AI engines · 24 questions · 5 stages · 4 competitors':
    '6 motores de IA · 24 preguntas · 5 etapas · 4 competidores',
  'Public trust and reputation sources · 1 market':
    'Fuentes públicas de confianza y reputación · 1 mercado',
  'Continuous monitoring, additional markets, or the full platform with history and alerts.':
    'Monitorización continua, mercados adicionales o la plataforma completa con histórico y alertas.',
  'Continuous monitoring, quarterly executive regeneration, or enterprise implementation.':
    'Monitorización continua, regeneración directiva trimestral o implantación corporativa.',
  'Continuous prompt monitoring and visibility trends.':
    'Monitorización continua de consultas y tendencias de visibilidad.',
  'Continuous competitor monitoring and momentum tracking.':
    'Monitorización continua de competidores y seguimiento del impulso.',
  'Continuous monitoring with stage-level alerting.':
    'Monitorización continua con alertas a nivel de etapa.',
  'Competitive War Room with continuous monitoring.':
    'Sala de operaciones competitiva con monitorización continua.',
  'Recognition history and decay monitoring.':
    'Histórico de reconocimiento y monitorización del deterioro.',
  'Reputation momentum and trust decay monitoring.':
    'Impulso de reputación y monitorización del deterioro de la confianza.',
  'Interactive workspace': 'Espacio de trabajo interactivo',
  'Downloadable intelligence brief': 'Informe de inteligencia descargable',
  'Expert interpretation': 'Interpretación experta',
  'Evidence pack': 'Dosier de pruebas',
  'Action plan': 'Plan de acción',
  ' of 20': ' de 20',
  ' of 24': ' de 24',

  /* --- Product names. Descriptive rather than branded, so translated. -------------- */
  'AI Recognition Scan': 'Análisis de reconocimiento por IA',
  'AI Recognition Scan | GeoRepute': 'Análisis de reconocimiento por IA | GeoRepute',
  'AI Search Presence Scan': 'Análisis de presencia en la búsqueda con IA',
  'AI Search Presence Scan | GeoRepute':
    'Análisis de presencia en la búsqueda con IA | GeoRepute',
  'Google vs AI Gap Scan': 'Análisis de la brecha entre Google y la IA',
  'Google vs AI Gap Scan | GeoRepute':
    'Análisis de la brecha entre Google y la IA | GeoRepute',
  'Competitor Recommendation Scan': 'Análisis de recomendaciones de competidores',
  'Competitor Recommendation Scan | GeoRepute':
    'Análisis de recomendaciones de competidores | GeoRepute',
  'Trust Signals Scan': 'Análisis de señales de confianza',
  'Trust Signals Scan | GeoRepute': 'Análisis de señales de confianza | GeoRepute',
  'Decision Journey Diagnostic': 'Diagnóstico del recorrido de decisión',
  'Decision Journey Diagnostic | GeoRepute':
    'Diagnóstico del recorrido de decisión | GeoRepute',
  'Competitive Position Assessment': 'Evaluación de la posición competitiva',
  'Competitive Position Assessment | GeoRepute':
    'Evaluación de la posición competitiva | GeoRepute',
  'Executive Intelligence Brief': 'Informe de inteligencia para dirección',
  'Executive Intelligence Brief | GeoRepute':
    'Informe de inteligencia para dirección | GeoRepute',
  'Decision Reconstruction — a completed reconstruction':
    'Reconstrucción de la decisión: una reconstrucción completada',
  'Mission Control → the composite Decision Health position panel':
    'Centro de mando → el panel de posición compuesto de Salud de la decisión',
  'One commercial question, reconstructed from what each engine understood to what must change. Anonymised demonstration data.':
    'Una pregunta comercial, reconstruida desde lo que entendió cada motor hasta lo que debe cambiar. Datos de demostración anonimizados.',
  'One decision position rather than ten measures. Anonymised demonstration data.':
    'Una posición de decisión en lugar de diez medidas. Datos de demostración anonimizados.',

  /* --- Module business questions ---------------------------------------------------
     The category page leads with the question, not the module name. */
  'Does AI understand what the business actually does?':
    '¿Entiende la IA lo que hace realmente el negocio?',
  'Do AI engines understand who the business is and what it offers?':
    '¿Entienden los motores de IA quién es el negocio y qué ofrece?',
  'Which AI systems know the business exists, and which do not?':
    '¿Qué sistemas de IA saben que el negocio existe y cuáles no?',
  'Is AI confusing the business with someone else?':
    '¿Está la IA confundiendo el negocio con otro?',
  'Is AI describing a version of the business that no longer exists?':
    '¿Describe la IA una versión del negocio que ya no existe?',
  'Is the business becoming less recognised over time?':
    '¿Se está reconociendo menos al negocio con el paso del tiempo?',
  'Is the business visible when customers ask for recommendations?':
    '¿Es visible el negocio cuando los clientes piden recomendaciones?',
  'When a buyer describes a need, is the business in the set AI considers?':
    'Cuando un comprador describe una necesidad, ¿está el negocio en el conjunto que la IA considera?',
  'Across the questions buyers actually ask, how often does the business appear at all?':
    'En las preguntas que los compradores hacen de verdad, ¿con qué frecuencia aparece siquiera el negocio?',
  'Of all the recommendations made in this category, what share names the business?':
    'De todas las recomendaciones hechas en esta categoría, ¿qué proporción nombra al negocio?',
  'On those same questions, does AI put the business forward at all?':
    'En esas mismas preguntas, ¿propone la IA al negocio siquiera?',
  'Do the two discovery surfaces tell the same story about us?':
    '¿Cuentan las dos superficies de descubrimiento la misma historia sobre nosotros?',
  'Is the business aligned across traditional search and AI discovery?':
    '¿Está el negocio alineado entre la búsqueda tradicional y el descubrimiento por IA?',
  'Which commercial questions are invisible on both surfaces at once?':
    '¿Qué preguntas comerciales son invisibles en ambas superficies a la vez?',
  'Where does the business rank on the questions that carry commercial intent?':
    '¿Dónde se posiciona el negocio en las preguntas con intención comercial?',
  'Where does existing authority already rank but fail to reach AI?':
    '¿Dónde posiciona ya la autoridad existente sin llegar a la IA?',
  'What kind of gap is this, and does it deserve investment?':
    '¿Qué clase de brecha es esta y merece inversión?',
  'What is the business actually paying per commercial click?':
    '¿Cuánto paga realmente el negocio por clic comercial?',
  'Above what price does a click stop making money?':
    '¿Por encima de qué precio deja un clic de ser rentable?',
  'How much of current demand would disappear if paid search stopped tomorrow?':
    '¿Qué parte de la demanda actual desaparecería si la búsqueda de pago se detuviera mañana?',
  'Which paid positions could be replaced by owned authority?':
    '¿Qué posiciones de pago podrían sustituirse por autoridad propia?',
  'Is the cost of the same position rising, and how fast?':
    '¿Está subiendo el coste de la misma posición, y a qué velocidad?',
  'Who is being recommended instead of the business, and how often?':
    '¿A quién se recomienda en lugar del negocio, y con qué frecuencia?',
  'Who is recommended instead, where and why?':
    '¿A quién se recomienda en su lugar, dónde y por qué?',
  'Why do competitors capture the decision?':
    '¿Por qué se llevan los competidores la decisión?',
  'What specifically makes a competitor recommendable?':
    '¿Qué hace exactamente que un competidor sea recomendable?',
  'How much more evidence supports them than supports us?':
    '¿Cuánta más evidencia los respalda a ellos que a nosotros?',
  'Which specific questions does each competitor own?':
    '¿Qué preguntas concretas posee cada competidor?',
  'At which stage does each competitor take control?':
    '¿En qué etapa toma el control cada competidor?',
  'Where is the leading competitor actually weak?':
    '¿Dónde es realmente débil el competidor líder?',
  'How easily could a competitor take the narrative from us?':
    '¿Con qué facilidad podría un competidor arrebatarnos la narrativa?',
  'Do the sources that mention the business carry any weight?':
    '¿Tienen algún peso las fuentes que mencionan al negocio?',
  'How much of what the business claims can anyone else confirm?':
    '¿Qué parte de lo que afirma el negocio puede confirmar alguien más?',
  'When AI cites a source to justify an answer, is any of it yours?':
    'Cuando la IA cita una fuente para justificar una respuesta, ¿hay alguna que sea suya?',
  'Which sources are shaping what AI believes about the business?':
    '¿Qué fuentes están moldeando lo que la IA cree sobre el negocio?',
  'Which trust signals strengthen or weaken recommendation readiness?':
    '¿Qué señales de confianza refuerzan o debilitan la disposición a recomendar?',
  'Is the evidence supporting the business ageing?':
    '¿Están envejeciendo las pruebas que respaldan al negocio?',
  'Where does the business disappear during the buyer decision process?':
    '¿Dónde desaparece el negocio durante el proceso de decisión del comprador?',
  'At which point in the buying journey does presence collapse?':
    '¿En qué punto del recorrido de compra se desploma la presencia?',
  'Which specific buying questions complete without the business ever being named?':
    '¿Qué preguntas de compra concretas se completan sin que se nombre nunca al negocio?',
  'How many buying decisions are actually in play?':
    '¿Cuántas decisiones de compra están realmente en juego?',
  'What is one of those decisions worth to the business?':
    '¿Cuánto vale una de esas decisiones para el negocio?',
  'What is the gap worth, and how confident can we be?':
    '¿Cuánto vale la brecha y con cuánta confianza podemos afirmarlo?',
  'What has to be true for this estimate to hold?':
    '¿Qué tiene que ser cierto para que esta estimación se sostenga?',
  'Which of those blind spots are also high value?':
    '¿Cuáles de esos puntos ciegos son además de alto valor?',
  'Which of our genuine advantages does the market never mention?':
    '¿Cuáles de nuestras ventajas reales no menciona nunca el mercado?',
  'How much of the language used to describe this category belongs to the business?':
    '¿Qué parte del vocabulario con que se describe esta categoría pertenece al negocio?',
  'Whose framing do machines use when they explain the category?':
    '¿De quién es el planteamiento que usan las máquinas al explicar la categoría?',
  'Which criteria do machines cite first when explaining a choice?':
    '¿Qué criterios citan primero las máquinas al explicar una elección?',
  'Does the market think the business is expensive?':
    '¿Cree el mercado que el negocio es caro?',
  'Is this market forming, forming fast, or already settled?':
    '¿Este mercado se está formando, se forma deprisa o ya está asentado?',
  'Do buyers know enough yet to be worth persuading?':
    '¿Saben ya los compradores lo suficiente como para que valga la pena persuadirlos?',
  'Which markets are ready to be entered now?':
    '¿A qué mercados conviene entrar ahora?',
  'How quickly is the position moving, and in which direction?':
    '¿Con qué rapidez se mueve la posición y en qué dirección?',
  'Where in the world is the business strong, and where is it absent?':
    '¿Dónde en el mundo es fuerte el negocio y dónde está ausente?',
  'Does the business mean the same thing in every market?':
    '¿Significa el negocio lo mismo en todos los mercados?',
  'Does the business mean something different in each country?':
    '¿Significa el negocio algo distinto en cada país?',
  'Does the business tell the same story everywhere it appears?':
    '¿Cuenta el negocio la misma historia en todos los sitios donde aparece?',
  'Do partners describe the business the way it describes itself?':
    '¿Describen los socios al negocio como él se describe a sí mismo?',
  'How much of the market position rests on intermediaries?':
    '¿Qué parte de la posición en el mercado depende de intermediarios?',
  'How easily could the business be swapped out of the channel?':
    '¿Con qué facilidad podría sustituirse al negocio dentro del canal?',
  'Can the channel explain why the business costs more?':
    '¿Sabe el canal explicar por qué el negocio cuesta más?',
  'What is the complete management position on risk, opportunity, timing and action?':
    '¿Cuál es la posición completa de la dirección sobre riesgo, oportunidad, momento y acción?',
  'What should the business do, in what order?':
    '¿Qué debe hacer el negocio y en qué orden?',
  'Which intervention returns most, and what is currently blocked?':
    '¿Qué intervención rinde más y qué está bloqueado ahora mismo?',
  'What lands this month, this quarter, and this year?':
    '¿Qué se materializa este mes, este trimestre y este año?',
  'How long before an intervention shows up in the numbers?':
    '¿Cuánto tarda una intervención en aparecer en las cifras?',
  'Did the work move the signal it was supposed to move?':
    '¿Movió el trabajo la señal que se suponía que debía mover?',

  /* --- What each module detects, and why it matters commercially ------------------- */
  'An engine that cannot categorise a business cannot recommend it. Entity confusion sits upstream of every visibility metric — content investment cannot move an answer while the underlying record is wrong.':
    'Un motor que no puede clasificar un negocio no puede recomendarlo. La confusión de entidades está aguas arriba de cualquier métrica de visibilidad: invertir en contenido no moverá una respuesta mientras el registro de base sea erróneo.',
  'Name collisions, merged records and mistaken identities — a single unresolved conflation can remove a business from every answer in its category.':
    'Coincidencias de nombre, fichas fusionadas e identidades equivocadas: una sola confusión sin resolver puede apartar a un negocio de todas las respuestas de su categoría.',
  'Discontinued lines, closed locations, former ownership and superseded positioning still being repeated to buyers as current fact.':
    'Líneas descatalogadas, sedes cerradas, antigua propiedad y posicionamiento superado, todavía repetidos a los compradores como hechos vigentes.',
  'Recognition erodes when competitors keep publishing and you stop. Decay is measurable for months before it shows up as absence.':
    'El reconocimiento se erosiona cuando los competidores siguen publicando y usted deja de hacerlo. El deterioro es medible durante meses antes de manifestarse como ausencia.',
  'Entity understanding and recommendation presence are separate measures. An engine can resolve the business correctly and still never put it forward — recognition is necessary for a recommendation, not sufficient.':
    'La comprensión de la entidad y la presencia en recomendaciones son medidas distintas. Un motor puede identificar bien al negocio y aun así no proponerlo nunca: el reconocimiento es necesario para una recomendación, pero no suficiente.',
  'Coverage measured against real buying questions rather than keywords — the difference between being findable and being present.':
    'Cobertura medida frente a preguntas de compra reales y no frente a palabras clave: la diferencia entre poder ser encontrado y estar presente.',
  'A market-share figure for a market nobody is currently measuring — recommendations issued, not clicks received.':
    'Una cifra de cuota para un mercado que hoy no mide nadie: recomendaciones emitidas, no clics recibidos.',
  'A business ranking in Google can still be absent from every AI answer that decides the vendor. The reverse is equally common. Each surface is a separate commercial asset, and channel asymmetry is invisible to both SEO and analytics tooling.':
    'Un negocio que posiciona en Google puede seguir ausente de todas las respuestas de IA que deciden el proveedor. Lo contrario es igual de habitual. Cada superficie es un activo comercial distinto, y la asimetría entre canales resulta invisible tanto para el SEO como para la analítica.',
  'Businesses that dominate one surface and disappear on the other — a divergence that stays invisible while each channel is reported separately.':
    'Negocios que dominan una superficie y desaparecen en la otra: una divergencia que permanece invisible mientras cada canal se reporte por separado.',
  'The most expensive class of gap — absent from both surfaces on a question that carries real volume and real intent.':
    'La clase de brecha más cara: ausente de ambas superficies en una pregunta con volumen real e intención real.',
  'The cheapest wins available: questions where you have already done the work and only the machine-readable form of it is missing.':
    'Las victorias más baratas disponibles: preguntas en las que el trabajo ya está hecho y solo falta su forma legible por máquina.',
  'Cost per click weighted by the questions that decide purchases, rather than averaged across an account that includes cheap, irrelevant traffic.':
    'Coste por clic ponderado por las preguntas que deciden compras, en lugar de promediado sobre una cuenta que incluye tráfico barato e irrelevante.',
  'A computed ceiling from deal value, margin and conversion — the number most advertising accounts are managed without ever calculating.':
    'Un techo calculado a partir del valor de la operación, el margen y la conversión: la cifra que la mayoría de las cuentas publicitarias nunca calcula.',
  'A costed switch list — which spend can be retired, what has to be published first, and how long the replacement takes to hold.':
    'Una lista de sustitución con costes: qué gasto puede retirarse, qué hay que publicar primero y cuánto tarda el reemplazo en consolidarse.',
  'Competitive density expressed as a price trend, so the structural cost of staying still becomes visible before the budget review.':
    'La densidad competitiva expresada como tendencia de precios, para que el coste estructural de quedarse quieto se vea antes de la revisión presupuestaria.',
  'Whether paid is buying growth or renting positions that authority would otherwise hold for free.':
    'Si lo pagado está comprando crecimiento o alquilando posiciones que la autoridad mantendría gratis.',
  'Knowing a competitor wins is not actionable. Knowing which evidence engines cite when they recommend that competitor is. This separates brand preference from an evidence gap you can close.':
    'Saber que un competidor gana no es accionable. Saber qué pruebas citan los motores cuando lo recomiendan, sí. Eso separa la preferencia de marca de una brecha de pruebas que puede cerrarse.',
  'The individual assets a machine reaches for when it justifies choosing them — publications, comparisons, specifications, verified outcomes.':
    'Los activos concretos a los que recurre una máquina cuando justifica elegirlos: publicaciones, comparativas, especificaciones, resultados verificados.',
  'Structured comparison of the evidence each competitor supplies to engines, and what it would take to match it. Converts a share gap into a specific, costed evidence programme.':
    'Comparación estructurada de las pruebas que cada competidor suministra a los motores y de lo que haría falta para igualarlas. Convierte una brecha de cuota en un programa de pruebas concreto y presupuestado.',
  'The questions a dominant rival does not answer, does not cover, or answers badly — the cheapest available places to take share.':
    'Las preguntas que un rival dominante no responde, no cubre o responde mal: los lugares más baratos para ganar cuota.',
  'The share of visibility owned by partners rather than by the business, which is the share that leaves if the relationship ends.':
    'La parte de la visibilidad que poseen los socios y no el negocio, que es la parte que se va si la relación termina.',
  'Visibility creates attention; trust creates selection. A business can be found and still be filtered out when an engine has to stand behind naming it first.':
    'La visibilidad genera atención; la confianza genera selección. Un negocio puede ser encontrado y aun así quedar descartado cuando un motor tiene que responder por nombrarlo primero.',
  'A countable ratio of independent sources, which turns an abstract brand gap into a publishing programme with a known scope and cost.':
    'Una proporción contable de fuentes independientes, que convierte una brecha de marca abstracta en un programa editorial con alcance y coste conocidos.',
  'Being mentioned and being cited are different commercial positions. Only one of them survives into the next answer the system gives.':
    'Ser mencionado y ser citado son posiciones comerciales distintas. Solo una de ellas sobrevive hasta la siguiente respuesta que da el sistema.',
  'The small set of pages that disproportionately determine every answer given — frequently including a directory nobody at the company knows exists.':
    'El pequeño conjunto de páginas que determina de forma desproporcionada cada respuesta que se da, a menudo incluido un directorio cuya existencia nadie en la empresa conoce.',
  'Proof has a shelf life. Case studies, coverage and reviews lose weight with age, and the decline is measurable before selection stops.':
    'La prueba caduca. Los casos de éxito, la cobertura y las reseñas pierden peso con la edad, y el descenso es medible antes de que la selección se detenga.',
  'Most businesses lose the decision at one specific stage, not evenly across the journey. Locating that stage tells you where intervention returns most, and where further investment returns nothing.':
    'La mayoría de los negocios pierde la decisión en una etapa concreta, no de forma uniforme a lo largo del recorrido. Localizar esa etapa indica dónde rinde más la intervención y dónde no rinde nada seguir invirtiendo.',
  'Losses concentrate at one stage rather than spreading evenly. Locating that stage tells you where intervention returns, and where it returns nothing.':
    'Las pérdidas se concentran en una etapa en lugar de repartirse por igual. Localizar esa etapa indica dónde rinde la intervención y dónde no rinde nada.',
  'The exact questions where a decision was made and the business was not in the room. These are not lost leads; no lead was ever created.':
    'Las preguntas exactas en las que se tomó una decisión y el negocio no estaba en la sala. No son oportunidades perdidas: nunca llegó a crearse ninguna.',
  'Questions where the decision happens entirely without you, and where no channel measurement can show it, because nothing ever reached a channel.':
    'Preguntas en las que la decisión ocurre enteramente sin usted y que ninguna medición de canal puede mostrar, porque nada llegó nunca a un canal.',
  'Presence averaged across all questions hides the collapse that matters. What decides revenue is presence at the supplier-evaluation stage, and that figure is usually far lower than the headline.':
    'La presencia promediada entre todas las preguntas oculta el desplome que importa. Lo que decide los ingresos es la presencia en la etapa de evaluación de proveedores, y esa cifra suele ser mucho menor que la titular.',
  'The size of the decision market itself, counted in decisions rather than in searches, sessions or impressions.':
    'El tamaño del propio mercado de decisiones, contado en decisiones y no en búsquedas, sesiones o impresiones.',
  'Value per decision by stage and question type, so a high-volume gap is not automatically ranked above a low-volume, high-value one.':
    'Valor por decisión según la etapa y el tipo de pregunta, para que una brecha de gran volumen no se sitúe automáticamente por encima de otra de poco volumen y alto valor.',
  'A directional range with its confidence stated — never a single confident figure, and never described as confirmed lost revenue.':
    'Un rango orientativo con su nivel de confianza declarado: nunca una única cifra rotunda ni descrita como ingreso perdido confirmado.',
  'Every assumption behind an exposure figure, stated and editable — because a number whose assumptions are hidden cannot be argued with or trusted.':
    'Cada supuesto que hay detrás de una cifra de exposición, declarado y editable, porque con un número cuyos supuestos están ocultos no se puede discutir ni confiar en él.',
  'Real differentiators that never appear in any category description — strengths the market currently has no vocabulary to express.':
    'Diferenciadores reales que no aparecen en ninguna descripción de la categoría: fortalezas para las que el mercado aún no tiene vocabulario.',
  'Whether buyers are evaluating against criteria a competitor published, which quietly decides the outcome before anyone is compared.':
    'Si los compradores están evaluando con criterios que publicó un competidor, lo que decide en silencio el resultado antes de comparar a nadie.',
  'Where the business sits on a price spectrum in the eyes of machines describing it — an assumption that shapes shortlists before any quote is sent.':
    'Dónde sitúan al negocio en la escala de precios las máquinas que lo describen: un supuesto que configura las listas cortas antes de enviar presupuesto alguno.',
  'Demand maturity and competitive density per market, so expansion is sequenced by readiness rather than by proximity or preference.':
    'Madurez de la demanda y densidad competitiva por mercado, para que la expansión se ordene por preparación y no por cercanía o preferencia.',
  'Rate of change rather than a snapshot, so a strong position that is deteriorating is not mistaken for a safe one.':
    'Ritmo de cambio en lugar de una instantánea, para que una posición fuerte pero en deterioro no se confunda con una segura.',
  'Position measured market by market, which routinely contradicts the single global figure a company believes it has.':
    'Posición medida mercado a mercado, lo que contradice de forma rutinaria la única cifra global que una empresa cree tener.',
  'How category, positioning and reputation change across borders, including markets where the business is understood as a different kind of company entirely.':
    'Cómo cambian la categoría, el posicionamiento y la reputación al cruzar fronteras, incluidos mercados donde se entiende al negocio como una clase de empresa completamente distinta.',
  'Where positioning drifts by geography or language, so a business is a category leader in one market and an unknown in the next.':
    'Dónde deriva el posicionamiento según la geografía o el idioma, de modo que un negocio es líder de categoría en un mercado y un desconocido en el siguiente.',
  'Where a channel partner’s description of your product is what machines have learned — and where that description is wrong.':
    'Dónde la descripción que hace un socio de canal de su producto es lo que han aprendido las máquinas, y dónde esa descripción es errónea.',
  'Whether the brand is specified by name or treated as an interchangeable supplier — usually the more expensive answer of the two.':
    'Si se prescribe la marca por su nombre o se la trata como un proveedor intercambiable: normalmente la más cara de las dos respuestas.',
  'Whether the reasons for a premium survive the trip through distribution, or arrive at the buyer as an unexplained higher number.':
    'Si las razones de un precio superior sobreviven al paso por la distribución o llegan al comprador como una cifra más alta sin explicación.',
  'A board-ready position rather than a dashboard. States what is happening, what it means commercially, what the directional exposure is, how long the window stays open, and what must change — with owners and deadlines.':
    'Una posición lista para el consejo, no un panel de control. Expone qué está ocurriendo, qué significa comercialmente, cuál es la exposición orientativa, cuánto sigue abierta la ventana y qué debe cambiar, con responsables y plazos.',
  'Ranked by exposure, confidence, urgency, effort and competitor pressure.':
    'Ordenado por exposición, confianza, urgencia, esfuerzo y presión competitiva.',
  'The lag between doing the work and seeing the movement, which is what stops a working programme from being cancelled a month too early.':
    'El desfase entre hacer el trabajo y ver el movimiento, que es lo que evita que un programa que funciona se cancele un mes antes de tiempo.',
  'Measured change against the predicted change, including the interventions that did not work — which is the only way the model earns trust.':
    'El cambio medido frente al cambio previsto, incluidas las intervenciones que no funcionaron: la única forma en que el modelo se gana la confianza.',
  'Corroborated claims reduce the risk an engine takes in naming a supplier first.':
    'Las afirmaciones corroboradas reducen el riesgo que asume un motor al nombrar primero a un proveedor.',

  /* --- Readout labels and competitor findings -------------------------------------- */
  'Category description': 'Descripción de la categoría',
  'Category resolved': 'Categoría resuelta',
  'Confusion and conflation': 'Confusión y mezcla',
  'Recommendation presence': 'Presencia en recomendaciones',
  'Recommendation share and momentum': 'Cuota de recomendaciones e impulso',
  'Recommendation share by stage': 'Cuota de recomendaciones por etapa',
  'Recommendation share across 24 decision questions':
    'Cuota de recomendaciones en 24 preguntas de decisión',
  'Mentions and citations': 'Menciones y citas',
  'Social proof quality': 'Calidad de la prueba social',
  'Source advantage analysis': 'Análisis de la ventaja en fuentes',
  'Authority driver comparison': 'Comparación de palancas de autoridad',
  'Competitor vulnerability': 'Vulnerabilidad del competidor',
  'Competitor control per stage': 'Control de los competidores por etapa',
  'Competitive threat': 'Amenaza competitiva',
  'Default vendor threat': 'Amenaza del proveedor por defecto',
  'Why the competitor wins': 'Por qué gana el competidor',
  'Why they win': 'Por qué ganan',
  'Winning questions': 'Preguntas ganadas',
  'Missed decision questions': 'Preguntas de decisión perdidas',
  'Gap classification per commercial question':
    'Clasificación de la brecha por pregunta comercial',
  'Question-to-stage mapping': 'Correspondencia entre pregunta y etapa',
  'Stage-by-stage coverage': 'Cobertura etapa por etapa',
  'The stage where presence collapses': 'La etapa donde se desploma la presencia',
  'Strongest stage': 'Etapa más fuerte',
  'Decision-journey position': 'Posición en el recorrido de decisión',
  'Revenue concentration by stage': 'Concentración de ingresos por etapa',
  'Revenue split by decision stage':
    'Reparto de ingresos por etapa de decisión',
  'Directional revenue exposure': 'Exposición orientativa de ingresos',
  'Paid dependency exposure': 'Exposición a la dependencia de lo pagado',
  'Strategic blind spots': 'Puntos ciegos estratégicos',
  'Strategic timing window': 'Ventana estratégica',
  'Market and language': 'Mercado e idioma',
  'What it believes': 'Qué cree',
  'Not resolved': 'Sin resolver',
  Resolved: 'Resuelto',
  'Never recommends': 'Nunca recomienda',
  Unattributed: 'Sin atribuir',
  'Independent authority evidence — the constraint holding every downstream signal.':
    'Pruebas de autoridad independientes: la restricción que retiene todas las señales posteriores.',
  'Classified as a hardware retailer, not an MRO distributor.':
    'Clasificado como ferretería minorista, no como distribuidor MRO.',
  'Conflated with a same-named logistics firm.':
    'Confundido con una empresa de logística homónima.',
  'No stable entity record. Category answered without naming any Midwest distributor.':
    'Sin registro estable de entidad. La categoría se respondió sin nombrar a ningún distribuidor del Medio Oeste.',
  'No AI engine names Northwind in nineteen of the twenty-four tracked decision questions.':
    'Ningún motor de IA nombra a Northwind en diecinueve de las veinticuatro preguntas de decisión en seguimiento.',
  'Named in seventeen of the nineteen questions where Northwind is absent.':
    'Nombrado en diecisiete de las diecinueve preguntas en las que Northwind está ausente.',
  'Kestrel named first in four of seven questions.':
    'Kestrel nombrada primero en cuatro de siete preguntas.',
  'Receives the recommendation in 31% of decisions and controls the supplier-evaluation stage.':
    'Recibe la recomendación en el 31 % de las decisiones y controla la etapa de evaluación de proveedores.',
  'Leads on the two most heavily weighted vectors.':
    'Lidera en los dos vectores de mayor peso.',
  'Authority and Visibility are where its investment has concentrated.':
    'La autoridad y la visibilidad son donde se ha concentrado su inversión.',
  'Independent validation lets engines recommend it without hedging.':
    'La validación independiente permite a los motores recomendarla sin reservas.',
  'Advantage compounds in the absence of a response.':
    'La ventaja se acumula a falta de respuesta.',
  'Holds position while no counter-intervention is running.':
    'Mantiene la posición mientras no haya una contraintervención en marcha.',
  'Meridian publishes specification guidance that engines treat as category-defining language.':
    'Meridian publica guías de especificaciones que los motores tratan como el vocabulario que define la categoría.',
  'Atlas is named on procurement checklists that engines cite at the point of purchase.':
    'Atlas figura en listas de verificación de compras que los motores citan en el momento de la compra.',
  'Two of six interventions are low effort with measurable movement inside 60 days.':
    'Dos de las seis intervenciones son de bajo esfuerzo con movimiento medible en menos de 60 días.',
  'Kestrel Industrial 31%. Meridian Supply Co 18%. Halvorsen Industrial 11%. Atlas Trade Group 7%. Northwind Supply 4.2%. Unattributed 28.8%':
    'Kestrel Industrial 31 %. Meridian Supply Co 18 %. Halvorsen Industrial 11 %. Atlas Trade Group 7 %. Northwind Supply 4,2 %. Sin atribuir 28,8 %',
  'Not in top 100 organic. No AI recommendation. 320 searches per month.':
    'Fuera de los 100 primeros resultados orgánicos. Sin recomendación de IA. 320 búsquedas al mes.',
  'Position 1 organic, AI present. Volume 40 per month.':
    'Posición 1 en orgánico, presencia en IA. Volumen de 40 al mes.',
  'Position 3 and recommended — the pattern that works.':
    'Posición 3 y recomendado: el patrón que funciona.',

  /* --- Tracked commercial keywords. Translated on the same reasoning as the
         home page's search queries — see the note beside those. ------------------- */
  'anchor bolts supplier': 'proveedor de pernos de anclaje',
  'fastener catalog request': 'solicitar catálogo de fijaciones',
  'fastener sourcing best practices':
    'buenas prácticas de abastecimiento de fijaciones',
  'industrial distributor fill rate':
    'tasa de servicio de distribuidor industrial',
  'industrial supply account setup': 'abrir cuenta de suministro industrial',
  'industrial supply near me': 'suministro industrial cerca de mí',
  'maintenance repair operations supplier':
    'proveedor de mantenimiento reparación y operaciones',
  'mro consolidation vendor': 'proveedor para consolidación de MRO',
  'mro supply agreement': 'contrato de suministro MRO',
  'plant maintenance supplies': 'suministros de mantenimiento de planta',
  'same day fastener shipping': 'envío de fijaciones el mismo día',
  'stainless steel fasteners supplier':
    'proveedor de fijaciones de acero inoxidable',
}
