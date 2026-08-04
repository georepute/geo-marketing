import type { Metadata } from 'next'
import { Success } from './Success'

export const metadata: Metadata = {
  title: 'Purchase complete',
  robots: { index: false, follow: false },
}

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ order?: string }>
}) {
  const { order } = await searchParams
  return <Success orderId={order ?? null} />
}
