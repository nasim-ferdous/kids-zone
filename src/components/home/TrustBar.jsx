"use client";
import React from "react";
import { Truck, RotateCcw, ShieldCheck, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const TrustBar = () => {
  const features = [
    { 
      title: "Fast Delivery", 
      desc: "Across Bangladesh", 
      icon: <Truck className="w-6 h-6 lg:w-8 lg:h-8" />,
      color: "text-blue-500"
    },
    { 
      title: "7 Days Return", 
      desc: "No questions asked", 
      icon: <RotateCcw className="w-6 h-6 lg:w-8 lg:h-8" />,
      color: "text-purple-500"
    },
    { 
      title: "Secure Checkout", 
      desc: "100% Protected", 
      icon: <ShieldCheck className="w-6 h-6 lg:w-8 lg:h-8" />,
      color: "text-success"
    },
    { 
      title: "Support 24/7", 
      desc: "Dedicated help", 
      icon: <Headphones className="w-6 h-6 lg:w-8 lg:h-8" />,
      color: "text-orange-500"
    },
  ];

  return (
    <div className="my-12 px-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 lg:p-8 bg-base-100 border border-base-200 shadow-sm rounded-[2rem] relative overflow-hidden">
        
        {/* Subtle Background Accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16" />

        {features.map((f, i) => (
          <motion.div 
            key={i} 
            whileHover={{ y: -3 }}
            className={`flex items-center gap-4 lg:justify-center p-2 transition-all group
              ${i !== features.length - 1 ? 'lg:border-r lg:border-base-200' : ''}
              ${i % 2 === 0 && i !== 0 ? 'sm:border-l sm:lg:border-l-0 border-base-200' : ''}
            `}
          >
            <div className={`p-3 rounded-2xl bg-base-200/50 group-hover:bg-base-200 transition-colors ${f.color}`}>
              {f.icon}
            </div>
            
            <div className="space-y-0.5">
              <h4 className="font-black text-sm lg:text-base text-neutral tracking-tight leading-none">
                {f.title}
              </h4>
              <p className="text-[11px] lg:text-xs text-neutral/50 font-semibold uppercase tracking-wider">
                {f.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;