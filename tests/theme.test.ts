import { describe, expect, it } from 'vitest'
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'

/* ============================================================================
   THEME INTEGRITY.

   Both themes are first-class peers, which only stays true if it is checked.
   Two failure modes:

     1. A token exists in dark but not light (or vice versa) — the missing side
        silently inherits the wrong value and something becomes invisible.
     2. A component hardcodes a colour, so it cannot follow the theme at all.
   ========================================================================= */

const ROOT = join(import.meta.dirname, '..')
const tokens = readFileSync(join(ROOT, 'styles', 'tokens.css'), 'utf8')

function blockFor(selector: string): string {
  const start = tokens.indexOf(selector)
  expect(start, `${selector} block not found`).toBeGreaterThan(-1)
  const open = tokens.indexOf('{', start)
  const close = tokens.indexOf('\n}', open)
  return tokens.slice(open, close)
}

function tokenNames(block: string): string[] {
  return [...block.matchAll(/^\s*(--gr-[a-z0-9-]+):/gm)].map((m) => m[1]!)
}

const darkBlock = blockFor("[data-theme='dark']")
const lightBlock = blockFor("[data-theme='light']")

describe('Both themes declare the same token surface', () => {
  it('declares a light theme at all', () => {
    expect(lightBlock.length).toBeGreaterThan(0)
    expect(lightBlock).toContain('color-scheme: light')
  })

  it('every dark token has a light counterpart', () => {
    const dark = tokenNames(darkBlock)
    const light = new Set(tokenNames(lightBlock))
    const missing = dark.filter((name) => !light.has(name))
    expect(
      missing,
      'These tokens exist in dark but not light. The light theme will ' +
        'inherit the dark value and something will be unreadable.',
    ).toEqual([])
  })

  it('every light token has a dark counterpart', () => {
    const light = tokenNames(lightBlock)
    const dark = new Set(tokenNames(darkBlock))
    const missing = light.filter((name) => !dark.has(name))
    expect(missing).toEqual([])
  })

  it('covers the full palette, not just surfaces', () => {
    const light = tokenNames(lightBlock)
    for (const required of [
      '--gr-surface-canvas',
      '--gr-text-primary',
      '--gr-text-tertiary',
      '--gr-line-subtle',
      '--gr-brand-500',
      '--gr-accent-500',
      '--gr-critical',
      '--gr-positive',
      '--gr-conf-high',
      '--gr-conf-insufficient',
      '--gr-elev-2',
      '--gr-focus',
    ]) {
      expect(light, required).toContain(required)
    }
  })
})

/* ------------------------------------------------------------------------ */

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
    else if (/\.tsx$/.test(full)) files.push(full)
  }
  return files
}

const sourceFiles = [
  ...walk(join(ROOT, 'app')),
  ...walk(join(ROOT, 'components')),
].filter((f) => !f.includes('kitchen-sink'))

describe('No component hardcodes a colour', () => {
  it('no hex literals outside the token file', () => {
    const offenders: string[] = []
    for (const file of sourceFiles) {
      const source = readFileSync(file, 'utf8')
      // The layout's themeColor meta is a browser-chrome hint, not a token,
      // and must be a literal per the metadata API.
      if (file.endsWith(join('app', 'layout.tsx'))) continue
      const hits = source.match(/#[0-9a-fA-F]{6}\b/g)
      if (hits) offenders.push(`${file.slice(ROOT.length + 1)} — ${hits[0]}`)
    }
    expect(
      offenders,
      'Colour must come from a token so it follows the theme.',
    ).toEqual([])
  })

  it('no theme-blind Tailwind colour utilities', () => {
    const offenders: string[] = []
    for (const file of sourceFiles) {
      const source = readFileSync(file, 'utf8')
      /* `text-white` is legitimate ONLY as the foreground of a fixed-darkness
         brand fill, which stays dark in both themes. Two components own that
         exception — Button and BrandBadge — so no page has to re-argue it.
         Everywhere else, white text breaks the light theme. */
      const allowWhite =
        file.endsWith(join('components', 'ui', 'Button.tsx')) ||
        file.endsWith(join('components', 'visual', 'Primitives.tsx'))
      const pattern = allowWhite
        ? /\b(bg-black|text-black|bg-white)\b/
        : /\b(bg-black|text-black|bg-white|text-white)\b/
      if (pattern.test(source)) offenders.push(file.slice(ROOT.length + 1))
    }
    expect(offenders).toEqual([])
  })
})

describe('The no-flash script is wired correctly', () => {
  const layout = readFileSync(join(ROOT, 'app', 'layout.tsx'), 'utf8')
  const script = readFileSync(
    join(ROOT, 'lib', 'theme', 'ThemeScript.tsx'),
    'utf8',
  )

  it('runs in <head>, before paint', () => {
    expect(layout).toContain('<head>')
    expect(layout).toContain('<ThemeScript />')
  })

  it('suppresses hydration warnings on <html>', () => {
    expect(layout).toContain('suppressHydrationWarning')
  })

  it('reads storage first, then falls back to the system preference', () => {
    expect(script).toContain('localStorage.getItem')
    expect(script).toContain('prefers-color-scheme')
    expect(script).toContain('data-theme')
  })

  it('falls back safely when storage throws', () => {
    expect(script).toMatch(/catch[\s\S]*data-theme/)
  })
})

describe('The theme toggle is accessible', () => {
  const toggle = readFileSync(
    join(ROOT, 'components', 'shell', 'ThemeToggle.tsx'),
    'utf8',
  )

  it('is a real button with a label and pressed state', () => {
    expect(toggle).toContain('type="button"')
    expect(toggle).toContain('aria-label')
    expect(toggle).toContain('aria-pressed')
  })

  it('is fixed bottom-right and safe-area aware', () => {
    expect(toggle).toContain('fixed')
    expect(toggle).toMatch(/bottom-\[max\(/)
    expect(toggle).toMatch(/end-\[max\(/)
    expect(toggle).toContain('safe-area-inset')
  })

  it('sits below modal layers so it cannot cover a dialog', () => {
    const z = toggle.match(/z-\[(\d+)\]/)
    expect(z).not.toBeNull()
    expect(Number(z![1])).toBeLessThan(200)
  })
})
