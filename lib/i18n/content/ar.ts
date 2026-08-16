import type { ContentOverlay } from './index'

/* ============================================================================
   Arabic content overlay — the seeded demonstration prose.

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

   RTL. Arabic renders right-to-left; the layout handles that through logical
   properties and `dir` on <html>, not here. Two things this file must respect:
     · Latin runs inside Arabic prose (GeoRepute, Gemini, $9.03) are isolated
       by `data-numeric` at the component level. Keep them as written.
     · A token like {pct} may sit anywhere in the sentence — that freedom is
       the whole reason t() keys on the template rather than the result.

   Anything absent falls through to English by construction.
   ========================================================================= */

export const content: ContentOverlay = {
  /* --- Organisation and market ---------------------------------------- */
  'Industrial MRO and fastener distribution':
    'توزيع مستلزمات الصيانة الصناعية وأدوات التثبيت',
  'United States — Midwest': 'الولايات المتحدة — الغرب الأوسط',

  /* ==========================================================================
     HOME PAGE — the prose written inline on the section components.

     Tokens in braces are substituted after lookup, so a translation may put
     {pct} wherever Arabic needs it. <b>…</b> marks an emphasised run and is
     rendered as a styled span, never as markup — it can move too.
     ======================================================================= */

  /* --- The premise ------------------------------------------------------ */
  'The shift': 'التحوّل',
  '{n} of {total}': '{n} من {total}',
  'By the time a visit, a click, a lead or a CRM record exists, the buyer has already decided which suppliers are worth contacting. That decision now happens inside AI systems, and it leaves no trace in any tool you currently own.':
    'بحلول اللحظة التي تظهر فيها زيارة أو نقرة أو عميل محتمل أو سجل في نظام إدارة العلاقات، يكون المشتري قد قرر بالفعل أي المورّدين يستحق التواصل معه. هذا القرار يجري الآن داخل أنظمة الذكاء الاصطناعي، ولا يترك أي أثر في أي أداة تملكها اليوم.',
  'commercial decisions complete without your business being named at all.':
    'قرارات تجارية تكتمل دون أن يُذكر نشاطكم التجاري إطلاقًا.',
  'No lead was lost, because no lead was ever created. Conventional measurement recorded nothing.':
    'لم يُفقد أي عميل محتمل، لأنه لم يُنشأ أصلًا. القياس التقليدي لم يسجّل شيئًا.',
  'presence at the stage where the supplier is actually chosen.':
    'حضور في المرحلة التي يُختار فيها المورّد فعليًا.',
  'That stage carries {volume} of the query volume and decides {revenue} of the revenue. Volume-ranked tooling calls it unimportant.':
    'تحمل هذه المرحلة {volume} من حجم الاستعلامات وتحسم {revenue} من الإيرادات. والأدوات التي ترتّب حسب الحجم تعدّها غير مهمة.',
  'more independent evidence supports the competitor engines recommend instead.':
    'أضعاف من الأدلة المستقلة تدعم المنافس الذي توصي به المحرّكات بدلًا منكم.',
  'Not a brand-preference gap. An evidence gap, and evidence can be commissioned.':
    'ليست فجوة في تفضيل العلامة التجارية، بل فجوة في الأدلة — والأدلة يمكن التكليف بإنتاجها.',

  /* --- Q1 · Does AI know your business? --------------------------------- */
  'Entity understanding': 'فهم الكيان',
  'AI systems understand what your business is in {score} of 100 commercial evaluations. One engine holds no stable record of you at all.':
    'تفهم أنظمة الذكاء الاصطناعي ماهية نشاطكم التجاري في {score} من كل 100 تقييم تجاري. وأحد المحرّكات لا يحتفظ بسجل ثابت عنكم على الإطلاق.',
  'A system that cannot categorise a business cannot recommend it. This sits upstream of every other measure on this page.':
    'النظام الذي لا يستطيع تصنيف نشاط تجاري لا يستطيع التوصية به. وهذا يسبق كل مقياس آخر في هذه الصفحة.',
  'Content and advertising investment cannot move an answer while the underlying record is wrong. Spend on either is spend against a locked door.':
    'لا يمكن للاستثمار في المحتوى أو الإعلانات أن يغيّر إجابة بينما السجل الأساسي خاطئ. الإنفاق على أي منهما إنفاق أمام باب موصد.',
  'Highest-risk engine': 'المحرّك الأعلى خطورة',
  '{engine} understands your business at {score} of 100 and names it in none of the tracked decisions.':
    'يفهم {engine} نشاطكم التجاري بمستوى {score} من 100 ولا يذكره في أي من القرارات المرصودة.',
  'Recognition is not uniform across AI systems, and buyers do not all use the same one. A single weak engine removes your business from every decision made through it.':
    'التعرّف ليس متماثلًا بين أنظمة الذكاء الاصطناعي، والمشترون لا يستخدمون النظام نفسه. محرّك ضعيف واحد يُخرج نشاطكم من كل قرار يمر عبره.',
  'Every buyer who asks this engine receives a supplier shortlist your business is structurally absent from — and no measurement you own records that it happened.':
    'كل مشترٍ يسأل هذا المحرّك يتلقى قائمة مورّدين مختصرة يغيب عنها نشاطكم بنيويًا — ولا يسجّل أي قياس تملكه أن ذلك حدث.',
  'Decision presence': 'الحضور في القرار',
  'Present in only {present} of supplier evaluations. Missing from {missing} of AI buying decisions.':
    'حاضر في {present} فقط من تقييمات المورّدين. وغائب عن {missing} من قرارات الشراء المدفوعة بالذكاء الاصطناعي.',
  'Supplier evaluation is the moment a buyer stops choosing a solution and starts choosing a vendor. It is the stage that assigns the order.':
    'تقييم المورّدين هو اللحظة التي يتوقف فيها المشتري عن اختيار حل ويبدأ باختيار مورّد. إنها المرحلة التي تُسنَد فيها الطلبية.',
  'Absence here is exclusion from the shortlist for the {revenue} of revenue that arrives through supplier evaluation.':
    'الغياب هنا يعني الاستبعاد من القائمة المختصرة بالنسبة إلى {revenue} من الإيرادات التي تصل عبر تقييم المورّدين.',
  'Recognition is cheap to fix and blocks everything else. It is the only intervention on this page that can be completed in under thirty days.':
    'إصلاح التعرّف منخفض التكلفة ويعطّل كل ما عداه. وهو التدخل الوحيد في هذه الصفحة الذي يمكن إنجازه في أقل من ثلاثين يومًا.',

  /* --- Q2 · Where are you losing decisions? ------------------------------ */
  'Losses are not spread evenly across the buying journey. They concentrate at one stage — and it is the stage conventional measurement is least able to see.':
    'الخسائر ليست موزّعة بالتساوي على رحلة الشراء، بل تتركّز في مرحلة واحدة — وهي المرحلة الأقل قابلية للرؤية بالقياس التقليدي.',
  'Where presence collapses': 'أين ينهار الحضور',
  'Coverage falls to {pct} at supplier evaluation — the last stage before the order is assigned.':
    'تنخفض التغطية إلى {pct} عند تقييم المورّدين — آخر مرحلة قبل إسناد الطلبية.',
  'Earlier stages shape opinion. This stage selects the vendor. A business can lead the first three stages and still never be contacted.':
    'المراحل الأولى تشكّل الرأي. هذه المرحلة تختار المورّد. يمكن لنشاط تجاري أن يتصدّر المراحل الثلاث الأولى ثم لا يُتواصل معه أبدًا.',
  'The competitor named here receives the enquiry. Your business is not compared and rejected — it is never compared at all.':
    'المنافس الذي يُذكر هنا يتلقى الاستفسار. نشاطكم التجاري لا يُقارن ثم يُرفض — بل لا يُقارن أصلًا.',
  'Blind-spot questions': 'أسئلة النقاط العمياء',
  '{n} commercial questions return no AI recommendation and no Google position in the top ten. The decision happens on neither surface.':
    '{n} سؤالًا تجاريًا لا تُعيد أي توصية من الذكاء الاصطناعي ولا أي ترتيب في العشرة الأوائل على Google. القرار لا يحدث على أي من السطحين.',
  'Google rank and AI recommendation are separate commercial assets. Strength in one does not carry into the other.':
    'الترتيب في Google وتوصية الذكاء الاصطناعي أصلان تجاريان منفصلان. القوة في أحدهما لا تنتقل إلى الآخر.',
  'These questions are currently reachable only by buying the click — which is why paid cost rises while organic position stays flat.':
    'لا يمكن الوصول إلى هذه الأسئلة حاليًا إلا بشراء النقرة — ولهذا ترتفع التكلفة المدفوعة بينما يبقى الترتيب العضوي ثابتًا.',
  'Supplier evaluation carries {volume} of the query volume and decides {revenue} of the revenue. Ranking work by volume puts it last.':
    'يحمل تقييم المورّدين {volume} من حجم الاستعلامات ويحسم {revenue} من الإيرادات. وترتيب العمل حسب الحجم يضعه في المرتبة الأخيرة.',

  /* --- Q3 · Why is the competitor recommended? --------------------------- */
  '{competitor} can be verified through {theirs} independent sources. Your business can be verified through {ours}.':
    'يمكن التحقق من {competitor} عبر {theirs} مصدرًا مستقلًا. أما نشاطكم التجاري فيمكن التحقق منه عبر {ours}.',
  'Share of recommendations is the symptom. The cause is what a system can cite when it has to justify naming one supplier ahead of another.':
    'حصة التوصيات هي العَرَض. أما السبب فهو ما يستطيع النظام الاستشهاد به حين يُطلب منه تبرير تقديم مورّد على آخر.',
  'Receives the decision': 'يتلقى القرار',
  'Your business': 'نشاطكم التجاري',
  'Authority advantage': 'أفضلية الحُجّية',
  'Why the decision goes to them': 'لماذا يذهب القرار إليهم',
  'The category median is <b>{n}</b> independent sources. This is not a brand-preference gap that marketing spend closes. It is an evidence gap, and evidence is something a business can commission.':
    'وسيط الفئة هو <b>{n}</b> مصدرًا مستقلًا. هذه ليست فجوة في تفضيل العلامة التجارية يغلقها الإنفاق التسويقي، بل فجوة في الأدلة — والأدلة شيء يمكن للنشاط التجاري التكليف بإنتاجه.',
  'authority source': 'مصدر حُجّية',
  'authority sources': 'مصادر حُجّية',
  'Named in <b>{pct}</b> of AI buying decisions.':
    'يُذكر في <b>{pct}</b> من قرارات الشراء المدفوعة بالذكاء الاصطناعي.',
  'Closing {multiple}× is a publishing and validation programme with a known cost, not a brand campaign with an unknown one.':
    'سدّ فجوة بمقدار {multiple} أضعاف هو برنامج نشر وتوثيق بتكلفة معلومة، لا حملة علامة تجارية بتكلفة مجهولة.',

  /* --- Q4 · What evidence is missing? ------------------------------------ */
  'How the gap becomes a lost decision': 'كيف تتحول الفجوة إلى قرار خاسر',
  'Every node below opens the evidence behind it, with its confidence and its limits.':
    'كل عقدة أدناه تفتح الأدلة التي تقف خلفها، مع درجة الثقة فيها وحدودها.',
  'Systems do not recommend what they cannot corroborate. Self-description is treated as a claim; third-party reference is treated as evidence.':
    'الأنظمة لا توصي بما لا تستطيع تأكيده. الوصف الذاتي يُعامَل كادّعاء، أما الإشارة من طرف ثالث فتُعامَل كدليل.',

  /* --- Q5 · How much time is left? --------------------------------------- */
  'The window is an observation about category formation, not a sales deadline. It is re-assessed every quarter and it can move in either direction.':
    'النافذة ملاحظة عن تشكّل الفئة، لا موعد نهائي للمبيعات. تُعاد تقديرها كل ربع سنة ويمكن أن تتحرك في أي من الاتجاهين.',
  'Authority established before the answer set stabilises':
    'حُجّية تُبنى قبل أن تستقر مجموعة الإجابات',

  /* --- Q6 · What should happen next? ------------------------------------- */
  'Six interventions, sequenced. Each names its owner, its deadline, the signal it must move and what has to land before it can move it.':
    'ستة تدخلات مرتّبة بالتسلسل. كل واحد منها يحدد مسؤوله وموعده النهائي والإشارة التي عليه تحريكها وما يجب إنجازه قبل أن يتمكن من تحريكها.',
  'Diagnosis without sequence produces activity rather than movement. Impact is verified by signal movement after execution — never by task completion.':
    'التشخيص بلا تسلسل يُنتج نشاطًا لا حركة. ويُتحقق من الأثر بحركة الإشارة بعد التنفيذ — لا باكتمال المهمة أبدًا.',
  'Ordered by commercial exposure, urgency, effort and competitive pressure.':
    'مرتّبة حسب التعرّض التجاري والإلحاح والجهد والضغط التنافسي.',
  'Open the full intervention plan': 'افتحوا خطة التدخل الكاملة',
  Priority: 'الأولوية',
  'Expected impact': 'الأثر المتوقع',
  'Verified by: {metric}': 'يُتحقق منه عبر: {metric}',
  Owner: 'المسؤول',
  Deadline: 'الموعد النهائي',
  Dependencies: 'الاعتماديات',
  and: 'و',
  'Cannot move its signal until <b>{blockers}</b> lands.':
    'لا يمكنه تحريك إشارته حتى يكتمل <b>{blockers}</b>.',
  'None. Can start immediately.': 'لا شيء. يمكن البدء فورًا.',

  /* --- Q7 · The executive position --------------------------------------- */
  'Decision Health': 'صحة القرار',
  'The binding constraint': 'القيد الحاكم',
  'Held down primarily by {vector}.': 'مقيّد أساسًا بـ{vector}.',
  '{vector} reads <b>{score} of 100</b> and carries the heaviest weight in the index at <b>{weight}%</b>. Lowest score, largest lever — every other measure is capped by it.':
    'يسجّل {vector} <b>{score} من 100</b> ويحمل الوزن الأثقل في المؤشر عند <b>{weight}%</b>. أدنى درجة وأكبر رافعة — وكل مقياس آخر مقيّد به.',
  '{vector} reads <b>{score}</b>. The offer matches demand. The constraint is entirely on the evidence side, which is the side a business can change.':
    'يسجّل {vector} <b>{score}</b>. العرض يطابق الطلب. والقيد يقع بالكامل في جانب الأدلة، وهو الجانب الذي يستطيع النشاط التجاري تغييره.',
  'What Decision Health is made of': 'مما تتكوّن صحة القرار',
  'Weighted, published, recomputed monthly': 'موزون ومنشور ويُعاد حسابه شهريًا',
  'Binding constraint': 'قيد حاكم',
  'weight {pct}%': 'الوزن {pct}%',
  'Authority carries the heaviest weight in the index and the largest deficit. Every other vector is capped by it, so it is the only starting point that moves more than one measure.':
    'تحمل الحُجّية الوزن الأثقل في المؤشر وأكبر عجز. وكل متجه آخر مقيّد بها، ولذلك فهي نقطة البداية الوحيدة التي تحرّك أكثر من مقياس واحد.',
  'Open the full executive position': 'افتحوا الموقع التنفيذي الكامل',

  /* --- Run it on your own business --------------------------------------- */
  'Enter a domain and one signal is released immediately. The rest of the position requires an account or a purchase — and the locked panels state exactly what sits behind them.':
    'أدخلوا نطاقًا وتُفتح إشارة واحدة فورًا. أما بقية الموقع فتتطلب حسابًا أو عملية شراء — واللوحات المقفلة تذكر بدقة ما يقف خلفها.',
  'Your domain': 'نطاقكم',
  'Run instant preview': 'شغّل المعاينة الفورية',
  'Re-run preview': 'أعيدوا تشغيل المعاينة',
  'Seeded demonstration. This environment always reconstructs Northwind Supply, an industrial distributor, so every figure stays verifiable.':
    'عرض توضيحي ببيانات أولية. تعيد هذه البيئة دائمًا بناء حالة Northwind Supply، وهو موزّع صناعي، بحيث يبقى كل رقم قابلًا للتحقق.',
  'AI recognition': 'التعرّف عبر الذكاء الاصطناعي',
  'Best Google position': 'أفضل ترتيب على Google',
  'Not ranking': 'غير مرتّب',
  'Narrative ownership': 'ملكية السردية',
  'Strongest competitor': 'أقوى منافس',
  '{score}/100 recognition': 'تعرّف {score}/100',
  '{pct} of recommendations': '{pct} من التوصيات',
  'Unlocked signal': 'إشارة مفتوحة',
  'Behind the gate': 'خلف البوابة',
  '<b>{n}</b> further readouts, each with evidence, exposure and a prescribed action.':
    '<b>{n}</b> قراءة إضافية، لكل منها أدلتها وتعرّضها وإجراؤها الموصوف.',
  'Competitor capture, authority evidence, paid dependency, missed decisions, narrative control, trust readiness and strategic timing.':
    'استحواذ المنافسين، وأدلة الحُجّية، والاعتماد على الإعلانات المدفوعة، والقرارات الفائتة، والتحكم في السردية، وجاهزية الثقة، والتوقيت الاستراتيجي.',
  'Unlock full intelligence': 'افتحوا الذكاء الكامل',
  'Buy a single answer': 'اشترِ إجابة واحدة',
  'See a single answer': 'اطّلعوا على إجابة واحدة',

  /* --- The ecosystem and the machinery ----------------------------------- */
  'The intelligence ecosystem': 'منظومة الذكاء',
  'Seven questions were asked above. {n} models stand behind them.':
    'طُرحت سبعة أسئلة أعلاه. ويقف خلفها {n} نموذجًا.',
  'Every category holds the models that answer one kind of commercial question — including a great many that businesses have never been able to measure, because nothing existed to measure them with.':
    'تضم كل فئة النماذج التي تجيب على نوع واحد من الأسئلة التجارية — بما في ذلك عدد كبير لم تتمكن الشركات يومًا من قياسه، لأنه لم يوجد ما يقيسه.',
  'intelligence modules in total, each answering one business question with evidence, analysis and a recommendation.':
    'وحدة ذكاء إجمالًا، تجيب كل منها على سؤال تجاري واحد مع أدلة وتحليل وتوصية.',
  'Explore the intelligence ecosystem': 'استكشف منظومة الذكاء',
  Underneath: 'ما تحت السطح',
  'Every answer on this page is produced by an intelligence engine.':
    'كل إجابة في هذه الصفحة يُنتجها محرّك ذكاء.',
  'Twelve engines run beneath the questions. They are named here for completeness — nobody buys an engine, and nothing above required you to know one existed.':
    'يعمل اثنا عشر محرّكًا تحت هذه الأسئلة. وقد ذُكرت هنا لاكتمال الصورة — لا أحد يشتري محرّكًا، ولم يتطلب أي مما سبق أن تعرف بوجود واحد.',
  'Four engines are built in this environment. All twelve appear on the':
    'أربعة محرّكات مبنية في هذه البيئة. وتظهر الاثنا عشر جميعها في',
  'engines overview': 'نظرة عامة على المحرّكات',

  /* --- The close ---------------------------------------------------------- */
  'Every day the window stays open, the same position costs less to take. Every day after it closes, it costs more.':
    'كل يوم تبقى فيه النافذة مفتوحة، يكلّف احتلال الموقع نفسه أقل. وكل يوم بعد إغلاقها، يكلّف أكثر.',
  'See how AI decides about you': 'اطّلعوا على كيفية اتخاذ الذكاء الاصطناعي قراره بشأنكم',
  'Every figure on this page is computed from {n} tracked commercial decisions across six AI engines.':
    'كل رقم في هذه الصفحة محسوب من {n} قرارًا تجاريًا مرصودًا عبر ستة محرّكات ذكاء اصطناعي.',
  'See the methodology': 'اطّلعوا على المنهجية',

  /* --- Hero · trust strip and the reconstruction ------------------------- */
  'Six AI engines observed': 'ستة محرّكات ذكاء اصطناعي مرصودة',
  '24 commercial decisions tracked': '24 قرارًا تجاريًا مرصودًا',
  'Evidence on every claim': 'أدلة على كل ادّعاء',
  'Confidence and limits stated': 'درجة الثقة والحدود معلنة',
  'A buyer asks AI': 'مشترٍ يسأل الذكاء الاصطناعي',
  'AI looks for proof it can cite': 'الذكاء الاصطناعي يبحث عن دليل يمكنه الاستشهاد به',
  'Independent sources an engine can cite when it recommends a supplier. Your own website does not count — engines treat self-description as a claim, not as evidence.':
    'مصادر مستقلة يستطيع المحرّك الاستشهاد بها حين يوصي بمورّد. موقعكم الإلكتروني لا يُحتسب — فالمحرّكات تعامل الوصف الذاتي كادّعاء لا كدليل.',
  'So AI recommends': 'ولذلك يوصي الذكاء الاصطناعي بـ',
  'Your business was named by <b>{named} of {total}</b> engines. Not because the offer is weaker — because <b>{theirs} sources outrank {ours}</b> when a system has to stand behind an answer.':
    'ذُكر نشاطكم التجاري من قِبل <b>{named} من {total}</b> محرّكات. ليس لأن العرض أضعف — بل لأن <b>{theirs} مصدرًا تتفوق على {ours}</b> حين يضطر نظام إلى الوقوف خلف إجابة.',
  'What changes the answer': 'ما الذي يغيّر الإجابة',
  '{n} sources': '{n} مصادر',
  '{name}: {n} independent sources': '{name}: {n} مصدرًا مستقلًا',
  'A reconstruction of one AI buying decision: the question a buyer asked, the {theirs} independent sources supporting {winner} against {ours} supporting your business — a {advantage}× evidence advantage — the resulting recommendation, and the intervention that changes it.':
    'إعادة بناء لقرار شراء واحد مدفوع بالذكاء الاصطناعي: السؤال الذي طرحه المشتري، و{theirs} مصدرًا مستقلًا تدعم {winner} مقابل {ours} تدعم نشاطكم التجاري — أفضلية أدلة بمقدار {advantage} أضعاف — والتوصية الناتجة عن ذلك، والتدخل الذي يغيّرها.',

  /* --- The strategic window ---------------------------------------------- */
  '{position} market': 'سوق {position}',
  '{n} months open': '{n} شهرًا مفتوحة',
  '<b>{n}</b> days of advantage remain': 'تبقّى <b>{n}</b> يومًا من الأفضلية',
  'After <b>{date}</b>, the same position still exists — it just has to be taken from an incumbent recommendation rather than claimed from open ground.':
    'بعد <b>{date}</b>، يظل الموقع نفسه قائمًا — غير أنه سيتعيّن انتزاعه من توصية راسخة بدلًا من اقتناصه في أرض خالية.',
  Today: 'اليوم',
  'Window opened': 'فُتحت النافذة',
  'Advantage holds until': 'الأفضلية تصمد حتى',
  'Window closes': 'تُغلق النافذة',
  'Category language began forming.': 'بدأت لغة الفئة في التشكّل.',
  'Authority built before this becomes the default answer.':
    'الحُجّية المبنية قبل هذا التاريخ تصبح الإجابة الافتراضية.',
  'Displacement cost rises materially.': 'ترتفع تكلفة الإزاحة ارتفاعًا جوهريًا.',
  'Why this estimate exists': 'لماذا يوجد هذا التقدير',
  'Market readiness reads <b>{n} of 100</b>. Buyers are educated. The answers they receive are not yet fixed.':
    'تسجّل جاهزية السوق <b>{n} من 100</b>. المشترون مطّلعون. والإجابات التي يتلقونها لم تستقر بعد.',

  /* --- The decision journey ----------------------------------------------- */
  'Stage {n}': 'المرحلة {n}',
  '{volume}/mo · {share}': '{volume}/شهر · {share}',
  '{pct} coverage': 'تغطية {pct}',
  'Analytics and CRM': 'التحليلات وإدارة علاقات العملاء',
  'Requires a visit, form or record to exist':
    'يتطلب وجود زيارة أو نموذج أو سجل',
  'SEO platforms': 'منصات تحسين محركات البحث',
  'Requires a tracked query with search volume':
    'يتطلب استعلامًا مرصودًا له حجم بحث',
  'Observes the decision itself, at every stage':
    'يرصد القرار نفسه، في كل مرحلة',
  Visible: 'مرئي',
  Blind: 'أعمى',
  'Executive conclusion': 'الخلاصة التنفيذية',
  'Conventional tooling begins observing at stage four — after the buyer has already decided what to buy and is choosing whom to buy it from.':
    'تبدأ الأدوات التقليدية الرصد عند المرحلة الرابعة — بعد أن يكون المشتري قد قرر ما يشتريه وصار يختار ممن يشتريه.',
  'The first three stages generate no visit, click, lead or CRM record. They are not measured badly; they are not measured at all.':
    'المراحل الثلاث الأولى لا تولّد زيارة ولا نقرة ولا عميلًا محتملًا ولا سجلًا في نظام إدارة العلاقات. وهي لا تُقاس بصورة رديئة، بل لا تُقاس إطلاقًا.',

  /* --- The Google vs AI gap matrix ---------------------------------------- */
  'Compound blind spots': 'نقاط عمياء مركّبة',
  'Absent from both surfaces on high-value questions. The most expensive class of gap.':
    'غائب عن السطحين معًا في الأسئلة عالية القيمة. وهو أغلى أصناف الفجوات.',
  'Recoverable search': 'بحث قابل للاسترجاع',
  'Ranking in Google but absent from AI answers. Existing authority is not reaching the AI surface.':
    'مرتّب على Google لكنه غائب عن إجابات الذكاء الاصطناعي. الحُجّية القائمة لا تصل إلى سطح الذكاء الاصطناعي.',
  Aligned: 'متوافق',
  'Visible in Google and recommended by AI. No action required.':
    'مرئي على Google وموصى به من الذكاء الاصطناعي. لا يتطلب أي إجراء.',
  'of {total}': 'من {total}',
  'Commercial question': 'سؤال تجاري',
  Volume: 'الحجم',
  'Google visibility': 'الظهور على Google',
  'AI recommendation': 'توصية الذكاء الاصطناعي',
  Classification: 'التصنيف',
  'Not in top 100': 'ليس ضمن المئة الأولى',
  'Position {n}': 'المركز {n}',
  Recommended: 'موصى به',
  Absent: 'غائب',
  'Showing {shown} of {total} tracked commercial questions.':
    'يُعرض {shown} من {total} سؤالًا تجاريًا مرصودًا.',

  /* --- The decision graph -------------------------------------------------- */
  Input: 'مُدخل',
  Interpretation: 'تفسير',
  Market: 'سوق',
  Channel: 'قناة',
  Outcome: 'نتيجة',
  Action: 'إجراء',
  'Decision intelligence graph. Thirteen connected signals ending in a prescription.':
    'رسم بياني لذكاء القرار. ثلاث عشرة إشارة مترابطة تنتهي بإجراء موصوف.',
  '{label}: {value}. {kind}. {evidence} Activate to open the readout.':
    '{label}: {value}. {kind}. {evidence} فعّل لفتح القراءة.',
  'Hover or focus a node to isolate its relationships. Select any node to open the evidence behind it.':
    'مرّروا المؤشر فوق عقدة أو ركّزوا عليها لعزل علاقاتها. اختاروا أي عقدة لفتح الأدلة التي تقف خلفها.',
  'Read the graph as a table': 'اقرأوا الرسم البياني كجدول',
  Signal: 'إشارة',
  Value: 'القيمة',
  'Leads to': 'يؤدي إلى',
  Evidence: 'الأدلة',

  /* ==========================================================================
     THE HOW-IT-WORKS PAGE.

     Almost all of it comes from the `loop` dictionary block. What lands here
     is the one inline label and the screenshot slots the four stages render —
     ProductScreen puts both `surface` and `caption` through t().
     ======================================================================= */

  'From the platform': 'من داخل المنصة',

  /* --- PLAN · the diagnosis surfaces --------------------------------------- */
  'Deep Diagnosis — the full scan result across connected signals':
    'التشخيص العميق — نتيجة الفحص الكاملة عبر الإشارات المترابطة',
  'Deep Diagnosis across AI engines, search, competitors, market and digital presence. Anonymised demonstration data.':
    'تشخيص عميق عبر محرّكات الذكاء الاصطناعي والبحث والمنافسين والسوق والحضور الرقمي. بيانات توضيحية مجهّلة.',
  'Competitive Intelligence — the comparison matrix':
    'الذكاء التنافسي — مصفوفة المقارنة',
  'Who receives the decision instead, and the evidence that puts them there. Anonymised demonstration data.':
    'من يتلقى القرار بدلًا منكم، والأدلة التي وضعته هناك. بيانات توضيحية مجهّلة.',
  'AI Intelligence — per-engine recognition and recommendation':
    'ذكاء الذكاء الاصطناعي — التعرّف والتوصية لكل محرّك',
  'What each AI engine understands, and when it recommends. Anonymised demonstration data.':
    'ما يفهمه كل محرّك ذكاء اصطناعي، ومتى يوصي. بيانات توضيحية مجهّلة.',
  'Google vs AI Visibility — the gap matrix':
    'الظهور في Google مقابل الذكاء الاصطناعي — مصفوفة الفجوات',
  'Two discovery surfaces, measured separately. Anonymised demonstration data.':
    'سطحا اكتشاف، يُقاسان بشكل منفصل. بيانات توضيحية مجهّلة.',
  'Market Intelligence — category and demand view':
    'ذكاء السوق — عرض الفئة والطلب',
  'What is changing in the market, and which of it is addressable. Anonymised demonstration data.':
    'ما الذي يتغيّر في السوق، وأي جزء منه قابل للمعالجة. بيانات توضيحية مجهّلة.',
  'Narrative Intelligence — narrative ownership and movement':
    'ذكاء السرديات — ملكية السردية وحركتها',
  'Which account of the category is circulating, and whose language it uses. Anonymised demonstration data.':
    'أي رواية عن الفئة هي المتداولة، وبلغة مَن تُصاغ. بيانات توضيحية مجهّلة.',
  'Trust & Authority — independent-source verification view':
    'الثقة والحُجّية — عرض التحقق من مصادر مستقلة',
  'What a system can cite when it has to justify a recommendation. Anonymised demonstration data.':
    'ما يستطيع النظام الاستشهاد به حين يُطلب منه تبرير توصية. بيانات توضيحية مجهّلة.',

  /* --- DO · the execution surfaces ----------------------------------------- */
  'Strategy — objectives translated into targeted signals':
    'الاستراتيجية — أهداف تُترجَم إلى إشارات مستهدفة',
  'Objectives in, prioritised strategy out. Each objective bound to a signal expected to move. Anonymised demonstration data.':
    'أهداف تدخل، واستراتيجية مرتّبة بالأولوية تخرج. كل هدف مرتبط بإشارة يُتوقع أن تتحرك. بيانات توضيحية مجهّلة.',
  'Content & media generation — output bound to identified gaps':
    'إنتاج المحتوى والوسائط — مخرجات مرتبطة بفجوات محددة',
  'Each asset traced back to the gap it was created to close. Anonymised demonstration data.':
    'كل أصل يمكن تتبّعه إلى الفجوة التي أُنشئ لسدّها. بيانات توضيحية مجهّلة.',
  'Execution calendar — sequenced distribution':
    'تقويم التنفيذ — توزيع مرتّب زمنيًا',
  'Sequence and timing, derived from the strategy rather than from a posting cadence. Anonymised demonstration data.':
    'التسلسل والتوقيت، مشتقان من الاستراتيجية لا من وتيرة نشر. بيانات توضيحية مجهّلة.',
  'Distribution — connected digital assets and publishing state':
    'التوزيع — الأصول الرقمية الموصولة وحالة النشر',
  'Where each asset was published, across connected properties. Anonymised demonstration data.':
    'أين نُشر كل أصل، عبر المنصات الموصولة. بيانات توضيحية مجهّلة.',

  /* --- CHECK and ACT ------------------------------------------------------- */
  'Measurement — the before → action → after comparison table':
    'القياس — جدول المقارنة قبل ← الإجراء ← بعد',
  'Not what was published. What changed. Anonymised demonstration data.':
    'ليس ما نُشر. بل ما تغيّر. بيانات توضيحية مجهّلة.',
  'Learning — measured outcome feeding the next recommendation':
    'التعلّم — نتيجة مقيسة تغذّي التوصية التالية',
  'The previous recommendation, what it moved, and the corrected recommendation that follows. Anonymised demonstration data.':
    'التوصية السابقة، وما حرّكته، والتوصية المصحّحة التي تليها. بيانات توضيحية مجهّلة.',

  /* ==========================================================================
     THE METHODOLOGY PAGE.

     The evidence sources, model rules and limitations reach t() through a
     variable rather than a literal, so scripts/i18n-keys.mjs cannot see them.
     They are listed here by hand; the page audit is what catches a miss.
     ======================================================================= */

  /* --- Hero ---------------------------------------------------------------- */
  'The stronger the claim, the stronger the evidence path must be.':
    'كلما قويت الدعوى، وجب أن يقوى مسار الأدلة.',
  'Every conclusion in this system can be traced to a date, a source, an engine, a prompt or a connected dataset. This page states how, and where the boundaries are.':
    'كل استنتاج في هذا النظام يمكن تتبّعه إلى تاريخ أو مصدر أو محرّك أو استفسار أو مجموعة بيانات موصولة. تشرح هذه الصفحة كيف، وأين تقع الحدود.',
  'Methodology version {version} · observed {date}':
    'إصدار المنهجية {version} · رُصد في {date}',

  /* --- GEON ---------------------------------------------------------------- */
  'The GEON framework': 'إطار GEON',
  'Six vectors, one published weighting': 'ستة متجهات، ترجيح واحد منشور',
  'The Decision Health Index is a weighted function of these six vectors — not a score assigned by judgement. The weighting is published below so the index can be recomputed independently.':
    'مؤشر صحة القرار دالة مرجّحة لهذه المتجهات الستة — لا درجة تُمنح بالتقدير. والترجيح منشور أدناه حتى يمكن إعادة حساب المؤشر باستقلالية.',
  'Decision Health Index weighting': 'ترجيح مؤشر صحة القرار',
  'Yields <b>{score} of 100</b> for the seeded organisation. Authority carries the heaviest weight and the lowest score, which is why it is the binding constraint.':
    'يعطي <b>{score} من 100</b> للمنظمة الموضّحة. وتحمل الحُجّية الوزن الأثقل والدرجة الأدنى، ولهذا فهي القيد الحاكم.',
  'GEON assessment. {readings}. Lowest vector is {lowest}.':
    'تقييم GEON. {readings}. المتجه الأدنى هو {lowest}.',
  '{label} {score} of 100': '{label} {score} من 100',

  /* --- Evidence sources ---------------------------------------------------- */
  'Where the observations come from': 'من أين تأتي الملاحظات',
  'This environment observes <b>{questions}</b> decision questions across six AI engines, and <b>{keywords}</b> commercial keywords in Google.':
    'ترصد هذه البيئة <b>{questions}</b> سؤال قرار عبر ستة محرّكات ذكاء اصطناعي، و<b>{keywords}</b> كلمة مفتاحية تجارية في Google.',
  'Public AI responses': 'استجابات الذكاء الاصطناعي العلنية',
  'Answers observed from six engines against a fixed question set, recorded with engine, date and full response.':
    'إجابات مرصودة من ستة محرّكات مقابل مجموعة أسئلة ثابتة، مسجّلة مع المحرّك والتاريخ والاستجابة الكاملة.',
  'Third-party search and market data': 'بيانات بحث وسوق من أطراف ثالثة',
  'Keyword volume, organic position, competition and cost per click.':
    'حجم الكلمات المفتاحية، والترتيب العضوي، والمنافسة، وتكلفة النقرة.',
  'Connected first-party analytics': 'تحليلات موصولة من الطرف الأول',
  'Search Console and Analytics, where the customer connects them. Improves confidence; never required.':
    'Search Console وAnalytics، حين يصلهما العميل. يرفعان مستوى الثقة؛ وليسا مطلوبين أبدًا.',
  'Public competitor information': 'معلومات علنية عن المنافسين',
  'Published positions, citations and the sources engines reach for when recommending a competitor.':
    'المواقع المنشورة والاستشهادات والمصادر التي تلجأ إليها المحرّكات عند التوصية بمنافس.',
  'Public content, reputation and trust signals':
    'المحتوى العلني وإشارات السمعة والثقة',
  'Independent validation, review corpora and cross-source consistency.':
    'توثيق مستقل، ومجموعات مراجعات، واتساق بين المصادر.',
  'Customer-configured business assumptions': 'افتراضات عمل يضبطها العميل',
  'Average deal value, conversion rates and revenue split by decision stage. Always labelled as customer-provided.':
    'متوسط قيمة الصفقة، ومعدلات التحويل، وتوزيع الإيرادات حسب مرحلة القرار. تُوسم دائمًا بأنها مقدَّمة من العميل.',
  'Historical GeoRepute scans and action outcomes':
    'عمليات فحص GeoRepute السابقة ونتائج الإجراءات',
  'Prior observations and whether an executed action moved the signal it targeted.':
    'ملاحظات سابقة وما إذا كان إجراء منفَّذ قد حرّك الإشارة التي استهدفها.',

  /* --- Confidence ---------------------------------------------------------- */
  'Every conclusion carries its own confidence':
    'كل استنتاج يحمل درجة الثقة الخاصة به',
  'Confidence is attached to the individual conclusion, not to the product. Two findings in the same readout can carry different confidence, and they frequently do.':
    'ترتبط درجة الثقة بالاستنتاج المفرد لا بالمنتج. ويمكن لنتيجتين في القراءة نفسها أن تحملا درجتي ثقة مختلفتين، وهو ما يحدث كثيرًا.',

  /* --- Financial model ----------------------------------------------------- */
  'Financial model': 'النموذج المالي',
  'Directional, ranged, and never described as confirmed':
    'اتجاهي، ضمن نطاقات، ولا يوصف أبدًا بأنه مؤكد',
  'The model': 'النموذج',
  'All values are shown as ranges, never as point estimates.':
    'تُعرض كل القيم كنطاقات، لا كتقديرات نقطية أبدًا.',
  'No value is described as confirmed lost revenue.':
    'لا توصف أي قيمة بأنها إيرادات مفقودة مؤكدة.',
  'Every model exposes its assumptions and data boundaries.':
    'كل نموذج يكشف افتراضاته وحدود بياناته.',
  'Connected first-party conversion data improves confidence.':
    'بيانات التحويل الموصولة من الطرف الأول ترفع مستوى الثقة.',
  'Prediction is withheld when history is insufficient.':
    'يُحجب التنبؤ عندما يكون السجل غير كافٍ.',
  'Every exported brief carries methodology and limitation language.':
    'كل تقرير مُصدَّر يحمل صياغة المنهجية والقيود.',
  'Search economics, derived': 'اقتصاديات البحث، مشتقة',
  'Blended CPC': 'تكلفة النقرة المدمجة',
  /* 'Break-even CPC' and 'Above break-even' already have entries in the seed
     section below. */
  'Break-even is average order value × gross margin × site conversion. Paid dependency is classified from the ratio of blended CPC to break-even — it is derived, never asserted.':
    'نقطة التعادل هي متوسط قيمة الطلب × هامش الربح الإجمالي × تحويل الموقع. ويُصنَّف الاعتماد على الإعلانات المدفوعة من نسبة تكلفة النقرة المدمجة إلى نقطة التعادل — وهو مشتق، لا يُدّعى أبدًا.',

  /* --- Limitations --------------------------------------------------------- */
  Limitations: 'حدود المنهجية',
  'What this system cannot tell you': 'ما لا يستطيع هذا النظام إخباركم به',
  'AI engine answers vary between runs and between users. Observations are point-in-time samples, not guarantees of what any individual buyer sees.':
    'تتباين إجابات محرّكات الذكاء الاصطناعي بين تشغيل وآخر وبين مستخدم وآخر. والملاحظات عيّنات في لحظة زمنية، لا ضمانات لما يراه أي مشترٍ بعينه.',
  'Commercial exposure is a directional model built on customer-configured assumptions. It is useful for prioritisation and is not an audited financial statement.':
    'التعرّض التجاري نموذج اتجاهي مبني على افتراضات يضبطها العميل. وهو مفيد لتحديد الأولويات وليس بيانًا ماليًا مدقّقًا.',
  'Attribution between an executed action and a signal movement is correlational. The system records both and reports the relationship; it does not claim causation.':
    'العزو بين إجراء منفَّذ وحركة إشارة هو ارتباطي. يسجّل النظام كليهما ويبلّغ عن العلاقة؛ ولا يدّعي السببية.',
  'Competitor authority counts reflect sources engines cite publicly. A competitor may hold private advantages this system cannot observe.':
    'تعكس أعداد مصادر حُجّية المنافسين المصادر التي تستشهد بها المحرّكات علنًا. وقد يملك منافس مزايا خاصة لا يستطيع هذا النظام رصدها.',
  'Where history is insufficient, predictive conclusions are withheld rather than estimated.':
    'حيث يكون السجل غير كافٍ، تُحجب الاستنتاجات التنبؤية بدلًا من تقديرها.',
  'This demonstration environment': 'بيئة العرض التوضيحي هذه',
  'Northwind Supply is a fictional organisation. Its figures are seeded, internally consistent and derived from a single set of anchor facts — <b>{presence}</b> recommendation presence, <b>{coverage}</b> supplier-evaluation coverage, <b>{share}</b> competitor share. Every other number on this site is computed from those, and a test suite fails the build if any screen disagrees.':
    'Northwind Supply منظمة خيالية. أرقامها مبنية على بيانات أولية، ومتسقة داخليًا، ومشتقة من مجموعة واحدة من الحقائق المرجعية — <b>{presence}</b> حضور في التوصيات، و<b>{coverage}</b> تغطية في تقييم المورّدين، و<b>{share}</b> حصة للمنافس. وكل رقم آخر في هذا الموقع محسوب منها، وحزمة اختبارات تُفشل عملية البناء إذا خالفها أي مسار عرض.',
  'Open Mission Control': 'افتحوا مركز القيادة',
  'See the engines': 'اطّلعوا على المحرّكات',

  /* ==========================================================================
     SEED PROSE SURFACING ON THE HOME PAGE.
     ======================================================================= */

  /* --- GEON vector definitions -------------------------------------------- */
  'Whether systems understand what the business does, who it serves and when to recommend it.':
    'ما إذا كانت الأنظمة تفهم ما يقوم به النشاط التجاري ومن يخدم ومتى يُوصى به.',
  'The strength of reputation, validation and proof surrounding the business.':
    'قوة السمعة والتوثيق والإثبات المحيطة بالنشاط التجاري.',
  'How consistently the business appears across AI and digital environments.':
    'مدى اتساق ظهور النشاط التجاري عبر بيئات الذكاء الاصطناعي والبيئات الرقمية.',
  'Whether the same accurate story appears across channels, markets and languages.':
    'ما إذا كانت القصة الدقيقة نفسها تظهر عبر القنوات والأسواق واللغات.',
  'How closely positioning matches customer demand and buying intent.':
    'مدى تطابق التموضع مع طلب العملاء ونية الشراء.',
  'Whether the business is recognized as a credible expert or category leader.':
    'ما إذا كان النشاط التجاري معترفًا به كخبير موثوق أو رائد للفئة.',

  /* --- Engine business questions ------------------------------------------ */
  'Does AI know the business exists, and what does it think it is?':
    'هل يعرف الذكاء الاصطناعي أن النشاط التجاري موجود، وما الذي يظن أنه عليه؟',
  'Do the two discovery surfaces agree, and what is the gap costing?':
    'هل يتفق سطحا الاكتشاف، وكم تكلّف الفجوة بينهما؟',
  'Who receives the decision instead, and what do they have?':
    'من يتلقى القرار بدلًا منكم، وماذا لديه؟',
  'What must happen next, by whom and by when?':
    'ما الذي يجب أن يحدث تاليًا، وعلى يد من، وبحلول متى؟',
  'Where do competitors receive the decision before the business receives the lead?':
    'أين يتلقى المنافسون القرار قبل أن يتلقى النشاط التجاري العميل المحتمل؟',
  'Do AI engines understand who the business is and when it should be considered?':
    'هل تفهم محرّكات الذكاء الاصطناعي هوية النشاط التجاري ومتى ينبغي أخذه في الاعتبار؟',
  'Does the business exist consistently across traditional search and AI-mediated discovery?':
    'هل يوجد النشاط التجاري باتساق عبر البحث التقليدي والاكتشاف بوساطة الذكاء الاصطناعي؟',
  'Whose language does the market use to describe your category?':
    'بلغة مَن يصف السوق فئتكم؟',
  'Is the market ready, and does the route to it hold?':
    'هل السوق جاهز، وهل يصمد الطريق إليه؟',

  /* --- Readout evidence and executive truths ------------------------------ */
  'Decision Health reads 41 of 100, held down primarily by Authority at 28.':
    'تسجّل صحة القرار 41 من 100، مقيّدة أساسًا بالحُجّية عند 28.',
  'Authority carries the heaviest index weight and the largest deficit.':
    'تحمل الحُجّية أثقل وزن في المؤشر وأكبر عجز.',
  'GEON Authority 28 — the lowest of six vectors.':
    'حُجّية GEON عند 28 — الأدنى بين ستة متجهات.',
  'Three independent sources reference Northwind; the competitor median is fourteen.':
    'ثلاثة مصادر مستقلة تشير إلى Northwind؛ ووسيط المنافسين أربعة عشر.',
  'No published supplier-comparison material for engines to cite.':
    'لا توجد مواد منشورة لمقارنة المورّدين تستشهد بها المحرّكات.',
  'Category description differs between the website and two trade directories.':
    'وصف الفئة يختلف بين الموقع الإلكتروني ودليلين تجاريين.',
  'Three of six engines misidentify the category.':
    'ثلاثة من ستة محرّكات تحدد الفئة بصورة خاطئة.',
  'No stable entity record. Answers reference the category without naming Northwind at all.':
    'لا يوجد سجل كيان ثابت. الإجابات تشير إلى الفئة دون ذكر Northwind إطلاقًا.',
  'Kestrel Industrial leads five of seven supplier questions.':
    'تتصدر Kestrel Industrial خمسة من سبعة أسئلة تخص المورّدين.',
  'Engines cite a competitor’s evaluation criteria first.':
    'تستشهد المحرّكات بمعايير تقييم أحد المنافسين أولًا.',
  'Eleven tracked keywords sit outside the top ten.':
    'إحدى عشرة كلمة مفتاحية مرصودة تقع خارج العشرة الأوائل.',
  'Blended CPC $9.03 against break-even $6.13.':
    'تكلفة النقرة المدمجة $9.03 مقابل نقطة تعادل عند $6.13.',
  '6 recommendation events across 144 answer slots.':
    '6 أحداث توصية عبر 144 خانة إجابة.',
  'Supplier-evaluation coverage — the stage deciding 60% of revenue.':
    'تغطية مرحلة تقييم المورّدين — المرحلة التي تحسم 60% من الإيرادات.',
  'Supplier-evaluation phrasing still varied — the category has no fixed vocabulary yet.':
    'صياغة أسئلة تقييم المورّدين ما زالت متباينة — فالفئة ليس لها معجم ثابت بعد.',
  '63 of 100 — buyers are educated, answers are not yet fixed.':
    '63 من 100 — المشترون مطّلعون، والإجابات لم تستقر بعد.',
  'Demand × decision gap × estimated conversion × average deal value.':
    'الطلب × فجوة القرار × التحويل المقدّر × متوسط قيمة الصفقة.',

  /* --- The action plan ----------------------------------------------------- */
  'Direct investment at Authority first — it carries the highest weight and the largest deficit.':
    'وجّه الاستثمار إلى الحُجّية أولًا — فهي تحمل أعلى وزن وأكبر عجز.',
  'Build supplier-comparison content against the six highest-volume missed decision questions.':
    'ابنوا محتوى لمقارنة المورّدين يستهدف أسئلة القرار الستة الفائتة الأعلى حجمًا.',
  'Strengthen independent authority evidence and supplier-comparison coverage.':
    'عزّز أدلة الحُجّية المستقلة وتغطية مقارنة المورّدين.',
  'Resolve the Gemini entity conflation with the same-named logistics firm.':
    'عالج خلط Gemini بين الكيان وشركة الخدمات اللوجستية التي تحمل الاسم نفسه.',
  'Reallocate paid spend from keywords with a viable organic replacement path.':
    'أعيدوا توزيع الإنفاق المدفوع بعيدًا عن الكلمات المفتاحية التي لها مسار بديل عضوي قابل للتطبيق.',
  'Response time cited among the first three criteria by 3 of 6 engines':
    'زمن الاستجابة مذكور ضمن المعايير الثلاثة الأولى لدى 3 من 6 محرّكات',
  'Gemini resolves the correct entity on 4 of 6 category questions':
    'يحدد Gemini الكيان الصحيح في 4 من 6 أسئلة تخص الفئة',
  'Blended CPC below break-even on reallocated set':
    'تكلفة النقرة المدمجة دون نقطة التعادل في المجموعة المعاد توزيعها',
  'Category association correct on 5 of 6 engines':
    'ارتباط الفئة صحيح لدى 5 من 6 محرّكات',
  'Gemini recognition 24 → 45': 'التعرّف في Gemini 24 ← 45',

  /* --- Chrome outside the dictionary --------------------------------------- */
  'Switch to light theme': 'التبديل إلى المظهر الفاتح',
  'Switch to dark theme': 'التبديل إلى المظهر الداكن',
  'Powered by Gintex': 'مدعوم من Gintex',
  'GeoRepute — home': 'GeoRepute — الصفحة الرئيسية',
  Open: 'افتحوا',

  /* --- Effort, urgency, trend and confidence chips ------------------------- */
  'low effort': 'جهد منخفض',
  'medium effort': 'جهد متوسط',
  'high effort': 'جهد مرتفع',
  Immediate: 'فوري',
  'This quarter': 'هذا الربع',
  Monitor: 'للمتابعة',
  Improving: 'يتحسّن',
  Stable: 'مستقر',
  Deteriorating: 'يتدهور',
  High: 'مرتفعة',
  Medium: 'متوسطة',
  Directional: 'اتجاهية',
  'Insufficient history': 'سجل غير كافٍ',

  /* --- Score-meter accessible name ------------------------------------------ */
  '{score} out of {max}': '{score} من {max}',

  /* --- Product screen slots ------------------------------------------------- */
  'Awaiting real screen': 'في انتظار لقطة الشاشة الحقيقية',
  'Anonymised or demonstration data only. No customer names, domains, personal data or confidential figures.':
    'بيانات مجهّلة أو توضيحية فقط. بلا أسماء عملاء أو نطاقات أو بيانات شخصية أو أرقام سرّية.',
  'Executive Mission Control — full window, all measures visible':
    'مركز القيادة التنفيذي — نافذة كاملة، جميع المقاييس ظاهرة',
  'Executive Mission Control. Every measure opens the evidence behind it. Anonymised demonstration data.':
    'مركز القيادة التنفيذي. كل مقياس يفتح الأدلة التي تقف خلفه. بيانات توضيحية مجهّلة.',
  'Action Plan — the prioritised intervention list':
    'خطة العمل — قائمة التدخلات مرتّبة حسب الأولوية',
  'Every action carries an owner, a deadline and the signal it must move. Anonymised demonstration data.':
    'كل إجراء يحمل مسؤولًا وموعدًا نهائيًا والإشارة التي عليه تحريكها. بيانات توضيحية مجهّلة.',

  /* --- Image credit --------------------------------------------------------- */
  'NASA on Unsplash': 'NASA على Unsplash',

  /* --- The demonstration's buyer queries -------------------------------------
     Translated rather than left as literal English search strings. A reader is
     being shown what an AI buying decision looks like, and a buyer reading an
     Arabic page types Arabic. FLAGGED FOR THE CLIENT: if the demo is ever
     pointed at a real Arabic-speaking market, these should be replaced with
     the phrases that market actually searches, not translations of the US
     ones — that is a content decision, not a translation one. */
  'Which industrial fastener suppliers are most reliable in the Midwest?':
    'أي موردي أدوات التثبيت الصناعية هم الأكثر موثوقية في الغرب الأوسط؟',
  'industrial fastener supplier': 'مورّد أدوات تثبيت صناعية',
  'fastener distributor midwest': 'موزّع أدوات تثبيت الغرب الأوسط',
  'vendor managed inventory mro': 'إدارة المخزون بواسطة المورّد للصيانة',
  'hydraulic fittings supplier': 'مورّد وصلات هيدروليكية',
  'industrial supply company': 'شركة توريدات صناعية',
  'bulk fasteners chicago': 'أدوات تثبيت بالجملة شيكاغو',
  'grade 8 bolts bulk': 'براغي درجة 8 بالجملة',
  'mro distributor': 'موزّع مستلزمات الصيانة',

  /* ==========================================================================
     THE SEED DATA — signal names, readout prose and marketplace copy.

     Ported from he.ts, which reached the home page's zero first. Many of
     these do not surface on the home page; they are here because the other
     routes will need them and translating them together keeps the vocabulary
     consistent — see lib/i18n/GLOSSARY.md.
     ======================================================================= */

  /* --- Composite measures and the GEON vectors ---------------------------- */
  'Methodology GEON-2.4': 'منهجية GEON-2.4',
  'Decision Health Index': 'مؤشر صحة القرار',
  'Decision Health Index at 41 of 100': 'مؤشر صحة القرار عند 41 من 100',
  'Decision Health Index 41 → 56/100': 'مؤشر صحة القرار 41 ← 56/100',
  Composite: 'مؤشر مركّب',
  'Composite model': 'نموذج مركّب',
  'Index weighting': 'ترجيح المؤشر',
  'GEON vectors': 'متجهات GEON',
  'GEON Authority': 'حُجّية GEON',
  'GEON Trust': 'ثقة GEON',
  'GEON Authority 28 → 45/100': 'حُجّية GEON 28 ← 45/100',
  '38 of 100 average': '38 من 100 في المتوسط',
  '44 of 100': '44 من 100',
  '28 of 100': '28 من 100',
  'The index is a weighted function of the six GEON vectors, not a score assigned by judgement. Market Fit at 72 confirms the offer matches demand; the constraint is entirely on the evidence side.':
    'المؤشر دالة مرجّحة لمتجهات GEON الستة، وليس درجة تُمنح بالتقدير. ملاءمة السوق عند 72 تؤكد أن العرض يطابق الطلب؛ والقيد يقع بالكامل في جانب الأدلة.',
  'Recompute the index from re-observed GEON vectors monthly. The weighting is published and versioned.':
    'أعيدوا حساب المؤشر من متجهات GEON المعاد رصدها شهريًا. والترجيح منشور وموثّق بالإصدارات.',

  /* --- Recognition --------------------------------------------------------- */
  'Recognition by engine': 'التعرّف حسب المحرّك',
  'AI Recognition Matrix': 'مصفوفة التعرّف عبر الذكاء الاصطناعي',
  'AI Recognition Intelligence': 'ذكاء التعرّف عبر الذكاء الاصطناعي',
  'AI Visibility Intelligence': 'ذكاء الظهور عبر الذكاء الاصطناعي',
  'AI Search Presence': 'الحضور في بحث الذكاء الاصطناعي',
  'Entity Understanding': 'فهم الكيان',
  'Entity category association': 'ارتباط الكيان بالفئة',
  'Category association': 'ارتباط الفئة',
  'Entity disambiguation': 'إزالة التباس الكيان',
  'Entity record': 'سجل الكيان',
  'Confusion detection': 'كشف الالتباس',
  'Confusion Detector': 'كاشف الالتباس',
  'Outdated knowledge': 'معرفة قديمة',
  'Average recognition score': 'متوسط درجة التعرّف',
  'Average recognition score 38 → 55': 'متوسط درجة التعرّف 38 ← 55',
  'Average recognition score 38 → 55/100': 'متوسط درجة التعرّف 38 ← 55/100',
  'Correctly categorised by all six engines.': 'مصنّف بشكل صحيح لدى المحرّكات الستة جميعها.',
  'All six engines': 'المحرّكات الستة جميعها',
  'Incomplete on 3 engines': 'غير مكتمل لدى 3 محرّكات',
  Inconsistent: 'غير متسق',
  'Recognition decay': 'تآكل التعرّف',
  'AI understanding': 'فهم الذكاء الاصطناعي',
  'An engine that cannot categorise a business cannot recommend it. This is upstream of every visibility metric: no amount of content moves an answer if the entity record is wrong.':
    'المحرّك الذي لا يستطيع تصنيف نشاط تجاري لا يستطيع التوصية به. وهذا يسبق كل مقياس ظهور: لا كمّ من المحتوى يغيّر إجابة إذا كان سجل الكيان خاطئًا.',
  'Recognition is never uniform. A business can be well understood by one engine and structurally invisible to another that a different half of its buyers use.':
    'التعرّف ليس متماثلًا أبدًا. يمكن لمحرّك أن يفهم نشاطًا تجاريًا جيدًا بينما يكون النشاط نفسه غير مرئي بنيويًا لمحرّك آخر يستخدمه نصف آخر من مشتريه.',
  'Whether AI systems hold an accurate, current and unambiguous record of the business, and whether that record survives into the answers buyers receive. Everything else on this page is downstream of it — no measure improves while the underlying record is wrong.':
    'ما إذا كانت أنظمة الذكاء الاصطناعي تحتفظ بسجل دقيق وحديث وغير ملتبس عن النشاط التجاري، وما إذا كان هذا السجل يصمد حتى الإجابات التي يتلقاها المشترون. وكل ما عداه في هذه الصفحة يقع خلفه — لا يتحسن أي مقياس بينما السجل الأساسي خاطئ.',
  'Whether the business is filed under the categories buyers actually ask about, or under one that is accurate but that nobody searches.':
    'ما إذا كان النشاط التجاري مصنّفًا ضمن الفئات التي يسأل عنها المشترون فعلًا، أم ضمن فئة دقيقة لكن لا أحد يبحث عنها.',
  'Contradictions across the public record — different categories, claims or descriptions between the site, directories and third-party profiles.':
    'تناقضات في السجل العام — فئات أو ادّعاءات أو أوصاف مختلفة بين الموقع والأدلة وملفات الأطراف الثالثة.',
  'The distance between what a company says it is and what machines have independently concluded it is — usually wider than any executive expects.':
    'المسافة بين ما تقول الشركة إنها عليه وما استنتجته الآلات باستقلالية — وهي عادةً أوسع مما يتوقعه أي تنفيذي.',
  'Consistent category language across its own site, trade directories and three independent publications gives engines a single unambiguous record to resolve.':
    'اتساق لغة الفئة عبر موقعها والأدلة التجارية وثلاث منشورات مستقلة يمنح المحرّكات سجلًا واحدًا غير ملتبس لتحديده.',
  'Three of six engines misclassify what Northwind sells. No content investment can move an answer while the entity record is wrong.':
    'ثلاثة من ستة محرّكات تصنّف ما تبيعه Northwind تصنيفًا خاطئًا. ولا يمكن لأي استثمار في المحتوى أن يغيّر إجابة بينما سجل الكيان خاطئ.',
  'Three of six AI engines misidentify what Northwind sells, and one does not recognise it as a distinct business at all.':
    'ثلاثة من ستة محرّكات ذكاء اصطناعي تحدد ما تبيعه Northwind تحديدًا خاطئًا، وواحد لا يتعرّف عليها كنشاط تجاري مستقل إطلاقًا.',
  'Gemini recognises Northwind at 24 of 100 and recommends it in zero questions. The cause is a disambiguation failure, not a content gap.':
    'يتعرّف Gemini على Northwind بمستوى 24 من 100 ولا يوصي بها في أي سؤال. والسبب فشل في إزالة الالتباس، لا فجوة في المحتوى.',
  'Publish a single canonical entity description and propagate identical category language to trade directories and structured data.':
    'انشروا وصفًا مرجعيًا واحدًا للكيان وعمّموا لغة الفئة نفسها على الأدلة التجارية والبيانات المهيكلة.',
  'Publish a canonical entity description and propagate identical category language to trade directories and structured data.':
    'انشروا وصفًا مرجعيًا للكيان وعمّموا لغة الفئة نفسها على الأدلة التجارية والبيانات المهيكلة.',
  'Publish a canonical entity description and propagate identical…':
    'انشروا وصفًا مرجعيًا للكيان وعمّموا لغة الفئة نفسها…',
  'Re-observe entity understanding per engine. Success is category association correct on five of six engines.':
    'أعيدوا رصد فهم الكيان لكل محرّك. والنجاح هو ارتباط الفئة الصحيح لدى خمسة من ستة محرّكات.',
  'Resolve category description inconsistency across all public sources, then pursue verifiable third-party validation.':
    'عالج عدم اتساق وصف الفئة عبر جميع المصادر العامة، ثم اسعَ إلى توثيق قابل للتحقق من طرف ثالث.',

  /* --- Decision stage and recommendation ---------------------------------- */
  'Decision-stage control': 'التحكم في مرحلة القرار',
  'Decision stage': 'مرحلة القرار',
  'Decision volume': 'حجم القرارات',
  'AI recommendation presence': 'حضور توصية الذكاء الاصطناعي',
  'Recommendation share': 'حصة التوصيات',
  'Recommendation share 4.2 → 11%': 'حصة التوصيات 4.2 ← 11%',
  'Recommendation analysis': 'تحليل التوصيات',
  'Recommendation Map': 'خريطة التوصيات',
  'Competitor recommendation share': 'حصة توصيات المنافس',
  'Competitor share': 'حصة المنافس',
  'Competitor capture': 'استحواذ المنافس',
  'Questions with AI presence': 'الأسئلة ذات الحضور في الذكاء الاصطناعي',
  'Questions with presence': 'الأسئلة ذات الحضور',
  'Questions with presence 5 → 12 of 24': 'الأسئلة ذات الحضور 5 ← 12 من 24',
  'Prompt coverage': 'تغطية الاستفسارات',
  'Missed prompts': 'استفسارات فائتة',
  'Missed Prompts': 'الاستفسارات الفائتة',
  'Winning prompts': 'استفسارات رابحة',
  'Query Inventory': 'جرد الاستعلامات',
  'Presence on 12 of 24 tracked questions': 'حضور في 12 من 24 سؤالًا مرصودًا',
  'Supplier-evaluation first mention': 'أول ذكر في تقييم المورّدين',
  'Supplier-evaluation coverage': 'تغطية تقييم المورّدين',
  'Supplier-evaluation coverage 7% → 19%': 'تغطية تقييم المورّدين 7% ← 19%',
  'Supplier-evaluation coverage 7 → 19%': 'تغطية تقييم المورّدين 7 ← 19%',
  '7% → 19% target': 'المستهدف 7% ← 19%',
  'Share of decisions rather than share of traffic — measured where the choice is actually made rather than where it is later recorded.':
    'حصة من القرارات لا حصة من الزيارات — تُقاس حيث يُتخذ الاختيار فعلًا لا حيث يُسجَّل لاحقًا.',
  'Position measured only on questions that decide a purchase, with the vanity terms that inflate most reporting deliberately excluded.':
    'يُقاس الموقع على الأسئلة التي تحسم عملية شراء فقط، مع الاستبعاد المتعمد لمصطلحات المباهاة التي تضخّم معظم التقارير.',
  'The named questions a rival wins every time, which is what converts a vague sense of losing into a finite list of things to go and fix.':
    'الأسئلة المحددة التي يفوز بها منافس في كل مرة، وهو ما يحوّل شعورًا غامضًا بالخسارة إلى قائمة محدودة من الأمور القابلة للمعالجة.',
  'These are not lost leads, because no lead was ever created. The decision completed inside the engine, and conventional analytics recorded nothing at all.':
    'هذه ليست عملاء محتملين مفقودين، لأنه لم يُنشأ أي عميل محتمل أصلًا. اكتمل القرار داخل المحرّك، ولم تسجّل التحليلات التقليدية شيئًا على الإطلاق.',
  'Nineteen of twenty-four decisions complete without the brand. These six carry the largest share of decision-stage demand.':
    'تسعة عشر من أربعة وعشرين قرارًا تكتمل دون العلامة التجارية. وهذه الستة تحمل الحصة الأكبر من الطلب في مرحلة القرار.',
  'Northwind appears in 7% of supplier-evaluation answers — the stage that decides 60% of revenue and that Kestrel controls in five of seven questions.':
    'تظهر Northwind في 7% من إجابات تقييم المورّدين — المرحلة التي تحسم 60% من الإيرادات والتي تسيطر عليها Kestrel في خمسة من سبعة أسئلة.',
  'The stage that decides 60% of revenue carries under 15% of query volume — so the weakness is invisible to volume-led tooling.':
    'المرحلة التي تحسم 60% من الإيرادات تحمل أقل من 15% من حجم الاستعلامات — ولذلك يبقى الضعف غير مرئي للأدوات التي تقودها الأحجام.',
  'The stage where the vendor is chosen. Presence here decides whether the business reaches the shortlist at all.':
    'المرحلة التي يُختار فيها المورّد. والحضور هنا يقرر ما إذا كان النشاط التجاري سيصل إلى القائمة المختصرة أصلًا.',
  'Buyers at supplier evaluation have already chosen a solution and are choosing a vendor. This stage carries under 15% of query volume, so volume-led tooling ranks it as unimportant — while it decides most of the revenue. Absence here is exclusion from the shortlist at the moment the order is assigned.':
    'المشترون في مرحلة تقييم المورّدين اختاروا الحل بالفعل وصاروا يختارون مورّدًا. تحمل هذه المرحلة أقل من 15% من حجم الاستعلامات، فتصنّفها الأدوات التي تقودها الأحجام كغير مهمة — بينما تحسم معظم الإيرادات. والغياب هنا استبعاد من القائمة المختصرة في اللحظة التي تُسنَد فيها الطلبية.',
  'Prioritise the six highest-volume missed questions and publish material that answers each one directly and citably.':
    'أعطِ الأولوية للأسئلة الستة الفائتة الأعلى حجمًا وانشر مواد تجيب على كل منها مباشرةً وبصورة قابلة للاستشهاد.',
  'Re-run all 24 questions monthly across all six engines; record presence per engine per question.':
    'أعيدوا تشغيل الأسئلة الأربعة والعشرين شهريًا عبر المحرّكات الستة جميعها؛ وسجّلوا الحضور لكل محرّك ولكل سؤال.',
  'Re-run the supplier-evaluation prompt set monthly. Coverage is verified by recommendation slots won across all six engines, not by traffic.':
    'أعيدوا تشغيل مجموعة استفسارات تقييم المورّدين شهريًا. وتُتحقق التغطية بخانات التوصية المكتسبة عبر المحرّكات الستة، لا بالزيارات.',
  'Recommendation share re-measured across the same 24 questions monthly, with engine and date recorded per observation.':
    'يُعاد قياس حصة التوصيات عبر الأسئلة الأربعة والعشرين نفسها شهريًا، مع تسجيل المحرّك والتاريخ لكل رصدة.',

  /* --- Authority and sources ----------------------------------------------- */
  'Independent authority evidence': 'أدلة حُجّية مستقلة',
  'Independent authority evidence is weak': 'أدلة الحُجّية المستقلة ضعيفة',
  'Independent authority sources cited': 'مصادر حُجّية مستقلة مستشهد بها',
  'Independent sources': 'مصادر مستقلة',
  'Independent source count': 'عدد المصادر المستقلة',
  'Independent source count 3 → 12': 'عدد المصادر المستقلة 3 ← 12',
  'Independent validation': 'توثيق مستقل',
  '3 independent sources': '3 مصادر مستقلة',
  '3 sources against a category median of 14.': '3 مصادر مقابل وسيط فئة يبلغ 14.',
  'Category median is 14. Kestrel holds 21.': 'وسيط الفئة 14. وتملك Kestrel 21.',
  'Kestrel 21 sources, Northwind 3.': 'Kestrel 21 مصدرًا، وNorthwind 3.',
  'Weak — 3 sources': 'ضعيف — 3 مصادر',
  'Authority evidence': 'أدلة الحُجّية',
  'Authority Signals': 'إشارات الحُجّية',
  'Authority drivers': 'محرّكات الحُجّية',
  'Authority first': 'الحُجّية أولًا',
  'Authority Gap': 'فجوة الحُجّية',
  Authority: 'الحُجّية',
  'Source authority': 'حُجّية المصدر',
  'Source advantage': 'أفضلية المصادر',
  'Source influence': 'تأثير المصدر',
  'Source Influence Map': 'خريطة تأثير المصادر',
  Citations: 'الاستشهادات',
  'Citation analysis': 'تحليل الاستشهادات',
  'Engine citation analysis': 'تحليل استشهادات المحرّكات',
  'Cross-source comparison': 'مقارنة بين المصادر',
  'Trade publication coverage': 'تغطية المنشورات التجارية',
  'Public review platforms': 'منصات المراجعات العامة',
  'Review corpus': 'مجموعة المراجعات',
  'Public web': 'الويب العام',
  'Mentions weighted by the credibility of the source, so fifty low-authority listings stop reading as a stronger position than three real ones.':
    'إشارات مرجّحة بمصداقية المصدر، بحيث يتوقف خمسون إدراجًا ضعيف الحُجّية عن الظهور كموقع أقوى من ثلاثة مصادر حقيقية.',
  'Which claims stand on third-party evidence and which stand only on the company’s own website — machines weight the two very differently.':
    'أي الادّعاءات يستند إلى أدلة من طرف ثالث وأيها يستند فقط إلى موقع الشركة نفسه — فالآلات ترجّح الاثنين بصورة مختلفة تمامًا.',
  'Engines do not recommend what they cannot corroborate. Authority is the lowest GEON vector at 28 of 100, and it is the constraint that holds every other signal down.':
    'المحرّكات لا توصي بما لا تستطيع تأكيده. والحُجّية هي أدنى متجهات GEON عند 28 من 100، وهي القيد الذي يُبقي كل إشارة أخرى منخفضة.',
  'Authority is the lowest GEON vector at 28 and carries the heaviest index weight. It is the constraint holding recognition, recommendation share and coverage down.':
    'الحُجّية هي أدنى متجهات GEON عند 28 وتحمل أثقل وزن في المؤشر. وهي القيد الذي يُبقي التعرّف وحصة التوصيات والتغطية منخفضة.',
  'Engines cannot corroborate a recommendation from three sources when the category median is fourteen.':
    'لا تستطيع المحرّكات تأكيد توصية استنادًا إلى ثلاثة مصادر بينما وسيط الفئة أربعة عشر.',
  'Publish an independent, verifiable supplier-comparison resource and secure third-party validation in at least two trade publications.':
    'انشروا مرجعًا مستقلًا وقابلًا للتحقق لمقارنة المورّدين، واحصلوا على توثيق من طرف ثالث في منشورتين تجاريتين على الأقل.',
  'Secure independent validation: trade-publication contribution, verifiable customer outcomes and third-party specification references.':
    'احصلوا على توثيق مستقل: مساهمة في منشورات تجارية، ونتائج عملاء قابلة للتحقق، ومراجع مواصفات من أطراف ثالثة.',
  'Independent source count re-observed monthly, with each new source recorded by publication and date.':
    'يُعاد رصد عدد المصادر المستقلة شهريًا، مع تسجيل كل مصدر جديد بالمنشورة والتاريخ.',
  'Build supplier-comparison content against the eleven compound and strategic blind-spot questions, structured so it is both rankable and citable.':
    'ابنوا محتوى لمقارنة المورّدين يستهدف الأسئلة الإحدى عشرة ذات النقاط العمياء المركّبة والاستراتيجية، ومهيكلًا بحيث يكون قابلًا للترتيب وللاستشهاد معًا.',

  /* --- Trust ---------------------------------------------------------------- */
  Trust: 'الثقة',
  'Trust decay': 'تآكل الثقة',
  'Trust readiness': 'جاهزية الثقة',
  'Trust Intelligence': 'ذكاء الثقة',
  'Trust and Authority Diagnostics': 'تشخيصات الثقة والحُجّية',
  'Reputation consistency': 'اتساق السمعة',
  'Reputation Momentum': 'زخم السمعة',
  Consistency: 'الاتساق',
  'Is the business safe to recommend?': 'هل التوصية بهذا النشاط التجاري آمنة؟',
  'Buyer Confidence': 'ثقة المشتري',
  'Visibility creates attention; trust creates selection. A business can be perfectly visible and still be filtered out at the moment a system has to stand behind naming it first, and the reasons for that are specific and fixable.':
    'الظهور يصنع الانتباه، والثقة تصنع الاختيار. يمكن لنشاط تجاري أن يكون ظاهرًا تمامًا ومع ذلك يُستبعد في اللحظة التي يضطر فيها نظام إلى الوقوف خلف ذكره أولًا — وأسباب ذلك محددة وقابلة للمعالجة.',
  'Visibility creates attention; trust creates selection. A business can be found and still be filtered out at the moment an engine has to stand behind a recommendation.':
    'الظهور يصنع الانتباه، والثقة تصنع الاختيار. يمكن العثور على نشاط تجاري ومع ذلك يُستبعد في اللحظة التي يضطر فيها محرّك إلى الوقوف خلف توصية.',
  'Trust reads 44 of 100 while Market Fit reads 72 — the offer matches demand, but the proof does not support a recommendation.':
    'تسجّل الثقة 44 من 100 بينما تسجّل ملاءمة السوق 72 — العرض يطابق الطلب، لكن الإثبات لا يدعم توصية.',

  /* --- Competitive ---------------------------------------------------------- */
  'Competitive Intelligence': 'الذكاء التنافسي',
  'Competitor Decision Intelligence': 'ذكاء القرار لدى المنافسين',
  'Executive Intelligence': 'الذكاء التنفيذي',
  'Competitive density': 'الكثافة التنافسية',
  Replaceability: 'قابلية الاستبدال',
  'Replaceability Index': 'مؤشر قابلية الاستبدال',
  'Distributor alignment': 'اصطفاف الموزّعين',
  'Distributor Map': 'خريطة الموزّعين',
  'Northwind differentiators': 'عوامل تميّز Northwind',
  'Evaluation criteria cited': 'معايير التقييم المستشهد بها',
  'Strength Drivers': 'محرّكات القوة',
  Vulnerability: 'الهشاشة',
  Fragility: 'قابلية الانكسار',
  Dependency: 'الاعتماد',
  'Dependency Risk': 'مخاطر الاعتماد',
  'Northwind listed fourth of five suppliers.': 'أُدرجت Northwind رابعةً بين خمسة مورّدين.',
  'Absent. Meridian named first.': 'غائبة. ذُكرت Meridian أولًا.',
  'Absent. 35 searches per month.': 'غائبة. 35 عملية بحث شهريًا.',
  'Not who ranks above you — who gets recommended when a buyer asks a machine whom to choose. The useful output is never the share figure; it is the specific evidence a competitor supplies that you do not, because that is the part you can go and close.':
    'ليس من يتفوق عليكم في الترتيب — بل من يُوصى به حين يسأل مشترٍ آلةً عمّن يختار. والمخرَج المفيد ليس رقم الحصة أبدًا، بل الدليل المحدد الذي يوفّره منافس ولا توفّره أنتم، لأن هذا هو الجزء الذي يمكنكم الذهاب وسدّه.',
  'Some rivals win early by shaping the criteria; others win late at vendor selection. The counter-move is completely different for each.':
    'بعض المنافسين يفوزون مبكرًا بتشكيل المعايير، وآخرون يفوزون متأخرًا عند اختيار المورّد. والحركة المضادة مختلفة تمامًا في كل حالة.',
  'Where a position rests on a single source or a single page, and would not survive one competitor publishing a better one.':
    'حيث يستند الموقع إلى مصدر واحد أو صفحة واحدة، ولن يصمد أمام نشر منافس واحد لما هو أفضل.',
  'Kestrel is cited by three independent trade publications and maintains a public supplier-comparison library. Engines reach for that evidence when a buyer asks whom to choose.':
    'تستشهد ثلاث منشورات تجارية مستقلة بـKestrel، وهي تحتفظ بمكتبة عامة لمقارنة المورّدين. وتلجأ المحرّكات إلى هذا الدليل حين يسأل مشترٍ عمّن يختار.',
  'Kestrel receives 31% of all AI recommendations across the tracked decision set; Northwind receives 4.2%.':
    'تتلقى Kestrel 31% من جميع توصيات الذكاء الاصطناعي عبر مجموعة القرارات المرصودة؛ بينما تتلقى Northwind 4.2%.',
  'Receives 31% of all recommendations and is named first in four of seven supplier-evaluation answers.':
    'تتلقى 31% من جميع التوصيات وتُذكر أولًا في أربع من سبع إجابات لتقييم المورّدين.',
  'This gap is not brand preference. It is an evidence gap: Kestrel supplies engines with material they can cite, and Northwind does not. The lead never reaches the CRM because the decision resolved before contact.':
    'هذه الفجوة ليست تفضيلًا لعلامة تجارية، بل فجوة أدلة: تزوّد Kestrel المحرّكات بمواد يمكنها الاستشهاد بها، وNorthwind لا تفعل. ولا يصل العميل المحتمل إلى نظام إدارة العلاقات أبدًا لأن القرار حُسم قبل التواصل.',
  'Sustained trade-publication presence means engines can support a Kestrel recommendation with evidence that is not Kestrel’s own.':
    'الحضور المستمر في المنشورات التجارية يعني أن المحرّكات تستطيع دعم توصية بـKestrel بأدلة ليست من Kestrel نفسها.',
  'Its supplier-comparison library ranks organically and is the source engines cite, so one asset serves both surfaces.':
    'مكتبتها لمقارنة المورّدين مرتّبة عضويًا وهي المصدر الذي تستشهد به المحرّكات، فيخدم أصل واحد كلا السطحين.',
  'Kestrel has published material addressing each question directly; engines reach for what exists.':
    'نشرت Kestrel مواد تعالج كل سؤال مباشرةً؛ والمحرّكات تلجأ إلى ما هو موجود.',
  'Holds top-three organic positions and AI presence on the four highest-volume commercial questions.':
    'تحتل مراكز عضوية ضمن الثلاثة الأوائل ولها حضور في الذكاء الاصطناعي على الأسئلة التجارية الأربعة الأعلى حجمًا.',
  'Publishing evaluation criteria before competitors did made that framing the one engines learned.':
    'نشر معايير التقييم قبل المنافسين جعل ذلك التأطير هو ما تعلّمته المحرّكات.',
  'Halvorsen owns early-stage research questions, entering the decision before evaluation begins.':
    'تمتلك Halvorsen أسئلة البحث في المراحل المبكرة، فتدخل القرار قبل أن يبدأ التقييم.',
  'Owned authority removes the need to bid, so Kestrel’s cost per decision falls as Northwind’s rises.':
    'الحُجّية المملوكة تلغي الحاجة إلى المزايدة، فتنخفض تكلفة القرار لدى Kestrel بينما ترتفع لدى Northwind.',
  'The evaluation criteria the market has settled on, and which competitor published them first.':
    'معايير التقييم التي استقر عليها السوق، وأي منافس نشرها أولًا.',
  'Publish an evaluation framework that makes regional response time a first-class selection criterion.':
    'انشروا إطار تقييم يجعل زمن الاستجابة الإقليمي معيار اختيار من الدرجة الأولى.',
  'Publish a defensible evaluation framework that makes regional response time a first-class selection criterion.':
    'انشروا إطار تقييم قابلًا للدفاع عنه يجعل زمن الاستجابة الإقليمي معيار اختيار من الدرجة الأولى.',

  /* --- Google vs AI --------------------------------------------------------- */
  'Google vs AI Visibility Intelligence': 'ذكاء الظهور: Google مقابل الذكاء الاصطناعي',
  'Google position': 'الترتيب على Google',
  'Channel asymmetry': 'عدم تماثل القنوات',
  'Gap Matrix': 'مصفوفة الفجوات',
  'Gap classification': 'تصنيف الفجوة',
  'Strategic blind spot': 'نقطة عمياء استراتيجية',
  'Compound blind spot': 'نقطة عمياء مركّبة',
  'Compound Blind Spot': 'النقطة العمياء المركّبة',
  'Blind-spot keywords': 'كلمات مفتاحية في نقاط عمياء',
  'Traditional search and AI-mediated discovery are separate commercial assets that fail independently. This category measures each, classifies every gap between them, and prices what closing the gap is currently costing in paid media.':
    'البحث التقليدي والاكتشاف بوساطة الذكاء الاصطناعي أصلان تجاريان منفصلان يتعطلان باستقلال. تقيس هذه الفئة كلًا منهما، وتصنّف كل فجوة بينهما، وتسعّر ما يكلّفه سدّ الفجوة حاليًا في الإعلانات المدفوعة.',
  'Google rank and AI recommendation are separate commercial assets. Northwind ranks first for account setup — a question asked only after the vendor has already been chosen — and is absent from every question that decides who that vendor is.':
    'الترتيب على Google وتوصية الذكاء الاصطناعي أصلان تجاريان منفصلان. تتصدر Northwind الترتيب في إعداد الحساب — وهو سؤال لا يُطرح إلا بعد اختيار المورّد — وتغيب عن كل سؤال يحسم هوية ذلك المورّد.',
  'The same question asked of both surfaces, so the two results can finally be compared line by line instead of by anecdote.':
    'السؤال نفسه يُطرح على السطحين، بحيث يمكن أخيرًا مقارنة النتيجتين سطرًا بسطر بدلًا من المقارنة بالحكايات.',
  'Every gap sorted into a named class with a different remedy and a different cost. Not all absence is the same problem.':
    'كل فجوة مصنّفة ضمن فئة مسمّاة لها علاج مختلف وتكلفة مختلفة. فليس كل غياب هو المشكلة نفسها.',
  'Eleven of twenty tracked commercial keywords sit outside the Google top ten and receive no AI recommendation — the decision happens on neither surface.':
    'إحدى عشرة من عشرين كلمة مفتاحية تجارية مرصودة تقع خارج العشرة الأوائل على Google ولا تتلقى أي توصية من الذكاء الاصطناعي — والقرار لا يحدث على أي من السطحين.',
  'Absent from both surfaces on a high-value commercial question. The most expensive class of gap.':
    'غائب عن السطحين معًا في سؤال تجاري عالي القيمة. وهو أغلى أصناف الفجوات.',
  'Absent from AI answers and outside the Google top ten. The decision happens without the brand.':
    'غائب عن إجابات الذكاء الاصطناعي وخارج العشرة الأوائل على Google. والقرار يحدث دون العلامة التجارية.',
  'Track gap classification per keyword monthly. Success is six keywords moving out of blind-spot classification.':
    'تتبّع تصنيف الفجوة لكل كلمة مفتاحية شهريًا. والنجاح هو خروج ست كلمات مفتاحية من تصنيف النقطة العمياء.',

  /* --- Search economics ------------------------------------------------------ */
  'Search Economics': 'اقتصاديات البحث',
  'Search Cost Intelligence': 'ذكاء تكلفة البحث',
  'Search Intelligence': 'ذكاء البحث',
  'Search trend analysis': 'تحليل اتجاهات البحث',
  'Break-even CPC': 'تكلفة النقرة عند التعادل',
  'Break-Even CPC': 'تكلفة النقرة عند التعادل',
  'Break-even model': 'نموذج التعادل',
  'Above break-even': 'فوق نقطة التعادل',
  'Blended CPC vs break-even': 'تكلفة النقرة المدمجة مقابل التعادل',
  'Blended CPC across 20 tracked keywords':
    'تكلفة النقرة المدمجة عبر 20 كلمة مفتاحية مرصودة',
  'Keywords above break-even CPC': 'كلمات مفتاحية فوق تكلفة النقرة عند التعادل',
  'Keywords above break-even CPC 13 → 7 of 20':
    'كلمات مفتاحية فوق تكلفة التعادل 13 ← 7 من 20',
  '11 of 20 weak': '11 من 20 ضعيفة',
  'Bid inflation': 'تضخم المزايدات',
  'Paid dependency': 'الاعتماد على الإعلانات المدفوعة',
  'AI vs Paid': 'الذكاء الاصطناعي مقابل الإعلانات المدفوعة',
  'Recoverable Search Opportunity': 'فرصة بحث قابلة للاسترجاع',
  'recoverable search opportunity': 'فرصة بحث قابلة للاسترجاع',
  'Recoverable search opportunity': 'فرصة بحث قابلة للاسترجاع',
  'Organic replacement potential': 'إمكانية الاستبدال العضوي',
  'Paid acquisition is not buying growth here; it is renting the positions that authority would otherwise hold. The cost is structural and rises as competitive density increases.':
    'الاستحواذ المدفوع لا يشتري نموًا هنا؛ بل يستأجر المواقع التي كانت الحُجّية ستحتلها. والتكلفة بنيوية وترتفع مع ازدياد الكثافة التنافسية.',
  'Blended CPC runs above break-even. Paid is renting positions that authority would hold, and the cost rises with competitive density.':
    'تعمل تكلفة النقرة المدمجة فوق نقطة التعادل. والإعلانات المدفوعة تستأجر مواقع كانت الحُجّية ستحتلها، والتكلفة ترتفع مع الكثافة التنافسية.',
  'Blended CPC runs above the break-even cost per click, and paid spend is covering questions where the brand has no organic or AI presence.':
    'تعمل تكلفة النقرة المدمجة فوق تكلفة النقرة عند التعادل، والإنفاق المدفوع يغطي أسئلة لا حضور للعلامة التجارية فيها عضويًا ولا في الذكاء الاصطناعي.',
  'Reallocate spend from keywords with a viable organic replacement path, and hold paid only where break-even still clears.':
    'أعيدوا توزيع الإنفاق بعيدًا عن الكلمات المفتاحية التي لها مسار بديل عضوي قابل للتطبيق، وأبقوا الإعلانات المدفوعة حيث تتحقق نقطة التعادل فقط.',
  'Compare blended CPC against break-even monthly, and track organic replacement on reallocated keywords.':
    'قارنوا تكلفة النقرة المدمجة بنقطة التعادل شهريًا، وتتبّعوا الاستبدال العضوي في الكلمات المفتاحية المعاد توزيعها.',

  /* --- Narrative -------------------------------------------------------------- */
  'Narrative Intelligence': 'ذكاء السرديات',
  'Narrative ownership 12% → 24%': 'ملكية السردية 12% ← 24%',
  'Narrative control': 'التحكم في السردية',
  'Narrative War Room': 'غرفة عمليات السردية',
  'Category definition': 'تعريف الفئة',
  'Category definition language': 'لغة تعريف الفئة',
  'Comparison content': 'محتوى المقارنة',
  'Content Intelligence': 'ذكاء المحتوى',
  'Buyer education': 'توعية المشتري',
  'Pricing perception': 'إدراك الأسعار',
  'Price justification': 'تبرير السعر',
  'Strategic silence': 'الصمت الاستراتيجي',
  'Whoever defines a category sets the criteria buyers evaluate against. This category measures how much of that definition you own, where it is fragile, and which of your genuine advantages the market has no vocabulary for.':
    'من يعرّف الفئة يضع المعايير التي يقيس المشترون عليها. تقيس هذه الفئة كم تملك من ذلك التعريف، وأين يكون هشًا، وأي مزاياكم الحقيقية لا يملك السوق مفردات لوصفها.',
  'Whoever defines the category sets the criteria buyers evaluate against. Competing on someone else’s definition means competing on terms chosen to favour them.':
    'من يعرّف الفئة يضع المعايير التي يقيس المشترون عليها. والتنافس على تعريف شخص آخر يعني التنافس بشروط اختيرت لصالحه.',
  'Engines describe the category in a competitor’s language. Northwind’s strongest differentiator is absent from every category description.':
    'تصف المحرّكات الفئة بلغة أحد المنافسين. وأقوى عوامل تميّز Northwind غائب عن كل وصف للفئة.',
  'Whether the market is asking informed comparison questions or still asking what the category is, which decides what content is worth producing.':
    'ما إذا كان السوق يطرح أسئلة مقارنة مطّلعة أم لا يزال يسأل ما هي الفئة، وهو ما يحدد المحتوى الذي يستحق الإنتاج.',
  'Category vocabulary as an ownable asset, with a percentage attached — a measure most companies have never seen quantified.':
    'مفردات الفئة كأصل قابل للتملك، مرفقة بنسبة مئوية — وهو مقياس لم تر معظم الشركات تقديرًا كميًا له من قبل.',

  /* --- Strategic timing -------------------------------------------------------- */
  'Strategic Timing Intelligence': 'ذكاء التوقيت الاستراتيجي',
  'Strategic Timing Window': 'نافذة التوقيت الاستراتيجي',
  'The window is open and closing': 'النافذة مفتوحة وفي طريقها إلى الإغلاق',
  '7 months — closes 2027-02-28': '7 أشهر — تُغلق في 2027-02-28',
  'Query maturity': 'نضج الاستعلامات',
  'Query maturity accelerating': 'نضج الاستعلامات يتسارع',
  'Demand maturation': 'نضج الطلب',
  'Shift velocity': 'سرعة التحوّل',
  'Rising 8% quarter over quarter.': 'ترتفع 8% من ربع إلى ربع.',
  'Moderate — 8% quarter-over-quarter': 'معتدلة — 8% من ربع إلى ربع',
  'Time to impact': 'الزمن حتى الأثر',
  Urgency: 'الإلحاح',
  Emerging: 'ناشئ',
  'Timing, geography and distribution — the three conditions that decide whether a correct strategy executed today returns more than the same strategy executed in a year. A right decision at the wrong time is still a wrong decision.':
    'التوقيت والجغرافيا والتوزيع — الشروط الثلاثة التي تقرر ما إذا كانت استراتيجية صحيحة تُنفَّذ اليوم ستعود بأكثر من الاستراتيجية نفسها منفَّذة بعد عام. فالقرار الصحيح في التوقيت الخطأ يبقى قرارًا خاطئًا.',
  'Category language is still forming, so authority built now compounds. Once engines settle on a stable answer set, displacing an incumbent recommendation costs materially more.':
    'لغة الفئة ما زالت في طور التشكّل، ولذلك تتراكم الحُجّية المبنية الآن. وحين تستقر المحرّكات على مجموعة إجابات ثابتة، تصبح إزاحة توصية راسخة أعلى تكلفة بصورة جوهرية.',
  'Whether category language is still fluid — because authority built while it is fluid becomes the default answer, and authority built after has to displace one.':
    'ما إذا كانت لغة الفئة ما زالت مرنة — لأن الحُجّية المبنية أثناء مرونتها تصبح الإجابة الافتراضية، أما المبنية بعد ذلك فعليها أن تزيح واحدة.',
  'The rate at which recommendation slots are being taken, which is what converts "sometime this year" into a dated decision.':
    'معدل استحواذ خانات التوصية، وهو ما يحوّل "في وقت ما هذا العام" إلى قرار له تاريخ.',
  'The market is emerging with roughly seven months of open window; competitive density is rising 8% per quarter.':
    'السوق ناشئ مع نافذة مفتوحة تبلغ نحو سبعة أشهر؛ والكثافة التنافسية ترتفع 8% كل ربع.',
  'Commit authority investment before the decision deadline, while displacement cost remains low.':
    'التزموا باستثمار الحُجّية قبل الموعد النهائي للقرار، بينما تبقى تكلفة الإزاحة منخفضة.',

  /* --- Exposure and opportunity ------------------------------------------------ */
  'Directional commercial exposure': 'تعرّض تجاري اتجاهي',
  'Commercial exposure': 'التعرّض التجاري',
  'Revenue Exposure': 'التعرّض في الإيرادات',
  'Opportunity and Revenue Intelligence': 'ذكاء الفرص والإيرادات',
  'Opportunity range': 'نطاق الفرصة',
  'Opportunity Signal Map': 'خريطة إشارات الفرص',
  'Estimated conversion': 'التحويل المقدّر',
  'Conversion assumptions': 'افتراضات التحويل',
  'Average deal value': 'متوسط قيمة الصفقة',
  'Deal value': 'قيمة الصفقة',
  'Decision gap': 'فجوة القرار',
  Demand: 'الطلب',
  'Sensitivity analysis': 'تحليل الحساسية',
  'Priority ranking model': 'نموذج ترتيب الأولويات',
  'What is it worth, and what happens next?': 'ما قيمته، وما الذي يحدث تاليًا؟',
  'Demand × decision gap × estimated conversion × average deal value. A range, never a confirmed figure.':
    'الطلب × فجوة القرار × التحويل المقدّر × متوسط قيمة الصفقة. نطاق، وليس رقمًا مؤكدًا أبدًا.',
  'How crowded is the answer set becoming?': 'إلى أي مدى تزدحم مجموعة الإجابات؟',

  /* --- Action ------------------------------------------------------------------ */
  'Action Intelligence': 'ذكاء الإجراءات',
  'Action Center': 'مركز الإجراءات',
  'Prioritised interventions': 'تدخلات مرتّبة حسب الأولوية',
  'Prioritised intervention sequence': 'تسلسل التدخلات حسب الأولوية',
  'Top intervention': 'التدخل الأول',
  'Priority Queue': 'طابور الأولويات',
  '30/60/90-Day Roadmap': 'خارطة طريق 30/60/90 يومًا',
  '6 sequenced': '6 مرتّبة بالتسلسل',
  Effort: 'الجهد',
  'Effort assessment': 'تقدير الجهد',
  'Measured change': 'تغيّر مقيس',
  'Impact Tracker': 'متتبّع الأثر',
  'Success metric': 'مقياس النجاح',
  Prescription: 'الإجراء الموصوف',
  Confidence: 'الثقة',
  Context: 'السياق',
  Concerns: 'مواضع القلق',
  Weak: 'ضعيف',
  'Where diagnosis becomes a decision. Every gap is priced as a directional range, ranked against every other gap, assigned an owner and a deadline, and then measured after execution to confirm the signal actually moved.':
    'حيث يتحول التشخيص إلى قرار. تُسعَّر كل فجوة كنطاق اتجاهي، وتُرتَّب مقابل كل فجوة أخرى، ويُسنَد لها مسؤول وموعد نهائي، ثم تُقاس بعد التنفيذ للتأكد من أن الإشارة تحركت فعلًا.',
  'Diagnosis without sequence produces activity, not movement. Each intervention names an owner, a deadline, the signal it should move and how that movement will be verified.':
    'التشخيص بلا تسلسل يُنتج نشاطًا لا حركة. كل تدخل يحدد مسؤولًا وموعدًا نهائيًا والإشارة التي عليه تحريكها وكيف سيُتحقق من تلك الحركة.',
  'Every finding converted into an intervention with an owner, a deadline and a stated expected movement — or dropped, if it cannot be.':
    'كل نتيجة تُحوَّل إلى تدخل له مسؤول وموعد نهائي وحركة متوقعة معلنة — أو تُسقَط إن تعذّر ذلك.',
  'Ranking by exposure, confidence, effort and dependency, so effort does not go into work that cannot move until something else lands.':
    'ترتيب حسب التعرّض والثقة والجهد والاعتمادية، بحيث لا يُبذل الجهد في عمل لا يمكن أن يتحرك حتى يكتمل شيء آخر.',
  'A sequence built from what each intervention actually depends on, rather than from a calendar someone divided into thirds.':
    'تسلسل مبني على ما يعتمد عليه كل تدخل فعليًا، لا على تقويم قسّمه أحدهم إلى أثلاث.',
  'Each action carries its own success metric. Impact is verified by signal movement after execution, not by task completion.':
    'كل إجراء يحمل مقياس نجاحه الخاص. ويُتحقق من الأثر بحركة الإشارة بعد التنفيذ، لا باكتمال المهمة.',
  'Six interventions are prioritised; the first two address authority evidence and supplier-comparison coverage.':
    'ستة تدخلات مرتّبة حسب الأولوية؛ ويعالج أولها أدلة الحُجّية وتغطية مقارنة المورّدين.',

  /* --- The decision journey ----------------------------------------------------- */
  'Decision Journey': 'رحلة القرار',
  Research: 'البحث',
  'Solution Evaluation': 'تقييم الحلول',
  'Supplier Evaluation': 'تقييم المورّدين',
  'Purchase Decision': 'قرار الشراء',
  'Decision Hijack': 'اختطاف القرار',

  /* --- Market --------------------------------------------------------------------- */
  'Market Intelligence': 'ذكاء السوق',
  'Global Market Intelligence': 'ذكاء السوق العالمي',
  'Global Visibility Matrix': 'مصفوفة الظهور العالمي',
  'Market readiness': 'جاهزية السوق',
  'Market Readiness Gauge': 'مقياس جاهزية السوق',
  'Market Entry Readiness': 'جاهزية دخول السوق',
  'Market Fit': 'ملاءمة السوق',
  'Regional variation': 'تباين إقليمي',
  'Regional strength': 'قوة إقليمية',
  'Country definition': 'تعريف الدولة',
  'Distribution Intelligence': 'ذكاء التوزيع',
  'Scenario Simulator': 'محاكي السيناريوهات',
  Analytics: 'التحليلات',
  Visibility: 'الظهور',
  Ownership: 'الملكية',

  /* --- Roles and model provenance -------------------------------------------------- */
  'VP Marketing': 'نائب رئيس التسويق',
  'Head of Digital': 'رئيس القطاع الرقمي',
  'Head of Brand': 'رئيس العلامة التجارية',
  'Chief Executive': 'الرئيس التنفيذي',
  'Content Lead': 'مسؤول المحتوى',
  'Demand Gen Manager': 'مدير توليد الطلب',
  'Customer-configured': 'مُهيَّأ من العميل',
  'Derived from §13.1 chain': 'مشتق من سلسلة §13.1',
  /* A product name. Recorded rather than translated, so its absence from the
     rest of this file reads as a decision and not an oversight. */
  'Google Ads': 'Google Ads',

  /* ==========================================================================
     ELECTION INTELLIGENCE
     The race, the candidates and the county are invented. Candidate initials
     stay Latin — they are names, and the page says so on every screen.
     ====================================================================== */
  'Demonstration subject': 'موضوع العرض التوضيحي',
  'Entirely fictional. No real person, party or race.':
    'خيالي بالكامل. لا يوجد شخص أو حزب أو سباق حقيقي.',
  Race: 'السباق',
  'County Commission': 'مجلس المقاطعة',
  'Riverbend County — District 4': 'مقاطعة Riverbend — الدائرة 4',
  Candidate: 'المرشح',
  Opponent: 'المنافس',
  /* Invented candidates. Transliterated rather than left Latin: a bare Latin
     run inside an RTL line breaks the reading order of the surrounding name
     label, and these are names, not product names. */
  'A. Marchetti': 'أ. مارتشيتي',
  'D. Okonkwo': 'د. أوكونكو',
  'Election War Room — the live operational view':
    'غرفة عمليات الانتخابات — العرض التشغيلي المباشر',
  'The Election War Room. Fictional race, demonstration data — no real candidate, party or campaign.':
    'غرفة عمليات الانتخابات. سباق خيالي وبيانات عرض توضيحي — لا يوجد مرشح أو حزب أو حملة حقيقية.',
  'Candidate / party dashboard — the standing position':
    'لوحة المرشح/الحزب — الموقع القائم',
  'Candidate and party position. Fictional race, demonstration data — no real candidate, party or campaign.':
    'موقع المرشح والحزب. سباق خيالي وبيانات عرض توضيحي — لا يوجد مرشح أو حزب أو حملة حقيقية.',
  'Election narrative intelligence — positive vs negative narratives':
    'ذكاء السرديات الانتخابية — السرديات الإيجابية مقابل السلبية',
  'Which narratives are strengthening the position and which are damaging it. Fictional race, demonstration data.':
    'أي السرديات تقوّي الموقع وأيها يضرّ به. سباق خيالي وبيانات عرض توضيحي.',
  'Positive vs negative narratives — the polarity split':
    'السرديات الإيجابية مقابل السلبية — انقسام الاستقطاب',
  'Positive against negative, by reach and by direction of travel. Fictional race, demonstration data.':
    'الإيجابي مقابل السلبي، حسب المدى واتجاه الحركة. سباق خيالي وبيانات عرض توضيحي.',
  'Audience / segment movement — who is moving toward and away':
    'حركة الجمهور/الشرائح — من يقترب ومن يبتعد',
  'Which audiences are moving closer and which are moving away. Fictional race, demonstration data.':
    'أي الجماهير تقترب وأيها يبتعد. سباق خيالي وبيانات عرض توضيحي.',
  'Opponent intelligence — competing narratives and ownership':
    'ذكاء المنافس — السرديات المتنافسة وملكيتها',
  'What the opposing account is, and which issues it owns. Fictional race, demonstration data.':
    'ما هي رواية الطرف المقابل، وأي القضايا يمتلكها. سباق خيالي وبيانات عرض توضيحي.',
  'Influencers and sources shaping the narrative':
    'المؤثرون والمصادر التي تصوغ السردية',
  'Who is strengthening the position and who is damaging it. Fictional race, demonstration data.':
    'من يقوّي الموقع ومن يضرّ به. سباق خيالي وبيانات عرض توضيحي.',
  'AI + Google election intelligence — per-engine narrative leads':
    'ذكاء انتخابي من الذكاء الاصطناعي وGoogle — صدارة السردية لكل محرك',
  'What each AI engine and Google surface leads with. Fictional race, demonstration data.':
    'بماذا يتصدّر كل محرك ذكاء اصطناعي وكل واجهة من Google. سباق خيالي وبيانات عرض توضيحي.',
  'Multilingual intelligence — narrative gaps between languages':
    'ذكاء متعدد اللغات — فجوات السردية بين اللغات',
  'Where the account of a candidate differs by language. Fictional race, demonstration data.':
    'أين تختلف رواية المرشح باختلاف اللغة. سباق خيالي وبيانات عرض توضيحي.',
  'Risks and opportunities — emerging threats and open positions':
    'المخاطر والفرص — التهديدات الناشئة والمواقع المفتوحة',
  'Emerging threats and unclaimed positions, ranked. Fictional race, demonstration data.':
    'التهديدات الناشئة والمواقع غير المُطالَب بها، مرتّبة. سباق خيالي وبيانات عرض توضيحي.',
  'Recommended actions — the campaign action plan':
    'الإجراءات الموصى بها — خطة عمل الحملة',
  'What to do now, who owns it, and how the movement will be measured. Fictional race, demonstration data.':
    'ما الذي يجب فعله الآن، ومن يملكه، وكيف ستُقاس الحركة. سباق خيالي وبيانات عرض توضيحي.',
  'Trend over time — narrative movement across the cycle':
    'الاتجاه عبر الزمن — حركة السردية على امتداد الدورة',
  'How the position has moved across the cycle. Fictional race, demonstration data.':
    'كيف تحرّك الموقع على امتداد الدورة. سباق خيالي وبيانات عرض توضيحي.',

  /* ==========================================================================
     INTELLIGENCE ENGINES
     ====================================================================== */
  'Intelligence engines': 'محركات الذكاء',
  'Each engine answers a board-level business question, produces a connected intelligence readout and routes the user into action. Not a feature list — a set of questions the business needs answered.':
    'كل محرك يجيب عن سؤال تجاري بمستوى مجلس الإدارة، ويُنتج قراءة ذكاء مترابطة، ويوجّه المستخدم إلى الفعل. ليست قائمة ميزات — بل مجموعة أسئلة يحتاج النشاط التجاري إلى إجابات عنها.',
  'Built in this environment · 4 of 12': 'مبني في هذه البيئة · 4 من 12',
  'Four engines, built to full depth': 'أربعة محركات، مبنية بعمق كامل',
  'Each carries a real seeded outcome, its evidence, its commercial consequence and the action it prescribes. They chain into one another — together they form the causal argument rather than four samples of it.':
    'كل محرك يحمل نتيجة مزروعة حقيقية، وأدلتها، وأثرها التجاري، والإجراء الذي يصفه. وهي تتسلسل معًا — فتشكّل مجتمعةً الحجة السببية بدلاً من أربع عيّنات منها.',
  'The full operating system': 'نظام التشغيل الكامل',
  'Eight further engines available in the platform':
    'ثمانية محركات إضافية متاحة في المنصة',
  'These are part of the operating system but are not built in this demonstration environment. Their business questions are listed so the shape of the full system is visible.':
    'هذه جزء من نظام التشغيل لكنها غير مبنية في بيئة العرض هذه. أسئلتها التجارية مدرجة كي يتضح شكل النظام الكامل.',
  'Available in platform': 'متاح في المنصة',
  'Is the business present when customers ask AI whom to choose?':
    'هل النشاط التجاري حاضر حين يسأل العملاء الذكاء الاصطناعي عمّن يختارون؟',
  'Which gap is commercially meaningful enough to fix first?':
    'أي فجوة ذات مغزى تجاري كافٍ لتُعالَج أولاً؟',
  'When does paid search become structurally inefficient?':
    'متى يصبح البحث المدفوع غير فعّال بنيويًا؟',
  'Is the business visible but still unsafe to recommend?':
    'هل النشاط التجاري مرئي لكنه ما زال غير آمن للتوصية به؟',
  'When the market explains the category, whose language does it use?':
    'حين يشرح السوق الفئة، لغة من يستخدم؟',
  'Is the market ready, and how long is the window open?':
    'هل السوق جاهز، وكم يبقى النافذة مفتوحة؟',
  'How does the business change across countries, languages and markets?':
    'كيف يتغيّر النشاط التجاري عبر الدول واللغات والأسواق؟',
  'Does the route to market strengthen the brand or transfer power to intermediaries?':
    'هل يقوّي مسار الوصول إلى السوق العلامة التجارية أم ينقل القوة إلى الوسطاء؟',
  'See plans': 'اطّلعوا على الخطط',

  /* ==========================================================================
     MARKETPLACE
     ====================================================================== */
  'Seven categories of decision intelligence, each holding the models that answer one kind of commercial question. Most of them measure things a business has never been able to see — not because the questions are exotic, but because nothing existed to answer them.':
    'سبع فئات من ذكاء القرار، تحوي كل منها النماذج التي تجيب عن نوع واحد من الأسئلة التجارية. معظمها يقيس أمورًا لم يستطع أي نشاط تجاري رؤيتها من قبل — لا لأن الأسئلة غريبة، بل لأنه لم يوجد ما يجيب عنها.',
  'Intelligence categories': 'فئات الذكاء',
  'Intelligence modules': 'وحدات الذكاء',
  'Engines beneath them': 'المحركات تحتها',
  'of these modules run live in this environment against a real reconstructed business. The rest are available in the platform.':
    'من هذه الوحدات تعمل مباشرةً في هذه البيئة على نشاط تجاري مُعاد بناؤه فعليًا. والبقية متاحة في المنصة.',
  'Start with the question you actually have.': 'ابدأوا من السؤال الذي لديكم فعلاً.',
  'Each category opens into the modules underneath it. Every module answers one business question and returns evidence, an analysis and a recommendation — never a figure on its own.':
    'كل فئة تنفتح على الوحدات التي تحتها. وكل وحدة تجيب عن سؤال تجاري واحد وتعيد دليلاً وتحليلاً وتوصية — لا رقمًا مجرّدًا أبدًا.',
  'What you are buying': 'ما الذي تشتريه',
  'The document is the output. The intelligence is the product.':
    'المستند هو المُخرَج. والذكاء هو المنتج.',
  'How the models work': 'كيف تعمل النماذج',
  'Every claim carries the observation behind it — which engine, which question, which date. A conclusion you cannot audit is an opinion.':
    'كل ادّعاء يحمل الملاحظة التي وراءه — أي محرك، وأي سؤال، وأي تاريخ. والاستنتاج الذي لا يمكن تدقيقه رأيٌ لا أكثر.',
  'What the evidence means commercially, what is causing it, and how confident the model can honestly be. Limits are stated, never implied.':
    'ما الذي يعنيه الدليل تجاريًا، وما سببه، وما مستوى الثقة الذي يمكن للنموذج أن يدّعيه بصدق. الحدود تُذكر صراحةً ولا يُلمَّح إليها.',
  'What to do, who owns it, by when, and what signal should move as a result. Verified afterwards against what actually moved.':
    'ما الذي يجب فعله، ومن يملكه، وبحلول متى، وأي إشارة ينبغي أن تتحرك نتيجةً لذلك. ويُتحقَّق منه لاحقًا مقابل ما تحرّك فعلاً.',
  'Whatever the business question, there is already intelligence built for it.':
    'مهما كان السؤال التجاري، هناك ذكاء مبني له بالفعل.',
  'See a module run live': 'شاهدوا وحدة تعمل مباشرةً',
  'Monitor continuously instead': 'أو راقب بشكل مستمر بدلاً من ذلك',
  '7 live in demo': '7 تعمل في العرض التوضيحي',
  '4 live in demo': '4 تعمل في العرض التوضيحي',
  Analysis: 'التحليل',
  Recommendation: 'التوصية',
  modules: 'وحدات',
  Explore: 'استكشف',
  '+ 1 more': '+ 1 إضافية',
  '+ 2 more': '+ 2 إضافية',
  '+ 4 more': '+ 4 إضافية',
  '+ 6 more': '+ 6 إضافية',
  '+ {n} more': '+ {n} إضافية',
  '{n} live in demo': '{n} تعمل في العرض التوضيحي',
  '<b>{n}</b> of these modules run live in this environment against a real reconstructed business. The rest are available in the platform.':
    '<b>{n}</b> من هذه الوحدات تعمل مباشرةً في هذه البيئة على نشاط تجاري مُعاد بناؤه فعليًا. والبقية متاحة في المنصة.',
  'Built in this environment · {n} of {total}': 'مبني في هذه البيئة · {n} من {total}',

  /* ==========================================================================
     LEGAL
     `localStorage` stays Latin — it is the storage API by name, and the page
     has to name it precisely.
     ====================================================================== */
  Legal: 'الشؤون القانونية',
  'Legal and data handling': 'الشؤون القانونية والتعامل مع البيانات',
  'Legal and data handling | GeoRepute':
    'الشؤون القانونية والتعامل مع البيانات | GeoRepute',
  'Privacy, terms, data processing and security posture for the GeoRepute demonstration environment.':
    'الخصوصية والشروط ومعالجة البيانات والوضع الأمني لبيئة العرض التوضيحي من GeoRepute.',
  'What this environment does and does not do with data.':
    'ما تفعله هذه البيئة بالبيانات وما لا تفعله.',
  'This is a demonstration build. Rather than reproduce boilerplate that would not apply to it, each section below states the actual position.':
    'هذه نسخة عرض توضيحي. وبدلاً من تكرار صياغات نمطية لا تنطبق عليها، يوضّح كل قسم أدناه الموقف الفعلي.',
  Privacy: 'الخصوصية',
  'This environment collects nothing. There is no analytics script, no tag manager, no session recording and no third-party tracker on any page.':
    'هذه البيئة لا تجمع أي شيء. لا يوجد سكربت تحليلات ولا مدير وسوم ولا تسجيل جلسات ولا أي أداة تتبّع من طرف ثالث في أي صفحة.',
  'The only data stored about you is your theme preference and any demonstration purchases, both held in your browser’s localStorage and readable only by this site. Nothing is transmitted anywhere. Clearing site data removes all of it, and the purchase-confirmation screen offers a reset control.':
    'البيانات الوحيدة المخزَّنة عنكم هي تفضيل السمة وأي عمليات شراء توضيحية، وكلاهما محفوظ في localStorage بمتصفحكم ولا يمكن قراءته إلا من هذا الموقع. ولا يُرسَل أي شيء إلى أي جهة. ومسح بيانات الموقع يزيلها بالكامل، كما توفّر شاشة تأكيد الشراء زر إعادة تعيين.',
  'Terms of service': 'شروط الخدمة',
  'No commercial terms apply. Nothing on this site constitutes an offer, and no contract can be formed through it.':
    'لا تنطبق أي شروط تجارية. ولا يشكّل أي شيء في هذا الموقع عرضًا، ولا يمكن إبرام أي عقد من خلاله.',
  'Pricing shown throughout is placeholder and clearly marked as such on the pricing page. The checkout collects no payment details and processes no charge.':
    'الأسعار المعروضة في الموقع هي أسعار نائبة ومُعلَّمة بوضوح كذلك في صفحة الأسعار. وصفحة الدفع لا تجمع أي بيانات دفع ولا تنفّذ أي عملية خصم.',
  'Data processing': 'معالجة البيانات',
  'Northwind Supply is a fictional organisation. Every figure attributed to it is seeded, internally consistent and derived from a published set of anchor facts. No real company’s data appears anywhere in this environment.':
    'Northwind Supply مؤسسة خيالية. وكل رقم منسوب إليها هو رقم مزروع ومتّسق داخليًا ومشتق من مجموعة معلنة من الحقائق المرجعية. ولا تظهر بيانات أي شركة حقيقية في أي موضع من هذه البيئة.',
  'Competitor names, domains and citation counts are invented. Any resemblance to an operating business is coincidental and unintended.':
    'أسماء المنافسين ونطاقاتهم وأعداد الاستشهادات كلها من نسج الخيال. وأي تشابه مع نشاط تجاري قائم هو محض مصادفة وغير مقصود.',
  'AI engines are referenced by their public product names for accuracy of description. No affiliation, endorsement or partnership is claimed or implied.':
    'يُشار إلى محركات الذكاء الاصطناعي بأسماء منتجاتها العلنية توخّيًا لدقة الوصف. ولا يُدّعى أي انتساب أو تأييد أو شراكة ولا يُلمَّح إليها.',
  Security: 'الأمان',
  'There is no authentication, no user account and no server-side session. The sign-in screen requests no password because none is checked — inviting a real credential into a demonstration would be a hazard, not a convenience.':
    'لا توجد مصادقة ولا حساب مستخدم ولا جلسة على الخادم. ولا تطلب شاشة تسجيل الدخول كلمة مرور لأنه لا يُتحقَّق من أي كلمة مرور — فدعوة بيانات اعتماد حقيقية إلى عرض توضيحي خطرٌ لا تسهيل.',
  'No external network requests are made at runtime. Fonts are self-hosted, all visuals are generated in CSS or SVG, and the content security posture assumes no third-party origin is trusted.':
    'لا تُجرى أي طلبات شبكة خارجية أثناء التشغيل. الخطوط مستضافة ذاتيًا، وجميع العناصر البصرية مُولَّدة بـCSS أو SVG، ويفترض وضع أمان المحتوى أنه لا يُوثَق بأي مصدر خارجي.',
  'Before this platform is operated commercially, these sections must be replaced with reviewed policies covering the real data flows, retention periods, sub-processors and jurisdictions involved.':
    'قبل تشغيل هذه المنصة تجاريًا، يجب استبدال هذه الأقسام بسياسات مُراجَعة تغطي تدفقات البيانات الفعلية ومدد الاحتفاظ والمعالِجين الفرعيين والولايات القضائية المعنية.',
  'Return home': 'العودة إلى الصفحة الرئيسية',

  /* ==========================================================================
     SIGN IN
     ====================================================================== */
  'Sign In': 'تسجيل الدخول',
  'Sign In | GeoRepute': 'تسجيل الدخول | GeoRepute',
  Home: 'الرئيسية',
  'Enter the demonstration workspace': 'ادخلوا إلى مساحة العمل التوضيحية',
  'This environment has no authentication. Every visitor sees the same seeded organisation, Northwind Supply, so that every figure stays verifiable against the published methodology.':
    'لا توجد مصادقة في هذه البيئة. فكل زائر يرى المؤسسة المزروعة نفسها، Northwind Supply، بحيث يبقى كل رقم قابلاً للتحقق مقابل المنهجية المنشورة.',
  Workspace: 'مساحة العمل',
  'northwindsupply.com · US Midwest': 'northwindsupply.com · وسط غرب الولايات المتحدة',
  'Continue to Mission Control': 'المتابعة إلى مركز القيادة',
  'No password is requested because none is checked. Real authentication drops in behind the same route without changing this screen’s place in the flow.':
    'لا تُطلب كلمة مرور لأنه لا يُتحقَّق من أي كلمة مرور. والمصادقة الحقيقية تُركَّب خلف المسار نفسه دون تغيير موضع هذه الشاشة في التدفق.',

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
  'Public narrative intelligence': 'ذكاء السرديات العامة',
  'Public Narrative Intelligence | GeoRepute': 'ذكاء السرديات العامة | GeoRepute',
  'Public Narrative Intelligence': 'ذكاء السرديات العامة',
  'What story is the market telling about us?': 'ما القصة التي يرويها السوق عنّا؟',
  'Not how often the business is mentioned. Which accounts of it are active, who owns each one, and which of them decide whether it gets chosen.':
    'ليس كم مرة يُذكر النشاط التجاري. بل أي الروايات عنه نشطة، ومن يملك كلاً منها، وأيها يحسم ما إذا كان سيُختار.',
  'Election mode': 'وضع الانتخابات',
  'Political intelligence': 'الذكاء السياسي',
  Health: 'الصحة',
  'Narrative health': 'صحة السردية',
  'Overall public sentiment': 'المشاعر العامة الإجمالية',
  'A weighted read of how much active conversation helps against how much hurts.':
    'قراءة مرجّحة لمقدار ما يساعد من النقاش النشط مقابل ما يضرّ منه.',
  'Narrative momentum': 'زخم السردية',
  'Narrative stability': 'استقرار السردية',
  'Narrative balance': 'توازن السردية',
  'Positive narrative strength': 'قوة السردية الإيجابية',
  'Negative narrative strength': 'قوة السردية السلبية',
  'Neutral narrative': 'سردية محايدة',
  'The balance between stories that help and stories that hurt, weighted by how much of the conversation each reaches.':
    'التوازن بين القصص التي تساعد والقصص التي تضرّ، مرجّحًا بمقدار ما يبلغه كل منها من النقاش.',
  '20% of active category conversation carries a story that favours this business — and both of those narratives are currently unclaimed by anyone.':
    '20% من النقاش النشط في الفئة يحمل قصة تصبّ في صالح هذا النشاط التجاري — وكلتا السرديتين غير مُطالَب بهما من أحد حاليًا.',
  '74% carries a story that works against it, most of it a competitor’s evaluation framing rather than criticism of the business itself.':
    '74% يحمل قصة تعمل ضده، ومعظمها إطار تقييم صاغه منافس وليس نقدًا للنشاط التجاري نفسه.',
  '6% is category-level conversation attached to no supplier. Neutral is not safe — it is unowned ground with no defender.':
    '6% نقاش على مستوى الفئة غير مرتبط بأي مورّد. والحياد ليس أمانًا — بل أرض بلا مالك ولا مدافع.',
  'Sentiment is not hostility. Nothing here is criticism of the business — the adverse weight comes almost entirely from stories written by competitors in which this business does not appear.':
    'المشاعر ليست عداءً. لا شيء هنا نقدٌ للنشاط التجاري — فالوزن السلبي يأتي كله تقريبًا من قصص كتبها منافسون ولا يظهر فيها هذا النشاط أصلاً.',
  '3 adverse narratives are gaining ground against 1 favourable one. Direction matters more than the current balance, because it is what the position will be in two quarters.':
    '3 سرديات سلبية تكسب أرضًا مقابل سردية إيجابية واحدة. والاتجاه أهم من التوازن الحالي، لأنه ما سيكون عليه الموقع بعد ربعين.',
  '4 of 8 active narratives are still forming or growing. The account of this category is not yet fixed, which is what makes intervention cheap now and expensive later.':
    '4 من 8 سرديات نشطة ما زالت تتشكّل أو تنمو. ورواية هذه الفئة لم تستقر بعد، وهذا ما يجعل التدخّل رخيصًا الآن ومكلفًا لاحقًا.',
  Landscape: 'المشهد',
  'Every active narrative in this category': 'كل سردية نشطة في هذه الفئة',
  'Sorted by reach. The owner column is the one that matters — a favourable story nobody owns is an asset waiting to be claimed.':
    'مرتّبة حسب المدى. وعمود المالك هو المهم — فالقصة الإيجابية التي لا يملكها أحد أصلٌ ينتظر من يطالب به.',
  'Who owns the story': 'من يملك القصة',
  'Share of active conversation, weighted by reach. Unclaimed is not neutral ground — it is ground with no defender.':
    'نصيب من النقاش النشط، مرجّحًا بالمدى. وغير المُطالَب به ليس أرضًا محايدة — بل أرض بلا مدافع.',
  Business: 'النشاط التجاري',
  Competitors: 'المنافسون',
  Shared: 'مشترك',
  Unclaimed: 'غير مُطالَب به',
  'Business: 4%': 'النشاط التجاري: 4%',
  'Competitors: 56%': 'المنافسون: 56%',
  'Shared: 20%': 'مشترك: 20%',
  'Unclaimed: 20%': 'غير مُطالَب به: 20%',
  'Category language owned': 'لغة الفئة المملوكة',
  'The share of the vocabulary engines use to define this category that belongs to this business. Whoever holds this sets the criteria every comparison is scored against.':
    'نصيب هذا النشاط التجاري من المفردات التي تستخدمها المحركات لتعريف هذه الفئة. ومن يملكها يحدّد المعايير التي تُقيَّم عليها كل مقارنة.',
  'The split above measures this specific narrative inventory. This figure measures the category’s language as a whole, and is the same one Mission Control publishes.':
    'التقسيم أعلاه يقيس مخزون السرديات هذا تحديدًا. أما هذا الرقم فيقيس لغة الفئة ككل، وهو الرقم نفسه الذي ينشره مركز القيادة.',
  'The business holds': 'يمتلك النشاط التجاري',
  'The business holds <b>{pct}%</b>, and every point of it is the hardware-retailer error rather than anything it chose to say. Ownership counts the stories attached to a name; it does not ask whether they help.':
    'يمتلك النشاط التجاري <b>{pct}%</b>، وكل نقطة منها هي خطأ تصنيفه كمتجر أدوات لا شيئًا اختار قوله. فالملكية تعدّ القصص المرتبطة بالاسم؛ ولا تسأل ما إذا كانت تساعد.',
  'Weighted by reach rather than counted, so a story reaching a third of the category is not equal to one reaching a twentieth.':
    'مرجّحة بالمدى لا معدودة، فالقصة التي تبلغ ثلث الفئة لا تساوي قصة تبلغ عشرها الثاني.',
  Reach: 'المدى',
  'Owned by': 'مملوكة لـ',
  Influence: 'التأثير',
  Competition: 'المنافسة',
  Opportunity: 'الفرصة',
  Strength: 'قوة',
  Weakness: 'ضعف',
  Risk: 'خطر',
  Media: 'الإعلام',
  Questions: 'الأسئلة',
  'If ignored': 'إذا أُهمل',
  'Overlap with us': 'التداخل معنا',
  Unsettled: 'غير مستقر',
  '— absent': '— غائب',
  '{level} severity': 'خطورة {level}',
  '+ {n} more tracked': '+ {n} أخرى متابَعة',
  '31 % share': 'حصة 31%',
  '18 % share': 'حصة 18%',
  '11 % share': 'حصة 11%',
  '7 % share': 'حصة 7%',
  '{pct}% share': 'حصة {pct}%',
  Growing: 'في نمو',
  Steady: 'ثابتة',
  Declining: 'في تراجع',
  Contested: 'متنازع عليها',
  Neutral: 'محايدة',
  Favourable: 'مؤاتية',
  Adverse: 'معاكسة',
  'Favourable · emerging': 'مؤاتية · ناشئة',
  'Favourable · steady': 'مؤاتية · ثابتة',
  'Adverse · emerging': 'معاكسة · ناشئة',
  'Adverse · growing': 'معاكسة · في نمو',
  'Adverse · steady': 'معاكسة · ثابتة',
  'Adverse · declining': 'معاكسة · في تراجع',
  'Neutral · steady': 'محايدة · ثابتة',

  /* --- Competitor narratives ------------------------------------------------------- */
  'The story each competitor is telling': 'القصة التي يرويها كل منافس',
  'Every position has a weakness built into it. A narrative strong enough to dominate is usually narrow enough to outflank.':
    'كل موقع يحمل في داخله نقطة ضعف. فالسردية القوية بما يكفي للهيمنة تكون عادةً ضيّقة بما يكفي للالتفاف عليها.',
  'The safe national choice with published comparisons.':
    'الخيار الوطني الآمن مع مقارنات منشورة.',
  'The technical authority on specification.': 'المرجع التقني في المواصفات.',
  'The educator that reaches buyers first.': 'المثقِّف الذي يصل إلى المشترين أولاً.',
  'The procurement-checklist incumbent.': 'المتمكّن في قوائم تدقيق المشتريات.',
  'Owns the evaluation criteria itself. Engines cite its comparison library when explaining how to choose a supplier at all.':
    'يمتلك معايير التقييم نفسها. فالمحركات تستشهد بمكتبة مقارناته عند شرح كيفية اختيار مورّد من الأساس.',
  'Its case rests on breadth and fill rate. It has no response prepared on response time or regional service depth.':
    'حجّته قائمة على الاتساع ومعدل تلبية الطلبات. ولا يملك ردًا جاهزًا بشأن زمن الاستجابة أو عمق الخدمة الإقليمية.',
  'Competes directly on supplier-evaluation questions, where it is named first in four of seven.':
    'ينافس مباشرةً في أسئلة تقييم المورّدين، حيث يُذكر أولاً في أربعة من سبعة.',
  'Its vocabulary can be adopted and extended rather than fought. Speaking its language while adding availability outflanks it.':
    'يمكن تبنّي مفرداته وتوسيعها بدلاً من مقارعتها. فالتحدث بلغته مع إضافة التوافر يلتفّ عليه.',
  'Specification depth does not answer availability. It is largely absent from questions about delivery and continuity.':
    'عمق المواصفات لا يجيب عن التوافر. وهو غائب إلى حد كبير عن الأسئلة المتعلقة بالتسليم والاستمرارية.',
  'Owns solution-evaluation questions upstream of where this business competes.':
    'يمتلك أسئلة تقييم الحلول في مرحلة تسبق المكان الذي ينافس فيه هذا النشاط التجاري.',
  'Its own framing concedes that speed is a separate axis. A published response-time standard splits the criterion it defined.':
    'إطاره الخاص يقرّ بأن السرعة محور منفصل. ومعيار زمن استجابة منشور يشقّ المعيار الذي وضعه هو.',
  'Enters the decision at research, before evaluation criteria exist, and shapes them by arriving early.':
    'يدخل القرار في مرحلة البحث، قبل وجود معايير التقييم، ويصوغها بحكم وصوله المبكر.',
  'Almost no presence earlier in the journey. Its position is administrative rather than argued.':
    'حضوره شبه معدوم في المراحل الأبكر من الرحلة. وموقعه إداري أكثر منه مُحاجَجًا عنه.',
  'Owns early-stage questions this business is also absent from, but does not convert them.':
    'يمتلك أسئلة المرحلة المبكرة التي يغيب عنها هذا النشاط التجاري أيضًا، لكنه لا يحوّلها.',
  'Thin at the point of purchase. Rarely named when a buyer asks whom to actually choose.':
    'ضعيف عند نقطة الشراء. ونادرًا ما يُذكر حين يسأل المشتري عمّن يختار فعليًا.',
  'Research-stage presence is uncontested at the point where education becomes a shortlist.':
    'حضوره في مرحلة البحث بلا منازع عند النقطة التي يتحوّل فيها التثقيف إلى قائمة مختصرة.',
  'Named on procurement documentation that engines cite at the moment of purchase.':
    'مذكور في وثائق المشتريات التي تستشهد بها المحركات لحظة الشراء.',
  'Competes only at purchase decision, where this business also has no coverage.':
    'ينافس فقط عند قرار الشراء، حيث لا تغطية لهذا النشاط التجاري أيضًا.',
  'A checklist position is winnable through documentation rather than through reputation.':
    'موقع قائمة التدقيق يمكن كسبه بالتوثيق لا بالسمعة.',

  /* --- Media narratives ------------------------------------------------------------ */
  'What publications are actually writing about': 'عمّا تكتب المنشورات فعليًا',
  'The business appears in none of four active category stories. Two of them — provenance and tariff continuity — have no supplier voice at all.':
    'لا يظهر النشاط التجاري في أي من قصص الفئة النشطة الأربع. واثنتان منها — المصدر والاستمرارية في ظل الرسوم — بلا صوت مورّد على الإطلاق.',
  'The business appears in none of the four active category stories. Media narrative is currently being written entirely by others.':
    'لا يظهر النشاط التجاري في أي من قصص الفئة النشطة الأربع. والسردية الإعلامية يكتبها الآخرون بالكامل حاليًا.',
  'MRO supplier consolidation across Midwest manufacturing':
    'دمج مورّدي MRO في تصنيع وسط الغرب الأمريكي',
  'Counterfeit fasteners in industrial supply chains':
    'المثبّتات المقلّدة في سلاسل التوريد الصناعية',
  'Verification and provenance in fastener sourcing':
    'التحقق وإثبات المصدر في توريد المثبّتات',
  'Fastener supply continuity after tariff changes':
    'استمرارية توريد المثبّتات بعد تغيّر الرسوم الجمركية',
  'Supply continuity under tariff volatility':
    'استمرارية التوريد في ظل تقلّب الرسوم الجمركية',
  'Vendor-managed inventory adoption in mid-market plants':
    'اعتماد المخزون المُدار من المورّد في مصانع السوق المتوسطة',
  'Vendor-managed inventory for mid-market plants':
    'المخزون المُدار من المورّد لمصانع السوق المتوسطة',
  /* Mastheads. Invented trade publications, and proper nouns like the
     competitor names — they stay Latin in every locale. Listed so the
     decision is recorded rather than looking like an omission. */
  'Industrial Distribution · Modern Supply Chain':
    'Industrial Distribution · Modern Supply Chain',
  'Fastener Technology · Industrial Distribution':
    'Fastener Technology · Industrial Distribution',
  'Fastener Technology · Plant Engineering':
    'Fastener Technology · Plant Engineering',
  'Modern Supply Chain · Plant Engineering': 'Modern Supply Chain · Plant Engineering',
  'The most active category story. This business is not quoted in any of the eleven pieces published this quarter.':
    'أنشط قصة في الفئة. ولم يُقتبس عن هذا النشاط التجاري في أي من المواد الإحدى عشرة المنشورة هذا الربع.',
  'A category-level trust story. Suppliers who comment become the trusted ones; those who stay silent are grouped with the problem.':
    'قصة ثقة على مستوى الفئة. فالمورّدون الذين يعلّقون يصبحون الموثوقين؛ ومن يصمت يُصنَّف مع المشكلة.',
  'An emerging story where regional inventory depth is the natural expert angle, and no regional distributor has been quoted yet.':
    'قصة ناشئة يمثّل فيها عمق المخزون الإقليمي زاوية الخبرة الطبيعية، ولم يُقتبس عن أي موزّع إقليمي بعد.',
  'A service already operated but never publicly associated with the business. One competitor is quoted in three of four pieces on it.':
    'خدمة تُشغَّل بالفعل لكنها لم تُربط علنًا بالنشاط التجاري قط. ويُقتبس عن منافس واحد في ثلاث من أربع مواد عنها.',
  'A competitor is quoted in three of four pieces. The topic maps directly onto a service this business already operates.':
    'يُقتبس عن منافس في ثلاث من أربع مواد. والموضوع ينطبق مباشرةً على خدمة يشغّلها هذا النشاط التجاري بالفعل.',
  'Regional inventory depth is the natural expert position on a story publications are actively looking for sources on.':
    'عمق المخزون الإقليمي هو موقع الخبرة الطبيعي في قصة تبحث المنشورات بنشاط عن مصادر لها.',
  'An active media story with no supplier voice attached. Commenting converts a category-level trust concern into a reason to choose a specific supplier.':
    'قصة إعلامية نشطة بلا صوت مورّد مرتبط بها. والتعليق يحوّل قلق ثقة على مستوى الفئة إلى سبب لاختيار مورّد بعينه.',
  'No quote, contribution or citation in the four topics publications are currently covering.':
    'لا اقتباس ولا مساهمة ولا استشهاد في المواضيع الأربعة التي تغطيها المنشورات حاليًا.',
  'Silence is read as absence of expertise. The category continues to be explained by the suppliers willing to explain it.':
    'يُقرأ الصمت على أنه غياب للخبرة. وتظل الفئة يشرحها المورّدون المستعدون لشرحها.',

  /* --- Question landscape ---------------------------------------------------------- */
  'What the market actually wants to know': 'ما يريد السوق معرفته فعلاً',
  'The real question corpus, partitioned by what a buyer is trying to decide when they ask it.':
    'مجموعة الأسئلة الحقيقية، مقسّمة بحسب ما يحاول المشتري أن يقرّره حين يطرحها.',
  'Most common questions': 'الأسئلة الأكثر شيوعًا',
  'Public questions': 'الأسئلة العامة',
  'AI buying questions': 'أسئلة الشراء عبر الذكاء الاصطناعي',
  'Recommendation questions': 'أسئلة التوصية',
  'Comparison questions': 'أسئلة المقارنة',
  'Purchase questions': 'أسئلة الشراء',
  'Concerns and objections': 'المخاوف والاعتراضات',
  'A buyer asking directly whom to choose. The highest-value question class in the category, and the one that assigns the order.':
    'مشترٍ يسأل مباشرةً عمّن يختار. أعلى فئات الأسئلة قيمةً في هذه الفئة، وهي التي تُسنِد الطلب.',
  'A buyer weighing approaches rather than vendors. Whoever frames the comparison sets the criteria the vendor choice will use.':
    'مشترٍ يوازن بين المقاربات لا بين المورّدين. ومن يصوغ المقارنة يحدّد المعايير التي سيُبنى عليها اختيار المورّد.',
  'What buyers ask before they have a supplier in mind. Presence here shapes the criteria everything later is judged against.':
    'ما يسأله المشترون قبل أن يكون لديهم مورّد في الذهن. والحضور هنا يصوغ المعايير التي يُحكَم بها على كل ما يليه.',
  'A buyer who has already chosen. Presence here converts; it does not win anything that was not already won upstream.':
    'مشترٍ حسم اختياره بالفعل. والحضور هنا يحوّل؛ لكنه لا يكسب شيئًا لم يُكسَب سلفًا في مرحلة أسبق.',
  'The risks buyers raise before committing. Answering these publicly is how a supplier becomes the safe choice rather than the cheap one.':
    'المخاطر التي يثيرها المشترون قبل الالتزام. والإجابة عنها علنًا هي ما يجعل المورّد الخيار الآمن لا الخيار الرخيص.',

  /* --- Opportunities and risks ----------------------------------------------------- */
  'Stories nobody owns': 'قصص لا يملكها أحد',
  'Ranked by influence against competition. The best of these are high influence and uncontested, which is the rarest combination in any category.':
    'مرتّبة بالتأثير مقابل المنافسة. وأفضلها ما كان عالي التأثير وبلا منازع، وهو أندر تركيبة في أي فئة.',
  'The single narrative that most favours this business, and nobody owns it. Same-day regional delivery is a genuine capability that no public source currently attaches to this name.':
    'السردية الأكثر مؤاتاةً لهذا النشاط التجاري، ولا يملكها أحد. فالتسليم الإقليمي في اليوم نفسه قدرة حقيقية لا يربطها أي مصدر عام بهذا الاسم حاليًا.',
  'No competitor has claimed it, engines have no vocabulary for it, and it is the capability this business actually leads on. The single highest-return narrative available.':
    'لم يطالب بها أي منافس، ولا تملك المحركات مفردات لها، وهي القدرة التي يتصدّر بها هذا النشاط التجاري فعلاً. أعلى السرديات المتاحة عائدًا.',
  'Directly counters the consolidation narrative that currently favours national distributors, and reframes regional scale as risk management rather than as a limitation.':
    'تردّ مباشرةً على سردية الدمج التي تصبّ حاليًا في صالح الموزّعين الوطنيين، وتعيد صياغة النطاق الإقليمي كإدارة مخاطر لا كقيد.',
  'Directly contradicts the consolidation narrative and favours a strong secondary supplier. Neither this business nor any competitor has claimed it.':
    'تناقض سردية الدمج مباشرةً وتصبّ في صالح مورّد ثانوي قوي. ولم يطالب بها هذا النشاط التجاري ولا أي منافس.',
  'Consolidation reaches 14% of conversation and favours national distributors. The counter-narrative reaches 11% and is owned by nobody.':
    'الدمج يبلغ 14% من النقاش ويصبّ في صالح الموزّعين الوطنيين. والسردية المضادة تبلغ 11% ولا يملكها أحد.',
  'Threats before they become the default': 'التهديدات قبل أن تصبح هي الافتراض',
  'An emerging narrative is contestable. A settled one has to be displaced. The difference in cost between the two is the reason this section exists.':
    'السردية الناشئة قابلة للمنازعة. أما المستقرة فيجب إزاحتها. والفارق في التكلفة بين الحالتين هو سبب وجود هذا القسم.',
  '3 risks are rated high severity, of which the entity conflation and the emerging regional-limitation narrative are both still cheap to correct.':
    '3 مخاطر مصنّفة عالية الخطورة، منها الخلط بين الكيانات وسردية القيد الإقليمي الناشئة، وكلتاهما ما زال تصحيحها رخيصًا.',
  'The most dangerous emerging narrative on this list. It is not yet dominant and it is factually contestable, which means it is still cheap to answer.':
    'أخطر سردية ناشئة في هذه القائمة. فهي لم تهيمن بعد وقابلة للدحض وقائعيًا، ما يعني أن الرد عليها ما زال رخيصًا.',
  'Becomes the default objection to a regional supplier. Contestable now with published evidence; expensive to reverse once engines treat it as settled.':
    'تصبح الاعتراض الافتراضي على أي مورّد إقليمي. ويمكن دحضها الآن بأدلة منشورة؛ ويكلّف عكسها كثيرًا متى عاملتها المحركات كأمر مستقر.',
  'A factual error, carried by one engine, that removes the business from every supplier-evaluation answer it appears in. Declining, but not yet corrected.':
    'خطأ وقائعي يحمله محرك واحد، ويُخرج النشاط التجاري من كل إجابة تقييم مورّدين يظهر فيها. في تراجع، لكنه لم يُصحَّح بعد.',
  'A single wrong category record continues to exclude the business from the question class that assigns orders.':
    'سجل فئة خاطئ واحد ما زال يستبعد النشاط التجاري من فئة الأسئلة التي تُسنِد الطلبات.',
  'Every future comparison is scored on axes chosen to favour a competitor, whatever the campaign says.':
    'كل مقارنة مستقبلية تُقيَّم على محاور اختيرت لصالح منافس، مهما قالت الحملة.',
  'Every impression delivered to a Gemini user reinforces an incorrect record. Campaign spend actively strengthens the wrong association.':
    'كل ظهور يصل إلى مستخدم Gemini يعزّز سجلاً خاطئًا. وإنفاق الحملة يقوّي الارتباط الخاطئ فعليًا.',
  'Emerging in two engines and sourced from a competitor comparison page. Still contestable; not yet treated as settled.':
    'ناشئة في محركين ومصدرها صفحة مقارنة لمنافس. وما زالت قابلة للمنازعة؛ ولم تُعامَل كأمر مستقر بعد.',
  'Appearing in Gemini and Copilot answers on multi-site sourcing questions, sourced from a competitor comparison page.':
    'تظهر في إجابات Gemini وCopilot على أسئلة التوريد متعدد المواقع، ومصدرها صفحة مقارنة لمنافس.',
  'ChatGPT categorises the business as retail rather than MRO distribution, removing it from supplier-evaluation answers.':
    'يصنّف ChatGPT النشاط التجاري كتجزئة لا كتوزيع MRO، فيُخرجه من إجابات تقييم المورّدين.',
  'Fill rate and catalogue breadth are cited first by three of six engines when explaining how to choose a distributor.':
    'معدل تلبية الطلبات واتساع الكتالوج يُذكران أولاً لدى ثلاثة من ستة محركات عند شرح كيفية اختيار موزّع.',
  'Favours whichever supplier is already largest. A regional specialist is read as the thing being consolidated away rather than the one consolidating.':
    'تصبّ في صالح المورّد الأكبر أصلاً. فالمتخصص الإقليمي يُقرأ بوصفه ما يجري دمجه وإزالته لا الجهة التي تدمج.',
  'Its specification guidance became the category’s default vocabulary because it published first, not because it is more correct.':
    'أصبح دليله للمواصفات المفردات الافتراضية للفئة لأنه نشر أولاً، لا لأنه أصحّ.',
  'Published first by a competitor, so it became the vocabulary engines learned. It positions this business as a reseller by omission rather than by argument.':
    'نشره منافس أولاً، فصار المفردات التي تعلّمتها المحركات. وهو يضع هذا النشاط التجاري في موضع إعادة البيع بالإغفال لا بالحجة.',
  'Neutral on its face, but it removes price as a differentiator and pushes the decision onto evidence — which is the axis this business currently loses on.':
    'محايدة في ظاهرها، لكنها تُلغي السعر كعامل تمييز وتدفع القرار نحو الدليل — وهو المحور الذي يخسر عليه هذا النشاط التجاري حاليًا.',
  'Contain an emerging high-severity adverse narrative':
    'احتواء سردية سلبية ناشئة عالية الخطورة',
  'Respond Immediately': 'الرد فورًا',

  /* --- Misconceptions and engine reads --------------------------------------------- */
  'What each engine currently says this business is':
    'ما يقوله كل محرك حاليًا عن ماهية هذا النشاط التجاري',
  'Claims machines currently repeat that are wrong. Each one removes the business from answers it should appear in.':
    'ادّعاءات تكررها الآلات حاليًا وهي خاطئة. وكل واحدة منها تُخرج النشاط التجاري من إجابات كان ينبغي أن يظهر فيها.',
  'Misconceptions repeated as fact': 'مفاهيم خاطئة تُكرَّر كحقائق',
  'Gemini resolves a same-named logistics firm; ChatGPT categorises the business as retail. Both remove it from supplier-evaluation answers entirely.':
    'يحيل Gemini الاسم إلى شركة لوجستيات تحمل الاسم نفسه؛ ويصنّف ChatGPT النشاط التجاري كتجزئة. وكلاهما يُخرجه كليًا من إجابات تقييم المورّدين.',
  'Gemini resolves the wrong entity on category questions and recognises the business at 24 of 100.':
    'يحيل Gemini إلى الكيان الخاطئ في أسئلة الفئة ويتعرّف على النشاط التجاري بدرجة 24 من 100.',
  'Accurate. No divergence from the intended account.':
    'دقيق. لا انحراف عن الرواية المقصودة.',
  '4 of 6 diverge': '4 من 6 تنحرف',
  'Machines are repeating 1 factual error about this business that removes it from supplier answers entirely. Argument about positioning is wasted while the underlying record is wrong. Once corrected, 20% of category conversation is unclaimed and the strongest of it favours this business.':
    'تكرّر الآلات خطأً وقائعيًا واحدًا عن هذا النشاط التجاري يُخرجه كليًا من إجابات المورّدين. والجدال حول التموضع مهدور ما دام السجل الأساسي خاطئًا. وبمجرد تصحيحه، يبقى 20% من نقاش الفئة غير مُطالَب به وأقواه يصبّ في صالح هذا النشاط التجاري.',
  ', and every point of it is the hardware-retailer error rather than anything it chose to say. Ownership counts the stories attached to a name; it does not ask whether they help.':
    '، وكل نقطة منها هي خطأ تصنيفه كمتجر أدوات لا شيئًا اختار قوله. فالملكية تعدّ القصص المرتبطة بالاسم؛ ولا تسأل ما إذا كانت تساعد.',
  'Fill rate and catalogue breadth are how you choose a distributor.':
    'معدل تلبية الطلبات واتساع الكتالوج هما الطريقة التي تختار بها موزّعًا.',
  'Consolidating MRO suppliers reduces cost and administrative load.':
    'دمج مورّدي MRO يقلّل التكلفة والعبء الإداري.',
  'Midwest fastener pricing is broadly comparable across suppliers.':
    'أسعار المثبّتات في وسط الغرب متقاربة إلى حد بعيد بين المورّدين.',
  'Specification depth separates serious suppliers from resellers.':
    'عمق المواصفات يفصل المورّدين الجادّين عن مُعيدي البيع.',
  'Evaluation criteria are increasingly stated in a competitor’s terms.':
    'معايير التقييم تُصاغ بصورة متزايدة بمصطلحات منافس.',
  'The business is conflated with a same-named logistics firm.':
    'يُخلَط بين النشاط التجاري وشركة لوجستيات تحمل الاسم نفسه.',
  'Single-source supplier dependency is an operational risk.':
    'الاعتماد على مورّد وحيد خطر تشغيلي.',
  'Regional suppliers cannot support multi-plant operations.':
    'المورّدون الإقليميون لا يستطيعون دعم عمليات متعددة المصانع.',
  'Regional distributors deliver faster than national ones.':
    'الموزّعون الإقليميون يسلّمون أسرع من الوطنيين.',
  'The business is absent from every active category story.':
    'النشاط التجاري غائب عن كل قصة نشطة في الفئة.',
  'The business is described as a hardware retailer.':
    'يُوصف النشاط التجاري بأنه متجر أدوات بالتجزئة.',
  'Northwind Supply is a hardware retailer.': 'Northwind Supply متجر أدوات بالتجزئة.',
  'Observed in {sources}.': 'رُصد في {sources}.',
  'How much of the conversation works for us': 'كم من النقاش يعمل لصالحنا',
  'Quoted in 3 pieces across 2 publications engines cite':
    'مُقتبَس في 3 مواد عبر منشورَين تستشهد بهما المحركات',
  'Multi-site capability referenced in 2 of 6 engines on multi-plant sourcing questions':
    'قدرة تعدد المواقع مذكورة في 2 من 6 محركات في أسئلة التوريد متعدد المصانع',
  'Response time cited among the first three selection criteria by 3 of 6 engines':
    'زمن الاستجابة مذكور ضمن أول ثلاثة معايير اختيار لدى 3 من 6 محركات',
  'Secondary-supplier framing cited by 2 of 6 engines on consolidation questions':
    'إطار المورّد الثانوي مذكور لدى 2 من 6 محركات في أسئلة الدمج',
  'The dominant evaluation framing, and it is a competitor’s. Buyers arrive already scoring suppliers on the two criteria where a national distributor wins by default.':
    'إطار التقييم المهيمن، وهو إطار منافس. فالمشترون يصلون وهم يقيّمون المورّدين أصلاً على المعيارين اللذين يفوز فيهما الموزّع الوطني تلقائيًا.',

  /* Double-quoted because the source contains an apostrophe. Escaping it into
     a single-quoted key would work, but every tool that reads this file by
     line would then have to unescape — and one of them silently did not. */
  "4 of 6 engines carry a materially different account of this business. A buyer's understanding depends on which assistant they happen to open.":
    '4 من 6 محركات تحمل رواية مختلفة جوهريًا عن هذا النشاط التجاري. وفهم المشتري يتوقف على المساعد الذي يصادف أن يفتحه.',

  /* --- Source names. Capitalised to match the seed exactly. ------------------------- */
  'Trade forums': 'منتديات القطاع',
  'Buyer discussion': 'نقاشات المشترين',
  'Procurement publications': 'منشورات المشتريات',
  'Specification guides': 'أدلة المواصفات',
  'Risk guidance': 'إرشادات المخاطر',
  'Aggregator pages': 'صفحات التجميع',
  'Trade publications': 'منشورات القطاع',

  /* --- Narrative action plan ------------------------------------------------------- */
  'Narrative action plan': 'خطة عمل السردية',
  'Open narrative action plan': 'افتحوا خطة عمل السردية',
  'Monitor narrative changes': 'راقب تغيّرات السردية',
  'Check readiness before campaigning': 'تحقّق من الجاهزية قبل إطلاق الحملة',
  'Each carries its objective, the evidence behind it, the movement expected, a confidence, an owner, a deadline, an effort estimate and how success is verified.':
    'كل إجراء يحمل هدفه، والدليل وراءه، والحركة المتوقعة، ومستوى ثقة، ومالكًا، وموعدًا نهائيًا، وتقدير جهد، وطريقة التحقق من نجاحه.',
  'Correct the record first, then claim the narrative nobody owns.':
    'صحّح السجل أولاً، ثم طالب بالسردية التي لا يملكها أحد.',
  'Correct the entity conflation and the hardware-retailer categorisation.':
    'تصحيح الخلط بين الكيانات وتصنيف متجر الأدوات بالتجزئة.',
  'Claim response time as a published supplier selection criterion.':
    'المطالبة بزمن الاستجابة كمعيار منشور لاختيار المورّدين.',
  'Answer the regional-limitation narrative with published multi-site evidence.':
    'الرد على سردية القيد الإقليمي بأدلة منشورة عن تعدد المواقع.',
  'Claim the secondary-supplier argument against the consolidation narrative.':
    'المطالبة بحجة المورّد الثانوي في مواجهة سردية الدمج.',
  'Enter the two active media stories with a named expert voice.':
    'الدخول إلى القصتين الإعلاميتين النشطتين بصوت خبير مُسمّى.',
  'Reframe regional scale from limitation to risk management':
    'إعادة تأطير النطاق الإقليمي من قيد إلى إدارة مخاطر',
  'The narrative is unowned, high influence and uncontested. Same-day regional delivery is a real capability that appears in no category description.':
    'السردية بلا مالك وعالية التأثير وبلا منازع. فالتسليم الإقليمي في اليوم نفسه قدرة حقيقية لا تظهر في أي وصف للفئة.',
  'Response time as a supplier selection criterion':
    'زمن الاستجابة كمعيار لاختيار المورّدين',
  'The strategic case for a strong secondary supplier':
    'الحجة الاستراتيجية لوجود مورّد ثانوي قوي',
  'Independent authority sources 3 → 8': 'مصادر مرجعية مستقلة 3 ← 8',
  'Average recognition 38 → 55 of 100': 'متوسط التعرّف 38 ← 55 من 100',

  /* ==========================================================================
     CAMPAIGN READINESS INTELLIGENCE
     ====================================================================== */
  'Campaign readiness intelligence': 'ذكاء جاهزية الحملة',
  'Campaign Readiness Intelligence | GeoRepute': 'ذكاء جاهزية الحملة | GeoRepute',
  'Campaign Readiness Intelligence': 'ذكاء جاهزية الحملة',
  'Should we launch this campaign today?': 'هل نطلق هذه الحملة اليوم؟',
  'This assessment evaluates the business, not the campaign. Creative, targeting and budget can all be correct while the business remains structurally unable to convert the attention they buy.':
    'هذا التقييم يقيّم النشاط التجاري لا الحملة. فقد يكون التصميم والاستهداف والميزانية كلها صحيحة بينما يظل النشاط التجاري عاجزًا بنيويًا عن تحويل الانتباه الذي تشتريه.',
  Campaign: 'الحملة',
  'Q4 Midwest demand generation': 'توليد الطلب في وسط الغرب — الربع الرابع',
  'Intended launch': 'الإطلاق المزمع',
  Duration: 'المدة',
  '6 months': '6 أشهر',
  '7 months': '7 أشهر',
  '{n} months': '{n} أشهر',
  Channels: 'القنوات',
  'Paid search · Paid social · Trade media · Content syndication':
    'البحث المدفوع · التواصل الاجتماعي المدفوع · إعلام القطاع · توزيع المحتوى',
  'Paid search': 'البحث المدفوع',
  'Paid social': 'التواصل الاجتماعي المدفوع',
  'Trade media': 'إعلام القطاع',
  'Content syndication': 'توزيع المحتوى',
  'Estimated budget at risk': 'الميزانية المقدَّرة المعرَّضة للخطر',
  'Executive decision': 'قرار تنفيذي',
  'Executive recommendation': 'التوصية التنفيذية',
  'Delay Campaign': 'تأجيل الحملة',
  'Delay the campaign. Fix authority first.': 'أجّل الحملة. عالِج المرجعية أولاً.',
  'Delay Campaign — readiness reads 32 of 100, held there by authority readiness at 11, which carries 20% of the index.':
    'تأجيل الحملة — الجاهزية تقرأ 32 من 100، ويثبّتها عندها مستوى جاهزية المرجعية البالغ 11، وهو يحمل 20% من المؤشر.',
  'Campaign readiness score': 'درجة جاهزية الحملة',
  'Primary constraint': 'القيد الأساسي',
  'Authority readiness is the binding constraint at 11 of 100 and carries 20% of the index.':
    'جاهزية المرجعية هي القيد الحاكم عند 11 من 100 وتحمل 20% من المؤشر.',
  'Strategic window': 'النافذة الاستراتيجية',
  'Advantage holds until {date}.': 'تصمد الأفضلية حتى {date}.',
  'Decision journey gaps': 'فجوات رحلة القرار',
  'Presence at every stage.': 'حضور في كل مرحلة.',
  '2 stages uncovered': 'مرحلتان بلا تغطية',
  'Assessment confidence': 'الثقة في التقييم',
  'Six of seven dimensions rest on directly observed data.':
    'ستة من سبعة أبعاد تستند إلى بيانات مرصودة مباشرةً.',
  Assessment: 'التقييم',
  'Seven readiness dimensions, weighted into one index':
    'سبعة أبعاد للجاهزية، مرجّحة في مؤشر واحد',
  'Every score is computed from observed data rather than assigned. The weights are published and sum to one.':
    'كل درجة محسوبة من بيانات مرصودة لا مُسنَدة اعتباطًا. والأوزان منشورة ومجموعها واحد.',
  'Ready at 70 and above. At risk from 45 . Blocking below 45 .':
    'جاهز عند 70 فأعلى. في خطر ابتداءً من 45. ومُعطِّل دون 45.',
  'Ready at {ready} and above. At risk from {risk}. Blocking below {risk}.':
    'جاهز عند {ready} فأعلى. في خطر ابتداءً من {risk}. ومُعطِّل دون {risk}.',
  Ready: 'جاهز',
  'At risk': 'في خطر',
  Blocking: 'مُعطِّل',
  '{score} of 100 — {status}. Ready at {gate}.': '{score} من 100 — {status}. جاهز عند {gate}.',
  '{n}% of the readiness index': '{n}% من مؤشر الجاهزية',
  '{score} of 100 · {weight}% of the index': '{score} من 100 · {weight}% من المؤشر',
  or: 'أو',
  None: 'لا شيء',
  '2 of 5': '2 من 5',
  '2 of 6': '2 من 6',
  'Launching remains available and is sometimes correct — a product deadline or a competitive move can outweigh a readiness score. This assessment states the cost of that choice so it is made deliberately rather than by default.':
    'يظل الإطلاق متاحًا وهو أحيانًا القرار الصحيح — فموعد إطلاق منتج أو تحرّك تنافسي قد يرجح على درجة الجاهزية. وهذا التقييم يوضّح كلفة ذلك الخيار كي يُتخذ عن قصد لا بحكم التقصير.',
  'Each carries a priority, an owner, a deadline, an effort estimate, its dependencies, the movement it should produce and how confident the model is in that.':
    'كل إجراء يحمل أولوية ومالكًا وموعدًا نهائيًا وتقدير جهد وتبعياته والحركة التي ينبغي أن يُحدثها ومستوى ثقة النموذج بذلك.',
  '{n} tracked questions': '{n} سؤالاً متابَعًا',

  /* --- The seven readiness dimensions ---------------------------------------------- */
  'AI readiness': 'جاهزية الذكاء الاصطناعي',
  'Do AI engines understand and recommend this business?':
    'هل تفهم محركات الذكاء الاصطناعي هذا النشاط التجاري وتوصي به؟',
  'Across six engines, the business is understood at 38 of 100. Advertising cannot correct a record it does not touch.':
    'عبر ستة محركات، يُفهم النشاط التجاري بدرجة 38 من 100. والإعلان لا يصحّح سجلاً لا يمسّه.',
  'Authority readiness': 'جاهزية المرجعية',
  'Is there enough evidence for AI to recommend this business?':
    'هل توجد أدلة كافية ليوصي الذكاء الاصطناعي بهذا النشاط التجاري؟',
  '3 independent sources can verify this business. The category median is 14.':
    '3 مصادر مستقلة يمكنها التحقق من هذا النشاط التجاري. ووسيط الفئة هو 14.',
  'Google readiness': 'الجاهزية على Google',
  'Can buyers find this business through traditional search?':
    'هل يستطيع المشترون العثور على هذا النشاط التجاري عبر البحث التقليدي؟',
  '9 of 20 commercial questions place in the top ten. The rest are reachable only by paying for the click.':
    '9 من 20 سؤالاً تجاريًا تحلّ ضمن العشرة الأوائل. أما البقية فلا تُبلَغ إلا بدفع ثمن النقرة.',
  'Narrative readiness': 'جاهزية السردية',
  'Does the market understand what this business stands for?':
    'هل يفهم السوق ما يمثّله هذا النشاط التجاري؟',
  'The business owns 12% of the language engines use to define this category. The campaign would be fought on terms a competitor wrote.':
    'يمتلك النشاط التجاري 12% من اللغة التي تستخدمها المحركات لتعريف هذه الفئة. وستُخاض الحملة بشروط كتبها منافس.',
  Reputation: 'السمعة',
  'Is this business safe to recommend to a buyer?':
    'هل من الآمن التوصية بهذا النشاط التجاري لمشترٍ؟',
  'Reputation reads 44 of 100 while market fit reads 72. The offer is right; the proof around it is not.':
    'تقرأ السمعة 44 من 100 بينما تقرأ الملاءمة السوقية 72. فالعرض صحيح؛ لكن الدليل المحيط به ليس كذلك.',
  'Conversion readiness': 'جاهزية التحويل',
  'Can the destination convert the intent this campaign buys?':
    'هل تستطيع الوجهة تحويل النية التي تشتريها هذه الحملة؟',
  'A single quote form serves every stage. There is no path for a buyer who is still comparing suppliers and not yet requesting a price.':
    'نموذج تسعير واحد يخدم كل المراحل. ولا يوجد مسار لمشترٍ ما زال يقارن بين المورّدين ولم يطلب سعرًا بعد.',
  'Competitor readiness': 'جاهزية المنافسين',
  'Kestrel Industrial holds top-three organic positions and AI presence on the four highest-volume commercial questions simultaneously.':
    'يحتفظ Kestrel Industrial بمراكز عضوية ضمن الثلاثة الأوائل وبحضور في الذكاء الاصطناعي على أعلى أربعة أسئلة تجارية حجمًا في آنٍ واحد.',

  /* --- Dimension detail signals ---------------------------------------------------- */
  'Category understanding': 'فهم الفئة',
  '2 of 6 correct': '2 من 6 صحيحة',
  'An engine that files the business in the wrong category cannot surface it when a buyer describes this need, regardless of spend.':
    'المحرك الذي يصنّف النشاط التجاري في الفئة الخاطئة لا يستطيع إظهاره حين يصف المشتري هذه الحاجة، مهما بلغ الإنفاق.',
  'AI recommendation coverage': 'تغطية توصيات الذكاء الاصطناعي',
  '6 recommendation events across 144 answer slots. A buyer who asks an assistant for suppliers almost never hears this name.':
    '6 حالات توصية عبر 144 موضع إجابة. والمشتري الذي يسأل مساعدًا عن مورّدين لا يكاد يسمع هذا الاسم أبدًا.',
  'Engine consistency': 'اتساق المحركات',
  '37-point spread': 'تباين بمقدار 37 نقطة',
  'Recognition ranges from 21 to 58. The campaign would reach buyers whose assistants disagree about what this business is.':
    'يتراوح التعرّف بين 21 و58. وستصل الحملة إلى مشترين تختلف مساعداتهم على ماهية هذا النشاط التجاري.',
  'Silent engines': 'محركات صامتة',
  '2 engines recommend the business in none of the tracked decisions. Spend that drives buyers toward those engines returns nothing.':
    'محركان لا يوصيان بالنشاط التجاري في أي من القرارات المتابَعة. والإنفاق الذي يدفع المشترين نحوهما لا يعيد شيئًا.',
  'Independent authority sources': 'مصادر مرجعية مستقلة',
  '3 sources': '3 مصادر',
  'Independent corroboration is what lets a system name a supplier first rather than hedge across several.':
    'التأييد المستقل هو ما يتيح للنظام أن يذكر مورّدًا بعينه أولاً بدل التحوّط بين عدة مورّدين.',
  'Third-party validation': 'تحقّق من طرف ثالث',
  '1 of 5 present': '1 من 5 متوفر',
  'Certifications, named customers, verified outcomes and specification references are absent from the public record.':
    'الشهادات والعملاء المُسمَّون والنتائج المتحقَّق منها والمراجع الفنية غائبة عن السجل العام.',
  'Industry references': 'مراجع القطاع',
  '0 of 3 publications': '0 من 3 منشورات',
  'The three trade publications engines cite most for this category carry no coverage of the business at all.':
    'منشورات القطاع الثلاثة الأكثر استشهادًا بها من المحركات في هذه الفئة لا تحمل أي تغطية للنشاط التجاري إطلاقًا.',
  'Competitor authority': 'مرجعية المنافس',
  '7× behind': 'متأخر بـ7 أضعاف',
  'Kestrel Industrial can be corroborated 7× more readily. That advantage compounds while no counter-programme runs.':
    'يمكن تأييد Kestrel Industrial بسهولة تفوق ذلك بسبعة أضعاف. وتتراكم هذه الأفضلية ما دام لا يوجد برنامج مضاد.',
  'Commercial keyword coverage': 'تغطية الكلمات المفتاحية التجارية',
  '9 of 20': '9 من 20',
  'Weighted by search volume rather than by keyword count, so a strong position on a question nobody asks does not flatter the figure.':
    'مرجّحة بحجم البحث لا بعدد الكلمات المفتاحية، فلا يجمّل الرقمَ موقعٌ قوي على سؤال لا يطرحه أحد.',
  'Technical SEO status': 'حالة الـSEO التقني',
  'No blocking faults': 'لا عيوب مُعطِّلة',
  'Crawlability, indexation and canonicalisation carry no faults that would prevent a campaign landing page from ranking. This is not the constraint.':
    'قابلية الزحف والفهرسة والتوحيد القياسي للروابط لا تحمل عيوبًا تمنع صفحة هبوط الحملة من التصدّر. وهذا ليس هو القيد.',
  'Organic opportunity': 'فرصة عضوية',
  '6 questions': '6 أسئلة',
  '6 questions already rank but never reach an AI answer. These are the cheapest positions available and need publishing, not budget.':
    '6 أسئلة تتصدّر بالفعل لكنها لا تصل قط إلى إجابة ذكاء اصطناعي. وهذه أرخص المواقع المتاحة، وتحتاج إلى نشر لا إلى ميزانية.',
  'Category clarity': 'وضوح الفئة',
  Fragmented: 'مجزّأ',
  'The same business is described differently across its own site, two directories and six engines. A campaign amplifies whichever version a buyer meets.':
    'يُوصف النشاط التجاري نفسه بصور مختلفة عبر موقعه ودليلَين وستة محركات. والحملة تضخّم أي نسخة يصادفها المشتري.',
  'Public narrative': 'السردية العامة',
  'Machines describe this category using a competitor’s specification framing, so buyers arrive already evaluating against someone else’s criteria.':
    'تصف الآلات هذه الفئة بإطار مواصفات وضعه منافس، فيصل المشترون وهم يقيّمون أصلاً وفق معايير شخص آخر.',
  'Messaging alignment': 'اتساق الرسائل',
  Misaligned: 'غير متسق',
  'The campaign leads with same-day regional delivery. No public source currently associates that capability with this business.':
    'تتصدّر الحملةَ رسالةُ التسليم الإقليمي في اليوم نفسه. ولا يربط أي مصدر عام حاليًا تلك القدرة بهذا النشاط التجاري.',
  'Trust signals': 'إشارات الثقة',
  'Every claim traces back to the company’s own website. Systems treat self-description as a claim rather than as evidence.':
    'كل ادّعاء يعود إلى موقع الشركة نفسه. والأنظمة تعامل الوصف الذاتي كادّعاء لا كدليل.',
  Reviews: 'التقييمات',
  'Adequate volume': 'حجم كافٍ',
  'Review volume is sufficient and sentiment is positive, but sits on platforms engines do not treat as authoritative for this category.':
    'حجم التقييمات كافٍ ومشاعرها إيجابية، لكنها على منصات لا تعاملها المحركات كمرجعية لهذه الفئة.',
  'Brand credibility': 'مصداقية العلامة التجارية',
  'Expert citations': 'استشهادات الخبراء',
  'No named expert, engineer or specifier is publicly associated with the business. Machines have nobody to attribute expertise to.':
    'لا يرتبط أي خبير أو مهندس أو واضع مواصفات مُسمّى بالنشاط التجاري علنًا. ولا تجد الآلات من تنسب إليه الخبرة.',
  'External validation': 'تحقّق خارجي',
  'Customer outcomes, third-party validation, certifications and named references are absent. Only review-platform badges appear.':
    'نتائج العملاء والتحقق من طرف ثالث والشهادات والمراجع المُسمّاة كلها غائبة. ولا تظهر سوى شارات منصات التقييم.',
  'Landing page quality': 'جودة صفحات الهبوط',
  '3 of 7 pages': '3 من 7 صفحات',
  'Three of the seven pages this campaign would drive to state what the business sells above the fold. The rest open with company history.':
    'ثلاث من الصفحات السبع التي ستوجّه إليها هذه الحملة تذكر ما يبيعه النشاط التجاري في الجزء الظاهر أولاً. أما البقية فتفتتح بتاريخ الشركة.',
  'Decision support': 'دعم القرار',
  'No comparison table, specification guidance or selection criteria exists on any destination page. A buyer arriving mid-evaluation has nothing to evaluate with.':
    'لا يوجد جدول مقارنة ولا دليل مواصفات ولا معايير اختيار في أي صفحة وجهة. والمشتري الذي يصل في منتصف التقييم لا يجد ما يقيّم به.',
  'Trust elements': 'عناصر الثقة',
  'Quote form only': 'نموذج تسعير فقط',
  'Commercial messaging': 'الرسائل التجارية',
  'Same-day regional delivery — the strongest differentiator — appears on one page and in no page title.':
    'التسليم الإقليمي في اليوم نفسه — أقوى عامل تمييز — يظهر في صفحة واحدة ولا يظهر في أي عنوان صفحة.',
  'Market leaders': 'قادة السوق',
  '4 ahead': '4 متقدمون',
  '4 of 4 tracked competitors currently receive more recommendations than this business.':
    '4 من 4 منافسين متابَعين يتلقّون حاليًا توصيات أكثر من هذا النشاط التجاري.',
  'Competitor visibility': 'ظهور المنافسين',
  '4 in top three': '4 ضمن الثلاثة الأوائل',
  'Authority gap': 'فجوة المرجعية',
  '21 sources': '21 مصدرًا',
  'Kestrel Industrial holds 21 sources against 3. Advertising does not close an evidence gap; publishing and validation do.':
    'يمتلك Kestrel Industrial 21 مصدرًا مقابل 3. والإعلان لا يسدّ فجوة أدلة؛ بل يسدّها النشر والتحقق.',
  'Competitive gap': 'الفجوة التنافسية',
  '12% owned': '12% مملوكة',
  'Existing search strength': 'قوة البحث القائمة',
  'Existing strength sits on questions asked after a vendor has been chosen, not on the questions that choose one.':
    'القوة القائمة تقع على أسئلة تُطرح بعد اختيار المورّد، لا على الأسئلة التي تختاره.',
  'The leader is strongest at exactly the stage this campaign is intended to influence, which is where displacement is most expensive.':
    'المتصدّر أقوى ما يكون في المرحلة نفسها التي تستهدف هذه الحملة التأثير فيها، وهي المرحلة التي تكون فيها الإزاحة أغلى ما تكون.',
  '4 engines hold a wrong or missing record — one conflates the business with a same-named logistics firm.':
    '4 محركات تحمل سجلاً خاطئًا أو ناقصًا — وأحدها يخلط بين النشاط التجاري وشركة لوجستيات تحمل الاسم نفسه.',
  'The category description differs between the website and two trade directories, which reads to a machine as an unreliable record.':
    'وصف الفئة يختلف بين الموقع ودليلَي قطاع، وهو ما يُقرأ آليًا كسجل غير موثوق.',
  'No single consistent story exists in the public record for a campaign to reinforce, so each impression starts the explanation over.':
    'لا توجد قصة واحدة متسقة في السجل العام كي تعزّزها حملة، فيبدأ كل ظهور الشرح من جديد.',
  'Kestrel Industrial receives 31% of recommendations against 4.2%. Launching now advertises into a decision they control.':
    'يتلقّى Kestrel Industrial 31% من التوصيات مقابل 4.2%. والإطلاق الآن إعلانٌ داخل قرار يسيطر عليه هو.',

  /* --- Journey coverage ------------------------------------------------------------ */
  Coverage: 'التغطية',
  'Where the campaign would reach buyers, and where it would not':
    'أين ستصل الحملة إلى المشترين وأين لن تصل',
  'Stage 1': 'المرحلة 1',
  'Stage 2': 'المرحلة 2',
  'Stage 3': 'المرحلة 3',
  'Stage 4': 'المرحلة 4',
  'Stage 5': 'المرحلة 5',
  'Invisible to every conventional measurement tool.':
    'غير مرئي لأي أداة قياس تقليدية.',
  'Visible to {tools}.': 'مرئي لـ{tools}.',
  'No presence at {stages}.': 'لا حضور في {stages}.',
  'A campaign creates demand across the whole journey. It converts only at the stages where the business is actually present.':
    'الحملة تخلق طلبًا على امتداد الرحلة كلها. لكنها لا تحوّل إلا في المراحل التي يكون فيها النشاط التجاري حاضرًا فعلاً.',

  /* --- Commercial risk ------------------------------------------------------------- */
  'Commercial risk': 'المخاطر التجارية',
  'Commercial risk level': 'مستوى المخاطر التجارية',
  'What launching today would cost': 'كم سيكلّف الإطلاق اليوم',
  "Risk here is not the chance the campaign underperforms. It is the mechanism by which spend converts into a competitor's advantage.":
    'الخطر هنا ليس احتمال أن تحقّق الحملة أقل من المتوقع. بل هو الآلية التي يتحوّل بها الإنفاق إلى أفضلية لمنافس.',
  'Missed decision exposure': 'التعرّض للقرارات الفائتة',
  '19 of 24': '19 من 24',
  'Commercial decisions that already complete without this business appearing. A campaign increases how many of these happen, not how many are won.':
    'قرارات تجارية تكتمل بالفعل دون ظهور هذا النشاط التجاري. والحملة تزيد عدد ما يحدث منها، لا عدد ما يُكسَب.',
  'Revenue dependent on this stage': 'الإيراد المعتمد على هذه المرحلة',
  '38% of demand': '38% من الطلب',
  'The share of revenue arriving through supplier evaluation — the stage where presence is currently lowest and the campaign has least leverage.':
    'نصيب الإيراد الوارد عبر تقييم المورّدين — وهي المرحلة التي يكون فيها الحضور الأدنى حاليًا وتملك فيها الحملة أقل نفوذ.',
  'Expected ROI risk': 'مخاطر العائد المتوقع على الاستثمار',
  'Return depends on buyers completing a journey the business is absent from at these stages. Spend reaches them; the recommendation does not.':
    'يعتمد العائد على إكمال المشترين رحلةً يغيب عنها النشاط التجاري في هذه المراحل. فالإنفاق يبلغهم؛ أما التوصية فلا.',
  'Every click is paid for twice: once to acquire it, and again to reacquire the buyer who arrived, found nothing to evaluate with, and left to compare elsewhere.':
    'ثمن كل نقرة يُدفع مرتين: مرة لاكتسابها، ومرة لإعادة اكتساب المشتري الذي وصل فلم يجد ما يقيّم به، فغادر ليقارن في مكان آخر.',
  'Paid acquisition buys attention that trust has to convert. Without it the campaign raises awareness for the category and the best-verified supplier in it wins.':
    'الاكتساب المدفوع يشتري انتباهًا يجب أن تحوّله الثقة. وبدونها ترفع الحملة الوعي بالفئة ويفوز أفضل مورّد فيها من حيث التحقق.',
  'The campaign generates consideration the business cannot survive. Buyers who check will find nothing independent, and the check happens after the click is paid for.':
    'تولّد الحملة مرحلة تفكير لا يصمد أمامها النشاط التجاري. فمن يتحقّق من المشترين لن يجد شيئًا مستقلاً، والتحقق يقع بعد دفع ثمن النقرة.',
  'Campaign attention drives buyers to verify the business through an assistant that cannot describe it correctly. The spend creates the demand and a competitor collects it.':
    'انتباه الحملة يدفع المشترين للتحقق من النشاط التجاري عبر مساعد لا يستطيع وصفه بشكل صحيح. فالإنفاق يخلق الطلب ويجنيه منافس.',
  'Campaign messaging contradicts what the market already believes. Spend is consumed correcting the record instead of creating demand.':
    'رسائل الحملة تناقض ما يعتقده السوق أصلاً. فيُستهلك الإنفاق في تصحيح السجل بدل خلق الطلب.',
  'Paid search carries the entire commercial keyword set alone, at a blended cost already above break-even, for as long as the campaign runs.':
    'يحمل البحث المدفوع مجموعة الكلمات المفتاحية التجارية كاملةً وحده، بتكلفة مخلوطة تتجاوز نقطة التعادل أصلاً، طوال مدة تشغيل الحملة.',
  'The campaign raises category demand that the best-evidenced supplier absorbs. Competitor share can rise as a direct result of this spend.':
    'ترفع الحملة الطلب على الفئة فيمتصّه المورّد الأقوى دليلاً. وقد ترتفع حصة المنافس كنتيجة مباشرة لهذا الإنفاق.',
  'Both surfaces': 'كلتا الواجهتين',
  Partial: 'جزئي',

  /* --- Interventions and the decision ---------------------------------------------- */
  Intervention: 'التدخّل',
  'Required before launch': 'مطلوب قبل الإطلاق',
  'Blocked until priority {n} lands.': 'محجوب حتى تنفيذ الأولوية {n}.',
  'If you launch anyway': 'إذا أطلقت رغم ذلك',
  'Launch campaign': 'إطلاق الحملة',
  'Fix readiness first': 'عالِج الجاهزية أولاً',
  'Open Executive Action Plan': 'افتحوا خطة العمل التنفيذية',
  'Review the full position': 'راجعوا الموقف الكامل',
  'Website and conversion readiness': 'جاهزية الموقع والتحويل',
  'What position are we launching into?': 'إلى أي موقع نُطلق؟',
  'AI narrative': 'سردية الذكاء الاصطناعي',
  'Narrative consistency': 'اتساق السردية',

  /* ==========================================================================
     DECISION RECONSTRUCTION

     Display labels only. 'brand', 'competitor', 'supporting', 'downstream',
     'high', 'medium', 'low' are enum discriminants in the seed graph — an
     entry keyed on any of them rewrites the data itself and breaks every
     lookup. The component maps them to the capitalised labels below.
     ====================================================================== */
  'Decision Reconstruction': 'إعادة بناء القرار',
  'Decision Reconstruction | GeoRepute': 'إعادة بناء القرار | GeoRepute',
  'Signature experience': 'التجربة المميّزة',
  'Enter a domain and choose a commercial question. The system reconstructs what each surface understood, who received the decision and why.':
    'أدخلوا نطاقًا واختاروا سؤالاً تجاريًا. يعيد النظام بناء ما فهمته كل واجهة، ومن حصل على القرار، ولماذا.',
  'Seeded environment — this demonstration always reconstructs {org}.':
    'بيئة مزروعة — هذا العرض التوضيحي يعيد بناء {org} دائمًا.',
  Domain: 'النطاق',
  'Understood as: {what}': 'مفهوم على أنه: {what}',
  Brand: 'العلامة التجارية',
  Competitor: 'منافس',
  Low: 'منخفض',
  Supporting: 'داعم',
  Downstream: 'لاحق',
  '{n} tracked decision questions. Supplier-evaluation questions appear first — that is where the vendor is chosen.':
    '{n} سؤال قرار متابَع. أسئلة تقييم المورّدين تظهر أولاً — فهناك يُختار المورّد.',
  'An MRO and fastener distributor serving manufacturers':
    'موزّع صيانة وتشغيل ومثبّتات يخدم المصنّعين',
  'Midwest industrial fastener and MRO distributor':
    'موزّع مثبّتات صناعية وصيانة وتشغيل في وسط الغرب',
  'A regional industrial supplier in the US Midwest':
    'مورّد صناعي إقليمي في وسط غرب الولايات المتحدة',
  'Industrial supply company, category association incomplete':
    'شركة توريد صناعي، ارتباط الفئة غير مكتمل',
  'Unclear — associates the name with unrelated businesses':
    'غير واضح — يربط الاسم بأنشطة تجارية غير ذات صلة',
  'Not recognized as a distinct business entity':
    'غير معترف به ككيان تجاري مستقل',
  "Engines describe the category using a competitor's framing. Northwind owns 12% of that language.":
    'تصف المحركات الفئة بإطار وضعه منافس. وتمتلك Northwind 12% من تلك اللغة.',
  '{n} independent sources support this brand. Northwind has 3.':
    '{n} مصدرًا مستقلاً تدعم هذه العلامة التجارية. ولدى Northwind 3.',
  '{name} controls': 'يسيطر {name} على',
  'across the whole set. Competitive density is shifting at {velocity}.':
    'على امتداد المجموعة كاملةً. والكثافة التنافسية تتغيّر بوتيرة {velocity}.',
  'This is the exposure attributable to this single question. The full-book figure across all {n} tracked decisions is materially larger and appears in Mission Control.':
    'هذه هي الخسارة المنسوبة إلى هذا السؤال وحده. أما الرقم الكامل عبر جميع القرارات المتابَعة البالغة {n} فأكبر بكثير ويظهر في مركز القيادة.',
  'stage {n} of {total}': 'المرحلة {n} من {total}',
  Present: 'حاضر',
  'Observable by {tools} — but only after the decision has already narrowed.':
    'قابل للرصد عبر {tools} — لكن فقط بعد أن يكون القرار قد ضاق بالفعل.',
  'No conventional tool observes this stage. There is no visit, click, lead or CRM event to record — which is why the weakness is invisible until revenue moves.':
    'لا ترصد أي أداة تقليدية هذه المرحلة. فلا زيارة ولا نقرة ولا عميل محتمل ولا حدث CRM يُسجَّل — ولهذا يبقى الضعف غير مرئي حتى يتحرك الإيراد.',
  'Reconstruction confidence across all ten surfaces.':
    'مستوى الثقة في إعادة البناء عبر الواجهات العشر كلها.',
  'What each AI engine understood about the business':
    'ما فهمه كل محرك ذكاء اصطناعي عن النشاط التجاري',
  'Whether the brand was recognised, mentioned, cited, recommended or ignored':
    'ما إذا كانت العلامة التجارية قد عُرفت أو ذُكرت أو استُشهد بها أو أُوصي بها أو أُهملت',
  'Which competitor was selected instead': 'أي منافس اختير بدلاً منها',
  'Which sources, trust signals and narratives influenced the answer':
    'أي المصادر وإشارات الثقة والسرديات أثّرت في الإجابة',
  'What Google demand, organic position and paid click cost indicate':
    'ما الذي يشير إليه الطلب على Google والموقع العضوي وتكلفة النقرة المدفوعة',
  'Where the question sits in the customer decision journey':
    'أين يقع السؤال في رحلة قرار العميل',
  'What timing, market maturity and competitive density indicate':
    'ما الذي يشير إليه التوقيت ونضج السوق والكثافة التنافسية',
  'What the directional commercial exposure may be':
    'ما قد تكون عليه الخسارة التجارية التقديرية',
  'Which connected signals explain the outcome': 'أي الإشارات المترابطة تفسّر النتيجة',
  'What action is prescribed and how improvement will be measured':
    'ما الإجراء الموصوف وكيف سيُقاس التحسّن',
  'Decision intelligence graph': 'مخطط ذكاء القرار',
  'Mentioned only': 'مذكور فقط',
  'Wrong entity': 'كيان خاطئ',
  'Named Northwind in its answer, citing company website.':
    'ذكر Northwind في إجابته مستشهدًا بموقع الشركة.',
  'Recognises the business but did not consider it relevant to this question.':
    'يتعرّف على النشاط التجاري لكنه لم يعتبره ذا صلة بهذا السؤال.',
  'Describes Northwind as a hardware retailer rather than an MRO distributor, which removes it from supplier-evaluation answers.':
    'يصف Northwind بأنها متجر أدوات بالتجزئة لا موزّع صيانة وتشغيل، ما يُخرجها من إجابات تقييم المورّدين.',
  'Knows the company exists but not which product categories it carries, so it is omitted from specification-led questions.':
    'يعلم بوجود الشركة لكنه يجهل فئات المنتجات التي تحملها، فتُغفَل من الأسئلة التي تقودها المواصفات.',
  'Conflates Northwind Supply with a same-named logistics firm, so category association fails entirely.':
    'يخلط بين Northwind Supply وشركة لوجستيات تحمل الاسم نفسه، فيفشل ارتباط الفئة تمامًا.',
  '1 of 6 engines named Northwind, and none placed it first.':
    'محرك واحد من 6 ذكر Northwind، ولم يضعها أي منها في المرتبة الأولى.',
  '4 of 6 resolve the wrong entity': '4 من 6 تحيل إلى الكيان الخاطئ',
  'engines recommended the business on this question':
    'محركات أوصت بالنشاط التجاري في هذا السؤال',
  'of all recommendations across the tracked decision set':
    'من مجموع التوصيات عبر مجموعة القرارات المتابَعة',
  'Kestrel Industrial is cited by 21 independent sources; Northwind by 3.':
    'يُستشهد بـKestrel Industrial من 21 مصدرًا مستقلاً؛ وبـNorthwind من 3.',
  '3 sources vs 14 median': '3 مصادر مقابل وسيط 14',
  'Northwind’s own pages are the only source engines can reach for its claims — self-citation carries little weight.':
    'صفحات Northwind نفسها هي المصدر الوحيد الذي تبلغه المحركات لادّعاءاتها — والاستشهاد الذاتي وزنه ضئيل.',
  'A published comparison library gives engines material they can quote directly.':
    'مكتبة مقارنات منشورة تمنح المحركات مادة يمكنها اقتباسها مباشرةً.',
  'Category evaluation criteria': 'معايير تقييم الفئة',
  'Supplier-comparison content': 'محتوى مقارنة المورّدين',
  'Company website': 'موقع الشركة',
  Source: 'المصدر',
  Favours: 'يصبّ في صالح',
  'Why it matters': 'لماذا يهم',
  'Monthly volume': 'الحجم الشهري',
  'Paid CPC': 'تكلفة النقرة المدفوعة',
  'AI presence': 'الحضور في الذكاء الاصطناعي',
  'Closest tracked keyword': 'أقرب كلمة مفتاحية متابَعة',
  'Above break-even CPC': 'فوق تكلفة النقرة عند نقطة التعادل',
  'Coverage at this stage': 'التغطية في هذه المرحلة',
  'Share of query volume': 'الحصة من حجم الاستعلامات',
  'Share of revenue decided': 'حصة الإيراد الذي يُحسم',
  'of questions at this stage against': 'من الأسئلة في هذه المرحلة مقابل',
  'Market position': 'الموقع في السوق',
  'Window remaining': 'ما تبقّى من النافذة',
  'Buy this as an intelligence product': 'اشترِ هذا كمنتج ذكاء',

  /* Page descriptions. These render into <meta name="description"> rather than
     into the page, so the render audit cannot see them — it reads visible
     prose and a short list of perceivable attributes. Four of them sat in
     English through every clean audit this site has passed. */
  'Decision Health, revenue exposure, competitive capture, narrative control and strategic timing in one decision position.':
    'صحة القرار، والتعرّض للإيراد، والاستحواذ التنافسي، والتحكّم في السردية، والتوقيت الاستراتيجي — في موقف قرار واحد.',
  'Should we launch this campaign today? A pre-campaign assessment of the business rather than the campaign — AI, authority, trust, narrative, competitive position and destination readiness, weighted into one decision.':
    'هل نطلق هذه الحملة اليوم؟ تقييم ما قبل الحملة للنشاط التجاري لا للحملة — الذكاء الاصطناعي والمرجعية والثقة والسردية والموقع التنافسي وجاهزية الوجهة، مرجّحة في قرار واحد.',
  'What story is the market telling about us, and how is it influencing decisions? Active narratives, who owns each one, where they are heading, and what should change.':
    'ما القصة التي يرويها السوق عنّا، وكيف تؤثر في القرارات؟ السرديات النشطة، ومن يملك كلاً منها، وإلى أين تتجه، وما الذي ينبغي أن يتغيّر.',
  'Enter a domain and select a commercial question. Reconstruct what each AI engine understood, who received the decision, why, and what must change.':
    'أدخلوا نطاقًا واختاروا سؤالاً تجاريًا. أعيدوا بناء ما فهمه كل محرك ذكاء اصطناعي، ومن حصل على القرار، ولماذا، وما الذي يجب أن يتغيّر.',

  /* --- The 24 tracked buyer questions. Translated on the same reasoning as the
         home page's search queries — a buyer in this market asks in Arabic. -- */
  'Which fastener supplier should we choose for a new plant?':
    'أي مورّد مثبّتات ينبغي أن نختار لمصنع جديد؟',
  'Who are the top industrial supply companies for fasteners?':
    'من هي أفضل شركات التوريد الصناعي للمثبّتات؟',
  'Best MRO distributors for manufacturing plants':
    'أفضل موزّعي الصيانة والتشغيل لمصانع التصنيع',
  'Top rated industrial supply vendors near Chicago':
    'أعلى مورّدي التوريد الصناعي تقييمًا قرب شيكاغو',
  'Which MRO supplier has the best fill rate?':
    'أي مورّد صيانة وتشغيل لديه أفضل معدل تلبية للطلبات؟',
  'Recommended industrial distributors for hydraulic components':
    'موزّعون صناعيون موصى بهم للمكوّنات الهيدروليكية',
  'Compare industrial distributor service levels':
    'مقارنة مستويات خدمة الموزّعين الصناعيين',
  'Is a national or regional MRO distributor better?':
    'أيهما أفضل: موزّع صيانة وتشغيل وطني أم إقليمي؟',
  'Should we consolidate MRO suppliers or keep multiple vendors?':
    'هل ندمج مورّدي الصيانة والتشغيل أم نبقي على عدة مورّدين؟',
  'What should an MRO supply agreement include?':
    'ما الذي ينبغي أن تتضمّنه اتفاقية توريد الصيانة والتشغيل؟',
  'Risks of single-source supplier dependency for MRO':
    'مخاطر الاعتماد على مورّد وحيد للصيانة والتشغيل',
  'Vendor-managed inventory vs consignment for MRO supplies':
    'المخزون المُدار من المورّد مقابل البيع بالأمانة لمستلزمات الصيانة والتشغيل',
  'What is vendor-managed inventory for MRO supplies?':
    'ما هو المخزون المُدار من المورّد لمستلزمات الصيانة والتشغيل؟',
  'How do I reduce MRO inventory carrying costs?':
    'كيف أخفّض تكاليف الاحتفاظ بمخزون الصيانة والتشغيل؟',
  'Best practices for industrial fastener sourcing':
    'أفضل الممارسات في توريد المثبّتات الصناعية',
  'What is the difference between grade 5 and grade 8 fasteners?':
    'ما الفرق بين مثبّتات الدرجة 5 والدرجة 8؟',
  'What causes premature bolt failure in high-vibration equipment?':
    'ما الذي يسبّب الفشل المبكر للبراغي في المعدات عالية الاهتزاز؟',
  'How often should hydraulic fittings be replaced?':
    'كم مرة ينبغي استبدال الوصلات الهيدروليكية؟',
  'How to avoid counterfeit fasteners in the supply chain':
    'كيف تتجنّب المثبّتات المقلّدة في سلسلة التوريد',
  'What are the most common industrial supply delivery failures?':
    'ما أكثر إخفاقات التسليم شيوعًا في التوريد الصناعي؟',
  'Industrial fastener supplier with same-day shipping':
    'مورّد مثبّتات صناعية مع شحن في اليوم نفسه',
  'Get a quote for bulk grade 8 fasteners':
    'احصل على عرض سعر لمثبّتات الدرجة 8 بالجملة',
  'Set up an MRO supply account': 'افتح حساب توريد للصيانة والتشغيل',

  /* ==========================================================================
     EXECUTIVE MISSION CONTROL
     ====================================================================== */
  'Executive Mission Control': 'مركز القيادة التنفيذي',
  'Executive Mission Control | GeoRepute': 'مركز القيادة التنفيذي | GeoRepute',
  'Not more data. A decision position.': 'ليست بيانات إضافية. بل موقف قرار.',
  'Ten measures, each with evidence behind it': 'عشرة مقاييس، لكل منها دليل وراءه',
  'Every figure is computed from observed data. Select any tile to open the full readout, its evidence and its prescribed action.':
    'كل رقم محسوب من بيانات مرصودة. اختاروا أي بطاقة لفتح القراءة الكاملة ودليلها والإجراء الموصوف لها.',
  Position: 'الموقع',
  Explanation: 'التفسير',
  Execution: 'التنفيذ',
  'AI Recognition Position': 'موقع التعرّف في الذكاء الاصطناعي',
  'Average entity understanding across six engines. Three misidentify the category.':
    'متوسط فهم الكيان عبر ستة محركات. ثلاثة منها تخطئ في تحديد الفئة.',
  'Google vs AI Gap': 'الفجوة بين Google والذكاء الاصطناعي',
  'Keywords absent from AI answers and outside the Google top ten. The decision happens on neither surface.':
    'كلمات مفتاحية غائبة عن إجابات الذكاء الاصطناعي وخارج العشرة الأوائل في Google. فالقرار لا يحدث على أي من الواجهتين.',
  'Decision Presence': 'الحضور في القرار',
  'Supplier-evaluation coverage. 19 of 24 decisions complete without the brand.':
    'تغطية تقييم المورّدين. 19 من 24 قرارًا تكتمل دون العلامة التجارية.',
  'Competitive Capture': 'الاستحواذ التنافسي',
  'Kestrel Industrial receives the recommendation. Northwind receives 4.2%.':
    'يتلقّى Kestrel Industrial التوصية. وتتلقّى Northwind 4.2%.',
  'Narrative Ownership': 'ملكية السردية',
  'Share of the language engines use to define the category. The criteria cited first are a competitor’s.':
    'الحصة من اللغة التي تستخدمها المحركات لتعريف الفئة. والمعايير المذكورة أولاً هي معايير منافس.',
  'Trust Readiness': 'جاهزية الثقة',
  'The recommendation goes to the supplier engines can support with evidence.':
    'تذهب التوصية إلى المورّد الذي تستطيع المحركات دعمه بالأدلة.',
  'Paid Dependency': 'الاعتماد على المدفوع',
  'Blended CPC runs above break-even. Paid is renting the positions authority would hold.':
    'تكلفة النقرة المخلوطة تفوق نقطة التعادل. فالمدفوع يستأجر المواقع التي كانت المرجعية ستحتفظ بها.',
  'Weighted across six GEON vectors. Authority at 28 is the binding constraint.':
    'مرجّح عبر ستة متجهات GEON. والمرجعية عند 28 هي القيد الحاكم.',
  'ChatGPT supplier recommendation presence': 'حضور توصية المورّد في ChatGPT',
  'The most-used engine puts Northwind forward in one of twenty-four decision questions.':
    'المحرك الأكثر استخدامًا يقدّم Northwind في سؤال واحد من أربعة وعشرين سؤال قرار.',
  '3 independent sources against a category median of 14.':
    '3 مصادر مستقلة مقابل وسيط للفئة يبلغ 14.',
  'Authority is the binding constraint, so it is where intervention begins.':
    'المرجعية هي القيد الحاكم، ولذلك يبدأ التدخّل منها.',
  'Paid search is bought to cover the questions authority no longer wins.':
    'يُشترى البحث المدفوع لتغطية الأسئلة التي لم تعد المرجعية تكسبها.',
  'Emerging market at 63/100 readiness. Query maturity accelerating.':
    'سوق ناشئ بجاهزية 63/100. ونضج الاستعلامات يتسارع.',
  'The window remains open but is narrowing. Displacement cost rises once engines settle on a stable answer set.':
    'ما زالت النافذة مفتوحة لكنها تضيق. وترتفع كلفة الإزاحة متى استقرت المحركات على مجموعة إجابات ثابتة.',
  'Decision deadline': 'الموعد النهائي للقرار',
  'Timing window': 'نافذة التوقيت',
  months: 'أشهر',
  'Causal signal chain': 'سلسلة الإشارات السببية',
  'The measures above are not independent. This is the chain that connects them, ending in the intervention it implies.':
    'المقاييس أعلاه ليست مستقلة. وهذه هي السلسلة التي تربطها، وتنتهي بالتدخّل الذي تستلزمه.',
  'One decision. Many signals. One explanation.':
    'قرار واحد. إشارات كثيرة. تفسير واحد.',
  'Open evidence': 'افتحوا الأدلة',
  'Open Action Center': 'افتحوا مركز الإجراءات',
  'Reconstruct the decision': 'أعيدوا بناء القرار',
  'Explore intelligence engines': 'استكشف محركات الذكاء',

  /* --- Executive intelligence feed ------------------------------------------------- */
  'Executive intelligence feed': 'موجز الذكاء التنفيذي',
  '{n} events': '{n} أحداث',
  'Competitor surge': 'اندفاع منافس',
  'Kestrel Industrial gained the first recommendation on two more supplier questions':
    'حصل Kestrel Industrial على التوصية الأولى في سؤالَي مورّدين إضافيين',
  'Kestrel now leads four of seven supplier-evaluation answers, up from two. Both new wins cite a trade publication added in June.':
    'يتصدّر Kestrel الآن أربعًا من سبع إجابات لتقييم المورّدين، صعودًا من اثنتين. وكلا المكسبين الجديدين يستشهد بمنشور قطاعي أُضيف في يونيو.',
  'Citation lost': 'استشهاد مفقود',
  'Perplexity stopped citing the Northwind capability page':
    'توقّف Perplexity عن الاستشهاد بصفحة قدرات Northwind',
  'The page was cited on three questions in June and none in July. Perplexity now resolves the same questions to competitor sources.':
    'استُشهد بالصفحة في ثلاثة أسئلة في يونيو ولا شيء في يوليو. ويحيل Perplexity الآن الأسئلة نفسها إلى مصادر منافسة.',
  '3 → 0 citations': '3 ← 0 استشهادات',
  '25 searches/mo': '25 عملية بحث/شهر',
  '+1 question': '+1 سؤال',
  '+2 questions': '+2 سؤالان',
  '+8% QoQ': '+8% ربعًا على ربع',
  '+8% CPC': '+8% تكلفة النقرة',
  'per month': 'شهريًا',
  '$3,200 – $6,200 per month': '3,200$ – 6,200$ شهريًا',
  'per quarter': 'ربع سنويًا',
  'per year': 'سنويًا',
  'Narrative risk': 'مخاطر السردية',
  'Engines adopted a competitor’s evaluation criteria':
    'تبنّت المحركات معايير تقييم وضعها منافس',
  'Fill rate and catalogue breadth are now cited first when engines explain how to choose a distributor. Regional response time is not referenced.':
    'يُذكر معدل تلبية الطلبات واتساع الكتالوج أولاً الآن حين تشرح المحركات كيفية اختيار موزّع. ولا يُشار إلى زمن الاستجابة الإقليمي.',
  'Trust signal decayed': 'تآكل إشارة ثقة',
  'Category description diverged across two trade directories':
    'تباين وصف الفئة عبر دليلَي قطاع',
  'Two directories now describe Northwind differently from its own site. Inconsistency is the mechanism behind entity confusion on ChatGPT and Copilot.':
    'يصف دليلان الآن Northwind بصورة مختلفة عن موقعها. وعدم الاتساق هو الآلية وراء الخلط في الكيان لدى ChatGPT وCopilot.',
  'Search cost spike': 'قفزة في تكلفة البحث',
  'Blended CPC moved further above break-even':
    'ارتفعت تكلفة النقرة المخلوطة أكثر فوق نقطة التعادل',
  '“industrial supply company” rose to $11.00 with no organic position in the top 100. Paid is covering a question authority does not reach.':
    'ارتفعت «شركة توريد صناعي» إلى 11.00$ دون أي موقع عضوي ضمن أول 100. فالمدفوع يغطّي سؤالاً لا تبلغه المرجعية.',
  'New decision question': 'سؤال قرار جديد',
  'A new supplier-evaluation question entered the tracked set':
    'دخل سؤال جديد لتقييم المورّدين إلى المجموعة المتابَعة',
  '“Which MRO supplier has the best fill rate?” appeared with measurable volume. Northwind is absent from every engine answering it.':
    'ظهر «أي مورّد صيانة وتشغيل لديه أفضل معدل تلبية للطلبات؟» بحجم قابل للقياس. وNorthwind غائبة عن كل محرك يجيب عنه.',
  'Recommendation gained': 'توصية مكتسبة',
  'Claude began recommending Northwind for regional distributor questions':
    'بدأ Claude بالتوصية بـNorthwind في أسئلة الموزّعين الإقليميين',
  'First recommendation on “Top rated industrial supply vendors near Chicago”. Regional specificity is the differentiator the answer cites.':
    'أول توصية على «أعلى مورّدي التوريد الصناعي تقييمًا قرب شيكاغو». والخصوصية الإقليمية هي عامل التمييز الذي تستشهد به الإجابة.',
  'Regional opportunity': 'فرصة إقليمية',
  'Midwest regional questions show weaker competitive density':
    'أسئلة وسط الغرب الإقليمية تُظهر كثافة تنافسية أضعف',
  'Questions naming a Midwest location carry lower competitor control than national equivalents — the cheapest available entry point.':
    'الأسئلة التي تسمّي موقعًا في وسط الغرب تحمل سيطرة أقل للمنافسين مقارنةً بنظيراتها الوطنية — وهي أرخص نقطة دخول متاحة.',
  'Competitive density rose 8% quarter over quarter':
    'ارتفعت الكثافة التنافسية 8% ربعًا على ربع',

  /* ==========================================================================
     STRATEGIC ACTION CENTER
     ====================================================================== */
  'Strategic Action Center': 'مركز الإجراءات الاستراتيجية',
  'Prioritised interventions with owner, deadline, expected movement and how impact is verified after execution.':
    'تدخّلات مرتّبة بالأولوية مع المالك والموعد النهائي والحركة المتوقعة وكيفية التحقق من الأثر بعد التنفيذ.',
  '{n}-day': '{n} يومًا',
  'Each intervention names an owner, a deadline, the signal it should move and how that movement will be verified.':
    'كل تدخّل يسمّي مالكًا وموعدًا نهائيًا والإشارة التي ينبغي أن يحرّكها وكيف سيُتحقَّق من تلك الحركة.',
  Interventions: 'التدخّلات',
  Measured: 'مُقاس',
  'Verified after execution': 'يُتحقَّق منه بعد التنفيذ',
  View: 'عرض',
  'Priority queue': 'طابور الأولويات',
  '30/60/90 roadmap': 'خارطة طريق 30/60/90',
  'day horizon': 'أفق يومي',
  'Ranked by urgency, then by effort — cheapest decisive move first':
    'مرتّبة بالإلحاح ثم بالجهد — أرخص خطوة حاسمة أولاً',
  'Priority {n}': 'الأولوية {n}',
  'Not yet measured — verified after execution.':
    'لم يُقَس بعد — يُتحقَّق منه بعد التنفيذ.',
  'View evidence': 'عرض الأدلة',
  'How impact is verified': 'كيف يُتحقَّق من الأثر',
  'Completion is not impact. Each action is verified by re-observing the signal it targets, across the same engines and questions, after execution. Until that re-observation happens, measured change stays empty rather than assumed.':
    'الإنجاز ليس أثرًا. فكل إجراء يُتحقَّق منه بإعادة رصد الإشارة التي يستهدفها، عبر المحركات والأسئلة نفسها، بعد التنفيذ. وإلى أن تتم إعادة الرصد تلك، يبقى التغيّر المقاس فارغًا بدل أن يُفترَض.',
  'Back to Mission Control': 'العودة إلى مركز القيادة',
  'Read the methodology': 'اقرأوا المنهجية',

  /* ==========================================================================
     MARKETPLACE AND ENGINE DETAIL PAGES

     Nineteen routes that were never audited until the route list was
     enumerated properly: /marketplace/[slug] ×8,
     /marketplace/category/[slug] ×7 and /engines/[slug] ×4.

     Composites the audit prints — "Entry · Snapshot", "12 modules",
     "Next: …" — are NOT keys. The component joins two translated halves.
     ====================================================================== */

  /* --- Product page chrome --------------------------------------------------------- */
  Breadcrumb: 'مسار التنقّل',
  'Intelligence Marketplace': 'سوق الذكاء',
  'Intelligence Engines': 'محركات الذكاء',
  'Product detail': 'تفاصيل المنتج',
  'Everything needed to decide, without a sales call':
    'كل ما يلزم لاتخاذ القرار، دون مكالمة مبيعات',
  'What you receive': 'ما الذي تحصل عليه',
  'A real readout from this product, on seeded data':
    'قراءة حقيقية من هذا المنتج، على بيانات مزروعة',
  'Every intelligence product returns the same twelve-section anatomy: executive truth, business meaning, evidence, connected signals, competitor context, commercial exposure, timing, trend, prescription, expected movement, owner and measurement.':
    'كل منتج ذكاء يعيد البنية نفسها المكوّنة من اثني عشر قسمًا: الحقيقة التنفيذية، والمعنى التجاري، والأدلة، والإشارات المترابطة، وسياق المنافسين، والخسارة التجارية، والتوقيت، والاتجاه، والوصفة العلاجية، والحركة المتوقعة، والمالك، والقياس.',
  'One-time purchase. Placeholder pricing.': 'شراء لمرة واحدة. تسعير مبدئي.',
  'Buy this intelligence product': 'اشترِ منتج الذكاء هذا',
  'Buy {name}': 'اشترِ {name}',
  'Compare with a subscription': 'قارنوا مع اشتراك',
  'See the full ecosystem': 'اطّلعوا على المنظومة الكاملة',
  'by {date}': 'بحلول {date}',

  /* --- The eleven product fields --------------------------------------------------- */
  'Business question': 'السؤال التجاري',
  'Decision consequence': 'أثر القرار',
  'What it detects': 'ما الذي يكشفه',
  'Required inputs': 'المدخلات المطلوبة',
  Scope: 'النطاق',
  'Intelligence depth': 'عمق الذكاء',
  Delivery: 'التسليم',
  'Time to delivery': 'مدة التسليم',
  'Commercial terms': 'الشروط التجارية',
  'Upgrade path': 'مسار الترقية',
  Depth: 'العمق',
  Date: 'التاريخ',
  Finding: 'الاستنتاج',
  Engine: 'المحرك',
  Observed: 'المرصود',
  Live: 'يعمل',
  You: 'أنتم',

  /* Tier display labels. The component maps the lowercase discriminants
     (entry / advanced / premium) onto these before translating — see the
     TIER_LABEL note in marketplace/[slug]/page.tsx. */
  Entry: 'أساسي',
  'Advanced tier': 'متقدّم',
  Premium: 'مميّز',
  /* Depth values. Already capitalised in the seed, so no collision. */
  Snapshot: 'لقطة سريعة',
  Advanced: 'متقدّم',
  Strategic: 'استراتيجي',
  Executive: 'تنفيذي',

  /* --- Category page --------------------------------------------------------------- */
  'All intelligence categories': 'كل فئات الذكاء',
  'Other intelligence categories': 'فئات ذكاء أخرى',
  'Every module answers one question.': 'كل وحدة تجيب عن سؤال واحد.',
  'Each returns the evidence behind its answer, what that answer means commercially, and what should change as a result.':
    'كل منها يعيد الأدلة التي تقف خلف إجابته، وما تعنيه تلك الإجابة تجاريًا، وما الذي ينبغي أن يتغيّر نتيجةً لها.',
  'Buy this intelligence': 'اشترِ هذا الذكاء',
  'Take one question, or take the whole category.':
    'خذ سؤالاً واحدًا، أو خذ الفئة بأكملها.',
  'Each purchase states what it examines, what it needs from you, how confident it can be and what it costs. No sales call is required to find any of that out.':
    'كل عملية شراء تبيّن ما تفحصه، وما تحتاجه منكم، ومستوى الثقة الذي تستطيع بلوغه، وكم تكلّف. ولا تلزم مكالمة مبيعات لمعرفة أي من ذلك.',
  'One engine produces this category.': 'محرك واحد يُنتج هذه الفئة.',
  '{n} engines produce this category.': '{n} محركات تُنتج هذه الفئة.',
  'Engines are the machinery, not the offer. Nothing above required you to know one existed.':
    'المحركات هي الآلة، لا العرض. ولم يتطلّب أي شيء مما سبق أن تعرف بوجود واحد منها.',
  '{n} modules': '{n} وحدات',
  '<b>{n}</b> intelligence modules in this category.':
    '<b>{n}</b> وحدات ذكاء في هذه الفئة.',
  '<b>{n}</b> intelligence modules in this category · <b>{live}</b> running live in this environment.':
    '<b>{n}</b> وحدات ذكاء في هذه الفئة · <b>{live}</b> تعمل مباشرةً في هذه البيئة.',
  Built: 'مبني',
  'In platform': 'في المنصة',
  'In the platform': 'في المنصة',

  /* --- Engine detail page ---------------------------------------------------------- */
  'Intelligence readout': 'قراءة الذكاء',
  'What this engine concluded': 'ما خلص إليه هذا المحرك',
  'Signal, evidence, consequence, action': 'إشارة، ودليل، وأثر، وإجراء',
  'Screens this engine provides': 'الشاشات التي يوفّرها هذا المحرك',
  'Next: {name}': 'التالي: {name}',

  /* --- Delivery, scope and inputs -------------------------------------------------- */
  'After scan completion — typically under 20 minutes':
    'عند اكتمال الفحص — عادةً في أقل من 20 دقيقة',
  'After scan completion — typically under 30 minutes':
    'عند اكتمال الفحص — عادةً في أقل من 30 دقيقة',
  'After scan completion — typically under 60 minutes':
    'عند اكتمال الفحص — عادةً في أقل من 60 دقيقة',
  'Expert-reviewed — within 3 business days':
    'مُراجَع من خبير — خلال 3 أيام عمل',
  'Optional: Search Console': 'اختياري: Search Console',
  'Optional: Search Console and Analytics':
    'اختياري: Search Console وGoogle Analytics',
  'Up to 4 competitors': 'حتى 4 منافسين',
  'Google + 6 engines': 'Google + 6 محركات',
  '6 AI engines · entity and category association · 1 market':
    '6 محركات ذكاء اصطناعي · ربط الكيان والفئة · سوق واحد',
  '6 AI engines · 20 commercial questions · 4 competitors · 1 market':
    '6 محركات ذكاء اصطناعي · 20 سؤالاً تجاريًا · 4 منافسين · سوق واحد',
  '6 AI engines · 24 decision questions · 4 competitors':
    '6 محركات ذكاء اصطناعي · 24 سؤال قرار · 4 منافسين',
  '6 AI engines · 24 decision questions · 5 decision stages':
    '6 محركات ذكاء اصطناعي · 24 سؤال قرار · 5 مراحل قرار',
  '6 AI engines · 24 questions · 20 keywords · 4 competitors · full GEON assessment':
    '6 محركات ذكاء اصطناعي · 24 سؤالاً · 20 كلمة مفتاحية · 4 منافسين · تقييم GEON كامل',
  '6 AI engines · 24 questions · 4 competitors · citation analysis':
    '6 محركات ذكاء اصطناعي · 24 سؤالاً · 4 منافسين · تحليل الاستشهادات',
  '6 AI engines · 24 questions · 5 stages · 4 competitors':
    '6 محركات ذكاء اصطناعي · 24 سؤالاً · 5 مراحل · 4 منافسين',
  'Public trust and reputation sources · 1 market':
    'مصادر الثقة والسمعة العامة · سوق واحد',
  'Continuous monitoring, additional markets, or the full platform with history and alerts.':
    'مراقبة مستمرة، أو أسواق إضافية، أو المنصة الكاملة مع السجل والتنبيهات.',
  'Continuous monitoring, quarterly executive regeneration, or enterprise implementation.':
    'مراقبة مستمرة، أو إعادة إنتاج تنفيذية ربع سنوية، أو تنفيذ مؤسسي.',
  'Continuous prompt monitoring and visibility trends.':
    'مراقبة مستمرة للاستعلامات واتجاهات الظهور.',
  'Continuous competitor monitoring and momentum tracking.':
    'مراقبة مستمرة للمنافسين وتتبّع الزخم.',
  'Continuous monitoring with stage-level alerting.':
    'مراقبة مستمرة مع تنبيهات على مستوى المرحلة.',
  'Competitive War Room with continuous monitoring.':
    'غرفة عمليات تنافسية مع مراقبة مستمرة.',
  'Recognition history and decay monitoring.': 'سجل التعرّف ومراقبة التآكل.',
  'Reputation momentum and trust decay monitoring.':
    'زخم السمعة ومراقبة تآكل الثقة.',
  'Interactive workspace': 'مساحة عمل تفاعلية',
  'Downloadable intelligence brief': 'موجز ذكاء قابل للتنزيل',
  'Expert interpretation': 'تفسير خبير',
  'Evidence pack': 'حزمة الأدلة',
  'Action plan': 'خطة العمل',
  ' of 20': ' من 20',
  ' of 24': ' من 24',

  /* --- Product names. Descriptive rather than branded, so translated. -------------- */
  'AI Recognition Scan': 'فحص التعرّف في الذكاء الاصطناعي',
  'AI Recognition Scan | GeoRepute': 'فحص التعرّف في الذكاء الاصطناعي | GeoRepute',
  'AI Search Presence Scan': 'فحص الحضور في بحث الذكاء الاصطناعي',
  'AI Search Presence Scan | GeoRepute':
    'فحص الحضور في بحث الذكاء الاصطناعي | GeoRepute',
  'Google vs AI Gap Scan': 'فحص الفجوة بين Google والذكاء الاصطناعي',
  'Google vs AI Gap Scan | GeoRepute':
    'فحص الفجوة بين Google والذكاء الاصطناعي | GeoRepute',
  'Competitor Recommendation Scan': 'فحص توصيات المنافسين',
  'Competitor Recommendation Scan | GeoRepute': 'فحص توصيات المنافسين | GeoRepute',
  'Trust Signals Scan': 'فحص إشارات الثقة',
  'Trust Signals Scan | GeoRepute': 'فحص إشارات الثقة | GeoRepute',
  'Decision Journey Diagnostic': 'تشخيص رحلة القرار',
  'Decision Journey Diagnostic | GeoRepute': 'تشخيص رحلة القرار | GeoRepute',
  'Competitive Position Assessment': 'تقييم الموقع التنافسي',
  'Competitive Position Assessment | GeoRepute': 'تقييم الموقع التنافسي | GeoRepute',
  'Executive Intelligence Brief': 'موجز الذكاء التنفيذي',
  'Executive Intelligence Brief | GeoRepute': 'موجز الذكاء التنفيذي | GeoRepute',
  'Decision Reconstruction — a completed reconstruction':
    'إعادة بناء القرار — إعادة بناء مكتملة',
  'Mission Control → the composite Decision Health position panel':
    'مركز القيادة ← لوحة الموقف المركّبة لصحة القرار',
  'One commercial question, reconstructed from what each engine understood to what must change. Anonymised demonstration data.':
    'سؤال تجاري واحد، مُعاد بناؤه من ما فهمه كل محرك وصولاً إلى ما يجب أن يتغيّر. بيانات عرض توضيحي مجهّلة.',
  'One decision position rather than ten measures. Anonymised demonstration data.':
    'موقف قرار واحد بدلاً من عشرة مقاييس. بيانات عرض توضيحي مجهّلة.',

  /* --- Module business questions ---------------------------------------------------
     The category page leads with the question, not the module name, so these
     carry more weight per word than anything else on the page. */
  'Does AI understand what the business actually does?':
    'هل يفهم الذكاء الاصطناعي ما يفعله النشاط التجاري فعلاً؟',
  'Do AI engines understand who the business is and what it offers?':
    'هل تفهم محركات الذكاء الاصطناعي من هو النشاط التجاري وماذا يقدّم؟',
  'Which AI systems know the business exists, and which do not?':
    'أي أنظمة الذكاء الاصطناعي تعرف بوجود النشاط التجاري، وأيها لا تعرف؟',
  'Is AI confusing the business with someone else?':
    'هل يخلط الذكاء الاصطناعي بين النشاط التجاري وجهة أخرى؟',
  'Is AI describing a version of the business that no longer exists?':
    'هل يصف الذكاء الاصطناعي نسخة من النشاط التجاري لم تعد قائمة؟',
  'Is the business becoming less recognised over time?':
    'هل يتراجع التعرّف على النشاط التجاري بمرور الوقت؟',
  'Is the business visible when customers ask for recommendations?':
    'هل يظهر النشاط التجاري حين يطلب العملاء توصيات؟',
  'When a buyer describes a need, is the business in the set AI considers?':
    'حين يصف مشترٍ حاجةً، هل يكون النشاط التجاري ضمن ما يأخذه الذكاء الاصطناعي بالحسبان؟',
  'Across the questions buyers actually ask, how often does the business appear at all?':
    'عبر الأسئلة التي يطرحها المشترون فعلاً، كم مرة يظهر النشاط التجاري أصلاً؟',
  'Of all the recommendations made in this category, what share names the business?':
    'من مجموع التوصيات في هذه الفئة، ما النسبة التي تذكر النشاط التجاري؟',
  'On those same questions, does AI put the business forward at all?':
    'في تلك الأسئلة نفسها، هل يقدّم الذكاء الاصطناعي النشاط التجاري أصلاً؟',
  'Do the two discovery surfaces tell the same story about us?':
    'هل تروي واجهتا الاكتشاف القصة نفسها عنّا؟',
  'Is the business aligned across traditional search and AI discovery?':
    'هل النشاط التجاري متسق بين البحث التقليدي والاكتشاف عبر الذكاء الاصطناعي؟',
  'Which commercial questions are invisible on both surfaces at once?':
    'أي الأسئلة التجارية غير مرئية على الواجهتين في آنٍ واحد؟',
  'Where does the business rank on the questions that carry commercial intent?':
    'أين يترتّب النشاط التجاري في الأسئلة التي تحمل نيّة شرائية؟',
  'Where does existing authority already rank but fail to reach AI?':
    'أين تتصدّر المرجعية القائمة بالفعل لكنها لا تبلغ الذكاء الاصطناعي؟',
  'What kind of gap is this, and does it deserve investment?':
    'ما نوع هذه الفجوة، وهل تستحق الاستثمار؟',
  'What is the business actually paying per commercial click?':
    'كم يدفع النشاط التجاري فعليًا مقابل النقرة التجارية؟',
  'Above what price does a click stop making money?':
    'فوق أي سعر تتوقف النقرة عن تحقيق ربح؟',
  'How much of current demand would disappear if paid search stopped tomorrow?':
    'كم من الطلب الحالي سيختفي لو توقّف البحث المدفوع غدًا؟',
  'Which paid positions could be replaced by owned authority?':
    'أي المواقع المدفوعة يمكن استبدالها بمرجعية مملوكة؟',
  'Is the cost of the same position rising, and how fast?':
    'هل ترتفع كلفة الموقع نفسه، وبأي وتيرة؟',
  'Who is being recommended instead of the business, and how often?':
    'بمن يُوصى بدلاً من النشاط التجاري، وكم مرة؟',
  'Who is recommended instead, where and why?': 'بمن يُوصى بدلاً منه، وأين، ولماذا؟',
  'Why do competitors capture the decision?': 'لماذا يستحوذ المنافسون على القرار؟',
  'What specifically makes a competitor recommendable?':
    'ما الذي يجعل منافسًا جديرًا بالتوصية تحديدًا؟',
  'How much more evidence supports them than supports us?':
    'كم تزيد الأدلة التي تدعمهم عن تلك التي تدعمنا؟',
  'Which specific questions does each competitor own?':
    'أي الأسئلة تحديدًا يمتلكها كل منافس؟',
  'At which stage does each competitor take control?':
    'في أي مرحلة يسيطر كل منافس؟',
  'Where is the leading competitor actually weak?':
    'أين يكون المنافس المتصدّر ضعيفًا فعلاً؟',
  'How easily could a competitor take the narrative from us?':
    'بأي سهولة يمكن لمنافس أن ينتزع منّا السردية؟',
  'Do the sources that mention the business carry any weight?':
    'هل تحمل المصادر التي تذكر النشاط التجاري أي وزن؟',
  'How much of what the business claims can anyone else confirm?':
    'كم مما يدّعيه النشاط التجاري يمكن لأي جهة أخرى تأكيده؟',
  'When AI cites a source to justify an answer, is any of it yours?':
    'حين يستشهد الذكاء الاصطناعي بمصدر لتبرير إجابة، هل منه شيء يخصّكم؟',
  'Which sources are shaping what AI believes about the business?':
    'أي المصادر تصوغ ما يعتقده الذكاء الاصطناعي عن النشاط التجاري؟',
  'Which trust signals strengthen or weaken recommendation readiness?':
    'أي إشارات الثقة تقوّي جاهزية التوصية أو تضعفها؟',
  'Is the evidence supporting the business ageing?':
    'هل تتقادم الأدلة التي تدعم النشاط التجاري؟',
  'Where does the business disappear during the buyer decision process?':
    'أين يختفي النشاط التجاري خلال عملية اتخاذ قرار المشتري؟',
  'At which point in the buying journey does presence collapse?':
    'عند أي نقطة في رحلة الشراء ينهار الحضور؟',
  'Which specific buying questions complete without the business ever being named?':
    'أي أسئلة الشراء تحديدًا تكتمل دون أن يُذكر النشاط التجاري إطلاقًا؟',
  'How many buying decisions are actually in play?':
    'كم عدد قرارات الشراء المطروحة فعليًا؟',
  'What is one of those decisions worth to the business?':
    'كم يساوي أحد تلك القرارات للنشاط التجاري؟',
  'What is the gap worth, and how confident can we be?':
    'كم تساوي الفجوة، وما مستوى الثقة الذي يمكن بلوغه؟',
  'What has to be true for this estimate to hold?':
    'ما الذي يجب أن يكون صحيحًا كي يصمد هذا التقدير؟',
  'Which of those blind spots are also high value?':
    'أي من تلك النقاط العمياء عالية القيمة أيضًا؟',
  'Which of our genuine advantages does the market never mention?':
    'أي من مزايانا الحقيقية لا يذكره السوق أبدًا؟',
  'How much of the language used to describe this category belongs to the business?':
    'كم من اللغة المستخدمة لوصف هذه الفئة يخصّ النشاط التجاري؟',
  'Whose framing do machines use when they explain the category?':
    'بإطار من تستعين الآلات حين تشرح الفئة؟',
  'Which criteria do machines cite first when explaining a choice?':
    'أي المعايير تذكرها الآلات أولاً عند شرح اختيار؟',
  'Does the market think the business is expensive?':
    'هل يرى السوق أن النشاط التجاري باهظ؟',
  'Is this market forming, forming fast, or already settled?':
    'هل هذا السوق في طور التشكّل، أم يتشكّل بسرعة، أم استقرّ بالفعل؟',
  'Do buyers know enough yet to be worth persuading?':
    'هل يعرف المشترون ما يكفي بعد ليستحقوا الإقناع؟',
  'Which markets are ready to be entered now?': 'أي الأسواق جاهزة للدخول الآن؟',
  'How quickly is the position moving, and in which direction?':
    'بأي سرعة يتحرك الموقع، وفي أي اتجاه؟',
  'Where in the world is the business strong, and where is it absent?':
    'أين في العالم يكون النشاط التجاري قويًا، وأين يغيب؟',
  'Does the business mean the same thing in every market?':
    'هل يعني النشاط التجاري الشيء نفسه في كل سوق؟',
  'Does the business mean something different in each country?':
    'هل يعني النشاط التجاري شيئًا مختلفًا في كل بلد؟',
  'Does the business tell the same story everywhere it appears?':
    'هل يروي النشاط التجاري القصة نفسها في كل مكان يظهر فيه؟',
  'Do partners describe the business the way it describes itself?':
    'هل يصف الشركاء النشاط التجاري كما يصف هو نفسه؟',
  'How much of the market position rests on intermediaries?':
    'كم من الموقع في السوق يقوم على الوسطاء؟',
  'How easily could the business be swapped out of the channel?':
    'بأي سهولة يمكن استبدال النشاط التجاري داخل القناة؟',
  'Can the channel explain why the business costs more?':
    'هل تستطيع القناة تفسير سبب ارتفاع كلفة النشاط التجاري؟',
  'What is the complete management position on risk, opportunity, timing and action?':
    'ما موقف الإدارة الكامل من المخاطر والفرص والتوقيت والإجراء؟',
  'What should the business do, in what order?':
    'ما الذي ينبغي أن يفعله النشاط التجاري، وبأي ترتيب؟',
  'Which intervention returns most, and what is currently blocked?':
    'أي تدخّل يعطي العائد الأكبر، وما المحجوب حاليًا؟',
  'What lands this month, this quarter, and this year?':
    'ما الذي يُنجَز هذا الشهر، وهذا الربع، وهذه السنة؟',
  'How long before an intervention shows up in the numbers?':
    'كم يمضي قبل أن يظهر التدخّل في الأرقام؟',
  'Did the work move the signal it was supposed to move?':
    'هل حرّك العمل الإشارة التي كان يُفترض أن يحرّكها؟',

  /* --- What each module detects, and why it matters commercially ------------------- */
  'An engine that cannot categorise a business cannot recommend it. Entity confusion sits upstream of every visibility metric — content investment cannot move an answer while the underlying record is wrong.':
    'المحرك الذي لا يستطيع تصنيف نشاط تجاري لا يستطيع التوصية به. والخلط في الكيان يقع في مرحلة سابقة لكل مقياس ظهور — فالاستثمار في المحتوى لا يحرّك إجابة ما دام السجل الأساسي خاطئًا.',
  'Name collisions, merged records and mistaken identities — a single unresolved conflation can remove a business from every answer in its category.':
    'تشابه الأسماء والسجلات المدمجة والهويات الخاطئة — خلطٌ واحد دون حسم قادر على إخراج نشاط تجاري من كل إجابة في فئته.',
  'Discontinued lines, closed locations, former ownership and superseded positioning still being repeated to buyers as current fact.':
    'خطوط منتجات أُوقفت، ومواقع أُغلقت، وملكية سابقة، وتموضع تجاوزه الزمن — كلها ما زالت تُكرَّر للمشترين كحقيقة راهنة.',
  'Recognition erodes when competitors keep publishing and you stop. Decay is measurable for months before it shows up as absence.':
    'يتآكل التعرّف حين يواصل المنافسون النشر وتتوقفون أنتم. والتآكل قابل للقياس شهورًا قبل أن يظهر على شكل غياب.',
  'Entity understanding and recommendation presence are separate measures. An engine can resolve the business correctly and still never put it forward — recognition is necessary for a recommendation, not sufficient.':
    'فهم الكيان والحضور في التوصيات مقياسان منفصلان. فقد يحيل المحرك إلى النشاط التجاري بشكل صحيح ومع ذلك لا يقدّمه أبدًا — فالتعرّف شرط لازم للتوصية لا كافٍ.',
  'Coverage measured against real buying questions rather than keywords — the difference between being findable and being present.':
    'تغطية تُقاس مقابل أسئلة شراء حقيقية لا مقابل كلمات مفتاحية — الفرق بين أن تكون قابلاً للعثور عليكم وأن تكون حاضرًا.',
  'A market-share figure for a market nobody is currently measuring — recommendations issued, not clicks received.':
    'رقم حصة سوقية لسوق لا يقيسه أحد حاليًا — توصيات صدرت، لا نقرات وردت.',
  'A business ranking in Google can still be absent from every AI answer that decides the vendor. The reverse is equally common. Each surface is a separate commercial asset, and channel asymmetry is invisible to both SEO and analytics tooling.':
    'النشاط التجاري المتصدّر في Google قد يظل غائبًا عن كل إجابة ذكاء اصطناعي تحسم المورّد. والعكس شائع بالقدر نفسه. فكل واجهة أصل تجاري مستقل، وعدم التماثل بين القنوات غير مرئي لأدوات SEO ولا لأدوات التحليلات.',
  'Businesses that dominate one surface and disappear on the other — a divergence that stays invisible while each channel is reported separately.':
    'أنشطة تجارية تهيمن على واجهة وتختفي من الأخرى — تباعد يبقى غير مرئي ما دامت كل قناة تُقاس على حدة.',
  'The most expensive class of gap — absent from both surfaces on a question that carries real volume and real intent.':
    'أغلى أصناف الفجوات — غياب عن الواجهتين معًا في سؤال يحمل حجمًا حقيقيًا ونيّة حقيقية.',
  'The cheapest wins available: questions where you have already done the work and only the machine-readable form of it is missing.':
    'أرخص المكاسب المتاحة: أسئلة أنجزتم العمل الخاص بها بالفعل ولا ينقص إلا صيغته المقروءة آليًا.',
  'Cost per click weighted by the questions that decide purchases, rather than averaged across an account that includes cheap, irrelevant traffic.':
    'تكلفة النقرة مرجّحة بالأسئلة التي تحسم عمليات الشراء، بدل حساب متوسط على حساب يضم زيارات رخيصة وغير ذات صلة.',
  'A computed ceiling from deal value, margin and conversion — the number most advertising accounts are managed without ever calculating.':
    'سقف محسوب من قيمة الصفقة والهامش ومعدل التحويل — الرقم الذي تُدار معظم حسابات الإعلانات دون احتسابه قط.',
  'A costed switch list — which spend can be retired, what has to be published first, and how long the replacement takes to hold.':
    'قائمة إحلال مُسعَّرة — أي إنفاق يمكن إيقافه، وما الذي يجب نشره أولاً، وكم يستغرق البديل حتى يثبت.',
  'Competitive density expressed as a price trend, so the structural cost of staying still becomes visible before the budget review.':
    'الكثافة التنافسية معبَّرًا عنها كاتجاه سعري، بحيث تصبح الكلفة البنيوية للبقاء دون حراك مرئية قبل مراجعة الميزانية.',
  'Whether paid is buying growth or renting positions that authority would otherwise hold for free.':
    'هل يشتري الإنفاق المدفوع نموًا أم يستأجر مواقع كانت المرجعية ستحتفظ بها مجانًا.',
  'Knowing a competitor wins is not actionable. Knowing which evidence engines cite when they recommend that competitor is. This separates brand preference from an evidence gap you can close.':
    'معرفة أن منافسًا يفوز ليست معلومة قابلة للتنفيذ. أما معرفة الأدلة التي تستشهد بها المحركات حين توصي بذلك المنافس فهي كذلك. وهذا يفصل تفضيل العلامة التجارية عن فجوة أدلة يمكن سدّها.',
  'The individual assets a machine reaches for when it justifies choosing them — publications, comparisons, specifications, verified outcomes.':
    'الأصول المفردة التي تلجأ إليها الآلة حين تبرّر اختيارهم — منشورات ومقارنات ومواصفات ونتائج متحقَّق منها.',
  'Structured comparison of the evidence each competitor supplies to engines, and what it would take to match it. Converts a share gap into a specific, costed evidence programme.':
    'مقارنة منظّمة للأدلة التي يقدّمها كل منافس للمحركات، وما يلزم لمجاراتها. تحوّل فجوة الحصة إلى برنامج أدلة محدّد ومُسعَّر.',
  'The questions a dominant rival does not answer, does not cover, or answers badly — the cheapest available places to take share.':
    'الأسئلة التي لا يجيب عنها منافس مهيمن، أو لا يغطيها، أو يجيب عنها بشكل سيئ — أرخص المواضع المتاحة لانتزاع حصة.',
  'The share of visibility owned by partners rather than by the business, which is the share that leaves if the relationship ends.':
    'حصة الظهور التي يملكها الشركاء لا النشاط التجاري — وهي الحصة التي تذهب إذا انتهت العلاقة.',
  'Visibility creates attention; trust creates selection. A business can be found and still be filtered out when an engine has to stand behind naming it first.':
    'الظهور يصنع الانتباه؛ والثقة تصنع الاختيار. فقد يُعثَر على نشاط تجاري ومع ذلك يُستبعَد حين يتعيّن على المحرك أن يتحمّل مسؤولية ذكره أولاً.',
  'A countable ratio of independent sources, which turns an abstract brand gap into a publishing programme with a known scope and cost.':
    'نسبة قابلة للعدّ من المصادر المستقلة، تحوّل فجوة علامة تجارية مجرّدة إلى برنامج نشر بنطاق وكلفة معلومين.',
  'Being mentioned and being cited are different commercial positions. Only one of them survives into the next answer the system gives.':
    'أن تُذكَر وأن يُستشهد بك موقعان تجاريان مختلفان. وواحد منهما فقط يصمد إلى الإجابة التالية التي يقدّمها النظام.',
  'The small set of pages that disproportionately determine every answer given — frequently including a directory nobody at the company knows exists.':
    'المجموعة الصغيرة من الصفحات التي تحدّد على نحو غير متناسب كل إجابة تُعطى — وكثيرًا ما تضم دليلاً لا يعرف أحد في الشركة بوجوده.',
  'Proof has a shelf life. Case studies, coverage and reviews lose weight with age, and the decline is measurable before selection stops.':
    'للإثبات مدة صلاحية. فدراسات الحالة والتغطية والتقييمات تفقد وزنها مع الزمن، والتراجع قابل للقياس قبل أن يتوقف الاختيار.',
  'Most businesses lose the decision at one specific stage, not evenly across the journey. Locating that stage tells you where intervention returns most, and where further investment returns nothing.':
    'معظم الأنشطة التجارية تخسر القرار في مرحلة واحدة بعينها، لا بالتساوي على امتداد الرحلة. وتحديد تلك المرحلة يبيّن أين يعطي التدخّل أكبر عائد، وأين لا يعطي الاستثمار الإضافي شيئًا.',
  'Losses concentrate at one stage rather than spreading evenly. Locating that stage tells you where intervention returns, and where it returns nothing.':
    'تتركّز الخسائر في مرحلة واحدة بدل أن تتوزّع بالتساوي. وتحديد تلك المرحلة يبيّن أين يعطي التدخّل عائدًا، وأين لا يعطي شيئًا.',
  'The exact questions where a decision was made and the business was not in the room. These are not lost leads; no lead was ever created.':
    'الأسئلة المحدّدة التي اتُّخذ فيها قرار ولم يكن النشاط التجاري حاضرًا. هذه ليست فرصًا ضائعة؛ فلم تُنشأ فرصة أصلاً.',
  'Questions where the decision happens entirely without you, and where no channel measurement can show it, because nothing ever reached a channel.':
    'أسئلة يقع فيها القرار بالكامل دونكم، ولا يستطيع أي قياس قناة إظهار ذلك، لأن شيئًا لم يبلغ قناةً أصلاً.',
  'Presence averaged across all questions hides the collapse that matters. What decides revenue is presence at the supplier-evaluation stage, and that figure is usually far lower than the headline.':
    'الحضور المحسوب كمتوسط عبر كل الأسئلة يخفي الانهيار الذي يهم. فما يحسم الإيراد هو الحضور في مرحلة تقييم المورّدين، وذلك الرقم أدنى بكثير عادةً من الرقم المعلن.',
  'The size of the decision market itself, counted in decisions rather than in searches, sessions or impressions.':
    'حجم سوق القرارات نفسه، محسوبًا بالقرارات لا بعمليات البحث أو الجلسات أو الظهور.',
  'Value per decision by stage and question type, so a high-volume gap is not automatically ranked above a low-volume, high-value one.':
    'القيمة لكل قرار بحسب المرحلة ونوع السؤال، حتى لا تُرتَّب فجوة عالية الحجم تلقائيًا فوق فجوة منخفضة الحجم عالية القيمة.',
  'A directional range with its confidence stated — never a single confident figure, and never described as confirmed lost revenue.':
    'نطاق تقديري مع بيان مستوى الثقة فيه — لا رقمًا واحدًا قاطعًا أبدًا، ولا يوصف قط بأنه إيراد ضائع مؤكَّد.',
  'Every assumption behind an exposure figure, stated and editable — because a number whose assumptions are hidden cannot be argued with or trusted.':
    'كل افتراض خلف رقم الخسارة، معلَن وقابل للتعديل — لأن رقمًا تُخفى افتراضاته لا يمكن مناقشته ولا الوثوق به.',
  'Real differentiators that never appear in any category description — strengths the market currently has no vocabulary to express.':
    'عوامل تمييز حقيقية لا تظهر في أي وصف للفئة — نقاط قوة لا يملك السوق حاليًا مفردات للتعبير عنها.',
  'Whether buyers are evaluating against criteria a competitor published, which quietly decides the outcome before anyone is compared.':
    'هل يقيّم المشترون وفق معايير نشرها منافس، وهو ما يحسم النتيجة بهدوء قبل أن تجري أي مقارنة.',
  'Where the business sits on a price spectrum in the eyes of machines describing it — an assumption that shapes shortlists before any quote is sent.':
    'أين يقع النشاط التجاري على سلّم الأسعار في نظر الآلات التي تصفه — افتراض يصوغ القوائم المختصرة قبل إرسال أي عرض سعر.',
  'Demand maturity and competitive density per market, so expansion is sequenced by readiness rather than by proximity or preference.':
    'نضج الطلب والكثافة التنافسية لكل سوق، بحيث يُرتَّب التوسّع بحسب الجاهزية لا بحسب القرب أو التفضيل.',
  'Rate of change rather than a snapshot, so a strong position that is deteriorating is not mistaken for a safe one.':
    'معدل التغيّر لا لقطة ثابتة، حتى لا يُخلَط بين موقع قوي آخذ في التدهور وموقع آمن.',
  'Position measured market by market, which routinely contradicts the single global figure a company believes it has.':
    'موقع يُقاس سوقًا بسوق، وهو ما يناقض بصورة روتينية الرقم العالمي الواحد الذي تظن الشركة أنها تملكه.',
  'How category, positioning and reputation change across borders, including markets where the business is understood as a different kind of company entirely.':
    'كيف تتغيّر الفئة والتموضع والسمعة عبر الحدود، بما في ذلك أسواق يُفهم فيها النشاط التجاري على أنه نوع مختلف تمامًا من الشركات.',
  'Where positioning drifts by geography or language, so a business is a category leader in one market and an unknown in the next.':
    'أين ينحرف التموضع بحسب الجغرافيا أو اللغة، فيكون النشاط التجاري متصدّر الفئة في سوق ومجهولاً في السوق التالي.',
  'Where a channel partner’s description of your product is what machines have learned — and where that description is wrong.':
    'أين يكون وصف شريك القناة لمنتجكم هو ما تعلّمته الآلات — وأين يكون ذلك الوصف خاطئًا.',
  'Whether the brand is specified by name or treated as an interchangeable supplier — usually the more expensive answer of the two.':
    'هل تُحدَّد العلامة التجارية بالاسم أم تُعامَل كمورّد قابل للاستبدال — وهو عادةً الجواب الأغلى بين الاثنين.',
  'Whether the reasons for a premium survive the trip through distribution, or arrive at the buyer as an unexplained higher number.':
    'هل تصمد أسباب السعر الأعلى في رحلتها عبر التوزيع، أم تصل إلى المشتري كرقم أكبر بلا تفسير.',
  'A board-ready position rather than a dashboard. States what is happening, what it means commercially, what the directional exposure is, how long the window stays open, and what must change — with owners and deadlines.':
    'موقف جاهز لمجلس الإدارة لا لوحة مؤشرات. يبيّن ما يحدث، وما يعنيه تجاريًا، وما حجم الخسارة التقديرية، وكم تبقى النافذة مفتوحة، وما الذي يجب أن يتغيّر — مع المالكين والمواعيد النهائية.',
  'Ranked by exposure, confidence, urgency, effort and competitor pressure.':
    'مرتّبة حسب الخسارة والثقة والإلحاح والجهد وضغط المنافسين.',
  'The lag between doing the work and seeing the movement, which is what stops a working programme from being cancelled a month too early.':
    'الفارق الزمني بين إنجاز العمل ورؤية الحركة، وهو ما يمنع إلغاء برنامج ناجح قبل أوانه بشهر.',
  'Measured change against the predicted change, including the interventions that did not work — which is the only way the model earns trust.':
    'التغيّر المقاس مقابل التغيّر المتوقع، بما في ذلك التدخّلات التي لم تنجح — وهي الطريقة الوحيدة التي يكتسب بها النموذج الثقة.',
  'Corroborated claims reduce the risk an engine takes in naming a supplier first.':
    'الادّعاءات المؤيَّدة تقلّل المخاطرة التي يتحمّلها المحرك حين يذكر مورّدًا أولاً.',

  /* --- Readout labels and competitor findings -------------------------------------- */
  'Category description': 'وصف الفئة',
  'Category resolved': 'الفئة مُحدَّدة',
  'Confusion and conflation': 'الخلط والالتباس',
  'Recommendation share and momentum': 'حصة التوصيات والزخم',
  'Recommendation share by stage': 'حصة التوصيات بحسب المرحلة',
  'Recommendation share across 24 decision questions':
    'حصة التوصيات عبر 24 سؤال قرار',
  'Mentions and citations': 'الإشارات والاستشهادات',
  'Social proof quality': 'جودة الدليل الاجتماعي',
  'Source advantage analysis': 'تحليل أفضلية المصادر',
  'Authority driver comparison': 'مقارنة محرّكات المرجعية',
  'Competitor vulnerability': 'مواطن ضعف المنافس',
  'Competitor control per stage': 'سيطرة المنافسين بحسب المرحلة',
  'Competitive threat': 'تهديد تنافسي',
  'Default vendor threat': 'تهديد المورّد الافتراضي',
  'Why the competitor wins': 'لماذا يفوز المنافس',
  'Why they win': 'لماذا يفوزون',
  'Winning questions': 'الأسئلة الرابحة',
  'Missed decision questions': 'أسئلة القرار الفائتة',
  'Gap classification per commercial question': 'تصنيف الفجوة لكل سؤال تجاري',
  'Question-to-stage mapping': 'ربط السؤال بالمرحلة',
  'Stage-by-stage coverage': 'التغطية مرحلةً بمرحلة',
  'The stage where presence collapses': 'المرحلة التي ينهار فيها الحضور',
  'Strongest stage': 'أقوى مرحلة',
  'Decision-journey position': 'الموقع في رحلة القرار',
  'Revenue concentration by stage': 'تركّز الإيراد بحسب المرحلة',
  'Revenue split by decision stage': 'توزيع الإيراد بحسب مرحلة القرار',
  'Directional revenue exposure': 'خسارة الإيراد التقديرية',
  'Paid dependency exposure': 'التعرّض للاعتماد على المدفوع',
  'Strategic blind spots': 'نقاط عمياء استراتيجية',
  'Strategic timing window': 'نافذة التوقيت الاستراتيجي',
  'Market and language': 'السوق واللغة',
  'What it believes': 'بماذا يعتقد',
  'Recommendation presence': 'الحضور في التوصيات',
  Unattributed: 'غير منسوب',
  'Not resolved': 'غير محدَّد',
  Resolved: 'محدَّد',
  'Never recommends': 'لا يوصي أبدًا',
  'Independent authority evidence — the constraint holding every downstream signal.':
    'أدلة مرجعية مستقلة — القيد الذي يحكم كل إشارة لاحقة.',
  'Classified as a hardware retailer, not an MRO distributor.':
    'مصنَّف كمتجر أدوات بالتجزئة، لا كموزّع صيانة وتشغيل.',
  'Conflated with a same-named logistics firm.':
    'مخلوط بشركة لوجستيات تحمل الاسم نفسه.',
  'No stable entity record. Category answered without naming any Midwest distributor.':
    'لا سجل كيان مستقر. أُجيب عن الفئة دون ذكر أي موزّع في وسط الغرب.',
  'No AI engine names Northwind in nineteen of the twenty-four tracked decision questions.':
    'لا يذكر أي محرك ذكاء اصطناعي Northwind في تسعة عشر من أصل أربعة وعشرين سؤال قرار متابَعًا.',
  'Named in seventeen of the nineteen questions where Northwind is absent.':
    'مذكور في سبعة عشر من التسعة عشر سؤالاً التي تغيب عنها Northwind.',
  'Kestrel named first in four of seven questions.':
    'Kestrel تُذكر أولاً في أربعة من سبعة أسئلة.',
  'Receives the recommendation in 31% of decisions and controls the supplier-evaluation stage.':
    'تتلقّى التوصية في 31% من القرارات وتسيطر على مرحلة تقييم المورّدين.',
  'Leads on the two most heavily weighted vectors.':
    'تتصدّر في المتجهين الأعلى وزنًا.',
  'Authority and Visibility are where its investment has concentrated.':
    'المرجعية والظهور هما محورا تركّز استثمارها.',
  'Independent validation lets engines recommend it without hedging.':
    'التحقق المستقل يتيح للمحركات التوصية بها دون تحفّظ.',
  'Advantage compounds in the absence of a response.':
    'تتراكم الأفضلية في غياب أي رد.',
  'Holds position while no counter-intervention is running.':
    'تحافظ على موقعها ما دام لا يجري أي تدخّل مضاد.',
  'Meridian publishes specification guidance that engines treat as category-defining language.':
    'تنشر Meridian إرشادات مواصفات تعاملها المحركات كلغة تعرّف الفئة.',
  'Atlas is named on procurement checklists that engines cite at the point of purchase.':
    'Atlas مذكورة في قوائم تدقيق المشتريات التي تستشهد بها المحركات عند نقطة الشراء.',
  'Two of six interventions are low effort with measurable movement inside 60 days.':
    'اثنان من ستة تدخّلات منخفضا الجهد مع حركة قابلة للقياس خلال 60 يومًا.',
  'Kestrel Industrial 31%. Meridian Supply Co 18%. Halvorsen Industrial 11%. Atlas Trade Group 7%. Northwind Supply 4.2%. Unattributed 28.8%':
    'Kestrel Industrial 31%. Meridian Supply Co 18%. Halvorsen Industrial 11%. Atlas Trade Group 7%. Northwind Supply 4.2%. غير منسوب 28.8%',
  'Not in top 100 organic. No AI recommendation. 320 searches per month.':
    'ليس ضمن أول 100 نتيجة عضوية. لا توصية من الذكاء الاصطناعي. 320 عملية بحث شهريًا.',
  'Position 1 organic, AI present. Volume 40 per month.':
    'المركز 1 عضويًا، وحضور في الذكاء الاصطناعي. حجم 40 شهريًا.',
  'Position 3 and recommended — the pattern that works.':
    'المركز 3 ومُوصى به — النمط الذي ينجح.',

  /* --- Tracked commercial keywords. Translated on the same reasoning as the
         home page's search queries — see the note beside those. ------------------- */
  'anchor bolts supplier': 'مورّد مسامير تثبيت',
  'fastener catalog request': 'طلب كتالوج مثبّتات',
  'fastener sourcing best practices': 'أفضل ممارسات توريد المثبّتات',
  'industrial distributor fill rate': 'معدل تلبية الطلبات لدى موزّع صناعي',
  'industrial supply account setup': 'فتح حساب توريد صناعي',
  'industrial supply near me': 'توريد صناعي قريب مني',
  'maintenance repair operations supplier': 'مورّد صيانة وإصلاح وتشغيل',
  'mro consolidation vendor': 'مورّد لدمج الصيانة والتشغيل',
  'mro supply agreement': 'اتفاقية توريد صيانة وتشغيل',
  'plant maintenance supplies': 'مستلزمات صيانة المصانع',
  'same day fastener shipping': 'شحن مثبّتات في اليوم نفسه',
  'stainless steel fasteners supplier': 'مورّد مثبّتات من الفولاذ المقاوم للصدأ',
}
