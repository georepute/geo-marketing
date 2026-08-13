import type { Metadata } from 'next'
import { Link } from '@/components/i18n/Link'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/motion/Reveal'
import { LoopDiagram } from '@/components/loop/LoopDiagram'
import { ProductScreen, ProductScreenGrid } from '@/components/product/ProductScreen'
import { ImageWithScrim } from '@/components/visual/ImageWithScrim'
import { getDictionary } from '@/lib/i18n/server'
import type { ScreenSlotId } from '@/lib/visual/screens'
import { cn } from '@/lib/utils/cn'

export const metadata: Metadata = {
  title: 'How It Works — The Closed-Loop Intelligence System',
  description:
    'GeoRepute diagnoses the decision environment, turns it into strategy, executes, measures whether the targeted signals moved, and uses the result to decide what happens next.',
}

/* ============================================================================
   HOW IT WORKS — requirements doc §9 and §10.

   The full argument. The homepage carries a four-card summary of this; here
   each stage gets its own section with the screens that stage produces.

   Every stage names the real platform surfaces the doc asks for, as reserved
   screenshot slots. See lib/visual/screens.ts — the images do not exist yet
   and are not invented.
   ========================================================================= */

/** Which platform surfaces belong to each stage, per doc §10. */
const STAGE_SCREENS: Record<string, readonly ScreenSlotId[]> = {
  plan: [
    'deep-diagnosis',
    'mission-control',
    'competitor-intelligence',
    'ai-intelligence',
    'google-vs-ai',
    'market-intelligence',
    'narrative-intelligence',
    'trust-authority',
  ],
  do: ['strategy', 'action-plan', 'content-media', 'calendar', 'distribution'],
  check: ['before-after'],
  act: ['learning'],
}

export default async function HowItWorksPage() {
  const dict = await getDictionary()
  const loop = dict.loop

  return (
    <>
      {/* ================================================================
          HERO
          ============================================================== */}
      <section className="relative isolate overflow-hidden">
        <ImageWithScrim
          image="circuitry"
          scrim="heavy"
          priority
          sizes="100vw"
          className="-z-10"
        />
        <div aria-hidden className="absolute inset-0 gr-dotgrid opacity-40 -z-10" />

        <div className="gr-rail-wide relative pt-20 pb-16 lg:pt-24 lg:pb-20">
          <p className="text-label uppercase text-brand-300">{loop.eyebrow}</p>
          <h1 className="text-display-1 text-ink mt-6 max-w-4xl text-balance">
            {loop.title}
          </h1>
          <p className="text-body-lg text-ink-2 mt-7 max-w-3xl">{loop.lede}</p>

          <p className="text-label uppercase text-brand-300 mt-10">
            {loop.cycle}
          </p>
          <p className="text-caption text-ink-3 mt-2">{loop.cycleSub}</p>
        </div>
      </section>

      {/* ================================================================
          THE PROBLEM — why a loop rather than a stack of tools.
          ============================================================== */}
      <section className="gr-hairline">
        <div className="gr-rail-wide gr-section-tight">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="text-label uppercase text-ink-3">
                {loop.fragmentedLabel}
              </p>
              <p className="text-h2 text-ink mt-4">{loop.fragmentedLede}</p>
              <ul className="mt-6 space-y-3">
                {loop.fragmentedItems.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden className="text-ink-3 shrink-0">
                      ·
                    </span>
                    <span className="text-body text-ink-2">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-caption text-ink-3 mt-6 pt-5 border-t border-line">
                {loop.fragmentedClose}
              </p>
            </Reveal>

            <Reveal delay={100}>
              <p className="text-label uppercase text-brand-300">
                {loop.whyClosedLabel}
              </p>
              <p className="text-h2 text-ink mt-4">{loop.connectedLede}</p>
              <p className="text-body text-ink-2 mt-6">{loop.connectedBody}</p>
              <p
                className="text-caption text-brand-300 mt-6 pt-5 border-t border-line"
                data-numeric=""
              >
                {loop.whyClosed}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================================================================
          THE FOUR STAGES
          ============================================================== */}
      {loop.stages.map((stage, index) => (
        <section key={stage.id} id={stage.id} className="gr-hairline">
          <div className="gr-rail-wide gr-section">
            <Reveal>
              <div className="flex items-baseline gap-5">
                <span
                  className="text-display-2 text-brand-300"
                  data-numeric=""
                  aria-hidden
                >
                  {stage.index}
                </span>
                <div>
                  <p className="text-label uppercase text-ink-3">
                    {stage.name}
                  </p>
                  <h2 className="text-h1 text-ink mt-2 max-w-3xl text-balance">
                    {stage.headline}
                  </h2>
                </div>
              </div>

              <p className="text-body-lg text-ink-2 mt-7 max-w-3xl">
                {stage.lede}
              </p>
            </Reveal>

            {/* --- Signals this stage touches -------------------------- */}
            <Reveal delay={80}>
              <div className="mt-10 rounded-md border border-line bg-panel p-6">
                <p className="text-label uppercase text-ink-3">
                  {stage.signalsLabel}
                </p>
                <ul className="flex flex-wrap gap-2 mt-4">
                  {stage.signals.map((signal) => (
                    <li
                      key={signal}
                      className={cn(
                        'rounded-sm border border-line px-3 py-1.5',
                        'text-caption text-ink-2 bg-inset',
                      )}
                    >
                      {signal}
                    </li>
                  ))}
                </ul>
                <p className="text-caption text-ink-3 mt-5">
                  {stage.connective}
                </p>
              </div>
            </Reveal>

            {/* --- What it determines ---------------------------------- */}
            <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-14">
              <Reveal delay={120}>
                <p className="text-h3 text-ink text-balance">
                  {stage.question}
                </p>
                <p className="text-label uppercase text-ink-3 mt-7">
                  {stage.determinesLabel}
                </p>
                <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {stage.determines.map((item) => (
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
              </Reveal>

              <Reveal delay={160}>
                <div className="rounded-md border border-line bg-panel p-6 lg:sticky lg:top-24">
                  <p className="text-label uppercase text-brand-300">
                    {stage.outcomeLabel}
                  </p>
                  <p className="text-body text-ink-2 mt-4">{stage.outcome}</p>

                  <div className="mt-6 pt-5 border-t border-line">
                    <p className="text-caption text-ink-3 line-through decoration-1">
                      {stage.notThis}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {stage.butThis.map((item) => (
                        <li key={item} className="text-caption text-ink">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* --- The screens this stage produces --------------------- */}
            <div className="mt-12">
              <p className="text-label uppercase text-ink-3 mb-5">
                From the platform
              </p>
              {stage.id === 'check' || stage.id === 'act' ? (
                <ProductScreen
                  id={STAGE_SCREENS[stage.id]![0]!}
                  priority={index === 0}
                  sizes="(min-width: 1024px) 70vw, 100vw"
                />
              ) : (
                <ProductScreenGrid
                  ids={STAGE_SCREENS[stage.id] ?? []}
                  columns={stage.id === 'plan' ? 3 : 2}
                />
              )}
            </div>

            {/* --- CHECK carries the before/after table ---------------- */}
            {stage.id === 'check' ? (
              <Reveal delay={80}>
                <div className="mt-10 rounded-md border border-line overflow-hidden">
                  <div className="bg-inset px-5 py-4 border-b border-line">
                    <p className="text-label uppercase text-brand-300">
                      {loop.movementLabel}
                    </p>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[34rem]">
                      <thead>
                        <tr className="border-b border-line">
                          {loop.movementColumns.map((column, i) => (
                            <th
                              key={column}
                              scope="col"
                              className={cn(
                                'text-label uppercase text-ink-3 px-5 py-3',
                                i === 0 ? 'text-start' : 'text-end',
                              )}
                            >
                              {column}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {loop.movement.map((row) => (
                          <tr
                            key={row.signal}
                            className="border-b border-line last:border-0 bg-panel"
                          >
                            <th
                              scope="row"
                              className="text-caption text-ink text-start font-normal px-5 py-4"
                            >
                              {row.signal}
                            </th>
                            <td
                              className="text-data text-ink-3 text-end px-5 py-4"
                              data-numeric=""
                            >
                              {row.before}
                            </td>
                            <td
                              className="text-data text-end px-5 py-4"
                              data-numeric=""
                              style={{ color: 'var(--gr-positive)' }}
                            >
                              {row.after}
                            </td>
                            <td
                              className="text-data text-ink-2 text-end px-5 py-4"
                              data-numeric=""
                            >
                              {row.target}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <p className="text-caption text-ink-3 mt-4">
                  {loop.movementCaption}
                </p>
              </Reveal>
            ) : null}
          </div>
        </section>
      ))}

      {/* ================================================================
          THE CENTREPIECE — the complete loop.
          ============================================================== */}
      <section className="gr-hairline relative isolate overflow-hidden">
        <div aria-hidden className="gr-mesh opacity-70 -z-10" />
        <div className="gr-rail-wide gr-section">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] lg:gap-20 items-start">
            <Reveal>
              <p className="text-label uppercase text-brand-300">
                {loop.stepsLabel}
              </p>
              <h2 className="text-display-2 text-ink mt-5 text-balance">
                {loop.stepsSub}
              </h2>
              <LoopDiagram className="mt-10 lg:hidden" />
            </Reveal>

            <Reveal delay={100}>
              <LoopDiagram className="hidden lg:block" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================================================================
          WHY THIS CHANGES THE MODEL
          ============================================================== */}
      <section className="gr-hairline">
        <div className="gr-rail-wide gr-section-tight">
          <Reveal>
            <p className="text-label uppercase text-brand-300">
              {loop.whyLabel}
            </p>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="rounded-md border border-line bg-panel p-6">
                <p className="text-label uppercase text-ink-3">
                  {loop.whyTraditionalLabel}
                </p>
                <p className="text-caption text-ink-2 mt-4" data-numeric="">
                  {loop.whyTraditional}
                </p>
              </div>
              <div
                className="rounded-md border p-6"
                style={{
                  borderColor:
                    'color-mix(in oklab, var(--gr-brand-400) 45%, transparent)',
                  background:
                    'color-mix(in oklab, var(--gr-brand-500) 8%, transparent)',
                }}
              >
                <p className="text-label uppercase text-brand-300">
                  {loop.whyClosedLabel}
                </p>
                <p className="text-caption text-ink mt-4" data-numeric="">
                  {loop.whyClosed}
                </p>
              </div>
            </div>

            <p className="text-body text-ink-2 mt-8 max-w-3xl">
              {loop.whyBody}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================================================================
          NOT ANOTHER CONTENT ENGINE — the positioning guard, stated.
          ============================================================== */}
      <section className="gr-hairline">
        <div className="gr-rail-wide gr-section-tight">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="text-label uppercase text-ink-3">
                {loop.notEngineLabel}
              </p>
              <h2 className="text-h1 text-ink mt-4 text-balance">
                {loop.notEngineHeadline}
              </h2>
              <p className="text-body text-ink-2 mt-6">
                {loop.notEngineBody}
              </p>
              <ul className="mt-6 space-y-2">
                {loop.notEngineItems.map((item) => (
                  <li key={item} className="text-caption text-ink-2">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-body text-ink mt-6 pt-5 border-t border-line">
                {loop.notEngineClose}
              </p>
            </Reveal>

            <Reveal delay={100}>
              <p className="text-label uppercase text-ink-3">
                {loop.differenceLabel}
              </p>
              <dl className="mt-5">
                {loop.difference.map((row) => (
                  <div
                    key={row.term}
                    className="flex flex-wrap gap-x-3 py-3 border-b border-line"
                  >
                    <dt className="text-body text-ink">{row.term}</dt>
                    <dd className="text-body text-ink-2">{row.says}</dd>
                  </div>
                ))}
              </dl>
              <p className="text-body text-ink mt-6">{loop.differenceClose}</p>

              <p className="text-label uppercase text-ink-3 mt-10">
                {loop.livingLabel}
              </p>
              <p className="text-caption text-ink-2 mt-4">
                {loop.livingItems.join(' ')}
              </p>
              <p className="text-body text-ink-2 mt-4">{loop.livingBody}</p>
              <p className="text-caption text-brand-300 mt-4">
                {loop.livingVerbs.join(' ')}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================================================================
          CLOSE
          ============================================================== */}
      <section className="relative isolate overflow-hidden gr-hairline">
        <ImageWithScrim image="signal" scrim="heavy" sizes="100vw" className="-z-10" />
        <div className="gr-rail gr-section text-center relative">
          <h2 className="text-display-2 text-ink max-w-3xl mx-auto text-balance">
            {loop.ctaHeadline}
          </h2>
          <p className="text-body-lg text-ink-2 mt-6 max-w-2xl mx-auto">
            {loop.ctaBody}
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            <Button asChild variant="primary" size="lg">
              <Link href="/briefing">{loop.ctaPrimary}</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/app/mission-control">{loop.ctaSecondary}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
