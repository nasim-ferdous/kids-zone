import React from "react";
import ProductCard from "../cards/ProductCard";
import { getProducts } from "@/actions/server/product";

const Products = async () => {
  const products = await getProducts();
  return (
    <div>
      <h1 className="text-center text-4xl font-bold mb-5">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {products.map((product) => (
          <ProductCard key={product.title} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
