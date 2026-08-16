import { readFileSync } from 'node:fs'

/* ============================================================================
   Keys one content overlay has that another lacks.

   The fast route for a new locale: a finished overlay already names every
   string the seed and the components need, so porting its key set across is
   most of the work. Run scripts/i18n-audit.mjs afterwards to find whatever
   the page still shows — that remains the measure of done.

   USAGE
     node scripts/i18n-port.mjs <from> <to>
     node scripts/i18n-port.mjs he ru
     node scripts/i18n-port.mjs lib/i18n/content/he.ts lib/i18n/content/ru.ts

   Output is one JSON-quoted key per line on stdout, counts on stderr, so it
   pipes cleanly:  node scripts/i18n-port.mjs he ru > todo.txt
   ========================================================================= */

const resolve = (arg) =>
  arg.includes('/') || arg.endsWith('.ts') ? arg : `lib/i18n/content/${arg}.ts`

const [fromArg, toArg] = process.argv.slice(2)
if (!fromArg || !toArg) {
  console.error('usage: node scripts/i18n-port.mjs <fromLocale> <toLocale>')
  console.error('   eg: node scripts/i18n-port.mjs he ru')
  process.exit(2)
}

/* Top-level keys only — two-space indent. Nested objects do not occur in an
   overlay, which is a flat Record<string, string> by construction. */
function keysOf(file) {
  let text
  try {
    text = readFileSync(file, 'utf8')
  } catch {
    console.error(`cannot read ${file}`)
    process.exit(1)
  }
  const keys = []
  for (const line of text.split(/\r?\n/)) {
    const single = line.match(/^\s{2}'((?:[^'\\]|\\.)*)':/)
    if (single) {
      keys.push(single[1].replace(/\\'/g, "'"))
      continue
    }
    /* A source string containing an apostrophe is written with double quotes
       rather than escaped. Reading only single-quoted keys made this script
       report `missing: 0` on a locale that was in fact missing every one of
       them — a silent under-count, which is the worst kind. */
    const double = line.match(/^\s{2}"((?:[^"\\]|\\.)*)":/)
    if (double) {
      keys.push(double[1].replace(/\\"/g, '"'))
      continue
    }
    const bare = line.match(/^\s{2}([A-Za-z_$][\w$]*):/)
    if (bare) keys.push(bare[1])
  }
  return keys
}

const fromFile = resolve(fromArg)
const toFile = resolve(toArg)

const from = keysOf(fromFile)
const to = new Set(keysOf(toFile))
const missing = from.filter((k) => !to.has(k))

console.error(`${fromFile}: ${from.length} keys`)
console.error(`${toFile}: ${to.size} keys`)
console.error(`missing: ${missing.length}`)
missing.forEach((k) => console.log(JSON.stringify(k)))
