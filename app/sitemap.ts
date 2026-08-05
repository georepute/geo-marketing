import type { MetadataRoute } from 'next'
import { getEcosystem, getEngines, getProducts } from '@/lib/api/client'

/**
 * Public surfaces only. Product and app routes are included because they are
 * genuine content; checkout, sign-in and internal routes are not.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = 'https://georepute.ai'
  const [engines, products, ecosystem] = await Promise.all([
    getEngines(),
    getProducts(),
    getEcosystem(),
  ])

  const staticRoutes = [
    { path: '', priority: 1 },
    { path: '/engines', priority: 0.9 },
    { path: '/marketplace', priority: 0.9 },
    { path: '/pricing', priority: 0.8 },
    { path: '/methodology', priority: 0.7 },
    { path: '/app/mission-control', priority: 0.8 },
    { path: '/app/reconstruct', priority: 0.8 },
    { path: '/app/actions', priority: 0.6 },
  ]

  const enginePages = engines.data
    .filter((e) => e.built)
    .map((e) => ({ path: `/engines/${e.slug}`, priority: 0.7 }))

  /* Category pages rank above product pages: they are the entry point to the
     ecosystem, and each one is the parent of a dozen modules. */
  const categoryPages = ecosystem.data.categories.map((c) => ({
    path: `/marketplace/category/${c.slug}`,
    priority: 0.8,
  }))

  const productPages = [
    ...products.data.entry,
    ...products.data.advanced,
    ...products.data.premium,
  ].map((p) => ({ path: `/marketplace/${p.slug}`, priority: 0.7 }))

  return [
    ...staticRoutes,
    ...enginePages,
    ...categoryPages,
    ...productPages,
  ].map((route) => ({
    url: `${base}${route.path}`,
    changeFrequency: 'weekly' as const,
    priority: route.priority,
  }))
}
