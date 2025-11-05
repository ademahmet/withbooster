"use client";

import { motion } from "framer-motion";
import { Sparkles, Users, Target } from "lucide-react";

export function AboutHeroSection() {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center py-20 text-center">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-purple-50/30 to-white" />

      <div className="relative mx-auto max-w-5xl space-y-8 px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-medium uppercase tracking-wider text-primary backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            About Withbooster
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl md:text-6xl"
        >
          Building the{" "}
          <span className="bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent">
            Future
          </span>{" "}
          of Digital Innovation
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600"
        >
          We're a technology studio on a mission to transform how businesses operate, 
          how communities connect, and how creativity reaches the world.
        </motion.p>

        {/* Value Props */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-3 gap-8 pt-8"
        >
          <div className="flex flex-col items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Target className="h-7 w-7" />
            </div>
            <div className="mt-3 text-sm font-semibold text-slate-900">Innovation First</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-purple-600">
              <Users className="h-7 w-7" />
            </div>
            <div className="mt-3 text-sm font-semibold text-slate-900">People Focused</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Sparkles className="h-7 w-7" />
            </div>
            <div className="mt-3 text-sm font-semibold text-slate-900">Impact Driven</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

