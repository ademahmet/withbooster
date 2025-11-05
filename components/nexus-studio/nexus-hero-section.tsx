"use client";

import { motion } from "framer-motion";
import { Brain, Sparkles } from "lucide-react";

export function BoosterHeroSection() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center py-20 text-center">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-purple-50/50 to-white" />

      <div className="relative mx-auto max-w-5xl space-y-8 px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-medium uppercase tracking-wider text-primary backdrop-blur-sm">
            <Brain className="h-4 w-4" />
            AI-Powered Business Operations
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
          <span className="bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent">
            Booster Studio
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl"
        >
          We redesign business operations with artificial intelligence. Booster Studio accelerates and scales 
          every process — from sales and customer relations to content creation and call centers. 
          It eliminates repetitive tasks, focuses human talent on strategic goals, and gives brands a true competitive edge.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-3 gap-8 pt-8"
        >
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-primary sm:text-4xl">10x</div>
            <div className="mt-1 text-sm text-slate-600">Faster Operations</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-primary sm:text-4xl">24/7</div>
            <div className="mt-1 text-sm text-slate-600">AI Availability</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-primary sm:text-4xl">100%</div>
            <div className="mt-1 text-sm text-slate-600">Scalable</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

