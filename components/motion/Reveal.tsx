'use client'

import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'
import { cn } from '@/lib/utils/cn'

/* ============================================================================
   Scroll reveal — opacity plus an 8px rise, once only.

   Deliberately NOT a library. One IntersectionObserver per element,
   disconnected the moment it fires, so nothing keeps observing after the
   reveal is spent.

   Reduced motion: the element renders visible on mount and no observer is
   created at all. That is stronger than animating to `opacity: 1` in zero
   duration — content is never briefly invisible for someone whose preference
   we failed to detect in time.
   ========================================================================= */

export function Reveal({
  children,
  /** Stagger within a group. Kept small — the contract forbids theatre. */
  delay = 0,
  as: Tag = 'div',
  className,
}: {
  children: React.ReactNode
  delay?: number
  as?: 'div' | 'section' | 'li' | 'article'
  className?: string
}) {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    if (reduced) {
      setRevealed(true)
      return
    }
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setRevealed(true)
          observer.disconnect()
        }
      },
      // Fire slightly before the element enters, so the motion has resolved
      // by the time it is actually being read.
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [reduced])

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={cn(!reduced && 'gr-reveal', className)}
      data-revealed={revealed ? 'true' : undefined}
      style={
        reduced
          ? undefined
          : ({ '--gr-reveal-delay': `${delay}ms` } as React.CSSProperties)
      }
    >
      {children}
    </Tag>
  )
}
