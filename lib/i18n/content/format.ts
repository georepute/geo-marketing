import type { ContentOverlay } from './index'

/* ============================================================================
   The pure half of the content translator.

   Kept apart from translator.ts because that module reaches for
   `next/root-params`, which cannot be imported into a Client Component even
   transitively — and the client provider needs `makeTranslate`. Splitting the
   pure function out is what keeps the server-only import off the client graph.
   ========================================================================= */

export type Translate = (
  template: string,
  vars?: Record<string, string | number>,
) => string

function interpolate(
  text: string,
  vars?: Record<string, string | number>,
): string {
  if (!vars) return text
  return text.replace(/\{(\w+)\}/g, (whole, key: string) =>
    key in vars ? String(vars[key]) : whole,
  )
}

/**
 * Look a template up in the overlay, then substitute its tokens.
 *
 * Keying on the template rather than on the finished sentence is what lets one
 * entry cover every value — and lets a translator move {pct} to wherever the
 * target language needs it, which in Hebrew and Arabic is frequently not where
 * English put it.
 */
export function makeTranslate(overlay: ContentOverlay): Translate {
  return (template, vars) => interpolate(overlay[template] ?? template, vars)
}
