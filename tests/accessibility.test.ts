import { describe, expect, it } from 'vitest'
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'

/* ============================================================================
   Structural accessibility guards.

   These do not replace a real audit with a screen reader — they catch the
   regressions that creep in silently as pages are added: an icon-only control
   without a name, an SVG with no role, a colour-only status.

   Brief §17.1 requires accessibility and reduced-motion support; §16 requires
   auditability. Both are easier to keep than to retrofit.
   ========================================================================= */

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
    else if (/\.tsx$/.test(full)) files.push(full)
  }
  return files
}

const files = [...walk(join(ROOT, 'app')), ...walk(join(ROOT, 'components'))]

function relative(file: string): string {
  return file.slice(ROOT.length + 1)
}

function read(file: string): string {
  return readFileSync(file, 'utf8')
}

describe('Every decorative SVG is hidden from assistive technology', () => {
  it('no <svg> lacks both aria-hidden and an accessible role', () => {
    const offenders: string[] = []

    for (const file of files) {
      const source = read(file)
      // Match each opening <svg ...> tag and inspect its attributes.
      const tags = source.match(/<svg[^>]*>/g) ?? []
      for (const tag of tags) {
        const hidden = tag.includes('aria-hidden')
        const labelled =
          tag.includes('role="img"') ||
          tag.includes('role="group"') ||
          tag.includes('aria-label')
        if (!hidden && !labelled) {
          offenders.push(`${relative(file)} — ${tag.slice(0, 70)}`)
        }
      }
    }

    expect(
      offenders,
      'An <svg> must either be aria-hidden (decorative) or carry role="img"/' +
        'role="group" with an aria-label (meaningful). Neither is a default.',
    ).toEqual([])
  })
})

describe('Icon-only controls carry an accessible name', () => {
  it('no button renders only an svg without aria-label', () => {
    const offenders: string[] = []

    for (const file of files) {
      const source = read(file)
      /* A <button> whose entire body is an <svg> and which has no aria-label
         reaches a screen reader as "button" and nothing else. */
      const pattern = /<button(?![^>]*aria-label)[^>]*>\s*<svg/g
      if (pattern.test(source)) offenders.push(relative(file))
    }

    expect(
      offenders,
      'A button containing only an icon needs aria-label — otherwise it is ' +
        'announced as an unnamed button.',
    ).toEqual([])
  })
})

describe('Form inputs are labelled', () => {
  it('every input is associated with a label or carries aria-label', () => {
    const offenders: string[] = []

    for (const file of files) {
      const source = read(file)
      const inputs = source.match(/<input[^>]*>/g) ?? []
      for (const input of inputs) {
        // Radios and checkboxes are wrapped in <label> in this codebase.
        const wrapped =
          input.includes('type="radio"') || input.includes('type="checkbox"')
        const named =
          input.includes('aria-label') ||
          input.includes('id="gr-') /* paired with htmlFor="gr-…" */
        if (!wrapped && !named) {
          offenders.push(`${relative(file)} — ${input.slice(0, 70)}`)
        }
      }
    }

    expect(offenders).toEqual([])
  })
})

describe('The reduced-motion contract is honoured', () => {
  const tokens = readFileSync(join(ROOT, 'styles', 'tokens.css'), 'utf8')

  it('CSS switches every duration to zero under reduce', () => {
    expect(tokens).toContain('prefers-reduced-motion: reduce')
    expect(tokens).toContain('--gr-dur-scan: 0ms')
    expect(tokens).toContain('--gr-dur-reveal: 0ms')
  })

  it('looping animations are switched off outright, not shortened', () => {
    expect(tokens).toMatch(/\.gr-loop\s*\{\s*animation:\s*none/)
  })

  it('traced paths render fully drawn rather than animating', () => {
    expect(tokens).toMatch(/\.gr-trace\s*\{[\s\S]*stroke-dashoffset:\s*0/)
  })

  it('every looping animation in a component carries .gr-loop', () => {
    const offenders: string[] = []
    for (const file of files) {
      const source = read(file)
      // `infinite` marks a loop; it must be tagged so CSS can disable it.
      if (source.includes('infinite') && !source.includes('gr-loop')) {
        offenders.push(relative(file))
      }
    }
    expect(
      offenders,
      'A looping animation must carry the .gr-loop class so the ' +
        'reduced-motion rule can switch it off.',
    ).toEqual([])
  })

  it('scroll reveals resolve instantly under reduce', () => {
    expect(tokens).toMatch(/\.gr-reveal\s*\{[\s\S]*opacity:\s*1\s*!important/)
  })

  it('every added motion surface branches on the preference in JS', () => {
    /* CSS alone cannot stop a JS-driven IntersectionObserver from leaving an
       element at opacity 0, nor a route template from wrapping content in an
       animation. Each must opt out in code as well. */
    for (const component of [
      join('components', 'motion', 'Reveal.tsx'),
      join('components', 'ui', 'Skeleton.tsx'),
      join('app', '(marketing)', 'template.tsx'),
    ]) {
      const source = readFileSync(join(ROOT, component), 'utf8')
      expect(source, component).toContain('useReducedMotion')
    }
  })

  it('reduced motion renders content visible rather than animating to visible', () => {
    // Reveal must set revealed=true and skip the observer entirely — animating
    // to opacity:1 in 0ms still risks a frame of invisible content.
    const reveal = readFileSync(
      join(ROOT, 'components', 'motion', 'Reveal.tsx'),
      'utf8',
    )
    expect(reveal).toMatch(/if \(reduced\)[\s\S]{0,120}setRevealed\(true\)/)

    // The route template returns children unwrapped.
    const template = readFileSync(
      join(ROOT, 'app', '(marketing)', 'template.tsx'),
      'utf8',
    )
    expect(template).toMatch(/if \(reduced\) return/)
  })

  it('smooth scrolling is disabled under reduce', () => {
    const globals = readFileSync(join(ROOT, 'styles', 'globals.css'), 'utf8')
    expect(globals).toMatch(
      /prefers-reduced-motion: reduce\)\s*\{\s*html\s*\{\s*scroll-behavior:\s*auto/,
    )
  })

  it('JS honours the preference as well as CSS', () => {
    const hook = readFileSync(
      join(ROOT, 'lib', 'hooks', 'useReducedMotion.ts'),
      'utf8',
    )
    expect(hook).toContain('prefers-reduced-motion: reduce')

    // The two progressive-reveal visuals must both branch on it.
    for (const component of [
      join('components', 'signal', 'CausalSignalChain.tsx'),
      join('components', 'viz', 'DecisionGraph.tsx'),
    ]) {
      const source = readFileSync(join(ROOT, component), 'utf8')
      expect(source, component).toContain('useReducedMotion')
    }
  })
})

describe('SVG positioning is never clobbered by a CSS animation', () => {
  /* A CSS `transform` PROPERTY overrides the SVG `transform` ATTRIBUTE. An
     element positioned by the attribute must therefore only ever be animated
     on opacity — `gr-fade-up` ends on `transform: none`, which silently
     collapses every node onto the origin. This shipped once; the graph
     rendered as a single stack of overlapping nodes. */
  const TRANSFORMING_KEYFRAMES = ['gr-fade-up', 'gr-scan']

  it('no element with a transform attribute animates its transform', () => {
    const offenders: string[] = []

    for (const file of files) {
      const source = readFileSync(file, 'utf8')
      // Find JSX elements carrying a transform attribute.
      const blocks = source.split(/(?=<[a-zA-Z])/)
      for (const block of blocks) {
        const head = block.slice(0, 700)
        if (!/transform=\{?[`'"]translate/.test(head)) continue
        for (const keyframe of TRANSFORMING_KEYFRAMES) {
          // Ignore prose: only flag an actual animation shorthand.
          if (new RegExp(`animation:\\s*\`?${keyframe}`).test(head)) {
            offenders.push(`${relative(file)} — ${keyframe}`)
          }
        }
      }
    }

    expect(
      offenders,
      'This element is positioned by the SVG transform attribute, so a CSS ' +
        'transform animation will override it. Animate opacity instead ' +
        '(gr-fade-in), or wrap it in an outer <g> that owns the translate.',
    ).toEqual([])
  })
})

describe('The graph table fallback is available without interaction', () => {
  it('renders open by default', () => {
    const source = readFileSync(
      join(ROOT, 'components', 'viz', 'DecisionGraph.tsx'),
      'utf8',
    )
    expect(source).toMatch(/<details\s+open/)
  })
})

describe('Status is never carried by colour alone', () => {
  it('confidence badges pair a glyph with a text label', () => {
    const source = readFileSync(
      join(ROOT, 'components', 'signal', 'ConfidenceBadge.tsx'),
      'utf8',
    )
    expect(source).toContain('GLYPH')
    expect(source).toContain('sr-only')
  })

  it('trend chips pair a glyph with a text label', () => {
    const source = readFileSync(
      join(ROOT, 'components', 'signal', 'Indicators.tsx'),
      'utf8',
    )
    expect(source).toMatch(/glyph/i)
    expect(source).toMatch(/label/i)
  })
})

describe('Every page has one main landmark and a skip link', () => {
  it('the root layout provides a skip link targeting #main', () => {
    const layout = readFileSync(join(ROOT, 'app', 'layout.tsx'), 'utf8')
    expect(layout).toContain('href="#main"')
    expect(layout).toContain('gr-skip')
  })

  it('every layout or standalone page renders id="main"', () => {
    /* Route groups each own a shell; standalone routes render their own. */
    const shells = [
      join('app', '(marketing)', 'layout.tsx'),
      join('components', 'shell', 'AppShell.tsx'),
      join('app', '(commerce)', 'checkout', 'CheckoutFlow.tsx'),
      join('app', '(commerce)', 'checkout', 'success', 'Success.tsx'),
      join('app', 'signin', 'page.tsx'),
      join('app', 'not-found.tsx'),
    ]
    for (const shell of shells) {
      const source = readFileSync(join(ROOT, shell), 'utf8')
      expect(source, shell).toContain('id="main"')
    }
  })
})
