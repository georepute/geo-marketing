'use client'

import { useState } from 'react'
import { Link } from '@/components/i18n/Link'
import { AppShell } from '@/components/shell/AppShell'
import { Button } from '@/components/ui/Button'
import { ConfidenceBadge } from '@/components/signal/ConfidenceBadge'
import { EffortMeter } from '@/components/signal/Indicators'
import { useRoleLens } from '@/components/readout/RoleLens'
import { ElectionPanel } from './ElectionPanel'
import { count, dateFull, percentWhole } from '@/lib/format'
import { cn } from '@/lib/utils/cn'
import type {
  ElectionIntelligence,
  NarrativeIntelligence,
  OrgSummary,
} from '@/lib/api/types'
import type { Narrative, Polarity } from '@/lib/seed/narrative'
import { useT } from '@/lib/i18n/content/client'

/* ============================================================================
   PUBLIC NARRATIVE INTELLIGENCE.

   One executive question: what story is the market telling about us, and how
   is it influencing decisions?

   THE THING THIS PAGE REFUSES TO BE
   A mention-volume monitor. Counting mentions answers "are we being talked
   about", which is a question with no decision attached to it. This page
   answers "which stories are active, who owns them, and which of them decide
   whether we get chosen" — and those have interventions.

   The structural consequence: the narrative inventory is the spine of the
   page, and every other section is a different cut through it. Ownership is
   the inventory grouped by who holds each story. Risk is the inventory
   filtered to adverse and growing. Opportunity is the inventory filtered to
   unowned and favourable. One dataset, six questions asked of it, so no two
   sections can disagree.
   ========================================================================= */

const POLARITY_TOKEN: Record<Polarity, string> = {
  positive: 'var(--gr-positive)',
  neutral: 'var(--gr-neutral)',
  negative: 'var(--gr-critical)',
}

const POLARITY_LABEL: Record<Polarity, string> = {
  positive: 'Favourable',
  neutral: 'Neutral',
  negative: 'Adverse',
}

export function NarrativeView({
  org,
  asOf,
  intel,
  election,
}: {
  org: OrgSummary
  asOf: string
  intel: NarrativeIntelligence
  election: ElectionIntelligence
}) {
  const t = useT()
  const { role, setRole } = useRoleLens('executive')
  const [electionMode, setElectionMode] = useState(false)

  return (
    <AppShell org={org} asOf={asOf} role={role} onRoleChange={setRole}>
      {/* ================================================================
          1 — EXECUTIVE SUMMARY
          ============================================================== */}
      <section className="gr-rail-wide gr-section-tight pb-0">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="min-w-0">
            <p className="text-label uppercase text-ink-3">
              Public narrative intelligence
            </p>
            <h1 className="text-h1 md:text-display-2 text-ink mt-3 text-balance max-w-3xl">
              What story is the market telling about us?
            </h1>
            <p className="text-body text-ink-2 mt-4 max-w-3xl">
              Not how often the business is mentioned. Which accounts of it are
              active, who owns each one, and which of them decide whether it
              gets chosen.
            </p>
          </div>

          <ElectionToggle enabled={electionMode} onChange={setElectionMode} />
        </div>

        {/* --- Position ---------------------------------------------- */}
        <dl className="grid gap-px bg-line border border-line rounded-md overflow-hidden mt-8 sm:grid-cols-2 xl:grid-cols-3">
          <Headline
            label={t('Narrative health')}
            value={`${intel.healthScore}/100`}
            note={t('A weighted read of how much active conversation helps against how much hurts.')}
            tone={intel.healthScore < 50 ? 'critical' : 'neutral'}
          />
          <Headline
            label={t('Narrative stability')}
            value={intel.stability.label}
            note={intel.stability.meaning}
          />
          <Headline
            label={t('Narrative momentum')}
            value={intel.momentum.label}
            note={intel.momentum.meaning}
            tone={intel.momentum.label === 'Deteriorating' ? 'critical' : 'neutral'}
          />
          <Headline
            label={t('Narrative risk')}
            value={intel.risk.label}
            note={intel.risk.meaning}
            tone="critical"
          />
          <Headline
            label={t('Overall public sentiment')}
            value={intel.sentiment.label}
            note={intel.sentiment.meaning}
          />
          <Headline
            label={t('Executive recommendation')}
            value={intel.verdictLabel}
            note={intel.verdict.statement}
            tone="accent"
          />
        </dl>
      </section>

      {/* ================================================================
          ELECTION MODE — a different subject, stated plainly.
          ============================================================== */}
      {electionMode ? (
        <section className="gr-rail-wide gr-section-tight">
          <ElectionPanel election={election} />
        </section>
      ) : null}

      {/* ================================================================
          2 — NARRATIVE HEALTH
          ============================================================== */}
      <section className="gr-rail-wide gr-section-tight">
        <SectionHead
          eyebrow="Health"
          title={t('How much of the conversation works for us')}
          note={t('Weighted by reach rather than counted, so a story reaching a third of the category is not equal to one reaching a twentieth.')}
        />

        <dl className="grid gap-px bg-line border border-line rounded-md overflow-hidden sm:grid-cols-2 xl:grid-cols-5">
          {intel.health.map((m) => (
            <div key={m.label} className="bg-panel p-5">
              <dt className="text-label uppercase text-ink-3">{m.label}</dt>
              <dd>
                <p className="text-data-lg text-ink mt-3" data-numeric="">
                  {m.value}
                </p>
                <p className="text-caption text-ink-2 mt-3">{m.meaning}</p>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ================================================================
          3 — AI NARRATIVE
          ============================================================== */}
      <section className="gr-rail-wide gr-section-tight gr-hairline">
        <SectionHead
          eyebrow={t('AI narrative')}
          title={t('What each engine currently says this business is')}
          note={intel.divergence.summary}
        />

        <ul className="grid gap-px bg-line border border-line rounded-md overflow-hidden md:grid-cols-2 xl:grid-cols-3">
          {intel.engines.map((engine) => (
            <li key={engine.id} className="bg-panel p-5">
              <div className="flex items-baseline justify-between gap-3">
                <p className="text-body text-ink">{engine.name}</p>
                <span
                  className="text-caption shrink-0"
                  data-numeric=""
                  style={{ color: POLARITY_TOKEN[engine.polarity] }}
                >
                  {engine.recognitionScore}/100
                </span>
              </div>

              <p className="text-caption text-ink-2 mt-3">
                “{engine.narrative}”
              </p>

              {engine.divergence ? (
                <p
                  className="text-caption mt-3 pt-3 border-t border-line"
                  style={{ color: 'var(--gr-critical)' }}
                >
                  {engine.divergence}
                </p>
              ) : (
                <p className="text-caption text-ink-3 mt-3 pt-3 border-t border-line">
                  Accurate. No divergence from the intended account.
                </p>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* ================================================================
          4 — THE NARRATIVE LANDSCAPE
          ============================================================== */}
      <section className="gr-rail-wide gr-section-tight gr-hairline">
        <SectionHead
          eyebrow="Landscape"
          title={t('Every active narrative in this category')}
          note={t('Sorted by reach. The owner column is the one that matters — a favourable story nobody owns is an asset waiting to be claimed.')}
        />

        <ul className="grid gap-3">
          {[...intel.narratives]
            .sort((a, b) => b.reachPct - a.reachPct)
            .map((n) => (
              <NarrativeRow key={n.id} narrative={n} />
            ))}
        </ul>
      </section>

      {/* ================================================================
          5 — OWNERSHIP
          ============================================================== */}
      <section className="gr-rail-wide gr-section-tight gr-hairline">
        <SectionHead
          eyebrow="Ownership"
          title={t('Who owns the story')}
          note={t('Share of active conversation, weighted by reach. Unclaimed is not neutral ground — it is ground with no defender.')}
        />

        {/* Owning a narrative and benefiting from it are different things. On
            this account the business's entire share is a story that damages
            it, which a bare percentage would hide completely. */}
        <p className="text-caption text-ink-2 -mt-2 mb-6 max-w-3xl">
          The business holds{' '}
          <span className="text-ink" data-numeric="">
            {intel.ownership.business}%
          </span>
          , and every point of it is the hardware-retailer error rather than
          anything it chose to say. Ownership counts the stories attached to a
          name; it does not ask whether they help.
        </p>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] items-start">
          <div className="rounded-md border border-line bg-panel p-6">
            {/* A single stacked bar reads a four-way split faster than four
                separate figures, because the comparison is the message. */}
            <div className="flex h-10 rounded-sm overflow-hidden">
              <Segment
                pct={intel.ownership.business}
                token="var(--gr-brand-400)"
                label="Business"
              />
              <Segment
                pct={intel.ownership.competitor}
                token="var(--gr-critical)"
                label="Competitors"
              />
              <Segment
                pct={intel.ownership.shared}
                token="var(--gr-neutral)"
                label="Shared"
              />
              <Segment
                pct={intel.ownership.unclaimed}
                token="var(--gr-positive)"
                label="Unclaimed"
              />
            </div>

            <dl className="grid gap-px bg-line border border-line rounded-sm overflow-hidden mt-6 sm:grid-cols-4">
              <Share
                label="Business"
                pct={intel.ownership.business}
                token="var(--gr-brand-400)"
              />
              <Share
                label="Competitors"
                pct={intel.ownership.competitor}
                token="var(--gr-critical)"
              />
              <Share
                label="Shared"
                pct={intel.ownership.shared}
                token="var(--gr-neutral)"
              />
              <Share
                label="Unclaimed"
                pct={intel.ownership.unclaimed}
                token="var(--gr-positive)"
              />
            </dl>
          </div>

          <div className="rounded-md border border-line bg-panel p-6">
            <p className="text-label uppercase text-ink-3">
              Category language owned
            </p>
            <p className="text-display-2 text-ink mt-3" data-numeric="">
              {percentWhole(intel.ownership.categoryLanguageOwnedPct)}
            </p>
            <p className="text-caption text-ink-2 mt-4">
              The share of the vocabulary engines use to define this category
              that belongs to this business. Whoever holds this sets the
              criteria every comparison is scored against.
            </p>
            <p className="text-caption text-ink-3 mt-4 pt-4 border-t border-line">
              The split above measures this specific narrative inventory. This
              figure measures the category’s language as a whole, and is the
              same one Mission Control publishes.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================
          6 — COMPETITOR NARRATIVES
          ============================================================== */}
      <section className="gr-rail-wide gr-section-tight gr-hairline">
        <SectionHead
          eyebrow="Competitors"
          title={t('The story each competitor is telling')}
          note={t('Every position has a weakness built into it. A narrative strong enough to dominate is usually narrow enough to outflank.')}
        />

        <ul className="grid gap-4 xl:grid-cols-2">
          {intel.competitors.map((c) => (
            <li
              key={c.name}
              className="rounded-md border border-line bg-panel p-6"
            >
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-h3 text-ink">{c.name}</p>
                <p className="text-data text-ink-2 shrink-0" data-numeric="">
                  {c.narrativeSharePct}% share
                </p>
              </div>
              <p className="text-body text-ink-2 mt-3">“{c.positioning}”</p>

              <dl className="grid gap-4 mt-5 pt-5 border-t border-line sm:grid-cols-2">
                <Facet label="Strength" body={c.strength} />
                <Facet label="Weakness" body={c.weakness} />
                <Facet label={t('Overlap with us')} body={c.overlap} />
                <Facet
                  label="Opportunity"
                  body={c.opportunity}
                  tone="positive"
                />
              </dl>
            </li>
          ))}
        </ul>
      </section>

      {/* ================================================================
          7 — MEDIA
          ============================================================== */}
      <section className="gr-rail-wide gr-section-tight gr-hairline">
        <SectionHead
          eyebrow="Media"
          title={t('What publications are actually writing about')}
          note={intel.mediaMomentum.summary}
        />

        <ul className="grid gap-px bg-line border border-line rounded-md overflow-hidden md:grid-cols-2">
          {intel.media.map((topic) => (
            <li key={topic.topic} className="bg-panel p-5">
              <div className="flex items-start justify-between gap-4">
                <p className="text-body text-ink">{topic.topic}</p>
                <span
                  className="text-label uppercase shrink-0"
                  style={{ color: POLARITY_TOKEN[topic.tone] }}
                >
                  {topic.momentum}
                </span>
              </div>
              <p className="text-caption text-ink-2 mt-3">{topic.note}</p>
              <p className="text-caption text-ink-3 mt-3">
                {topic.publications.join(' · ')}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* ================================================================
          8 + 9 — WHAT PEOPLE ASK
          ============================================================== */}
      <section className="gr-rail-wide gr-section-tight gr-hairline">
        <SectionHead
          eyebrow="Questions"
          title={t('What the market actually wants to know')}
          note={t('The real question corpus, partitioned by what a buyer is trying to decide when they ask it.')}
        />

        <div className="grid gap-4 xl:grid-cols-2">
          <QuestionColumn
            title={t('Public questions')}
            groups={intel.publicQuestions}
            misconceptions={intel.misconceptions}
          />
          <QuestionColumn
            title={t('AI buying questions')}
            groups={intel.buyingQuestions}
          />
        </div>
      </section>

      {/* ================================================================
          10 — OPPORTUNITIES
          ============================================================== */}
      <section className="gr-rail-wide gr-section-tight gr-hairline">
        <SectionHead
          eyebrow="Opportunity"
          title={t('Stories nobody owns')}
          note={t('Ranked by influence against competition. The best of these are high influence and uncontested, which is the rarest combination in any category.')}
        />

        <ul className="grid gap-3">
          {intel.opportunities.map((o) => (
            <li
              key={o.id}
              className="rounded-md border border-line bg-panel p-5 flex flex-wrap items-start gap-x-6 gap-y-3"
              style={{
                background:
                  o.competition === 'none'
                    ? 'color-mix(in oklab, var(--gr-positive) 5%, transparent)'
                    : undefined,
              }}
            >
              <div className="min-w-0 flex-1 basis-80">
                <p className="text-body text-ink">{o.topic}</p>
                <p className="text-caption text-ink-2 mt-2">{o.rationale}</p>
              </div>
              <div className="shrink-0 flex flex-wrap gap-x-8 gap-y-2">
                <Tag label="Influence" value={o.influence} />
                <Tag
                  label="Competition"
                  value={o.competition}
                  tone={o.competition === 'none' ? 'positive' : undefined}
                />
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ================================================================
          11 — RISKS
          ============================================================== */}
      <section className="gr-rail-wide gr-section-tight gr-hairline">
        <SectionHead
          eyebrow="Risk"
          title={t('Threats before they become the default')}
          note={t('An emerging narrative is contestable. A settled one has to be displaced. The difference in cost between the two is the reason this section exists.')}
        />

        <ul className="grid gap-3">
          {intel.risks.map((r) => (
            <li
              key={r.id}
              className="rounded-md border border-line bg-panel overflow-hidden"
            >
              <div className="p-5">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <p className="text-body text-ink min-w-0">“{r.statement}”</p>
                  <div className="flex items-center gap-3 shrink-0">
                    <span
                      className="text-label uppercase"
                      style={{
                        color:
                          r.severity === 'high'
                            ? 'var(--gr-critical)'
                            : 'var(--gr-warning)',
                      }}
                    >
                      {r.severity} severity
                    </span>
                    <span className="text-label uppercase text-ink-3">
                      {r.trajectory}
                    </span>
                  </div>
                </div>
                <p className="text-caption text-ink-2 mt-3">{r.evidence}</p>
              </div>
              <div
                className="px-5 py-3 border-t border-line"
                style={{
                  background:
                    'color-mix(in oklab, var(--gr-critical) 6%, transparent)',
                }}
              >
                <p className="text-caption text-ink-2">
                  <span className="text-label uppercase text-ink-3 me-3">
                    If ignored
                  </span>
                  {r.ifIgnored}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ================================================================
          12 — STRATEGIC RECOMMENDATIONS
          ============================================================== */}
      <section className="gr-rail-wide gr-section-tight gr-hairline">
        <SectionHead
          eyebrow="Intervention"
          title={t('Narrative action plan')}
          note={t('Each carries its objective, the evidence behind it, the movement expected, a confidence, an owner, a deadline, an effort estimate and how success is verified.')}
        />

        <ol className="grid gap-3">
          {intel.recommendations.map((r, i) => (
            <li
              key={r.id}
              className="rounded-md border border-line bg-panel p-5 flex flex-wrap items-start gap-x-6 gap-y-4"
            >
              <span
                className="grid place-items-center size-8 rounded-xs bg-brand-700 text-ink text-caption shrink-0"
                data-numeric=""
              >
                {i + 1}
              </span>

              <div className="min-w-0 flex-1 basis-80">
                <p className="text-body-lg text-ink">{r.objective}</p>
                <p className="text-caption text-ink-2 mt-2 max-w-prose">
                  {r.evidence}
                </p>
                <div className="flex flex-wrap items-center gap-3 mt-4">
                  <ConfidenceBadge confidence={r.confidence} />
                  <EffortMeter effort={r.effort} />
                </div>
              </div>

              <div className="shrink-0 basis-56">
                <p className="text-label uppercase text-ink-3">
                  Expected impact
                </p>
                <p
                  className="text-body mt-2"
                  style={{ color: 'var(--gr-positive)' }}
                  data-numeric=""
                >
                  {r.expectedImpact}
                </p>
                <p className="text-caption text-ink-3 mt-3">
                  Verified by: {r.successMetric}
                </p>
              </div>

              <div className="shrink-0 basis-44">
                <p className="text-label uppercase text-ink-3">Owner</p>
                <p className="text-caption text-ink mt-2">{r.owner}</p>
                <p className="text-label uppercase text-ink-3 mt-4">Deadline</p>
                <p className="text-caption text-ink mt-2" data-numeric="">
                  {dateFull(r.deadline)}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ================================================================
          13 — EXECUTIVE DECISION
          ============================================================== */}
      <section className="gr-rail-wide gr-section-tight gr-hairline">
        <div
          className="rounded-md border p-6 md:p-10"
          style={{
            borderColor:
              'color-mix(in oklab, var(--gr-accent-500) 40%, transparent)',
            background:
              'color-mix(in oklab, var(--gr-accent-500) 6%, transparent)',
          }}
        >
          <p className="text-label uppercase text-ink-3">Executive decision</p>
          <p
            className="text-label uppercase mt-3"
            style={{ color: 'var(--gr-accent-500)' }}
          >
            {intel.verdictLabel}
          </p>

          <h2 className="text-display-2 text-ink mt-4 max-w-3xl text-balance">
            {intel.verdict.statement}
          </h2>
          <p className="text-body-lg text-ink-2 mt-5 max-w-3xl">
            {intel.verdict.because}
          </p>

          <div className="flex flex-wrap gap-3 mt-9">
            <Button asChild variant="primary" size="lg">
              <Link href="/app/actions">{t('Open narrative action plan')}</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/app/campaign-readiness">{t('Check readiness before campaigning')}</Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href="/app/mission-control">{t('Monitor narrative changes')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </AppShell>
  )
}

/* ------------------------------------------------------------------------ */

function ElectionToggle({
  enabled,
  onChange,
}: {
  enabled: boolean
  onChange: (value: boolean) => void
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={enabled}
      onClick={() => onChange(!enabled)}
      className={cn(
        'group inline-flex items-center gap-3 rounded-sm border px-4 py-3 shrink-0',
        'transition-colors duration-[var(--gr-dur-fast)]',
        enabled
          ? 'border-brand-400/60 bg-raised'
          : 'border-line bg-panel hover:bg-raised',
      )}
    >
      <span
        aria-hidden
        className="relative h-4 w-7 rounded-full transition-colors shrink-0"
        style={{
          background: enabled
            ? 'var(--gr-brand-400)'
            : 'var(--gr-line-strong)',
        }}
      >
        <span
          className="absolute top-0.5 size-3 rounded-full bg-canvas transition-[inset-inline-start]"
          style={{ insetInlineStart: enabled ? '0.875rem' : '0.125rem' }}
        />
      </span>
      <span className="text-start">
        <span className="block text-caption text-ink">Election mode</span>
        <span className="block text-label uppercase text-ink-3 mt-1">
          Political intelligence
        </span>
      </span>
    </button>
  )
}

function SectionHead({
  eyebrow,
  title,
  note,
}: {
  eyebrow: string
  title: string
  note?: string
}) {
  return (
    <div className="mb-6">
      <p className="text-label uppercase text-ink-3">{eyebrow}</p>
      <h2 className="text-h2 text-ink mt-2 text-balance">{title}</h2>
      {note ? (
        <p className="text-caption text-ink-2 mt-2 max-w-2xl">{note}</p>
      ) : null}
    </div>
  )
}

function Headline({
  label,
  value,
  note,
  tone,
}: {
  label: string
  value: string
  note: string
  tone?: 'critical' | 'accent' | 'neutral'
}) {
  return (
    <div className="bg-panel p-5">
      <dt className="text-label uppercase text-ink-3">{label}</dt>
      <dd>
        <p
          className="text-h2 mt-3"
          data-numeric=""
          style={{
            color:
              tone === 'critical'
                ? 'var(--gr-critical)'
                : tone === 'accent'
                  ? 'var(--gr-accent-500)'
                  : 'var(--gr-text-primary)',
          }}
        >
          {value}
        </p>
        <p className="text-caption text-ink-2 mt-3">{note}</p>
      </dd>
    </div>
  )
}

function NarrativeRow({ narrative: n }: { narrative: Narrative }) {
  const t = useT()
  const ownerLabel =
    n.owner === 'unclaimed'
      ? 'Unclaimed'
      : n.owner === 'shared'
        ? 'Shared'
        : (n.ownerName ?? n.owner)

  return (
    <li
      className="rounded-md border bg-panel p-5"
      style={{
        borderColor:
          n.owner === 'unclaimed' && n.polarity === 'positive'
            ? 'color-mix(in oklab, var(--gr-positive) 40%, transparent)'
            : 'var(--gr-line-subtle)',
      }}
    >
      <div className="flex flex-wrap items-start gap-x-6 gap-y-3">
        <div className="min-w-0 flex-1 basis-80">
          <div className="flex items-center gap-3">
            <span
              aria-hidden
              className="size-1.5 rounded-full shrink-0"
              style={{ background: POLARITY_TOKEN[n.polarity] }}
            />
            <span className="text-label uppercase text-ink-3">
              {t(POLARITY_LABEL[n.polarity])} · {n.momentum}
            </span>
          </div>
          <p className="text-body-lg text-ink mt-3">“{n.statement}”</p>
          <p className="text-caption text-ink-2 mt-2 max-w-prose">
            {n.commercialEffect}
          </p>
          <p className="text-caption text-ink-3 mt-3">
            Observed in {n.sources.join(', ').toLowerCase()}.
          </p>
        </div>

        <div className="shrink-0 basis-40">
          <p className="text-label uppercase text-ink-3">Reach</p>
          <p className="text-data-lg text-ink mt-2" data-numeric="">
            {n.reachPct}%
          </p>
          <div className="mt-2 h-1.5 rounded-xs bg-inset overflow-hidden">
            <div
              className="h-full rounded-xs"
              style={{
                /* Scaled against the largest narrative rather than against
                   100, so the comparison between stories stays legible. */
                width: `${(n.reachPct / 31) * 100}%`,
                background: POLARITY_TOKEN[n.polarity],
              }}
            />
          </div>
          <p className="text-label uppercase text-ink-3 mt-4">Owned by</p>
          <p
            className="text-caption mt-2"
            style={{
              color:
                n.owner === 'unclaimed'
                  ? 'var(--gr-positive)'
                  : 'var(--gr-text-primary)',
            }}
          >
            {ownerLabel}
          </p>
        </div>
      </div>
    </li>
  )
}

function Segment({
  pct,
  token,
  label,
}: {
  pct: number
  token: string
  label: string
}) {
  if (pct <= 0) return null
  return (
    <span
      className="h-full"
      style={{ width: `${pct}%`, background: token }}
      role="img"
      aria-label={`${label}: ${pct}%`}
    />
  )
}

function Share({
  label,
  pct,
  token,
}: {
  label: string
  pct: number
  token: string
}) {
  return (
    <div className="bg-panel p-4">
      <dt className="flex items-center gap-2">
        <span
          aria-hidden
          className="size-1.5 rounded-full shrink-0"
          style={{ background: token }}
        />
        <span className="text-label uppercase text-ink-3">{label}</span>
      </dt>
      <dd className="text-data-lg text-ink mt-2" data-numeric="">
        {pct}%
      </dd>
    </div>
  )
}

function Facet({
  label,
  body,
  tone,
}: {
  label: string
  body: string
  tone?: 'positive'
}) {
  return (
    <div>
      <dt
        className="text-label uppercase"
        style={{
          color:
            tone === 'positive'
              ? 'var(--gr-positive)'
              : 'var(--gr-text-tertiary)',
        }}
      >
        {label}
      </dt>
      <dd className="text-caption text-ink-2 mt-2">{body}</dd>
    </div>
  )
}

function Tag({
  label,
  value,
  tone,
}: {
  label: string
  value: string
  tone?: 'positive'
}) {
  return (
    <div>
      <p className="text-label uppercase text-ink-3">{label}</p>
      <p
        className="text-caption mt-2 capitalize"
        style={{
          color:
            tone === 'positive'
              ? 'var(--gr-positive)'
              : 'var(--gr-text-primary)',
        }}
      >
        {value}
      </p>
    </div>
  )
}

function QuestionColumn({
  title,
  groups,
  misconceptions,
}: {
  title: string
  groups: NarrativeIntelligence['publicQuestions']
  misconceptions?: NarrativeIntelligence['misconceptions']
}) {
  return (
    <div className="rounded-md border border-line bg-panel overflow-hidden">
      <p className="text-label uppercase text-ink-2 p-5 border-b border-line">
        {title}
      </p>

      <div className="divide-y divide-[var(--gr-line-subtle)]">
        {groups.map((group) => (
          <div key={group.id} className="p-5">
            <div className="flex items-baseline justify-between gap-4">
              <p className="text-body text-ink">{group.label}</p>
              <p className="text-caption text-ink-3 shrink-0" data-numeric="">
                {count(
                  group.id === 'misconceptions'
                    ? (misconceptions?.length ?? 0)
                    : group.prompts.length,
                )}
              </p>
            </div>
            <p className="text-caption text-ink-2 mt-2">{group.description}</p>

            <ul className="mt-4 grid gap-2">
              {group.id === 'misconceptions'
                ? (misconceptions ?? []).map((m) => (
                    <li key={m.engine} className="flex gap-3">
                      <span
                        aria-hidden
                        className="text-ink-3 shrink-0"
                        style={{ color: 'var(--gr-critical)' }}
                      >
                        ·
                      </span>
                      <span className="text-caption text-ink-2">
                        <span className="text-ink">{m.engine}:</span> {m.claim}
                      </span>
                    </li>
                  ))
                : group.prompts.slice(0, 5).map((p) => (
                    <li key={p.id} className="flex gap-3">
                      <span
                        aria-hidden
                        className="shrink-0"
                        style={{
                          color:
                            p.northwindRecommendedBy.length === 0
                              ? 'var(--gr-critical)'
                              : 'var(--gr-positive)',
                        }}
                      >
                        ·
                      </span>
                      <span className="text-caption text-ink-2">
                        {p.text}
                        {p.northwindRecommendedBy.length === 0 ? (
                          <span className="text-ink-3"> — absent</span>
                        ) : null}
                      </span>
                    </li>
                  ))}
            </ul>

            {group.prompts.length > 5 ? (
              <p className="text-caption text-ink-3 mt-3" data-numeric="">
                + {group.prompts.length - 5} more tracked
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}
