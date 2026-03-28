"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Baby,
  Puzzle,
  BookOpen,
  Palette,
  Bot,
  Gamepad2,
  ChevronRight,
} from "lucide-react"; // Using Lucide for a more consistent pro look

const categories = [
  {
    id: 1,
    name: "Infant Toys",
    icon: <Baby size={32} />,
    color: "bg-blue-50 text-blue-600 border-blue-100",
    slug: "infant",
  },
  {
    id: 2,
    name: "Puzzles",
    icon: <Puzzle size={32} />,
    color: "bg-purple-50 text-purple-600 border-purple-100",
    slug: "puzzles",
  },
  {
    id: 3,
    name: "Story Books",
    icon: <BookOpen size={32} />,
    color: "bg-orange-50 text-orange-600 border-orange-100",
    slug: "books",
  },
  {
    id: 4,
    name: "Art & Craft",
    icon: <Palette size={32} />,
    color: "bg-pink-50 text-pink-600 border-pink-100",
    slug: "art",
  },
  {
    id: 5,
    name: "STEM Toys",
    icon: <Bot size={32} />,
    color: "bg-green-50 text-green-600 border-green-100",
    slug: "stem",
  },
  {
    id: 6,
    name: "Indoor Games",
    icon: <Gamepad2 size={32} />,
    color: "bg-red-50 text-red-600 border-red-100",
    slug: "games",
  },
];

// Animation variants for the container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Categories = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
        <div className="text-center sm:text-left">
          <h2 className="text-3xl lg:text-4xl font-black text-neutral tracking-tight">
            Shop by <span className="text-primary">Category</span>
          </h2>
          <p className="text-neutral/50 font-medium mt-1">
            Explore our curated collections for every age
          </p>
        </div>
        <Link
          href="/products"
          className="btn btn-ghost btn-sm group gap-2 text-primary hover:bg-primary/5"
        >
          View All{" "}
          <ChevronRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>

      {/* Categories Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-8"
      >
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/products?category=${cat.slug}`}
            className="block"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Icon Container */}
              <div
                className={`
                relative w-20 h-20 sm:w-24 sm:h-24 rounded-[2rem] 
                flex items-center justify-center border-2 
                transition-all duration-500 
                group-hover:shadow-2xl group-hover:shadow-primary/10
                group-hover:rounded-full
                ${cat.color}
              `}
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-current opacity-0 group-hover:opacity-5 rounded-inherit transition-opacity" />

                {/* Main Icon */}
                <div className="relative z-10 transition-transform duration-500 group-hover:scale-110">
                  {cat.icon}
                </div>
              </div>

              {/* Label */}
              <h3 className="mt-4 font-bold text-neutral text-sm sm:text-base text-center transition-colors group-hover:text-primary tracking-tight">
                {cat.name}
              </h3>

              {/* Subtle Item Counter or Subtext (Optional) */}
              <div className="w-0 h-0.5 bg-primary mt-1 transition-all duration-300 group-hover:w-8" />
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </section>
  );
};

export default Categories;
