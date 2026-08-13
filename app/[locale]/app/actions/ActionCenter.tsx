'use client'

import { useCallback, useState } from 'react'
import { Link } from '@/components/i18n/Link'
import { AppShell } from '@/components/shell/AppShell'
import { ActionCard } from '@/components/action/ActionCard'
import { ReadoutDrawer } from '@/components/readout/ReadoutDrawer'
import { useRoleLens } from '@/components/readout/RoleLens'
import { Button } from '@/components/ui/Button'
import { copy } from '@/lib/copy/en'
import { count, dateFull } from '@/lib/format'
import { cn } from '@/lib/utils/cn'
import type { Action, OrgSummary, Readout } from '@/lib/api/types'

/* ============================================================================
   STRATEGIC ACTION CENTER — brief §7 Action Intelligence, §16.1.
   "Prove the system moves from diagnosis to execution."

   Two views over the same six interventions:
     · Priority queue — what to do first, ranked by urgency then effort
     · 30/60/90 roadmap — when each lands

   Every action keeps its owner, deadline, success metric and measured-change
   field in both views. An action without a measurement is a suggestion.
   ========================================================================= */

type View = 'priority' | 'roadmap'

const HORIZONS = [30, 60, 90] as const

export function ActionCenter({
  org,
  asOf,
  actions,
  readouts,
}: {
  org: OrgSummary
  asOf: string
  actions: Action[]
  readouts: Readout[]
}) {
  const { role, setRole } = useRoleLens('operator')
  const [drawerId, setDrawerId] = useState<string | null>(null)
  const [view, setView] = useState<View>('priority')

  const byId = useCallback(
    (id: string) => readouts.find((r) => r.id === id) ?? null,
    [readouts],
  )

  const urgencyRank = { immediate: 0, 'this-quarter': 1, monitor: 2 } as const
  const effortRank = { low: 0, medium: 1, high: 2 } as const
  const prioritised = [...actions].sort(
    (a, b) =>
      urgencyRank[a.urgency] - urgencyRank[b.urgency] ||
      effortRank[a.effort] - effortRank[b.effort],
  )

  const immediate = actions.filter((a) => a.urgency === 'immediate').length
  const measured = actions.filter((a) => a.measuredChange !== null).length

  return (
    <AppShell org={org} asOf={asOf} role={role} onRoleChange={setRole}>
      {/* --- Header ---------------------------------------------------- */}
      <section className="gr-rail-wide gr-section-tight pb-0">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="min-w-0">
            <p className="text-label uppercase text-ink-3">
              Strategic Action Center
            </p>
            <h1 className="text-h1 md:text-display-2 text-ink mt-3 text-balance max-w-2xl">
              {copy.action}
            </h1>
            <p className="text-body text-ink-2 mt-4 max-w-2xl">
              Each intervention names an owner, a deadline, the signal it should
              move and how that movement will be verified.
            </p>
          </div>

          <dl className="flex flex-wrap gap-x-9 gap-y-4">
            <Stat label="Interventions" value={count(actions.length)} />
            <Stat label="Immediate" value={count(immediate)} tone="critical" />
            <Stat
              label="Measured"
              value={`${measured} of ${actions.length}`}
              note="Verified after execution"
            />
          </dl>
        </div>

        {/* --- View switch -------------------------------------------- */}
        <div
          role="radiogroup"
          aria-label="View"
          className="inline-flex rounded-sm border border-line bg-inset p-1 mt-8"
        >
          {(
            [
              ['priority', 'Priority queue'],
              ['roadmap', '30/60/90 roadmap'],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              role="radio"
              aria-checked={view === id}
              onClick={() => setView(id)}
              className={cn(
                'px-4 py-2 rounded-xs text-caption whitespace-nowrap',
                'transition-colors duration-[var(--gr-dur-fast)]',
                view === id
                  ? 'bg-brand-700 text-ink'
                  : 'text-ink-2 hover:text-ink hover:bg-panel',
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      {/* --- Priority queue -------------------------------------------- */}
      {view === 'priority' ? (
        <section className="gr-rail-wide gr-section-tight gr-hairline">
          <p className="text-label uppercase text-ink-3 mb-6">
            Ranked by urgency, then by effort — cheapest decisive move first
          </p>
          <div className="grid gap-4">
            {prioritised.map((action, i) => (
              <ActionCard
                key={action.id}
                action={action}
                rank={i + 1}
                onOpenEvidence={setDrawerId}
              />
            ))}
          </div>
        </section>
      ) : (
        /* --- 30/60/90 roadmap ------------------------------------------ */
        <section className="gr-rail-wide gr-section-tight gr-hairline">
          <div className="grid gap-6 lg:grid-cols-3">
            {HORIZONS.map((horizon) => {
              const inHorizon = actions.filter((a) => a.horizon === horizon)
              return (
                <div key={horizon} className="min-w-0">
                  <div className="flex items-baseline gap-3 pb-3 mb-4 border-b border-line">
                    <span
                      className="text-data-lg text-ink"
                      data-numeric=""
                    >
                      {horizon}
                    </span>
                    <span className="text-label uppercase text-ink-3">
                      day horizon
                    </span>
                    <span
                      className="text-label uppercase text-ink-3 ms-auto"
                      data-numeric=""
                    >
                      {inHorizon.length}
                    </span>
                  </div>

                  <div className="grid gap-3">
                    {inHorizon.length === 0 ? (
                      <p className="text-caption text-ink-3">
                        No interventions in this window.
                      </p>
                    ) : (
                      inHorizon.map((action) => (
                        <button
                          key={action.id}
                          type="button"
                          onClick={() => setDrawerId(action.evidenceRef)}
                          className="text-start rounded-md border border-line bg-panel p-4 hover:border-line-strong hover:bg-inset transition-colors"
                        >
                          <p className="text-body text-ink text-balance">
                            {action.action}
                          </p>
                          <p
                            className="text-caption text-ink-2 mt-3"
                            data-numeric=""
                          >
                            {action.expectedImpact}
                          </p>
                          <p className="text-caption text-ink-3 mt-2">
                            {action.owner} · {dateFull(action.deadline)}
                          </p>
                        </button>
                      ))
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      )}

      {/* --- Measurement note ------------------------------------------- */}
      <section className="gr-rail-wide gr-section-tight">
        <div className="rounded-md border border-line bg-panel p-6 max-w-3xl">
          <p className="text-label uppercase text-ink-3">
            How impact is verified
          </p>
          <p className="text-body text-ink-2 mt-3">
            Completion is not impact. Each action is verified by re-observing
            the signal it targets, across the same engines and questions, after
            execution. Until that re-observation happens, measured change stays
            empty rather than assumed.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild variant="secondary">
              <Link href="/app/mission-control">Back to Mission Control</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/methodology">Read the methodology</Link>
            </Button>
          </div>
        </div>
      </section>

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

function Stat({
  label,
  value,
  note,
  tone,
}: {
  label: string
  value: string
  note?: string
  tone?: 'critical'
}) {
  return (
    <div className="min-w-[6rem]">
      <dt className="text-label uppercase text-ink-3">{label}</dt>
      <dd
        className="text-data-lg mt-2"
        data-numeric=""
        style={{
          color:
            tone === 'critical'
              ? 'var(--gr-critical)'
              : 'var(--gr-text-primary)',
        }}
      >
        {value}
      </dd>
      {note ? (
        <p className="text-caption text-ink-3 mt-1">{note}</p>
      ) : null}
    </div>
  )
}
