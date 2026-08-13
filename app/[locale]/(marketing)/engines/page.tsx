import type { Metadata } from 'next'
import { Link } from '@/components/i18n/Link'
import { Section } from '@/components/home/Sections'
import { Button } from '@/components/ui/Button'
import { FeatureCard } from '@/components/visual/FeatureCard'
import { ImageWithScrim } from '@/components/visual/ImageWithScrim'
import { GlassCard } from '@/components/visual/Primitives'
import { ENGINE_IMAGE } from '@/lib/visual/imagery'
import { ENGINE_ICON } from '@/lib/visual/icons'
import { copy } from '@/lib/copy/en'
import { getEngines, getReadouts } from '@/lib/api/client'

export const metadata: Metadata = {
  title: 'Intelligence Engines',
  description:
    'Twelve intelligence engines. One operating system. Each answers a board-level business question and routes into action.',
}

export default async function EnginesPage() {
  const [engines, readouts] = await Promise.all([getEngines(), getReadouts()])

  const built = engines.data.filter((e) => e.built)
  const available = engines.data.filter((e) => !e.built)

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <ImageWithScrim
          image="network"
          scrim="heavy"
          priority
          sizes="100vw"
          className="-z-10"
        />
        <div aria-hidden className="absolute inset-0 gr-dotgrid opacity-40 -z-10" />
        <div className="gr-rail-wide relative pt-20 pb-16 lg:pt-24 lg:pb-20">
          <p className="text-label uppercase text-brand-300">
            Intelligence engines
          </p>
          <h1 className="text-display-1 text-ink mt-6 max-w-4xl text-balance">
            {copy.home.engines}
          </h1>
          <p className="text-body-lg text-ink-2 mt-6 max-w-2xl">
            Each engine answers a board-level business question, produces a
            connected intelligence readout and routes the user into action. Not
            a feature list — a set of questions the business needs answered.
          </p>
        </div>
      </section>

      {/* --- Built engines ------------------------------------------- */}
      <Section
        eyebrow={`Built in this environment · ${built.length} of ${engines.data.length}`}
        headline="Four engines, built to full depth"
        sub="Each carries a real seeded outcome, its evidence, its commercial consequence and the action it prescribes. They chain into one another — together they form the causal argument rather than four samples of it."
        wide
      >
        <div className="grid gap-4 md:grid-cols-2">
          {built.map((engine) => {
            const readout = readouts.data.find((r) => r.id === engine.readoutId)
            return (
              <FeatureCard
                key={engine.slug}
                href={`/engines/${engine.slug}`}
                image={ENGINE_IMAGE[engine.slug]}
                iconKey={engine.slug}
                eyebrow={engine.name}
                title={engine.businessQuestion}
                description={readout?.executiveTruth}
                meta={engine.capabilities.slice(0, 4)}
              />
            )
          })}
        </div>
      </Section>

      {/* --- Remaining engines --------------------------------------- */}
      <Section
        eyebrow="The full operating system"
        headline="Eight further engines available in the platform"
        sub="These are part of the operating system but are not built in this demonstration environment. Their business questions are listed so the shape of the full system is visible."
        wide
      >
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {available.map((engine) => {
            const Icon = ENGINE_ICON[engine.slug]
            return (
              <GlassCard key={engine.slug} className="p-5 flex flex-col">
                <div className="flex items-center gap-3">
                  {Icon ? (
                    <span
                      aria-hidden
                      className="grid place-items-center size-8 rounded-sm border border-line bg-inset text-ink-3 shrink-0"
                    >
                      <Icon className="size-4" />
                    </span>
                  ) : null}
                  <p className="text-label uppercase text-ink-3">
                    {engine.name}
                  </p>
                </div>
                <p className="text-caption text-ink-2 mt-4 flex-1">
                  {engine.businessQuestion}
                </p>
                <p className="text-label uppercase text-ink-3 mt-5 pt-4 border-t border-line">
                  Available in platform
                </p>
              </GlassCard>
            )
          })}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="primary">
            <Link href="/app/mission-control">Open Mission Control</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/pricing">See plans</Link>
          </Button>
        </div>
      </Section>
    </>
  )
}
