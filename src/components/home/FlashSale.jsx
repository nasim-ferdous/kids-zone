"use client";
import React from "react";
import { motion } from "framer-motion";

const FlashSale = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="bg-error text-error-content rounded-3xl p-8 flex flex-col lg:flex-row items-center justify-between gap-8 my-10 shadow-2xl relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 text-9xl">⚡</div>
      <div className="text-center lg:text-left z-10">
        <h2 className="text-4xl font-black italic uppercase tracking-tighter">
          Flash Sale!
        </h2>
        <p className="text-lg font-medium opacity-90">
          Limited time offer on educational puzzles
        </p>
      </div>

      <div className="grid grid-flow-col gap-5 text-center auto-cols-max z-10">
        {["days", "hours", "min", "sec"].map((unit) => (
          <div
            key={unit}
            className="flex flex-col p-3 bg-neutral rounded-2xl text-neutral-content min-w-[70px]"
          >
            <span className="countdown font-mono text-3xl font-bold">12</span>
            <span className="text-[10px] uppercase font-bold opacity-60">
              {unit}
            </span>
          </div>
        ))}
      </div>

      <button className="btn btn-lg btn-white bg-white text-error border-none hover:bg-base-200 px-10 shadow-xl z-10">
        Shop The Sale
      </button>
    </motion.div>
  );
};

export default FlashSale;
