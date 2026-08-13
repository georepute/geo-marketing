import { getT } from '@/lib/i18n/content/translator'
import type { Metadata } from 'next'
import { Link } from '@/components/i18n/Link'
import { Button } from '@/components/ui/Button'
import {
  KpiGrid,
  Prescription,
  QuestionSection,
  Section,
} from '@/components/home/Sections'
import { Hero } from '@/components/home/Hero'
import { DomainEntry } from '@/components/home/DomainEntry'
import { AuthorityAdvantage } from '@/components/home/AuthorityAdvantage'
import { StrategicWindow } from '@/components/home/StrategicWindow'
import { ExecutivePosition } from '@/components/home/ExecutivePosition'
import { ExecutiveActionPlan } from '@/components/home/ExecutiveActionPlan'
import { EcosystemStrip } from '@/components/home/EcosystemStrip'
import { ClosedLoopBand } from '@/components/home/ClosedLoopBand'
import { ProductScreen } from '@/components/product/ProductScreen'
import { HomeInteractive } from './HomeClient'
import { DecisionJourneyTrack } from '@/components/viz/DecisionJourneyTrack'
import { GoogleVsAIGapMatrix } from '@/components/viz/GoogleVsAIGapMatrix'
import { FeatureCard } from '@/components/visual/FeatureCard'
import { ImageWithScrim } from '@/components/visual/ImageWithScrim'
import { ENGINE_IMAGE } from '@/lib/visual/imagery'
import { getDictionary, getI18n } from '@/lib/i18n/server'
import { flags } from '@/lib/flags'
import { count, dateFull, percentWhole } from '@/lib/format'
import {
  getOrg,
  getCausalChain,
  getDecisionGraph,
  getDomainPreview,
  getEngines,
  getGapMatrix,
  getEcosystem,
  getPrompts,
  getReadouts,
  getReconstructableQuestions,
  getReconstruction,
  getStageCoverage,
  getCompetitors,
  getActions,
} from '@/lib/api/client'

/* generateMetadata, not a static export: the title and description come from
   the active dictionary, and a module-scope constant is evaluated once at
   import time when no locale exists yet. */
export async function generateMetadata(): Promise<Metadata> {
  const copy = await getDictionary()
  return {
    title: `GeoRepute — ${copy.category}`,
    description: copy.meta.description,
  }
}

/* ============================================================================
   HOME.

   The page is a sequence of executive questions, in the order a management
   team actually asks them:

     Does AI know us? → Where are we losing decisions? → Why is the competitor
     winning? → What evidence is missing? → How much time is left? → What
     should happen next? → What is our position?

   Two rules from the product direction govern every section and are worth
   naming because they are what make this a decision document rather than a
   feature tour:

     1. No isolated numbers. Every figure is rendered through `KpiGrid`, which
        will not compile without the business-language reading, the reason it
        matters and the commercial consequence.

     2. No section ends on an insight. Each closes on `<Prescription>`, which
        requires an owner, a deadline and an expected movement.

   Product names never lead. Engines and marketplace items appear late and are
   introduced by the question they answer, because a buyer arrives with a
   problem rather than with a shopping list.
   ========================================================================= */

export default async function Home() {
  const copy = await getDictionary()
  const t = await getT()
  const { intl } = await getI18n()
  const [
    org,
    chain,
    graph,
    preview,
    engines,
    gaps,
    ecosystem,
    prompts,
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
    getEcosystem(),
    getPrompts(),
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

  /* --- Figures derived here rather than authored, so the copy below cannot
         drift away from the data it describes. ---------------------------- */
  const authorityMultiple = Math.round(
    topCompetitor.authoritySources / self.authoritySources,
  )
  const categoryMedian =
    competitors.data.find((c) => c.id === 'meridian')?.authoritySources ?? 14

  const supplierStage = stages.data.find((s) => s.id === 'supplier-evaluation')!
  const missedQuestions = prompts.data.filter(
    (p) => p.northwindRecommendedBy.length === 0,
  ).length
  const blindSpots = gaps.data.filter((row) =>
    row.gap.endsWith('blind-spot'),
  ).length

  /* Volume share, not question share. The distinction is the whole argument
     for this stage: it carries a small fraction of the queries and most of
     the money, which is exactly why volume-ranked tooling ignores it. */
  const totalVolume = stages.data.reduce((sum, s) => sum + s.monthlyVolume, 0)
  const supplierVolumeSharePct =
    (supplierStage.monthlyVolume / totalVolume) * 100
  const revenueAtStakePct = org.data.revenueViaSupplierEvaluationPct

  const byId = (id: string) => readouts.data.find((r) => r.id === id)!
  const recognition = byId('r-recognition')
  const authority = byId('r-authority')
  const supplierCollapse = byId('r-supplier-collapse')
  const competitorReadout = byId('r-competitor')
  const timingReadout = byId('r-timing')
  const decisionHealth = byId('r-decision-health')

  /* The three inputs at column zero of the decision graph ARE the missing
     evidence — everything downstream is a consequence of them. Reading them
     off the graph keeps the two representations from disagreeing. */
  const missingEvidence = graph.data.nodes.filter((n) => n.column === 0)

  return (
    <>
      {/* ================================================================
          HERO — §19 copy, and one decision reconstructed in four beats.
          ============================================================== */}
      <Hero
        reconstruction={hero.data}
        ownAuthoritySources={self.authoritySources}
        competitorAuthoritySources={topCompetitor.authoritySources}
      />

      {/* ================================================================
          THE CLOSED LOOP — doc §10 places this immediately after the hero,
          before the page starts asking its seven questions. It is the frame
          those questions sit inside: each one ends in a prescription, and
          this is what happens to a prescription after it is issued.
          ============================================================== */}
      <ClosedLoopBand />

      {/* ================================================================
          THE PREMISE — why a business needs this at all.
          ============================================================== */}
      <Section
        eyebrow={t('The shift')}
        headline={copy.analyticsDisruption}
        sub={t("By the time a visit, a click, a lead or a CRM record exists, the buyer has already decided which suppliers are worth contacting. That decision now happens inside AI systems, and it leaves no trace in any tool you currently own.")}
        wide
      >
        <div className="grid gap-4 md:grid-cols-3">
          <Premise
            figure={t('{n} of {total}', {
              n: count(missedQuestions),
              total: count(prompts.data.length),
            })}
            statement={t('commercial decisions complete without your business being named at all.')}
            note={t("No lead was lost, because no lead was ever created. Conventional measurement recorded nothing.")}
          />
          <Premise
            figure={percentWhole(supplierStage.coveragePct)}
            statement={t('presence at the stage where the supplier is actually chosen.')}
            note={t('That stage carries {volume} of the query volume and decides {revenue} of the revenue. Volume-ranked tooling calls it unimportant.', {
              volume: percentWhole(supplierVolumeSharePct),
              revenue: percentWhole(revenueAtStakePct),
            })}
          />
          <Premise
            figure={`${authorityMultiple}×`}
            statement={t('more independent evidence supports the competitor engines recommend instead.')}
            note={t("Not a brand-preference gap. An evidence gap, and evidence can be commissioned.")}
          />
        </div>
      </Section>

      {/* ================================================================
          Q1 — Does AI know your business?
          ============================================================== */}
      <QuestionSection
        index={1}
        question={copy.exec.q1}
        answer={recognition.executiveTruth}
        context={recognition.businessMeaning}
      >
        <KpiGrid
          items={[
            {
              label: t('Entity understanding'),
              value: `${preview.data.recognitionScore}/100`,
              reading: t('AI systems understand what your business is in {score} of 100 commercial evaluations. One engine holds no stable record of you at all.', {
                score: preview.data.recognitionScore,
              }),
              why: t('A system that cannot categorise a business cannot recommend it. This sits upstream of every other measure on this page.'),
              impact: t('Content and advertising investment cannot move an answer while the underlying record is wrong. Spend on either is spend against a locked door.'),
              tone: 'critical',
            },
            {
              label: t('Highest-risk engine'),
              value: preview.data.highestRiskEngine.name,
              reading: `${t('{engine} understands your business at {score} of 100 and names it in none of the tracked decisions.', {
                engine: preview.data.highestRiskEngine.name,
                score: preview.data.highestRiskEngine.recognitionScore,
              })} ${preview.data.highestRiskEngine.reason}`,
              why: t('Recognition is not uniform across AI systems, and buyers do not all use the same one. A single weak engine removes your business from every decision made through it.'),
              impact: t('Every buyer who asks this engine receives a supplier shortlist your business is structurally absent from — and no measurement you own records that it happened.'),
              tone: 'critical',
            },
            {
              label: t('Decision presence'),
              value: percentWhole(preview.data.decisionPresencePct),
              reading: t('Present in only {present} of supplier evaluations. Missing from {missing} of AI buying decisions.', {
                present: percentWhole(preview.data.decisionPresencePct),
                missing: percentWhole(100 - preview.data.decisionPresencePct),
              }),
              why: t('Supplier evaluation is the moment a buyer stops choosing a solution and starts choosing a vendor. It is the stage that assigns the order.'),
              impact: t('Absence here is exclusion from the shortlist for the {revenue} of revenue that arrives through supplier evaluation.', {
                revenue: percentWhole(revenueAtStakePct),
              }),
              tone: 'critical',
            },
          ]}
        />

        <Prescription
          statement={recognition.prescription}
          because={t("Recognition is cheap to fix and blocks everything else. It is the only intervention on this page that can be completed in under thirty days.")}
          owner={recognition.ownerDeadline.owner}
          deadline={dateFull(recognition.ownerDeadline.deadline, intl)}
          movement={`${recognition.expectedMovement.signal} ${recognition.expectedMovement.from} → ${recognition.expectedMovement.to}${recognition.expectedMovement.unit}`}
        />
      </QuestionSection>

      {/* ================================================================
          Q2 — Where are you losing decisions?
          ============================================================== */}
      <QuestionSection
        index={2}
        question={copy.exec.q2}
        answer={supplierCollapse.executiveTruth}
        context={t("Losses are not spread evenly across the buying journey. They concentrate at one stage — and it is the stage conventional measurement is least able to see.")}
      >
        <DecisionJourneyTrack stages={stages.data} />

        <div className="mt-6">
          <KpiGrid
            columns={2}
            items={[
              {
                label: t('Where presence collapses'),
                value: supplierStage.label,
                reading: t('Coverage falls to {pct} at supplier evaluation — the last stage before the order is assigned.', {
                  pct: percentWhole(supplierStage.coveragePct),
                }),
                why: t('Earlier stages shape opinion. This stage selects the vendor. A business can lead the first three stages and still never be contacted.'),
                impact: t('The competitor named here receives the enquiry. Your business is not compared and rejected — it is never compared at all.'),
                tone: 'critical',
              },
              {
                label: t('Blind-spot questions'),
                value: t('{n} of {total}', {
                  n: count(blindSpots),
                  total: count(gaps.data.length),
                }),
                reading: t('{n} commercial questions return no AI recommendation and no Google position in the top ten. The decision happens on neither surface.', {
                  n: count(blindSpots),
                }),
                why: t('Google rank and AI recommendation are separate commercial assets. Strength in one does not carry into the other.'),
                impact: t('These questions are currently reachable only by buying the click — which is why paid cost rises while organic position stays flat.'),
                tone: 'critical',
              },
            ]}
          />
        </div>

        <div className="mt-6">
          <GoogleVsAIGapMatrix rows={gaps.data} limit={8} />
        </div>

        <Prescription
          statement={supplierCollapse.prescription}
          because={t('Supplier evaluation carries {volume} of the query volume and decides {revenue} of the revenue. Ranking work by volume puts it last.', {
            volume: percentWhole(supplierVolumeSharePct),
            revenue: percentWhole(revenueAtStakePct),
          })}
          owner={supplierCollapse.ownerDeadline.owner}
          deadline={dateFull(supplierCollapse.ownerDeadline.deadline, intl)}
          movement={`${supplierCollapse.expectedMovement.signal} ${supplierCollapse.expectedMovement.from} → ${supplierCollapse.expectedMovement.to}${supplierCollapse.expectedMovement.unit}`}
        />
      </QuestionSection>

      {/* ================================================================
          Q3 — Why is your competitor recommended instead?
          ============================================================== */}
      <QuestionSection
        index={3}
        question={copy.exec.q3}
        answer={t('{competitor} can be verified through {theirs} independent sources. Your business can be verified through {ours}.', {
          competitor: topCompetitor.name,
          theirs: count(topCompetitor.authoritySources),
          ours: count(self.authoritySources),
        })}
        context={t("Share of recommendations is the symptom. The cause is what a system can cite when it has to justify naming one supplier ahead of another.")}
      >
        <AuthorityAdvantage
          competitor={topCompetitor}
          self={self}
          categoryMedian={categoryMedian}
        />

        <Prescription
          statement={competitorReadout.prescription}
          because={t('Closing {multiple}× is a publishing and validation programme with a known cost, not a brand campaign with an unknown one.', {
            multiple: authorityMultiple,
          })}
          owner={competitorReadout.ownerDeadline.owner}
          deadline={dateFull(competitorReadout.ownerDeadline.deadline, intl)}
          movement={`${competitorReadout.expectedMovement.signal} ${competitorReadout.expectedMovement.from} → ${competitorReadout.expectedMovement.to}${competitorReadout.expectedMovement.unit}`}
        />
      </QuestionSection>

      {/* ================================================================
          Q4 — Why doesn't AI trust you yet? / What evidence is missing?
          ============================================================== */}
      <QuestionSection
        index={4}
        question={copy.exec.q4}
        answer={authority.executiveTruth}
        context={authority.businessMeaning}
      >
        <div className="grid gap-4 md:grid-cols-3">
          {missingEvidence.map((node) => (
            <div
              key={node.id}
              className="rounded-md border border-line bg-panel p-6"
            >
              <p className="text-label uppercase text-ink-3">{node.label}</p>
              <p
                className="text-h2 mt-3"
                style={{ color: 'var(--gr-critical)' }}
                data-numeric=""
              >
                {node.value}
              </p>
              <p className="text-caption text-ink-2 mt-4">{node.evidence}</p>
            </div>
          ))}
        </div>

        {/* How three missing inputs become one commercial outcome. */}
        <div className="mt-6 rounded-md border border-line bg-panel p-6">
          <p className="text-label uppercase text-ink-3">
            {t('How the gap becomes a lost decision')}
          </p>
          <p className="text-body text-ink-2 mt-3 max-w-3xl">
            {copy.home.graph}{' '}
            {t('Every node below opens the evidence behind it, with its confidence and its limits.')}
          </p>
          <div className="mt-6">
            <HomeInteractive
              chain={chain.data}
              graph={graph.data}
              readouts={readouts.data}
              mode="graph"
            />
          </div>
        </div>

        <Prescription
          statement={authority.prescription}
          because={t("Systems do not recommend what they cannot corroborate. Self-description is treated as a claim; third-party reference is treated as evidence.")}
          owner={authority.ownerDeadline.owner}
          deadline={dateFull(authority.ownerDeadline.deadline, intl)}
          movement={`${authority.expectedMovement.signal} ${authority.expectedMovement.from} → ${authority.expectedMovement.to}${authority.expectedMovement.unit}`}
        />
      </QuestionSection>

      {/* ================================================================
          Q5 — How much time is left?
          ============================================================== */}
      <QuestionSection
        index={5}
        question={copy.exec.q5}
        answer={timingReadout.executiveTruth}
        context={timingReadout.businessMeaning}
      >
        <StrategicWindow
          timing={org.data.timing}
          asOf={org.asOf}
          evidence={timingReadout.evidence.map((e) => ({
            subject: e.subject,
            observation: e.observation,
          }))}
        />

        <Prescription
          label={copy.exec.interventionLabel}
          statement={timingReadout.prescription}
          because={t("The window is an observation about category formation, not a sales deadline. It is re-assessed every quarter and it can move in either direction.")}
          owner={timingReadout.ownerDeadline.owner}
          deadline={dateFull(timingReadout.ownerDeadline.deadline, intl)}
          movement={t("Authority established before the answer set stabilises")}
        />
      </QuestionSection>

      {/* ================================================================
          Q6 — What should happen next?
          ============================================================== */}
      <QuestionSection
        index={6}
        question={copy.exec.q6}
        answer={t("Six interventions, sequenced. Each names its owner, its deadline, the signal it must move and what has to land before it can move it.")}
        context={t("Diagnosis without sequence produces activity rather than movement. Impact is verified by signal movement after execution — never by task completion.")}
      >
        <div className="flex flex-wrap items-baseline justify-between gap-4 mb-6">
          <p className="text-label uppercase text-brand-300">
            {copy.exec.actionPlanLabel}
          </p>
          <p className="text-caption text-ink-3">
            {t('Ordered by commercial exposure, urgency, effort and competitive pressure.')}
          </p>
        </div>

        <ExecutiveActionPlan actions={actions.data} />

        {/* Doc §2: the Action Plan as it actually appears in the platform. */}
        <div className="mt-8">
          <ProductScreen
            id="action-plan"
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="max-w-lg"
          />
        </div>

        <div className="mt-6">
          <Button asChild variant="secondary">
            <Link href="/app/actions">{t('Open the full intervention plan')}</Link>
          </Button>
        </div>
      </QuestionSection>

      {/* ================================================================
          THE EXECUTIVE POSITION — one position, not seven measures.
          ============================================================== */}
      <QuestionSection
        index={7}
        question={copy.exec.q7}
        answer={decisionHealth.executiveTruth}
        context={decisionHealth.businessMeaning}
      >
        <ExecutivePosition org={org.data} weights={org.data.indexWeights} />

        {/* Doc §2: Executive / Mission Control, the screen this section
            describes. */}
        <div className="mt-8">
          <ProductScreen
            id="mission-control"
            sizes="(min-width: 1024px) 70vw, 100vw"
          />
        </div>

        <Prescription
          label={copy.exec.recoveryLabel}
          statement={decisionHealth.prescription}
          because={t("Authority carries the heaviest weight in the index and the largest deficit. Every other vector is capped by it, so it is the only starting point that moves more than one measure.")}
          owner={decisionHealth.ownerDeadline.owner}
          deadline={dateFull(decisionHealth.ownerDeadline.deadline, intl)}
          movement={`${decisionHealth.expectedMovement.signal} ${decisionHealth.expectedMovement.from} → ${decisionHealth.expectedMovement.to}${decisionHealth.expectedMovement.unit}`}
        />

        <div className="mt-6">
          <Button asChild variant="secondary">
            <Link href="/app/mission-control">
              {t('Open the full executive position')}
            </Link>
          </Button>
        </div>
      </QuestionSection>

      {/* ================================================================
          RUN IT ON YOUR OWN BUSINESS.
          ============================================================== */}
      <Section
        eyebrow={t('Your business')}
        headline={copy.home.liveEntry}
        sub={t("Enter a domain and one signal is released immediately. The rest of the position requires an account or a purchase — and the locked panels state exactly what sits behind them.")}
        wide
      >
        <DomainEntry
          preview={preview.data}
          lockedCount={preview.data.lockedSignalCount}
        />
      </Section>

      {/* ================================================================
          THE ECOSYSTEM — the breadth behind the seven questions above.

          Everything above answered questions this page chose. This section
          exists to answer the one the reader is now holding: "and what about
          mine?"
          ============================================================== */}
      <Section
        eyebrow={t("The intelligence ecosystem")}
        headline={t('Seven questions were asked above. {n} models stand behind them.', {
          n: count(ecosystem.data.totalModules),
        })}
        sub={t("Every category holds the models that answer one kind of commercial question — including a great many that businesses have never been able to measure, because nothing existed to measure them with.")}
        wide
      >
        <EcosystemStrip
          categories={ecosystem.data.categories}
          totalModules={ecosystem.data.totalModules}
        />

        <div className="mt-6">
          <Button asChild variant="secondary">
            <Link href="/marketplace">{t('Explore the intelligence ecosystem')}</Link>
          </Button>
        </div>
      </Section>

      {/* ================================================================
          THE MACHINERY — deliberately last. Direction: "Engines become the
          underlying technology, not the navigation."
          ============================================================== */}
      <Section
        eyebrow={t('Underneath')}
        headline={t("Every answer on this page is produced by an intelligence engine.")}
        sub={t("Twelve engines run beneath the questions. They are named here for completeness — nobody buys an engine, and nothing above required you to know one existed.")}
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
          {t('Four engines are built in this environment. All twelve appear on the')}{' '}
          <Link
            href="/engines"
            className="text-ink-2 underline underline-offset-4 hover:text-ink"
          >
            {t('engines overview')}
          </Link>
          .
        </p>
      </Section>

      {/* ================================================================
          THE CLOSE — the only gold-tinted image on the site, held back for
          the single commercial close so the accent stays a signal.
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
          <p className="text-body-lg text-ink-2 mt-5 max-w-2xl mx-auto">
            {t('Every day the window stays open, the same position costs less to take. Every day after it closes, it costs more.')}
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-10">
            <Button asChild variant="primary" size="lg">
              <Link href="/app/reconstruct">{t('See how AI decides about you')}</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              {/* Doc §4: nothing is purchasable while pricing is withheld, so
                  the middle route describes the intelligence rather than the
                  transaction. */}
              {flags.pricing ? (
                <Link href="/marketplace">{t('Buy a single answer')}</Link>
              ) : (
                <Link href="/marketplace">{t('See a single answer')}</Link>
              )}
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href="/briefing">{copy.home.heroCtaEnterprise}</Link>
            </Button>
          </div>

          <p className="text-caption text-ink-3 mt-10 max-w-2xl mx-auto">
            {t('Every figure on this page is computed from {n} tracked commercial decisions across six AI engines.', {
              n: count(questions.data.length),
            })}{' '}
            {copy.exec.everyFigureCaption}{' '}
            <Link
              href="/methodology"
              className="text-ink-2 underline underline-offset-4 hover:text-ink"
            >
              {t('See the methodology')}
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  )
}

/* ------------------------------------------------------------------------ */

/**
 * A single premise figure. Three of these carry the "why this exists at all"
 * argument before the page starts asking questions.
 */
function Premise({
  figure,
  statement,
  note,
}: {
  figure: string
  statement: string
  note: string
}) {
  return (
    <div className="rounded-md border border-line bg-panel p-6">
      <p
        className="text-display-2"
        style={{ color: 'var(--gr-critical)' }}
        data-numeric=""
      >
        {figure}
      </p>
      <p className="text-body text-ink mt-4">{statement}</p>
      <p className="text-caption text-ink-3 mt-4 pt-4 border-t border-line">
        {note}
      </p>
    </div>
  )
}
