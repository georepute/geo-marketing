import { Link } from '@/components/i18n/Link'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/motion/Reveal'
import { getDictionary } from '@/lib/i18n/server'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils/cn'

/* ============================================================================
   SECTIONS 5, 8 and 11 — the three sections that argue rather than enumerate.

   Each ends on a single sentence meant to be remembered, so each gives that
   sentence its own block with a rule beside it. Grouped in one file because
   they share that shape; kept as three components because they sit in three
   different places in the page and take different copy.
   ========================================================================= */

function Pullquote({
  lead,
  statement,
  className,
}: {
  lead?: string
  statement: string
  className?: string
}) {
  return (
    <div
      className={cn(
        'border-s-2 border-brand-400 ps-6 md:ps-8 max-w-3xl',
        className,
      )}
    >
      {lead ? <p className="text-h3 text-ink-3">{lead}</p> : null}
      <p className="text-h2 text-ink mt-2 text-balance">{statement}</p>
    </div>
  )
}

/* --- 5 · client retention --------------------------------------------- */
export async function AgencyRetention() {
  const copy = await getDictionary()
  const s = copy.agency.retention

  return (
    <section className="gr-hairline">
      <div className="gr-rail-wide gr-section">
        <Reveal>
          <h2 className="text-display-2 text-ink max-w-3xl text-balance">
            {s.headline}
          </h2>
          <p className="text-body-lg text-ink-2 mt-6 max-w-2xl">{s.body}</p>
          <p className="text-body text-ink-2 mt-4 max-w-2xl">{s.bodyTwo}</p>
        </Reveal>

        <Reveal delay={90}>
          <Pullquote
            lead={s.highlightLead}
            statement={s.highlight}
            className="mt-12"
          />
        </Reveal>
      </div>
    </section>
  )
}

/* --- 8 · standardization ----------------------------------------------- */
export async function AgencyStandardization() {
  const copy = await getDictionary()
  const s = copy.agency.standardization

  return (
    <section className="gr-hairline">
      <div className="gr-rail-wide gr-section">
        <Reveal>
          <h2 className="text-display-2 text-ink max-w-3xl text-balance">
            {s.headline}
          </h2>
          <p className="text-body-lg text-ink-2 mt-6 max-w-2xl">{s.body}</p>
        </Reveal>

        <Reveal delay={90}>
          <Pullquote statement={s.supporting} className="mt-10" />
        </Reveal>
      </div>
    </section>
  )
}

/* --- 11 · final positioning -------------------------------------------- */
export async function AgencyClose() {
  const copy = await getDictionary()
  const s = copy.agency.close

  return (
    <section className="gr-hairline relative isolate overflow-hidden">
      <div aria-hidden className="gr-mesh opacity-60 -z-10" />

      <div className="gr-rail-wide gr-section text-center">
        <Reveal>
          <p className="text-h2 text-ink-3 text-balance">{s.headline}</p>
          <h2 className="text-display-1 text-ink mt-4 max-w-4xl mx-auto text-balance">
            {s.statement}
          </h2>
          <p className="text-body-lg text-ink-2 mt-7 max-w-2xl mx-auto">
            {s.body}
          </p>

          <div className="mt-10 flex justify-center">
            <Button asChild variant="primary" size="lg">
              <Link href="/app/reconstruct">
                {copy.home.heroCtaPrimary}
                <ArrowRight className="size-4 ms-1" aria-hidden />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
