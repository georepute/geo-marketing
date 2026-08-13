import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { Panel, Label, Value, Rule } from '@/components/ui/Card'
import { MotionProbe } from './MotionProbe'
import { money, moneyRange, percent, count, dateFull } from '@/lib/format'

export const metadata: Metadata = {
  title: 'Design system',
  robots: { index: false, follow: false },
}

const surfaces = [
  ['canvas', '--gr-surface-canvas', '#0A0910'],
  ['raised', '--gr-surface-raised', '#131019'],
  ['panel', '--gr-surface-panel', '#1A1622'],
  ['inset', '--gr-surface-inset', '#221D2C'],
  ['line', '--gr-line-subtle', '#262031'],
  ['line-strong', '--gr-line-strong', '#38304A'],
] as const

const brand = [
  ['brand-900', '#22093A'],
  ['brand-700', '#3F1566'],
  ['brand-500', '#6B32A3'],
  ['brand-400', '#8B54C4'],
  ['brand-300', '#B189DE'],
] as const

const semantic = [
  ['critical', '#C9564A'],
  ['warning', '#C98A2E'],
  ['neutral', '#7D8590'],
  ['positive', '#3D9678'],
  ['info', '#527FB4'],
  ['accent', '#DFA22C'],
] as const

const typeScale = [
  ['display-1', 'text-display-1', 'Reconstruct the decision.'],
  ['display-2', 'text-display-2', 'Your analytics start too late.'],
  ['h1', 'text-h1', 'Twelve intelligence engines. One operating system.'],
  ['h2', 'text-h2', 'Competitor Decision Capture'],
  ['h3', 'text-h3', 'Executive Truth'],
  ['body-lg', 'text-body-lg', 'The customer decision often begins before the visit.'],
  ['body', 'text-body', 'Evidence is meaningful but partially estimated or incomplete.'],
  ['caption', 'text-caption', 'Directional estimate — not confirmed lost revenue.'],
  ['label', 'text-label uppercase', 'Commercial Exposure'],
] as const

const spacing = [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128] as const

function Section({
  n,
  title,
  children,
}: {
  n: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="py-12">
      <div className="flex items-baseline gap-3 mb-6">
        <span className="text-label text-brand-300" data-numeric="">
          {n}
        </span>
        <h2 className="text-h2">{title}</h2>
      </div>
      {children}
    </section>
  )
}

export default function KitchenSink() {
  return (
    <main id="main" className="gr-rail-wide py-16">
      <header className="mb-4">
        <p className="text-label text-ink-3 mb-3">
          GeoRepute — Internal · M0 Foundation
        </p>
        <h1 className="text-display-2 max-w-3xl">Quiet Authority</h1>
        <p className="text-body-lg text-ink-2 mt-4 max-w-2xl">
          Every token that the product is built from. Premium executive; no
          generic SaaS gradients, no excessive colour, no playful illustration.
        </p>
      </header>

      <Rule />

      {/* ---------------------------------------------------------------- */}
      <Section n="01" title="Surfaces">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {surfaces.map(([name, token, hex]) => (
            <Panel key={name} className="p-0 overflow-hidden">
              <div
                className="h-20 border-b border-line"
                style={{ background: `var(${token})` }}
              />
              <div className="p-3">
                <p className="text-caption text-ink">{name}</p>
                <p className="text-caption text-ink-3" data-numeric="">
                  {hex}
                </p>
              </div>
            </Panel>
          ))}
        </div>
      </Section>

      <Section n="02" title="Brand — the brief's deep violet">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {brand.map(([name, hex]) => (
            <Panel key={name} className="p-0 overflow-hidden">
              <div
                className="h-20 border-b border-line"
                style={{ background: `var(--gr-${name})` }}
              />
              <div className="p-3">
                <p className="text-caption text-ink">{name}</p>
                <p className="text-caption text-ink-3" data-numeric="">
                  {hex}
                </p>
              </div>
            </Panel>
          ))}
        </div>
      </Section>

      <Section n="03" title="Semantic — muted, institutional. No pure hues.">
        <p className="text-body text-ink-2 mb-4 max-w-2xl">
          Accent gold is <strong className="text-ink">signal only</strong> — it
          never appears decoratively. Data marks always carry a shape or label
          as well as a hue, so colour is never the sole carrier of meaning.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
          {semantic.map(([name, hex]) => (
            <Panel key={name} className="p-0 overflow-hidden">
              <div
                className="h-14 border-b border-line"
                style={{ background: `var(--gr-${name === 'accent' ? 'accent-500' : name})` }}
              />
              <div className="p-3">
                <p className="text-caption text-ink">{name}</p>
                <p className="text-caption text-ink-3" data-numeric="">
                  {hex}
                </p>
              </div>
            </Panel>
          ))}
        </div>
      </Section>

      <Section n="04" title="Confidence — colour plus glyph, never colour alone">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {(
            [
              ['high', '●', 'High', 'Multiple current and reliable evidence sources support the conclusion.'],
              ['medium', '◐', 'Medium', 'Evidence is meaningful but partially estimated or incomplete.'],
              ['directional', '◔', 'Directional', 'Useful for prioritization, not an audited or verified fact.'],
              ['insufficient', '○', 'Insufficient history', 'The platform must withhold predictive conclusions until enough evidence exists.'],
            ] as const
          ).map(([key, glyph, label, def]) => (
            <Panel key={key} className="p-4 flex gap-3 items-start">
              <span
                aria-hidden
                className="text-body-lg leading-none mt-0.5"
                style={{ color: `var(--gr-conf-${key})` }}
              >
                {glyph}
              </span>
              <div>
                <p className="text-body text-ink">{label}</p>
                <p className="text-caption text-ink-2 mt-1">{def}</p>
              </div>
            </Panel>
          ))}
        </div>
      </Section>

      <Section n="05" title="Type scale">
        <div className="space-y-6">
          {typeScale.map(([name, cls, sample]) => (
            <div
              key={name}
              className="grid grid-cols-[7rem_1fr] gap-6 items-baseline"
            >
              <span className="text-label text-ink-3">{name}</span>
              <p className={cls}>{sample}</p>
            </div>
          ))}
          <div className="grid grid-cols-[7rem_1fr] gap-6 items-baseline">
            <span className="text-label text-ink-3">data-lg</span>
            <Value size="lg">4.2%</Value>
          </div>
          <div className="grid grid-cols-[7rem_1fr] gap-6 items-baseline">
            <span className="text-label text-ink-3">data</span>
            <Value>$3,200 – $6,200</Value>
          </div>
        </div>
      </Section>

      <Section n="06" title="Tabular numerals">
        <p className="text-body text-ink-2 mb-4 max-w-2xl">
          Every metric is mono with <code className="text-ink">tabular-nums</code>,
          so columns align and values do not jitter while animating. Both
          columns below have identical widths.
        </p>
        <Panel className="p-5 max-w-sm">
          <table className="w-full">
            <tbody className="[&_td]:py-1.5">
              {[
                ['ChatGPT', 4.2],
                ['Claude', 6.1],
                ['Gemini', 3.4],
                ['Perplexity', 11.8],
                ['Copilot', 5.0],
                ['Grok', 2.7],
              ].map(([label, v]) => (
                <tr key={label as string}>
                  <td className="text-body text-ink-2">{label}</td>
                  <td className="text-right">
                    <Value>{percent(v as number)}</Value>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Panel>
      </Section>

      <Section n="07" title="Intl formatters">
        <Panel className="p-5 max-w-xl">
          <dl className="grid grid-cols-[10rem_1fr] gap-y-2.5 gap-x-4">
            {[
              ['money', money(7200)],
              ['moneyRange', moneyRange(3200, 6200)],
              ['percent', percent(4.2)],
              ['count', count(1240)],
              ['dateFull', dateFull('2026-11-30')],
            ].map(([k, v]) => (
              <div key={k} className="contents">
                <dt className="text-caption text-ink-3">{k}</dt>
                <dd>
                  <Value>{v}</Value>
                </dd>
              </div>
            ))}
          </dl>
          <p className="text-caption text-ink-3 mt-4">
            Intl only — never hand-assembled strings, so the app stays
            localization-safe though v1 ships English.
          </p>
        </Panel>
      </Section>

      <Section n="08" title="Spacing — 4px base">
        <div className="flex flex-wrap items-end gap-2">
          {spacing.map((s) => (
            <div key={s} className="text-center">
              <div
                className="bg-brand-500 border border-brand-400/40"
                style={{ width: s, height: s }}
              />
              <span
                className="text-caption text-ink-3 block mt-1.5"
                data-numeric=""
              >
                {s}
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section n="09" title="Radius and elevation">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {(['xs', 'sm', 'md', 'lg'] as const).map((r) => (
            <div
              key={r}
              className="bg-panel border border-line shadow-elev-2 h-24 grid place-items-center"
              style={{ borderRadius: `var(--radius-${r})` }}
            >
              <span className="text-caption text-ink-2">radius-{r}</span>
            </div>
          ))}
          {(['elev-1', 'elev-2', 'elev-3'] as const).map((e) => (
            <div
              key={e}
              className="bg-panel border border-line rounded-md h-24 grid place-items-center"
              style={{ boxShadow: `var(--gr-${e})` }}
            >
              <span className="text-caption text-ink-2">{e}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section n="10" title="Controls">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-3 items-center">
            <Button variant="primary" size="lg">
              Analyze My Business
            </Button>
            <Button variant="secondary" size="lg">
              Explore Intelligence Products
            </Button>
            <Button variant="ghost" size="lg">
              Book an Executive Briefing
            </Button>
          </div>
          <div className="flex flex-wrap gap-3 items-center">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="accent">Accent — signal only</Button>
            <Button disabled>Disabled</Button>
          </div>
          <div className="flex flex-wrap gap-3 items-center">
            <Button size="sm" variant="primary">
              Small
            </Button>
            <Button size="sm">Small secondary</Button>
          </div>
        </div>
      </Section>

      <Section n="11" title="Motion and the reduced-motion contract">
        <MotionProbe />
      </Section>

      <Section n="12" title="Layout rails">
        <div className="space-y-3">
          <div className="border border-dashed border-line-strong p-4">
            <div className="gr-rail bg-panel border border-line py-3 text-center">
              <span className="text-caption text-ink-2">
                .gr-rail — 1180px content
              </span>
            </div>
          </div>
          <div className="border border-dashed border-line-strong p-4">
            <div className="gr-rail-wide bg-panel border border-line py-3 text-center">
              <span className="text-caption text-ink-2">
                .gr-rail-wide — 1440px command surfaces
              </span>
            </div>
          </div>
        </div>
      </Section>

      <Rule />
      <footer className="pt-8">
        <Label>M0 complete</Label>
        <p className="text-caption text-ink-3 mt-2">
          Next: M1 — seed spine, API seam and the build-failing invariant suite.
        </p>
      </footer>
    </main>
  )
}
