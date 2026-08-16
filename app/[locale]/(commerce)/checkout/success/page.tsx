import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Success } from './Success'
import { flags } from '@/lib/flags'

export const metadata: Metadata = {
  title: 'Purchase complete',
  robots: { index: false, follow: false },
}

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ order?: string }>
}) {
  /* Unreachable while checkout is withheld (doc §4), and it echoes the order
     back — so it is gated alongside it rather than left open. */
  if (!flags.pricing) notFound()

  const { order } = await searchParams
  return <Success orderId={order ?? null} />
}
