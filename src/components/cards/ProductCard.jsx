"use client";
import React from "react";
import { FaStar, FaEye, FaShoppingBasket } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import CartButton from "../buttons/CartButton";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  const { _id, title, image, price, discount, ratings, reviews, sold } = product;
  const discountedPrice = price - (price * discount) / 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-base-100 rounded-2xl border border-base-200 overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      {/* Image Section - Reduced height from 64 to 52 */}
      <div className="relative h-52 w-full bg-slate-50 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain p-6 group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Floating Discount Badge */}
        {discount > 0 && (
          <div className="absolute top-3 left-3 badge badge-primary font-bold shadow-sm">
            {discount}% OFF
          </div>
        )}

        {/* Quick View Overlay (Appears on Hover) */}
        <div className="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link
            href={`/products/${_id}`}
            className="btn btn-circle btn-white shadow-lg border-none hover:bg-primary hover:text-white"
          >
            <FaEye size={18} />
          </Link>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Title - Reduced min-height for compactness */}
        <h2 className="text-sm font-bold text-neutral line-clamp-2 h-10 leading-tight mb-2 group-hover:text-primary transition-colors">
          {title}
        </h2>

        {/* Ratings & Sold - Minimalist row */}
        <div className="flex items-center justify-between text-[11px] mb-3">
          <div className="flex items-center gap-1 bg-warning/10 text-warning-content px-2 py-0.5 rounded-md font-bold">
            <FaStar size={10} />
            {ratings}
          </div>
          <div className="opacity-60 uppercase tracking-tighter">
            {sold} Sold
          </div>
        </div>

        {/* Price & Action Row */}
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-base-200">
          <div className="flex flex-col">
            <span className="text-lg font-black text-primary leading-none">
              ৳{discountedPrice.toLocaleString()}
            </span>
            {discount > 0 && (
              <span className="text-[10px] line-through opacity-40">
                ৳{price.toLocaleString()}
              </span>
            )}
          </div>
          
          {/* Compact Cart Button */}
          <div className="scale-90 origin-right">
             <CartButton
                product={{ ...product, _id: _id.toString() }}
              />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;