const DetailsSkeleton = () => {
  return (
    <div className="min-h-screen bg-base-100 p-4 md:p-8 animate-pulse">
      <div className="skeleton h-8 w-32 mb-6"></div> {/* Back button */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Left: Image Skeleton */}
        <div className="skeleton h-[400px] md:h-[500px] w-full rounded-3xl"></div>

        {/* Right: Info Skeleton */}
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="skeleton h-10 w-full"></div>
            <div className="skeleton h-10 w-3/4"></div>
            <div className="skeleton h-6 w-1/2"></div>
          </div>

          <div className="flex gap-4">
            <div className="skeleton h-8 w-20 rounded-full"></div>
            <div className="skeleton h-8 w-20 rounded-full"></div>
          </div>

          <div className="divider"></div>

          <div className="skeleton h-12 w-40"></div>

          <div className="grid grid-cols-2 gap-4">
            <div className="skeleton h-6 w-full"></div>
            <div className="skeleton h-6 w-full"></div>
            <div className="skeleton h-6 w-full"></div>
            <div className="skeleton h-6 w-full"></div>
          </div>

          <div className="flex gap-4">
            <div className="skeleton h-14 flex-1"></div>
            <div className="skeleton h-14 flex-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { DetailsSkeleton };
