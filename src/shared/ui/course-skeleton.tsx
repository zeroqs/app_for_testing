import { Skeleton } from '@/shared/ui/skeleton'

export const CourseSkeleton = () => {
  return (
    <div className="flex flex-col p-4 gap-5 ">
      <Skeleton className=" min-h-80 rounded-sm" />

      <Skeleton className=" w-full min-h-40  max-w-screen-xl m-auto mb-32 rounded-sm" />

      <div className="flex items-center max-w-screen-sm m-auto gap-5 ">
        <Skeleton className="w-48 min-h-10  rounded-sm" />
        <Skeleton className="w-48 min-h-10  rounded-sm" />
      </div>
    </div>
  )
}
