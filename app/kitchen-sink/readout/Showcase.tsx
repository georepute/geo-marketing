'use client'

import { useCallback, useState } from 'react'
import { CausalSignalChain } from '@/components/signal/CausalSignalChain'
import { IntelligenceReadout } from '@/components/readout/IntelligenceReadout'
import { ReadoutDrawer } from '@/components/readout/ReadoutDrawer'
import {
  RoleProvider,
  RoleLensControl,
  useRoleLens,
} from '@/components/readout/RoleLens'
import { ActionCard } from '@/components/action/ActionCard'
import { Panel, Rule } from '@/components/ui/Card'
import type { Action, ChainLink, Readout } from '@/lib/api/types'

function Block({
  n,
  title,
  note,
  children,
}: {
  n: string
  title: string
  note?: string
  children: React.ReactNode
}) {
  return (
    <section className="py-12">
      <div className="flex items-baseline gap-3">
        <span className="text-label text-brand-300" data-numeric="">
          {n}
        </span>
        <h2 className="text-h2">{title}</h2>
      </div>
      {note ? (
        <p className="text-caption text-ink-2 mt-2 max-w-3xl">{note}</p>
      ) : null}
      <div className="mt-6">{children}</div>
    </section>
  )
}

export function Showcase({
  chain,
  readouts,
  actions,
}: {
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

  const primary = readouts[0]!

  return (
    <>
      <Block
        n="01"
        title="Causal Signal Chain — brief §13.1"
        note="Every value is computed from the seed. Select any link to open the readout behind it. The chain traces in on first view and renders fully drawn under prefers-reduced-motion."
      >
        <Panel className="p-6 md:p-8 max-w-3xl">
          <CausalSignalChain
            links={chain}
            activeId={activeLink}
            onSelect={(link) => {
              setActiveLink(link.id)
              setDrawerId(link.readoutId)
            }}
          />
        </Panel>
      </Block>

      <Rule />

      <Block
        n="02"
        title="Readout — full variant"
        note="All twelve §13 sections. Executive Truth and Business Meaning always open; Evidence, Connected Signals and Methodology collapse. Change the role lens and watch which sections open by default — nothing is ever hidden."
      >
        <div className="mb-5">
          <RoleLensControl role={role} onChange={setRole} />
        </div>
        <RoleProvider role={role}>
          <Panel className="p-6 md:p-8">
            <IntelligenceReadout
              readout={primary}
              variant="full"
              onOpenSignal={(id) => setDrawerId(id)}
            />
          </Panel>
        </RoleProvider>
      </Block>

      <Rule />

      <Block
        n="03"
        title="Readout — compact variant"
        note="Card form for grids and lists. Same data shape, different density. Note that the exposure still carries its confidence badge and assumptions — there is no variant in which a money figure loses them."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {readouts.slice(0, 6).map((r) => (
            <IntelligenceReadout key={r.id} readout={r} variant="compact" />
          ))}
        </div>
      </Block>

      <Rule />

      <Block
        n="04"
        title="Readout — panel variant, in the drawer"
        note="The same component in a side sheet. Used wherever a tile, chain link or graph node is selected, so the whole product feels like one environment."
      >
        <div className="flex flex-wrap gap-3">
          {readouts.slice(0, 5).map((r) => (
            <button
              key={r.id}
              type="button"
              onClick={() => setDrawerId(r.id)}
              className="rounded-sm border border-line bg-panel px-3.5 py-2 text-caption text-ink-2 hover:text-ink hover:border-line-strong transition-colors"
            >
              {r.title}
            </button>
          ))}
        </div>
      </Block>

      <Rule />

      <Block
        n="05"
        title="Action card — brief §7, all eleven fields"
        note="Action, reason, evidence, expected impact, confidence, urgency, effort, owner, deadline, success metric and measured change. None is optional."
      >
        <div className="grid gap-4 lg:grid-cols-2">
          {actions.slice(0, 2).map((a, i) => (
            <ActionCard
              key={a.id}
              action={a}
              rank={i + 1}
              onOpenEvidence={(id) => setDrawerId(id)}
            />
          ))}
        </div>
      </Block>

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
        onOpenSignal={(id) => setDrawerId(id)}
      />
    </>
  )
}
