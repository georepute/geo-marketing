import { Reveal } from '@/components/motion/Reveal'
import { getDictionary } from '@/lib/i18n/server'
import { cn } from '@/lib/utils/cn'

/* ============================================================================
   SECTION 4 — DIFFERENTIATION.

   Nine paired rows. This is a real table, not two styled lists side by side:
   the argument is the PAIRING — "Reports" against "Decisions" only means
   something read across, and a screen reader given two separate lists loses
   exactly the comparison the section exists to make.

   The left column is deliberately the quieter one. It is the status quo the
   reader already has, so it is set in muted text while the right column
   carries the emphasis.
   ========================================================================= */

export async function AgencyComparison() {
  const copy = await getDictionary()
  const s = copy.agency.differentiation

  return (
    <section className="gr-hairline">
      <div className="gr-rail-wide gr-section">
        <Reveal>
          <h2 className="text-display-2 text-ink max-w-3xl text-balance">
            {s.headline}
          </h2>
          <p className="text-body-lg text-ink-2 mt-6 max-w-2xl">{s.body}</p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-12 overflow-x-auto rounded-md border border-line">
            <table className="w-full border-collapse text-start">
              <thead>
                <tr className="bg-inset">
                  <th
                    scope="col"
                    className="text-label uppercase text-ink-3 text-start px-5 py-4 border-b border-line"
                  >
                    {s.typicalLabel}
                  </th>
                  <th
                    scope="col"
                    className="text-label uppercase text-brand-300 text-start px-5 py-4 border-b border-line"
                  >
                    {s.oursLabel}
                  </th>
                </tr>
              </thead>
              <tbody>
                {s.rows.map((row, i) => (
                  <tr
                    key={row.ours}
                    className={cn(i > 0 && 'border-t border-line')}
                  >
                    <td className="text-body text-ink-3 px-5 py-3.5 align-top">
                      {row.typical}
                    </td>
                    <td className="text-body text-ink px-5 py-3.5 align-top">
                      {row.ours}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
