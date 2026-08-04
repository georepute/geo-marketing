import { SPINE } from './spine'
import { enginePresencePct, stageCoveragePct } from './prompts'
import { TOP_COMPETITOR } from './competitors'
import { paidDependency } from './search'
import { computeExposure } from '@/lib/model/exposure'
import { moneyRange, percent, percentWhole } from '@/lib/format'

/* ============================================================================
   The Causal Signal Chain — brief §13.1, reproduced exactly.

   Every value here is COMPUTED from the seed. If a prompt is added, a
   competitor share edited or a model input changed, this chain moves with it.
   That is the point: the chain is the product's central claim, so it must not
   be capable of drifting from the data behind it.

     ChatGPT supplier recommendation presence: 4.2%
       ↓ Supplier-evaluation coverage: 7%
       ↓ Independent authority evidence: weak
       ↓ Competitor recommendation share: 31%
       ↓ Paid dependency: high
       ↓ Directional commercial exposure: $3,200–$6,200 per month
       ↓ Prescription
   ========================================================================= */

export interface ChainLink {
  id: string
  label: string
  value: string
  /** Readout opened when this link is selected. */
  readoutId: string
  kind: 'signal' | 'exposure' | 'prescription'
  /** Why this link produces the next one. */
  because: string
}

export function causalChain(): ChainLink[] {
  const exposure = computeExposure(1)

  return [
    {
      id: 'c1',
      label: 'ChatGPT supplier recommendation presence',
      value: percent(enginePresencePct('chatgpt')),
      readoutId: 'r-recognition',
      kind: 'signal',
      because:
        'The most-used engine puts Northwind forward in one of twenty-four decision questions.',
    },
    {
      id: 'c2',
      label: 'Supplier-evaluation coverage',
      value: percentWhole(stageCoveragePct('supplier-evaluation')),
      readoutId: 'r-supplier-collapse',
      kind: 'signal',
      because:
        'The stage that decides 60% of revenue carries under 15% of query volume — so the weakness is invisible to volume-led tooling.',
    },
    {
      id: 'c3',
      label: 'Independent authority evidence',
      value: 'Weak',
      readoutId: 'r-authority',
      kind: 'signal',
      because:
        'Engines cannot corroborate a recommendation from three sources when the category median is fourteen.',
    },
    {
      id: 'c4',
      label: 'Competitor recommendation share',
      value: `${percent(TOP_COMPETITOR.recommendationSharePct)} — ${TOP_COMPETITOR.name}`,
      readoutId: 'r-competitor',
      kind: 'signal',
      because:
        'The recommendation goes to the supplier engines can support with evidence.',
    },
    {
      id: 'c5',
      label: 'Paid dependency',
      value: paidDependency() === 'high' ? 'High' : 'Moderate',
      readoutId: 'r-paid-dependency',
      kind: 'signal',
      because:
        'Paid search is bought to cover the questions authority no longer wins.',
    },
    {
      id: 'c6',
      label: 'Directional commercial exposure',
      value: `${moneyRange(exposure.low, exposure.high)} per month`,
      readoutId: 'r-supplier-collapse',
      kind: 'exposure',
      because:
        'Demand × decision gap × estimated conversion × average deal value. A range, never a confirmed figure.',
    },
    {
      id: 'c7',
      label: 'Prescription',
      value: SPINE.prescription,
      readoutId: 'r-action',
      kind: 'prescription',
      because:
        'Authority is the binding constraint, so it is where intervention begins.',
    },
  ]
}
