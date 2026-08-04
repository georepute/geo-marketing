import type {
  CheckoutAdapter,
  CheckoutRequest,
  CheckoutResult,
  Entitlement,
  Order,
} from './types'

/* ============================================================================
   Mock checkout — the v1 implementation of CheckoutAdapter.

   THIS IS THE SEAM. No card is collected, no network call is made, no money
   moves. What it does faithfully reproduce is the SHAPE of a real checkout:
   an order id, a timestamp, a status and the entitlements the purchase grants.

   Swapping in Stripe means implementing this interface against their SDK.
   No screen changes, because no screen knows an adapter exists.
   ========================================================================= */

/** Deterministic order id — no Math.random, so renders stay reproducible. */
function orderId(request: CheckoutRequest, at: number): string {
  const seed = `${request.line.kind}:${request.line.slug}:${at}`
  let hash = 0
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0
  }
  return `GR-${hash.toString(36).toUpperCase().padStart(8, '0').slice(0, 8)}`
}

export const mockCheckout: CheckoutAdapter = {
  async submit(request: CheckoutRequest): Promise<CheckoutResult> {
    // A brief pause so the pending state is exercised rather than skipped.
    await new Promise((resolve) => setTimeout(resolve, 650))

    const at = Date.now()
    const placedAt = new Date(at).toISOString()

    const order: Order = {
      id: orderId(request, at),
      line: request.line,
      email: request.email,
      placedAt,
      status: 'complete',
    }

    const entitlement: Entitlement = {
      kind: request.line.kind,
      slug: request.line.slug,
      name: request.line.name,
      grantedAt: placedAt,
      orderId: order.id,
    }

    return { order, entitlements: [entitlement] }
  },
}

/* --------------------------------------------------------------------------
   Persistence. localStorage keeps a demonstration alive across a reload,
   which matters when someone is walking a room through the product. A reset
   control is always available (plan §7 Q9).
   ------------------------------------------------------------------------ */

const STORAGE_KEY = 'gr.entitlements.v1'
const ORDERS_KEY = 'gr.orders.v1'

export function readEntitlements(): Entitlement[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as Entitlement[]) : []
  } catch {
    return []
  }
}

export function writeEntitlements(entitlements: Entitlement[]): void {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entitlements))
  } catch {
    /* Storage unavailable — the demo still works, it just will not persist. */
  }
}

export function readOrders(): Order[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(ORDERS_KEY)
    return raw ? (JSON.parse(raw) as Order[]) : []
  } catch {
    return []
  }
}

export function appendOrder(order: Order): void {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(
      ORDERS_KEY,
      JSON.stringify([...readOrders(), order]),
    )
  } catch {
    /* no-op */
  }
}

export function resetDemo(): void {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.removeItem(STORAGE_KEY)
    window.localStorage.removeItem(ORDERS_KEY)
  } catch {
    /* no-op */
  }
}
