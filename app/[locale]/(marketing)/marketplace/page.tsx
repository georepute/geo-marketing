import type { Metadata } from 'next'
import { getDictionary } from '@/lib/i18n/server'
import { Link } from '@/components/i18n/Link'
import { Button } from '@/components/ui/Button'
import { CategoryCard } from '@/components/marketplace/CategoryCard'
import { ImageWithScrim } from '@/components/visual/ImageWithScrim'
import { Reveal } from '@/components/motion/Reveal'
import { count } from '@/lib/format'
import { getEcosystem } from '@/lib/api/client'
import { getT } from '@/lib/i18n/content/translator'
import { Rich } from '@/lib/i18n/content/rich'

export async function generateMetadata(): Promise<Metadata> {
  const copy = await getDictionary()
  return { title: copy.nav.marketplace, description: copy.home.marketplaceSub }
}

/* ============================================================================
   THE INTELLIGENCE ECOSYSTEM.

   Direction: this page is not a marketplace of reports. Its job is to make a
   visitor think "whatever business question I have, this platform already has
   intelligence built for it" — and, more specifically, "I did not know that
   could be measured."

   WHAT CHANGED AND WHY
   The page was a flat grid of eight purchasable products under three depth
   headings. That framing had two problems. It capped the platform's apparent
   scope at eight things, and it sold outputs — a visitor read "these are the
   documents I would receive" rather than "this is the range of what can be
   understood". Depth was invisible because everything was on one plane.

   It is now three planes: ecosystem → category → module. A visitor sees seven
   things, each admitting to more underneath, and reaches the individual
   modules only by choosing to. That is what makes sixty-one feel like range
   rather than like a catalogue dump.

   The counts are computed from the module catalogue on every render. Nothing
   on this page is a typed-in number, so the page cannot overstate the platform
   even by accident.
   ========================================================================= */

export default async function MarketplacePage() {
  const t = await getT()
  const ecosystem = await getEcosystem()
  const { categories, totalModules, liveModules, totalEngines } = ecosystem.data

  return (
    <>
      {/* ================================================================
          THE CLAIM
          ============================================================== */}
      <section className="relative isolate overflow-hidden">
        <ImageWithScrim
          image="board"
          scrim="heavy"
          priority
          sizes="100vw"
          className="-z-10"
        />
        <div
          aria-hidden
          className="absolute inset-0 gr-dotgrid opacity-40 -z-10"
        />

        <div className="gr-rail-wide relative pt-20 pb-16 lg:pt-24 lg:pb-20">
          <p className="text-label uppercase text-brand-300">
            {t('The intelligence ecosystem')}
          </p>

          <h1 className="text-display-1 text-ink mt-6 max-w-4xl text-balance">
            {t('Whatever the business question, there is already intelligence built for it.')}
          </h1>

          <p className="text-body-lg text-ink-2 mt-6 max-w-2xl">
            {t('Seven categories of decision intelligence, each holding the models that answer one kind of commercial question. Most of them measure things a business has never been able to see — not because the questions are exotic, but because nothing existed to answer them.')}
          </p>

          {/* The scale of the thing, stated once and computed. */}
          <dl className="grid gap-px bg-line border border-line rounded-md overflow-hidden mt-10 sm:grid-cols-3 max-w-2xl">
            <Figure
              value={count(categories.length)}
              label={t('Intelligence categories')}
            />
            <Figure value={count(totalModules)} label={t('Intelligence modules')} />
            <Figure
              value={count(totalEngines)}
              label={t('Engines beneath them')}
            />
          </dl>

          <p className="text-caption text-ink-3 mt-5 max-w-2xl">
            <Rich
              text={t('<b>{n}</b> of these modules run live in this environment against a real reconstructed business. The rest are available in the platform.', { n: count(liveModules) })}
            />
          </p>
        </div>
      </section>

      {/* ================================================================
          THE SEVEN CATEGORIES
          ============================================================== */}
      <section className="gr-hairline">
        <div className="gr-rail-wide gr-section">
          <Reveal>
            <h2 className="text-display-2 text-ink max-w-3xl text-balance">
              {t('Start with the question you actually have.')}
            </h2>
            <p className="text-body-lg text-ink-2 mt-5 max-w-2xl">
              {t('Each category opens into the modules underneath it. Every module answers one business question and returns evidence, an analysis and a recommendation — never a figure on its own.')}
            </p>
          </Reveal>

          <Reveal delay={80} className="mt-10">
            <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 items-stretch">
              {categories.map((category) => (
                <CategoryCard key={category.slug} category={category} />
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ================================================================
          POSITIONING — what is actually being sold.
          ============================================================== */}
      <section className="gr-hairline">
        <div className="gr-rail gr-section">
          <Reveal>
            <p className="text-label uppercase text-brand-300">
              {t('What you are buying')}
            </p>
            <h2 className="text-display-2 text-ink mt-4 max-w-3xl text-balance">
              {t('The document is the output. The intelligence is the product.')}
            </h2>

            <div className="grid gap-6 md:grid-cols-3 mt-10">
              <Plank
                step={t('Evidence')}
                body={t('Every claim carries the observation behind it — which engine, which question, which date. A conclusion you cannot audit is an opinion.')}
              />
              <Plank
                step={t('Analysis')}
                body={t('What the evidence means commercially, what is causing it, and how confident the model can honestly be. Limits are stated, never implied.')}
              />
              <Plank
                step={t('Recommendation')}
                body={t('What to do, who owns it, by when, and what signal should move as a result. Verified afterwards against what actually moved.')}
              />
            </div>

            <div className="flex flex-wrap gap-3 mt-10">
              <Button asChild variant="primary" size="lg">
                <Link href="/app/reconstruct">{t('See a module run live')}</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/methodology">{t('How the models work')}</Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link href="/pricing">{t('Monitor continuously instead')}</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

/* ------------------------------------------------------------------------ */

function Figure({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-panel p-5">
      <dt className="text-label uppercase text-ink-3">{label}</dt>
      <dd className="text-data-lg text-ink mt-3" data-numeric="">
        {value}
      </dd>
    </div>
  )
}

function Plank({ step, body }: { step: string; body: string }) {
  return (
    <div className="border-t-2 pt-5" style={{ borderColor: 'var(--gr-brand-400)' }}>
      <p className="text-label uppercase text-ink">{step}</p>
      <p className="text-caption text-ink-2 mt-3">{body}</p>
    </div>
  )
}
