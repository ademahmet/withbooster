"use client";

import { motion } from "framer-motion";
import { ExternalLink, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function VikizleSection() {
  return (
    <section id="vikizle" className="space-y-12">
      {/* Header */}
      <motion.div
        className="flex flex-col gap-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500 sm:tracking-[0.3em]">
          Live Product
        </p>
        <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl md:text-4xl">
          Wikiz
        </h2>
        <p className="mx-auto max-w-2xl text-xs text-slate-600 sm:text-sm">
          A revolutionary platform that connects content creators and viewers in real-time, 
          fostering meaningful interactions and building vibrant communities.
        </p>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
        {/* Video Showcase */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1"
        >
          <div className="overflow-hidden rounded-3xl bg-black shadow-2xl">
            <div className="relative aspect-video w-full">
              <video
                className="h-full w-full"
                controls
                preload="metadata"
              >
                <source src="/wikizle_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Test Product Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 flex justify-center"
          >
            <Button
              asChild
              className="group h-12 w-full px-6 text-sm font-semibold shadow-xl transition-all hover:scale-105 hover:shadow-2xl sm:h-14 sm:w-auto sm:px-8 sm:text-base"
            >
              <a
                href="https://wikizle.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Test Wikizle Live
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Product Info & Metrics */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="order-1 space-y-8 lg:order-2"
        >
          {/* Product Description */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="mb-4 text-xl font-bold text-slate-900 sm:text-2xl">
              What is Wikiz?
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-slate-600 sm:text-base">
              Wikiz is an entertaining and educational game.
            </p>
            <ul className="space-y-3">
              {[
                "Cultural Learning",
                "Interest Development",
                "Personalized Analysis",
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-slate-700">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Live Metrics */}
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-purple-50 to-pink-50 p-6 shadow-sm sm:p-8">
            <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-slate-900 sm:text-xl">
              <TrendingUp className="h-5 w-5 text-purple-600 sm:h-6 sm:w-6" />
              Live Metrics
            </h3>
            <p className="text-center text-base font-medium text-slate-600 sm:text-lg">Coming Soon</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

