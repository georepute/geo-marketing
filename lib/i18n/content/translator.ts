import { contentFor } from './index'
import { makeTranslate, type Translate } from './format'
import { DEFAULT_LOCALE, isLocale } from '../config'

/* ============================================================================
   t() for Server Components — see ./format.ts for the mechanism, and
   ./client.tsx for the Client Component half.

   SERVER ONLY. `next/root-params` cannot be imported into a Client Component,
   even transitively, which is why the pure `makeTranslate` lives in
   format.ts and only this module reaches for the route parameter.
   ========================================================================= */

export type { Translate }

/**
 * Translator for the active locale.
 *
 * Falls back to identity outside a localized route, so sitemap.ts and
 * robots.ts keep working — they emit URLs, not prose.
 */
export async function getT(): Promise<Translate> {
  let locale: string = DEFAULT_LOCALE
  try {
    const params = await import('next/root-params')
    const value = await params.locale()
    if (isLocale(value)) locale = value
  } catch {
    /* not inside a [locale] route */
  }
  return makeTranslate(await contentFor(locale))
}
