'use client'

import { Link } from '@/components/i18n/Link'
import { AppShell } from '@/components/shell/AppShell'
import { Button } from '@/components/ui/Button'
import { ConfidenceBadge } from '@/components/signal/ConfidenceBadge'
import { ExposureRange } from '@/components/signal/ExposureRange'
import { EffortMeter, UrgencyChip } from '@/components/signal/Indicators'
import {
  DimensionPanel,
  ReadinessBar,
  STATUS_META,
  StatusChip,
} from '@/components/readiness/Readiness'
import { useRoleLens } from '@/components/readout/RoleLens'
import { count, dateFull, percentWhole } from '@/lib/format'
import { cn } from '@/lib/utils/cn'
import type { Action, CampaignReadiness, OrgSummary } from '@/lib/api/types'

/* ============================================================================
   CAMPAIGN READINESS INTELLIGENCE.

   One executive question: should we launch this campaign today?

   The page is built as an argument that ends in a decision, in the same shape
   as everything else in this product: observation → explanation → decision →
   action → measurement. What is unusual is that the honest answer here is
   frequently "no", and the page is built to be able to say so.

   That is the design constraint worth stating. A readiness tool that cannot
   recommend against launching is a budget-approval instrument wearing a
   diagnostic costume. So the verdict is derived from the model rather than
   chosen, the primary CTA changes to match it, and "Launch anyway" remains
   available and honestly labelled — the decision belongs to the executive, but
   they should have to make it deliberately.
   ========================================================================= */

export function CampaignReadinessView({
  org,
  asOf,
  readiness,
}: {
  org: OrgSummary
  asOf: string
  readiness: CampaignReadiness
}) {
  const { role, setRole } = useRoleLens('executive')
  const {
    campaign,
    score,
    recommendationLabel,
    recommendation,
    decision,
    constraint,
    dimensions,
    journey,
    risks,
    budgetAtRisk,
    confidence,
    timing,
    actions,
    thresholds,
  } = readiness

  const overallStatus =
    score >= thresholds.ready
      ? 'ready'
      : score >= thresholds.risk
        ? 'risk'
        : 'blocking'
  const cleared = recommendation === 'ready-to-launch'
  const missingStages = journey.filter((s) => s.missing)

  return (
    <AppShell org={org} asOf={asOf} role={role} onRoleChange={setRole}>
      {/* ================================================================
          1 — EXECUTIVE SUMMARY
          ============================================================== */}
      <section className="gr-rail-wide gr-section-tight pb-0">
        <p className="text-label uppercase text-ink-3">
          Campaign readiness intelligence
        </p>
        <h1 className="text-h1 md:text-display-2 text-ink mt-3 text-balance max-w-3xl">
          Should we launch this campaign today?
        </h1>
        <p className="text-body text-ink-2 mt-4 max-w-3xl">
          This assessment evaluates the business, not the campaign. Creative,
          targeting and budget can all be correct while the business remains
          structurally unable to convert the attention they buy.
        </p>

        {/* --- Campaign under assessment ---------------------------- */}
        <div className="mt-8 rounded-md border border-line bg-panel p-5 flex flex-wrap items-center gap-x-8 gap-y-3">
          <div className="min-w-0">
            <p className="text-label uppercase text-ink-3">Campaign</p>
            <p className="text-body text-ink mt-1.5">{campaign.name}</p>
          </div>
          <div>
            <p className="text-label uppercase text-ink-3">Intended launch</p>
            <p className="text-body text-ink mt-1.5" data-numeric="">
              {dateFull(campaign.intendedLaunch)}
            </p>
          </div>
          <div>
            <p className="text-label uppercase text-ink-3">Duration</p>
            <p className="text-body text-ink mt-1.5" data-numeric="">
              {campaign.campaignMonths} months
            </p>
          </div>
          <div className="min-w-0">
            <p className="text-label uppercase text-ink-3">Channels</p>
            <p className="text-body text-ink mt-1.5">
              {campaign.channels.join(' · ')}
            </p>
          </div>
        </div>

        {/* --- The verdict ------------------------------------------- */}
        <div
          className="mt-4 rounded-md border overflow-hidden"
          style={{
            borderColor: `color-mix(in oklab, ${STATUS_META[overallStatus].token} 45%, transparent)`,
          }}
        >
          <div
            className="p-6 md:p-8 grid gap-8 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]"
            style={{
              background: `color-mix(in oklab, ${STATUS_META[overallStatus].token} 7%, transparent)`,
            }}
          >
            {/* Score */}
            <div>
              <p className="text-label uppercase text-ink-3">
                Campaign readiness score
              </p>
              <p className="mt-3 flex items-baseline gap-2">
                <span
                  className="text-display-1"
                  data-numeric=""
                  style={{ color: STATUS_META[overallStatus].token }}
                >
                  {score}
                </span>
                <span className="text-h2 text-ink-3" data-numeric="">
                  /100
                </span>
              </p>
              <ReadinessBar
                score={score}
                status={overallStatus}
                thresholds={thresholds}
                className="mt-4"
              />
              <p className="text-caption text-ink-3 mt-3" data-numeric="">
                Ready at {thresholds.ready} and above. At risk from{' '}
                {thresholds.risk}. Blocking below {thresholds.risk}.
              </p>
            </div>

            {/* Recommendation */}
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-label uppercase text-ink-3">
                  Executive recommendation
                </p>
                <ConfidenceBadge confidence={confidence} />
              </div>
              <p
                className="text-display-2 mt-3"
                style={{ color: STATUS_META[overallStatus].token }}
              >
                {recommendationLabel}
              </p>
              <p className="text-body-lg text-ink mt-4 max-w-2xl">
                {decision.verdict}
              </p>
              <p className="text-caption text-ink-2 mt-3 max-w-2xl">
                {decision.because}
              </p>
            </div>
          </div>

          {/* Summary row */}
          <dl className="grid gap-px bg-line border-t border-line sm:grid-cols-2 xl:grid-cols-4">
            <Summary
              label="Primary constraint"
              value={constraint.label}
              note={`${constraint.score} of 100 · ${Math.round(constraint.weight * 100)}% of the index`}
            />
            <Summary
              label="Strategic window"
              value={`${timing.windowMonths} months`}
              note={`Advantage holds until ${dateFull(timing.decisionDeadline)}.`}
            />
            <Summary
              label="Decision journey gaps"
              value={`${missingStages.length} of ${journey.length}`}
              note={
                missingStages.length > 0
                  ? `No presence at ${missingStages.map((s) => s.label).join(' or ')}.`
                  : 'Presence at every stage.'
              }
            />
            <Summary
              label="Assessment confidence"
              value={confidence === 'high' ? 'High' : 'Medium'}
              note="Six of seven dimensions rest on directly observed data."
            />
          </dl>

          {/* Budget at risk — a claim, so it carries its full disclosure. */}
          <div className="p-6 md:p-8 border-t border-line">
            <p className="text-label uppercase text-ink-3 mb-4">
              Estimated budget at risk
            </p>
            <ExposureRange exposure={budgetAtRisk} size="lg" />
          </div>
        </div>
      </section>

      {/* ================================================================
          2 — THE SEVEN DIMENSIONS
          ============================================================== */}
      <section className="gr-rail-wide gr-section-tight">
        <SectionHead
          eyebrow="Assessment"
          title="Seven readiness dimensions, weighted into one index"
          note="Every score is computed from observed data rather than assigned. The weights are published and sum to one."
        />

        {/* At-a-glance strip, so the shape of the problem is visible before
            anyone reads thirty-five individual measures. */}
        <ul className="grid gap-px bg-line border border-line rounded-md overflow-hidden mb-6 sm:grid-cols-2 xl:grid-cols-4">
          {dimensions.map((d) => (
            <li key={d.id} className="bg-panel p-4">
              <div className="flex items-baseline justify-between gap-3">
                <p className="text-caption text-ink truncate">{d.label}</p>
                <p className="text-data text-ink shrink-0" data-numeric="">
                  {d.score}
                </p>
              </div>
              <ReadinessBar
                score={d.score}
                status={d.status}
                thresholds={thresholds}
                className="mt-3"
              />
            </li>
          ))}
        </ul>

        <div className="grid gap-4">
          {dimensions.map((d) => (
            <DimensionPanel
              key={d.id}
              dimension={d}
              thresholds={thresholds}
              isConstraint={d.id === constraint.id}
            />
          ))}
        </div>
      </section>

      {/* ================================================================
          3 — DECISION JOURNEY COVERAGE
          ============================================================== */}
      <section className="gr-rail-wide gr-section-tight gr-hairline">
        <SectionHead
          eyebrow="Coverage"
          title="Where the campaign would reach buyers, and where it would not"
          note="A campaign creates demand across the whole journey. It converts only at the stages where the business is actually present."
        />

        <ol className="grid gap-px bg-line border border-line rounded-md overflow-hidden md:grid-cols-5">
          {journey.map((stage) => (
            <li
              key={stage.id}
              className="bg-panel p-5"
              style={
                stage.missing
                  ? {
                      background:
                        'color-mix(in oklab, var(--gr-critical) 8%, transparent)',
                    }
                  : undefined
              }
            >
              <div className="flex items-baseline justify-between gap-2">
                <p className="text-label uppercase text-ink-3" data-numeric="">
                  Stage {stage.order}
                </p>
                {stage.missing ? (
                  <span
                    className="text-label uppercase shrink-0"
                    style={{ color: 'var(--gr-critical)' }}
                  >
                    Absent
                  </span>
                ) : null}
              </div>

              <p className="text-body text-ink mt-2">{stage.label}</p>
              <p
                className="text-data-lg mt-3"
                data-numeric=""
                style={{
                  color: stage.missing
                    ? 'var(--gr-critical)'
                    : 'var(--gr-text-primary)',
                }}
              >
                {percentWhole(stage.coveragePct)}
              </p>
              <p className="text-caption text-ink-3 mt-2" data-numeric="">
                {count(stage.promptCount)} tracked questions
              </p>
              <p className="text-caption text-ink-3 mt-3 pt-3 border-t border-line">
                {stage.observableBy.length === 0
                  ? 'Invisible to every conventional measurement tool.'
                  : `Visible to ${stage.observableBy.join(', ').toLowerCase()}.`}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* ================================================================
          4 — COMMERCIAL RISK
          ============================================================== */}
      <section className="gr-rail-wide gr-section-tight gr-hairline">
        <SectionHead
          eyebrow="Commercial risk"
          title="What launching today would cost"
          note="Risk here is not the chance the campaign underperforms. It is the mechanism by which spend converts into a competitor's advantage."
        />

        <dl className="grid gap-px bg-line border border-line rounded-md overflow-hidden sm:grid-cols-2 xl:grid-cols-4">
          {risks.map((risk) => (
            <div key={risk.label} className="bg-panel p-5">
              <dt className="text-label uppercase text-ink-3">{risk.label}</dt>
              <dd>
                <p
                  className="text-data-lg mt-3"
                  data-numeric=""
                  style={{
                    color:
                      risk.tone === 'critical'
                        ? 'var(--gr-critical)'
                        : risk.tone === 'warning'
                          ? 'var(--gr-warning)'
                          : 'var(--gr-text-primary)',
                  }}
                >
                  {risk.value}
                </p>
                <p className="text-caption text-ink-2 mt-3">{risk.meaning}</p>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ================================================================
          5 — REQUIRED ACTIONS BEFORE LAUNCH
          ============================================================== */}
      <section className="gr-rail-wide gr-section-tight gr-hairline">
        <SectionHead
          eyebrow="Intervention"
          title="Required before launch"
          note="Each carries a priority, an owner, a deadline, an effort estimate, its dependencies, the movement it should produce and how confident the model is in that."
          action={
            <Button asChild variant="secondary" size="sm">
              <Link href="/app/actions">Open Action Center</Link>
            </Button>
          }
        />

        <ol className="grid gap-3">
          {actions.map((action, i) => (
            <PreLaunchAction
              key={action.id}
              action={action}
              priority={i + 1}
              blockedBy={action.dependsOn
                .map((id) => actions.find((a) => a.id === id))
                .filter(Boolean) as Action[]}
            />
          ))}
        </ol>
      </section>

      {/* ================================================================
          6 — EXECUTIVE DECISION
          ============================================================== */}
      <section className="gr-rail-wide gr-section-tight gr-hairline">
        <div
          className="rounded-md border p-6 md:p-10"
          style={{
            borderColor: `color-mix(in oklab, ${STATUS_META[overallStatus].token} 45%, transparent)`,
            background: `color-mix(in oklab, ${STATUS_META[overallStatus].token} 7%, transparent)`,
          }}
        >
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-label uppercase text-ink-3">
              Executive decision
            </p>
            <StatusChip status={overallStatus} />
          </div>

          <h2 className="text-display-2 text-ink mt-4 max-w-3xl text-balance">
            {decision.verdict}
          </h2>
          <p className="text-body-lg text-ink-2 mt-5 max-w-3xl">
            {decision.because}
          </p>

          <div className="flex flex-wrap gap-3 mt-9">
            {/* The primary route follows the verdict, not the sales interest. */}
            {cleared ? (
              <Button asChild variant="primary" size="lg">
                <Link href="/app/actions">Launch campaign</Link>
              </Button>
            ) : (
              <Button asChild variant="primary" size="lg">
                <Link href="/app/actions">Fix readiness first</Link>
              </Button>
            )}
            <Button asChild variant="secondary" size="lg">
              <Link href="/app/actions">Open Executive Action Plan</Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href="/app/mission-control">Review the full position</Link>
            </Button>
          </div>

          {!cleared ? (
            <p className="text-caption text-ink-3 mt-8 max-w-2xl">
              Launching remains available and is sometimes correct — a product
              deadline or a competitive move can outweigh a readiness score.
              This assessment states the cost of that choice so it is made
              deliberately rather than by default.
            </p>
          ) : null}
        </div>
      </section>
    </AppShell>
  )
}

/* ------------------------------------------------------------------------ */

function SectionHead({
  eyebrow,
  title,
  note,
  action,
}: {
  eyebrow: string
  title: string
  note?: string
  action?: React.ReactNode
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
      <div className="min-w-0">
        <p className="text-label uppercase text-ink-3">{eyebrow}</p>
        <h2 className="text-h2 text-ink mt-2 text-balance">{title}</h2>
        {note ? (
          <p className="text-caption text-ink-2 mt-2 max-w-2xl">{note}</p>
        ) : null}
      </div>
      {action}
    </div>
  )
}

function Summary({
  label,
  value,
  note,
}: {
  label: string
  value: string
  note: string
}) {
  return (
    <div className="bg-panel p-5">
      <dt className="text-label uppercase text-ink-3">{label}</dt>
      <dd>
        <p className="text-body text-ink mt-2">{value}</p>
        <p className="text-caption text-ink-3 mt-2">{note}</p>
      </dd>
    </div>
  )
}

function PreLaunchAction({
  action,
  priority,
  blockedBy,
}: {
  action: Action
  priority: number
  blockedBy: Action[]
}) {
  const blocked = blockedBy.length > 0

  return (
    <li className="rounded-md border border-line bg-panel overflow-hidden">
      <div className="p-5 flex flex-wrap items-start gap-x-6 gap-y-4">
        <div className="shrink-0">
          <p className="text-label uppercase text-ink-3">Priority</p>
          <p
            className={cn(
              'grid place-items-center size-9 rounded-xs mt-2 text-body',
              blocked ? 'bg-inset text-ink-2' : 'bg-brand-700 text-ink',
            )}
            data-numeric=""
          >
            {priority}
          </p>
        </div>

        <div className="min-w-0 flex-1 basis-80">
          <p className="text-body-lg text-ink">{action.action}</p>
          <p className="text-caption text-ink-2 mt-2 max-w-prose">
            {action.reason}
          </p>
          <div className="flex flex-wrap items-center gap-3 mt-4">
            <UrgencyChip urgency={action.urgency} />
            <ConfidenceBadge confidence={action.confidence} />
            <EffortMeter effort={action.effort} />
          </div>
        </div>

        <div className="shrink-0 basis-56">
          <p className="text-label uppercase text-ink-3">Expected impact</p>
          <p
            className="text-body mt-2"
            style={{ color: 'var(--gr-positive)' }}
            data-numeric=""
          >
            {action.expectedImpact}
          </p>
          <p className="text-caption text-ink-3 mt-3">
            Verified by: {action.successMetric}
          </p>
        </div>

        <div className="shrink-0 basis-44">
          <p className="text-label uppercase text-ink-3">Owner</p>
          <p className="text-caption text-ink mt-2">{action.owner}</p>
          <p className="text-label uppercase text-ink-3 mt-4">Deadline</p>
          <p className="text-caption text-ink mt-2" data-numeric="">
            {dateFull(action.deadline)}
          </p>
        </div>
      </div>

      <div
        className="px-5 py-3 border-t border-line"
        style={
          blocked
            ? {
                background:
                  'color-mix(in oklab, var(--gr-warning) 6%, transparent)',
              }
            : undefined
        }
      >
        <p className="text-caption text-ink-3">
          <span className="text-label uppercase me-3">Dependencies</span>
          {blocked ? (
            <span className="text-ink-2">
              Blocked until priority{' '}
              {blockedBy.map((d) => d.id.replace('a', '')).join(' and ')} lands.
            </span>
          ) : (
            <span className="text-ink-2">None. Can start immediately.</span>
          )}
        </p>
      </div>
    </li>
  )
}
