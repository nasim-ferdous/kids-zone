import React from "react";
import {
  FaStar,
  FaChevronLeft,
  FaShieldAlt,
  FaTruck,
  FaUndo,
  FaQuestionCircle,
  FaInfoCircle,
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

  if (!product)
    return <div className="p-20 text-center">Product not found</div>;

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
    <div className="min-h-screen bg-white">
      {/* Breadcrumbs / Back Navigation */}
      <nav className="bg-base-50 border-b border-base-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-2 text-sm">
          <Link
            href="/products"
            className="hover:text-primary transition-colors flex items-center gap-1 opacity-60"
          >
            <FaChevronLeft size={10} /> Shop
          </Link>
          <span className="opacity-20">/</span>
          <span className="font-medium text-neutral truncate max-w-[200px] md:max-w-none">
            {title}
          </span>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* SECTION 1: HERO AREA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Left: Image Container (5/12 columns) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="sticky top-24 bg-slate-50 rounded-[2.5rem] p-6 md:p-12 flex justify-center items-center border border-base-100 aspect-square overflow-hidden group">
              <Image
                src={image}
                alt={title}
                width={600}
                height={600}
                priority
                className="object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right: Product Info (7/12 columns) */}
          <div className="lg:col-span-6 flex flex-col pt-4">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              In Stock & Ready to Ship
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-neutral leading-[1.1] mb-2 tracking-tight">
              {title}
            </h1>
            <h2 className="text-xl md:text-2xl text-neutral/40 font-bold italic mb-6">
              {bangla}
            </h2>

            {/* Social Proof Row */}
            <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-base-100">
              <div className="flex items-center gap-2">
                <div className="flex text-orange-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      size={14}
                      className={
                        i < Math.floor(ratings) ? "fill-current" : "opacity-30"
                      }
                    />
                  ))}
                </div>
                <span className="text-sm font-black">{ratings}</span>
                <span className="text-xs opacity-40">
                  ({reviews} Global Reviews)
                </span>
              </div>
              <div className="h-4 w-[1px] bg-base-200 hidden sm:block"></div>
              <div className="text-sm font-bold text-success flex items-center gap-1 uppercase tracking-tighter">
                <FaShieldAlt /> {sold}+ Happy Parents
              </div>
            </div>

            {/* Pricing Card */}
            <div className="space-y-6">
              <div className="flex items-baseline gap-4">
                <span className="text-5xl font-black text-primary tracking-tighter">
                  ৳{discountedPrice.toLocaleString()}
                </span>
                {discount > 0 && (
                  <div className="flex flex-col">
                    <span className="text-xl line-through opacity-30 font-bold">
                      ৳{price.toLocaleString()}
                    </span>
                    <span className="text-xs font-black bg-secondary text-secondary-content px-2 py-0.5 rounded italic">
                      Save {discount}% Today
                    </span>
                  </div>
                )}
              </div>

              {/* USP List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {info.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-sm font-medium text-neutral/70 bg-base-50 p-3 rounded-xl border border-base-100"
                  >
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-sm text-primary">
                      <FaInfoCircle size={12} />
                    </div>
                    {item}
                  </div>
                ))}
              </div>

              {/* CTA Area */}
              <div className="pt-6 flex flex-col sm:flex-row gap-4">
                <div className="flex-1 scale-110 origin-left">
                  <CartButton product={product} />
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-2 pt-8">
                <div className="flex flex-col items-center text-center gap-2 opacity-60">
                  <FaTruck size={20} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    Fast Delivery
                  </span>
                </div>
                <div className="flex flex-col items-center text-center gap-2 opacity-60">
                  <FaShieldAlt size={20} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    Secure Payment
                  </span>
                </div>
                <div className="flex flex-col items-center text-center gap-2 opacity-60">
                  <FaUndo size={20} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    7 Day Return
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: SPECIFICATIONS & QNA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 border-t border-base-200 pt-16">
          {/* Description */}
          <div className="lg:col-span-7">
            <h3 className="text-2xl font-black mb-8 uppercase tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center text-sm">
                1
              </span>
              Product Deep-Dive
            </h3>
            <div className="prose max-w-none text-neutral/70 leading-relaxed text-lg italic">
              <p className="whitespace-pre-line">{description}</p>
            </div>
          </div>

          {/* Q&A / Support */}
          <div className="lg:col-span-5">
            <h3 className="text-2xl font-black mb-8 uppercase tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-secondary text-white flex items-center justify-center text-sm">
                2
              </span>
              Common Questions
            </h3>
            <div className="space-y-4">
              {qna.map((item, index) => (
                <div
                  key={index}
                  className="collapse collapse-arrow bg-base-50 border border-base-100 rounded-2xl"
                >
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title text-sm font-bold flex items-center gap-3">
                    <FaQuestionCircle className="text-primary" />{" "}
                    {item.question}
                  </div>
                  <div className="collapse-content text-sm text-neutral/60 font-medium border-t border-base-100 mt-2 pt-4 leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetails;
