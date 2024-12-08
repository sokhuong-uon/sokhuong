import { Skeleton } from '@/components/ui/skeleton'

export default function AccountLoadingSkeleton() {
  return (
    <div className="h-[24rem] w-full space-y-4 p-6">
      <Skeleton className="mb-8 h-6 w-48" />

      <Skeleton className="h-[6.25rem] w-full" />
      <Skeleton className="h-[7.5rem] w-full" />

      <div className="flex justify-between">
        <Skeleton className="h-10 w-24" />
        <Skeleton className="h-10 w-20" />
      </div>
    </div>
  )
}
