import type { copy } from '@/lib/copy/en'

/* ============================================================================
   Dictionary shape.

   English is not "one of the translations" — it is the schema. lib/copy/en.ts
   remains the single source of truth for what strings exist and is still
   guarded verbatim against brief §19 by tests/copy-fidelity.test.ts. Every
   other locale is a PARTIAL overlay on that shape.

   WHY PARTIAL
   Requirements doc §8 asks for seven languages; six of them have no human
   translation yet. A partial overlay means an untranslated key renders its
   English text instead of a missing-key placeholder or a crash. The site is
   therefore shippable at any point on the translation curve, and a translator
   delivering one section at a time sees it go live one section at a time.
   ========================================================================= */

export type Dictionary = typeof copy

/**
 * Widen a literal back to its primitive.
 *
 * `copy` is declared `as const`, so every string in it has a literal type —
 * `signIn` is not `string`, it is `'Sign In'`. Without this, a partial
 * dictionary would demand that each translated value EQUAL its English
 * literal, and `signIn: 'כניסה'` would be a type error. The const assertion
 * is what makes the copy-fidelity test able to check §19 verbatim, so it
 * stays; the widening happens here instead.
 */
type Widen<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : T

/**
 * Recursively optional, with literals widened. Arrays are replaced wholesale
 * rather than merged by index — a translator handing back four of five list
 * items means the fifth was dropped deliberately or by mistake, and silently
 * splicing English into position five would hide both cases.
 */
export type PartialDictionary<T = Dictionary> = T extends readonly (infer U)[]
  ? readonly PartialDictionary<U>[]
  : T extends object
    ? { readonly [K in keyof T]?: PartialDictionary<T[K]> }
    : Widen<T>

/**
 * Marks a scaffolded dictionary that has not been through human translation.
 *
 * Read at build time by tests/i18n.test.ts and printed by `npm run i18n`, so
 * the state of the translation effort is a fact about the repository rather
 * than something tracked in a spreadsheet.
 */
export interface DictionaryMeta {
  /** `false` until a human translator has reviewed the file. */
  reviewed: boolean
  /** Anything the translator or reviewer needs to know. */
  notes?: string
}
