import type { MetadataRoute } from 'next'

/**
 * Internal surfaces are excluded explicitly as well as via per-page `noindex`.
 * Commerce routes are excluded because an order-confirmation URL should never
 * appear in a search index.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/kitchen-sink', '/debug', '/checkout', '/signin'],
    },
  }
}
