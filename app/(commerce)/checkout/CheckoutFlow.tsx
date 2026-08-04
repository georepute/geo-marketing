'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Wordmark } from '@/components/shell/Wordmark'
import { Button } from '@/components/ui/Button'
import { Price } from '@/components/commerce/Price'
import { useEntitlements } from '@/components/commerce/EntitlementProvider'
import { mockCheckout, appendOrder } from '@/lib/commerce/mock-checkout'
import { catalogPrice } from '@/lib/format'
import { cn } from '@/lib/utils/cn'
import type { CheckoutLine } from '@/lib/commerce/types'

/* ============================================================================
   Mock checkout — brief §10.1, both purchase paths.

   No card is collected and no money moves. What is faithfully reproduced is
   the SHAPE: line item, billing choice, order confirmation, entitlement grant.
   The card fields are deliberately absent rather than faked — a disabled
   card form that looks real is worse than an honest explanation.
   ========================================================================= */

export function CheckoutFlow({
  line,
  annualUsd,
}: {
  line: CheckoutLine
  /** Present for plans, enabling the monthly/annual switch. */
  annualUsd?: number
}) {
  const router = useRouter()
  const { grant } = useEntitlements()
  const [email, setEmail] = useState('')
  const [billing, setBilling] = useState<'monthly' | 'annual'>(
    line.billing ?? 'monthly',
  )
  const [pending, setPending] = useState(false)

  const isPlan = line.kind === 'plan'
  const amount =
    isPlan && billing === 'annual' && annualUsd ? annualUsd : line.priceUsd

  async function submit(event: React.FormEvent) {
    event.preventDefault()
    if (pending) return
    setPending(true)

    const result = await mockCheckout.submit({
      line: { ...line, priceUsd: amount, billing: isPlan ? billing : undefined },
      email: email.trim() || 'demo@northwindsupply.com',
    })

    appendOrder(result.order)
    grant(result.entitlements)
    router.push(`/checkout/success?order=${result.order.id}`)
  }

  return (
    <div className="min-h-dvh flex flex-col bg-canvas">
      <header className="border-b border-line">
        <div className="gr-rail flex items-center justify-between h-16">
          <Wordmark />
          <Link
            href={isPlan ? '/pricing' : '/marketplace'}
            className="text-caption text-ink-2 hover:text-ink transition-colors"
          >
            ← Back
          </Link>
        </div>
      </header>

      <main id="main" className="flex-1 gr-rail py-14">
        <p className="text-label uppercase text-brand-300">Checkout</p>
        <h1 className="text-display-2 text-ink mt-4">Confirm your purchase</h1>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] items-start">
          {/* --- Form ------------------------------------------------- */}
          <form onSubmit={submit} className="rounded-md border border-line bg-panel p-6">
            <label htmlFor="gr-email" className="text-label uppercase text-ink-3">
              Work email
            </label>
            <input
              id="gr-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="demo@northwindsupply.com"
              autoComplete="email"
              className={cn(
                'mt-3 w-full rounded-sm border border-line bg-inset px-4 py-3',
                'text-body text-ink font-mono placeholder:text-ink-3',
                'focus:border-brand-400 outline-none transition-colors',
              )}
            />

            {isPlan && annualUsd ? (
              <fieldset className="mt-7">
                <legend className="text-label uppercase text-ink-3 mb-3">
                  Billing period
                </legend>
                <div className="grid gap-3 sm:grid-cols-2">
                  {(
                    [
                      ['monthly', line.priceUsd, 'per month'],
                      ['annual', annualUsd, 'per year'],
                    ] as const
                  ).map(([id, value, suffix]) => (
                    <label
                      key={id}
                      className={cn(
                        'flex items-center gap-3 rounded-sm border p-4 cursor-pointer',
                        'transition-colors duration-[var(--gr-dur-fast)]',
                        billing === id
                          ? 'border-brand-400 bg-inset'
                          : 'border-line hover:border-line-strong',
                      )}
                    >
                      <input
                        type="radio"
                        name="billing"
                        value={id}
                        checked={billing === id}
                        onChange={() => setBilling(id)}
                        className="accent-[var(--gr-brand-400)]"
                      />
                      <span className="min-w-0">
                        <span className="block text-body text-ink capitalize">
                          {id}
                        </span>
                        <span
                          className="block text-caption text-ink-3 mt-1"
                          data-numeric=""
                        >
                          {catalogPrice(value)} {suffix}
                        </span>
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>
            ) : null}

            {/* --- The honest bit ------------------------------------- */}
            <div
              className="mt-7 rounded-sm border p-4"
              style={{
                borderColor:
                  'color-mix(in oklab, var(--gr-warning) 34%, transparent)',
                background:
                  'color-mix(in oklab, var(--gr-warning) 7%, transparent)',
              }}
            >
              <p className="text-label uppercase text-ink-3">
                Demonstration checkout
              </p>
              <p className="text-caption text-ink-2 mt-2">
                No payment details are collected and no charge is made. This
                flow reproduces the shape of a real purchase — order, receipt
                and entitlement — behind a mock adapter. A payment processor
                drops in without changing this screen.
              </p>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={pending}
              className="w-full mt-7"
            >
              {pending ? 'Completing purchase…' : 'Complete purchase'}
            </Button>
          </form>

          {/* --- Summary ---------------------------------------------- */}
          <aside className="rounded-md border border-line bg-panel p-6 lg:sticky lg:top-8">
            <p className="text-label uppercase text-ink-3">Order summary</p>

            <div className="mt-5 pb-5 border-b border-line">
              <p className="text-h3 text-ink">{line.name}</p>
              <p className="text-caption text-ink-2 mt-2">{line.description}</p>
            </div>

            <dl className="py-5 space-y-3 border-b border-line">
              <div className="flex items-center justify-between gap-3">
                <dt className="text-caption text-ink-2">
                  {isPlan
                    ? `Subscription · ${billing}`
                    : 'One-time purchase'}
                </dt>
                <dd>
                  <Price
                    amount={amount}
                    period={
                      isPlan
                        ? billing === 'annual'
                          ? 'year'
                          : 'month'
                        : 'one-time'
                    }
                    size="sm"
                  />
                </dd>
              </div>
            </dl>

            <div className="pt-5 flex items-baseline justify-between gap-3">
              <span className="text-label uppercase text-ink-3">
                Due today
              </span>
              <Price amount={amount} size="md" />
            </div>

            <p className="text-caption text-ink-3 mt-5">
              Placeholder pricing. Cancel any time; a scan price may be credited
              toward a first subscription period.
            </p>
          </aside>
        </div>
      </main>
    </div>
  )
}
