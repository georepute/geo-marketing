import { describe, expect, it } from 'vitest'
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import {
  LOCALES,
  LOCALE_CODES,
  DEFAULT_LOCALE,
  isLocale,
  localePath,
  stripLocale,
  localeFromPath,
} from '@/lib/i18n/config'
import { mergeDictionary, coverage } from '@/lib/i18n/merge'
import { dictionaryFor, metaFor } from '@/lib/i18n/dictionaries'
import { copy } from '@/lib/copy/en'

/* ============================================================================
   REQUIREMENTS DOC §8 — multilingual, RTL, consistent across navigation.

   The i18n failures worth guarding are the ones nobody notices, because
   noticing them requires reading a language the team does not read. A missing
   locale prefix on one link, a dictionary whose shape drifted from English, a
   switcher that drops you on the home page — all of these look fine in
   English and are invisible in Hebrew until a customer finds them.
   ========================================================================= */

const ROOT = join(import.meta.dirname, '..')

function walk(dir: string, files: string[] = []): string[] {
  let entries: string[]
  try {
    entries = readdirSync(dir)
  } catch {
    return files
  }
  for (const entry of entries) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) walk(full, files)
    else if (/\.tsx?$/.test(full)) files.push(full)
  }
  return files
}

const read = (file: string) => readFileSync(file, 'utf8')
const relative = (file: string) => file.slice(ROOT.length + 1)

/** Source with comments stripped — a comment never reaches a rendered page,
    and several files here document the very pattern they forbid. */
const code = (source: string) =>
  source.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/.*$/gm, '$1')

const appFiles = walk(join(ROOT, 'app'))
const componentFiles = walk(join(ROOT, 'components'))

describe('Locale configuration', () => {
  it('ships the seven languages the doc names', () => {
    expect(LOCALE_CODES).toEqual(['en', 'he', 'ar', 'ru', 'fr', 'es', 'pt'])
  })

  it('marks Hebrew and Arabic as right-to-left', () => {
    const rtl = LOCALES.filter((l) => l.dir === 'rtl').map((l) => l.code)
    expect(rtl).toEqual(['he', 'ar'])
  })

  it('every locale carries an endonym in its own script', () => {
    for (const locale of LOCALES) {
      expect(locale.endonym.length, locale.code).toBeGreaterThan(0)
      expect(locale.intl, locale.code).toContain(locale.code)
    }
  })

  it('each locale has a dictionary module', () => {
    for (const code of LOCALE_CODES) {
      if (code === DEFAULT_LOCALE) continue
      const file = join(ROOT, 'lib', 'i18n', 'dictionaries', `${code}.ts`)
      expect(existsSync(file), `missing dictionary for ${code}`).toBe(true)
    }
  })
})

describe('Path helpers', () => {
  it('prefixes and strips symmetrically', () => {
    for (const code of LOCALE_CODES) {
      for (const path of ['/', '/marketplace', '/engines/ai-recognition']) {
        expect(stripLocale(localePath(path, code))).toBe(path)
      }
    }
  })

  it('is idempotent — re-prefixing does not stack locales', () => {
    /* The bug this catches: <Link> prefixing an href that a parent already
       prefixed, producing /he/he/marketplace. */
    const once = localePath('/marketplace', 'he')
    expect(localePath(once, 'he')).toBe(once)
    expect(localePath(once, 'ar')).toBe('/ar/marketplace')
  })

  it('maps the root correctly rather than producing a trailing slash', () => {
    expect(localePath('/', 'he')).toBe('/he')
    expect(stripLocale('/he')).toBe('/')
  })

  it('leaves an unprefixed path alone and reads the locale back', () => {
    expect(stripLocale('/marketplace')).toBe('/marketplace')
    expect(localeFromPath('/ar/engines')).toBe('ar')
    expect(localeFromPath('/engines')).toBe(DEFAULT_LOCALE)
  })

  it('rejects things that only look like locales', () => {
    expect(isLocale('en-US')).toBe(false)
    expect(isLocale('EN')).toBe(false)
    expect(isLocale(undefined)).toBe(false)
    /* `/engines` must not be read as a locale segment. */
    expect(localeFromPath('/engines/ai-recognition')).toBe(DEFAULT_LOCALE)
  })
})

describe('Dictionary merging', () => {
  it('falls back to English for an untranslated key', async () => {
    const he = await dictionaryFor('he')
    expect(he.category).toBe(copy.category)
  })

  it('keeps the exact shape of English in every locale', async () => {
    /* A translation that added or dropped a key would make a component read
       `undefined` and render an empty headline in that language only. */
    const shape = (value: unknown): unknown =>
      Array.isArray(value)
        ? ['array', value.length]
        : typeof value === 'object' && value !== null
          ? Object.fromEntries(
              Object.entries(value).map(([k, v]) => [k, shape(v)]),
            )
          : typeof value

    const english = shape(copy)
    for (const code of LOCALE_CODES) {
      const dict = await dictionaryFor(code)
      expect(shape(dict), `${code} drifted from the English shape`).toEqual(
        english,
      )
    }
  })

  it('applies a translation that is present', () => {
    const merged = mergeDictionary(copy, {
      nav: { signIn: 'כניסה' },
    })
    expect(merged.nav.signIn).toBe('כניסה')
    /* Siblings untouched. */
    expect(merged.nav.startAnalysis).toBe(copy.nav.startAnalysis)
  })

  it('treats an empty string as untranslated rather than rendering a blank', () => {
    const merged = mergeDictionary(copy, { nav: { signIn: '' } })
    expect(merged.nav.signIn).toBe(copy.nav.signIn)
  })

  it('ignores a key English does not have', () => {
    const merged = mergeDictionary(copy, {
      nav: { notARealKey: 'x' },
    } as never)
    expect('notARealKey' in merged.nav).toBe(false)
  })

  it('reports coverage so translation progress is visible', () => {
    expect(coverage(copy, {}).percent).toBe(0)
    expect(coverage(copy, copy).percent).toBe(100)
  })

  it('flags every unreviewed locale', async () => {
    /* Not a failure — a record. These six are scaffolds awaiting human
       translation, and this test is where that fact is written down. */
    const unreviewed: string[] = []
    for (const code of LOCALE_CODES) {
      const meta = await metaFor(code)
      if (!meta.reviewed) unreviewed.push(code)
    }
    expect(unreviewed).toEqual(['he', 'ar', 'ru', 'fr', 'es', 'pt'])
  })
})

describe('Every route is locale-aware', () => {
  it('all routes live under app/[locale]', () => {
    /* Anything outside it renders without a locale, without the dictionary
       and — because the root layout is under [locale] — without <html>. */
    const outside = appFiles
      .map(relative)
      .filter(
        (file) =>
          !file.startsWith(join('app', '[locale]')) &&
          ![
            join('app', 'providers.tsx'),
            join('app', 'robots.ts'),
            join('app', 'sitemap.ts'),
            join('app', 'global-not-found.tsx'),
          ].includes(file),
      )

    expect(
      outside,
      'A page outside app/[locale] has no root layout and no locale.',
    ).toEqual([])
  })

  it('no component imports next/link directly', () => {
    /* next/link does not know about locales, so a raw <Link href="/x"> drops
       the visitor back into the default language mid-journey — invisible
       unless you are browsing in one of the other six. */
    const allowed = [
      join('components', 'i18n', 'Link.tsx'),
      join('components', 'i18n', 'LanguageSwitcher.tsx'),
    ]

    const offenders = [...appFiles, ...componentFiles]
      .filter((file) => !allowed.includes(relative(file)))
      .filter((file) => /from 'next\/link'/.test(read(file)))
      .map(relative)

    expect(
      offenders,
      "Import { Link } from '@/components/i18n/Link' instead — it carries " +
        'the active locale into the href.',
    ).toEqual([])
  })

  it('the root layout sets both lang and dir from the locale', () => {
    const layout = read(join(ROOT, 'app', '[locale]', 'layout.tsx'))
    expect(layout).toMatch(/lang=\{locale\}/)
    expect(layout).toMatch(/dir=\{dir\}/)
  })

  it('the root layout prerenders every locale', () => {
    const layout = read(join(ROOT, 'app', '[locale]', 'layout.tsx'))
    expect(layout).toContain('generateStaticParams')
    expect(layout).toContain('LOCALES.map')
  })
})

describe('RTL correctness', () => {
  const globals = readFileSync(join(ROOT, 'styles', 'globals.css'), 'utf8')

  it('numeric runs are isolated so figures do not reorder', () => {
    /* Without this the bidi algorithm rewrites "38 → 55" as "55 ← 38" in an
       RTL paragraph, inverting the meaning of every trend in the product. */
    expect(globals).toMatch(
      /\[dir='rtl'\] \[data-numeric\][\s\S]{0,160}unicode-bidi: isolate/,
    )
  })

  it('navigational arrows mirror', () => {
    expect(globals).toMatch(/\[dir='rtl'\][\s\S]{0,200}\.gr-arrow/)
    expect(globals).toMatch(/scale: -1 1/)
  })

  it('the layout uses logical properties rather than physical ones', () => {
    const offenders: string[] = []
    const physical =
      /className="[^"]*\b(ml|mr|pl|pr|border-l|border-r|rounded-l|rounded-r|text-left|text-right)-[a-z0-9.[\]/]+/g

    for (const file of [...appFiles, ...componentFiles]) {
      for (const match of read(file).match(physical) ?? []) {
        offenders.push(`${relative(file)} — ${match.slice(11, 60)}`)
      }
    }

    expect(
      offenders,
      'Use logical properties (ms/me, ps/pe, border-s/border-e, text-start/' +
        'text-end) so the layout mirrors under dir="rtl".',
    ).toEqual([])
  })
})

describe('The language switcher meets the doc', () => {
  const source = code(
    read(join(ROOT, 'components', 'i18n', 'LanguageSwitcher.tsx')),
  )

  it('stays on the current page instead of returning home', () => {
    /* Doc §8: language must persist across navigation. Being dumped on the
       home page for changing language is the failure that makes people give
       up on the other language entirely. */
    expect(source).toContain('stripLocale(pathname)')
    expect(source).toContain('localePath(bare')
  })

  it('renders real links so every translation is crawlable', () => {
    expect(source).toContain('hrefLang')
    expect(source).not.toMatch(/<select/)
  })

  it('offers every configured locale', () => {
    expect(source).toContain('LOCALES.map')
  })
})
