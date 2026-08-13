import { cn } from '@/lib/utils/cn'
import { getDictionary } from '@/lib/i18n/server'
import { getT } from '@/lib/i18n/content/translator'
import { Rich } from '@/lib/i18n/content/rich'
import type { OrgSummary } from '@/lib/api/types'

/* ============================================================================
   EXECUTIVE POSITION.

   Product direction, verbatim:
     Immediately explain what Decision Health measures.
     Make "Held down primarily by Authority" the primary message.
     Prescription becomes the visual focus.

   Three instructions, three structural consequences.

   IMMEDIATELY EXPLAIN. The definition is not a tooltip and not a footnote —
   it is the sentence directly beneath the figure, before anything else can be
   read. A composite index nobody can define is a number an executive is asked
   to take on faith, and this product's entire argument is that it does not
   ask for faith.

   THE CONSTRAINT IS THE MESSAGE. The index is 41, but 41 is not actionable
   and "Authority at 28 is holding it there" is. So the constraint sentence
   takes the display type and the index itself is deliberately smaller than a
   scorecard would make it.

   PRESCRIPTION IS THE FOCUS. This component ends where the prescription
   begins — the page composes `<Prescription>` immediately after it, and
   nothing between them competes for attention.
   ========================================================================= */

export async function ExecutivePosition({
  org,
  weights,
}: {
  org: OrgSummary
  /** Published index weights, so "carries the heaviest weight" is checkable. */
  weights: Record<string, number>
}) {
  const copy = await getDictionary()
  const t = await getT()
  /**
   * The binding constraint is DERIVED, never asserted: it is the vector with
   * the largest weighted deficit — how many index points are currently being
   * given away by that vector alone. A vector can score badly and barely
   * matter (low weight), or score moderately and matter enormously. Only the
   * product of the two identifies where investment returns most.
   */
  const constraint = [...org.geon].sort(
    (a, b) =>
      (weights[b.key] ?? 0) * (100 - b.score) -
      (weights[a.key] ?? 0) * (100 - a.score),
  )[0]!
  const strongest = [...org.geon].sort((a, b) => b.score - a.score)[0]!

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] items-start">
      {/* --- The position, stated ------------------------------------- */}
      <div className="rounded-md border border-line bg-panel p-6 md:p-8">
        <p className="text-label uppercase text-ink-3">
          {t('Decision Health')}
        </p>

        <p className="mt-4 flex items-baseline gap-2">
          <span className="text-display-1 text-ink" data-numeric="">
            {org.decisionHealthIndex}
          </span>
          <span className="text-h2 text-ink-3" data-numeric="">
            /100
          </span>
        </p>

        {/* Immediately explain what it measures. */}
        <p className="text-body text-ink-2 mt-4">
          {copy.exec.decisionHealthDefinition}
        </p>

        {/* The primary message. */}
        <div className="mt-8 pt-8 border-t border-line">
          <p className="text-label uppercase" style={{ color: 'var(--gr-critical)' }}>
            {t('The binding constraint')}
          </p>
          <p className="text-h1 text-ink mt-3 text-balance">
            {t('Held down primarily by {vector}.', { vector: constraint.label })}
          </p>
          <p className="text-body text-ink-2 mt-4">
            <Rich
              text={t('{vector} reads <b>{score} of 100</b> and carries the heaviest weight in the index at <b>{weight}%</b>. Lowest score, largest lever — every other measure is capped by it.', {
                vector: constraint.label,
                score: constraint.score,
                weight: Math.round((weights[constraint.key] ?? 0) * 100),
              })}
            />
          </p>
          <p className="text-caption text-ink-3 mt-4">
            <Rich
              text={t('{vector} reads <b>{score}</b>. The offer matches demand. The constraint is entirely on the evidence side, which is the side a business can change.', {
                vector: strongest.label,
                score: strongest.score,
              })}
              className="text-ink-2"
            />
          </p>
        </div>
      </div>

      {/* --- What the index is made of -------------------------------- */}
      <div className="rounded-md border border-line bg-panel p-6 md:p-8">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <p className="text-label uppercase text-ink-3">
            {t('What Decision Health is made of')}
          </p>
          <p className="text-caption text-ink-3">
            {t('Weighted, published, recomputed monthly')}
          </p>
        </div>

        <ul className="mt-6 grid gap-5">
          {org.geon.map((vector) => (
            <Vector
              key={vector.key}
              label={vector.label}
              score={vector.score}
              weight={weights[vector.key] ?? 0}
              definition={vector.definition}
              binding={vector.key === constraint.key}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------------ */

async function Vector({
  label,
  score,
  weight,
  definition,
  binding,
}: {
  label: string
  score: number
  weight: number
  definition: string
  binding: boolean
}) {
  const t = await getT()
  return (
    <li>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <p
          className={cn(
            'text-body',
            binding ? 'text-ink' : 'text-ink-2',
          )}
        >
          {label}
          {binding ? (
            <span
              className="text-label uppercase ms-3 align-middle"
              style={{ color: 'var(--gr-critical)' }}
            >
              {t('Binding constraint')}
            </span>
          ) : null}
        </p>
        <p className="text-data text-ink-2 shrink-0" data-numeric="">
          {score}
          <span className="text-ink-3">
            {' '}
            · {t('weight {pct}%', { pct: Math.round(weight * 100) })}
          </span>
        </p>
      </div>

      <div className="mt-2 h-1.5 rounded-xs bg-inset overflow-hidden">
        <div
          className="h-full rounded-xs"
          style={{
            width: `${score}%`,
            background: binding
              ? 'var(--gr-critical)'
              : 'var(--gr-brand-400)',
          }}
        />
      </div>

      <p className="text-caption text-ink-3 mt-2">{definition}</p>
    </li>
  )
}
