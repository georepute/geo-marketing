import type { Metadata } from 'next'
import { getT } from '@/lib/i18n/content/translator'
import { notFound } from 'next/navigation'
import { Reconstruct } from './Reconstruct'
import { reconstructQuestion } from './actions'
import {
  getOrg,
  getReconstructableQuestions,
  getReconstruction,
  getDecisionGraph,
  getReadouts,
} from '@/lib/api/client'

/* generateMetadata, not a static export: a module-scope constant is
   evaluated once at import time, when no locale exists yet. */
export async function generateMetadata(): Promise<Metadata> {
  const t = await getT()
  return {
    title: t('Decision Reconstruction'),
    description: t(
      'Enter a domain and select a commercial question. Reconstruct what each AI engine understood, who received the decision, why, and what must change.',
    ),
  }
}

export default async function ReconstructPage() {
  const [org, questions, graph, readouts] = await Promise.all([
    getOrg(),
    getReconstructableQuestions(),
    getDecisionGraph(),
    getReadouts(),
  ])

  const first = questions.data[0]
  if (!first) notFound()

  const initial = await getReconstruction(first.id)
  if (!initial.data) notFound()

  return (
    <Reconstruct
      org={org.data}
      asOf={org.asOf}
      questions={questions.data}
      initial={initial.data}
      graph={graph.data}
      readouts={readouts.data}
      fetchReconstruction={reconstructQuestion}
    />
  )
}
