'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Wordmark } from './Wordmark'
import { RoleLensControl, type Role } from '@/components/readout/RoleLens'
import { dateFull } from '@/lib/format'
import { cn } from '@/lib/utils/cn'

/* ============================================================================
   Product shell.

   Brief §16: the experience should feel like entering a live intelligence
   command environment, not reading a software brochure. The chrome carries
   what an operator needs constantly — which organisation, which domain, how
   fresh the observation is — rather than decoration.
   ========================================================================= */

const NAV = [
  { href: '/app/mission-control', label: 'Mission Control' },
  { href: '/app/reconstruct', label: 'Decision Reconstruction' },
  { href: '/app/campaign-readiness', label: 'Campaign Readiness' },
  { href: '/app/narrative', label: 'Narrative Intelligence' },
  { href: '/app/actions', label: 'Action Center' },
]

export function AppShell({
  org,
  asOf,
  role,
  onRoleChange,
  children,
}: {
  org: { name: string; domain: string; market: string }
  asOf: string
  role: Role
  onRoleChange: (role: Role) => void
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="min-h-dvh flex flex-col bg-canvas">
      {/* --- Command bar ------------------------------------------------ */}
      <header className="sticky top-0 z-50 bg-raised/95 backdrop-blur-md border-b border-line">
        <div className="gr-rail-wide flex items-center gap-5 h-14">
          <Wordmark showGintex={false} />

          {/* Tenant context — always visible, never a dropdown you must hunt */}
          <div className="hidden md:flex items-center gap-3 ps-5 border-s border-line min-w-0">
            <span className="grid place-items-center size-7 rounded-sm bg-brand-700 text-ink text-caption shrink-0">
              {org.name.charAt(0)}
            </span>
            <div className="min-w-0">
              <p className="text-caption text-ink truncate leading-tight">
                {org.name}
              </p>
              <p className="text-label uppercase text-ink-3 truncate leading-tight mt-1">
                {org.domain} · {org.market}
              </p>
            </div>
          </div>

          <div className="ms-auto flex items-center gap-4">
            <ObservationStatus asOf={asOf} />
            <RoleLensControl
              role={role}
              onChange={onRoleChange}
              className="hidden lg:flex"
            />
            <Link
              href="/"
              className="text-caption text-ink-2 hover:text-ink transition-colors whitespace-nowrap"
            >
              Exit
            </Link>
          </div>
        </div>

        {/* --- Section nav ---------------------------------------------- */}
        <nav
          aria-label="Product"
          className="gr-rail-wide flex items-center gap-1 -mb-px overflow-x-auto"
        >
          {NAV.map((item) => {
            const active = pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'relative px-3 py-3 text-caption whitespace-nowrap',
                  'transition-colors duration-[var(--gr-dur-fast)]',
                  active ? 'text-ink' : 'text-ink-3 hover:text-ink-2',
                )}
              >
                {item.label}
                {active ? (
                  <span
                    aria-hidden
                    className="absolute inset-x-2 -bottom-px h-px"
                    style={{ background: 'var(--gr-brand-400)' }}
                  />
                ) : null}
              </Link>
            )
          })}

          <div className="ms-auto lg:hidden py-2">
            <RoleLensControl role={role} onChange={onRoleChange} />
          </div>
        </nav>
      </header>

      {/* A dot grid behind the command surface — coordinate space, the way an
          instrument reads. `isolate` keeps it beneath every panel. */}
      <main id="main" className="flex-1 relative isolate">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 gr-dotgrid opacity-70"
        />
        <div className="relative">{children}</div>
      </main>

      {/* --- Status footer --------------------------------------------- */}
      <footer className="gr-hairline">
        <div className="gr-rail-wide py-4 flex flex-wrap items-center justify-between gap-3">
          <p className="text-label uppercase text-ink-3">
            Seeded demonstration environment · Methodology GEON-2.4
          </p>
          <Link
            href="/methodology"
            className="text-caption text-ink-2 hover:text-ink transition-colors"
          >
            How these conclusions are reached
          </Link>
        </div>
      </footer>
    </div>
  )
}

/* ------------------------------------------------------------------------ */

/**
 * Observation freshness. The single slow pulse is the one looping animation
 * permitted on this viewport (plan §5.4) — it carries "this is live" and
 * nothing else does.
 */
function ObservationStatus({ asOf }: { asOf: string }) {
  return (
    <span className="hidden sm:flex items-center gap-2 whitespace-nowrap">
      <span
        aria-hidden
        className="gr-loop size-1.5 rounded-full"
        style={{
          background: 'var(--gr-positive)',
          animation: 'gr-pulse var(--gr-dur-scan) var(--gr-ease-standard) infinite',
        }}
      />
      <span className="text-label uppercase text-ink-3">
        Observed <span className="text-ink-2">{dateFull(asOf)}</span>
      </span>
    </span>
  )
}
