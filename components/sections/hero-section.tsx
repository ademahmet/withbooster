"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center py-20 text-center">
      <div className="mx-auto max-w-4xl space-y-8 px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider text-white/60 backdrop-blur-sm">
            <Sparkles className="h-3 w-3 text-accent" />
            Future-Driven Studio
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="bg-gradient-to-b from-white via-white to-white/80 bg-clip-text text-4xl font-bold leading-[1.2] tracking-tight text-transparent sm:text-5xl md:text-6xl"
        >
          Smart Solutions That Drive Your Future Forward
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg md:text-xl"
        >
          Smarter workflows with AI, engaging web experiences, and creative products for the global marketplace.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
        >
          <Button
            asChild
            className="group h-11 min-w-[180px] px-6 text-sm font-semibold shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/25"
          >
            <Link href="#services">
              Discover Solutions
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-11 min-w-[180px] border-white/10 px-6 text-sm font-semibold text-white/90 hover:border-white/20 hover:bg-white/5"
          >
            <Link href="#ai-studio">Explore AI Studio</Link>
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="pt-16"
        >
          <div className="mx-auto h-10 w-6 rounded-full border-2 border-white/10">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="mx-auto mt-2 h-2 w-2 rounded-full bg-white/40"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

