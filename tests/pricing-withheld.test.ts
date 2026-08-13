import { describe, expect, it } from 'vitest'
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { flags } from '@/lib/flags'

/* ============================================================================
   REQUIREMENTS DOC §4 and §7 — public pricing is withheld.

   "Do not delete the pricing functionality or code. Just hide it from the
   public website until I provide the final GeoRepute pricing structure."

   Two things have to stay true, and both are easy to break by accident:

     1. NOTHING LEAKS. No price reaches a public page while the flag is off.
        Guarded by pinning the choke points (Price, BuyButton, the gated
        routes) and by scanning every screen for a currency figure.

     2. NOTHING IS LOST. The pricing code still exists and still compiles, so
        flipping the flag brings the whole surface back rather than revealing
        that it was quietly deleted.

   If this file fails after a deliberate decision to publish pricing, the fix
   is to set NEXT_PUBLIC_SHOW_PRICING=true — not to weaken the test.
   ========================================================================= */

const ROOT = join(import.meta.dirname, '..')

function walk(dir: string, files: string[] = []): string[] {
  let entries: string[]
  try {
    entries = readdirSync(dir)
  } catch {
    return files
  }
  for (const entry of entries) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) walk(full, files)
    else if (/\.tsx?$/.test(full)) files.push(full)
  }
  return files
}

const read = (file: string) => readFileSync(file, 'utf8')
const relative = (file: string) => file.slice(ROOT.length + 1)

/**
 * Source with comments removed.
 *
 * The scans below look for things that must not reach a rendered page. A
 * comment never reaches one — and several files in this codebase document
 * exactly the pattern they forbid, quoting a currency figure or a dynamic
 * env lookup in order to warn against it. Scanning raw text flags those
 * warnings as violations, which teaches the next person to delete the
 * warning rather than fix the code.
 *
 * `//` preceded by `:` is left alone so a URL survives intact.
 */
function code(source: string): string {
  return source.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/.*$/gm, '$1')
}

const screens = [
  ...walk(join(ROOT, 'app')),
  ...walk(join(ROOT, 'components')),
]

/* The only files permitted to render or compute a catalogue figure. Every one
   of them is either gated by the flag or is the gate itself. */
const PRICING_SURFACES = [
  join('components', 'commerce', 'Price.tsx'),
  join('components', 'commerce', 'BuyButton.tsx'),
  join('app', '[locale]', '(marketing)', 'pricing', 'page.tsx'),
  join('app', '[locale]', '(commerce)', 'checkout', 'CheckoutFlow.tsx'),
  join('app', '[locale]', '(commerce)', 'checkout', 'page.tsx'),
  join('app', '[locale]', 'kitchen-sink'),
  join('app', '[locale]', 'debug'),
]

const isPricingSurface = (file: string) =>
  PRICING_SURFACES.some((prefix) => relative(file).startsWith(prefix))

describe('Pricing is withheld by default', () => {
  it('the flag is off unless the environment turns it on', () => {
    expect(
      flags.pricing,
      'Public pricing must default to hidden. Doc §7: "Do not finalize or ' +
        'publicly display GeoRepute pricing."',
    ).toBe(false)
  })

  it('the flag is read as a literal so Next can inline it', () => {
    /* A dynamic lookup is not substituted at build time and evaluates to
       undefined in the browser — which would fall back to the default and
       silently ignore an operator who did turn pricing on. */
    const source = code(read(join(ROOT, 'lib', 'flags.ts')))
    expect(source).toContain('process.env.NEXT_PUBLIC_SHOW_PRICING')
    expect(source).not.toMatch(/process\.env\[/)
  })
})

describe('Every price passes through a guarded choke point', () => {
  it('Price renders nothing while the flag is off', () => {
    const source = read(join(ROOT, 'components', 'commerce', 'Price.tsx'))
    expect(source).toMatch(/if \(!flags\.pricing\) return null/)
  })

  it('BuyButton routes to the briefing instead of checkout', () => {
    const source = read(join(ROOT, 'components', 'commerce', 'BuyButton.tsx'))
    expect(source).toMatch(/if \(!flags\.pricing\)/)
    expect(source).toContain('/briefing')
  })

  it('the pricing page and checkout 404 while the flag is off', () => {
    for (const route of [
      join('app', '[locale]', '(marketing)', 'pricing', 'page.tsx'),
      join('app', '[locale]', '(commerce)', 'checkout', 'page.tsx'),
      join('app', '[locale]', '(commerce)', 'checkout', 'success', 'page.tsx'),
    ]) {
      const source = read(join(ROOT, route))
      expect(source, route).toMatch(/if \(!flags\.pricing\) notFound\(\)/)
    }
  })
})

describe('No public screen prints a currency figure', () => {
  it('catalogPrice is only called from a gated surface', () => {
    const offenders = screens
      .filter((file) => !isPricingSurface(file))
      .filter((file) => code(read(file)).includes('catalogPrice('))
      .map(relative)

    expect(
      offenders,
      'catalogPrice formats a catalogue figure. Call it only from a surface ' +
        'gated by flags.pricing, or render <Price>, which guards itself.',
    ).toEqual([])
  })

  it('no screen hardcodes a currency amount', () => {
    const offenders: string[] = []

    for (const file of screens) {
      if (isPricingSurface(file)) continue
      /* A literal dollar figure in JSX or a string — `$1,400`, `$190`. The
         `${` of a template literal is excluded by requiring a digit. */
      for (const match of code(read(file)).match(/\$\d[\d,]*/g) ?? []) {
        offenders.push(`${relative(file)} — ${match}`)
      }
    }

    expect(
      offenders,
      'A hardcoded currency amount bypasses the pricing flag entirely.',
    ).toEqual([])
  })
})

describe('The pricing code still exists', () => {
  it('every withheld surface is still present and non-trivial', () => {
    /* Doc §4 is explicit that this is a hide, not a delete. A stub left
       behind after someone "cleaned up" would pass the leak tests above
       while quietly destroying the work. */
    for (const [route, marker] of [
      [join('app', '[locale]', '(marketing)', 'pricing', 'page.tsx'), 'ADD_ONS'],
      [join('app', '[locale]', '(commerce)', 'checkout', 'CheckoutFlow.tsx'), 'catalogPrice'],
      [join('components', 'commerce', 'Price.tsx'), 'catalogPrice'],
    ] as const) {
      const source = read(join(ROOT, route))
      expect(source, route).toContain(marker)
      expect(source.length, route).toBeGreaterThan(600)
    }
  })

  it('the plans and products still carry their figures in the data layer', async () => {
    const { getPlans, getProducts } = await import('@/lib/api/client')
    const [plans, products] = await Promise.all([getPlans(), getProducts()])

    expect(plans.data.length).toBeGreaterThan(0)
    for (const plan of plans.data) expect(plan.monthlyUsd).toBeGreaterThan(0)
    for (const product of products.data.entry) {
      expect(product.priceUsd).toBeGreaterThan(0)
    }
  })
})
