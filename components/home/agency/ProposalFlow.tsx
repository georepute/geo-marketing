import { Reveal } from '@/components/motion/Reveal'
import { getDictionary } from '@/lib/i18n/server'
import { ChevronRight } from 'lucide-react'

/* ============================================================================
   SECTION 9 — PROPOSAL AND COMMERCIALS.

   Seven terms and six arrows. Horizontal on a wide screen because the claim
   is that each step DERIVES from the one before it, and a vertical stack of
   nouns reads as a list of things the platform has rather than a chain.

   The arrows are decorative — the ordered list already carries the sequence
   for anyone not seeing them — so they are hidden from assistive technology
   rather than announced seven times as "chevron right".
   ========================================================================= */

export async function AgencyProposalFlow() {
  const copy = await getDictionary()
  const s = copy.agency.proposal

  return (
    <section className="gr-hairline">
      <div className="gr-rail-wide gr-section">
        <Reveal>
          <h2 className="text-display-2 text-ink max-w-3xl text-balance">
            {s.headline}
          </h2>
          <p className="text-body-lg text-ink-2 mt-6 max-w-2xl">{s.body}</p>
        </Reveal>

        <Reveal delay={80}>
          <ol className="mt-12 flex flex-wrap items-center gap-y-3">
            {s.flow.map((step, i) => (
              <li key={step} className="inline-flex items-center">
                <span className="rounded-sm border border-line bg-panel px-4 py-2.5 text-body text-ink">
                  {step}
                </span>
                {i < s.flow.length - 1 ? (
                  <ChevronRight
                    aria-hidden
                    className="size-4 mx-2 text-ink-3 shrink-0 rtl:rotate-180"
                  />
                ) : null}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
