'use client'

import { useReducedMotion } from '@/lib/hooks/useReducedMotion'
import { cn } from '@/lib/utils/cn'

/* ============================================================================
   Loading states.

   A skeleton must resemble the thing it replaces, or it reads as damage
   rather than progress. These mirror the real components' geometry.

   The shimmer is the ONE loop permitted on a loading viewport, and it stops
   under reduced motion — leaving a static tinted block, which still reads
   correctly as "not yet here".
   ========================================================================= */

export function Skeleton({
  className,
  rounded = 'sm',
}: {
  className?: string
  rounded?: 'xs' | 'sm' | 'md' | 'full'
}) {
  const reduced = useReducedMotion()

  return (
    <span
      aria-hidden
      className={cn(
        'block bg-inset',
        {
          xs: 'rounded-xs',
          sm: 'rounded-sm',
          md: 'rounded-md',
          full: 'rounded-full',
        }[rounded],
        !reduced && 'gr-loop',
        className,
      )}
      style={
        reduced
          ? undefined
          : {
              backgroundImage:
                'linear-gradient(90deg, transparent 0%, color-mix(in oklab, var(--gr-line-strong) 55%, transparent) 50%, transparent 100%)',
              backgroundSize: '180% 100%',
              animation: 'gr-shimmer 1.6s var(--gr-ease-standard) infinite',
            }
      }
    />
  )
}

/** Mirrors a MissionTile. */
export function TileSkeleton({ lead }: { lead?: boolean }) {
  return (
    <div
      className={cn(
        'rounded-md border border-line bg-panel',
        lead ? 'p-6' : 'p-5',
      )}
    >
      <Skeleton className="h-2 w-24" rounded="xs" />
      <Skeleton className={cn('mt-4', lead ? 'h-9 w-48' : 'h-6 w-28')} />
      <Skeleton className="mt-4 h-1 w-full" rounded="xs" />
      <Skeleton className="mt-4 h-2 w-full" rounded="xs" />
      <Skeleton className="mt-2 h-2 w-3/4" rounded="xs" />
    </div>
  )
}

/** Mirrors one reconstruction stage. */
export function StageSkeleton({ cards = 3 }: { cards?: number }) {
  return (
    <div className="gr-rail-wide py-9">
      <div className="flex items-baseline gap-4 mb-5">
        <Skeleton className="h-2 w-6" rounded="xs" />
        <Skeleton className="h-4 w-80 max-w-full" rounded="xs" />
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: cards }).map((_, i) => (
          <div key={i} className="rounded-md border border-line bg-panel p-4">
            <Skeleton className="h-2 w-20" rounded="xs" />
            <Skeleton className="mt-4 h-2 w-full" rounded="xs" />
            <Skeleton className="mt-2 h-2 w-2/3" rounded="xs" />
            <Skeleton className="mt-4 h-1 w-full" rounded="xs" />
          </div>
        ))}
      </div>
    </div>
  )
}

/**
 * A processing notice for the seeded scan moments. States what is happening
 * rather than spinning — an unexplained spinner is where perceived quality
 * goes to die.
 */
export function ProcessingBar({ label }: { label: string }) {
  const reduced = useReducedMotion()

  return (
    <div
      role="status"
      aria-live="polite"
      className="flex items-center gap-3 rounded-md border border-line bg-panel px-4 py-3"
    >
      <span
        aria-hidden
        className={cn('size-2 rounded-full shrink-0', !reduced && 'gr-loop')}
        style={{
          background: 'var(--gr-brand-400)',
          animation: reduced
            ? undefined
            : 'gr-pulse 1.4s var(--gr-ease-standard) infinite',
        }}
      />
      <span className="text-caption text-ink-2">{label}</span>
    </div>
  )
}
