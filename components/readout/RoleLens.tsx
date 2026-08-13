'use client'

import { createContext, useContext, useState } from 'react'
import { useDict } from '@/lib/i18n/context'
import { cn } from '@/lib/utils/cn'

/* ============================================================================
   Role-based depth — brief §16: "Executives see consequence. Analysts see
   evidence. Operators see actions."

   Critical constraint: the lens changes what opens BY DEFAULT. It never hides
   data. Every section remains reachable at every setting, which is what keeps
   the system auditable (§16 Auditability).
   ========================================================================= */

export type Role = 'executive' | 'analyst' | 'operator'

const RoleContext = createContext<Role>('executive')

export function useRole(): Role {
  return useContext(RoleContext)
}

export function RoleProvider({
  role,
  children,
}: {
  role: Role
  children: React.ReactNode
}) {
  return <RoleContext.Provider value={role}>{children}</RoleContext.Provider>
}

/** Which sections open without a click, per role. */
export function defaultOpen(role: Role) {
  return {
    evidence: role === 'analyst',
    connectedSignals: role === 'analyst',
    execution: role === 'operator' || role === 'analyst',
    methodology: false,
  }
}

/* Ids only. The labels come from the active dictionary at render time — a
   module-scope array would freeze them in English. */
const ROLE_IDS: Role[] = ['executive', 'analyst', 'operator']

export function RoleLensControl({
  role,
  onChange,
  className,
}: {
  role: Role
  onChange: (role: Role) => void
  className?: string
}) {
  const copy = useDict()
  const ROLES = ROLE_IDS.map((id) => ({ id, label: copy.roleLens[id] }))

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <span className="text-label uppercase text-ink-3 hidden sm:inline">
        {copy.roleLens.label}
      </span>
      <div
        role="radiogroup"
        aria-label={copy.roleLens.label}
        className="inline-flex rounded-sm border border-line bg-inset p-1"
      >
        {ROLES.map((r) => {
          const active = r.id === role
          return (
            <button
              key={r.id}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => onChange(r.id)}
              className={cn(
                'px-3 py-1 rounded-xs text-caption whitespace-nowrap',
                'transition-colors duration-[var(--gr-dur-fast)] ease-(--ease-standard)',
                active
                  ? 'bg-brand-700 text-ink'
                  : 'text-ink-2 hover:text-ink hover:bg-panel',
              )}
            >
              {r.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

/** Convenience wrapper for screens that own the lens state. */
export function useRoleLens(initial: Role = 'executive') {
  const [role, setRole] = useState<Role>(initial)
  return { role, setRole }
}
