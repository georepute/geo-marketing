import { Fragment } from 'react'

/* ============================================================================
   Emphasis inside a translated sentence.

   Several paragraphs on the site lift a figure or a clause out of the prose
   with a colour change. Splitting such a paragraph into three t() calls would
   freeze English word order, which is exactly what a translator needs to be
   able to change — in Hebrew the emphasised clause frequently lands at the
   other end of the sentence.

   So the whole sentence stays one translatable string and marks its emphasis
   inline with <b>…</b>, which a translator can move freely:

     t('Named by <b>{n} of {total}</b> engines.', { n, total })

   No HTML is parsed and nothing is injected — the string is split on the
   marker and the halves are rendered as React children, so a translation can
   never introduce markup.
   ========================================================================= */

const PART = /<b>([\s\S]*?)<\/b>/g

export function Rich({
  text,
  className = 'text-ink',
}: {
  text: string
  /** Applied to the emphasised runs. */
  className?: string
}) {
  const parts: React.ReactNode[] = []
  let cursor = 0

  for (const match of text.matchAll(PART)) {
    const at = match.index
    if (at > cursor) parts.push(text.slice(cursor, at))
    parts.push(
      <span key={at} className={className} data-numeric="">
        {match[1]}
      </span>,
    )
    cursor = at + match[0].length
  }
  if (cursor < text.length) parts.push(text.slice(cursor))

  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={i}>{part}</Fragment>
      ))}
    </>
  )
}
