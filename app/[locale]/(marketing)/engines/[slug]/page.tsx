import type { Metadata } from 'next'
import { Link } from '@/components/i18n/Link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { ProductScreen } from '@/components/product/ProductScreen'
import { ENGINE_SCREEN } from '@/lib/visual/screens'
import { Button } from '@/components/ui/Button'
import { ImageWithScrim } from '@/components/visual/ImageWithScrim'
import { ENGINE_IMAGE } from '@/lib/visual/imagery'
import { ENGINE_ICON } from '@/lib/visual/icons'
import { IntelligenceReadout } from '@/components/readout/IntelligenceReadout'
import { RoleProvider } from '@/components/readout/RoleLens'
import { EngineVisual } from './EngineVisual'
import {
  getEngine,
  getEngines,
  getEngineMatrix,
  getGapMatrix,
  getCompetitors,
  getActions,
  getReadout,
} from '@/lib/api/client'

/** The eight unbuilt engines are not routable — the overview presents them. */
export async function generateStaticParams() {
  const engines = await getEngines()
  return engines.data.filter((e) => e.built).map((e) => ({ slug: e.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const engine = await getEngine(slug)
  if (!engine.data) return { title: 'Engine not found' }
  return {
    title: engine.data.name,
    description: engine.data.businessQuestion,
  }
}

export default async function EnginePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const engine = await getEngine(slug)

  if (!engine.data || !engine.data.built) notFound()

  const [engineMatrix, gaps, competitors, actions, readout, allEngines] =
    await Promise.all([
      getEngineMatrix(),
      getGapMatrix(),
      getCompetitors(),
      getActions(),
      engine.data.readoutId
        ? getReadout(engine.data.readoutId)
        : Promise.resolve(null),
      getEngines(),
    ])

  const built = allEngines.data.filter((e) => e.built)
  const index = built.findIndex((e) => e.slug === slug)
  const next = built[(index + 1) % built.length]!
  const Icon = ENGINE_ICON[slug]

  return (
    <>
      {/* --- Header ---------------------------------------------------- */}
      <section className="relative isolate overflow-hidden">
        <ImageWithScrim
          image={ENGINE_IMAGE[slug] ?? 'network'}
          scrim="heavy"
          priority
          sizes="100vw"
          className="-z-10"
        />
        <div
          aria-hidden
          className="absolute inset-0 gr-dotgrid opacity-40 -z-10"
        />

        <div className="gr-rail-wide relative pt-16 pb-14 lg:pt-20 lg:pb-16">
          <nav aria-label="Breadcrumb" className="mb-8">
            <Link
              href="/engines"
              className="inline-flex items-center gap-2 text-caption text-ink-3 hover:text-ink-2 transition-colors"
            >
              <ArrowLeft aria-hidden className="size-3.5" />
              Intelligence Engines
            </Link>
          </nav>

          <div className="flex items-start gap-4">
            {Icon ? (
              <span
                aria-hidden
                className="grid place-items-center size-11 rounded-md border border-line bg-inset text-brand-300 shrink-0 backdrop-blur-sm"
              >
                <Icon className="size-5" />
              </span>
            ) : null}
            <div className="min-w-0">
              <p className="text-label uppercase text-brand-300">
                {engine.data.name}
              </p>
              <h1 className="text-display-2 text-ink mt-3 max-w-4xl text-balance">
                {engine.data.businessQuestion}
              </h1>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {engine.data.capabilities.map((capability) => (
              <span
                key={capability}
                className="text-label uppercase text-ink-3 rounded-xs border border-line bg-inset/80 backdrop-blur-sm px-2 py-1"
              >
                {capability}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* --- Signature visual ------------------------------------------ */}
      <section className="gr-hairline">
        <div className="gr-rail-wide gr-section">
          <p className="text-label uppercase text-ink-3">
            Intelligence readout
          </p>
          <h2 className="text-h1 text-ink mt-3 mb-8 text-balance">
            {engine.data.screens[0]}
          </h2>

          <EngineVisual
            slug={slug}
            engineMatrix={engineMatrix.data}
            gaps={gaps.data}
            competitors={competitors.data}
            unattributedPct={28.8}
            actions={actions.data}
          />
        </div>
      </section>

      {/* --- The full readout ------------------------------------------ */}
      {readout?.data ? (
        <section className="gr-hairline">
          <div className="gr-rail-wide gr-section">
            <p className="text-label uppercase text-ink-3">
              What this engine concluded
            </p>
            <h2 className="text-h1 text-ink mt-3 mb-8">
              Signal, evidence, consequence, action
            </h2>

            <RoleProvider role="analyst">
              <div className="rounded-md border border-line bg-panel p-6 md:p-8">
                <IntelligenceReadout readout={readout.data} variant="full" />
              </div>
            </RoleProvider>
          </div>
        </section>
      ) : null}

      {/* --- Recommended screens --------------------------------------- */}
      <section className="gr-hairline">
        <div className="gr-rail-wide gr-section">
          <p className="text-label uppercase text-ink-3">In the platform</p>
          <h2 className="text-h1 text-ink mt-3 mb-8">
            Screens this engine provides
          </h2>

          {/* Doc §2: show the real screen, not only its name. */}
          {ENGINE_SCREEN[engine.data.slug] ? (
            <div className="mb-10">
              <ProductScreen
                id={ENGINE_SCREEN[engine.data.slug]!}
                sizes="(min-width: 1024px) 75vw, 100vw"
              />
            </div>
          ) : null}

          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {engine.data.screens.map((screen) => (
              <li
                key={screen}
                className="rounded-md border border-line bg-panel p-5"
              >
                <p className="text-body text-ink">{screen}</p>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild variant="primary">
              <Link href="/app/mission-control">Open Mission Control</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href={`/engines/${next.slug}`}>
                Next: {next.name}{' '}
                <span aria-hidden className="gr-arrow">
                  →
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
