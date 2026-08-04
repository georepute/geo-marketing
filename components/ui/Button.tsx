import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils/cn'

type Variant = 'primary' | 'secondary' | 'ghost' | 'accent'
type Size = 'sm' | 'md' | 'lg'

/* Primary and accent carry white text in BOTH themes: the brand violet and
   the light-theme bronze are both dark enough that inverse text would fail
   contrast. `text-white` here is the one place a literal is correct, because
   it is the foreground of a fixed-darkness fill rather than a themed surface. */
const variants: Record<Variant, string> = {
  // Solid brand. The only heavily-weighted control on a screen.
  primary:
    'bg-brand-500 text-white hover:bg-brand-400 active:bg-brand-700 border border-brand-400/40 shadow-elev-1',
  // Default for most actions: quiet, bordered, institutional.
  secondary:
    'bg-panel text-ink border border-line-strong hover:border-brand-400/60 hover:bg-inset active:bg-line',
  ghost:
    'text-ink-2 hover:text-ink hover:bg-panel active:bg-inset border border-transparent',
  // Accent is signal-only; reserved for a single urgent commercial route.
  accent:
    'bg-accent text-white hover:bg-accent-300 active:brightness-90 border border-accent/40 font-medium',
}

const sizes: Record<Size, string> = {
  sm: 'h-8 px-3 text-caption gap-2',
  md: 'h-10 px-4 text-body gap-2',
  lg: 'h-12 px-6 text-body-lg gap-3',
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  /** Render as the single child element instead of a <button> (e.g. a Link). */
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { className, variant = 'secondary', size = 'md', asChild, ...props },
    ref,
  ) {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-sm whitespace-nowrap',
          'transition-[color,background-color,border-color,transform,filter]',
          'duration-[var(--gr-dur-fast)] ease-(--ease-standard)',
          // A 1% press. Perceptible, never bouncy — the motion contract
          // forbids overshoot, so this is a linear settle.
          'active:scale-[0.985]',
          'disabled:pointer-events-none disabled:opacity-45',
          variants[variant],
          sizes[size],
          className,
        )}
        {...props}
      />
    )
  },
)
