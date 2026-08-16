import type { Metadata } from 'next'
import { getT } from '@/lib/i18n/content/translator'
import { CampaignReadinessView } from './CampaignReadinessView'
import { getCampaignReadiness, getOrg } from '@/lib/api/client'

/* generateMetadata, not a static export: a module-scope constant is
   evaluated once at import time, when no locale exists yet. */
export async function generateMetadata(): Promise<Metadata> {
  const t = await getT()
  return {
    title: t('Campaign Readiness Intelligence'),
    description: t(
      'Should we launch this campaign today? A pre-campaign assessment of the business rather than the campaign — AI, authority, trust, narrative, competitive position and destination readiness, weighted into one decision.',
    ),
  }
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
