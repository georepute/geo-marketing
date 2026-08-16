import type { ContentOverlay } from './index'

/* ============================================================================
   Hebrew content overlay — the seeded demonstration prose.

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

   The example search queries ARE translated — see the note beside them. They
   read as prose to a visitor, and leaving them in English left the most
   visible sentence on the page (the buyer's question in the hero) untranslated.

   Anything absent falls through to English by construction.
   ========================================================================= */

export const content: ContentOverlay = {
  /* --- Organisation and market ---------------------------------------- */
  'Industrial MRO and fastener distribution': 'הפצת ציוד תחזוקה ומחברים תעשייתיים',
  'United States — Midwest': 'ארצות הברית — מערב התיכון',
  'Methodology GEON-2.4': 'מתודולוגיה GEON-2.4',

  /* --- Composite measures ---------------------------------------------- */
  'Decision Health Index': 'מדד בריאות ההחלטה',
  'Decision Health Index at 41 of 100': 'מדד בריאות ההחלטה: 41 מתוך 100',
  'Composite': 'מדד מורכב',
  'Composite model': 'מודל מורכב',
  'Index weighting': 'שקלול המדד',
  'GEON vectors': 'וקטורי GEON',
  'GEON Authority': 'סמכות GEON',
  'GEON Trust': 'אמון GEON',
  '38 of 100 average': '38 מתוך 100 בממוצע',
  '44 of 100': '44 מתוך 100',
  '28 of 100': '28 מתוך 100',

  /* --- Recognition ------------------------------------------------------ */
  'Recognition by engine': 'זיהוי לפי מנוע',
  'AI Recognition Matrix': 'מטריצת זיהוי AI',
  'AI Recognition Intelligence': 'מודיעין זיהוי AI',
  'Entity understanding': 'הבנת הישות',
  'Entity Understanding': 'הבנת הישות',
  'Entity category association': 'שיוך הישות לקטגוריה',
  'Category association': 'שיוך לקטגוריה',
  'Entity disambiguation': 'הבחנה בין ישויות',
  'Entity record': 'רשומת הישות',
  'Confusion detection': 'זיהוי בלבול',
  'Confusion Detector': 'גלאי בלבול',
  'Outdated knowledge': 'ידע מיושן',
  'Average recognition score': 'ציון זיהוי ממוצע',
  'Average recognition score 38 → 55': 'ציון זיהוי ממוצע 38 ← 55',
  'Correctly categorised by all six engines.': 'מסווג נכון בכל ששת המנועים.',
  'All six engines': 'כל ששת המנועים',
  'Incomplete on 3 engines': 'חלקי בשלושה מנועים',
  'Inconsistent': 'לא עקבי',
  'Recognition decay': 'שחיקת זיהוי',
  'AI understanding': 'הבנת ה-AI',

  /* --- Presence and recommendation -------------------------------------- */
  'Decision presence': 'נוכחות בהחלטה',
  'Decision-stage control': 'שליטה בשלב ההחלטה',
  'Decision stage': 'שלב ההחלטה',
  'Decision volume': 'נפח החלטות',
  'AI recommendation': 'המלצת AI',
  'AI recommendation presence': 'נוכחות בהמלצות AI',
  'Recommendation share': 'נתח המלצות',
  'Recommendation analysis': 'ניתוח המלצות',
  'Recommendation Map': 'מפת המלצות',
  'Competitor recommendation share': 'נתח ההמלצות של המתחרה',
  'Competitor share': 'נתח המתחרה',
  'Competitor capture': 'תפיסת המתחרה',
  'Questions with AI presence': 'שאלות עם נוכחות AI',
  'Questions with presence': 'שאלות עם נוכחות',
  'Questions with presence 5 → 12 of 24': 'שאלות עם נוכחות 5 ← 12 מתוך 24',
  'Prompt coverage': 'כיסוי שאילתות',
  'Missed prompts': 'שאילתות שהוחמצו',
  'Missed Prompts': 'שאילתות שהוחמצו',
  'Winning prompts': 'שאילתות מנצחות',
  'Query Inventory': 'מצאי שאילתות',
  'Presence on 12 of 24 tracked questions': 'נוכחות ב-12 מתוך 24 שאלות במעקב',
  'Absent': 'נעדר',
  'Supplier-evaluation first mention': 'אזכור ראשון בהערכת ספקים',
  'Supplier-evaluation coverage': 'כיסוי הערכת ספקים',
  'Supplier-evaluation coverage 7% → 19%': 'כיסוי הערכת ספקים 7% ← 19%',
  '7% → 19% target': 'יעד 7% ← 19%',

  /* --- Authority and trust ---------------------------------------------- */
  'Independent authority evidence': 'ראיות סמכות עצמאיות',
  'Independent authority evidence is weak': 'ראיות הסמכות העצמאיות חלשות',
  'Independent authority sources cited': 'מקורות סמכות עצמאיים שצוטטו',
  'Independent sources': 'מקורות עצמאיים',
  'Independent source count': 'מספר מקורות עצמאיים',
  'Independent source count 3 → 12': 'מספר מקורות עצמאיים 3 ← 12',
  'Independent validation': 'אימות עצמאי',
  '3 independent sources': 'שלושה מקורות עצמאיים',
  '3 sources against a category median of 14.':
    'שלושה מקורות מול חציון קטגוריה של 14.',
  'Category median is 14. Kestrel holds 21.':
    'חציון הקטגוריה הוא 14. ל-Kestrel יש 21.',
  'Kestrel 21 sources, Northwind 3.': 'ל-Kestrel 21 מקורות, ל-Northwind שלושה.',
  'Weak — 3 sources': 'חלש — שלושה מקורות',
  'Authority evidence': 'ראיות סמכות',
  'Authority Signals': 'אותות סמכות',
  'Authority drivers': 'מניעי סמכות',
  'Authority first': 'סמכות תחילה',
  'Authority Gap': 'פער סמכות',
  'Authority': 'סמכות',
  'Source authority': 'סמכות המקור',
  'Source advantage': 'יתרון מקורות',
  'Source influence': 'השפעת מקורות',
  'Source Influence Map': 'מפת השפעת מקורות',
  'Citations': 'ציטוטים',
  'Citation analysis': 'ניתוח ציטוטים',
  'Engine citation analysis': 'ניתוח ציטוטי מנועים',
  'Cross-source comparison': 'השוואה בין מקורות',
  'Trade publication coverage': 'סיקור בעיתונות מקצועית',
  'Public review platforms': 'פלטפורמות ביקורת ציבוריות',
  'Review corpus': 'מאגר ביקורות',
  'Public web': 'הרשת הפתוחה',
  'Trust': 'אמון',
  'Trust decay': 'שחיקת אמון',
  'Trust readiness': 'מוכנות אמון',
  'Trust Intelligence': 'מודיעין אמון',
  'Trust and Authority Diagnostics': 'אבחון אמון וסמכות',
  'Reputation consistency': 'עקביות מוניטין',
  'Reputation Momentum': 'תנופת מוניטין',
  'Consistency': 'עקביות',
  'Is the business safe to recommend?': 'האם בטוח להמליץ על העסק?',
  'Buyer Confidence': 'ביטחון הקונה',

  /* --- Competitors ------------------------------------------------------ */
  'Competitive Intelligence': 'מודיעין תחרותי',
  'Competitor Decision Intelligence': 'מודיעין החלטות מתחרים',
  'Competitive density': 'צפיפות תחרותית',
  'Replaceability': 'ניתנות להחלפה',
  'Replaceability Index': 'מדד ניתנות להחלפה',
  'Distributor alignment': 'התאמת מפיצים',
  'Distributor Map': 'מפת מפיצים',
  'Northwind differentiators': 'הבידול של Northwind',
  'Evaluation criteria cited': 'קריטריוני הערכה שצוטטו',
  'Strength Drivers': 'מניעי חוזק',
  'Vulnerability': 'פגיעות',
  'Fragility': 'שבירות',
  'Dependency': 'תלות',
  'Dependency Risk': 'סיכון תלות',
  'Binding constraint': 'אילוץ מחייב',
  'Northwind listed fourth of five suppliers.':
    'Northwind מופיעה רביעית מתוך חמישה ספקים.',
  'Absent. Meridian named first.': 'נעדר. Meridian מוזכרת ראשונה.',
  'Absent. 35 searches per month.': 'נעדר. 35 חיפושים בחודש.',

  /* --- Google vs AI, search economics ----------------------------------- */
  'Google vs AI Visibility Intelligence': 'מודיעין נראות Google מול AI',
  'Google position': 'מיקום ב-Google',
  'Channel asymmetry': 'אי-סימטריה בין ערוצים',
  'Gap Matrix': 'מטריצת פערים',
  'Gap classification': 'סיווג פערים',
  'Strategic blind spot': 'נקודה עיוורת אסטרטגית',
  'Compound blind spot': 'נקודה עיוורת מורכבת',
  'Compound Blind Spot': 'נקודה עיוורת מורכבת',
  'Compound blind spots': 'נקודות עיוורות מורכבות',
  'Blind-spot keywords': 'מילות מפתח בנקודה עיוורת',
  'Search Economics': 'כלכלת החיפוש',
  'Search Cost Intelligence': 'מודיעין עלויות חיפוש',
  'Search Intelligence': 'מודיעין חיפוש',
  'Search trend analysis': 'ניתוח מגמות חיפוש',
  'Break-even CPC': 'עלות לקליק באיזון',
  'Break-Even CPC': 'עלות לקליק באיזון',
  'Break-even model': 'מודל איזון',
  'Above break-even': 'מעל נקודת האיזון',
  'Blended CPC vs break-even': 'עלות משוקללת מול נקודת איזון',
  'Blended CPC across 20 tracked keywords':
    'עלות לקליק משוקללת על פני 20 מילות מפתח במעקב',
  'Keywords above break-even CPC': 'מילות מפתח מעל עלות האיזון',
  'Keywords above break-even CPC 13 → 7 of 20':
    'מילות מפתח מעל עלות האיזון 13 ← 7 מתוך 20',
  '11 of 20 weak': '11 מתוך 20 חלשות',
  'Bid inflation': 'אינפלציית הצעות',
  'Paid dependency': 'תלות בממומן',
  'AI vs Paid': 'AI מול ממומן',
  'Recoverable search': 'חיפוש בר-השבה',
  'Recoverable Search Opportunity': 'הזדמנות חיפוש בת-השבה',
  'Recoverable search opportunity': 'הזדמנות חיפוש בת-השבה',
  'Organic replacement potential': 'פוטנציאל החלפה אורגנית',

  /* --- Narrative -------------------------------------------------------- */
  'Narrative Intelligence': 'מודיעין נרטיבים',
  'Narrative ownership': 'בעלות על הנרטיב',
  'Narrative ownership 12% → 24%': 'בעלות על הנרטיב 12% ← 24%',
  'Narrative control': 'שליטה בנרטיב',
  'Narrative War Room': 'חדר מלחמת נרטיבים',
  'Category definition': 'הגדרת הקטגוריה',
  'Category definition language': 'שפת הגדרת הקטגוריה',
  'Comparison content': 'תוכן השוואתי',
  'Content Intelligence': 'מודיעין תוכן',
  'Buyer education': 'חינוך הקונה',
  'Pricing perception': 'תפיסת מחיר',
  'Price justification': 'הצדקת מחיר',
  'Strategic silence': 'שתיקה אסטרטגית',

  /* --- Timing ----------------------------------------------------------- */
  'Strategic Timing Intelligence': 'מודיעין עיתוי אסטרטגי',
  'Strategic Timing Window': 'חלון עיתוי אסטרטגי',
  'The window is open and closing': 'החלון פתוח ונסגר',
  '7 months — closes 2027-02-28': 'שבעה חודשים — נסגר ב-2027-02-28',
  'Query maturity': 'בשלות שאילתות',
  'Query maturity accelerating': 'בשלות השאילתות מאיצה',
  'Demand maturation': 'הבשלת ביקוש',
  'Shift velocity': 'מהירות התזוזה',
  'Rising 8% quarter over quarter.': 'עולה ב-8% מרבעון לרבעון.',
  'Moderate — 8% quarter-over-quarter': 'מתון — 8% מרבעון לרבעון',
  'Time to impact': 'זמן להשפעה',
  'Urgency': 'דחיפות',
  'Emerging': 'מתהווה',

  /* --- Commercial exposure ---------------------------------------------- */
  'Directional commercial exposure': 'חשיפה מסחרית כיוונית',
  'Commercial exposure': 'חשיפה מסחרית',
  'Revenue Exposure': 'חשיפת הכנסות',
  'Opportunity and Revenue Intelligence': 'מודיעין הזדמנויות והכנסות',
  'Opportunity range': 'טווח ההזדמנות',
  'Opportunity Signal Map': 'מפת אותות הזדמנות',
  'Estimated conversion': 'המרה משוערת',
  'Conversion assumptions': 'הנחות המרה',
  'Average deal value': 'שווי עסקה ממוצע',
  'Deal value': 'שווי עסקה',
  'Decision gap': 'פער החלטה',
  'Demand': 'ביקוש',
  'Sensitivity analysis': 'ניתוח רגישות',
  'Priority ranking model': 'מודל דירוג עדיפויות',

  /* --- Action ----------------------------------------------------------- */
  'Action Intelligence': 'מודיעין פעולה',
  'Action Center': 'מרכז פעולה',
  'Action': 'פעולה',
  'Prioritised interventions': 'התערבויות מתועדפות',
  'Prioritised intervention sequence': 'רצף התערבויות מתועדף',
  'Top intervention': 'ההתערבות המובילה',
  'Priority Queue': 'תור עדיפויות',
  '30/60/90-Day Roadmap': 'מפת דרכים ל-30/60/90 יום',
  '6 sequenced': 'שש, לפי סדר',
  'Effort': 'מאמץ',
  'Effort assessment': 'הערכת מאמץ',
  'Expected impact': 'השפעה צפויה',
  'Measured change': 'שינוי שנמדד',
  'Impact Tracker': 'מעקב השפעה',
  'Success metric': 'מדד הצלחה',
  'Prescription': 'הוראת פעולה',
  'Owner': 'אחראי',
  'Deadline': 'מועד יעד',
  'Evidence': 'ראיות',
  'Confidence': 'רמת ודאות',
  'Directional': 'כיווני',
  'Context': 'הקשר',
  'Concerns': 'חששות',
  'Aligned': 'מיושר',
  'High': 'גבוה',
  'Weak': 'חלש',

  /* --- Decision journey -------------------------------------------------- */
  'Decision Journey': 'מסע ההחלטה',
  'Research': 'מחקר',
  'Solution Evaluation': 'הערכת פתרון',
  'Supplier Evaluation': 'הערכת ספקים',
  'Purchase Decision': 'החלטת רכישה',
  'Decision Hijack': 'חטיפת החלטה',

  /* --- Market / global --------------------------------------------------- */
  'Market Intelligence': 'מודיעין שוק',
  'Global Market Intelligence': 'מודיעין שוק גלובלי',
  'Global Visibility Matrix': 'מטריצת נראות גלובלית',
  'Market readiness': 'מוכנות שוק',
  'Market Readiness Gauge': 'מד מוכנות שוק',
  'Market Entry Readiness': 'מוכנות לכניסה לשוק',
  'Market Fit': 'התאמה לשוק',
  'Regional variation': 'שונות אזורית',
  'Regional strength': 'חוזק אזורי',
  'Country definition': 'הגדרת מדינה',
  'Distribution Intelligence': 'מודיעין הפצה',
  'Executive Intelligence': 'מודיעין ניהולי',
  'AI Visibility Intelligence': 'מודיעין נראות AI',
  'AI Search Presence': 'נוכחות בחיפוש AI',
  'Scenario Simulator': 'סימולטור תרחישים',
  'Analytics': 'אנליטיקה',
  'Visibility': 'נראות',
  'Ownership': 'בעלות',
  'How crowded is the answer set becoming?': 'כמה צפוף נעשה מרחב התשובות?',
  'What is it worth, and what happens next?': 'מה שוויו, ומה קורה עכשיו?',

  /* --- Roles -------------------------------------------------------------- */
  'VP Marketing': 'סמנכ״ל שיווק',
  'Head of Digital': 'מנהל דיגיטל',
  'Head of Brand': 'מנהל מותג',
  'Chief Executive': 'מנכ״ל',
  'Content Lead': 'אחראי תוכן',
  'Demand Gen Manager': 'מנהל יצירת ביקוש',

  /* --- Misc --------------------------------------------------------------- */
  'Customer-configured': 'מוגדר על ידי הלקוח',
  'Derived from §13.1 chain': 'נגזר משרשרת §13.1',
  'SEO platforms': 'פלטפורמות SEO',
  'Google Ads': 'Google Ads',

  /* ==========================================================================
     LONG-FORM PROSE — the readouts, engine descriptions and prescriptions.
     ======================================================================= */

  'Buyers at supplier evaluation have already chosen a solution and are choosing a vendor. This stage carries under 15% of query volume, so volume-led tooling ranks it as unimportant — while it decides most of the revenue. Absence here is exclusion from the shortlist at the moment the order is assigned.':
    'קונים בשלב הערכת הספקים כבר בחרו פתרון והם בוחרים ספק. השלב הזה נושא פחות מ-15% מנפח השאילתות, ולכן כלים המדורגים לפי נפח מסווגים אותו כלא חשוב — בעוד שהוא מכריע את רוב ההכנסות. היעדרות כאן היא הדרה מרשימת המועמדים ברגע שבו ההזמנה מוקצית.',

  'Whether AI systems hold an accurate, current and unambiguous record of the business, and whether that record survives into the answers buyers receive. Everything else on this page is downstream of it — no measure improves while the underlying record is wrong.':
    'האם למערכות AI יש רשומה מדויקת, עדכנית וחד-משמעית על העסק, והאם הרשומה הזו שורדת אל תוך התשובות שהקונים מקבלים. כל השאר בעמוד הזה נגזר מכך — שום מדד אינו משתפר כל עוד הרשומה הבסיסית שגויה.',

  'Not who ranks above you — who gets recommended when a buyer asks a machine whom to choose. The useful output is never the share figure; it is the specific evidence a competitor supplies that you do not, because that is the part you can go and close.':
    'לא מי מדורג מעליכם — אלא על מי ממליצים כשקונה שואל מכונה במי לבחור. התוצר המועיל אינו נתח ההמלצות; אלא הראיה הספציפית שהמתחרה מספק ואתם לא, כי זה החלק שאפשר לגשת ולסגור.',

  'Google rank and AI recommendation are separate commercial assets. Northwind ranks first for account setup — a question asked only after the vendor has already been chosen — and is absent from every question that decides who that vendor is.':
    'דירוג ב-Google והמלצת AI הם נכסים מסחריים נפרדים. Northwind מדורגת ראשונה עבור פתיחת חשבון — שאלה שנשאלת רק אחרי שהספק כבר נבחר — ונעדרת מכל שאלה שמכריעה מי אותו ספק.',

  'Traditional search and AI-mediated discovery are separate commercial assets that fail independently. This category measures each, classifies every gap between them, and prices what closing the gap is currently costing in paid media.':
    'חיפוש מסורתי וגילוי מתווך-AI הם נכסים מסחריים נפרדים שנכשלים באופן בלתי תלוי. הקטגוריה הזו מודדת כל אחד מהם, מסווגת כל פער ביניהם, ומתמחרת כמה סגירת הפער עולה כיום במדיה ממומנת.',

  'Timing, geography and distribution — the three conditions that decide whether a correct strategy executed today returns more than the same strategy executed in a year. A right decision at the wrong time is still a wrong decision.':
    'עיתוי, גאוגרפיה והפצה — שלושת התנאים שמכריעים אם אסטרטגיה נכונה שמבוצעת היום תחזיר יותר מאותה אסטרטגיה שתבוצע בעוד שנה. החלטה נכונה בעיתוי הלא נכון היא עדיין החלטה שגויה.',

  'Visibility creates attention; trust creates selection. A business can be perfectly visible and still be filtered out at the moment a system has to stand behind naming it first, and the reasons for that are specific and fixable.':
    'נראות יוצרת תשומת לב; אמון יוצר בחירה. עסק יכול להיות נראה לחלוטין ועדיין להיפסל ברגע שבו מערכת צריכה לעמוד מאחורי הצבתו במקום הראשון, והסיבות לכך ספציפיות וניתנות לתיקון.',

  'Whoever defines a category sets the criteria buyers evaluate against. This category measures how much of that definition you own, where it is fragile, and which of your genuine advantages the market has no vocabulary for.':
    'מי שמגדיר קטגוריה קובע את הקריטריונים שלפיהם קונים בוחנים. הקטגוריה הזו מודדת כמה מההגדרה הזו בבעלותכם, היכן היא שברירית, ולאילו מיתרונותיכם האמיתיים אין לשוק אוצר מילים.',

  'Where diagnosis becomes a decision. Every gap is priced as a directional range, ranked against every other gap, assigned an owner and a deadline, and then measured after execution to confirm the signal actually moved.':
    'כאן האבחון הופך להחלטה. כל פער מתומחר כטווח כיווני, מדורג מול כל פער אחר, מקבל אחראי ומועד יעד, ואז נמדד לאחר הביצוע כדי לוודא שהאות אכן זז.',

  'This gap is not brand preference. It is an evidence gap: Kestrel supplies engines with material they can cite, and Northwind does not. The lead never reaches the CRM because the decision resolved before contact.':
    'הפער הזה אינו העדפת מותג. זהו פער ראיות: Kestrel מספקת למנועים חומר שהם יכולים לצטט, ו-Northwind לא. הליד לעולם אינו מגיע ל-CRM משום שההחלטה הוכרעה עוד לפני יצירת הקשר.',

  'The index is a weighted function of the six GEON vectors, not a score assigned by judgement. Market Fit at 72 confirms the offer matches demand; the constraint is entirely on the evidence side.':
    'המדד הוא פונקציה משוקללת של ששת וקטורי GEON, לא ציון שניתן לפי שיקול דעת. התאמה לשוק ברמת 72 מאשרת שההיצע תואם לביקוש; האילוץ נמצא כולו בצד הראיות.',

  'An engine that cannot categorise a business cannot recommend it. This is upstream of every visibility metric: no amount of content moves an answer if the entity record is wrong.':
    'מנוע שאינו מסוגל לסווג עסק אינו מסוגל להמליץ עליו. זה נמצא במעלה הזרם של כל מדד נראות: שום כמות תוכן לא תזיז תשובה אם רשומת הישות שגויה.',

  'Paid acquisition is not buying growth here; it is renting the positions that authority would otherwise hold. The cost is structural and rises as competitive density increases.':
    'רכישה ממומנת אינה קונה כאן צמיחה; היא שוכרת את העמדות שסמכות הייתה מחזיקה אחרת. העלות מבנית והיא עולה ככל שהצפיפות התחרותית גדלה.',

  'Category language is still forming, so authority built now compounds. Once engines settle on a stable answer set, displacing an incumbent recommendation costs materially more.':
    'שפת הקטגוריה עדיין מתגבשת, ולכן סמכות שנבנית עכשיו מצטברת. ברגע שמנועים מתייצבים על מרחב תשובות קבוע, הדחת המלצה קיימת עולה משמעותית יותר.',

  'Kestrel is cited by three independent trade publications and maintains a public supplier-comparison library. Engines reach for that evidence when a buyer asks whom to choose.':
    'Kestrel מצוטטת בשלושה כתבי עת מקצועיים עצמאיים ומתחזקת ספריית השוואת ספקים ציבורית. מנועים נשענים על הראיות הללו כשקונה שואל במי לבחור.',

  'Diagnosis without sequence produces activity, not movement. Each intervention names an owner, a deadline, the signal it should move and how that movement will be verified.':
    'אבחון ללא סדר פעולות מייצר פעילות, לא תזוזה. כל התערבות מציינת אחראי, מועד יעד, את האות שהיא אמורה להזיז וכיצד תאומת אותה תזוזה.',

  'Visibility creates attention; trust creates selection. A business can be found and still be filtered out at the moment an engine has to stand behind a recommendation.':
    'נראות יוצרת תשומת לב; אמון יוצר בחירה. אפשר למצוא עסק ועדיין לפסול אותו ברגע שבו מנוע צריך לעמוד מאחורי המלצה.',

  'Engines do not recommend what they cannot corroborate. Authority is the lowest GEON vector at 28 of 100, and it is the constraint that holds every other signal down.':
    'מנועים אינם ממליצים על מה שאינם יכולים לאשש. סמכות היא וקטור GEON הנמוך ביותר ברמת 28 מתוך 100, והיא האילוץ שמחזיק את כל שאר האותות למטה.',

  'Authority is the lowest GEON vector at 28 and carries the heaviest index weight. It is the constraint holding recognition, recommendation share and coverage down.':
    'סמכות היא וקטור GEON הנמוך ביותר ברמת 28 ונושאת את המשקל הכבד ביותר במדד. היא האילוץ שמחזיק למטה את הזיהוי, את נתח ההמלצות ואת הכיסוי.',

  'Whether category language is still fluid — because authority built while it is fluid becomes the default answer, and authority built after has to displace one.':
    'האם שפת הקטגוריה עדיין נזילה — משום שסמכות שנבנית בזמן שהיא נזילה הופכת לתשובת ברירת המחדל, וסמכות שנבנית אחר כך נדרשת להדיח אחת.',

  'Whoever defines the category sets the criteria buyers evaluate against. Competing on someone else’s definition means competing on terms chosen to favour them.':
    'מי שמגדיר את הקטגוריה קובע את הקריטריונים שלפיהם קונים בוחנים. תחרות על פי הגדרה של מישהו אחר פירושה תחרות בתנאים שנבחרו לטובתו.',

  'Recognition is never uniform. A business can be well understood by one engine and structurally invisible to another that a different half of its buyers use.':
    'זיהוי לעולם אינו אחיד. עסק יכול להיות מובן היטב על ידי מנוע אחד ובלתי נראה מבנית למנוע אחר שבו משתמשת מחצית אחרת מקוניו.',

  'Consistent category language across its own site, trade directories and three independent publications gives engines a single unambiguous record to resolve.':
    'שפת קטגוריה עקבית באתר שלה, במדריכים מקצועיים ובשלושה פרסומים עצמאיים נותנת למנועים רשומה אחת חד-משמעית לפענח.',

  'These are not lost leads, because no lead was ever created. The decision completed inside the engine, and conventional analytics recorded nothing at all.':
    'אלה אינם לידים אבודים, משום שמעולם לא נוצר ליד. ההחלטה הושלמה בתוך המנוע, והאנליטיקה המקובלת לא תיעדה דבר.',

  'Eleven of twenty tracked commercial keywords sit outside the Google top ten and receive no AI recommendation — the decision happens on neither surface.':
    'אחת-עשרה מתוך עשרים מילות מפתח מסחריות במעקב נמצאות מחוץ לעשירייה הראשונה ב-Google ואינן מקבלות המלצת AI — ההחלטה אינה מתרחשת באף אחד מהמשטחים.',

  'Northwind appears in 7% of supplier-evaluation answers — the stage that decides 60% of revenue and that Kestrel controls in five of seven questions.':
    'Northwind מופיעה ב-7% מתשובות הערכת הספקים — השלב שמכריע 60% מההכנסות ושבו Kestrel שולטת בחמש מתוך שבע שאלות.',

  'Build supplier-comparison content against the eleven compound and strategic blind-spot questions, structured so it is both rankable and citable.':
    'בנו תוכן השוואת ספקים כנגד אחת-עשרה שאלות הנקודה העיוורת המורכבת והאסטרטגית, בנוי כך שיהיה גם בר-דירוג וגם בר-ציטוט.',

  'The distance between what a company says it is and what machines have independently concluded it is — usually wider than any executive expects.':
    'המרחק בין מה שחברה אומרת שהיא לבין מה שמכונות הסיקו באופן עצמאי שהיא — בדרך כלל רחב יותר מכפי שכל מנהל מצפה.',

  'Whether the market is asking informed comparison questions or still asking what the category is, which decides what content is worth producing.':
    'האם השוק שואל שאלות השוואה מיודעות או עדיין שואל מהי הקטגוריה, וזה מכריע איזה תוכן שווה לייצר.',

  'Contradictions across the public record — different categories, claims or descriptions between the site, directories and third-party profiles.':
    'סתירות ברשומה הציבורית — קטגוריות, טענות או תיאורים שונים בין האתר, המדריכים והפרופילים של צד שלישי.',

  'Mentions weighted by the credibility of the source, so fifty low-authority listings stop reading as a stronger position than three real ones.':
    'אזכורים משוקללים לפי אמינות המקור, כך שחמישים רישומים חסרי סמכות יפסיקו להיקרא כעמדה חזקה יותר משלושה אמיתיים.',

  'Re-run the supplier-evaluation prompt set monthly. Coverage is verified by recommendation slots won across all six engines, not by traffic.':
    'הריצו מחדש את מערך שאילתות הערכת הספקים מדי חודש. הכיסוי מאומת לפי מקומות המלצה שנכבשו בכל ששת המנועים, לא לפי תנועה.',

  'Blended CPC runs above the break-even cost per click, and paid spend is covering questions where the brand has no organic or AI presence.':
    'העלות המשוקללת לקליק גבוהה מעלות האיזון, וההוצאה הממומנת מכסה שאלות שבהן למותג אין נוכחות אורגנית או נוכחות AI.',

  'Engines describe the category in a competitor’s language. Northwind’s strongest differentiator is absent from every category description.':
    'מנועים מתארים את הקטגוריה בשפתו של מתחרה. הבידול החזק ביותר של Northwind נעדר מכל תיאור קטגוריה.',

  'Which claims stand on third-party evidence and which stand only on the company’s own website — machines weight the two very differently.':
    'אילו טענות נשענות על ראיות צד שלישי ואילו נשענות רק על אתר החברה עצמה — מכונות משקללות את השתיים בצורה שונה מאוד.',

  'The named questions a rival wins every time, which is what converts a vague sense of losing into a finite list of things to go and fix.':
    'השאלות המפורשות שיריב מנצח בכל פעם, וזה מה שהופך תחושה מעורפלת של הפסד לרשימה סופית של דברים לתקן.',

  'Gemini recognises Northwind at 24 of 100 and recommends it in zero questions. The cause is a disambiguation failure, not a content gap.':
    'Gemini מזהה את Northwind ברמת 24 מתוך 100 וממליץ עליה באפס שאלות. הסיבה היא כשל בהבחנה בין ישויות, לא פער תוכן.',

  'Some rivals win early by shaping the criteria; others win late at vendor selection. The counter-move is completely different for each.':
    'יריבים מסוימים מנצחים מוקדם בכך שהם מעצבים את הקריטריונים; אחרים מנצחים מאוחר, בבחירת הספק. מהלך הנגד שונה לחלוטין בכל אחד מהמקרים.',

  'Whether the business is filed under the categories buyers actually ask about, or under one that is accurate but that nobody searches.':
    'האם העסק מתויק תחת הקטגוריות שקונים באמת שואלים עליהן, או תחת קטגוריה מדויקת שאיש אינו מחפש.',

  'Publish an independent, verifiable supplier-comparison resource and secure third-party validation in at least two trade publications.':
    'פרסמו משאב השוואת ספקים עצמאי ובר-אימות, והבטיחו אימות צד שלישי בשני כתבי עת מקצועיים לפחות.',

  'Secure independent validation: trade-publication contribution, verifiable customer outcomes and third-party specification references.':
    'הבטיחו אימות עצמאי: תרומה לכתבי עת מקצועיים, תוצאות לקוח ברות-אימות והפניות מפרט של צד שלישי.',

  'Position measured only on questions that decide a purchase, with the vanity terms that inflate most reporting deliberately excluded.':
    'עמדה שנמדדת רק על שאלות שמכריעות רכישה, כשמונחי היוקרה שמנפחים את רוב הדיווחים מוחרגים במכוון.',

  'Share of decisions rather than share of traffic — measured where the choice is actually made rather than where it is later recorded.':
    'נתח מההחלטות ולא נתח מהתנועה — נמדד היכן שהבחירה באמת נעשית ולא היכן שהיא מתועדת אחר כך.',

  'Every finding converted into an intervention with an owner, a deadline and a stated expected movement — or dropped, if it cannot be.':
    'כל ממצא מומר להתערבות עם אחראי, מועד יעד ותזוזה צפויה מוצהרת — או נזנח, אם אי אפשר.',

  'Ranking by exposure, confidence, effort and dependency, so effort does not go into work that cannot move until something else lands.':
    'דירוג לפי חשיפה, ודאות, מאמץ ותלות, כך שמאמץ לא יופנה לעבודה שאינה יכולה לזוז עד שדבר אחר ינחת.',

  'Blended CPC runs above break-even. Paid is renting positions that authority would hold, and the cost rises with competitive density.':
    'העלות המשוקללת לקליק גבוהה מנקודת האיזון. הממומן שוכר עמדות שסמכות הייתה מחזיקה, והעלות עולה עם הצפיפות התחרותית.',

  'Publish a single canonical entity description and propagate identical category language to trade directories and structured data.':
    'פרסמו תיאור ישות קנוני אחד והפיצו שפת קטגוריה זהה למדריכים מקצועיים ולנתונים מובנים.',

  'Three of six engines misclassify what Northwind sells. No content investment can move an answer while the entity record is wrong.':
    'שלושה מתוך שישה מנועים מסווגים שגוי את מה ש-Northwind מוכרת. שום השקעה בתוכן לא תזיז תשובה כל עוד רשומת הישות שגויה.',

  'Sustained trade-publication presence means engines can support a Kestrel recommendation with evidence that is not Kestrel’s own.':
    'נוכחות מתמשכת בכתבי עת מקצועיים פירושה שמנועים יכולים לתמוך בהמלצה על Kestrel בראיות שאינן של Kestrel עצמה.',

  'The stage that decides 60% of revenue carries under 15% of query volume — so the weakness is invisible to volume-led tooling.':
    'השלב שמכריע 60% מההכנסות נושא פחות מ-15% מנפח השאילתות — ולכן החולשה בלתי נראית לכלים המדורגים לפי נפח.',

  'Trust reads 44 of 100 while Market Fit reads 72 — the offer matches demand, but the proof does not support a recommendation.':
    'האמון עומד על 44 מתוך 100 בעוד ההתאמה לשוק עומדת על 72 — ההיצע תואם לביקוש, אך ההוכחה אינה תומכת בהמלצה.',

  'Category vocabulary as an ownable asset, with a percentage attached — a measure most companies have never seen quantified.':
    'אוצר מילות הקטגוריה כנכס שניתן להחזיק בו, עם אחוז מצורף — מדד שרוב החברות מעולם לא ראו מכומת.',

  'The rate at which recommendation slots are being taken, which is what converts "sometime this year" into a dated decision.':
    'הקצב שבו מקומות ההמלצה נתפסים, וזה מה שהופך "מתישהו השנה" להחלטה עם תאריך.',

  'A sequence built from what each intervention actually depends on, rather than from a calendar someone divided into thirds.':
    'רצף שנבנה ממה שכל התערבות באמת תלויה בו, ולא מלוח שנה שמישהו חילק לשלישים.',

  'Each action carries its own success metric. Impact is verified by signal movement after execution, not by task completion.':
    'לכל פעולה מדד הצלחה משלה. ההשפעה מאומתת לפי תזוזת האות לאחר הביצוע, לא לפי השלמת המשימה.',

  'Publish a canonical entity description and propagate identical category language to trade directories and structured data.':
    'פרסמו תיאור ישות קנוני והפיצו שפת קטגוריה זהה למדריכים מקצועיים ולנתונים מובנים.',

  'The same question asked of both surfaces, so the two results can finally be compared line by line instead of by anecdote.':
    'אותה שאלה נשאלת בשני המשטחים, כך שאפשר סוף סוף להשוות את שתי התוצאות שורה מול שורה במקום לפי אנקדוטה.',

  'Where a position rests on a single source or a single page, and would not survive one competitor publishing a better one.':
    'היכן שעמדה נשענת על מקור יחיד או עמוד יחיד, ולא הייתה שורדת מתחרה אחד שיפרסם טוב יותר.',

  'Nineteen of twenty-four decisions complete without the brand. These six carry the largest share of decision-stage demand.':
    'תשע-עשרה מתוך עשרים וארבע החלטות מושלמות בלי המותג. שש אלה נושאות את הנתח הגדול ביותר של הביקוש בשלב ההחלטה.',

  'Reallocate spend from keywords with a viable organic replacement path, and hold paid only where break-even still clears.':
    'הסיטו הוצאה ממילות מפתח שיש להן מסלול החלפה אורגני בר-קיימא, והחזיקו ממומן רק היכן שנקודת האיזון עדיין נחצית.',

  'Every gap sorted into a named class with a different remedy and a different cost. Not all absence is the same problem.':
    'כל פער ממוין למחלקה מפורשת עם תרופה שונה ועלות שונה. לא כל היעדרות היא אותה בעיה.',

  'Three of six AI engines misidentify what Northwind sells, and one does not recognise it as a distinct business at all.':
    'שלושה מתוך שישה מנועי AI מזהים שגוי את מה ש-Northwind מוכרת, ואחד אינו מזהה אותה כלל כעסק נבדל.',

  'Recommendation share re-measured across the same 24 questions monthly, with engine and date recorded per observation.':
    'נתח ההמלצות נמדד מחדש על פני אותן 24 שאלות מדי חודש, כשהמנוע והתאריך מתועדים בכל תצפית.',

  'Its supplier-comparison library ranks organically and is the source engines cite, so one asset serves both surfaces.':
    'ספריית השוואת הספקים שלה מדורגת אורגנית והיא המקור שמנועים מצטטים, כך שנכס אחד משרת את שני המשטחים.',

  'Resolve category description inconsistency across all public sources, then pursue verifiable third-party validation.':
    'יישבו את חוסר העקביות בתיאור הקטגוריה בכל המקורות הציבוריים, ולאחר מכן רדפו אחר אימות צד שלישי בר-אימות.',

  'Prioritise the six highest-volume missed questions and publish material that answers each one directly and citably.':
    'תעדפו את שש השאלות שהוחמצו בעלות הנפח הגבוה ביותר, ופרסמו חומר שעונה על כל אחת מהן ישירות ובאופן בר-ציטוט.',

  'The stage where the vendor is chosen. Presence here decides whether the business reaches the shortlist at all.':
    'השלב שבו נבחר הספק. נוכחות כאן מכריעה אם העסק מגיע בכלל לרשימת המועמדים.',

  'Track gap classification per keyword monthly. Success is six keywords moving out of blind-spot classification.':
    'עקבו אחר סיווג הפער לכל מילת מפתח מדי חודש. הצלחה היא שש מילות מפתח שיוצאות מסיווג הנקודה העיוורת.',

  'Publish a defensible evaluation framework that makes regional response time a first-class selection criterion.':
    'פרסמו מסגרת הערכה ברת-הגנה שהופכת את זמן התגובה האזורי לקריטריון בחירה מדרגה ראשונה.',

  'The market is emerging with roughly seven months of open window; competitive density is rising 8% per quarter.':
    'השוק מתהווה עם חלון פתוח של כשבעה חודשים; הצפיפות התחרותית עולה ב-8% לרבעון.',

  'Six interventions are prioritised; the first two address authority evidence and supplier-comparison coverage.':
    'שש התערבויות מתועדפות; שתי הראשונות מטפלות בראיות סמכות ובכיסוי השוואת ספקים.',

  'Re-observe entity understanding per engine. Success is category association correct on five of six engines.':
    'תצפו מחדש בהבנת הישות בכל מנוע. הצלחה היא שיוך קטגוריה נכון בחמישה מתוך שישה מנועים.',

  'Kestrel receives 31% of all AI recommendations across the tracked decision set; Northwind receives 4.2%.':
    'Kestrel מקבלת 31% מכלל המלצות ה-AI על פני מערך ההחלטות במעקב; Northwind מקבלת 4.2%.',

  'Compare blended CPC against break-even monthly, and track organic replacement on reallocated keywords.':
    'השוו את העלות המשוקללת לקליק מול נקודת האיזון מדי חודש, ועקבו אחר ההחלפה האורגנית במילות המפתח שהוסטו.',

  'Demand × decision gap × estimated conversion × average deal value. A range, never a confirmed figure.':
    'ביקוש × פער החלטה × המרה משוערת × שווי עסקה ממוצע. טווח, לעולם לא נתון מאושר.',

  'Engines cannot corroborate a recommendation from three sources when the category median is fourteen.':
    'מנועים אינם יכולים לאשש המלצה משלושה מקורות כשחציון הקטגוריה הוא ארבעה-עשר.',

  'Receives 31% of all recommendations and is named first in four of seven supplier-evaluation answers.':
    'מקבלת 31% מכלל ההמלצות ומוזכרת ראשונה בארבע מתוך שבע תשובות הערכת ספקים.',

  'Independent source count re-observed monthly, with each new source recorded by publication and date.':
    'מספר המקורות העצמאיים נצפה מחדש מדי חודש, כשכל מקור חדש מתועד לפי פרסום ותאריך.',

  'Recompute the index from re-observed GEON vectors monthly. The weighting is published and versioned.':
    'חשבו מחדש את המדד מוקטורי GEON שנצפו מחדש מדי חודש. השקלול מפורסם ומנוהל בגרסאות.',

  'Publish an evaluation framework that makes regional response time a first-class selection criterion.':
    'פרסמו מסגרת הערכה שהופכת את זמן התגובה האזורי לקריטריון בחירה מדרגה ראשונה.',

  'Owned authority removes the need to bid, so Kestrel’s cost per decision falls as Northwind’s rises.':
    'סמכות בבעלות מייתרת את הצורך להציע מחיר, ולכן העלות להחלטה של Kestrel יורדת בעוד זו של Northwind עולה.',

  'Holds top-three organic positions and AI presence on the four highest-volume commercial questions.':
    'מחזיקה בשלושת המקומות האורגניים הראשונים ובנוכחות AI בארבע השאלות המסחריות בעלות הנפח הגבוה ביותר.',

  'Ranking in Google but absent from AI answers. Existing authority is not reaching the AI surface.':
    'מדורגת ב-Google אך נעדרת מתשובות AI. הסמכות הקיימת אינה מגיעה אל משטח ה-AI.',

  'Kestrel has published material addressing each question directly; engines reach for what exists.':
    'Kestrel פרסמה חומר שעונה על כל שאלה ישירות; מנועים נשענים על מה שקיים.',

  'Re-run all 24 questions monthly across all six engines; record presence per engine per question.':
    'הריצו מחדש את כל 24 השאלות מדי חודש בכל ששת המנועים; תעדו נוכחות לכל מנוע בכל שאלה.',

  'Publishing evaluation criteria before competitors did made that framing the one engines learned.':
    'פרסום קריטריוני ההערכה לפני המתחרים הפך את המסגור הזה לזה שהמנועים למדו.',

  'Absent from both surfaces on a high-value commercial question. The most expensive class of gap.':
    'נעדר משני המשטחים בשאלה מסחרית בעלת ערך גבוה. מחלקת הפער היקרה ביותר.',

  'Absent from AI answers and outside the Google top ten. The decision happens without the brand.':
    'נעדר מתשובות AI ומחוץ לעשירייה הראשונה ב-Google. ההחלטה מתרחשת בלי המותג.',

  'Commit authority investment before the decision deadline, while displacement cost remains low.':
    'התחייבו להשקעה בסמכות לפני מועד ההחלטה, בעוד עלות ההדחה עדיין נמוכה.',

  'Halvorsen owns early-stage research questions, entering the decision before evaluation begins.':
    'Halvorsen מחזיקה בשאלות המחקר בשלב המוקדם, ונכנסת להחלטה עוד לפני שההערכה מתחילה.',

  'The evaluation criteria the market has settled on, and which competitor published them first.':
    'קריטריוני ההערכה שהשוק התכנס אליהם, ואיזה מתחרה פרסם אותם ראשון.',

  /* ==========================================================================
     HOME PAGE — prose written inline in the section components, routed through
     t(). See lib/i18n/content/translator.ts.
     ======================================================================= */

  'By the time a visit, a click, a lead or a CRM record exists, the buyer has already decided which suppliers are worth contacting. That decision now happens inside AI systems, and it leaves no trace in any tool you currently own.':
    'עד שקיימים ביקור, קליק, ליד או רשומת CRM, הקונה כבר החליט אילו ספקים שווים פנייה. ההחלטה הזו מתרחשת כיום בתוך מערכות AI, והיא אינה מותירה עקבות בשום כלי שברשותכם היום.',

  'Every category holds the models that answer one kind of commercial question — including a great many that businesses have never been able to measure, because nothing existed to measure them with.':
    'כל קטגוריה מכילה את המודלים שעונים על סוג אחד של שאלה מסחרית — ובכללם רבים מאוד שעסקים מעולם לא הצליחו למדוד, פשוט משום שלא היה במה למדוד אותם.',

  'Authority carries the heaviest weight in the index and the largest deficit. Every other vector is capped by it, so it is the only starting point that moves more than one measure.':
    'לסמכות המשקל הכבד ביותר במדד והגירעון הגדול ביותר. כל וקטור אחר מוגבל על ידה, ולכן זו נקודת ההתחלה היחידה שמזיזה יותר ממדד אחד.',

  'Enter a domain and one signal is released immediately. The rest of the position requires an account or a purchase — and the locked panels state exactly what sits behind them.':
    'הזינו דומיין ואות אחד ישוחרר מיד. שאר העמדה דורשת חשבון או רכישה — והלוחות הנעולים מציינים בדיוק מה נמצא מאחוריהם.',

  'Recognition is not uniform across AI systems, and buyers do not all use the same one. A single weak engine removes your business from every decision made through it.':
    'הזיהוי אינו אחיד בין מערכות AI, ולא כל הקונים משתמשים באותה אחת. מנוע חלש אחד מסיר את העסק שלכם מכל החלטה שנעשית דרכו.',

  'Every buyer who asks this engine receives a supplier shortlist your business is structurally absent from — and no measurement you own records that it happened.':
    'כל קונה ששואל את המנוע הזה מקבל רשימת ספקים שהעסק שלכם נעדר ממנה מבנית — ושום מדידה שברשותכם אינה מתעדת שזה קרה.',

  'Twelve engines run beneath the questions. They are named here for completeness — nobody buys an engine, and nothing above required you to know one existed.':
    'שנים־עשר מנועים פועלים מתחת לשאלות. הם מוזכרים כאן לשם השלמות — איש אינו קונה מנוע, ושום דבר למעלה לא חייב אתכם לדעת שקיים אחד.',

  'Losses are not spread evenly across the buying journey. They concentrate at one stage — and it is the stage conventional measurement is least able to see.':
    'ההפסדים אינם מתפרסים באופן שווה על פני מסע הרכישה. הם מתרכזים בשלב אחד — והוא השלב שהמדידה המקובלת מתקשה לראות יותר מכול.',

  'Diagnosis without sequence produces activity rather than movement. Impact is verified by signal movement after execution — never by task completion.':
    'אבחון ללא סדר פעולות מייצר פעילות ולא תזוזה. ההשפעה מאומתת לפי תזוזת האות לאחר הביצוע — לעולם לא לפי השלמת משימה.',

  'The window is an observation about category formation, not a sales deadline. It is re-assessed every quarter and it can move in either direction.':
    'החלון הוא תצפית על התגבשות הקטגוריה, לא מועד אחרון מכירתי. הוא נבחן מחדש בכל רבעון והוא יכול לזוז לשני הכיוונים.',

  'Content and advertising investment cannot move an answer while the underlying record is wrong. Spend on either is spend against a locked door.':
    'השקעה בתוכן ובפרסום אינה יכולה להזיז תשובה כל עוד הרשומה הבסיסית שגויה. הוצאה על כל אחד מהם היא הוצאה מול דלת נעולה.',

  'Recognition is cheap to fix and blocks everything else. It is the only intervention on this page that can be completed in under thirty days.':
    'זיהוי זול לתיקון וחוסם את כל השאר. זו ההתערבות היחידה בעמוד הזה שניתן להשלים בפחות משלושים יום.',

  'Systems do not recommend what they cannot corroborate. Self-description is treated as a claim; third-party reference is treated as evidence.':
    'מערכות אינן ממליצות על מה שאינן יכולות לאשש. תיאור עצמי נחשב לטענה; הפניה של צד שלישי נחשבת לראיה.',

  'Supplier evaluation is the moment a buyer stops choosing a solution and starts choosing a vendor. It is the stage that assigns the order.':
    'הערכת ספקים היא הרגע שבו קונה מפסיק לבחור פתרון ומתחיל לבחור ספק. זהו השלב שמקצה את ההזמנה.',

  'Share of recommendations is the symptom. The cause is what a system can cite when it has to justify naming one supplier ahead of another.':
    'נתח ההמלצות הוא הסימפטום. הסיבה היא מה שמערכת יכולה לצטט כשהיא נדרשת להצדיק הצבת ספק אחד לפני אחר.',

  'Earlier stages shape opinion. This stage selects the vendor. A business can lead the first three stages and still never be contacted.':
    'השלבים המוקדמים מעצבים דעה. השלב הזה בוחר את הספק. עסק יכול להוביל בשלושת השלבים הראשונים ועדיין לא ליצור איתו קשר לעולם.',

  'Six interventions, sequenced. Each names its owner, its deadline, the signal it must move and what has to land before it can move it.':
    'שש התערבויות, לפי סדר. כל אחת מציינת את האחראי שלה, את מועד היעד, את האות שעליה להזיז ומה חייב לנחות לפני שהיא תוכל להזיז אותו.',

  'These questions are currently reachable only by buying the click — which is why paid cost rises while organic position stays flat.':
    'לשאלות הללו ניתן להגיע כיום רק בקניית הקליק — ולכן העלות הממומנת עולה בעוד המיקום האורגני נותר במקום.',

  'The competitor named here receives the enquiry. Your business is not compared and rejected — it is never compared at all.':
    'המתחרה שמוזכר כאן מקבל את הפנייה. העסק שלכם אינו מושווה ונפסל — הוא כלל אינו מושווה.',

  'A system that cannot categorise a business cannot recommend it. This sits upstream of every other measure on this page.':
    'מערכת שאינה מסוגלת לסווג עסק אינה מסוגלת להמליץ עליו. זה נמצא במעלה הזרם של כל מדד אחר בעמוד הזה.',

  'Google rank and AI recommendation are separate commercial assets. Strength in one does not carry into the other.':
    'דירוג ב-Google והמלצת AI הם נכסים מסחריים נפרדים. חוזק באחד אינו עובר לאחר.',

  'No lead was lost, because no lead was ever created. Conventional measurement recorded nothing.':
    'שום ליד לא אבד, משום ששום ליד לא נוצר מעולם. המדידה המקובלת לא תיעדה דבר.',

  'Not a brand-preference gap. An evidence gap, and evidence can be commissioned.':
    'לא פער העדפת מותג. פער ראיות, וראיות אפשר להזמין.',

  'Every answer on this page is produced by an intelligence engine.':
    'כל תשובה בעמוד הזה מיוצרת על ידי מנוע מודיעין.',

  'Authority built before this becomes the default answer.':
    'סמכות שנבנית לפני כן הופכת לתשובת ברירת המחדל.',

  'Authority established before the answer set stabilises':
    'סמכות שמבוססת לפני שמרחב התשובות מתייצב',

  'Displacement cost rises materially.': 'עלות ההדחה עולה משמעותית.',
  'Category language began forming.': 'שפת הקטגוריה החלה להתגבש.',
  'AI looks for proof it can cite': 'ה-AI מחפש הוכחה שהוא יכול לצטט',
  'The intelligence ecosystem': 'מערכת המודיעין',
  'Where presence collapses': 'היכן הנוכחות קורסת',
  'What changes the answer': 'מה משנה את התשובה',
  'Advantage holds until': 'היתרון מחזיק עד',
  'Blind-spot questions': 'שאלות בנקודה עיוורת',
  'Best Google position': 'המיקום הטוב ביותר ב-Google',
  'Strongest competitor': 'המתחרה החזק ביותר',
  'Highest-risk engine': 'המנוע בסיכון הגבוה ביותר',
  'So AI recommends': 'ולכן ה-AI ממליץ',
  'A buyer asks AI': 'קונה שואל AI',

  /* ==========================================================================
     HOME PAGE — the prose written inline on the section components.

     Tokens in braces are substituted after lookup, so a translation may put
     {pct} wherever Hebrew needs it. <b>…</b> marks an emphasised run and is
     rendered as a styled span, never as markup — it can move too.
     ======================================================================= */

  /* --- The premise ------------------------------------------------------ */
  'The shift': 'התזוזה',
  '{n} of {total}': '{n} מתוך {total}',
  'commercial decisions complete without your business being named at all.':
    'החלטות מסחריות מסתיימות מבלי שהעסק שלכם נזכר בהן כלל.',
  'presence at the stage where the supplier is actually chosen.':
    'נוכחות בשלב שבו הספק נבחר בפועל.',
  'That stage carries {volume} of the query volume and decides {revenue} of the revenue. Volume-ranked tooling calls it unimportant.':
    'השלב הזה נושא {volume} מנפח השאילתות ומכריע {revenue} מההכנסה. כלים שמדרגים לפי נפח מסמנים אותו כלא חשוב.',
  'more independent evidence supports the competitor engines recommend instead.':
    'יותר ראיות בלתי תלויות תומכות במתחרה שהמנועים ממליצים עליו במקומכם.',

  /* --- Q1 · Does AI know your business? --------------------------------- */
  'AI systems understand what your business is in {score} of 100 commercial evaluations. One engine holds no stable record of you at all.':
    'מערכות AI מבינות מהו העסק שלכם ב-{score} מתוך 100 הערכות מסחריות. מנוע אחד אינו מחזיק בכם רשומה יציבה כלל.',
  '{engine} understands your business at {score} of 100 and names it in none of the tracked decisions.':
    '{engine} מבין את העסק שלכם ברמה של {score} מתוך 100 ואינו מזכיר אותו באף אחת מההחלטות הנמדדות.',
  'Present in only {present} of supplier evaluations. Missing from {missing} of AI buying decisions.':
    'נוכחים ב-{present} בלבד מהערכות הספקים. נעדרים מ-{missing} מהחלטות הרכש המונחות AI.',
  'Absence here is exclusion from the shortlist for the {revenue} of revenue that arrives through supplier evaluation.':
    'היעדרות כאן משמעה הדרה מרשימת המועמדים עבור {revenue} מההכנסה שמגיעה דרך הערכת ספקים.',

  /* --- Q2 · Where are you losing decisions? ------------------------------ */
  'Coverage falls to {pct} at supplier evaluation — the last stage before the order is assigned.':
    'הכיסוי צונח ל-{pct} בשלב הערכת הספקים — השלב האחרון לפני שההזמנה נמסרת.',
  '{n} commercial questions return no AI recommendation and no Google position in the top ten. The decision happens on neither surface.':
    '{n} שאלות מסחריות אינן מחזירות המלצת AI ואף לא מיקום בעשירייה הראשונה ב-Google. ההחלטה אינה מתרחשת באף אחד משני המשטחים.',
  'Supplier evaluation carries {volume} of the query volume and decides {revenue} of the revenue. Ranking work by volume puts it last.':
    'הערכת ספקים נושאת {volume} מנפח השאילתות ומכריעה {revenue} מההכנסה. תיעדוף עבודה לפי נפח מציב אותה אחרונה.',

  /* --- Q3 · Why is the competitor recommended? --------------------------- */
  '{competitor} can be verified through {theirs} independent sources. Your business can be verified through {ours}.':
    'ניתן לאמת את {competitor} דרך {theirs} מקורות בלתי תלויים. את העסק שלכם ניתן לאמת דרך {ours}.',
  'Closing {multiple}× is a publishing and validation programme with a known cost, not a brand campaign with an unknown one.':
    'סגירת פער של פי {multiple} היא תוכנית פרסום ואימות בעלת עלות ידועה, לא קמפיין מותג בעלות בלתי ידועה.',
  'Receives the decision': 'מקבל את ההחלטה',
  'Your business': 'העסק שלכם',
  'Authority advantage': 'יתרון סמכות',
  'Why the decision goes to them': 'מדוע ההחלטה הולכת אליהם',
  'The category median is <b>{n}</b> independent sources. This is not a brand-preference gap that marketing spend closes. It is an evidence gap, and evidence is something a business can commission.':
    'החציון בקטגוריה עומד על <b>{n}</b> מקורות בלתי תלויים. אין זה פער בהעדפת מותג שהוצאה שיווקית סוגרת. זהו פער ראיות, וראיות הן דבר שעסק יכול להזמין.',
  'authority source': 'מקור סמכות',
  'authority sources': 'מקורות סמכות',
  'Named in <b>{pct}</b> of AI buying decisions.':
    'נזכרים ב-<b>{pct}</b> מהחלטות הרכש המונחות AI.',

  /* --- Q4 · What evidence is missing? ------------------------------------ */
  'How the gap becomes a lost decision': 'כיצד הפער הופך להחלטה אבודה',
  'Every node below opens the evidence behind it, with its confidence and its limits.':
    'כל צומת למטה פותח את הראיות שמאחוריו, לצד רמת הוודאות שלו וגבולותיו.',

  /* --- Q6 · What should happen next? ------------------------------------- */
  'Ordered by commercial exposure, urgency, effort and competitive pressure.':
    'מסודר לפי חשיפה מסחרית, דחיפות, מאמץ ולחץ תחרותי.',
  'Open the full intervention plan': 'פתחו את תוכנית ההתערבות המלאה',
  Priority: 'עדיפות',
  'Verified by: {metric}': 'מאומת באמצעות: {metric}',
  Dependencies: 'תלויות',
  and: 'וכן',
  'Cannot move its signal until <b>{blockers}</b> lands.':
    'לא ניתן להזיז את האות שלה עד ש<b>{blockers}</b> יונחת.',
  'None. Can start immediately.': 'אין. ניתן להתחיל מיד.',

  /* --- Q7 · The executive position --------------------------------------- */
  'Decision Health': 'בריאות ההחלטה',
  'The binding constraint': 'האילוץ הכובל',
  'Held down primarily by {vector}.': 'מרוסן בעיקר על ידי {vector}.',
  '{vector} reads <b>{score} of 100</b> and carries the heaviest weight in the index at <b>{weight}%</b>. Lowest score, largest lever — every other measure is capped by it.':
    '{vector} עומד על <b>{score} מתוך 100</b> ונושא את המשקל הכבד ביותר במדד, <b>{weight}%</b>. הציון הנמוך ביותר, המנוף הגדול ביותר — כל מדד אחר מוגבל על ידו.',
  '{vector} reads <b>{score}</b>. The offer matches demand. The constraint is entirely on the evidence side, which is the side a business can change.':
    '{vector} עומד על <b>{score}</b>. ההיצע תואם את הביקוש. האילוץ נמצא כולו בצד הראיות — הצד שעסק יכול לשנות.',
  'What Decision Health is made of': 'ממה מורכבת בריאות ההחלטה',
  'Weighted, published, recomputed monthly': 'משוקלל, מפורסם, מחושב מחדש מדי חודש',
  'weight {pct}%': 'משקל {pct}%',
  'Open the full executive position': 'פתחו את התמונה הניהולית המלאה',

  /* --- Run it on your own business --------------------------------------- */
  'Your domain': 'הדומיין שלכם',
  'Run instant preview': 'הריצו תצוגה מקדימה מיידית',
  'Re-run preview': 'הריצו שוב את התצוגה המקדימה',
  'Seeded demonstration. This environment always reconstructs Northwind Supply, an industrial distributor, so every figure stays verifiable.':
    'הדגמה מבוססת נתוני זרע. סביבה זו משחזרת תמיד את Northwind Supply, מפיץ תעשייתי, כך שכל נתון נותר ניתן לאימות.',
  'AI recognition': 'זיהוי על ידי AI',
  'Not ranking': 'לא מדורג',
  '{score}/100 recognition': 'זיהוי {score}/100',
  '{pct} of recommendations': '{pct} מההמלצות',
  'Unlocked signal': 'אות פתוח',
  'Behind the gate': 'מאחורי השער',
  '<b>{n}</b> further readouts, each with evidence, exposure and a prescribed action.':
    '<b>{n}</b> קריאות נוספות, לכל אחת ראיות, חשיפה ופעולה מומלצת.',
  'Competitor capture, authority evidence, paid dependency, missed decisions, narrative control, trust readiness and strategic timing.':
    'תפיסת מתחרים, ראיות סמכות, תלות בתשלום, החלטות שהוחמצו, שליטה בנרטיב, מוכנות לאמון ותזמון אסטרטגי.',
  'Unlock full intelligence': 'פתחו את המודיעין המלא',
  'Buy a single answer': 'רכשו תשובה אחת',
  'See a single answer': 'צפו בתשובה אחת',

  /* --- The ecosystem and the machinery ----------------------------------- */
  'Seven questions were asked above. {n} models stand behind them.':
    'שבע שאלות נשאלו למעלה. {n} מודלים עומדים מאחוריהן.',
  'intelligence modules in total, each answering one business question with evidence, analysis and a recommendation.':
    'מודולי מודיעין בסך הכול, כל אחד עונה על שאלה עסקית אחת בליווי ראיות, ניתוח והמלצה.',
  'Explore the intelligence ecosystem': 'חקרו את מערכת המודיעין',
  Underneath: 'מתחת לפני השטח',
  'Four engines are built in this environment. All twelve appear on the':
    'ארבעה מנועים בנויים בסביבה זו. כל שנים־עשר מופיעים ב',
  'engines overview': 'סקירת המנועים',

  /* --- The close ---------------------------------------------------------- */
  'Every day the window stays open, the same position costs less to take. Every day after it closes, it costs more.':
    'כל יום שבו החלון נותר פתוח, אותה עמדה עולה פחות. כל יום לאחר שייסגר, היא תעלה יותר.',
  'See how AI decides about you': 'ראו כיצד ה-AI מחליט לגביכם',
  'Every figure on this page is computed from {n} tracked commercial decisions across six AI engines.':
    'כל נתון בעמוד זה מחושב מתוך {n} החלטות מסחריות נמדדות בשישה מנועי AI.',
  'See the methodology': 'עיינו במתודולוגיה',

  /* --- Hero · trust strip and the reconstruction ------------------------- */
  'Six AI engines observed': 'שישה מנועי AI נצפים',
  '24 commercial decisions tracked': '24 החלטות מסחריות נמדדות',
  'Evidence on every claim': 'ראיות לכל טענה',
  'Confidence and limits stated': 'רמת ודאות וגבולות מוצהרים',
  'Independent sources an engine can cite when it recommends a supplier. Your own website does not count — engines treat self-description as a claim, not as evidence.':
    'מקורות בלתי תלויים שמנוע יכול לצטט כשהוא ממליץ על ספק. האתר שלכם אינו נספר — מנועים מתייחסים לתיאור עצמי כטענה, לא כראיה.',
  'Your business was named by <b>{named} of {total}</b> engines. Not because the offer is weaker — because <b>{theirs} sources outrank {ours}</b> when a system has to stand behind an answer.':
    'העסק שלכם הוזכר על ידי <b>{named} מתוך {total}</b> מנועים. לא משום שההיצע חלש יותר — אלא משום ש<b>{theirs} מקורות גוברים על {ours}</b> כשמערכת נדרשת לעמוד מאחורי תשובה.',
  '{n} sources': '{n} מקורות',
  '{name}: {n} independent sources': '{name}: {n} מקורות בלתי תלויים',
  'A reconstruction of one AI buying decision: the question a buyer asked, the {theirs} independent sources supporting {winner} against {ours} supporting your business — a {advantage}× evidence advantage — the resulting recommendation, and the intervention that changes it.':
    'שחזור של החלטת רכש אחת המונחית AI: השאלה שקונה שאל, {theirs} המקורות הבלתי תלויים התומכים ב-{winner} מול {ours} התומכים בעסק שלכם — יתרון ראיות של פי {advantage} — ההמלצה שנוצרה מכך, וההתערבות שמשנה אותה.',

  /* --- The strategic window ---------------------------------------------- */
  '{position} market': 'שוק {position}',
  '{n} months open': '{n} חודשים פתוח',
  '<b>{n}</b> days of advantage remain': 'נותרו <b>{n}</b> ימי יתרון',
  'After <b>{date}</b>, the same position still exists — it just has to be taken from an incumbent recommendation rather than claimed from open ground.':
    'לאחר <b>{date}</b>, אותה עמדה עדיין קיימת — אלא שיהיה צריך לקחת אותה מהמלצה מבוססת במקום לתפוס אותה בשטח פנוי.',
  Today: 'היום',
  'Window opened': 'החלון נפתח',
  'Window closes': 'החלון נסגר',
  'Why this estimate exists': 'מדוע ההערכה הזו קיימת',
  'Market readiness reads <b>{n} of 100</b>. Buyers are educated. The answers they receive are not yet fixed.':
    'מוכנות השוק עומדת על <b>{n} מתוך 100</b>. הקונים בשלים. התשובות שהם מקבלים טרם התקבעו.',

  /* --- The decision journey ----------------------------------------------- */
  'Stage {n}': 'שלב {n}',
  '{volume}/mo · {share}': '{volume}/חודש · {share}',
  '{pct} coverage': 'כיסוי {pct}',
  'Analytics and CRM': 'אנליטיקה ו-CRM',
  'Requires a visit, form or record to exist': 'דורש ביקור, טופס או רשומה כדי להתקיים',
  'Requires a tracked query with search volume': 'דורש שאילתה נמדדת בעלת נפח חיפוש',
  'Observes the decision itself, at every stage': 'צופה בהחלטה עצמה, בכל שלב',
  Visible: 'נראה',
  Blind: 'עיוור',
  'Executive conclusion': 'מסקנה ניהולית',
  'Conventional tooling begins observing at stage four — after the buyer has already decided what to buy and is choosing whom to buy it from.':
    'כלים מקובלים מתחילים לצפות רק בשלב הרביעי — אחרי שהקונה כבר החליט מה לקנות ובוחר ממי לקנות.',
  'The first three stages generate no visit, click, lead or CRM record. They are not measured badly; they are not measured at all.':
    'שלושת השלבים הראשונים אינם מייצרים ביקור, קליק, ליד או רשומת CRM. הם אינם נמדדים גרוע; הם אינם נמדדים כלל.',

  /* --- The Google vs AI gap matrix ---------------------------------------- */
  'Absent from both surfaces on high-value questions. The most expensive class of gap.':
    'נעדרים משני המשטחים בשאלות בעלות ערך גבוה. סוג הפער היקר ביותר.',
  'Visible in Google and recommended by AI. No action required.':
    'נראים ב-Google ומומלצים על ידי AI. לא נדרשת פעולה.',
  'of {total}': 'מתוך {total}',
  'Commercial question': 'שאלה מסחרית',
  Volume: 'נפח',
  'Google visibility': 'נראות ב-Google',
  Classification: 'סיווג',
  'Not in top 100': 'לא ב-100 הראשונים',
  'Position {n}': 'מיקום {n}',
  Recommended: 'מומלץ',
  'Showing {shown} of {total} tracked commercial questions.':
    'מוצגות {shown} מתוך {total} שאלות מסחריות נמדדות.',

  /* --- The decision graph -------------------------------------------------- */
  Input: 'קלט',
  Interpretation: 'פרשנות',
  Market: 'שוק',
  Channel: 'ערוץ',
  Outcome: 'תוצאה',
  'Decision intelligence graph. Thirteen connected signals ending in a prescription.':
    'גרף מודיעין החלטות. שלושה־עשר אותות מקושרים המסתיימים בהמלצה מרשמית.',
  '{label}: {value}. {kind}. {evidence} Activate to open the readout.':
    '{label}: {value}. {kind}. {evidence} הפעילו כדי לפתוח את הקריאה.',
  'Hover or focus a node to isolate its relationships. Select any node to open the evidence behind it.':
    'רחפו מעל צומת או מקדו אותו כדי לבודד את קשריו. בחרו בכל צומת כדי לפתוח את הראיות שמאחוריו.',
  'Read the graph as a table': 'קראו את הגרף כטבלה',
  Signal: 'אות',
  Value: 'ערך',
  'Leads to': 'מוביל אל',

  /* ==========================================================================
     ELECTION INTELLIGENCE.

     Doc §3: anonymised or demonstration data only, never a real political
     client. The race, the candidates and the county are invented, and every
     caption says so — that disclaimer must survive translation, so it is part
     of each string rather than appended by the component.
     ======================================================================= */
  'Demonstration subject': 'נושא ההדגמה',
  'Entirely fictional. No real person, party or race.':
    'בדיוני לחלוטין. אין אדם, מפלגה או מרוץ אמיתיים.',
  Race: 'מרוץ',
  'County Commission': 'מועצת המחוז',
  'Riverbend County — District 4': 'מחוז Riverbend — אזור 4',
  Candidate: 'מועמד',
  Opponent: 'יריב',
  'A. Marchetti': 'א. מרקטי',
  'D. Okonkwo': 'ד. אוקונקוו',

  'Election War Room — the live operational view':
    'חדר מלחמת הבחירות — התצוגה המבצעית החיה',
  'The Election War Room. Fictional race, demonstration data — no real candidate, party or campaign.':
    'חדר מלחמת הבחירות. מרוץ בדיוני, נתוני הדגמה — אין מועמד, מפלגה או קמפיין אמיתיים.',
  'Candidate / party dashboard — the standing position':
    'לוח מחוונים למועמד/מפלגה — העמדה הנוכחית',
  'Candidate and party position. Fictional race, demonstration data — no real candidate, party or campaign.':
    'עמדת המועמד והמפלגה. מרוץ בדיוני, נתוני הדגמה — אין מועמד, מפלגה או קמפיין אמיתיים.',
  'Election narrative intelligence — positive vs negative narratives':
    'מודיעין נרטיבים בחירות — נרטיבים חיוביים מול שליליים',
  'Which narratives are strengthening the position and which are damaging it. Fictional race, demonstration data.':
    'אילו נרטיבים מחזקים את העמדה ואילו פוגעים בה. מרוץ בדיוני, נתוני הדגמה.',
  'Positive vs negative narratives — the polarity split':
    'נרטיבים חיוביים מול שליליים — פילוח הקוטביות',
  'Positive against negative, by reach and by direction of travel. Fictional race, demonstration data.':
    'חיובי מול שלילי, לפי טווח הגעה ולפי כיוון התנועה. מרוץ בדיוני, נתוני הדגמה.',
  'Audience / segment movement — who is moving toward and away':
    'תנועת קהלים/פלחים — מי מתקרב ומי מתרחק',
  'Which audiences are moving closer and which are moving away. Fictional race, demonstration data.':
    'אילו קהלים מתקרבים ואילו מתרחקים. מרוץ בדיוני, נתוני הדגמה.',
  'Opponent intelligence — competing narratives and ownership':
    'מודיעין יריבים — נרטיבים מתחרים ובעלות עליהם',
  'What the opposing account is, and which issues it owns. Fictional race, demonstration data.':
    'מהי הגרסה של הצד שכנגד, ועל אילו נושאים היא שולטת. מרוץ בדיוני, נתוני הדגמה.',
  'Influencers and sources shaping the narrative':
    'משפיענים ומקורות שמעצבים את הנרטיב',
  'Who is strengthening the position and who is damaging it. Fictional race, demonstration data.':
    'מי מחזק את העמדה ומי פוגע בה. מרוץ בדיוני, נתוני הדגמה.',
  'AI + Google election intelligence — per-engine narrative leads':
    'מודיעין בחירות ב-AI וב-Google — הנרטיב המוביל בכל מנוע',
  'What each AI engine and Google surface leads with. Fictional race, demonstration data.':
    'במה כל מנוע AI ו-Google פותחים. מרוץ בדיוני, נתוני הדגמה.',
  'Multilingual intelligence — narrative gaps between languages':
    'מודיעין רב-לשוני — פערי נרטיב בין שפות',
  'Where the account of a candidate differs by language. Fictional race, demonstration data.':
    'היכן הגרסה על מועמד שונה בין שפות. מרוץ בדיוני, נתוני הדגמה.',
  'Risks and opportunities — emerging threats and open positions':
    'סיכונים והזדמנויות — איומים מתהווים ועמדות פנויות',
  'Emerging threats and unclaimed positions, ranked. Fictional race, demonstration data.':
    'איומים מתהווים ועמדות שטרם נתפסו, מדורגים. מרוץ בדיוני, נתוני הדגמה.',
  'Recommended actions — the campaign action plan':
    'פעולות מומלצות — תוכנית הפעולה של הקמפיין',
  'What to do now, who owns it, and how the movement will be measured. Fictional race, demonstration data.':
    'מה לעשות עכשיו, מי אחראי, וכיצד תימדד התזוזה. מרוץ בדיוני, נתוני הדגמה.',
  'Trend over time — narrative movement across the cycle':
    'מגמה לאורך זמן — תנועת הנרטיב לאורך המחזור',
  'How the position has moved across the cycle. Fictional race, demonstration data.':
    'כיצד זזה העמדה לאורך המחזור. מרוץ בדיוני, נתוני הדגמה.',

  /* ==========================================================================
     THE ENGINES OVERVIEW.
     ======================================================================= */
  'Intelligence engines': 'מנועי מודיעין',
  'Each engine answers a board-level business question, produces a connected intelligence readout and routes the user into action. Not a feature list — a set of questions the business needs answered.':
    'כל מנוע עונה על שאלה עסקית ברמת הדירקטוריון, מפיק קריאת מודיעין מקושרת ומנתב את המשתמש לפעולה. לא רשימת יכולות — מערך של שאלות שהעסק זקוק לתשובות עליהן.',
  'Built in this environment · 4 of 12': 'בנוי בסביבה זו · 4 מתוך 12',
  'Four engines, built to full depth': 'ארבעה מנועים, בנויים לעומק מלא',
  'Each carries a real seeded outcome, its evidence, its commercial consequence and the action it prescribes. They chain into one another — together they form the causal argument rather than four samples of it.':
    'כל אחד נושא תוצאה אמיתית מבוססת נתוני זרע, את ראיותיה, את השלכתה המסחרית ואת הפעולה שהיא מחייבת. הם משתרשרים זה לזה — יחד הם מרכיבים את הטיעון הסיבתי ולא ארבע דוגמאות שלו.',
  'The full operating system': 'מערכת ההפעלה המלאה',
  'Eight further engines available in the platform':
    'שמונה מנועים נוספים זמינים בפלטפורמה',
  'These are part of the operating system but are not built in this demonstration environment. Their business questions are listed so the shape of the full system is visible.':
    'אלה חלק ממערכת ההפעלה אך אינם בנויים בסביבת ההדגמה הזו. השאלות העסקיות שלהם מפורטות כדי שצורת המערכת המלאה תהיה גלויה.',
  'Available in platform': 'זמין בפלטפורמה',
  'Is the business present when customers ask AI whom to choose?':
    'האם העסק נוכח כשלקוחות שואלים את ה-AI במי לבחור?',
  'Which gap is commercially meaningful enough to fix first?':
    'איזה פער משמעותי מסחרית דיו כדי לתקן אותו ראשון?',
  'When does paid search become structurally inefficient?':
    'מתי חיפוש ממומן הופך לבלתי יעיל מבחינה מבנית?',
  'Is the business visible but still unsafe to recommend?':
    'האם העסק נראה אך עדיין לא בטוח להמליץ עליו?',
  'When the market explains the category, whose language does it use?':
    'כשהשוק מסביר את הקטגוריה, בלשונו של מי הוא משתמש?',
  'Is the market ready, and how long is the window open?':
    'האם השוק בשל, וכמה זמן החלון פתוח?',
  'How does the business change across countries, languages and markets?':
    'כיצד העסק משתנה בין מדינות, שפות ושווקים?',
  'Does the route to market strengthen the brand or transfer power to intermediaries?':
    'האם הדרך לשוק מחזקת את המותג או מעבירה כוח למתווכים?',
  'See plans': 'ראו תוכניות',

  /* ==========================================================================
     THE INTELLIGENCE MARKETPLACE.
     ======================================================================= */
  'Seven categories of decision intelligence, each holding the models that answer one kind of commercial question. Most of them measure things a business has never been able to see — not because the questions are exotic, but because nothing existed to answer them.':
    'שבע קטגוריות של מודיעין החלטות, כל אחת מחזיקה את המודלים שעונים על סוג אחד של שאלה מסחרית. רובם מודדים דברים שעסק מעולם לא היה מסוגל לראות — לא משום שהשאלות אקזוטיות, אלא משום שלא היה קיים דבר שיענה עליהן.',
  'Intelligence categories': 'קטגוריות מודיעין',
  'Intelligence modules': 'מודולי מודיעין',
  'Engines beneath them': 'מנועים שמתחתיהם',
  'of these modules run live in this environment against a real reconstructed business. The rest are available in the platform.':
    'מהמודולים הללו פועלים חי בסביבה זו מול עסק משוחזר אמיתי. השאר זמינים בפלטפורמה.',
  'Start with the question you actually have.': 'התחילו מהשאלה שבאמת יש לכם.',
  'Each category opens into the modules underneath it. Every module answers one business question and returns evidence, an analysis and a recommendation — never a figure on its own.':
    'כל קטגוריה נפתחת אל המודולים שתחתיה. כל מודול עונה על שאלה עסקית אחת ומחזיר ראיות, ניתוח והמלצה — לעולם לא נתון בפני עצמו.',
  'What you are buying': 'מה אתם רוכשים',
  'The document is the output. The intelligence is the product.':
    'המסמך הוא התפוקה. המודיעין הוא המוצר.',
  'How the models work': 'כיצד המודלים פועלים',
  'Every claim carries the observation behind it — which engine, which question, which date. A conclusion you cannot audit is an opinion.':
    'כל טענה נושאת את התצפית שמאחוריה — איזה מנוע, איזו שאלה, איזה תאריך. מסקנה שאינכם יכולים לבקר היא דעה.',
  'What the evidence means commercially, what is causing it, and how confident the model can honestly be. Limits are stated, never implied.':
    'מה משמעות הראיות מסחרית, מה גורם לכך, ובאיזו מידה המודל יכול להיות בטוח ביושר. המגבלות מוצהרות, לעולם לא נרמזות.',
  'What to do, who owns it, by when, and what signal should move as a result. Verified afterwards against what actually moved.':
    'מה לעשות, מי אחראי, עד מתי, ואיזה אות אמור לזוז כתוצאה מכך. מאומת לאחר מכן מול מה שזז בפועל.',
  'Whatever the business question, there is already intelligence built for it.':
    'תהיה השאלה העסקית אשר תהיה, כבר קיים מודיעין שנבנה עבורה.',
  'See a module run live': 'צפו במודול פועל חי',
  'Monitor continuously instead': 'עקבו ברציפות במקום זאת',
  '7 live in demo': '7 פועלים בהדגמה',
  '4 live in demo': '4 פועלים בהדגמה',
  Analysis: 'ניתוח',
  Recommendation: 'המלצה',
  modules: 'מודולים',
  Explore: 'חקרו',
  '+ 1 more': '+ עוד 1',
  '+ 2 more': '+ עוד 2',
  '+ 4 more': '+ עוד 4',
  '+ 6 more': '+ עוד 6',
  '+ {n} more': '+ עוד {n}',
  '{n} live in demo': '{n} פועלים בהדגמה',
  '<b>{n}</b> of these modules run live in this environment against a real reconstructed business. The rest are available in the platform.':
    '<b>{n}</b> מהמודולים הללו פועלים חי בסביבה זו מול עסק משוחזר אמיתי. השאר זמינים בפלטפורמה.',
  'Built in this environment · {n} of {total}': 'בנוי בסביבה זו · {n} מתוך {total}',

  /* ==========================================================================
     LEGAL.

     FLAGGED: this page says "Nothing is transmitted anywhere", which stops
     being true the moment CAL_API_KEY is set and a booking sends a name and
     an email to Cal.com. The English needs rewriting before launch, and these
     translations follow it.
     ======================================================================= */
  Legal: 'משפטי',
  'Legal and data handling': 'משפטי וטיפול בנתונים',
  'Legal and data handling | GeoRepute': 'משפטי וטיפול בנתונים | GeoRepute',
  'Privacy, terms, data processing and security posture for the GeoRepute demonstration environment.':
    'פרטיות, תנאים, עיבוד נתונים ועמדת אבטחה עבור סביבת ההדגמה של GeoRepute.',
  'What this environment does and does not do with data.':
    'מה סביבה זו עושה ומה אינה עושה עם נתונים.',
  'This is a demonstration build. Rather than reproduce boilerplate that would not apply to it, each section below states the actual position.':
    'זוהי גרסת הדגמה. במקום לשכפל נוסח סטנדרטי שלא היה חל עליה, כל סעיף למטה מציג את המצב בפועל.',
  Privacy: 'פרטיות',
  'This environment collects nothing. There is no analytics script, no tag manager, no session recording and no third-party tracker on any page.':
    'סביבה זו אינה אוספת דבר. אין סקריפט אנליטיקה, אין מנהל תגיות, אין הקלטת הפעלות ואין גשש צד שלישי באף עמוד.',
  'The only data stored about you is your theme preference and any demonstration purchases, both held in your browser’s localStorage and readable only by this site. Nothing is transmitted anywhere. Clearing site data removes all of it, and the purchase-confirmation screen offers a reset control.':
    'הנתונים היחידים שנשמרים עליכם הם העדפת ערכת הנושא שלכם ורכישות הדגמה, שניהם מוחזקים ב-localStorage של הדפדפן שלכם וניתנים לקריאה רק על ידי אתר זה. דבר אינו נשלח לשום מקום. ניקוי נתוני האתר מוחק את כל זה, ומסך אישור הרכישה מציע פקד איפוס.',
  'Terms of service': 'תנאי שימוש',
  'No commercial terms apply. Nothing on this site constitutes an offer, and no contract can be formed through it.':
    'לא חלים תנאים מסחריים. דבר באתר זה אינו מהווה הצעה, ולא ניתן ליצור דרכו חוזה.',
  'Pricing shown throughout is placeholder and clearly marked as such on the pricing page. The checkout collects no payment details and processes no charge.':
    'התמחור המוצג לאורך האתר הוא זמני ומסומן ככזה בבירור בעמוד התמחור. תהליך התשלום אינו אוסף פרטי תשלום ואינו מבצע חיוב.',
  'Data processing': 'עיבוד נתונים',
  'Northwind Supply is a fictional organisation. Every figure attributed to it is seeded, internally consistent and derived from a published set of anchor facts. No real company’s data appears anywhere in this environment.':
    'Northwind Supply היא ארגון בדיוני. כל נתון המיוחס לה מבוסס נתוני זרע, עקבי פנימית ונגזר ממערך מפורסם של עובדות עוגן. נתונים של חברה אמיתית אינם מופיעים בשום מקום בסביבה זו.',
  'Competitor names, domains and citation counts are invented. Any resemblance to an operating business is coincidental and unintended.':
    'שמות מתחרים, דומיינים ומספרי ציטוטים הומצאו. כל דמיון לעסק פעיל הוא מקרי ולא מכוון.',
  'AI engines are referenced by their public product names for accuracy of description. No affiliation, endorsement or partnership is claimed or implied.':
    'מנועי AI מוזכרים בשמות המוצר הפומביים שלהם לשם דיוק בתיאור. לא נטענת ולא נרמזת שום שותפות, חסות או קשר.',
  Security: 'אבטחה',
  'There is no authentication, no user account and no server-side session. The sign-in screen requests no password because none is checked — inviting a real credential into a demonstration would be a hazard, not a convenience.':
    'אין אימות, אין חשבון משתמש ואין הפעלה בצד השרת. מסך הכניסה אינו מבקש סיסמה משום שאיש אינו בודק אותה — הזמנת אישור גישה אמיתי לתוך הדגמה הייתה מהווה סיכון, לא נוחות.',
  'No external network requests are made at runtime. Fonts are self-hosted, all visuals are generated in CSS or SVG, and the content security posture assumes no third-party origin is trusted.':
    'לא מתבצעות בקשות רשת חיצוניות בזמן ריצה. הגופנים מאוחסנים עצמאית, כל החזותיות נוצרת ב-CSS או ב-SVG, ועמדת אבטחת התוכן מניחה שאין מקור צד שלישי מהימן.',
  'Before this platform is operated commercially, these sections must be replaced with reviewed policies covering the real data flows, retention periods, sub-processors and jurisdictions involved.':
    'לפני שפלטפורמה זו תופעל מסחרית, יש להחליף את הסעיפים הללו במדיניות שנבדקה ומכסה את זרימות הנתונים האמיתיות, תקופות השמירה, מעבדי המשנה והתחומים המשפטיים המעורבים.',
  'Return home': 'חזרה לדף הבית',

  /* ==========================================================================
     SIGN IN.
     ======================================================================= */
  'Sign In': 'כניסה',
  'Sign In | GeoRepute': 'כניסה | GeoRepute',
  Home: 'דף הבית',
  'Enter the demonstration workspace': 'היכנסו לסביבת העבודה להדגמה',
  'This environment has no authentication. Every visitor sees the same seeded organisation, Northwind Supply, so that every figure stays verifiable against the published methodology.':
    'בסביבה זו אין אימות. כל מבקר רואה את אותו ארגון מבוסס נתוני זרע, Northwind Supply, כך שכל נתון נותר ניתן לאימות מול המתודולוגיה המפורסמת.',
  Workspace: 'סביבת עבודה',
  'northwindsupply.com · US Midwest': 'northwindsupply.com · מערב התיכון, ארה"ב',
  'Continue to Mission Control': 'המשיכו למרכז הבקרה',
  'No password is requested because none is checked. Real authentication drops in behind the same route without changing this screen’s place in the flow.':
    'לא מתבקשת סיסמה משום שאיש אינו בודק אותה. אימות אמיתי נכנס מאחורי אותו נתיב מבלי לשנות את מקומו של מסך זה בזרימה.',

  /* ==========================================================================
     THE PLATFORM PAGES — /app/*.

     Mostly seed prose reaching the screen through translateContent, plus the
     chrome each view wraps in t(). Signal names and readout titles are shared
     with the marketing pages and live in the seed section further down.
     ======================================================================= */

  /* --- Public Narrative Intelligence ----------------------------------------- */
  'Public narrative intelligence': 'מודיעין נרטיבים ציבוריים',
  'Public Narrative Intelligence | GeoRepute': 'מודיעין נרטיבים ציבוריים | GeoRepute',
  'What story is the market telling about us?': 'איזה סיפור השוק מספר עלינו?',
  'Not how often the business is mentioned. Which accounts of it are active, who owns each one, and which of them decide whether it gets chosen.':
    'לא כמה פעמים העסק מוזכר. אילו גרסאות עליו פעילות, מי הבעלים של כל אחת, ואילו מהן מכריעות אם ייבחר.',
  'Election mode': 'מצב בחירות',
  'Political intelligence': 'מודיעין פוליטי',

  /* Health */
  Health: 'בריאות',
  'Narrative health': 'בריאות הנרטיב',
  'Overall public sentiment': 'הסנטימנט הציבורי הכולל',
  'A weighted read of how much active conversation helps against how much hurts.':
    'קריאה משוקללת של כמה מהשיח הפעיל מסייע מול כמה פוגע.',
  'Narrative momentum': 'תנופת הנרטיב',
  'Narrative stability': 'יציבות הנרטיב',
  'Narrative balance': 'מאזן הנרטיב',
  'Positive narrative strength': 'עוצמת הנרטיב החיובי',
  'Negative narrative strength': 'עוצמת הנרטיב השלילי',
  'Neutral narrative': 'נרטיב ניטרלי',
  'The balance between stories that help and stories that hurt, weighted by how much of the conversation each reaches.':
    'המאזן בין סיפורים שמסייעים לסיפורים שפוגעים, משוקלל לפי כמה מהשיח כל אחד מגיע.',
  '20% of active category conversation carries a story that favours this business — and both of those narratives are currently unclaimed by anyone.':
    '20% מהשיח הפעיל בקטגוריה נושא סיפור שמיטיב עם העסק הזה — ושני הנרטיבים הללו אינם בבעלות אף אחד כרגע.',
  '74% carries a story that works against it, most of it a competitor’s evaluation framing rather than criticism of the business itself.':
    '74% נושא סיפור שפועל נגדו, רובו מסגור הערכה של מתחרה ולא ביקורת על העסק עצמו.',
  '6% is category-level conversation attached to no supplier. Neutral is not safe — it is unowned ground with no defender.':
    '6% הוא שיח ברמת הקטגוריה שאינו מקושר לאף ספק. ניטרלי אינו בטוח — זו קרקע ללא בעלים וללא מגן.',
  'Sentiment is not hostility. Nothing here is criticism of the business — the adverse weight comes almost entirely from stories written by competitors in which this business does not appear.':
    'סנטימנט אינו עוינות. שום דבר כאן אינו ביקורת על העסק — המשקל השלילי נובע כמעט כולו מסיפורים שכתבו מתחרים ושבהם העסק הזה אינו מופיע.',
  '3 adverse narratives are gaining ground against 1 favourable one. Direction matters more than the current balance, because it is what the position will be in two quarters.':
    '3 נרטיבים שליליים צוברים תאוצה מול אחד חיובי. הכיוון חשוב יותר מהמאזן הנוכחי, משום שהוא מה שתהיה העמדה בעוד שני רבעונים.',
  '4 of 8 active narratives are still forming or growing. The account of this category is not yet fixed, which is what makes intervention cheap now and expensive later.':
    '4 מתוך 8 נרטיבים פעילים עדיין מתגבשים או גדלים. הגרסה על הקטגוריה הזו טרם התקבעה, וזה מה שהופך את ההתערבות לזולה עכשיו ויקרה מאוחר יותר.',

  /* Landscape and ownership */
  Landscape: 'המפה',
  'Every active narrative in this category': 'כל נרטיב פעיל בקטגוריה הזו',
  'Sorted by reach. The owner column is the one that matters — a favourable story nobody owns is an asset waiting to be claimed.':
    'ממוין לפי טווח הגעה. עמודת הבעלים היא זו שחשובה — סיפור חיובי שאיש אינו בעליו הוא נכס שממתין שיתפסו אותו.',
  'Who owns the story': 'מי הבעלים של הסיפור',
  'Share of active conversation, weighted by reach. Unclaimed is not neutral ground — it is ground with no defender.':
    'נתח מהשיח הפעיל, משוקלל לפי טווח הגעה. ללא בעלים אינו קרקע ניטרלית — זו קרקע ללא מגן.',
  Business: 'העסק',
  Competitors: 'מתחרים',
  Shared: 'משותף',
  Unclaimed: 'ללא בעלים',
  'Business: 4%': 'העסק: 4%',
  'Competitors: 56%': 'מתחרים: 56%',
  'Shared: 20%': 'משותף: 20%',
  'Unclaimed: 20%': 'ללא בעלים: 20%',
  'Category language owned': 'שפת הקטגוריה בבעלות',
  'The share of the vocabulary engines use to define this category that belongs to this business. Whoever holds this sets the criteria every comparison is scored against.':
    'נתח אוצר המילים שבו המנועים מגדירים את הקטגוריה הזו ושמצוי בבעלות העסק. מי שמחזיק בו קובע את הקריטריונים שכל השוואה נמדדת מולם.',
  'The split above measures this specific narrative inventory. This figure measures the category’s language as a whole, and is the same one Mission Control publishes.':
    'הפילוח שלמעלה מודד את מלאי הנרטיבים הספציפי הזה. הנתון הזה מודד את שפת הקטגוריה כולה, והוא אותו נתון שמרכז הבקרה מפרסם.',
  'The business holds': 'העסק מחזיק',
  'Weighted by reach rather than counted, so a story reaching a third of the category is not equal to one reaching a twentieth.':
    'משוקלל לפי טווח הגעה ולא נספר, כך שסיפור שמגיע לשליש מהקטגוריה אינו שווה לסיפור שמגיע לעשירית ומחצה.',

  Reach: 'טווח הגעה',
  'Owned by': 'בבעלות',
  Influence: 'השפעה',
  Competition: 'תחרות',
  Opportunity: 'הזדמנות',
  Strength: 'חוזקה',
  Weakness: 'חולשה',
  Risk: 'סיכון',
  Media: 'מדיה',
  Questions: 'שאלות',
  'If ignored': 'אם יתעלמו',
  'Overlap with us': 'חפיפה איתנו',
  'Unsettled': 'לא מיוצב',
  '— absent': '— נעדר',
  '{level} severity': 'חומרה {level}',
  '+ {n} more tracked': '+ עוד {n} במעקב',
  '31 % share': '31% נתח',
  '18 % share': '18% נתח',
  '11 % share': '11% נתח',
  '7 % share': '7% נתח',
  Growing: 'גדל',
  Steady: 'יציב',
  Declining: 'דועך',
  Contested: 'שנוי במחלוקת',
  'Favourable · emerging': 'חיובי · מתהווה',
  'Favourable · steady': 'חיובי · יציב',
  'Adverse · emerging': 'שלילי · מתהווה',
  'Adverse · growing': 'שלילי · גדל',
  'Adverse · steady': 'שלילי · יציב',
  'Adverse · declining': 'שלילי · דועך',
  'Neutral · steady': 'ניטרלי · יציב',
  Favourable: 'חיובי',
  Adverse: 'שלילי',

  /* Competitors */
  'The story each competitor is telling': 'הסיפור שכל מתחרה מספר',
  'Every position has a weakness built into it. A narrative strong enough to dominate is usually narrow enough to outflank.':
    'לכל עמדה יש חולשה מובנית. נרטיב חזק דיו כדי לשלוט הוא בדרך כלל צר דיו כדי לעקוף אותו.',
  'The safe national choice with published comparisons.':
    '"הבחירה הארצית הבטוחה עם השוואות מפורסמות."',
  'The technical authority on specification.':
    '"הסמכות הטכנית בענייני מפרט."',
  'The educator that reaches buyers first.':
    '"המחנך שמגיע לקונים ראשון."',
  'The procurement-checklist incumbent.':
    '"הספק המבוסס ברשימת התיוג של הרכש."',
  'Owns the evaluation criteria itself. Engines cite its comparison library when explaining how to choose a supplier at all.':
    'מחזיק בקריטריוני ההערכה עצמם. המנועים מצטטים את ספריית ההשוואה שלו כשהם מסבירים כיצד בכלל לבחור ספק.',
  'Its case rests on breadth and fill rate. It has no response prepared on response time or regional service depth.':
    'הטיעון שלו נשען על רוחב ועל שיעור אספקה. אין לו תשובה מוכנה בנושא זמן תגובה או עומק שירות אזורי.',
  'Competes directly on supplier-evaluation questions, where it is named first in four of seven.':
    'מתחרה ישירות בשאלות הערכת ספקים, ושם הוא נזכר ראשון בארבע מתוך שבע.',
  'Its vocabulary can be adopted and extended rather than fought. Speaking its language while adding availability outflanks it.':
    'אפשר לאמץ ולהרחיב את אוצר המילים שלו במקום להילחם בו. דיבור בשפתו תוך הוספת זמינות עוקף אותו.',
  'Specification depth does not answer availability. It is largely absent from questions about delivery and continuity.':
    'עומק מפרט אינו עונה על זמינות. הוא נעדר במידה רבה משאלות על אספקה ורציפות.',
  'Owns solution-evaluation questions upstream of where this business competes.':
    'מחזיק בשאלות הערכת פתרונות במעלה הזרם מהמקום שבו העסק הזה מתחרה.',
  'Its own framing concedes that speed is a separate axis. A published response-time standard splits the criterion it defined.':
    'המסגור שלו עצמו מודה שמהירות היא ציר נפרד. תקן זמן תגובה מפורסם מפצל את הקריטריון שהוא הגדיר.',
  'Enters the decision at research, before evaluation criteria exist, and shapes them by arriving early.':
    'נכנס להחלטה בשלב המחקר, לפני שקיימים קריטריוני הערכה, ומעצב אותם בכך שהגיע מוקדם.',
  'Almost no presence earlier in the journey. Its position is administrative rather than argued.':
    'כמעט ללא נוכחות מוקדם יותר במסע. עמדתו מנהלתית ולא מנומקת.',
  'Owns early-stage questions this business is also absent from, but does not convert them.':
    'מחזיק בשאלות שלב מוקדם שגם העסק הזה נעדר מהן, אך אינו ממיר אותן.',
  'Thin at the point of purchase. Rarely named when a buyer asks whom to actually choose.':
    'דליל בנקודת הרכישה. לעיתים רחוקות נזכר כשקונה שואל במי לבחור בפועל.',
  'Research-stage presence is uncontested at the point where education becomes a shortlist.':
    'הנוכחות בשלב המחקר אינה מאותגרת בנקודה שבה חינוך הופך לרשימה מצומצמת.',
  'Named on procurement documentation that engines cite at the moment of purchase.':
    'נזכר בתיעוד רכש שהמנועים מצטטים ברגע הרכישה.',
  'Competes only at purchase decision, where this business also has no coverage.':
    'מתחרה רק בהחלטת הרכישה, שם גם לעסק הזה אין כיסוי.',
  'A checklist position is winnable through documentation rather than through reputation.':
    'עמדה ברשימת תיוג ניתנת לזכייה באמצעות תיעוד ולא באמצעות מוניטין.',

  /* Media */
  'What publications are actually writing about': 'על מה הפרסומים באמת כותבים',
  'The business appears in none of four active category stories. Two of them — provenance and tariff continuity — have no supplier voice at all.':
    'העסק אינו מופיע באף אחד מארבעת סיפורי הקטגוריה הפעילים. בשניים מהם — מקוריות ורציפות מכסים — אין קול של ספק כלל.',
  'The business appears in none of the four active category stories. Media narrative is currently being written entirely by others.':
    'העסק אינו מופיע באף אחד מארבעת סיפורי הקטגוריה הפעילים. נרטיב המדיה נכתב כרגע כולו על ידי אחרים.',
  'MRO supplier consolidation across Midwest manufacturing':
    'איחוד ספקי תחזוקה בייצור במערב התיכון',
  'Counterfeit fasteners in industrial supply chains':
    'מחברים מזויפים בשרשראות אספקה תעשייתיות',
  'Verification and provenance in fastener sourcing':
    'אימות ומקוריות ברכש מחברים',
  'Fastener supply continuity after tariff changes':
    'רציפות אספקת מחברים לאחר שינויי מכסים',
  'Supply continuity under tariff volatility': 'רציפות אספקה בתנודתיות מכסים',
  'Vendor-managed inventory adoption in mid-market plants':
    'אימוץ ניהול מלאי על ידי ספק במפעלי שוק ביניים',
  'Vendor-managed inventory for mid-market plants':
    'ניהול מלאי על ידי ספק למפעלי שוק ביניים',
  'Industrial Distribution · Modern Supply Chain':
    'Industrial Distribution · Modern Supply Chain',
  'Fastener Technology · Industrial Distribution':
    'Fastener Technology · Industrial Distribution',
  'Fastener Technology · Plant Engineering':
    'Fastener Technology · Plant Engineering',
  'Modern Supply Chain · Plant Engineering':
    'Modern Supply Chain · Plant Engineering',
  'The most active category story. This business is not quoted in any of the eleven pieces published this quarter.':
    'סיפור הקטגוריה הפעיל ביותר. העסק הזה אינו מצוטט באף אחת מאחת־עשרה הכתבות שפורסמו ברבעון זה.',
  'A category-level trust story. Suppliers who comment become the trusted ones; those who stay silent are grouped with the problem.':
    'סיפור אמון ברמת הקטגוריה. ספקים שמגיבים הופכים לאמינים; אלה ששותקים נכרכים עם הבעיה.',
  'An emerging story where regional inventory depth is the natural expert angle, and no regional distributor has been quoted yet.':
    'סיפור מתהווה שבו עומק מלאי אזורי הוא זווית המומחיות הטבעית, ואף מפיץ אזורי טרם צוטט.',
  'A service already operated but never publicly associated with the business. One competitor is quoted in three of four pieces on it.':
    'שירות שכבר מופעל אך מעולם לא קושר בפומבי לעסק. מתחרה אחד מצוטט בשלוש מתוך ארבע כתבות עליו.',
  'A competitor is quoted in three of four pieces. The topic maps directly onto a service this business already operates.':
    'מתחרה מצוטט בשלוש מתוך ארבע כתבות. הנושא ממופה ישירות לשירות שהעסק הזה כבר מפעיל.',
  'Regional inventory depth is the natural expert position on a story publications are actively looking for sources on.':
    'עומק מלאי אזורי הוא עמדת המומחיות הטבעית בסיפור שפרסומים מחפשים עבורו מקורות באופן פעיל.',
  'An active media story with no supplier voice attached. Commenting converts a category-level trust concern into a reason to choose a specific supplier.':
    'סיפור מדיה פעיל ללא קול של ספק. תגובה הופכת חשש אמון ברמת הקטגוריה לסיבה לבחור ספק מסוים.',
  'No quote, contribution or citation in the four topics publications are currently covering.':
    'אין ציטוט, תרומה או אזכור בארבעת הנושאים שהפרסומים מסקרים כעת.',
  'Silence is read as absence of expertise. The category continues to be explained by the suppliers willing to explain it.':
    'שתיקה נקראת כהיעדר מומחיות. הקטגוריה ממשיכה להיות מוסברת על ידי הספקים המוכנים להסביר אותה.',

  /* Questions */
  'What the market actually wants to know': 'מה השוק באמת רוצה לדעת',
  'The real question corpus, partitioned by what a buyer is trying to decide when they ask it.':
    'מאגר השאלות האמיתי, מחולק לפי מה שקונה מנסה להכריע כשהוא שואל.',
  'Most common questions': 'השאלות הנפוצות ביותר',
  'Public questions': 'שאלות ציבוריות',
  'AI buying questions': 'שאלות רכש ב-AI',
  'Recommendation questions': 'שאלות המלצה',
  'Comparison questions': 'שאלות השוואה',
  'Purchase questions': 'שאלות רכישה',
  'Concerns and objections': 'חששות והתנגדויות',
  'A buyer asking directly whom to choose. The highest-value question class in the category, and the one that assigns the order.':
    'קונה ששואל ישירות במי לבחור. מחלקת השאלות בעלת הערך הגבוה ביותר בקטגוריה, וזו שמסנה את ההזמנה.',
  'A buyer weighing approaches rather than vendors. Whoever frames the comparison sets the criteria the vendor choice will use.':
    'קונה ששוקל גישות ולא ספקים. מי שממסגר את ההשוואה קובע את הקריטריונים שבהם ייעשה שימוש בבחירת הספק.',
  'What buyers ask before they have a supplier in mind. Presence here shapes the criteria everything later is judged against.':
    'מה קונים שואלים לפני שיש להם ספק בראש. נוכחות כאן מעצבת את הקריטריונים שכל מה שבא אחר כך נמדד מולם.',
  'A buyer who has already chosen. Presence here converts; it does not win anything that was not already won upstream.':
    'קונה שכבר בחר. נוכחות כאן ממירה; היא אינה זוכה בדבר שלא נזכה בו כבר במעלה הזרם.',
  'The risks buyers raise before committing. Answering these publicly is how a supplier becomes the safe choice rather than the cheap one.':
    'הסיכונים שקונים מעלים לפני שהם מתחייבים. מענה עליהם בפומבי הוא הדרך שבה ספק הופך לבחירה הבטוחה ולא לזולה.',

  /* Opportunity */
  'Stories nobody owns': 'סיפורים שאיש אינו בעליהם',
  'Ranked by influence against competition. The best of these are high influence and uncontested, which is the rarest combination in any category.':
    'מדורג לפי השפעה מול תחרות. הטובים שבהם הם בעלי השפעה גבוהה ובלתי מאותגרים, וזה הצירוף הנדיר ביותר בכל קטגוריה.',
  'The single narrative that most favours this business, and nobody owns it. Same-day regional delivery is a genuine capability that no public source currently attaches to this name.':
    'הנרטיב היחיד שמיטיב ביותר עם העסק הזה, ואיש אינו בעליו. אספקה אזורית באותו יום היא יכולת אמיתית שאף מקור ציבורי אינו מקשר כיום לשם הזה.',
  'No competitor has claimed it, engines have no vocabulary for it, and it is the capability this business actually leads on. The single highest-return narrative available.':
    'אף מתחרה לא תפס אותו, למנועים אין אוצר מילים עבורו, וזו היכולת שהעסק הזה באמת מוביל בה. הנרטיב בעל התשואה הגבוהה ביותר הזמין.',
  'Directly counters the consolidation narrative that currently favours national distributors, and reframes regional scale as risk management rather than as a limitation.':
    'סותר ישירות את נרטיב האיחוד שמיטיב כיום עם מפיצים ארציים, וממסגר מחדש קנה מידה אזורי כניהול סיכונים ולא כמגבלה.',
  'Directly contradicts the consolidation narrative and favours a strong secondary supplier. Neither this business nor any competitor has claimed it.':
    'סותר ישירות את נרטיב האיחוד ומיטיב עם ספק משני חזק. לא העסק הזה ולא אף מתחרה תפסו אותו.',
  'Consolidation reaches 14% of conversation and favours national distributors. The counter-narrative reaches 11% and is owned by nobody.':
    'האיחוד מגיע ל-14% מהשיח ומיטיב עם מפיצים ארציים. נרטיב הנגד מגיע ל-11% ואינו בבעלות אף אחד.',

  /* Risk */
  'Threats before they become the default': 'איומים לפני שיהפכו לברירת מחדל',
  'An emerging narrative is contestable. A settled one has to be displaced. The difference in cost between the two is the reason this section exists.':
    'נרטיב מתהווה ניתן לערעור. נרטיב מקובע צריך להידחק. ההפרש בעלות בין השניים הוא הסיבה שהסעיף הזה קיים.',
  '3 risks are rated high severity, of which the entity conflation and the emerging regional-limitation narrative are both still cheap to correct.':
    '3 סיכונים מדורגים בחומרה גבוהה, ומהם ערבוב הישויות ונרטיב המגבלה האזורית המתהווה שניהם עדיין זולים לתיקון.',
  'The most dangerous emerging narrative on this list. It is not yet dominant and it is factually contestable, which means it is still cheap to answer.':
    'הנרטיב המתהווה המסוכן ביותר ברשימה. הוא טרם שולט וניתן לערעור עובדתי, ומשמעות הדבר שעדיין זול לענות עליו.',
  'Becomes the default objection to a regional supplier. Contestable now with published evidence; expensive to reverse once engines treat it as settled.':
    'הופך להתנגדות ברירת המחדל לספק אזורי. ניתן לערעור עכשיו באמצעות ראיות מפורסמות; יקר להפוך אותו ברגע שהמנועים יתייחסו אליו כמקובע.',
  'A factual error, carried by one engine, that removes the business from every supplier-evaluation answer it appears in. Declining, but not yet corrected.':
    'טעות עובדתית, שנישאת על ידי מנוע אחד, שמסירה את העסק מכל תשובת הערכת ספקים שהיא מופיעה בה. דועכת, אך טרם תוקנה.',
  'A single wrong category record continues to exclude the business from the question class that assigns orders.':
    'רשומת קטגוריה שגויה אחת ממשיכה להוציא את העסק ממחלקת השאלות שמסנה הזמנות.',
  'Every future comparison is scored on axes chosen to favour a competitor, whatever the campaign says.':
    'כל השוואה עתידית נמדדת על צירים שנבחרו כדי להיטיב עם מתחרה, ולא משנה מה הקמפיין אומר.',
  'Every impression delivered to a Gemini user reinforces an incorrect record. Campaign spend actively strengthens the wrong association.':
    'כל חשיפה שמוגשת למשתמש Gemini מחזקת רשומה שגויה. הוצאת הקמפיין מחזקת באופן פעיל את השיוך הלא נכון.',
  'Emerging in two engines and sourced from a competitor comparison page. Still contestable; not yet treated as settled.':
    'מתהווה בשני מנועים ומקורו בעמוד השוואה של מתחרה. עדיין ניתן לערעור; טרם נחשב מקובע.',
  'Appearing in Gemini and Copilot answers on multi-site sourcing questions, sourced from a competitor comparison page.':
    'מופיע בתשובות Gemini ו-Copilot בשאלות רכש רב-אתרי, ומקורו בעמוד השוואה של מתחרה.',
  'ChatGPT categorises the business as retail rather than MRO distribution, removing it from supplier-evaluation answers.':
    'ChatGPT מסווג את העסק כקמעונאות ולא כהפצת ציוד תחזוקה, ומסיר אותו מתשובות הערכת ספקים.',
  'Fill rate and catalogue breadth are cited first by three of six engines when explaining how to choose a distributor.':
    'שיעור אספקה ורוחב קטלוג מצוטטים ראשונים על ידי שלושה מתוך שישה מנועים כשהם מסבירים כיצד לבחור מפיץ.',
  'Favours whichever supplier is already largest. A regional specialist is read as the thing being consolidated away rather than the one consolidating.':
    'מיטיב עם הספק שכבר הגדול ביותר. מומחה אזורי נקרא כדבר שמאחדים אותו החוצה ולא כמי שמאחד.',
  'Its specification guidance became the category’s default vocabulary because it published first, not because it is more correct.':
    'הנחיית המפרט שלו הפכה לאוצר המילים ברירת המחדל של הקטגוריה משום שפרסם ראשון, לא משום שהוא נכון יותר.',
  'Published first by a competitor, so it became the vocabulary engines learned. It positions this business as a reseller by omission rather than by argument.':
    'פורסם ראשון על ידי מתחרה, ולכן הפך לאוצר המילים שהמנועים למדו. הוא ממצב את העסק הזה כמשווק־משנה בדרך של השמטה ולא בטיעון.',
  'Neutral on its face, but it removes price as a differentiator and pushes the decision onto evidence — which is the axis this business currently loses on.':
    'ניטרלי על פניו, אך הוא מסיר את המחיר כגורם מבדל ודוחף את ההחלטה אל הראיות — הציר שבו העסק הזה מפסיד כרגע.',
  'Contain an emerging high-severity adverse narrative': 'בלמו נרטיב שלילי מתהווה בחומרה גבוהה',
  'Respond Immediately': 'הגיבו מיד',

  /* Engine divergence */
  'What each engine currently says this business is':
    'מה כל מנוע אומר כרגע שהעסק הזה הוא',
  'Claims machines currently repeat that are wrong. Each one removes the business from answers it should appear in.':
    'טענות שמכונות חוזרות עליהן כעת והן שגויות. כל אחת מסירה את העסק מתשובות שהוא אמור להופיע בהן.',
  'Misconceptions repeated as fact': 'תפיסות מוטעות שחוזרות כעובדה',
  'Gemini resolves a same-named logistics firm; ChatGPT categorises the business as retail. Both remove it from supplier-evaluation answers entirely.':
    'Gemini מזהה חברת לוגיסטיקה בעלת אותו שם; ChatGPT מסווג את העסק כקמעונאות. שניהם מסירים אותו לחלוטין מתשובות הערכת ספקים.',
  'Gemini resolves the wrong entity on category questions and recognises the business at 24 of 100.':
    'Gemini מזהה את הישות השגויה בשאלות קטגוריה ומזהה את העסק ברמה של 24 מתוך 100.',
  'Accurate. No divergence from the intended account.': 'מדויק. אין סטייה מהגרסה המיועדת.',
  '4 of 6 diverge': '4 מתוך 6 סוטים',
  'Machines are repeating 1 factual error about this business that removes it from supplier answers entirely. Argument about positioning is wasted while the underlying record is wrong. Once corrected, 20% of category conversation is unclaimed and the strongest of it favours this business.':
    'מכונות חוזרות על טעות עובדתית אחת על העסק הזה שמסירה אותו לחלוטין מתשובות על ספקים. ויכוח על מיצוב מבוזבז כל עוד הרשומה הבסיסית שגויה. לאחר התיקון, 20% מהשיח בקטגוריה נותרים ללא בעלים והחזק שבהם מיטיב עם העסק הזה.',
  ', and every point of it is the hardware-retailer error rather than anything it chose to say. Ownership counts the stories attached to a name; it does not ask whether they help.':
    ', וכל נקודה בו היא טעות "קמעונאית כלי העבודה" ולא משהו שהוא בחר לומר. הבעלות סופרת את הסיפורים הצמודים לשם; היא אינה שואלת אם הם מסייעים.',

  /* Narrative statements */
  'Fill rate and catalogue breadth are how you choose a distributor.':
    '"שיעור אספקה ורוחב קטלוג הם הדרך לבחור מפיץ."',
  'Consolidating MRO suppliers reduces cost and administrative load.':
    '"איחוד ספקי תחזוקה מפחית עלות ועומס מנהלתי."',
  'Midwest fastener pricing is broadly comparable across suppliers.':
    '"תמחור מחברים במערב התיכון דומה במידה רבה בין ספקים."',
  'Specification depth separates serious suppliers from resellers.':
    '"עומק מפרט מבחין בין ספקים רציניים למשווקי־משנה."',
  'Evaluation criteria are increasingly stated in a competitor’s terms.':
    '"קריטריוני ההערכה מנוסחים יותר ויותר במונחיו של מתחרה."',
  'The business is conflated with a same-named logistics firm.':
    '"העסק מעורבב עם חברת לוגיסטיקה בעלת אותו שם."',
  'Single-source supplier dependency is an operational risk.':
    '"תלות בספק יחיד היא סיכון תפעולי."',
  'Regional suppliers cannot support multi-plant operations.':
    '"ספקים אזוריים אינם יכולים לתמוך בפעילות רב-מפעלית."',
  'Regional distributors deliver faster than national ones.':
    '"מפיצים אזוריים מספקים מהר יותר מארציים."',
  'The business is absent from every active category story.':
    '"העסק נעדר מכל סיפור פעיל בקטגוריה."',
  'The business is described as a hardware retailer.':
    '"העסק מתואר כקמעונאית כלי עבודה."',
  'Northwind Supply is a hardware retailer.':
    '"Northwind Supply היא קמעונאית כלי עבודה."',
  'Observed in {sources}.': 'נצפה ב-{sources}.',
  'How much of the conversation works for us': 'כמה מהשיח פועל לטובתנו',
  'Public Narrative Intelligence': 'מודיעין נרטיבים ציבוריים',
  'Quoted in 3 pieces across 2 publications engines cite':
    'ציטוט ב-3 כתבות בשני פרסומים שהמנועים מצטטים',
  'Multi-site capability referenced in 2 of 6 engines on multi-plant sourcing questions':
    'יכולת רב-אתרית מוזכרת ב-2 מתוך 6 מנועים בשאלות רכש רב-מפעלי',
  'Response time cited among the first three selection criteria by 3 of 6 engines':
    'זמן תגובה מצוטט בין שלושת קריטריוני הבחירה הראשונים על ידי 3 מתוך 6 מנועים',
  'Secondary-supplier framing cited by 2 of 6 engines on consolidation questions':
    'מסגור הספק המשני מצוטט על ידי 2 מתוך 6 מנועים בשאלות איחוד',
  'The dominant evaluation framing, and it is a competitor’s. Buyers arrive already scoring suppliers on the two criteria where a national distributor wins by default.':
    'מסגור ההערכה הדומיננטי, והוא של מתחרה. קונים מגיעים כשהם כבר מדרגים ספקים לפי שני הקריטריונים שבהם מפיץ ארצי מנצח כברירת מחדל.',
  "4 of 6 engines carry a materially different account of this business. A buyer's understanding depends on which assistant they happen to open.":
    '4 מתוך 6 מנועים נושאים גרסה שונה מהותית על העסק הזה. הבנתו של קונה תלויה באיזה עוזר הוא במקרה פותח.',
  'Trade forums': 'פורומים מקצועיים',
  'Buyer discussion': 'שיח קונים',
  'Procurement publications': 'פרסומי רכש',
  'Specification guides': 'מדריכי מפרט',
  'Risk guidance': 'הנחיות סיכון',
  'Aggregator pages': 'עמודי אגרגטורים',
  'Trade publications': 'פרסומים מקצועיים',
  '{pct}% share': '{pct}% נתח',
  'The business holds <b>{pct}%</b>, and every point of it is the hardware-retailer error rather than anything it chose to say. Ownership counts the stories attached to a name; it does not ask whether they help.':
    'העסק מחזיק ב-<b>{pct}%</b>, וכל נקודה בו היא טעות "קמעונאית כלי העבודה" ולא משהו שהוא בחר לומר. הבעלות סופרת את הסיפורים הצמודים לשם; היא אינה שואלת אם הם מסייעים.',
  Neutral: 'ניטרלי',

  /* Action plan */
  'Narrative action plan': 'תוכנית פעולה לנרטיב',
  'Open narrative action plan': 'פתחו את תוכנית הפעולה לנרטיב',
  'Monitor narrative changes': 'עקבו אחר שינויי הנרטיב',
  'Check readiness before campaigning': 'בדקו מוכנות לפני קמפיין',
  'Each carries its objective, the evidence behind it, the movement expected, a confidence, an owner, a deadline, an effort estimate and how success is verified.':
    'לכל אחת יעד, הראיות שמאחוריה, התזוזה הצפויה, רמת ודאות, אחראי, תאריך יעד, הערכת מאמץ והאופן שבו ההצלחה מאומתת.',
  'Correct the record first, then claim the narrative nobody owns.':
    'תקנו קודם את הרשומה, ואז תפסו את הנרטיב שאיש אינו בעליו.',
  'Correct the entity conflation and the hardware-retailer categorisation.':
    'תקנו את ערבוב הישויות ואת הסיווג כקמעונאית כלי עבודה.',
  'Claim response time as a published supplier selection criterion.':
    'תפסו את זמן התגובה כקריטריון מפורסם לבחירת ספק.',
  'Answer the regional-limitation narrative with published multi-site evidence.':
    'ענו על נרטיב המגבלה האזורית בראיות מפורסמות על פעילות רב-אתרית.',
  'Claim the secondary-supplier argument against the consolidation narrative.':
    'תפסו את טיעון הספק המשני נגד נרטיב האיחוד.',
  'Enter the two active media stories with a named expert voice.':
    'היכנסו לשני סיפורי המדיה הפעילים עם קול מומחה בשמו.',
  'Reframe regional scale from limitation to risk management':
    'מסגרו מחדש קנה מידה אזורי ממגבלה לניהול סיכונים',
  'The narrative is unowned, high influence and uncontested. Same-day regional delivery is a real capability that appears in no category description.':
    'הנרטיב ללא בעלים, בעל השפעה גבוהה ובלתי מאותגר. אספקה אזורית באותו יום היא יכולת אמיתית שאינה מופיעה באף תיאור קטגוריה.',
  'Response time as a supplier selection criterion': 'זמן תגובה כקריטריון לבחירת ספק',
  'The strategic case for a strong secondary supplier': 'הטיעון האסטרטגי לספק משני חזק',
  'Independent authority sources 3 → 8': 'מקורות סמכות בלתי תלויים 3 ← 8',
  'Average recognition 38 → 55 of 100': 'זיהוי ממוצע 38 ← 55 מתוך 100',

  /* --- Campaign Readiness ---------------------------------------------------- */
  'Campaign readiness intelligence': 'מודיעין מוכנות קמפיין',
  'Campaign Readiness Intelligence | GeoRepute': 'מודיעין מוכנות קמפיין | GeoRepute',
  'Should we launch this campaign today?': 'האם להשיק את הקמפיין הזה היום?',
  'This assessment evaluates the business, not the campaign. Creative, targeting and budget can all be correct while the business remains structurally unable to convert the attention they buy.':
    'הערכה זו בוחנת את העסק, לא את הקמפיין. הקריאייטיב, הפילוח והתקציב יכולים כולם להיות נכונים בעוד העסק נותר בלתי מסוגל מבנית להמיר את תשומת הלב שהם קונים.',
  Campaign: 'קמפיין',
  'Q4 Midwest demand generation': 'יצירת ביקוש ברבעון הרביעי במערב התיכון',
  'Intended launch': 'מועד ההשקה המתוכנן',
  Duration: 'משך',
  '6 months': '6 חודשים',
  Channels: 'ערוצים',
  'Paid search · Paid social · Trade media · Content syndication':
    'חיפוש ממומן · מדיה חברתית ממומנת · מדיה מקצועית · הפצת תוכן',
  'Estimated budget at risk': 'תקציב מוערך בסיכון',

  'Executive decision': 'החלטה ניהולית',
  'Executive recommendation': 'המלצה ניהולית',
  'Delay Campaign': 'עכבו את הקמפיין',
  'Delay the campaign. Fix authority first.': 'עכבו את הקמפיין. תקנו קודם את הסמכות.',
  'Delay Campaign — readiness reads 32 of 100, held there by authority readiness at 11, which carries 20% of the index.':
    'עכבו את הקמפיין — המוכנות עומדת על 32 מתוך 100, מוחזקת שם על ידי מוכנות הסמכות ברמה 11, שנושאת 20% מהמדד.',
  'Campaign readiness score': 'ציון מוכנות הקמפיין',
  'Primary constraint': 'האילוץ העיקרי',
  'Authority readiness is the binding constraint at 11 of 100 and carries 20% of the index.':
    'מוכנות הסמכות היא האילוץ הכובל ברמה 11 מתוך 100 ונושאת 20% מהמדד.',
  'Strategic window': 'החלון האסטרטגי',
  'Advantage holds until {date}.': 'היתרון מחזיק עד {date}.',
  'Decision journey gaps': 'פערים במסע ההחלטה',
  'Presence at every stage.': 'נוכחות בכל שלב.',
  '2 stages uncovered': '2 שלבים ללא כיסוי',
  'Assessment confidence': 'רמת הוודאות של ההערכה',
  'Six of seven dimensions rest on directly observed data.':
    'שישה מתוך שבעה ממדים נשענים על נתונים שנצפו ישירות.',

  Assessment: 'הערכה',
  'Seven readiness dimensions, weighted into one index':
    'שבעה ממדי מוכנות, משוקללים למדד אחד',
  'Every score is computed from observed data rather than assigned. The weights are published and sum to one.':
    'כל ציון מחושב מנתונים שנצפו ולא נקבע בשיקול דעת. המשקלים מפורסמים וסכומם אחד.',
  'Ready at 70 and above. At risk from 45 . Blocking below 45 .':
    'מוכן מ-70 ומעלה. בסיכון מ-45. חוסם מתחת ל-45.',
  Ready: 'מוכן',
  'At risk': 'בסיכון',
  Blocking: 'חוסם',
  '{score} of 100 — {status}. Ready at {gate}.':
    '{score} מתוך 100 — {status}. מוכן ב-{gate}.',
  '{n}% of the readiness index': '{n}% ממדד המוכנות',
  '{score} of 100 · {weight}% of the index': '{score} מתוך 100 · {weight}% מהמדד',
  'Ready at {ready} and above. At risk from {risk}. Blocking below {risk}.':
    'מוכן מ-{ready} ומעלה. בסיכון מ-{risk}. חוסם מתחת ל-{risk}.',
  or: 'או',
  None: 'אין',
  '2 of 5': '2 מתוך 5',
  '2 of 6': '2 מתוך 6',
  '7 months': '7 חודשים',
  'Campaign Readiness Intelligence': 'מודיעין מוכנות קמפיין',
  'Launching remains available and is sometimes correct — a product deadline or a competitive move can outweigh a readiness score. This assessment states the cost of that choice so it is made deliberately rather than by default.':
    'ההשקה נותרת אפשרית ולעיתים היא הנכונה — מועד יעד של מוצר או מהלך תחרותי יכולים לגבור על ציון מוכנות. הערכה זו מציינת את מחיר הבחירה כדי שתתקבל במודע ולא כברירת מחדל.',
  'Each carries a priority, an owner, a deadline, an effort estimate, its dependencies, the movement it should produce and how confident the model is in that.':
    'לכל אחת עדיפות, אחראי, תאריך יעד, הערכת מאמץ, התלויות שלה, התזוזה שעליה לחולל ומידת הביטחון של המודל בכך.',
  '{n} tracked questions': '{n} שאלות במעקב',
  'Paid search': 'חיפוש ממומן',
  'Paid social': 'מדיה חברתית ממומנת',
  'Trade media': 'מדיה מקצועית',
  'Content syndication': 'הפצת תוכן',

  /* The seven dimensions */
  'AI readiness': 'מוכנות AI',
  'Do AI engines understand and recommend this business?':
    'האם מנועי AI מבינים את העסק הזה וממליצים עליו?',
  'Across six engines, the business is understood at 38 of 100. Advertising cannot correct a record it does not touch.':
    'בשישה מנועים, העסק מובן ברמה של 38 מתוך 100. פרסום אינו יכול לתקן רשומה שהוא אינו נוגע בה.',
  'Authority readiness': 'מוכנות הסמכות',
  'Is there enough evidence for AI to recommend this business?':
    'האם יש די ראיות כדי שה-AI ימליץ על העסק הזה?',
  '3 independent sources can verify this business. The category median is 14.':
    '3 מקורות בלתי תלויים יכולים לאמת את העסק הזה. חציון הקטגוריה הוא 14.',
  'Google readiness': 'מוכנות Google',
  'Can buyers find this business through traditional search?':
    'האם קונים יכולים למצוא את העסק הזה דרך חיפוש מסורתי?',
  '9 of 20 commercial questions place in the top ten. The rest are reachable only by paying for the click.':
    '9 מתוך 20 שאלות מסחריות ממוקמות בעשירייה הראשונה. אל השאר ניתן להגיע רק בתשלום על הקליק.',
  'Narrative readiness': 'מוכנות הנרטיב',
  'Does the market understand what this business stands for?':
    'האם השוק מבין על מה העסק הזה עומד?',
  'The business owns 12% of the language engines use to define this category. The campaign would be fought on terms a competitor wrote.':
    'העסק מחזיק ב-12% מהשפה שבה המנועים מגדירים את הקטגוריה. הקמפיין יתנהל בתנאים שמתחרה כתב.',
  Reputation: 'מוניטין',
  'Is this business safe to recommend to a buyer?':
    'האם בטוח להמליץ על העסק הזה לקונה?',
  'Reputation reads 44 of 100 while market fit reads 72. The offer is right; the proof around it is not.':
    'המוניטין עומד על 44 מתוך 100 בעוד שהתאמת השוק עומדת על 72. ההיצע נכון; ההוכחות סביבו אינן.',
  'Conversion readiness': 'מוכנות ההמרה',
  'Can the destination convert the intent this campaign buys?':
    'האם היעד יכול להמיר את הכוונה שהקמפיין הזה קונה?',
  'A single quote form serves every stage. There is no path for a buyer who is still comparing suppliers and not yet requesting a price.':
    'טופס הצעת מחיר יחיד משרת כל שלב. אין מסלול לקונה שעדיין משווה ספקים ואינו מבקש מחיר.',
  'Competitor readiness': 'מוכנות מול מתחרים',
  'Kestrel Industrial holds top-three organic positions and AI presence on the four highest-volume commercial questions simultaneously.':
    'Kestrel Industrial מחזיקה בו-זמנית במיקומים אורגניים בשלישייה הראשונה ובנוכחות ב-AI בארבע השאלות המסחריות בעלות הנפח הגבוה ביותר.',

  /* Dimension evidence rows */
  'Category understanding': 'הבנת הקטגוריה',
  '2 of 6 correct': '2 מתוך 6 נכונים',
  'An engine that files the business in the wrong category cannot surface it when a buyer describes this need, regardless of spend.':
    'מנוע שמתייק את העסק בקטגוריה שגויה אינו יכול להעלות אותו כשקונה מתאר את הצורך הזה, ללא קשר להוצאה.',
  'AI recommendation coverage': 'כיסוי המלצות AI',
  '6 recommendation events across 144 answer slots. A buyer who asks an assistant for suppliers almost never hears this name.':
    '6 אירועי המלצה מתוך 144 משבצות תשובה. קונה ששואל עוזר AI על ספקים כמעט לעולם אינו שומע את השם הזה.',
  'Engine consistency': 'עקביות בין המנועים',
  '37-point spread': 'פער של 37 נקודות',
  'Recognition ranges from 21 to 58. The campaign would reach buyers whose assistants disagree about what this business is.':
    'הזיהוי נע בין 21 ל-58. הקמפיין יגיע לקונים שהעוזרים שלהם חלוקים בשאלה מהו העסק הזה.',
  'Silent engines': 'מנועים שותקים',
  '2 engines recommend the business in none of the tracked decisions. Spend that drives buyers toward those engines returns nothing.':
    '2 מנועים אינם ממליצים על העסק באף אחת מההחלטות הנמדדות. הוצאה שמניעה קונים אל המנועים הללו אינה מחזירה דבר.',
  'Independent authority sources': 'מקורות סמכות בלתי תלויים',
  '3 sources': '3 מקורות',
  'Independent corroboration is what lets a system name a supplier first rather than hedge across several.':
    'אישוש בלתי תלוי הוא מה שמאפשר למערכת לנקוב בשם ספק ראשון במקום לפזר בין כמה.',
  'Third-party validation': 'אימות מצד שלישי',
  '1 of 5 present': '1 מתוך 5 קיים',
  'Certifications, named customers, verified outcomes and specification references are absent from the public record.':
    'תעודות, לקוחות בשמם, תוצאות מאומתות והפניות למפרטים נעדרים מהרשומה הציבורית.',
  'Industry references': 'הפניות מהתעשייה',
  '0 of 3 publications': '0 מתוך 3 פרסומים',
  'The three trade publications engines cite most for this category carry no coverage of the business at all.':
    'שלושת הפרסומים המקצועיים שהמנועים מצטטים הכי הרבה בקטגוריה זו אינם מסקרים את העסק כלל.',
  'Competitor authority': 'סמכות המתחרים',
  '7× behind': 'פי 7 מאחור',
  'Kestrel Industrial can be corroborated 7× more readily. That advantage compounds while no counter-programme runs.':
    'ניתן לאשש את Kestrel Industrial בקלות פי 7. היתרון הזה מצטבר כל עוד לא פועלת תוכנית נגד.',
  'Commercial keyword coverage': 'כיסוי מילות מפתח מסחריות',
  '9 of 20': '9 מתוך 20',
  'Weighted by search volume rather than by keyword count, so a strong position on a question nobody asks does not flatter the figure.':
    'משוקלל לפי נפח חיפוש ולא לפי מספר מילות מפתח, כך שמיקום חזק בשאלה שאיש אינו שואל אינו מייפה את הנתון.',
  'Technical SEO status': 'מצב ה-SEO הטכני',
  'No blocking faults': 'אין תקלות חוסמות',
  'Crawlability, indexation and canonicalisation carry no faults that would prevent a campaign landing page from ranking. This is not the constraint.':
    'סריקות, אינדוקס וקנוניזציה אינם נושאים תקלות שימנעו מדף נחיתה של קמפיין להתברג בדירוג. זה אינו האילוץ.',
  'Organic opportunity': 'הזדמנות אורגנית',
  '6 questions': '6 שאלות',
  '6 questions already rank but never reach an AI answer. These are the cheapest positions available and need publishing, not budget.':
    '6 שאלות כבר מדורגות אך לעולם אינן מגיעות לתשובת AI. אלה המיקומים הזולים ביותר הזמינים והם זקוקים לפרסום, לא לתקציב.',
  'Category clarity': 'בהירות הקטגוריה',
  Fragmented: 'מפוצל',
  'The same business is described differently across its own site, two directories and six engines. A campaign amplifies whichever version a buyer meets.':
    'אותו עסק מתואר אחרת באתר שלו, בשני מדריכים ובשישה מנועים. קמפיין מגביר את הגרסה שבה הקונה נתקל.',
  'Public narrative': 'הנרטיב הציבורי',
  'Machines describe this category using a competitor’s specification framing, so buyers arrive already evaluating against someone else’s criteria.':
    'מכונות מתארות את הקטגוריה הזו במסגור המפרט של מתחרה, כך שקונים מגיעים כשהם כבר מעריכים מול הקריטריונים של מישהו אחר.',
  'Messaging alignment': 'יישור המסרים',
  Misaligned: 'לא מיושר',
  'The campaign leads with same-day regional delivery. No public source currently associates that capability with this business.':
    'הקמפיין פותח באספקה אזורית באותו יום. שום מקור ציבורי אינו מקשר כיום את היכולת הזו לעסק הזה.',
  'Trust signals': 'אותות אמון',
  'Every claim traces back to the company’s own website. Systems treat self-description as a claim rather than as evidence.':
    'כל טענה מובילה חזרה לאתר של החברה עצמה. מערכות מתייחסות לתיאור עצמי כטענה ולא כראיה.',
  Reviews: 'ביקורות',
  'Adequate volume': 'נפח מספק',
  'Review volume is sufficient and sentiment is positive, but sits on platforms engines do not treat as authoritative for this category.':
    'נפח הביקורות מספק והסנטימנט חיובי, אך הן יושבות בפלטפורמות שהמנועים אינם רואים בהן סמכותיות לקטגוריה הזו.',
  'Brand credibility': 'אמינות המותג',
  'Expert citations': 'ציטוטי מומחים',
  'No named expert, engineer or specifier is publicly associated with the business. Machines have nobody to attribute expertise to.':
    'שום מומחה, מהנדס או מגדיר מפרט בשמו אינו מקושר בפומבי לעסק. למכונות אין למי לייחס מומחיות.',
  'External validation': 'אימות חיצוני',
  'Customer outcomes, third-party validation, certifications and named references are absent. Only review-platform badges appear.':
    'תוצאות לקוחות, אימות מצד שלישי, תעודות והפניות בשמן נעדרים. מופיעים רק תגי פלטפורמות ביקורת.',
  'Landing page quality': 'איכות דף הנחיתה',
  '3 of 7 pages': '3 מתוך 7 עמודים',
  'Three of the seven pages this campaign would drive to state what the business sells above the fold. The rest open with company history.':
    'שלושה מתוך שבעת העמודים שהקמפיין יוביל אליהם מציינים מה העסק מוכר בחלק העליון. השאר פותחים בהיסטוריית החברה.',
  'Decision support': 'תמיכה בהחלטה',
  'No comparison table, specification guidance or selection criteria exists on any destination page. A buyer arriving mid-evaluation has nothing to evaluate with.':
    'אין טבלת השוואה, הנחיית מפרט או קריטריוני בחירה באף עמוד יעד. קונה שמגיע באמצע ההערכה אין לו במה להעריך.',
  'Trust elements': 'רכיבי אמון',
  'Quote form only': 'טופס הצעת מחיר בלבד',
  'Commercial messaging': 'מסרים מסחריים',
  'Same-day regional delivery — the strongest differentiator — appears on one page and in no page title.':
    'אספקה אזורית באותו יום — הבידול החזק ביותר — מופיעה בעמוד אחד ובאף כותרת עמוד.',
  'Market leaders': 'מובילי שוק',
  '4 ahead': '4 מקדימים',
  '4 of 4 tracked competitors currently receive more recommendations than this business.':
    '4 מתוך 4 המתחרים הנמדדים מקבלים כיום יותר המלצות מהעסק הזה.',
  'Competitor visibility': 'נראות המתחרים',
  '4 in top three': '4 בשלישייה הראשונה',
  'Authority gap': 'פער סמכות',
  '21 sources': '21 מקורות',
  'Kestrel Industrial holds 21 sources against 3. Advertising does not close an evidence gap; publishing and validation do.':
    'ל-Kestrel Industrial יש 21 מקורות מול 3. פרסום אינו סוגר פער ראיות; פרסום תוכן ואימות כן.',
  'Competitive gap': 'פער תחרותי',
  '12% owned': '12% בבעלות',
  'Existing search strength': 'עוצמת החיפוש הקיימת',
  'Existing strength sits on questions asked after a vendor has been chosen, not on the questions that choose one.':
    'העוצמה הקיימת נמצאת בשאלות שנשאלות אחרי שנבחר ספק, לא בשאלות שבוחרות אחד.',
  'The leader is strongest at exactly the stage this campaign is intended to influence, which is where displacement is most expensive.':
    'המוביל חזק ביותר בדיוק בשלב שהקמפיין הזה נועד להשפיע עליו, ושם ההדחה יקרה ביותר.',
  '4 engines hold a wrong or missing record — one conflates the business with a same-named logistics firm.':
    '4 מנועים מחזיקים ברשומה שגויה או חסרה — אחד מערבב את העסק עם חברת לוגיסטיקה בעלת אותו שם.',
  'The category description differs between the website and two trade directories, which reads to a machine as an unreliable record.':
    'תיאור הקטגוריה שונה בין האתר לשני מדריכי מסחר, ומכונה קוראת זאת כרשומה בלתי אמינה.',
  'No single consistent story exists in the public record for a campaign to reinforce, so each impression starts the explanation over.':
    'לא קיים סיפור אחיד ברשומה הציבורית שקמפיין יוכל לחזק, ולכן כל חשיפה מתחילה את ההסבר מחדש.',
  'Kestrel Industrial receives 31% of recommendations against 4.2%. Launching now advertises into a decision they control.':
    'Kestrel Industrial מקבלת 31% מההמלצות מול 4.2%. השקה עכשיו משמעה פרסום לתוך החלטה שהיא שולטת בה.',

  /* Coverage */
  Coverage: 'כיסוי',
  'Where the campaign would reach buyers, and where it would not':
    'היכן הקמפיין יגיע לקונים, והיכן לא',
  'Stage 1': 'שלב 1',
  'Stage 2': 'שלב 2',
  'Stage 3': 'שלב 3',
  'Stage 4': 'שלב 4',
  'Stage 5': 'שלב 5',
  'Invisible to every conventional measurement tool.':
    'בלתי נראה לכל כלי מדידה מקובל.',
  'Visible to {tools}.': 'נראה ל{tools}.',
  'No presence at {stages}.': 'אין נוכחות ב{stages}.',
  'A campaign creates demand across the whole journey. It converts only at the stages where the business is actually present.':
    'קמפיין יוצר ביקוש לאורך כל המסע. הוא ממיר רק בשלבים שבהם העסק אכן נוכח.',

  /* Commercial risk */
  'Commercial risk': 'סיכון מסחרי',
  'Commercial risk level': 'רמת הסיכון המסחרי',
  'What launching today would cost': 'מה תעלה השקה היום',
  "Risk here is not the chance the campaign underperforms. It is the mechanism by which spend converts into a competitor's advantage.":
    'הסיכון כאן אינו הסיכוי שהקמפיין יניב פחות מהצפוי. זהו המנגנון שבו הוצאה מומרת ליתרון של מתחרה.',
  'Missed decision exposure': 'חשיפה להחלטות שהוחמצו',
  '19 of 24': '19 מתוך 24',
  'Commercial decisions that already complete without this business appearing. A campaign increases how many of these happen, not how many are won.':
    'החלטות מסחריות שכבר מסתיימות בלי שהעסק הזה מופיע. קמפיין מגדיל את מספרן, לא את מספר אלה שנזכות.',
  'Revenue dependent on this stage': 'הכנסה התלויה בשלב הזה',
  '38% of demand': '38% מהביקוש',
  'The share of revenue arriving through supplier evaluation — the stage where presence is currently lowest and the campaign has least leverage.':
    'נתח ההכנסה שמגיע דרך הערכת ספקים — השלב שבו הנוכחות נמוכה ביותר ולקמפיין יש בו את המינוף הקטן ביותר.',
  'Expected ROI risk': 'סיכון לתשואה הצפויה',
  'Return depends on buyers completing a journey the business is absent from at these stages. Spend reaches them; the recommendation does not.':
    'התשואה תלויה בכך שקונים ישלימו מסע שהעסק נעדר ממנו בשלבים הללו. ההוצאה מגיעה אליהם; ההמלצה לא.',
  'Every click is paid for twice: once to acquire it, and again to reacquire the buyer who arrived, found nothing to evaluate with, and left to compare elsewhere.':
    'כל קליק משולם פעמיים: פעם כדי לרכוש אותו, ושוב כדי לרכוש מחדש את הקונה שהגיע, לא מצא במה להעריך, ועזב להשוות במקום אחר.',
  'Paid acquisition buys attention that trust has to convert. Without it the campaign raises awareness for the category and the best-verified supplier in it wins.':
    'רכישה ממומנת קונה תשומת לב שהאמון צריך להמיר. בלעדיו הקמפיין מעלה מודעות לקטגוריה, והספק המאומת ביותר בה זוכה.',
  'The campaign generates consideration the business cannot survive. Buyers who check will find nothing independent, and the check happens after the click is paid for.':
    'הקמפיין מייצר שקילה שהעסק אינו שורד. קונים שיבדקו לא ימצאו דבר בלתי תלוי, והבדיקה מתרחשת אחרי שהקליק כבר שולם.',
  'Campaign attention drives buyers to verify the business through an assistant that cannot describe it correctly. The spend creates the demand and a competitor collects it.':
    'תשומת הלב מהקמפיין מניעה קונים לאמת את העסק דרך עוזר שאינו יכול לתאר אותו נכון. ההוצאה יוצרת את הביקוש ומתחרה אוסף אותו.',
  'Campaign messaging contradicts what the market already believes. Spend is consumed correcting the record instead of creating demand.':
    'מסרי הקמפיין סותרים את מה שהשוק כבר מאמין בו. ההוצאה נצרכת בתיקון הרשומה במקום ביצירת ביקוש.',
  'Paid search carries the entire commercial keyword set alone, at a blended cost already above break-even, for as long as the campaign runs.':
    'החיפוש הממומן נושא לבדו את כל מערך מילות המפתח המסחריות, בעלות משוקללת שכבר מעל נקודת האיזון, כל עוד הקמפיין פועל.',
  'The campaign raises category demand that the best-evidenced supplier absorbs. Competitor share can rise as a direct result of this spend.':
    'הקמפיין מעלה ביקוש בקטגוריה שהספק בעל הראיות הטובות ביותר סופג. נתח המתחרה עשוי לעלות כתוצאה ישירה מההוצאה הזו.',
  'Both surfaces': 'שני המשטחים',
  Partial: 'חלקי',

  /* Interventions */
  Intervention: 'התערבות',
  'Required before launch': 'נדרש לפני ההשקה',
  'Blocked until priority {n} lands.': 'חסום עד שעדיפות {n} תונחת.',
  'If you launch anyway': 'אם תשיקו בכל זאת',
  'Launch campaign': 'השיקו את הקמפיין',
  'Fix readiness first': 'תקנו קודם את המוכנות',
  'Open Executive Action Plan': 'פתחו את תוכנית הפעולה הניהולית',
  'Review the full position': 'סקרו את התמונה המלאה',
  'Website and conversion readiness': 'מוכנות האתר וההמרה',
  'What position are we launching into?': 'לאיזו עמדה אנחנו משיקים?',
  'AI narrative': 'נרטיב ה-AI',
  'Narrative consistency': 'עקביות הנרטיב',

  /* --- Decision Reconstruction ---------------------------------------------- */
  'Decision Reconstruction': 'שחזור ההחלטה',
  'Decision Reconstruction | GeoRepute': 'שחזור ההחלטה | GeoRepute',
  'Signature experience': 'החוויה המובהקת',
  'Enter a domain and choose a commercial question. The system reconstructs what each surface understood, who received the decision and why.':
    'הזינו דומיין ובחרו שאלה מסחרית. המערכת משחזרת מה כל משטח הבין, מי קיבל את ההחלטה ומדוע.',
  'Seeded environment — this demonstration always reconstructs {org}.':
    'סביבה מבוססת נתוני זרע — הדגמה זו משחזרת תמיד את {org}.',
  'Understood as: {what}': 'הובן כ: {what}',
  Brand: 'המותג',
  Competitor: 'המתחרה',
  Low: 'נמוכה',
  '{n} months': '{n} חודשים',
  Supporting: 'תומך',
  Downstream: 'במורד הזרם',
  '{n} tracked decision questions. Supplier-evaluation questions appear first — that is where the vendor is chosen.':
    '{n} שאלות החלטה נמדדות. שאלות הערכת ספקים מופיעות ראשונות — שם נבחר הספק.',
  /* The engine understandings, as the seed stores them. */
  'An MRO and fastener distributor serving manufacturers':
    'מפיץ ציוד תחזוקה ומחברים המשרת יצרנים',
  'Midwest industrial fastener and MRO distributor':
    'מפיץ מחברים תעשייתיים וציוד תחזוקה במערב התיכון',
  'A regional industrial supplier in the US Midwest':
    'ספק תעשייתי אזורי במערב התיכון של ארה"ב',
  'Industrial supply company, category association incomplete':
    'חברת אספקה תעשייתית, שיוך הקטגוריה אינו שלם',
  'Unclear — associates the name with unrelated businesses':
    'לא ברור — משייך את השם לעסקים שאינם קשורים',
  'Not recognized as a distinct business entity':
    'אינו מזוהה כישות עסקית נפרדת',
  "Engines describe the category using a competitor's framing. Northwind owns 12% of that language.":
    'המנועים מתארים את הקטגוריה במסגור של מתחרה. Northwind מחזיקה ב-12% מהשפה הזו.',
  '{n} independent sources support this brand. Northwind has 3.':
    '{n} מקורות בלתי תלויים תומכים במותג הזה. ל-Northwind יש 3.',
  '{name} controls': '{name} שולטת ב',
  'across the whole set. Competitive density is shifting at {velocity}.':
    'על פני כל המערך. הצפיפות התחרותית משתנה בקצב {velocity}.',
  'This is the exposure attributable to this single question. The full-book figure across all {n} tracked decisions is materially larger and appears in Mission Control.':
    'זו החשיפה המיוחסת לשאלה הבודדת הזו. הנתון המלא על פני כל {n} ההחלטות הנמדדות גדול משמעותית ומופיע במרכז הבקרה.',
  'stage {n} of {total}': 'שלב {n} מתוך {total}',
  Present: 'נוכח',
  'Observable by {tools} — but only after the decision has already narrowed.':
    'ניתן לצפייה על ידי {tools} — אך רק לאחר שההחלטה כבר הצטמצמה.',
  'No conventional tool observes this stage. There is no visit, click, lead or CRM event to record — which is why the weakness is invisible until revenue moves.':
    'שום כלי מקובל אינו צופה בשלב הזה. אין ביקור, קליק, ליד או אירוע CRM לתעד — ולכן החולשה נותרת בלתי נראית עד שההכנסה זזה.',
  Domain: 'דומיין',
  'Reconstruction confidence across all ten surfaces.':
    'רמת הוודאות של השחזור על פני עשרת המשטחים.',

  /* Stage headings */
  'What each AI engine understood about the business':
    'מה כל מנוע AI הבין על העסק',
  'Whether the brand was recognised, mentioned, cited, recommended or ignored':
    'האם המותג זוהה, הוזכר, צוטט, הומלץ או התעלמו ממנו',
  'Which competitor was selected instead': 'איזה מתחרה נבחר במקומו',
  'Which sources, trust signals and narratives influenced the answer':
    'אילו מקורות, אותות אמון ונרטיבים השפיעו על התשובה',
  'What Google demand, organic position and paid click cost indicate':
    'על מה מצביעים הביקוש ב-Google, המיקום האורגני ועלות הקליק הממומן',
  'Where the question sits in the customer decision journey':
    'היכן ממוקמת השאלה במסע ההחלטה של הלקוח',
  'What timing, market maturity and competitive density indicate':
    'על מה מצביעים התזמון, בשלות השוק והצפיפות התחרותית',
  'What the directional commercial exposure may be':
    'מהי החשיפה המסחרית הכיוונית המשוערת',
  'Which connected signals explain the outcome':
    'אילו אותות מקושרים מסבירים את התוצאה',
  'What action is prescribed and how improvement will be measured':
    'איזו פעולה נקבעת וכיצד יימדד השיפור',
  'Decision intelligence graph': 'גרף מודיעין ההחלטות',

  /* Engine status and understanding */
  'Mentioned only': 'הוזכר בלבד',
  'Wrong entity': 'ישות שגויה',
  'Named Northwind in its answer, citing company website.':
    'הזכיר את Northwind בתשובתו, בהסתמך על אתר החברה.',
  'Recognises the business but did not consider it relevant to this question.':
    'מזהה את העסק אך לא ראה בו רלוונטי לשאלה זו.',
  'Describes Northwind as a hardware retailer rather than an MRO distributor, which removes it from supplier-evaluation answers.':
    'מתאר את Northwind כקמעונאית כלי עבודה ולא כמפיצת ציוד תחזוקה, מה שמוציא אותה מתשובות להערכת ספקים.',
  'Knows the company exists but not which product categories it carries, so it is omitted from specification-led questions.':
    'יודע שהחברה קיימת אך לא אילו קטגוריות מוצרים היא מחזיקה, ולכן היא מושמטת משאלות המונחות מפרט.',
  'Conflates Northwind Supply with a same-named logistics firm, so category association fails entirely.':
    'מערבב בין Northwind Supply לחברת לוגיסטיקה בעלת אותו שם, ולכן שיוך הקטגוריה נכשל לחלוטין.',
  '1 of 6 engines named Northwind, and none placed it first.':
    'מנוע אחד מתוך 6 הזכיר את Northwind, ואף אחד לא מיקם אותה ראשונה.',
  '4 of 6 resolve the wrong entity': '4 מתוך 6 מזהים את הישות השגויה',
  'engines recommended the business on this question':
    'מנועים המליצו על העסק בשאלה זו',
  'of all recommendations across the tracked decision set':
    'מכלל ההמלצות במערך ההחלטות הנמדד',

  /* Competitor, sources and search */
  'Kestrel Industrial is cited by 21 independent sources; Northwind by 3.':
    'Kestrel Industrial מצוטטת על ידי 21 מקורות בלתי תלויים; Northwind על ידי 3.',
  '3 sources vs 14 median': '3 מקורות מול חציון של 14',
  'Northwind’s own pages are the only source engines can reach for its claims — self-citation carries little weight.':
    'העמודים של Northwind עצמה הם המקור היחיד שהמנועים יכולים להגיע אליו עבור טענותיה — ציטוט עצמי נושא משקל מועט.',
  'A published comparison library gives engines material they can quote directly.':
    'ספריית השוואה מפורסמת נותנת למנועים חומר שהם יכולים לצטט ישירות.',
  'Category evaluation criteria': 'קריטריוני הערכה בקטגוריה',
  'Supplier-comparison content': 'תוכן להשוואת ספקים',
  'Company website': 'אתר החברה',
  Source: 'מקור',
  Favours: 'מעדיף',
  'Why it matters': 'מדוע זה חשוב',

  'Monthly volume': 'נפח חודשי',
  'Paid CPC': 'עלות קליק ממומן',
  'AI presence': 'נוכחות ב-AI',
  'Closest tracked keyword': 'מילת המפתח הנמדדת הקרובה ביותר',
  'Above break-even CPC': 'מעל עלות הקליק בנקודת האיזון',
  'Coverage at this stage': 'כיסוי בשלב זה',
  'Share of query volume': 'נתח מנפח השאילתות',
  'Share of revenue decided': 'נתח ההכנסה שנקבע',
  'of questions at this stage against': 'מהשאלות בשלב זה מול',
  'Market position': 'עמדה בשוק',
  'Window remaining': 'החלון שנותר',
  'Buy this as an intelligence product': 'רכשו זאת כמוצר מודיעין',

  /* Page descriptions. These render into <meta name="description"> rather than
     into the page, so the render audit cannot see them — it reads visible
     prose and a short list of perceivable attributes. Four of them sat in
     English through every clean audit this site has passed. */
  'Decision Health, revenue exposure, competitive capture, narrative control and strategic timing in one decision position.':
    'בריאות ההחלטה, חשיפת ההכנסה, לכידה תחרותית, שליטה בנרטיב ותזמון אסטרטגי — בעמדת החלטה אחת.',
  'Should we launch this campaign today? A pre-campaign assessment of the business rather than the campaign — AI, authority, trust, narrative, competitive position and destination readiness, weighted into one decision.':
    'האם להשיק את הקמפיין הזה היום? הערכה טרום-קמפיין של העסק ולא של הקמפיין — AI, סמכות, אמון, נרטיב, עמדה תחרותית ומוכנות היעד, משוקללים להחלטה אחת.',
  'What story is the market telling about us, and how is it influencing decisions? Active narratives, who owns each one, where they are heading, and what should change.':
    'איזה סיפור השוק מספר עלינו, וכיצד הוא משפיע על החלטות? הנרטיבים הפעילים, מי מחזיק בכל אחד מהם, לאן הם מתקדמים ומה צריך להשתנות.',
  'Enter a domain and select a commercial question. Reconstruct what each AI engine understood, who received the decision, why, and what must change.':
    'הזינו דומיין ובחרו שאלה מסחרית. שחזרו מה כל מנוע AI הבין, מי קיבל את ההחלטה, מדוע, ומה חייב להשתנות.',

  /* The 24 tracked buyer questions. Translated on the same reasoning as the
     home page's search queries — see the note beside those. */
  'Which fastener supplier should we choose for a new plant?':
    'באיזה ספק מחברים כדאי לבחור עבור מפעל חדש?',
  'Who are the top industrial supply companies for fasteners?':
    'מי הן חברות האספקה התעשייתית המובילות למחברים?',
  'Best MRO distributors for manufacturing plants':
    'מפיצי ציוד התחזוקה הטובים ביותר למפעלי ייצור',
  'Top rated industrial supply vendors near Chicago':
    'ספקי אספקה תעשייתית המדורגים גבוה ליד שיקגו',
  'Which MRO supplier has the best fill rate?':
    'לאיזה ספק ציוד תחזוקה יש שיעור האספקה הטוב ביותר?',
  'Recommended industrial distributors for hydraulic components':
    'מפיצים תעשייתיים מומלצים לרכיבים הידראוליים',
  'Compare industrial distributor service levels':
    'השוו רמות שירות של מפיצים תעשייתיים',
  'Is a national or regional MRO distributor better?':
    'האם מפיץ ציוד תחזוקה ארצי או אזורי עדיף?',
  'Should we consolidate MRO suppliers or keep multiple vendors?':
    'האם לרכז ספקי ציוד תחזוקה או לשמור על מספר ספקים?',
  'What should an MRO supply agreement include?':
    'מה צריך לכלול הסכם אספקת ציוד תחזוקה?',
  'Risks of single-source supplier dependency for MRO':
    'סיכוני תלות בספק יחיד לציוד תחזוקה',
  'Vendor-managed inventory vs consignment for MRO supplies':
    'ניהול מלאי על ידי הספק מול קונסיגנציה לציוד תחזוקה',
  'What is vendor-managed inventory for MRO supplies?':
    'מהו ניהול מלאי על ידי הספק לציוד תחזוקה?',
  'How do I reduce MRO inventory carrying costs?':
    'כיצד מפחיתים את עלויות החזקת מלאי ציוד התחזוקה?',
  'Best practices for industrial fastener sourcing':
    'שיטות עבודה מומלצות לרכש מחברים תעשייתיים',
  'What is the difference between grade 5 and grade 8 fasteners?':
    'מה ההבדל בין מחברים דרגה 5 לדרגה 8?',
  'What causes premature bolt failure in high-vibration equipment?':
    'מה גורם לכשל מוקדם של ברגים בציוד בעל רטט גבוה?',
  'How often should hydraulic fittings be replaced?':
    'באיזו תדירות יש להחליף אביזרים הידראוליים?',
  'How to avoid counterfeit fasteners in the supply chain':
    'כיצד להימנע ממחברים מזויפים בשרשרת האספקה',
  'What are the most common industrial supply delivery failures?':
    'מהם כשלי האספקה הנפוצים ביותר באספקה תעשייתית?',
  'Industrial fastener supplier with same-day shipping':
    'ספק מחברים תעשייתיים עם משלוח באותו יום',
  'Get a quote for bulk grade 8 fasteners':
    'קבלו הצעת מחיר למחברים דרגה 8 בכמות',
  'Set up an MRO supply account': 'פתחו חשבון אספקת ציוד תחזוקה',

  /* --- Executive Mission Control -------------------------------------------
     Tile labels carry title case here and sentence case elsewhere in the seed
     ("Narrative Ownership" vs "Narrative ownership"). The overlay keys on the
     exact source string, so both spellings need an entry. */
  'Executive Mission Control': 'מרכז הבקרה הניהולי',
  'Executive Mission Control | GeoRepute': 'מרכז הבקרה הניהולי | GeoRepute',
  'Not more data. A decision position.': 'לא עוד נתונים. עמדת החלטה.',
  'Ten measures, each with evidence behind it': 'עשרה מדדים, לכל אחד ראיות מאחוריו',
  'Every figure is computed from observed data. Select any tile to open the full readout, its evidence and its prescribed action.':
    'כל נתון מחושב מתוך מידע שנצפה. בחרו כל אריח כדי לפתוח את הקריאה המלאה, את ראיותיה ואת הפעולה שנקבעה לה.',
  Position: 'עמדה',
  Explanation: 'הסבר',
  Execution: 'ביצוע',

  /* Tile labels and their readings */
  'AI Recognition Position': 'עמדת הזיהוי על ידי AI',
  'Average entity understanding across six engines. Three misidentify the category.':
    'הבנת הישות הממוצעת בשישה מנועים. שלושה מזהים את הקטגוריה באופן שגוי.',
  'Google vs AI Gap': 'הפער בין Google ל-AI',
  'Keywords absent from AI answers and outside the Google top ten. The decision happens on neither surface.':
    'מילות מפתח שנעדרות מתשובות AI ונמצאות מחוץ לעשירייה הראשונה ב-Google. ההחלטה אינה מתרחשת באף אחד משני המשטחים.',
  'Decision Presence': 'נוכחות בהחלטה',
  'Supplier-evaluation coverage. 19 of 24 decisions complete without the brand.':
    'כיסוי בהערכת ספקים. 19 מתוך 24 החלטות מסתיימות ללא המותג.',
  'Competitive Capture': 'תפיסה תחרותית',
  'Kestrel Industrial receives the recommendation. Northwind receives 4.2%.':
    'Kestrel Industrial מקבלת את ההמלצה. Northwind מקבלת 4.2%.',
  'Narrative Ownership': 'בעלות על הנרטיב',
  'Share of the language engines use to define the category. The criteria cited first are a competitor’s.':
    'הנתח מהשפה שבה משתמשים המנועים כדי להגדיר את הקטגוריה. הקריטריונים המצוטטים ראשונים הם של מתחרה.',
  'Trust Readiness': 'מוכנות לאמון',
  'The recommendation goes to the supplier engines can support with evidence.':
    'ההמלצה הולכת לספק שהמנועים יכולים לתמוך בו בראיות.',
  'Paid Dependency': 'תלות בתשלום',
  'Blended CPC runs above break-even. Paid is renting the positions authority would hold.':
    'העלות המשוקללת לקליק גבוהה מנקודת האיזון. התשלום שוכר את המיקומים שהסמכות הייתה מחזיקה.',
  'Weighted across six GEON vectors. Authority at 28 is the binding constraint.':
    'משוקלל על פני שישה וקטורי GEON. הסמכות ברמה 28 היא האילוץ הכובל.',
  'ChatGPT supplier recommendation presence': 'נוכחות בהמלצות ספקים ב-ChatGPT',
  'The most-used engine puts Northwind forward in one of twenty-four decision questions.':
    'המנוע הנפוץ ביותר מציג את Northwind באחת מתוך עשרים וארבע שאלות החלטה.',
  '3 independent sources against a category median of 14.':
    '3 מקורות בלתי תלויים מול חציון קטגוריה של 14.',
  'Authority is the binding constraint, so it is where intervention begins.':
    'הסמכות היא האילוץ הכובל, ולכן שם מתחילה ההתערבות.',
  'Paid search is bought to cover the questions authority no longer wins.':
    'חיפוש ממומן נרכש כדי לכסות את השאלות שהסמכות כבר אינה זוכה בהן.',
  'Emerging market at 63/100 readiness. Query maturity accelerating.':
    'שוק מתהווה במוכנות 63/100. נשילות השאילתות מאיצה.',
  'The window remains open but is narrowing. Displacement cost rises once engines settle on a stable answer set.':
    'החלון עדיין פתוח אך מצטמצם. עלות ההדחה עולה ברגע שהמנועים מתייצבים על מערך תשובות קבוע.',
  'Decision deadline': 'מועד ההכרעה',
  'Timing window': 'חלון התזמון',
  months: 'חודשים',

  /* Causal chain and drawer chrome */
  'Causal signal chain': 'שרשרת האותות הסיבתית',
  'The measures above are not independent. This is the chain that connects them, ending in the intervention it implies.':
    'המדדים שלמעלה אינם בלתי תלויים. זו השרשרת שמחברת ביניהם, ומסתיימת בהתערבות הנגזרת מהם.',
  'One decision. Many signals. One explanation.': 'החלטה אחת. אותות רבים. הסבר אחד.',
  'Open evidence': 'פתחו את הראיות',
  'Open Action Center': 'פתחו את מרכז הפעולות',
  'Reconstruct the decision': 'שחזרו את ההחלטה',
  'Explore intelligence engines': 'חקרו את מנועי המודיעין',

  /* --- The executive intelligence feed ------------------------------------- */
  'Executive intelligence feed': 'פיד המודיעין הניהולי',
  '{n} events': '{n} אירועים',
  'Competitor surge': 'זינוק של מתחרה',
  'Kestrel Industrial gained the first recommendation on two more supplier questions':
    'Kestrel Industrial זכתה בהמלצה הראשונה בשתי שאלות ספקים נוספות',
  'Kestrel now leads four of seven supplier-evaluation answers, up from two. Both new wins cite a trade publication added in June.':
    'Kestrel מובילה כעת בארבע מתוך שבע תשובות להערכת ספקים, לעומת שתיים. שתי הזכיות החדשות מצטטות פרסום מקצועי שנוסף ביוני.',
  'Citation lost': 'ציטוט אבד',
  'Perplexity stopped citing the Northwind capability page':
    'Perplexity הפסיקה לצטט את עמוד היכולות של Northwind',
  'The page was cited on three questions in June and none in July. Perplexity now resolves the same questions to competitor sources.':
    'העמוד צוטט בשלוש שאלות ביוני ובאף אחת ביולי. Perplexity מפנה כעת את אותן שאלות למקורות של מתחרים.',
  /* Feed deltas. The arrow is drawn by the component; the seed holds only the
     value, so these key on the bare string. */
  '3 → 0 citations': '3 ← 0 ציטוטים',
  '25 searches/mo': '25 חיפושים/חודש',
  '+1 question': '+1 שאלה',
  '+2 questions': '+2 שאלות',
  '+8% QoQ': '+8% מרבעון לרבעון',
  '+8% CPC': '+8% בעלות לקליק',
  'per month': 'לחודש',
  /* The causal chain composes this whole line in the seed, so it keys as one
     string rather than through periodLabel. */
  '$3,200 – $6,200 per month': '$3,200 – $6,200 לחודש',
  'per quarter': 'לרבעון',
  'per year': 'לשנה',
  'Narrative risk': 'סיכון נרטיבי',
  'Engines adopted a competitor’s evaluation criteria':
    'המנועים אימצו את קריטריוני ההערכה של מתחרה',
  'Fill rate and catalogue breadth are now cited first when engines explain how to choose a distributor. Regional response time is not referenced.':
    'שיעור אספקה ורוחב קטלוג מצוטטים כעת ראשונים כשהמנועים מסבירים כיצד לבחור מפיץ. זמן תגובה אזורי אינו מוזכר.',
  'Trust signal decayed': 'אות אמון נשחק',
  'Category description diverged across two trade directories':
    'תיאור הקטגוריה נפרד בין שני מדריכי מסחר',
  'Two directories now describe Northwind differently from its own site. Inconsistency is the mechanism behind entity confusion on ChatGPT and Copilot.':
    'שני מדריכים מתארים כעת את Northwind אחרת מהאתר שלה עצמה. חוסר עקביות הוא המנגנון שמאחורי בלבול הישות ב-ChatGPT וב-Copilot.',
  'Search cost spike': 'זינוק בעלות החיפוש',
  'Blended CPC moved further above break-even':
    'העלות המשוקללת לקליק התרחקה עוד מנקודת האיזון',
  '“industrial supply company” rose to $11.00 with no organic position in the top 100. Paid is covering a question authority does not reach.':
    '"חברת אספקה תעשייתית" עלתה ל-$11.00 ללא מיקום אורגני ב-100 הראשונים. התשלום מכסה שאלה שהסמכות אינה מגיעה אליה.',
  'New decision question': 'שאלת החלטה חדשה',
  'A new supplier-evaluation question entered the tracked set':
    'שאלת הערכת ספקים חדשה נכנסה למערך הנמדד',
  '“Which MRO supplier has the best fill rate?” appeared with measurable volume. Northwind is absent from every engine answering it.':
    '"לאיזה ספק תחזוקה יש שיעור האספקה הטוב ביותר?" הופיעה בנפח מדיד. Northwind נעדרת מכל מנוע שעונה עליה.',
  'Recommendation gained': 'הושגה המלצה',
  'Claude began recommending Northwind for regional distributor questions':
    'Claude החל להמליץ על Northwind בשאלות על מפיצים אזוריים',
  'First recommendation on “Top rated industrial supply vendors near Chicago”. Regional specificity is the differentiator the answer cites.':
    'ההמלצה הראשונה על "ספקי אספקה תעשייתית מדורגים גבוה ליד שיקגו". הספציפיות האזורית היא הבידול שהתשובה מצטטת.',
  'Regional opportunity': 'הזדמנות אזורית',
  'Midwest regional questions show weaker competitive density':
    'שאלות אזוריות במערב התיכון מראות צפיפות תחרותית חלשה יותר',
  'Questions naming a Midwest location carry lower competitor control than national equivalents — the cheapest available entry point.':
    'שאלות שמציינות מיקום במערב התיכון נושאות שליטה תחרותית נמוכה יותר מהמקבילות הארציות — נקודת הכניסה הזולה ביותר הזמינה.',
  'Competitive density rose 8% quarter over quarter':
    'הצפיפות התחרותית עלתה ב-8% מרבעון לרבעון',

  /* --- Strategic Action Center --------------------------------------------- */
  'Strategic Action Center': 'מרכז הפעולה האסטרטגי',
  'Prioritised interventions with owner, deadline, expected movement and how impact is verified after execution.':
    'התערבויות מתועדפות עם אחראי, תאריך יעד, תזוזה צפויה והאופן שבו ההשפעה מאומתת לאחר הביצוע.',
  '{n}-day': '{n} ימים',
  'Each intervention names an owner, a deadline, the signal it should move and how that movement will be verified.':
    'כל התערבות מציינת אחראי, תאריך יעד, את האות שעליה להזיז ואת האופן שבו התזוזה תאומת.',
  Interventions: 'התערבויות',
  Measured: 'נמדד',
  'Verified after execution': 'מאומת לאחר הביצוע',
  View: 'תצוגה',
  'Priority queue': 'תור עדיפויות',
  '30/60/90 roadmap': 'מפת דרכים 30/60/90',
  'day horizon': 'אופק ימים',
  'Ranked by urgency, then by effort — cheapest decisive move first':
    'מדורג לפי דחיפות, ואז לפי מאמץ — המהלך המכריע הזול ביותר תחילה',
  'Priority {n}': 'עדיפות {n}',
  /* 'Success metric' and 'Measured change' already have entries in the seed
     section below. */
  'Not yet measured — verified after execution.':
    'טרם נמדד — מאומת לאחר הביצוע.',
  'View evidence': 'הציגו ראיות',
  'How impact is verified': 'כיצד מאומתת ההשפעה',
  'Completion is not impact. Each action is verified by re-observing the signal it targets, across the same engines and questions, after execution. Until that re-observation happens, measured change stays empty rather than assumed.':
    'השלמה אינה השפעה. כל פעולה מאומתת באמצעות רצפייה חוזרת של האות שאליו כוונה, באותם מנועים ואותן שאלות, לאחר הביצוע. עד שהרצפייה החוזרת מתבצעת, השינוי הנמדד נותר ריק במקום שיונח.',
  'Back to Mission Control': 'חזרה למרכז הבקרה',
  'Read the methodology': 'קראו את המתודולוגיה',

  /* ==========================================================================
     THE HOW-IT-WORKS PAGE.

     Almost all of it comes from the `loop` dictionary block. What lands here
     is the one inline label and the screenshot slots the four stages render —
     ProductScreen puts both `surface` and `caption` through t().
     ======================================================================= */

  'From the platform': 'מתוך הפלטפורמה',

  /* --- PLAN · the diagnosis surfaces --------------------------------------- */
  'Deep Diagnosis — the full scan result across connected signals':
    'אבחון עומק — תוצאת הסריקה המלאה על פני אותות מקושרים',
  'Competitive Intelligence — the comparison matrix':
    'מודיעין תחרותי — מטריצת ההשוואה',
  'AI Intelligence — per-engine recognition and recommendation':
    'מודיעין AI — זיהוי והמלצה לכל מנוע',
  'Google vs AI Visibility — the gap matrix':
    'נראות ב-Google מול AI — מטריצת הפערים',
  'Market Intelligence — category and demand view':
    'מודיעין שוק — תצוגת קטגוריה וביקוש',
  'Narrative Intelligence — narrative ownership and movement':
    'מודיעין נרטיבים — בעלות על הנרטיב ותנועתו',
  'Trust & Authority — independent-source verification view':
    'אמון וסמכות — תצוגת אימות ממקורות בלתי תלויים',

  /* --- DO · the execution surfaces ----------------------------------------- */
  'Strategy — objectives translated into targeted signals':
    'אסטרטגיה — יעדים שמתורגמים לאותות ממוקדים',
  'Content & media generation — output bound to identified gaps':
    'הפקת תוכן ומדיה — תפוקה הקשורה לפערים שזוהו',
  'Execution calendar — sequenced distribution':
    'לוח ביצוע — הפצה מסודרת בזמן',
  'Sequence and timing, derived from the strategy rather than from a posting cadence. Anonymised demonstration data.':
    'רצף ותזמון, נגזרים מהאסטרטגיה ולא מקצב פרסום. נתוני הדגמה אנונימיים.',
  'Distribution — connected digital assets and publishing state':
    'הפצה — נכסים דיגיטליים מחוברים ומצב הפרסום',

  /* --- CHECK and ACT ------------------------------------------------------- */
  'Measurement — the before → action → after comparison table':
    'מדידה — טבלת ההשוואה לפני ← פעולה ← אחרי',
  'Learning — measured outcome feeding the next recommendation':
    'למידה — תוצאה נמדדת שמזינה את ההמלצה הבאה',

  /* ==========================================================================
     THE METHODOLOGY PAGE.

     Note the evidence sources, model rules and limitations reach t() through
     a variable rather than a literal, so scripts/i18n-keys.mjs cannot see
     them. They are listed here by hand; the page audit is what catches a
     miss.
     ======================================================================= */

  /* --- Hero ---------------------------------------------------------------- */
  'The stronger the claim, the stronger the evidence path must be.':
    'ככל שהטענה חזקה יותר, כך נתיב הראיות חייב להיות חזק יותר.',
  'Every conclusion in this system can be traced to a date, a source, an engine, a prompt or a connected dataset. This page states how, and where the boundaries are.':
    'כל מסקנה במערכת הזו ניתנת להתחקות אל תאריך, מקור, מנוע, שאילתה או מאגר נתונים מחובר. העמוד הזה מסביר כיצד, והיכן עוברים הגבולות.',
  'Methodology version {version} · observed {date}':
    'גרסת מתודולוגיה {version} · נצפה {date}',

  /* --- GEON ---------------------------------------------------------------- */
  'The GEON framework': 'מסגרת GEON',
  'Six vectors, one published weighting': 'שישה וקטורים, שקלול אחד מפורסם',
  'The Decision Health Index is a weighted function of these six vectors — not a score assigned by judgement. The weighting is published below so the index can be recomputed independently.':
    'מדד בריאות ההחלטה הוא פונקציה משוקללת של ששת הוקטורים הללו — לא ציון שניתן על סמך שיקול דעת. השקלול מפורסם למטה כדי שניתן יהיה לחשב את המדד מחדש באופן עצמאי.',
  'Decision Health Index weighting': 'שקלול מדד בריאות ההחלטה',
  'Yields <b>{score} of 100</b> for the seeded organisation. Authority carries the heaviest weight and the lowest score, which is why it is the binding constraint.':
    'מניב <b>{score} מתוך 100</b> עבור הארגון המודגם. הסמכות נושאת את המשקל הכבד ביותר ואת הציון הנמוך ביותר, ולכן היא האילוץ הכובל.',
  'GEON assessment. {readings}. Lowest vector is {lowest}.':
    'הערכת GEON. {readings}. הוקטור הנמוך ביותר הוא {lowest}.',
  '{label} {score} of 100': '{label} {score} מתוך 100',

  /* --- Evidence sources ---------------------------------------------------- */
  'Where the observations come from': 'מהיכן מגיעות התצפיות',
  'This environment observes <b>{questions}</b> decision questions across six AI engines, and <b>{keywords}</b> commercial keywords in Google.':
    'סביבה זו עוקבת אחר <b>{questions}</b> שאלות החלטה בשישה מנועי AI, ואחר <b>{keywords}</b> מילות מפתח מסחריות ב-Google.',
  'Public AI responses': 'תשובות AI פומביות',
  'Answers observed from six engines against a fixed question set, recorded with engine, date and full response.':
    'תשובות שנצפו בשישה מנועים מול מערך שאלות קבוע, מתועדות עם המנוע, התאריך והתשובה המלאה.',
  'Third-party search and market data': 'נתוני חיפוש ושוק מצד שלישי',
  'Keyword volume, organic position, competition and cost per click.':
    'נפח מילות מפתח, מיקום אורגני, תחרות ועלות לקליק.',
  'Connected first-party analytics': 'אנליטיקה מחוברת מצד ראשון',
  'Search Console and Analytics, where the customer connects them. Improves confidence; never required.':
    'Search Console ו-Analytics, כאשר הלקוח מחבר אותם. משפר את רמת הוודאות; לעולם אינו נדרש.',
  'Public competitor information': 'מידע פומבי על מתחרים',
  'Published positions, citations and the sources engines reach for when recommending a competitor.':
    'עמדות מפורסמות, ציטוטים והמקורות שאליהם פונים המנועים כשהם ממליצים על מתחרה.',
  'Public content, reputation and trust signals':
    'תוכן פומבי, מוניטין ואותות אמון',
  'Independent validation, review corpora and cross-source consistency.':
    'אימות בלתי תלוי, מאגרי ביקורות ועקביות בין מקורות.',
  'Customer-configured business assumptions': 'הנחות עסקיות שהוגדרו על ידי הלקוח',
  'Average deal value, conversion rates and revenue split by decision stage. Always labelled as customer-provided.':
    'שווי עסקה ממוצע, שיעורי המרה ופילוח הכנסות לפי שלב ההחלטה. תמיד מסומן כנתון שסופק על ידי הלקוח.',
  'Historical GeoRepute scans and action outcomes':
    'סריקות GeoRepute היסטוריות ותוצאות פעולות',
  'Prior observations and whether an executed action moved the signal it targeted.':
    'תצפיות קודמות והאם פעולה שבוצעה הזיזה את האות שאליו כוונה.',

  /* --- Confidence ---------------------------------------------------------- */
  'Every conclusion carries its own confidence':
    'לכל מסקנה רמת ודאות משלה',
  'Confidence is attached to the individual conclusion, not to the product. Two findings in the same readout can carry different confidence, and they frequently do.':
    'רמת הוודאות מוצמדת למסקנה הבודדת, לא למוצר. שני ממצאים באותה קריאה יכולים לשאת רמות ודאות שונות, וכך קורה לעיתים קרובות.',

  /* --- Financial model ----------------------------------------------------- */
  'Financial model': 'המודל הפיננסי',
  'Directional, ranged, and never described as confirmed':
    'כיווני, בטווחים, ולעולם אינו מתואר כמאומת',
  'The model': 'המודל',
  'All values are shown as ranges, never as point estimates.':
    'כל הערכים מוצגים כטווחים, לעולם לא כהערכות נקודתיות.',
  'No value is described as confirmed lost revenue.':
    'אף ערך אינו מתואר כהכנסה אבודה מאומתת.',
  'Every model exposes its assumptions and data boundaries.':
    'כל מודל חושף את הנחותיו ואת גבולות הנתונים שלו.',
  'Connected first-party conversion data improves confidence.':
    'נתוני המרה מחוברים מצד ראשון משפרים את רמת הוודאות.',
  'Prediction is withheld when history is insufficient.':
    'התחזית נמנעת כאשר ההיסטוריה אינה מספקת.',
  'Every exported brief carries methodology and limitation language.':
    'כל תדריך מיוצא נושא ניסוח מתודולוגיה ומגבלות.',
  'Search economics, derived': 'כלכלת החיפוש, נגזרת',
  'Blended CPC': 'עלות לקליק משוקללת',
  /* 'Break-even CPC' and 'Above break-even' already have entries in the seed
     section below. */
  'Break-even is average order value × gross margin × site conversion. Paid dependency is classified from the ratio of blended CPC to break-even — it is derived, never asserted.':
    'נקודת האיזון היא שווי הזמנה ממוצע × רווח גולמי × המרה באתר. התלות בתשלום מסווגת לפי היחס בין העלות המשוקללת לקליק לנקודת האיזון — היא נגזרת, ולעולם אינה נטענת.',

  /* --- Limitations --------------------------------------------------------- */
  Limitations: 'מגבלות',
  'What this system cannot tell you': 'מה המערכת הזו אינה יכולה לומר לכם',
  'AI engine answers vary between runs and between users. Observations are point-in-time samples, not guarantees of what any individual buyer sees.':
    'תשובות מנועי AI משתנות בין הרצות ובין משתמשים. התצפיות הן דגימות בנקודת זמן, לא ערובה למה שקונה מסוים רואה.',
  'Commercial exposure is a directional model built on customer-configured assumptions. It is useful for prioritisation and is not an audited financial statement.':
    'החשיפה המסחרית היא מודל כיווני הבנוי על הנחות שהגדיר הלקוח. הוא שימושי לתיעדוף ואינו דוח כספי מבוקר.',
  'Attribution between an executed action and a signal movement is correlational. The system records both and reports the relationship; it does not claim causation.':
    'הייחוס בין פעולה שבוצעה לבין תזוזת אות הוא מתאמי. המערכת מתעדת את שניהם ומדווחת על הקשר; היא אינה טוענת לסיבתיות.',
  'Competitor authority counts reflect sources engines cite publicly. A competitor may hold private advantages this system cannot observe.':
    'מניין מקורות הסמכות של מתחרים משקף מקורות שהמנועים מצטטים בפומבי. ייתכן שלמתחרה יתרונות פרטיים שהמערכת אינה יכולה לצפות בהם.',
  'Where history is insufficient, predictive conclusions are withheld rather than estimated.':
    'כאשר ההיסטוריה אינה מספקת, מסקנות חיזוי נמנעות במקום שיוערכו.',
  'This demonstration environment': 'סביבת ההדגמה הזו',
  'Northwind Supply is a fictional organisation. Its figures are seeded, internally consistent and derived from a single set of anchor facts — <b>{presence}</b> recommendation presence, <b>{coverage}</b> supplier-evaluation coverage, <b>{share}</b> competitor share. Every other number on this site is computed from those, and a test suite fails the build if any screen disagrees.':
    'Northwind Supply היא ארגון בדיוני. הנתונים שלה מבוססי זרע, עקביים פנימית ונגזרים ממערך יחיד של עובדות עוגן — <b>{presence}</b> נוכחות בהמלצות, <b>{coverage}</b> כיסוי בהערכת ספקים, <b>{share}</b> נתח מתחרים. כל מספר אחר באתר הזה מחושב מהם, וחבילת בדיקות מכשילה את הבנייה אם מסך כלשהו סותר אותם.',
  'Open Mission Control': 'פתחו את מרכז הבקרה',
  'See the engines': 'צפו במנועים',

  /* ==========================================================================
     SEED PROSE STILL SURFACING ON THE HOME PAGE.

     GEON vector definitions, readout evidence, engine questions, the action
     plan and the screen-slot captions. Found by rendering /he and reading
     back every English segment, not by reading the seed modules — the page
     is the measure.
     ======================================================================= */

  /* --- GEON vector definitions -------------------------------------------- */
  'Whether systems understand what the business does, who it serves and when to recommend it.':
    'האם מערכות מבינות מה העסק עושה, את מי הוא משרת ומתי להמליץ עליו.',
  'The strength of reputation, validation and proof surrounding the business.':
    'עוצמת המוניטין, האימות וההוכחות הסובבים את העסק.',
  'How consistently the business appears across AI and digital environments.':
    'עד כמה העסק מופיע באופן עקבי בסביבות AI ובסביבות דיגיטליות.',
  'Whether the same accurate story appears across channels, markets and languages.':
    'האם אותו סיפור מדויק מופיע בכל הערוצים, השווקים והשפות.',
  'How closely positioning matches customer demand and buying intent.':
    'עד כמה המיצוב תואם את ביקוש הלקוחות ואת כוונת הרכישה.',
  'Whether the business is recognized as a credible expert or category leader.':
    'האם העסק מוכר כמומחה אמין או כמוביל קטגוריה.',

  /* --- Engine business questions ------------------------------------------ */
  'Does AI know the business exists, and what does it think it is?':
    'האם ה-AI יודע שהעסק קיים, ומה הוא חושב שהוא?',
  'Do the two discovery surfaces agree, and what is the gap costing?':
    'האם שני משטחי הגילוי מסכימים, וכמה עולה הפער?',
  'Who receives the decision instead, and what do they have?':
    'מי מקבל את ההחלטה במקומכם, ומה יש לו?',
  'What must happen next, by whom and by when?':
    'מה צריך לקרות עכשיו, על ידי מי ועד מתי?',
  'Where do competitors receive the decision before the business receives the lead?':
    'היכן המתחרים מקבלים את ההחלטה לפני שהעסק מקבל את הליד?',
  'Do AI engines understand who the business is and when it should be considered?':
    'האם מנועי AI מבינים מי העסק ומתי יש לשקול אותו?',
  'Does the business exist consistently across traditional search and AI-mediated discovery?':
    'האם העסק קיים באופן עקבי גם בחיפוש מסורתי וגם בגילוי מונחה AI?',
  'Whose language does the market use to describe your category?':
    'באיזו שפה משתמש השוק כדי לתאר את הקטגוריה שלכם?',
  'Is the market ready, and does the route to it hold?':
    'האם השוק בשל, והאם הדרך אליו מחזיקה?',

  /* --- Readout evidence and executive truths ------------------------------ */
  'Decision Health reads 41 of 100, held down primarily by Authority at 28.':
    'בריאות ההחלטה עומדת על 41 מתוך 100, מרוסנת בעיקר על ידי סמכות ברמה 28.',
  'Authority carries the heaviest index weight and the largest deficit.':
    'סמכות נושאת את המשקל הכבד ביותר במדד ואת הגירעון הגדול ביותר.',
  'GEON Authority 28 — the lowest of six vectors.':
    'סמכות GEON 28 — הנמוך מבין שישה וקטורים.',
  'Three independent sources reference Northwind; the competitor median is fourteen.':
    'שלושה מקורות בלתי תלויים מזכירים את Northwind; החציון של המתחרים הוא ארבעה־עשר.',
  'No published supplier-comparison material for engines to cite.':
    'אין חומר השוואת ספקים מפורסם שמנועים יוכלו לצטט.',
  'Category description differs between the website and two trade directories.':
    'תיאור הקטגוריה שונה בין האתר לבין שני מדריכי מסחר.',
  'Three of six engines misidentify the category.':
    'שלושה מתוך שישה מנועים מזהים את הקטגוריה באופן שגוי.',
  'No stable entity record. Answers reference the category without naming Northwind at all.':
    'אין רשומת ישות יציבה. התשובות מתייחסות לקטגוריה מבלי להזכיר את Northwind כלל.',
  'Kestrel Industrial leads five of seven supplier questions.':
    'Kestrel Industrial מובילה בחמש מתוך שבע שאלות ספקים.',
  'Engines cite a competitor’s evaluation criteria first.':
    'המנועים מצטטים תחילה את קריטריוני ההערכה של מתחרה.',
  'Eleven tracked keywords sit outside the top ten.':
    'אחת־עשרה מילות מפתח נמדדות יושבות מחוץ לעשירייה הראשונה.',
  'Blended CPC $9.03 against break-even $6.13.':
    'עלות קליק משוקללת של $9.03 מול נקודת איזון של $6.13.',
  '6 recommendation events across 144 answer slots.':
    '6 אירועי המלצה מתוך 144 משבצות תשובה.',
  'Supplier-evaluation coverage — the stage deciding 60% of revenue.':
    'כיסוי הערכת ספקים — השלב שמכריע 60% מההכנסה.',
  'Supplier-evaluation phrasing still varied — the category has no fixed vocabulary yet.':
    'הניסוח בשלב הערכת הספקים עדיין משתנה — לקטגוריה אין עדיין אוצר מילים קבוע.',
  '63 of 100 — buyers are educated, answers are not yet fixed.':
    '63 מתוך 100 — הקונים בשלים, התשובות טרם התקבעו.',
  'Demand × decision gap × estimated conversion × average deal value.':
    'ביקוש × פער החלטה × המרה מוערכת × שווי עסקה ממוצע.',

  /* --- The action plan ----------------------------------------------------- */
  'Direct investment at Authority first — it carries the highest weight and the largest deficit.':
    'הפנו את ההשקעה תחילה אל הסמכות — היא נושאת את המשקל הגבוה ביותר ואת הגירעון הגדול ביותר.',
  'Build supplier-comparison content against the six highest-volume missed decision questions.':
    'בנו תוכן להשוואת ספקים כנגד שש שאלות ההחלטה שהוחמצו בעלות הנפח הגבוה ביותר.',
  'Strengthen independent authority evidence and supplier-comparison coverage.':
    'חזקו את ראיות הסמכות הבלתי תלויות ואת כיסוי השוואת הספקים.',
  'Resolve the Gemini entity conflation with the same-named logistics firm.':
    'פתרו את ערבוב הישויות ב-Gemini מול חברת הלוגיסטיקה בעלת אותו שם.',
  'Reallocate paid spend from keywords with a viable organic replacement path.':
    'הסיטו הוצאה ממומנת ממילות מפתח שקיימת להן חלופה אורגנית בת־קיימא.',
  'Response time cited among the first three criteria by 3 of 6 engines':
    'זמן תגובה מצוטט בין שלושת הקריטריונים הראשונים על ידי 3 מתוך 6 מנועים',
  'Gemini resolves the correct entity on 4 of 6 category questions':
    'Gemini מזהה את הישות הנכונה ב-4 מתוך 6 שאלות קטגוריה',
  'Blended CPC below break-even on reallocated set':
    'עלות קליק משוקללת מתחת לנקודת האיזון בסט שהוסט',
  'Category association correct on 5 of 6 engines':
    'שיוך הקטגוריה נכון ב-5 מתוך 6 מנועים',
  'Gemini recognition 24 → 45': 'זיהוי ב-Gemini 24 ← 45',

  /* --- Chrome outside the dictionary --------------------------------------- */
  'Switch to light theme': 'עברו לערכת נושא בהירה',
  'Switch to dark theme': 'עברו לערכת נושא כהה',
  'Powered by Gintex': 'מופעל על ידי Gintex',
  'GeoRepute — home': 'GeoRepute — דף הבית',
  Open: 'פתחו',

  /* --- Effort, urgency, trend and confidence chips ------------------------- */
  'low effort': 'מאמץ נמוך',
  'medium effort': 'מאמץ בינוני',
  'high effort': 'מאמץ גבוה',
  Immediate: 'מיידי',
  'This quarter': 'הרבעון הזה',
  Monitor: 'למעקב',
  Improving: 'משתפר',
  Stable: 'יציב',
  Deteriorating: 'מידרדר',
  /* 'High' already has an entry above — one English string carries one
     translation by design (see index.ts), so the chip reuses it. */
  Medium: 'בינונית',
  'Insufficient history': 'היסטוריה לא מספקת',

  /* --- Score-meter accessible name ------------------------------------------ */
  '{score} out of {max}': '{score} מתוך {max}',

  /* --- Image credit --------------------------------------------------------- */
  'NASA on Unsplash': 'NASA ב-Unsplash',

  /* --- The demonstration's buyer queries -------------------------------------
     Translated rather than left as literal English search strings. A Hebrew
     reader is being shown what an AI buying decision looks like, and a buyer
     reading a Hebrew page types Hebrew. FLAGGED FOR THE CLIENT: if the demo
     is ever pointed at a real Israeli market, these should be replaced with
     the phrases that market actually searches, not translations of the US
     ones — that is a content decision, not a translation one. */
  'Which industrial fastener suppliers are most reliable in the Midwest?':
    'אילו ספקי מחברים תעשייתיים הם האמינים ביותר באזור המערב התיכון?',
  'industrial fastener supplier': 'ספק מחברים תעשייתיים',
  'fastener distributor midwest': 'מפיץ מחברים מערב תיכון',
  'vendor managed inventory mro': 'ניהול מלאי על ידי ספק תחזוקה',
  'hydraulic fittings supplier': 'ספק אביזרים הידראוליים',
  'industrial supply company': 'חברת אספקה תעשייתית',
  'bulk fasteners chicago': 'מחברים בכמויות שיקגו',
  'grade 8 bolts bulk': 'ברגים דרגה 8 בכמות',
  'mro distributor': 'מפיץ ציוד תחזוקה',

  /* --- Product screen slots ------------------------------------------------ */
  'Executive Mission Control — full window, all measures visible':
    'מרכז הבקרה הניהולי — חלון מלא, כל המדדים גלויים',
  'Action Plan — the prioritised intervention list':
    'תוכנית הפעולה — רשימת ההתערבויות המתועדפת',
  'Every action carries an owner, a deadline and the signal it must move. Anonymised demonstration data.':
    'לכל פעולה יש אחראי, תאריך יעד והאות שעליה להזיז. נתוני הדגמה אנונימיים.',
  'Awaiting real screen': 'ממתין למסך אמיתי',
  'Anonymised or demonstration data only. No customer names, domains, personal data or confidential figures.':
    'נתונים אנונימיים או הדגמתיים בלבד. ללא שמות לקוחות, דומיינים, מידע אישי או נתונים חסויים.',

  /* ==========================================================================
     MARKETPLACE AND ENGINE DETAIL PAGES

     Nineteen routes: /marketplace/[slug] ×8, /marketplace/category/[slug] ×7
     and /engines/[slug] ×4. They were never audited until the route list was
     enumerated properly, and were fully English in all six locales.

     Composite strings the audit prints — "Entry · Snapshot", "Next: …",
     "Advanced tier · Advanced" — are NOT keys. The component joins two
     translated halves, so each half is keyed separately. Same for the
     <Rich> count sentence, which the audit sees as fragments around its
     emphasised spans.
     ====================================================================== */

  /* --- Product page chrome --------------------------------------------------------- */
  Breadcrumb: 'פירורי לחם',
  'Intelligence Marketplace': 'שוק המודיעין',
  'Intelligence Engines': 'מנועי המודיעין',
  'Product detail': 'פרטי המוצר',
  'Everything needed to decide, without a sales call':
    'כל מה שצריך כדי להחליט, בלי שיחת מכירה',
  'What you receive': 'מה מקבלים',
  'A real readout from this product, on seeded data':
    'קריאה אמיתית מהמוצר הזה, על נתונים מזורעים',
  'Every intelligence product returns the same twelve-section anatomy: executive truth, business meaning, evidence, connected signals, competitor context, commercial exposure, timing, trend, prescription, expected movement, owner and measurement.':
    'כל מוצר מודיעין מחזיר את אותו מבנה בן שנים עשר חלקים: האמת הניהולית, המשמעות העסקית, הראיות, האותות המקושרים, ההקשר התחרותי, החשיפה המסחרית, התזמון, המגמה, ההמלצה, התנועה הצפויה, האחראי והמדידה.',
  'One-time purchase. Placeholder pricing.': 'רכישה חד-פעמית. תמחור זמני.',
  'Buy this intelligence product': 'רכשו את מוצר המודיעין הזה',
  'Buy {name}': 'רכשו {name}',
  'Compare with a subscription': 'השוו מול מנוי',
  'See the full ecosystem': 'ראו את המערכת המלאה',
  'by {date}': 'עד {date}',

  /* --- The eleven product fields --------------------------------------------------- */
  'Business question': 'השאלה העסקית',
  'Decision consequence': 'השלכת ההחלטה',
  'What it detects': 'מה זה מאתר',
  'Required inputs': 'קלטים נדרשים',
  Scope: 'היקף',
  'Intelligence depth': 'עומק המודיעין',
  Delivery: 'אספקה',
  'Time to delivery': 'זמן עד לאספקה',
  'Commercial terms': 'תנאים מסחריים',
  'Upgrade path': 'מסלול שדרוג',
  Depth: 'עומק',
  Date: 'תאריך',
  Finding: 'ממצא',
  Engine: 'מנוע',
  Observed: 'נצפה',
  Live: 'פעיל',
  You: 'אתם',

  /* Tier display labels. The component maps the lowercase discriminants
     (entry / advanced / premium) onto these before translating — see the
     TIER_LABEL note in marketplace/[slug]/page.tsx. */
  Entry: 'בסיסי',
  'Advanced tier': 'מתקדם',
  Premium: 'פרימיום',
  /* Depth values. Already capitalised in the seed, so no collision. */
  Snapshot: 'תמונת מצב',
  Advanced: 'מתקדם',
  Strategic: 'אסטרטגי',
  Executive: 'ניהולי',

  /* --- Category page --------------------------------------------------------------- */
  'All intelligence categories': 'כל קטגוריות המודיעין',
  'Other intelligence categories': 'קטגוריות מודיעין אחרות',
  'Every module answers one question.': 'כל מודול עונה על שאלה אחת.',
  'Each returns the evidence behind its answer, what that answer means commercially, and what should change as a result.':
    'כל אחד מחזיר את הראיות שמאחורי תשובתו, את משמעותה המסחרית ואת מה שצריך להשתנות בעקבותיה.',
  'Buy this intelligence': 'רכשו את המודיעין הזה',
  'Take one question, or take the whole category.':
    'קחו שאלה אחת, או קחו את הקטגוריה כולה.',
  'Each purchase states what it examines, what it needs from you, how confident it can be and what it costs. No sales call is required to find any of that out.':
    'כל רכישה מציינת מה היא בוחנת, מה היא צריכה מכם, באיזו רמת ודאות היא יכולה לפעול וכמה היא עולה. אין צורך בשיחת מכירה כדי לגלות דבר מכל אלה.',
  'One engine produces this category.': 'מנוע אחד מייצר את הקטגוריה הזו.',
  '{n} engines produce this category.': '{n} מנועים מייצרים את הקטגוריה הזו.',
  'Engines are the machinery, not the offer. Nothing above required you to know one existed.':
    'המנועים הם המכונה, לא ההצעה. שום דבר למעלה לא דרש מכם לדעת שקיים מנוע כזה.',
  '{n} modules': '{n} מודולים',
  '<b>{n}</b> intelligence modules in this category.':
    '<b>{n}</b> מודולי מודיעין בקטגוריה הזו.',
  '<b>{n}</b> intelligence modules in this category · <b>{live}</b> running live in this environment.':
    '<b>{n}</b> מודולי מודיעין בקטגוריה הזו · <b>{live}</b> פועלים בסביבה הזו.',
  Built: 'נבנה',
  'In platform': 'במוצר',
  'In the platform': 'במוצר',

  /* --- Engine detail page ---------------------------------------------------------- */
  'Intelligence readout': 'קריאת מודיעין',
  'What this engine concluded': 'למה המנוע הזה הגיע',
  'Signal, evidence, consequence, action': 'אות, ראיה, השלכה, פעולה',
  'Screens this engine provides': 'המסכים שהמנוע הזה מספק',
  'Next: {name}': 'הבא: {name}',

  /* --- Delivery, scope and inputs -------------------------------------------------- */
  'After scan completion — typically under 20 minutes':
    'עם סיום הסריקה — בדרך כלל פחות מ-20 דקות',
  'After scan completion — typically under 30 minutes':
    'עם סיום הסריקה — בדרך כלל פחות מ-30 דקות',
  'After scan completion — typically under 60 minutes':
    'עם סיום הסריקה — בדרך כלל פחות מ-60 דקות',
  'Expert-reviewed — within 3 business days': 'בבדיקת מומחה — תוך 3 ימי עסקים',
  'Optional: Search Console': 'רשות: Search Console',
  'Optional: Search Console and Analytics': 'רשות: Search Console ו-Google Analytics',
  'Up to 4 competitors': 'עד 4 מתחרים',
  'Google + 6 engines': 'Google + 6 מנועים',
  '6 AI engines · entity and category association · 1 market':
    '6 מנועי AI · שיוך ישות וקטגוריה · שוק אחד',
  '6 AI engines · 20 commercial questions · 4 competitors · 1 market':
    '6 מנועי AI · 20 שאלות מסחריות · 4 מתחרים · שוק אחד',
  '6 AI engines · 24 decision questions · 4 competitors':
    '6 מנועי AI · 24 שאלות החלטה · 4 מתחרים',
  '6 AI engines · 24 decision questions · 5 decision stages':
    '6 מנועי AI · 24 שאלות החלטה · 5 שלבי החלטה',
  '6 AI engines · 24 questions · 20 keywords · 4 competitors · full GEON assessment':
    '6 מנועי AI · 24 שאלות · 20 מילות מפתח · 4 מתחרים · הערכת GEON מלאה',
  '6 AI engines · 24 questions · 4 competitors · citation analysis':
    '6 מנועי AI · 24 שאלות · 4 מתחרים · ניתוח ציטוטים',
  '6 AI engines · 24 questions · 5 stages · 4 competitors':
    '6 מנועי AI · 24 שאלות · 5 שלבים · 4 מתחרים',
  'Public trust and reputation sources · 1 market':
    'מקורות אמון ומוניטין ציבוריים · שוק אחד',
  'Continuous monitoring, additional markets, or the full platform with history and alerts.':
    'ניטור מתמשך, שווקים נוספים, או המוצר המלא עם היסטוריה והתראות.',
  'Continuous monitoring, quarterly executive regeneration, or enterprise implementation.':
    'ניטור מתמשך, הפקה ניהולית רבעונית מחדש, או הטמעה ארגונית.',
  'Continuous prompt monitoring and visibility trends.':
    'ניטור מתמשך של שאילתות ומגמות נראות.',
  'Continuous competitor monitoring and momentum tracking.':
    'ניטור מתמשך של מתחרים ומעקב אחר תאוצה.',
  'Continuous monitoring with stage-level alerting.':
    'ניטור מתמשך עם התראות ברמת השלב.',
  'Competitive War Room with continuous monitoring.':
    'חדר מלחמה תחרותי עם ניטור מתמשך.',
  'Recognition history and decay monitoring.': 'היסטוריית זיהוי וניטור שחיקה.',
  'Reputation momentum and trust decay monitoring.':
    'תאוצת מוניטין וניטור שחיקת אמון.',
  'Interactive workspace': 'סביבת עבודה אינטראקטיבית',
  'Downloadable intelligence brief': 'תדריך מודיעין להורדה',
  'Expert interpretation': 'פרשנות מומחה',
  'Evidence pack': 'חבילת ראיות',
  'Action plan': 'תוכנית פעולה',

  /* --- Product names ----------------------------------------------------------------
     These are product names, but they are descriptive rather than branded —
     "AI Recognition Scan" tells a buyer what it does. Left in English they
     would be the only untranslated line on an otherwise Hebrew page. */
  'AI Recognition Scan': 'סריקת זיהוי AI',
  'AI Recognition Scan | GeoRepute': 'סריקת זיהוי AI | GeoRepute',
  'AI Search Presence Scan': 'סריקת נוכחות בחיפוש AI',
  'AI Search Presence Scan | GeoRepute': 'סריקת נוכחות בחיפוש AI | GeoRepute',
  'Google vs AI Gap Scan': 'סריקת הפער בין Google ל-AI',
  'Google vs AI Gap Scan | GeoRepute': 'סריקת הפער בין Google ל-AI | GeoRepute',
  'Competitor Recommendation Scan': 'סריקת המלצות מתחרים',
  'Competitor Recommendation Scan | GeoRepute': 'סריקת המלצות מתחרים | GeoRepute',
  'Trust Signals Scan': 'סריקת אותות אמון',
  'Trust Signals Scan | GeoRepute': 'סריקת אותות אמון | GeoRepute',
  'Decision Journey Diagnostic': 'אבחון מסע ההחלטה',
  'Decision Journey Diagnostic | GeoRepute': 'אבחון מסע ההחלטה | GeoRepute',
  'Competitive Position Assessment': 'הערכת עמדה תחרותית',
  'Competitive Position Assessment | GeoRepute': 'הערכת עמדה תחרותית | GeoRepute',
  'Executive Intelligence Brief': 'תדריך מודיעין ניהולי',
  'Executive Intelligence Brief | GeoRepute': 'תדריך מודיעין ניהולי | GeoRepute',
  'Decision Reconstruction — a completed reconstruction': 'שחזור החלטה — שחזור שהושלם',
  'Mission Control → the composite Decision Health position panel':
    'מרכז הבקרה ← לוח העמדה המשולב של בריאות ההחלטה',

  /* --- Module business questions ----------------------------------------------------
     One per module. These are the questions the marketplace is organised
     around, so they carry more weight per word than anything else on the
     page — the category page leads with the question, not the module name. */
  'Does AI understand what the business actually does?':
    'האם ה-AI מבין מה העסק באמת עושה?',
  'Do AI engines understand who the business is and what it offers?':
    'האם מנועי AI מבינים מיהו העסק ומה הוא מציע?',
  'Which AI systems know the business exists, and which do not?':
    'אילו מערכות AI יודעות שהעסק קיים, ואילו לא?',
  'Is AI confusing the business with someone else?':
    'האם ה-AI מבלבל בין העסק לבין מישהו אחר?',
  'Is AI describing a version of the business that no longer exists?':
    'האם ה-AI מתאר גרסה של העסק שכבר אינה קיימת?',
  'Is the business becoming less recognised over time?':
    'האם העסק הופך לפחות מזוהה עם הזמן?',
  'Is the business visible when customers ask for recommendations?':
    'האם העסק נראה כשלקוחות מבקשים המלצות?',
  'When a buyer describes a need, is the business in the set AI considers?':
    'כשקונה מתאר צורך, האם העסק נמצא בקבוצה שה-AI שוקל?',
  'Across the questions buyers actually ask, how often does the business appear at all?':
    'על פני השאלות שקונים באמת שואלים, באיזו תדירות העסק מופיע בכלל?',
  'Of all the recommendations made in this category, what share names the business?':
    'מכלל ההמלצות הניתנות בקטגוריה הזו, איזה נתח נוקב בשם העסק?',
  'On those same questions, does AI put the business forward at all?':
    'על אותן שאלות עצמן, האם ה-AI מציע את העסק בכלל?',
  'Do the two discovery surfaces tell the same story about us?':
    'האם שני משטחי הגילוי מספרים עלינו את אותו הסיפור?',
  'Is the business aligned across traditional search and AI discovery?':
    'האם העסק מיושר בין חיפוש מסורתי לגילוי באמצעות AI?',
  'Which commercial questions are invisible on both surfaces at once?':
    'אילו שאלות מסחריות אינן נראות בשני המשטחים בעת ובעונה אחת?',
  'Where does the business rank on the questions that carry commercial intent?':
    'היכן העסק מדורג בשאלות שנושאות כוונה מסחרית?',
  'Where does existing authority already rank but fail to reach AI?':
    'היכן סמכות קיימת כבר מדורגת אך אינה מגיעה ל-AI?',
  'What kind of gap is this, and does it deserve investment?':
    'איזה סוג של פער זה, והאם הוא ראוי להשקעה?',
  'What is the business actually paying per commercial click?':
    'כמה העסק באמת משלם על קליק מסחרי?',
  'Above what price does a click stop making money?':
    'מעל איזה מחיר קליק מפסיק להיות רווחי?',
  'How much of current demand would disappear if paid search stopped tomorrow?':
    'איזה חלק מהביקוש הנוכחי ייעלם אם החיפוש הממומן ייפסק מחר?',
  'Which paid positions could be replaced by owned authority?':
    'אילו עמדות ממומנות אפשר להחליף בסמכות בבעלות העסק?',
  'Is the cost of the same position rising, and how fast?':
    'האם עלות אותה עמדה עולה, ובאיזה קצב?',
  'Who is being recommended instead of the business, and how often?':
    'למי ממליצים במקום העסק, ובאיזו תדירות?',
  'Who is recommended instead, where and why?': 'למי ממליצים במקום, היכן ומדוע?',
  'Why do competitors capture the decision?': 'מדוע מתחרים לוכדים את ההחלטה?',
  'What specifically makes a competitor recommendable?':
    'מה בדיוק הופך מתחרה לראוי להמלצה?',
  'How much more evidence supports them than supports us?':
    'בכמה יותר ראיות תומכות בהם מאשר בנו?',
  'Which specific questions does each competitor own?':
    'אילו שאלות ספציפיות כל מתחרה מחזיק?',
  'At which stage does each competitor take control?':
    'באיזה שלב כל מתחרה משתלט?',
  'Where is the leading competitor actually weak?':
    'היכן המתחרה המוביל באמת חלש?',
  'How easily could a competitor take the narrative from us?':
    'באיזו קלות מתחרה יכול לקחת מאיתנו את הנרטיב?',
  'Do the sources that mention the business carry any weight?':
    'האם המקורות שמזכירים את העסק נושאים משקל כלשהו?',
  'How much of what the business claims can anyone else confirm?':
    'איזה חלק ממה שהעסק טוען מישהו אחר יכול לאשר?',
  'When AI cites a source to justify an answer, is any of it yours?':
    'כשה-AI מצטט מקור כדי להצדיק תשובה, האם משהו מזה שלכם?',
  'Which sources are shaping what AI believes about the business?':
    'אילו מקורות מעצבים את מה שה-AI מאמין לגבי העסק?',
  'Which trust signals strengthen or weaken recommendation readiness?':
    'אילו אותות אמון מחזקים או מחלישים את המוכנות להמלצה?',
  'Is the evidence supporting the business ageing?':
    'האם הראיות התומכות בעסק מתיישנות?',
  'Where does the business disappear during the buyer decision process?':
    'היכן העסק נעלם במהלך תהליך ההחלטה של הקונה?',
  'At which point in the buying journey does presence collapse?':
    'באיזו נקודה במסע הרכישה הנוכחות קורסת?',
  'Which specific buying questions complete without the business ever being named?':
    'אילו שאלות רכישה ספציפיות מסתיימות מבלי שהעסק נוקב בשמו כלל?',
  'How many buying decisions are actually in play?':
    'כמה החלטות רכישה באמת על הפרק?',
  'What is one of those decisions worth to the business?':
    'כמה שווה אחת מההחלטות האלה לעסק?',
  'What is the gap worth, and how confident can we be?':
    'כמה שווה הפער, ובאיזו רמת ודאות אפשר לומר זאת?',
  'What has to be true for this estimate to hold?':
    'מה צריך להיות נכון כדי שההערכה הזו תחזיק?',
  'Which of those blind spots are also high value?':
    'אילו מהנקודות העיוורות האלה הן גם בעלות ערך גבוה?',
  'Which of our genuine advantages does the market never mention?':
    'אילו מהיתרונות האמיתיים שלנו השוק לעולם אינו מזכיר?',
  'How much of the language used to describe this category belongs to the business?':
    'איזה חלק מהשפה שמתארת את הקטגוריה הזו שייך לעסק?',
  'Whose framing do machines use when they explain the category?':
    'במסגור של מי מכונות משתמשות כשהן מסבירות את הקטגוריה?',
  'Which criteria do machines cite first when explaining a choice?':
    'אילו קריטריונים מכונות מצטטות ראשונים כשהן מסבירות בחירה?',
  'Does the market think the business is expensive?':
    'האם השוק חושב שהעסק יקר?',
  'Is this market forming, forming fast, or already settled?':
    'האם השוק הזה נוצר, נוצר במהירות, או כבר התייצב?',
  'Do buyers know enough yet to be worth persuading?':
    'האם הקונים יודעים כבר מספיק כדי שיהיה כדאי לשכנע אותם?',
  'Which markets are ready to be entered now?': 'לאילו שווקים כדאי להיכנס עכשיו?',
  'How quickly is the position moving, and in which direction?':
    'באיזו מהירות העמדה זזה, ולאיזה כיוון?',
  'Where in the world is the business strong, and where is it absent?':
    'היכן בעולם העסק חזק, והיכן הוא נעדר?',
  'Does the business mean the same thing in every market?':
    'האם העסק אומר את אותו הדבר בכל שוק?',
  'Does the business mean something different in each country?':
    'האם העסק אומר משהו אחר בכל מדינה?',
  'Does the business tell the same story everywhere it appears?':
    'האם העסק מספר את אותו הסיפור בכל מקום שבו הוא מופיע?',
  'Do partners describe the business the way it describes itself?':
    'האם שותפים מתארים את העסק כפי שהוא מתאר את עצמו?',
  'How much of the market position rests on intermediaries?':
    'איזה חלק מהעמדה בשוק נשען על מתווכים?',
  'How easily could the business be swapped out of the channel?':
    'באיזו קלות אפשר להחליף את העסק בתוך הערוץ?',
  'Can the channel explain why the business costs more?':
    'האם הערוץ יכול להסביר מדוע העסק עולה יותר?',
  'What is the complete management position on risk, opportunity, timing and action?':
    'מהי עמדת ההנהלה המלאה בנוגע לסיכון, הזדמנות, תזמון ופעולה?',
  'What should the business do, in what order?':
    'מה על העסק לעשות, ובאיזה סדר?',
  'Which intervention returns most, and what is currently blocked?':
    'איזו התערבות מניבה הכי הרבה, ומה חסום כרגע?',
  'What lands this month, this quarter, and this year?':
    'מה נוחת החודש, ברבעון הזה ובשנה הזו?',
  'How long before an intervention shows up in the numbers?':
    'כמה זמן עובר עד שהתערבות מופיעה במספרים?',
  'Did the work move the signal it was supposed to move?':
    'האם העבודה הזיזה את האות שהיא הייתה אמורה להזיז?',

  /* --- What each module detects, and why it matters commercially ------------------- */
  'An engine that cannot categorise a business cannot recommend it. Entity confusion sits upstream of every visibility metric — content investment cannot move an answer while the underlying record is wrong.':
    'מנוע שאינו מסוגל לסווג עסק אינו יכול להמליץ עליו. בלבול ישויות יושב במעלה הזרם של כל מדד נראות — השקעה בתוכן אינה יכולה להזיז תשובה כל עוד הרשומה הבסיסית שגויה.',
  'Name collisions, merged records and mistaken identities — a single unresolved conflation can remove a business from every answer in its category.':
    'התנגשויות שמות, רשומות שמוזגו וזהויות שגויות — ערבוב יחיד שלא נפתר יכול להוציא עסק מכל תשובה בקטגוריה שלו.',
  'Discontinued lines, closed locations, former ownership and superseded positioning still being repeated to buyers as current fact.':
    'קווי מוצר שהופסקו, סניפים שנסגרו, בעלות קודמת ומיצוב שהוחלף — כולם עדיין נמסרים לקונים כעובדה עדכנית.',
  'Recognition erodes when competitors keep publishing and you stop. Decay is measurable for months before it shows up as absence.':
    'הזיהוי נשחק כשמתחרים ממשיכים לפרסם ואתם מפסיקים. השחיקה ניתנת למדידה חודשים לפני שהיא מתבטאת בהיעדרות.',
  'Entity understanding and recommendation presence are separate measures. An engine can resolve the business correctly and still never put it forward — recognition is necessary for a recommendation, not sufficient.':
    'הבנת הישות והנוכחות בהמלצות הם שני מדדים נפרדים. מנוע יכול לזהות את העסק נכון ועדיין לא להציע אותו לעולם — הזיהוי הכרחי להמלצה, אך אינו מספיק.',
  'Coverage measured against real buying questions rather than keywords — the difference between being findable and being present.':
    'כיסוי הנמדד מול שאלות רכישה אמיתיות ולא מול מילות מפתח — ההבדל בין להיות ניתן למציאה לבין להיות נוכח.',
  'A market-share figure for a market nobody is currently measuring — recommendations issued, not clicks received.':
    'נתון נתח שוק עבור שוק שאיש אינו מודד כרגע — המלצות שניתנו, לא קליקים שהתקבלו.',
  'A business ranking in Google can still be absent from every AI answer that decides the vendor. The reverse is equally common. Each surface is a separate commercial asset, and channel asymmetry is invisible to both SEO and analytics tooling.':
    'עסק שמדורג ב-Google עדיין יכול להיעדר מכל תשובת AI שמכריעה מיהו הספק. ההפך שכיח באותה מידה. כל משטח הוא נכס מסחרי נפרד, וא-סימטריה בין ערוצים אינה נראית לא לכלי SEO ולא לכלי אנליטיקה.',
  'Businesses that dominate one surface and disappear on the other — a divergence that stays invisible while each channel is reported separately.':
    'עסקים ששולטים במשטח אחד ונעלמים באחר — פער שנשאר בלתי נראה כל עוד כל ערוץ מדווח בנפרד.',
  'The most expensive class of gap — absent from both surfaces on a question that carries real volume and real intent.':
    'סוג הפער היקר ביותר — היעדרות משני המשטחים בשאלה שנושאת נפח אמיתי וכוונה אמיתית.',
  'The cheapest wins available: questions where you have already done the work and only the machine-readable form of it is missing.':
    'הניצחונות הזולים ביותר הזמינים: שאלות שבהן כבר עשיתם את העבודה וחסרה רק הצורה שלה שקריאה למכונה.',
  'Cost per click weighted by the questions that decide purchases, rather than averaged across an account that includes cheap, irrelevant traffic.':
    'עלות לקליק משוקללת לפי השאלות שמכריעות רכישות, במקום ממוצע על פני חשבון שכולל תנועה זולה ולא רלוונטית.',
  'A computed ceiling from deal value, margin and conversion — the number most advertising accounts are managed without ever calculating.':
    'תקרה מחושבת מתוך שווי העסקה, המרווח וההמרה — המספר שרוב חשבונות הפרסום מנוהלים מבלי שחושב מעולם.',
  'A costed switch list — which spend can be retired, what has to be published first, and how long the replacement takes to hold.':
    'רשימת החלפה מתומחרת — איזו הוצאה אפשר לבטל, מה צריך לפרסם קודם, וכמה זמן לוקח לתחליף להחזיק.',
  'Competitive density expressed as a price trend, so the structural cost of staying still becomes visible before the budget review.':
    'צפיפות תחרותית המבוטאת כמגמת מחיר, כך שהעלות המבנית של עמידה במקום נעשית גלויה עוד לפני דיון התקציב.',
  'Whether paid is buying growth or renting positions that authority would otherwise hold for free.':
    'האם הממומן קונה צמיחה או שוכר עמדות שסמכות הייתה מחזיקה בהן בחינם.',
  'Knowing a competitor wins is not actionable. Knowing which evidence engines cite when they recommend that competitor is. This separates brand preference from an evidence gap you can close.':
    'לדעת שמתחרה מנצח אינו מידע בר-פעולה. לדעת באילו ראיות המנועים מצטטים כשהם ממליצים על אותו מתחרה — כן. זה מפריד בין העדפת מותג לבין פער ראיות שאפשר לסגור.',
  'The individual assets a machine reaches for when it justifies choosing them — publications, comparisons, specifications, verified outcomes.':
    'הנכסים הבודדים שמכונה נאחזת בהם כשהיא מצדיקה את בחירתם — פרסומים, השוואות, מפרטים ותוצאות מאומתות.',
  'Structured comparison of the evidence each competitor supplies to engines, and what it would take to match it. Converts a share gap into a specific, costed evidence programme.':
    'השוואה מובנית של הראיות שכל מתחרה מספק למנועים, ומה יידרש כדי להשתוות. ממירה פער נתח לתוכנית ראיות ספציפית ומתומחרת.',
  'The questions a dominant rival does not answer, does not cover, or answers badly — the cheapest available places to take share.':
    'השאלות שיריב דומיננטי אינו עונה עליהן, אינו מכסה, או עונה עליהן רע — המקומות הזולים ביותר לקחת בהם נתח.',
  'The share of visibility owned by partners rather than by the business, which is the share that leaves if the relationship ends.':
    'נתח הנראות שמוחזק בידי שותפים ולא בידי העסק — והוא הנתח שהולך אם הקשר מסתיים.',
  'Visibility creates attention; trust creates selection. A business can be found and still be filtered out when an engine has to stand behind naming it first.':
    'נראות יוצרת תשומת לב; אמון יוצר בחירה. עסק יכול להימצא ועדיין להיפלט כשמנוע צריך לעמוד מאחורי הצבתו במקום הראשון.',
  'A countable ratio of independent sources, which turns an abstract brand gap into a publishing programme with a known scope and cost.':
    'יחס בר-ספירה של מקורות בלתי תלויים, שהופך פער מותג מופשט לתוכנית פרסום עם היקף ועלות ידועים.',
  'Being mentioned and being cited are different commercial positions. Only one of them survives into the next answer the system gives.':
    'להיות מוזכר ולהיות מצוטט הן שתי עמדות מסחריות שונות. רק אחת מהן שורדת אל תוך התשובה הבאה שהמערכת נותנת.',
  'The small set of pages that disproportionately determine every answer given — frequently including a directory nobody at the company knows exists.':
    'קבוצת העמודים הקטנה שקובעת באופן לא פרופורציונלי כל תשובה שניתנת — ולא פעם כוללת מדריך שאיש בחברה אינו יודע שהוא קיים.',
  'Proof has a shelf life. Case studies, coverage and reviews lose weight with age, and the decline is measurable before selection stops.':
    'להוכחה יש תוקף. מקרי בוחן, סיקור וביקורות מאבדים משקל עם הזמן, והירידה ניתנת למדידה עוד לפני שהבחירה נפסקת.',
  'Most businesses lose the decision at one specific stage, not evenly across the journey. Locating that stage tells you where intervention returns most, and where further investment returns nothing.':
    'רוב העסקים מפסידים את ההחלטה בשלב אחד ספציפי, לא באופן אחיד לאורך המסע. איתור השלב הזה מלמד היכן ההתערבות מניבה הכי הרבה, והיכן השקעה נוספת אינה מניבה דבר.',
  'Losses concentrate at one stage rather than spreading evenly. Locating that stage tells you where intervention returns, and where it returns nothing.':
    'ההפסדים מתרכזים בשלב אחד במקום להתפרס באופן אחיד. איתור השלב הזה מלמד היכן ההתערבות מניבה, והיכן היא אינה מניבה דבר.',
  'The exact questions where a decision was made and the business was not in the room. These are not lost leads; no lead was ever created.':
    'השאלות המדויקות שבהן התקבלה החלטה והעסק לא היה בחדר. אלה אינם לידים שאבדו; ליד מעולם לא נוצר.',
  'Questions where the decision happens entirely without you, and where no channel measurement can show it, because nothing ever reached a channel.':
    'שאלות שבהן ההחלטה מתרחשת לחלוטין בלעדיכם, ושום מדידת ערוץ אינה יכולה להראות זאת, כי דבר מעולם לא הגיע לערוץ.',
  'Presence averaged across all questions hides the collapse that matters. What decides revenue is presence at the supplier-evaluation stage, and that figure is usually far lower than the headline.':
    'נוכחות ממוצעת על פני כל השאלות מסתירה את הקריסה שחשובה. מה שמכריע את ההכנסה הוא הנוכחות בשלב הערכת הספקים, והנתון הזה בדרך כלל נמוך בהרבה מהכותרת.',
  'The size of the decision market itself, counted in decisions rather than in searches, sessions or impressions.':
    'גודלו של שוק ההחלטות עצמו, נמדד בהחלטות ולא בחיפושים, סשנים או חשיפות.',
  'Value per decision by stage and question type, so a high-volume gap is not automatically ranked above a low-volume, high-value one.':
    'ערך להחלטה לפי שלב וסוג שאלה, כך שפער בעל נפח גבוה לא ידורג אוטומטית מעל פער בעל נפח נמוך וערך גבוה.',
  'A directional range with its confidence stated — never a single confident figure, and never described as confirmed lost revenue.':
    'טווח כיווני עם רמת הוודאות שלו מוצהרת — לעולם לא נתון בודד ובטוח, ולעולם לא מתואר כהכנסה שאבדה בוודאות.',
  'Every assumption behind an exposure figure, stated and editable — because a number whose assumptions are hidden cannot be argued with or trusted.':
    'כל הנחה שמאחורי נתון חשיפה, מוצהרת וניתנת לעריכה — כי מספר שהנחותיו מוסתרות אי אפשר להתווכח איתו ואי אפשר לבטוח בו.',
  'Real differentiators that never appear in any category description — strengths the market currently has no vocabulary to express.':
    'בידולים אמיתיים שאינם מופיעים באף תיאור של הקטגוריה — חוזקות שלשוק אין כרגע אוצר מילים לבטא אותן.',
  'Whether buyers are evaluating against criteria a competitor published, which quietly decides the outcome before anyone is compared.':
    'האם הקונים מעריכים לפי קריטריונים שמתחרה פרסם, מה שמכריע בשקט את התוצאה עוד לפני שמישהו הושווה.',
  'Where the business sits on a price spectrum in the eyes of machines describing it — an assumption that shapes shortlists before any quote is sent.':
    'היכן העסק ממוקם על סקאלת המחירים בעיני המכונות שמתארות אותו — הנחה שמעצבת רשימות קצרות עוד לפני שנשלחה הצעת מחיר.',
  'Demand maturity and competitive density per market, so expansion is sequenced by readiness rather than by proximity or preference.':
    'בשלות הביקוש והצפיפות התחרותית לכל שוק, כך שההתרחבות מתועדפת לפי מוכנות ולא לפי קרבה או העדפה.',
  'Rate of change rather than a snapshot, so a strong position that is deteriorating is not mistaken for a safe one.':
    'קצב השינוי ולא תמונת מצב, כדי שעמדה חזקה שנשחקת לא תיחשב בטעות לעמדה בטוחה.',
  'Position measured market by market, which routinely contradicts the single global figure a company believes it has.':
    'עמדה הנמדדת שוק אחר שוק, מה שסותר באופן שגרתי את הנתון הגלובלי היחיד שחברה מאמינה שיש לה.',
  'How category, positioning and reputation change across borders, including markets where the business is understood as a different kind of company entirely.':
    'כיצד הקטגוריה, המיצוב והמוניטין משתנים מעבר לגבולות, לרבות שווקים שבהם העסק נתפס כחברה מסוג אחר לגמרי.',
  'Where positioning drifts by geography or language, so a business is a category leader in one market and an unknown in the next.':
    'היכן המיצוב נסחף לפי גאוגרפיה או שפה, כך שעסק הוא מוביל קטגוריה בשוק אחד ואלמוני בשוק הבא.',
  'Where a channel partner’s description of your product is what machines have learned — and where that description is wrong.':
    'היכן התיאור של שותף ערוץ למוצר שלכם הוא מה שהמכונות למדו — והיכן התיאור הזה שגוי.',
  'Whether the brand is specified by name or treated as an interchangeable supplier — usually the more expensive answer of the two.':
    'האם המותג מצוין בשמו או נתפס כספק בר-החלפה — בדרך כלל התשובה היקרה מבין השתיים.',
  'Whether the reasons for a premium survive the trip through distribution, or arrive at the buyer as an unexplained higher number.':
    'האם הסיבות לפרמיה שורדות את המסע דרך ההפצה, או מגיעות לקונה כמספר גבוה יותר ללא הסבר.',
  'A board-ready position rather than a dashboard. States what is happening, what it means commercially, what the directional exposure is, how long the window stays open, and what must change — with owners and deadlines.':
    'עמדה מוכנה לדירקטוריון ולא לוח מחוונים. מציינת מה קורה, מה זה אומר מסחרית, מהי החשיפה הכיוונית, כמה זמן החלון נשאר פתוח ומה חייב להשתנות — עם אחראים ומועדים.',
  'Ranked by exposure, confidence, urgency, effort and competitor pressure.':
    'מדורג לפי חשיפה, ודאות, דחיפות, מאמץ ולחץ תחרותי.',
  'The lag between doing the work and seeing the movement, which is what stops a working programme from being cancelled a month too early.':
    'הפער בין ביצוע העבודה לבין הופעת התנועה — וזה מה שמונע ביטול של תוכנית עובדת חודש מוקדם מדי.',
  'Measured change against the predicted change, including the interventions that did not work — which is the only way the model earns trust.':
    'השינוי שנמדד מול השינוי שנחזה, כולל ההתערבויות שלא עבדו — וזו הדרך היחידה שבה המודל זוכה לאמון.',
  'Corroborated claims reduce the risk an engine takes in naming a supplier first.':
    'טענות מאוששות מקטינות את הסיכון שמנוע לוקח כשהוא נוקב בשם ספק ראשון.',

  /* --- Readout labels and competitor findings -------------------------------------- */
  'Category description': 'תיאור הקטגוריה',
  'Category resolved': 'הקטגוריה זוהתה',
  'Confusion and conflation': 'בלבול וערבוב',
  'Recommendation presence': 'נוכחות בהמלצות',
  'Recommendation share and momentum': 'נתח ההמלצות והתאוצה',
  'Recommendation share by stage': 'נתח ההמלצות לפי שלב',
  'Recommendation share across 24 decision questions':
    'נתח ההמלצות על פני 24 שאלות החלטה',
  'Mentions and citations': 'אזכורים וציטוטים',
  'Social proof quality': 'איכות ההוכחה החברתית',
  'Source advantage analysis': 'ניתוח יתרון המקורות',
  'Authority driver comparison': 'השוואת מנועי הסמכות',
  'Competitor vulnerability': 'פגיעות המתחרה',
  'Competitor control per stage': 'שליטת המתחרים לפי שלב',
  'Competitive threat': 'איום תחרותי',
  'Default vendor threat': 'איום ספק ברירת המחדל',
  'Why the competitor wins': 'מדוע המתחרה מנצח',
  'Why they win': 'מדוע הם מנצחים',
  'Winning questions': 'שאלות מנצחות',
  'Missed decision questions': 'שאלות החלטה שהוחמצו',
  'Gap classification per commercial question': 'סיווג הפער לכל שאלה מסחרית',
  'Question-to-stage mapping': 'מיפוי שאלה לשלב',
  'Stage-by-stage coverage': 'כיסוי שלב אחר שלב',
  'The stage where presence collapses': 'השלב שבו הנוכחות קורסת',
  'Strongest stage': 'השלב החזק ביותר',
  'Decision-journey position': 'עמדה במסע ההחלטה',
  'Revenue concentration by stage': 'ריכוז ההכנסה לפי שלב',
  'Revenue split by decision stage': 'פילוח ההכנסה לפי שלב החלטה',
  'Directional revenue exposure': 'חשיפת הכנסה כיוונית',
  'Paid dependency exposure': 'חשיפה לתלות בממומן',
  'Strategic blind spots': 'נקודות עיוורון אסטרטגיות',
  'Strategic timing window': 'חלון תזמון אסטרטגי',
  'Market and language': 'שוק ושפה',
  'What it believes': 'במה הוא מאמין',
  'Not resolved': 'לא זוהה',
  Resolved: 'זוהה',
  'Never recommends': 'לעולם אינו ממליץ',
  Unattributed: 'לא מיוחס',
  'Independent authority evidence — the constraint holding every downstream signal.':
    'ראיות סמכות בלתי תלויות — האילוץ שמחזיק כל אות במורד הזרם.',
  'Classified as a hardware retailer, not an MRO distributor.':
    'מסווג כקמעונאי חומרה, לא כמפיץ ציוד תחזוקה.',
  'Conflated with a same-named logistics firm.':
    'מעורבב עם חברת לוגיסטיקה בעלת שם זהה.',
  'No stable entity record. Category answered without naming any Midwest distributor.':
    'אין רשומת ישות יציבה. הקטגוריה נענתה מבלי לנקוב בשם אף מפיץ במערב התיכון.',
  'No AI engine names Northwind in nineteen of the twenty-four tracked decision questions.':
    'אף מנוע AI אינו נוקב בשם Northwind בתשע עשרה מתוך עשרים וארבע שאלות ההחלטה הנמדדות.',
  'Named in seventeen of the nineteen questions where Northwind is absent.':
    'מוזכר בשבע עשרה מתוך תשע עשרה השאלות שבהן Northwind נעדרת.',
  'Kestrel named first in four of seven questions.':
    'Kestrel מוזכרת ראשונה בארבע מתוך שבע שאלות.',
  'Receives the recommendation in 31% of decisions and controls the supplier-evaluation stage.':
    'מקבלת את ההמלצה ב-31% מההחלטות ושולטת בשלב הערכת הספקים.',
  'Leads on the two most heavily weighted vectors.':
    'מובילה בשני הווקטורים בעלי המשקל הגבוה ביותר.',
  'Authority and Visibility are where its investment has concentrated.':
    'סמכות ונראות הם המקומות שבהם התרכזה ההשקעה שלה.',
  'Independent validation lets engines recommend it without hedging.':
    'אימות בלתי תלוי מאפשר למנועים להמליץ עליה בלי להסתייג.',
  'Advantage compounds in the absence of a response.':
    'היתרון מצטבר בהיעדר תגובה.',
  'Holds position while no counter-intervention is running.':
    'שומרת על העמדה כל עוד לא פועלת התערבות נגדית.',
  'Meridian publishes specification guidance that engines treat as category-defining language.':
    'Meridian מפרסמת הנחיות מפרט שהמנועים מתייחסים אליהן כאל השפה שמגדירה את הקטגוריה.',
  'Atlas is named on procurement checklists that engines cite at the point of purchase.':
    'Atlas מוזכרת ברשימות תיוג רכש שהמנועים מצטטים בנקודת הרכישה.',
  'Two of six interventions are low effort with measurable movement inside 60 days.':
    'שתיים משש ההתערבויות דורשות מאמץ נמוך עם תנועה מדידה בתוך 60 יום.',
  'Kestrel Industrial 31%. Meridian Supply Co 18%. Halvorsen Industrial 11%. Atlas Trade Group 7%. Northwind Supply 4.2%. Unattributed 28.8%':
    'Kestrel Industrial 31%. Meridian Supply Co 18%. Halvorsen Industrial 11%. Atlas Trade Group 7%. Northwind Supply 4.2%. לא מיוחס 28.8%',
  'Not in top 100 organic. No AI recommendation. 320 searches per month.':
    'לא ב-100 התוצאות האורגניות הראשונות. אין המלצת AI. 320 חיפושים בחודש.',
  'Position 1 organic, AI present. Volume 40 per month.':
    'מקום 1 אורגני, נוכחות ב-AI. נפח 40 בחודש.',
  'Position 3 and recommended — the pattern that works.':
    'מקום 3 ומומלץ — הדפוס שעובד.',

  /* --- Tracked commercial keywords. Translated on the same reasoning as the
         home page's search queries — see the note beside those. ---------------------- */
  /* Movement units. The seed stores the fragment with its leading space and
     the component prints the figure beside it — 'X of 20' is what the screen
     shows, never what the code asks for. */
  ' of 20': ' מתוך 20',
  ' of 24': ' מתוך 24',
  'anchor bolts supplier': 'ספק ברגי עיגון',
  'fastener catalog request': 'בקשת קטלוג מחברים',
  'fastener sourcing best practices': 'שיטות עבודה מומלצות לרכש מחברים',
  'industrial distributor fill rate': 'שיעור אספקת הזמנות של מפיץ תעשייתי',
  'industrial supply account setup': 'פתיחת חשבון אספקה תעשייתית',
  'industrial supply near me': 'אספקה תעשייתית בקרבתי',
  'maintenance repair operations supplier': 'ספק תחזוקה תיקונים ותפעול',
  'mro consolidation vendor': 'ספק לאיחוד ציוד תחזוקה',
  'mro supply agreement': 'הסכם אספקת ציוד תחזוקה',
  'plant maintenance supplies': 'ציוד תחזוקה למפעל',
  'same day fastener shipping': 'משלוח מחברים באותו יום',
  'stainless steel fasteners supplier': 'ספק מחברי נירוסטה',

  /* --- Product screen captions and alt text — lib/visual/screens.ts.
     These render through t(slot.caption) and t(slot.alt), which is a
     VARIABLE, so scripts/i18n-keys.mjs cannot see them. Change a caption
     in screens.ts and you must change the key here by hand. -------- */
  'The early-warning view: where AI representation is heading if nothing changes, and the date after which each correction stops being cheap. Real interface, demonstration run.':
    'תצוגת ההתרעה המוקדמת: לאן מועד ייצוג ה-AI אם דבר לא ישתנה, והתאריך שאחריו כל תיקון מפסיק להיות זול. ממשק אמיתי, הרצת הדגמה.',
  'An early-warning screen listing four dated risks to AI representation, each with the point after which recovery becomes a rebuild rather than a repair, above live signal readings and a closing action window.':
    'מסך התרעה מוקדמת המפרט ארבעה סיכונים מתוארכים לייצוג ב-AI, לכל אחד הנקודה שאחריה ההתאוששות הופכת לבנייה מחדש ולא לתיקון, מעל קריאות אותות חיות וחלון פעולה שנסגר.',
  'Every prompt that shapes the buyer decision, with the monthly volume behind it and the revenue at stake on each. Real interface, demonstration run.':
    'כל שאלה שמעצבת את החלטת הקונה, עם הנפח החודשי שמאחוריה וההכנסה שעל כף המאזניים בכל אחת. ממשק אמיתי, הרצת הדגמה.',
  'A table of buyer decision moments, each row carrying its monthly search volume, the engine leading the answer, the brand visibility on it, the buyer intent it signals and a directional revenue range.':
    'טבלה של רגעי החלטה של קונים, בכל שורה נפח החיפוש החודשי שלה, המנוע שמוביל את התשובה, נראות המותג בה, כוונת הקונה שהיא מסמנת וטווח הכנסה מכוון.',
  'Where the commercial demand a business already intercepts actually originates. Real interface, demonstration run.':
    'היכן באמת מקורו של הביקוש המסחרי שהעסק כבר מיירט. ממשק אמיתי, הרצת הדגמה.',
  'A rotatable globe showing the geographic footprint of search-engine visibility, with the countries carrying measured commercial demand highlighted and counted beneath it.':
    'גלובוס שניתן לסובב המציג את הטביעה הגאוגרפית של הנראות במנועי החיפוש, כשהמדינות הנושאות ביקוש מסחרי נמדד מודגשות ונספרות מתחתיו.',
  'Each engine profiled across mention rate, sentiment and query share, beside the volume that weights them. Real interface, demonstration run.':
    'כל מנוע ממופה לפי שיעור האזכור, הסנטימנט ונתח השאילתות, לצד הנפח שמשקלל אותם. ממשק אמיתי, הרצת הדגמה.',
  'A radar chart profiling each AI engine across mention rate, sentiment and query share, beside a bar chart of the analysis query volume run on each engine.':
    'תרשים מכ״ם הממפה כל מנוע AI לפי שיעור האזכור, הסנטימנט ונתח השאילתות, לצד תרשים עמודות של נפח שאילתות הניתוח שהורצו בכל מנוע.',
  'Recommendation share engine by engine, beside the topics led, the topics lagged and the topics no brand has claimed. Real interface, demonstration run.':
    'נתח ההמלצות מנוע אחר מנוע, לצד הנושאים שבהם מובילים, אלה שבהם מפגרים ואלה שאף מותג לא תפס. ממשק אמיתי, הרצת הדגמה.',
  'A per-engine recommendation share table covering ChatGPT, Claude, Gemini, Perplexity and Copilot with brand and competitor top-three counts, beside lists of topics led, topics lagged and topics unclaimed by anyone.':
    'טבלת נתח המלצות לכל מנוע — ChatGPT, Claude, Gemini, Perplexity ו-Copilot — עם ספירת השלישייה הראשונה של המותג ושל המתחרים, לצד רשימות של נושאים מובילים, נושאים מפגרים ונושאים שאיש לא תפס.',
  'The two discovery surfaces set side by side: what Google indexes against what the AI engines cite back. Real interface, demonstration run.':
    'שני משטחי הגילוי זה לצד זה: מה ש-Google מאנדקס מול מה שמנועי ה-AI מצטטים בחזרה. ממשק אמיתי, הרצת הדגמה.',
  'A section contrasting search-engine visibility — indexable pages, organic impressions, ranking signals — against AI-mediated discovery, being what ChatGPT, Gemini, Perplexity and Copilot cite back.':
    'מקטע המנגיד את הנראות במנועי החיפוש — עמודים הניתנים לאינדוקס, חשיפות אורגניות, אותות דירוג — מול הגילוי המתווך על ידי AI, כלומר מה ש-ChatGPT, Gemini, Perplexity ו-Copilot מצטטים בחזרה.',
  'What the market already pays for the positions a business does not hold organically, and where budget should go first. Real interface, demonstration run.':
    'מה שהשוק כבר משלם עבור המיקומים שהעסק אינו מחזיק בהם אורגנית, ולאן התקציב צריך ללכת ראשון. ממשק אמיתי, הרצת הדגמה.',
  'A cost-per-click intelligence table pricing each commercial term against its monthly volume, with the annual cost of absence and the paid spend currently compensating for it stated above it.':
    'טבלת מודיעין עלות-לקליק המתמחרת כל מונח מסחרי מול הנפח החודשי שלו, כשעלות ההיעדרות השנתית וההוצאה הממומנת שמפצה עליה כרגע מוצגות מעליה.',
  'Exposure stated as a range with its confidence and its inputs, never as a single confirmed figure. Real interface, demonstration run.':
    'החשיפה מוצגת כטווח עם רמת הוודאות והנתונים שהוזנו, לעולם לא כמספר בודד ומאושר. ממשק אמיתי, הרצת הדגמה.',
  'A commercial exposure model showing monthly revenue at risk, daily cost and projected recovery value as ranges, with the conversion, deal-value and benchmark inputs printed beneath and a medium-confidence marker.':
    'מודל חשיפה מסחרית המציג הכנסה חודשית בסיכון, עלות יומית וערך התאוששות צפוי כטווחים, כשנתוני ההמרה, שווי העסקה ומדדי הייחוס מודפסים מתחת וסימון של ודאות בינונית.',
  'Forecasts drawn from accumulated GEON, narrative and competitor history — and the refusal to project before there is enough of it. Real interface, demonstration run.':
    'תחזיות הנשענות על היסטוריית GEON, נרטיב ומתחרים שנצברה — ועל הסירוב להשליך קדימה לפני שיש די ממנה. ממשק אמיתי, הרצת הדגמה.',
  'A predictive intelligence panel listing GEON pace, narrative target, competitor risk, annual recoverable value and the cost of ignoring the AI gap, each stating that more observed history is needed before a projection is offered.':
    'פאנל מודיעין חיזוי המפרט קצב GEON, יעד נרטיב, סיכון מתחרים, ערך שנתי בר-השבה ועלות ההתעלמות מפער ה-AI, כשכל אחד מציין שנדרשת היסטוריה נצפית נוספת לפני שתוצע תחזית.',
  'The gap report as it is delivered: one stated verdict, the engines observed, and the index the following pages take apart. Real interface, demonstration run.':
    'דוח הפערים כפי שהוא נמסר: פסק דין אחד מנוסח, המנועים שנצפו, והמדד שהעמודים הבאים מפרקים. ממשק אמיתי, הרצת הדגמה.',
  'The cover of a visibility intelligence gap report carrying a single stated verdict, the AI engines observed, the date of the run and an AI-first reputation index awaiting the pages that decompose it.':
    'שער של דוח מודיעין פערי נראות הנושא פסק דין אחד מנוסח, את מנועי ה-AI שנצפו, את תאריך ההרצה ומדד מוניטין מבוסס-AI הממתין לעמודים שיפרקו אותו.',
  'Narrative quality plotted against attention share — the top-left quadrant is volume without trust. Real interface, demonstration run.':
    'איכות הנרטיב מול נתח תשומת הלב — הרביע השמאלי-עליון הוא נפח בלי אמון. ממשק אמיתי, הרצת הדגמה.',
  'A scatter plot placing each brand in a category by narrative quality on one axis and attention share on the other, so that high share paired with a weak narrative separates visibly from earned standing.':
    'תרשים פיזור הממקם כל מותג בקטגוריה לפי איכות הנרטיב בציר אחד ונתח תשומת הלב בציר השני, כך שנתח גבוה בשילוב נרטיב חלש נבדל בבירור ממעמד שנרכש.',
  'Combined dominance — share multiplied by narrative and by default routing — sized as area per brand. Real interface, demonstration run.':
    'דומיננטיות משולבת — נתח מוכפל בנרטיב ובניתוב ברירת המחדל — בגודל שטח לכל מותג. ממשק אמיתי, הרצת הדגמה.',
  'A treemap sizing each brand in a category by combined attention dominance, computed from share of attention, narrative quality and how often the engines route to it by default.':
    'מפת עץ המגדילה כל מותג בקטגוריה לפי דומיננטיות תשומת לב משולבת, המחושבת מנתח תשומת הלב, מאיכות הנרטיב ומתדירות הניתוב אליו על ידי המנועים כברירת מחדל.',
  'Where mentions actually land engine by engine, and the addressable volume sitting behind the ones that do not. Real interface, demonstration run.':
    'היכן האזכורים באמת נוחתים מנוע אחר מנוע, והנפח בר-הפנייה שעומד מאחורי אלה שלא. ממשק אמיתי, הרצת הדגמה.',
  'A bar chart per AI engine comparing the queries that mentioned the brand against those that did not, with the unmentioned mass carrying the larger share on every engine.':
    'תרשים עמודות לכל מנוע AI המשווה בין השאילתות שהזכירו את המותג לאלה שלא, כשהמסה שלא הזכירה מחזיקה בנתח הגדול יותר בכל מנוע.',
  'The whole mention rate resolved to one score, beside how the analysed volume splits across engines. Real interface, demonstration run.':
    'כל שיעור האזכור מתמצה בציון אחד, לצד אופן חלוקת הנפח שנותח בין המנועים. ממשק אמיתי, הרצת הדגמה.',
  'A composite presence score shown as a single gauge with its rating beneath, beside a doughnut chart splitting analysed query volume across the AI engines that show activity.':
    'ציון נוכחות מורכב המוצג כמד יחיד עם הדירוג שמתחתיו, לצד תרשים טבעת המחלק את נפח השאילתות שנותח בין מנועי ה-AI שמפגינים פעילות.',
  'One run reconstructed: what is happening, why it is happening and what it is costing, with the analyst reading underneath. Real interface, demonstration run.':
    'הרצה אחת משוחזרת: מה קורה, מדוע זה קורה ומה זה עולה, עם קריאת האנליסט מתחת. ממשק אמיתי, הרצת הדגמה.',
  'An executive summary resolving a run of commercial queries into what is happening, why it is happening and what it is costing, above an analyst note framing the result as a representation gap rather than a quality gap.':
    'תקציר מנהלים המתמצת הרצה של שאילתות מסחריות למה קורה, מדוע זה קורה ומה זה עולה, מעל הערת אנליסט הממסגרת את התוצאה כפער ייצוג ולא כפער איכות.',
}
