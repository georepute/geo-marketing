import { Link } from '@/components/i18n/Link'
import { ArrowRight } from 'lucide-react'
import { CATEGORY_ICON } from '@/lib/visual/icons'
import { count } from '@/lib/format'
import { cn } from '@/lib/utils/cn'
import type { CategorySummary } from '@/lib/api/types'

/* ============================================================================
   THE ECOSYSTEM, ON THE HOME PAGE.

   Direction: "The homepage should present the intelligence ecosystem. Each
   category reveals the available modules. Each module then opens into the
   full intelligence experience."

   This is the first of those three planes and it has a narrower job than the
   ecosystem page: not to be explored, only to establish that there is a great
   deal here and that it is organised. A visitor arriving at the bottom of the
   home page has already read seven executive questions; giving them seven
   full cards to read again would be the same information at the same weight.

   So each category collapses to one row: what it answers, and how many models
   sit behind it. The count is the message. The row is the door.
   ========================================================================= */

export function EcosystemStrip({
  categories,
  totalModules,
}: {
  categories: CategorySummary[]
  totalModules: number
}) {
  return (
    <div>
      <ul className="grid gap-px bg-line border border-line rounded-md overflow-hidden md:grid-cols-2">
        {categories.map((category) => {
          const Icon = CATEGORY_ICON[category.slug]
          return (
            <li key={category.slug}>
              <Link
                href={`/marketplace/category/${category.slug}`}
                className={cn(
                  'group flex items-start gap-4 bg-panel p-5 h-full',
                  'transition-colors duration-[var(--gr-dur-fast)] ease-(--ease-standard)',
                  'hover:bg-raised',
                )}
              >
                {Icon ? (
                  <Icon
                    aria-hidden
                    className="size-4 text-brand-300 shrink-0 mt-0.5"
                  />
                ) : null}

                <span className="min-w-0 flex-1">
                  <span className="flex items-baseline justify-between gap-4">
                    <span className="text-caption text-ink truncate">
                      {category.name}
                    </span>
                    <span
                      className="text-caption text-ink-3 shrink-0"
                      data-numeric=""
                    >
                      {count(category.moduleCount)}
                    </span>
                  </span>
                  <span className="block text-caption text-ink-2 mt-2">
                    {category.question}
                  </span>
                </span>

                <ArrowRight
                  aria-hidden
                  className={cn(
                    'size-3.5 text-ink-3 shrink-0 mt-0.5 transition-transform',
                    'duration-[var(--gr-dur-fast)] group-hover:translate-x-0.5',
                  )}
                />
              </Link>
            </li>
          )
        })}

        {/* The total, occupying the odd cell so the grid closes cleanly on an
            uneven category count rather than leaving a hole. */}
        <li className="bg-panel p-5 flex flex-col justify-center">
          <p className="text-data-lg text-ink" data-numeric="">
            {count(totalModules)}
          </p>
          <p className="text-caption text-ink-2 mt-2">
            intelligence modules in total, each answering one business question
            with evidence, analysis and a recommendation.
          </p>
        </li>
      </ul>
    </div>
  )
}
