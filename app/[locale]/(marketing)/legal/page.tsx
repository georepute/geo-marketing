import type { Metadata } from 'next'
import { Link } from '@/components/i18n/Link'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Legal and data handling',
  description:
    'Privacy, terms, data processing and security posture for the GeoRepute demonstration environment.',
  robots: { index: false, follow: true },
}

/* ============================================================================
   Legal.

   Added so the footer's Company column has no dead links. Every section states
   plainly that this is a demonstration environment and what that means in
   practice — which is more useful to a reviewer than a boilerplate policy
   copied from elsewhere, and considerably more honest.
   ========================================================================= */

const SECTIONS = [
  {
    id: 'privacy',
    title: 'Privacy',
    body: [
      'This environment collects nothing. There is no analytics script, no tag manager, no session recording and no third-party tracker on any page.',
      'The only data stored about you is your theme preference and any demonstration purchases, both held in your browser’s localStorage and readable only by this site. Nothing is transmitted anywhere. Clearing site data removes all of it, and the purchase-confirmation screen offers a reset control.',
    ],
  },
  {
    id: 'terms',
    title: 'Terms of service',
    body: [
      'No commercial terms apply. Nothing on this site constitutes an offer, and no contract can be formed through it.',
      'Pricing shown throughout is placeholder and clearly marked as such on the pricing page. The checkout collects no payment details and processes no charge.',
    ],
  },
  {
    id: 'data',
    title: 'Data processing',
    body: [
      'Northwind Supply is a fictional organisation. Every figure attributed to it is seeded, internally consistent and derived from a published set of anchor facts. No real company’s data appears anywhere in this environment.',
      'Competitor names, domains and citation counts are invented. Any resemblance to an operating business is coincidental and unintended.',
      'AI engines are referenced by their public product names for accuracy of description. No affiliation, endorsement or partnership is claimed or implied.',
    ],
  },
  {
    id: 'security',
    title: 'Security',
    body: [
      'There is no authentication, no user account and no server-side session. The sign-in screen requests no password because none is checked — inviting a real credential into a demonstration would be a hazard, not a convenience.',
      'No external network requests are made at runtime. Fonts are self-hosted, all visuals are generated in CSS or SVG, and the content security posture assumes no third-party origin is trusted.',
    ],
  },
]

export default function LegalPage() {
  return (
    <>
      <section className="gr-rail pt-16 pb-12 lg:pt-20">
        <p className="text-label uppercase text-brand-300">Legal</p>
        <h1 className="text-display-2 text-ink mt-6 max-w-3xl text-balance">
          What this environment does and does not do with data.
        </h1>
        <p className="text-body-lg text-ink-2 mt-6 max-w-2xl">
          This is a demonstration build. Rather than reproduce boilerplate that
          would not apply to it, each section below states the actual position.
        </p>
      </section>

      {SECTIONS.map((section) => (
        <section key={section.id} id={section.id} className="gr-hairline">
          <div className="gr-rail py-14 lg:py-16">
            <h2 className="text-h1 text-ink">{section.title}</h2>
            <div className="mt-6 space-y-4 max-w-2xl">
              {section.body.map((paragraph) => (
                <p key={paragraph} className="text-body text-ink-2">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="gr-hairline">
        <div className="gr-rail py-14 lg:py-16">
          <p className="text-caption text-ink-3 max-w-2xl">
            Before this platform is operated commercially, these sections must
            be replaced with reviewed policies covering the real data flows,
            retention periods, sub-processors and jurisdictions involved.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="secondary">
              <Link href="/methodology">Read the methodology</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/">Return home</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
