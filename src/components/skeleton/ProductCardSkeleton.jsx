"use client";
import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="bg-base-100 rounded-2xl border border-base-200 overflow-hidden shadow-sm animate-pulse">
      {/* Image Skeleton - Matches h-52 of the real card */}
      <div className="skeleton h-52 w-full rounded-none bg-base-200/50"></div>

      {/* Content Section */}
      <div className="p-4 space-y-4">
        {/* Title Skeleton - Two lines to match the line-clamp-2 */}
        <div className="space-y-2">
          <div className="skeleton h-4 w-full rounded-md"></div>
          <div className="skeleton h-4 w-2/3 rounded-md"></div>
        </div>

        {/* Ratings & Sold Row */}
        <div className="flex justify-between items-center">
          <div className="skeleton h-5 w-12 rounded-md"></div>{" "}
          {/* Rating Badge */}
          <div className="skeleton h-3 w-16 rounded-md"></div> {/* Sold Text */}
        </div>

        {/* Divider */}
        <div className="border-t border-base-200 pt-3">
          {/* Price & Action Row */}
          <div className="flex justify-between items-center">
            {/* Price Stack */}
            <div className="space-y-1">
              <div className="skeleton h-6 w-20 rounded-md"></div>{" "}
              {/* Main Price */}
              <div className="skeleton h-3 w-12 rounded-md opacity-50"></div>{" "}
              {/* Discounted Price */}
            </div>

            {/* Action Button (Matches the rounded CartButton) */}
            <div className="skeleton h-10 w-10 sm:w-28 rounded-xl sm:rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
