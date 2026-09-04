import { Reveal } from '@/components/motion/Reveal'
import { ProductScreen } from '@/components/product/ProductScreen'
import { getDictionary } from '@/lib/i18n/server'
import { readyScreens } from '@/lib/visual/screens'
import { cn } from '@/lib/utils/cn'

/* ============================================================================
   SECTIONS 6, 7 and 10 — the three that enumerate capability.

   All three are a headline, a line of prose and a set of short terms, so
   they share one Band. What differs is weight: section 10 is the capability
   proof and gets the heavier treatment, the other two sit quieter so the
   page does not read as three consecutive feature grids.
   ========================================================================= */

function Band({
  headline,
  body,
  items,
  footnote,
  emphasis = 'standard',
}: {
  headline: string
  body?: string
  items: readonly string[]
  footnote?: string
  emphasis?: 'standard' | 'strong'
}) {
  return (
    <>
      <Reveal>
        <h2 className="text-display-2 text-ink max-w-3xl text-balance">
          {headline}
        </h2>
        {body ? (
          <p className="text-body-lg text-ink-2 mt-6 max-w-2xl">{body}</p>
        ) : null}
      </Reveal>

      <ul
        className={cn(
          'mt-10 grid gap-3',
          emphasis === 'strong'
            ? 'sm:grid-cols-2 lg:grid-cols-3'
            : 'sm:grid-cols-2 lg:grid-cols-3',
        )}
      >
        {items.map((item, i) => (
          <Reveal as="li" key={item} delay={i * 45}>
            <div
              className={cn(
                'h-full rounded-md border px-5 py-4',
                'transition-colors duration-[var(--gr-dur-base)]',
                emphasis === 'strong'
                  ? 'border-line-strong bg-inset hover:border-brand-400/60'
                  : 'border-line bg-panel hover:border-brand-400/50',
              )}
            >
              <span
                className={cn(
                  'text-body',
                  emphasis === 'strong' ? 'text-ink' : 'text-ink-2',
                )}
              >
                {item}
              </span>
            </div>
          </Reveal>
        ))}
      </ul>

      {footnote ? (
        <Reveal delay={120}>
          <p className="text-body-lg text-ink mt-10 max-w-3xl text-balance border-s-2 border-brand-400 ps-6">
            {footnote}
          </p>
        </Reveal>
      ) : null}
    </>
  )
}

/* --- 6 · revenue expansion --------------------------------------------- */
export async function AgencyRevenue() {
  const copy = await getDictionary()
  const s = copy.agency.revenue

  return (
    <section className="gr-hairline">
      <div className="gr-rail-wide gr-section">
        <Band
          headline={s.headline}
          body={s.body}
          items={s.items}
          footnote={s.highlight}
        />
      </div>
    </section>
  )
}

/* --- 7 · agency intelligence -------------------------------------------
   The one section that shows rather than lists. The brief asks for the
   client meeting to carry evidence, so a real screen sits under the terms
   — and hides itself if that export is not in place yet. */
export async function AgencyIntelligence() {
  const copy = await getDictionary()
  const s = copy.agency.intelligence
  const screen = readyScreens(['executive-position'])

  return (
    <section className="gr-hairline">
      <div className="gr-rail-wide gr-section">
        <Band
          headline={s.headline}
          body={s.body}
          items={s.items}
          footnote={s.supporting}
        />

        {screen.length > 0 ? (
          <div className="mt-12">
            <ProductScreen
              id="executive-position"
              sizes="(min-width: 1024px) 70vw, 100vw"
            />
          </div>
        ) : null}
      </div>
    </section>
  )
}

/* --- 10 · proof of power ------------------------------------------------ */
export async function AgencyProof() {
  const copy = await getDictionary()
  const s = copy.agency.proof

  return (
    <section className="gr-hairline relative isolate overflow-hidden">
      <div aria-hidden className="gr-mesh opacity-50 -z-10" />
      <div className="gr-rail-wide gr-section">
        <Band headline={s.headline} items={s.modules} emphasis="strong" />
      </div>
    </section>
  )
}
