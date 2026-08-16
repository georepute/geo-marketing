import type { Metadata } from 'next'
import { Link } from '@/components/i18n/Link'
import { GeonHexagon } from '@/components/viz/GeonHexagon'
import { Button } from '@/components/ui/Button'
import { ImageWithScrim } from '@/components/visual/ImageWithScrim'
import { getDictionary } from '@/lib/i18n/server'
import { getT } from '@/lib/i18n/content/translator'
import { Rich } from '@/lib/i18n/content/rich'
import { count, observedCost, percent } from '@/lib/format'
import { getOrg, getEconomics, getPrompts } from '@/lib/api/client'

export async function generateMetadata(): Promise<Metadata> {
  const copy = await getDictionary()
  return { title: copy.nav.methodology, description: copy.exec.everyFigureCaption }
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
] as const

/* Brief §15.4. Module scope so the list reads as one block; each string goes
   through t() at render, like every other rule and limitation on this page. */
const MODEL_RULES = [
  'All values are shown as ranges, never as point estimates.',
  'No value is described as confirmed lost revenue.',
  'Every model exposes its assumptions and data boundaries.',
  'Connected first-party conversion data improves confidence.',
  'Prediction is withheld when history is insufficient.',
  'Every exported brief carries methodology and limitation language.',
] as const

const LIMITATIONS = [
  'AI engine answers vary between runs and between users. Observations are point-in-time samples, not guarantees of what any individual buyer sees.',
  'Commercial exposure is a directional model built on customer-configured assumptions. It is useful for prioritisation and is not an audited financial statement.',
  'Attribution between an executed action and a signal movement is correlational. The system records both and reports the relationship; it does not claim causation.',
  'Competitor authority counts reflect sources engines cite publicly. A competitor may hold private advantages this system cannot observe.',
  'Where history is insufficient, predictive conclusions are withheld rather than estimated.',
] as const

/* Brief §15.3. Ids only at module scope — the definitions are pulled from the
   active dictionary inside the component, since they must translate. */
const CONFIDENCE_IDS = [
  'high',
  'medium',
  'directional',
  'insufficient-history',
] as const

export default async function MethodologyPage() {
  const copy = await getDictionary()
  const t = await getT()
  const CONFIDENCE = CONFIDENCE_IDS.map(
    (id) => [id, copy.confidence[id]] as const,
  )
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
          <p className="text-label uppercase text-brand-300">
            {copy.nav.methodology}
          </p>
          <h1 className="text-display-1 text-ink mt-6 max-w-3xl text-balance">
            {t('The stronger the claim, the stronger the evidence path must be.')}
          </h1>
          <p className="text-body-lg text-ink-2 mt-6 max-w-2xl">
            {t('Every conclusion in this system can be traced to a date, a source, an engine, a prompt or a connected dataset. This page states how, and where the boundaries are.')}
          </p>
          <p className="text-caption text-ink-3 mt-6" data-numeric="">
            {t('Methodology version {version} · observed {date}', {
              version: org.methodologyVersion,
              date: org.asOf,
            })}
          </p>
        </div>
      </section>

      {/* --- GEON ------------------------------------------------------- */}
      <section id="geon" className="gr-hairline">
        <div className="gr-rail-wide gr-section">
          <p className="text-label uppercase text-brand-300">
            {t('The GEON framework')}
          </p>
          <h2 className="text-h1 text-ink mt-3 max-w-3xl text-balance">
            {t('Six vectors, one published weighting')}
          </h2>
          <p className="text-body text-ink-2 mt-4 max-w-2xl mb-9">
            {t('The Decision Health Index is a weighted function of these six vectors — not a score assigned by judgement. The weighting is published below so the index can be recomputed independently.')}
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
              {t('Decision Health Index weighting')}
            </p>
            {/* The formula keeps the vector names as t() lookups so it reads in
                the same vocabulary as the cards above it. */}
            <p className="text-body text-ink mt-3 font-mono">
              ({t('Visibility')} × 0.25) + ({t('Authority')} × 0.30) + (
              {t('Context')} × 0.10) + ({t('Trust')} × 0.20) + (
              {t('Consistency')} × 0.075) + ({t('Market Fit')} × 0.075)
            </p>
            <p className="text-caption text-ink-2 mt-3">
              <Rich
                text={t('Yields <b>{score} of 100</b> for the seeded organisation. Authority carries the heaviest weight and the lowest score, which is why it is the binding constraint.', {
                  score: org.data.decisionHealthIndex,
                })}
              />
            </p>
          </div>
        </div>
      </section>

      {/* --- Evidence sources ------------------------------------------- */}
      <section id="sources" className="gr-hairline">
        <div className="gr-rail-wide gr-section">
          <p className="text-label uppercase text-brand-300">{t('Evidence')}</p>
          <h2 className="text-h1 text-ink mt-3">
            {t('Where the observations come from')}
          </h2>
          <p className="text-body text-ink-2 mt-4 max-w-2xl mb-9">
            <Rich
              text={t('This environment observes <b>{questions}</b> decision questions across six AI engines, and <b>{keywords}</b> commercial keywords in Google.', {
                questions: count(prompts.data.length),
                keywords: count(economics.data.totalKeywords),
              })}
            />
          </p>

          <dl className="grid gap-px bg-line border border-line rounded-md overflow-hidden md:grid-cols-2">
            {EVIDENCE_SOURCES.map((source) => (
              <div key={source.name} className="bg-panel p-5">
                <dt className="text-body text-ink">{t(source.name)}</dt>
                <dd className="text-caption text-ink-2 mt-2">
                  {t(source.note)}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* --- Confidence -------------------------------------------------- */}
      <section id="confidence" className="gr-hairline">
        <div className="gr-rail-wide gr-section">
          <p className="text-label uppercase text-brand-300">
            {t('Confidence')}
          </p>
          <h2 className="text-h1 text-ink mt-3">
            {t('Every conclusion carries its own confidence')}
          </h2>
          <p className="text-body text-ink-2 mt-4 max-w-2xl mb-9">
            {t('Confidence is attached to the individual conclusion, not to the product. Two findings in the same readout can carry different confidence, and they frequently do.')}
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
            {t('Financial model')}
          </p>
          <h2 className="text-h1 text-ink mt-3">
            {t('Directional, ranged, and never described as confirmed')}
          </h2>

          <div className="mt-9 rounded-md border border-line bg-panel p-6">
            <p className="text-label uppercase text-ink-3">{t('The model')}</p>
            <p className="text-h3 text-ink mt-3 font-mono">
              {copy.exposure.formula}
            </p>
          </div>

          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {MODEL_RULES.map((rule) => (
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
                <span className="text-caption text-ink-2">{t(rule)}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 rounded-md border border-line bg-panel p-6">
            <p className="text-label uppercase text-ink-3">
              {t('Search economics, derived')}
            </p>
            <dl className="grid gap-5 sm:grid-cols-3 mt-4">
              <div>
                <dt className="text-caption text-ink-3">
                  {t('Blended CPC')}
                </dt>
                <dd className="text-data-lg text-ink mt-2" data-numeric="">
                  {observedCost(economics.data.blendedCpc)}
                </dd>
              </div>
              <div>
                <dt className="text-caption text-ink-3">
                  {t('Break-even CPC')}
                </dt>
                <dd className="text-data-lg text-ink mt-2" data-numeric="">
                  {observedCost(economics.data.breakEvenCpc)}
                </dd>
              </div>
              <div>
                <dt className="text-caption text-ink-3">
                  {t('Above break-even')}
                </dt>
                <dd className="text-data-lg text-ink mt-2" data-numeric="">
                  {t('{n} of {total}', {
                    n: economics.data.keywordsAboveBreakEven,
                    total: economics.data.totalKeywords,
                  })}
                </dd>
              </div>
            </dl>
            <p className="text-caption text-ink-2 mt-5">
              {t('Break-even is average order value × gross margin × site conversion. Paid dependency is classified from the ratio of blended CPC to break-even — it is derived, never asserted.')}
            </p>
          </div>
        </div>
      </section>

      {/* --- Limitations --------------------------------------------------- */}
      <section id="limitations" className="gr-hairline">
        <div className="gr-rail-wide gr-section">
          <p className="text-label uppercase text-brand-300">
            {t('Limitations')}
          </p>
          <h2 className="text-h1 text-ink mt-3">
            {t('What this system cannot tell you')}
          </h2>

          <ul className="mt-9 grid gap-3">
            {LIMITATIONS.map((limitation) => (
              <li
                key={limitation}
                className="rounded-md border border-line bg-panel p-5 text-caption text-ink-2"
              >
                {t(limitation)}
              </li>
            ))}
          </ul>

          <div className="mt-9 rounded-md border border-line bg-panel p-6">
            <p className="text-label uppercase text-ink-3">
              {t('This demonstration environment')}
            </p>
            <p className="text-caption text-ink-2 mt-3 max-w-3xl">
              <Rich
                text={t('Northwind Supply is a fictional organisation. Its figures are seeded, internally consistent and derived from a single set of anchor facts — <b>{presence}</b> recommendation presence, <b>{coverage}</b> supplier-evaluation coverage, <b>{share}</b> competitor share. Every other number on this site is computed from those, and a test suite fails the build if any screen disagrees.', {
                  presence: percent(4.2),
                  coverage: '7%',
                  share: percent(31),
                })}
              />
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild variant="primary">
              <Link href="/app/mission-control">
                {t('Open Mission Control')}
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/engines">{t('See the engines')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
