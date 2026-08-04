'use client'

import { TooltipProvider } from '@/components/ui/Primitives'
import { EntitlementProvider } from '@/components/commerce/EntitlementProvider'
import { ThemeProvider } from '@/lib/theme/useTheme'

/** App-wide client providers. Kept minimal — most state is server-derived. */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <EntitlementProvider>
        <TooltipProvider>{children}</TooltipProvider>
      </EntitlementProvider>
    </ThemeProvider>
  )
}
