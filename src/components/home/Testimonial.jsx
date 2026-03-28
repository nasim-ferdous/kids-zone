"use client";
import React from "react";
import { motion } from "framer-motion";
import { Quote, BadgeCheck, Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Farhana Ahmed",
    role: "Mother of Two",
    text: "The quality of the wooden puzzles is outstanding. It’s hard to find non-toxic, safe toys in BD, but Kids Zone has become my go-to store.",
    rating: 5,
    img: "FA",
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    name: "Tanvir Hossain",
    role: "STEM Educator",
    text: "I bought the Robot Kit for my nephew. The instructions were clear and the build quality was superior to most generic kits. Highly recommended!",
    rating: 5,
    img: "TH",
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 3,
    name: "Nabila Karim",
    role: "Art Teacher",
    text: "Their 'Creative Arts' set is brilliant. The colors are vibrant and truly washable. My students love using them during our weekend workshops.",
    rating: 4,
    img: "NK",
    color: "bg-pink-100 text-pink-600",
  },
];

const Testimonial = () => {
  return (
    <section className="py-20 px-4 bg-base-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-neutral tracking-tight">
            Trusted by <span className="text-primary">Thousands of Parents</span>
          </h2>
          <p className="text-neutral/50 font-medium max-w-lg mx-auto">
            Real feedback from our wonderful community of parents and educators across Bangladesh.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-white p-8 rounded-[2.5rem] border border-base-200 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all group"
            >
              {/* Floating Quote Icon */}
              <div className="absolute -top-4 -right-2 bg-primary text-white p-3 rounded-2xl rotate-12 shadow-lg group-hover:rotate-0 transition-transform duration-300">
                <Quote size={20} fill="currentColor" />
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={16}
                    className={`${
                      index < review.rating ? "fill-orange-400 text-orange-400" : "text-base-300"
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-neutral/70 leading-relaxed mb-8 italic font-medium">
                "{review.text}"
              </p>

              {/* User Profile */}
              <div className="flex items-center gap-4 pt-6 border-t border-base-100">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-sm ${review.color}`}>
                  {review.img}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1">
                    <h4 className="font-black text-neutral text-sm uppercase tracking-tight">
                      {review.name}
                    </h4>
                    <BadgeCheck size={14} className="text-success" />
                  </div>
                  <p className="text-[11px] font-bold text-neutral/40 uppercase tracking-widest">
                    {review.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Footer */}
        <div className="mt-12 flex justify-center items-center gap-2 text-neutral/40 font-bold text-xs uppercase tracking-widest">
          <div className="w-8 h-[1px] bg-neutral/20"></div>
          Rated 4.9/5 by 2,000+ Happy Families
          <div className="w-8 h-[1px] bg-neutral/20"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;