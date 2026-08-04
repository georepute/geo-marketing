'use client'

import { useState } from 'react'
import { Panel, Label } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'

/**
 * Demonstrates the three permitted motion purposes (plan §5.4) and proves the
 * reduced-motion contract (§5.5) is enforced in JS as well as CSS.
 */
export function MotionProbe() {
  const reduced = useReducedMotion()
  const [traceKey, setTraceKey] = useState(0)

  return (
    <div className="space-y-5">
      <Panel className="p-4 flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2.5">
          <span
            aria-hidden
            className="size-2 rounded-full"
            style={{
              background: reduced
                ? 'var(--gr-neutral)'
                : 'var(--gr-positive)',
            }}
          />
          <span className="text-body text-ink">
            prefers-reduced-motion:{' '}
            <strong className="text-ink">
              {reduced ? 'reduce — motion disabled' : 'no-preference'}
            </strong>
          </span>
        </div>
        <p className="text-caption text-ink-3">
          Toggle it in your OS settings; this reflects live. Under reduce, loops
          stop outright and traces render fully drawn.
        </p>
      </Panel>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* 1 — relationship */}
        <Panel className="p-4">
          <Label>Purpose 1 — relationship</Label>
          <p className="text-caption text-ink-2 mt-1.5 mb-3">
            Tracing a causal edge.
          </p>
          <svg viewBox="0 0 200 60" className="w-full h-16" role="img"
               aria-label="A traced connection between two signal nodes">
            <line
              key={traceKey}
              className="gr-trace"
              x1="16" y1="30" x2="184" y2="30"
              stroke="var(--gr-brand-400)" strokeWidth="1.5"
              strokeDasharray={reduced ? undefined : 170}
              strokeDashoffset={reduced ? undefined : 170}
              style={
                reduced
                  ? undefined
                  : { animation: 'gr-trace 520ms var(--gr-ease-enter) forwards' }
              }
            />
            <circle cx="16" cy="30" r="5" fill="var(--gr-brand-300)" />
            <circle cx="184" cy="30" r="5" fill="var(--gr-accent-500)" />
          </svg>
          <Button size="sm" onClick={() => setTraceKey((k) => k + 1)}>
            Replay
          </Button>
        </Panel>

        {/* 2 — state change */}
        <Panel className="p-4">
          <Label>Purpose 2 — state change</Label>
          <p className="text-caption text-ink-2 mt-1.5 mb-3">
            A value ticking once, on first view.
          </p>
          <div
            className="text-data-lg text-ink"
            data-numeric=""
            style={
              reduced
                ? undefined
                : {
                    animation:
                      'gr-fade-up var(--gr-dur-reveal) var(--gr-ease-enter) both',
                  }
            }
          >
            31.0%
          </div>
          <p className="text-caption text-ink-3 mt-1">
            Counters fire once, never on loop.
          </p>
        </Panel>

        {/* 3 — liveness */}
        <Panel className="p-4 overflow-hidden">
          <Label>Purpose 3 — liveness</Label>
          <p className="text-caption text-ink-2 mt-1.5 mb-3">
            One slow scan sweep. Max one loop per viewport.
          </p>
          <div className="relative h-16 bg-inset border border-line rounded-sm overflow-hidden">
            <div
              className="gr-loop absolute inset-x-0 h-8"
              style={{
                background:
                  'linear-gradient(180deg, transparent, color-mix(in oklab, var(--gr-brand-400) 22%, transparent), transparent)',
                animation: 'gr-scan var(--gr-dur-scan) linear infinite',
              }}
            />
          </div>
        </Panel>
      </div>

      <Panel className="p-4">
        <Label>Durations and easings</Label>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-3">
          {(
            [
              ['fast', '120ms'],
              ['base', '200ms'],
              ['slow', '320ms'],
              ['reveal', '520ms'],
              ['scan', '2400ms'],
            ] as const
          ).map(([name, value]) => (
            <div key={name}>
              <p className="text-caption text-ink-2">{name}</p>
              <p className="text-caption text-ink-3" data-numeric="">
                {reduced ? '0ms' : value}
              </p>
            </div>
          ))}
        </div>
        <p className="text-caption text-ink-3 mt-4">
          Nothing bounces, overshoots or parallaxes. Motion is permitted only to
          trace a relationship, mark a state change, or convey liveness.
        </p>
      </Panel>
    </div>
  )
}
