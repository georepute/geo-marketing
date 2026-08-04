import { cn } from '@/lib/utils/cn'
import { Reveal } from '@/components/motion/Reveal'

/* ============================================================================
   Shared section furniture for the home page. Keeping the rhythm in one place
   is what makes twelve sections read as one document (§16 quiet authority).

   The heading block and the content reveal as two beats, 80ms apart — enough
   to read as sequence, far short of theatre.
   ========================================================================= */

export function Section({
  id,
  eyebrow,
  headline,
  sub,
  rule = true,
  wide,
  children,
}: {
  id?: string
  eyebrow: string
  headline: string
  sub?: string
  rule?: boolean
  wide?: boolean
  children?: React.ReactNode
}) {
  return (
    <section id={id} className={cn(rule && 'gr-hairline')}>
      <div className={cn(wide ? 'gr-rail-wide' : 'gr-rail', 'gr-section')}>
        <Reveal>
          <p className="text-label uppercase text-brand-300">{eyebrow}</p>
          <h2 className="text-display-2 text-ink mt-4 max-w-4xl text-balance">
            {headline}
          </h2>
          {sub ? (
            <p className="text-body-lg text-ink-2 mt-5 max-w-2xl">{sub}</p>
          ) : null}
        </Reveal>
        {children ? (
          <Reveal delay={80} className="mt-10">
            {children}
          </Reveal>
        ) : null}
      </div>
    </section>
  )
}

export function StatRow({
  items,
}: {
  items: { label: string; value: string; note?: string }[]
}) {
  return (
    <dl className="grid gap-px bg-line border border-line rounded-md overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div key={item.label} className="bg-panel p-5">
          <dt className="text-label uppercase text-ink-3">{item.label}</dt>
          <dd className="text-data-lg text-ink mt-3" data-numeric="">
            {item.value}
          </dd>
          {item.note ? (
            <p className="text-caption text-ink-2 mt-3">{item.note}</p>
          ) : null}
        </div>
      ))}
    </dl>
  )
}
