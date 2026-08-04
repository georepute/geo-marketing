'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import {
  readEntitlements,
  writeEntitlements,
  resetDemo as clearStorage,
} from '@/lib/commerce/mock-checkout'
import type { Entitlement } from '@/lib/commerce/types'

/* ============================================================================
   Entitlement state. The only client store in the application (plan §1).

   Hydration note: entitlements start empty on the server and load in an
   effect, so server and first client render agree. `ready` lets consumers
   avoid flashing a locked panel to someone who has already purchased.
   ========================================================================= */

interface EntitlementContextValue {
  entitlements: Entitlement[]
  ready: boolean
  has(kind: Entitlement['kind'], slug?: string): boolean
  hasAnyPlan(): boolean
  grant(entitlements: Entitlement[]): void
  reset(): void
}

const EntitlementContext = createContext<EntitlementContextValue>({
  entitlements: [],
  ready: false,
  has: () => false,
  hasAnyPlan: () => false,
  grant: () => {},
  reset: () => {},
})

export function useEntitlements(): EntitlementContextValue {
  return useContext(EntitlementContext)
}

export function EntitlementProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [entitlements, setEntitlements] = useState<Entitlement[]>([])
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setEntitlements(readEntitlements())
    setReady(true)
  }, [])

  const has = useCallback(
    (kind: Entitlement['kind'], slug?: string) =>
      entitlements.some(
        (e) => e.kind === kind && (slug === undefined || e.slug === slug),
      ),
    [entitlements],
  )

  const hasAnyPlan = useCallback(
    () => entitlements.some((e) => e.kind === 'plan'),
    [entitlements],
  )

  const grant = useCallback((next: Entitlement[]) => {
    setEntitlements((current) => {
      // De-duplicate: buying the same product twice grants it once.
      const merged = [...current]
      for (const entitlement of next) {
        const exists = merged.some(
          (e) => e.kind === entitlement.kind && e.slug === entitlement.slug,
        )
        if (!exists) merged.push(entitlement)
      }
      writeEntitlements(merged)
      return merged
    })
  }, [])

  const reset = useCallback(() => {
    clearStorage()
    setEntitlements([])
  }, [])

  return (
    <EntitlementContext.Provider
      value={{ entitlements, ready, has, hasAnyPlan, grant, reset }}
    >
      {children}
    </EntitlementContext.Provider>
  )
}
