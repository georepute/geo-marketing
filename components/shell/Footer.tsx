import { Link } from '@/components/i18n/Link'
import { Wordmark } from './Wordmark'
import { ImageWithScrim } from '@/components/visual/ImageWithScrim'
import { imageCredits } from '@/lib/visual/imagery'
import { getDictionary } from '@/lib/i18n/server'
import { flags } from '@/lib/flags'

/* ============================================================================
   Site footer.

   Four groups, as a professional site is read: what the product is, what it
   contains, how it reaches its conclusions, and who is accountable for them.

   Carries the methodology and limitation language required by brief §15.4 on
   every page, not only where a figure appears — the evidence path is always
   one click away.
   ========================================================================= */

export async function Footer() {
  const copy = await getDictionary()
  const year = 2026

  return (
    <footer className="gr-hairline mt-auto relative isolate overflow-hidden">
      {/* Layered atmosphere so the footer reads as a deliberate surface
          rather than leftover page: photograph, then grid, then a glow. */}
      <ImageWithScrim
        image="terrain"
        scrim="heavy"
        sizes="100vw"
        className="-z-20 opacity-50"
      />
      <div aria-hidden className="absolute inset-0 gr-dotgrid opacity-60 -z-10" />
      <div
        aria-hidden
        className="absolute -z-10 inset-x-0 top-0 h-64"
        style={{
          background:
            'radial-gradient(34rem 16rem at 18% 0%, color-mix(in oklab, var(--gr-brand-500) 16%, transparent), transparent 70%)',
        }}
      />

      <div className="gr-rail-wide relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,19rem)_1fr] lg:gap-16">
          {/* --- Brand + positioning ------------------------------------ */}
          <div>
            <Wordmark />
            <p className="text-label uppercase text-brand-300 mt-8">
              {copy.category}
            </p>
            <p className="text-body text-ink-2 mt-4 max-w-xs text-balance">
              {copy.categoryPositioning}
            </p>
          </div>

          {/* --- Link columns ------------------------------------------- */}
          <nav
            aria-label={copy.footer.ariaLabel}
            className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4"
          >
            {copy.footer.columns.map((column) => (
              <div key={column.title}>
                <h2 className="text-label uppercase text-ink-3">
                  {column.title}
                </h2>
                <ul className="mt-5 space-y-3">
                  {column.links
                    /* Only some links declare a gating flag, so the union
                       needs narrowing before the property is read. */
                    .filter((link) => !('flag' in link) || flags[link.flag])
                    .map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-caption text-ink-2 hover:text-ink transition-colors duration-[var(--gr-dur-fast)] ease-(--ease-standard)"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* --- Ecosystem — doc §8 asks for these three by name ---------- */}
        <div className="mt-14 pt-8 border-t border-line">
          <h2 className="text-label uppercase text-ink-3">
            {copy.ecosystem.label}
          </h2>
          <ul className="mt-5 flex flex-wrap gap-x-10 gap-y-4">
            {copy.ecosystem.partners.map((partner) => (
              <li key={partner.name}>
                <a
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex flex-col"
                >
                  <span className="text-body text-ink-2 group-hover:text-ink transition-colors">
                    {partner.name}
                    <span aria-hidden className="gr-arrow text-ink-3 ms-1.5">
                      ↗
                    </span>
                  </span>
                  <span className="text-caption text-ink-3 mt-1">
                    {partner.description}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* --- Standing limitation notice — brief §15.4 ----------------- */}
        <div className="mt-16 pt-8 border-t border-line">
          <p className="text-caption text-ink-3 max-w-4xl">
            <span className="text-ink-2">{copy.footer.limitationLead}</span>{' '}
            {copy.exposure.limitation} {copy.footer.limitationTail}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="text-caption text-ink-3">
            © {year} {copy.footer.rights}
          </p>
          <p className="text-label uppercase text-ink-3">
            {copy.footer.environment}
          </p>
        </div>

        {/* Attribution. The Unsplash Licence does not require this, but
            crediting photographers costs one line and is the right default. */}
        <p className="text-caption text-ink-3 mt-4">
          {copy.footer.photography}{' '}
          <a
            href="https://unsplash.com/license"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-ink-2 transition-colors"
          >
            Unsplash
          </a>{' '}
          — {imageCredits().join(', ')}.
        </p>
      </div>
    </footer>
  )
}
