import { Skeleton, StageSkeleton } from '@/components/ui/Skeleton'

export default function Loading() {
  return (
    <div className="min-h-dvh bg-canvas">
      <div className="h-14 border-b border-line" />
      <div className="gr-rail-wide gr-section-tight pb-0">
        <Skeleton className="h-2 w-36" rounded="xs" />
        <Skeleton className="mt-4 h-9 w-80 max-w-full" />
        <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]">
          <Skeleton className="h-11 w-full" />
          <Skeleton className="h-11 w-full" />
        </div>
      </div>
      <StageSkeleton cards={6} />
      <StageSkeleton cards={3} />
    </div>
  )
}
