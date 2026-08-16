import type { Metadata } from 'next'
import { getT } from '@/lib/i18n/content/translator'
import { MissionControl } from './MissionControl'
import {
  getOrg,
  getMissionTiles,
  getFeed,
  getCausalChain,
  getReadouts,
  getActions,
} from '@/lib/api/client'

/* generateMetadata, not a static export: a module-scope constant is
   evaluated once at import time, when no locale exists yet. */
export async function generateMetadata(): Promise<Metadata> {
  const t = await getT()
  return {
    title: t('Executive Mission Control'),
    description: t(
      'Decision Health, revenue exposure, competitive capture, narrative control and strategic timing in one decision position.',
    ),
  }
}

export default async function MissionControlPage() {
  const [org, tiles, feed, chain, readouts, actions] = await Promise.all([
    getOrg(),
    getMissionTiles(),
    getFeed(),
    getCausalChain(),
    getReadouts(),
    getActions(),
  ])

  return (
    <MissionControl
      org={org.data}
      asOf={org.asOf}
      tiles={tiles.data}
      feed={feed.data}
      chain={chain.data}
      readouts={readouts.data}
      actions={actions.data}
    />
  )
}
