import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Section, StatRow } from '@/components/home/Sections'
import { Hero } from '@/components/home/Hero'
import { DomainEntry } from '@/components/home/DomainEntry'
import { HomeInteractive } from './HomeClient'
import { DecisionJourneyTrack } from '@/components/viz/DecisionJourneyTrack'
import { GoogleVsAIGapMatrix } from '@/components/viz/GoogleVsAIGapMatrix'
import { IntelligenceReadout } from '@/components/readout/IntelligenceReadout'
import { RoleProvider } from '@/components/readout/RoleLens'
import { FeatureCard } from '@/components/visual/FeatureCard'
import { ImageWithScrim } from '@/components/visual/ImageWithScrim'
import { ENGINE_IMAGE, TIER_IMAGE } from '@/lib/visual/imagery'
import { copy } from '@/lib/copy/en'
import { count, percent, dateFull } from '@/lib/format'
import {
  getOrg,
  getCausalChain,
  getDecisionGraph,
  getDomainPreview,
  getEngines,
  getGapMatrix,
  getProducts,
  getReadouts,
  getReconstructableQuestions,
  getReconstruction,
  getStageCoverage,
  getCompetitors,
  getActions,
} from '@/lib/api/client'

export const metadata: Metadata = {
  title: `GeoRepute — ${copy.category}`,
  description: copy.meta.description,
}

export default async function Home() {
  const [
    org,
    chain,
    graph,
    preview,
    engines,
    gaps,
    products,
    readouts,
    questions,
    stages,
    competitors,
    actions,
  ] = await Promise.all([
    getOrg(),
    getCausalChain(),
    getDecisionGraph(),
    getDomainPreview('northwindsupply.com'),
    getEngines(),
    getGapMatrix(),
    getProducts(),
    getReadouts(),
    getReconstructableQuestions(),
    getStageCoverage(),
    getCompetitors(),
    getActions(),
  ])

  const heroQuestion = questions.data[0]!
  const hero = await getReconstruction(heroQuestion.id)

  const builtEngines = engines.data.filter((e) => e.built)
  const topCompetitor = competitors.data[0]!
  const self = competitors.data.find((c) => c.isSelf)!
  const executiveReadout = readouts.data.find((r) => r.id === 'r-decision-health')!
  const allProducts = [
    ...products.data.entry,
    ...products.data.advanced,
    ...products.data.premium,
  ]

  return (
    <>
      {/* ================================================================
          1 — HERO (§5, §19 verbatim)
          ============================================================== */}
      <Hero reconstruction={hero.data} />

      {/* ================================================================
          2 — MARKET DISRUPTION (§5)
          ============================================================== */}
      <Section
        eyebrow="Market disruption"
        headline={copy.analyticsDisruption}
        sub={copy.home.disruptionSub}
        wide
      >
        <DecisionJourneyTrack stages={stages.data} />
      </Section>

      {/* ================================================================
          3 — LIVE DOMAIN ENTRY (§5)
          ============================================================== */}
      <Section
        eyebrow="Live domain entry"
        headline={copy.home.liveEntry}
        sub="Enter a domain for a controlled instant preview. One signal is released; the full intelligence layer requires an account or a purchase."
        wide
      >
        <DomainEntry
          preview={preview.data}
          lockedCount={preview.data.lockedSignalCount}
        />
      </Section>

      {/* ================================================================
          4 — GOOGLE vs AI GAP (§5)
          ============================================================== */}
      <Section
        eyebrow="Google vs AI"
        headline={copy.home.googleVsAiFull}
        sub={copy.home.googleVsAiSub}
        wide
      >
        <GoogleVsAIGapMatrix rows={gaps.data} limit={8} />
      </Section>

      {/* ================================================================
          5 — DECISION INTELLIGENCE GRAPH (§5)
          ============================================================== */}
      <Section
        eyebrow="Decision intelligence graph"
        headline={copy.home.graph}
        sub={copy.home.graphSub}
        wide
      >
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] items-start">
          <div className="rounded-md border border-line bg-panel p-6">
            <HomeInteractive
              chain={chain.data}
              graph={graph.data}
              readouts={readouts.data}
              mode="graph"
            />
          </div>

          <div className="rounded-md border border-line bg-panel p-6">
            <p className="text-label uppercase text-ink-3 mb-6">
              The same decision, as a causal chain
            </p>
            <HomeInteractive
              chain={chain.data}
              graph={graph.data}
              readouts={readouts.data}
              mode="chain"
            />
          </div>
        </div>
      </Section>

      {/* ================================================================
          6 — INTELLIGENCE ENGINES (§5)
          ============================================================== */}
      <Section
        eyebrow="Intelligence engines"
        headline={copy.home.engines}
        sub={copy.home.enginesSub}
        wide
      >
        <div className="grid gap-4 md:grid-cols-2">
          {builtEngines.map((engine) => {
            const readout = readouts.data.find((r) => r.id === engine.readoutId)
            return (
              <FeatureCard
                key={engine.slug}
                href={`/engines/${engine.slug}`}
                image={ENGINE_IMAGE[engine.slug]}
                iconKey={engine.slug}
                eyebrow={engine.name}
                title={engine.businessQuestion}
                description={readout?.executiveTruth}
                meta={engine.capabilities.slice(0, 3)}
              />
            )
          })}
        </div>

        <p className="text-caption text-ink-3 mt-5">
          Four engines are built in this environment. All twelve appear on the{' '}
          <Link
            href="/engines"
            className="text-ink-2 underline underline-offset-4 hover:text-ink"
          >
            engines overview
          </Link>
          .
        </p>
      </Section>

      {/* ================================================================
          7 — COMPETITOR DECISION CAPTURE (§5)
          ============================================================== */}
      <Section
        eyebrow="Competitor decision capture"
        headline={copy.home.competitorCapture}
        sub="Reveal recommendation share, authority advantage, source advantage and decision-stage control — and why the competitor wins, not only that they win."
        wide
      >
        <StatRow
          items={[
            {
              label: 'Competitor share',
              value: percent(topCompetitor.recommendationSharePct),
              note: `${topCompetitor.name} receives the recommendation across the tracked decision set.`,
            },
            {
              label: 'Your share',
              value: percent(self.recommendationSharePct),
              note: 'Six recommendation events across 144 answer slots.',
            },
            {
              label: 'Their authority sources',
              value: count(topCompetitor.authoritySources),
              note: 'Independent sources engines can cite when recommending them.',
            },
            {
              label: 'Your authority sources',
              value: count(self.authoritySources),
              note: 'Category median is 14. This is the binding constraint.',
            },
          ]}
        />

        <div className="mt-6 rounded-md border border-line bg-panel p-6">
          <p className="text-label uppercase text-ink-3">Why they win</p>
          <blockquote
            className="mt-3 border-s-2 ps-4 text-body-lg text-ink-2 max-w-3xl"
            style={{ borderColor: 'var(--gr-critical)' }}
          >
            {topCompetitor.whyTheyWin}
          </blockquote>
        </div>
      </Section>

      {/* ================================================================
          8 — STRATEGIC TIMING (§5)
          ============================================================== */}
      <Section
        eyebrow="Strategic timing"
        headline={copy.timing}
        sub="Timing position, window duration, dominant signal and decision deadline — treated as part of action priority, not a separate chart."
        wide
      >
        <StatRow
          items={[
            {
              label: 'Timing position',
              value: org.data.timing.positionLabel,
              note: org.data.timing.dominantSignal,
            },
            {
              label: 'Window duration',
              value: `${org.data.timing.windowMonths} months`,
              note: `Closes ${dateFull(org.data.timing.windowClosesAt)}.`,
            },
            {
              label: 'Market readiness',
              value: `${org.data.timing.marketReadiness}/100`,
              note: 'Buyers are educated; answers are not yet fixed.',
            },
            {
              label: 'Decision deadline',
              value: dateFull(org.data.timing.decisionDeadline),
              note: 'After this point displacement cost rises materially.',
            },
          ]}
        />
      </Section>

      {/* ================================================================
          9 — EXECUTIVE INTELLIGENCE (§5)
          ============================================================== */}
      <Section
        eyebrow="Executive intelligence"
        headline={copy.home.executive}
        sub="Decision Health, Revenue Exposure, Competitive Threat, Narrative Control and Strategic Timing — one position, not five dashboards."
        wide
      >
        <RoleProvider role="executive">
          <div className="rounded-md border border-line bg-panel p-6 md:p-8">
            <IntelligenceReadout readout={executiveReadout} variant="full" />
          </div>
        </RoleProvider>

        <div className="mt-5">
          <Button asChild variant="secondary">
            <Link href="/app/mission-control">Open Executive Mission Control</Link>
          </Button>
        </div>
      </Section>

      {/* ================================================================
          10 — INTELLIGENCE MARKETPLACE (§5)
          ============================================================== */}
      <Section
        eyebrow="Intelligence marketplace"
        headline={copy.marketplace}
        sub={copy.home.marketplaceSub}
        wide
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {allProducts.slice(0, 6).map((product) => (
            <FeatureCard
              key={product.slug}
              href={`/marketplace/${product.slug}`}
              image={TIER_IMAGE[product.tier]}
              iconKey={product.tier}
              eyebrow={`${product.tier} · ${product.depth}`}
              title={product.name}
              description={product.businessQuestion}
            />
          ))}
        </div>

        <div className="mt-5">
          <Button asChild variant="secondary">
            <Link href="/marketplace">Browse all intelligence products</Link>
          </Button>
        </div>
      </Section>

      {/* ================================================================
          11 — ACTION INTELLIGENCE (§5)
          ============================================================== */}
      <Section
        eyebrow="Action intelligence"
        headline={copy.action}
        sub="Every intervention carries a reason, evidence, expected impact, confidence, urgency, effort, owner, deadline, success metric and measured change."
        wide
      >
        <ol className="grid gap-3">
          {actions.data.slice(0, 3).map((action, i) => (
            <li
              key={action.id}
              className="rounded-md border border-line bg-panel p-5 flex flex-wrap items-start gap-x-6 gap-y-3"
            >
              <span
                className="grid place-items-center size-7 rounded-xs bg-brand-700 text-ink text-label shrink-0"
                data-numeric=""
              >
                {i + 1}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-body text-ink">{action.action}</p>
                <p className="text-caption text-ink-2 mt-2">{action.reason}</p>
              </div>
              <div className="shrink-0">
                <p className="text-label uppercase text-ink-3">
                  Expected impact
                </p>
                <p className="text-caption text-ink mt-2" data-numeric="">
                  {action.expectedImpact}
                </p>
                <p className="text-caption text-ink-3 mt-2">
                  {action.owner} · {dateFull(action.deadline)}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-5">
          <Button asChild variant="secondary">
            <Link href="/app/actions">Open the Action Center</Link>
          </Button>
        </div>
      </Section>

      {/* ================================================================
          12 — FINAL CONVERSION (§5, §19 verbatim)
          The only gold-tinted image on the site, held back for the single
          commercial close so the accent stays a signal.
          ============================================================== */}
      <section className="relative isolate overflow-hidden gr-hairline">
        <ImageWithScrim
          image="signal"
          scrim="heavy"
          sizes="100vw"
          className="-z-10"
        />
        <div className="gr-rail gr-section text-center relative">
          <h2 className="text-display-2 text-ink max-w-3xl mx-auto text-balance">
            {copy.finalCta}
          </h2>
          <p className="text-body-lg text-ink-2 mt-5">
            {copy.home.finalCtaSub}
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-10">
            <Button asChild variant="primary" size="lg">
              <Link href="/app/reconstruct">Start My Analysis</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/marketplace">Buy an Intelligence Product</Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href="/pricing">Book an Enterprise Briefing</Link>
            </Button>
          </div>

          <p className="text-caption text-ink-3 mt-10 max-w-2xl mx-auto">
            Every figure on this page is computed from{' '}
            <span data-numeric="">{count(questions.data.length)}</span> tracked
            decision questions across six AI engines, and carries its evidence,
            confidence and assumptions.{' '}
            <Link
              href="/methodology"
              className="text-ink-2 underline underline-offset-4 hover:text-ink"
            >
              See the methodology
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  )
}
