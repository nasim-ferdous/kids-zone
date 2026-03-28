"use client";
import React from "react";
import { motion } from "framer-motion";
import { Send, Gift, Sparkles } from "lucide-react";
import Swal from "sweetalert2";

const NewsLetter = () => {
  const handleJoin = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "You have Join Our Team",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <section className="px-4 py-10 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative bg-neutral text-neutral-content rounded-[3rem] p-8 md:p-16 lg:p-24 text-center overflow-hidden shadow-2xl"
      >
        {/* Layered Background Accents */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" />

        <div className="relative z-10 space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-xs font-black uppercase tracking-[0.2em] text-primary-content">
            <Gift size={14} className="animate-bounce" /> Exclusive Member Perk
          </div>

          {/* Typography */}
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-none">
              Join the{" "}
              <span className="text-primary italic">Adventure!</span>{" "}
            </h2>
            <p className="max-w-xl mx-auto text-lg md:text-xl font-medium text-neutral-content/70 leading-relaxed italic">
              Subscribe today to get{" "}
              <span className="text-white font-black underline decoration-primary underline-offset-4">
                ৳200 OFF
              </span>{" "}
              your first order and magic in your inbox.
            </p>
          </div>

          {/* Subscription Form */}
          <div className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row items-stretch gap-3 sm:gap-0 sm:bg-white/5 sm:backdrop-blur-sm sm:border sm:border-white/20 sm:p-1.5 sm:rounded-full transition-all focus-within:border-primary/50 focus-within:ring-4 focus-within:ring-primary/10">
              <input
                type="email"
                className="input h-14 bg-white/5 sm:bg-transparent border-white/20 sm:border-none focus:outline-none focus:ring-2 sm:focus:ring-0 rounded-full sm:rounded-none join-item w-full px-8 text-white placeholder:text-neutral-content/40 font-medium"
                placeholder="Enter your email address..."
              />
              <button
                onClick={handleJoin}
                className="group btn btn-primary h-14 sm:h-auto rounded-full px-10 border-none font-black uppercase tracking-widest shadow-lg hover:shadow-primary/40 transition-all flex items-center justify-center gap-2"
              >
                Join Now
                <Send
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </button>
            </div>

            {/* Trust Note */}
            <p className="mt-6 flex items-center justify-center gap-2 text-[10px] uppercase font-bold tracking-widest opacity-40">
              <Sparkles size={12} /> No spam, just pure fun & exclusive deals
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default NewsLetter;
