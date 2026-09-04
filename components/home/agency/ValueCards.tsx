import { Reveal } from '@/components/motion/Reveal'
import { getDictionary } from '@/lib/i18n/server'
import { cn } from '@/lib/utils/cn'

/* ============================================================================
   SECTION 2 — CORE VALUE.

   Six benefit cards. They are the first thing after the hero because the
   hero makes a claim and this is the only section that says, plainly, what
   an agency gets. Everything after it is mechanism.

   Deliberately plain: no icons, no numbers, no ornament. Six equal claims
   compete with each other, and anything decorative added to one reads as a
   ranking that the copy does not intend.
   ========================================================================= */

export async function AgencyValueCards() {
  const copy = await getDictionary()
  const s = copy.agency.value

  return (
    <section className="gr-hairline">
      <div className="gr-rail-wide gr-section">
        <Reveal>
          <h2 className="text-display-2 text-ink max-w-3xl text-balance">
            {s.headline}
          </h2>
          <p className="text-body-lg text-ink-2 mt-6 max-w-2xl">{s.intro}</p>
        </Reveal>

        <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {s.cards.map((card, i) => (
            <Reveal as="li" key={card.title} delay={i * 60}>
              <div
                className={cn(
                  'h-full rounded-md border border-line bg-panel p-6 md:p-7',
                  'transition-colors duration-[var(--gr-dur-base)]',
                  'hover:border-brand-400/60',
                )}
              >
                <h3 className="text-h3 text-ink text-balance">{card.title}</h3>
                <p className="text-body text-ink-2 mt-3">{card.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
