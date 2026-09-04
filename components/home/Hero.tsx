'use client'

import { Link } from '@/components/i18n/Link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ImageWithScrim } from '@/components/visual/ImageWithScrim'
import { ParticleField } from '@/components/visual/ParticleField'
import { HeroVisual } from './HeroVisual'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'
import { useDict } from '@/lib/i18n/context'
import { useT } from '@/lib/i18n/content/client'
import { cn } from '@/lib/utils/cn'
import type { Reconstruction } from '@/lib/api/types'

/* ============================================================================
   HERO.

   Four stacked layers, back to front:
     1. Photograph — Earth at night. A planet-scale network of lit
        connections; the most literal image of decision infrastructure in the
        set, and it is a NASA photograph rather than a rendered abstraction.
     2. Scrim + brand tint — the reason the headline holds AA contrast.
     3. Particle constellation — nodes joined by proximity, reacting to the
        pointer. Isolated signals becoming meaningful when connected.
     4. Content — entering in four beats.

   The entrance is staggered by 90ms. Enough to read as sequence; far short of
   a performance. Under reduced motion every beat resolves instantly.
   ========================================================================= */

/* The capability strip. Kept as a list rather than one long sentence so it
   wraps cleanly at every width and each term can be translated on its own.

   GEON, SEO, GEO, YouTube and TikTok are deliberately left untranslated —
   the first is the methodology name and the rest are proper nouns. See
   lib/i18n/GLOSSARY.md. */
const CAPABILITIES = [
  'Google + 6 AI Engines',
  '100+ Deep Business & Marketing Analyses',
  'Competitor Intelligence',
  'Keyword Research',
  'GEON',
  'Marketing Due Diligence',
  'Strategy',
  'Work Plans',
  'Budgets',
  'Resource Planning',
  'Proposals',
  'Content Execution',
  'SEO',
  'GEO',
  'Social',
  'YouTube',
  'TikTok',
  '7 Languages',
  'Continuous PDCA',
] as const

export function Hero({
  reconstruction,
  ownAuthoritySources,
  competitorAuthoritySources,
}: {
  reconstruction: Reconstruction | null
  ownAuthoritySources: number
  competitorAuthoritySources: number
}) {
  const copy = useDict()
  const t = useT()
  const reduced = useReducedMotion()

  const beat = (index: number) =>
    reduced
      ? undefined
      : ({
          animation: `gr-fade-up var(--gr-dur-reveal) var(--gr-ease-enter) ${index * 90}ms both`,
        } as React.CSSProperties)

  return (
    <section className="relative isolate overflow-hidden">
      {/* 1 + 2 — photograph, tinted and scrimmed */}
      <ImageWithScrim
        image="hero"
        priority
        scrim="heavy"
        sizes="100vw"
        className="-z-20"
      />

      {/* 3 — constellation */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <ParticleField />
      </div>

      {/* Radial glow behind the headline, so the type sits in light. */}
      <div
        aria-hidden
        className="absolute -z-10 inset-x-0 top-0 h-[46rem]"
        style={{
          background:
            'radial-gradient(38rem 24rem at 22% 30%, color-mix(in oklab, var(--gr-brand-500) 22%, transparent), transparent 70%)',
        }}
      />

      <div className="gr-rail-wide relative pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,34rem)] items-start">
          <div>
            <p
              className="inline-flex items-center gap-2 text-label uppercase text-brand-300 rounded-full border border-line px-3 py-1 backdrop-blur-sm"
              style={beat(0)}
            >
              <span
                aria-hidden
                className="gr-loop size-1.5 rounded-full"
                style={{
                  background: 'var(--gr-accent-500)',
                  animation: reduced
                    ? undefined
                    : 'gr-pulse var(--gr-dur-scan) var(--gr-ease-standard) infinite',
                }}
              />
              {copy.category}
            </p>

            {/* Both lines are the headline. The second is the qualifier the
                first would otherwise overpromise without, so it is set in the
                same element at lower emphasis rather than demoted to body. */}
            <h1
              className="text-display-1 text-ink mt-7 text-balance"
              style={beat(1)}
            >
              {copy.heroPrimary}
              <span className="block text-ink-2">{copy.heroContinuation}</span>
            </h1>

            <p
              className="text-body-lg text-ink-2 mt-6 max-w-xl"
              style={beat(2)}
            >
              {copy.home.heroSubheadline}
            </p>

            <p
              className="text-body text-ink-3 mt-5 max-w-2xl"
              style={beat(2)}
            >
              {copy.home.heroSupporting}
            </p>

            <div className="flex flex-wrap gap-3 mt-10" style={beat(3)}>
              {/* Animated gradient rim on the single primary route. */}
              <span className="group relative isolate inline-flex rounded-sm">
                <span
                  aria-hidden
                  className={cn(
                    'pointer-events-none absolute -inset-px rounded-[5px] -z-10',
                    'opacity-70 group-hover:opacity-100',
                    'transition-opacity duration-[var(--gr-dur-slow)]',
                  )}
                  style={{
                    background:
                      'linear-gradient(120deg, var(--gr-brand-400), var(--gr-accent-500), var(--gr-brand-400))',
                    backgroundSize: '200% 100%',
                    animation: reduced
                      ? undefined
                      : 'gr-shimmer 5s linear infinite',
                  }}
                />
                <Button asChild variant="primary" size="lg">
                  <Link href="/app/reconstruct">
                    {copy.home.heroCtaPrimary}
                    <ArrowRight className="size-4 ms-1" aria-hidden />
                  </Link>
                </Button>
              </span>

              <Button asChild variant="secondary" size="lg">
                <Link href="/how-it-works">{copy.home.heroCtaSecondary}</Link>
              </Button>
            </div>

            <p
              className="text-caption text-ink-3 mt-9 max-w-lg"
              style={beat(3)}
            >
              {copy.categoryPositioning}
            </p>

            {/* Capability strip. Nineteen terms, so no icons — they would
                turn a scannable line into a wall. The separator is decorative
                and hidden from assistive technology, which reads the list. */}
            <ul
              className="flex flex-wrap items-center gap-y-2 mt-9 pt-8 border-t border-line"
              style={beat(4)}
            >
              {CAPABILITIES.map((label, i) => (
                <li key={label} className="inline-flex items-center">
                  <span className="text-caption text-ink-2">{t(label)}</span>
                  {i < CAPABILITIES.length - 1 ? (
                    <span aria-hidden className="text-caption text-ink-3 mx-2">
                      ·
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>

          {/* 4 — the reconstructed decision, entering last. */}
          <div style={beat(2)}>
            {reconstruction ? (
              <HeroVisual
                data={reconstruction}
                ownAuthoritySources={ownAuthoritySources}
                competitorAuthoritySources={competitorAuthoritySources}
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
