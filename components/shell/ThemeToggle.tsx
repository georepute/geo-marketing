'use client'

import { useTheme } from '@/lib/theme/useTheme'
import { useT } from '@/lib/i18n/content/client'
import { cn } from '@/lib/utils/cn'

/* ============================================================================
   Floating theme toggle.

   Fixed bottom-right, 24px inset, safe-area aware so it clears the home
   indicator on iOS. z-index sits below drawers and modals (200+) but above
   page content and the sticky header, so it never traps a dialog underneath
   itself and never covers body copy.

   Accessibility: a real <button> with an aria-label that names the DESTINATION
   ("Switch to light theme") rather than the current state, plus aria-pressed
   reflecting whether dark is active. Keyboard-operable by construction.
   ========================================================================= */

export function ThemeToggle() {
  const { theme, ready, toggle } = useTheme()
  const t = useT()
  const isDark = theme === 'dark'
  const label = isDark ? t('Switch to light theme') : t('Switch to dark theme')

  return (
    <div
      className={cn(
        'fixed z-[150] print:hidden',
        'bottom-[max(1.5rem,env(safe-area-inset-bottom))]',
        'end-[max(1.5rem,env(safe-area-inset-right))]',
      )}
    >
      <button
        type="button"
        onClick={toggle}
        aria-label={label}
        aria-pressed={isDark}
        title={label}
        className={cn(
          'group relative grid place-items-center size-11 rounded-full',
          'border border-line-strong bg-panel shadow-elev-2',
          'text-ink-2 hover:text-ink',
          'transition-[color,background-color,border-color,transform]',
          'duration-[var(--gr-dur-base)] ease-(--ease-standard)',
          'hover:border-brand-400/70 active:scale-[0.94]',
        )}
      >
        {/* Both icons are always mounted and crossfade — swapping the element
            would restart layout and make the transition snap. */}
        <span className="relative block size-[18px]">
          <SunIcon
            className={cn(
              'absolute inset-0 transition-opacity duration-[var(--gr-dur-base)] ease-(--ease-standard)',
              ready && !isDark ? 'opacity-100' : 'opacity-0',
            )}
          />
          <MoonIcon
            className={cn(
              'absolute inset-0 transition-opacity duration-[var(--gr-dur-base)] ease-(--ease-standard)',
              ready && isDark ? 'opacity-100' : 'opacity-0',
            )}
          />
        </span>
      </button>
    </div>
  )
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 18 18" aria-hidden className={className}>
      <circle
        cx="9"
        cy="9"
        r="3.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M9 1.4v1.8M9 14.8v1.8M1.4 9h1.8M14.8 9h1.8" />
        <path d="M3.6 3.6l1.3 1.3M13.1 13.1l1.3 1.3M14.4 3.6l-1.3 1.3M4.9 13.1l-1.3 1.3" />
      </g>
    </svg>
  )
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 18 18" aria-hidden className={className}>
      <path
        d="M15.2 11.1A6.6 6.6 0 0 1 6.9 2.8a6.6 6.6 0 1 0 8.3 8.3Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}
