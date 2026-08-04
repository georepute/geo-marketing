'use client'

import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'
import { cn } from '@/lib/utils/cn'
import type { ChainLink } from '@/lib/api/types'

/* ============================================================================
   THE CAUSAL SIGNAL CHAIN — brief §13.1.

   The product's central claim in one component: signals are not isolated cards,
   they cause each other, and the chain terminates in a prescription.

   Layout: vertical always. Vertical reads as causation on every viewport, and
   a horizontal variant would force truncation of the "because" text that makes
   each link legible.

   Motion: each link traces in on first view. Under `prefers-reduced-motion` the
   chain renders fully drawn with no stagger — plan §5.5.
   ========================================================================= */

const KIND_TOKEN = {
  signal: 'var(--gr-brand-400)',
  exposure: 'var(--gr-accent-500)',
  prescription: 'var(--gr-positive)',
} as const

export function CausalSignalChain({
  links,
  onSelect,
  activeId,
  showRationale = true,
  className,
}: {
  links: ChainLink[]
  /** Opens the readout behind a link. Omit to render non-interactive. */
  onSelect?: (link: ChainLink) => void
  activeId?: string | null
  showRationale?: boolean
  className?: string
}) {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLOListElement>(null)
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
        if (entries.some((e) => e.isIntersecting)) {
          setRevealed(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [reduced])

  return (
    <ol ref={ref} className={cn('relative', className)}>
      {links.map((link, i) => {
        const isLast = i === links.length - 1
        const token = KIND_TOKEN[link.kind]
        const active = activeId === link.id
        const interactive = Boolean(onSelect)
        const delay = reduced ? 0 : i * 90

        return (
          <li
            key={link.id}
            className="relative grid grid-cols-[1.75rem_1fr] gap-x-4"
            style={
              revealed && !reduced
                ? {
                    animation: `gr-fade-up var(--gr-dur-reveal) var(--gr-ease-enter) ${delay}ms both`,
                  }
                : { opacity: revealed ? 1 : 0 }
            }
          >
            {/* --- Rail: node + connector ------------------------------- */}
            <div className="flex flex-col items-center">
              <span
                aria-hidden
                className={cn(
                  'relative z-10 grid place-items-center size-7 rounded-full shrink-0',
                  'border bg-canvas transition-colors duration-[var(--gr-dur-base)]',
                )}
                style={{
                  borderColor: active
                    ? token
                    : `color-mix(in oklab, ${token} 45%, transparent)`,
                  background: active
                    ? `color-mix(in oklab, ${token} 18%, var(--gr-surface-canvas))`
                    : 'var(--gr-surface-canvas)',
                }}
              >
                <span
                  className="size-2 rounded-full"
                  style={{ background: token }}
                />
              </span>

              {!isLast ? (
                <span
                  aria-hidden
                  className="gr-trace w-px flex-1 min-h-8 my-1"
                  style={{
                    background: `linear-gradient(180deg, color-mix(in oklab, ${token} 55%, transparent), color-mix(in oklab, ${KIND_TOKEN[links[i + 1]!.kind]} 45%, transparent))`,
                  }}
                />
              ) : null}
            </div>

            {/* --- Content ---------------------------------------------- */}
            <div className={cn('min-w-0', isLast ? 'pb-0' : 'pb-7')}>
              <ChainBody
                link={link}
                token={token}
                active={active}
                interactive={interactive}
                showRationale={showRationale}
                onSelect={onSelect}
              />
            </div>
          </li>
        )
      })}
    </ol>
  )
}

/* ------------------------------------------------------------------------ */

function ChainBody({
  link,
  token,
  active,
  interactive,
  showRationale,
  onSelect,
}: {
  link: ChainLink
  token: string
  active: boolean
  interactive: boolean
  showRationale: boolean
  onSelect?: (link: ChainLink) => void
}) {
  const isPrescription = link.kind === 'prescription'

  const inner = (
    <>
      <p className="text-label uppercase text-ink-3">{link.label}</p>
      <p
        className={cn(
          'mt-2',
          isPrescription
            ? 'text-body-lg text-ink'
            : 'text-data-lg text-ink',
        )}
        {...(isPrescription ? {} : { 'data-numeric': '' })}
        style={link.kind === 'exposure' ? { color: 'var(--gr-accent-300)' } : undefined}
      >
        {link.value}
      </p>
      {showRationale ? (
        <p className="text-caption text-ink-2 mt-2 max-w-prose">{link.because}</p>
      ) : null}
    </>
  )

  if (!interactive) {
    return (
      <div
        className="rounded-md border border-line bg-panel p-4"
        style={active ? { borderColor: token } : undefined}
      >
        {inner}
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={() => onSelect?.(link)}
      aria-pressed={active}
      className={cn(
        'group w-full text-start rounded-md border bg-panel p-4',
        'transition-colors duration-[var(--gr-dur-base)] ease-(--ease-standard)',
        'hover:bg-inset focus-visible:outline-2',
        active ? 'border-transparent' : 'border-line hover:border-line-strong',
      )}
      style={active ? { borderColor: token, background: 'var(--gr-surface-inset)' } : undefined}
    >
      {inner}
      <span className="inline-flex items-center gap-2 mt-3 text-label uppercase text-ink-3 group-hover:text-ink-2 transition-colors">
        View evidence
        <span aria-hidden>→</span>
      </span>
    </button>
  )
}
