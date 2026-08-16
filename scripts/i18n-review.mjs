import { readFileSync } from 'node:fs'

/* ============================================================================
   Reviewer's harness for the twelve translation files.

   Complements the other three scripts. i18n-audit.mjs says what the PAGE
   shows, i18n-keys.mjs says what the CODE asks for, i18n-port.mjs says which
   KEYS a locale is missing. None of them reads a translation. This one does
   the part of a review that a reader does badly and a machine does perfectly:
   integrity, glossary compliance, and register consistency.

   It is not a substitute for a native speaker. It is what you hand them so
   they can spend their attention on register and idiom instead of hunting for
   a dropped {token}.

   USAGE
     node scripts/i18n-review.mjs            summary table
     node scripts/i18n-review.mjs TOKEN      detail for one check
     node scripts/i18n-review.mjs he         detail for one locale

   WHAT IT DELIBERATELY DOES NOT CHECK
   The §9 "never use" vocabulary. A regex for it fires on every sentence that
   positions GeoRepute AGAINST those tools — "invisible to both SEO and
   analytics tooling" is the message, not a violation of it — and on channel
   names in the seed. Every hit was a false positive. Reading is the only
   instrument for that, so the list stays in GLOSSARY.md for the reviewer.
   ========================================================================= */

const LOCALES = ['he', 'ar', 'ru', 'fr', 'es', 'pt']

/* The object literals are valid JS once the type annotation is gone. */
function load(path, exportName) {
  const src = readFileSync(path, 'utf8')
  const re = new RegExp(`export const ${exportName}\\s*:[^=]*=\\s*`, '')
  const at = src.search(re)
  if (at < 0) throw new Error(`no ${exportName} in ${path}`)
  const body = src.slice(at).replace(re, '')
  return new Function(`return (${body.replace(/\}\s*(\n\s*export[\s\S]*)?$/, '}')})`)()
}

function walk(node, path, fn) {
  if (typeof node === 'string') return fn(node, path)
  if (Array.isArray(node)) return node.forEach((v, i) => walk(v, `${path}[${i}]`, fn))
  if (node && typeof node === 'object')
    for (const [k, v] of Object.entries(node)) walk(v, path ? `${path}.${k}` : k, fn)
}

const SCRIPT = {
  cyrillic: /[Ѐ-ӿ]/,
  hebrew: /[֐-׿]/,
  arabic: /[؀-ۿݐ-ݿﭐ-﷿ﹰ-﻿]/,
}
/* Which scripts must NOT appear in a given locale's output. */
const FOREIGN = {
  he: ['cyrillic', 'arabic'],
  ar: ['cyrillic', 'hebrew'],
  ru: ['hebrew', 'arabic'],
  fr: ['cyrillic', 'hebrew', 'arabic'],
  es: ['cyrillic', 'hebrew', 'arabic'],
  pt: ['cyrillic', 'hebrew', 'arabic'],
}

/* GLOSSARY.md "Do not translate". Google is on this list, which is why he and
   ar keep it in Latin rather than transliterating to גוגל / جوجل. */
const PROTECTED = [
  'GeoRepute', 'GINTEX', 'copyup.ai', 'onlineperception.ai', 'GEON',
  'ChatGPT', 'Claude', 'Gemini', 'Perplexity', 'Copilot', 'Grok', 'Google',
]

/* GLOSSARY.md "Core terms". A substring test, so a qualified form such as
   "Public Narrative Intelligence" still has to contain the core rendering. */
const CORE = {
  'Decision Intelligence': { he: 'מודיעין החלטות', ar: 'ذكاء القرار', ru: 'нтеллект решений', fr: 'ntelligence décisionnelle', es: 'nteligencia de decisión', pt: 'nteligência de decisão' },
  'Closed-Loop Intelligence': { he: 'מודיעין במעגל סגור', ar: 'الذكاء في حلقة مغلقة', ru: 'нтеллект замкнутого цикла', fr: 'ntelligence en boucle fermée', es: 'nteligencia de circuito cerrado', pt: 'nteligência de circuito fechado' },
  'Market Intelligence': { he: 'מודיעין שוק', ar: 'ذكاء السوق', ru: 'ыночный интеллект', fr: 'ntelligence de marché', es: 'nteligencia de mercado', pt: 'nteligência de mercado' },
  'Competitive Intelligence': { he: 'מודיעין תחרותי', ar: 'الذكاء التنافسي', ru: 'онкурентный интеллект', fr: 'ntelligence concurrentielle', es: 'nteligencia competitiva', pt: 'nteligência competitiva' },
  'Narrative Intelligence': { he: 'מודיעין נרטיבים', ar: 'ذكاء السرديات', ru: 'арративный интеллект', fr: 'ntelligence narrative', es: 'nteligencia narrativa', pt: 'nteligência narrativa' },
}

/* Arabic 2nd person. GLOSSARY.md Register asks for the plural; Hebrew already
   uses it everywhere. The two exceptions are tracked buyer QUESTIONS — text a
   buyer types, not an instruction to the reader — and stay singular. */
const AR_LETTER = 'ء-ي'
const AR_SINGULAR = [
  'نشاطك', 'فئتك', 'سوقك', 'موقعك', 'تحليلاتك', 'بياناتك', 'شركتك', 'نطاقك',
  'منك', 'عنك', 'عليك', 'لديك', 'يمكنك', 'بشأنك', 'تصلك', 'ملئك', 'بريدك',
  'مزاياك', 'بمتصفحك', 'بمنافسك', 'بتوقيتك', 'تخبرك', 'يخبرك',
  'اعرف', 'اختر', 'افتح', 'أدخل', 'ادخل', 'احجز', 'اطّلع', 'شاهد', 'قارن',
  'راجع', 'ابنِ', 'ابدأ', 'انشر', 'اقرأ', 'احصل', 'اعرض', 'افهم', 'التزم',
  'أعد', 'مرّر', 'ركّز',
]
const AR_BUYER_QUESTIONS = [
  'افتح حساب توريد للصيانة والتشغيل',
  'احصل على عرض سعر لمثبّتات الدرجة 8 بالجملة',
]

const tokens = (s) => (s.match(/\{[a-zA-Z][a-zA-Z0-9_]*\}/g) ?? []).sort().join(',')
const bTags = (s) => `${(s.match(/<b>/g) ?? []).length}/${(s.match(/<\/b>/g) ?? []).length}`

const findings = []
const report = (locale, check, detail) => findings.push({ locale, check, detail })

for (const locale of LOCALES) {
  const overlay = load(`lib/i18n/content/${locale}.ts`, 'content')
  const dict = load(`lib/i18n/dictionaries/${locale}.ts`, 'dictionary')

  /* Every rendered string, paired with its English source where one exists. */
  const rendered = []
  for (const [src, tgt] of Object.entries(overlay)) rendered.push([tgt, src])
  walk(dict, '', (s, p) => rendered.push([s, null, p]))

  /* --- checks that need the English source ---------------------------- */
  for (const [src, tgt] of Object.entries(overlay)) {
    if (tokens(src) !== tokens(tgt))
      report(locale, 'TOKEN', `${tokens(src) || '—'} became ${tokens(tgt) || '—'} :: ${src.slice(0, 64)}`)
    if (bTags(src) !== bTags(tgt))
      report(locale, 'MARKUP', `<b> ${bTags(src)} became ${bTags(tgt)} :: ${src.slice(0, 64)}`)
    if (src.startsWith(' ') !== tgt.startsWith(' ') || src.endsWith(' ') !== tgt.endsWith(' '))
      report(locale, 'EDGESPACE', `${JSON.stringify(src)} -> ${JSON.stringify(tgt)}`)
    for (const noun of PROTECTED)
      if (src.includes(noun) && !tgt.includes(noun))
        report(locale, 'PROTECTED', `lost "${noun}" :: ${tgt.slice(0, 70)}`)
    for (const [term, per] of Object.entries(CORE))
      if (src.includes(term) && !tgt.includes(per[locale]))
        report(locale, 'CORETERM', `"${term}" should render as "${per[locale]}" :: ${tgt.slice(0, 70)}`)
  }

  /* --- checks on the rendered string alone ---------------------------- */
  for (const [value, , path] of rendered) {
    for (const s of FOREIGN[locale])
      if (SCRIPT[s].test(value))
        report(locale, 'SCRIPT', `${s} :: ${JSON.stringify(value.slice(0, 70))}`)
    if (/ {2}/.test(value)) report(locale, 'SPACING', `double space :: ${value.slice(0, 70)}`)

    if (locale === 'es') {
      if (/\?/.test(value) && !/¿/.test(value)) report(locale, 'ES-PUNCT', `? without ¿ :: ${value.slice(0, 70)}`)
      if (/!/.test(value) && !/¡/.test(value)) report(locale, 'ES-PUNCT', `! without ¡ :: ${value.slice(0, 70)}`)
    }
    if (locale === 'ar') {
      /* Sentence punctuation only — a comma between digits is a thousands
         separator and correct. */
      if (/(?<![\d\s]),(?!\d)/.test(value)) report(locale, 'AR-PUNCT', `latin comma :: ${value.slice(0, 70)}`)
      if (/\?/.test(value)) report(locale, 'AR-PUNCT', `latin ? :: ${value.slice(0, 70)}`)
      if (!AR_BUYER_QUESTIONS.includes(value))
        for (const w of AR_SINGULAR)
          /* The lookbehind has to bar diacritics too: يُقارن is a passive
             3rd person, and without ُ in the class its قارن reads as the
             imperative. */
          if (new RegExp(`(?<![${AR_LETTER}ً-ْ])${w}(?![${AR_LETTER}ً-ْ])`).test(value))
            report(locale, 'AR-ADDRESS', `singular "${w}" at ${path ?? 'overlay'} :: ${value.slice(0, 60)}`)
    }
  }
}

const by = {}
for (const f of findings) (by[f.check] ??= []).push(f)

console.log('=== i18n review ===\n')
if (findings.length === 0) console.log('No findings.')
for (const [check, list] of Object.entries(by).sort((a, b) => b[1].length - a[1].length)) {
  const per = {}
  for (const f of list) per[f.locale] = (per[f.locale] ?? 0) + 1
  console.log(
    `${check.padEnd(11)} ${String(list.length).padStart(4)}   ` +
      LOCALES.map((l) => `${l}:${per[l] ?? 0}`).join('  ')
  )
}
console.log(`\ntotal: ${findings.length}`)

const arg = process.argv[2]
if (arg) {
  console.log(`\n=== ${arg} ===`)
  for (const f of findings.filter((x) => x.check === arg || x.locale === arg))
    console.log(`[${f.locale}] ${f.check}: ${f.detail}`)
}

process.exit(findings.length ? 1 : 0)
