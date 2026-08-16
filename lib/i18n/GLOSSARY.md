# Translation glossary

Requirements doc §9 makes the positioning non-negotiable, and it is the part
of this site most likely to be lost in translation. A translator working from
the English alone will reach for their language's established
marketing-software vocabulary, which is precisely the outcome §9 exists to
prevent.

**Every translation in `lib/i18n/dictionaries/` must follow this table.**
Reviewers: check this first, before style.

---

## The one rule

> Does this make GeoRepute sound like a tool that creates marketing content,
> or like an intelligence system that understands the market, decides what
> needs to change, executes against that intelligence, measures the result
> and learns from it?

If a rendering sounds like content, SEO, social media, analytics or marketing
automation — it is wrong, however natural it reads.

---

## Core terms

These carry the category. Keep them consistent everywhere they appear; do not
vary them for style.

| English | he | ar | ru | fr | es | pt |
|---|---|---|---|---|---|---|
| Decision Intelligence | מודיעין החלטות | ذكاء القرار | Интеллект решений | Intelligence décisionnelle | Inteligencia de decisión | Inteligência de decisão |
| Decision Intelligence Operating System | מערכת ההפעלה למודיעין החלטות | نظام تشغيل ذكاء القرار | Операционная система интеллекта решений | Système d'exploitation d'intelligence décisionnelle | Sistema operativo de inteligencia de decisión | Sistema operativo de inteligência de decisão |
| Closed-Loop Intelligence | מודיעין במעגל סגור | الذكاء في حلقة مغلقة | Интеллект замкнутого цикла | Intelligence en boucle fermée | Inteligencia de circuito cerrado | Inteligência de circuito fechado |
| Deep Diagnosis | אבחון עומק | التشخيص العميق | Глубокая диагностика | Diagnostic approfondi | Diagnóstico profundo | Diagnóstico profundo |
| Market Intelligence | מודיעין שוק | ذكاء السوق | Рыночный интеллект | Intelligence de marché | Inteligencia de mercado | Inteligência de mercado |
| Competitive Intelligence | מודיעין תחרותי | الذكاء التنافسي | Конкурентный интеллект | Intelligence concurrentielle | Inteligencia competitiva | Inteligência competitiva |
| Narrative Intelligence | מודיעין נרטיבים | ذكاء السرديات | Нарративный интеллект | Intelligence narrative | Inteligencia narrativa | Inteligência narrativa |
| Decision Reconstruction | שחזור ההחלטה | إعادة بناء القرار | Реконструкция решения | Reconstruction de la décision | Reconstrucción de la decisión | Reconstrução da decisão |
| Decision Signals | אותות החלטה | إشارات القرار | Сигналы решения | Signaux de décision | Señales de decisión | Sinais de decisão |
| Evidence | ראיות | الأدلة | доказательства | preuves | evidencia | evidência |
| Authority | סמכות | السلطة المرجعية | авторитетность | autorité | autoridad | autoridade |
| Executive Mission Control | חדר הבקרה הניהולי | مركز القيادة التنفيذي | Центр управления | Centre de commande exécutif | Centro de mando ejecutivo | Centro de comando executivo |

---

## Never use

These reduce GeoRepute to an execution feature and hide the intelligence
architecture. Do not use the local-language equivalent of any of them:

content generator · content creation tool · social media tool · social media
management platform · marketing automation · SEO tool · GEO tool · AI SEO
tool · publishing tool · scheduling tool · post generator · blog generator ·
AI marketing tool · marketing assistant · AI assistant · campaign management
tool · reputation management (as the primary category) · dashboard tool ·
analytics tool · reporting tool · all-in-one marketing platform · automated
marketing platform · autopilot marketing · fully autonomous marketing ·
"generate more content" · "create content faster" · "save time creating
posts" · "schedule your social media" · "manage all your channels" ·
"optimize your marketing"

**Watch the verb, not just the noun.** `lib/copy/en.ts` describes copyup.ai as
"Content and media **execution**". Every one of the six had softened that to
*creation* or *production* — `Création de contenu`, `Creación de contenido`,
`Создание контента`, `יצירת תוכן`, `إنتاج المحتوى`. Each reads naturally, and
each lands on the exact noun phrase this list bans while dropping the word the
whole positioning turns on. All six now say execution.

The reverse trap is just as easy. Do **not** "fix" a sentence that positions
GeoRepute *against* these tools: "invisible to both SEO and analytics tooling"
is the argument, and every locale renders it correctly. Same for "a board-ready
position rather than a dashboard", and for `Paid social` and `Trade media`,
which are channel names in the seed rather than claims about the product.

---

## Evidence language — do not soften

These are commitments about what the product does and does not claim. They are
legally and commercially load-bearing. Translate them precisely; do not make
them more appealing, more confident, or more vague.

| English | Requirement |
|---|---|
| Directional estimate | Must read as an estimate for prioritisation, never as a measured fact |
| **Not** confirmed lost revenue | Must remain an explicit negation. Never render as "lost revenue" |
| Directional commercial exposure | "Exposure", not "loss" |
| High confidence | Multiple current and reliable sources support the conclusion |
| Medium confidence | Meaningful but partially estimated or incomplete |
| Directional | Useful for prioritisation, not audited or verified |
| Insufficient history | The platform withholds predictive conclusions |

---

## Register

Institutional and precise, addressed to an executive. Not promotional, not
breathless, not chatty.

- **Hebrew and Arabic:** address the reader in the plural — imperative *and*
  possessive, not only on CTAs. Avoid transliterated English marketing terms
  where a real term exists.

  This used to read "for CTAs", and Arabic honoured it nowhere: 72 singular
  forms against 1 plural, while Hebrew was already 36 plural against 0. Fixing
  only the buttons made it worse, not better — plural on the button directly
  above singular `نشاطك` in the paragraph. The rule is the whole page or none
  of it.

  Two strings stay singular on purpose. `افتح حساب توريد للصيانة والتشغيل`
  and `احصل على عرض سعر لمثبّتات الدرجة 8 بالجملة` are two of the 24 tracked
  buyer questions — text a buyer types into an engine, not an instruction to
  the reader. `scripts/i18n-review.mjs` holds the same two exceptions.

  Beware the homographs when working on this by hand: `تعرّف` is the noun
  *recognition* in `تعرّف {score}/100`, not an imperative; `يُقارن` is a
  passive, not `قارن`; and `أكّد`, `حلّل`, `اطّلع`, `قارن` are each also a
  3rd-person past. Replace whole strings you have read, never bare words.
- **Russian:** formal register (вы). Avoid anglicisms where a Russian term
  exists.
- **French:** vouvoiement. Prefer *intelligence décisionnelle* over borrowing
  the English.
- **Spanish and Portuguese:** neutral international register, not
  region-specific idiom. Portuguese is European (pt-PT).

---

## Do not translate

- **GeoRepute**, **GINTEX**, **copyup.ai**, **onlineperception.ai**
- Engine names: **ChatGPT**, **Claude**, **Gemini**, **Perplexity**,
  **Copilot**, **Grok**
- **Google**
- **GEON** (the methodology name)
- Language endonyms in the switcher (`עברית`, `العربية`, …) — the whole point
  is that each is readable to a speaker of that language

**Not transliterated either.** Hebrew and Arabic were split roughly half and
half on Google — `גוגל` / `جوجل` in some strings, Latin in others, and the two
languages disagreed with each other about which strings got which. Latin
everywhere now, in all six locales, for three reasons: it is what this list
already said; the evidence table stacks `Google + Perplexity` and
`Google + ChatGPT` in one column, where a transliterated Google is incoherent
beside Latin engine names; and both files already write Latin terms with a
prefix (`ה-AI`, `ל-AI`, `وGoogle`), so nothing new was imported.

Hebrew leaves **AI** in Latin as well — 223 occurrences against 2 that had
drifted to `בינה מלאכותית`, since corrected. The other five locales translate
it (`ИИ`, `IA`, `الذكاء الاصطناعي`). That asymmetry is deliberate and idiomatic.

---

## Status

Every dictionary carries `meta.reviewed`. It is `false` until a native
speaker has checked that file against this glossary. `npm run test` reports
which languages remain unreviewed.

`meta.reviewed` is still `false` for all six, and this section is the reason
it should stay that way until a person reads them.

### What a machine has already checked

`node scripts/i18n-review.mjs` runs the mechanical half of this document and
currently reports nothing. It covers `{token}` and `<b>` integrity, leading
and trailing space, foreign-script contamination, the do-not-translate list,
the core-term table, Spanish `¿`/`¡`, Arabic `،`/`؟`, and Arabic address.
Run it before you send a file out, so the reviewer's time goes on language.

Verified by reading rather than by rule, and needing no further attention:
each locale's own number convention (comma for he/ar, space for ru/fr/pt,
period for es, and Russian's unspaced range dash) is individually correct;
French's high count of English-identical strings is a fact about French
(`Position`, `Format`, `Articles`, `Citations` are all correct French), not a
gap; and Hebrew's maqaf usage is right — `שנים־עשר` and `רב־לשוני` take one,
`ה-AI` takes a plain hyphen.

### What a native speaker still has to judge

Everything above is form. What no check reaches is whether the register is
right — whether this reads as institutional intelligence writing to an
executive, or as competent translation of English marketing. Read the
dictionary first; it carries the §19 commercial copy and is a fifth the size
of the overlay.
