"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Palette, Cpu } from "lucide-react";
import Link from "next/link";

const PromoBanners = () => {
  const banners = [
    {
      title: "Creative Arts",
      desc: "Safe & Non-toxic colors for tiny hands",
      cta: "Explore More",
      link: "/products?category=arts",
      icon: <Palette className="w-full h-full" />,
      theme: "primary",
      pattern:
        "bg-[radial-gradient(circle_at_top_right,_var(--color-primary)_0%,_transparent_50%)]",
    },
    {
      title: "Robot Kits",
      desc: "Build the future with STEM-certified toys",
      cta: "Shop STEM",
      link: "/products?category=stem",
      icon: <Cpu className="w-full h-full" />,
      theme: "accent",
      pattern:
        "bg-[radial-gradient(circle_at_top_right,_var(--color-accent)_0%,_transparent_50%)]",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-16 px-4">
      {banners.map((banner, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`group relative h-64 sm:h-72 rounded-[2.5rem] p-8 sm:p-12 overflow-hidden border-2 transition-all duration-500
            ${
              banner.theme === "primary"
                ? "bg-primary/5 border-primary/10 hover:border-primary/30"
                : "bg-accent/5 border-accent/10 hover:border-accent/30"
            }`}
        >
          {/* Layered Background Pattern */}
          <div
            className={`absolute inset-0 opacity-10 transition-opacity duration-500 group-hover:opacity-20 ${banner.pattern}`}
          />

          <div className="relative z-10 flex flex-col justify-center h-full max-w-[65%] space-y-4">
            <h3 className="text-3xl sm:text-4xl font-black text-neutral tracking-tighter leading-none">
              {banner.title}
            </h3>
            <p className="text-sm sm:text-base text-neutral/60 font-medium leading-tight">
              {banner.desc}
            </p>

            <Link href={banner.link} className="inline-block pt-2">
              <button
                className={`btn btn-md rounded-2xl gap-2 group/btn shadow-lg transition-all
                ${banner.theme === "primary" ? "btn-primary" : "btn-accent"}`}
              >
                {banner.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </Link>
          </div>

          {/* Large Interactive Icon Overlay */}
          <div
            className={`absolute -right-8 -bottom-8 w-48 h-48 sm:w-64 sm:h-64 opacity-10 transition-all duration-700 ease-out 
            group-hover:opacity-20 group-hover:-translate-y-4 group-hover:-translate-x-4 group-hover:rotate-12
            ${banner.theme === "primary" ? "text-primary" : "text-accent"}`}
          >
            {banner.icon}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PromoBanners;
