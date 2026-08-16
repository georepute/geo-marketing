import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { DEFAULT_LOCALE, isLocale, type Locale } from '@/lib/i18n/config'

/* ============================================================================
   BLOG SOURCE — requirements doc §8, "one place for the blog, where we can
   upload articles and content that will promote the site".

   Articles are MDX-ish files in content/blog/<locale>/. Chosen over a CMS for
   launch: no service dependency, no key to provision, per-locale by
   construction, and publishing is a commit.

   THE INTERFACE IS THE POINT. Pages call `listPosts` / `getPost` and know
   nothing about where the content came from. Swapping in Sanity or Contentful
   later means writing a second module with these two functions — the routes,
   layouts, metadata and SEO do not change.

   FRONTMATTER, PARSED WITHOUT A DEPENDENCY
   The subset used here is flat `key: value` pairs and nothing else, which is
   thirty lines to parse and avoids pulling gray-matter plus a YAML engine in
   for it. If frontmatter ever needs nested structures, that trade flips —
   take the dependency then rather than growing this.
   ========================================================================= */

export interface Post {
  slug: string
  locale: Locale
  title: string
  description: string
  /** ISO date. Used for ordering and for <time datetime>. */
  date: string
  author?: string
  /** Minutes, computed from the body rather than authored. */
  readingMinutes: number
  /** Raw markdown body, frontmatter removed. */
  body: string
  /** Hides the post from listings and the sitemap without deleting it. */
  draft: boolean
}

const CONTENT_ROOT = join(process.cwd(), 'content', 'blog')

function parseFrontmatter(raw: string): {
  meta: Record<string, string>
  body: string
} {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(raw)
  if (!match) return { meta: {}, body: raw }

  const meta: Record<string, string> = {}
  for (const line of match[1]!.split(/\r?\n/)) {
    const separator = line.indexOf(':')
    if (separator === -1) continue
    const key = line.slice(0, separator).trim()
    let value = line.slice(separator + 1).trim()
    /* Strip one layer of matching quotes, which is how a title containing a
       colon has to be written. */
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1)
    }
    meta[key] = value
  }

  return { meta, body: raw.slice(match[0].length) }
}

/** ~200 words per minute, floored at 1 so nothing reads "0 min". */
function readingMinutes(body: string): number {
  const words = body.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 200))
}

function localeDir(locale: Locale): string {
  return join(CONTENT_ROOT, locale)
}

function readPost(locale: Locale, file: string): Post | null {
  const path = join(localeDir(locale), file)
  if (!existsSync(path)) return null

  const { meta, body } = parseFrontmatter(readFileSync(path, 'utf8'))
  const slug = file.replace(/\.mdx?$/, '')

  return {
    slug,
    locale,
    title: meta.title ?? slug,
    description: meta.description ?? '',
    date: meta.date ?? '1970-01-01',
    author: meta.author,
    readingMinutes: readingMinutes(body),
    body,
    draft: meta.draft === 'true',
  }
}

/**
 * Posts for a locale, newest first.
 *
 * Falls back to the default locale when a translation does not exist, so a
 * Hebrew reader sees the English article rather than an empty blog. Doc §8
 * asks for every public page to work in every language; an empty page
 * technically satisfies that and obviously fails it.
 */
export function listPosts(locale: string): Post[] {
  const active = isLocale(locale) ? locale : DEFAULT_LOCALE

  const dir = existsSync(localeDir(active)) ? active : DEFAULT_LOCALE
  if (!existsSync(localeDir(dir))) return []

  return readdirSync(localeDir(dir))
    .filter((file) => /\.mdx?$/.test(file))
    .map((file) => readPost(dir, file))
    .filter((post): post is Post => post !== null && !post.draft)
    .sort((a, b) => b.date.localeCompare(a.date))
}

export function getPost(locale: string, slug: string): Post | null {
  const active = isLocale(locale) ? locale : DEFAULT_LOCALE

  for (const dir of [active, DEFAULT_LOCALE]) {
    for (const extension of ['.mdx', '.md']) {
      const post = readPost(dir, `${slug}${extension}`)
      if (post && !post.draft) return post
    }
  }
  return null
}

/** Every slug that should be prerendered and listed in the sitemap. */
export function allPostSlugs(): string[] {
  if (!existsSync(localeDir(DEFAULT_LOCALE))) return []
  return listPosts(DEFAULT_LOCALE).map((post) => post.slug)
}
