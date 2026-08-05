import { AlertTriangle } from 'lucide-react'
import type { ElectionIntelligence } from '@/lib/api/types'
import type { Polarity } from '@/lib/seed/narrative'

/* ============================================================================
   ELECTION MODE.

   The optional political extension. Structurally it is the commercial page
   with a different vocabulary — narratives, ownership, momentum, regional
   variation — because the product's underlying claim is that a decision is a
   decision, whether it ends in a purchase order or a ballot.

   THE SUBJECT SWITCHES, AND THAT IS STATED
   Every other surface in this environment reconstructs an industrial
   distributor. A political narrative for an MRO distributor would be fiction
   contradicting fiction, so this mode analyses a different subject entirely,
   and the banner says so before anything else renders.

   The subject is explicitly invented, and labelled as invented. This mode
   analyses real public figures in production; a demonstration that let a
   reader mistake seeded data for a real person's record would be the single
   most damaging thing this product could ship.
   ========================================================================= */

const POLARITY_TOKEN: Record<Polarity, string> = {
  positive: 'var(--gr-positive)',
  neutral: 'var(--gr-neutral)',
  negative: 'var(--gr-critical)',
}

const SWING_TOKEN: Record<string, string> = {
  candidate: 'var(--gr-positive)',
  opponent: 'var(--gr-critical)',
  undecided: 'var(--gr-warning)',
}

export function ElectionPanel({
  election,
}: {
  election: ElectionIntelligence
}) {
  const { subject, measures, narratives, regions, swingTopics, engines, verdict } =
    election

  return (
    <div
      className="rounded-md border overflow-hidden"
      style={{
        borderColor: 'color-mix(in oklab, var(--gr-brand-400) 45%, transparent)',
      }}
    >
      {/* --- Subject switch, stated before anything else ------------- */}
      <div
        className="p-5 flex flex-wrap items-start gap-4 border-b border-line"
        style={{
          background: 'color-mix(in oklab, var(--gr-warning) 8%, transparent)',
        }}
      >
        <AlertTriangle
          aria-hidden
          className="size-4 shrink-0 mt-0.5"
          style={{ color: 'var(--gr-warning)' }}
        />
        <div className="min-w-0">
          <p className="text-body text-ink">
            Election mode analyses a different subject.
          </p>
          <p className="text-caption text-ink-2 mt-2 max-w-3xl">
            Every other surface in this environment reconstructs Northwind
            Supply, an industrial distributor. Political narrative has no
            meaning for that subject, so this mode switches to{' '}
            <span className="text-ink">{subject.candidate}</span> in{' '}
            <span className="text-ink">{subject.name}</span> — a{' '}
            <span className="text-ink">wholly invented</span> race, candidate
            and opponent, used to demonstrate structure. No real person,
            campaign or result is represented here.
          </p>
        </div>
      </div>

      {/* --- Race identity ------------------------------------------- */}
      <div className="p-6 md:p-7 border-b border-line">
        <p className="text-label uppercase text-ink-3">
          {subject.race} · closes {subject.cycleEndsAt}
        </p>
        <h2 className="text-h1 text-ink mt-3">
          {subject.candidate} vs {subject.opponent}
        </h2>
        <p className="text-caption text-ink-2 mt-3 max-w-2xl">
          The same four questions as the commercial page: which accounts are
          active, who owns them, which way they are moving, and what should
          change.
        </p>
      </div>

      {/* --- Measures ------------------------------------------------ */}
      <dl className="grid gap-px bg-line border-b border-line sm:grid-cols-2 xl:grid-cols-4">
        {measures.map((m) => (
          <div key={m.label} className="bg-panel p-5">
            <dt className="text-label uppercase text-ink-3">{m.label}</dt>
            <dd>
              <p className="text-data-lg text-ink mt-3" data-numeric="">
                {m.value}
              </p>
              <p className="text-caption text-ink-2 mt-3">{m.meaning}</p>
            </dd>
          </div>
        ))}
      </dl>

      {/* --- What each engine leads with ----------------------------- */}
      <div className="p-6 md:p-7 border-b border-line">
        <p className="text-label uppercase text-ink-3">AI narrative by engine</p>
        <ul className="grid gap-px bg-line border border-line rounded-sm overflow-hidden mt-4 md:grid-cols-2 xl:grid-cols-3">
          {engines.map((e) => (
            <li key={e.id} className="bg-panel p-4">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="size-1.5 rounded-full shrink-0"
                  style={{ background: POLARITY_TOKEN[e.polarity] }}
                />
                <p className="text-caption text-ink">{e.name}</p>
              </div>
              <p className="text-caption text-ink-2 mt-2">{e.leads}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* --- Narratives ---------------------------------------------- */}
      <div className="p-6 md:p-7 border-b border-line">
        <p className="text-label uppercase text-ink-3">Active narratives</p>
        <ul className="grid gap-3 mt-4">
          {[...narratives]
            .sort((a, b) => b.reachPct - a.reachPct)
            .map((n) => (
              <li
                key={n.id}
                className="rounded-sm border border-line bg-panel p-4 flex flex-wrap items-start gap-x-5 gap-y-2"
              >
                <div className="min-w-0 flex-1 basis-72">
                  <p className="text-body text-ink">“{n.statement}”</p>
                  <p className="text-caption text-ink-2 mt-2">{n.note}</p>
                </div>
                <div className="shrink-0 flex gap-x-6">
                  <div>
                    <p className="text-label uppercase text-ink-3">Reach</p>
                    <p
                      className="text-data mt-1"
                      data-numeric=""
                      style={{ color: POLARITY_TOKEN[n.polarity] }}
                    >
                      {n.reachPct}%
                    </p>
                  </div>
                  <div>
                    <p className="text-label uppercase text-ink-3">Momentum</p>
                    <p className="text-caption text-ink mt-1 capitalize">
                      {n.momentum}
                    </p>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>

      {/* --- Regional sentiment -------------------------------------- */}
      <div className="p-6 md:p-7 border-b border-line">
        <p className="text-label uppercase text-ink-3">
          Public sentiment by region
        </p>
        <ul className="grid gap-px bg-line border border-line rounded-sm overflow-hidden mt-4 sm:grid-cols-2 xl:grid-cols-4">
          {regions.map((r) => (
            <li key={r.region} className="bg-panel p-4">
              <div className="flex items-baseline justify-between gap-3">
                <p className="text-caption text-ink truncate">{r.region}</p>
                <p
                  className="text-data shrink-0"
                  data-numeric=""
                  style={{ color: SWING_TOKEN[r.swing] }}
                >
                  {r.sentiment}
                </p>
              </div>
              <div className="mt-3 h-1.5 rounded-xs bg-inset overflow-hidden">
                <div
                  className="h-full rounded-xs"
                  style={{
                    width: `${r.sentiment}%`,
                    background: SWING_TOKEN[r.swing],
                  }}
                />
              </div>
              <p className="text-label uppercase text-ink-3 mt-3">
                {r.swing === 'undecided' ? 'Undecided' : `Leans ${r.swing}`}
              </p>
              <p className="text-caption text-ink-2 mt-2">{r.dominantTopic}</p>
              <p className="text-caption text-ink-3 mt-2">{r.note}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* --- Swing topics -------------------------------------------- */}
      <div className="p-6 md:p-7 border-b border-line">
        <p className="text-label uppercase text-ink-3">
          Swing and undecided-voter topics
        </p>
        <ul className="grid gap-2 mt-4">
          {swingTopics.map((t) => (
            <li
              key={t.topic}
              className="rounded-sm border border-line bg-panel p-4 flex flex-wrap items-start gap-x-6 gap-y-2"
              style={{
                background:
                  t.ownedBy === null && t.influence === 'high'
                    ? 'color-mix(in oklab, var(--gr-positive) 6%, transparent)'
                    : undefined,
              }}
            >
              <div className="min-w-0 flex-1 basis-72">
                <p className="text-body text-ink">{t.topic}</p>
                <p className="text-caption text-ink-2 mt-2">{t.note}</p>
              </div>
              <div className="shrink-0 flex gap-x-6">
                <div>
                  <p className="text-label uppercase text-ink-3">Influence</p>
                  <p className="text-caption text-ink mt-1 capitalize">
                    {t.influence}
                  </p>
                </div>
                <div>
                  <p className="text-label uppercase text-ink-3">Owned by</p>
                  <p
                    className="text-caption mt-1"
                    style={{
                      color:
                        t.ownedBy === null
                          ? 'var(--gr-positive)'
                          : 'var(--gr-text-primary)',
                    }}
                  >
                    {t.ownedBy ?? 'Nobody'}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* --- Decision ------------------------------------------------ */}
      <div
        className="p-6 md:p-7"
        style={{
          background: 'color-mix(in oklab, var(--gr-positive) 6%, transparent)',
        }}
      >
        <p
          className="text-label uppercase"
          style={{ color: 'var(--gr-positive)' }}
        >
          Campaign decision
        </p>
        <p className="text-h2 text-ink mt-3 max-w-3xl text-balance">
          {verdict.statement}
        </p>
        <p className="text-caption text-ink-2 mt-3 max-w-3xl">
          {verdict.because}
        </p>
      </div>
    </div>
  )
}
