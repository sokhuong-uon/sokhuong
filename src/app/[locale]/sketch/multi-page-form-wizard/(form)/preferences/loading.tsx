import { Skeleton } from '@/components/ui/skeleton'

export default function PersonalInformationLoadingSkeleton() {
  return (
    <div className="h-[22rem] w-full space-y-4 p-6">
      <Skeleton className="mb-8 h-6 w-48" />

      <Skeleton className="h-[6.75rem] w-full" />
      <Skeleton className="h-[4.5rem] w-full" />

      <div className="flex justify-between">
        <Skeleton className="h-10 w-24" />
        <Skeleton className="h-10 w-20" />
      </div>
    </div>
  )
}
