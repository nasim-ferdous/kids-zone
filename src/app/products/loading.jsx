import ProductCardSkeleton from "@/components/skeleton/ProductCardSkeleton";
import React from "react";

const loading = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
      {[...Array(8)].map((_, index) => (
        <ProductCardSkeleton key={index}></ProductCardSkeleton>
      ))}
    </div>
  );
};

export default loading;
