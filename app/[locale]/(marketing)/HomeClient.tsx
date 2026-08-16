'use client'

import { useState, useCallback } from 'react'
import { CausalSignalChain } from '@/components/signal/CausalSignalChain'
import { DecisionGraph } from '@/components/viz/DecisionGraph'
import { ReadoutDrawer } from '@/components/readout/ReadoutDrawer'
import { useRoleLens } from '@/components/readout/RoleLens'
import type { ChainLink, GraphEdge, GraphNode, Readout } from '@/lib/api/types'

/**
 * The two interactive surfaces on the home page. Isolated as a client island
 * so the rest of the page stays a server component with no client JS.
 */
export function HomeInteractive({
  chain,
  graph,
  readouts,
  mode,
}: {
  chain: ChainLink[]
  graph: { nodes: GraphNode[]; edges: GraphEdge[] }
  readouts: Readout[]
  mode: 'chain' | 'graph'
}) {
  const { role, setRole } = useRoleLens('executive')
  const [drawerId, setDrawerId] = useState<string | null>(null)
  const [activeLink, setActiveLink] = useState<string | null>(null)

  const byId = useCallback(
    (id: string) => readouts.find((r) => r.id === id) ?? null,
    [readouts],
  )

  return (
    <>
      {mode === 'chain' ? (
        <CausalSignalChain
          links={chain}
          activeId={activeLink}
          onSelect={(link) => {
            setActiveLink(link.id)
            setDrawerId(link.readoutId)
          }}
        />
      ) : (
        <DecisionGraph
          nodes={graph.nodes}
          edges={graph.edges}
          onSelect={setDrawerId}
        />
      )}

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
    </>
  )
}
