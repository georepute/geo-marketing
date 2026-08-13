import { Link } from '@/components/i18n/Link'
import { ArrowRight } from 'lucide-react'
import { ENGINE_ICON } from '@/lib/visual/icons'
import { cn } from '@/lib/utils/cn'
import type { IntelligenceModule } from '@/lib/api/types'

/* ============================================================================
   ONE INTELLIGENCE MODULE.

   Question first, in the largest type on the card. The module's own name is
   demoted to the footer beside the engine that produces it, because the name
   is an internal label and the question is the thing a buyer recognises as
   their own problem.

   `reveals` carries the weight the direction actually cares about. It is not
   a feature description — it names the specific thing the module surfaces
   that a business would not have known to go looking for. That sentence is
   where "I did not know this could be measured" either happens or does not.

   AVAILABILITY IS STATED, NOT IMPLIED
   Thirty-six of the sixty-one modules sit behind engines that are declared
   but not built in this environment. Those cards say so plainly rather than
   linking somewhere that would disappoint. A marketplace that quietly lets a
   visitor assume everything is ready is the exact failure this product's
   confidence vocabulary exists to prevent — and a card that admits its limit
   makes the twenty-five live ones more credible, not less.
   ========================================================================= */

export function ModuleCard({ module: mod }: { module: IntelligenceModule }) {
  const Icon = ENGINE_ICON[mod.engineSlug]

  const body = (
    <>
      {/* --- The question ------------------------------------------- */}
      <p className="text-body text-ink text-balance">{mod.question}</p>

      {/* --- What it surfaces --------------------------------------- */}
      <p className="text-caption text-ink-2 mt-4 grow">{mod.reveals}</p>

      {/* --- Provenance and availability ---------------------------- */}
      <span className="flex items-center gap-3 mt-5 pt-4 border-t border-line">
        {Icon ? (
          <Icon aria-hidden className="size-3.5 text-ink-3 shrink-0" />
        ) : null}
        <span className="text-caption text-ink-3 truncate min-w-0 flex-1">
          {mod.name}
        </span>

        {mod.live ? (
          <span className="inline-flex items-center gap-2 shrink-0">
            <span
              aria-hidden
              className="size-1.5 rounded-full"
              style={{ background: 'var(--gr-positive)' }}
            />
            <span className="text-label uppercase text-ink-2">Live</span>
            <ArrowRight
              aria-hidden
              className={cn(
                'size-3.5 text-ink-3 transition-transform',
                'duration-[var(--gr-dur-fast)] group-hover:translate-x-0.5',
              )}
            />
          </span>
        ) : (
          <span className="text-label uppercase text-ink-3 shrink-0">
            In platform
          </span>
        )}
      </span>
    </>
  )

  const shell =
    'flex flex-col h-full rounded-md border border-line bg-panel p-6'

  /* Live modules open the engine that runs them — the closest thing to the
     module actually executing that exists in this environment. Unbuilt ones
     are not links, because there is nothing truthful to link to. */
  return (
    <li>
      {mod.live ? (
        <Link
          href={`/engines/${mod.engineSlug}`}
          className={cn(
            'group',
            shell,
            'transition-colors duration-[var(--gr-dur-fast)] ease-(--ease-standard)',
            'hover:border-brand-400/60 hover:bg-raised',
          )}
        >
          {body}
        </Link>
      ) : (
        <div className={shell}>{body}</div>
      )}
    </li>
  )
}
