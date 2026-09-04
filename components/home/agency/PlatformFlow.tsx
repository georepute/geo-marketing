import { Reveal } from '@/components/motion/Reveal'
import { getDictionary } from '@/lib/i18n/server'
import { cn } from '@/lib/utils/cn'

/* ============================================================================
   SECTION 3 — PLATFORM FLOW.

   Eight stages, brief to continuous growth. The brief asked for this to be
   highly visual, and the visual argument is the CONNECTION: eight capable
   steps in a list read as eight features, while eight steps on a single
   drawn line read as one system, which is the claim in the headline.

   So the rail is a real element rather than a border trick — it runs behind
   the numbered markers and stops short of the last one, because the flow
   ends somewhere and a line that runs off the end says otherwise.

   The numbers are the ordering, so they are not decorative and are exposed
   to assistive technology through an ordered list rather than drawn glyphs.
   ========================================================================= */

export async function AgencyPlatformFlow() {
  const copy = await getDictionary()
  const s = copy.agency.flow

  return (
    <section className="gr-hairline relative isolate overflow-hidden">
      <div aria-hidden className="gr-mesh opacity-50 -z-10" />

      <div className="gr-rail-wide gr-section">
        <Reveal>
          <h2 className="text-display-2 text-ink max-w-3xl text-balance">
            {s.headline}
          </h2>
        </Reveal>

        <ol className="relative mt-12">
          {/* The rail. Inset so it starts and ends inside the first and last
              markers rather than floating past them. */}
          <span
            aria-hidden
            className={cn(
              'pointer-events-none absolute top-4 bottom-4 w-px',
              'start-[15px] md:start-[19px]',
            )}
            style={{
              background:
                'linear-gradient(to bottom, transparent, var(--gr-line-strong) 8%, var(--gr-line-strong) 92%, transparent)',
            }}
          />

          {s.steps.map((step, i) => (
            <Reveal as="li" key={step.label} delay={i * 55}>
              <div className="relative flex gap-5 md:gap-6 pb-8 last:pb-0">
                <span
                  className={cn(
                    'relative z-10 shrink-0 grid place-items-center',
                    'size-8 md:size-10 rounded-full',
                    'border border-line-strong bg-inset',
                    'text-caption text-brand-300',
                  )}
                  data-numeric=""
                  aria-hidden
                >
                  {i + 1}
                </span>

                <div className="pt-1 md:pt-2">
                  <h3 className="text-label uppercase text-ink tracking-[0.09em]">
                    {step.label}
                  </h3>
                  <p className="text-body text-ink-2 mt-2 max-w-2xl">
                    {step.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
