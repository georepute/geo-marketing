import { ImageWithScrim } from './ImageWithScrim'
import { cn } from '@/lib/utils/cn'
import type { ImageKey } from '@/lib/visual/imagery'

/* ============================================================================
   A full-bleed atmospheric band.

   Used between major sections so scrolling reads as one continuous surface
   rather than a stack of flat boxes. Sparingly — two or three per page at
   most, and never two in a row.
   ========================================================================= */

export function ImageBand({
  image,
  eyebrow,
  headline,
  sub,
  children,
  height = 'standard',
  className,
}: {
  image: ImageKey
  eyebrow?: string
  headline?: string
  sub?: string
  children?: React.ReactNode
  height?: 'thin' | 'standard' | 'tall'
  className?: string
}) {
  const pad = {
    thin: 'py-16',
    standard: 'py-24 lg:py-28',
    tall: 'py-32 lg:py-40',
  }[height]

  return (
    <section className={cn('relative isolate overflow-hidden', className)}>
      <ImageWithScrim
        image={image}
        scrim="heavy"
        sizes="100vw"
        className="-z-10"
      />
      <div aria-hidden className="absolute inset-0 gr-dotgrid opacity-40 -z-10" />

      <div className={cn('gr-rail-wide relative', pad)}>
        {eyebrow ? (
          <p className="text-label uppercase text-brand-300">{eyebrow}</p>
        ) : null}
        {headline ? (
          <h2 className="text-display-2 text-ink mt-4 max-w-3xl text-balance">
            {headline}
          </h2>
        ) : null}
        {sub ? (
          <p className="text-body-lg text-ink-2 mt-5 max-w-2xl">{sub}</p>
        ) : null}
        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------------
   A thin gradient seam between two sections, so the join reads as a
   transition rather than an edge.
   ---------------------------------------------------------------------- */
export function Seam({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn('relative h-px w-full', className)}
      style={{
        background:
          'linear-gradient(90deg, transparent, color-mix(in oklab, var(--gr-brand-400) 45%, transparent), transparent)',
      }}
    />
  )
}
