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
     · The example search queries ("industrial fastener supplier",
       "grade 8 bolts bulk", …). These are the literal phrases a buyer types.
       An Israeli demonstration would use Hebrew queries against a Hebrew
       market, which is a content decision rather than a translation one —
       flagged for the client.

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
  'Google vs AI Visibility Intelligence': 'מודיעין נראות גוגל מול AI',
  'Google position': 'מיקום בגוגל',
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
    'דירוג בגוגל והמלצת AI הם נכסים מסחריים נפרדים. Northwind מדורגת ראשונה עבור פתיחת חשבון — שאלה שנשאלת רק אחרי שהספק כבר נבחר — ונעדרת מכל שאלה שמכריעה מי אותו ספק.',

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
    'אחת-עשרה מתוך עשרים מילות מפתח מסחריות במעקב נמצאות מחוץ לעשירייה הראשונה בגוגל ואינן מקבלות המלצת AI — ההחלטה אינה מתרחשת באף אחד מהמשטחים.',

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
    'מדורגת בגוגל אך נעדרת מתשובות AI. הסמכות הקיימת אינה מגיעה אל משטח ה-AI.',

  'Kestrel has published material addressing each question directly; engines reach for what exists.':
    'Kestrel פרסמה חומר שעונה על כל שאלה ישירות; מנועים נשענים על מה שקיים.',

  'Re-run all 24 questions monthly across all six engines; record presence per engine per question.':
    'הריצו מחדש את כל 24 השאלות מדי חודש בכל ששת המנועים; תעדו נוכחות לכל מנוע בכל שאלה.',

  'Publishing evaluation criteria before competitors did made that framing the one engines learned.':
    'פרסום קריטריוני ההערכה לפני המתחרים הפך את המסגור הזה לזה שהמנועים למדו.',

  'Absent from both surfaces on a high-value commercial question. The most expensive class of gap.':
    'נעדר משני המשטחים בשאלה מסחרית בעלת ערך גבוה. מחלקת הפער היקרה ביותר.',

  'Absent from AI answers and outside the Google top ten. The decision happens without the brand.':
    'נעדר מתשובות AI ומחוץ לעשירייה הראשונה בגוגל. ההחלטה מתרחשת בלי המותג.',

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
    'דירוג בגוגל והמלצת AI הם נכסים מסחריים נפרדים. חוזק באחד אינו עובר לאחר.',

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
  'Best Google position': 'המיקום הטוב ביותר בגוגל',
  'Strongest competitor': 'המתחרה החזק ביותר',
  'Highest-risk engine': 'המנוע בסיכון הגבוה ביותר',
  'So AI recommends': 'ולכן ה-AI ממליץ',
  'A buyer asks AI': 'קונה שואל AI',
}
