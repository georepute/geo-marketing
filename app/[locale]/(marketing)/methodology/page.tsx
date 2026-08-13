import type { Metadata } from 'next'
import { Link } from '@/components/i18n/Link'
import { GeonHexagon } from '@/components/viz/GeonHexagon'
import { Button } from '@/components/ui/Button'
import { ImageWithScrim } from '@/components/visual/ImageWithScrim'
import { copy } from '@/lib/copy/en'
import { count, observedCost, percent } from '@/lib/format'
import { getOrg, getEconomics, getPrompts } from '@/lib/api/client'

export const metadata: Metadata = {
  title: 'Methodology',
  description:
    'GEON framework, evidence sources, the confidence model and the directional financial model — with its limitations stated.',
}

/* Brief §15.2 */
const EVIDENCE_SOURCES = [
  {
    name: 'Public AI responses',
    note: 'Answers observed from six engines against a fixed question set, recorded with engine, date and full response.',
  },
  {
    name: 'Third-party search and market data',
    note: 'Keyword volume, organic position, competition and cost per click.',
  },
  {
    name: 'Connected first-party analytics',
    note: 'Search Console and Analytics, where the customer connects them. Improves confidence; never required.',
  },
  {
    name: 'Public competitor information',
    note: 'Published positions, citations and the sources engines reach for when recommending a competitor.',
  },
  {
    name: 'Public content, reputation and trust signals',
    note: 'Independent validation, review corpora and cross-source consistency.',
  },
  {
    name: 'Customer-configured business assumptions',
    note: 'Average deal value, conversion rates and revenue split by decision stage. Always labelled as customer-provided.',
  },
  {
    name: 'Historical GeoRepute scans and action outcomes',
    note: 'Prior observations and whether an executed action moved the signal it targeted.',
  },
]

/* Brief §15.3, definitions verbatim */
const CONFIDENCE = [
  ['high', copy.confidence.high],
  ['medium', copy.confidence.medium],
  ['directional', copy.confidence.directional],
  ['insufficient-history', copy.confidence['insufficient-history']],
] as const

export default async function MethodologyPage() {
  const [org, economics, prompts] = await Promise.all([
    getOrg(),
    getEconomics(),
    getPrompts(),
  ])

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
          <p className="text-label uppercase text-brand-300">Methodology</p>
          <h1 className="text-display-1 text-ink mt-6 max-w-3xl text-balance">
            The stronger the claim, the stronger the evidence path must be.
          </h1>
          <p className="text-body-lg text-ink-2 mt-6 max-w-2xl">
            Every conclusion in this system can be traced to a date, a source,
            an engine, a prompt or a connected dataset. This page states how,
            and where the boundaries are.
          </p>
          <p className="text-caption text-ink-3 mt-6" data-numeric="">
            Methodology version {org.methodologyVersion} · observed {org.asOf}
          </p>
        </div>
      </section>

      {/* --- GEON ------------------------------------------------------- */}
      <section id="geon" className="gr-hairline">
        <div className="gr-rail-wide gr-section">
          <p className="text-label uppercase text-brand-300">
            The GEON framework
          </p>
          <h2 className="text-h1 text-ink mt-3 max-w-3xl text-balance">
            Six vectors, one published weighting
          </h2>
          <p className="text-body text-ink-2 mt-4 max-w-2xl mb-9">
            The Decision Health Index is a weighted function of these six
            vectors — not a score assigned by judgement. The weighting is
            published below so the index can be recomputed independently.
          </p>

          <div className="rounded-md border border-line bg-panel p-6 md:p-8">
            <GeonHexagon vectors={org.data.geon} />
          </div>

          <div className="grid gap-px bg-line border border-line rounded-md overflow-hidden md:grid-cols-2 lg:grid-cols-3 mt-5">
            {org.data.geon.map((vector) => (
              <div key={vector.key} className="bg-panel p-5">
                <p className="text-label uppercase text-ink-3">
                  {vector.label}
                </p>
                <p className="text-caption text-ink-2 mt-3">
                  {vector.definition}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-md border border-line bg-panel p-6">
            <p className="text-label uppercase text-ink-3">
              Decision Health Index weighting
            </p>
            <p className="text-body text-ink mt-3 font-mono">
              (Visibility × 0.25) + (Authority × 0.30) + (Context × 0.10) +
              (Trust × 0.20) + (Consistency × 0.075) + (Market Fit × 0.075)
            </p>
            <p className="text-caption text-ink-2 mt-3">
              Yields{' '}
              <span className="text-ink" data-numeric="">
                {org.data.decisionHealthIndex} of 100
              </span>{' '}
              for the seeded organisation. Authority carries the heaviest weight
              and the lowest score, which is why it is the binding constraint.
            </p>
          </div>
        </div>
      </section>

      {/* --- Evidence sources ------------------------------------------- */}
      <section id="sources" className="gr-hairline">
        <div className="gr-rail-wide gr-section">
          <p className="text-label uppercase text-brand-300">Evidence</p>
          <h2 className="text-h1 text-ink mt-3">Where the observations come from</h2>
          <p className="text-body text-ink-2 mt-4 max-w-2xl mb-9">
            This environment observes{' '}
            <span className="text-ink" data-numeric="">
              {count(prompts.data.length)}
            </span>{' '}
            decision questions across six AI engines, and{' '}
            <span className="text-ink" data-numeric="">
              {count(economics.data.totalKeywords)}
            </span>{' '}
            commercial keywords in Google.
          </p>

          <dl className="grid gap-px bg-line border border-line rounded-md overflow-hidden md:grid-cols-2">
            {EVIDENCE_SOURCES.map((source) => (
              <div key={source.name} className="bg-panel p-5">
                <dt className="text-body text-ink">{source.name}</dt>
                <dd className="text-caption text-ink-2 mt-2">{source.note}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* --- Confidence -------------------------------------------------- */}
      <section id="confidence" className="gr-hairline">
        <div className="gr-rail-wide gr-section">
          <p className="text-label uppercase text-brand-300">Confidence</p>
          <h2 className="text-h1 text-ink mt-3">
            Every conclusion carries its own confidence
          </h2>
          <p className="text-body text-ink-2 mt-4 max-w-2xl mb-9">
            Confidence is attached to the individual conclusion, not to the
            product. Two findings in the same readout can carry different
            confidence, and they frequently do.
          </p>

          <dl className="grid gap-px bg-line border border-line rounded-md overflow-hidden md:grid-cols-2">
            {CONFIDENCE.map(([key, entry]) => (
              <div key={key} className="bg-panel p-5 flex gap-4">
                <span
                  aria-hidden
                  className="text-body-lg leading-none mt-1"
                  style={{ color: `var(--gr-conf-${key === 'insufficient-history' ? 'insufficient' : key})` }}
                >
                  {key === 'high'
                    ? '●'
                    : key === 'medium'
                      ? '◐'
                      : key === 'directional'
                        ? '◔'
                        : '○'}
                </span>
                <div>
                  <dt className="text-body text-ink">{entry.label}</dt>
                  <dd className="text-caption text-ink-2 mt-2">
                    {entry.definition}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* --- Financial model --------------------------------------------- */}
      <section id="model" className="gr-hairline">
        <div className="gr-rail-wide gr-section">
          <p className="text-label uppercase text-brand-300">
            Financial model
          </p>
          <h2 className="text-h1 text-ink mt-3">
            Directional, ranged, and never described as confirmed
          </h2>

          <div className="mt-9 rounded-md border border-line bg-panel p-6">
            <p className="text-label uppercase text-ink-3">The model</p>
            <p className="text-h3 text-ink mt-3 font-mono">
              {copy.exposure.formula}
            </p>
          </div>

          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {[
              'All values are shown as ranges, never as point estimates.',
              'No value is described as confirmed lost revenue.',
              'Every model exposes its assumptions and data boundaries.',
              'Connected first-party conversion data improves confidence.',
              'Prediction is withheld when history is insufficient.',
              'Every exported brief carries methodology and limitation language.',
            ].map((rule) => (
              <li
                key={rule}
                className="rounded-md border border-line bg-panel p-4 flex gap-3"
              >
                <span
                  aria-hidden
                  className="shrink-0"
                  style={{ color: 'var(--gr-positive)' }}
                >
                  ✓
                </span>
                <span className="text-caption text-ink-2">{rule}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 rounded-md border border-line bg-panel p-6">
            <p className="text-label uppercase text-ink-3">
              Search economics, derived
            </p>
            <dl className="grid gap-5 sm:grid-cols-3 mt-4">
              <div>
                <dt className="text-caption text-ink-3">Blended CPC</dt>
                <dd className="text-data-lg text-ink mt-2" data-numeric="">
                  {observedCost(economics.data.blendedCpc)}
                </dd>
              </div>
              <div>
                <dt className="text-caption text-ink-3">Break-even CPC</dt>
                <dd className="text-data-lg text-ink mt-2" data-numeric="">
                  {observedCost(economics.data.breakEvenCpc)}
                </dd>
              </div>
              <div>
                <dt className="text-caption text-ink-3">
                  Above break-even
                </dt>
                <dd className="text-data-lg text-ink mt-2" data-numeric="">
                  {economics.data.keywordsAboveBreakEven} of{' '}
                  {economics.data.totalKeywords}
                </dd>
              </div>
            </dl>
            <p className="text-caption text-ink-2 mt-5">
              Break-even is average order value × gross margin × site conversion.
              Paid dependency is classified from the ratio of blended CPC to
              break-even — it is derived, never asserted.
            </p>
          </div>
        </div>
      </section>

      {/* --- Limitations --------------------------------------------------- */}
      <section id="limitations" className="gr-hairline">
        <div className="gr-rail-wide gr-section">
          <p className="text-label uppercase text-brand-300">Limitations</p>
          <h2 className="text-h1 text-ink mt-3">What this system cannot tell you</h2>

          <ul className="mt-9 grid gap-3">
            {[
              'AI engine answers vary between runs and between users. Observations are point-in-time samples, not guarantees of what any individual buyer sees.',
              'Commercial exposure is a directional model built on customer-configured assumptions. It is useful for prioritisation and is not an audited financial statement.',
              'Attribution between an executed action and a signal movement is correlational. The system records both and reports the relationship; it does not claim causation.',
              'Competitor authority counts reflect sources engines cite publicly. A competitor may hold private advantages this system cannot observe.',
              'Where history is insufficient, predictive conclusions are withheld rather than estimated.',
            ].map((limitation) => (
              <li
                key={limitation}
                className="rounded-md border border-line bg-panel p-5 text-caption text-ink-2"
              >
                {limitation}
              </li>
            ))}
          </ul>

          <div className="mt-9 rounded-md border border-line bg-panel p-6">
            <p className="text-label uppercase text-ink-3">
              This demonstration environment
            </p>
            <p className="text-caption text-ink-2 mt-3 max-w-3xl">
              Northwind Supply is a fictional organisation. Its figures are
              seeded, internally consistent and derived from a single set of
              anchor facts —{' '}
              <span className="text-ink" data-numeric="">
                {percent(4.2)}
              </span>{' '}
              recommendation presence,{' '}
              <span className="text-ink" data-numeric="">
                7%
              </span>{' '}
              supplier-evaluation coverage,{' '}
              <span className="text-ink" data-numeric="">
                {percent(31)}
              </span>{' '}
              competitor share. Every other number on this site is computed from
              those, and a test suite fails the build if any screen disagrees.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild variant="primary">
              <Link href="/app/mission-control">Open Mission Control</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/engines">See the engines</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
