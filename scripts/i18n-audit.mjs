/* ============================================================================
   TRANSLATION AUDIT — render a localized page and report what is still English.

   The measure of "translated" is the rendered page, not a list of keys. A key
   list will happily tell you a string is translated while the component that
   shows it reads a different source entirely; that mistake cost most of a
   session before this script existed.

   TWO MODES, AND THE SECOND ONE IS NOT OPTIONAL FOR LATIN-SCRIPT LOCALES.

   Script mode (default) finds runs of Latin letters. That is a sound test for
   Hebrew, Arabic, Russian, Greek, Thai — anything that does not share an
   alphabet with English. It is WORTHLESS for French, Spanish, Portuguese,
   German or Italian: French prose is Latin script, so this mode reports a
   perfectly translated French page as ~500 English segments.

   Diff mode (--against <englishUrl>) compares the page against the English
   render and reports the segments that are BYTE-IDENTICAL. That is the real
   question for a same-script locale: not "is this Latin?" but "is this the
   same string English got?".

   USAGE
     node scripts/i18n-audit.mjs http://localhost:3000/he
     node scripts/i18n-audit.mjs http://localhost:3000/fr --against http://localhost:3000/en

   ALWAYS RUN IT AGAINST A SERVER YOU JUST STARTED. A stale `next dev` will
   serve an old build and report no progress while the code is in fact
   correct. See docs/HANDOFF.md → "Verification that actually works".
   ========================================================================= */

const argv = process.argv.slice(2)
const url = argv[0]
const againstAt = argv.indexOf('--against')
const baseline = againstAt === -1 ? null : argv[againstAt + 1]

if (!url || (againstAt !== -1 && !baseline)) {
  console.error('usage: node scripts/i18n-audit.mjs <url> [--against <englishUrl>]')
  console.error('   eg: node scripts/i18n-audit.mjs http://localhost:3000/he')
  console.error('   eg: node scripts/i18n-audit.mjs http://localhost:3000/fr \\')
  console.error('         --against http://localhost:3000/en')
  process.exit(2)
}

/* Proper nouns, product names and the demonstration companies. These stay in
   Latin script in every locale by design — translating a competitor's name
   would make the comparison incoherent. Extend this list rather than
   translating something that should not be translated.

   Multi-word product names are stripped as PHRASES first, before the
   word-level pass. Adding their halves to NOUNS instead would blind the
   audit to those words appearing alone — "Search" and "Analytics" are both
   ordinary translatable words elsewhere on the site. */
const PHRASES = [
  /* The demonstration domain, which the app shell prints beside the locale's
     own market name — "northwindsupply.com · ארצות הברית". */
  'northwindsupply.com',
  /* Invented trade-publication titles. Mastheads are proper nouns and stay in
     Latin script in every locale, like the competitor company names. */
  'Industrial Distribution',
  'Modern Supply Chain',
  'Fastener Technology',
  'Plant Engineering',
  'Search Console',
  'Google Analytics',
  'Google Ads',
  'Northwind Supply',
  'Kestrel Industrial',
  'Meridian Supply Co',
  'Atlas Trade Group',
  'Halvorsen Industrial',
]

const STRIP_PHRASES = new RegExp(PHRASES.join('|'), 'g')

/* Technical identifiers that stay Latin inside translated prose — API names,
   file formats, the storage API the legal page has to name precisely. */
const NOUNS =
  'GeoRepute|GINTEX|Gintex|Google|ChatGPT|Claude|Gemini|Perplexity|Copilot|Grok|GEON|NASA|Unsplash|copyup\\.ai|onlineperception\\.ai|Northwind|Kestrel|Meridian|Atlas|Halvorsen|Industrial|Supply|Trade|Group|Co|Inc|Analytics|localStorage|CSS|SVG|MDX|HTML|JSON|API|URL|CRM|MRO|SEO|CPC|AI|Ads|Intl'

const ONLY_NOUN = new RegExp(`^(?:${NOUNS}|Northwind Supply|Google Ads)$`)
const STRIP_NOUNS = new RegExp(`\\b(?:${NOUNS})\\b`, 'g')

async function render(target) {
  let res
  try {
    res = await fetch(target)
  } catch (error) {
    console.error(`CANNOT REACH ${target} — is the server running?`)
    console.error(String(error))
    process.exit(1)
  }
  const html = await res.text()

  /* A failed render has no English on it either, and "0 segments remaining" is
     exactly what a 500 looks like through this script. Refuse to report. */
  if (!res.ok) {
    console.error(`FETCH FAILED — ${res.status} ${res.statusText} at ${target}`)
    process.exit(1)
  }
  if (html.length < 20000) {
    console.error(
      `SUSPICIOUSLY SMALL PAGE — ${html.length} bytes at ${target}. Not a real render.`,
    )
    process.exit(1)
  }
  return html
}

/** Every user-visible text segment on a page. */
function segmentsOf(html) {
  /* Drop everything that is not visible prose. Scripts go first and matter
     most: the RSC flight payload embedded there contains the English source of
     every translated string, and counting it would make the number
     meaningless. */
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

  const out = new Set()
  for (const raw of [...text.split('\n'), ...attrs]) {
    const s = raw.replace(/&[a-z]+;/g, ' ').replace(/\s+/g, ' ').trim()
    if (s.length < 2) continue
    if (!/[A-Za-z]{2,}/.test(s)) continue
    if (ONLY_NOUN.test(s)) continue

    /* Public asset paths are displayed deliberately — they tell whoever is
       filling a screenshot slot exactly where the file goes. */
    if (/^public\s*\/screens\//.test(s)) continue

    /* What survives removing allowed nouns, digits and punctuation is the part
       that carries actual words. */
    const stripped = s
      .replace(STRIP_PHRASES, '')
      .replace(STRIP_NOUNS, '')
      .replace(/[\d\s%$–—→←·.,:/()|-]+/g, '')
    if (!/[A-Za-z]{2,}/.test(stripped)) continue

    out.add(s)
  }
  return out
}

const html = await render(url)
const found = segmentsOf(html)

let list
let label

if (baseline) {
  /* DIFF MODE. A segment is untranslated when the localized page shows the
     byte-identical string English shows. Anything the two pages do not share
     has been through the translator, whatever alphabet it came out in. */
  const english = segmentsOf(await render(baseline))
  list = [...found].filter((s) => english.has(s))
  label = 'SEGMENTS IDENTICAL TO ENGLISH'
} else {
  /* SCRIPT MODE. Everything reaching here is Latin text, so on a non-Latin
     locale it is by definition untranslated. */
  list = [...found]
  label = 'ENGLISH SEGMENTS REMAINING'
}

list.sort((a, b) => b.length - a.length)

console.log(`URL: ${url}`)
if (baseline) console.log(`BASELINE: ${baseline}`)
console.log(`${label}: ${list.length}`)
console.log(`WORDS: ${list.reduce((n, s) => n + s.split(/\s+/).length, 0)}`)
console.log('')
list.forEach((s) => console.log(JSON.stringify(s)))
