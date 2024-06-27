
import { Skeleton } from "@/components/ui/skeleton"
const DashboardSkeleton = () => {
  return (
    <div className="flex  flex-col mt-12">
        <Skeleton className="bg-slate-200 h-9 w-56" />
        <Skeleton className="bg-slate-200 h-9 w-56 mt-10" />
        <Skeleton className="bg-slate-200 h-36 w-56 mt-10" />
        <Skeleton className="bg-slate-200 h-24 w-56 mt-10" />
        <Skeleton className="bg-slate-200 h-9 w-56 mt-10" />
        <Skeleton className="bg-slate-200 h-36 w-56 mt-10" />
        <Skeleton className="bg-slate-200 h-56 w-56 mt-10" />
       
    </div>
  )
}

export default DashboardSkeleton