'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { useEntitlements } from './EntitlementProvider'
import { copy } from '@/lib/copy/en'
import { flags } from '@/lib/flags'
import type { PurchaseKind } from '@/lib/commerce/types'

/* ============================================================================
   Buy control. Reflects entitlement state rather than always offering to sell
   — a customer who already owns something should be sent to it, not asked to
   buy it again.

   WHILE PRICING IS WITHHELD (doc §4) this becomes the briefing route instead.
   Every buy control on the site passes through here, so that one substitution
   is what keeps "purchase" from appearing anywhere a price cannot. The
   entitlement branch still runs first: someone who already owns a product is
   sent to it, flag or no flag.
   ========================================================================= */

export function BuyButton({
  kind,
  slug,
  billing,
  label,
  variant = 'primary',
  size = 'md',
  className,
}: {
  kind: PurchaseKind
  slug: string
  billing?: 'monthly' | 'annual'
  label: string
  variant?: 'primary' | 'secondary' | 'ghost' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}) {
  const { has, ready } = useEntitlements()
  const owned = ready && has(kind, slug)

  if (owned) {
    return (
      <Button asChild variant="secondary" size={size} className={className}>
        <Link href="/app/mission-control">Open — already purchased</Link>
      </Button>
    )
  }

  if (!flags.pricing) {
    return (
      <Button asChild variant={variant} size={size} className={className}>
        <Link href={`/briefing?interest=${encodeURIComponent(slug)}`}>
          {copy.commerce.briefingCta}
        </Link>
      </Button>
    )
  }

  const query = new URLSearchParams({ kind, slug })
  if (billing) query.set('billing', billing)

  return (
    <Button asChild variant={variant} size={size} className={className}>
      <Link href={`/checkout?${query.toString()}`}>{label}</Link>
    </Button>
  )
}
