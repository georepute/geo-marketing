import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Link } from '@/components/i18n/Link'
import { Button } from '@/components/ui/Button'
import { Markdown } from '@/components/blog/Markdown'
import { getDictionary, getLocale } from '@/lib/i18n/server'
import { localeConfig, LOCALES, localePath } from '@/lib/i18n/config'
import { getPost, listPosts, allPostSlugs } from '@/lib/blog/source'

/* One page per article per locale. Slugs are shared across languages, which
   is what lets hreflang point at the translations of the same article. */
export function generateStaticParams() {
  return allPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const locale = await getLocale()
  const post = getPost(locale, slug)
  if (!post) return { title: 'Article not found' }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: localePath(`/blog/${slug}`, locale),
      languages: Object.fromEntries(
        LOCALES.map((l) => [l.code, localePath(`/blog/${slug}`, l.code)]),
      ),
    },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      publishedTime: post.date,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const dict = await getDictionary()
  const locale = await getLocale()
  const post = getPost(locale, slug)
  if (!post) notFound()

  const intl = localeConfig(locale).intl
  const more = listPosts(locale)
    .filter((p) => p.slug !== slug)
    .slice(0, 2)

  return (
    <>
      <article>
        <header className="gr-rail pt-16 pb-10 lg:pt-20">
          <nav aria-label={dict.a11y.breadcrumb} className="mb-8">
            <Link
              href="/blog"
              className="text-caption text-ink-3 hover:text-ink-2 transition-colors"
            >
              <span aria-hidden className="gr-arrow">
                ←
              </span>{' '}
              {dict.blog.title}
            </Link>
          </nav>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className="text-label uppercase text-brand-300">
              <time dateTime={post.date}>
                {new Intl.DateTimeFormat(intl, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                }).format(new Date(post.date))}
              </time>
            </p>
            <span aria-hidden className="text-ink-3">
              ·
            </span>
            <p className="text-label uppercase text-ink-3">
              {post.readingMinutes} {dict.blog.readTime}
            </p>
          </div>

          <h1 className="text-display-2 text-ink mt-6 max-w-3xl text-balance">
            {post.title}
          </h1>
          {post.description ? (
            <p className="text-body-lg text-ink-2 mt-6 max-w-2xl">
              {post.description}
            </p>
          ) : null}
          {post.author ? (
            <p className="text-caption text-ink-3 mt-6 pt-5 border-t border-line">
              {post.author}
            </p>
          ) : null}
        </header>

        <div className="gr-rail pb-16">
          <Markdown body={post.body} />
        </div>
      </article>

      {more.length > 0 ? (
        <section className="gr-hairline">
          <div className="gr-rail gr-section-tight">
            <p className="text-label uppercase text-ink-3">
              {dict.blog.more}
            </p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {more.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="block h-full rounded-md border border-line bg-panel p-5 hover:border-brand-400/60 transition-colors"
                  >
                    <p className="text-body text-ink text-balance">{p.title}</p>
                    <p className="text-caption text-ink-2 mt-2">
                      {p.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="gr-hairline">
        <div className="gr-rail gr-section-tight text-center">
          <p className="text-body-lg text-ink max-w-xl mx-auto text-balance">
            {dict.blog.ctaBody}
          </p>
          <div className="mt-7">
            <Button asChild variant="primary" size="lg">
              <Link href="/app/reconstruct">{dict.home.heroCtaPrimary}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
