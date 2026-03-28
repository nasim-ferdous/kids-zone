"use client";
import React from "react";
import { Leaf, GraduationCap, Zap, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const features = [
    {
      t: "Eco-Friendly",
      d: "Made from sustainable wood and 100% recycled materials.",
      i: <Leaf className="w-8 h-8" />,
      color: "bg-green-100 text-green-600 border-green-200",
    },
    {
      t: "Expert Verified",
      d: "Every toy is curated by child development specialists.",
      i: <GraduationCap className="w-8 h-8" />,
      color: "bg-blue-100 text-blue-600 border-blue-200",
    },
    {
      t: "Fast Shipping",
      d: "Safe delivery to your doorstep within 48-72 hours.",
      i: <Zap className="w-8 h-8" />,
      color: "bg-orange-100 text-orange-600 border-orange-200",
    },
  ];

  return (
    <section className="my-20 px-4">
      <div className="bg-base-200/50 rounded-[3rem] p-8 md:p-16 border border-base-300 relative overflow-hidden">
        {/* Subtle Background Decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />

        {/* Header Section */}
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full shadow-sm border border-base-300 text-xs font-bold uppercase tracking-widest text-primary">
            <CheckCircle2 size={14} /> Our Promise
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-neutral tracking-tight">
            Safe for Kids,{" "}
            <span className="text-primary">Loved by Parents</span>
          </h2>
          <p className="text-neutral/60 font-medium text-lg leading-relaxed">
            We ensure every toy meets international safety standards, giving you
            the peace of mind your family deserves.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[2rem] border border-base-300/50 shadow-xs hover:shadow-xl hover:shadow-primary/5 transition-all group"
            >
              {/* Icon Container */}
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border transition-transform group-hover:scale-110 group-hover:rotate-3 ${item.color}`}
              >
                {item.i}
              </div>

              <h4 className="font-black text-xl text-neutral mb-3 tracking-tight">
                {item.t}
              </h4>
              <p className="text-neutral/50 text-sm leading-relaxed font-medium italic">
                "{item.d}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
