/* ============================================================================
   TRANSLATION AUDIT — render a localized page and report every English
   segment still visible on it.

   The measure of "translated" is the rendered page, not a list of keys. A key
   list will happily tell you a string is translated while the component that
   shows it reads a different source entirely; that mistake cost most of a
   session before this script existed.

   USAGE
     node scripts/i18n-audit.mjs <url>
     node scripts/i18n-audit.mjs http://localhost:3000/he
     node scripts/i18n-audit.mjs http://localhost:3000/ar/how-it-works

   ALWAYS RUN IT AGAINST A SERVER YOU JUST STARTED. A stale `next dev` will
   serve an old build and report no progress while the code is in fact
   correct. See docs/HANDOFF.md → "Verification that actually works".
   ========================================================================= */

const url = process.argv[2]
if (!url) {
  console.error('usage: node scripts/i18n-audit.mjs <url>')
  console.error('   eg: node scripts/i18n-audit.mjs http://localhost:3000/he')
  process.exit(2)
}

let res
try {
  res = await fetch(url)
} catch (error) {
  console.error(`CANNOT REACH ${url} — is the dev server running?`)
  console.error(String(error))
  process.exit(1)
}
const html = await res.text()

/* A failed render has no English on it either, and "0 segments remaining" is
   exactly what a 500 looks like through this script. Refuse to report. */
if (!res.ok) {
  console.error(`FETCH FAILED — ${res.status} ${res.statusText} at ${url}`)
  process.exit(1)
}
if (html.length < 20000) {
  console.error(
    `SUSPICIOUSLY SMALL PAGE — ${html.length} bytes. Not a real render.`,
  )
  process.exit(1)
}

/* Drop everything that is not visible prose. Scripts go first and matter
   most: the RSC flight payload embedded there contains the English source of
   every translated string, and counting it would make the number meaningless. */
const body = html
  .replace(/<script[\s\S]*?<\/script>/g, ' ')
  .replace(/<style[\s\S]*?<\/style>/g, ' ')
  .replace(/<svg[\s\S]*?<\/svg>/g, ' ')
  .replace(/<!--[\s\S]*?-->/g, ' ')

/* Attribute values a user can actually perceive. */
const attrs = []
for (const m of body.matchAll(
  /(?:alt|aria-label|title|placeholder)="([^"]+)"/g,
)) {
  attrs.push(m[1])
}

const text = body.replace(/<[^>]+>/g, '\n')

/* Proper nouns, product names and the demonstration companies. These stay in
   Latin script in every locale by design — translating a competitor's name
   would make the comparison incoherent. Extend this list rather than
   translating something that should not be translated. */
const NOUNS =
  'GeoRepute|GINTEX|Gintex|Google|ChatGPT|Claude|Gemini|Perplexity|Copilot|Grok|GEON|NASA|Unsplash|copyup\\.ai|onlineperception\\.ai|Northwind|Kestrel|Meridian|Atlas|Halvorsen|Industrial|Supply|Trade|Group|Co|Inc|CRM|MRO|SEO|CPC|AI|Ads|Intl'

const ONLY_NOUN = new RegExp(`^(?:${NOUNS}|Northwind Supply|Google Ads)$`)
const STRIP_NOUNS = new RegExp(`\\b(?:${NOUNS})\\b`, 'g')

const segments = new Set()
for (const raw of [...text.split('\n'), ...attrs]) {
  const s = raw.replace(/&[a-z]+;/g, ' ').replace(/\s+/g, ' ').trim()
  if (s.length < 2) continue
  if (!/[A-Za-z]{2,}/.test(s)) continue
  if (ONLY_NOUN.test(s)) continue

  /* Public asset paths are displayed deliberately — they tell whoever is
     filling a screenshot slot exactly where the file goes. */
  if (/^public\s*\/screens\//.test(s)) continue

  /* What survives removing allowed nouns, digits and punctuation is the part
     that genuinely still reads as English. */
  const stripped = s.replace(STRIP_NOUNS, '').replace(/[\d\s%$–—→←·.,:/()|-]+/g, '')
  if (!/[A-Za-z]{2,}/.test(stripped)) continue

  segments.add(s)
}

const list = [...segments].sort((a, b) => b.length - a.length)
console.log(`URL: ${url}`)
console.log(`ENGLISH SEGMENTS REMAINING: ${list.length}`)
console.log(`WORDS: ${list.reduce((n, s) => n + s.split(/\s+/).length, 0)}`)
console.log('')
list.forEach((s) => console.log(JSON.stringify(s)))
