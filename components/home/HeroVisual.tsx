'use client'

import { ExposureRange } from '@/components/signal/ExposureRange'
import { count, observedCost, percent, percentWhole } from '@/lib/format'
import { cn } from '@/lib/utils/cn'
import type { Reconstruction } from '@/lib/api/types'

/* ============================================================================
   HERO VISUAL — brief §5.

   "One commercial question reconstructed across six AI engines, Google, CPC,
   competitors, decision stage, commercial exposure and prescribed action."

   Every one of those seven surfaces appears here, for one real question. It is
   the whole category compressed into a single frame — which is the job the
   brief gives the hero.
   ========================================================================= */

const STATUS_TOKEN = {
  recommended: 'var(--gr-positive)',
  mentioned: 'var(--gr-warning)',
  ignored: 'var(--gr-critical)',
  confused: 'var(--gr-critical)',
} as const

export function HeroVisual({
  data,
  className,
}: {
  data: Reconstruction
  className?: string
}) {
  return (
    <div
      className={cn(
        'rounded-lg border border-line bg-panel overflow-hidden',
        className,
      )}
    >
      {/* --- The question ------------------------------------------- */}
      <div className="p-5 border-b border-line bg-raised">
        <p className="text-label uppercase text-ink-3">
          One commercial question, reconstructed
        </p>
        <p className="text-body text-ink mt-2 font-mono">
          “{data.prompt.text}”
        </p>
      </div>

      {/* --- Six engines --------------------------------------------- */}
      <div className="p-5 border-b border-line">
        <p className="text-label uppercase text-ink-3 mb-3">Six AI engines</p>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {data.engines.map((engine) => (
            <div
              key={engine.id}
              className="rounded-sm border border-line bg-inset p-3 text-center"
            >
              <span
                aria-hidden
                className="block size-1.5 rounded-full mx-auto"
                style={{ background: STATUS_TOKEN[engine.status] }}
              />
              <p className="text-label uppercase text-ink-2 mt-2 leading-tight">
                {engine.name}
              </p>
              <p className="text-caption text-ink-3 mt-1" data-numeric="">
                {engine.recognitionScore}
              </p>
            </div>
          ))}
        </div>
        <p className="text-caption text-ink-3 mt-3">
          <span className="text-ink" data-numeric="">
            {data.outcome.recommendedBy} of {data.outcome.totalEngines}
          </span>{' '}
          recommended the business.
        </p>
      </div>

      {/* --- Google · CPC · competitor · stage ----------------------- */}
      <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
        <Fact
          label="Google"
          value={
            data.search
              ? data.search.position === null
                ? 'Not in top 100'
                : `Position ${data.search.position}`
              : '—'
          }
          tone="critical"
        />
        <Fact
          label="Paid click cost"
          value={data.search ? observedCost(data.search.cpc) : '—'}
          note={
            data.search ? `${count(data.search.monthlyVolume)} searches/mo` : ''
          }
        />
        <Fact
          label="Competitor selected"
          value={data.winner.name}
          note={`${percent(data.winner.recommendationSharePct)} share`}
          tone="critical"
        />
        <Fact
          label="Decision stage"
          value={data.journey.stageLabel}
          note={`${percentWhole(data.journey.stageCoveragePct)} coverage`}
          tone="critical"
        />
      </div>

      {/* --- Exposure ------------------------------------------------ */}
      <div className="p-5 border-t border-line">
        <p className="text-label uppercase text-ink-3 mb-3">
          Directional commercial exposure, this question
        </p>
        <ExposureRange exposure={data.exposure} size="md" />
      </div>

      {/* --- Prescribed action --------------------------------------- */}
      <div
        className="p-5 border-t"
        style={{
          borderColor: 'var(--gr-line-subtle)',
          background: 'color-mix(in oklab, var(--gr-positive) 6%, transparent)',
        }}
      >
        <p className="text-label uppercase text-ink-3">Prescribed action</p>
        <p className="text-body text-ink mt-2">{data.action.action}</p>
        <p className="text-caption text-ink-2 mt-3">
          {data.action.owner} · by {data.action.deadline} ·{' '}
          {data.action.expectedImpact}
        </p>
      </div>
    </div>
  )
}

function Fact({
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
    <div className="bg-panel p-4">
      <p className="text-label uppercase text-ink-3">{label}</p>
      <p
        className="text-body mt-2"
        style={{
          color:
            tone === 'critical'
              ? 'var(--gr-critical)'
              : 'var(--gr-text-primary)',
        }}
      >
        {value}
      </p>
      {note ? (
        <p className="text-caption text-ink-3 mt-1" data-numeric="">
          {note}
        </p>
      ) : null}
    </div>
  )
}
