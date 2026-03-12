import React from "react";
import {
  FaStar,
  FaCartPlus,
  FaCheckCircle,
  FaChevronLeft,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { getSingleProduct } from "@/actions/server/product";
import CartButton from "@/components/buttons/CartButton";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = await getSingleProduct(id);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: product.title,
    description: product.description.slice(0, 160), // Truncate for SEO
    openGraph: {
      title: `${product.title} - Educational Toy`,
      description: `Buy ${product.title} for ৳${product.price}. Develop logical thinking and number sense in kids.`,
      url: `https://https://kids-zone-iota.vercel.app/products/${id}`,
      type: "article",
      images: [
        {
          url: product.image, // Uses the actual product image for the share link
          width: 800,
          height: 800,
          alt: product.title,
        },
        {
          url: "https://i.ibb.co.com/chGPNGpZ/Screenshot-791.png", // Brand-specific preview fallback
          width: 1200,
          height: 630,
          alt: "Product Details Preview",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.description.slice(0, 160),
      images: [product.image],
    },
  };
}

const ProductDetails = async ({ params }) => {
  const { id } = await params;
  const product = await getSingleProduct(id);
  const {
    title,
    bangla,
    image,
    price,
    discount,
    ratings,
    reviews,
    sold,
    description,
    info,
    qna,
  } = product;

  const discountedPrice = price - (price * discount) / 100;

  return (
    <div className="min-h-screen bg-base-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Navigation */}
        <Link href="/" className="btn btn-ghost btn-sm mb-6 gap-2">
          <FaChevronLeft /> Back to Shop
        </Link>

        {/* SECTION 1: HERO AREA (2 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Image Gallery */}
          <div className="bg-slate-50 rounded-3xl p-8 flex justify-center items-center border border-base-200 h-[400px] md:h-[600px]">
            <Image
              src={image}
              alt={title}
              width={500}
              height={500}
              className="object-contain hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Right: Essential Purchase Info */}
          <div className="flex flex-col">
            <div className="badge badge-primary badge-outline mb-2">
              Educational Toys
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-base-content leading-tight mb-2">
              {title}
            </h1>
            <p className="text-2xl text-primary/80 font-medium mb-6">
              {bangla}
            </p>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center text-warning gap-1 bg-warning/10 px-3 py-1 rounded-full">
                <FaStar /> <span className="font-bold">{ratings}</span>
              </div>
              <span className="text-base-content/60">|</span>
              <span className="text-sm font-medium">{reviews} Reviews</span>
              <span className="text-base-content/60">|</span>
              <span className="text-sm font-medium text-success">
                {sold} Items Sold
              </span>
            </div>

            <div className="bg-base-200/50 p-6 rounded-2xl mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl font-black text-primary">
                  ৳{discountedPrice.toLocaleString()}
                </span>
                {discount > 0 && (
                  <div className="flex flex-col">
                    <span className="text-lg line-through opacity-40">
                      ৳{price.toLocaleString()}
                    </span>
                    <span className="badge badge-secondary badge-sm">
                      Save {discount}%
                    </span>
                  </div>
                )}
              </div>

              {/* Key Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {info.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-success flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <CartButton product={product}></CartButton>
                <button className="btn btn-outline btn-lg flex-1">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: FULL WIDTH DETAILS (Outside the Grid) */}
        <div className="space-y-12">
          {/* Description Section */}
          <div className="border-t border-base-200 pt-10">
            <h3 className="text-2xl font-bold mb-6 border-l-4 border-primary pl-4">
              Product Specifications
            </h3>
            <div className="prose max-w-none bg-base-50 p-6 md:p-10 rounded-2xl border border-base-200">
              <p className="whitespace-pre-line text-base-content/80 leading-relaxed text-lg">
                {description}
              </p>
            </div>
          </div>

          {/* Q&A Section */}
          <div className="border-t border-base-200 pt-10 pb-20">
            <h3 className="text-2xl font-bold mb-6 border-l-4 border-primary pl-4">
              Questions & Answers
            </h3>
            <div className="grid grid-cols-1 gap-4 max-w-4xl">
              {qna.map((item, index) => (
                <div
                  key={index}
                  className="collapse collapse-plus bg-base-200 border border-base-300"
                >
                  <input
                    type="radio"
                    name="product-qa"
                    defaultChecked={index === 0}
                  />
                  <div className="collapse-title text-lg font-semibold italic text-primary">
                    Q: {item.question}
                  </div>
                  <div className="collapse-content">
                    <p className="text-base-content/70 border-t border-base-300 pt-4">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
