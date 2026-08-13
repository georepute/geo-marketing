import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    /* The root layout lives under app/[locale], so an unmatched URL has no
       layout to build a 404 from. `global-not-found` is the documented answer
       for exactly that case. See app/global-not-found.tsx. */
    globalNotFound: true,
  },
  images: {
    // Only these two hosts. Both are free for commercial use; every photo in
    // lib/visual/imagery.ts was inspected before inclusion.
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'images.pexels.com', pathname: '/**' },
    ],
    formats: ['image/avif', 'image/webp'],
    // Matches the breakpoints the layouts actually use, so no oversized
    // variant is ever generated.
    deviceSizes: [640, 828, 1080, 1280, 1600, 1920, 2560],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
}

export default nextConfig
