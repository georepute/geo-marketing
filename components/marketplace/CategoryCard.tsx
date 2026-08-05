import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { CATEGORY_ICON } from '@/lib/visual/icons'
import { count } from '@/lib/format'
import { cn } from '@/lib/utils/cn'
import type { CategorySummary } from '@/lib/api/types'

/* ============================================================================
   INTELLIGENCE CATEGORY CARD.

   Direction: "Do not overwhelm users with 70 cards… Users should discover the
   depth of the platform gradually."

   Seventy cards communicates quantity. Seven cards each admitting to twelve
   things underneath communicates depth, which is the harder and more valuable
   impression. So the module count is the loudest element on the card — it is
   the promise of depth — and the preview exists to make that count concrete
   rather than to be browsed.

   The three previewed modules are chosen by the adapter, not here, and they
   lead with the module NAME rather than its question. That is deliberate and
   the one place on this page where a name outranks a question: the names are
   the surprise. "Recognition decay" and "Strategic silence" do the work of
   making a reader think they had not considered that measurable — a full
   question sentence would blunt it, and three of them would be a wall.
   ========================================================================= */

export function CategoryCard({ category }: { category: CategorySummary }) {
  const Icon = CATEGORY_ICON[category.slug]
  const remaining = category.moduleCount - category.preview.length

  return (
    <li>
      <Link
        href={`/marketplace/category/${category.slug}`}
        className={cn(
          'group flex flex-col h-full rounded-md border border-line bg-panel p-6 md:p-7',
          'transition-[border-color,background-color,transform]',
          'duration-[var(--gr-dur-fast)] ease-(--ease-standard)',
          'hover:border-brand-400/60 hover:bg-raised',
        )}
      >
        {/* --- Header: identity, and the depth claim ------------------- */}
        <div className="flex items-start justify-between gap-5">
          <div className="flex items-center gap-3 min-w-0">
            {Icon ? (
              <Icon
                aria-hidden
                className="size-4 text-brand-300 shrink-0"
              />
            ) : null}
            <p className="text-label uppercase text-brand-300 truncate">
              {category.name}
            </p>
          </div>

          <div className="text-end shrink-0">
            <p className="text-data-lg text-ink leading-none" data-numeric="">
              {count(category.moduleCount)}
            </p>
            <p className="text-label uppercase text-ink-3 mt-1.5">
              {category.moduleCount === 1 ? 'module' : 'modules'}
            </p>
          </div>
        </div>

        {/* --- The question the category answers ----------------------- */}
        <p className="text-h3 text-ink mt-6 text-balance">
          {category.question}
        </p>

        <p className="text-caption text-ink-2 mt-3">{category.explanation}</p>

        {/* --- Preview. Makes the count concrete. ---------------------- */}
        <ul className="mt-6 pt-5 border-t border-line grid gap-2 grow content-start">
          {category.preview.map((mod) => (
            <li key={mod.slug} className="flex items-baseline gap-3">
              <span
                aria-hidden
                className="size-1 rounded-full bg-brand-400 shrink-0 translate-y-[-0.15em]"
              />
              <span className="text-caption text-ink-2">{mod.name}</span>
            </li>
          ))}
          {remaining > 0 ? (
            <li className="text-caption text-ink-3 ps-4" data-numeric="">
              + {count(remaining)} more
            </li>
          ) : null}
        </ul>

        {/* --- Explore ------------------------------------------------- */}
        <p className="flex items-center gap-2 mt-6 pt-5 border-t border-line text-caption text-ink group-hover:text-brand-300 transition-colors">
          Explore
          <ArrowRight
            aria-hidden
            className={cn(
              'size-3.5 transition-transform',
              'duration-[var(--gr-dur-fast)] group-hover:translate-x-0.5',
            )}
          />
          {category.liveModuleCount > 0 ? (
            <span className="ms-auto text-label uppercase text-ink-3" data-numeric="">
              {count(category.liveModuleCount)} live in demo
            </span>
          ) : null}
        </p>
      </Link>
    </li>
  )
}
