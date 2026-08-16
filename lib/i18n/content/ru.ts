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
     THE HOW-IT-WORKS PAGE.

     Almost all of it comes from the `loop` dictionary block. What lands here
     is the one inline label and the screenshot slots the four stages render —
     ProductScreen puts both `surface` and `caption` through t().
     ======================================================================= */

  'From the platform': 'Из платформы',

  /* --- PLAN · the diagnosis surfaces --------------------------------------- */
  'Deep Diagnosis — the full scan result across connected signals':
    'Глубокая диагностика — полный результат сканирования по связанным сигналам',
  'Deep Diagnosis across AI engines, search, competitors, market and digital presence. Anonymised demonstration data.':
    'Глубокая диагностика по движкам ИИ, поиску, конкурентам, рынку и цифровому присутствию. Анонимизированные демонстрационные данные.',
  'Competitive Intelligence — the comparison matrix':
    'Конкурентный интеллект — матрица сравнения',
  'Who receives the decision instead, and the evidence that puts them there. Anonymised demonstration data.':
    'Кто получает решение вместо вас и какие доказательства ставят его туда. Анонимизированные демонстрационные данные.',
  'AI Intelligence — per-engine recognition and recommendation':
    'Интеллект ИИ — распознавание и рекомендация по каждому движку',
  'What each AI engine understands, and when it recommends. Anonymised demonstration data.':
    'Что понимает каждый движок ИИ и когда он рекомендует. Анонимизированные демонстрационные данные.',
  'Google vs AI Visibility — the gap matrix':
    'Видимость: Google против ИИ — матрица разрывов',
  'Two discovery surfaces, measured separately. Anonymised demonstration data.':
    'Две поверхности обнаружения, измеряемые раздельно. Анонимизированные демонстрационные данные.',
  'Market Intelligence — category and demand view':
    'Рыночный интеллект — вид по категории и спросу',
  'What is changing in the market, and which of it is addressable. Anonymised demonstration data.':
    'Что меняется на рынке и с чем из этого можно работать. Анонимизированные демонстрационные данные.',
  'Narrative Intelligence — narrative ownership and movement':
    'Нарративный интеллект — владение нарративом и его движение',
  'Which account of the category is circulating, and whose language it uses. Anonymised demonstration data.':
    'Какая версия категории циркулирует и чьим языком она изложена. Анонимизированные демонстрационные данные.',
  'Trust & Authority — independent-source verification view':
    'Доверие и авторитетность — вид проверки по независимым источникам',
  'What a system can cite when it has to justify a recommendation. Anonymised demonstration data.':
    'На что система может сослаться, когда ей нужно обосновать рекомендацию. Анонимизированные демонстрационные данные.',

  /* --- DO · the execution surfaces ----------------------------------------- */
  'Strategy — objectives translated into targeted signals':
    'Стратегия — цели, переведённые в целевые сигналы',
  'Objectives in, prioritised strategy out. Each objective bound to a signal expected to move. Anonymised demonstration data.':
    'На входе цели, на выходе приоритизированная стратегия. Каждая цель привязана к сигналу, который должен сдвинуться. Анонимизированные демонстрационные данные.',
  'Content & media generation — output bound to identified gaps':
    'Создание контента и медиа — выпуск, привязанный к выявленным разрывам',
  'Each asset traced back to the gap it was created to close. Anonymised demonstration data.':
    'Каждый материал прослеживается до разрыва, ради закрытия которого он создан. Анонимизированные демонстрационные данные.',
  'Execution calendar — sequenced distribution':
    'Календарь исполнения — распределение по последовательности',
  'Sequence and timing, derived from the strategy rather than from a posting cadence. Anonymised demonstration data.':
    'Последовательность и сроки, выведенные из стратегии, а не из графика публикаций. Анонимизированные демонстрационные данные.',
  'Distribution — connected digital assets and publishing state':
    'Дистрибуция — подключённые цифровые активы и статус публикации',
  'Where each asset was published, across connected properties. Anonymised demonstration data.':
    'Где опубликован каждый материал, по всем подключённым площадкам. Анонимизированные демонстрационные данные.',

  /* --- CHECK and ACT ------------------------------------------------------- */
  'Measurement — the before → action → after comparison table':
    'Измерение — таблица сравнения «до → действие → после»',
  'Not what was published. What changed. Anonymised demonstration data.':
    'Не что опубликовано. Что изменилось. Анонимизированные демонстрационные данные.',
  'Learning — measured outcome feeding the next recommendation':
    'Обучение — измеренный результат, питающий следующую рекомендацию',
  'The previous recommendation, what it moved, and the corrected recommendation that follows. Anonymised demonstration data.':
    'Предыдущая рекомендация, что она сдвинула, и скорректированная рекомендация, которая из этого следует. Анонимизированные демонстрационные данные.',

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
  'Competitor Decision Intelligence': 'Интеллект решений конкурентов',
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
  'Narrative Intelligence': 'Нарративный интеллект',
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
  /* A product name. Recorded rather than translated, so its absence from the
     rest of this file reads as a decision and not an oversight. */
  'Google Ads': 'Google Ads',

  /* ==========================================================================
     ELECTION INTELLIGENCE
     The race, the candidates and the county are invented. Unlike he and ar,
     which keep them Latin, Russian transliterates personal and place names as
     a matter of course — leaving a Latin run inside Cyrillic prose would read
     as a quotation, not as a name.
     ====================================================================== */
  'Demonstration subject': 'Объект демонстрации',
  'Entirely fictional. No real person, party or race.':
    'Полностью вымышленный. Ни реального человека, ни партии, ни гонки.',
  Race: 'Гонка',
  'County Commission': 'Совет округа',
  'Riverbend County — District 4': 'Округ Ривербенд — участок 4',
  Candidate: 'Кандидат',
  Opponent: 'Оппонент',
  'A. Marchetti': 'А. Маркетти',
  'D. Okonkwo': 'Д. Оконкво',
  'Election War Room — the live operational view':
    'Штаб избирательной кампании — оперативная картина в реальном времени',
  'The Election War Room. Fictional race, demonstration data — no real candidate, party or campaign.':
    'Штаб избирательной кампании. Вымышленная гонка, демонстрационные данные — ни реального кандидата, ни партии, ни кампании.',
  'Candidate / party dashboard — the standing position':
    'Панель кандидата и партии — текущее положение',
  'Candidate and party position. Fictional race, demonstration data — no real candidate, party or campaign.':
    'Положение кандидата и партии. Вымышленная гонка, демонстрационные данные — ни реального кандидата, ни партии, ни кампании.',
  'Election narrative intelligence — positive vs negative narratives':
    'Интеллект предвыборных нарративов — положительные против отрицательных',
  'Which narratives are strengthening the position and which are damaging it. Fictional race, demonstration data.':
    'Какие нарративы укрепляют позицию, а какие вредят ей. Вымышленная гонка, демонстрационные данные.',
  'Positive vs negative narratives — the polarity split':
    'Положительные против отрицательных — разделение полярности',
  'Positive against negative, by reach and by direction of travel. Fictional race, demonstration data.':
    'Положительные против отрицательных, по охвату и по направлению движения. Вымышленная гонка, демонстрационные данные.',
  'Audience / segment movement — who is moving toward and away':
    'Движение аудиторий и сегментов — кто приближается, а кто отдаляется',
  'Which audiences are moving closer and which are moving away. Fictional race, demonstration data.':
    'Какие аудитории приближаются, а какие отдаляются. Вымышленная гонка, демонстрационные данные.',
  'Opponent intelligence — competing narratives and ownership':
    'Интеллект оппонента — конкурирующие нарративы и владение ими',
  'What the opposing account is, and which issues it owns. Fictional race, demonstration data.':
    'В чём состоит версия противоположной стороны и какими темами она владеет. Вымышленная гонка, демонстрационные данные.',
  'Influencers and sources shaping the narrative':
    'Лидеры мнений и источники, формирующие нарратив',
  'Who is strengthening the position and who is damaging it. Fictional race, demonstration data.':
    'Кто укрепляет позицию, а кто вредит ей. Вымышленная гонка, демонстрационные данные.',
  'AI + Google election intelligence — per-engine narrative leads':
    'Предвыборный интеллект ИИ и Google — ведущий нарратив по каждому движку',
  'What each AI engine and Google surface leads with. Fictional race, demonstration data.':
    'С чего начинает каждый движок ИИ и каждая поверхность Google. Вымышленная гонка, демонстрационные данные.',
  'Multilingual intelligence — narrative gaps between languages':
    'Многоязычный интеллект — расхождения нарратива между языками',
  'Where the account of a candidate differs by language. Fictional race, demonstration data.':
    'Где версия о кандидате различается в зависимости от языка. Вымышленная гонка, демонстрационные данные.',
  'Risks and opportunities — emerging threats and open positions':
    'Риски и возможности — возникающие угрозы и свободные позиции',
  'Emerging threats and unclaimed positions, ranked. Fictional race, demonstration data.':
    'Возникающие угрозы и незанятые позиции, по убыванию значимости. Вымышленная гонка, демонстрационные данные.',
  'Recommended actions — the campaign action plan':
    'Рекомендуемые действия — план работы кампании',
  'What to do now, who owns it, and how the movement will be measured. Fictional race, demonstration data.':
    'Что делать сейчас, кто за это отвечает и как будет измерено движение. Вымышленная гонка, демонстрационные данные.',
  'Trend over time — narrative movement across the cycle':
    'Динамика во времени — движение нарратива на протяжении цикла',
  'How the position has moved across the cycle. Fictional race, demonstration data.':
    'Как позиция менялась на протяжении цикла. Вымышленная гонка, демонстрационные данные.',

  /* ==========================================================================
     INTELLIGENCE ENGINES
     ====================================================================== */
  'Intelligence engines': 'Движки интеллекта',
  'Each engine answers a board-level business question, produces a connected intelligence readout and routes the user into action. Not a feature list — a set of questions the business needs answered.':
    'Каждый движок отвечает на бизнес-вопрос уровня совета директоров, выдаёт связную интеллект-сводку и выводит пользователя к действию. Это не перечень функций, а набор вопросов, на которые бизнесу нужны ответы.',
  'Built in this environment · 4 of 12': 'Построено в этой среде · 4 из 12',
  'Four engines, built to full depth': 'Четыре движка, проработанные на полную глубину',
  'Each carries a real seeded outcome, its evidence, its commercial consequence and the action it prescribes. They chain into one another — together they form the causal argument rather than four samples of it.':
    'Каждый несёт реальный заложенный результат, его доказательства, коммерческое следствие и предписываемое действие. Они сцепляются друг с другом — вместе они образуют причинную аргументацию, а не четыре её образца.',
  'The full operating system': 'Полная операционная система',
  'Eight further engines available in the platform':
    'Ещё восемь движков доступны в платформе',
  'These are part of the operating system but are not built in this demonstration environment. Their business questions are listed so the shape of the full system is visible.':
    'Они входят в операционную систему, но не построены в этой демонстрационной среде. Их бизнес-вопросы перечислены, чтобы был виден контур всей системы.',
  'Available in platform': 'Доступно в платформе',
  'Is the business present when customers ask AI whom to choose?':
    'Присутствует ли бизнес, когда клиенты спрашивают ИИ, кого выбрать?',
  'Which gap is commercially meaningful enough to fix first?':
    'Какой разрыв коммерчески значим настолько, чтобы закрыть его первым?',
  'When does paid search become structurally inefficient?':
    'Когда платный поиск становится структурно неэффективным?',
  'Is the business visible but still unsafe to recommend?':
    'Виден ли бизнес, но рекомендовать его по-прежнему небезопасно?',
  'When the market explains the category, whose language does it use?':
    'Когда рынок объясняет категорию, чьим языком он пользуется?',
  'Is the market ready, and how long is the window open?':
    'Готов ли рынок и как долго открыто окно?',
  'How does the business change across countries, languages and markets?':
    'Как бизнес меняется от страны к стране, от языка к языку, от рынка к рынку?',
  'Does the route to market strengthen the brand or transfer power to intermediaries?':
    'Укрепляет ли канал выхода на рынок бренд или передаёт власть посредникам?',
  'See plans': 'Посмотреть тарифы',

  /* ==========================================================================
     MARKETPLACE
     ====================================================================== */
  'Seven categories of decision intelligence, each holding the models that answer one kind of commercial question. Most of them measure things a business has never been able to see — not because the questions are exotic, but because nothing existed to answer them.':
    'Семь категорий интеллекта решений, в каждой — модели, отвечающие на один тип коммерческого вопроса. Большинство из них измеряет то, что бизнес никогда не мог увидеть, — не потому что вопросы экзотические, а потому что не существовало ничего, что на них отвечало бы.',
  'Intelligence categories': 'Категории интеллекта',
  'Intelligence modules': 'Модули интеллекта',
  'Engines beneath them': 'Движки под ними',
  'of these modules run live in this environment against a real reconstructed business. The rest are available in the platform.':
    'из этих модулей работают в этой среде вживую на реально реконструированном бизнесе. Остальные доступны в платформе.',
  'Start with the question you actually have.':
    'Начните с того вопроса, который у вас действительно есть.',
  'Each category opens into the modules underneath it. Every module answers one business question and returns evidence, an analysis and a recommendation — never a figure on its own.':
    'Каждая категория раскрывается в модули под ней. Каждый модуль отвечает на один бизнес-вопрос и возвращает доказательства, анализ и рекомендацию — но никогда просто цифру.',
  'What you are buying': 'Что вы покупаете',
  'The document is the output. The intelligence is the product.':
    'Документ — это результат. Продукт — это интеллект.',
  'How the models work': 'Как работают модели',
  'Every claim carries the observation behind it — which engine, which question, which date. A conclusion you cannot audit is an opinion.':
    'За каждым утверждением стоит наблюдение — какой движок, какой вопрос, какая дата. Вывод, который нельзя проверить, — это мнение.',
  'What the evidence means commercially, what is causing it, and how confident the model can honestly be. Limits are stated, never implied.':
    'Что доказательства означают коммерчески, что их вызывает и насколько уверенной модель может быть честно. Ограничения указываются прямо, а не подразумеваются.',
  'What to do, who owns it, by when, and what signal should move as a result. Verified afterwards against what actually moved.':
    'Что делать, кто за это отвечает, к какому сроку и какой сигнал должен в результате сдвинуться. Затем это сверяется с тем, что сдвинулось на самом деле.',
  'Whatever the business question, there is already intelligence built for it.':
    'Каким бы ни был бизнес-вопрос, интеллект под него уже построен.',
  'See a module run live': 'Посмотреть модуль в работе',
  'Monitor continuously instead': 'Либо вести непрерывный мониторинг',
  '7 live in demo': '7 работают в демо',
  '4 live in demo': '4 работают в демо',
  Analysis: 'Анализ',
  Recommendation: 'Рекомендация',
  modules: 'модулей',
  Explore: 'Изучить',
  '+ 1 more': '+ ещё 1',
  '+ 2 more': '+ ещё 2',
  '+ 4 more': '+ ещё 4',
  '+ 6 more': '+ ещё 6',
  '+ {n} more': '+ ещё {n}',
  '{n} live in demo': '{n} работают в демо',
  '<b>{n}</b> of these modules run live in this environment against a real reconstructed business. The rest are available in the platform.':
    '<b>{n}</b> из этих модулей работают в этой среде вживую на реально реконструированном бизнесе. Остальные доступны в платформе.',
  'Built in this environment · {n} of {total}': 'Построено в этой среде · {n} из {total}',

  /* ==========================================================================
     LEGAL
     `localStorage` stays Latin — it is the storage API by name, and the page
     has to name it precisely.
     ====================================================================== */
  Legal: 'Правовая информация',
  'Legal and data handling': 'Правовая информация и обращение с данными',
  'Legal and data handling | GeoRepute':
    'Правовая информация и обращение с данными | GeoRepute',
  'Privacy, terms, data processing and security posture for the GeoRepute demonstration environment.':
    'Конфиденциальность, условия, обработка данных и состояние безопасности демонстрационной среды GeoRepute.',
  'What this environment does and does not do with data.':
    'Что эта среда делает с данными и чего не делает.',
  'This is a demonstration build. Rather than reproduce boilerplate that would not apply to it, each section below states the actual position.':
    'Это демонстрационная сборка. Вместо того чтобы воспроизводить шаблонные формулировки, которые к ней неприменимы, каждый раздел ниже излагает фактическое положение дел.',
  Privacy: 'Конфиденциальность',
  'This environment collects nothing. There is no analytics script, no tag manager, no session recording and no third-party tracker on any page.':
    'Эта среда не собирает ничего. Ни на одной странице нет скрипта аналитики, менеджера тегов, записи сессий или стороннего трекера.',
  'The only data stored about you is your theme preference and any demonstration purchases, both held in your browser’s localStorage and readable only by this site. Nothing is transmitted anywhere. Clearing site data removes all of it, and the purchase-confirmation screen offers a reset control.':
    'Единственные хранимые о вас данные — выбранная тема и демонстрационные покупки; и то и другое находится в localStorage вашего браузера и читается только этим сайтом. Никуда ничего не передаётся. Очистка данных сайта удаляет всё это, а на экране подтверждения покупки есть кнопка сброса.',
  'Terms of service': 'Условия использования',
  'No commercial terms apply. Nothing on this site constitutes an offer, and no contract can be formed through it.':
    'Никакие коммерческие условия не применяются. Ничто на этом сайте не является офертой, и через него нельзя заключить договор.',
  'Pricing shown throughout is placeholder and clearly marked as such on the pricing page. The checkout collects no payment details and processes no charge.':
    'Указанные цены являются условными и явно помечены как таковые на странице тарифов. Оформление заказа не собирает платёжных данных и не проводит списаний.',
  'Data processing': 'Обработка данных',
  'Northwind Supply is a fictional organisation. Every figure attributed to it is seeded, internally consistent and derived from a published set of anchor facts. No real company’s data appears anywhere in this environment.':
    'Northwind Supply — вымышленная организация. Каждая приписанная ей цифра заложена заранее, внутренне непротиворечива и выведена из опубликованного набора опорных фактов. Данные реальных компаний нигде в этой среде не встречаются.',
  'Competitor names, domains and citation counts are invented. Any resemblance to an operating business is coincidental and unintended.':
    'Названия конкурентов, домены и количество цитирований вымышлены. Любое сходство с действующим бизнесом случайно и непреднамеренно.',
  'AI engines are referenced by their public product names for accuracy of description. No affiliation, endorsement or partnership is claimed or implied.':
    'Движки ИИ упоминаются под их публичными продуктовыми названиями ради точности описания. Ни аффилированность, ни одобрение, ни партнёрство не заявляются и не подразумеваются.',
  Security: 'Безопасность',
  'There is no authentication, no user account and no server-side session. The sign-in screen requests no password because none is checked — inviting a real credential into a demonstration would be a hazard, not a convenience.':
    'Здесь нет ни аутентификации, ни учётной записи, ни серверной сессии. Экран входа не запрашивает пароль, потому что никакой пароль не проверяется: приглашать настоящие учётные данные в демонстрацию было бы опасностью, а не удобством.',
  'No external network requests are made at runtime. Fonts are self-hosted, all visuals are generated in CSS or SVG, and the content security posture assumes no third-party origin is trusted.':
    'Во время работы не выполняется никаких внешних сетевых запросов. Шрифты размещены локально, вся графика создаётся средствами CSS или SVG, а политика безопасности контента исходит из того, что ни один сторонний источник не является доверенным.',
  'Before this platform is operated commercially, these sections must be replaced with reviewed policies covering the real data flows, retention periods, sub-processors and jurisdictions involved.':
    'Прежде чем эта платформа будет использоваться коммерчески, эти разделы должны быть заменены выверенными политиками, охватывающими реальные потоки данных, сроки хранения, субобработчиков и применимые юрисдикции.',
  'Return home': 'Вернуться на главную',

  /* ==========================================================================
     SIGN IN
     ====================================================================== */
  'Sign In': 'Вход',
  'Sign In | GeoRepute': 'Вход | GeoRepute',
  Home: 'Главная',
  'Enter the demonstration workspace': 'Войти в демонстрационное рабочее пространство',
  'This environment has no authentication. Every visitor sees the same seeded organisation, Northwind Supply, so that every figure stays verifiable against the published methodology.':
    'В этой среде нет аутентификации. Каждый посетитель видит одну и ту же заложенную организацию, Northwind Supply, чтобы любую цифру можно было проверить по опубликованной методологии.',
  Workspace: 'Рабочее пространство',
  'northwindsupply.com · US Midwest': 'northwindsupply.com · Средний Запад США',
  'Continue to Mission Control': 'Перейти в центр управления',
  'No password is requested because none is checked. Real authentication drops in behind the same route without changing this screen’s place in the flow.':
    'Пароль не запрашивается, потому что он не проверяется. Настоящая аутентификация встраивается за тем же маршрутом, не меняя места этого экрана в потоке.',

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
  'Public narrative intelligence': 'Нарративный интеллект публичной сферы',
  'Public Narrative Intelligence | GeoRepute': 'Нарративный интеллект публичной сферы | GeoRepute',
  'Public Narrative Intelligence': 'Нарративный интеллект публичной сферы',
  'What story is the market telling about us?': 'Какую историю рынок рассказывает о нас?',
  'Not how often the business is mentioned. Which accounts of it are active, who owns each one, and which of them decide whether it gets chosen.':
    'Не как часто упоминается бизнес. А какие версии о нём активны, кто владеет каждой из них и какие из них решают, выберут его или нет.',
  'Election mode': 'Предвыборный режим',
  'Political intelligence': 'Политический интеллект',
  Health: 'Состояние',
  'Narrative health': 'Состояние нарратива',
  'Overall public sentiment': 'Общая тональность в публичном поле',
  'A weighted read of how much active conversation helps against how much hurts.':
    'Взвешенная оценка того, какая доля активного разговора помогает, а какая вредит.',
  'Narrative momentum': 'Импульс нарратива',
  'Narrative stability': 'Устойчивость нарратива',
  'Narrative balance': 'Баланс нарративов',
  'Positive narrative strength': 'Сила положительного нарратива',
  'Negative narrative strength': 'Сила отрицательного нарратива',
  'Neutral narrative': 'Нейтральный нарратив',
  'The balance between stories that help and stories that hurt, weighted by how much of the conversation each reaches.':
    'Баланс между историями, которые помогают, и историями, которые вредят, взвешенный по доле разговора, до которой доходит каждая.',
  '20% of active category conversation carries a story that favours this business — and both of those narratives are currently unclaimed by anyone.':
    '20% активного разговора в категории несут историю, играющую в пользу этого бизнеса, — и обоими этими нарративами сейчас никто не владеет.',
  '74% carries a story that works against it, most of it a competitor’s evaluation framing rather than criticism of the business itself.':
    '74% несут историю, работающую против него, и по большей части это оценочная рамка конкурента, а не критика самого бизнеса.',
  '6% is category-level conversation attached to no supplier. Neutral is not safe — it is unowned ground with no defender.':
    '6% — это разговор на уровне категории, не привязанный ни к одному поставщику. Нейтральное не значит безопасное: это ничья территория, у которой нет защитника.',
  'Sentiment is not hostility. Nothing here is criticism of the business — the adverse weight comes almost entirely from stories written by competitors in which this business does not appear.':
    'Тональность — это не враждебность. Здесь нет критики бизнеса: отрицательный вес почти целиком складывается из историй, написанных конкурентами, в которых этот бизнес вообще не фигурирует.',
  '3 adverse narratives are gaining ground against 1 favourable one. Direction matters more than the current balance, because it is what the position will be in two quarters.':
    '3 неблагоприятных нарратива набирают силу против 1 благоприятного. Направление важнее текущего баланса, потому что именно оно и есть позиция через два квартала.',
  '4 of 8 active narratives are still forming or growing. The account of this category is not yet fixed, which is what makes intervention cheap now and expensive later.':
    '4 из 8 активных нарративов ещё формируются или растут. Версия об этой категории пока не закрепилась — именно поэтому вмешательство сейчас дёшево, а позже дорого.',
  Landscape: 'Ландшафт',
  'Every active narrative in this category': 'Все активные нарративы в этой категории',
  'Sorted by reach. The owner column is the one that matters — a favourable story nobody owns is an asset waiting to be claimed.':
    'Отсортировано по охвату. Важна колонка владельца: благоприятная история, которой никто не владеет, — это актив, ждущий, чтобы его заняли.',
  'Who owns the story': 'Кто владеет историей',
  'Share of active conversation, weighted by reach. Unclaimed is not neutral ground — it is ground with no defender.':
    'Доля активного разговора, взвешенная по охвату. Незанятое — не нейтральная территория, а территория без защитника.',
  Business: 'Бизнес',
  Competitors: 'Конкуренты',
  Shared: 'Общее',
  Unclaimed: 'Не занято',
  'Business: 4%': 'Бизнес: 4%',
  'Competitors: 56%': 'Конкуренты: 56%',
  'Shared: 20%': 'Общее: 20%',
  'Unclaimed: 20%': 'Не занято: 20%',
  'Category language owned': 'Доля языка категории во владении',
  'The share of the vocabulary engines use to define this category that belongs to this business. Whoever holds this sets the criteria every comparison is scored against.':
    'Доля словаря, которым движки определяют эту категорию, принадлежащая этому бизнесу. Тот, кто им владеет, задаёт критерии, по которым оценивается каждое сравнение.',
  'The split above measures this specific narrative inventory. This figure measures the category’s language as a whole, and is the same one Mission Control publishes.':
    'Разбивка выше измеряет именно этот набор нарративов. Эта же цифра измеряет язык категории в целом и совпадает с той, которую публикует центр управления.',
  'The business holds': 'Бизнесу принадлежит',
  'The business holds <b>{pct}%</b>, and every point of it is the hardware-retailer error rather than anything it chose to say. Ownership counts the stories attached to a name; it does not ask whether they help.':
    'Бизнесу принадлежит <b>{pct}%</b>, и каждый процент из них — это ошибка с розничным магазином инструментов, а не то, что бизнес выбрал сказать. Владение считает истории, привязанные к имени; оно не спрашивает, помогают ли они.',
  'Weighted by reach rather than counted, so a story reaching a third of the category is not equal to one reaching a twentieth.':
    'Взвешено по охвату, а не подсчитано, поэтому история, доходящая до трети категории, не равна той, что доходит до двадцатой её части.',
  Reach: 'Охват',
  'Owned by': 'Владелец',
  Influence: 'Влияние',
  Competition: 'Конкуренция',
  Opportunity: 'Возможность',
  Strength: 'Сила',
  Weakness: 'Слабость',
  Risk: 'Риск',
  Media: 'СМИ',
  Questions: 'Вопросы',
  'If ignored': 'Если проигнорировать',
  'Overlap with us': 'Пересечение с нами',
  Unsettled: 'Не закрепилось',
  '— absent': '— отсутствует',
  '{level} severity': 'Серьёзность: {level}',
  '+ {n} more tracked': '+ ещё {n} отслеживается',
  '31 % share': 'доля 31 %',
  '18 % share': 'доля 18 %',
  '11 % share': 'доля 11 %',
  '7 % share': 'доля 7 %',
  '{pct}% share': 'доля {pct}%',
  Growing: 'Растёт',
  Steady: 'Стабилен',
  Declining: 'Слабеет',
  Contested: 'Оспаривается',
  Neutral: 'Нейтральный',
  Favourable: 'Благоприятный',
  Adverse: 'Неблагоприятный',
  'Favourable · emerging': 'Благоприятный · зарождается',
  'Favourable · steady': 'Благоприятный · стабилен',
  'Adverse · emerging': 'Неблагоприятный · зарождается',
  'Adverse · growing': 'Неблагоприятный · растёт',
  'Adverse · steady': 'Неблагоприятный · стабилен',
  'Adverse · declining': 'Неблагоприятный · слабеет',
  'Neutral · steady': 'Нейтральный · стабилен',

  /* --- Competitor narratives ------------------------------------------------------- */
  'The story each competitor is telling': 'Какую историю рассказывает каждый конкурент',
  'Every position has a weakness built into it. A narrative strong enough to dominate is usually narrow enough to outflank.':
    'В любую позицию встроена слабость. Нарратив, достаточно сильный, чтобы доминировать, обычно достаточно узок, чтобы его обойти с фланга.',
  'The safe national choice with published comparisons.':
    'Безопасный общенациональный выбор с опубликованными сравнениями.',
  'The technical authority on specification.': 'Технический авторитет по спецификациям.',
  'The educator that reaches buyers first.':
    'Просветитель, который добирается до покупателей первым.',
  'The procurement-checklist incumbent.':
    'Тот, кто уже прописан в закупочных чек-листах.',
  'Owns the evaluation criteria itself. Engines cite its comparison library when explaining how to choose a supplier at all.':
    'Владеет самими критериями оценки. Движки ссылаются на его библиотеку сравнений, когда вообще объясняют, как выбирать поставщика.',
  'Its case rests on breadth and fill rate. It has no response prepared on response time or regional service depth.':
    'Его аргументация держится на широте ассортимента и уровне выполнения заказов. У него нет готового ответа по времени отклика и глубине регионального сервиса.',
  'Competes directly on supplier-evaluation questions, where it is named first in four of seven.':
    'Прямо конкурирует в вопросах оценки поставщиков, где его называют первым в четырёх из семи.',
  'Its vocabulary can be adopted and extended rather than fought. Speaking its language while adding availability outflanks it.':
    'Его словарь можно перенять и расширить, а не воевать с ним. Говорить на его языке, добавив доступность, — значит обойти его с фланга.',
  'Specification depth does not answer availability. It is largely absent from questions about delivery and continuity.':
    'Глубина спецификаций не отвечает на вопрос о доступности. В вопросах о поставке и непрерывности он почти не представлен.',
  'Owns solution-evaluation questions upstream of where this business competes.':
    'Владеет вопросами оценки решений на этапе выше того, где конкурирует этот бизнес.',
  'Its own framing concedes that speed is a separate axis. A published response-time standard splits the criterion it defined.':
    'Его собственная рамка признаёт, что скорость — отдельная ось. Опубликованный стандарт времени отклика расщепляет критерий, который он же и задал.',
  'Enters the decision at research, before evaluation criteria exist, and shapes them by arriving early.':
    'Входит в решение на стадии изучения, до того как появляются критерии оценки, и формирует их тем, что приходит раньше.',
  'Almost no presence earlier in the journey. Its position is administrative rather than argued.':
    'Почти не присутствует на более ранних этапах пути. Его позиция административная, а не аргументированная.',
  'Owns early-stage questions this business is also absent from, but does not convert them.':
    'Владеет вопросами ранней стадии, где этот бизнес тоже отсутствует, но не конвертирует их.',
  'Thin at the point of purchase. Rarely named when a buyer asks whom to actually choose.':
    'Слаб в точке покупки. Его редко называют, когда покупатель спрашивает, кого выбрать на самом деле.',
  'Research-stage presence is uncontested at the point where education becomes a shortlist.':
    'Присутствие на стадии изучения никем не оспаривается ровно там, где просвещение превращается в короткий список.',
  'Named on procurement documentation that engines cite at the moment of purchase.':
    'Назван в закупочной документации, на которую движки ссылаются в момент покупки.',
  'Competes only at purchase decision, where this business also has no coverage.':
    'Конкурирует только на решении о покупке, где у этого бизнеса тоже нет покрытия.',
  'A checklist position is winnable through documentation rather than through reputation.':
    'Позицию в чек-листе можно выиграть документацией, а не репутацией.',

  /* --- Media narratives ------------------------------------------------------------ */
  'What publications are actually writing about': 'О чём издания пишут на самом деле',
  'The business appears in none of four active category stories. Two of them — provenance and tariff continuity — have no supplier voice at all.':
    'Бизнес не фигурирует ни в одной из четырёх активных историй категории. В двух из них — о происхождении товара и о непрерывности поставок при пошлинах — голоса поставщика нет вообще.',
  'The business appears in none of the four active category stories. Media narrative is currently being written entirely by others.':
    'Бизнес не фигурирует ни в одной из четырёх активных историй категории. Медийный нарратив сейчас целиком пишут другие.',
  'MRO supplier consolidation across Midwest manufacturing':
    'Консолидация поставщиков MRO на производствах Среднего Запада',
  'Counterfeit fasteners in industrial supply chains':
    'Контрафактный крепёж в промышленных цепочках поставок',
  'Verification and provenance in fastener sourcing':
    'Проверка и происхождение при закупке крепежа',
  'Fastener supply continuity after tariff changes':
    'Непрерывность поставок крепежа после изменения пошлин',
  'Supply continuity under tariff volatility':
    'Непрерывность поставок при волатильности пошлин',
  'Vendor-managed inventory adoption in mid-market plants':
    'Внедрение управляемых поставщиком запасов на предприятиях среднего сегмента',
  'Vendor-managed inventory for mid-market plants':
    'Управляемые поставщиком запасы для предприятий среднего сегмента',
  'The most active category story. This business is not quoted in any of the eleven pieces published this quarter.':
    'Самая активная история категории. Этот бизнес не процитирован ни в одном из одиннадцати материалов, вышедших в этом квартале.',
  'A category-level trust story. Suppliers who comment become the trusted ones; those who stay silent are grouped with the problem.':
    'История о доверии на уровне категории. Поставщики, которые комментируют, становятся теми, кому доверяют; тех, кто молчит, относят к самой проблеме.',
  'An emerging story where regional inventory depth is the natural expert angle, and no regional distributor has been quoted yet.':
    'Зарождающаяся история, где глубина региональных запасов — естественная экспертная позиция, и ни один региональный дистрибьютор ещё не процитирован.',
  'A service already operated but never publicly associated with the business. One competitor is quoted in three of four pieces on it.':
    'Услуга, которая уже оказывается, но публично никогда не связывалась с бизнесом. Один конкурент процитирован в трёх материалах из четырёх по этой теме.',
  'A competitor is quoted in three of four pieces. The topic maps directly onto a service this business already operates.':
    'Конкурент процитирован в трёх материалах из четырёх. Тема напрямую соответствует услуге, которую этот бизнес уже оказывает.',
  'Regional inventory depth is the natural expert position on a story publications are actively looking for sources on.':
    'Глубина региональных запасов — естественная экспертная позиция в истории, по которой издания активно ищут источники.',
  'An active media story with no supplier voice attached. Commenting converts a category-level trust concern into a reason to choose a specific supplier.':
    'Активная медийная история, к которой не привязан голос ни одного поставщика. Комментарий превращает вопрос доверия на уровне категории в причину выбрать конкретного поставщика.',
  'No quote, contribution or citation in the four topics publications are currently covering.':
    'Ни цитаты, ни комментария, ни ссылки в четырёх темах, которые издания освещают сейчас.',
  'Silence is read as absence of expertise. The category continues to be explained by the suppliers willing to explain it.':
    'Молчание читается как отсутствие экспертизы. Категорию продолжают объяснять те поставщики, которые готовы её объяснять.',

  /* --- Question landscape ---------------------------------------------------------- */
  'What the market actually wants to know': 'Что рынок хочет знать на самом деле',
  'The real question corpus, partitioned by what a buyer is trying to decide when they ask it.':
    'Реальный корпус вопросов, разбитый по тому, что покупатель пытается решить, когда его задаёт.',
  'Most common questions': 'Самые частые вопросы',
  'Public questions': 'Публичные вопросы',
  'AI buying questions': 'Закупочные вопросы к ИИ',
  'Recommendation questions': 'Вопросы о рекомендации',
  'Comparison questions': 'Вопросы сравнения',
  'Purchase questions': 'Вопросы покупки',
  'Concerns and objections': 'Сомнения и возражения',
  'A buyer asking directly whom to choose. The highest-value question class in the category, and the one that assigns the order.':
    'Покупатель прямо спрашивает, кого выбрать. Самый ценный класс вопросов в категории — тот, который и распределяет заказ.',
  'A buyer weighing approaches rather than vendors. Whoever frames the comparison sets the criteria the vendor choice will use.':
    'Покупатель взвешивает подходы, а не поставщиков. Тот, кто задаёт рамку сравнения, задаёт и критерии, по которым будет выбран поставщик.',
  'What buyers ask before they have a supplier in mind. Presence here shapes the criteria everything later is judged against.':
    'Что покупатели спрашивают до того, как у них появляется поставщик на примете. Присутствие здесь формирует критерии, по которым оценивается всё последующее.',
  'A buyer who has already chosen. Presence here converts; it does not win anything that was not already won upstream.':
    'Покупатель, который уже выбрал. Присутствие здесь конвертирует, но не выигрывает ничего, что не было выиграно раньше.',
  'The risks buyers raise before committing. Answering these publicly is how a supplier becomes the safe choice rather than the cheap one.':
    'Риски, которые покупатели поднимают перед тем, как взять обязательства. Публичные ответы на них — то, как поставщик становится безопасным выбором, а не дешёвым.',

  /* --- Opportunities and risks ----------------------------------------------------- */
  'Stories nobody owns': 'Истории, которыми никто не владеет',
  'Ranked by influence against competition. The best of these are high influence and uncontested, which is the rarest combination in any category.':
    'Отранжировано по влиянию относительно конкуренции. Лучшие из них — с высоким влиянием и без соперников, а это самое редкое сочетание в любой категории.',
  'The single narrative that most favours this business, and nobody owns it. Same-day regional delivery is a genuine capability that no public source currently attaches to this name.':
    'Единственный нарратив, наиболее выгодный этому бизнесу, — и им никто не владеет. Региональная доставка в день заказа — реальная возможность, которую сейчас ни один публичный источник не связывает с этим именем.',
  'No competitor has claimed it, engines have no vocabulary for it, and it is the capability this business actually leads on. The single highest-return narrative available.':
    'Ни один конкурент его не занял, у движков нет для него словаря, и это именно та возможность, в которой этот бизнес действительно лидирует. Самый доходный из доступных нарративов.',
  'Directly counters the consolidation narrative that currently favours national distributors, and reframes regional scale as risk management rather than as a limitation.':
    'Напрямую противостоит нарративу консолидации, который сейчас выгоден общенациональным дистрибьюторам, и переосмысляет региональный масштаб как управление рисками, а не как ограничение.',
  'Directly contradicts the consolidation narrative and favours a strong secondary supplier. Neither this business nor any competitor has claimed it.':
    'Прямо противоречит нарративу консолидации и выгоден сильному второму поставщику. Его не занял ни этот бизнес, ни кто-либо из конкурентов.',
  'Consolidation reaches 14% of conversation and favours national distributors. The counter-narrative reaches 11% and is owned by nobody.':
    'Консолидация доходит до 14% разговора и выгодна общенациональным дистрибьюторам. Контрнарратив доходит до 11%, и им никто не владеет.',
  'Threats before they become the default': 'Угрозы до того, как они станут нормой',
  'An emerging narrative is contestable. A settled one has to be displaced. The difference in cost between the two is the reason this section exists.':
    'Зарождающийся нарратив можно оспорить. Закрепившийся приходится вытеснять. Разница в стоимости между этими двумя вариантами — и есть причина существования этого раздела.',
  '3 risks are rated high severity, of which the entity conflation and the emerging regional-limitation narrative are both still cheap to correct.':
    '3 риска оценены как высокие; из них смешение сущностей и зарождающийся нарратив о региональной ограниченности пока дёшево исправить.',
  'The most dangerous emerging narrative on this list. It is not yet dominant and it is factually contestable, which means it is still cheap to answer.':
    'Самый опасный из зарождающихся нарративов в этом списке. Он ещё не доминирует и фактически оспорим, а значит, ответить на него пока дёшево.',
  'Becomes the default objection to a regional supplier. Contestable now with published evidence; expensive to reverse once engines treat it as settled.':
    'Становится стандартным возражением против регионального поставщика. Сейчас оспорим опубликованными доказательствами; развернуть его дорого, как только движки сочтут вопрос закрытым.',
  'A factual error, carried by one engine, that removes the business from every supplier-evaluation answer it appears in. Declining, but not yet corrected.':
    'Фактическая ошибка, которую несёт один движок и которая исключает бизнес из каждого ответа об оценке поставщиков, где она встречается. Слабеет, но пока не исправлена.',
  'A single wrong category record continues to exclude the business from the question class that assigns orders.':
    'Одна неверная запись о категории продолжает исключать бизнес из того класса вопросов, который распределяет заказы.',
  'Every future comparison is scored on axes chosen to favour a competitor, whatever the campaign says.':
    'Любое будущее сравнение оценивается по осям, выбранным в пользу конкурента, что бы ни говорила кампания.',
  'Every impression delivered to a Gemini user reinforces an incorrect record. Campaign spend actively strengthens the wrong association.':
    'Каждый показ пользователю Gemini закрепляет неверную запись. Расходы кампании активно усиливают ошибочную ассоциацию.',
  'Emerging in two engines and sourced from a competitor comparison page. Still contestable; not yet treated as settled.':
    'Зарождается в двух движках, источник — сравнительная страница конкурента. Пока оспорим; вопрос ещё не считается закрытым.',
  'Appearing in Gemini and Copilot answers on multi-site sourcing questions, sourced from a competitor comparison page.':
    'Появляется в ответах Gemini и Copilot на вопросы о снабжении нескольких площадок; источник — сравнительная страница конкурента.',
  'ChatGPT categorises the business as retail rather than MRO distribution, removing it from supplier-evaluation answers.':
    'ChatGPT относит бизнес к рознице, а не к дистрибуции MRO, тем самым исключая его из ответов об оценке поставщиков.',
  'Fill rate and catalogue breadth are cited first by three of six engines when explaining how to choose a distributor.':
    'Уровень выполнения заказов и широту каталога первыми называют три движка из шести, объясняя, как выбирать дистрибьютора.',
  'Favours whichever supplier is already largest. A regional specialist is read as the thing being consolidated away rather than the one consolidating.':
    'Выгодно тому поставщику, который и так крупнее всех. Региональный специалист читается как то, что поглощают при консолидации, а не как тот, кто консолидирует.',
  'Its specification guidance became the category’s default vocabulary because it published first, not because it is more correct.':
    'Его руководство по спецификациям стало стандартным словарём категории потому, что было опубликовано первым, а не потому, что оно вернее.',
  'Published first by a competitor, so it became the vocabulary engines learned. It positions this business as a reseller by omission rather than by argument.':
    'Опубликовано конкурентом первым, поэтому именно этот словарь выучили движки. Он ставит этот бизнес в положение перепродавца умолчанием, а не аргументом.',
  'Neutral on its face, but it removes price as a differentiator and pushes the decision onto evidence — which is the axis this business currently loses on.':
    'Внешне нейтрально, но убирает цену как отличие и переносит решение на доказательства — а это та ось, на которой этот бизнес сейчас проигрывает.',
  'Contain an emerging high-severity adverse narrative':
    'Локализовать зарождающийся неблагоприятный нарратив высокой серьёзности',
  'Respond Immediately': 'Ответить немедленно',

  /* --- Misconceptions and engine reads --------------------------------------------- */
  'What each engine currently says this business is':
    'Чем каждый движок сейчас считает этот бизнес',
  'Claims machines currently repeat that are wrong. Each one removes the business from answers it should appear in.':
    'Утверждения, которые машины сейчас повторяют и которые неверны. Каждое исключает бизнес из ответов, где он должен присутствовать.',
  'Misconceptions repeated as fact': 'Заблуждения, повторяемые как факт',
  'Gemini resolves a same-named logistics firm; ChatGPT categorises the business as retail. Both remove it from supplier-evaluation answers entirely.':
    'Gemini подставляет одноимённую логистическую фирму; ChatGPT относит бизнес к рознице. И то и другое полностью исключает его из ответов об оценке поставщиков.',
  'Gemini resolves the wrong entity on category questions and recognises the business at 24 of 100.':
    'На вопросах о категории Gemini подставляет не ту сущность и распознаёт бизнес на 24 из 100.',
  'Accurate. No divergence from the intended account.':
    'Точно. Расхождений с намеченной версией нет.',
  '4 of 6 diverge': '4 из 6 расходятся',
  'Machines are repeating 1 factual error about this business that removes it from supplier answers entirely. Argument about positioning is wasted while the underlying record is wrong. Once corrected, 20% of category conversation is unclaimed and the strongest of it favours this business.':
    'Машины повторяют 1 фактическую ошибку об этом бизнесе, которая полностью исключает его из ответов о поставщиках. Спор о позиционировании бесполезен, пока сама запись неверна. После исправления окажется, что 20% разговора в категории никем не заняты и самая сильная его часть выгодна этому бизнесу.',
  ', and every point of it is the hardware-retailer error rather than anything it chose to say. Ownership counts the stories attached to a name; it does not ask whether they help.':
    ', и каждый процент из них — это ошибка с розничным магазином инструментов, а не то, что бизнес выбрал сказать. Владение считает истории, привязанные к имени; оно не спрашивает, помогают ли они.',
  'Fill rate and catalogue breadth are how you choose a distributor.':
    'Дистрибьютора выбирают по уровню выполнения заказов и широте каталога.',
  'Consolidating MRO suppliers reduces cost and administrative load.':
    'Консолидация поставщиков MRO снижает затраты и административную нагрузку.',
  'Midwest fastener pricing is broadly comparable across suppliers.':
    'Цены на крепёж на Среднем Западе у разных поставщиков в целом сопоставимы.',
  'Specification depth separates serious suppliers from resellers.':
    'Глубина спецификаций отделяет серьёзных поставщиков от перепродавцов.',
  'Evaluation criteria are increasingly stated in a competitor’s terms.':
    'Критерии оценки всё чаще формулируются в терминах конкурента.',
  'The business is conflated with a same-named logistics firm.':
    'Бизнес смешивают с одноимённой логистической фирмой.',
  'Single-source supplier dependency is an operational risk.':
    'Зависимость от единственного поставщика — операционный риск.',
  'Regional suppliers cannot support multi-plant operations.':
    'Региональные поставщики не способны обслуживать операции на нескольких заводах.',
  'Regional distributors deliver faster than national ones.':
    'Региональные дистрибьюторы доставляют быстрее общенациональных.',
  'The business is absent from every active category story.':
    'Бизнес отсутствует во всех активных историях категории.',
  'The business is described as a hardware retailer.':
    'Бизнес описывают как розничный магазин инструментов.',
  'Northwind Supply is a hardware retailer.':
    'Northwind Supply — розничный магазин инструментов.',
  'Observed in {sources}.': 'Замечено в источниках: {sources}.',
  'How much of the conversation works for us': 'Какая доля разговора работает на нас',
  'Quoted in 3 pieces across 2 publications engines cite':
    'Процитирован в 3 материалах в 2 изданиях, на которые ссылаются движки',
  'Multi-site capability referenced in 2 of 6 engines on multi-plant sourcing questions':
    'Способность работать с несколькими площадками упомянута в 2 движках из 6 в вопросах о снабжении нескольких заводов',
  'Response time cited among the first three selection criteria by 3 of 6 engines':
    'Время отклика названо среди первых трёх критериев выбора у 3 движков из 6',
  'Secondary-supplier framing cited by 2 of 6 engines on consolidation questions':
    'Рамка второго поставщика упомянута 2 движками из 6 в вопросах о консолидации',
  'The dominant evaluation framing, and it is a competitor’s. Buyers arrive already scoring suppliers on the two criteria where a national distributor wins by default.':
    'Доминирующая оценочная рамка — и она принадлежит конкуренту. Покупатели приходят, уже оценивая поставщиков по двум критериям, где общенациональный дистрибьютор выигрывает по умолчанию.',
  "4 of 6 engines carry a materially different account of this business. A buyer's understanding depends on which assistant they happen to open.":
    '4 движка из 6 несут существенно разную версию об этом бизнесе. Понимание покупателя зависит от того, какого ассистента он случайно откроет.',

  /* --- Source names. Capitalised to match the seed exactly. ------------------------- */
  'Trade forums': 'Отраслевые форумы',
  'Buyer discussion': 'Обсуждения покупателей',
  'Procurement publications': 'Закупочные издания',
  'Specification guides': 'Руководства по спецификациям',
  'Risk guidance': 'Рекомендации по рискам',
  'Aggregator pages': 'Страницы агрегаторов',
  'Trade publications': 'Отраслевые издания',
  /* Mastheads. Invented trade publications, and proper nouns like the
     competitor names — they stay Latin in every locale. Listed so the
     decision is recorded rather than looking like an omission. */
  'Industrial Distribution · Modern Supply Chain':
    'Industrial Distribution · Modern Supply Chain',
  'Fastener Technology · Industrial Distribution':
    'Fastener Technology · Industrial Distribution',
  'Fastener Technology · Plant Engineering': 'Fastener Technology · Plant Engineering',
  'Modern Supply Chain · Plant Engineering': 'Modern Supply Chain · Plant Engineering',

  /* --- Narrative action plan ------------------------------------------------------- */
  'Narrative action plan': 'План действий по нарративу',
  'Open narrative action plan': 'Открыть план действий по нарративу',
  'Monitor narrative changes': 'Отслеживать изменения нарратива',
  'Check readiness before campaigning': 'Проверить готовность до запуска кампании',
  'Each carries its objective, the evidence behind it, the movement expected, a confidence, an owner, a deadline, an effort estimate and how success is verified.':
    'У каждого есть цель, стоящие за ней доказательства, ожидаемое движение, уровень уверенности, ответственный, срок, оценка трудозатрат и способ проверки успеха.',
  'Correct the record first, then claim the narrative nobody owns.':
    'Сначала исправьте запись, затем займите нарратив, которым никто не владеет.',
  'Correct the entity conflation and the hardware-retailer categorisation.':
    'Исправить смешение сущностей и отнесение к розничным магазинам инструментов.',
  'Claim response time as a published supplier selection criterion.':
    'Закрепить время отклика как опубликованный критерий выбора поставщика.',
  'Answer the regional-limitation narrative with published multi-site evidence.':
    'Ответить на нарратив о региональной ограниченности опубликованными доказательствами работы с несколькими площадками.',
  'Claim the secondary-supplier argument against the consolidation narrative.':
    'Занять аргумент второго поставщика против нарратива консолидации.',
  'Enter the two active media stories with a named expert voice.':
    'Войти в две активные медийные истории с голосом названного эксперта.',
  'Reframe regional scale from limitation to risk management':
    'Переосмыслить региональный масштаб из ограничения в управление рисками',
  'The narrative is unowned, high influence and uncontested. Same-day regional delivery is a real capability that appears in no category description.':
    'Нарратив никем не занят, обладает высоким влиянием и не оспаривается. Региональная доставка в день заказа — реальная возможность, не фигурирующая ни в одном описании категории.',
  'Response time as a supplier selection criterion':
    'Время отклика как критерий выбора поставщика',
  'The strategic case for a strong secondary supplier':
    'Стратегическая аргументация в пользу сильного второго поставщика',
  'Independent authority sources 3 → 8': 'Независимые авторитетные источники 3 → 8',
  'Average recognition 38 → 55 of 100': 'Среднее распознавание 38 → 55 из 100',

  /* ==========================================================================
     CAMPAIGN READINESS INTELLIGENCE
     ====================================================================== */
  'Campaign readiness intelligence': 'Интеллект готовности к кампании',
  'Campaign Readiness Intelligence | GeoRepute': 'Интеллект готовности к кампании | GeoRepute',
  'Campaign Readiness Intelligence': 'Интеллект готовности к кампании',
  'Should we launch this campaign today?': 'Запускать ли эту кампанию сегодня?',
  'This assessment evaluates the business, not the campaign. Creative, targeting and budget can all be correct while the business remains structurally unable to convert the attention they buy.':
    'Эта оценка оценивает бизнес, а не кампанию. Креатив, таргетинг и бюджет могут быть верны все сразу, а бизнес при этом структурно не способен конвертировать купленное ими внимание.',
  Campaign: 'Кампания',
  'Q4 Midwest demand generation': 'Генерация спроса на Среднем Западе, 4-й квартал',
  'Intended launch': 'Планируемый запуск',
  Duration: 'Длительность',
  '6 months': '6 месяцев',
  '7 months': '7 месяцев',
  '{n} months': '{n} мес.',
  Channels: 'Каналы',
  'Paid search · Paid social · Trade media · Content syndication':
    'Платный поиск · Платные соцсети · Отраслевые СМИ · Синдикация контента',
  'Paid search': 'Платный поиск',
  'Paid social': 'Платные соцсети',
  'Trade media': 'Отраслевые СМИ',
  'Content syndication': 'Синдикация контента',
  'Estimated budget at risk': 'Оценка бюджета под риском',
  'Executive decision': 'Решение руководства',
  'Executive recommendation': 'Рекомендация руководству',
  'Delay Campaign': 'Отложить кампанию',
  'Delay the campaign. Fix authority first.':
    'Отложите кампанию. Сначала займитесь авторитетностью.',
  'Delay Campaign — readiness reads 32 of 100, held there by authority readiness at 11, which carries 20% of the index.':
    'Отложить кампанию — готовность 32 из 100, и удерживает её там готовность по авторитетности на уровне 11, которая весит 20% индекса.',
  'Campaign readiness score': 'Оценка готовности к кампании',
  'Primary constraint': 'Основное ограничение',
  'Authority readiness is the binding constraint at 11 of 100 and carries 20% of the index.':
    'Готовность по авторитетности — связывающее ограничение: 11 из 100 при весе 20% индекса.',
  'Strategic window': 'Стратегическое окно',
  'Advantage holds until {date}.': 'Преимущество сохраняется до {date}.',
  'Decision journey gaps': 'Разрывы на пути принятия решения',
  'Presence at every stage.': 'Присутствие на каждом этапе.',
  '2 stages uncovered': '2 этапа без покрытия',
  'Assessment confidence': 'Уверенность в оценке',
  'Six of seven dimensions rest on directly observed data.':
    'Шесть измерений из семи опираются на непосредственно наблюдаемые данные.',
  Assessment: 'Оценка',
  'Seven readiness dimensions, weighted into one index':
    'Семь измерений готовности, сведённых в один индекс',
  'Every score is computed from observed data rather than assigned. The weights are published and sum to one.':
    'Каждый балл вычисляется из наблюдаемых данных, а не назначается. Веса опубликованы и в сумме дают единицу.',
  'Ready at 70 and above. At risk from 45 . Blocking below 45 .':
    'Готово при 70 и выше. Под риском начиная с 45. Блокирует ниже 45.',
  'Ready at {ready} and above. At risk from {risk}. Blocking below {risk}.':
    'Готово при {ready} и выше. Под риском начиная с {risk}. Блокирует ниже {risk}.',
  Ready: 'Готово',
  'At risk': 'Под риском',
  Blocking: 'Блокирует',
  '{score} of 100 — {status}. Ready at {gate}.': '{score} из 100 — {status}. Готово при {gate}.',
  '{n}% of the readiness index': '{n}% индекса готовности',
  '{score} of 100 · {weight}% of the index': '{score} из 100 · {weight}% индекса',
  or: 'или',
  None: 'Нет',
  '2 of 5': '2 из 5',
  '2 of 6': '2 из 6',
  'Launching remains available and is sometimes correct — a product deadline or a competitive move can outweigh a readiness score. This assessment states the cost of that choice so it is made deliberately rather than by default.':
    'Запуск остаётся возможным и иногда оправдан: срок выхода продукта или ход конкурента могут перевесить балл готовности. Эта оценка называет цену такого выбора, чтобы он делался осознанно, а не по умолчанию.',
  'Each carries a priority, an owner, a deadline, an effort estimate, its dependencies, the movement it should produce and how confident the model is in that.':
    'У каждого есть приоритет, ответственный, срок, оценка трудозатрат, зависимости, ожидаемое движение и то, насколько модель в нём уверена.',
  '{n} tracked questions': 'отслеживаемых вопросов: {n}',

  /* --- The seven readiness dimensions ---------------------------------------------- */
  'AI readiness': 'Готовность к ИИ',
  'Do AI engines understand and recommend this business?':
    'Понимают ли движки ИИ этот бизнес и рекомендуют ли его?',
  'Across six engines, the business is understood at 38 of 100. Advertising cannot correct a record it does not touch.':
    'По шести движкам бизнес понят на 38 из 100. Реклама не может исправить запись, которой она не касается.',
  'Authority readiness': 'Готовность по авторитетности',
  'Is there enough evidence for AI to recommend this business?':
    'Достаточно ли доказательств, чтобы ИИ рекомендовал этот бизнес?',
  '3 independent sources can verify this business. The category median is 14.':
    'Подтвердить этот бизнес могут 3 независимых источника. Медиана по категории — 14.',
  'Google readiness': 'Готовность в Google',
  'Can buyers find this business through traditional search?':
    'Могут ли покупатели найти этот бизнес через традиционный поиск?',
  '9 of 20 commercial questions place in the top ten. The rest are reachable only by paying for the click.':
    '9 из 20 коммерческих вопросов попадают в первую десятку. До остальных можно добраться только оплатив клик.',
  'Narrative readiness': 'Готовность нарратива',
  'Does the market understand what this business stands for?':
    'Понимает ли рынок, за что стоит этот бизнес?',
  'The business owns 12% of the language engines use to define this category. The campaign would be fought on terms a competitor wrote.':
    'Бизнесу принадлежит 12% языка, которым движки определяют эту категорию. Кампания велась бы на условиях, написанных конкурентом.',
  Reputation: 'Репутация',
  'Is this business safe to recommend to a buyer?':
    'Безопасно ли рекомендовать этот бизнес покупателю?',
  'Reputation reads 44 of 100 while market fit reads 72. The offer is right; the proof around it is not.':
    'Репутация — 44 из 100 при соответствии рынку 72. Предложение верное; доказательства вокруг него — нет.',
  'Conversion readiness': 'Готовность к конверсии',
  'Can the destination convert the intent this campaign buys?':
    'Способна ли посадочная сторона конвертировать намерение, которое покупает эта кампания?',
  'A single quote form serves every stage. There is no path for a buyer who is still comparing suppliers and not yet requesting a price.':
    'Одна форма запроса цены обслуживает все этапы. Нет маршрута для покупателя, который ещё сравнивает поставщиков и пока не запрашивает цену.',
  'Competitor readiness': 'Готовность конкурентов',
  'Kestrel Industrial holds top-three organic positions and AI presence on the four highest-volume commercial questions simultaneously.':
    'Kestrel Industrial одновременно удерживает позиции в первой тройке органической выдачи и присутствие в ИИ по четырём самым частотным коммерческим вопросам.',

  /* --- Dimension detail signals ---------------------------------------------------- */
  'Category understanding': 'Понимание категории',
  '2 of 6 correct': '2 из 6 верны',
  'An engine that files the business in the wrong category cannot surface it when a buyer describes this need, regardless of spend.':
    'Движок, отнёсший бизнес не к той категории, не покажет его, когда покупатель опишет эту потребность, сколько бы денег ни было потрачено.',
  'AI recommendation coverage': 'Покрытие рекомендациями ИИ',
  '6 recommendation events across 144 answer slots. A buyer who asks an assistant for suppliers almost never hears this name.':
    '6 случаев рекомендации на 144 позиции в ответах. Покупатель, спрашивающий ассистента о поставщиках, почти никогда не слышит это имя.',
  'Engine consistency': 'Согласованность движков',
  '37-point spread': 'разброс в 37 пунктов',
  'Recognition ranges from 21 to 58. The campaign would reach buyers whose assistants disagree about what this business is.':
    'Распознавание колеблется от 21 до 58. Кампания дошла бы до покупателей, чьи ассистенты расходятся во мнении о том, что это за бизнес.',
  'Silent engines': 'Молчащие движки',
  '2 engines recommend the business in none of the tracked decisions. Spend that drives buyers toward those engines returns nothing.':
    '2 движка не рекомендуют бизнес ни в одном из отслеживаемых решений. Расходы, ведущие покупателей к этим движкам, не возвращают ничего.',
  'Independent authority sources': 'Независимые авторитетные источники',
  '3 sources': '3 источника',
  'Independent corroboration is what lets a system name a supplier first rather than hedge across several.':
    'Именно независимое подтверждение позволяет системе назвать поставщика первым, а не осторожно перечислять нескольких.',
  'Third-party validation': 'Подтверждение третьей стороной',
  '1 of 5 present': '1 из 5 присутствует',
  'Certifications, named customers, verified outcomes and specification references are absent from the public record.':
    'Сертификаты, названные клиенты, подтверждённые результаты и ссылки на спецификации в публичных источниках отсутствуют.',
  'Industry references': 'Отраслевые упоминания',
  '0 of 3 publications': '0 из 3 изданий',
  'The three trade publications engines cite most for this category carry no coverage of the business at all.':
    'Три отраслевых издания, на которые движки ссылаются чаще всего в этой категории, не пишут о бизнесе вообще.',
  'Competitor authority': 'Авторитетность конкурента',
  '7× behind': 'отставание в 7 раз',
  'Kestrel Industrial can be corroborated 7× more readily. That advantage compounds while no counter-programme runs.':
    'Kestrel Industrial подтверждается в 7 раз легче. Это преимущество накапливается, пока не запущена встречная программа.',
  'Commercial keyword coverage': 'Покрытие коммерческих запросов',
  '9 of 20': '9 из 20',
  'Weighted by search volume rather than by keyword count, so a strong position on a question nobody asks does not flatter the figure.':
    'Взвешено по объёму поиска, а не по числу запросов, поэтому сильная позиция по вопросу, который никто не задаёт, не приукрашивает цифру.',
  'Technical SEO status': 'Состояние технического SEO',
  'No blocking faults': 'Блокирующих дефектов нет',
  'Crawlability, indexation and canonicalisation carry no faults that would prevent a campaign landing page from ranking. This is not the constraint.':
    'В сканировании, индексации и канонизации нет дефектов, которые помешали бы посадочной странице кампании ранжироваться. Ограничение не здесь.',
  'Organic opportunity': 'Органическая возможность',
  '6 questions': '6 вопросов',
  '6 questions already rank but never reach an AI answer. These are the cheapest positions available and need publishing, not budget.':
    '6 вопросов уже ранжируются, но никогда не попадают в ответ ИИ. Это самые дешёвые из доступных позиций, и им нужна публикация, а не бюджет.',
  'Category clarity': 'Ясность категории',
  Fragmented: 'Фрагментировано',
  'The same business is described differently across its own site, two directories and six engines. A campaign amplifies whichever version a buyer meets.':
    'Один и тот же бизнес описан по-разному на его собственном сайте, в двух каталогах и в шести движках. Кампания усиливает ту версию, на которую покупатель наткнётся.',
  'Public narrative': 'Публичный нарратив',
  'Machines describe this category using a competitor’s specification framing, so buyers arrive already evaluating against someone else’s criteria.':
    'Машины описывают эту категорию в рамке спецификаций конкурента, поэтому покупатели приходят, уже оценивая по чужим критериям.',
  'Messaging alignment': 'Согласованность сообщений',
  Misaligned: 'Рассогласовано',
  'The campaign leads with same-day regional delivery. No public source currently associates that capability with this business.':
    'Кампания начинает с региональной доставки в день заказа. Сейчас ни один публичный источник не связывает эту возможность с этим бизнесом.',
  'Trust signals': 'Сигналы доверия',
  'Every claim traces back to the company’s own website. Systems treat self-description as a claim rather than as evidence.':
    'Каждое утверждение восходит к собственному сайту компании. Системы считают самоописание утверждением, а не доказательством.',
  Reviews: 'Отзывы',
  'Adequate volume': 'Достаточный объём',
  'Review volume is sufficient and sentiment is positive, but sits on platforms engines do not treat as authoritative for this category.':
    'Объём отзывов достаточен, тональность положительная, но они лежат на площадках, которые движки не считают авторитетными для этой категории.',
  'Brand credibility': 'Достоверность бренда',
  'Expert citations': 'Цитирование экспертов',
  'No named expert, engineer or specifier is publicly associated with the business. Machines have nobody to attribute expertise to.':
    'Ни один названный эксперт, инженер или составитель спецификаций публично не связан с бизнесом. Машинам некому приписать экспертизу.',
  'External validation': 'Внешнее подтверждение',
  'Customer outcomes, third-party validation, certifications and named references are absent. Only review-platform badges appear.':
    'Результаты клиентов, подтверждение третьей стороной, сертификаты и названные рекомендации отсутствуют. Есть только значки площадок отзывов.',
  'Landing page quality': 'Качество посадочных страниц',
  '3 of 7 pages': '3 из 7 страниц',
  'Three of the seven pages this campaign would drive to state what the business sells above the fold. The rest open with company history.':
    'Три из семи страниц, куда вела бы эта кампания, сообщают, что продаёт бизнес, в первом экране. Остальные начинаются с истории компании.',
  'Decision support': 'Поддержка решения',
  'No comparison table, specification guidance or selection criteria exists on any destination page. A buyer arriving mid-evaluation has nothing to evaluate with.':
    'Ни на одной целевой странице нет ни таблицы сравнения, ни руководства по спецификациям, ни критериев выбора. Покупателю, пришедшему в разгар оценки, нечем оценивать.',
  'Trust elements': 'Элементы доверия',
  'Quote form only': 'Только форма запроса цены',
  'Commercial messaging': 'Коммерческие сообщения',
  'Same-day regional delivery — the strongest differentiator — appears on one page and in no page title.':
    'Региональная доставка в день заказа — самое сильное отличие — встречается на одной странице и ни в одном заголовке страницы.',
  'Market leaders': 'Лидеры рынка',
  '4 ahead': '4 впереди',
  '4 of 4 tracked competitors currently receive more recommendations than this business.':
    'Все 4 отслеживаемых конкурента сейчас получают больше рекомендаций, чем этот бизнес.',
  'Competitor visibility': 'Видимость конкурентов',
  '4 in top three': '4 в первой тройке',
  'Authority gap': 'Разрыв в авторитетности',
  '21 sources': '21 источник',
  'Kestrel Industrial holds 21 sources against 3. Advertising does not close an evidence gap; publishing and validation do.':
    'У Kestrel Industrial 21 источник против 3. Разрыв в доказательствах закрывается не рекламой, а публикациями и подтверждениями.',
  'Competitive gap': 'Конкурентный разрыв',
  '12% owned': '12% во владении',
  'Existing search strength': 'Имеющаяся сила в поиске',
  'Existing strength sits on questions asked after a vendor has been chosen, not on the questions that choose one.':
    'Имеющаяся сила лежит на вопросах, которые задают после выбора поставщика, а не на тех, которые его выбирают.',
  'The leader is strongest at exactly the stage this campaign is intended to influence, which is where displacement is most expensive.':
    'Лидер сильнее всего ровно на том этапе, на который нацелена эта кампания, — а именно там вытеснение обходится дороже всего.',
  '4 engines hold a wrong or missing record — one conflates the business with a same-named logistics firm.':
    'У 4 движков запись неверна или отсутствует — один смешивает бизнес с одноимённой логистической фирмой.',
  'The category description differs between the website and two trade directories, which reads to a machine as an unreliable record.':
    'Описание категории на сайте и в двух отраслевых каталогах различается, что машина читает как ненадёжную запись.',
  'No single consistent story exists in the public record for a campaign to reinforce, so each impression starts the explanation over.':
    'В публичном поле нет единой непротиворечивой истории, которую кампания могла бы усиливать, поэтому каждый показ начинает объяснение заново.',
  'Kestrel Industrial receives 31% of recommendations against 4.2%. Launching now advertises into a decision they control.':
    'Kestrel Industrial получает 31% рекомендаций против 4,2%. Запуск сейчас — это реклама внутри решения, которое контролируют они.',

  /* --- Journey coverage ------------------------------------------------------------ */
  Coverage: 'Покрытие',
  'Where the campaign would reach buyers, and where it would not':
    'Где кампания дошла бы до покупателей, а где нет',
  'Stage 1': 'Этап 1',
  'Stage 2': 'Этап 2',
  'Stage 3': 'Этап 3',
  'Stage 4': 'Этап 4',
  'Stage 5': 'Этап 5',
  'Invisible to every conventional measurement tool.':
    'Невидимо для любого привычного инструмента измерения.',
  'Visible to {tools}.': 'Видно инструментам: {tools}.',
  'No presence at {stages}.': 'Отсутствие на этапах: {stages}.',
  'A campaign creates demand across the whole journey. It converts only at the stages where the business is actually present.':
    'Кампания создаёт спрос на всём пути. Конвертирует она только на тех этапах, где бизнес действительно присутствует.',

  /* --- Commercial risk ------------------------------------------------------------- */
  'Commercial risk': 'Коммерческий риск',
  'Commercial risk level': 'Уровень коммерческого риска',
  'What launching today would cost': 'Во что обошёлся бы запуск сегодня',
  'Missed decision exposure': 'Потери на упущенных решениях',
  '19 of 24': '19 из 24',
  'Commercial decisions that already complete without this business appearing. A campaign increases how many of these happen, not how many are won.':
    'Коммерческие решения, которые уже завершаются без появления этого бизнеса. Кампания увеличивает их количество, а не долю выигранных.',
  'Revenue dependent on this stage': 'Выручка, зависящая от этого этапа',
  '38% of demand': '38% спроса',
  'The share of revenue arriving through supplier evaluation — the stage where presence is currently lowest and the campaign has least leverage.':
    'Доля выручки, приходящая через оценку поставщиков, — этап, где присутствие сейчас минимально, а у кампании меньше всего рычага.',
  'Expected ROI risk': 'Риск по ожидаемой окупаемости',
  'Return depends on buyers completing a journey the business is absent from at these stages. Spend reaches them; the recommendation does not.':
    'Отдача зависит от того, пройдут ли покупатели путь, на этих этапах которого бизнес отсутствует. Расходы до них доходят; рекомендация — нет.',
  "Risk here is not the chance the campaign underperforms. It is the mechanism by which spend converts into a competitor's advantage.":
    'Риск здесь — это не вероятность того, что кампания сработает хуже ожидаемого. Это механизм, которым расходы превращаются в преимущество конкурента.',
  'Every click is paid for twice: once to acquire it, and again to reacquire the buyer who arrived, found nothing to evaluate with, and left to compare elsewhere.':
    'За каждый клик платят дважды: один раз чтобы его получить, и второй — чтобы вернуть покупателя, который пришёл, не нашёл, чем оценивать, и ушёл сравнивать в другом месте.',
  'Paid acquisition buys attention that trust has to convert. Without it the campaign raises awareness for the category and the best-verified supplier in it wins.':
    'Платное привлечение покупает внимание, которое конвертировать должно доверие. Без него кампания повышает известность категории, а выигрывает в ней поставщик с лучшими подтверждениями.',
  'The campaign generates consideration the business cannot survive. Buyers who check will find nothing independent, and the check happens after the click is paid for.':
    'Кампания порождает стадию рассмотрения, которую бизнес не переживёт. Покупатели, которые проверят, не найдут ничего независимого, а проверка происходит уже после того, как клик оплачен.',
  'Campaign attention drives buyers to verify the business through an assistant that cannot describe it correctly. The spend creates the demand and a competitor collects it.':
    'Внимание кампании гонит покупателей проверять бизнес через ассистента, который не может описать его верно. Расходы создают спрос, а собирает его конкурент.',
  'Campaign messaging contradicts what the market already believes. Spend is consumed correcting the record instead of creating demand.':
    'Сообщения кампании противоречат тому, во что рынок уже верит. Расходы уходят на исправление записи вместо создания спроса.',
  'Paid search carries the entire commercial keyword set alone, at a blended cost already above break-even, for as long as the campaign runs.':
    'Платный поиск в одиночку тянет весь набор коммерческих запросов по смешанной цене, уже превышающей точку безубыточности, всё время работы кампании.',
  'The campaign raises category demand that the best-evidenced supplier absorbs. Competitor share can rise as a direct result of this spend.':
    'Кампания повышает спрос в категории, который поглощает поставщик с лучшими доказательствами. Доля конкурента может вырасти как прямое следствие этих расходов.',
  'Both surfaces': 'Обе поверхности',
  Partial: 'Частично',

  /* --- Interventions and the decision ---------------------------------------------- */
  Intervention: 'Вмешательство',
  'Required before launch': 'Требуется до запуска',
  'Blocked until priority {n} lands.': 'Заблокировано до выполнения приоритета {n}.',
  'If you launch anyway': 'Если всё же запускать',
  'Launch campaign': 'Запустить кампанию',
  'Fix readiness first': 'Сначала исправить готовность',
  'Open Executive Action Plan': 'Открыть план действий для руководства',
  'Review the full position': 'Изучить позицию целиком',
  'Website and conversion readiness': 'Готовность сайта и конверсии',
  'What position are we launching into?': 'В какую позицию мы запускаемся?',
  'AI narrative': 'Нарратив в ИИ',
  'Narrative consistency': 'Непротиворечивость нарратива',
  "Engines describe the category using a competitor's framing. Northwind owns 12% of that language.":
    'Движки описывают категорию в рамке конкурента. Northwind владеет 12% этого языка.',

  /* ==========================================================================
     DECISION RECONSTRUCTION

     Display labels only. 'brand', 'competitor', 'supporting', 'downstream',
     'high', 'medium', 'low' are enum discriminants in the seed graph — an
     entry keyed on any of them rewrites the data itself and breaks every
     lookup. The component maps them to the capitalised labels below.
     ====================================================================== */
  'Decision Reconstruction': 'Реконструкция решения',
  'Decision Reconstruction | GeoRepute': 'Реконструкция решения | GeoRepute',
  'Signature experience': 'Ключевой сценарий',
  'Enter a domain and choose a commercial question. The system reconstructs what each surface understood, who received the decision and why.':
    'Введите домен и выберите коммерческий вопрос. Система реконструирует, что поняла каждая поверхность, кому досталось решение и почему.',
  'Seeded environment — this demonstration always reconstructs {org}.':
    'Заложенная среда — эта демонстрация всегда реконструирует {org}.',
  Domain: 'Домен',
  'Understood as: {what}': 'Понят как: {what}',
  Brand: 'Бренд',
  Competitor: 'Конкурент',
  Low: 'Низкий',
  Supporting: 'Поддерживающий',
  Downstream: 'Последующий',
  '{n} tracked decision questions. Supplier-evaluation questions appear first — that is where the vendor is chosen.':
    'Отслеживаемых вопросов решения: {n}. Вопросы оценки поставщиков идут первыми — именно там выбирают поставщика.',
  'An MRO and fastener distributor serving manufacturers':
    'Дистрибьютор MRO и крепежа, обслуживающий производителей',
  'Midwest industrial fastener and MRO distributor':
    'Дистрибьютор промышленного крепежа и MRO на Среднем Западе',
  'A regional industrial supplier in the US Midwest':
    'Региональный промышленный поставщик на Среднем Западе США',
  'Industrial supply company, category association incomplete':
    'Компания промышленного снабжения, привязка к категории неполная',
  'Unclear — associates the name with unrelated businesses':
    'Неясно — связывает имя с посторонними компаниями',
  'Not recognized as a distinct business entity':
    'Не распознаётся как самостоятельное юридическое лицо',
  '{n} independent sources support this brand. Northwind has 3.':
    'Этот бренд поддерживают {n} независимых источников. У Northwind их 3.',
  '{name} controls': '{name} контролирует',
  'across the whole set. Competitive density is shifting at {velocity}.':
    'по всему набору. Конкурентная плотность меняется темпом {velocity}.',
  'This is the exposure attributable to this single question. The full-book figure across all {n} tracked decisions is materially larger and appears in Mission Control.':
    'Это потери, относимые к одному этому вопросу. Совокупная цифра по всем отслеживаемым решениям ({n}) существенно больше и приводится в центре управления.',
  'stage {n} of {total}': 'этап {n} из {total}',
  Present: 'Присутствует',
  'Observable by {tools} — but only after the decision has already narrowed.':
    'Наблюдаемо инструментами {tools} — но только после того, как решение уже сузилось.',
  'No conventional tool observes this stage. There is no visit, click, lead or CRM event to record — which is why the weakness is invisible until revenue moves.':
    'Ни один привычный инструмент не наблюдает этот этап. Здесь нечего записывать: ни визита, ни клика, ни лида, ни события в CRM — потому слабость и остаётся невидимой, пока не сдвинется выручка.',
  'Reconstruction confidence across all ten surfaces.':
    'Уверенность реконструкции по всем десяти поверхностям.',
  'What each AI engine understood about the business':
    'Что каждый движок ИИ понял о бизнесе',
  'Whether the brand was recognised, mentioned, cited, recommended or ignored':
    'Был ли бренд распознан, упомянут, процитирован, рекомендован или проигнорирован',
  'Which competitor was selected instead': 'Какой конкурент был выбран вместо него',
  'Which sources, trust signals and narratives influenced the answer':
    'Какие источники, сигналы доверия и нарративы повлияли на ответ',
  'What Google demand, organic position and paid click cost indicate':
    'О чём говорят спрос в Google, органическая позиция и стоимость платного клика',
  'Where the question sits in the customer decision journey':
    'Где находится вопрос на пути принятия решения клиентом',
  'What timing, market maturity and competitive density indicate':
    'О чём говорят тайминг, зрелость рынка и конкурентная плотность',
  'What the directional commercial exposure may be':
    'Каковы могут быть ориентировочные коммерческие потери',
  'Which connected signals explain the outcome':
    'Какие связанные сигналы объясняют исход',
  'What action is prescribed and how improvement will be measured':
    'Какое действие предписано и как будет измерено улучшение',
  'Decision intelligence graph': 'Граф интеллекта решения',
  'Mentioned only': 'Только упомянут',
  'Wrong entity': 'Не та сущность',
  'Named Northwind in its answer, citing company website.':
    'Назвал Northwind в своём ответе, сославшись на сайт компании.',
  'Recognises the business but did not consider it relevant to this question.':
    'Распознаёт бизнес, но не счёл его релевантным этому вопросу.',
  'Describes Northwind as a hardware retailer rather than an MRO distributor, which removes it from supplier-evaluation answers.':
    'Описывает Northwind как розничный магазин инструментов, а не как дистрибьютора MRO, что исключает её из ответов об оценке поставщиков.',
  'Knows the company exists but not which product categories it carries, so it is omitted from specification-led questions.':
    'Знает, что компания существует, но не знает, какие товарные категории она возит, поэтому она выпадает из вопросов, ведомых спецификациями.',
  'Conflates Northwind Supply with a same-named logistics firm, so category association fails entirely.':
    'Смешивает Northwind Supply с одноимённой логистической фирмой, из-за чего привязка к категории проваливается полностью.',
  '1 of 6 engines named Northwind, and none placed it first.':
    'Northwind назвал 1 движок из 6, и ни один не поставил её первой.',
  '4 of 6 resolve the wrong entity': '4 из 6 подставляют не ту сущность',
  'engines recommended the business on this question':
    'движков рекомендовали бизнес по этому вопросу',
  'of all recommendations across the tracked decision set':
    'от всех рекомендаций по отслеживаемому набору решений',
  'Kestrel Industrial is cited by 21 independent sources; Northwind by 3.':
    'На Kestrel Industrial ссылается 21 независимый источник; на Northwind — 3.',
  '3 sources vs 14 median': '3 источника против медианы 14',
  'Northwind’s own pages are the only source engines can reach for its claims — self-citation carries little weight.':
    'Собственные страницы Northwind — единственный источник её утверждений, доступный движкам, а самоцитирование весит немного.',
  'A published comparison library gives engines material they can quote directly.':
    'Опубликованная библиотека сравнений даёт движкам материал, который можно цитировать напрямую.',
  'Category evaluation criteria': 'Критерии оценки категории',
  'Supplier-comparison content': 'Материалы сравнения поставщиков',
  'Company website': 'Сайт компании',
  Source: 'Источник',
  Favours: 'В пользу',
  'Why it matters': 'Почему это важно',
  'Monthly volume': 'Объём в месяц',
  'Paid CPC': 'Платная цена клика',
  'AI presence': 'Присутствие в ИИ',
  'Closest tracked keyword': 'Ближайший отслеживаемый запрос',
  'Above break-even CPC': 'Выше безубыточной цены клика',
  'Coverage at this stage': 'Покрытие на этом этапе',
  'Share of query volume': 'Доля объёма запросов',
  'Share of revenue decided': 'Доля решаемой выручки',
  'of questions at this stage against': 'вопросов на этом этапе против',
  'Market position': 'Положение на рынке',
  'Window remaining': 'Остаток окна',
  'Buy this as an intelligence product': 'Купить это как интеллект-продукт',

  /* --- The 24 tracked buyer questions. Translated on the same reasoning as the
         home page's search queries — a buyer in this market asks in Russian. - */
  'Which fastener supplier should we choose for a new plant?':
    'Какого поставщика крепежа выбрать для нового завода?',
  'Who are the top industrial supply companies for fasteners?':
    'Какие компании промышленного снабжения лучшие по крепежу?',
  'Best MRO distributors for manufacturing plants':
    'Лучшие дистрибьюторы MRO для производственных предприятий',
  'Top rated industrial supply vendors near Chicago':
    'Поставщики промышленного снабжения с лучшими оценками рядом с Чикаго',
  'Which MRO supplier has the best fill rate?':
    'У какого поставщика MRO самый высокий уровень выполнения заказов?',
  'Recommended industrial distributors for hydraulic components':
    'Рекомендуемые промышленные дистрибьюторы гидравлических компонентов',
  'Compare industrial distributor service levels':
    'Сравнить уровни сервиса промышленных дистрибьюторов',
  'Is a national or regional MRO distributor better?':
    'Что лучше: общенациональный или региональный дистрибьютор MRO?',
  'Should we consolidate MRO suppliers or keep multiple vendors?':
    'Консолидировать поставщиков MRO или сохранить несколько?',
  'What should an MRO supply agreement include?':
    'Что должен включать договор на поставку MRO?',
  'Risks of single-source supplier dependency for MRO':
    'Риски зависимости от единственного поставщика MRO',
  'Vendor-managed inventory vs consignment for MRO supplies':
    'Управляемые поставщиком запасы против консигнации для расходников MRO',
  'What is vendor-managed inventory for MRO supplies?':
    'Что такое управляемые поставщиком запасы для расходников MRO?',
  'How do I reduce MRO inventory carrying costs?':
    'Как снизить затраты на хранение запасов MRO?',
  'Best practices for industrial fastener sourcing':
    'Лучшие практики закупки промышленного крепежа',
  'What is the difference between grade 5 and grade 8 fasteners?':
    'Чем отличается крепёж класса 5 от класса 8?',
  'What causes premature bolt failure in high-vibration equipment?':
    'Почему болты преждевременно разрушаются в оборудовании с высокой вибрацией?',
  'How often should hydraulic fittings be replaced?':
    'Как часто нужно менять гидравлические фитинги?',
  'How to avoid counterfeit fasteners in the supply chain':
    'Как избежать контрафактного крепежа в цепочке поставок',
  'What are the most common industrial supply delivery failures?':
    'Какие сбои поставок чаще всего случаются в промышленном снабжении?',
  'Industrial fastener supplier with same-day shipping':
    'Поставщик промышленного крепежа с отгрузкой в день заказа',
  'Get a quote for bulk grade 8 fasteners':
    'Запросить цену на крепёж класса 8 оптом',
  'Set up an MRO supply account': 'Открыть счёт на поставку MRO',

  /* ==========================================================================
     EXECUTIVE MISSION CONTROL
     ====================================================================== */
  'Executive Mission Control': 'Центр управления для руководства',
  'Executive Mission Control | GeoRepute': 'Центр управления для руководства | GeoRepute',
  'Not more data. A decision position.': 'Не больше данных. А позиция для решения.',
  'Ten measures, each with evidence behind it':
    'Десять показателей, за каждым — доказательства',
  'Every figure is computed from observed data. Select any tile to open the full readout, its evidence and its prescribed action.':
    'Каждая цифра вычислена из наблюдаемых данных. Выберите любую плитку, чтобы открыть полную сводку, её доказательства и предписанное действие.',
  Position: 'Позиция',
  Explanation: 'Объяснение',
  Execution: 'Исполнение',
  'AI Recognition Position': 'Позиция распознавания в ИИ',
  'Average entity understanding across six engines. Three misidentify the category.':
    'Среднее понимание сущности по шести движкам. Три ошибаются с категорией.',
  'Google vs AI Gap': 'Разрыв между Google и ИИ',
  'Keywords absent from AI answers and outside the Google top ten. The decision happens on neither surface.':
    'Запросы, отсутствующие в ответах ИИ и не входящие в первую десятку Google. Решение не происходит ни на одной из поверхностей.',
  'Decision Presence': 'Присутствие в решении',
  'Supplier-evaluation coverage. 19 of 24 decisions complete without the brand.':
    'Покрытие оценки поставщиков. 19 из 24 решений завершаются без бренда.',
  'Competitive Capture': 'Конкурентный перехват',
  'Kestrel Industrial receives the recommendation. Northwind receives 4.2%.':
    'Рекомендацию получает Kestrel Industrial. Northwind получает 4,2%.',
  'Narrative Ownership': 'Владение нарративом',
  'Share of the language engines use to define the category. The criteria cited first are a competitor’s.':
    'Доля языка, которым движки определяют категорию. Критерии, называемые первыми, принадлежат конкуренту.',
  'Trust Readiness': 'Готовность по доверию',
  'The recommendation goes to the supplier engines can support with evidence.':
    'Рекомендация достаётся тому поставщику, которого движки могут подкрепить доказательствами.',
  'Paid Dependency': 'Зависимость от платного',
  'Blended CPC runs above break-even. Paid is renting the positions authority would hold.':
    'Смешанная цена клика выше точки безубыточности. Платное арендует позиции, которые удерживала бы авторитетность.',
  'Weighted across six GEON vectors. Authority at 28 is the binding constraint.':
    'Взвешено по шести векторам GEON. Авторитетность на уровне 28 — связывающее ограничение.',
  'ChatGPT supplier recommendation presence':
    'Присутствие в рекомендациях поставщиков в ChatGPT',
  'The most-used engine puts Northwind forward in one of twenty-four decision questions.':
    'Самый используемый движок выдвигает Northwind в одном из двадцати четырёх вопросов решения.',
  '3 independent sources against a category median of 14.':
    '3 независимых источника против медианы по категории 14.',
  'Authority is the binding constraint, so it is where intervention begins.':
    'Связывающее ограничение — авторитетность, поэтому вмешательство начинается с неё.',
  'Paid search is bought to cover the questions authority no longer wins.':
    'Платный поиск покупают, чтобы закрыть вопросы, которые авторитетность больше не выигрывает.',
  'Emerging market at 63/100 readiness. Query maturity accelerating.':
    'Формирующийся рынок с готовностью 63/100. Зрелость запросов ускоряется.',
  'The window remains open but is narrowing. Displacement cost rises once engines settle on a stable answer set.':
    'Окно ещё открыто, но сужается. Стоимость вытеснения растёт, как только движки закрепляются на устойчивом наборе ответов.',
  'Decision deadline': 'Срок принятия решения',
  'Timing window': 'Временное окно',
  months: 'мес.',
  'Causal signal chain': 'Причинная цепочка сигналов',
  'The measures above are not independent. This is the chain that connects them, ending in the intervention it implies.':
    'Показатели выше не независимы. Это цепочка, которая их связывает и заканчивается вытекающим из неё вмешательством.',
  'One decision. Many signals. One explanation.':
    'Одно решение. Много сигналов. Одно объяснение.',
  'Open evidence': 'Открыть доказательства',
  'Open Action Center': 'Открыть центр действий',
  'Reconstruct the decision': 'Реконструировать решение',
  'Explore intelligence engines': 'Изучить движки интеллекта',

  /* --- Executive intelligence feed ------------------------------------------------- */
  'Executive intelligence feed': 'Интеллект-лента для руководства',
  '{n} events': 'событий: {n}',
  'Competitor surge': 'Рывок конкурента',
  'Kestrel Industrial gained the first recommendation on two more supplier questions':
    'Kestrel Industrial получила первую рекомендацию ещё по двум вопросам о поставщиках',
  'Kestrel now leads four of seven supplier-evaluation answers, up from two. Both new wins cite a trade publication added in June.':
    'Kestrel теперь возглавляет четыре ответа об оценке поставщиков из семи вместо двух. Обе новые победы ссылаются на отраслевое издание, добавленное в июне.',
  'Citation lost': 'Потеряно цитирование',
  'Perplexity stopped citing the Northwind capability page':
    'Perplexity перестал ссылаться на страницу возможностей Northwind',
  'The page was cited on three questions in June and none in July. Perplexity now resolves the same questions to competitor sources.':
    'В июне на страницу ссылались по трём вопросам, в июле — ни по одному. Теперь Perplexity сводит те же вопросы к источникам конкурентов.',
  '3 → 0 citations': '3 → 0 цитирований',
  '25 searches/mo': '25 запросов/мес.',
  '+1 question': '+1 вопрос',
  '+2 questions': '+2 вопроса',
  '+8% QoQ': '+8% кв/кв',
  '+8% CPC': '+8% цена клика',
  'per month': 'в месяц',
  '$3,200 – $6,200 per month': '3 200–6 200 $ в месяц',
  'per quarter': 'в квартал',
  'per year': 'в год',
  'Narrative risk': 'Риск нарратива',
  'Engines adopted a competitor’s evaluation criteria':
    'Движки переняли критерии оценки конкурента',
  'Fill rate and catalogue breadth are now cited first when engines explain how to choose a distributor. Regional response time is not referenced.':
    'Уровень выполнения заказов и широту каталога теперь называют первыми, когда движки объясняют, как выбирать дистрибьютора. Региональное время отклика не упоминается.',
  'Trust signal decayed': 'Сигнал доверия ослаб',
  'Category description diverged across two trade directories':
    'Описание категории разошлось в двух отраслевых каталогах',
  'Two directories now describe Northwind differently from its own site. Inconsistency is the mechanism behind entity confusion on ChatGPT and Copilot.':
    'Два каталога теперь описывают Northwind иначе, чем её собственный сайт. Именно несогласованность и есть механизм путаницы с сущностью в ChatGPT и Copilot.',
  'Search cost spike': 'Скачок стоимости поиска',
  'Blended CPC moved further above break-even':
    'Смешанная цена клика ушла ещё выше точки безубыточности',
  '“industrial supply company” rose to $11.00 with no organic position in the top 100. Paid is covering a question authority does not reach.':
    '«компания промышленного снабжения» выросла до 11,00 $ при отсутствии органической позиции в первой сотне. Платное закрывает вопрос, до которого не дотягивается авторитетность.',
  'New decision question': 'Новый вопрос решения',
  'A new supplier-evaluation question entered the tracked set':
    'В отслеживаемый набор вошёл новый вопрос об оценке поставщиков',
  '“Which MRO supplier has the best fill rate?” appeared with measurable volume. Northwind is absent from every engine answering it.':
    '«У какого поставщика MRO самый высокий уровень выполнения заказов?» появился с измеримым объёмом. Northwind отсутствует во всех движках, отвечающих на него.',
  'Recommendation gained': 'Получена рекомендация',
  'Claude began recommending Northwind for regional distributor questions':
    'Claude начал рекомендовать Northwind по вопросам о региональных дистрибьюторах',
  'First recommendation on “Top rated industrial supply vendors near Chicago”. Regional specificity is the differentiator the answer cites.':
    'Первая рекомендация по запросу «Поставщики промышленного снабжения с лучшими оценками рядом с Чикаго». Отличием, на которое ссылается ответ, стала региональная привязка.',
  'Regional opportunity': 'Региональная возможность',
  'Midwest regional questions show weaker competitive density':
    'Региональные вопросы по Среднему Западу показывают меньшую конкурентную плотность',
  'Questions naming a Midwest location carry lower competitor control than national equivalents — the cheapest available entry point.':
    'Вопросы с упоминанием места на Среднем Западе меньше контролируются конкурентами, чем их общенациональные аналоги, — самая дешёвая из доступных точек входа.',
  'Competitive density rose 8% quarter over quarter':
    'Конкурентная плотность выросла на 8% квартал к кварталу',

  /* ==========================================================================
     STRATEGIC ACTION CENTER
     ====================================================================== */
  'Strategic Action Center': 'Центр стратегических действий',
  'Prioritised interventions with owner, deadline, expected movement and how impact is verified after execution.':
    'Приоритизированные вмешательства с ответственным, сроком, ожидаемым движением и способом проверки эффекта после выполнения.',
  '{n}-day': '{n} дн.',
  'Each intervention names an owner, a deadline, the signal it should move and how that movement will be verified.':
    'Каждое вмешательство называет ответственного, срок, сигнал, который оно должно сдвинуть, и то, как это движение будет проверено.',
  Interventions: 'Вмешательства',
  Measured: 'Измерено',
  'Verified after execution': 'Проверяется после выполнения',
  View: 'Открыть',
  'Priority queue': 'Очередь приоритетов',
  '30/60/90 roadmap': 'Дорожная карта 30/60/90',
  'day horizon': 'дневной горизонт',
  'Ranked by urgency, then by effort — cheapest decisive move first':
    'Отранжировано по срочности, затем по трудозатратам — самый дешёвый решающий шаг первым',
  'Priority {n}': 'Приоритет {n}',
  'Not yet measured — verified after execution.':
    'Пока не измерено — проверяется после выполнения.',
  'View evidence': 'Смотреть доказательства',
  'How impact is verified': 'Как проверяется эффект',
  'Completion is not impact. Each action is verified by re-observing the signal it targets, across the same engines and questions, after execution. Until that re-observation happens, measured change stays empty rather than assumed.':
    'Выполнение — это не эффект. Каждое действие проверяется повторным наблюдением того сигнала, на который оно нацелено, по тем же движкам и вопросам, после выполнения. Пока такого повторного наблюдения нет, измеренное изменение остаётся пустым, а не предполагаемым.',
  'Back to Mission Control': 'Назад в центр управления',
  'Read the methodology': 'Прочитать методологию',

  /* Page descriptions. These render into <meta name="description"> rather than
     into the page, so the render audit cannot see them — it reads visible
     prose and a short list of perceivable attributes. Four of them sat in
     English through every clean audit this site has passed. */
  'Decision Health, revenue exposure, competitive capture, narrative control and strategic timing in one decision position.':
    'Состояние решения, потери выручки, конкурентный перехват, контроль нарратива и стратегический тайминг — в одной позиции для решения.',
  'Should we launch this campaign today? A pre-campaign assessment of the business rather than the campaign — AI, authority, trust, narrative, competitive position and destination readiness, weighted into one decision.':
    'Запускать ли эту кампанию сегодня? Предкампанийная оценка бизнеса, а не кампании: ИИ, авторитетность, доверие, нарратив, конкурентная позиция и готовность посадочной стороны, сведённые в одно решение.',
  'What story is the market telling about us, and how is it influencing decisions? Active narratives, who owns each one, where they are heading, and what should change.':
    'Какую историю рынок рассказывает о нас и как она влияет на решения? Активные нарративы, кто владеет каждым из них, куда они движутся и что должно измениться.',
  'Enter a domain and select a commercial question. Reconstruct what each AI engine understood, who received the decision, why, and what must change.':
    'Введите домен и выберите коммерческий вопрос. Реконструируйте, что понял каждый движок ИИ, кому досталось решение, почему и что должно измениться.',

  /* ==========================================================================
     MARKETPLACE AND ENGINE DETAIL PAGES

     Nineteen routes that were never audited until the route list was
     enumerated properly. Composites the audit prints — "Entry · Snapshot",
     "12 modules", "Next: …" — are NOT keys; the component joins two
     translated halves.
     ====================================================================== */

  /* --- Product page chrome --------------------------------------------------------- */
  Breadcrumb: 'Хлебные крошки',
  'Intelligence Marketplace': 'Магазин интеллекта',
  'Intelligence Engines': 'Движки интеллекта',
  'Product detail': 'О продукте',
  'Everything needed to decide, without a sales call':
    'Всё, что нужно для решения, без звонка менеджеру',
  'What you receive': 'Что вы получаете',
  'A real readout from this product, on seeded data':
    'Настоящая сводка этого продукта на заложенных данных',
  'Every intelligence product returns the same twelve-section anatomy: executive truth, business meaning, evidence, connected signals, competitor context, commercial exposure, timing, trend, prescription, expected movement, owner and measurement.':
    'Каждый интеллект-продукт возвращает одну и ту же структуру из двенадцати разделов: управленческая правда, деловой смысл, доказательства, связанные сигналы, контекст конкурентов, коммерческие потери, тайминг, динамика, предписание, ожидаемое движение, ответственный и измерение.',
  'One-time purchase. Placeholder pricing.': 'Разовая покупка. Цены условные.',
  'Buy this intelligence product': 'Купить этот интеллект-продукт',
  'Buy {name}': 'Купить «{name}»',
  'Compare with a subscription': 'Сравнить с подпиской',
  'See the full ecosystem': 'Посмотреть всю экосистему',
  'by {date}': 'к {date}',

  /* --- The eleven product fields --------------------------------------------------- */
  'Business question': 'Бизнес-вопрос',
  'Decision consequence': 'Последствие для решения',
  'What it detects': 'Что выявляет',
  'Required inputs': 'Необходимые данные',
  Scope: 'Охват',
  'Intelligence depth': 'Глубина интеллекта',
  Delivery: 'Поставка',
  'Time to delivery': 'Срок поставки',
  'Commercial terms': 'Коммерческие условия',
  'Upgrade path': 'Путь расширения',
  Depth: 'Глубина',
  Date: 'Дата',
  Finding: 'Вывод',
  Engine: 'Движок',
  Observed: 'Наблюдение',
  Live: 'Работает',
  You: 'Вы',

  /* Tier display labels. The component maps the lowercase discriminants
     (entry / advanced / premium) onto these before translating — see the
     TIER_LABEL note in marketplace/[slug]/page.tsx. */
  Entry: 'Базовый',
  'Advanced tier': 'Продвинутый',
  Premium: 'Премиум',
  /* Depth values. Already capitalised in the seed, so no collision. */
  Snapshot: 'Срез',
  Advanced: 'Углублённый',
  Strategic: 'Стратегический',
  Executive: 'Управленческий',

  /* --- Category page --------------------------------------------------------------- */
  'All intelligence categories': 'Все категории интеллекта',
  'Other intelligence categories': 'Другие категории интеллекта',
  'Every module answers one question.': 'Каждый модуль отвечает на один вопрос.',
  'Each returns the evidence behind its answer, what that answer means commercially, and what should change as a result.':
    'Каждый возвращает доказательства, стоящие за его ответом, коммерческий смысл этого ответа и то, что в результате должно измениться.',
  'Buy this intelligence': 'Купить этот интеллект',
  'Take one question, or take the whole category.':
    'Возьмите один вопрос — или всю категорию.',
  'Each purchase states what it examines, what it needs from you, how confident it can be and what it costs. No sales call is required to find any of that out.':
    'Каждая покупка сообщает, что именно она исследует, что ей нужно от вас, насколько уверенной она может быть и сколько стоит. Чтобы узнать это, звонок менеджеру не нужен.',
  'One engine produces this category.': 'Эту категорию производит один движок.',
  '{n} engines produce this category.': 'Эту категорию производят движков: {n}.',
  'Engines are the machinery, not the offer. Nothing above required you to know one existed.':
    'Движки — это механика, а не предложение. Ничто выше не требовало от вас знать, что они существуют.',
  '{n} modules': 'модулей: {n}',
  '<b>{n}</b> intelligence modules in this category.':
    '<b>{n}</b> интеллект-модулей в этой категории.',
  '<b>{n}</b> intelligence modules in this category · <b>{live}</b> running live in this environment.':
    '<b>{n}</b> интеллект-модулей в этой категории · <b>{live}</b> работают в этой среде вживую.',
  Built: 'Построен',
  'In platform': 'В платформе',
  'In the platform': 'В платформе',

  /* --- Engine detail page ---------------------------------------------------------- */
  'Intelligence readout': 'Интеллект-сводка',
  'What this engine concluded': 'К чему пришёл этот движок',
  'Signal, evidence, consequence, action': 'Сигнал, доказательство, следствие, действие',
  'Screens this engine provides': 'Экраны, которые даёт этот движок',
  'Next: {name}': 'Далее: {name}',

  /* --- Delivery, scope and inputs -------------------------------------------------- */
  'After scan completion — typically under 20 minutes':
    'По завершении сканирования — обычно менее 20 минут',
  'After scan completion — typically under 30 minutes':
    'По завершении сканирования — обычно менее 30 минут',
  'After scan completion — typically under 60 minutes':
    'По завершении сканирования — обычно менее 60 минут',
  'Expert-reviewed — within 3 business days':
    'С проверкой экспертом — в течение 3 рабочих дней',
  'Optional: Search Console': 'По желанию: Search Console',
  'Optional: Search Console and Analytics':
    'По желанию: Search Console и Google Analytics',
  'Up to 4 competitors': 'До 4 конкурентов',
  'Google + 6 engines': 'Google + 6 движков',
  '6 AI engines · entity and category association · 1 market':
    '6 движков ИИ · привязка сущности и категории · 1 рынок',
  '6 AI engines · 20 commercial questions · 4 competitors · 1 market':
    '6 движков ИИ · 20 коммерческих вопросов · 4 конкурента · 1 рынок',
  '6 AI engines · 24 decision questions · 4 competitors':
    '6 движков ИИ · 24 вопроса решения · 4 конкурента',
  '6 AI engines · 24 decision questions · 5 decision stages':
    '6 движков ИИ · 24 вопроса решения · 5 этапов решения',
  '6 AI engines · 24 questions · 20 keywords · 4 competitors · full GEON assessment':
    '6 движков ИИ · 24 вопроса · 20 запросов · 4 конкурента · полная оценка GEON',
  '6 AI engines · 24 questions · 4 competitors · citation analysis':
    '6 движков ИИ · 24 вопроса · 4 конкурента · анализ цитирований',
  '6 AI engines · 24 questions · 5 stages · 4 competitors':
    '6 движков ИИ · 24 вопроса · 5 этапов · 4 конкурента',
  'Public trust and reputation sources · 1 market':
    'Публичные источники доверия и репутации · 1 рынок',
  'Continuous monitoring, additional markets, or the full platform with history and alerts.':
    'Непрерывный мониторинг, дополнительные рынки или полная платформа с историей и оповещениями.',
  'Continuous monitoring, quarterly executive regeneration, or enterprise implementation.':
    'Непрерывный мониторинг, ежеквартальное обновление управленческой сводки или корпоративное внедрение.',
  'Continuous prompt monitoring and visibility trends.':
    'Непрерывный мониторинг запросов и динамика видимости.',
  'Continuous competitor monitoring and momentum tracking.':
    'Непрерывный мониторинг конкурентов и отслеживание импульса.',
  'Continuous monitoring with stage-level alerting.':
    'Непрерывный мониторинг с оповещениями на уровне этапа.',
  'Competitive War Room with continuous monitoring.':
    'Конкурентный штаб с непрерывным мониторингом.',
  'Recognition history and decay monitoring.':
    'История распознавания и мониторинг угасания.',
  'Reputation momentum and trust decay monitoring.':
    'Импульс репутации и мониторинг угасания доверия.',
  'Interactive workspace': 'Интерактивное рабочее пространство',
  'Downloadable intelligence brief': 'Интеллект-справка для скачивания',
  'Expert interpretation': 'Экспертная интерпретация',
  'Evidence pack': 'Пакет доказательств',
  'Action plan': 'План действий',
  ' of 20': ' из 20',
  ' of 24': ' из 24',

  /* --- Product names. Descriptive rather than branded, so translated. -------------- */
  'AI Recognition Scan': 'Скан распознавания в ИИ',
  'AI Recognition Scan | GeoRepute': 'Скан распознавания в ИИ | GeoRepute',
  'AI Search Presence Scan': 'Скан присутствия в поиске ИИ',
  'AI Search Presence Scan | GeoRepute': 'Скан присутствия в поиске ИИ | GeoRepute',
  'Google vs AI Gap Scan': 'Скан разрыва между Google и ИИ',
  'Google vs AI Gap Scan | GeoRepute': 'Скан разрыва между Google и ИИ | GeoRepute',
  'Competitor Recommendation Scan': 'Скан рекомендаций конкурентов',
  'Competitor Recommendation Scan | GeoRepute':
    'Скан рекомендаций конкурентов | GeoRepute',
  'Trust Signals Scan': 'Скан сигналов доверия',
  'Trust Signals Scan | GeoRepute': 'Скан сигналов доверия | GeoRepute',
  'Decision Journey Diagnostic': 'Диагностика пути решения',
  'Decision Journey Diagnostic | GeoRepute': 'Диагностика пути решения | GeoRepute',
  'Competitive Position Assessment': 'Оценка конкурентной позиции',
  'Competitive Position Assessment | GeoRepute':
    'Оценка конкурентной позиции | GeoRepute',
  'Executive Intelligence Brief': 'Интеллект-справка для руководства',
  'Executive Intelligence Brief | GeoRepute':
    'Интеллект-справка для руководства | GeoRepute',
  'Decision Reconstruction — a completed reconstruction':
    'Реконструкция решения — завершённая реконструкция',
  'Mission Control → the composite Decision Health position panel':
    'Центр управления → сводная панель позиции «Состояние решения»',
  'One commercial question, reconstructed from what each engine understood to what must change. Anonymised demonstration data.':
    'Один коммерческий вопрос, реконструированный от того, что понял каждый движок, до того, что должно измениться. Обезличенные демонстрационные данные.',
  'One decision position rather than ten measures. Anonymised demonstration data.':
    'Одна позиция для решения вместо десяти показателей. Обезличенные демонстрационные данные.',

  /* --- Module business questions ---------------------------------------------------
     The category page leads with the question, not the module name. */
  'Does AI understand what the business actually does?':
    'Понимает ли ИИ, чем бизнес занимается на самом деле?',
  'Do AI engines understand who the business is and what it offers?':
    'Понимают ли движки ИИ, что это за бизнес и что он предлагает?',
  'Which AI systems know the business exists, and which do not?':
    'Какие системы ИИ знают о существовании бизнеса, а какие нет?',
  'Is AI confusing the business with someone else?':
    'Путает ли ИИ бизнес с кем-то другим?',
  'Is AI describing a version of the business that no longer exists?':
    'Описывает ли ИИ версию бизнеса, которой больше не существует?',
  'Is the business becoming less recognised over time?':
    'Становится ли бизнес со временем менее узнаваемым?',
  'Is the business visible when customers ask for recommendations?':
    'Виден ли бизнес, когда клиенты просят рекомендаций?',
  'When a buyer describes a need, is the business in the set AI considers?':
    'Когда покупатель описывает потребность, попадает ли бизнес в набор, который рассматривает ИИ?',
  'Across the questions buyers actually ask, how often does the business appear at all?':
    'По вопросам, которые покупатели действительно задают, как часто бизнес вообще появляется?',
  'Of all the recommendations made in this category, what share names the business?':
    'Из всех рекомендаций в этой категории какая доля называет бизнес?',
  'On those same questions, does AI put the business forward at all?':
    'По тем же вопросам — выдвигает ли ИИ бизнес вообще?',
  'Do the two discovery surfaces tell the same story about us?':
    'Рассказывают ли две поверхности обнаружения одну и ту же историю о нас?',
  'Is the business aligned across traditional search and AI discovery?':
    'Согласован ли бизнес между традиционным поиском и обнаружением через ИИ?',
  'Which commercial questions are invisible on both surfaces at once?':
    'Какие коммерческие вопросы невидимы сразу на обеих поверхностях?',
  'Where does the business rank on the questions that carry commercial intent?':
    'Как бизнес ранжируется по вопросам с коммерческим намерением?',
  'Where does existing authority already rank but fail to reach AI?':
    'Где имеющаяся авторитетность уже ранжируется, но не доходит до ИИ?',
  'What kind of gap is this, and does it deserve investment?':
    'Что это за разрыв и заслуживает ли он вложений?',
  'What is the business actually paying per commercial click?':
    'Сколько бизнес на самом деле платит за коммерческий клик?',
  'Above what price does a click stop making money?':
    'Выше какой цены клик перестаёт приносить деньги?',
  'How much of current demand would disappear if paid search stopped tomorrow?':
    'Какая часть текущего спроса исчезнет, если платный поиск остановить завтра?',
  'Which paid positions could be replaced by owned authority?':
    'Какие платные позиции можно заменить собственной авторитетностью?',
  'Is the cost of the same position rising, and how fast?':
    'Растёт ли стоимость той же позиции и насколько быстро?',
  'Who is being recommended instead of the business, and how often?':
    'Кого рекомендуют вместо бизнеса и как часто?',
  'Who is recommended instead, where and why?':
    'Кого рекомендуют вместо, где и почему?',
  'Why do competitors capture the decision?': 'Почему решение достаётся конкурентам?',
  'What specifically makes a competitor recommendable?':
    'Что именно делает конкурента достойным рекомендации?',
  'How much more evidence supports them than supports us?':
    'Насколько больше доказательств поддерживает их, чем нас?',
  'Which specific questions does each competitor own?':
    'Какими конкретными вопросами владеет каждый конкурент?',
  'At which stage does each competitor take control?':
    'На каком этапе каждый конкурент берёт контроль?',
  'Where is the leading competitor actually weak?':
    'В чём ведущий конкурент на самом деле слаб?',
  'How easily could a competitor take the narrative from us?':
    'Насколько легко конкурент может отобрать у нас нарратив?',
  'Do the sources that mention the business carry any weight?':
    'Имеют ли вес источники, упоминающие бизнес?',
  'How much of what the business claims can anyone else confirm?':
    'Какую часть заявлений бизнеса может подтвердить кто-то ещё?',
  'When AI cites a source to justify an answer, is any of it yours?':
    'Когда ИИ ссылается на источник, обосновывая ответ, есть ли среди них ваши?',
  'Which sources are shaping what AI believes about the business?':
    'Какие источники формируют представление ИИ о бизнесе?',
  'Which trust signals strengthen or weaken recommendation readiness?':
    'Какие сигналы доверия усиливают или ослабляют готовность к рекомендации?',
  'Is the evidence supporting the business ageing?':
    'Устаревают ли доказательства, поддерживающие бизнес?',
  'Where does the business disappear during the buyer decision process?':
    'Где бизнес исчезает в процессе принятия решения покупателем?',
  'At which point in the buying journey does presence collapse?':
    'В какой точке пути покупки присутствие обрушивается?',
  'Which specific buying questions complete without the business ever being named?':
    'Какие конкретные закупочные вопросы завершаются так, что бизнес ни разу не назван?',
  'How many buying decisions are actually in play?':
    'Сколько закупочных решений реально на кону?',
  'What is one of those decisions worth to the business?':
    'Сколько одно такое решение стоит для бизнеса?',
  'What is the gap worth, and how confident can we be?':
    'Сколько стоит разрыв и насколько мы можем быть в этом уверены?',
  'What has to be true for this estimate to hold?':
    'Что должно быть верно, чтобы эта оценка держалась?',
  'Which of those blind spots are also high value?':
    'Какие из этих слепых зон при этом ещё и ценны?',
  'Which of our genuine advantages does the market never mention?':
    'Какие из наших настоящих преимуществ рынок никогда не упоминает?',
  'How much of the language used to describe this category belongs to the business?':
    'Какая часть языка, которым описывают эту категорию, принадлежит бизнесу?',
  'Whose framing do machines use when they explain the category?':
    'Чьей рамкой пользуются машины, объясняя категорию?',
  'Which criteria do machines cite first when explaining a choice?':
    'Какие критерии машины называют первыми, объясняя выбор?',
  'Does the market think the business is expensive?':
    'Считает ли рынок бизнес дорогим?',
  'Is this market forming, forming fast, or already settled?':
    'Этот рынок формируется, формируется быстро или уже устоялся?',
  'Do buyers know enough yet to be worth persuading?':
    'Знают ли покупатели уже достаточно, чтобы их стоило убеждать?',
  'Which markets are ready to be entered now?':
    'На какие рынки можно выходить уже сейчас?',
  'How quickly is the position moving, and in which direction?':
    'Насколько быстро движется позиция и в каком направлении?',
  'Where in the world is the business strong, and where is it absent?':
    'Где в мире бизнес силён, а где его нет?',
  'Does the business mean the same thing in every market?':
    'Означает ли бизнес одно и то же на каждом рынке?',
  'Does the business mean something different in each country?':
    'Означает ли бизнес что-то своё в каждой стране?',
  'Does the business tell the same story everywhere it appears?':
    'Рассказывает ли бизнес одну и ту же историю везде, где появляется?',
  'Do partners describe the business the way it describes itself?':
    'Описывают ли партнёры бизнес так же, как он описывает себя?',
  'How much of the market position rests on intermediaries?':
    'Какая часть рыночной позиции держится на посредниках?',
  'How easily could the business be swapped out of the channel?':
    'Насколько легко бизнес можно заменить внутри канала?',
  'Can the channel explain why the business costs more?':
    'Может ли канал объяснить, почему бизнес стоит дороже?',
  'What is the complete management position on risk, opportunity, timing and action?':
    'Какова полная управленческая позиция по риску, возможностям, таймингу и действиям?',
  'What should the business do, in what order?':
    'Что бизнесу следует делать и в каком порядке?',
  'Which intervention returns most, and what is currently blocked?':
    'Какое вмешательство даёт наибольшую отдачу и что сейчас заблокировано?',
  'What lands this month, this quarter, and this year?':
    'Что будет сделано в этом месяце, в этом квартале и в этом году?',
  'How long before an intervention shows up in the numbers?':
    'Сколько пройдёт, прежде чем вмешательство отразится в цифрах?',
  'Did the work move the signal it was supposed to move?':
    'Сдвинула ли работа тот сигнал, который должна была сдвинуть?',

  /* --- What each module detects, and why it matters commercially ------------------- */
  'An engine that cannot categorise a business cannot recommend it. Entity confusion sits upstream of every visibility metric — content investment cannot move an answer while the underlying record is wrong.':
    'Движок, который не может отнести бизнес к категории, не может его и рекомендовать. Путаница с сущностью находится выше любой метрики видимости: вложения в контент не сдвинут ответ, пока сама запись неверна.',
  'Name collisions, merged records and mistaken identities — a single unresolved conflation can remove a business from every answer in its category.':
    'Совпадения имён, слитые записи и ошибочные отождествления: одна неразрешённая путаница способна убрать бизнес из каждого ответа в его категории.',
  'Discontinued lines, closed locations, former ownership and superseded positioning still being repeated to buyers as current fact.':
    'Снятые с производства линейки, закрытые площадки, прежние владельцы и устаревшее позиционирование — всё это до сих пор повторяется покупателям как актуальный факт.',
  'Recognition erodes when competitors keep publishing and you stop. Decay is measurable for months before it shows up as absence.':
    'Узнаваемость размывается, когда конкуренты продолжают публиковаться, а вы перестаёте. Угасание измеримо за месяцы до того, как проявится как отсутствие.',
  'Entity understanding and recommendation presence are separate measures. An engine can resolve the business correctly and still never put it forward — recognition is necessary for a recommendation, not sufficient.':
    'Понимание сущности и присутствие в рекомендациях — разные показатели. Движок может правильно определять бизнес и при этом ни разу его не выдвинуть: распознавание необходимо для рекомендации, но недостаточно.',
  'Coverage measured against real buying questions rather than keywords — the difference between being findable and being present.':
    'Покрытие, измеренное по реальным закупочным вопросам, а не по запросам, — разница между «вас можно найти» и «вы присутствуете».',
  'A market-share figure for a market nobody is currently measuring — recommendations issued, not clicks received.':
    'Показатель доли рынка для рынка, который сейчас никто не измеряет: выданные рекомендации, а не полученные клики.',
  'A business ranking in Google can still be absent from every AI answer that decides the vendor. The reverse is equally common. Each surface is a separate commercial asset, and channel asymmetry is invisible to both SEO and analytics tooling.':
    'Бизнес, ранжирующийся в Google, всё равно может отсутствовать в каждом ответе ИИ, который выбирает поставщика. Обратное встречается не реже. Каждая поверхность — отдельный коммерческий актив, а асимметрия каналов не видна ни SEO-инструментам, ни аналитике.',
  'Businesses that dominate one surface and disappear on the other — a divergence that stays invisible while each channel is reported separately.':
    'Компании, которые доминируют на одной поверхности и исчезают на другой, — расхождение, остающееся невидимым, пока каждый канал отчитывается отдельно.',
  'The most expensive class of gap — absent from both surfaces on a question that carries real volume and real intent.':
    'Самый дорогой класс разрыва: отсутствие сразу на обеих поверхностях по вопросу с реальным объёмом и реальным намерением.',
  'The cheapest wins available: questions where you have already done the work and only the machine-readable form of it is missing.':
    'Самые дешёвые из доступных побед: вопросы, по которым работа уже сделана и не хватает только её машиночитаемой формы.',
  'Cost per click weighted by the questions that decide purchases, rather than averaged across an account that includes cheap, irrelevant traffic.':
    'Цена клика, взвешенная по вопросам, которые решают покупки, а не усреднённая по аккаунту, включающему дешёвый нерелевантный трафик.',
  'A computed ceiling from deal value, margin and conversion — the number most advertising accounts are managed without ever calculating.':
    'Расчётный потолок из стоимости сделки, маржи и конверсии — число, которое большинство рекламных аккаунтов не вычисляет никогда.',
  'A costed switch list — which spend can be retired, what has to be published first, and how long the replacement takes to hold.':
    'Просчитанный список замен: какие расходы можно свернуть, что нужно опубликовать сначала и сколько времени замена набирает устойчивость.',
  'Competitive density expressed as a price trend, so the structural cost of staying still becomes visible before the budget review.':
    'Конкурентная плотность, выраженная как ценовой тренд, чтобы структурная стоимость бездействия стала видна до защиты бюджета.',
  'Whether paid is buying growth or renting positions that authority would otherwise hold for free.':
    'Покупает ли платный канал рост — или арендует позиции, которые авторитетность удерживала бы бесплатно.',
  'Knowing a competitor wins is not actionable. Knowing which evidence engines cite when they recommend that competitor is. This separates brand preference from an evidence gap you can close.':
    'Знание того, что конкурент выигрывает, не даёт повода к действию. Знание того, на какие доказательства ссылаются движки, рекомендуя его, — даёт. Это отделяет предпочтение бренда от разрыва в доказательствах, который можно закрыть.',
  'The individual assets a machine reaches for when it justifies choosing them — publications, comparisons, specifications, verified outcomes.':
    'Конкретные активы, к которым обращается машина, обосновывая их выбор: публикации, сравнения, спецификации, подтверждённые результаты.',
  'Structured comparison of the evidence each competitor supplies to engines, and what it would take to match it. Converts a share gap into a specific, costed evidence programme.':
    'Структурированное сравнение доказательств, которые каждый конкурент поставляет движкам, и того, что нужно, чтобы с ними сравняться. Превращает разрыв в доле в конкретную просчитанную программу доказательств.',
  'The questions a dominant rival does not answer, does not cover, or answers badly — the cheapest available places to take share.':
    'Вопросы, на которые доминирующий соперник не отвечает, не покрывает или отвечает плохо, — самые дешёвые места, где можно взять долю.',
  'The share of visibility owned by partners rather than by the business, which is the share that leaves if the relationship ends.':
    'Доля видимости, принадлежащая партнёрам, а не бизнесу, — та самая доля, которая уходит, если отношения заканчиваются.',
  'Visibility creates attention; trust creates selection. A business can be found and still be filtered out when an engine has to stand behind naming it first.':
    'Видимость создаёт внимание; доверие создаёт выбор. Бизнес можно найти и всё равно отсеять, когда движку приходится отвечать за то, что он назвал его первым.',
  'A countable ratio of independent sources, which turns an abstract brand gap into a publishing programme with a known scope and cost.':
    'Поддающееся счёту соотношение независимых источников, которое превращает абстрактный разрыв бренда в издательскую программу с известным объёмом и стоимостью.',
  'Being mentioned and being cited are different commercial positions. Only one of them survives into the next answer the system gives.':
    'Быть упомянутым и быть процитированным — разные коммерческие позиции. Только одна из них доживает до следующего ответа системы.',
  'The small set of pages that disproportionately determine every answer given — frequently including a directory nobody at the company knows exists.':
    'Небольшой набор страниц, непропорционально определяющий каждый выдаваемый ответ, — нередко включая каталог, о существовании которого в компании никто не знает.',
  'Proof has a shelf life. Case studies, coverage and reviews lose weight with age, and the decline is measurable before selection stops.':
    'У доказательств есть срок годности. Кейсы, публикации и отзывы теряют вес со временем, и спад измерим ещё до того, как выбор прекращается.',
  'Most businesses lose the decision at one specific stage, not evenly across the journey. Locating that stage tells you where intervention returns most, and where further investment returns nothing.':
    'Большинство компаний теряют решение на одном конкретном этапе, а не равномерно по всему пути. Определив этот этап, вы узнаете, где вмешательство приносит больше всего, а где дальнейшие вложения не дают ничего.',
  'Losses concentrate at one stage rather than spreading evenly. Locating that stage tells you where intervention returns, and where it returns nothing.':
    'Потери концентрируются на одном этапе, а не распределяются равномерно. Определив его, вы узнаете, где вмешательство приносит отдачу, а где не приносит ничего.',
  'The exact questions where a decision was made and the business was not in the room. These are not lost leads; no lead was ever created.':
    'Точные вопросы, по которым решение было принято, а бизнеса в комнате не было. Это не потерянные лиды: лид никогда и не создавался.',
  'Questions where the decision happens entirely without you, and where no channel measurement can show it, because nothing ever reached a channel.':
    'Вопросы, где решение происходит полностью без вас и где никакое измерение канала этого не покажет, потому что до канала ничего так и не дошло.',
  'Presence averaged across all questions hides the collapse that matters. What decides revenue is presence at the supplier-evaluation stage, and that figure is usually far lower than the headline.':
    'Присутствие, усреднённое по всем вопросам, скрывает тот обвал, который важен. Выручку решает присутствие на этапе оценки поставщиков, и эта цифра обычно намного ниже заявленной.',
  'The size of the decision market itself, counted in decisions rather than in searches, sessions or impressions.':
    'Размер самого рынка решений, посчитанный в решениях, а не в поисках, сессиях или показах.',
  'Value per decision by stage and question type, so a high-volume gap is not automatically ranked above a low-volume, high-value one.':
    'Ценность одного решения по этапу и типу вопроса, чтобы разрыв с большим объёмом не оказывался автоматически выше малообъёмного, но дорогого.',
  'A directional range with its confidence stated — never a single confident figure, and never described as confirmed lost revenue.':
    'Ориентировочный диапазон с указанной уверенностью — никогда не единственная уверенная цифра и никогда не «подтверждённая упущенная выручка».',
  'Every assumption behind an exposure figure, stated and editable — because a number whose assumptions are hidden cannot be argued with or trusted.':
    'Каждое допущение за цифрой потерь, изложенное и редактируемое, — потому что с числом, чьи допущения скрыты, нельзя ни спорить, ни доверять ему.',
  'Real differentiators that never appear in any category description — strengths the market currently has no vocabulary to express.':
    'Настоящие отличия, которые не встречаются ни в одном описании категории, — сильные стороны, для которых у рынка пока нет словаря.',
  'Whether buyers are evaluating against criteria a competitor published, which quietly decides the outcome before anyone is compared.':
    'Оценивают ли покупатели по критериям, опубликованным конкурентом, — что тихо решает исход ещё до того, как кого-то начали сравнивать.',
  'Where the business sits on a price spectrum in the eyes of machines describing it — an assumption that shapes shortlists before any quote is sent.':
    'Где бизнес находится на ценовой шкале в глазах описывающих его машин — допущение, формирующее короткие списки ещё до отправки любого предложения.',
  'Demand maturity and competitive density per market, so expansion is sequenced by readiness rather than by proximity or preference.':
    'Зрелость спроса и конкурентная плотность по каждому рынку, чтобы очередь на экспансию выстраивалась по готовности, а не по близости или симпатиям.',
  'Rate of change rather than a snapshot, so a strong position that is deteriorating is not mistaken for a safe one.':
    'Скорость изменения, а не моментальный срез, чтобы сильную, но ухудшающуюся позицию не приняли за безопасную.',
  'Position measured market by market, which routinely contradicts the single global figure a company believes it has.':
    'Позиция, измеренная рынок за рынком, что регулярно противоречит единственной глобальной цифре, в которую верит компания.',
  'How category, positioning and reputation change across borders, including markets where the business is understood as a different kind of company entirely.':
    'Как категория, позиционирование и репутация меняются за границами, включая рынки, где бизнес понимают как компанию совсем другого рода.',
  'Where positioning drifts by geography or language, so a business is a category leader in one market and an unknown in the next.':
    'Где позиционирование расходится по географии или языку, из-за чего бизнес — лидер категории на одном рынке и неизвестен на следующем.',
  'Where a channel partner’s description of your product is what machines have learned — and where that description is wrong.':
    'Где описание вашего продукта, данное партнёром по каналу, и есть то, что выучили машины, — и где это описание неверно.',
  'Whether the brand is specified by name or treated as an interchangeable supplier — usually the more expensive answer of the two.':
    'Указывают ли бренд по имени или относятся к нему как к взаимозаменяемому поставщику — обычно это более дорогой из двух ответов.',
  'Whether the reasons for a premium survive the trip through distribution, or arrive at the buyer as an unexplained higher number.':
    'Переживают ли причины наценки путь через дистрибуцию — или доходят до покупателя как необъяснённое большее число.',
  'A board-ready position rather than a dashboard. States what is happening, what it means commercially, what the directional exposure is, how long the window stays open, and what must change — with owners and deadlines.':
    'Позиция, готовая для совета директоров, а не дашборд. Излагает, что происходит, что это значит коммерчески, каковы ориентировочные потери, сколько окно остаётся открытым и что должно измениться — с ответственными и сроками.',
  'Ranked by exposure, confidence, urgency, effort and competitor pressure.':
    'Отранжировано по потерям, уверенности, срочности, трудозатратам и давлению конкурентов.',
  'The lag between doing the work and seeing the movement, which is what stops a working programme from being cancelled a month too early.':
    'Задержка между выполнением работы и появлением движения — именно она не даёт отменить работающую программу на месяц раньше времени.',
  'Measured change against the predicted change, including the interventions that did not work — which is the only way the model earns trust.':
    'Измеренное изменение против предсказанного, включая вмешательства, которые не сработали, — единственный способ, которым модель зарабатывает доверие.',
  'Corroborated claims reduce the risk an engine takes in naming a supplier first.':
    'Подтверждённые заявления снижают риск, который движок берёт на себя, называя поставщика первым.',

  /* --- Readout labels and competitor findings -------------------------------------- */
  'Category description': 'Описание категории',
  'Category resolved': 'Категория определена',
  'Confusion and conflation': 'Путаница и смешение',
  'Recommendation presence': 'Присутствие в рекомендациях',
  'Recommendation share and momentum': 'Доля рекомендаций и импульс',
  'Recommendation share by stage': 'Доля рекомендаций по этапам',
  'Recommendation share across 24 decision questions':
    'Доля рекомендаций по 24 вопросам решения',
  'Mentions and citations': 'Упоминания и цитирования',
  'Social proof quality': 'Качество социального доказательства',
  'Source advantage analysis': 'Анализ преимущества источников',
  'Authority driver comparison': 'Сравнение драйверов авторитетности',
  'Competitor vulnerability': 'Уязвимость конкурента',
  'Competitor control per stage': 'Контроль конкурентов по этапам',
  'Competitive threat': 'Конкурентная угроза',
  'Default vendor threat': 'Угроза поставщика по умолчанию',
  'Why the competitor wins': 'Почему выигрывает конкурент',
  'Why they win': 'Почему они выигрывают',
  'Winning questions': 'Выигрышные вопросы',
  'Missed decision questions': 'Упущенные вопросы решения',
  'Gap classification per commercial question':
    'Классификация разрыва по коммерческим вопросам',
  'Question-to-stage mapping': 'Сопоставление вопроса с этапом',
  'Stage-by-stage coverage': 'Покрытие по этапам',
  'The stage where presence collapses': 'Этап, на котором обрушивается присутствие',
  'Strongest stage': 'Сильнейший этап',
  'Decision-journey position': 'Позиция на пути решения',
  'Revenue concentration by stage': 'Концентрация выручки по этапам',
  'Revenue split by decision stage': 'Распределение выручки по этапам решения',
  'Directional revenue exposure': 'Ориентировочные потери выручки',
  'Paid dependency exposure': 'Зависимость от платного канала',
  'Strategic blind spots': 'Стратегические слепые зоны',
  'Strategic timing window': 'Стратегическое временное окно',
  'Market and language': 'Рынок и язык',
  'What it believes': 'Во что он верит',
  'Not resolved': 'Не определено',
  Resolved: 'Определено',
  'Never recommends': 'Не рекомендует никогда',
  Unattributed: 'Не отнесено',
  'Independent authority evidence — the constraint holding every downstream signal.':
    'Независимые доказательства авторитетности — ограничение, удерживающее каждый последующий сигнал.',
  'Classified as a hardware retailer, not an MRO distributor.':
    'Отнесена к розничной торговле инструментами, а не к дистрибуции MRO.',
  'Conflated with a same-named logistics firm.':
    'Смешана с одноимённой логистической фирмой.',
  'No stable entity record. Category answered without naming any Midwest distributor.':
    'Устойчивой записи о сущности нет. Ответ по категории дан без упоминания хоть какого-то дистрибьютора Среднего Запада.',
  'No AI engine names Northwind in nineteen of the twenty-four tracked decision questions.':
    'Ни один движок ИИ не называет Northwind в девятнадцати из двадцати четырёх отслеживаемых вопросов решения.',
  'Named in seventeen of the nineteen questions where Northwind is absent.':
    'Названа в семнадцати из девятнадцати вопросов, где Northwind отсутствует.',
  'Kestrel named first in four of seven questions.':
    'Kestrel названа первой в четырёх вопросах из семи.',
  'Receives the recommendation in 31% of decisions and controls the supplier-evaluation stage.':
    'Получает рекомендацию в 31% решений и контролирует этап оценки поставщиков.',
  'Leads on the two most heavily weighted vectors.':
    'Лидирует по двум векторам с наибольшим весом.',
  'Authority and Visibility are where its investment has concentrated.':
    'Авторитетность и видимость — там, где сосредоточены её вложения.',
  'Independent validation lets engines recommend it without hedging.':
    'Независимое подтверждение позволяет движкам рекомендовать её без оговорок.',
  'Advantage compounds in the absence of a response.':
    'В отсутствие ответа преимущество накапливается.',
  'Holds position while no counter-intervention is running.':
    'Удерживает позицию, пока не запущено встречное вмешательство.',
  'Meridian publishes specification guidance that engines treat as category-defining language.':
    'Meridian публикует руководства по спецификациям, которые движки воспринимают как язык, определяющий категорию.',
  'Atlas is named on procurement checklists that engines cite at the point of purchase.':
    'Atlas названа в закупочных чек-листах, на которые движки ссылаются в момент покупки.',
  'Two of six interventions are low effort with measurable movement inside 60 days.':
    'Два вмешательства из шести малозатратны и дают измеримое движение в пределах 60 дней.',
  'Kestrel Industrial 31%. Meridian Supply Co 18%. Halvorsen Industrial 11%. Atlas Trade Group 7%. Northwind Supply 4.2%. Unattributed 28.8%':
    'Kestrel Industrial 31%. Meridian Supply Co 18%. Halvorsen Industrial 11%. Atlas Trade Group 7%. Northwind Supply 4,2%. Не отнесено 28,8%',
  'Not in top 100 organic. No AI recommendation. 320 searches per month.':
    'Нет в первой сотне органической выдачи. Рекомендаций ИИ нет. 320 поисков в месяц.',
  'Position 1 organic, AI present. Volume 40 per month.':
    'Позиция 1 в органике, присутствие в ИИ. Объём 40 в месяц.',
  'Position 3 and recommended — the pattern that works.':
    'Позиция 3 и рекомендация — схема, которая работает.',

  /* --- Tracked commercial keywords. Translated on the same reasoning as the
         home page's search queries — see the note beside those. ------------------- */
  'anchor bolts supplier': 'поставщик анкерных болтов',
  'fastener catalog request': 'запросить каталог крепежа',
  'fastener sourcing best practices': 'лучшие практики закупки крепежа',
  'industrial distributor fill rate':
    'уровень выполнения заказов промышленного дистрибьютора',
  'industrial supply account setup': 'открыть счёт на промышленное снабжение',
  'industrial supply near me': 'промышленное снабжение рядом со мной',
  'maintenance repair operations supplier':
    'поставщик для обслуживания, ремонта и эксплуатации',
  'mro consolidation vendor': 'поставщик для консолидации MRO',
  'mro supply agreement': 'договор на поставку MRO',
  'plant maintenance supplies': 'расходные материалы для обслуживания завода',
  'same day fastener shipping': 'отгрузка крепежа в день заказа',
  'stainless steel fasteners supplier': 'поставщик крепежа из нержавеющей стали',
}
