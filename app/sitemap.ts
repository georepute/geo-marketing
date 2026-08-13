import type { MetadataRoute } from 'next'
import { getEcosystem, getEngines, getProducts } from '@/lib/api/client'
import { flags } from '@/lib/flags'
import { LOCALES, DEFAULT_LOCALE, localePath } from '@/lib/i18n/config'

/**
 * Public surfaces only. Product and app routes are included because they are
 * genuine content; checkout, sign-in and internal routes are not.
 *
 * EVERY ROUTE, EVERY LANGUAGE — doc §8, "URLs and SEO structure should
 * support each language properly". Each entry also carries the full set of
 * `alternates.languages`, which is what tells a search engine the seven URLs
 * are one page in seven languages rather than seven competing duplicates.
 * Emitting the alternates only on the English entry is the usual mistake and
 * leaves the other six looking like thin copies.
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
    /* Pricing is withheld (doc §4). Listing a route that 404s would invite
       crawlers to index the absence, so it leaves the sitemap with the flag. */
    ...(flags.pricing ? [{ path: '/pricing', priority: 0.8 }] : []),
    { path: '/briefing', priority: 0.8 },
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

  const routes = [
    ...staticRoutes,
    ...enginePages,
    ...categoryPages,
    ...productPages,
  ]

  return routes.flatMap((route) =>
    LOCALES.map((locale) => ({
      url: `${base}${localePath(route.path, locale.code)}`,
      changeFrequency: 'weekly' as const,
      priority: route.priority,
      alternates: {
        languages: {
          ...Object.fromEntries(
            LOCALES.map((alt) => [
              alt.code,
              `${base}${localePath(route.path, alt.code)}`,
            ]),
          ),
          'x-default': `${base}${localePath(route.path, DEFAULT_LOCALE)}`,
        },
      },
    })),
  )
}
