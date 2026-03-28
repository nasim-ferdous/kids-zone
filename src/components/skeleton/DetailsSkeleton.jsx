"use client";
import React from "react";

const DetailsSkeleton = () => {
  return (
    <div className="min-h-screen bg-white animate-pulse">
      {/* Breadcrumb Skeleton */}
      <div className="bg-base-50 border-b border-base-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-2">
          <div className="skeleton h-4 w-16"></div>
          <span className="opacity-20">/</span>
          <div className="skeleton h-4 w-32"></div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* SECTION 1: HERO AREA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Left: Image Container (Match h-[600px] aspect) */}
          <div className="lg:col-span-6">
            <div className="skeleton w-full aspect-square md:h-[600px] rounded-[2.5rem] bg-slate-50"></div>
          </div>

          {/* Right: Product Info */}
          <div className="lg:col-span-6 pt-4 space-y-6">
            {/* Status Badge */}
            <div className="skeleton h-6 w-40 rounded-full"></div>

            {/* Title & Bangla Subtitle */}
            <div className="space-y-3">
              <div className="skeleton h-12 w-full rounded-lg"></div>
              <div className="skeleton h-12 w-4/5 rounded-lg"></div>
              <div className="skeleton h-8 w-1/2 rounded-lg opacity-50"></div>
            </div>

            {/* Social Proof Row */}
            <div className="flex items-center gap-4 py-4 border-b border-base-100">
              <div className="skeleton h-5 w-24"></div>
              <div className="skeleton h-5 w-24"></div>
              <div className="skeleton h-5 w-24"></div>
            </div>

            {/* Price Area */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <div className="skeleton h-14 w-32"></div>
                <div className="skeleton h-10 w-20 opacity-30"></div>
              </div>

              {/* USP Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="skeleton h-12 w-full rounded-xl"
                  ></div>
                ))}
              </div>

              {/* CTA Area */}
              <div className="pt-6">
                <div className="skeleton h-16 w-full sm:w-64 rounded-2xl"></div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-base-100">
                <div className="skeleton h-10 w-full rounded-lg opacity-40"></div>
                <div className="skeleton h-10 w-full rounded-lg opacity-40"></div>
                <div className="skeleton h-10 w-full rounded-lg opacity-40"></div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: SPECIFICATIONS & QNA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 border-t border-base-200 pt-16">
          <div className="lg:col-span-7 space-y-6">
            <div className="skeleton h-8 w-48 mb-4"></div>
            <div className="space-y-3">
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-11/12"></div>
              <div className="skeleton h-4 w-10/12"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
          </div>
          <div className="lg:col-span-5 space-y-4">
            <div className="skeleton h-8 w-48 mb-4"></div>
            <div className="skeleton h-16 w-full rounded-2xl"></div>
            <div className="skeleton h-16 w-full rounded-2xl"></div>
            <div className="skeleton h-16 w-full rounded-2xl"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export { DetailsSkeleton };
