import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CheckoutFlow } from './CheckoutFlow'
import { getPlan, getProduct } from '@/lib/api/client'
import type { CheckoutLine } from '@/lib/commerce/types'

export const metadata: Metadata = {
  title: 'Checkout',
  robots: { index: false, follow: false },
}

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: Promise<{ kind?: string; slug?: string; billing?: string }>
}) {
  const { kind, slug, billing } = await searchParams
  if (!kind || !slug) notFound()

  if (kind === 'plan') {
    const plan = await getPlan(slug)
    if (!plan.data) notFound()

    const line: CheckoutLine = {
      kind: 'plan',
      slug: plan.data.slug,
      name: `${plan.data.name} plan`,
      description: plan.data.tagline,
      priceUsd: plan.data.monthlyUsd,
      billing: billing === 'annual' ? 'annual' : 'monthly',
    }
    return <CheckoutFlow line={line} annualUsd={plan.data.annualUsd} />
  }

  if (kind === 'product') {
    const product = await getProduct(slug)
    if (!product.data) notFound()

    const line: CheckoutLine = {
      kind: 'product',
      slug: product.data.slug,
      name: product.data.name,
      description: product.data.businessQuestion,
      priceUsd: product.data.priceUsd,
    }
    return <CheckoutFlow line={line} />
  }

  notFound()
}
