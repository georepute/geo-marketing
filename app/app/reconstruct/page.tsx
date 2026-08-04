import type { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: 'Decision Reconstruction',
  description:
    'Enter a domain and select a commercial question. Reconstruct what each AI engine understood, who received the decision, why, and what must change.',
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
