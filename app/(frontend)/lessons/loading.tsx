import { Skeleton } from "@/components/ui/skeleton";

export default function LessonLoading() {
  return (
    <>
      <Skeleton className="overflow-hidden w-full h-[100px] fixed"></Skeleton>
      <div className="container mx-auto px-4 pb-3 pt-[120px]">
        <Skeleton className="h-[32px] rounded w-[260px]" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Skeleton className="min-h-[calc(100vh-132px)] rounded" />
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}
