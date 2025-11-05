"use client";

import { motion } from "framer-motion";

export function MetricsSection() {
  return (
    <section className="space-y-12">
      <motion.div
        className="flex flex-col gap-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-slate-500">
          By The Numbers
        </p>
        <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          Our Impact
        </h2>
        <p className="mx-auto max-w-2xl text-sm text-slate-600">
          Real metrics that showcase our growth and the value we deliver to businesses and users worldwide.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-16 text-center"
      >
        <p className="text-lg font-medium text-slate-600">Coming Soon</p>
      </motion.div>
    </section>
  );
}

