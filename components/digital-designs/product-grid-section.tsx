"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export function ProductGridSection() {
  return (
    <section className="space-y-12 py-12">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
          Our Products
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-xs text-slate-600 sm:text-sm md:text-base">
          Browse our collection of high-quality digital designs on Etsy
        </p>
      </motion.div>

      {/* View All on Etsy CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center"
      >
        <a
          href="https://www.etsy.com/shop/withbooster"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-xl transition-transform hover:scale-105"
        >
          View All on Etsy
          <ExternalLink className="h-5 w-5" />
        </a>
      </motion.div>
    </section>
  );
}

