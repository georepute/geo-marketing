'use server'

import { getReconstruction } from '@/lib/api/client'
import type { Reconstruction } from '@/lib/api/types'

/**
 * Server action backing the question selector.
 *
 * Deliberately a server round-trip rather than shipping all 24 reconstructions
 * to the client: it exercises the same seam a real backend will use, so the
 * loading behaviour we design against is the behaviour we will actually get.
 */
export async function reconstructQuestion(
  promptId: string,
): Promise<Reconstruction | null> {
  const result = await getReconstruction(promptId)
  return result.data
}
