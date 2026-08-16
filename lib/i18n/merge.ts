import type { Dictionary, PartialDictionary } from './types'

/* ============================================================================
   Overlay a partial translation onto the English dictionary.

   Kept in its own module, free of server-only imports, so both the server
   loader and the tests can use it.
   ========================================================================= */

function mergeValue(base: unknown, override: unknown): unknown {
  /* An absent key means "not translated yet" — keep English. An explicitly
     empty string is also treated as absent, because that is what a
     half-filled scaffold looks like and rendering a blank headline is worse
     than rendering an English one. */
  if (override === undefined || override === null || override === '') {
    return base
  }

  /* ARRAYS SPLIT BY WHAT THEY HOLD.

     An array of STRINGS is prose — a list of bullets, a set of verbs. A
     translator handing back four of five means the fifth was dropped, and
     splicing English into position five would hide that. Replaced wholesale.

     An array of OBJECTS is structure: navigation groups, loop stages,
     audience cards. Those objects carry `href` and `id` alongside their
     labels, and none of that is translatable. Replacing wholesale would force
     every language to restate every route, so one typo in one dictionary
     would break navigation in that language only — the exact class of bug
     nobody finds until a customer does. Merged element-wise by index, so a
     translation supplies labels and inherits the wiring. */
  if (Array.isArray(base)) {
    if (!Array.isArray(override)) return base

    const holdsObjects = base.some(
      (item) => typeof item === 'object' && item !== null,
    )
    if (!holdsObjects) return override

    return base.map((item, index) =>
      index < override.length ? mergeValue(item, override[index]) : item,
    )
  }

  if (
    typeof base === 'object' &&
    base !== null &&
    typeof override === 'object' &&
    !Array.isArray(override)
  ) {
    const out: Record<string, unknown> = { ...(base as Record<string, unknown>) }
    for (const [key, value] of Object.entries(
      override as Record<string, unknown>,
    )) {
      /* Keys absent from English are ignored rather than added. A stray key in
         a translation file is a typo or a stale name; letting it through would
         mean the typo silently does nothing and is never noticed. */
      if (key in out) out[key] = mergeValue(out[key], value)
    }
    return out
  }

  /* Only substitute like for like. A translator handing back a number where a
     string belongs should not be able to change the shape of the dictionary. */
  return typeof override === typeof base ? override : base
}

export function mergeDictionary(
  base: Dictionary,
  override: PartialDictionary,
): Dictionary {
  return mergeValue(base, override) as Dictionary
}

/* ---------------------------------------------------------------------------
   Translation coverage, for reporting rather than for rendering.
   ------------------------------------------------------------------------ */

function countLeaves(value: unknown): number {
  if (Array.isArray(value)) return value.length
  if (typeof value === 'object' && value !== null) {
    return Object.values(value).reduce<number>(
      (sum, child) => sum + countLeaves(child),
      0,
    )
  }
  return 1
}

function countTranslated(base: unknown, override: unknown): number {
  if (override === undefined || override === null || override === '') return 0

  if (Array.isArray(base)) {
    return Array.isArray(override) ? override.length : 0
  }

  if (typeof base === 'object' && base !== null && typeof override === 'object') {
    let total = 0
    for (const [key, value] of Object.entries(
      override as Record<string, unknown>,
    )) {
      const baseChild = (base as Record<string, unknown>)[key]
      if (baseChild !== undefined) total += countTranslated(baseChild, value)
    }
    return total
  }

  return typeof override === typeof base ? 1 : 0
}

export function coverage(
  base: Dictionary,
  override: PartialDictionary,
): { translated: number; total: number; percent: number } {
  const total = countLeaves(base)
  const translated = countTranslated(base, override)
  return {
    translated,
    total,
    percent: total === 0 ? 100 : Math.round((translated / total) * 100),
  }
}
