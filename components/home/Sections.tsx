import { cn } from '@/lib/utils/cn'
import { Reveal } from '@/components/motion/Reveal'
import { getDictionary } from '@/lib/i18n/server'

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

/* ============================================================================
   QUESTION SECTION — the home page's only section shape.

   Product direction: "Every page must answer one executive question" and
   "Never lead with product names. Lead with business questions."

   So the eyebrow is a numbered question rather than a feature category, the
   heading IS the question, and the first thing under it is the answer stated
   in one sentence of business language. Machinery is named afterwards, or not
   at all. The numbering matters: it tells a reader arriving mid-page that
   they are inside a sequence of decisions, not a grid of features.
   ========================================================================= */

export async function QuestionSection({
  id,
  index,
  question,
  answer,
  context,
  wide = true,
  children,
}: {
  id?: string
  /** 1-based position in the executive sequence. */
  index: number
  question: string
  /** The answer, in one sentence. Never a feature description. */
  answer: string
  /** Optional second sentence: what the answer means commercially. */
  context?: string
  wide?: boolean
  children?: React.ReactNode
}) {
  const copy = await getDictionary()

  return (
    <section id={id} className="gr-hairline">
      <div className={cn(wide ? 'gr-rail-wide' : 'gr-rail', 'gr-section')}>
        <Reveal>
          <p className="flex items-center gap-3 text-label uppercase text-brand-300">
            <span data-numeric="">
              {String(index).padStart(2, '0')}
            </span>
            <span aria-hidden className="h-px w-8 bg-line-strong" />
            <span>{copy.exec.executiveQuestion}</span>
          </p>

          <h2 className="text-display-2 text-ink mt-5 max-w-4xl text-balance">
            {question}
          </h2>

          <p className="text-body-lg text-ink-2 mt-6 max-w-3xl">{answer}</p>

          {context ? (
            <p className="text-body text-ink-3 mt-4 max-w-3xl">{context}</p>
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

/* ============================================================================
   KPI CARD.

   Product direction: "Every KPI must answer three questions — what is it, why
   does it matter, what is the business impact" and "Never display isolated
   scores. Always translate them into business language."

   The `reading` prop is that translation, and it is REQUIRED. There is no way
   to render a bare number through this component, which is the point: the
   type system enforces the editorial rule that the direction states in prose.

   Layout runs number → reading → why → impact, top to bottom, because that is
   the order an executive actually resolves them in: see the figure, learn what
   it says, then learn what it costs.
   ========================================================================= */

export interface Kpi {
  /** What it is, in three or four words. */
  label: string
  value: string
  /** The figure restated in business language. Required — see above. */
  reading: string
  /** Why it matters. */
  why: string
  /** What it does to the business. */
  impact: string
  tone?: 'critical' | 'warning' | 'positive' | 'neutral'
}

const TONE_TOKEN = {
  critical: 'var(--gr-critical)',
  warning: 'var(--gr-warning)',
  positive: 'var(--gr-positive)',
  neutral: 'var(--gr-text-primary)',
} as const

export async function KpiGrid({
  items,
  columns = 3,
}: {
  items: Kpi[]
  columns?: 2 | 3
}) {
  const copy = await getDictionary()
  return (
    <dl
      className={cn(
        'grid gap-px bg-line border border-line rounded-md overflow-hidden',
        columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 xl:grid-cols-3',
      )}
    >
      {items.map((kpi) => (
        <div key={kpi.label} className="bg-panel p-6 flex flex-col">
          <dt className="text-label uppercase text-ink-3">{kpi.label}</dt>

          <dd className="mt-4 flex flex-col grow">
            <p
              className="text-data-lg"
              data-numeric=""
              style={{ color: TONE_TOKEN[kpi.tone ?? 'neutral'] }}
            >
              {kpi.value}
            </p>

            {/* The translation. This, not the number, is the message. */}
            <p className="text-body text-ink mt-4">{kpi.reading}</p>

            <div className="mt-5 pt-5 border-t border-line grid gap-4 grow">
              <Aside label={copy.exec.kpiWhy} body={kpi.why} />
              <Aside label={copy.exec.kpiImpact} body={kpi.impact} />
            </div>
          </dd>
        </div>
      ))}
    </dl>
  )
}

function Aside({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <p className="text-label uppercase text-ink-3">{label}</p>
      <p className="text-caption text-ink-2 mt-2">{body}</p>
    </div>
  )
}

/* ============================================================================
   PRESCRIPTION — how every section on this page ends.

   Product direction: "Every page ends with a decision. Never end with insight."

   Insight is a paragraph; a decision has an owner, a date and an expected
   movement. The component will not render without them, so a section cannot
   quietly trail off into observation.
   ========================================================================= */

export async function Prescription({
  /* Resolved in the body, not as a default: a default parameter is evaluated
     in the signature, where the dictionary has not been awaited yet. */
  label: labelProp,
  statement,
  because,
  owner,
  deadline,
  movement,
  confidence,
}: {
  label?: string
  statement: string
  /** The reason this is the intervention, not merely an intervention. */
  because?: string
  owner: string
  deadline: string
  movement: string
  confidence?: React.ReactNode
}) {
  const copy = await getDictionary()
  const label = labelProp ?? copy.exec.prescriptionLabel
  return (
    <div
      className="mt-8 rounded-md border p-6 md:p-7"
      style={{
        borderColor: 'color-mix(in oklab, var(--gr-positive) 34%, transparent)',
        background: 'color-mix(in oklab, var(--gr-positive) 6%, transparent)',
      }}
    >
      <div className="flex flex-wrap items-center gap-3">
        <span
          className="text-label uppercase"
          style={{ color: 'var(--gr-positive)' }}
        >
          {label}
        </span>
        {confidence}
      </div>

      <p className="text-body-lg text-ink mt-4 max-w-3xl">{statement}</p>

      {because ? (
        <p className="text-caption text-ink-2 mt-3 max-w-3xl">{because}</p>
      ) : null}

      <dl className="grid gap-px bg-line border border-line rounded-sm overflow-hidden mt-6 sm:grid-cols-3">
        <Field label={copy.exec.ownerLabel} value={owner} />
        <Field label={copy.exec.deadlineLabel} value={deadline} />
        <Field label={copy.readout.expectedMovement} value={movement} numeric />
      </dl>
    </div>
  )
}

function Field({
  label,
  value,
  numeric,
}: {
  label: string
  value: string
  numeric?: boolean
}) {
  return (
    <div className="bg-panel p-4">
      <dt className="text-label uppercase text-ink-3">{label}</dt>
      <dd
        className="text-caption text-ink mt-2"
        {...(numeric ? { 'data-numeric': '' } : {})}
      >
        {value}
      </dd>
    </div>
  )
}
