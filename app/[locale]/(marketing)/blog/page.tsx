import type { Metadata } from 'next'
import { Link } from '@/components/i18n/Link'
import { Reveal } from '@/components/motion/Reveal'
import { ImageWithScrim } from '@/components/visual/ImageWithScrim'
import { getDictionary, getLocale } from '@/lib/i18n/server'
import { localeConfig } from '@/lib/i18n/config'
import { listPosts } from '@/lib/blog/source'
import { cn } from '@/lib/utils/cn'

export const metadata: Metadata = {
  title: 'Intelligence Notes',
  description:
    'Writing on decision intelligence — how businesses are recognised, evaluated, recommended and chosen across AI engines, search and market perception.',
}

/* ============================================================================
   BLOG INDEX — requirements doc §8, "one place for the blog, where we can
   upload articles and content that will promote the site".

   Articles come from lib/blog/source.ts, which reads MDX from
   content/blog/<locale>/. The route knows nothing about that: swapping in a
   CMS later replaces the source module and leaves this file untouched.
   ========================================================================= */

export default async function BlogIndexPage() {
  const dict = await getDictionary()
  const locale = await getLocale()
  const posts = listPosts(locale)
  const intl = localeConfig(locale).intl

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <ImageWithScrim
          image="terrain"
          scrim="heavy"
          priority
          sizes="100vw"
          className="-z-10"
        />
        <div aria-hidden className="absolute inset-0 gr-dotgrid opacity-40 -z-10" />

        <div className="gr-rail-wide relative pt-20 pb-14 lg:pt-24">
          <p className="text-label uppercase text-brand-300">
            {dict.blog.eyebrow}
          </p>
          <h1 className="text-display-1 text-ink mt-6 max-w-3xl text-balance">
            {dict.blog.title}
          </h1>
          <p className="text-body-lg text-ink-2 mt-6 max-w-2xl">
            {dict.blog.lede}
          </p>
        </div>
      </section>

      <section className="gr-hairline">
        <div className="gr-rail-wide gr-section-tight">
          {posts.length === 0 ? (
            <p className="text-body text-ink-2">{dict.blog.empty}</p>
          ) : (
            <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, index) => (
                <Reveal as="li" key={post.slug} delay={index * 60}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className={cn(
                      'group flex flex-col h-full rounded-md border border-line bg-panel p-6',
                      'transition-colors duration-[var(--gr-dur-fast)]',
                      'hover:border-brand-400/60 hover:bg-raised',
                    )}
                  >
                    <p className="text-label uppercase text-ink-3">
                      <time dateTime={post.date}>
                        {new Intl.DateTimeFormat(intl, {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        }).format(new Date(post.date))}
                      </time>
                    </p>

                    <p className="text-h3 text-ink mt-4 text-balance">
                      {post.title}
                    </p>
                    <p className="text-caption text-ink-2 mt-3 grow">
                      {post.description}
                    </p>

                    <span className="flex items-center justify-between gap-3 mt-6 pt-4 border-t border-line">
                      <span className="text-caption text-ink-3">
                        {post.readingMinutes} {dict.blog.readTime}
                      </span>
                      <span
                        aria-hidden
                        className="gr-arrow text-ink-3 group-hover:text-ink transition-colors"
                      >
                        →
                      </span>
                    </span>
                  </Link>
                </Reveal>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  )
}
