import { describe, expect, it } from 'vitest'
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { copy } from '@/lib/copy/en'

/* ============================================================================
   NON-NEGOTIABLE #6 — "Use the exact headline copy from the doc's copy system."

   Brief §19 defines eighteen strings. Two failure modes are guarded here:

     1. DRIFT — a string in lib/copy/en.ts is edited away from §19.
        Guarded by comparing against a frozen transcription of the brief.

     2. BYPASS — a screen hardcodes the sentence instead of importing it, so
        the copy module stops being the single source of truth.
        Guarded by scanning app/ and components/ for the literal text.
   ========================================================================= */

/** Transcribed from brief §19, Core Commercial Copy System. Do not edit. */
const BRIEF_S19: Record<string, string> = {
  category: 'THE DECISION INTELLIGENCE OPERATING SYSTEM',
  heroPrimary: 'See Where Your Business Is Recognized, Recommended and Chosen.',
  heroContinuation: 'And where the decision goes somewhere else.',
  categoryPositioning:
    'Traditional platforms optimize channels. GeoRepute reconstructs decisions.',
  analyticsDisruption: 'Your analytics start too late.',
  aiRecognition: 'Do AI engines understand what your business is?',
  aiPresence: 'Are you present when customers ask AI whom to choose?',
  googleVsAi: 'A business can exist in AI and disappear in Google.',
  competitors:
    'See where competitors receive the decision before you receive the lead.',
  narrative:
    'When the market explains your category, whose language does it use?',
  searchEconomics: 'Know when paid search becomes too expensive to justify.',
  trust: 'Visibility creates attention. Trust creates selection.',
  opportunity: 'Not every visibility gap is worth fixing.',
  timing: 'The right decision at the wrong time is still the wrong decision.',
  action: 'The platform does not end with insight.',
  marketplace: 'Buy the intelligence you need.',
  partner: 'Build a recurring business around Decision Intelligence.',
  signatureExperience: 'Reconstruct the decision.',
  finalCta: 'Do not let the market decide what your business is without you.',
}

const ROOT = join(import.meta.dirname, '..')

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

/* Internal-only surfaces are excluded: the design-system page quotes §19
   sentences as typography specimens, which is a legitimate use and not
   customer-facing copy. Everything a customer can reach is scanned. */
const INTERNAL = [join('app', 'kitchen-sink'), join('app', 'debug')]

const screenFiles = [
  ...walk(join(ROOT, 'app')),
  ...walk(join(ROOT, 'components')),
].filter((file) => {
  const rel = file.slice(ROOT.length + 1)
  return !INTERNAL.some((prefix) => rel.startsWith(prefix))
})

describe('Brief §19 copy is reproduced exactly', () => {
  for (const [key, expected] of Object.entries(BRIEF_S19)) {
    it(`${key} matches the brief verbatim`, () => {
      expect(copy[key as keyof typeof copy]).toBe(expected)
    })
  }

  it('covers every string §19 defines', () => {
    expect(Object.keys(BRIEF_S19)).toHaveLength(19)
  })
})

describe('No screen hardcodes §19 copy', () => {
  /* Sentences distinctive enough that an accidental match is implausible. */
  const WATCHED = [
    BRIEF_S19.heroPrimary!,
    BRIEF_S19.analyticsDisruption!,
    BRIEF_S19.categoryPositioning!,
    BRIEF_S19.finalCta!,
    BRIEF_S19.timing!,
    BRIEF_S19.marketplace!,
    BRIEF_S19.action!,
  ]

  for (const sentence of WATCHED) {
    it(`"${sentence.slice(0, 42)}…" is imported, not inlined`, () => {
      const offenders = screenFiles
        .filter((file) => readFileSync(file, 'utf8').includes(sentence))
        .map((file) => file.slice(ROOT.length + 1))

      expect(
        offenders,
        `This sentence is defined in brief §19 and must come from ` +
          `lib/copy/en.ts. Hardcoding it means the copy system stops being ` +
          `the single source of truth, and drift becomes invisible.`,
      ).toEqual([])
    })
  }
})
