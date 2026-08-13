import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { ThemeScript } from '@/lib/theme/ThemeScript'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

/* ============================================================================
   404 for URLs that match no route at all.

   Needed because the root layout now sits under a dynamic segment
   (app/[locale]/layout.tsx). A request to a path with no recognisable locale
   has no layout to compose a 404 from, which is the exact case Next documents
   `global-not-found` for.

   This file bypasses normal rendering, so it carries its own <html>, its own
   stylesheet import and its own font. It deliberately does NOT link into a
   localized route: at this point the visitor's language is unknown, and
   guessing wrong sends someone who typed a bad URL into a language they
   cannot read. The proxy handles detection for real traffic; this is the
   floor beneath it.
   ========================================================================= */

export const metadata: Metadata = {
  title: 'Not found | GeoRepute',
  description: 'This page does not exist.',
}

export default function GlobalNotFound() {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body>
        <main
          id="main"
          className="min-h-dvh grid place-items-center bg-canvas px-6"
        >
          <div className="text-center max-w-md">
            <p className="text-label uppercase text-brand-300">404</p>
            <h1 className="text-display-2 text-ink mt-5 text-balance">
              This page does not exist.
            </h1>
            <p className="text-body text-ink-2 mt-5">
              The address may be mistyped, or the page may have moved.
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 text-body text-brand-300 mt-8 hover:text-ink transition-colors"
            >
              Return to GeoRepute <span aria-hidden className="gr-arrow">→</span>
            </a>
          </div>
        </main>
      </body>
    </html>
  )
}
