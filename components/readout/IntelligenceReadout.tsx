'use client'

import { useState } from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Chevron,
} from '@/components/ui/Primitives'
import { ExposureRange } from '@/components/signal/ExposureRange'
import { ConfidenceBadge } from '@/components/signal/ConfidenceBadge'
import {
  TrendChip,
  UrgencyChip,
  RelationshipTag,
} from '@/components/signal/Indicators'
import { defaultOpen, useRole } from './RoleLens'
import { copy } from '@/lib/copy/en'
import { dateFull } from '@/lib/format'
import { cn } from '@/lib/utils/cn'
import type { Readout } from '@/lib/seed/types'

/* ============================================================================
   THE INTELLIGENCE READOUT — brief §13.

   Every signal, diagnostic and assessment in the product renders through this
   component, so the system feels coherent and auditable rather than like a
   collection of unrelated screens.

   All twelve §13 sections are present in every variant. What changes between
   variants is density, and what changes between roles is which sections open
   without a click — never which sections exist.

   Progressive disclosure (§16): Executive Truth and Business Meaning are
   always open. Evidence and Connected Signals collapse. Methodology sits
   deepest.
   ========================================================================= */

type Variant = 'full' | 'panel' | 'compact'

export function IntelligenceReadout({
  readout,
  variant = 'full',
  onOpenSignal,
  className,
}: {
  readout: Readout
  variant?: Variant
  /** Navigate to a connected signal's readout. */
  onOpenSignal?: (id: string) => void
  className?: string
}) {
  if (variant === 'compact') {
    return <CompactReadout readout={readout} className={className} />
  }
  return (
    <FullReadout
      readout={readout}
      dense={variant === 'panel'}
      onOpenSignal={onOpenSignal}
      className={className}
    />
  )
}

/* ========================================================================= */
/* Full / panel                                                              */
/* ========================================================================= */

function FullReadout({
  readout: r,
  dense,
  onOpenSignal,
  className,
}: {
  readout: Readout
  dense: boolean
  onOpenSignal?: (id: string) => void
  className?: string
}) {
  const role = useRole()
  const open = defaultOpen(role)

  return (
    <article className={cn('min-w-0', className)}>
      {/* --- 1. Executive Truth ---------------------------------------- */}
      <header>
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <SectionLabel>{copy.readout.executiveTruth}</SectionLabel>
          <ConfidenceBadge confidence={r.confidence} />
          <TrendChip trend={r.trend} />
        </div>
        <p
          className={cn(
            'text-ink text-balance',
            dense ? 'text-h2' : 'text-h1 md:text-display-2',
          )}
        >
          {r.executiveTruth}
        </p>
      </header>

      {/* --- 2. Business Meaning --------------------------------------- */}
      <section className="mt-6">
        <SectionLabel>{copy.readout.businessMeaning}</SectionLabel>
        <p className="text-body-lg text-ink-2 mt-3 max-w-prose">
          {r.businessMeaning}
        </p>
      </section>

      {/* --- 6/7/8. Exposure · Timing · Trend --------------------------- */}
      <section
        className={cn(
          'mt-7 grid gap-px bg-line border border-line rounded-md overflow-hidden',
          dense ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3',
        )}
      >
        <div className="bg-panel p-5">
          <SectionLabel>{copy.readout.commercialExposure}</SectionLabel>
          <div className="mt-3">
            <ExposureRange exposure={r.commercialExposure} size="md" />
          </div>
        </div>

        <div className="bg-panel p-5">
          <SectionLabel>{copy.readout.timing}</SectionLabel>
          <p className="text-body text-ink mt-3">{r.timing.window}</p>
          <div className="mt-3">
            <UrgencyChip urgency={r.timing.urgency} />
          </div>
          <p className="text-caption text-ink-3 mt-3">
            Decision deadline{' '}
            <span className="text-ink-2" data-numeric="">
              {dateFull(r.timing.decisionDeadline)}
            </span>
          </p>
        </div>

        <div className="bg-panel p-5">
          <SectionLabel>{copy.readout.competitorContext}</SectionLabel>
          <p className="text-body text-ink mt-3">
            {r.competitorContext.competitor}
          </p>
          <p className="text-caption text-ink-2 mt-2">
            {r.competitorContext.benefit}
          </p>
        </div>
      </section>

      {/* --- 5. Competitor Context — the "why", given room -------------- */}
      <section className="mt-7">
        <SectionLabel>Why the competitor wins</SectionLabel>
        <blockquote
          className="mt-3 border-s-2 ps-4 text-body text-ink-2 max-w-prose"
          style={{ borderColor: 'var(--gr-brand-500)' }}
        >
          {r.competitorContext.why}
        </blockquote>
      </section>

      {/* --- 3. Evidence (collapsible) ---------------------------------- */}
      <Disclosure
        label={copy.readout.evidence}
        count={r.evidence.length}
        defaultOpen={open.evidence}
        className="mt-7"
      >
        <div className="overflow-x-auto -mx-1 px-1">
          <table className="w-full min-w-[34rem] border-collapse">
            <thead>
              <tr className="text-label uppercase text-ink-3">
                <th className="text-start font-normal pb-3 pe-4">Observed</th>
                <th className="text-start font-normal pb-3 pe-4">Source</th>
                <th className="text-start font-normal pb-3 pe-4">Finding</th>
                <th className="text-start font-normal pb-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {r.evidence.map((e, i) => (
                <tr key={i} className="border-t border-line align-top">
                  <td className="py-3 pe-4 text-caption text-ink font-mono max-w-[18rem]">
                    {e.subject}
                  </td>
                  <td className="py-3 pe-4 text-caption text-ink-2 whitespace-nowrap">
                    {e.source}
                  </td>
                  <td className="py-3 pe-4 text-caption text-ink-2">
                    {e.observation}
                  </td>
                  <td
                    className="py-3 text-caption text-ink-3 whitespace-nowrap"
                    data-numeric=""
                  >
                    {dateFull(e.observedAt)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Disclosure>

      {/* --- 4. Connected Signals (collapsible) ------------------------- */}
      <Disclosure
        label={copy.readout.connectedSignals}
        count={r.connectedSignals.length}
        defaultOpen={open.connectedSignals}
        className="mt-4"
      >
        <ul className="grid gap-2 sm:grid-cols-2">
          {r.connectedSignals.map((s) => {
            const body = (
              <>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-caption text-ink-2">{s.label}</span>
                  <RelationshipTag relationship={s.relationship} />
                </div>
                <span
                  className="block text-data text-ink mt-2"
                  data-numeric=""
                >
                  {s.value}
                </span>
              </>
            )
            return (
              <li key={s.id}>
                {onOpenSignal ? (
                  <button
                    type="button"
                    onClick={() => onOpenSignal(s.id)}
                    className={cn(
                      'w-full text-start rounded-sm border border-line bg-inset p-4',
                      'hover:border-line-strong hover:bg-panel',
                      'transition-colors duration-[var(--gr-dur-base)] ease-(--ease-standard)',
                    )}
                  >
                    {body}
                  </button>
                ) : (
                  <div className="rounded-sm border border-line bg-inset p-4">
                    {body}
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      </Disclosure>

      {/* --- 9/10. Prescription + Expected Movement --------------------- */}
      <section
        className="mt-7 rounded-md border p-5"
        style={{
          borderColor: 'color-mix(in oklab, var(--gr-positive) 32%, transparent)',
          background: 'color-mix(in oklab, var(--gr-positive) 6%, transparent)',
        }}
      >
        <SectionLabel>{copy.readout.prescription}</SectionLabel>
        <p className="text-body-lg text-ink mt-3 max-w-prose">
          {r.prescription}
        </p>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Field label={copy.readout.expectedMovement}>
            <span className="text-data text-ink" data-numeric="">
              {r.expectedMovement.from}
              {r.expectedMovement.unit}
              <span className="text-ink-3 px-2">→</span>
              <span style={{ color: 'var(--gr-positive)' }}>
                {r.expectedMovement.to}
                {r.expectedMovement.unit}
              </span>
            </span>
            <span className="block text-caption text-ink-3 mt-1">
              {r.expectedMovement.signal}
            </span>
          </Field>

          <Field label={copy.readout.ownerDeadline}>
            <span className="text-body text-ink">{r.ownerDeadline.owner}</span>
            <span className="block text-caption text-ink-3 mt-1" data-numeric="">
              by {dateFull(r.ownerDeadline.deadline)}
            </span>
          </Field>

          <Field label={copy.readout.trend}>
            <TrendChip trend={r.trend} />
          </Field>
        </div>
      </section>

      {/* --- 12. Measurement + methodology ------------------------------ */}
      <Disclosure
        label={copy.readout.howDetermined}
        defaultOpen={open.methodology}
        className="mt-4"
      >
        <div className="space-y-4">
          <div>
            <SectionLabel>{copy.readout.measurement}</SectionLabel>
            <p className="text-caption text-ink-2 mt-2 max-w-prose">
              {r.measurement}
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 pt-3 border-t border-line">
            <Meta label="Methodology" value={r.methodologyVersion} />
            <Meta label="Confidence" value={copy.confidence[r.confidence].label} />
            <Meta label="Evidence items" value={String(r.evidence.length)} />
          </div>
          <p className="text-caption text-ink-3 max-w-prose">
            {copy.exposure.limitation}
          </p>
        </div>
      </Disclosure>
    </article>
  )
}

/* ========================================================================= */
/* Compact — card form for grids and lists                                   */
/* ========================================================================= */

function CompactReadout({
  readout: r,
  className,
}: {
  readout: Readout
  className?: string
}) {
  return (
    <article
      className={cn(
        'rounded-md border border-line bg-panel p-5 h-full flex flex-col',
        className,
      )}
    >
      <div className="flex flex-wrap items-center gap-2">
        <ConfidenceBadge confidence={r.confidence} />
        <TrendChip trend={r.trend} />
      </div>

      <p className="text-h3 text-ink mt-4 text-balance">{r.executiveTruth}</p>
      <p className="text-caption text-ink-2 mt-3 line-clamp-3">
        {r.businessMeaning}
      </p>

      <div className="mt-auto pt-4">
        <hr className="border-0 border-t border-line mb-4" />
        <SectionLabel>{copy.readout.commercialExposure}</SectionLabel>
        <div className="mt-2">
          <ExposureRange exposure={r.commercialExposure} size="sm" />
        </div>
      </div>
    </article>
  )
}

/* ========================================================================= */
/* Shared pieces                                                             */
/* ========================================================================= */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <span className="text-label uppercase text-ink-3">{children}</span>
}

function Field({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div>
      <SectionLabel>{label}</SectionLabel>
      <div className="mt-2">{children}</div>
    </div>
  )
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <span className="text-caption text-ink-3">
      {label}:{' '}
      <span className="text-ink-2" data-numeric="">
        {value}
      </span>
    </span>
  )
}

function Disclosure({
  label,
  count,
  defaultOpen: initial,
  className,
  children,
}: {
  label: string
  count?: number
  defaultOpen: boolean
  className?: string
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(initial)

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className={cn('rounded-md border border-line bg-panel', className)}
    >
      <CollapsibleTrigger
        className={cn(
          'flex w-full items-center gap-3 p-4 text-start',
          'hover:bg-inset transition-colors duration-[var(--gr-dur-fast)]',
          open && 'border-b border-line',
        )}
      >
        <Chevron open={open} className="text-ink-3" />
        <span className="text-label uppercase text-ink-2">{label}</span>
        {typeof count === 'number' ? (
          <span className="text-label text-ink-3" data-numeric="">
            ({count})
          </span>
        ) : null}
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="p-4">{children}</div>
      </CollapsibleContent>
    </Collapsible>
  )
}
