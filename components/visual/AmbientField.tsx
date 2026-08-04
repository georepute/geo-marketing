import { cn } from '@/lib/utils/cn'

/* ============================================================================
   AMBIENT FIELD — the imagery layer.

   Everything here is generated from design tokens: no raster asset, nothing to
   download, nothing that can shift layout, and both themes are covered by
   construction rather than by shipping a second file.

   The vocabulary is deliberately instrument-like — coordinate grids, soft
   field gradients, network line-art, film grain. Never stock photography,
   never a person at a whiteboard.

   RESTRAINT: three intensities, and `subtle` is the default. If a surface does
   not read better with a field behind it, it does not get one.
   ========================================================================= */

type Intensity = 'subtle' | 'standard' | 'feature'

const MESH_OPACITY: Record<Intensity, string> = {
  subtle: 'opacity-40',
  standard: 'opacity-70',
  feature: 'opacity-100',
}

export function AmbientField({
  intensity = 'subtle',
  grid = true,
  noise = true,
  lines = false,
  className,
}: {
  intensity?: Intensity
  grid?: boolean
  /** Film grain, so large flat fields do not band on wide displays. */
  noise?: boolean
  /** Network line-art. Reserved for the hero — it is the loudest element. */
  lines?: boolean
  className?: string
}) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden',
        noise && 'gr-noise',
        className,
      )}
    >
      {grid ? <div className="absolute inset-0 gr-dotgrid" /> : null}
      <div className={cn('gr-mesh', MESH_OPACITY[intensity])} />
      {lines ? <NetworkLines /> : null}
      {/* Scrim last: guarantees text above the field stays AA in both themes. */}
      <div className="absolute inset-0" style={{ background: 'var(--gr-scrim)' }} />
    </div>
  )
}

/* ------------------------------------------------------------------------
   Network line-art — a decision graph abstracted into pure geometry. Static;
   the motion contract permits at most one loop per viewport and the live feed
   already spends it.
   ---------------------------------------------------------------------- */
function NetworkLines() {
  return (
    <svg
      viewBox="0 0 1440 520"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
      className="absolute inset-0 size-full opacity-[0.5]"
    >
      <g
        fill="none"
        stroke="var(--gr-line-strong)"
        strokeWidth="1"
        opacity="0.55"
      >
        <path d="M-40 128 C 220 128, 300 236, 520 236 S 900 96, 1180 96 1500 178 1500 178" />
        <path d="M-40 300 C 260 300, 340 190, 560 190 S 940 330, 1220 330 1500 262 1500 262" />
        <path d="M-40 420 C 300 420, 420 336, 640 336 S 1020 430, 1280 430 1500 372 1500 372" />
      </g>
      <g fill="var(--gr-brand-400)" opacity="0.5">
        {[
          [220, 128],
          [520, 236],
          [900, 96],
          [340, 190],
          [560, 190],
          [1220, 330],
          [640, 336],
          [1280, 430],
        ].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.5" />
        ))}
      </g>
      <g fill="var(--gr-accent-500)" opacity="0.55">
        <circle cx="1180" cy="96" r="3.5" />
        <circle cx="940" cy="330" r="3.5" />
      </g>
    </svg>
  )
}

/* ============================================================================
   A page or section header sitting on a field. Used where a surface begins,
   never repeatedly down a page.
   ========================================================================= */
export function FieldSurface({
  intensity = 'subtle',
  lines = false,
  className,
  children,
}: {
  intensity?: Intensity
  lines?: boolean
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={cn('relative isolate', className)}>
      <AmbientField intensity={intensity} lines={lines} />
      <div className="relative">{children}</div>
    </div>
  )
}
