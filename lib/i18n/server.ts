import { locale as localeParam } from 'next/root-params'
import { DEFAULT_LOCALE, isLocale, localeConfig, type Locale } from './config'
import { dictionaryFor } from './dictionaries'
import type { Dictionary } from './types'

/* ============================================================================
   The server-side entry point for locale-aware rendering.

   `next/root-params` exposes the `[locale]` segment to any Server Component
   without prop drilling it through thirty files. The export name is generated
   from the folder name, so `app/[locale]` gives us `locale`.

   Note the restrictions this carries (Next 16.3): Server Components only —
   not Client Components, not Server Actions, not Route Handlers. Client
   Components get the dictionary from lib/i18n/context.tsx, which the root
   layout seeds from here.
   ========================================================================= */

/** The active locale, falling back to English outside a localized route. */
export async function getLocale(): Promise<Locale> {
  const value = await localeParam()
  return isLocale(value) ? value : DEFAULT_LOCALE
}

/** The active locale's dictionary, English merged under any translation. */
export async function getDictionary(): Promise<Dictionary> {
  return dictionaryFor(await getLocale())
}

/** Locale plus its dictionary and direction, for a layout that needs all three. */
export async function getI18n(): Promise<{
  locale: Locale
  dir: 'ltr' | 'rtl'
  intl: string
  dict: Dictionary
}> {
  const locale = await getLocale()
  const config = localeConfig(locale)
  return {
    locale,
    dir: config.dir,
    intl: config.intl,
    dict: await dictionaryFor(locale),
  }
}
