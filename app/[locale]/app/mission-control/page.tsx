import type { Metadata } from 'next'
import { MissionControl } from './MissionControl'
import {
  getOrg,
  getMissionTiles,
  getFeed,
  getCausalChain,
  getReadouts,
  getActions,
} from '@/lib/api/client'

export const metadata: Metadata = {
  title: 'Executive Mission Control',
  description:
    'Decision Health, revenue exposure, competitive capture, narrative control and strategic timing in one decision position.',
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
