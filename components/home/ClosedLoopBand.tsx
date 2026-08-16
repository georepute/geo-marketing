import { Link } from '@/components/i18n/Link'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/motion/Reveal'
import { getDictionary } from '@/lib/i18n/server'
import { cn } from '@/lib/utils/cn'

/* ============================================================================
   HOMEPAGE CLOSED-LOOP BAND — doc §10, "a strong, concise Closed Loop section
   immediately after the Hero: PLAN → DO → CHECK → ACT → REPEAT".

   Concise is the operative word. The full argument has its own page; this
   band exists to plant one idea before the reader starts down the seven
   executive questions — that this system does not stop at the answer.

   Rendered as four stages plus a return, with the return edge drawn rather
   than described, because "and then it starts again" is the entire point and
   a fifth bullet saying so would not land.
   ========================================================================= */

export async function ClosedLoopBand() {
  const copy = await getDictionary()
  const loop = copy.loop

  return (
    <section className="gr-hairline relative isolate overflow-hidden">
      <div aria-hidden className="gr-mesh opacity-60 -z-10" />

      <div className="gr-rail-wide gr-section-tight">
        <Reveal>
          <p className="text-label uppercase text-brand-300">
            {loop.homeEyebrow}
          </p>
          <h2 className="text-display-2 text-ink mt-5 max-w-3xl text-balance">
            {loop.homeHeadline}
          </h2>
          <p className="text-body-lg text-ink-2 mt-6 max-w-2xl">
            {loop.homeSub}
          </p>
        </Reveal>

        {/* --- The four stages ------------------------------------------ */}
        <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {loop.stages.map((stage, index) => (
            <Reveal as="li" key={stage.id} delay={index * 70}>
              <div
                className={cn(
                  'relative h-full rounded-md border border-line bg-panel p-6',
                  'transition-colors duration-[var(--gr-dur-base)]',
                  'hover:border-brand-400/60',
                )}
              >
                <div className="flex items-baseline justify-between gap-3">
                  <span
                    className="text-label uppercase text-brand-300"
                    data-numeric=""
                  >
                    {stage.index}
                  </span>
                  <span className="text-label uppercase text-ink-3">
                    {stage.name}
                  </span>
                </div>

                <p className="text-body text-ink mt-5 text-balance">
                  {stage.headline}
                </p>

                {/* The connector. Drawn on the card rather than between them,
                    so it survives the grid rewrapping at every breakpoint. */}
                {index < loop.stages.length - 1 ? (
                  <span
                    aria-hidden
                    className={cn(
                      'gr-arrow hidden lg:block absolute top-1/2 -end-4',
                      'text-ink-3',
                    )}
                  >
                    →
                  </span>
                ) : null}
              </div>
            </Reveal>
          ))}
        </ol>

        {/* --- The return edge. The whole argument. --------------------- */}
        <Reveal delay={300}>
          <div className="mt-6 flex items-center gap-4">
            <span
              aria-hidden
              className="h-px flex-1"
              style={{
                background:
                  'linear-gradient(90deg, transparent, var(--gr-brand-400))',
              }}
            />
            <span className="text-label uppercase text-brand-300 shrink-0">
              {loop.cycle}
            </span>
            <span
              aria-hidden
              className="h-px flex-1"
              style={{
                background:
                  'linear-gradient(90deg, var(--gr-brand-400), transparent)',
              }}
            />
          </div>

          <p className="text-caption text-ink-3 mt-5 text-center max-w-xl mx-auto">
            {loop.cycleSub} {loop.stepsClose}
          </p>

          <div className="mt-9 flex justify-center">
            <Button asChild variant="secondary" size="lg">
              <Link href="/how-it-works">{loop.homeCta}</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
