"use client";

import { motion } from "framer-motion";
import { Sparkles, Users, Zap } from "lucide-react";

export function EntertainmentHeroSection() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center py-20 text-center">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-purple-50 via-pink-50/30 to-white" />

      <div className="relative mx-auto max-w-5xl space-y-8 px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-600/20 bg-purple-600/5 px-4 py-2 text-xs font-medium uppercase tracking-wider text-purple-700 backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            Digital Entertainment & Community
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Welcome to{" "}
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
            Entertainment Tech
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl"
        >
          We don&apos;t just develop digital tools; we envision the future of entertainment. withbooster creates experiences where technology meets creativity, transforming simple applications into spaces that spark curiosity and joy. Our vision is not to develop applications that are forgotten over time, but to create products that will be used continuously.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-3 gap-8 pt-8"
        >
          <div className="flex flex-col items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-purple-600">
              <Users className="h-8 w-8" />
            </div>
            <div className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">Community</div>
            <div className="mt-1 text-sm text-slate-600">First Approach</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-100 text-pink-600">
              <Sparkles className="h-8 w-8" />
            </div>
            <div className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">Creative</div>
            <div className="mt-1 text-sm text-slate-600">Innovation</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-purple-600">
              <Zap className="h-8 w-8" />
            </div>
            <div className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">Engaging</div>
            <div className="mt-1 text-sm text-slate-600">Experiences</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

