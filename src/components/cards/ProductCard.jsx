import React from "react";
import { FaStar, FaCartPlus, FaEye } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import CartButton from "../buttons/CartButton";

const ProductCard = ({ product }) => {
  const { _id, title, image, price, discount, ratings, reviews, sold } =
    product;

  const discountedPrice = price - (price * discount) / 100;
  const handleDetailButton = () => {};

  return (
    <div className="card w-full max-w-sm bg-base-100 shadow-xl border border-base-200 hover:shadow-2xl transition-all duration-300 group/card">
      {/* Image Section */}
      <figure className="relative h-64 w-full bg-slate-50">
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className="object-contain p-4 group-hover/card:scale-105 transition-transform duration-500"
        />
        {discount > 0 && (
          <div className="badge badge-secondary absolute top-4 right-4 font-bold">
            -{discount}%
          </div>
        )}
      </figure>

      <div className="card-body p-5">
        {/* Title */}
        <h2 className="card-title text-lg font-bold line-clamp-2 min-h-[3.5rem] leading-tight">
          {title}
        </h2>

        {/* Ratings & Sold Info */}
        <div className="flex items-center gap-2 mt-1">
          <div className="flex items-center text-warning">
            <FaStar className="mr-1" />
            <span className="font-semibold text-sm">{ratings}</span>
          </div>
          <div className="text-xs text-base-content/60">
            ({reviews} reviews) •{" "}
            <span className="font-medium text-primary">{sold} sold</span>
          </div>
        </div>

        {/* Price Section */}
        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-2xl font-extrabold text-primary">
            ৳{discountedPrice.toLocaleString()}
          </span>
          {discount > 0 && (
            <span className="text-sm line-through opacity-50">
              ৳{price.toLocaleString()}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="card-actions mt-4 flex flex-col gap-2">
          <div className="grid grid-cols-2 gap-2 w-full">
            <Link
              href={`/products/${_id}`}
              className="btn btn-outline btn-primary gap-2 flex-1 capitalize"
            >
              <FaEye />
              Details
            </Link>
            <CartButton
              product={{ ...product, _id: _id.toString() }}
            ></CartButton>
          </div>

          {/* Optional: Full width Add to Cart if you prefer Details as a small link above */}
          {/* <button className="btn btn-ghost btn-sm text-primary gap-2 w-full">
             <FaEye /> View Details
          </button>
          <button className="btn btn-primary btn-block gap-2 group">
            <FaCartPlus className="text-lg group-hover:scale-110 transition-transform" />
            Add to Cart
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
