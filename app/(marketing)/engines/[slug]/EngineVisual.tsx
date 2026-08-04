'use client'

import { AIRecognitionMatrix } from '@/components/viz/AIRecognitionMatrix'
import { GoogleVsAIGapMatrix } from '@/components/viz/GoogleVsAIGapMatrix'
import { RecommendationShare } from '@/components/viz/RecommendationShare'
import { ActionCard } from '@/components/action/ActionCard'
import type {
  Action,
  Competitor,
  EngineMatrixRow,
  GapRow,
} from '@/lib/api/types'

/* ============================================================================
   Each engine gets its OWN signature visual. Plan §6 acceptance for M6:
   "4 distinct questions, 4 distinct seeded outcomes, zero duplicated visuals."

   Reusing one chart across four engines is precisely how a platform starts to
   feel like a template — so the switch below is exhaustive by design.
   ========================================================================= */

export function EngineVisual({
  slug,
  engineMatrix,
  gaps,
  competitors,
  unattributedPct,
  actions,
}: {
  slug: string
  engineMatrix: EngineMatrixRow[]
  gaps: GapRow[]
  competitors: Competitor[]
  unattributedPct: number
  actions: Action[]
}) {
  switch (slug) {
    case 'ai-recognition':
      return <AIRecognitionMatrix rows={engineMatrix} />

    case 'google-vs-ai':
      return <GoogleVsAIGapMatrix rows={gaps} />

    case 'competitor-decision':
      return (
        <RecommendationShare
          competitors={competitors}
          unattributedPct={unattributedPct}
        />
      )

    case 'action':
      return (
        <div className="grid gap-4">
          {actions.slice(0, 3).map((action, i) => (
            <ActionCard key={action.id} action={action} rank={i + 1} />
          ))}
        </div>
      )

    default:
      return null
  }
}
