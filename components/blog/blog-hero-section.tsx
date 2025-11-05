"use client";

import { motion } from "framer-motion";
import { BookOpen, TrendingUp, Lightbulb } from "lucide-react";

export function BlogHeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-primary/5 via-purple-50/30 to-slate-50 py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
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
          className="mb-6 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl md:text-6xl"
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
          className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-slate-600"
        >
          Insights on AI automation, digital innovation, and the future of technology. 
          Stay updated with our latest thoughts, tutorials, and industry analysis.
        </motion.p>

        {/* Category Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
            <TrendingUp className="h-4 w-4 text-primary" />
            AI & Automation
          </div>
          <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
            <Lightbulb className="h-4 w-4 text-purple-600" />
            Industry Insights
          </div>
          <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
            <BookOpen className="h-4 w-4 text-pink-600" />
            Tutorials
          </div>
        </motion.div>
      </div>
    </section>
  );
}

