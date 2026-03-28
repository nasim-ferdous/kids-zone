"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "Are your toys safe for toddlers?",
    answer:
      "Absolutely! All our toys are made from non-toxic, BPA-free materials and undergo rigorous safety testing to meet international standards for children's products.",
  },
  {
    question: "How long does shipping usually take?",
    answer:
      "For local orders in Dhaka, we typically deliver within 24-48 hours. For outside Dhaka, it usually takes 3-5 business days depending on your location.",
  },
  {
    question: "Do you offer a return policy?",
    answer:
      "Yes, we have a 7-day easy return policy. If the toy is damaged or not as described, you can return it in its original packaging for a full refund or exchange.",
  },
  {
    question: "What age groups do you cater to?",
    answer:
      "We specialize in educational toys for children aged 0 to 12 years, with specific categories for infants, toddlers, and primary school-aged kids.",
  },
];

const FAQ = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div
      className={`border-b border-base-200 last:border-none transition-colors duration-300 ${isOpen ? "bg-primary/5" : "bg-transparent"}`}
    >
      <button
        onClick={toggleOpen}
        className="w-full py-6 px-4 md:px-8 flex items-center justify-between text-left focus:outline-none"
      >
        <span
          className={`text-lg font-bold transition-colors ${isOpen ? "text-primary" : "text-neutral"}`}
        >
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className={`w-8 h-8 rounded-full flex items-center justify-center ${isOpen ? "bg-primary text-white" : "bg-base-200 text-neutral/50"}`}
        >
          {isOpen ? <FaMinus size={12} /> : <FaPlus size={12} />}
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-8 px-4 md:px-8 text-neutral/60 leading-relaxed font-medium italic">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // First one open by default

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary font-black uppercase tracking-[0.2em] text-xs"
          >
            Got Questions?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-neutral mt-3 uppercase tracking-tighter"
          >
            Frequently Asked <span className="text-primary">Questions</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-primary mx-auto mt-6 rounded-full" />
        </div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-[2.5rem] border border-base-200 shadow-2xl shadow-neutral/5 overflow-hidden"
        >
          {faqs.map((faq, index) => (
            <FAQ
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </motion.div>

        {/* Support CTA */}
        <div className="text-center mt-12">
          <p className="text-neutral/40 font-bold italic">
            Still have questions?{" "}
            <a
              href="/contact"
              className="text-primary hover:underline underline-offset-4"
            >
              Contact our play experts directly.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
