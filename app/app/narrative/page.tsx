import type { Metadata } from 'next'
import { NarrativeView } from './NarrativeView'
import {
  getElectionIntelligence,
  getNarrativeIntelligence,
  getOrg,
} from '@/lib/api/client'

export const metadata: Metadata = {
  title: 'Public Narrative Intelligence',
  description:
    'What story is the market telling about us, and how is it influencing decisions? Active narratives, who owns each one, where they are heading, and what should change.',
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
