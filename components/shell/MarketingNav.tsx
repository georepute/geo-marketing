'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Wordmark } from './Wordmark'
import { Button } from '@/components/ui/Button'
import {
  Drawer,
  DrawerContent,
  DrawerClose,
  DrawerTitle,
  Chevron,
  CloseIcon,
} from '@/components/ui/Primitives'
import { copy } from '@/lib/copy/en'
import { cn } from '@/lib/utils/cn'

/* ============================================================================
   Primary navigation — brief §4.

   GROUPED, NOT FLAT. A row of unrelated links is the shape of a brochure. An
   operating system is navigated by intent, so the bar carries three grouped
   surfaces (Platform, Engines, Marketplace) and two flat destinations.

   Every panel item shows the QUESTION it answers, per brief §7 — the product
   is presented through its business questions, never through feature names.

   NO LAYOUT SHIFT ON CONDENSE
   The header is `fixed` with a constant-height spacer holding its place. A
   sticky header keeps its box in flow, so shrinking it while stuck pulls
   every following section upward — a CLS regression that is easy to ship and
   hard to notice.
   ========================================================================= */

const GROUPS = copy.nav.groups
const FLAT = copy.nav.flat

export function MarketingNav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState<string | null>(null)

  /* Must wrap BOTH the nav row and the mega panels. The panels render as
     siblings of the row, so a ref on the row alone treats a click inside a
     panel as an outside click — closing the panel on `pointerdown`, before
     the link's `click` can fire. That made every panel item unclickable. */
  const headerRef = useRef<HTMLElement>(null)
  const closeTimer = useRef<number | undefined>(undefined)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Any navigation closes everything. */
  useEffect(() => {
    setMenuOpen(false)
    setOpenGroup(null)
  }, [pathname])

  /* ESC closes and returns focus to the trigger; a click outside just closes. */
  useEffect(() => {
    if (!openGroup) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      const trigger = document.getElementById(`gr-nav-${openGroup}`)
      setOpenGroup(null)
      trigger?.focus()
    }

    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setOpenGroup(null)
      }
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [openGroup])

  /* Hover intent. The close delay is what stops the panel vanishing while the
     pointer crosses the gap between trigger and panel. */
  const openOnHover = useCallback((id: string) => {
    window.clearTimeout(closeTimer.current)
    if (window.matchMedia('(pointer: fine)').matches) setOpenGroup(id)
  }, [])

  const closeOnLeave = useCallback(() => {
    window.clearTimeout(closeTimer.current)
    closeTimer.current = window.setTimeout(() => setOpenGroup(null), 180)
  }, [])

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`)

  const groupActive = (id: string) => {
    const group = GROUPS.find((g) => g.id === id)
    if (!group) return false
    return (
      group.items.some((item) => isActive(item.href)) ||
      ('allHref' in group && group.allHref
        ? isActive(group.allHref as string)
        : false)
    )
  }

  return (
    <>
      {/* Constant-height placeholder. Never animates. */}
      <div aria-hidden style={{ height: 'var(--gr-header-h)' }} />

      <header
        ref={headerRef}
        onMouseLeave={closeOnLeave}
        className={cn(
          'fixed inset-x-0 top-0 z-50',
          'transition-[background-color,border-color,box-shadow,backdrop-filter]',
          'duration-[var(--gr-dur-base)] ease-(--ease-standard)',
          scrolled || openGroup
            ? 'border-b border-line shadow-elev-1 backdrop-blur-xl'
            : 'border-b border-transparent',
        )}
        style={{
          backgroundColor:
            scrolled || openGroup
              ? 'color-mix(in oklab, var(--gr-surface-canvas) 88%, transparent)'
              : 'transparent',
        }}
      >
        <div
          className="gr-rail-wide flex items-center gap-5 transition-[height] duration-[var(--gr-dur-base)] ease-(--ease-standard)"
          style={{
            height:
              scrolled && !openGroup
                ? 'var(--gr-header-h-condensed)'
                : 'var(--gr-header-h)',
          }}
        >
          <Wordmark showGintex={!scrolled || Boolean(openGroup)} />

          {/* --- Desktop navigation ---------------------------------- */}
          <nav
            aria-label="Primary"
            className="hidden lg:flex items-center gap-0.5 ms-5"
          >
            {GROUPS.map((group) => {
              const open = openGroup === group.id
              const active = groupActive(group.id)
              return (
                <div key={group.id} className="relative">
                  <button
                    id={`gr-nav-${group.id}`}
                    type="button"
                    aria-expanded={open}
                    aria-controls={`gr-panel-${group.id}`}
                    onClick={() => setOpenGroup(open ? null : group.id)}
                    onMouseEnter={() => openOnHover(group.id)}
                    onFocus={() => setOpenGroup(group.id)}
                    className={cn(
                      'relative flex items-center gap-2 px-3 py-2 rounded-sm text-body',
                      'transition-colors duration-[var(--gr-dur-fast)] ease-(--ease-standard)',
                      open || active
                        ? 'text-ink'
                        : 'text-ink-2 hover:text-ink',
                    )}
                  >
                    {group.label}
                    <Chevron
                      open={open}
                      className={cn('rotate-90', open && 'rotate-[270deg]')}
                    />
                    <Indicator show={active || open} />
                  </button>
                </div>
              )
            })}

            {FLAT.map((link) => {
              const active = isActive(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  onMouseEnter={() => setOpenGroup(null)}
                  className={cn(
                    'relative px-3 py-2 rounded-sm text-body',
                    'transition-colors duration-[var(--gr-dur-fast)] ease-(--ease-standard)',
                    active ? 'text-ink' : 'text-ink-2 hover:text-ink',
                  )}
                >
                  {link.label}
                  <Indicator show={active} />
                </Link>
              )
            })}
          </nav>

          <div className="ms-auto flex items-center gap-2">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="hidden sm:inline-flex"
            >
              <Link href="/signin">{copy.nav.signIn}</Link>
            </Button>

            {/* The one weighted control in the bar. */}
            <Button asChild variant="primary" size="sm">
              <Link href="/app/reconstruct">{copy.nav.startAnalysis}</Link>
            </Button>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className={cn(
                'lg:hidden grid place-items-center size-9 rounded-sm',
                'border border-line-strong text-ink-2',
                'hover:text-ink hover:bg-panel active:bg-inset',
                'transition-colors duration-[var(--gr-dur-fast)]',
              )}
            >
              <svg viewBox="0 0 16 16" aria-hidden className="size-4">
                <path
                  d="M2 4h12M2 8h12M2 12h12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* --- Mega panels ------------------------------------------- */}
        {GROUPS.map((group) => (
          <MegaPanel
            key={group.id}
            group={group}
            open={openGroup === group.id}
            isActive={isActive}
            onMouseEnter={() => window.clearTimeout(closeTimer.current)}
            onMouseLeave={closeOnLeave}
          />
        ))}
      </header>

      {/* --- Mobile menu ------------------------------------------------
          Radix Dialog supplies the focus trap, ESC-to-close, scroll lock and
          scrollbar-width compensation, so opening it shifts nothing. */}
      <Drawer open={menuOpen} onOpenChange={setMenuOpen}>
        <DrawerContent
          aria-describedby={undefined}
          className="md:w-[min(28rem,92vw)]"
        >
          <div className="flex items-center justify-between p-5 border-b border-line">
            <DrawerTitle asChild>
              <span className="text-label uppercase text-ink-3">Navigate</span>
            </DrawerTitle>
            <DrawerClose
              aria-label="Close menu"
              className={cn(
                'grid place-items-center size-8 rounded-sm border border-line',
                'text-ink-2 hover:text-ink hover:bg-inset active:bg-line',
                'transition-colors duration-[var(--gr-dur-fast)]',
              )}
            >
              <CloseIcon />
            </DrawerClose>
          </div>

          <nav
            aria-label="Mobile"
            className="overflow-y-auto flex-1 flex flex-col"
          >
            {GROUPS.map((group) => (
              <div key={group.id} className="border-b border-line p-5">
                <p className="text-label uppercase text-ink-3">
                  {group.label}
                </p>
                <p className="text-caption text-ink-3 mt-1">{group.summary}</p>
                <ul className="mt-4 space-y-1">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          'block rounded-sm px-3 py-3 -mx-3',
                          'transition-colors duration-[var(--gr-dur-fast)]',
                          isActive(item.href)
                            ? 'bg-panel'
                            : 'hover:bg-panel active:bg-inset',
                        )}
                      >
                        <span className="block text-body text-ink">
                          {item.label}
                        </span>
                        <span className="block text-caption text-ink-2 mt-1">
                          {item.description}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                {'allHref' in group && group.allHref ? (
                  <Link
                    href={group.allHref}
                    className="inline-flex items-center gap-2 text-caption text-brand-300 mt-3 hover:text-ink transition-colors"
                  >
                    {'allLabel' in group ? group.allLabel : 'See all'}{' '}
                    <span aria-hidden>→</span>
                  </Link>
                ) : null}
              </div>
            ))}

            <div className="p-5 border-b border-line space-y-1">
              {[...FLAT, { href: '/signin', label: copy.nav.signIn }].map(
                (link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block -mx-3 px-3 py-3 rounded-sm text-body-lg text-ink-2 hover:text-ink hover:bg-panel active:bg-inset transition-colors"
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </div>

            <div className="p-5 mt-auto">
              <Button asChild variant="primary" size="lg" className="w-full">
                <Link href="/app/reconstruct">{copy.nav.startAnalysis}</Link>
              </Button>
              <p className="text-caption text-ink-3 mt-4 text-center text-balance">
                {copy.categoryPositioning}
              </p>
            </div>
          </nav>
        </DrawerContent>
      </Drawer>
    </>
  )
}

/* ------------------------------------------------------------------------
   A hairline that scales from the left. A filled pill is the generic-SaaS
   tell the brief asks us to eliminate; this reads as an instrument marker.
   ---------------------------------------------------------------------- */
function Indicator({ show }: { show: boolean }) {
  return (
    <span
      aria-hidden
      className={cn(
        'absolute inset-x-3 -bottom-px h-px origin-left',
        'transition-transform duration-[var(--gr-dur-base)] ease-(--ease-standard)',
        show ? 'scale-x-100' : 'scale-x-0',
      )}
      style={{ background: 'var(--gr-brand-400)' }}
    />
  )
}

/* ------------------------------------------------------------------------ */

type Group = (typeof GROUPS)[number]

function MegaPanel({
  group,
  open,
  isActive,
  onMouseEnter,
  onMouseLeave,
}: {
  group: Group
  open: boolean
  isActive: (href: string) => boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
}) {
  /* The groups are a discriminated `as const` tuple, so optional keys only
     exist on some members. Narrow each once here rather than at every use. */
  const feature = 'feature' in group ? group.feature : undefined
  const allHref = 'allHref' in group ? group.allHref : undefined
  const allLabel = 'allLabel' in group ? group.allLabel : undefined

  return (
    <div
      id={`gr-panel-${group.id}`}
      hidden={!open}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="hidden lg:block border-t border-line"
      style={{
        background: 'color-mix(in oklab, var(--gr-surface-raised) 96%, transparent)',
      }}
    >
      <div
        className="gr-rail-wide py-8"
        style={{
          animation: open
            ? 'gr-fade-up var(--gr-dur-base) var(--gr-ease-enter) both'
            : undefined,
        }}
      >
        <div
          className={cn(
            'grid gap-8',
            feature ? 'lg:grid-cols-[1fr_minmax(0,22rem)]' : '',
          )}
        >
          <div>
            <p className="text-label uppercase text-ink-3">{group.summary}</p>

            <ul className="grid gap-2 mt-5 sm:grid-cols-2">
              {group.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'block rounded-md border p-4 h-full',
                      'transition-colors duration-[var(--gr-dur-fast)] ease-(--ease-standard)',
                      isActive(item.href)
                        ? 'border-line-strong bg-panel'
                        : 'border-transparent hover:border-line hover:bg-panel',
                    )}
                  >
                    <span className="block text-body text-ink">
                      {item.label}
                    </span>
                    <span className="block text-caption text-ink-2 mt-1">
                      {item.description}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {allHref ? (
              <Link
                href={allHref}
                className="inline-flex items-center gap-2 text-caption text-brand-300 mt-5 ms-4 hover:text-ink transition-colors"
              >
                {allLabel} <span aria-hidden>→</span>
              </Link>
            ) : null}
          </div>

          {feature ? (
            <Link
              href={feature.href}
              className={cn(
                'relative isolate rounded-md border border-line p-6 overflow-hidden',
                'hover:border-line-strong transition-colors duration-[var(--gr-dur-fast)]',
              )}
            >
              <span
                aria-hidden
                className="absolute inset-0 gr-dotgrid opacity-70 -z-10"
              />
              <span className="block text-label uppercase text-brand-300">
                {feature.eyebrow}
              </span>
              <span className="block text-h3 text-ink mt-3">
                {feature.title}
              </span>
              <span className="block text-caption text-ink-2 mt-3">
                {feature.body}
              </span>
              <span className="inline-flex items-center gap-2 text-caption text-ink mt-5">
                {feature.cta} <span aria-hidden>→</span>
              </span>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  )
}
