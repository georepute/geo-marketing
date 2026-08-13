import { readFileSync } from 'node:fs'
import { execSync } from 'node:child_process'

/* ============================================================================
   Which t() keys a locale overlay is still missing.

   Complements scripts/i18n-audit.mjs. The audit says what the PAGE shows;
   this says what the CODE asks for. Use the audit as the measure of done and
   this to find the keys to write.

   USAGE
     node scripts/i18n-keys.mjs <locale> [pathGlobFragment ...]
     node scripts/i18n-keys.mjs ar
     node scripts/i18n-keys.mjs ar components/home app/

   With no path fragments it scans every app/, components/ and lib/ source
   file, which is the right default once a locale is past the home page.
   ========================================================================= */

const locale = process.argv[2]
if (!locale) {
  console.error('usage: node scripts/i18n-keys.mjs <locale> [path ...]')
  process.exit(2)
}
const filters = process.argv.slice(3)

/* git ls-files rather than a directory walk: it respects .gitignore, so
   node_modules and .next never appear. */
const all = execSync('git ls-files app components lib', { encoding: 'utf8' })
  .split('\n')
  .filter((f) => /\.(ts|tsx)$/.test(f))
  .filter((f) => !f.includes('/i18n/content/'))
  .filter((f) => (filters.length ? filters.some((p) => f.includes(p)) : true))

/* t("…") and t('…'), including calls whose template runs across lines. */
const KEY = /\bt\(\s*(?:"((?:[^"\\]|\\.)*)"|'((?:[^'\\]|\\.)*)')/g

const keys = new Map() // key -> Set of files
for (const f of all) {
  let src
  try {
    src = readFileSync(f, 'utf8')
  } catch {
    continue
  }
  for (const m of src.matchAll(KEY)) {
    const key = (m[1] ?? m[2]).replace(/\\'/g, "'").replace(/\\"/g, '"')
    if (!keys.has(key)) keys.set(key, new Set())
    keys.get(key).add(f)
  }
}

let overlay
try {
  overlay = readFileSync(`lib/i18n/content/${locale}.ts`, 'utf8')
} catch {
  console.error(`No overlay at lib/i18n/content/${locale}.ts`)
  process.exit(1)
}

/* Substring test against the source, not a parse: the overlay is a plain
   object literal and a key is present iff its exact text appears in it. */
const missing = [...keys.keys()].filter((k) => !overlay.includes(k))

console.log(`LOCALE        : ${locale}`)
console.log(`files scanned : ${all.length}`)
console.log(`t() keys      : ${keys.size}`)
console.log(`translated    : ${keys.size - missing.length}`)
console.log(`MISSING       : ${missing.length}`)
console.log('')
for (const key of missing.sort((a, b) => b.length - a.length)) {
  console.log(JSON.stringify(key))
}
