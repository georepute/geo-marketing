import type { Metadata } from 'next'
import { getT } from '@/lib/i18n/content/translator'
import { NarrativeView } from './NarrativeView'
import {
  getElectionIntelligence,
  getNarrativeIntelligence,
  getOrg,
} from '@/lib/api/client'

/* generateMetadata, not a static export: a module-scope constant is
   evaluated once at import time, when no locale exists yet. */
export async function generateMetadata(): Promise<Metadata> {
  const t = await getT()
  return {
    title: t('Public Narrative Intelligence'),
    description: t(
      'What story is the market telling about us, and how is it influencing decisions? Active narratives, who owns each one, where they are heading, and what should change.',
    ),
  }
}

export default async function NarrativePage() {
  const [org, intel, election] = await Promise.all([
    getOrg(),
    getNarrativeIntelligence(),
    getElectionIntelligence(),
  ])

  return (
    <NarrativeView
      org={org.data}
      asOf={org.asOf}
      intel={intel.data}
      election={election.data}
    />
  )
}
