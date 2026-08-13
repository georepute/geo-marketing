import type { Metadata } from 'next'
import Link from 'next/link'
import { ImageWithScrim } from '@/components/visual/ImageWithScrim'
import { Button } from '@/components/ui/Button'
import { copy } from '@/lib/copy/en'

export const metadata: Metadata = {
  title: 'Book an Executive Briefing',
  description:
    'A working session against your own market. We reconstruct one commercial decision in your category and show you what determined it.',
}

/* ============================================================================
   THE BRIEFING ROUTE — doc §5.

   Every meeting CTA on the site resolves here: the home close, the marketplace
   buy controls while pricing is withheld, and the footer. Giving them all one
   destination now means the booking calendar lands in a single place later
   rather than being threaded back through a dozen call sites.

   The editorial content below is final. The scheduling panel is not yet
   connected — see the BOOKING PANEL note where it belongs.
   ========================================================================= */

export default function BriefingPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <ImageWithScrim
          image="circuitry"
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
            {copy.briefing.eyebrow}
          </p>
          <h1 className="text-display-1 text-ink mt-6 max-w-3xl text-balance">
            {copy.briefing.title}
          </h1>
          <p className="text-body-lg text-ink-2 mt-6 max-w-2xl">
            {copy.briefing.sub}
          </p>

          <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-5">
            {[
              [copy.briefing.durationLabel, copy.briefing.duration],
              [copy.briefing.formatLabel, copy.briefing.format],
              [copy.briefing.costLabel, copy.briefing.cost],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="text-label uppercase text-ink-3">{label}</dt>
                <dd className="text-body text-ink mt-2">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="gr-hairline">
        <div className="gr-rail-wide gr-section">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-16 items-start">
            <div>
              <h2 className="text-h1 text-ink">{copy.briefing.covers}</h2>
              <ul className="mt-7 space-y-5">
                {copy.briefing.coversItems.map((item, index) => (
                  <li key={item} className="flex gap-5">
                    <span
                      aria-hidden
                      className="text-label text-ink-3 pt-1 shrink-0"
                      data-numeric=""
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-body text-ink-2">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-12 pt-8 border-t border-line">
                <h2 className="text-label uppercase text-ink-3">
                  {copy.briefing.who}
                </h2>
                <p className="text-body text-ink-2 mt-4 max-w-xl">
                  {copy.briefing.whoBody}
                </p>
              </div>
            </div>

            {/* ============================================================
                BOOKING PANEL — doc §5.

                The scheduling calendar belongs here: date and time selection
                against real availability, earliest slot at least 48 hours out,
                unavailable times hidden, double-booking prevented, and
                confirmation sent to both the visitor and the admin.

                Not yet connected. The interim routes below are honest about
                that rather than presenting a control that cannot complete.
                ========================================================== */}
            <aside className="rounded-md border border-line bg-panel p-6 lg:sticky lg:top-24">
              <p className="text-label uppercase text-brand-300">
                Arrange the session
              </p>
              <p className="text-body text-ink-2 mt-4">
                Scheduling opens shortly. In the meantime, start the
                reconstruction on your own domain — the briefing begins from
                whatever it returns.
              </p>

              <Button asChild variant="primary" size="lg" className="w-full mt-6">
                <Link href="/app/reconstruct">{copy.home.heroCtaPrimary}</Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="w-full mt-3"
              >
                <Link href="/marketplace">
                  {copy.home.heroCtaSecondary}
                </Link>
              </Button>

              <p className="text-caption text-ink-3 mt-6 pt-5 border-t border-line">
                {copy.exec.everyFigureCaption}
              </p>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
