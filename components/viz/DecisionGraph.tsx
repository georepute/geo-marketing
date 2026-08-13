'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'
import { useT } from '@/lib/i18n/content/client'
import { cn } from '@/lib/utils/cn'
import type { GraphNode, GraphEdge } from '@/lib/seed/reconstruction'

/* ============================================================================
   THE DECISION INTELLIGENCE GRAPH — brief §5.
   "One decision. Many signals. One explanation."

   Layout is hand-laid and deterministic — no force simulation. The graph is
   identical on every render and every viewport, which makes it reasonable to
   reason about, screenshot and test (plan §8).

   Accessibility: every node is a real focusable button in tab order with an
   accessible name; hovering or focusing a node dims everything not connected
   to it, so the relationship is legible without colour vision. A full table
   fallback carries the same data for screen readers and narrow viewports.
   ========================================================================= */

const COL_W = 196
const ROW_H = 116
const NODE_W = 158
const NODE_H = 66
const PAD_X = 24
const PAD_Y = 28

const KIND_TOKEN: Record<GraphNode['kind'], string> = {
  input: 'var(--gr-neutral)',
  interpretation: 'var(--gr-brand-400)',
  market: 'var(--gr-critical)',
  channel: 'var(--gr-info)',
  outcome: 'var(--gr-accent-500)',
  action: 'var(--gr-positive)',
}

const KIND_LABEL: Record<GraphNode['kind'], string> = {
  input: 'Input',
  interpretation: 'Interpretation',
  market: 'Market',
  channel: 'Channel',
  outcome: 'Outcome',
  action: 'Action',
}

function position(node: GraphNode) {
  return {
    x: PAD_X + node.column * COL_W,
    y: PAD_Y + node.row * ROW_H,
    cx: PAD_X + node.column * COL_W + NODE_W / 2,
    cy: PAD_Y + node.row * ROW_H + NODE_H / 2,
  }
}

export function DecisionGraph({
  nodes,
  edges,
  onSelect,
  className,
}: {
  nodes: GraphNode[]
  edges: GraphEdge[]
  onSelect: (readoutId: string) => void
  className?: string
}) {
  const t = useT()
  const reduced = useReducedMotion()
  const [active, setActive] = useState<string | null>(null)
  const [revealed, setRevealed] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)

  const maxCol = Math.max(...nodes.map((n) => n.column))
  const maxRow = Math.max(...nodes.map((n) => n.row))
  const width = PAD_X * 2 + maxCol * COL_W + NODE_W
  const height = PAD_Y * 2 + maxRow * ROW_H + NODE_H

  const byId = useMemo(
    () => new Map(nodes.map((n) => [n.id, n])),
    [nodes],
  )

  /** Nodes connected to the active one, in either direction. */
  const related = useMemo(() => {
    if (!active) return null
    const set = new Set<string>([active])
    for (const e of edges) {
      if (e.from === active) set.add(e.to)
      if (e.to === active) set.add(e.from)
    }
    return set
  }, [active, edges])

  useEffect(() => {
    if (reduced) {
      setRevealed(true)
      return
    }
    const node = wrapRef.current
    if (!node) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setRevealed(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [reduced])

  return (
    <div className={cn('min-w-0', className)} ref={wrapRef}>
      {/* Legend */}
      <div className="flex flex-wrap gap-x-5 gap-y-2 mb-4">
        {(Object.keys(KIND_LABEL) as GraphNode['kind'][]).map((kind) => (
          <span key={kind} className="inline-flex items-center gap-2">
            <span
              aria-hidden
              className="size-2 rounded-[1px]"
              style={{ background: KIND_TOKEN[kind] }}
            />
            <span className="text-label uppercase text-ink-3">
              {t(KIND_LABEL[kind])}
            </span>
          </span>
        ))}
      </div>

      <div className="overflow-x-auto -mx-1 px-1 pb-2">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          width={width}
          height={height}
          role="group"
          aria-label={t('Decision intelligence graph. Thirteen connected signals ending in a prescription.')}
          className="max-w-none"
          style={{ minWidth: width }}
        >
          <defs>
            <marker
              id="gr-arrow"
              viewBox="0 0 8 8"
              refX="7"
              refY="4"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M0 1 L7 4 L0 7 z" fill="var(--gr-line-strong)" />
            </marker>
            <marker
              id="gr-arrow-active"
              viewBox="0 0 8 8"
              refX="7"
              refY="4"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M0 1 L7 4 L0 7 z" fill="var(--gr-brand-300)" />
            </marker>
          </defs>

          {/* --- Edges ------------------------------------------------- */}
          <g>
            {edges.map((edge, i) => {
              const from = byId.get(edge.from)
              const to = byId.get(edge.to)
              if (!from || !to) return null

              const a = position(from)
              const b = position(to)
              const x1 = a.x + NODE_W
              const y1 = a.cy
              const x2 = b.x
              const y2 = b.cy
              const mid = x1 + (x2 - x1) / 2
              const d = `M${x1},${y1} C${mid},${y1} ${mid},${y2} ${x2},${y2}`

              const isActive =
                related !== null &&
                (edge.from === active || edge.to === active)
              const dimmed = related !== null && !isActive

              return (
                <path
                  key={`${edge.from}-${edge.to}`}
                  d={d}
                  fill="none"
                  strokeWidth={isActive ? 1.6 : 1}
                  stroke={
                    isActive ? 'var(--gr-brand-300)' : 'var(--gr-line-strong)'
                  }
                  markerEnd={
                    isActive ? 'url(#gr-arrow-active)' : 'url(#gr-arrow)'
                  }
                  opacity={dimmed ? 0.18 : 1}
                  className="gr-trace"
                  style={
                    reduced || !revealed
                      ? { opacity: dimmed ? 0.18 : revealed ? 1 : 0 }
                      : {
                          strokeDasharray: 400,
                          strokeDashoffset: 400,
                          animation: `gr-trace var(--gr-dur-reveal) var(--gr-ease-enter) ${i * 40}ms forwards`,
                        }
                  }
                />
              )
            })}
          </g>

          {/* --- Nodes ------------------------------------------------- */}
          <g>
            {nodes.map((node, i) => {
              const p = position(node)
              const token = KIND_TOKEN[node.kind]
              const isActive = active === node.id
              const dimmed = related !== null && !related.has(node.id)

              return (
                /* OPACITY ONLY — never a transform.
                   The node is positioned by the SVG `transform` ATTRIBUTE,
                   and a CSS `transform` PROPERTY overrides it. Animating
                   `gr-fade-up` here ended on `transform: none`, which wiped
                   the translate and collapsed every node onto the origin. */
                <g
                  key={node.id}
                  transform={`translate(${p.x} ${p.y})`}
                  opacity={dimmed ? 0.28 : 1}
                  style={
                    revealed && !reduced
                      ? {
                          animation: `gr-fade-in var(--gr-dur-base) var(--gr-ease-enter) ${i * 45}ms both`,
                        }
                      : { opacity: revealed ? (dimmed ? 0.28 : 1) : 0 }
                  }
                  className="transition-opacity duration-[var(--gr-dur-base)]"
                >
                  <g
                    role="button"
                    tabIndex={0}
                    aria-label={t('{label}: {value}. {kind}. {evidence} Activate to open the readout.', {
                      label: node.label,
                      value: node.value,
                      kind: t(KIND_LABEL[node.kind]),
                      evidence: node.evidence,
                    })}
                    className="cursor-pointer outline-none [&:focus-visible>rect]:stroke-[var(--gr-brand-300)] [&:focus-visible>rect]:stroke-2"
                    onMouseEnter={() => setActive(node.id)}
                    onMouseLeave={() => setActive(null)}
                    onFocus={() => setActive(node.id)}
                    onBlur={() => setActive(null)}
                    onClick={() => onSelect(node.readoutId)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        onSelect(node.readoutId)
                      }
                    }}
                  >
                    <rect
                      width={NODE_W}
                      height={NODE_H}
                      rx="6"
                      fill={
                        isActive
                          ? 'var(--gr-surface-inset)'
                          : 'var(--gr-surface-panel)'
                      }
                      stroke={isActive ? token : 'var(--gr-line-subtle)'}
                      strokeWidth="1"
                    />
                    {/* Kind rail */}
                    <rect width="3" height={NODE_H} rx="1.5" fill={token} />

                    <text
                      x="14"
                      y="24"
                      fill="var(--gr-text-tertiary)"
                      /* Mirrors the `label` type token. SVG cannot inherit a
                         Tailwind text class, so the values are restated here
                         and must move together with globals.css. */
                      style={{
                        fontSize: '0.6875rem',
                        letterSpacing: '0.09em',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                      }}
                    >
                      {node.label}
                    </text>
                    <text
                      x="14"
                      y="47"
                      fill="var(--gr-text-primary)"
                      /* Mirrors the `data` type token. */
                      style={{
                        fontSize: '0.875rem',
                        fontFamily: 'var(--font-mono)',
                        fontVariantNumeric: 'tabular-nums',
                      }}
                    >
                      {node.value}
                    </text>
                  </g>
                </g>
              )
            })}
          </g>
        </svg>
      </div>

      <p className="text-caption text-ink-3 mt-3">
        {t('Hover or focus a node to isolate its relationships. Select any node to open the evidence behind it.')}
      </p>

      {/* --- Table fallback: same data, linear, for AT and narrow screens.
             Open by default — the table IS the accessible reading of the
             graph, and hiding it behind a click makes it a second-class
             path to the same information. */}
      <details open className="mt-5 rounded-md border border-line bg-panel">
        <summary className="p-4 text-label uppercase text-ink-2 cursor-pointer hover:bg-inset transition-colors">
          {t('Read the graph as a table')}
        </summary>
        <div className="overflow-x-auto border-t border-line">
          <table className="w-full min-w-[36rem]">
            <thead>
              <tr className="text-label uppercase text-ink-3">
                <th className="text-start font-normal p-4">{t('Signal')}</th>
                <th className="text-start font-normal p-4">{t('Value')}</th>
                <th className="text-start font-normal p-4">{t('Leads to')}</th>
                <th className="text-start font-normal p-4">{t('Evidence')}</th>
              </tr>
            </thead>
            <tbody>
              {nodes.map((node) => {
                const outgoing = edges
                  .filter((e) => e.from === node.id)
                  .map((e) => byId.get(e.to)?.label)
                  .filter(Boolean)
                return (
                  <tr key={node.id} className="border-t border-line align-top">
                    <td className="p-4 text-caption text-ink">{node.label}</td>
                    <td className="p-4 text-caption text-ink" data-numeric="">
                      {node.value}
                    </td>
                    <td className="p-4 text-caption text-ink-2">
                      {outgoing.length ? outgoing.join(', ') : '—'}
                    </td>
                    <td className="p-4 text-caption text-ink-2">
                      {node.evidence}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </details>
    </div>
  )
}
