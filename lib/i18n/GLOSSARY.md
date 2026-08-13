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

- **Hebrew and Arabic:** address the reader in the plural imperative for CTAs.
  Avoid transliterated English marketing terms where a real term exists.
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

---

## Status

Every dictionary carries `meta.reviewed`. It is `false` until a native
speaker has checked that file against this glossary. `npm run test` reports
which languages remain unreviewed.
