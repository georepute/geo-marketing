import { cn } from '@/lib/utils/cn'
import { getT } from '@/lib/i18n/content/translator'
import { Rich } from '@/lib/i18n/content/rich'
import { count, percent } from '@/lib/format'
import type { Competitor } from '@/lib/api/types'

/* ============================================================================
   COMPETITIVE INTELLIGENCE — the authority advantage.

   Product direction, verbatim:

     Replace raw percentages with business meaning.
     Display:  21 Authority Sources  vs  3 Authority Sources
     Highlight: 7× Authority Advantage

   The reasoning behind that instruction is worth stating, because it governs
   the layout. "Kestrel wins 31%" is a scoreboard: it tells an executive they
   are losing and gives them nothing to act on. 21 against 3 is a cause, and a
   cause has a price and a plan attached to it. So the source counts take the
   display type and the share percentages drop to supporting captions — the
   opposite of the usual competitive-intelligence hierarchy.

   The multiplier sits between the two columns rather than above them, so the
   eye crosses it on the way from one number to the other and reads the gap as
   a relationship rather than as a third statistic.
   ========================================================================= */

export async function AuthorityAdvantage({
  competitor,
  self,
  categoryMedian,
}: {
  competitor: Competitor
  self: Competitor
  /** Independent-source count for the median competitor in the category. */
  categoryMedian: number
}) {
  const t = await getT()
  const multiple = competitor.authoritySources / Math.max(self.authoritySources, 1)

  return (
    <div className="rounded-md border border-line bg-panel overflow-hidden">
      <div className="grid md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-stretch">
        <Side
          name={competitor.name}
          role={t('Receives the decision')}
          sources={competitor.authoritySources}
          sharePct={competitor.recommendationSharePct}
          tone="competitor"
        />

        {/* The multiplier. The single loudest element in the section. */}
        <div
          className={cn(
            'flex md:flex-col items-center justify-center gap-3 md:gap-2',
            'px-8 py-6 md:py-10 border-y md:border-y-0 md:border-x border-line',
          )}
          style={{
            background:
              'color-mix(in oklab, var(--gr-critical) 7%, transparent)',
          }}
        >
          <p
            className="text-display-2"
            style={{ color: 'var(--gr-critical)' }}
            data-numeric=""
          >
            {multiple.toFixed(0)}×
          </p>
          <p className="text-label uppercase text-ink-2 md:text-center leading-relaxed">
            {t('Authority advantage')}
          </p>
        </div>

        <Side
          name={self.name}
          role={t('Your business')}
          sources={self.authoritySources}
          sharePct={self.recommendationSharePct}
          tone="self"
        />
      </div>

      {/* --- The explanation. Direction: explain WHY, not only THAT. --- */}
      {competitor.whyTheyWin ? (
        <div className="border-t border-line p-6 md:p-7">
          <p className="text-label uppercase text-ink-3">
            {t('Why the decision goes to them')}
          </p>
          <p className="text-body-lg text-ink-2 mt-3 max-w-3xl">
            {competitor.whyTheyWin}
          </p>
          <p className="text-caption text-ink-3 mt-4 max-w-3xl">
            <Rich
              text={t('The category median is <b>{n}</b> independent sources. This is not a brand-preference gap that marketing spend closes. It is an evidence gap, and evidence is something a business can commission.', {
                n: count(categoryMedian),
              })}
              className="text-ink-2"
            />
          </p>
        </div>
      ) : null}
    </div>
  )
}

/* ------------------------------------------------------------------------ */

async function Side({
  name,
  role,
  sources,
  sharePct,
  tone,
}: {
  name: string
  role: string
  sources: number
  sharePct: number
  tone: 'competitor' | 'self'
}) {
  const t = await getT()
  return (
    <div className="p-6 md:p-8 flex flex-col justify-center">
      <p className="text-label uppercase text-ink-3">{role}</p>
      <p className="text-h2 text-ink mt-2">{name}</p>

      <p
        className="text-display-2 mt-6"
        data-numeric=""
        style={{
          color:
            tone === 'competitor'
              ? 'var(--gr-text-primary)'
              : 'var(--gr-critical)',
        }}
      >
        {count(sources)}
      </p>
      <p className="text-body text-ink-2 mt-1">
        {sources === 1 ? t('authority source') : t('authority sources')}
      </p>

      <p className="text-caption text-ink-3 mt-5 pt-5 border-t border-line">
        <Rich
          text={t('Named in <b>{pct}</b> of AI buying decisions.', {
            pct: percent(sharePct),
          })}
          className="text-ink-2"
        />
      </p>
    </div>
  )
}
