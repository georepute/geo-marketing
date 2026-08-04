'use client'

import { useReducedMotion } from '@/lib/hooks/useReducedMotion'

/**
 * Route transition.
 *
 * `template.tsx` remounts on every navigation, unlike `layout.tsx` — which is
 * exactly what a per-route entrance needs. Opacity only, 200ms: a transform
 * here would fight the scroll restoration and read as a lurch.
 *
 * Under reduced motion the wrapper renders inert rather than animating to
 * completion instantly, so nothing is ever briefly invisible.
 */
export default function MarketingTemplate({
  children,
}: {
  children: React.ReactNode
}) {
  const reduced = useReducedMotion()

  if (reduced) return <>{children}</>

  return (
    <div
      style={{
        animation:
          'gr-fade-in var(--gr-dur-base) var(--gr-ease-enter) both',
      }}
    >
      {children}
    </div>
  )
}
