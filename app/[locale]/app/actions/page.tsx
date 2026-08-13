import type { Metadata } from 'next'
import { ActionCenter } from './ActionCenter'
import { getOrg, getActions, getReadouts } from '@/lib/api/client'

export const metadata: Metadata = {
  title: 'Strategic Action Center',
  description:
    'Prioritised interventions with owner, deadline, expected movement and how impact is verified after execution.',
}

export default async function ActionsPage() {
  const [org, actions, readouts] = await Promise.all([
    getOrg(),
    getActions(),
    getReadouts(),
  ])

  return (
    <ActionCenter
      org={org.data}
      asOf={org.asOf}
      actions={actions.data}
      readouts={readouts.data}
    />
  )
}
