"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

export function ReferencesSection() {
  return (
    <section id="references" className="space-y-12">
      <motion.div
        className="flex flex-col gap-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          Our References
        </h2>
        <p className="mx-auto max-w-2xl text-sm text-slate-600">
          Trusted by forward thinking companies around the world
        </p>
      </motion.div>

      {/* Placeholder for client logos */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="rounded-[28px] border-2 border-dashed border-slate-300 bg-slate-50/50 py-20"
      >
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-200">
            <Building2 className="h-8 w-8 text-slate-400" />
          </div>
          <div className="space-y-2">
            <p className="text-lg font-medium text-slate-900">Client Logos Coming Soon</p>
            <p className="text-sm text-slate-500">
              We're working with amazing companies—stay tuned for updates!
            </p>
          </div>
        </div>
      </motion.div>

      {/* Future structure for client logos - commented out for now */}
      {/* 
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
        {clientLogos.map((client, index) => (
          <motion.div
            key={client.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="flex items-center justify-center rounded-2xl border border-slate-200 bg-white p-8 grayscale hover:grayscale-0 transition-all"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="h-12 w-auto object-contain"
            />
          </motion.div>
        ))}
      </div>
      */}
    </section>
  );
}

