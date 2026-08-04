import { BLUR } from './blur.generated'

/* ============================================================================
   IMAGE MANIFEST.

   Every entry here was fetched and VISUALLY INSPECTED before inclusion. That
   matters more than it sounds: guessing Unsplash IDs from memory produced a
   25% hit rate in practice — the rejects included a humanoid robot doll on a
   bench, an open-plan office, and (worst of all) a stock photo of a marketing
   analytics dashboard, which would have actively contradicted the product's
   central claim that it is not an analytics tool.

   ART DIRECTION
   Dark, abstract, infrastructural. Networks, light traces, particle terrain,
   circuitry. Never people, never offices, never a screenshot of a dashboard.
   Every image is tinted toward the brand violet so the set reads as one
   commissioned series rather than a pile of unrelated photographs.

   LICENCE
   Unsplash Licence — free for commercial use, no permission needed,
   attribution appreciated but not required. Credited in the footer regardless.
   https://unsplash.com/license
   ========================================================================= */

export type Treatment = 'violet' | 'gold' | 'neutral'

export interface ManagedImage {
  /** Unsplash CDN photo id. */
  id: string
  /** Empty string marks the image decorative — it carries no information. */
  alt: string
  /** Brand tint applied over the photo so the set reads as one series. */
  treatment: Treatment
  /** Photographer, for the footer credit. */
  credit: string
  /** Focal point when the image is cropped hard. */
  position?: string
}

function image(entry: ManagedImage) {
  return { ...entry, blurDataURL: BLUR[entry.id] }
}

export const IMAGERY = {
  /* Earth at night: a planet-scale network of lit connections. The single
     most on-theme image in the set — decision infrastructure, literally. */
  hero: image({
    id: 'photo-1451187580459-43490279c0fa',
    alt: '',
    treatment: 'violet',
    credit: 'NASA on Unsplash',
    position: '50% 35%',
  }),

  /* Thin light traces converging — a decision graph rendered in light. */
  network: image({
    id: 'photo-1775057154553-0f3e8902fea3',
    alt: '',
    treatment: 'violet',
    credit: 'Unsplash',
  }),

  /* Violet particle terrain: a data landscape, already brand-coloured. */
  terrain: image({
    id: 'photo-1770968476272-69e3e4af5df7',
    alt: '',
    treatment: 'violet',
    credit: 'Unsplash',
  }),

  /* Glowing circuit traces on glass — infrastructure, not gadgetry. */
  circuitry: image({
    id: 'photo-1550751827-4bd374c3f58b',
    alt: '',
    treatment: 'violet',
    credit: 'Unsplash',
  }),

  /* Macro board detail. Dense and engineered; good behind dense data. */
  board: image({
    id: 'photo-1518770660439-4636190af475',
    alt: '',
    treatment: 'neutral',
    credit: 'Unsplash',
  }),

  /* Warm light trails — the only image tinted gold, reserved for the
     commercial CTA band so the accent stays a signal. */
  signal: image({
    id: 'photo-1703424943973-aabdc5d63e00',
    alt: '',
    treatment: 'gold',
    credit: 'Unsplash',
  }),
} as const

export type ImageKey = keyof typeof IMAGERY

export const IMAGE_HOST = 'https://images.unsplash.com/'

/**
 * Build a CDN URL. Unsplash serves AVIF/WebP by content negotiation when
 * `auto=format` is set, so next/image's own optimiser is bypassed in favour
 * of the CDN — fewer hops, and the CDN is already global.
 */
export function imageUrl(id: string, width: number, quality = 70): string {
  const params = new URLSearchParams({
    w: String(width),
    q: String(quality),
    auto: 'format,compress',
    fit: 'crop',
  })
  return `${IMAGE_HOST}${id}?${params.toString()}`
}

/** Credit line for the footer. Deduplicated, stable order. */
export function imageCredits(): string[] {
  return [...new Set(Object.values(IMAGERY).map((i) => i.credit))]
}

/* ----------------------------------------------------------------------------
   Fixed assignments. Kept here rather than at call sites so an engine or a
   product tier always wears the same image everywhere it appears — that
   repetition is what makes the set feel commissioned rather than decorative.
   ------------------------------------------------------------------------- */

export const ENGINE_IMAGE: Record<string, ImageKey> = {
  'ai-recognition': 'network',
  'google-vs-ai': 'circuitry',
  'competitor-decision': 'terrain',
  action: 'signal',
}

export const TIER_IMAGE: Record<string, ImageKey> = {
  entry: 'board',
  advanced: 'circuitry',
  premium: 'terrain',
}
