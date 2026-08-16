import { copy } from '@/lib/copy/en'
import { mergeDictionary } from './merge'
import { DEFAULT_LOCALE, isLocale, type Locale } from './config'
import type { Dictionary, DictionaryMeta, PartialDictionary } from './types'

/* ============================================================================
   Dictionary loading.

   Server-side only in practice — these run in Server Components and in the
   scripts. Client Components receive the resolved dictionary through
   lib/i18n/context.tsx instead, because a Client Component cannot read a root
   parameter.

   Each overlay is a dynamic import, so a build only pays for the locales it
   renders and English never carries the other six into its bundle.
   ========================================================================= */

type Overlay = { dictionary: PartialDictionary; meta: DictionaryMeta }

const OVERLAYS: Record<Exclude<Locale, 'en'>, () => Promise<Overlay>> = {
  he: () => import('./dictionaries/he'),
  ar: () => import('./dictionaries/ar'),
  ru: () => import('./dictionaries/ru'),
  fr: () => import('./dictionaries/fr'),
  es: () => import('./dictionaries/es'),
  pt: () => import('./dictionaries/pt'),
}

/** English is the schema, so it needs no overlay and no merge. */
export async function dictionaryFor(locale: string): Promise<Dictionary> {
  if (!isLocale(locale) || locale === DEFAULT_LOCALE) return copy
  const { dictionary } = await OVERLAYS[locale]()
  return mergeDictionary(copy, dictionary)
}

export async function metaFor(locale: string): Promise<DictionaryMeta> {
  if (!isLocale(locale) || locale === DEFAULT_LOCALE) {
    return { reviewed: true, notes: 'Source language.' }
  }
  const { meta } = await OVERLAYS[locale]()
  return meta
}

export async function overlayFor(locale: string): Promise<PartialDictionary> {
  if (!isLocale(locale) || locale === DEFAULT_LOCALE) return copy
  const { dictionary } = await OVERLAYS[locale]()
  return dictionary
}
