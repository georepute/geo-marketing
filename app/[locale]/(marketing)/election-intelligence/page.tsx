import type { Metadata } from 'next'
import { Link } from '@/components/i18n/Link'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/motion/Reveal'
import { ProductScreen, ProductScreenGrid } from '@/components/product/ProductScreen'
import { ImageWithScrim } from '@/components/visual/ImageWithScrim'
import { getDictionary } from '@/lib/i18n/server'
import { getElectionIntelligence } from '@/lib/api/client'
import type { ScreenSlotId } from '@/lib/visual/screens'
import { cn } from '@/lib/utils/cn'

export const metadata: Metadata = {
  title: 'Election Intelligence',
  description:
    'Real-time election intelligence: which narratives are circulating, who is carrying them, which audiences are moving, and what must change to move them back.',
}

/* ============================================================================
   ELECTION INTELLIGENCE — requirements doc §3.

   Presented as a serious intelligence solution rather than a feature of the
   commercial product, because the buyer is different and the decision it
   informs is different.

   NOTHING REAL APPEARS HERE. Doc §3: no real political client data, no
   confidential information. The one live figure on this page comes from
   lib/seed/election.ts — an invented county race that is labelled fictional
   at the point of use, not merely in a footnote.
   ========================================================================= */

/** Doc §3, "Real Product Screens" — all twelve, in the order it lists them. */
const SCREENS: readonly ScreenSlotId[] = [
  'election-war-room',
  'election-candidate',
  'election-narrative',
  'election-polarity',
  'election-audience',
  'election-opponent',
  'election-sources',
  'election-ai-google',
  'election-multilingual',
  'election-risk',
  'election-actions',
  'election-trend',
]

export default async function ElectionIntelligencePage() {
  const dict = await getDictionary()
  const e = dict.election
  const election = await getElectionIntelligence()
  const subject = election.data.subject

  return (
    <>
      {/* ================================================================
          HERO
          ============================================================== */}
      <section className="relative isolate overflow-hidden">
        <ImageWithScrim
          image="terrain"
          scrim="heavy"
          priority
          sizes="100vw"
          className="-z-10"
        />
        <div aria-hidden className="absolute inset-0 gr-dotgrid opacity-40 -z-10" />

        <div className="gr-rail-wide relative pt-20 pb-16 lg:pt-24 lg:pb-20">
          <p className="text-label uppercase text-brand-300">{e.eyebrow}</p>
          <h1 className="text-display-1 text-ink mt-6 max-w-4xl text-balance">
            {e.title}
          </h1>
          <p className="text-body-lg text-ink-2 mt-7 max-w-3xl">{e.lede}</p>

          <div className="flex flex-wrap gap-3 mt-10">
            <Button asChild variant="primary" size="lg">
              <Link href="/app/narrative">{e.ctaPrimary}</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/briefing?interest=election">{e.ctaSecondary}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ================================================================
          THE KEY MESSAGE — doc §3 asks for this "very clear".
          ============================================================== */}
      <section className="gr-hairline relative isolate overflow-hidden">
        <div aria-hidden className="gr-mesh opacity-60 -z-10" />
        <div className="gr-rail gr-section-tight text-center">
          <Reveal>
            <p className="text-label uppercase text-ink-3">
              {e.keyMessageLabel}
            </p>
            <p className="text-h2 text-ink-3 mt-6 max-w-3xl mx-auto line-through decoration-1">
              {e.keyMessageNot}
            </p>
            <p className="text-display-2 text-ink mt-6 max-w-4xl mx-auto text-balance">
              {e.keyMessage}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================================================================
          AUDIENCES
          ============================================================== */}
      <section className="gr-hairline">
        <div className="gr-rail-wide gr-section-tight">
          <Reveal>
            <p className="text-label uppercase text-brand-300">{e.forLabel}</p>
          </Reveal>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {e.audiences.map((audience, index) => (
              <Reveal as="li" key={audience.name} delay={index * 50}>
                <div
                  className={cn(
                    'h-full rounded-md border border-line bg-panel p-5',
                    'transition-colors duration-[var(--gr-dur-base)]',
                    'hover:border-brand-400/60',
                  )}
                >
                  <p className="text-body text-ink">{audience.name}</p>
                  <p className="text-caption text-ink-2 mt-3">
                    {audience.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ================================================================
          WHAT IT ANALYZES — every capability the doc lists.
          ============================================================== */}
      <section className="gr-hairline">
        <div className="gr-rail-wide gr-section">
          <Reveal>
            <p className="text-label uppercase text-brand-300">
              {e.capabilitiesLabel}
            </p>
            <p className="text-body-lg text-ink-2 mt-5 max-w-2xl">
              {e.capabilitiesSub}
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {e.capabilities.map((cluster, index) => (
              <Reveal key={cluster.id} delay={index * 60}>
                <div className="h-full rounded-md border border-line bg-panel p-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="text-label uppercase text-ink-3">
                      {cluster.name}
                    </p>
                    <span
                      className="text-label text-ink-3 shrink-0"
                      data-numeric=""
                      aria-hidden
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <p className="text-h3 text-ink mt-4 text-balance">
                    {cluster.question}
                  </p>

                  <ul className="mt-5 pt-5 border-t border-line grid gap-2.5">
                    {cluster.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span
                          aria-hidden
                          className="shrink-0 mt-2 size-1 rounded-full"
                          style={{ background: 'var(--gr-brand-400)' }}
                        />
                        <span className="text-caption text-ink-2">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          THE SCREENS — doc §3, "Real Product Screens", all twelve.
          ============================================================== */}
      <section className="gr-hairline">
        <div className="gr-rail-wide gr-section">
          <Reveal>
            <p className="text-label uppercase text-brand-300">
              {e.screensLabel}
            </p>
            <p className="text-body-lg text-ink-2 mt-5 max-w-2xl">
              {e.screensSub}
            </p>
          </Reveal>

          {/* The war room leads at full width — it is the surface the whole
              section is named for. */}
          <div className="mt-10">
            <ProductScreen
              id="election-war-room"
              sizes="(min-width: 1024px) 80vw, 100vw"
            />
          </div>

          <div className="mt-8">
            <ProductScreenGrid ids={SCREENS.slice(1)} columns={2} />
          </div>
        </div>
      </section>

      {/* ================================================================
          LIVE IN THIS ENVIRONMENT
          ============================================================== */}
      <section className="gr-hairline">
        <div className="gr-rail-wide gr-section-tight">
          <Reveal>
            <div className="rounded-md border border-line bg-panel p-6 md:p-8">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,20rem)] lg:gap-12 items-start">
                <div>
                  <p className="text-label uppercase text-brand-300">
                    {e.liveLabel}
                  </p>
                  <h2 className="text-h1 text-ink mt-4 text-balance">
                    {e.liveHeadline}
                  </h2>
                  <p className="text-body text-ink-2 mt-5 max-w-2xl">
                    {e.liveBody}
                  </p>

                  <Button asChild variant="secondary" className="mt-7">
                    <Link href="/app/narrative">{e.liveCta}</Link>
                  </Button>
                </div>

                {/* The seeded subject, named as fictional at the point of
                    use rather than in a footnote someone can miss. */}
                <div className="rounded-md border border-line bg-inset p-5">
                  <p className="text-label uppercase text-ink-3">
                    Demonstration subject
                  </p>
                  <p className="text-body text-ink mt-3">{subject.name}</p>
                  <dl className="mt-4 pt-4 border-t border-line space-y-3">
                    <div className="flex justify-between gap-3">
                      <dt className="text-caption text-ink-3">Race</dt>
                      <dd className="text-caption text-ink-2 text-end">
                        {subject.race}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-3">
                      <dt className="text-caption text-ink-3">Candidate</dt>
                      <dd className="text-caption text-ink-2 text-end">
                        {subject.candidate}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-3">
                      <dt className="text-caption text-ink-3">Opponent</dt>
                      <dd className="text-caption text-ink-2 text-end">
                        {subject.opponent}
                      </dd>
                    </div>
                  </dl>
                  <p
                    className="text-caption mt-4 pt-4 border-t border-line"
                    style={{ color: 'var(--gr-warning)' }}
                  >
                    Entirely fictional. No real person, party or race.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================================================================
          CONFIDENTIALITY
          ============================================================== */}
      <section className="gr-hairline">
        <div className="gr-rail gr-section-tight">
          <Reveal>
            <p className="text-label uppercase text-ink-3">
              {e.confidentialLabel}
            </p>
            <p className="text-body-lg text-ink-2 mt-5">
              {e.confidentialBody}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================================================================
          CLOSE — both CTAs from doc §3.
          ============================================================== */}
      <section className="relative isolate overflow-hidden gr-hairline">
        <ImageWithScrim image="signal" scrim="heavy" sizes="100vw" className="-z-10" />
        <div className="gr-rail gr-section text-center relative">
          <h2 className="text-display-2 text-ink max-w-3xl mx-auto text-balance">
            {e.ctaHeadline}
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            <Button asChild variant="primary" size="lg">
              <Link href="/app/narrative">{e.ctaPrimary}</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/briefing?interest=election">{e.ctaSecondary}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
