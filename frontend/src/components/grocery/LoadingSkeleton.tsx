import { Skeleton } from "../ui/skeleton";

export default function LoadingSkeleton() {
  return (
    <div className="space-y-4 p-4 h-[300px]">
      <Skeleton className="h-8 w-[250px]" />
      <Skeleton className="h-4 w-[300px]" />
      <Skeleton className="h-4 w-[250px]" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
      <Skeleton className="h-10 w-[150px]" />
    </div>
  )
}

