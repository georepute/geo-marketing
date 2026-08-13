import type { Metadata } from 'next'
import { Link } from '@/components/i18n/Link'
import { notFound } from 'next/navigation'
import { Price } from '@/components/commerce/Price'
import { BuyButton } from '@/components/commerce/BuyButton'
import { ImageWithScrim } from '@/components/visual/ImageWithScrim'
import { BrandBadge, GlassCard } from '@/components/visual/Primitives'
import { Button } from '@/components/ui/Button'
import { catalogPrice } from '@/lib/format'
import { getPlans, getProducts } from '@/lib/api/client'
import { flags } from '@/lib/flags'
import { cn } from '@/lib/utils/cn'

/* ============================================================================
   WITHHELD — doc §4 and §7.

   This page is intact and unmodified below the guard. It is hidden, not
   removed: the final GeoRepute pricing structure has not been supplied, and
   the figures currently in this file are placeholders invented for the
   demonstration. Publishing them would be publishing pricing.

   To bring it back:  NEXT_PUBLIC_SHOW_PRICING=true, then rebuild.
   ========================================================================= */

export const metadata: Metadata = {
  title: 'Pricing and Plans',
  description:
    'Subscription plans, add-ons and one-time intelligence products. Understand, configure and purchase without a sales dependency.',
  /* Belt and braces: if the route is ever reachable while withheld, it must
     not enter an index. */
  robots: flags.pricing ? undefined : { index: false, follow: false },
}

/* Brief §10.3. Placeholder pricing — the brief names no figures. */
const ADD_ONS = [
  { name: 'Additional domain', priceUsd: 190, period: 'month' },
  { name: 'Additional market or region', priceUsd: 140, period: 'month' },
  { name: 'Additional competitor set', priceUsd: 90, period: 'month' },
  { name: 'Additional AI engine', priceUsd: 120, period: 'month' },
  { name: 'Historical backfill', priceUsd: 650, period: 'one-time' },
  { name: 'Expert interpretation', priceUsd: 900, period: 'one-time' },
  { name: 'White-label export', priceUsd: 240, period: 'month' },
] as const

export default async function PricingPage() {
  if (!flags.pricing) notFound()

  const [plans, products] = await Promise.all([getPlans(), getProducts()])
  const cheapestProduct = Math.min(
    ...[
      ...products.data.entry,
      ...products.data.advanced,
      ...products.data.premium,
    ].map((p) => p.priceUsd),
  )

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <ImageWithScrim
          image="circuitry"
          scrim="heavy"
          priority
          sizes="100vw"
          className="-z-10"
        />
        <div
          aria-hidden
          className="absolute inset-0 gr-dotgrid opacity-40 -z-10"
        />
        <div className="gr-rail-wide relative pt-20 pb-16 lg:pt-24 lg:pb-20">
        <p className="text-label uppercase text-brand-300">Pricing</p>
        <h1 className="text-display-1 text-ink mt-6 max-w-3xl text-balance">
          Understand, configure and purchase without a sales dependency.
        </h1>
        <p className="text-body-lg text-ink-2 mt-6 max-w-2xl">
          Continuous access to the platform, or a single focused diagnostic. The
          price of a scan may be credited toward a first subscription period.
        </p>

        <div
          className="mt-8 rounded-md border p-4 max-w-2xl"
          style={{
            borderColor:
              'color-mix(in oklab, var(--gr-warning) 34%, transparent)',
            background:
              'color-mix(in oklab, var(--gr-warning) 7%, transparent)',
          }}
        >
          <p className="text-label uppercase text-ink-3">
            Placeholder pricing
          </p>
          <p className="text-caption text-ink-2 mt-2">
            The source brief specifies no plans or prices. Every figure on this
            page is invented for the demonstration and should be replaced with
            real commercial terms before launch.
          </p>
        </div>
        </div>
      </section>

      {/* --- Plans ------------------------------------------------------ */}
      <section className="gr-hairline">
        <div className="gr-rail-wide gr-section">
          <div className="grid gap-4 lg:grid-cols-3">
            {plans.data.map((plan) => (
              <GlassCard
                key={plan.slug}
                className={cn(
                  'p-6 flex flex-col relative',
                  plan.highlight && 'border-brand-400',
                )}
              >
                {/* The one plan carrying a glow rim. If every card glowed,
                    none of them would read as recommended. */}
                {plan.highlight ? (
                  <>
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -inset-px rounded-[9px] -z-10 opacity-70"
                      style={{
                        background:
                          'linear-gradient(140deg, var(--gr-brand-400), transparent 45%, var(--gr-accent-500))',
                      }}
                    />
                    <BrandBadge className="absolute -top-2.5 start-6">
                      Most complete
                    </BrandBadge>
                  </>
                ) : null}

                <p className="text-h3 text-ink">{plan.name}</p>
                <p className="text-caption text-ink-2 mt-2">{plan.tagline}</p>

                <div className="mt-6">
                  <Price amount={plan.monthlyUsd} period="month" size="lg" />
                  <p className="text-caption text-ink-3 mt-2" data-numeric="">
                    or {catalogPrice(plan.annualUsd)} annually — saves{' '}
                    {catalogPrice(plan.monthlyUsd * 12 - plan.annualUsd)}
                  </p>
                </div>

                <dl className="mt-6 pt-5 border-t border-line grid grid-cols-2 gap-4">
                  <div>
                    <dt className="text-label uppercase text-ink-3">Domains</dt>
                    <dd className="text-data text-ink mt-2" data-numeric="">
                      {plan.domains}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-label uppercase text-ink-3">Seats</dt>
                    <dd className="text-data text-ink mt-2" data-numeric="">
                      {plan.seats}
                    </dd>
                  </div>
                </dl>

                <ul className="mt-6 pt-5 border-t border-line space-y-3 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span
                        aria-hidden
                        className="text-ink-3 shrink-0 mt-1"
                        style={{ color: 'var(--gr-positive)' }}
                      >
                        ✓
                      </span>
                      <span className="text-caption text-ink-2">{feature}</span>
                    </li>
                  ))}
                </ul>

                <BuyButton
                  kind="plan"
                  slug={plan.slug}
                  billing="monthly"
                  label={`Choose ${plan.name}`}
                  variant={plan.highlight ? 'primary' : 'secondary'}
                  size="lg"
                  className="w-full mt-7"
                />
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* --- Add-ons ---------------------------------------------------- */}
      <section className="gr-hairline">
        <div className="gr-rail-wide gr-section">
          <p className="text-label uppercase text-brand-300">Add-ons</p>
          <h2 className="text-h1 text-ink mt-3">Extend any plan</h2>
          <p className="text-body text-ink-2 mt-4 max-w-2xl mb-8">
            Add-ons apply to variable-cost or exceptional processing only. Core
            value stays predictable within each plan, and every cost is shown
            before it is incurred.
          </p>

          <dl className="grid gap-px bg-line border border-line rounded-md overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
            {ADD_ONS.map((addOn) => (
              <div key={addOn.name} className="bg-panel p-5">
                <dt className="text-caption text-ink-2">{addOn.name}</dt>
                <dd className="mt-3">
                  <Price
                    amount={addOn.priceUsd}
                    period={addOn.period === 'month' ? 'month' : 'one-time'}
                    size="sm"
                  />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* --- Or buy once ------------------------------------------------ */}
      <section className="gr-hairline">
        <div className="gr-rail gr-section text-center">
          <p className="text-label uppercase text-brand-300">
            Not ready to subscribe
          </p>
          <h2 className="text-display-2 text-ink mt-4 max-w-2xl mx-auto text-balance">
            Buy a single intelligence product instead.
          </h2>
          <p className="text-body-lg text-ink-2 mt-5 max-w-xl mx-auto">
            A focused diagnostic starts at {catalogPrice(cheapestProduct)}. The price
            may be credited toward a first subscription period.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-9">
            <Button asChild variant="primary" size="lg">
              <Link href="/marketplace">Browse intelligence products</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/app/reconstruct">See the platform first</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
