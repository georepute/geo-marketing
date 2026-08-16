import type { Metadata, Viewport } from 'next'
import { notFound } from 'next/navigation'
import { Inter, IBM_Plex_Mono } from 'next/font/google'
import '@/styles/globals.css'
import { Providers } from '../providers'
import { ThemeScript } from '@/lib/theme/ThemeScript'
import { ThemeToggle } from '@/components/shell/ThemeToggle'
import { I18nProvider } from '@/lib/i18n/context'
import { ContentProvider } from '@/lib/i18n/content/client'
import { contentFor } from '@/lib/i18n/content'
import { getI18n } from '@/lib/i18n/server'
import { LOCALES, isLocale, localePath } from '@/lib/i18n/config'

/* next/font downloads at build time and self-hosts the result — no runtime
   request to any external host. Plan §1.

   `latin` alone no longer covers the site: Hebrew, Arabic and Cyrillic all
   need their own subsets or the browser falls back to a system face and the
   typography stops being ours. Inter carries latin, latin-ext and cyrillic;
   Hebrew and Arabic fall back deliberately — see the note below. */
const inter = Inter({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
  axes: ['opsz'],
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500'],
  variable: '--font-plex-mono',
  display: 'swap',
})

/* ============================================================================
   ROOT LAYOUT — now under [locale].

   Requirements doc §8. The locale is a root parameter, which means any Server
   Component can read it through next/root-params without it being threaded
   through as a prop. `dir` is set here once and every logical property in the
   stylesheet follows from it, which is what makes Hebrew and Arabic mirror
   the entire site rather than one component at a time.

   HEBREW AND ARABIC TYPEFACES
   Inter has no Hebrew or Arabic coverage and IBM Plex Mono's Arabic is a
   separate family. Both currently fall back to the platform UI face, which is
   legible and correct but is not a design decision. Flagged for review —
   picking the two faces is a judgment call about the brand, not a mechanical
   fix, and shipping a wrong one is worse than shipping the system default.
   ========================================================================= */

/** Prerender all seven locales. Adding one to LOCALES is all it takes. */
export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale: locale.code }))
}

export async function generateMetadata(): Promise<Metadata> {
  const { dict, locale } = await getI18n()

  /* hreflang. Every page declares the full set plus x-default, so a search
     engine can serve the right language and does not treat the seven as
     duplicates of one another. Doc §8: "URLs and SEO structure should support
     each language properly." */
  const languages = Object.fromEntries(
    LOCALES.map((l) => [l.code, localePath('/', l.code)]),
  )

  return {
    metadataBase: new URL('https://georepute.ai'),
    title: {
      default: `GeoRepute — ${dict.category}`,
      template: '%s | GeoRepute',
    },
    description: dict.meta.description,
    applicationName: 'GeoRepute',
    alternates: {
      canonical: localePath('/', locale),
      languages: { ...languages, 'x-default': '/' },
    },
    openGraph: {
      siteName: 'GeoRepute',
      locale,
      type: 'website',
      title: `GeoRepute — ${dict.category}`,
      description: dict.meta.description,
    },
  }
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0a0910' },
    { media: '(prefers-color-scheme: light)', color: '#faf8f5' },
  ],
  colorScheme: 'dark light',
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  /* An unknown segment must 404 rather than silently rendering English at a
     URL that will then be indexed as a real page. */
  const { locale: segment } = await params
  if (!isLocale(segment)) notFound()

  const { locale, dir, intl, dict } = await getI18n()
  /* Client Components cannot read a root parameter, so the content overlay is
     resolved once here and seeded alongside the dictionary. */
  const overlay = await contentFor(locale)

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${inter.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body>
        <a href="#main" className="gr-skip text-caption">
          {dict.a11y.skipToContent}
        </a>
        <I18nProvider value={{ locale, dir, intl, dict }}>
          <ContentProvider overlay={overlay}>
            <Providers>
              {children}
              <ThemeToggle />
            </Providers>
          </ContentProvider>
        </I18nProvider>
      </body>
    </html>
  )
}
