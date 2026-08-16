import Image from 'next/image'
import {
  SCREEN_SLOTS,
  readyScreens,
  type ScreenSlotId,
} from '@/lib/visual/screens'
import { getT } from '@/lib/i18n/content/translator'
import { cn } from '@/lib/utils/cn'

/* ============================================================================
   A real screen from the platform — or the reserved space for one.

   Requirements doc §2 asks for real dashboards, reports, analytics and
   executive screens throughout the site, and doc §1 asks the site to feel
   like a working system rather than a description of one. Those exports do
   not exist in this repository, and inventing them would be worse than
   showing nothing: a fabricated "real screenshot" is a false claim about the
   product.

   So each one is a declared slot. The frame is rendered at the true aspect
   ratio of the export that belongs in it, carries its caption and alt text,
   and states the path the file goes to. Filling a slot is a file drop plus a
   one-word change in lib/visual/screens.ts — the layout around it does not
   move, because the space was always reserved.

   AN UNFILLED SLOT RENDERS NOTHING FOR A VISITOR.

   The pending frame was right while the site was being built — it made the
   gap visible and said where the file goes. It is wrong on a launched site,
   where a row of "awaiting real screen" boxes reads as a broken page rather
   than an honest one. So the placeholder now renders in development only,
   and production simply omits the figure.

   This is a deliberate dev/production divergence, which this codebase
   otherwise avoids. `npm run screens` is the authority on what is still
   outstanding — it reads the register, not the page, so it tells the truth
   in either environment. A section that exists only to hold screens must
   call readyScreens() before rendering its own heading.
   ========================================================================= */

export async function ProductScreen({
  id,
  priority,
  sizes = '(min-width: 1024px) 60vw, 100vw',
  className,
}: {
  id: ScreenSlotId
  priority?: boolean
  sizes?: string
  className?: string
}) {
  const t = await getT()
  const slot = SCREEN_SLOTS[id]

  if (!slot.ready && process.env.NODE_ENV !== 'development') return null

  return (
    <figure className={cn('group', className)}>
      <div
        className={cn(
          'relative isolate overflow-hidden rounded-md',
          'border border-line bg-panel shadow-elev-2',
        )}
        style={{ aspectRatio: slot.aspect }}
      >
        {slot.ready ? (
          <Image
            src={slot.file}
            alt={t(slot.alt)}
            fill
            priority={priority}
            loading={priority ? undefined : 'lazy'}
            sizes={sizes}
            className="object-cover object-top"
          />
        ) : (
          <PendingScreen surface={slot.surface} file={slot.file} />
        )}
      </div>

      <figcaption className="text-caption text-ink-3 mt-3 max-w-2xl">
        {t(slot.caption)}
      </figcaption>
    </figure>
  )
}

/* ------------------------------------------------------------------------
   The waiting state.

   Reads as a captured application window with its contents withheld, which
   is honest about what it is: the frame is real, the picture is pending.
   ---------------------------------------------------------------------- */
async function PendingScreen({
  surface,
  file,
}: {
  surface: string
  file: string
}) {
  const t = await getT()
  return (
    <div className="absolute inset-0 flex flex-col">
      {/* Window chrome. Establishes "this is a product screen" at a glance. */}
      <div className="flex items-center gap-2 px-4 h-9 border-b border-line bg-inset shrink-0">
        <span aria-hidden className="flex gap-1.5">
          {[0, 1, 2].map((dot) => (
            <span
              key={dot}
              className="size-2 rounded-full"
              style={{ background: 'var(--gr-line-strong)' }}
            />
          ))}
        </span>
        <span className="text-label uppercase text-ink-3 truncate ms-2">
          GeoRepute
        </span>
      </div>

      {/* Body. */}
      <div className="relative flex-1 grid place-items-center p-6 text-center">
        <span aria-hidden className="absolute inset-0 gr-dotgrid opacity-70" />
        <span
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(28rem 16rem at 50% 0%, color-mix(in oklab, var(--gr-brand-500) 12%, transparent), transparent 70%)',
          }}
        />

        <div className="relative max-w-md">
          <p
            className="text-label uppercase"
            style={{ color: 'var(--gr-accent-500)' }}
          >
            {t('Awaiting real screen')}
          </p>

          <p className="text-body text-ink mt-3 text-balance">{t(surface)}</p>

          <p
            className="text-caption text-ink-2 mt-4 break-all"
            data-numeric=""
          >
            public{file}
          </p>

          <p className="text-caption text-ink-3 mt-4 pt-4 border-t border-line">
            {t('Anonymised or demonstration data only. No customer names, domains, personal data or confidential figures.')}
          </p>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------------
   A row of screens, for sections that need to show several related surfaces
   without each one dominating the page.
   ---------------------------------------------------------------------- */
export function ProductScreenGrid({
  ids,
  columns = 2,
  className,
}: {
  ids: readonly ScreenSlotId[]
  columns?: 2 | 3
  className?: string
}) {
  /* Drop the unfilled ones before laying out, so the grid closes up rather
     than leaving holes in it. In development they are kept, to stay honest
     about what the page is still waiting for. */
  const shown =
    process.env.NODE_ENV === 'development' ? ids : readyScreens(ids)
  if (shown.length === 0) return null

  return (
    <div
      className={cn(
        'grid gap-5',
        columns === 3 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2',
        className,
      )}
    >
      {shown.map((id) => (
        <ProductScreen
          key={id}
          id={id}
          sizes={
            columns === 3
              ? '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
              : '(min-width: 768px) 50vw, 100vw'
          }
        />
      ))}
    </div>
  )
}
