import type { Metadata, Viewport } from 'next'
import { Inter, IBM_Plex_Mono } from 'next/font/google'
import '@/styles/globals.css'
import { copy } from '@/lib/copy/en'
import { Providers } from './providers'
import { ThemeScript } from '@/lib/theme/ThemeScript'
import { ThemeToggle } from '@/components/shell/ThemeToggle'

/* next/font downloads at build time and self-hosts the result — no runtime
   request to any external host. Plan §1. */
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  axes: ['opsz'],
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-plex-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: `GeoRepute — ${copy.category}`,
    template: '%s | GeoRepute',
  },
  description: copy.meta.description,
  applicationName: 'GeoRepute',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0a0910' },
    { media: '(prefers-color-scheme: light)', color: '#faf8f5' },
  ],
  colorScheme: 'dark light',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body>
        <a href="#main" className="gr-skip text-caption">
          Skip to content
        </a>
        <Providers>
          {children}
          <ThemeToggle />
        </Providers>
      </body>
    </html>
  )
}
