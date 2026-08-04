'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { AppShell } from '@/components/shell/AppShell'
import { ReadoutDrawer } from '@/components/readout/ReadoutDrawer'
import { useRoleLens } from '@/components/readout/RoleLens'
import { DecisionGraph } from '@/components/viz/DecisionGraph'
import { ExposureRange } from '@/components/signal/ExposureRange'
import { ConfidenceBadge } from '@/components/signal/ConfidenceBadge'
import { ScoreMeter, RelationshipTag } from '@/components/signal/Indicators'
import { ActionCard } from '@/components/action/ActionCard'
import { Button } from '@/components/ui/Button'
import { StageSkeleton, ProcessingBar } from '@/components/ui/Skeleton'
import { count, dateFull, observedCost, percent, percentWhole } from '@/lib/format'
import { copy } from '@/lib/copy/en'
import { cn } from '@/lib/utils/cn'
import type {
  GraphEdge,
  GraphNode,
  OrgSummary,
  Prompt,
  Readout,
  Reconstruction,
} from '@/lib/api/types'
import type { EngineStatus } from '@/lib/seed/reconstruction'

/* ============================================================================
   DECISION RECONSTRUCTION — brief §3.1. Hero experience 2.

   "Reconstruct the decision."

   The visitor enters a domain, selects a commercial question, and the
   experience reconstructs what happened across ten surfaces. The ordering is
   the brief's, and it is an argument: understanding → recognition → who won →
   why → channels → journey position → timing → exposure → connections →
   what to do.
   ========================================================================= */

const STATUS_TOKEN: Record<EngineStatus, string> = {
  recommended: 'var(--gr-positive)',
  mentioned: 'var(--gr-warning)',
  ignored: 'var(--gr-critical)',
  confused: 'var(--gr-critical)',
}

const STATUS_LABEL: Record<EngineStatus, string> = {
  recommended: 'Recommended',
  mentioned: 'Mentioned only',
  ignored: 'Absent',
  confused: 'Wrong entity',
}

export function Reconstruct({
  org,
  asOf,
  questions,
  initial,
  graph,
  readouts,
  fetchReconstruction,
}: {
  org: OrgSummary
  asOf: string
  questions: Prompt[]
  initial: Reconstruction
  graph: { nodes: GraphNode[]; edges: GraphEdge[] }
  readouts: Readout[]
  fetchReconstruction: (promptId: string) => Promise<Reconstruction | null>
}) {
  const { role, setRole } = useRoleLens('executive')
  const [drawerId, setDrawerId] = useState<string | null>(null)
  const [domain, setDomain] = useState(org.domain)
  const [promptId, setPromptId] = useState(initial.prompt.id)
  const [data, setData] = useState<Reconstruction>(initial)
  const [running, setRunning] = useState(false)

  const byId = useCallback(
    (id: string) => readouts.find((r) => r.id === id) ?? null,
    [readouts],
  )

  useEffect(() => {
    if (promptId === data.prompt.id) return
    let cancelled = false
    setRunning(true)
    fetchReconstruction(promptId).then((next) => {
      if (cancelled || !next) return
      setData(next)
      setRunning(false)
    })
    return () => {
      cancelled = true
    }
  }, [promptId, data.prompt.id, fetchReconstruction])

  return (
    <AppShell org={org} asOf={asOf} role={role} onRoleChange={setRole}>
      {/* ================================================================
          ENTRY — domain + commercial question
          ============================================================== */}
      <section className="gr-rail-wide gr-section-tight pb-0">
        <p className="text-label uppercase text-ink-3">Signature experience</p>
        <h1 className="text-display-2 text-ink mt-3 text-balance">
          {copy.signatureExperience}
        </h1>
        <p className="text-body-lg text-ink-2 mt-4 max-w-2xl">
          Enter a domain and choose a commercial question. The system
          reconstructs what each surface understood, who received the decision
          and why.
        </p>

        <div className="mt-7 grid gap-4 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]">
          <div>
            <label
              htmlFor="gr-recon-domain"
              className="text-label uppercase text-ink-3"
            >
              Domain
            </label>
            <input
              id="gr-recon-domain"
              type="text"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              spellCheck={false}
              className={cn(
                'mt-2 w-full rounded-sm border border-line bg-inset px-4 py-3',
                'text-body text-ink font-mono',
                'focus:border-brand-400 outline-none transition-colors',
              )}
            />
            <span className="block text-caption text-ink-3 mt-2">
              Seeded environment — this demonstration always reconstructs{' '}
              {org.name}.
            </span>
          </div>

          <div>
            <label
              htmlFor="gr-recon-question"
              className="text-label uppercase text-ink-3"
            >
              Commercial question
            </label>
            <select
              id="gr-recon-question"
              value={promptId}
              onChange={(e) => setPromptId(e.target.value)}
              className={cn(
                'mt-2 w-full rounded-sm border border-line bg-inset px-4 py-3',
                'text-body text-ink focus:border-brand-400 outline-none transition-colors',
              )}
            >
              {questions.map((q) => (
                <option key={q.id} value={q.id}>
                  {q.text}
                </option>
              ))}
            </select>
            <span className="block text-caption text-ink-3 mt-2">
              {count(questions.length)} tracked decision questions.
              Supplier-evaluation questions appear first — that is where the
              vendor is chosen.
            </span>
          </div>
        </div>
      </section>

      {/* ================================================================
          THE RECONSTRUCTION — ten stages, brief §3.1

          While a new question is running we show a skeleton that mirrors the
          first stage rather than dimming the whole page. Dimming reads as
          breakage; a skeleton reads as work in progress.
          ============================================================== */}
      {running ? (
        <div className="gr-rail-wide pt-4">
          <ProcessingBar
            label={`Reconstructing the decision across six AI engines, Google and the competitor set…`}
          />
        </div>
      ) : null}

      <div aria-busy={running} aria-live="polite">
        {running ? (
          <>
            <StageSkeleton cards={6} />
            <StageSkeleton cards={3} />
          </>
        ) : null}

        <div className={cn(running && 'hidden')}>
        {/* --- 1 ------------------------------------------------------- */}
        <Stage n={1} title="What each AI engine understood about the business">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {data.engines.map((engine) => (
              <div
                key={engine.id}
                className="rounded-md border border-line bg-panel p-4 relative overflow-hidden"
              >
                <span
                  aria-hidden
                  className="absolute inset-y-0 start-0 w-0.5"
                  style={{ background: STATUS_TOKEN[engine.status] }}
                />
                <div className="flex items-center justify-between gap-3">
                  <span className="text-body text-ink">{engine.name}</span>
                  <span
                    className="text-label uppercase"
                    style={{ color: STATUS_TOKEN[engine.status] }}
                  >
                    {STATUS_LABEL[engine.status]}
                  </span>
                </div>
                <p className="text-caption text-ink-2 mt-3">
                  Understood as: {engine.understoodAs}
                </p>
                <p className="text-caption text-ink-3 mt-2">{engine.note}</p>
                <div className="mt-4 flex items-center gap-3">
                  <ScoreMeter
                    score={engine.recognitionScore}
                    tone={engine.recognitionScore < 40 ? 'critical' : 'brand'}
                    className="flex-1"
                  />
                  <span className="text-caption text-ink-3" data-numeric="">
                    {engine.recognitionScore}/100
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Stage>

        {/* --- 2 ------------------------------------------------------- */}
        <Stage
          n={2}
          title="Whether the brand was recognised, mentioned, cited, recommended or ignored"
        >
          <div className="rounded-md border border-line bg-panel p-6">
            <p className="text-display-2 text-ink" data-numeric="">
              {data.outcome.recommendedBy}
              <span className="text-ink-3"> / {data.outcome.totalEngines}</span>
            </p>
            <p className="text-caption text-ink-3 mt-2">
              engines recommended the business on this question
            </p>
            <p className="text-body-lg text-ink-2 mt-5 max-w-2xl">
              {data.outcome.verdict}
            </p>
          </div>
        </Stage>

        {/* --- 3 ------------------------------------------------------- */}
        <Stage n={3} title="Which competitor was selected instead">
          <div className="rounded-md border border-line bg-panel p-6">
            <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
              <span className="text-h2 text-ink">{data.winner.name}</span>
              <span className="text-data-lg text-ink" data-numeric="">
                {percent(data.winner.recommendationSharePct)}
              </span>
              <span className="text-caption text-ink-3">
                of all recommendations across the tracked decision set
              </span>
            </div>
            <blockquote
              className="mt-5 border-s-2 ps-4 text-body text-ink-2 max-w-prose"
              style={{ borderColor: 'var(--gr-critical)' }}
            >
              {data.winner.why}
            </blockquote>
            <p className="text-caption text-ink-3 mt-4" data-numeric="">
              {data.winner.authoritySources} independent sources support this
              brand. Northwind has 3.
            </p>
          </div>
        </Stage>

        {/* --- 4 ------------------------------------------------------- */}
        <Stage
          n={4}
          title="Which sources, trust signals and narratives influenced the answer"
        >
          <div className="rounded-md border border-line bg-panel overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="text-label uppercase text-ink-3">
                  <th className="text-start font-normal p-4">Source</th>
                  <th className="text-start font-normal p-4">Influence</th>
                  <th className="text-start font-normal p-4">Favours</th>
                  <th className="text-start font-normal p-4">Why it matters</th>
                </tr>
              </thead>
              <tbody>
                {data.sources.map((source) => (
                  <tr
                    key={source.name}
                    className="border-t border-line align-top"
                  >
                    <td className="p-4 text-caption text-ink">{source.name}</td>
                    <td className="p-4 text-caption text-ink-2 capitalize">
                      {source.influence}
                    </td>
                    <td className="p-4">
                      <span
                        className="text-label uppercase"
                        style={{
                          color:
                            source.favours === 'competitor'
                              ? 'var(--gr-critical)'
                              : source.favours === 'brand'
                                ? 'var(--gr-positive)'
                                : 'var(--gr-neutral)',
                        }}
                      >
                        {source.favours}
                      </span>
                    </td>
                    <td className="p-4 text-caption text-ink-2">
                      {source.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Stage>

        {/* --- 5 ------------------------------------------------------- */}
        <Stage
          n={5}
          title="What Google demand, organic position and paid click cost indicate"
        >
          {data.search ? (
            <div className="rounded-md border border-line bg-panel p-6">
              <p className="text-caption text-ink-3">Closest tracked keyword</p>
              <p className="text-body-lg text-ink font-mono mt-2">
                {data.search.keyword}
              </p>

              <dl className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mt-6">
                <Metric
                  label="Google position"
                  value={
                    data.search.position === null
                      ? 'Not in top 100'
                      : `#${data.search.position}`
                  }
                />
                <Metric
                  label="Monthly volume"
                  value={count(data.search.monthlyVolume)}
                />
                <Metric label="Paid CPC" value={observedCost(data.search.cpc)} />
                <Metric
                  label="AI presence"
                  value={data.search.aiPresence ? 'Present' : 'Absent'}
                  tone={data.search.aiPresence ? 'positive' : 'critical'}
                />
              </dl>

              <div
                className="mt-6 rounded-sm border p-4"
                style={{
                  borderColor:
                    'color-mix(in oklab, var(--gr-critical) 30%, transparent)',
                  background:
                    'color-mix(in oklab, var(--gr-critical) 6%, transparent)',
                }}
              >
                <p className="text-label uppercase text-ink-3">
                  Gap classification
                </p>
                <p className="text-body text-ink mt-2">
                  {data.search.gapLabel}
                </p>
                <p className="text-caption text-ink-2 mt-2 max-w-prose">
                  {data.search.gapDefinition}
                </p>
              </div>
            </div>
          ) : (
            <p className="text-body text-ink-2">
              No tracked keyword maps closely to this question — the decision
              happens in conversation rather than in search.
            </p>
          )}
        </Stage>

        {/* --- 6 ------------------------------------------------------- */}
        <Stage
          n={6}
          title="Where the question sits in the customer decision journey"
        >
          <div className="rounded-md border border-line bg-panel p-6">
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
              <span className="text-h2 text-ink">
                {data.journey.stageLabel}
              </span>
              <span className="text-caption text-ink-3" data-numeric="">
                stage {data.journey.order} of {data.journey.totalStages}
              </span>
            </div>

            <dl className="grid gap-5 sm:grid-cols-3 mt-6">
              <Metric
                label="Coverage at this stage"
                value={percentWhole(data.journey.stageCoveragePct)}
                tone="critical"
              />
              <Metric
                label="Share of query volume"
                value={percent(data.journey.stageVolumeSharePct)}
              />
              <Metric
                label="Share of revenue decided"
                value={
                  data.journey.revenueSharePct
                    ? percentWhole(data.journey.revenueSharePct)
                    : 'Not measured'
                }
                tone={data.journey.revenueSharePct ? 'critical' : undefined}
              />
            </dl>

            <p className="text-caption text-ink-2 mt-6 max-w-prose">
              {data.journey.observableBy.length === 0 ? (
                <>
                  No conventional tool observes this stage. There is no visit,
                  click, lead or CRM event to record — which is why the weakness
                  is invisible until revenue moves.
                </>
              ) : (
                <>
                  Observable by {data.journey.observableBy.join(', ')} — but
                  only after the decision has already narrowed.
                </>
              )}
            </p>
          </div>
        </Stage>

        {/* --- 7 ------------------------------------------------------- */}
        <Stage
          n={7}
          title="What timing, market maturity and competitive density indicate"
        >
          <div className="rounded-md border border-line bg-panel p-6">
            <dl className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <Metric label="Market position" value={data.timing.positionLabel} />
              <Metric
                label="Window remaining"
                value={`${data.timing.windowMonths} months`}
              />
              <Metric
                label="Market readiness"
                value={`${data.timing.marketReadiness}/100`}
              />
              <Metric
                label="Decision deadline"
                value={dateFull(data.timing.decisionDeadline)}
              />
            </dl>
            <p className="text-caption text-ink-2 mt-6 max-w-prose">
              {data.winner.name} controls{' '}
              <span className="text-ink" data-numeric="">
                {percent(data.timing.competitorControlPct)}
              </span>{' '}
              of questions at this stage against{' '}
              <span className="text-ink" data-numeric="">
                {percent(data.timing.overallControlPct)}
              </span>{' '}
              across the whole set. Competitive density is shifting at{' '}
              {data.timing.shiftVelocity.toLowerCase()}.
            </p>
          </div>
        </Stage>

        {/* --- 8 ------------------------------------------------------- */}
        <Stage n={8} title="What the directional commercial exposure may be">
          <div className="rounded-md border border-line bg-panel p-6">
            <ExposureRange exposure={data.exposure} size="lg" />
            <p className="text-caption text-ink-2 mt-5 max-w-prose">
              This is the exposure attributable to this single question. The
              full-book figure across all {count(questions.length)} tracked
              decisions is materially larger and appears in Mission Control.
            </p>
          </div>
        </Stage>

        {/* --- 9 ------------------------------------------------------- */}
        <Stage n={9} title="Which connected signals explain the outcome">
          <div className="grid gap-3 sm:grid-cols-2">
            {data.connected.map((signal) => (
              <button
                key={signal.id}
                type="button"
                onClick={() => setDrawerId(signal.id)}
                className="text-start rounded-md border border-line bg-panel p-4 hover:border-line-strong hover:bg-inset transition-colors"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-caption text-ink-2">
                    {signal.label}
                  </span>
                  <RelationshipTag relationship={signal.relationship} />
                </div>
                <span className="block text-data text-ink mt-2" data-numeric="">
                  {signal.value}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-6 rounded-md border border-line bg-panel p-6">
            <p className="text-label uppercase text-ink-3 mb-2">
              Decision intelligence graph
            </p>
            <p className="text-body text-ink-2 mb-5 max-w-2xl">
              {copy.home.graph}
            </p>
            <DecisionGraph
              nodes={graph.nodes}
              edges={graph.edges}
              onSelect={setDrawerId}
            />
          </div>
        </Stage>

        {/* --- 10 ------------------------------------------------------ */}
        <Stage
          n={10}
          title="What action is prescribed and how improvement will be measured"
          last
        >
          <ActionCard
            action={data.action}
            rank={1}
            onOpenEvidence={setDrawerId}
          />

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <ConfidenceBadge confidence={data.confidence} />
            <span className="text-caption text-ink-3">
              Reconstruction confidence across all ten surfaces.
            </span>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild variant="primary">
              <Link href="/app/mission-control">Open Mission Control</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/marketplace">Buy this as an intelligence product</Link>
            </Button>
          </div>
        </Stage>
        </div>
      </div>

      <ReadoutDrawer
        readout={drawerId ? byId(drawerId) : null}
        open={Boolean(drawerId)}
        onOpenChange={(open) => !open && setDrawerId(null)}
        role={role}
        onRoleChange={setRole}
        onOpenSignal={setDrawerId}
      />
    </AppShell>
  )
}

/* ------------------------------------------------------------------------ */

function Stage({
  n,
  title,
  last,
  children,
}: {
  n: number
  title: string
  last?: boolean
  children: React.ReactNode
}) {
  return (
    <section className={cn('gr-rail-wide py-9', !last && 'gr-hairline')}>
      <div className="flex items-baseline gap-4 mb-5">
        <span
          className="text-label text-brand-300 shrink-0 tabular-nums"
          data-numeric=""
        >
          {String(n).padStart(2, '0')}
        </span>
        <h2 className="text-h2 text-ink text-balance">{title}</h2>
      </div>
      {children}
    </section>
  )
}

function Metric({
  label,
  value,
  tone,
}: {
  label: string
  value: string
  tone?: 'critical' | 'positive'
}) {
  return (
    <div>
      <dt className="text-label uppercase text-ink-3">{label}</dt>
      <dd
        className="text-data-lg mt-2"
        data-numeric=""
        style={{
          color:
            tone === 'critical'
              ? 'var(--gr-critical)'
              : tone === 'positive'
                ? 'var(--gr-positive)'
                : 'var(--gr-text-primary)',
        }}
      >
        {value}
      </dd>
    </div>
  )
}
