'use client'

import { useEffect, useState } from 'react'

/**
 * Tracks `prefers-reduced-motion: reduce`.
 *
 * CSS alone cannot stop an SVG trace that is driven by JS, so plan §5.5
 * requires the contract be enforced in both places. Components branch on this
 * to render a chain or graph fully drawn rather than animating it.
 *
 * Returns `false` during SSR and the first client render so markup matches;
 * the effect corrects it before paint.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(query.matches)

    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  return reduced
}
