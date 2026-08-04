'use client'

import { useCallback, useState } from 'react'
import Link from 'next/link'
import { AppShell } from '@/components/shell/AppShell'
import { MissionTile } from '@/components/mission/MissionTile'
import { IntelligenceFeed } from '@/components/mission/IntelligenceFeed'
import { CausalSignalChain } from '@/components/signal/CausalSignalChain'
import { ReadoutDrawer } from '@/components/readout/ReadoutDrawer'
import { ActionCard } from '@/components/action/ActionCard'
import { useRoleLens } from '@/components/readout/RoleLens'
import { ScoreMeter } from '@/components/signal/Indicators'
import { Button } from '@/components/ui/Button'
import { copy } from '@/lib/copy/en'
import { cn } from '@/lib/utils/cn'
import type {
  Action,
  ChainLink,
  FeedEvent,
  MissionTile as Tile,
  OrgSummary,
  Readout,
} from '@/lib/api/types'

/* ============================================================================
   EXECUTIVE MISSION CONTROL — brief §6.1. Hero experience 1.

   Purpose (§16.1): "Communicate the total system value immediately."

   Structure is deliberate and reads top to bottom as an argument:
     1. Position    — one index, one exposure, one deadline
     2. Tiles       — the ten §6.1 measures, each opening its evidence
     3. Explanation — the causal chain beside the live feed
     4. Execution   — what happens next, with owners and deadlines
   ========================================================================= */

export function MissionControl({
  org,
  asOf,
  tiles,
  feed,
  chain,
  readouts,
  actions,
}: {
  org: OrgSummary
  asOf: string
  tiles: Tile[]
  feed: FeedEvent[]
  chain: ChainLink[]
  readouts: Readout[]
  actions: Action[]
}) {
  const { role, setRole } = useRoleLens('executive')
  const [drawerId, setDrawerId] = useState<string | null>(null)
  const [activeLink, setActiveLink] = useState<string | null>(null)

  const byId = useCallback(
    (id: string) => readouts.find((r) => r.id === id) ?? null,
    [readouts],
  )

  const lead = tiles.filter((t) => t.emphasis === 'lead')
  const standard = tiles.filter((t) => t.emphasis === 'standard')

  return (
    <AppShell org={org} asOf={asOf} role={role} onRoleChange={setRole}>
      {/* ================================================================
          1 — POSITION
          ============================================================== */}
      <section className="gr-rail-wide gr-section-tight pb-0">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="min-w-0">
            <p className="text-label uppercase text-ink-3">
              Executive Mission Control
            </p>
            <h1 className="text-h1 md:text-display-2 text-ink mt-3 text-balance max-w-2xl">
              Not more data. A decision position.
            </h1>
          </div>

          <dl className="flex flex-wrap gap-x-9 gap-y-4">
            <Stat
              label="Decision Health"
              value={`${org.decisionHealthIndex}`}
              suffix="/100"
              score={org.decisionHealthIndex}
            />
            <Stat
              label="Timing window"
              value={`${org.timing.windowMonths}`}
              suffix=" months"
            />
            <Stat
              label="Decision deadline"
              value={org.timing.decisionDeadline}
              mono
            />
          </dl>
        </div>
      </section>

      {/* ================================================================
          2 — THE TEN MEASURES
          ============================================================== */}
      <section className="gr-rail-wide pb-16">
        <SectionHead
          eyebrow="Position"
          title="Ten measures, each with evidence behind it"
          note="Every figure is computed from observed data. Select any tile to open the full readout, its evidence and its prescribed action."
        />

        <div className="grid gap-4 lg:grid-cols-2">
          {lead.map((tile) => (
            <MissionTile key={tile.id} tile={tile} onSelect={setDrawerId} />
          ))}
        </div>

        <div className="grid gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-4">
          {standard.map((tile) => (
            <MissionTile key={tile.id} tile={tile} onSelect={setDrawerId} />
          ))}
        </div>
      </section>

      {/* ================================================================
          3 — EXPLANATION: chain + feed
          ============================================================== */}
      <section className="gr-rail-wide gr-section-tight gr-hairline">
        <SectionHead
          eyebrow="Explanation"
          title="One decision. Many signals. One explanation."
          note="The measures above are not independent. This is the chain that connects them, ending in the intervention it implies."
        />

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] xl:grid-cols-[minmax(0,1fr)_minmax(0,30rem)]">
          {/* Causal chain */}
          <div className="rounded-md border border-line bg-panel p-6 md:p-7">
            <p className="text-label uppercase text-ink-3 mb-6">
              Causal signal chain
            </p>
            <CausalSignalChain
              links={chain}
              activeId={activeLink}
              onSelect={(link) => {
                setActiveLink(link.id)
                setDrawerId(link.readoutId)
              }}
            />
          </div>

          {/* Live feed */}
          <div className="rounded-md border border-line bg-panel flex flex-col overflow-hidden">
            <div className="flex items-center gap-3 p-5 border-b border-line">
              <span
                aria-hidden
                className="gr-loop size-1.5 rounded-full"
                style={{
                  background: 'var(--gr-positive)',
                  animation:
                    'gr-pulse var(--gr-dur-scan) var(--gr-ease-standard) infinite',
                }}
              />
              <p className="text-label uppercase text-ink-2">
                Executive intelligence feed
              </p>
              <span
                className="text-label uppercase text-ink-3 ms-auto"
                data-numeric=""
              >
                {feed.length} events
              </span>
            </div>
            <div className="overflow-y-auto max-h-[42rem]">
              <IntelligenceFeed events={feed} onSelect={setDrawerId} />
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          4 — EXECUTION
          ============================================================== */}
      <section className="gr-rail-wide gr-section-tight gr-hairline">
        <SectionHead
          eyebrow="Execution"
          title={copy.action}
          note="Each intervention names an owner, a deadline, the signal it should move and how that movement will be verified."
          action={
            <Button asChild variant="secondary" size="sm">
              <Link href="/app/actions">Open Action Center</Link>
            </Button>
          }
        />

        <div className="grid gap-4 lg:grid-cols-2">
          {actions.slice(0, 2).map((action, i) => (
            <ActionCard
              key={action.id}
              action={action}
              rank={i + 1}
              onOpenEvidence={setDrawerId}
            />
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <Button asChild variant="primary">
            <Link href="/app/reconstruct">Reconstruct the decision</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/engines">Explore intelligence engines</Link>
          </Button>
        </div>
      </section>

      <ReadoutDrawer
        readout={drawerId ? byId(drawerId) : null}
        open={Boolean(drawerId)}
        onOpenChange={(open) => {
          if (!open) {
            setDrawerId(null)
            setActiveLink(null)
          }
        }}
        role={role}
        onRoleChange={setRole}
        onOpenSignal={setDrawerId}
      />
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

function Stat({
  label,
  value,
  suffix,
  score,
  mono,
}: {
  label: string
  value: string
  suffix?: string
  score?: number
  mono?: boolean
}) {
  return (
    <div className="min-w-[7rem]">
      <dt className="text-label uppercase text-ink-3">{label}</dt>
      <dd
        className={cn('text-ink mt-2', mono ? 'text-body' : 'text-data-lg')}
        data-numeric=""
      >
        {value}
        {suffix ? <span className="text-ink-3 text-body">{suffix}</span> : null}
      </dd>
      {typeof score === 'number' ? (
        <ScoreMeter score={score} tone="critical" className="mt-2 w-28" />
      ) : null}
    </div>
  )
}
