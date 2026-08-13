import type { Metadata } from 'next'
import { Link } from '@/components/i18n/Link'
import { Wordmark } from '@/components/shell/Wordmark'
import { Button } from '@/components/ui/Button'
import { copy } from '@/lib/copy/en'

export const metadata: Metadata = {
  title: 'Sign In',
  robots: { index: false, follow: false },
}

/* ============================================================================
   Mock authentication. Plan §1: no real auth in v1.

   There is deliberately no password field. A fake credential form that
   accepts anything teaches the wrong thing about the product and invites
   someone to type a real password into a demonstration. The seam is the
   `AuthAdapter` interface; this screen is the only surface it touches.
   ========================================================================= */

export default function SignInPage() {
  return (
    <div className="min-h-dvh flex flex-col bg-canvas">
      <header className="border-b border-line">
        <div className="gr-rail flex items-center justify-between h-16">
          <Wordmark />
          <Link
            href="/"
            className="text-caption text-ink-2 hover:text-ink transition-colors"
          >
            <span aria-hidden className="gr-arrow">←</span> Home
          </Link>
        </div>
      </header>

      <main
        id="main"
        className="flex-1 gr-rail grid place-items-center py-16"
      >
        <div className="w-full max-w-md">
          <p className="text-label uppercase text-brand-300">
            {copy.nav.signIn}
          </p>
          <h1 className="text-h1 text-ink mt-4">
            Enter the demonstration workspace
          </h1>
          <p className="text-body text-ink-2 mt-4">
            This environment has no authentication. Every visitor sees the same
            seeded organisation, Northwind Supply, so that every figure stays
            verifiable against the published methodology.
          </p>

          <div className="mt-8 rounded-md border border-line bg-panel p-5">
            <p className="text-label uppercase text-ink-3">Workspace</p>
            <p className="text-body text-ink mt-3">Northwind Supply</p>
            <p className="text-caption text-ink-3 mt-1 font-mono">
              northwindsupply.com · US Midwest
            </p>
          </div>

          <Button asChild variant="primary" size="lg" className="w-full mt-6">
            <Link href="/app/mission-control">Continue to Mission Control</Link>
          </Button>

          <p className="text-caption text-ink-3 mt-6">
            No password is requested because none is checked. Real
            authentication drops in behind the same route without changing this
            screen&rsquo;s place in the flow.
          </p>
        </div>
      </main>
    </div>
  )
}
