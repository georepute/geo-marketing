import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Price } from '@/components/commerce/Price'
import { ModuleCard } from '@/components/marketplace/ModuleCard'
import { ImageWithScrim } from '@/components/visual/ImageWithScrim'
import { Reveal } from '@/components/motion/Reveal'
import { CATEGORY_ICON } from '@/lib/visual/icons'
import { count } from '@/lib/format'
import { flags } from '@/lib/flags'
import { cn } from '@/lib/utils/cn'
import { getCategory, getEcosystem } from '@/lib/api/client'
import type { IntelligenceEngine, IntelligenceProduct } from '@/lib/api/types'

export async function generateStaticParams() {
  const ecosystem = await getEcosystem()
  return ecosystem.data.categories.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const category = await getCategory(slug)
  if (!category.data) return { title: 'Category not found' }
  return {
    title: category.data.name,
    description: category.data.question,
  }
}

/* ============================================================================
   ONE INTELLIGENCE CATEGORY.

   The second of three planes: ecosystem → CATEGORY → module. A visitor
   arrives here having chosen a kind of question, so this page can afford the
   density the ecosystem page deliberately refuses.

   Modules lead with the question, not the name — the reverse of the category
   card. The reasoning is that a name is a hook and a question is an offer.
   On the ecosystem page a reader is browsing and needs to be surprised; here
   they have self-selected and need to find the specific thing they came for,
   which they will recognise by its question.

   Engines appear at the bottom, under "how this is produced", because the
   direction is explicit that engines are the underlying technology and not
   the navigation. Nobody arrives wanting to buy an engine.
   ========================================================================= */

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const [category, ecosystem] = await Promise.all([
    getCategory(slug),
    getEcosystem(),
  ])
  if (!category.data) notFound()

  const c = category.data
  const Icon = CATEGORY_ICON[c.slug]
  const liveCount = c.modules.filter((m) => m.live).length
  const others = ecosystem.data.categories.filter((o) => o.slug !== c.slug)

  return (
    <>
      {/* ================================================================
          IDENTITY
          ============================================================== */}
      <section className="relative isolate overflow-hidden">
        <ImageWithScrim
          image="circuitry"
          scrim="heavy"
          priority
          sizes="100vw"
          className="-z-10"
        />
        <div
          aria-hidden
          className="absolute inset-0 gr-dotgrid opacity-30 -z-10"
        />

        <div className="gr-rail-wide relative pt-16 pb-14 lg:pt-20 lg:pb-16">
          <Link
            href="/marketplace"
            className="inline-flex items-center gap-2 text-caption text-ink-2 hover:text-ink transition-colors"
          >
            <ArrowLeft aria-hidden className="size-3.5" />
            All intelligence categories
          </Link>

          <p className="flex items-center gap-3 text-label uppercase text-brand-300 mt-8">
            {Icon ? <Icon aria-hidden className="size-4" /> : null}
            {c.name}
          </p>

          <h1 className="text-display-1 text-ink mt-5 max-w-4xl text-balance">
            {c.question}
          </h1>

          <p className="text-body-lg text-ink-2 mt-6 max-w-2xl">
            {c.explanation}
          </p>

          <p className="text-caption text-ink-3 mt-8">
            <span className="text-ink" data-numeric="">
              {count(c.modules.length)}
            </span>{' '}
            intelligence modules in this category
            {liveCount > 0 ? (
              <>
                {' · '}
                <span className="text-ink" data-numeric="">
                  {count(liveCount)}
                </span>{' '}
                running live in this environment
              </>
            ) : null}
            .
          </p>
        </div>
      </section>

      {/* ================================================================
          THE MODULES
          ============================================================== */}
      <section className="gr-hairline">
        <div className="gr-rail-wide gr-section">
          <Reveal>
            <h2 className="text-display-2 text-ink max-w-3xl text-balance">
              Every module answers one question.
            </h2>
            <p className="text-body-lg text-ink-2 mt-5 max-w-2xl">
              Each returns the evidence behind its answer, what that answer
              means commercially, and what should change as a result.
            </p>
          </Reveal>

          <Reveal delay={80} className="mt-10">
            <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 items-stretch">
              {c.modules.map((mod) => (
                <ModuleCard key={mod.slug} module={mod} />
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ================================================================
          BUY THIS CATEGORY
          ============================================================== */}
      {c.products.length > 0 ? (
        <section className="gr-hairline">
          <div className="gr-rail-wide gr-section">
            <Reveal>
              <p className="text-label uppercase text-brand-300">
                Buy this intelligence
              </p>
              <h2 className="text-display-2 text-ink mt-4 max-w-3xl text-balance">
                Take one question, or take the whole category.
              </h2>
              <p className="text-body-lg text-ink-2 mt-5 max-w-2xl">
                Each purchase states what it examines, what it needs from you,
                how confident it can be and what it costs. No sales call is
                required to find any of that out.
              </p>
            </Reveal>

            <Reveal delay={80} className="mt-10">
              <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {c.products.map((product) => (
                  <ProductRow key={product.slug} product={product} />
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      ) : null}

      {/* ================================================================
          HOW IT IS PRODUCED — the technology, deliberately last.
          ============================================================== */}
      <section className="gr-hairline">
        <div className="gr-rail-wide gr-section">
          <Reveal>
            <p className="text-label uppercase text-brand-300">Underneath</p>
            <h2 className="text-display-2 text-ink mt-4 max-w-3xl text-balance">
              {c.engines.length === 1
                ? 'One engine produces this category.'
                : `${c.engines.length} engines produce this category.`}
            </h2>
            <p className="text-body-lg text-ink-2 mt-5 max-w-2xl">
              Engines are the machinery, not the offer. Nothing above required
              you to know one existed.
            </p>
          </Reveal>

          <Reveal delay={80} className="mt-10">
            <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {c.engines.map((engine) => (
                <EngineRow key={engine.slug} engine={engine} />
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ================================================================
          CONTINUE EXPLORING
          ============================================================== */}
      <section className="gr-hairline">
        <div className="gr-rail-wide gr-section">
          <p className="text-label uppercase text-brand-300">
            Other intelligence categories
          </p>

          <ul className="grid gap-px bg-line border border-line rounded-md overflow-hidden mt-8 md:grid-cols-2 xl:grid-cols-3">
            {others.map((other) => {
              const OtherIcon = CATEGORY_ICON[other.slug]
              return (
                <li key={other.slug}>
                  <Link
                    href={`/marketplace/category/${other.slug}`}
                    className={cn(
                      'group flex items-center gap-4 bg-panel p-5 h-full',
                      'transition-colors duration-[var(--gr-dur-fast)]',
                      'hover:bg-raised',
                    )}
                  >
                    {OtherIcon ? (
                      <OtherIcon
                        aria-hidden
                        className="size-4 text-brand-300 shrink-0"
                      />
                    ) : null}
                    <span className="min-w-0 flex-1">
                      <span className="block text-caption text-ink truncate">
                        {other.name}
                      </span>
                      <span
                        className="block text-caption text-ink-3"
                        data-numeric=""
                      >
                        {count(other.moduleCount)} modules
                      </span>
                    </span>
                    <ArrowRight
                      aria-hidden
                      className={cn(
                        'size-3.5 text-ink-3 shrink-0 transition-transform',
                        'duration-[var(--gr-dur-fast)] group-hover:translate-x-0.5',
                      )}
                    />
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </>
  )
}

/* ------------------------------------------------------------------------ */

function ProductRow({ product }: { product: IntelligenceProduct }) {
  return (
    <li>
      <Link
        href={`/marketplace/${product.slug}`}
        className={cn(
          'group flex flex-col h-full rounded-md border border-line bg-panel p-6',
          'transition-colors duration-[var(--gr-dur-fast)]',
          'hover:border-brand-400/60 hover:bg-raised',
        )}
      >
        <p className="text-label uppercase text-ink-3">{product.depth}</p>
        <p className="text-body text-ink mt-3 text-balance">
          {product.businessQuestion}
        </p>
        <p className="text-caption text-ink-2 mt-3 grow">{product.scope}</p>

        <span className="flex items-center justify-between gap-4 mt-5 pt-4 border-t border-line">
          <span className="text-caption text-ink-3 truncate">
            {product.name}
          </span>
          {/* Doc §4: the price is withheld, so delivery time holds the
              right-hand column and the row keeps its balance. */}
          {flags.pricing ? (
            <Price amount={product.priceUsd} period="one-time" size="sm" />
          ) : (
            <span className="text-caption text-ink-3 shrink-0">
              {product.timeToDelivery}
            </span>
          )}
        </span>
      </Link>
    </li>
  )
}

function EngineRow({ engine }: { engine: IntelligenceEngine }) {
  const inner = (
    <>
      <div className="flex items-start justify-between gap-4">
        <p className="text-caption text-ink">{engine.name}</p>
        {engine.built ? (
          <span
            className="text-label uppercase shrink-0"
            style={{ color: 'var(--gr-positive)' }}
          >
            Built
          </span>
        ) : (
          <span className="text-label uppercase text-ink-3 shrink-0">
            In platform
          </span>
        )}
      </div>
      <p className="text-caption text-ink-2 mt-3">{engine.businessQuestion}</p>
    </>
  )

  return (
    <li>
      {engine.built ? (
        <Link
          href={`/engines/${engine.slug}`}
          className={cn(
            'block h-full rounded-md border border-line bg-panel p-5',
            'transition-colors duration-[var(--gr-dur-fast)]',
            'hover:border-brand-400/60 hover:bg-raised',
          )}
        >
          {inner}
        </Link>
      ) : (
        <div className="h-full rounded-md border border-line bg-panel p-5">
          {inner}
        </div>
      )}
    </li>
  )
}
