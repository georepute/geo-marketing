import type { ReactNode } from 'react'

/* ============================================================================
   A small markdown renderer for article bodies.

   NO dangerouslySetInnerHTML. This builds React elements directly, so an
   article can never inject markup — which matters because doc §8 describes
   the blog as a place content gets uploaded to, and "uploaded" eventually
   means somebody other than a developer.

   Deliberately partial. It covers the block and inline forms an article
   actually uses; anything else renders as literal text rather than silently
   disappearing. If the blog outgrows this — tables, footnotes, embedded
   components — that is the moment to take on MDX properly rather than to
   keep growing this file.
   ========================================================================= */

/* --- Inline: **bold**, *italic*, `code`, [text](href) -------------------- */
const INLINE =
  /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  return text
    .split(INLINE)
    .filter((part) => part !== '')
    .map((part, index) => {
      const key = `${keyPrefix}-${index}`

      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={key} className="text-ink font-medium">
            {part.slice(2, -2)}
          </strong>
        )
      }

      if (part.startsWith('*') && part.endsWith('*')) {
        return <em key={key}>{part.slice(1, -1)}</em>
      }

      if (part.startsWith('`') && part.endsWith('`')) {
        return (
          <code
            key={key}
            className="text-caption bg-inset border border-line rounded-xs px-1.5 py-0.5"
            data-numeric=""
          >
            {part.slice(1, -1)}
          </code>
        )
      }

      const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part)
      if (link) {
        const href = link[2]!
        const external = /^https?:\/\//.test(href)
        return (
          <a
            key={key}
            href={href}
            {...(external
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
            className="text-brand-300 underline underline-offset-4 hover:text-ink transition-colors"
          >
            {link[1]}
          </a>
        )
      }

      return part
    })
}

/* --- Blocks -------------------------------------------------------------- */
export function Markdown({ body }: { body: string }) {
  const blocks = body.trim().split(/\r?\n\s*\r?\n/)

  return (
    <div className="max-w-prose">
      {blocks.map((block, index) => {
        const key = `b${index}`
        const trimmed = block.trim()
        if (trimmed === '') return null

        if (trimmed === '---') {
          return <hr key={key} className="my-10 border-line" />
        }

        if (trimmed.startsWith('### ')) {
          return (
            <h3 key={key} className="text-h3 text-ink mt-10 mb-3">
              {renderInline(trimmed.slice(4), key)}
            </h3>
          )
        }

        if (trimmed.startsWith('## ')) {
          return (
            <h2 key={key} className="text-h2 text-ink mt-12 mb-4">
              {renderInline(trimmed.slice(3), key)}
            </h2>
          )
        }

        if (trimmed.startsWith('> ')) {
          return (
            <blockquote
              key={key}
              className="my-8 ps-5 border-s-2 text-body-lg text-ink"
              style={{ borderColor: 'var(--gr-brand-400)' }}
            >
              {renderInline(
                trimmed
                  .split(/\r?\n/)
                  .map((line) => line.replace(/^>\s?/, ''))
                  .join(' '),
                key,
              )}
            </blockquote>
          )
        }

        /* Ordered and unordered lists. A block is a list when its first line
           is a marker; mixed blocks are not supported and do not need to be. */
        const lines = trimmed.split(/\r?\n/)
        if (/^[-*]\s/.test(lines[0]!)) {
          return (
            <ul key={key} className="my-5 space-y-2.5">
              {lines.map((line, i) => (
                <li key={`${key}-${i}`} className="flex gap-3">
                  <span
                    aria-hidden
                    className="shrink-0 mt-2.5 size-1 rounded-full"
                    style={{ background: 'var(--gr-brand-400)' }}
                  />
                  <span className="text-body text-ink-2">
                    {renderInline(line.replace(/^[-*]\s/, ''), `${key}-${i}`)}
                  </span>
                </li>
              ))}
            </ul>
          )
        }

        if (/^\d+\.\s/.test(lines[0]!)) {
          return (
            <ol key={key} className="my-5 space-y-2.5">
              {lines.map((line, i) => (
                <li key={`${key}-${i}`} className="flex gap-3">
                  <span
                    aria-hidden
                    className="text-caption text-brand-300 shrink-0 pt-0.5"
                    data-numeric=""
                  >
                    {i + 1}
                  </span>
                  <span className="text-body text-ink-2">
                    {renderInline(line.replace(/^\d+\.\s/, ''), `${key}-${i}`)}
                  </span>
                </li>
              ))}
            </ol>
          )
        }

        return (
          <p key={key} className="text-body-lg text-ink-2 my-5">
            {renderInline(trimmed.replace(/\r?\n/g, ' '), key)}
          </p>
        )
      })}
    </div>
  )
}
