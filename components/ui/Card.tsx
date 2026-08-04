import * as React from 'react'
import { cn } from '@/lib/utils/cn'

/**
 * Panel — the base surface. Elevation is one border plus one soft drop;
 * never stacked glows (plan §5.3).
 */
export function Panel({
  className,
  inset,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { inset?: boolean }) {
  return (
    <div
      className={cn(
        'rounded-md border border-line',
        inset ? 'bg-inset' : 'bg-panel',
        'shadow-elev-2',
        className,
      )}
      {...props}
    />
  )
}

/** Small uppercase eyebrow label. Type token `label` (§5.2). */
export function Label({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn('text-label uppercase text-ink-3 block', className)}
      {...props}
    />
  )
}

/**
 * A numeric value. Always mono + tabular so columns align and figures do not
 * jitter while animating (§5.2).
 */
export function Value({
  className,
  size = 'md',
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { size?: 'md' | 'lg' }) {
  return (
    <span
      data-numeric=""
      className={cn(
        size === 'lg' ? 'text-data-lg' : 'text-data',
        'text-ink',
        className,
      )}
      {...props}
    />
  )
}

/** Horizontal hairline used to separate readout sections. */
export function Rule({ className }: { className?: string }) {
  return <hr className={cn('border-0 border-t border-line', className)} />
}
