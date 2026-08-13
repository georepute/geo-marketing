'use client'

import { Link } from '@/components/i18n/Link'
import { ArrowRight } from 'lucide-react'
import { ImageWithScrim } from './ImageWithScrim'
import { GlassCard, TiltCard } from './Primitives'
import { ICON_BY_KEY } from '@/lib/visual/icons'
import { cn } from '@/lib/utils/cn'
import type { ImageKey } from '@/lib/visual/imagery'

/* ============================================================================
   The card that carries most of the site's richness.

   One component behind engines, products and solutions, so a card looks the
   same wherever it appears. Image accent sits BEHIND the content at low
   opacity with a scrim — never as a header strip, which is the stock-template
   arrangement.
   ========================================================================= */

export function FeatureCard({
  href,
  image,
  iconKey,
  eyebrow,
  title,
  description,
  meta,
  footer,
  tilt = true,
  className,
}: {
  href: string
  image?: ImageKey
  /** A key, not a component: functions cannot cross the server/client
      boundary as props. Resolved from ICON_BY_KEY below. */
  iconKey?: string
  eyebrow?: string
  title: string
  description?: string
  /** Small chips under the description. */
  meta?: string[]
  /** Right-aligned footer content, e.g. a price. */
  footer?: React.ReactNode
  tilt?: boolean
  className?: string
}) {
  const Icon = iconKey ? ICON_BY_KEY[iconKey] : undefined

  const card = (
    <GlassCard
      as="article"
      interactive
      className={cn('group h-full overflow-hidden', className)}
    >
      {image ? (
        <ImageWithScrim
          image={image}
          scrim="heavy"
          sizes="(max-width: 768px) 100vw, 33vw"
          className={cn(
            '-z-10 opacity-45',
            'transition-opacity duration-[var(--gr-dur-slow)] ease-(--ease-standard)',
            'group-hover:opacity-70',
          )}
        />
      ) : null}

      <div className="relative flex h-full flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          {Icon ? (
            <span
              aria-hidden
              className={cn(
                'grid place-items-center size-9 rounded-sm shrink-0',
                'border border-line bg-inset text-brand-300',
                'transition-colors duration-[var(--gr-dur-base)]',
                'group-hover:border-brand-400/60',
              )}
            >
              <Icon className="size-4" />
            </span>
          ) : null}
          {eyebrow ? (
            <span className="text-label uppercase text-ink-3 text-end">
              {eyebrow}
            </span>
          ) : null}
        </div>

        <h3 className="text-h3 text-ink mt-5 text-balance">{title}</h3>

        {description ? (
          <p className="text-caption text-ink-2 mt-3 flex-1">{description}</p>
        ) : (
          <div className="flex-1" />
        )}

        {meta?.length ? (
          <ul className="flex flex-wrap gap-2 mt-5">
            {meta.map((item) => (
              <li
                key={item}
                className="text-label uppercase text-ink-3 rounded-xs border border-line bg-inset px-2 py-1"
              >
                {item}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="flex items-center justify-between gap-3 mt-6 pt-5 border-t border-line">
          {footer ?? <span />}
          <span className="inline-flex items-center gap-2 text-label uppercase text-ink-3 group-hover:text-ink transition-colors">
            Open
            <ArrowRight
              aria-hidden
              className="size-3.5 transition-transform duration-[var(--gr-dur-base)] ease-(--ease-standard) group-hover:translate-x-0.5"
            />
          </span>
        </div>
      </div>
    </GlassCard>
  )

  return (
    <Link href={href} className="block h-full rounded-md">
      {tilt ? <TiltCard className="h-full">{card}</TiltCard> : card}
    </Link>
  )
}
