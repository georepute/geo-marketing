'use client'

import { usePathname } from 'next/navigation'
import NextLink from 'next/link'
import { useI18n } from '@/lib/i18n/context'
import { LOCALES, localePath, stripLocale } from '@/lib/i18n/config'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/Primitives'
import { cn } from '@/lib/utils/cn'

/* ============================================================================
   Language switcher — requirements doc §8, "available across the entire
   website".

   STAYS ON THE PAGE. Switching language from /he/marketplace goes to
   /en/marketplace, not to the English home page. Being dumped back to the
   root for changing language is the single most common failure of a bilingual
   site, and it is the one that makes people give up on the other language.

   REAL LINKS, NOT A SELECT. Each option is an <a href>, so a search engine
   can crawl every translation of the current page and a visitor can open one
   in a new tab. A <select> that navigates on change does neither.

   Uses NextLink directly rather than the locale-aware Link: this component
   builds locale prefixes itself and must not have the current one applied on
   top.
   ========================================================================= */

export function LanguageSwitcher({
  className,
  align = 'end',
}: {
  className?: string
  align?: 'start' | 'center' | 'end'
}) {
  const { locale, dict } = useI18n()
  const pathname = usePathname()

  /* The path without its locale, so it can be re-prefixed with any other. */
  const bare = stripLocale(pathname)
  const active = LOCALES.find((l) => l.code === locale)

  return (
    <Popover>
      <PopoverTrigger
        /* The endonym, not the English name: on a Hebrew page "Language:
           Hebrew" is the one string a screen reader would still read in
           English, and the endonym is what the trigger already shows. */
        aria-label={`${dict.language.label}: ${active?.endonym ?? 'English'}`}
        className={cn(
          'inline-flex items-center gap-2 px-2.5 py-2 rounded-sm',
          'text-caption text-ink-2',
          'hover:text-ink hover:bg-panel active:bg-inset',
          'transition-colors duration-[var(--gr-dur-fast)] ease-(--ease-standard)',
          className,
        )}
      >
        <GlobeIcon />
        <span className="hidden sm:inline">{active?.endonym}</span>
        <span className="sm:hidden uppercase">{locale}</span>
      </PopoverTrigger>

      <PopoverContent
        align={align}
        className="w-56 p-1.5"
        aria-label={dict.language.choose}
      >
        <ul>
          {LOCALES.map((option) => {
            const isActive = option.code === locale
            return (
              <li key={option.code}>
                <NextLink
                  href={localePath(bare, option.code)}
                  hrefLang={option.code}
                  lang={option.code}
                  dir={option.dir}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'flex items-center justify-between gap-3 rounded-sm px-3 py-2.5',
                    'transition-colors duration-[var(--gr-dur-fast)]',
                    isActive
                      ? 'bg-panel text-ink'
                      : 'text-ink-2 hover:bg-panel hover:text-ink',
                  )}
                >
                  {/* The endonym is never translated — that is the whole
                      point of listing a language in its own script. */}
                  <span className="text-body">{option.endonym}</span>
                  <span
                    className="text-label uppercase text-ink-3 shrink-0"
                    dir="ltr"
                  >
                    {option.code}
                  </span>
                  {isActive ? (
                    <span className="sr-only">{dict.language.current}</span>
                  ) : null}
                </NextLink>
              </li>
            )
          })}
        </ul>
      </PopoverContent>
    </Popover>
  )
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden className="size-4 shrink-0">
      <circle
        cx="8"
        cy="8"
        r="6.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M8 1.75c1.8 1.7 2.7 3.8 2.7 6.25S9.8 12.55 8 14.25C6.2 12.55 5.3 10.45 5.3 8S6.2 3.45 8 1.75Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M2.1 6.1h11.8M2.1 9.9h11.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  )
}
