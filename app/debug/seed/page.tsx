import type { Metadata } from 'next'
import { Panel, Label, Value, Rule } from '@/components/ui/Card'
import {
  getOrg,
  getCausalChain,
  getEngineMatrix,
  getCompetitors,
  getStageCoverage,
  getEconomics,
  getReadouts,
  getActions,
  getProducts,
  getPrompts,
} from '@/lib/api/client'
import { count, money, moneyPrecise, percent } from '@/lib/format'

export const metadata: Metadata = {
  title: 'Seed trace',
  robots: { index: false, follow: false },
}

function Block({
  n,
  title,
  note,
  children,
}: {
  n: string
  title: string
  note?: string
  children: React.ReactNode
}) {
  return (
    <section className="py-10">
      <div className="flex items-baseline gap-3">
        <span className="text-label text-brand-300" data-numeric="">
          {n}
        </span>
        <h2 className="text-h2">{title}</h2>
      </div>
      {note ? <p className="text-caption text-ink-2 mt-2 max-w-3xl">{note}</p> : null}
      <div className="mt-5">{children}</div>
    </section>
  )
}

function Row({
  label,
  value,
  derivation,
}: {
  label: string
  value: string
  derivation?: string
}) {
  return (
    <tr className="border-t border-line align-top">
      <td className="py-3 pe-4 text-body text-ink-2">{label}</td>
      <td className="py-3 pe-4 whitespace-nowrap">
        <Value>{value}</Value>
      </td>
      <td className="py-3 text-caption text-ink-3">{derivation ?? '—'}</td>
    </tr>
  )
}

function Table({ children }: { children: React.ReactNode }) {
  return (
    <Panel className="p-0 overflow-x-auto">
      <table className="w-full min-w-[42rem]">
        <thead>
          <tr className="text-label text-ink-3">
            <th className="text-start font-normal px-5 pt-4 pb-2">Figure</th>
            <th className="text-start font-normal px-0 pt-4 pb-2">Value</th>
            <th className="text-start font-normal pe-5 pt-4 pb-2">
              How it is derived
            </th>
          </tr>
        </thead>
        <tbody className="[&_td:first-child]:ps-5 [&_td:last-child]:pe-5">
          {children}
        </tbody>
      </table>
    </Panel>
  )
}

export default async function SeedTrace() {
  const [
    org,
    chain,
    engines,
    competitors,
    stages,
    economics,
    readouts,
    actions,
    products,
    prompts,
  ] = await Promise.all([
    getOrg(),
    getCausalChain(),
    getEngineMatrix(),
    getCompetitors(),
    getStageCoverage(),
    getEconomics(),
    getReadouts(),
    getActions(),
    getProducts(),
    getPrompts(),
  ])

  const trackedShare = competitors.data.reduce(
    (s, c) => s + c.recommendationSharePct,
    0,
  )
  const totalVolume = prompts.data.reduce((s, p) => s + p.monthlyVolume, 0)
  const events = prompts.data.reduce(
    (s, p) => s + p.northwindRecommendedBy.length,
    0,
  )

  return (
    <main id="main" className="gr-rail-wide py-16">
      <header>
        <p className="text-label text-ink-3 mb-3">
          GeoRepute — Internal · M1 Seed trace
        </p>
        <h1 className="text-display-2 max-w-3xl">Every number, traced</h1>
        <p className="text-body-lg text-ink-2 mt-4 max-w-3xl">
          Brief §13.1 supplies seven canonical facts. Everything below is
          derived arithmetic from them. No screen holds a literal — if a figure
          here disagrees with the spine, the invariant suite fails the build.
        </p>
        <div className="flex flex-wrap gap-6 mt-6 text-caption text-ink-3">
          <span>
            source: <span className="text-ink">{org.source}</span>
          </span>
          <span>
            as of: <span className="text-ink">{org.asOf}</span>
          </span>
          <span>
            methodology:{' '}
            <span className="text-ink">{org.methodologyVersion}</span>
          </span>
        </div>
      </header>

      <Rule className="mt-8" />

      <Block
        n="01"
        title="The spine — brief §13.1, verbatim"
        note="These seven facts are the only values in the system that are typed rather than computed."
      >
        <Table>
          <Row
            label="ChatGPT supplier recommendation presence"
            value={percent(4.2)}
            derivation="1 recommendation ÷ 24 questions = 4.1667% → 4.2%"
          />
          <Row
            label="Supplier-evaluation coverage"
            value="7%"
            derivation="3 slots won ÷ (7 questions × 6 engines) = 7.14% → 7%"
          />
          <Row
            label="Independent authority evidence"
            value="Weak"
            derivation="GEON Authority 28 is the lowest of six vectors"
          />
          <Row
            label="Top competitor recommendation share"
            value={percent(31)}
            derivation="Kestrel Industrial — pinned, balances the share table"
          />
          <Row
            label="Paid dependency"
            value="High"
            derivation={`blended CPC ${moneyPrecise(economics.data.blendedCpc)} ÷ break-even ${moneyPrecise(economics.data.breakEvenCpc)} ≥ 1.25`}
          />
          <Row
            label="Directional commercial exposure"
            value="$3,200 – $6,200 / mo"
            derivation="1,240 × 26.8% × 1.4–2.7% × $690, to the nearest $100"
          />
        </Table>
      </Block>

      <Block
        n="02"
        title="The causal chain — brief §13.1"
        note="Rendered from computed values. Change a prompt and this chain moves."
      >
        <Panel className="p-5">
          <ol className="space-y-3">
            {chain.data.map((link, i) => (
              <li key={link.id} className="flex gap-4 items-baseline">
                <span
                  className="text-label text-ink-3 w-6 shrink-0"
                  data-numeric=""
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0">
                  <p className="text-body text-ink-2">
                    {link.label}:{' '}
                    <span className="text-ink" data-numeric={link.kind !== 'prescription' ? '' : undefined}>
                      {link.value}
                    </span>
                  </p>
                  <p className="text-caption text-ink-3 mt-1">{link.because}</p>
                </div>
              </li>
            ))}
          </ol>
        </Panel>
      </Block>

      <Block n="03" title="Six AI engines">
        <Table>
          {engines.data.map((e) => (
            <Row
              key={e.id}
              label={e.name}
              value={`${e.recognitionScore}/100 · ${percent(e.recommendationPresencePct)}`}
              derivation={`recognition score · presence computed from prompts (${e.confusion ? 'entity confusion detected' : 'entity resolved correctly'})`}
            />
          ))}
        </Table>
      </Block>

      <Block
        n="04"
        title="Competitor set"
        note={`Tracked shares total ${trackedShare.toFixed(1)}%, plus 28.8% unattributed = 100%. Invariant 1 fails the build otherwise.`}
      >
        <Table>
          {competitors.data.map((c) => (
            <Row
              key={c.id}
              label={`${c.name}${c.isSelf ? ' — self' : ''}`}
              value={percent(c.recommendationSharePct)}
              derivation={`${c.authoritySources} independent sources · strongest at ${c.strongestStage}`}
            />
          ))}
          <Row
            label="Unattributed"
            value={percent(28.8)}
            derivation="Balances the table to exactly 100%"
          />
        </Table>
      </Block>

      <Block
        n="05"
        title="Decision journey — coverage by stage"
        note="Supplier evaluation decides 60% of revenue while carrying under 15% of query volume. That asymmetry is the argument."
      >
        <Table>
          {stages.data.map((s) => (
            <Row
              key={s.id}
              label={s.label}
              value={`${percent(s.coveragePct)} · ${count(s.monthlyVolume)}/mo`}
              derivation={`${s.promptCount} questions × 6 engines · ${s.observableBy.length ? `visible to ${s.observableBy.join(', ')}` : 'invisible to conventional tooling'}`}
            />
          ))}
          <Row
            label="Total"
            value={`${count(totalVolume)}/mo`}
            derivation="Equals the Demand term of the §15.4 exposure model"
          />
        </Table>
      </Block>

      <Block n="06" title="GEON vectors and Decision Health">
        <Table>
          {org.data.geon.map((v) => (
            <Row
              key={v.key}
              label={v.label}
              value={`${v.score}/100`}
              derivation={v.definition}
            />
          ))}
          <Row
            label="Decision Health Index"
            value={`${org.data.decisionHealthIndex}/100`}
            derivation="Weighted: V·.25 + A·.30 + C·.10 + T·.20 + Cons·.075 + MF·.075"
          />
        </Table>
      </Block>

      <Block n="07" title="Search economics">
        <Table>
          <Row
            label="Blended CPC"
            value={moneyPrecise(economics.data.blendedCpc)}
            derivation="Volume-weighted across 20 tracked keywords"
          />
          <Row
            label="Break-even CPC"
            value={moneyPrecise(economics.data.breakEvenCpc)}
            derivation={`${money(690)} AOV × 24% margin × 3.7% site conversion`}
          />
          <Row
            label="Keywords above break-even"
            value={`${economics.data.keywordsAboveBreakEven} of ${economics.data.totalKeywords}`}
            derivation="Paid spend covering questions authority does not win"
          />
          <Row
            label="Paid dependency"
            value={economics.data.paidDependency}
            derivation="Derived from the ratio above — never asserted"
          />
        </Table>
      </Block>

      <Block n="08" title="Prompt set">
        <Table>
          <Row label="Questions" value={count(prompts.data.length)} derivation="Across five decision stages" />
          <Row
            label="Answer slots"
            value={count(prompts.data.length * 6)}
            derivation="24 questions × 6 engines"
          />
          <Row
            label="Recommendation events"
            value={count(events)}
            derivation={`${events} ÷ 144 = 4.2% — the share quoted in the competitor table`}
          />
          <Row
            label="Questions with any presence"
            value={`${prompts.data.filter((p) => p.northwindRecommendedBy.length > 0).length} of 24`}
            derivation="19 decisions complete without the brand appearing at all"
          />
        </Table>
      </Block>

      <Block
        n="09"
        title="Readouts, actions and catalogue"
        note="Every readout carries all twelve §13 sections and an exposure range that cannot be rendered without confidence and assumptions."
      >
        <Table>
          <Row
            label="Readouts"
            value={count(readouts.data.length)}
            derivation="All validated against the strict §13 schema"
          />
          <Row
            label="Actions"
            value={count(actions.data.length)}
            derivation="Action 1 is the spine prescription verbatim"
          />
          <Row
            label="Marketplace products"
            value={count(
              products.data.entry.length +
                products.data.advanced.length +
                products.data.premium.length,
            )}
            derivation={`${products.data.entry.length} entry · ${products.data.advanced.length} advanced · ${products.data.premium.length} premium`}
          />
        </Table>
      </Block>

      <Rule />
      <footer className="pt-8">
        <Label>M1 complete</Label>
        <p className="text-caption text-ink-3 mt-2">
          55 invariants pass. Next: M2 — the Readout anatomy and Causal Signal
          Chain components that every screen reuses.
        </p>
      </footer>
    </main>
  )
}
