"use client";

import { motion } from "framer-motion";
import { BookOpen, TrendingUp, Lightbulb } from "lucide-react";

export function BlogHeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-primary/5 via-purple-50/30 to-slate-50 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex justify-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-medium uppercase tracking-wider text-primary backdrop-blur-sm">
            <BookOpen className="h-4 w-4" />
            Insights & Updates
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-6 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl"
        >
          The{" "}
          <span className="bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent">
            withbooster
          </span>{" "}
          Blog
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-slate-600 sm:mb-12 sm:text-base md:text-lg"
        >
          Insights on AI automation, digital innovation, and the future of technology. 
          Stay updated with our latest thoughts, tutorials, and industry analysis.
        </motion.p>

        {/* Category Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          <div className="flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-medium text-slate-700 shadow-sm sm:px-4 sm:text-sm">
            <TrendingUp className="h-3.5 w-3.5 text-primary sm:h-4 sm:w-4" />
            AI & Automation
          </div>
          <div className="flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-medium text-slate-700 shadow-sm sm:px-4 sm:text-sm">
            <Lightbulb className="h-3.5 w-3.5 text-purple-600 sm:h-4 sm:w-4" />
            Industry Insights
          </div>
          <div className="flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-medium text-slate-700 shadow-sm sm:px-4 sm:text-sm">
            <BookOpen className="h-3.5 w-3.5 text-pink-600 sm:h-4 sm:w-4" />
            Tutorials
          </div>
        </motion.div>
      </div>
    </section>
  );
}

