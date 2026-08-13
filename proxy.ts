import { NextResponse, type NextRequest } from 'next/server'
import { DEFAULT_LOCALE, isLocale } from '@/lib/i18n/config'

/* ============================================================================
   LOCALE DETECTION — requirements doc §8.

   Every page lives under /<locale>/…, so a request without one has to be sent
   somewhere. This picks the destination:

     1. An explicit choice, remembered in a cookie. A visitor who used the
        language switcher has told us what they want; nothing should override
        that on their next visit.
     2. Accept-Language, negotiated against the locales we actually ship.
     3. English.

   NO DEPENDENCIES. The negotiation below is ~30 lines and implements the
   quality-value ordering from RFC 9110 §12.5.4. The usual pairing of
   `negotiator` + `@formatjs/intl-localematcher` is two packages and a
   noticeable chunk of edge bundle to do the same job for seven fixed locales.

   Proxy runs before rendering and may be deployed to a CDN, so it must not
   import anything with server state. lib/i18n/config.ts is plain data.
   ========================================================================= */

const COOKIE = 'gr-locale'
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365

/**
 * Best match from an Accept-Language header.
 *
 * Handles the two things a naive `split(',')[0]` gets wrong: q-values are
 * ranked rather than assumed to be in order, and a regional tag falls back to
 * its base language, so `pt-BR` finds `pt` and `he-IL` finds `he`.
 */
function negotiate(header: string | null): string | null {
  if (!header) return null

  const ranked = header
    .split(',')
    .map((part) => {
      const [tag, ...params] = part.trim().split(';')
      const q = params
        .map((p) => p.trim())
        .find((p) => p.startsWith('q='))
        ?.slice(2)
      const quality = q === undefined ? 1 : Number.parseFloat(q)
      return {
        tag: (tag ?? '').trim().toLowerCase(),
        quality: Number.isNaN(quality) ? 0 : quality,
      }
    })
    .filter((entry) => entry.tag !== '' && entry.quality > 0)
    .sort((a, b) => b.quality - a.quality)

  for (const { tag } of ranked) {
    if (tag === '*') return DEFAULT_LOCALE
    if (isLocale(tag)) return tag
    const base = tag.split('-')[0]
    if (isLocale(base)) return base
  }

  return null
}

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl

  /* Already localized. Refresh the cookie so an explicit visit to /he keeps
     that choice for next time — deep links are a legitimate way to choose. */
  const current = pathname.split('/')[1]
  if (isLocale(current)) {
    const response = NextResponse.next()
    if (request.cookies.get(COOKIE)?.value !== current) {
      response.cookies.set(COOKIE, current, {
        maxAge: COOKIE_MAX_AGE,
        sameSite: 'lax',
        path: '/',
      })
    }
    return response
  }

  const remembered = request.cookies.get(COOKIE)?.value
  const locale = isLocale(remembered)
    ? remembered
    : (negotiate(request.headers.get('accept-language')) ?? DEFAULT_LOCALE)

  /* 307, not 308. The mapping from `/` to a language is a per-visitor
     decision that changes when they change the cookie, so it must never be
     cached as permanent by a browser or an intermediary. */
  const url = request.nextUrl.clone()
  url.pathname = pathname === '/' ? `/${locale}` : `/${locale}${pathname}`
  url.search = search

  return NextResponse.redirect(url, 307)
}

export const config = {
  /* Everything except Next internals, the metadata routes and anything with a
     file extension — a request for /screens/mission-control.png must not be
     redirected to /en/screens/mission-control.png. */
  matcher: [
    '/((?!_next/static|_next/image|api|robots\\.txt|sitemap\\.xml|.*\\.[\\w]+$).*)',
  ],
}
