import Link from 'next/link'
import { MarketingNav } from '@/components/shell/MarketingNav'
import { Footer } from '@/components/shell/Footer'
import { Button } from '@/components/ui/Button'

const ROUTES = [
  { href: '/app/mission-control', label: 'Executive Mission Control' },
  { href: '/app/reconstruct', label: 'Decision Reconstruction' },
  { href: '/engines', label: 'Intelligence Engines' },
  { href: '/marketplace', label: 'Intelligence Marketplace' },
]

export default function NotFound() {
  return (
    <div className="min-h-dvh flex flex-col bg-canvas">
      <MarketingNav />
      <main id="main" className="flex-1 gr-rail gr-section">
        <p className="text-label uppercase text-ink-3" data-numeric="">
          404
        </p>
        <h1 className="text-display-2 mt-5 max-w-2xl text-balance">
          This surface does not exist.
        </h1>
        <p className="text-body-lg text-ink-2 mt-5 max-w-xl">
          The page you requested is not part of this environment. These are the
          surfaces that are.
        </p>

        <ul className="mt-9 grid gap-3 sm:grid-cols-2 max-w-2xl">
          {ROUTES.map((route) => (
            <li key={route.href}>
              <Link
                href={route.href}
                className="flex items-center justify-between gap-3 rounded-sm border border-line bg-panel px-4 py-4 text-body text-ink-2 hover:text-ink hover:border-line-strong hover:bg-inset transition-colors"
              >
                {route.label}
                <span aria-hidden className="text-ink-3">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-9">
          <Button asChild variant="primary">
            <Link href="/">Return home</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}
