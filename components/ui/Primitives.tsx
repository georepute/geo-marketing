'use client'

import * as React from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { cn } from '@/lib/utils/cn'

/* ============================================================================
   Radix primitives, styled to the Quiet Authority system. Radix supplies focus
   management, keyboard behaviour and ARIA; the styling here is entirely ours.
   ========================================================================= */

/* --- Popover ------------------------------------------------------------- */
export const Popover = PopoverPrimitive.Root
export const PopoverTrigger = PopoverPrimitive.Trigger

export function PopoverContent({
  className,
  align = 'start',
  sideOffset = 8,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        align={align}
        sideOffset={sideOffset}
        className={cn(
          'z-[100] w-80 max-w-[calc(100vw-2rem)] rounded-md',
          'border border-line-strong bg-raised shadow-elev-3 p-4',
          'data-[state=open]:animate-[gr-fade-up_var(--gr-dur-fast)_var(--gr-ease-enter)]',
          className,
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
}

/* --- Tooltip ------------------------------------------------------------- */
export function TooltipProvider({ children }: { children: React.ReactNode }) {
  return (
    <TooltipPrimitive.Provider delayDuration={200} skipDelayDuration={300}>
      {children}
    </TooltipPrimitive.Provider>
  )
}

export const Tooltip = TooltipPrimitive.Root
export const TooltipTrigger = TooltipPrimitive.Trigger

export function TooltipContent({
  className,
  sideOffset = 6,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        sideOffset={sideOffset}
        className={cn(
          'z-[110] max-w-72 rounded-sm border border-line-strong bg-raised',
          'px-3 py-2 text-caption text-ink-2 shadow-elev-2',
          className,
        )}
        {...props}
      />
    </TooltipPrimitive.Portal>
  )
}

/* --- Collapsible --------------------------------------------------------- */
export const Collapsible = CollapsiblePrimitive.Root
export const CollapsibleTrigger = CollapsiblePrimitive.Trigger
export const CollapsibleContent = CollapsiblePrimitive.Content

/* --- Drawer (side sheet) ------------------------------------------------- */
export const Drawer = DialogPrimitive.Root
export const DrawerTrigger = DialogPrimitive.Trigger
export const DrawerClose = DialogPrimitive.Close
export const DrawerTitle = DialogPrimitive.Title
export const DrawerDescription = DialogPrimitive.Description

export function DrawerContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay
        className={cn(
          'fixed inset-0 z-[200] backdrop-blur-[2px]',
          'data-[state=open]:animate-[gr-fade-up_var(--gr-dur-fast)_var(--gr-ease-enter)]',
        )}
        /* Derived from the canvas so the scrim reads correctly in both
           themes — a flat black wash looks like a bug on a light page. */
        style={{
          background:
            'color-mix(in oklab, var(--gr-surface-canvas) 78%, transparent)',
        }}
      />
      <DialogPrimitive.Content
        className={cn(
          'fixed z-[210] bg-raised border-line-strong shadow-elev-3',
          'inset-x-0 bottom-0 max-h-[92dvh] rounded-t-lg border-t',
          'md:inset-y-0 md:end-0 md:start-auto md:h-dvh md:max-h-none',
          'md:w-[min(46rem,92vw)] md:rounded-none md:rounded-s-lg md:border-t-0 md:border-s',
          'flex flex-col outline-none',
          className,
        )}
        {...props}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  )
}

/* --- Chevron ------------------------------------------------------------- */
export function Chevron({
  open,
  className,
}: {
  open?: boolean
  className?: string
}) {
  return (
    <svg
      viewBox="0 0 12 12"
      aria-hidden
      className={cn(
        'size-3 shrink-0 transition-transform duration-[var(--gr-dur-base)] ease-(--ease-standard)',
        open && 'rotate-90',
        className,
      )}
    >
      <path
        d="M4.5 2.5 8 6l-3.5 3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/* --- Close glyph --------------------------------------------------------- */
export function CloseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 14 14" aria-hidden className={cn('size-3.5', className)}>
      <path
        d="M3 3l8 8M11 3l-8 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
