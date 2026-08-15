import type { ContentOverlay } from './index'

/* ============================================================================
   Russian content overlay — the seeded demonstration prose.

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
    'Дистрибуция промышленных расходных материалов и крепежа',
  'United States — Midwest': 'США — Средний Запад',

  /* ==========================================================================
     HOME PAGE — the prose written inline on the section components.

     Tokens in braces are substituted after lookup, so a translation may put
     {pct} wherever Russian needs it. <b>…</b> marks an emphasised run and is
     rendered as a styled span, never as markup — it can move too.
     ======================================================================= */

  /* --- The premise ------------------------------------------------------ */
  'The shift': 'Сдвиг',
  '{n} of {total}': '{n} из {total}',
  'By the time a visit, a click, a lead or a CRM record exists, the buyer has already decided which suppliers are worth contacting. That decision now happens inside AI systems, and it leaves no trace in any tool you currently own.':
    'К тому моменту, когда появляется визит, клик, лид или запись в CRM, покупатель уже решил, с какими поставщиками стоит связаться. Это решение теперь принимается внутри систем ИИ и не оставляет следа ни в одном из инструментов, которыми вы располагаете.',
  'commercial decisions complete without your business being named at all.':
    'коммерческих решений завершаются без единого упоминания вашей компании.',
  'No lead was lost, because no lead was ever created. Conventional measurement recorded nothing.':
    'Ни один лид не был потерян, потому что ни один лид не был создан. Традиционная аналитика не зафиксировала ничего.',
  'presence at the stage where the supplier is actually chosen.':
    'присутствия на этапе, где поставщик выбирается на деле.',
  'That stage carries {volume} of the query volume and decides {revenue} of the revenue. Volume-ranked tooling calls it unimportant.':
    'На этот этап приходится {volume} объёма запросов, и он решает судьбу {revenue} выручки. Инструменты, ранжирующие по объёму, считают его несущественным.',
  'more independent evidence supports the competitor engines recommend instead.':
    'больше независимых свидетельств поддерживают конкурента, которого движки рекомендуют вместо вас.',
  'Not a brand-preference gap. An evidence gap, and evidence can be commissioned.':
    'Это не разрыв в предпочтении бренда, а разрыв в доказательствах — а доказательства можно заказать.',

  /* --- Q1 · Does AI know your business? --------------------------------- */
  'Entity understanding': 'Понимание сущности',
  'AI systems understand what your business is in {score} of 100 commercial evaluations. One engine holds no stable record of you at all.':
    'Системы ИИ понимают, чем является ваша компания, в {score} из 100 коммерческих оценок. Один движок вообще не хранит о вас устойчивой записи.',
  'A system that cannot categorise a business cannot recommend it. This sits upstream of every other measure on this page.':
    'Система, которая не может отнести компанию к категории, не может её рекомендовать. Это предшествует любому другому показателю на этой странице.',
  'Content and advertising investment cannot move an answer while the underlying record is wrong. Spend on either is spend against a locked door.':
    'Инвестиции в контент и рекламу не сдвинут ответ, пока исходная запись неверна. Расходы на то и другое — расходы в запертую дверь.',
  'Highest-risk engine': 'Движок наибольшего риска',
  '{engine} understands your business at {score} of 100 and names it in none of the tracked decisions.':
    '{engine} понимает вашу компанию на {score} из 100 и не называет её ни в одном из отслеживаемых решений.',
  'Recognition is not uniform across AI systems, and buyers do not all use the same one. A single weak engine removes your business from every decision made through it.':
    'Распознавание неодинаково в разных системах ИИ, а покупатели пользуются разными. Один слабый движок исключает вашу компанию из каждого решения, принятого через него.',
  'Every buyer who asks this engine receives a supplier shortlist your business is structurally absent from — and no measurement you own records that it happened.':
    'Каждый покупатель, обратившийся к этому движку, получает короткий список поставщиков, в котором вашей компании структурно нет, — и ни одна ваша метрика этого не зафиксирует.',
  'Decision presence': 'Присутствие в решении',
  'Present in only {present} of supplier evaluations. Missing from {missing} of AI buying decisions.':
    'Присутствует лишь в {present} оценок поставщиков. Отсутствует в {missing} решений о покупке, принимаемых через ИИ.',
  'Supplier evaluation is the moment a buyer stops choosing a solution and starts choosing a vendor. It is the stage that assigns the order.':
    'Оценка поставщиков — момент, когда покупатель перестаёт выбирать решение и начинает выбирать поставщика. Это этап, на котором распределяется заказ.',
  'Absence here is exclusion from the shortlist for the {revenue} of revenue that arrives through supplier evaluation.':
    'Отсутствие здесь означает исключение из короткого списка для {revenue} выручки, которая приходит через оценку поставщиков.',
  'Recognition is cheap to fix and blocks everything else. It is the only intervention on this page that can be completed in under thirty days.':
    'Распознавание дёшево исправить, и оно блокирует всё остальное. Это единственное вмешательство на этой странице, которое можно завершить менее чем за тридцать дней.',

  /* --- Q2 · Where are you losing decisions? ------------------------------ */
  'Losses are not spread evenly across the buying journey. They concentrate at one stage — and it is the stage conventional measurement is least able to see.':
    'Потери распределены по пути покупки неравномерно. Они сосредоточены на одном этапе — и именно его традиционная аналитика видит хуже всего.',
  'Where presence collapses': 'Где присутствие обрушивается',
  'Coverage falls to {pct} at supplier evaluation — the last stage before the order is assigned.':
    'Охват падает до {pct} на этапе оценки поставщиков — последнем этапе перед распределением заказа.',
  'Earlier stages shape opinion. This stage selects the vendor. A business can lead the first three stages and still never be contacted.':
    'Ранние этапы формируют мнение. Этот этап выбирает поставщика. Компания может лидировать на первых трёх этапах и так и не получить обращения.',
  'The competitor named here receives the enquiry. Your business is not compared and rejected — it is never compared at all.':
    'Названный здесь конкурент получает запрос. Вашу компанию не сравнили и отклонили — её не сравнивали вовсе.',
  'Blind-spot questions': 'Вопросы в слепой зоне',
  '{n} commercial questions return no AI recommendation and no Google position in the top ten. The decision happens on neither surface.':
    '{n} коммерческих вопросов не дают ни рекомендации ИИ, ни позиции в первой десятке Google. Решение не происходит ни на одной из этих поверхностей.',
  'Google rank and AI recommendation are separate commercial assets. Strength in one does not carry into the other.':
    'Позиция в Google и рекомендация ИИ — отдельные коммерческие активы. Сила в одном не переносится на другое.',
  'These questions are currently reachable only by buying the click — which is why paid cost rises while organic position stays flat.':
    'Сегодня до этих вопросов можно добраться только покупкой клика — поэтому платные расходы растут, а органическая позиция стоит на месте.',
  'Supplier evaluation carries {volume} of the query volume and decides {revenue} of the revenue. Ranking work by volume puts it last.':
    'На оценку поставщиков приходится {volume} объёма запросов, и она решает судьбу {revenue} выручки. Ранжирование работ по объёму ставит её последней.',

  /* --- Q3 · Why is the competitor recommended? --------------------------- */
  '{competitor} can be verified through {theirs} independent sources. Your business can be verified through {ours}.':
    '{competitor} можно подтвердить через {theirs} независимых источников. Вашу компанию — через {ours}.',
  'Share of recommendations is the symptom. The cause is what a system can cite when it has to justify naming one supplier ahead of another.':
    'Доля рекомендаций — это симптом. Причина в том, на что система может сослаться, когда ей нужно обосновать, почему один поставщик назван раньше другого.',
  'Receives the decision': 'Получает решение',
  'Your business': 'Ваша компания',
  'Authority advantage': 'Преимущество в авторитетности',
  'Why the decision goes to them': 'Почему решение достаётся им',
  'The category median is <b>{n}</b> independent sources. This is not a brand-preference gap that marketing spend closes. It is an evidence gap, and evidence is something a business can commission.':
    'Медиана по категории — <b>{n}</b> независимых источников. Это не разрыв в предпочтении бренда, который закрывается маркетинговым бюджетом. Это разрыв в доказательствах, а доказательства компания может заказать.',
  'authority source': 'источник авторитетности',
  'authority sources': 'источников авторитетности',
  'Named in <b>{pct}</b> of AI buying decisions.':
    'Упоминается в <b>{pct}</b> решений о покупке, принимаемых через ИИ.',
  'Closing {multiple}× is a publishing and validation programme with a known cost, not a brand campaign with an unknown one.':
    'Закрыть разрыв в {multiple}× — это программа публикаций и подтверждений с известной стоимостью, а не бренд-кампания с неизвестной.',

  /* --- Q4 · What evidence is missing? ------------------------------------ */
  'How the gap becomes a lost decision':
    'Как разрыв превращается в проигранное решение',
  'Every node below opens the evidence behind it, with its confidence and its limits.':
    'Каждый узел ниже раскрывает стоящие за ним доказательства с их уверенностью и границами.',
  'Systems do not recommend what they cannot corroborate. Self-description is treated as a claim; third-party reference is treated as evidence.':
    'Системы не рекомендуют то, что не могут подтвердить. Самоописание считается утверждением; ссылка третьей стороны считается доказательством.',

  /* --- Q5 · How much time is left? --------------------------------------- */
  'The window is an observation about category formation, not a sales deadline. It is re-assessed every quarter and it can move in either direction.':
    'Окно — это наблюдение о формировании категории, а не дедлайн продаж. Оно пересматривается ежеквартально и может сдвинуться в любую сторону.',
  'Authority established before the answer set stabilises':
    'Авторитетность, выстроенная до того, как набор ответов стабилизируется',

  /* --- Q6 · What should happen next? ------------------------------------- */
  'Six interventions, sequenced. Each names its owner, its deadline, the signal it must move and what has to land before it can move it.':
    'Шесть вмешательств в последовательности. Каждое называет ответственного, срок, сигнал, который оно должно сдвинуть, и то, что должно быть сделано прежде.',
  'Diagnosis without sequence produces activity rather than movement. Impact is verified by signal movement after execution — never by task completion.':
    'Диагностика без последовательности порождает活 деятельность, а не движение. Эффект подтверждается смещением сигнала после исполнения — никогда завершением задачи.',
  'Ordered by commercial exposure, urgency, effort and competitive pressure.':
    'Упорядочено по коммерческому риску, срочности, трудозатратам и конкурентному давлению.',
  'Open the full intervention plan': 'Открыть полный план вмешательств',
  Priority: 'Приоритет',
  'Expected impact': 'Ожидаемый эффект',
  'Verified by: {metric}': 'Подтверждается: {metric}',
  Owner: 'Ответственный',
  Deadline: 'Срок',
  Dependencies: 'Зависимости',
  and: 'и',
  'Cannot move its signal until <b>{blockers}</b> lands.':
    'Не сможет сдвинуть свой сигнал, пока не завершится <b>{blockers}</b>.',
  'None. Can start immediately.': 'Нет. Можно начинать немедленно.',

  /* --- Q7 · The executive position --------------------------------------- */
  'Decision Health': 'Здоровье решений',
  'The binding constraint': 'Связывающее ограничение',
  'Held down primarily by {vector}.': 'Сдерживается прежде всего фактором «{vector}».',
  '{vector} reads <b>{score} of 100</b> and carries the heaviest weight in the index at <b>{weight}%</b>. Lowest score, largest lever — every other measure is capped by it.':
    '{vector} показывает <b>{score} из 100</b> и несёт наибольший вес в индексе — <b>{weight}%</b>. Самая низкая оценка и самый крупный рычаг: все прочие показатели ограничены им.',
  '{vector} reads <b>{score}</b>. The offer matches demand. The constraint is entirely on the evidence side, which is the side a business can change.':
    '{vector} показывает <b>{score}</b>. Предложение соответствует спросу. Ограничение целиком на стороне доказательств — на той стороне, которую компания может изменить.',
  'What Decision Health is made of': 'Из чего складывается здоровье решений',
  'Weighted, published, recomputed monthly':
    'Взвешенно, опубликовано, пересчитывается ежемесячно',
  'Binding constraint': 'Связывающее ограничение',
  'weight {pct}%': 'вес {pct}%',
  'Authority carries the heaviest weight in the index and the largest deficit. Every other vector is capped by it, so it is the only starting point that moves more than one measure.':
    'Авторитетность несёт наибольший вес в индексе и наибольший дефицит. Все прочие векторы ограничены ею, поэтому это единственная отправная точка, сдвигающая больше одного показателя.',
  'Open the full executive position': 'Открыть полную управленческую позицию',

  /* --- Run it on your own business --------------------------------------- */
  'Enter a domain and one signal is released immediately. The rest of the position requires an account or a purchase — and the locked panels state exactly what sits behind them.':
    'Введите домен — и один сигнал открывается сразу. Остальная часть позиции требует учётной записи или покупки, а закрытые панели прямо указывают, что за ними находится.',
  'Your domain': 'Ваш домен',
  'Run instant preview': 'Запустить мгновенный предпросмотр',
  'Re-run preview': 'Повторить предпросмотр',
  'Seeded demonstration. This environment always reconstructs Northwind Supply, an industrial distributor, so every figure stays verifiable.':
    'Демонстрация на тестовых данных. Эта среда всегда реконструирует Northwind Supply, промышленного дистрибьютора, поэтому каждая цифра остаётся проверяемой.',
  'AI recognition': 'Распознавание ИИ',
  'Best Google position': 'Лучшая позиция в Google',
  'Not ranking': 'Не ранжируется',
  'Narrative ownership': 'Владение нарративом',
  'Strongest competitor': 'Сильнейший конкурент',
  '{score}/100 recognition': 'распознавание {score}/100',
  '{pct} of recommendations': '{pct} рекомендаций',
  'Unlocked signal': 'Открытый сигнал',
  'Behind the gate': 'За доступом',
  '<b>{n}</b> further readouts, each with evidence, exposure and a prescribed action.':
    'Ещё <b>{n}</b> отчётов, каждый с доказательствами, оценкой риска и предписанным действием.',
  'Competitor capture, authority evidence, paid dependency, missed decisions, narrative control, trust readiness and strategic timing.':
    'Захват конкурентами, доказательства авторитетности, зависимость от платного трафика, упущенные решения, контроль нарратива, готовность к доверию и стратегическое время.',
  'Unlock full intelligence': 'Открыть полный интеллект',
  'Buy a single answer': 'Купить один ответ',
  'See a single answer': 'Посмотреть один ответ',

  /* --- The ecosystem and the machinery ----------------------------------- */
  'The intelligence ecosystem': 'Экосистема интеллекта',
  'Seven questions were asked above. {n} models stand behind them.':
    'Выше было задано семь вопросов. За ними стоят {n} моделей.',
  'Every category holds the models that answer one kind of commercial question — including a great many that businesses have never been able to measure, because nothing existed to measure them with.':
    'Каждая категория объединяет модели, отвечающие на один тип коммерческих вопросов, — включая множество тех, что компании никогда не могли измерить, потому что измерять их было нечем.',
  'intelligence modules in total, each answering one business question with evidence, analysis and a recommendation.':
    'аналитических модулей всего, каждый отвечает на один бизнес-вопрос доказательствами, анализом и рекомендацией.',
  'Explore the intelligence ecosystem': 'Изучить экосистему интеллекта',
  Underneath: 'Под поверхностью',
  'Every answer on this page is produced by an intelligence engine.':
    'Каждый ответ на этой странице производится аналитическим движком.',
  'Twelve engines run beneath the questions. They are named here for completeness — nobody buys an engine, and nothing above required you to know one existed.':
    'Под этими вопросами работают двенадцать движков. Они названы здесь для полноты: движки никто не покупает, и ничто выше не требовало знать об их существовании.',
  'Four engines are built in this environment. All twelve appear on the':
    'В этой среде реализованы четыре движка. Все двенадцать представлены в',
  'engines overview': 'обзоре движков',

  /* --- The close ---------------------------------------------------------- */
  'Every day the window stays open, the same position costs less to take. Every day after it closes, it costs more.':
    'Каждый день, пока окно открыто, та же позиция обходится дешевле. Каждый день после его закрытия — дороже.',
  'See how AI decides about you': 'Узнайте, как ИИ решает на ваш счёт',
  'Every figure on this page is computed from {n} tracked commercial decisions across six AI engines.':
    'Каждая цифра на этой странице рассчитана по {n} отслеживаемым коммерческим решениям в шести движках ИИ.',
  'See the methodology': 'Посмотреть методологию',

  /* --- Hero · trust strip and the reconstruction ------------------------- */
  'Six AI engines observed': 'Наблюдаются шесть движков ИИ',
  '24 commercial decisions tracked': 'Отслеживаются 24 коммерческих решения',
  'Evidence on every claim': 'Доказательство к каждому утверждению',
  'Confidence and limits stated': 'Уверенность и границы указаны',
  'A buyer asks AI': 'Покупатель спрашивает ИИ',
  'AI looks for proof it can cite':
    'ИИ ищет доказательство, на которое может сослаться',
  'Independent sources an engine can cite when it recommends a supplier. Your own website does not count — engines treat self-description as a claim, not as evidence.':
    'Независимые источники, на которые движок может сослаться, рекомендуя поставщика. Ваш собственный сайт не считается: движки воспринимают самоописание как утверждение, а не как доказательство.',
  'So AI recommends': 'И поэтому ИИ рекомендует',
  'Your business was named by <b>{named} of {total}</b> engines. Not because the offer is weaker — because <b>{theirs} sources outrank {ours}</b> when a system has to stand behind an answer.':
    'Вашу компанию назвали <b>{named} из {total}</b> движков. Не потому, что предложение слабее, а потому что <b>{theirs} источников перевешивают {ours}</b>, когда системе нужно отвечать за свой ответ.',
  'What changes the answer': 'Что меняет ответ',
  '{n} sources': '{n} источников',
  '{name}: {n} independent sources': '{name}: {n} независимых источников',
  'A reconstruction of one AI buying decision: the question a buyer asked, the {theirs} independent sources supporting {winner} against {ours} supporting your business — a {advantage}× evidence advantage — the resulting recommendation, and the intervention that changes it.':
    'Реконструкция одного решения о покупке через ИИ: вопрос покупателя, {theirs} независимых источников в поддержку {winner} против {ours} в поддержку вашей компании — преимущество в доказательствах в {advantage}× — итоговая рекомендация и вмешательство, которое её меняет.',

  /* --- The strategic window ---------------------------------------------- */
  '{position} market': 'Рынок: {position}',
  '{n} months open': 'открыто {n} месяцев',
  '<b>{n}</b> days of advantage remain': 'Осталось <b>{n}</b> дней преимущества',
  'After <b>{date}</b>, the same position still exists — it just has to be taken from an incumbent recommendation rather than claimed from open ground.':
    'После <b>{date}</b> та же позиция никуда не исчезает — просто её придётся отвоёвывать у закрепившейся рекомендации, а не занимать на свободном месте.',
  Today: 'Сегодня',
  'Window opened': 'Окно открылось',
  'Advantage holds until': 'Преимущество держится до',
  'Window closes': 'Окно закрывается',
  'Category language began forming.': 'Язык категории начал формироваться.',
  'Authority built before this becomes the default answer.':
    'Авторитетность, выстроенная до этого момента, становится ответом по умолчанию.',
  'Displacement cost rises materially.': 'Стоимость вытеснения существенно растёт.',
  'Why this estimate exists': 'Почему эта оценка существует',
  'Market readiness reads <b>{n} of 100</b>. Buyers are educated. The answers they receive are not yet fixed.':
    'Готовность рынка — <b>{n} из 100</b>. Покупатели информированы. Ответы, которые они получают, ещё не закрепились.',

  /* --- The decision journey ----------------------------------------------- */
  'Stage {n}': 'Этап {n}',
  '{volume}/mo · {share}': '{volume}/мес · {share}',
  '{pct} coverage': 'охват {pct}',
  'Analytics and CRM': 'Аналитика и CRM',
  'Requires a visit, form or record to exist':
    'Требует, чтобы существовал визит, форма или запись',
  'SEO platforms': 'SEO-платформы',
  'Requires a tracked query with search volume':
    'Требует отслеживаемого запроса с объёмом поиска',
  'Observes the decision itself, at every stage':
    'Наблюдает само решение на каждом этапе',
  Visible: 'Видно',
  Blind: 'Слепая зона',
  'Executive conclusion': 'Вывод для руководства',
  'Conventional tooling begins observing at stage four — after the buyer has already decided what to buy and is choosing whom to buy it from.':
    'Традиционные инструменты начинают наблюдение на четвёртом этапе — когда покупатель уже решил, что покупать, и выбирает, у кого.',
  'The first three stages generate no visit, click, lead or CRM record. They are not measured badly; they are not measured at all.':
    'Первые три этапа не порождают ни визита, ни клика, ни лида, ни записи в CRM. Их не измеряют плохо — их не измеряют вовсе.',

  /* --- The Google vs AI gap matrix ---------------------------------------- */
  'Compound blind spots': 'Составные слепые зоны',
  'Absent from both surfaces on high-value questions. The most expensive class of gap.':
    'Отсутствие на обеих поверхностях по высокоценным вопросам. Самый дорогой класс разрыва.',
  'Recoverable search': 'Восстановимый поиск',
  'Ranking in Google but absent from AI answers. Existing authority is not reaching the AI surface.':
    'Ранжируется в Google, но отсутствует в ответах ИИ. Имеющаяся авторитетность не доходит до поверхности ИИ.',
  Aligned: 'Согласовано',
  'Visible in Google and recommended by AI. No action required.':
    'Видно в Google и рекомендуется ИИ. Действий не требуется.',
  'of {total}': 'из {total}',
  'Commercial question': 'Коммерческий вопрос',
  Volume: 'Объём',
  'Google visibility': 'Видимость в Google',
  'AI recommendation': 'Рекомендация ИИ',
  Classification: 'Классификация',
  'Not in top 100': 'Нет в первой сотне',
  'Position {n}': 'Позиция {n}',
  Recommended: 'Рекомендовано',
  Absent: 'Отсутствует',
  'Showing {shown} of {total} tracked commercial questions.':
    'Показано {shown} из {total} отслеживаемых коммерческих вопросов.',

  /* --- The decision graph -------------------------------------------------- */
  Input: 'Вход',
  Interpretation: 'Интерпретация',
  Market: 'Рынок',
  Channel: 'Канал',
  Outcome: 'Результат',
  Action: 'Действие',
  'Decision intelligence graph. Thirteen connected signals ending in a prescription.':
    'Граф интеллекта решений. Тринадцать связанных сигналов, завершающихся предписанием.',
  '{label}: {value}. {kind}. {evidence} Activate to open the readout.':
    '{label}: {value}. {kind}. {evidence} Активируйте, чтобы открыть отчёт.',
  'Hover or focus a node to isolate its relationships. Select any node to open the evidence behind it.':
    'Наведите курсор на узел или сфокусируйтесь на нём, чтобы выделить его связи. Выберите любой узел, чтобы открыть стоящие за ним доказательства.',
  'Read the graph as a table': 'Прочитать граф как таблицу',
  Signal: 'Сигнал',
  Value: 'Значение',
  'Leads to': 'Ведёт к',
  Evidence: 'Доказательства',

  /* --- Product screen slots ------------------------------------------------- */
  'Awaiting real screen': 'Ожидается реальный экран',
  'Anonymised or demonstration data only. No customer names, domains, personal data or confidential figures.':
    'Только анонимизированные или демонстрационные данные. Без имён клиентов, доменов, персональных данных и конфиденциальных цифр.',
  'Executive Mission Control — full window, all measures visible':
    'Центр управления для руководства — полное окно, все показатели видны',
  'Executive Mission Control. Every measure opens the evidence behind it. Anonymised demonstration data.':
    'Центр управления для руководства. Каждый показатель раскрывает стоящие за ним доказательства. Анонимизированные демонстрационные данные.',
  'Action Plan — the prioritised intervention list':
    'План действий — приоритизированный список вмешательств',
  'Every action carries an owner, a deadline and the signal it must move. Anonymised demonstration data.':
    'У каждого действия есть ответственный, срок и сигнал, который оно должно сдвинуть. Анонимизированные демонстрационные данные.',

  /* --- Chrome outside the dictionary --------------------------------------- */
  'Switch to light theme': 'Переключить на светлую тему',
  'Switch to dark theme': 'Переключить на тёмную тему',
  'Powered by Gintex': 'Работает на Gintex',
  'GeoRepute — home': 'GeoRepute — главная',
  Open: 'Открыть',

  /* --- Effort, urgency, trend and confidence chips ------------------------- */
  'low effort': 'низкие трудозатраты',
  'medium effort': 'средние трудозатраты',
  'high effort': 'высокие трудозатраты',
  Immediate: 'Немедленно',
  'This quarter': 'В этом квартале',
  Monitor: 'Наблюдать',
  Improving: 'Улучшается',
  Stable: 'Стабильно',
  Deteriorating: 'Ухудшается',
  High: 'Высокая',
  Medium: 'Средняя',
  Directional: 'Направленная',
  'Insufficient history': 'Недостаточно истории',

  /* --- Score-meter accessible name ------------------------------------------ */
  '{score} out of {max}': '{score} из {max}',

  /* --- Image credit --------------------------------------------------------- */
  'NASA on Unsplash': 'NASA на Unsplash',

  /* --- The demonstration's buyer queries -------------------------------------
     Translated rather than left as literal English search strings. A reader is
     being shown what an AI buying decision looks like, and a buyer reading a
     Russian page types Russian. FLAGGED FOR THE CLIENT: if the demo is ever
     pointed at a real Russian-speaking market, these should be replaced with
     the phrases that market actually searches, not translations of the US
     ones — that is a content decision, not a translation one. */
  'Which industrial fastener suppliers are most reliable in the Midwest?':
    'Какие поставщики промышленного крепежа наиболее надёжны на Среднем Западе?',
  'industrial fastener supplier': 'поставщик промышленного крепежа',
  'fastener distributor midwest': 'дистрибьютор крепежа средний запад',
  'vendor managed inventory mro': 'управление запасами поставщиком мро',
  'hydraulic fittings supplier': 'поставщик гидравлических фитингов',
  'industrial supply company': 'компания промышленного снабжения',
  'bulk fasteners chicago': 'крепёж оптом чикаго',
  'grade 8 bolts bulk': 'болты класса 8 оптом',
  'mro distributor': 'дистрибьютор расходных материалов',

  /* ==========================================================================
     THE METHODOLOGY PAGE.

     The evidence sources, model rules and limitations reach t() through a
     variable rather than a literal, so scripts/i18n-keys.mjs cannot see them.
     They are listed here by hand; the page audit is what catches a miss.
     ======================================================================= */

  /* --- Hero ---------------------------------------------------------------- */
  'The stronger the claim, the stronger the evidence path must be.':
    'Чем сильнее утверждение, тем прочнее должен быть путь доказательств.',
  'Every conclusion in this system can be traced to a date, a source, an engine, a prompt or a connected dataset. This page states how, and where the boundaries are.':
    'Любой вывод в этой системе прослеживается до даты, источника, движка, запроса или подключённого набора данных. На этой странице изложено, как именно, и где проходят границы.',
  'Methodology version {version} · observed {date}':
    'Версия методологии {version} · наблюдение от {date}',

  /* --- GEON ---------------------------------------------------------------- */
  'The GEON framework': 'Фреймворк GEON',
  'Six vectors, one published weighting': 'Шесть векторов, одно опубликованное взвешивание',
  'The Decision Health Index is a weighted function of these six vectors — not a score assigned by judgement. The weighting is published below so the index can be recomputed independently.':
    'Индекс здоровья решений — взвешенная функция этих шести векторов, а не оценка, выставленная экспертно. Веса опубликованы ниже, чтобы индекс можно было пересчитать независимо.',
  'Decision Health Index weighting': 'Взвешивание индекса здоровья решений',
  'Yields <b>{score} of 100</b> for the seeded organisation. Authority carries the heaviest weight and the lowest score, which is why it is the binding constraint.':
    'Даёт <b>{score} из 100</b> для демонстрационной организации. Авторитетность несёт наибольший вес и наименьшую оценку — поэтому именно она является связывающим ограничением.',
  'GEON assessment. {readings}. Lowest vector is {lowest}.':
    'Оценка GEON. {readings}. Самый низкий вектор — {lowest}.',
  '{label} {score} of 100': '{label} {score} из 100',

  /* --- Evidence sources ---------------------------------------------------- */
  'Where the observations come from': 'Откуда берутся наблюдения',
  'This environment observes <b>{questions}</b> decision questions across six AI engines, and <b>{keywords}</b> commercial keywords in Google.':
    'Эта среда отслеживает <b>{questions}</b> решенческих вопросов в шести движках ИИ и <b>{keywords}</b> коммерческих ключевых слов в Google.',
  'Public AI responses': 'Публичные ответы ИИ',
  'Answers observed from six engines against a fixed question set, recorded with engine, date and full response.':
    'Ответы, зафиксированные в шести движках по неизменному набору вопросов, с записью движка, даты и полного текста ответа.',
  'Third-party search and market data': 'Сторонние поисковые и рыночные данные',
  'Keyword volume, organic position, competition and cost per click.':
    'Частотность ключевых слов, органическая позиция, конкуренция и цена клика.',
  'Connected first-party analytics': 'Подключённая собственная аналитика',
  'Search Console and Analytics, where the customer connects them. Improves confidence; never required.':
    'Search Console и Analytics, если клиент их подключает. Повышают уверенность; никогда не обязательны.',
  'Public competitor information': 'Публичная информация о конкурентах',
  'Published positions, citations and the sources engines reach for when recommending a competitor.':
    'Опубликованные позиции, цитирования и источники, к которым обращаются движки, рекомендуя конкурента.',
  'Public content, reputation and trust signals':
    'Публичный контент, репутация и сигналы доверия',
  'Independent validation, review corpora and cross-source consistency.':
    'Независимое подтверждение, корпуса отзывов и согласованность между источниками.',
  'Customer-configured business assumptions':
    'Бизнес-допущения, заданные клиентом',
  'Average deal value, conversion rates and revenue split by decision stage. Always labelled as customer-provided.':
    'Средняя стоимость сделки, коэффициенты конверсии и распределение выручки по этапам решения. Всегда помечается как предоставленное клиентом.',
  'Historical GeoRepute scans and action outcomes':
    'Прошлые сканирования GeoRepute и результаты действий',
  'Prior observations and whether an executed action moved the signal it targeted.':
    'Предыдущие наблюдения и то, сдвинуло ли выполненное действие сигнал, на который было нацелено.',

  /* --- Confidence ---------------------------------------------------------- */
  'Every conclusion carries its own confidence':
    'У каждого вывода своя уверенность',
  'Confidence is attached to the individual conclusion, not to the product. Two findings in the same readout can carry different confidence, and they frequently do.':
    'Уверенность привязана к отдельному выводу, а не к продукту. Два вывода в одном отчёте могут иметь разную уверенность — и часто имеют.',

  /* --- Financial model ----------------------------------------------------- */
  'Financial model': 'Финансовая модель',
  'Directional, ranged, and never described as confirmed':
    'Направленная, в диапазонах и никогда не описываемая как подтверждённая',
  'The model': 'Модель',
  'All values are shown as ranges, never as point estimates.':
    'Все значения показаны диапазонами, никогда — точечными оценками.',
  'No value is described as confirmed lost revenue.':
    'Ни одно значение не описывается как подтверждённая упущенная выручка.',
  'Every model exposes its assumptions and data boundaries.':
    'Каждая модель раскрывает свои допущения и границы данных.',
  'Connected first-party conversion data improves confidence.':
    'Подключённые собственные данные о конверсии повышают уверенность.',
  'Prediction is withheld when history is insufficient.':
    'При недостатке истории прогноз не выдаётся.',
  'Every exported brief carries methodology and limitation language.':
    'Каждая выгруженная справка содержит формулировки методологии и ограничений.',
  'Search economics, derived': 'Экономика поиска, расчётная',
  'Blended CPC': 'Смешанная цена клика',
  /* 'Break-even CPC' and 'Above break-even' already have entries in the seed
     section below. */
  'Break-even is average order value × gross margin × site conversion. Paid dependency is classified from the ratio of blended CPC to break-even — it is derived, never asserted.':
    'Точка безубыточности — это средний чек × валовая маржа × конверсия сайта. Зависимость от платного трафика классифицируется по отношению смешанной цены клика к точке безубыточности: она выводится расчётом, а не утверждается.',

  /* --- Limitations --------------------------------------------------------- */
  Limitations: 'Ограничения',
  'What this system cannot tell you': 'Чего эта система вам сказать не может',
  'AI engine answers vary between runs and between users. Observations are point-in-time samples, not guarantees of what any individual buyer sees.':
    'Ответы движков ИИ различаются от запуска к запуску и от пользователя к пользователю. Наблюдения — это выборки на момент времени, а не гарантия того, что увидит конкретный покупатель.',
  'Commercial exposure is a directional model built on customer-configured assumptions. It is useful for prioritisation and is not an audited financial statement.':
    'Коммерческий риск — направленная модель, построенная на заданных клиентом допущениях. Она полезна для расстановки приоритетов и не является аудированной финансовой отчётностью.',
  'Attribution between an executed action and a signal movement is correlational. The system records both and reports the relationship; it does not claim causation.':
    'Связь между выполненным действием и сдвигом сигнала носит корреляционный характер. Система фиксирует и то и другое и сообщает о зависимости; она не утверждает причинности.',
  'Competitor authority counts reflect sources engines cite publicly. A competitor may hold private advantages this system cannot observe.':
    'Подсчёт источников авторитетности конкурентов отражает то, что движки цитируют публично. У конкурента могут быть закрытые преимущества, которые система не видит.',
  'Where history is insufficient, predictive conclusions are withheld rather than estimated.':
    'При недостатке истории прогнозные выводы не выдаются, а не оцениваются приблизительно.',
  'This demonstration environment': 'Эта демонстрационная среда',
  'Northwind Supply is a fictional organisation. Its figures are seeded, internally consistent and derived from a single set of anchor facts — <b>{presence}</b> recommendation presence, <b>{coverage}</b> supplier-evaluation coverage, <b>{share}</b> competitor share. Every other number on this site is computed from those, and a test suite fails the build if any screen disagrees.':
    'Northwind Supply — вымышленная организация. Её показатели заданы тестовыми данными, внутренне согласованы и выведены из единого набора опорных фактов: <b>{presence}</b> присутствия в рекомендациях, <b>{coverage}</b> охвата на этапе оценки поставщиков, <b>{share}</b> доли конкурента. Каждое другое число на этом сайте рассчитано из них, и набор тестов ломает сборку, если какой-либо экран им противоречит.',
  'Open Mission Control': 'Открыть центр управления',
  'See the engines': 'Посмотреть движки',

  /* ==========================================================================
     THE SEED DATA — signal names, readout prose and marketplace copy.
     ======================================================================= */

  /* --- GEON vector definitions -------------------------------------------- */
  'Whether systems understand what the business does, who it serves and when to recommend it.':
    'Понимают ли системы, чем занимается компания, кого она обслуживает и когда её рекомендовать.',
  'The strength of reputation, validation and proof surrounding the business.':
    'Сила репутации, подтверждений и доказательств вокруг компании.',
  'How consistently the business appears across AI and digital environments.':
    'Насколько последовательно компания представлена в средах ИИ и цифровых средах.',
  'Whether the same accurate story appears across channels, markets and languages.':
    'Появляется ли одна и та же точная история во всех каналах, рынках и языках.',
  'How closely positioning matches customer demand and buying intent.':
    'Насколько точно позиционирование совпадает со спросом клиентов и намерением купить.',
  'Whether the business is recognized as a credible expert or category leader.':
    'Признаётся ли компания достоверным экспертом или лидером категории.',

  /* --- Engine business questions ------------------------------------------ */
  'Does AI know the business exists, and what does it think it is?':
    'Знает ли ИИ, что компания существует, и чем он её считает?',
  'Do the two discovery surfaces agree, and what is the gap costing?':
    'Согласуются ли две поверхности обнаружения и во что обходится разрыв?',
  'Who receives the decision instead, and what do they have?':
    'Кто получает решение вместо вас и что есть у него?',
  'What must happen next, by whom and by when?':
    'Что должно произойти дальше, кем и к какому сроку?',
  'Where do competitors receive the decision before the business receives the lead?':
    'Где конкуренты получают решение раньше, чем компания получает лид?',
  'Do AI engines understand who the business is and when it should be considered?':
    'Понимают ли движки ИИ, что это за компания и когда её следует рассматривать?',
  'Does the business exist consistently across traditional search and AI-mediated discovery?':
    'Существует ли компания последовательно и в традиционном поиске, и в обнаружении через ИИ?',
  'Whose language does the market use to describe your category?':
    'Чьим языком рынок описывает вашу категорию?',
  'Is the market ready, and does the route to it hold?':
    'Готов ли рынок и выдерживает ли путь к нему?',

  /* --- Readout evidence and executive truths ------------------------------ */
  'Decision Health reads 41 of 100, held down primarily by Authority at 28.':
    'Здоровье решений — 41 из 100, сдерживается прежде всего авторитетностью на уровне 28.',
  'Authority carries the heaviest index weight and the largest deficit.':
    'Авторитетность несёт наибольший вес в индексе и наибольший дефицит.',
  'GEON Authority 28 — the lowest of six vectors.':
    'Авторитетность GEON — 28, самый низкий из шести векторов.',
  'Three independent sources reference Northwind; the competitor median is fourteen.':
    'На Northwind ссылаются три независимых источника; медиана у конкурентов — четырнадцать.',
  'No published supplier-comparison material for engines to cite.':
    'Нет опубликованных материалов сравнения поставщиков, на которые движки могли бы сослаться.',
  'Category description differs between the website and two trade directories.':
    'Описание категории различается между сайтом и двумя отраслевыми каталогами.',
  'Three of six engines misidentify the category.':
    'Три движка из шести неверно определяют категорию.',
  'No stable entity record. Answers reference the category without naming Northwind at all.':
    'Устойчивой записи о сущности нет. Ответы ссылаются на категорию, вовсе не называя Northwind.',
  'Kestrel Industrial leads five of seven supplier questions.':
    'Kestrel Industrial лидирует в пяти из семи вопросов о поставщиках.',
  'Engines cite a competitor’s evaluation criteria first.':
    'Движки в первую очередь цитируют критерии оценки конкурента.',
  'Eleven tracked keywords sit outside the top ten.':
    'Одиннадцать отслеживаемых ключевых слов находятся за пределами первой десятки.',
  'Blended CPC $9.03 against break-even $6.13.':
    'Смешанная цена клика $9,03 против точки безубыточности $6,13.',
  '6 recommendation events across 144 answer slots.':
    '6 событий рекомендации на 144 места в ответах.',
  'Supplier-evaluation coverage — the stage deciding 60% of revenue.':
    'Охват на этапе оценки поставщиков — этапе, решающем судьбу 60% выручки.',
  'Supplier-evaluation phrasing still varied — the category has no fixed vocabulary yet.':
    'Формулировки на этапе оценки поставщиков всё ещё различаются — у категории пока нет устоявшегося словаря.',
  '63 of 100 — buyers are educated, answers are not yet fixed.':
    '63 из 100 — покупатели информированы, ответы ещё не закрепились.',
  'Demand × decision gap × estimated conversion × average deal value.':
    'Спрос × разрыв в решениях × оценочная конверсия × средняя стоимость сделки.',

  /* --- The action plan ----------------------------------------------------- */
  'Direct investment at Authority first — it carries the highest weight and the largest deficit.':
    'Направьте инвестиции прежде всего в авторитетность — она несёт наибольший вес и наибольший дефицит.',
  'Build supplier-comparison content against the six highest-volume missed decision questions.':
    'Создайте контент сравнения поставщиков под шесть упущенных вопросов решения с наибольшим объёмом.',
  'Strengthen independent authority evidence and supplier-comparison coverage.':
    'Усильте независимые доказательства авторитетности и охват сравнения поставщиков.',
  'Resolve the Gemini entity conflation with the same-named logistics firm.':
    'Устраните смешение сущностей в Gemini с одноимённой логистической компанией.',
  'Reallocate paid spend from keywords with a viable organic replacement path.':
    'Перераспределите платные расходы с ключевых слов, где есть жизнеспособный путь органического замещения.',
  'Response time cited among the first three criteria by 3 of 6 engines':
    'Время отклика упоминается среди первых трёх критериев в 3 движках из 6',
  'Gemini resolves the correct entity on 4 of 6 category questions':
    'Gemini определяет верную сущность в 4 из 6 вопросов по категории',
  'Blended CPC below break-even on reallocated set':
    'Смешанная цена клика ниже точки безубыточности на перераспределённом наборе',
  'Category association correct on 5 of 6 engines':
    'Отнесение к категории верно в 5 движках из 6',
  'Gemini recognition 24 → 45': 'Распознавание в Gemini 24 → 45',

  /* --- Composite measures and the GEON vectors ---------------------------- */
  'Methodology GEON-2.4': 'Методология GEON-2.4',
  'Decision Health Index': 'Индекс здоровья решений',
  'Decision Health Index at 41 of 100': 'Индекс здоровья решений — 41 из 100',
  'Decision Health Index 41 → 56/100': 'Индекс здоровья решений 41 → 56/100',
  Composite: 'Составной показатель',
  'Composite model': 'Составная модель',
  'Index weighting': 'Взвешивание индекса',
  'GEON vectors': 'Векторы GEON',
  'GEON Authority': 'Авторитетность GEON',
  'GEON Trust': 'Доверие GEON',
  'GEON Authority 28 → 45/100': 'Авторитетность GEON 28 → 45/100',
  '38 of 100 average': 'в среднем 38 из 100',
  '44 of 100': '44 из 100',
  '28 of 100': '28 из 100',
  'The index is a weighted function of the six GEON vectors, not a score assigned by judgement. Market Fit at 72 confirms the offer matches demand; the constraint is entirely on the evidence side.':
    'Индекс — взвешенная функция шести векторов GEON, а не оценка, выставленная экспертно. Соответствие рынку на уровне 72 подтверждает, что предложение отвечает спросу; ограничение целиком на стороне доказательств.',
  'Recompute the index from re-observed GEON vectors monthly. The weighting is published and versioned.':
    'Пересчитывайте индекс по заново измеренным векторам GEON ежемесячно. Веса опубликованы и версионируются.',

  /* --- Recognition --------------------------------------------------------- */
  'Recognition by engine': 'Распознавание по движкам',
  'AI Recognition Matrix': 'Матрица распознавания ИИ',
  'AI Recognition Intelligence': 'Интеллект распознавания ИИ',
  'AI Visibility Intelligence': 'Интеллект видимости в ИИ',
  'AI Search Presence': 'Присутствие в поиске ИИ',
  'Entity Understanding': 'Понимание сущности',
  'Entity category association': 'Отнесение сущности к категории',
  'Category association': 'Отнесение к категории',
  'Entity disambiguation': 'Разрешение неоднозначности сущности',
  'Entity record': 'Запись о сущности',
  'Confusion detection': 'Обнаружение путаницы',
  'Confusion Detector': 'Детектор путаницы',
  'Outdated knowledge': 'Устаревшие знания',
  'Average recognition score': 'Средняя оценка распознавания',
  'Average recognition score 38 → 55': 'Средняя оценка распознавания 38 → 55',
  'Average recognition score 38 → 55/100':
    'Средняя оценка распознавания 38 → 55/100',
  'Correctly categorised by all six engines.':
    'Корректно отнесено к категории всеми шестью движками.',
  'All six engines': 'Все шесть движков',
  'Incomplete on 3 engines': 'Неполно в 3 движках',
  Inconsistent: 'Несогласованно',
  'Recognition decay': 'Затухание распознавания',
  'AI understanding': 'Понимание со стороны ИИ',
  'An engine that cannot categorise a business cannot recommend it. This is upstream of every visibility metric: no amount of content moves an answer if the entity record is wrong.':
    'Движок, который не может отнести компанию к категории, не может её рекомендовать. Это предшествует любой метрике видимости: никакой объём контента не сдвинет ответ, если запись о сущности неверна.',
  'Recognition is never uniform. A business can be well understood by one engine and structurally invisible to another that a different half of its buyers use.':
    'Распознавание никогда не бывает однородным. Компанию может хорошо понимать один движок и структурно не видеть другой, которым пользуется другая половина её покупателей.',
  'Whether AI systems hold an accurate, current and unambiguous record of the business, and whether that record survives into the answers buyers receive. Everything else on this page is downstream of it — no measure improves while the underlying record is wrong.':
    'Хранят ли системы ИИ точную, актуальную и однозначную запись о компании и доживает ли эта запись до ответов, которые получают покупатели. Всё остальное на этой странице следует за этим: ни один показатель не улучшится, пока исходная запись неверна.',
  'Whether the business is filed under the categories buyers actually ask about, or under one that is accurate but that nobody searches.':
    'Отнесена ли компания к категориям, о которых покупатели действительно спрашивают, или к точной, но такой, которую никто не ищет.',
  'Contradictions across the public record — different categories, claims or descriptions between the site, directories and third-party profiles.':
    'Противоречия в публичных данных — разные категории, утверждения или описания между сайтом, каталогами и профилями третьих сторон.',
  'The distance between what a company says it is and what machines have independently concluded it is — usually wider than any executive expects.':
    'Расстояние между тем, чем компания себя называет, и тем, к какому выводу самостоятельно пришли машины, — обычно шире, чем ожидает любой руководитель.',
  'Consistent category language across its own site, trade directories and three independent publications gives engines a single unambiguous record to resolve.':
    'Единый язык категории на собственном сайте, в отраслевых каталогах и трёх независимых изданиях даёт движкам одну однозначную запись для разрешения.',
  'Three of six engines misclassify what Northwind sells. No content investment can move an answer while the entity record is wrong.':
    'Три движка из шести неверно классифицируют то, что продаёт Northwind. Никакие инвестиции в контент не сдвинут ответ, пока запись о сущности неверна.',
  'Three of six AI engines misidentify what Northwind sells, and one does not recognise it as a distinct business at all.':
    'Три движка ИИ из шести неверно определяют, что продаёт Northwind, а один вовсе не распознаёт её как отдельную компанию.',
  'Gemini recognises Northwind at 24 of 100 and recommends it in zero questions. The cause is a disambiguation failure, not a content gap.':
    'Gemini распознаёт Northwind на 24 из 100 и не рекомендует её ни по одному вопросу. Причина — сбой разрешения неоднозначности, а не нехватка контента.',
  'Publish a single canonical entity description and propagate identical category language to trade directories and structured data.':
    'Опубликуйте единое каноническое описание сущности и распространите идентичный язык категории на отраслевые каталоги и структурированные данные.',
  'Publish a canonical entity description and propagate identical category language to trade directories and structured data.':
    'Опубликуйте каноническое описание сущности и распространите идентичный язык категории на отраслевые каталоги и структурированные данные.',
  'Publish a canonical entity description and propagate identical…':
    'Опубликуйте каноническое описание сущности и распространите идентичный…',
  'Re-observe entity understanding per engine. Success is category association correct on five of six engines.':
    'Заново измеряйте понимание сущности по каждому движку. Успех — корректное отнесение к категории в пяти движках из шести.',
  'Resolve category description inconsistency across all public sources, then pursue verifiable third-party validation.':
    'Устраните несогласованность описания категории во всех публичных источниках, затем добивайтесь проверяемого подтверждения третьей стороной.',

  /* --- Decision stage and recommendation ---------------------------------- */
  'Decision-stage control': 'Контроль на этапе решения',
  'Decision stage': 'Этап решения',
  'Decision volume': 'Объём решений',
  'AI recommendation presence': 'Присутствие в рекомендациях ИИ',
  'Recommendation share': 'Доля рекомендаций',
  'Recommendation share 4.2 → 11%': 'Доля рекомендаций 4,2 → 11%',
  'Recommendation analysis': 'Анализ рекомендаций',
  'Recommendation Map': 'Карта рекомендаций',
  'Competitor recommendation share': 'Доля рекомендаций конкурента',
  'Competitor share': 'Доля конкурента',
  'Competitor capture': 'Захват конкурентом',
  'Questions with AI presence': 'Вопросы с присутствием в ИИ',
  'Questions with presence': 'Вопросы с присутствием',
  'Questions with presence 5 → 12 of 24': 'Вопросы с присутствием 5 → 12 из 24',
  'Prompt coverage': 'Охват запросов',
  'Missed prompts': 'Упущенные запросы',
  'Missed Prompts': 'Упущенные запросы',
  'Winning prompts': 'Выигранные запросы',
  'Query Inventory': 'Реестр запросов',
  'Presence on 12 of 24 tracked questions':
    'Присутствие в 12 из 24 отслеживаемых вопросов',
  'Supplier-evaluation first mention':
    'Первое упоминание при оценке поставщиков',
  'Supplier-evaluation coverage': 'Охват на этапе оценки поставщиков',
  'Supplier-evaluation coverage 7% → 19%':
    'Охват на этапе оценки поставщиков 7% → 19%',
  'Supplier-evaluation coverage 7 → 19%':
    'Охват на этапе оценки поставщиков 7 → 19%',
  '7% → 19% target': 'цель 7% → 19%',
  'Share of decisions rather than share of traffic — measured where the choice is actually made rather than where it is later recorded.':
    'Доля решений, а не доля трафика — измеряется там, где выбор действительно делается, а не там, где он позже фиксируется.',
  'Position measured only on questions that decide a purchase, with the vanity terms that inflate most reporting deliberately excluded.':
    'Позиция измеряется только по вопросам, решающим покупку; тщеславные запросы, раздувающие большинство отчётов, намеренно исключены.',
  'The named questions a rival wins every time, which is what converts a vague sense of losing into a finite list of things to go and fix.':
    'Конкретные вопросы, которые конкурент выигрывает каждый раз, — именно это превращает смутное ощущение проигрыша в конечный список того, что нужно исправить.',
  'These are not lost leads, because no lead was ever created. The decision completed inside the engine, and conventional analytics recorded nothing at all.':
    'Это не потерянные лиды, потому что ни один лид не был создан. Решение завершилось внутри движка, и традиционная аналитика не зафиксировала ничего.',
  'Nineteen of twenty-four decisions complete without the brand. These six carry the largest share of decision-stage demand.':
    'Девятнадцать из двадцати четырёх решений завершаются без бренда. На эти шесть приходится наибольшая доля спроса на этапе решения.',
  'Northwind appears in 7% of supplier-evaluation answers — the stage that decides 60% of revenue and that Kestrel controls in five of seven questions.':
    'Northwind появляется в 7% ответов при оценке поставщиков — на этапе, который решает судьбу 60% выручки и который Kestrel контролирует в пяти вопросах из семи.',
  'The stage that decides 60% of revenue carries under 15% of query volume — so the weakness is invisible to volume-led tooling.':
    'На этап, решающий судьбу 60% выручки, приходится менее 15% объёма запросов — поэтому слабость невидима для инструментов, ориентированных на объём.',
  'The stage where the vendor is chosen. Presence here decides whether the business reaches the shortlist at all.':
    'Этап, на котором выбирается поставщик. Присутствие здесь решает, попадёт ли компания в короткий список вообще.',
  'Buyers at supplier evaluation have already chosen a solution and are choosing a vendor. This stage carries under 15% of query volume, so volume-led tooling ranks it as unimportant — while it decides most of the revenue. Absence here is exclusion from the shortlist at the moment the order is assigned.':
    'Покупатели на этапе оценки поставщиков уже выбрали решение и выбирают поставщика. На этот этап приходится менее 15% объёма запросов, поэтому инструменты, ориентированные на объём, считают его несущественным, — тогда как он решает судьбу большей части выручки. Отсутствие здесь означает исключение из короткого списка в момент распределения заказа.',
  'Prioritise the six highest-volume missed questions and publish material that answers each one directly and citably.':
    'Приоритизируйте шесть упущенных вопросов с наибольшим объёмом и опубликуйте материалы, отвечающие на каждый прямо и с возможностью цитирования.',
  'Re-run all 24 questions monthly across all six engines; record presence per engine per question.':
    'Ежемесячно прогоняйте все 24 вопроса по всем шести движкам; фиксируйте присутствие по каждому движку и вопросу.',
  'Re-run the supplier-evaluation prompt set monthly. Coverage is verified by recommendation slots won across all six engines, not by traffic.':
    'Ежемесячно прогоняйте набор запросов по оценке поставщиков. Охват подтверждается выигранными местами в рекомендациях всех шести движков, а не трафиком.',
  'Recommendation share re-measured across the same 24 questions monthly, with engine and date recorded per observation.':
    'Доля рекомендаций переизмеряется по тем же 24 вопросам ежемесячно, с фиксацией движка и даты для каждого наблюдения.',

  /* --- Authority and sources ----------------------------------------------- */
  'Independent authority evidence': 'Независимые доказательства авторитетности',
  'Independent authority evidence is weak':
    'Независимые доказательства авторитетности слабы',
  'Independent authority sources cited':
    'Цитируемые независимые источники авторитетности',
  'Independent sources': 'Независимые источники',
  'Independent source count': 'Число независимых источников',
  'Independent source count 3 → 12': 'Число независимых источников 3 → 12',
  'Independent validation': 'Независимое подтверждение',
  '3 independent sources': '3 независимых источника',
  '3 sources against a category median of 14.':
    '3 источника против медианы по категории в 14.',
  'Category median is 14. Kestrel holds 21.':
    'Медиана по категории — 14. У Kestrel — 21.',
  'Kestrel 21 sources, Northwind 3.': 'Kestrel — 21 источник, Northwind — 3.',
  'Weak — 3 sources': 'Слабо — 3 источника',
  'Authority evidence': 'Доказательства авторитетности',
  'Authority Signals': 'Сигналы авторитетности',
  'Authority drivers': 'Драйверы авторитетности',
  'Authority first': 'Сначала авторитетность',
  'Authority Gap': 'Разрыв в авторитетности',
  Authority: 'Авторитетность',
  'Source authority': 'Авторитетность источника',
  'Source advantage': 'Преимущество в источниках',
  'Source influence': 'Влияние источника',
  'Source Influence Map': 'Карта влияния источников',
  Citations: 'Цитирования',
  'Citation analysis': 'Анализ цитирований',
  'Engine citation analysis': 'Анализ цитирований движками',
  'Cross-source comparison': 'Сравнение между источниками',
  'Trade publication coverage': 'Охват отраслевыми изданиями',
  'Public review platforms': 'Публичные площадки отзывов',
  'Review corpus': 'Корпус отзывов',
  'Public web': 'Открытый веб',
  'Mentions weighted by the credibility of the source, so fifty low-authority listings stop reading as a stronger position than three real ones.':
    'Упоминания, взвешенные по достоверности источника, чтобы пятьдесят малоавторитетных записей перестали выглядеть сильнее трёх настоящих.',
  'Which claims stand on third-party evidence and which stand only on the company’s own website — machines weight the two very differently.':
    'Какие утверждения опираются на свидетельства третьих сторон, а какие — только на собственный сайт компании; машины оценивают эти два случая совершенно по-разному.',
  'Engines do not recommend what they cannot corroborate. Authority is the lowest GEON vector at 28 of 100, and it is the constraint that holds every other signal down.':
    'Движки не рекомендуют то, что не могут подтвердить. Авторитетность — самый низкий вектор GEON, 28 из 100, и именно это ограничение сдерживает все прочие сигналы.',
  'Authority is the lowest GEON vector at 28 and carries the heaviest index weight. It is the constraint holding recognition, recommendation share and coverage down.':
    'Авторитетность — самый низкий вектор GEON, 28, и он несёт наибольший вес в индексе. Это ограничение сдерживает распознавание, долю рекомендаций и охват.',
  'Engines cannot corroborate a recommendation from three sources when the category median is fourteen.':
    'Движки не могут подтвердить рекомендацию тремя источниками, когда медиана по категории — четырнадцать.',
  'Publish an independent, verifiable supplier-comparison resource and secure third-party validation in at least two trade publications.':
    'Опубликуйте независимый проверяемый ресурс сравнения поставщиков и получите подтверждение третьей стороны минимум в двух отраслевых изданиях.',
  'Secure independent validation: trade-publication contribution, verifiable customer outcomes and third-party specification references.':
    'Обеспечьте независимое подтверждение: публикации в отраслевых изданиях, проверяемые результаты клиентов и ссылки на спецификации от третьих сторон.',
  'Independent source count re-observed monthly, with each new source recorded by publication and date.':
    'Число независимых источников переизмеряется ежемесячно, каждый новый источник фиксируется с изданием и датой.',
  'Build supplier-comparison content against the eleven compound and strategic blind-spot questions, structured so it is both rankable and citable.':
    'Создайте контент сравнения поставщиков под одиннадцать вопросов из составных и стратегических слепых зон, структурированный так, чтобы он и ранжировался, и цитировался.',

  /* --- Trust ---------------------------------------------------------------- */
  Trust: 'Доверие',
  'Trust decay': 'Затухание доверия',
  'Trust readiness': 'Готовность к доверию',
  'Trust Intelligence': 'Интеллект доверия',
  'Trust and Authority Diagnostics': 'Диагностика доверия и авторитетности',
  'Reputation consistency': 'Согласованность репутации',
  'Reputation Momentum': 'Динамика репутации',
  Consistency: 'Согласованность',
  'Is the business safe to recommend?': 'Безопасно ли рекомендовать эту компанию?',
  'Buyer Confidence': 'Уверенность покупателя',
  'Visibility creates attention; trust creates selection. A business can be perfectly visible and still be filtered out at the moment a system has to stand behind naming it first, and the reasons for that are specific and fixable.':
    'Видимость создаёт внимание, доверие создаёт выбор. Компания может быть прекрасно видна и всё равно отсеяться в момент, когда системе нужно отвечать за то, что она назвала её первой, — и причины этого конкретны и устранимы.',
  'Visibility creates attention; trust creates selection. A business can be found and still be filtered out at the moment an engine has to stand behind a recommendation.':
    'Видимость создаёт внимание, доверие создаёт выбор. Компанию можно найти и всё равно отсеять в момент, когда движку нужно отвечать за рекомендацию.',
  'Trust reads 44 of 100 while Market Fit reads 72 — the offer matches demand, but the proof does not support a recommendation.':
    'Доверие — 44 из 100, а соответствие рынку — 72: предложение отвечает спросу, но доказательства не подкрепляют рекомендацию.',

  /* --- Competitive ---------------------------------------------------------- */
  'Competitive Intelligence': 'Конкурентный интеллект',
  'Competitor Decision Intelligence': 'Интеллект конкурентных решений',
  'Executive Intelligence': 'Интеллект для руководства',
  'Competitive density': 'Конкурентная плотность',
  Replaceability: 'Заменимость',
  'Replaceability Index': 'Индекс заменимости',
  'Distributor alignment': 'Согласованность с дистрибьюторами',
  'Distributor Map': 'Карта дистрибьюторов',
  'Northwind differentiators': 'Отличия Northwind',
  'Evaluation criteria cited': 'Цитируемые критерии оценки',
  'Strength Drivers': 'Драйверы силы',
  Vulnerability: 'Уязвимость',
  Fragility: 'Хрупкость',
  Dependency: 'Зависимость',
  'Dependency Risk': 'Риск зависимости',
  'Northwind listed fourth of five suppliers.':
    'Northwind указана четвёртой из пяти поставщиков.',
  'Absent. Meridian named first.': 'Отсутствует. Meridian названа первой.',
  'Absent. 35 searches per month.': 'Отсутствует. 35 запросов в месяц.',
  'Not who ranks above you — who gets recommended when a buyer asks a machine whom to choose. The useful output is never the share figure; it is the specific evidence a competitor supplies that you do not, because that is the part you can go and close.':
    'Не кто стоит выше вас в выдаче, а кого рекомендуют, когда покупатель спрашивает машину, кого выбрать. Полезный результат — никогда не цифра доли, а конкретное доказательство, которое даёт конкурент и не даёте вы, потому что именно это вы можете пойти и закрыть.',
  'Some rivals win early by shaping the criteria; others win late at vendor selection. The counter-move is completely different for each.':
    'Одни соперники выигрывают рано, формируя критерии; другие — поздно, на выборе поставщика. Ответный ход в каждом случае совершенно разный.',
  'Where a position rests on a single source or a single page, and would not survive one competitor publishing a better one.':
    'Где позиция держится на одном источнике или одной странице и не переживёт публикации конкурентом чего-то лучшего.',
  'Kestrel is cited by three independent trade publications and maintains a public supplier-comparison library. Engines reach for that evidence when a buyer asks whom to choose.':
    'На Kestrel ссылаются три независимых отраслевых издания, и она ведёт публичную библиотеку сравнения поставщиков. Движки обращаются к этим доказательствам, когда покупатель спрашивает, кого выбрать.',
  'Kestrel receives 31% of all AI recommendations across the tracked decision set; Northwind receives 4.2%.':
    'Kestrel получает 31% всех рекомендаций ИИ по отслеживаемому набору решений; Northwind — 4,2%.',
  'Receives 31% of all recommendations and is named first in four of seven supplier-evaluation answers.':
    'Получает 31% всех рекомендаций и называется первой в четырёх из семи ответов при оценке поставщиков.',
  'This gap is not brand preference. It is an evidence gap: Kestrel supplies engines with material they can cite, and Northwind does not. The lead never reaches the CRM because the decision resolved before contact.':
    'Этот разрыв — не предпочтение бренда, а разрыв в доказательствах: Kestrel даёт движкам материал, на который можно сослаться, а Northwind — нет. Лид не доходит до CRM, потому что решение состоялось до контакта.',
  'Sustained trade-publication presence means engines can support a Kestrel recommendation with evidence that is not Kestrel’s own.':
    'Устойчивое присутствие в отраслевых изданиях означает, что движки могут подкрепить рекомендацию Kestrel доказательствами, которые не принадлежат самой Kestrel.',
  'Its supplier-comparison library ranks organically and is the source engines cite, so one asset serves both surfaces.':
    'Её библиотека сравнения поставщиков ранжируется органически и служит источником цитирования для движков, поэтому один актив обслуживает обе поверхности.',
  'Kestrel has published material addressing each question directly; engines reach for what exists.':
    'Kestrel опубликовала материалы, отвечающие на каждый вопрос напрямую; движки берут то, что существует.',
  'Holds top-three organic positions and AI presence on the four highest-volume commercial questions.':
    'Занимает позиции в тройке органической выдачи и присутствует в ИИ по четырём коммерческим вопросам с наибольшим объёмом.',
  'Publishing evaluation criteria before competitors did made that framing the one engines learned.':
    'Публикация критериев оценки раньше конкурентов сделала именно эту рамку той, которую усвоили движки.',
  'Halvorsen owns early-stage research questions, entering the decision before evaluation begins.':
    'Halvorsen владеет исследовательскими вопросами ранней стадии, входя в решение до начала оценки.',
  'Owned authority removes the need to bid, so Kestrel’s cost per decision falls as Northwind’s rises.':
    'Собственная авторитетность снимает необходимость участвовать в аукционе, поэтому стоимость решения у Kestrel падает, а у Northwind растёт.',
  'The evaluation criteria the market has settled on, and which competitor published them first.':
    'Критерии оценки, на которых сошёлся рынок, и то, какой конкурент опубликовал их первым.',
  'Publish an evaluation framework that makes regional response time a first-class selection criterion.':
    'Опубликуйте рамку оценки, делающую региональное время отклика критерием выбора первого порядка.',
  'Publish a defensible evaluation framework that makes regional response time a first-class selection criterion.':
    'Опубликуйте обоснованную рамку оценки, делающую региональное время отклика критерием выбора первого порядка.',

  /* --- Google vs AI --------------------------------------------------------- */
  'Google vs AI Visibility Intelligence':
    'Интеллект видимости: Google против ИИ',
  'Google position': 'Позиция в Google',
  'Channel asymmetry': 'Асимметрия каналов',
  'Gap Matrix': 'Матрица разрывов',
  'Gap classification': 'Классификация разрыва',
  'Strategic blind spot': 'Стратегическая слепая зона',
  'Compound blind spot': 'Составная слепая зона',
  'Compound Blind Spot': 'Составная слепая зона',
  'Blind-spot keywords': 'Ключевые слова в слепой зоне',
  'Traditional search and AI-mediated discovery are separate commercial assets that fail independently. This category measures each, classifies every gap between them, and prices what closing the gap is currently costing in paid media.':
    'Традиционный поиск и обнаружение через ИИ — отдельные коммерческие активы, которые отказывают независимо. Эта категория измеряет каждый, классифицирует любой разрыв между ними и оценивает, во что закрытие разрыва обходится сейчас в платных медиа.',
  'Google rank and AI recommendation are separate commercial assets. Northwind ranks first for account setup — a question asked only after the vendor has already been chosen — and is absent from every question that decides who that vendor is.':
    'Позиция в Google и рекомендация ИИ — отдельные коммерческие активы. Northwind занимает первое место по запросу об открытии счёта — вопросу, который задают только после выбора поставщика, — и отсутствует в каждом вопросе, решающем, кто этот поставщик.',
  'The same question asked of both surfaces, so the two results can finally be compared line by line instead of by anecdote.':
    'Один и тот же вопрос, заданный обеим поверхностям, чтобы два результата можно было наконец сравнить построчно, а не по отдельным случаям.',
  'Every gap sorted into a named class with a different remedy and a different cost. Not all absence is the same problem.':
    'Каждый разрыв отнесён к именованному классу со своим средством устранения и своей стоимостью. Не всякое отсутствие — одна и та же проблема.',
  'Eleven of twenty tracked commercial keywords sit outside the Google top ten and receive no AI recommendation — the decision happens on neither surface.':
    'Одиннадцать из двадцати отслеживаемых коммерческих ключевых слов находятся за пределами первой десятки Google и не получают рекомендации ИИ — решение не происходит ни на одной поверхности.',
  'Absent from both surfaces on a high-value commercial question. The most expensive class of gap.':
    'Отсутствие на обеих поверхностях по высокоценному коммерческому вопросу. Самый дорогой класс разрыва.',
  'Absent from AI answers and outside the Google top ten. The decision happens without the brand.':
    'Отсутствует в ответах ИИ и за пределами первой десятки Google. Решение происходит без бренда.',
  'Track gap classification per keyword monthly. Success is six keywords moving out of blind-spot classification.':
    'Отслеживайте классификацию разрыва по каждому ключевому слову ежемесячно. Успех — шесть ключевых слов, вышедших из категории слепой зоны.',

  /* --- Search economics ------------------------------------------------------ */
  'Search Economics': 'Экономика поиска',
  'Search Cost Intelligence': 'Интеллект стоимости поиска',
  'Search Intelligence': 'Поисковый интеллект',
  'Search trend analysis': 'Анализ поисковых трендов',
  'Break-even CPC': 'Безубыточная цена клика',
  'Break-Even CPC': 'Безубыточная цена клика',
  'Break-even model': 'Модель безубыточности',
  'Above break-even': 'Выше точки безубыточности',
  'Blended CPC vs break-even':
    'Смешанная цена клика против точки безубыточности',
  'Blended CPC across 20 tracked keywords':
    'Смешанная цена клика по 20 отслеживаемым ключевым словам',
  'Keywords above break-even CPC':
    'Ключевые слова выше безубыточной цены клика',
  'Keywords above break-even CPC 13 → 7 of 20':
    'Ключевые слова выше безубыточной цены клика 13 → 7 из 20',
  '11 of 20 weak': '11 из 20 слабы',
  'Bid inflation': 'Инфляция ставок',
  'Paid dependency': 'Зависимость от платного трафика',
  'AI vs Paid': 'ИИ против платного трафика',
  'Recoverable Search Opportunity': 'Восстановимая поисковая возможность',
  'Recoverable search opportunity': 'Восстановимая поисковая возможность',
  'Organic replacement potential': 'Потенциал органического замещения',
  'Paid acquisition is not buying growth here; it is renting the positions that authority would otherwise hold. The cost is structural and rises as competitive density increases.':
    'Платное привлечение здесь не покупает рост; оно арендует позиции, которые иначе удерживала бы авторитетность. Эта стоимость структурна и растёт с ростом конкурентной плотности.',
  'Blended CPC runs above break-even. Paid is renting positions that authority would hold, and the cost rises with competitive density.':
    'Смешанная цена клика выше точки безубыточности. Платный трафик арендует позиции, которые удерживала бы авторитетность, и стоимость растёт с конкурентной плотностью.',
  'Blended CPC runs above the break-even cost per click, and paid spend is covering questions where the brand has no organic or AI presence.':
    'Смешанная цена клика превышает безубыточную стоимость клика, а платные расходы покрывают вопросы, где у бренда нет ни органического присутствия, ни присутствия в ИИ.',
  'Reallocate spend from keywords with a viable organic replacement path, and hold paid only where break-even still clears.':
    'Перераспределите расходы с ключевых слов, где есть жизнеспособный путь органического замещения, и сохраняйте платный трафик только там, где точка безубыточности всё ещё достигается.',
  'Compare blended CPC against break-even monthly, and track organic replacement on reallocated keywords.':
    'Ежемесячно сравнивайте смешанную цену клика с точкой безубыточности и отслеживайте органическое замещение по перераспределённым ключевым словам.',

  /* --- Narrative -------------------------------------------------------------- */
  'Narrative Intelligence': 'Интеллект нарратива',
  'Narrative ownership 12% → 24%': 'Владение нарративом 12% → 24%',
  'Narrative control': 'Контроль нарратива',
  'Narrative War Room': 'Штаб нарратива',
  'Category definition': 'Определение категории',
  'Category definition language': 'Язык определения категории',
  'Comparison content': 'Сравнительный контент',
  'Content Intelligence': 'Интеллект контента',
  'Buyer education': 'Просвещение покупателя',
  'Pricing perception': 'Восприятие цены',
  'Price justification': 'Обоснование цены',
  'Strategic silence': 'Стратегическое молчание',
  'Whoever defines a category sets the criteria buyers evaluate against. This category measures how much of that definition you own, where it is fragile, and which of your genuine advantages the market has no vocabulary for.':
    'Тот, кто определяет категорию, задаёт критерии, по которым оценивают покупатели. Эта категория измеряет, какой долей определения вы владеете, где оно хрупко и для каких из ваших настоящих преимуществ у рынка нет словаря.',
  'Whoever defines the category sets the criteria buyers evaluate against. Competing on someone else’s definition means competing on terms chosen to favour them.':
    'Тот, кто определяет категорию, задаёт критерии, по которым оценивают покупатели. Конкурировать на чужом определении значит конкурировать на условиях, выбранных в пользу другого.',
  'Engines describe the category in a competitor’s language. Northwind’s strongest differentiator is absent from every category description.':
    'Движки описывают категорию языком конкурента. Сильнейшее отличие Northwind отсутствует в каждом описании категории.',
  'Whether the market is asking informed comparison questions or still asking what the category is, which decides what content is worth producing.':
    'Задаёт ли рынок осведомлённые сравнительные вопросы или всё ещё спрашивает, что такое категория, — от этого зависит, какой контент стоит производить.',
  'Category vocabulary as an ownable asset, with a percentage attached — a measure most companies have never seen quantified.':
    'Словарь категории как актив, которым можно владеть, с приложенной процентной долей — показатель, который большинство компаний никогда не видели в числах.',

  /* --- Strategic timing -------------------------------------------------------- */
  'Strategic Timing Intelligence': 'Интеллект стратегического времени',
  'Strategic Timing Window': 'Окно стратегического времени',
  'The window is open and closing': 'Окно открыто и закрывается',
  '7 months — closes 2027-02-28': '7 месяцев — закрывается 28.02.2027',
  'Query maturity': 'Зрелость запросов',
  'Query maturity accelerating': 'Зрелость запросов ускоряется',
  'Demand maturation': 'Созревание спроса',
  'Shift velocity': 'Скорость сдвига',
  'Rising 8% quarter over quarter.': 'Рост на 8% квартал к кварталу.',
  'Moderate — 8% quarter-over-quarter': 'Умеренно — 8% квартал к кварталу',
  'Time to impact': 'Время до эффекта',
  Urgency: 'Срочность',
  Emerging: 'Формирующийся',
  'Timing, geography and distribution — the three conditions that decide whether a correct strategy executed today returns more than the same strategy executed in a year. A right decision at the wrong time is still a wrong decision.':
    'Время, география и дистрибуция — три условия, определяющие, принесёт ли верная стратегия, исполненная сегодня, больше, чем та же стратегия через год. Верное решение в неверный момент остаётся неверным решением.',
  'Category language is still forming, so authority built now compounds. Once engines settle on a stable answer set, displacing an incumbent recommendation costs materially more.':
    'Язык категории ещё формируется, поэтому выстроенная сейчас авторитетность накапливается. Как только движки остановятся на устойчивом наборе ответов, вытеснение закрепившейся рекомендации обойдётся существенно дороже.',
  'Whether category language is still fluid — because authority built while it is fluid becomes the default answer, and authority built after has to displace one.':
    'Остаётся ли язык категории подвижным: авторитетность, выстроенная в этот период, становится ответом по умолчанию, а выстроенная позже должна вытеснять существующий.',
  'The rate at which recommendation slots are being taken, which is what converts "sometime this year" into a dated decision.':
    'Скорость, с которой занимаются места в рекомендациях, — именно она превращает «когда-нибудь в этом году» в решение с датой.',
  'The market is emerging with roughly seven months of open window; competitive density is rising 8% per quarter.':
    'Рынок формируется, окно открыто примерно семь месяцев; конкурентная плотность растёт на 8% за квартал.',
  'Commit authority investment before the decision deadline, while displacement cost remains low.':
    'Зафиксируйте инвестиции в авторитетность до крайнего срока решения, пока стоимость вытеснения остаётся низкой.',

  /* --- Exposure and opportunity ------------------------------------------------ */
  'Directional commercial exposure': 'Направленная оценка коммерческого риска',
  'Commercial exposure': 'Коммерческий риск',
  'Revenue Exposure': 'Риск для выручки',
  'Opportunity and Revenue Intelligence': 'Интеллект возможностей и выручки',
  'Opportunity range': 'Диапазон возможности',
  'Opportunity Signal Map': 'Карта сигналов возможностей',
  'Estimated conversion': 'Оценочная конверсия',
  'Conversion assumptions': 'Допущения о конверсии',
  'Average deal value': 'Средняя стоимость сделки',
  'Deal value': 'Стоимость сделки',
  'Decision gap': 'Разрыв в решениях',
  Demand: 'Спрос',
  'Sensitivity analysis': 'Анализ чувствительности',
  'Priority ranking model': 'Модель ранжирования приоритетов',
  'What is it worth, and what happens next?':
    'Сколько это стоит и что происходит дальше?',
  'Demand × decision gap × estimated conversion × average deal value. A range, never a confirmed figure.':
    'Спрос × разрыв в решениях × оценочная конверсия × средняя стоимость сделки. Диапазон, но никогда не подтверждённая цифра.',
  'How crowded is the answer set becoming?':
    'Насколько плотным становится набор ответов?',

  /* --- Action ------------------------------------------------------------------ */
  'Action Intelligence': 'Интеллект действий',
  'Action Center': 'Центр действий',
  'Prioritised interventions': 'Приоритизированные вмешательства',
  'Prioritised intervention sequence':
    'Приоритизированная последовательность вмешательств',
  'Top intervention': 'Главное вмешательство',
  'Priority Queue': 'Очередь приоритетов',
  '30/60/90-Day Roadmap': 'Дорожная карта на 30/60/90 дней',
  '6 sequenced': '6 в последовательности',
  Effort: 'Трудозатраты',
  'Effort assessment': 'Оценка трудозатрат',
  'Measured change': 'Измеренное изменение',
  'Impact Tracker': 'Трекер эффекта',
  'Success metric': 'Метрика успеха',
  Prescription: 'Предписание',
  Confidence: 'Уверенность',
  Context: 'Контекст',
  Concerns: 'Опасения',
  Weak: 'Слабо',
  'Where diagnosis becomes a decision. Every gap is priced as a directional range, ranked against every other gap, assigned an owner and a deadline, and then measured after execution to confirm the signal actually moved.':
    'Здесь диагностика становится решением. Каждый разрыв оценивается как направленный диапазон, ранжируется относительно всех прочих, получает ответственного и срок, а затем измеряется после исполнения, чтобы подтвердить, что сигнал действительно сдвинулся.',
  'Diagnosis without sequence produces activity, not movement. Each intervention names an owner, a deadline, the signal it should move and how that movement will be verified.':
    'Диагностика без последовательности порождает деятельность, а не движение. Каждое вмешательство называет ответственного, срок, сигнал, который оно должно сдвинуть, и то, как это движение будет подтверждено.',
  'Every finding converted into an intervention with an owner, a deadline and a stated expected movement — or dropped, if it cannot be.':
    'Каждый вывод превращается во вмешательство с ответственным, сроком и заявленным ожидаемым сдвигом — или отбрасывается, если это невозможно.',
  'Ranking by exposure, confidence, effort and dependency, so effort does not go into work that cannot move until something else lands.':
    'Ранжирование по риску, уверенности, трудозатратам и зависимостям, чтобы усилия не уходили в работу, которая не сдвинется, пока не завершится что-то другое.',
  'A sequence built from what each intervention actually depends on, rather than from a calendar someone divided into thirds.':
    'Последовательность, построенная на том, от чего каждое вмешательство действительно зависит, а не на календаре, который кто-то поделил на трети.',
  'Each action carries its own success metric. Impact is verified by signal movement after execution, not by task completion.':
    'У каждого действия своя метрика успеха. Эффект подтверждается сдвигом сигнала после исполнения, а не завершением задачи.',
  'Six interventions are prioritised; the first two address authority evidence and supplier-comparison coverage.':
    'Приоритизированы шесть вмешательств; первые два касаются доказательств авторитетности и охвата сравнения поставщиков.',

  /* --- The decision journey ----------------------------------------------------- */
  'Decision Journey': 'Путь решения',
  Research: 'Исследование',
  'Solution Evaluation': 'Оценка решений',
  'Supplier Evaluation': 'Оценка поставщиков',
  'Purchase Decision': 'Решение о покупке',
  'Decision Hijack': 'Перехват решения',

  /* --- Market --------------------------------------------------------------------- */
  'Market Intelligence': 'Рыночный интеллект',
  'Global Market Intelligence': 'Глобальный рыночный интеллект',
  'Global Visibility Matrix': 'Матрица глобальной видимости',
  'Market readiness': 'Готовность рынка',
  'Market Readiness Gauge': 'Шкала готовности рынка',
  'Market Entry Readiness': 'Готовность к выходу на рынок',
  'Market Fit': 'Соответствие рынку',
  'Regional variation': 'Региональные различия',
  'Regional strength': 'Региональная сила',
  'Country definition': 'Определение страны',
  'Distribution Intelligence': 'Интеллект дистрибуции',
  'Scenario Simulator': 'Симулятор сценариев',
  Analytics: 'Аналитика',
  Visibility: 'Видимость',
  Ownership: 'Владение',

  /* --- Roles and model provenance -------------------------------------------------- */
  'VP Marketing': 'Вице-президент по маркетингу',
  'Head of Digital': 'Руководитель цифрового направления',
  'Head of Brand': 'Руководитель бренда',
  'Chief Executive': 'Генеральный директор',
  'Content Lead': 'Руководитель контента',
  'Demand Gen Manager': 'Менеджер по генерации спроса',
  'Customer-configured': 'Настраивается клиентом',
  'Derived from §13.1 chain': 'Выведено из цепочки §13.1',
}
