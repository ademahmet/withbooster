"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden text-center">
      {/* Animated Gradient Background - Full Screen */}
      <div 
        className="fixed inset-0 -z-10 opacity-40"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #e1a8f0 0%, #2d13aa 50%, #0f172a 100%)`,
          transition: "background 0.3s ease",
        }}
      />
      
      {/* Animated Gradient Overlay - Full Screen */}
      <motion.div
        className="fixed inset-0 -z-10"
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, rgba(225, 168, 240, 0.2) 0%, rgba(45, 19, 170, 0.15) 40%, transparent 70%)",
            "radial-gradient(circle at 80% 70%, rgba(225, 168, 240, 0.2) 0%, rgba(45, 19, 170, 0.15) 40%, transparent 70%)",
            "radial-gradient(circle at 50% 50%, rgba(225, 168, 240, 0.2) 0%, rgba(45, 19, 170, 0.15) 40%, transparent 70%)",
            "radial-gradient(circle at 20% 30%, rgba(225, 168, 240, 0.2) 0%, rgba(45, 19, 170, 0.15) 40%, transparent 70%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="relative mx-auto max-w-4xl space-y-10 px-6">

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-4xl font-bold leading-[1.2] tracking-tight text-transparent sm:text-5xl md:text-6xl"
        >
          Drive Your Future Forward with Our Booster Solutions
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg md:text-xl"
        >
          Smarter workflows with AI, engaging web experiences, and creative products for the global marketplace.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
        >
          <Button
            asChild
            className="group h-11 min-w-[180px] px-6 text-sm font-semibold shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/25"
          >
            <Link href="#services">
              Explore Solutions
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-11 min-w-[180px] border-2 border-slate-300 px-6 text-sm font-semibold text-slate-700 hover:border-slate-400 hover:bg-slate-50"
          >
            <Link href="/booster-studio">Explore Booster Studio</Link>
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="pt-16"
        >
          <div className="mx-auto h-10 w-6 rounded-full border-2 border-slate-300">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="mx-auto mt-2 h-2 w-2 rounded-full bg-slate-400"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

