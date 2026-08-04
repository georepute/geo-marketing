import Image from 'next/image'
import { IMAGERY, imageUrl, type ImageKey, type Treatment } from '@/lib/visual/imagery'
import { cn } from '@/lib/utils/cn'

/* ============================================================================
   A managed photograph.

   Three jobs, in order of importance:

   1. TEXT STAYS LEGIBLE. Every image carries a scrim derived from the canvas
      token, so a headline over it holds AA contrast in BOTH themes. This is
      not optional styling — it is the reason the image is allowed on the page.

   2. ONE ART DIRECTION. A brand tint sits over each photo so six unrelated
      photographs read as one commissioned series.

   3. NO LAYOUT SHIFT. `fill` inside an explicitly-sized parent, plus a blur
      placeholder generated from the real image bytes.

   Light theme deliberately runs a lower image opacity: a dark photograph on a
   warm paper canvas reads as a hole punched in the page unless it is pulled
   back and lifted toward the surface colour.
   ========================================================================= */

const TINT: Record<Treatment, string> = {
  violet:
    'linear-gradient(180deg, color-mix(in oklab, var(--gr-brand-900) 62%, transparent), color-mix(in oklab, var(--gr-brand-700) 34%, transparent))',
  gold: 'linear-gradient(180deg, color-mix(in oklab, var(--gr-accent-500) 26%, transparent), color-mix(in oklab, var(--gr-brand-900) 58%, transparent))',
  neutral:
    'linear-gradient(180deg, color-mix(in oklab, var(--gr-surface-canvas) 46%, transparent), color-mix(in oklab, var(--gr-surface-canvas) 70%, transparent))',
}

export function ImageWithScrim({
  image,
  priority,
  sizes = '100vw',
  /** How hard the scrim pulls the image back. */
  scrim = 'standard',
  className,
}: {
  image: ImageKey
  priority?: boolean
  sizes?: string
  scrim?: 'light' | 'standard' | 'heavy'
  className?: string
}) {
  const entry = IMAGERY[image]

  const scrimOpacity = {
    light: 'opacity-60',
    standard: 'opacity-80',
    heavy: 'opacity-95',
  }[scrim]

  return (
    <div className={cn('absolute inset-0 overflow-hidden', className)}>
      <Image
        src={imageUrl(entry.id, 1920)}
        alt={entry.alt}
        aria-hidden={entry.alt === '' ? true : undefined}
        fill
        priority={priority}
        loading={priority ? undefined : 'lazy'}
        sizes={sizes}
        placeholder="blur"
        blurDataURL={entry.blurDataURL}
        className="object-cover gr-photo"
        style={{ objectPosition: entry.position ?? '50% 50%' }}
      />

      {/* Brand tint — makes the set one series. */}
      <div
        aria-hidden
        className="absolute inset-0 mix-blend-color"
        style={{ background: TINT[entry.treatment] }}
      />

      {/* Scrim — the reason text over this is readable. */}
      <div
        aria-hidden
        className={cn('absolute inset-0', scrimOpacity)}
        style={{ background: 'var(--gr-scrim)' }}
      />

      {/* Bottom fade into the page, so the band does not end on a hard edge. */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-32"
        style={{
          background:
            'linear-gradient(180deg, transparent, var(--gr-surface-canvas))',
        }}
      />
    </div>
  )
}
