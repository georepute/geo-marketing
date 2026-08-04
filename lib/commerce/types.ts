/* ============================================================================
   Commerce seam. Plan §1: no real payments in v1, mocked behind a clean
   boundary so a real processor drops in without touching a screen.

   Every screen talks to `CheckoutAdapter`. `mock-checkout.ts` implements it
   today; a Stripe adapter implements the identical shape later.
   ========================================================================= */

export type PurchaseKind = 'plan' | 'product'

export interface CheckoutLine {
  kind: PurchaseKind
  slug: string
  name: string
  description: string
  /** Unit price in USD. A catalogue fact, not model output. */
  priceUsd: number
  /** Present for subscriptions only. */
  billing?: 'monthly' | 'annual'
}

export interface CheckoutRequest {
  line: CheckoutLine
  email: string
}

export interface Order {
  id: string
  line: CheckoutLine
  email: string
  /** ISO timestamp. Injected rather than generated, so tests stay stable. */
  placedAt: string
  status: 'complete'
}

/** What a completed purchase grants. Gates every locked surface. */
export interface Entitlement {
  kind: PurchaseKind
  slug: string
  name: string
  grantedAt: string
  orderId: string
}

export interface CheckoutResult {
  order: Order
  entitlements: Entitlement[]
}

export interface CheckoutAdapter {
  /** Never throws for a declined card in v1 — there is no card. */
  submit(request: CheckoutRequest): Promise<CheckoutResult>
}
