import { cn } from '@/lib/utils/cn'
import { count, percent } from '@/lib/format'
import type { Reconstruction } from '@/lib/api/types'

/* ============================================================================
   DECISION RECONSTRUCTION — the hero frame.

   Product direction: "Simplify the visual. Tell a story. The user should
   understand within five seconds why AI did not recommend the business."

   The previous version of this component showed seven surfaces at once —
   engine grid, Google position, paid click cost, competitor, decision stage,
   exposure range, prescribed action. Every one of those is true and none of
   them is the story. Read cold, it took about forty seconds to assemble the
   argument, and most readers assembled it wrong: they saw a low number and
   concluded "poor visibility" rather than "unverifiable".

   So this is four beats, read top to bottom, and the whole argument is
   carried by beat three:

     1. A buyer asked a real commercial question.
     2. AI went looking for evidence and found 3 sources against 21.
     3. It recommended the competitor it could verify.
     4. This is what changes it.

   The evidence bars are the five-second read. Everything else is corroboration
   for the reader who stays. Depth still exists — it lives in the reconstruction
   itself, one click away — but the hero's job is the argument, not the file.
   ========================================================================= */

export function HeroVisual({
  data,
  ownAuthoritySources,
  competitorAuthoritySources,
  className,
}: {
  data: Reconstruction
  /** Independent sources engines can cite for the brand. */
  ownAuthoritySources: number
  /** The same count for the competitor that received the decision. */
  competitorAuthoritySources: number
  className?: string
}) {
  const advantage = competitorAuthoritySources / Math.max(ownAuthoritySources, 1)

  return (
    <figure
      className={cn(
        'rounded-lg border border-line bg-panel overflow-hidden not-prose',
        className,
      )}
    >
      {/* --- 1 · The question ---------------------------------------- */}
      <div className="p-6 border-b border-line bg-raised">
        <Beat n={1} label="A buyer asks AI" />
        <p className="text-body-lg text-ink mt-3 text-balance">
          “{data.prompt.text}”
        </p>
      </div>

      {/* --- 2 · What AI could verify -------------------------------- */}
      <div className="p-6 border-b border-line">
        <Beat n={2} label="AI looks for proof it can cite" />

        <div className="mt-5 grid gap-4">
          <EvidenceBar
            name={data.winner.name}
            sources={competitorAuthoritySources}
            max={competitorAuthoritySources}
            tone="competitor"
          />
          <EvidenceBar
            name="Your business"
            sources={ownAuthoritySources}
            max={competitorAuthoritySources}
            tone="self"
          />
        </div>

        <p className="text-caption text-ink-2 mt-4">
          Independent sources an engine can cite when it recommends a supplier.
          Your own website does not count — engines treat self-description as a
          claim, not as evidence.
        </p>
      </div>

      {/* --- 3 · The outcome. The five-second read. ------------------ */}
      <div
        className="p-6 border-b"
        style={{
          borderColor: 'var(--gr-line-subtle)',
          background: 'color-mix(in oklab, var(--gr-critical) 7%, transparent)',
        }}
      >
        <Beat n={3} label="So AI recommends" />

        <div className="mt-3 flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <p
            className="text-h1"
            style={{ color: 'var(--gr-critical)' }}
          >
            {data.winner.name}
          </p>
          <p className="text-caption text-ink-2" data-numeric="">
            {percent(data.winner.recommendationSharePct)} of recommendations
          </p>
        </div>

        <p className="text-body text-ink-2 mt-4 max-w-prose">
          Your business was named by{' '}
          <span className="text-ink" data-numeric="">
            {data.outcome.recommendedBy} of {data.outcome.totalEngines}
          </span>{' '}
          engines. Not because the offer is weaker — because{' '}
          <span className="text-ink">
            {count(competitorAuthoritySources)} sources outrank{' '}
            {count(ownAuthoritySources)}
          </span>{' '}
          when a system has to stand behind an answer.
        </p>
      </div>

      {/* --- 4 · What changes it ------------------------------------- */}
      <div
        className="p-6"
        style={{
          background: 'color-mix(in oklab, var(--gr-positive) 6%, transparent)',
        }}
      >
        <Beat n={4} label="What changes the answer" tone="positive" />
        <p className="text-body text-ink mt-3">{data.action.action}</p>
        <p className="text-caption text-ink-2 mt-3" data-numeric="">
          {data.action.owner} · {data.action.expectedImpact}
        </p>
      </div>

      <figcaption className="sr-only">
        A reconstruction of one AI buying decision: the question a buyer asked,
        the {competitorAuthoritySources} independent sources supporting{' '}
        {data.winner.name} against {ownAuthoritySources} supporting your
        business — a {advantage.toFixed(0)}× evidence advantage — the resulting
        recommendation, and the intervention that changes it.
      </figcaption>
    </figure>
  )
}

/* ------------------------------------------------------------------------ */

function Beat({
  n,
  label,
  tone,
}: {
  n: number
  label: string
  tone?: 'positive'
}) {
  return (
    <p className="flex items-center gap-3">
      <span
        aria-hidden
        className="grid place-items-center size-5 rounded-full border text-[0.625rem] shrink-0"
        style={{
          borderColor:
            tone === 'positive'
              ? 'color-mix(in oklab, var(--gr-positive) 50%, transparent)'
              : 'var(--gr-line-strong)',
          color:
            tone === 'positive'
              ? 'var(--gr-positive)'
              : 'var(--gr-text-tertiary)',
        }}
        data-numeric=""
      >
        {n}
      </span>
      <span className="text-label uppercase text-ink-3">{label}</span>
    </p>
  )
}

/**
 * A source count as a proportional bar. Deliberately not a chart: two bars
 * with the numbers on them is the fastest possible read of a ratio, and any
 * axis furniture here would be decoration rather than information.
 */
function EvidenceBar({
  name,
  sources,
  max,
  tone,
}: {
  name: string
  sources: number
  max: number
  tone: 'self' | 'competitor'
}) {
  const token =
    tone === 'competitor' ? 'var(--gr-critical)' : 'var(--gr-text-tertiary)'
  /* Floored at 4% so a genuinely tiny count still renders as a visible mark
     rather than disappearing — an invisible bar reads as "no data". */
  const width = Math.max((sources / max) * 100, 4)

  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <span className="text-caption text-ink-2 truncate">{name}</span>
        <span className="text-data text-ink shrink-0" data-numeric="">
          {count(sources)} sources
        </span>
      </div>
      <div
        className="mt-2 h-2 rounded-xs bg-inset overflow-hidden"
        role="img"
        aria-label={`${name}: ${sources} independent sources`}
      >
        <div
          className="h-full rounded-xs"
          style={{ width: `${width}%`, background: token }}
        />
      </div>
    </div>
  )
}
