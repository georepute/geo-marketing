/* ============================================================================
   LOCALES — requirements doc §8.

   "GeoRepute is a global intelligence platform. The website must be built as
   a global, multilingual product from day one."

   ADDING A LANGUAGE
   Append an entry to LOCALES and create the matching dictionary in
   lib/i18n/dictionaries/. Nothing else needs to change: routing, the
   switcher, hreflang, the sitemap and static generation all derive from this
   array. That is the "scalable so additional languages can be added without
   rebuilding the website" requirement, discharged in one file.

   This module is imported by Client Components, Server Components and the
   proxy alike, so it must stay free of server-only imports.
   ========================================================================= */

export interface LocaleConfig {
  /** BCP 47 tag. Also the URL segment: /he/marketplace. */
  code: string
  /** Written in the language itself — a switcher listing "Hebrew" in English
      is no use to someone who cannot read the current page. */
  endonym: string
  /** English name, for `aria-label` and internal tooling. */
  english: string
  /** Text direction. Drives `dir` on <html> and every logical property. */
  dir: 'ltr' | 'rtl'
  /**
   * Locale passed to Intl for dates and numbers. Kept separate from `code`
   * because the two legitimately diverge — Arabic numerals in an Arabic
   * layout are usually wanted in Latin form for financial figures, which is
   * what `-u-nu-latn` pins.
   */
  intl: string
}

/* `as const satisfies` rather than a plain type annotation: the annotation
   would widen every `code` to `string` and take `Locale` down with it, which
   silently removes the compiler's ability to catch a mistyped locale. */
export const LOCALES = [
  { code: 'en', endonym: 'English', english: 'English', dir: 'ltr', intl: 'en-US' },
  { code: 'he', endonym: 'עברית', english: 'Hebrew', dir: 'rtl', intl: 'he-IL' },
  {
    code: 'ar',
    endonym: 'العربية',
    english: 'Arabic',
    dir: 'rtl',
    /* Latin digits: the product is read by executives comparing figures
       across languages, and mixed numeral systems make that harder. */
    intl: 'ar-AE-u-nu-latn',
  },
  { code: 'ru', endonym: 'Русский', english: 'Russian', dir: 'ltr', intl: 'ru-RU' },
  { code: 'fr', endonym: 'Français', english: 'French', dir: 'ltr', intl: 'fr-FR' },
  { code: 'es', endonym: 'Español', english: 'Spanish', dir: 'ltr', intl: 'es-ES' },
  {
    code: 'pt',
    endonym: 'Português',
    english: 'Portuguese',
    dir: 'ltr',
    intl: 'pt-PT',
  },
] as const satisfies readonly LocaleConfig[]

export type Locale = (typeof LOCALES)[number]['code']

/* `as const`, not `: Locale`. The annotation would widen this to the full
   union and stop TypeScript narrowing `locale !== DEFAULT_LOCALE` down to the
   six locales that actually have an overlay — which is exactly the check the
   dictionary loader depends on. */
export const DEFAULT_LOCALE = 'en' as const

export const LOCALE_CODES: readonly Locale[] = LOCALES.map((l) => l.code)

export function isLocale(value: string | undefined): value is Locale {
  return value !== undefined && (LOCALE_CODES as readonly string[]).includes(value)
}

export function localeConfig(code: string): LocaleConfig {
  return LOCALES.find((l) => l.code === code) ?? LOCALES[0]!
}

export function localeDir(code: string): 'ltr' | 'rtl' {
  return localeConfig(code).dir
}

/* ---------------------------------------------------------------------------
   URL helpers.

   Every internal href on the site is built through `localePath` so a link
   cannot silently drop the visitor back into English. Doc §8: "The selected
   language must remain consistent while navigating between pages."
   ------------------------------------------------------------------------ */

/** `/marketplace` + `he` → `/he/marketplace`. Idempotent and root-safe. */
export function localePath(path: string, locale: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`
  const stripped = stripLocale(clean)
  return stripped === '/' ? `/${locale}` : `/${locale}${stripped}`
}

/** `/he/marketplace` → `/marketplace`. Leaves un-prefixed paths untouched. */
export function stripLocale(path: string): string {
  const segments = path.split('/')
  /* segments[0] is the empty string before the leading slash. */
  if (isLocale(segments[1])) {
    const rest = segments.slice(2).join('/')
    return rest === '' ? '/' : `/${rest}`
  }
  return path
}

/** The locale a pathname is currently under, or the default. */
export function localeFromPath(path: string): Locale {
  const segment = path.split('/')[1]
  return isLocale(segment) ? segment : DEFAULT_LOCALE
}
