import type { Metadata } from 'next'
import { Price } from '@/components/commerce/Price'
import { FeatureCard } from '@/components/visual/FeatureCard'
import { ImageWithScrim } from '@/components/visual/ImageWithScrim'
import { TIER_IMAGE } from '@/lib/visual/imagery'
import { copy } from '@/lib/copy/en'
import { getProducts } from '@/lib/api/client'
import type { IntelligenceProduct } from '@/lib/api/types'

export const metadata: Metadata = {
  title: 'Intelligence Marketplace',
  // Composed from the copy module rather than retyped — §19 strings have one
  // source of truth, including in metadata.
  description: `${copy.marketplace} ${copy.home.marketplaceSub}`,
}

const TIERS = [
  {
    key: 'entry' as const,
    label: 'Entry',
    note: 'A fast, focused examination of one business question.',
  },
  {
    key: 'advanced' as const,
    label: 'Advanced',
    note: 'A deeper explanation of why a condition exists, with a structured comparison.',
  },
  {
    key: 'premium' as const,
    label: 'Premium',
    note: 'An executive interpretation designed for action, with expert review.',
  },
]

export default async function MarketplacePage() {
  const products = await getProducts()
  const groups = {
    entry: products.data.entry,
    advanced: products.data.advanced,
    premium: products.data.premium,
  }
  const total =
    groups.entry.length + groups.advanced.length + groups.premium.length

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <ImageWithScrim
          image="board"
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
          <p className="text-label uppercase text-brand-300">
            Intelligence marketplace
          </p>
          <h1 className="text-display-1 text-ink mt-6 max-w-3xl text-balance">
            {copy.marketplace}
          </h1>
          <p className="text-body-lg text-ink-2 mt-6 max-w-2xl">
            Monitor continuously when the decision becomes strategic. Every
            product states the question it answers, what it detects, what it
            needs from you, how confident it can be and what it costs — no
            sales call required.
          </p>
          <p className="text-caption text-ink-3 mt-6" data-numeric="">
            {total} intelligence products across three depths.
          </p>
        </div>
      </section>

      {TIERS.map((tier) => (
        <section key={tier.key} className="gr-hairline">
          <div className="gr-rail-wide gr-section">
            <div className="flex flex-wrap items-baseline justify-between gap-4 mb-8">
              <div>
                <p className="text-label uppercase text-brand-300">
                  {tier.label}
                </p>
                <p className="text-body-lg text-ink-2 mt-3 max-w-xl">
                  {tier.note}
                </p>
              </div>
              <span className="text-label uppercase text-ink-3" data-numeric="">
                {groups[tier.key].length} products
              </span>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {groups[tier.key].map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  )
}

function ProductCard({ product }: { product: IntelligenceProduct }) {
  return (
    <FeatureCard
      href={`/marketplace/${product.slug}`}
      image={TIER_IMAGE[product.tier]}
      iconKey={product.tier}
      eyebrow={product.depth}
      title={product.name}
      description={product.businessQuestion}
      footer={<Price amount={product.priceUsd} period="one-time" size="sm" />}
    />
  )
}
