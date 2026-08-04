import { MarketingNav } from '@/components/shell/MarketingNav'
import { Footer } from '@/components/shell/Footer'

/**
 * Marketing shell. Every public page carries the same header and footer, so
 * the site reads as one product rather than a set of landing pages.
 */
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-dvh flex flex-col bg-canvas">
      <MarketingNav />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}
