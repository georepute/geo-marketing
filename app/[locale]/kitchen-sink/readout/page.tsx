import type { Metadata } from 'next'
import { Link } from '@/components/i18n/Link'
import { Showcase } from './Showcase'
import { Label, Rule } from '@/components/ui/Card'
import { getCausalChain, getReadouts, getActions } from '@/lib/api/client'

export const metadata: Metadata = {
  title: 'Readout system',
  robots: { index: false, follow: false },
}

export default async function ReadoutShowcase() {
  const [chain, readouts, actions] = await Promise.all([
    getCausalChain(),
    getReadouts(),
    getActions(),
  ])

  return (
    <main id="main" className="gr-rail-wide py-16">
      <header>
        <p className="text-label text-ink-3 mb-3">
          GeoRepute — Internal · M2 Readout system
        </p>
        <h1 className="text-display-2 max-w-3xl">
          One anatomy, everywhere
        </h1>
        <p className="text-body-lg text-ink-2 mt-4 max-w-3xl">
          Brief §13 requires every signal, diagnostic and assessment to share
          one structure so the system feels coherent and auditable. These are
          the components every screen after this one reuses.
        </p>
        <p className="text-caption text-ink-3 mt-4">
          <Link href="/debug/seed" className="underline underline-offset-4 hover:text-ink-2">
            Seed trace
          </Link>
          {' · '}
          <Link href="/kitchen-sink" className="underline underline-offset-4 hover:text-ink-2">
            Design tokens
          </Link>
        </p>
      </header>

      <Rule className="mt-8" />

      <Showcase
        chain={chain.data}
        readouts={readouts.data}
        actions={actions.data}
      />

      <Rule />
      <footer className="pt-8">
        <Label>M2 complete</Label>
        <p className="text-caption text-ink-3 mt-2">
          Next: M3 — Executive Mission Control, the first hero experience.
        </p>
      </footer>
    </main>
  )
}
