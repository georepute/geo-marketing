import type { Metadata } from 'next'
import { Link } from '@/components/i18n/Link'
import { notFound } from 'next/navigation'
import { Price } from '@/components/commerce/Price'
import { BuyButton } from '@/components/commerce/BuyButton'
import { ConfidenceBadge } from '@/components/signal/ConfidenceBadge'
import { ProductScreen } from '@/components/product/ProductScreen'
import { PRODUCT_SCREEN } from '@/lib/visual/screens'
import { IntelligenceReadout } from '@/components/readout/IntelligenceReadout'
import { RoleProvider } from '@/components/readout/RoleLens'
import { Button } from '@/components/ui/Button'
import { getDictionary } from '@/lib/i18n/server'
import { flags } from '@/lib/flags'
import { getProduct, getProducts, getReadout } from '@/lib/api/client'

export async function generateStaticParams() {
  const products = await getProducts()
  return [
    ...products.data.entry,
    ...products.data.advanced,
    ...products.data.premium,
  ].map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = await getProduct(slug)
  if (!product.data) return { title: 'Product not found' }
  return {
    title: product.data.name,
    description: product.data.businessQuestion,
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const copy = await getDictionary()
  const { slug } = await params
  const product = await getProduct(slug)
  if (!product.data) notFound()

  const p = product.data
  const readout = await getReadout(p.sampleReadoutId)

  /* Brief §9 — every one of the eleven required fields. A product is not
     purchasable without a sales call unless all of them are answered. */
  const fields: { label: string; value: React.ReactNode }[] = [
    { label: 'Business question', value: p.businessQuestion },
    { label: 'Decision consequence', value: p.decisionConsequence },
    {
      label: 'What it detects',
      value: (
        <ul className="space-y-2">
          {p.detects.map((d) => (
            <li key={d} className="flex gap-3">
              <span aria-hidden className="text-ink-3">
                ·
              </span>
              <span>{d}</span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      label: 'Required inputs',
      value: (
        <ul className="space-y-2">
          {p.requiredInputs.map((d) => (
            <li key={d} className="flex gap-3">
              <span aria-hidden className="text-ink-3">
                ·
              </span>
              <span>{d}</span>
            </li>
          ))}
        </ul>
      ),
    },
    { label: 'Scope', value: p.scope },
    { label: 'Intelligence depth', value: p.depth },
    {
      label: 'Delivery',
      value: (
        <ul className="space-y-2">
          {p.delivery.map((d) => (
            <li key={d} className="flex gap-3">
              <span aria-hidden className="text-ink-3">
                ·
              </span>
              <span>{d}</span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      label: 'Confidence',
      value: <ConfidenceBadge confidence={p.confidence} />,
    },
    { label: 'Time to delivery', value: p.timeToDelivery },
    /* Doc §4: the figure is withheld, but the field is not — a product page
       that simply omits the commercial line reads as an oversight. */
    flags.pricing
      ? {
          label: 'Price',
          value: <Price amount={p.priceUsd} period="one-time" size="sm" />,
        }
      : {
          label: 'Commercial terms',
          value: copy.commerce.termsOnRequest,
        },
    { label: 'Upgrade path', value: p.upgradePath },
  ]

  return (
    <>
      {/* --- Header ---------------------------------------------------- */}
      <section className="gr-rail-wide pt-14 pb-10 lg:pt-16">
        <nav aria-label="Breadcrumb" className="mb-7">
          <Link
            href="/marketplace"
            className="text-caption text-ink-3 hover:text-ink-2 transition-colors"
          >
            <span aria-hidden className="gr-arrow">←</span> Intelligence
            Marketplace
          </Link>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] items-start">
          <div>
            <p className="text-label uppercase text-brand-300 capitalize">
              {p.tier} · {p.depth}
            </p>
            <h1 className="text-display-2 text-ink mt-5 text-balance">
              {p.name}
            </h1>
            <p className="text-body-lg text-ink-2 mt-6 max-w-2xl">
              {p.businessQuestion}
            </p>
            <p className="text-body text-ink-2 mt-5 max-w-2xl">
              {p.decisionConsequence}
            </p>
          </div>

          {/* --- Purchase panel ---------------------------------------- */}
          <aside className="rounded-md border border-line bg-panel p-6 lg:sticky lg:top-24">
            {flags.pricing ? (
              <>
                <Price amount={p.priceUsd} period="one-time" size="lg" />
                <p className="text-caption text-ink-3 mt-2">
                  One-time purchase. Placeholder pricing.
                </p>
              </>
            ) : (
              <>
                <p className="text-h3 text-ink">{p.timeToDelivery}</p>
                <p className="text-caption text-ink-3 mt-2">
                  {copy.commerce.termsOnRequestLong}
                </p>
              </>
            )}

            <BuyButton
              kind="product"
              slug={p.slug}
              label="Buy this intelligence product"
              size="lg"
              className="w-full mt-5"
            />

            <dl className="mt-6 pt-5 border-t border-line space-y-4">
              <Row label="Depth" value={p.depth} />
              <Row label="Delivery" value={p.timeToDelivery} />
              <Row
                label="Confidence"
                value={<ConfidenceBadge confidence={p.confidence} />}
              />
            </dl>

            <p className="text-caption text-ink-3 mt-5 pt-5 border-t border-line">
              {p.upgradePath}
            </p>
          </aside>
        </div>
      </section>

      {/* --- The eleven §9 fields --------------------------------------- */}
      <section className="gr-hairline">
        <div className="gr-rail-wide gr-section">
          <p className="text-label uppercase text-ink-3">Product detail</p>
          <h2 className="text-h1 text-ink mt-3 mb-8">
            Everything needed to decide, without a sales call
          </h2>

          <dl className="grid gap-px bg-line border border-line rounded-md overflow-hidden md:grid-cols-2">
            {fields.map((field) => (
              <div key={field.label} className="bg-panel p-5">
                <dt className="text-label uppercase text-ink-3">
                  {field.label}
                </dt>
                <dd className="text-caption text-ink-2 mt-3">
                  {field.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* --- Sample outcome --------------------------------------------- */}
      {readout.data ? (
        <section className="gr-hairline">
          <div className="gr-rail-wide gr-section">
            <p className="text-label uppercase text-ink-3">
              What you receive
            </p>
            <h2 className="text-h1 text-ink mt-3 max-w-3xl text-balance">
              A real readout from this product, on seeded data
            </h2>
            <p className="text-body text-ink-2 mt-4 max-w-2xl mb-8">
              Every intelligence product returns the same twelve-section
              anatomy: executive truth, business meaning, evidence, connected
              signals, competitor context, commercial exposure, timing, trend,
              prescription, expected movement, owner and measurement.
            </p>

            {/* Doc §2: the delivered report as it actually appears, above
                the live readout that shows its anatomy. */}
            {PRODUCT_SCREEN[p.slug] ? (
              <div className="mb-8">
                <ProductScreen
                  id={PRODUCT_SCREEN[p.slug]!}
                  sizes="(min-width: 1024px) 75vw, 100vw"
                />
              </div>
            ) : null}

            <RoleProvider role="executive">
              <div className="rounded-md border border-line bg-panel p-6 md:p-8">
                <IntelligenceReadout readout={readout.data} variant="full" />
              </div>
            </RoleProvider>
          </div>
        </section>
      ) : null}

      {/* --- Close ------------------------------------------------------ */}
      <section className="gr-hairline">
        <div className="gr-rail gr-section text-center">
          <h2 className="text-display-2 text-ink max-w-2xl mx-auto text-balance">
            {copy.finalCta}
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mt-9">
            <BuyButton
              kind="product"
              slug={p.slug}
              label={`Buy ${p.name}`}
              size="lg"
            />
            <Button asChild variant="secondary" size="lg">
              {flags.pricing ? (
                <Link href="/pricing">Compare with a subscription</Link>
              ) : (
                <Link href="/marketplace">See the full ecosystem</Link>
              )}
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

function Row({
  label,
  value,
}: {
  label: string
  value: React.ReactNode
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <dt className="text-caption text-ink-3">{label}</dt>
      <dd className="text-caption text-ink text-end">{value}</dd>
    </div>
  )
}
