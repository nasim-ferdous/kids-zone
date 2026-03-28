import React from "react";
import ProductCard from "../cards/ProductCard";
import { getProducts } from "@/actions/server/product";

const Products = async () => {
  const rawProducts = await getProducts();

  const products = rawProducts.map((item) => ({
    ...item,
    _id: item._id.toString(),
  }));

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center mb-12 text-center">
        <h1 className="text-4xl font-black text-neutral tracking-tight uppercase">
          Our <span className="text-primary">Curated</span> Toys
        </h1>
        <div className="w-24 h-1.5 bg-primary rounded-full mt-3"></div>
        <p className="mt-4 text-neutral/50 font-medium max-w-md">
          Handpicked educational toys designed to spark creativity and growth in
          every child.
        </p>
      </div>

      {/* Grid - 2 columns on mobile, 3 on tablet, 4 on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
