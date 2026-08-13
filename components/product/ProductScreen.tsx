import Image from 'next/image'
import { SCREEN_SLOTS, type ScreenSlotId } from '@/lib/visual/screens'
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

   The pending state is deliberately designed rather than left as a grey box.
   These frames are visible to visitors until the real exports arrive, and a
   broken-looking placeholder on a launched site is worse than an honest one.
   ========================================================================= */

export function ProductScreen({
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
  const slot = SCREEN_SLOTS[id]

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
            alt={slot.alt}
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
        {slot.caption}
      </figcaption>
    </figure>
  )
}

/* ------------------------------------------------------------------------
   The waiting state.

   Reads as a captured application window with its contents withheld, which
   is honest about what it is: the frame is real, the picture is pending.
   ---------------------------------------------------------------------- */
function PendingScreen({
  surface,
  file,
}: {
  surface: string
  file: string
}) {
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
            Awaiting real screen
          </p>

          <p className="text-body text-ink mt-3 text-balance">{surface}</p>

          <p
            className="text-caption text-ink-2 mt-4 break-all"
            data-numeric=""
          >
            public{file}
          </p>

          <p className="text-caption text-ink-3 mt-4 pt-4 border-t border-line">
            Anonymised or demonstration data only. No customer names, domains,
            personal data or confidential figures.
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
  return (
    <div
      className={cn(
        'grid gap-5',
        columns === 3 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2',
        className,
      )}
    >
      {ids.map((id) => (
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
