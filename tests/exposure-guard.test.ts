import { describe, expect, it } from 'vitest'
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'

/* ============================================================================
   NON-NEGOTIABLE #5, ENFORCED STRUCTURALLY.

   "Every financial/predictive figure shows range + confidence + assumptions —
   never 'confirmed lost revenue'."

   The ExposureRange type already makes a scalar unrepresentable in DATA. This
   suite closes the remaining hole: a component could still format a raw number
   with money() and render it bare. Only the sanctioned components may do that.
   ========================================================================= */

const ROOT = join(import.meta.dirname, '..')

/** Components permitted to format money. Everything else must go through
    <ExposureRange>, which cannot render without confidence + assumptions. */
const MONEY_ALLOWLIST = [
  join('components', 'signal', 'ExposureRange.tsx'),
  // Commerce prices are catalogue facts, not model output — a plan costs what
  // it costs. These are exempt because they make no predictive claim.
  join('components', 'commerce'),
  // Internal-only surfaces, never shipped to a customer.
  join('app', '[locale]', 'kitchen-sink'),
  join('app', '[locale]', 'debug'),
  // Catalogue pricing lives here — facts, not model output.
  join('lib', 'seed', 'products.ts'),
  // The causal chain's exposure node is a summary that opens the full readout;
  // its own copy states the figure is a range and never a confirmed one.
  join('lib', 'seed', 'chain.ts'),
]

/* `observedCost` and `catalogPrice` are deliberately absent: an observed CPC
   or a plan's price is a FACT and needs no confidence interval. Only
   model-derived money — money / moneyRange / moneyPrecise — is a CLAIM, and
   only claims are restricted. */
const MONEY_CALL = /\b(money|moneyRange|moneyPrecise)\s*\(/

function walk(dir: string, files: string[] = []): string[] {
  let entries: string[]
  try {
    entries = readdirSync(dir)
  } catch {
    return files
  }
  for (const entry of entries) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) walk(full, files)
    else if (/\.tsx?$/.test(full)) files.push(full)
  }
  return files
}

/* The seed layer is scanned too. A module there can build a display string
   with money() and hand it to a component as plain text, which bypasses
   <ExposureRange> entirely — that is exactly how the Revenue Exposure tile
   first shipped without its assumptions disclosure. */
const sourceFiles = [
  ...walk(join(ROOT, 'app')),
  ...walk(join(ROOT, 'components')),
  ...walk(join(ROOT, 'lib', 'seed')),
]

function relative(file: string): string {
  return file.slice(ROOT.length + 1)
}

function isAllowed(file: string): boolean {
  const rel = relative(file)
  return MONEY_ALLOWLIST.some((allowed) => rel.startsWith(allowed))
}

describe('Money may only be formatted where confidence travels with it', () => {
  it('finds source files to check', () => {
    expect(sourceFiles.length).toBeGreaterThan(0)
  })

  it('no unsanctioned component formats a money value', () => {
    const offenders = sourceFiles
      .filter((file) => !isAllowed(file))
      .filter((file) => MONEY_CALL.test(readFileSync(file, 'utf8')))
      .map(relative)

    expect(
      offenders,
      `These files format money directly. Route the value through ` +
        `<ExposureRange>, which cannot render without a confidence badge and ` +
        `an assumptions disclosure. If the figure is a catalogue price rather ` +
        `than model output, add it to MONEY_ALLOWLIST with a reason.`,
    ).toEqual([])
  })
})

describe('Forbidden framings never appear in shipped copy', () => {
  // Brief §15.4: "No value may be described as confirmed lost revenue."
  const FORBIDDEN = [
    /confirmed lost revenue/i,
    /revenue lost/i,
    /you (are )?lost?ing \$/i,
    /guaranteed (revenue|return|uplift)/i,
  ]

  const copyFiles = [
    ...walk(join(ROOT, 'lib', 'copy')),
    ...walk(join(ROOT, 'lib', 'seed')),
  ]

  it('scans the copy and seed layers', () => {
    expect(copyFiles.length).toBeGreaterThan(0)
  })

  /* The phrases are legitimate inside a disclaimer that negates them —
     "not confirmed lost revenue" is exactly what §15.4 asks us to say. So a
     line only offends when it asserts the phrase without negating it. */
  const NEGATED = /\b(never|not|no value|cannot|must not|is not)\b/i

  for (const pattern of FORBIDDEN) {
    it(`never asserts /${pattern.source}/`, () => {
      const offenders: string[] = []
      for (const file of copyFiles) {
        const lines = readFileSync(file, 'utf8').split('\n')
        lines.forEach((line, i) => {
          if (pattern.test(line) && !NEGATED.test(line)) {
            offenders.push(`${relative(file)}:${i + 1} — ${line.trim()}`)
          }
        })
      }
      expect(offenders).toEqual([])
    })
  }
})

describe('Every exposure disclosure exposes the model', () => {
  it('the ExposureRange component renders formula, assumptions and limitation', () => {
    const source = readFileSync(
      join(ROOT, 'components', 'signal', 'ExposureRange.tsx'),
      'utf8',
    )
    expect(source).toContain('copy.exposure.formula')
    expect(source).toContain('copy.exposure.assumptions')
    expect(source).toContain('copy.exposure.limitation')
    expect(source).toContain('copy.exposure.caption')
    expect(source).toContain('ConfidenceBadge')
    expect(source).toContain('methodologyVersion')
  })
})
