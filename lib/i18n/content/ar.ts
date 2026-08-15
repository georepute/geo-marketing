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
    'قرارات تجارية تكتمل دون أن يُذكر نشاطك التجاري إطلاقًا.',
  'No lead was lost, because no lead was ever created. Conventional measurement recorded nothing.':
    'لم يُفقد أي عميل محتمل، لأنه لم يُنشأ أصلًا. القياس التقليدي لم يسجّل شيئًا.',
  'presence at the stage where the supplier is actually chosen.':
    'حضور في المرحلة التي يُختار فيها المورّد فعليًا.',
  'That stage carries {volume} of the query volume and decides {revenue} of the revenue. Volume-ranked tooling calls it unimportant.':
    'تحمل هذه المرحلة {volume} من حجم الاستعلامات وتحسم {revenue} من الإيرادات. والأدوات التي ترتّب حسب الحجم تعدّها غير مهمة.',
  'more independent evidence supports the competitor engines recommend instead.':
    'أضعاف من الأدلة المستقلة تدعم المنافس الذي توصي به المحرّكات بدلًا منك.',
  'Not a brand-preference gap. An evidence gap, and evidence can be commissioned.':
    'ليست فجوة في تفضيل العلامة التجارية، بل فجوة في الأدلة — والأدلة يمكن التكليف بإنتاجها.',

  /* --- Q1 · Does AI know your business? --------------------------------- */
  'Entity understanding': 'فهم الكيان',
  'AI systems understand what your business is in {score} of 100 commercial evaluations. One engine holds no stable record of you at all.':
    'تفهم أنظمة الذكاء الاصطناعي ماهية نشاطك التجاري في {score} من كل 100 تقييم تجاري. وأحد المحرّكات لا يحتفظ بسجل ثابت عنك على الإطلاق.',
  'A system that cannot categorise a business cannot recommend it. This sits upstream of every other measure on this page.':
    'النظام الذي لا يستطيع تصنيف نشاط تجاري لا يستطيع التوصية به. وهذا يسبق كل مقياس آخر في هذه الصفحة.',
  'Content and advertising investment cannot move an answer while the underlying record is wrong. Spend on either is spend against a locked door.':
    'لا يمكن للاستثمار في المحتوى أو الإعلانات أن يغيّر إجابة بينما السجل الأساسي خاطئ. الإنفاق على أي منهما إنفاق أمام باب موصد.',
  'Highest-risk engine': 'المحرّك الأعلى خطورة',
  '{engine} understands your business at {score} of 100 and names it in none of the tracked decisions.':
    'يفهم {engine} نشاطك التجاري بمستوى {score} من 100 ولا يذكره في أي من القرارات المرصودة.',
  'Recognition is not uniform across AI systems, and buyers do not all use the same one. A single weak engine removes your business from every decision made through it.':
    'التعرّف ليس متماثلًا بين أنظمة الذكاء الاصطناعي، والمشترون لا يستخدمون النظام نفسه. محرّك ضعيف واحد يُخرج نشاطك من كل قرار يمر عبره.',
  'Every buyer who asks this engine receives a supplier shortlist your business is structurally absent from — and no measurement you own records that it happened.':
    'كل مشترٍ يسأل هذا المحرّك يتلقى قائمة مورّدين مختصرة يغيب عنها نشاطك بنيويًا — ولا يسجّل أي قياس تملكه أن ذلك حدث.',
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
    'المنافس الذي يُذكر هنا يتلقى الاستفسار. نشاطك التجاري لا يُقارن ثم يُرفض — بل لا يُقارن أصلًا.',
  'Blind-spot questions': 'أسئلة النقاط العمياء',
  '{n} commercial questions return no AI recommendation and no Google position in the top ten. The decision happens on neither surface.':
    '{n} سؤالًا تجاريًا لا تُعيد أي توصية من الذكاء الاصطناعي ولا أي ترتيب في العشرة الأوائل على جوجل. القرار لا يحدث على أي من السطحين.',
  'Google rank and AI recommendation are separate commercial assets. Strength in one does not carry into the other.':
    'الترتيب في جوجل وتوصية الذكاء الاصطناعي أصلان تجاريان منفصلان. القوة في أحدهما لا تنتقل إلى الآخر.',
  'These questions are currently reachable only by buying the click — which is why paid cost rises while organic position stays flat.':
    'لا يمكن الوصول إلى هذه الأسئلة حاليًا إلا بشراء النقرة — ولهذا ترتفع التكلفة المدفوعة بينما يبقى الترتيب العضوي ثابتًا.',
  'Supplier evaluation carries {volume} of the query volume and decides {revenue} of the revenue. Ranking work by volume puts it last.':
    'يحمل تقييم المورّدين {volume} من حجم الاستعلامات ويحسم {revenue} من الإيرادات. وترتيب العمل حسب الحجم يضعه في المرتبة الأخيرة.',

  /* --- Q3 · Why is the competitor recommended? --------------------------- */
  '{competitor} can be verified through {theirs} independent sources. Your business can be verified through {ours}.':
    'يمكن التحقق من {competitor} عبر {theirs} مصدرًا مستقلًا. أما نشاطك التجاري فيمكن التحقق منه عبر {ours}.',
  'Share of recommendations is the symptom. The cause is what a system can cite when it has to justify naming one supplier ahead of another.':
    'حصة التوصيات هي العَرَض. أما السبب فهو ما يستطيع النظام الاستشهاد به حين يُطلب منه تبرير تقديم مورّد على آخر.',
  'Receives the decision': 'يتلقى القرار',
  'Your business': 'نشاطك التجاري',
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
  'Open the full intervention plan': 'افتح خطة التدخل الكاملة',
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
  'Open the full executive position': 'افتح الموقع التنفيذي الكامل',

  /* --- Run it on your own business --------------------------------------- */
  'Enter a domain and one signal is released immediately. The rest of the position requires an account or a purchase — and the locked panels state exactly what sits behind them.':
    'أدخل نطاقًا وتُفتح إشارة واحدة فورًا. أما بقية الموقع فتتطلب حسابًا أو عملية شراء — واللوحات المقفلة تذكر بدقة ما يقف خلفها.',
  'Your domain': 'نطاقك',
  'Run instant preview': 'شغّل المعاينة الفورية',
  'Re-run preview': 'أعد تشغيل المعاينة',
  'Seeded demonstration. This environment always reconstructs Northwind Supply, an industrial distributor, so every figure stays verifiable.':
    'عرض توضيحي ببيانات أولية. تعيد هذه البيئة دائمًا بناء حالة Northwind Supply، وهو موزّع صناعي، بحيث يبقى كل رقم قابلًا للتحقق.',
  'AI recognition': 'التعرّف عبر الذكاء الاصطناعي',
  'Best Google position': 'أفضل ترتيب على جوجل',
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
  'Unlock full intelligence': 'افتح الذكاء الكامل',
  'Buy a single answer': 'اشترِ إجابة واحدة',
  'See a single answer': 'اطّلع على إجابة واحدة',

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
  'See how AI decides about you': 'اطّلع على كيفية اتخاذ الذكاء الاصطناعي قراره بشأنك',
  'Every figure on this page is computed from {n} tracked commercial decisions across six AI engines.':
    'كل رقم في هذه الصفحة محسوب من {n} قرارًا تجاريًا مرصودًا عبر ستة محرّكات ذكاء اصطناعي.',
  'See the methodology': 'اطّلع على المنهجية',

  /* --- Hero · trust strip and the reconstruction ------------------------- */
  'Six AI engines observed': 'ستة محرّكات ذكاء اصطناعي مرصودة',
  '24 commercial decisions tracked': '24 قرارًا تجاريًا مرصودًا',
  'Evidence on every claim': 'أدلة على كل ادّعاء',
  'Confidence and limits stated': 'درجة الثقة والحدود معلنة',
  'A buyer asks AI': 'مشترٍ يسأل الذكاء الاصطناعي',
  'AI looks for proof it can cite': 'الذكاء الاصطناعي يبحث عن دليل يمكنه الاستشهاد به',
  'Independent sources an engine can cite when it recommends a supplier. Your own website does not count — engines treat self-description as a claim, not as evidence.':
    'مصادر مستقلة يستطيع المحرّك الاستشهاد بها حين يوصي بمورّد. موقعك الإلكتروني لا يُحتسب — فالمحرّكات تعامل الوصف الذاتي كادّعاء لا كدليل.',
  'So AI recommends': 'ولذلك يوصي الذكاء الاصطناعي بـ',
  'Your business was named by <b>{named} of {total}</b> engines. Not because the offer is weaker — because <b>{theirs} sources outrank {ours}</b> when a system has to stand behind an answer.':
    'ذُكر نشاطك التجاري من قِبل <b>{named} من {total}</b> محرّكات. ليس لأن العرض أضعف — بل لأن <b>{theirs} مصدرًا تتفوق على {ours}</b> حين يضطر نظام إلى الوقوف خلف إجابة.',
  'What changes the answer': 'ما الذي يغيّر الإجابة',
  '{n} sources': '{n} مصادر',
  '{name}: {n} independent sources': '{name}: {n} مصدرًا مستقلًا',
  'A reconstruction of one AI buying decision: the question a buyer asked, the {theirs} independent sources supporting {winner} against {ours} supporting your business — a {advantage}× evidence advantage — the resulting recommendation, and the intervention that changes it.':
    'إعادة بناء لقرار شراء واحد مدفوع بالذكاء الاصطناعي: السؤال الذي طرحه المشتري، و{theirs} مصدرًا مستقلًا تدعم {winner} مقابل {ours} تدعم نشاطك التجاري — أفضلية أدلة بمقدار {advantage} أضعاف — والتوصية الناتجة عن ذلك، والتدخل الذي يغيّرها.',

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
    'مرتّب على جوجل لكنه غائب عن إجابات الذكاء الاصطناعي. الحُجّية القائمة لا تصل إلى سطح الذكاء الاصطناعي.',
  Aligned: 'متوافق',
  'Visible in Google and recommended by AI. No action required.':
    'مرئي على جوجل وموصى به من الذكاء الاصطناعي. لا يتطلب أي إجراء.',
  'of {total}': 'من {total}',
  'Commercial question': 'سؤال تجاري',
  Volume: 'الحجم',
  'Google visibility': 'الظهور على جوجل',
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
    'مرّر المؤشر فوق عقدة أو ركّز عليها لعزل علاقاتها. اختر أي عقدة لفتح الأدلة التي تقف خلفها.',
  'Read the graph as a table': 'اقرأ الرسم البياني كجدول',
  Signal: 'إشارة',
  Value: 'القيمة',
  'Leads to': 'يؤدي إلى',
  Evidence: 'الأدلة',

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
    'ترصد هذه البيئة <b>{questions}</b> سؤال قرار عبر ستة محرّكات ذكاء اصطناعي، و<b>{keywords}</b> كلمة مفتاحية تجارية في جوجل.',
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
  'Open Mission Control': 'افتح مركز القيادة',
  'See the engines': 'اطّلع على المحرّكات',

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
    'من يتلقى القرار بدلًا منك، وماذا لديه؟',
  'What must happen next, by whom and by when?':
    'ما الذي يجب أن يحدث تاليًا، وعلى يد من، وبحلول متى؟',
  'Where do competitors receive the decision before the business receives the lead?':
    'أين يتلقى المنافسون القرار قبل أن يتلقى النشاط التجاري العميل المحتمل؟',
  'Do AI engines understand who the business is and when it should be considered?':
    'هل تفهم محرّكات الذكاء الاصطناعي هوية النشاط التجاري ومتى ينبغي أخذه في الاعتبار؟',
  'Does the business exist consistently across traditional search and AI-mediated discovery?':
    'هل يوجد النشاط التجاري باتساق عبر البحث التقليدي والاكتشاف بوساطة الذكاء الاصطناعي؟',
  'Whose language does the market use to describe your category?':
    'بلغة مَن يصف السوق فئتك؟',
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
    'ابنِ محتوى لمقارنة المورّدين يستهدف أسئلة القرار الستة الفائتة الأعلى حجمًا.',
  'Strengthen independent authority evidence and supplier-comparison coverage.':
    'عزّز أدلة الحُجّية المستقلة وتغطية مقارنة المورّدين.',
  'Resolve the Gemini entity conflation with the same-named logistics firm.':
    'عالج خلط Gemini بين الكيان وشركة الخدمات اللوجستية التي تحمل الاسم نفسه.',
  'Reallocate paid spend from keywords with a viable organic replacement path.':
    'أعد توزيع الإنفاق المدفوع بعيدًا عن الكلمات المفتاحية التي لها مسار بديل عضوي قابل للتطبيق.',
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
  Open: 'افتح',

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
    'أعد حساب المؤشر من متجهات GEON المعاد رصدها شهريًا. والترجيح منشور وموثّق بالإصدارات.',

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
    'انشر وصفًا مرجعيًا واحدًا للكيان وعمّم لغة الفئة نفسها على الأدلة التجارية والبيانات المهيكلة.',
  'Publish a canonical entity description and propagate identical category language to trade directories and structured data.':
    'انشر وصفًا مرجعيًا للكيان وعمّم لغة الفئة نفسها على الأدلة التجارية والبيانات المهيكلة.',
  'Publish a canonical entity description and propagate identical…':
    'انشر وصفًا مرجعيًا للكيان وعمّم لغة الفئة نفسها…',
  'Re-observe entity understanding per engine. Success is category association correct on five of six engines.':
    'أعد رصد فهم الكيان لكل محرّك. والنجاح هو ارتباط الفئة الصحيح لدى خمسة من ستة محرّكات.',
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
    'أعد تشغيل الأسئلة الأربعة والعشرين شهريًا عبر المحرّكات الستة جميعها؛ وسجّل الحضور لكل محرّك ولكل سؤال.',
  'Re-run the supplier-evaluation prompt set monthly. Coverage is verified by recommendation slots won across all six engines, not by traffic.':
    'أعد تشغيل مجموعة استفسارات تقييم المورّدين شهريًا. وتُتحقق التغطية بخانات التوصية المكتسبة عبر المحرّكات الستة، لا بالزيارات.',
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
    'انشر مرجعًا مستقلًا وقابلًا للتحقق لمقارنة المورّدين، واحصل على توثيق من طرف ثالث في منشورتين تجاريتين على الأقل.',
  'Secure independent validation: trade-publication contribution, verifiable customer outcomes and third-party specification references.':
    'احصل على توثيق مستقل: مساهمة في منشورات تجارية، ونتائج عملاء قابلة للتحقق، ومراجع مواصفات من أطراف ثالثة.',
  'Independent source count re-observed monthly, with each new source recorded by publication and date.':
    'يُعاد رصد عدد المصادر المستقلة شهريًا، مع تسجيل كل مصدر جديد بالمنشورة والتاريخ.',
  'Build supplier-comparison content against the eleven compound and strategic blind-spot questions, structured so it is both rankable and citable.':
    'ابنِ محتوى لمقارنة المورّدين يستهدف الأسئلة الإحدى عشرة ذات النقاط العمياء المركّبة والاستراتيجية، ومهيكلًا بحيث يكون قابلًا للترتيب وللاستشهاد معًا.',

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
  'Competitor Decision Intelligence': 'ذكاء قرار المنافسين',
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
    'ليس من يتفوق عليك في الترتيب — بل من يُوصى به حين يسأل مشترٍ آلةً عمّن يختار. والمخرَج المفيد ليس رقم الحصة أبدًا، بل الدليل المحدد الذي يوفّره منافس ولا توفّره أنت، لأن هذا هو الجزء الذي يمكنك الذهاب وسدّه.',
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
    'انشر إطار تقييم يجعل زمن الاستجابة الإقليمي معيار اختيار من الدرجة الأولى.',
  'Publish a defensible evaluation framework that makes regional response time a first-class selection criterion.':
    'انشر إطار تقييم قابلًا للدفاع عنه يجعل زمن الاستجابة الإقليمي معيار اختيار من الدرجة الأولى.',

  /* --- Google vs AI --------------------------------------------------------- */
  'Google vs AI Visibility Intelligence': 'ذكاء الظهور: جوجل مقابل الذكاء الاصطناعي',
  'Google position': 'الترتيب على جوجل',
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
    'الترتيب على جوجل وتوصية الذكاء الاصطناعي أصلان تجاريان منفصلان. تتصدر Northwind الترتيب في إعداد الحساب — وهو سؤال لا يُطرح إلا بعد اختيار المورّد — وتغيب عن كل سؤال يحسم هوية ذلك المورّد.',
  'The same question asked of both surfaces, so the two results can finally be compared line by line instead of by anecdote.':
    'السؤال نفسه يُطرح على السطحين، بحيث يمكن أخيرًا مقارنة النتيجتين سطرًا بسطر بدلًا من المقارنة بالحكايات.',
  'Every gap sorted into a named class with a different remedy and a different cost. Not all absence is the same problem.':
    'كل فجوة مصنّفة ضمن فئة مسمّاة لها علاج مختلف وتكلفة مختلفة. فليس كل غياب هو المشكلة نفسها.',
  'Eleven of twenty tracked commercial keywords sit outside the Google top ten and receive no AI recommendation — the decision happens on neither surface.':
    'إحدى عشرة من عشرين كلمة مفتاحية تجارية مرصودة تقع خارج العشرة الأوائل على جوجل ولا تتلقى أي توصية من الذكاء الاصطناعي — والقرار لا يحدث على أي من السطحين.',
  'Absent from both surfaces on a high-value commercial question. The most expensive class of gap.':
    'غائب عن السطحين معًا في سؤال تجاري عالي القيمة. وهو أغلى أصناف الفجوات.',
  'Absent from AI answers and outside the Google top ten. The decision happens without the brand.':
    'غائب عن إجابات الذكاء الاصطناعي وخارج العشرة الأوائل على جوجل. والقرار يحدث دون العلامة التجارية.',
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
    'أعد توزيع الإنفاق بعيدًا عن الكلمات المفتاحية التي لها مسار بديل عضوي قابل للتطبيق، وأبقِ الإعلانات المدفوعة حيث تتحقق نقطة التعادل فقط.',
  'Compare blended CPC against break-even monthly, and track organic replacement on reallocated keywords.':
    'قارن تكلفة النقرة المدمجة بنقطة التعادل شهريًا، وتتبّع الاستبدال العضوي في الكلمات المفتاحية المعاد توزيعها.',

  /* --- Narrative -------------------------------------------------------------- */
  'Narrative Intelligence': 'ذكاء السردية',
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
    'من يعرّف الفئة يضع المعايير التي يقيس المشترون عليها. تقيس هذه الفئة كم تملك من ذلك التعريف، وأين يكون هشًا، وأي مزاياك الحقيقية لا يملك السوق مفردات لوصفها.',
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
    'التزم باستثمار الحُجّية قبل الموعد النهائي للقرار، بينما تبقى تكلفة الإزاحة منخفضة.',

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
}
