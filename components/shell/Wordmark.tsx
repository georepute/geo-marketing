import Link from 'next/link'
import { cn } from '@/lib/utils/cn'

/* ============================================================================
   Brand mark. No logo asset was supplied (plan §7 Q6), so this is a geometric
   mark set in Inter: three converging strokes resolving to a single point —
   many signals, one decision. Replaceable with a real asset in one file.
   ========================================================================= */

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={cn('size-6 shrink-0', className)}
    >
      {/* Three signals converging on one decision point */}
      <path
        d="M3 5h6.5M3 12h9.5M3 19h6.5"
        stroke="var(--gr-brand-300)"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M9.5 5c4 0 4 7 6.5 7M12.5 12h3.5M9.5 19c4 0 4-7 6.5-7"
        stroke="var(--gr-brand-500)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="18.5" cy="12" r="2.6" fill="var(--gr-accent-500)" />
    </svg>
  )
}

export function Wordmark({
  href = '/',
  showGintex = true,
  className,
}: {
  href?: string
  showGintex?: boolean
  className?: string
}) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center gap-3 group rounded-sm',
        className,
      )}
      aria-label="GeoRepute — home"
    >
      <Mark />
      <span className="flex flex-col leading-none">
        <span className="text-wordmark text-ink">GeoRepute</span>
        {showGintex ? (
          <span className="text-wordmark-sub uppercase text-ink-3 mt-1">
            Powered by Gintex
          </span>
        ) : null}
      </span>
    </Link>
  )
}
