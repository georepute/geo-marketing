import { ConfidenceBadge } from '@/components/signal/ConfidenceBadge'
import { EffortMeter, UrgencyChip } from '@/components/signal/Indicators'
import { dateFull } from '@/lib/format'
import { cn } from '@/lib/utils/cn'
import type { Action } from '@/lib/api/types'

/* ============================================================================
   EXECUTIVE ACTION PLAN.

   Product direction: rename the Action Center, and require that every action
   carries Priority, Owner, Deadline, Expected Impact, Confidence, Effort and
   Dependencies.

   All seven are mandatory props on `Row` below, which is the enforcement
   mechanism — an action missing any of them will not compile, so the plan
   cannot degrade into a task list one merge at a time.

   Dependencies deserve the emphasis they get here. Priority tells an executive
   what matters most; dependencies tell them what is currently impossible.
   Those are different questions, and a plan that answers only the first one
   produces a team working hard on something blocked. Every dependency shown is
   resolved to the action that satisfies it, by name, so the unblocking step is
   never a lookup.
   ========================================================================= */

export function ExecutiveActionPlan({ actions }: { actions: Action[] }) {
  const byId = new Map(actions.map((a) => [a.id, a]))

  return (
    <ol className="grid gap-3">
      {actions.map((action, index) => (
        <Row
          key={action.id}
          priority={index + 1}
          action={action}
          blockedBy={action.dependsOn.map((id) => byId.get(id)).filter(Boolean) as Action[]}
        />
      ))}
    </ol>
  )
}

/* ------------------------------------------------------------------------ */

function Row({
  priority,
  action,
  blockedBy,
}: {
  priority: number
  action: Action
  blockedBy: Action[]
}) {
  const blocked = blockedBy.length > 0

  return (
    <li className="rounded-md border border-line bg-panel overflow-hidden">
      <div className="p-5 md:p-6 flex flex-wrap items-start gap-x-6 gap-y-4">
        {/* Priority */}
        <div className="shrink-0">
          <p className="text-label uppercase text-ink-3">Priority</p>
          <p
            className={cn(
              'grid place-items-center size-9 rounded-xs mt-2 text-body',
              /* brand-700 inverts between themes — dark violet on dark, pale
                 lavender on light — so `text-ink` stays legible on both. */
              blocked ? 'bg-inset text-ink-2' : 'bg-brand-700 text-ink',
            )}
            data-numeric=""
          >
            {priority}
          </p>
        </div>

        {/* The intervention itself */}
        <div className="min-w-0 flex-1 basis-80">
          <p className="text-body-lg text-ink">{action.action}</p>
          <p className="text-caption text-ink-2 mt-2 max-w-prose">
            {action.reason}
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-4">
            <UrgencyChip urgency={action.urgency} />
            <ConfidenceBadge confidence={action.confidence} />
            <EffortMeter effort={action.effort} />
          </div>
        </div>

        {/* Expected impact — the reason the action is worth its effort */}
        <div className="shrink-0 basis-56">
          <p className="text-label uppercase text-ink-3">Expected impact</p>
          <p
            className="text-body mt-2"
            style={{ color: 'var(--gr-positive)' }}
            data-numeric=""
          >
            {action.expectedImpact}
          </p>
          <p className="text-caption text-ink-3 mt-3">
            Verified by: {action.successMetric}
          </p>
        </div>

        {/* Owner and deadline */}
        <div className="shrink-0 basis-44">
          <p className="text-label uppercase text-ink-3">Owner</p>
          <p className="text-caption text-ink mt-2">{action.owner}</p>
          <p className="text-label uppercase text-ink-3 mt-4">Deadline</p>
          <p className="text-caption text-ink mt-2" data-numeric="">
            {dateFull(action.deadline)}
          </p>
        </div>
      </div>

      {/* Dependencies */}
      <div
        className="px-5 md:px-6 py-3 border-t border-line"
        style={
          blocked
            ? {
                background:
                  'color-mix(in oklab, var(--gr-warning) 6%, transparent)',
              }
            : undefined
        }
      >
        <p className="text-caption text-ink-3">
          <span className="text-label uppercase me-3">Dependencies</span>
          {blocked ? (
            <>
              Cannot move its signal until{' '}
              {blockedBy.map((dep, i) => (
                <span key={dep.id}>
                  {i > 0 ? ' and ' : ''}
                  <span className="text-ink-2">{shortLabel(dep)}</span>
                </span>
              ))}{' '}
              lands.
            </>
          ) : (
            <span className="text-ink-2">
              None. Can start immediately.
            </span>
          )}
        </p>
      </div>
    </li>
  )
}

/**
 * A dependency is referenced by what it does, not by its id — "priority 2"
 * means nothing to someone reading a printed plan, and an id means less.
 */
function shortLabel(action: Action): string {
  const first = action.action.split(/[.;]/)[0]!.trim()
  if (first.length <= 64) return first
  /* Cut at the last word boundary inside the budget. Slicing mid-word reads
     as a rendering bug rather than as deliberate abbreviation. */
  const clipped = first.slice(0, 64)
  return `${clipped.slice(0, clipped.lastIndexOf(' ')).trimEnd()}…`
}
