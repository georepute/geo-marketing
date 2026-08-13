'use client'

import { createContext, useContext, useMemo } from 'react'
/* From format, not translator: translator reaches for next/root-params, which
   cannot cross into a Client Component even as a transitive import. */
import { makeTranslate, type Translate } from './format'
import type { ContentOverlay } from './index'

/* ============================================================================
   The same translator, for Client Components.

   The overlay is resolved once on the server and seeded here, exactly as the
   dictionary is — a Client Component cannot read a root parameter, and each
   one fetching its own copy would be absurd.
   ========================================================================= */

const ContentContext = createContext<ContentOverlay>({})

export function ContentProvider({
  overlay,
  children,
}: {
  overlay: ContentOverlay
  children: React.ReactNode
}) {
  return (
    <ContentContext.Provider value={overlay}>
      {children}
    </ContentContext.Provider>
  )
}

/** Defaults to identity when no provider is present, so internal design-system
    routes outside the localized tree keep rendering. */
export function useT(): Translate {
  const overlay = useContext(ContentContext)
  return useMemo(() => makeTranslate(overlay), [overlay])
}
