import { Skeleton } from "@/components/ui/skeleton";


export default function(){
    return <div className="flex justify-center items-center  ">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 min-h-screen ">
      <Skeleton className="h-56 w-80"></Skeleton>
      <Skeleton className="h-56 w-80"></Skeleton>
      <Skeleton className="h-56 w-80"></Skeleton>
      <Skeleton className="h-56 w-80"></Skeleton>
      <Skeleton className="h-56 w-80"></Skeleton>
      <Skeleton className="h-56 w-80"></Skeleton>
      <Skeleton className="h-56 w-80"></Skeleton>
      <Skeleton className="h-56 w-80"></Skeleton>
    </div>
  </div>
}