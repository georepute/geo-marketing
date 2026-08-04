'use client'

import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'
import { cn } from '@/lib/utils/cn'

/* ============================================================================
   Visual primitives. Built once so richness is consistent across pages rather
   than hand-tuned per section.
   ========================================================================= */

/* ------------------------------------------------------------------------
   GlassCard — frosted panel.

   The inner top highlight is what separates convincing glass from a blurred
   rectangle: real glass catches light on its upper edge. Kept at 6% so it
   reads as a material property, not a border.
   ---------------------------------------------------------------------- */
export function GlassCard({
  as: Tag = 'div',
  interactive,
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLElement> & {
  as?: 'div' | 'article' | 'section'
  interactive?: boolean
}) {
  return (
    <Tag
      className={cn(
        'relative isolate rounded-md border border-line',
        'backdrop-blur-xl shadow-elev-2',
        'before:absolute before:inset-x-0 before:top-0 before:h-px before:rounded-t-md',
        'before:bg-[linear-gradient(90deg,transparent,color-mix(in_oklab,var(--gr-text-primary)_22%,transparent),transparent)]',
        interactive && [
          'transition-[border-color,background-color,transform,box-shadow]',
          'duration-[var(--gr-dur-base)] ease-(--ease-standard)',
          'hover:border-line-strong hover:shadow-elev-3',
          'motion-safe:hover:-translate-y-0.5',
        ],
        className,
      )}
      style={{
        background:
          'color-mix(in oklab, var(--gr-surface-panel) 72%, transparent)',
      }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/* ------------------------------------------------------------------------
   GlowBorder — a gradient rim that brightens on hover.

   Implemented as a masked ring rather than a background gradient, so the
   card's own surface stays a flat token colour and text contrast is
   unaffected.
   ---------------------------------------------------------------------- */
export function GlowBorder({
  className,
  active,
  children,
}: {
  className?: string
  active?: boolean
  children: React.ReactNode
}) {
  return (
    <div className={cn('relative isolate rounded-md', className)}>
      <span
        aria-hidden
        className={cn(
          'pointer-events-none absolute -inset-px rounded-[9px] -z-10',
          'transition-opacity duration-[var(--gr-dur-slow)] ease-(--ease-standard)',
          active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100',
        )}
        style={{
          background:
            'linear-gradient(135deg, color-mix(in oklab, var(--gr-brand-400) 70%, transparent), transparent 40%, color-mix(in oklab, var(--gr-accent-500) 45%, transparent))',
        }}
      />
      {children}
    </div>
  )
}

/* ------------------------------------------------------------------------
   BrandBadge — a label sitting on a solid brand fill.

   `text-white` is correct here and nowhere else: the fill is brand-500, which
   is dark in BOTH themes, so the foreground must NOT follow the theme. Owning
   that exception in one component means no page has to re-argue it.
   ---------------------------------------------------------------------- */
export function BrandBadge({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-xs px-2 py-1',
        'text-label uppercase text-white',
        className,
      )}
      style={{ background: 'var(--gr-brand-500)' }}
    >
      {children}
    </span>
  )
}

/* ------------------------------------------------------------------------
   TiltCard — pointer parallax.

   Deliberately restrained: 4 degrees maximum. Anything more reads as a toy,
   and the brief asks for institutional. Disabled entirely on touch (where
   there is no hover) and under reduced motion (where it is vestibular).
   ---------------------------------------------------------------------- */
export function TiltCard({
  className,
  max = 4,
  children,
}: {
  className?: string
  max?: number
  children: React.ReactNode
}) {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState<string>()

  function onPointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (reduced || event.pointerType !== 'mouse') return
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const px = (event.clientX - rect.left) / rect.width - 0.5
    const py = (event.clientY - rect.top) / rect.height - 0.5
    setTransform(
      `perspective(1100px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg)`,
    )
  }

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={() => setTransform(undefined)}
      className={cn(
        'transition-transform duration-[var(--gr-dur-base)] ease-(--ease-standard)',
        'will-change-transform',
        className,
      )}
      style={{ transform }}
    >
      {children}
    </div>
  )
}

/* ------------------------------------------------------------------------
   Counter — counts up once, on first view.

   The final value is rendered on the server and in the DOM from the first
   frame; the animation only overwrites it on the client. A screen reader or
   a crawler therefore sees the real figure, never a zero.
   ---------------------------------------------------------------------- */
export function Counter({
  value,
  decimals = 0,
  suffix = '',
  prefix = '',
  className,
}: {
  value: number
  decimals?: number
  suffix?: string
  prefix?: string
  className?: string
}) {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLSpanElement>(null)
  /* Seeded with the FINAL value, not zero. The server render, a crawler and
     a screen reader all see the real figure; the count-up only ever replaces
     it on the client, and only once. */
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    if (reduced) return
    const node = ref.current
    if (!node) return

    let raf = 0
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return
        observer.disconnect()

        const duration = 900
        const startedAt = performance.now()
        const tick = (now: number) => {
          const t = Math.min(1, (now - startedAt) / duration)
          // Ease-out cubic: quick, then settling. Never overshoots.
          const eased = 1 - Math.pow(1 - t, 3)
          setDisplay(value * eased)
          if (t < 1) raf = requestAnimationFrame(tick)
          else setDisplay(value)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )

    observer.observe(node)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [reduced, value])

  return (
    <span ref={ref} data-numeric="" className={className}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  )
}
