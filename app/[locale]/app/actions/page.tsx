import type { Metadata } from 'next'
import { ActionCenter } from './ActionCenter'
import { getOrg, getActions, getReadouts } from '@/lib/api/client'
import { getT } from '@/lib/i18n/content/translator'

/* generateMetadata, not a static export: a module-scope constant is evaluated
   once at import time, when no locale exists yet. */
export async function generateMetadata(): Promise<Metadata> {
  const t = await getT()
  return {
    title: t('Strategic Action Center'),
    description: t(
      'Prioritised interventions with owner, deadline, expected movement and how impact is verified after execution.',
    ),
  }
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
