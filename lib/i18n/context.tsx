'use client'

import { createContext, useContext, useMemo } from 'react'
import { DEFAULT_LOCALE, localeConfig, localePath, type Locale } from './config'
import { copy } from '@/lib/copy/en'
import type { Dictionary } from './types'

/* ============================================================================
   Locale for Client Components.

   `next/root-params` is Server-Component-only, so the root layout resolves the
   locale and its dictionary once on the server and seeds this provider. Client
   Components read it from here rather than each fetching their own.

   The whole dictionary crosses the boundary. It is UI copy only — the seeded
   demonstration prose lives in lib/seed and is not part of it — so this is a
   few kilobytes serialized once per document, which buys the simplicity of
   every client component reading the same object the server rendered from.
   ========================================================================= */

export interface I18nValue {
  locale: Locale
  dir: 'ltr' | 'rtl'
  intl: string
  dict: Dictionary
}

const FALLBACK: I18nValue = {
  locale: DEFAULT_LOCALE,
  dir: 'ltr',
  intl: localeConfig(DEFAULT_LOCALE).intl,
  dict: copy,
}

const I18nContext = createContext<I18nValue>(FALLBACK)

export function I18nProvider({
  value,
  children,
}: {
  value: I18nValue
  children: React.ReactNode
}) {
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

/**
 * Defaults to English rather than throwing when no provider is present.
 *
 * The internal design-system routes (/kitchen-sink, /debug) sit outside the
 * localized tree on purpose, and a hook that threw would make every shared
 * component unusable there for no benefit.
 */
export function useI18n(): I18nValue {
  return useContext(I18nContext)
}

export function useDict(): Dictionary {
  return useI18n().dict
}

/** Prefixes an internal path with the active locale. See `localePath`. */
export function useLocalePath(): (path: string) => string {
  const { locale } = useI18n()
  return useMemo(() => (path: string) => localePath(path, locale), [locale])
}
