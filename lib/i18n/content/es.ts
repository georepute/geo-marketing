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
  'Decision Health Index 41 → 56/100':
    'Índice de salud de la decisión 41 → 56/100',
  Composite: 'Compuesto',
  'Composite model': 'Modelo compuesto',
  'Index weighting': 'Ponderación del índice',
  'GEON vectors': 'Vectores GEON',
  'GEON Authority': 'Autoridad GEON',
  'GEON Trust': 'Confianza GEON',
  'GEON Authority 28 → 45/100': 'Autoridad GEON 28 → 45/100',
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
  'Average recognition score 38 → 55/100':
    'Puntuación media de reconocimiento 38 → 55/100',
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
  'Publish a canonical entity description and propagate identical…':
    'Publique una descripción canónica de la entidad y propague un lenguaje idéntico…',
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
  'Recommendation share 4.2 → 11%': 'Cuota de recomendaciones 4,2 → 11 %',
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
  'Supplier-evaluation coverage 7 → 19%':
    'Cobertura en la evaluación de proveedores 7 → 19 %',
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
    'Inteligencia de decisiones de la competencia',
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
  'Narrative Intelligence': 'Inteligencia del relato',
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
}
