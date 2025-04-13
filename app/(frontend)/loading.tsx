import { Skeleton } from "@/components/ui/skeleton";

export default function HomeLoading() {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50">
      {/* Hero Section Skeleton */}
      <section className="mb-12">
        <Skeleton className="w-full h-[326px] rounded-xl" />
      </section>

      {Array(1)
        .fill(0)
        .map((_, seriesIndex) => (
          <div key={seriesIndex} className="mb-12">
            {/* Series Header */}
            <div className="bg-white rounded-t-lg p-6 mb-1">
              <div className="space-y-4">
                <Skeleton className="h-7 w-64" />
                <Skeleton className="h-5 w-full max-w-2xl" />
                <div className="flex items-center gap-2">
                  <Skeleton className="h-4 w-4 rounded-full" />
                  <Skeleton className="h-4 w-40" />
                </div>
              </div>
            </div>

            {/* Series Modules */}
            <div className="bg-white rounded-b-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {Array(seriesIndex === 1 ? 4 : 3)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="border rounded-lg p-4 space-y-3">
                      <div className="flex justify-between items-start">
                        <Skeleton className="h-6 w-32" />
                        <Skeleton className="h-5 w-20" />
                      </div>
                      <Skeleton className="h-4 w-full" />
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <Skeleton className="h-4 w-16" />
                          <Skeleton className="h-4 w-8" />
                        </div>
                        <Skeleton className="h-2 w-full" />
                      </div>
                      <div className="flex justify-between">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-4 w-20" />
                      </div>
                      <Skeleton className="h-9 w-full" />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
