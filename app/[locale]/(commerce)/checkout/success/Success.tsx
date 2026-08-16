'use client'

import { Link } from '@/components/i18n/Link'
import { Wordmark } from '@/components/shell/Wordmark'
import { Button } from '@/components/ui/Button'
import { useEntitlements } from '@/components/commerce/EntitlementProvider'
import { dateFull } from '@/lib/format'

/* ============================================================================
   Purchase confirmation. Brief §11.4 — the product-to-SaaS conversion path
   starts here: the customer sees what was unlocked and where to use it.
   ========================================================================= */

export function Success({ orderId }: { orderId: string | null }) {
  const { entitlements, ready, reset } = useEntitlements()
  const latest = entitlements[entitlements.length - 1]

  return (
    <div className="min-h-dvh flex flex-col bg-canvas">
      <header className="border-b border-line">
        <div className="gr-rail flex items-center h-16">
          <Wordmark />
        </div>
      </header>

      <main id="main" className="flex-1 gr-rail py-16">
        <div className="max-w-2xl">
          <span
            aria-hidden
            className="grid place-items-center size-11 rounded-full"
            style={{
              background:
                'color-mix(in oklab, var(--gr-positive) 16%, transparent)',
              border:
                '1px solid color-mix(in oklab, var(--gr-positive) 40%, transparent)',
              color: 'var(--gr-positive)',
            }}
          >
            ✓
          </span>

          <h1 className="text-display-2 text-ink mt-6">Purchase complete</h1>
          <p className="text-body-lg text-ink-2 mt-4">
            {ready && latest
              ? `${latest.name} is now available in your workspace.`
              : 'Your intelligence is now available in your workspace.'}
          </p>

          {/* --- Receipt --------------------------------------------- */}
          <dl className="mt-9 rounded-md border border-line bg-panel divide-y divide-[var(--gr-line-subtle)]">
            <Row label="Order" value={orderId ?? '—'} mono />
            {ready && latest ? (
              <>
                <Row label="Item" value={latest.name} />
                <Row
                  label="Type"
                  value={
                    latest.kind === 'plan'
                      ? 'Subscription'
                      : 'One-time intelligence product'
                  }
                />
                <Row
                  label="Granted"
                  value={dateFull(latest.grantedAt.slice(0, 10))}
                  mono
                />
              </>
            ) : null}
          </dl>

          <p className="text-caption text-ink-3 mt-4">
            No payment was taken. This is a demonstration environment; the
            entitlement is stored locally in your browser.
          </p>

          {/* --- Where to go next ------------------------------------ */}
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild variant="primary" size="lg">
              <Link href="/app/mission-control">Open Mission Control</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/app/reconstruct">Reconstruct a decision</Link>
            </Button>
          </div>

          {/* --- Entitlements held ----------------------------------- */}
          {ready && entitlements.length > 0 ? (
            <section className="mt-14 pt-8 border-t border-line">
              <p className="text-label uppercase text-ink-3">
                Everything you hold
              </p>
              <ul className="mt-4 space-y-2">
                {entitlements.map((entitlement) => (
                  <li
                    key={`${entitlement.kind}:${entitlement.slug}`}
                    className="flex items-center justify-between gap-3 rounded-sm border border-line bg-panel px-4 py-3"
                  >
                    <span className="text-caption text-ink">
                      {entitlement.name}
                    </span>
                    <span className="text-label uppercase text-ink-3">
                      {entitlement.kind}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={reset}
                className="text-caption text-ink-3 hover:text-ink-2 underline underline-offset-4 mt-5 transition-colors"
              >
                Reset demonstration data
              </button>
            </section>
          ) : null}
        </div>
      </main>
    </div>
  )
}

function Row({
  label,
  value,
  mono,
}: {
  label: string
  value: string
  mono?: boolean
}) {
  return (
    <div className="flex items-center justify-between gap-4 px-5 py-4">
      <dt className="text-caption text-ink-3">{label}</dt>
      <dd
        className="text-caption text-ink text-end"
        {...(mono ? { 'data-numeric': '' } : {})}
      >
        {value}
      </dd>
    </div>
  )
}
