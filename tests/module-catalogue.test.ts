import { describe, expect, it } from 'vitest'
import {
  INTELLIGENCE_CATEGORIES,
  INTELLIGENCE_MODULES,
  declaredSources,
  liveModuleCount,
  modulesForCategory,
  totalModuleCount,
} from '@/lib/seed/modules'
import { INTELLIGENCE_ENGINES } from '@/lib/seed/engines'
import { PRODUCTS } from '@/lib/seed/products'

/* ============================================================================
   THE CATALOGUE GUARD.

   A marketplace page is the single most likely place in a product for scope to
   be invented: a grid looks better with twelve cards than with nine, and a
   plausible-sounding capability costs nothing to type. It costs a great deal
   later, when a customer buys one.

   So the rule is mechanical rather than editorial — every module must name a
   capability or screen that its engine already declares in engines.ts. If
   someone adds a module the platform cannot deliver, this fails.
   ========================================================================= */

describe('Every module traces to declared engine scope', () => {
  it('names a capability or screen its engine actually declares', () => {
    const offenders: string[] = []

    for (const mod of INTELLIGENCE_MODULES) {
      const sources = declaredSources(mod.engineSlug)
      if (!sources.includes(mod.name)) {
        offenders.push(`${mod.slug} — "${mod.name}" not declared by ${mod.engineSlug}`)
      }
    }

    expect(
      offenders,
      'A module may only sell something engines.ts declares the platform can do.',
    ).toEqual([])
  })

  it('references an engine that exists', () => {
    const slugs = new Set(INTELLIGENCE_ENGINES.map((e) => e.slug))
    for (const mod of INTELLIGENCE_MODULES) {
      expect(slugs.has(mod.engineSlug), mod.slug).toBe(true)
    }
  })

  it('marks a module live only when its engine is built', () => {
    const built = new Map(INTELLIGENCE_ENGINES.map((e) => [e.slug, e.built]))
    for (const mod of INTELLIGENCE_MODULES) {
      expect(mod.live, mod.slug).toBe(built.get(mod.engineSlug))
    }
  })

  it('gives every module a unique slug', () => {
    const slugs = INTELLIGENCE_MODULES.map((m) => m.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })
})

describe('Every category is complete and reachable', () => {
  it('has a unique slug and a stable order', () => {
    const slugs = INTELLIGENCE_CATEGORIES.map((c) => c.slug)
    expect(new Set(slugs).size).toBe(slugs.length)

    const orders = INTELLIGENCE_CATEGORIES.map((c) => c.order)
    expect(orders).toEqual([...orders].sort((a, b) => a - b))
  })

  it('carries at least one module', () => {
    for (const category of INTELLIGENCE_CATEGORIES) {
      expect(modulesForCategory(category.slug).length, category.slug).toBeGreaterThan(0)
    }
  })

  it('names only products that exist', () => {
    const slugs = new Set(PRODUCTS.map((p) => p.slug))
    for (const category of INTELLIGENCE_CATEGORIES) {
      for (const slug of category.productSlugs) {
        expect(slugs.has(slug), `${category.slug} → ${slug}`).toBe(true)
      }
    }
  })

  it('states a question and an explanation', () => {
    for (const category of INTELLIGENCE_CATEGORIES) {
      expect(category.question.length, category.slug).toBeGreaterThan(10)
      expect(category.explanation.length, category.slug).toBeGreaterThan(60)
    }
  })

  /* The direction's point is breadth: an ecosystem, not a shop. A category
     that maps no engine would be a marketing claim with nothing behind it. */
  it('routes every engine into exactly one category', () => {
    const mapped = INTELLIGENCE_CATEGORIES.flatMap((c) => c.engineSlugs)
    expect(new Set(mapped).size).toBe(mapped.length)
    for (const engine of INTELLIGENCE_ENGINES) {
      expect(mapped, `${engine.slug} is not in any category`).toContain(engine.slug)
    }
  })
})

describe('Every module is sold as a question', () => {
  it('asks a question rather than naming a feature', () => {
    for (const mod of INTELLIGENCE_MODULES) {
      expect(mod.question.endsWith('?'), `${mod.slug}: ${mod.question}`).toBe(true)
    }
  })

  it('says what it reveals, at length', () => {
    for (const mod of INTELLIGENCE_MODULES) {
      expect(mod.reveals.length, mod.slug).toBeGreaterThan(60)
    }
  })

  /* The banned vocabulary from the product direction. "Report" is the output,
     never the thing being sold, so it must not appear in a module's pitch. */
  it('avoids the banned product vocabulary', () => {
    const banned = /\b(dashboards?|reports?|SEO|analytics)\b/i
    const offenders = INTELLIGENCE_MODULES.filter(
      (m) => banned.test(m.question) || banned.test(m.reveals),
    ).map((m) => m.slug)
    expect(offenders).toEqual([])
  })
})

describe('Counts are computed, never asserted', () => {
  it('totals the modules across all categories', () => {
    const summed = INTELLIGENCE_CATEGORIES.reduce(
      (total, c) => total + modulesForCategory(c.slug).length,
      0,
    )
    expect(summed).toBe(totalModuleCount())
  })

  it('counts fewer live modules than total', () => {
    expect(liveModuleCount()).toBeGreaterThan(0)
    expect(liveModuleCount()).toBeLessThan(totalModuleCount())
  })
})
