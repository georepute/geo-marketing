'use client'

import { cn } from '@/lib/utils/cn'

/* ============================================================================
   GEON vectors — brief §15.1.

   A hexagonal radar over the six vectors. The shape is the point: an even
   hexagon means balanced standing, and a collapsed corner shows exactly which
   vector is holding the Decision Health Index down.

   Accessibility: the polygon carries a full text description, and the vector
   list beside it is the primary reading for anyone who cannot see the shape.
   ========================================================================= */

const SIZE = 280
const CENTER = SIZE / 2
const RADIUS = 96

export function GeonHexagon({
  vectors,
  className,
}: {
  vectors: { key: string; label: string; score: number }[]
  className?: string
}) {
  const count = vectors.length
  const angle = (i: number) => (Math.PI * 2 * i) / count - Math.PI / 2

  const point = (i: number, r: number) => ({
    x: CENTER + Math.cos(angle(i)) * r,
    y: CENTER + Math.sin(angle(i)) * r,
  })

  const outer = vectors.map((_, i) => point(i, RADIUS))
  const plotted = vectors.map((v, i) => point(i, (v.score / 100) * RADIUS))

  const toPath = (pts: { x: number; y: number }[]) =>
    pts.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')

  const lowest = vectors.reduce((min, v) => (v.score < min.score ? v : min))

  return (
    <div className={cn('flex flex-wrap gap-8 items-center', className)}>
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        width={SIZE}
        height={SIZE}
        role="img"
        aria-label={`GEON assessment. ${vectors
          .map((v) => `${v.label} ${v.score} of 100`)
          .join('. ')}. Lowest vector is ${lowest.label}.`}
        className="shrink-0"
      >
        {/* Rings */}
        {[0.25, 0.5, 0.75, 1].map((scale) => (
          <polygon
            key={scale}
            points={toPath(vectors.map((_, i) => point(i, RADIUS * scale)))}
            fill="none"
            stroke="var(--gr-line-subtle)"
            strokeWidth="1"
          />
        ))}

        {/* Spokes */}
        {outer.map((p, i) => (
          <line
            key={i}
            x1={CENTER}
            y1={CENTER}
            x2={p.x}
            y2={p.y}
            stroke="var(--gr-line-subtle)"
            strokeWidth="1"
          />
        ))}

        {/* The plotted shape */}
        <polygon
          points={toPath(plotted)}
          fill="color-mix(in oklab, var(--gr-brand-400) 22%, transparent)"
          stroke="var(--gr-brand-300)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        {/* Vertices — the lowest vector is marked critical */}
        {plotted.map((p, i) => {
          const vector = vectors[i]!
          const isLowest = vector.key === lowest.key
          return (
            <circle
              key={vector.key}
              cx={p.x}
              cy={p.y}
              r={isLowest ? 4.5 : 3}
              fill={
                isLowest ? 'var(--gr-critical)' : 'var(--gr-brand-300)'
              }
            />
          )
        })}
      </svg>

      {/* Text reading — primary for AT, and honestly easier to scan */}
      <dl className="grid gap-3 min-w-[14rem] flex-1">
        {vectors.map((vector) => {
          const isLowest = vector.key === lowest.key
          return (
            <div key={vector.key} className="flex items-center gap-3">
              <dt
                className="text-caption min-w-[6.5rem]"
                style={{
                  color: isLowest
                    ? 'var(--gr-critical)'
                    : 'var(--gr-text-secondary)',
                }}
              >
                {vector.label}
              </dt>
              <dd className="flex-1 flex items-center gap-3">
                <span
                  aria-hidden
                  className="block h-1 rounded-[1px] bg-inset overflow-hidden flex-1"
                >
                  <span
                    className="block h-full rounded-[1px]"
                    style={{
                      width: `${vector.score}%`,
                      background: isLowest
                        ? 'var(--gr-critical)'
                        : 'var(--gr-brand-400)',
                    }}
                  />
                </span>
                <span
                  className="text-caption text-ink w-9 text-end"
                  data-numeric=""
                >
                  {vector.score}
                </span>
              </dd>
            </div>
          )
        })}
      </dl>
    </div>
  )
}
