"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useState } from "react";
import { CommunityPopup } from "@/components/shared/community-popup";

const upcomingProducts = [
  {
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    gradient: "from-purple-500 to-pink-500",
  },
  {
    gradient: "from-orange-500 to-red-500",
  },
];

export function UpcomingProductsSection() {
  const [isCommunityOpen, setIsCommunityOpen] = useState(false);

  return (
    <>
      <section id="upcoming" className="space-y-12">
      <motion.div
        className="flex flex-col gap-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-slate-500">
          What's Next
        </p>
        <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          Upcoming Products
        </h2>
        <p className="mx-auto max-w-2xl text-sm text-slate-600">
          We're constantly innovating and building the future of digital entertainment. 
          Here's what we're working on next.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {upcomingProducts.map((product, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl"
          >
            {/* Gradient accent */}
            <div
              className={`absolute right-0 top-0 h-32 w-32 bg-gradient-to-br ${product.gradient} opacity-10 blur-3xl transition-opacity group-hover:opacity-20`}
            />

            <div className="relative flex h-full items-center justify-center py-8">
              <p className="text-center text-lg font-medium text-slate-600">Coming Soon</p>
            </div>
          </motion.article>
        ))}
      </div>

      {/* CTA for updates */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50/50 p-12 text-center"
      >
        <h3 className="mb-3 text-2xl font-bold text-slate-900">
          Want to Stay Updated?
        </h3>
        <p className="mb-6 text-sm text-slate-600">
          Join our community to get early access to new products and exclusive updates.
        </p>
        <button
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 font-semibold text-white transition-transform hover:scale-105"
          onClick={() => setIsCommunityOpen(true)}
        >
          <Sparkles className="h-5 w-5" />
          Join Community
        </button>
      </motion.div>
    </section>

    <CommunityPopup
      open={isCommunityOpen}
      onOpenChange={setIsCommunityOpen}
    />
    </>
  );
}

