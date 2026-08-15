import { DEFAULT_LOCALE, isLocale, type Locale } from '../config'

/* ============================================================================
   CONTENT TRANSLATION — the seeded demonstration prose.

   THE PROBLEM. Roughly nine thousand words of the site are not UI copy: they
   are the demonstration data in lib/seed — marketplace descriptions, readout
   prose, narratives, action plans, competitor context. Pages read those
   objects directly, so translating lib/copy/en.ts leaves them all in English.
   A Hebrew page with an English product catalogue is arguably worse than an
   English one.

   THE APPROACH. A translation memory keyed by the ENGLISH STRING ITSELF,
   applied by walking whatever the data layer returns and substituting any
   string that has an entry.

   Why keyed by source text rather than by a content id:

     · The twenty seed modules keep their shape. No restructuring, no id
       scheme to invent and maintain, no risk of an id drifting from the text
       it names.
     · A missing entry falls back to English by construction — the walk simply
       leaves the string alone.
     · What a translator receives is a flat English→target map, which is what
       translation tooling expects anyway.

   The trade-off is that one English string cannot have two different
   translations in two different contexts. In this content it never needs to;
   if that changes, the entry becomes a context-qualified key and the walk
   gains a path argument.
   ========================================================================= */

export type ContentOverlay = Readonly<Record<string, string>>

/* STATIC IMPORTS, DELIBERATELY.
 *
 * These were lazy — `he: () => import('./he')` — which is the obvious shape
 * for a per-locale resource. It cost three separate false readings: `next
 * dev` does not reliably invalidate a dynamically imported module, so an
 * overlay edited mid-session keeps serving its previous contents. The page
 * then shows English for the keys you just added while every older key
 * translates perfectly, which reads exactly like a bug in the lookup.
 *
 * Loading all six up front costs a few hundred kilobytes of strings in the
 * SERVER process only — this module is never in the client graph, because
 * the client provider takes the resolved overlay as a prop and imports only
 * the *type* from here. That is a price worth paying to make what the page
 * shows always match what the file says.
 */
import { content as he } from './he'
import { content as ar } from './ar'
import { content as ru } from './ru'
import { content as fr } from './fr'
import { content as es } from './es'
import { content as pt } from './pt'

const OVERLAYS: Record<Exclude<Locale, 'en'>, ContentOverlay> = {
  he,
  ar,
  ru,
  fr,
  es,
  pt,
}

/** Async purely to keep the call sites unchanged; nothing here awaits. */
export async function contentFor(locale: string): Promise<ContentOverlay> {
  if (!isLocale(locale) || locale === DEFAULT_LOCALE) return {}
  return OVERLAYS[locale]
}

/**
 * Substitute every translated string in an arbitrary value.
 *
 * Returns the input untouched when the overlay is empty, so English pays
 * nothing for this and never allocates a copy of the seed graph.
 */
export function translateContent<T>(value: T, overlay: ContentOverlay): T {
  if (Object.keys(overlay).length === 0) return value
  return walk(value, overlay) as T
}

function walk(value: unknown, overlay: ContentOverlay): unknown {
  if (typeof value === 'string') {
    return overlay[value] ?? value
  }

  if (Array.isArray(value)) {
    let changed = false
    const next = value.map((item) => {
      const w = walk(item, overlay)
      if (w !== item) changed = true
      return w
    })
    return changed ? next : value
  }

  if (value !== null && typeof value === 'object') {
    /* Dates and other exotics are returned as-is: the seed holds plain data,
       and cloning something with a prototype would quietly break it. */
    if (Object.getPrototypeOf(value) !== Object.prototype) return value

    let changed = false
    const next: Record<string, unknown> = {}
    for (const [key, child] of Object.entries(value)) {
      const w = walk(child, overlay)
      if (w !== child) changed = true
      next[key] = w
    }
    return changed ? next : value
  }

  return value
}
