'use client'

import { useT } from '@/lib/i18n/content/client'
import { useState } from 'react'
import { Link } from '@/components/i18n/Link'
import { Button } from '@/components/ui/Button'
import { ConfidenceBadge } from '@/components/signal/ConfidenceBadge'
import { ScoreMeter } from '@/components/signal/Indicators'
import { count, percent, percentWhole } from '@/lib/format'
import { cn } from '@/lib/utils/cn'
import type { DomainPreview } from '@/lib/api/types'

/* ============================================================================
   LIVE DOMAIN ENTRY — brief §5.

   "Return AI recognition, Google position, narrative ownership, decision
   presence, highest-risk engine, strongest competitor and one unlocked signal.
   Require account or payment to unlock the full intelligence layer."

   The gate is honest: locked panels state exactly what sits behind them and
   how many there are. A blurred panel that hides nothing is a dark pattern;
   this one hides real readouts that exist in the system.
   ========================================================================= */

export function DomainEntry({
  preview,
  lockedCount,
}: {
  preview: DomainPreview
  lockedCount: number
}) {
  const t = useT()
  const [domain, setDomain] = useState(preview.domain)
  const [revealed, setRevealed] = useState(false)

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] items-start">
      {/* --- Entry ---------------------------------------------------- */}
      <form
        onSubmit={(e) => {
          e.preventDefault()
          setRevealed(true)
        }}
        className="rounded-md border border-line bg-panel p-6"
      >
        <label htmlFor="gr-domain" className="text-label uppercase text-ink-3">
          Your domain
        </label>
        <input
          id="gr-domain"
          type="text"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          spellCheck={false}
          autoComplete="url"
          className={cn(
            'mt-3 w-full rounded-sm border border-line bg-inset px-4 py-3',
            'text-body text-ink font-mono',
            'focus:border-brand-400 outline-none transition-colors',
          )}
        />
        <Button type="submit" variant="primary" size="lg" className="w-full mt-4">
          {revealed ? 'Re-run preview' : 'Run instant preview'}
        </Button>
        <p className="text-caption text-ink-3 mt-4">
          Seeded demonstration. This environment always reconstructs Northwind
          Supply, an industrial distributor, so every figure stays verifiable.
        </p>
      </form>

      {/* --- Preview --------------------------------------------------- */}
      <div
        className={cn(
          'transition-opacity duration-[var(--gr-dur-reveal)] ease-(--ease-enter)',
          revealed ? 'opacity-100' : 'opacity-100',
        )}
      >
        <div className="grid gap-px bg-line border border-line rounded-md overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
          <Cell
            label="AI recognition"
            value={`${preview.recognitionScore}/100`}
            score={preview.recognitionScore}
            tone="critical"
          />
          <Cell
            label={t("Best Google position")}
            value={
              preview.bestGooglePosition === null
                ? 'Not ranking'
                : `#${preview.bestGooglePosition}`
            }
          />
          <Cell
            label={t("Narrative ownership")}
            value={percentWhole(preview.narrativeOwnershipPct)}
            score={preview.narrativeOwnershipPct}
            tone="critical"
          />
          <Cell
            label={t("Highest-risk engine")}
            value={preview.highestRiskEngine.name}
            note={`${preview.highestRiskEngine.recognitionScore}/100 recognition`}
          />
          <Cell
            label={t("Strongest competitor")}
            value={preview.strongestCompetitor.name}
            note={`${percent(preview.strongestCompetitor.recommendationSharePct)} of recommendations`}
          />
          <Cell
            label={t("Decision presence")}
            value={percentWhole(preview.decisionPresencePct)}
            score={preview.decisionPresencePct}
            tone="critical"
          />
        </div>

        {/* --- The one unlocked signal ------------------------------- */}
        <div
          className="mt-4 rounded-md border p-5"
          style={{
            borderColor:
              'color-mix(in oklab, var(--gr-accent-500) 34%, transparent)',
            background:
              'color-mix(in oklab, var(--gr-accent-500) 6%, transparent)',
          }}
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-label uppercase text-ink-3">
              Unlocked signal
            </span>
            <ConfidenceBadge confidence={preview.unlockedSignal.confidence} />
          </div>
          <p className="mt-3 flex flex-wrap items-baseline gap-3">
            <span className="text-display-2 text-ink" data-numeric="">
              {preview.unlockedSignal.value}
            </span>
            <span className="text-body text-ink-2">
              {preview.unlockedSignal.label}
            </span>
          </p>
          <p className="text-caption text-ink-2 mt-3 max-w-prose">
            {preview.unlockedSignal.meaning}
          </p>
        </div>

        {/* --- The gate ---------------------------------------------- */}
        <div className="mt-4 rounded-md border border-line bg-panel p-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="min-w-0">
              <p className="text-label uppercase text-ink-3">
                Behind the gate
              </p>
              <p className="text-body text-ink mt-2">
                <span data-numeric="">{count(lockedCount)}</span> further
                readouts, each with evidence, exposure and a prescribed action.
              </p>
              <p className="text-caption text-ink-3 mt-2 max-w-lg">
                Competitor capture, authority evidence, paid dependency, missed
                decisions, narrative control, trust readiness and strategic
                timing.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="primary">
                <Link href="/app/mission-control">Unlock full intelligence</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/marketplace">Buy a single answer</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------------ */

function Cell({
  label,
  value,
  note,
  score,
  tone,
}: {
  label: string
  value: string
  note?: string
  score?: number
  tone?: 'critical'
}) {
  return (
    <div className="bg-panel p-5">
      <p className="text-label uppercase text-ink-3">{label}</p>
      <p className="text-data-lg text-ink mt-3" data-numeric="">
        {value}
      </p>
      {typeof score === 'number' ? (
        <ScoreMeter
          score={score}
          tone={tone === 'critical' ? 'critical' : 'brand'}
          className="mt-3"
        />
      ) : null}
      {note ? (
        <p className="text-caption text-ink-3 mt-3" data-numeric="">
          {note}
        </p>
      ) : null}
    </div>
  )
}
