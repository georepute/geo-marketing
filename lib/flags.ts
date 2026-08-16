/* ============================================================================
   Feature flags.

   HIDE, NEVER DELETE. Requirements doc §4 and §7: public pricing is withheld
   until the final GeoRepute pricing structure exists, and every line of code
   that renders it must survive intact so re-enabling is a configuration
   change rather than a rebuild.

   WHY THE FULL NAME IS REPEATED
   Next.js inlines `NEXT_PUBLIC_*` variables at BUILD time by textual
   substitution of the literal `process.env.NEXT_PUBLIC_X` expression. A
   dynamic lookup — `process.env[name]`, or destructuring `process.env` first
   — is not substituted and silently evaluates to `undefined` in the browser.
   That is why this file spells each variable out rather than looping over a
   table of names.

   Because the value is baked in at build time, changing a flag requires a
   rebuild and redeploy, not just a restart.
   ========================================================================= */

/**
 * Parse a flag from the environment.
 *
 * Absent or empty falls back to the default rather than to `false`, so a
 * missing `.env` file cannot silently switch a surface off — the default
 * declared beside each flag is the single source of truth.
 */
function enabled(raw: string | undefined, fallback: boolean): boolean {
  if (raw === undefined || raw.trim() === '') return fallback
  const value = raw.trim().toLowerCase()
  return value === 'true' || value === '1' || value === 'on'
}

export const flags = {
  /**
   * Public pricing.
   *
   * Covers: the /pricing page, plan and add-on tables, one-time product
   * prices on marketplace and category pages, every buy control, and the
   * whole checkout flow.
   *
   * OFF until the final pricing structure is supplied.
   *
   *   To re-enable:  set NEXT_PUBLIC_SHOW_PRICING=true and rebuild.
   *   To verify:     /pricing returns a page instead of a 404, and the
   *                  "Pricing" item reappears in the primary navigation.
   */
  pricing: enabled(process.env.NEXT_PUBLIC_SHOW_PRICING, false),
} as const

export type Flags = typeof flags
