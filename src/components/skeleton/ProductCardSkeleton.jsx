import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="card w-full max-w-sm bg-base-100 shadow-sm border border-base-200">
      {/* Image Skeleton */}
      <div className="skeleton h-64 w-full rounded-b-none"></div>

      <div className="card-body p-5 space-y-4">
        {/* Title Skeleton */}
        <div className="space-y-2">
          <div className="skeleton h-5 w-full"></div>
          <div className="skeleton h-5 w-4/5"></div>
        </div>

        {/* Stats Skeleton */}
        <div className="skeleton h-4 w-1/2"></div>

        {/* Price Skeleton */}
        <div className="skeleton h-8 w-1/3 mt-2"></div>

        {/* Button Skeleton */}
        <div className="flex gap-2 mt-2">
          <div className="skeleton h-12 flex-1"></div>
          <div className="skeleton h-12 flex-1"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
