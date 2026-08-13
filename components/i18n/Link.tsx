'use client'

import NextLink from 'next/link'
import type { ComponentProps } from 'react'
import { useI18n } from '@/lib/i18n/context'
import { localePath } from '@/lib/i18n/config'

/* ============================================================================
   A Link that cannot drop the visitor's language.

   Requirements doc §8: "The selected language must remain consistent while
   navigating between pages." With locale-prefixed routes that consistency is
   carried entirely by the href, which makes a single un-prefixed `<Link>`
   enough to bounce a Hebrew reader back into English mid-journey — the kind
   of bug that is invisible in the language you happen to be testing in.

   So every internal link in the site goes through here instead of importing
   `next/link` directly, and tests/i18n.test.ts fails the build if one does not.

   next/link is already a Client Component, so this wrapper introduces no new
   boundary; it only reads the locale that the provider already holds.
   ========================================================================= */

type LinkProps = ComponentProps<typeof NextLink>

/** Absolute URLs, protocol-relative URLs, bare fragments and mailto: are
    passed through untouched — none of them are internal navigation. */
function isInternal(href: string): boolean {
  return href.startsWith('/') && !href.startsWith('//')
}

export function Link({ href, ...props }: LinkProps) {
  const { locale } = useI18n()

  const resolved =
    typeof href === 'string' && isInternal(href)
      ? localePath(href, locale)
      : href

  return <NextLink href={resolved} {...props} />
}
