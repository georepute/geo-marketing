import type { Metadata } from 'next'
import { CampaignReadinessView } from './CampaignReadinessView'
import { getCampaignReadiness, getOrg } from '@/lib/api/client'

export const metadata: Metadata = {
  title: 'Campaign Readiness Intelligence',
  description:
    'Should we launch this campaign today? A pre-campaign assessment of the business rather than the campaign — AI, authority, trust, narrative, competitive position and destination readiness, weighted into one decision.',
}

export default async function CampaignReadinessPage() {
  const [org, readiness] = await Promise.all([getOrg(), getCampaignReadiness()])

  return (
    <CampaignReadinessView
      org={org.data}
      asOf={org.asOf}
      readiness={readiness.data}
    />
  )
}
