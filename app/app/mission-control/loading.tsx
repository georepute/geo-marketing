import { Skeleton, TileSkeleton } from '@/components/ui/Skeleton'

/**
 * Route-level loading state. Mirrors the real grid — two lead tiles above
 * eight standard — so the page does not reflow when data arrives.
 */
export default function Loading() {
  return (
    <div className="min-h-dvh bg-canvas">
      <div className="h-14 border-b border-line" />
      <div className="gr-rail-wide gr-section-tight pb-0">
        <Skeleton className="h-2 w-40" rounded="xs" />
        <Skeleton className="mt-4 h-9 w-96 max-w-full" />
      </div>

      <div className="gr-rail-wide pb-16 pt-10">
        <div className="grid gap-4 lg:grid-cols-2">
          <TileSkeleton lead />
          <TileSkeleton lead />
        </div>
        <div className="grid gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <TileSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
