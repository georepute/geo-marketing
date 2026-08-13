'use client'

import { useDict } from '@/lib/i18n/context'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'
import { cn } from '@/lib/utils/cn'

/* ============================================================================
   THE CLOSED LOOP, DRAWN — requirements doc §10, "a strong visual/animated
   representation of the complete loop".

   Seven stages on a ring, with one charge travelling it. The animation is
   doing one job: making it obvious that the last stage feeds the first. A
   list of seven bullets cannot say that, and a straight left-to-right arrow
   diagram says the opposite.

   MOTION CONTRACT (plan §5.5)
   The sweep and the stage pulses both carry `.gr-loop`, so reduced motion
   switches them off outright rather than shortening them. The component also
   branches in JS: under `reduce` the ring renders fully drawn with every
   stage at full opacity, which is a legible static diagram rather than an
   animation frozen mid-cycle.

   The SVG is aria-hidden and the real content is the ordered list beneath it.
   A screen reader gets the seven stages in sequence, which is the actual
   information; the ring is the illustration of it.
   ========================================================================= */

const SIZE = 420
const CENTER = SIZE / 2
const RADIUS = 150
/** One full circulation. Slow enough to read, not slow enough to feel stuck. */
const PERIOD_MS = 14000

function nodePosition(index: number, total: number) {
  /* Start at twelve o'clock and run clockwise, the direction a cycle is read. */
  const angle = (index / total) * Math.PI * 2 - Math.PI / 2
  return {
    x: CENTER + Math.cos(angle) * RADIUS,
    y: CENTER + Math.sin(angle) * RADIUS,
  }
}

export function LoopDiagram({ className }: { className?: string }) {
  const dict = useDict()
  const reduced = useReducedMotion()
  const steps = dict.loop.steps

  return (
    <div className={cn('relative', className)}>
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        aria-hidden
        className="w-full h-auto max-w-[26rem] mx-auto"
      >
        {/* The ring itself. */}
        <circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          fill="none"
          stroke="var(--gr-line-strong)"
          strokeWidth="1"
        />

        {/* The travelling charge. A short lit arc against a long gap, so one
            pulse circulates instead of the whole ring appearing to crawl. */}
        {!reduced ? (
          <circle
            className="gr-loop"
            cx={CENTER}
            cy={CENTER}
            r={RADIUS}
            fill="none"
            stroke="var(--gr-brand-400)"
            strokeWidth="2"
            strokeLinecap="round"
            /* `pathLength` normalises the circumference to 1000 user units,
               so the dash pattern and the keyframe's -1000 offset are in the
               same space and the charge completes exactly one lap whatever
               the radius. It is an SVG attribute, not a CSS property. */
            pathLength={1000}
            strokeDasharray="80 1000"
            style={{
              animation: `gr-loop-sweep ${PERIOD_MS}ms linear infinite`,
              strokeDashoffset: 0,
            }}
          />
        ) : null}

        {/* Stage markers. */}
        {steps.map((step, index) => {
          const { x, y } = nodePosition(index, steps.length)
          return (
            <g
              key={step.n}
              className={reduced ? undefined : 'gr-loop'}
              style={
                reduced
                  ? undefined
                  : {
                      animation: `gr-loop-node ${PERIOD_MS}ms linear infinite`,
                      animationDelay: `${(index / steps.length) * PERIOD_MS}ms`,
                    }
              }
              opacity={reduced ? 1 : undefined}
            >
              <circle
                cx={x}
                cy={y}
                r="22"
                fill="var(--gr-surface-panel)"
                stroke="var(--gr-line-strong)"
                strokeWidth="1"
              />
              <text
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="central"
                className="text-data"
                fill="var(--gr-text-primary)"
                fontSize="15"
                fontFamily="var(--font-mono)"
              >
                {step.n}
              </text>
            </g>
          )
        })}

        {/* The centre states what the ring means, so the diagram is not
            dependent on the caption beside it. */}
        <text
          x={CENTER}
          y={CENTER - 10}
          textAnchor="middle"
          fill="var(--gr-text-tertiary)"
          fontSize="11"
          letterSpacing="1.6"
          fontFamily="var(--font-mono)"
        >
          PLAN · DO · CHECK
        </text>
        <text
          x={CENTER}
          y={CENTER + 10}
          textAnchor="middle"
          fill="var(--gr-text-tertiary)"
          fontSize="11"
          letterSpacing="1.6"
          fontFamily="var(--font-mono)"
        >
          ACT · REPEAT
        </text>
      </svg>

      {/* The accessible, and frankly the more useful, version. */}
      <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 lg:mt-10">
        {steps.map((step) => (
          <li key={step.n} className="flex gap-4">
            <span
              className="text-data text-brand-300 shrink-0 pt-0.5"
              data-numeric=""
              aria-hidden
            >
              {step.n}
            </span>
            <span>
              <span className="block text-label uppercase text-ink">
                {step.name}
              </span>
              <span className="block text-caption text-ink-2 mt-1">
                {step.body}
              </span>
            </span>
          </li>
        ))}
      </ol>

      <p className="text-caption text-ink-3 mt-6 pt-5 border-t border-line">
        {dict.loop.stepsClose}
      </p>
    </div>
  )
}
