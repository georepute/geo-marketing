'use client'

import {
  Drawer,
  DrawerContent,
  DrawerClose,
  DrawerTitle,
  DrawerDescription,
  CloseIcon,
} from '@/components/ui/Primitives'
import { IntelligenceReadout } from './IntelligenceReadout'
import { RoleProvider, RoleLensControl, type Role } from './RoleLens'
import { copy } from '@/lib/copy/en'
import type { Readout } from '@/lib/seed/types'

/* ============================================================================
   Readout drawer — the panel variant in a side sheet.

   Used wherever a signal, tile, chain link or graph node is selected. Keeping
   one drawer for all of them is what makes the system feel like a single
   environment rather than a set of pages.
   ========================================================================= */

export function ReadoutDrawer({
  readout,
  open,
  onOpenChange,
  role,
  onRoleChange,
  onOpenSignal,
}: {
  readout: Readout | null
  open: boolean
  onOpenChange: (open: boolean) => void
  role: Role
  onRoleChange: (role: Role) => void
  onOpenSignal?: (id: string) => void
}) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent aria-describedby={undefined}>
        {readout ? (
          <RoleProvider role={role}>
            {/* Header stays fixed; the body scrolls. */}
            <header className="flex items-start gap-4 p-5 border-b border-line bg-raised shrink-0">
              <div className="min-w-0 flex-1">
                <p className="text-label uppercase text-ink-3">
                  Intelligence readout
                </p>
                <DrawerTitle className="text-h3 text-ink mt-2 text-balance">
                  {readout.title}
                </DrawerTitle>
                <DrawerDescription className="sr-only">
                  {readout.executiveTruth}
                </DrawerDescription>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <RoleLensControl
                  role={role}
                  onChange={onRoleChange}
                  className="hidden md:flex"
                />
                <DrawerClose
                  className="grid place-items-center size-8 rounded-sm border border-line text-ink-2 hover:text-ink hover:bg-inset transition-colors"
                  aria-label="Close readout"
                >
                  <CloseIcon />
                </DrawerClose>
              </div>
            </header>

            <div className="overflow-y-auto p-5 md:p-7">
              <RoleLensControl
                role={role}
                onChange={onRoleChange}
                className="md:hidden mb-5"
              />
              <IntelligenceReadout
                readout={readout}
                variant="panel"
                onOpenSignal={onOpenSignal}
              />
              <p className="text-caption text-ink-3 mt-8 pt-5 border-t border-line">
                {copy.roleLens.hint}
              </p>
            </div>
          </RoleProvider>
        ) : null}
      </DrawerContent>
    </Drawer>
  )
}
