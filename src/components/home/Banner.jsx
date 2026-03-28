"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaPercent } from "react-icons/fa";
import { banglaFont } from "@/lib/fonts";

const Banner = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-base-100 to-base-200 border border-base-300 shadow-sm">
      {/* Decorative background shapes */}
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="flex flex-col lg:flex-row justify-center items-center px-8 py-12 lg:py-20 relative z-10 gap-12">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-6 text-center lg:text-left"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase">
            <FaPercent size={12} /> Special Launch Offer
          </div>

          <h1
            className={`${banglaFont.className} text-5xl lg:text-7xl font-black leading-[1.15] text-neutral`}
          >
            আপনার শিশুকে দিন একটি{" "}
            <span className="text-primary relative inline-block">
              উজ্জ্বল ভবিষ্যৎ
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 25 0 50 5 T 100 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </span>
          </h1>

          <p className="text-xl text-neutral/70 font-medium max-w-lg mx-auto lg:mx-0">
            Discover a curated collection of premium essentials. Get{" "}
            <span className="text-error font-bold text-2xl">15% OFF</span> on
            your first order.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
            <Link
              href="/products"
              className="btn btn-primary px-8 text-lg group shadow-lg hover:shadow-primary/30"
            >
              Explore Products
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 relative"
        >
          {/* Main Hero Image */}
          <div className="relative z-10 drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500">
            <Image
              alt="Kids Zone Hero"
              src="/assets/hero.png"
              width={600}
              height={500}
              priority
              className="object-contain"
            />
          </div>

          {/* Floating Element (Pro Tip: Makes UI feel deep) */}
          <div className="absolute top-10 right-10 animate-bounce delay-700 bg-white p-3 rounded-2xl shadow-xl flex items-center gap-3 border border-base-200">
            <div className="bg-success/20 p-2 rounded-full text-success">
              <FaPercent />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-neutral/50">
                Current Deal
              </p>
              <p className="text-sm font-bold">15% Discount</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
