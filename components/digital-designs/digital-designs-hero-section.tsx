"use client";

import { motion } from "framer-motion";
import { Palette, Star, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DigitalDesignsHeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-pink-50 via-purple-50/30 to-slate-50 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-pink-600/20 bg-pink-600/5 px-4 py-2 text-xs font-medium uppercase tracking-wider text-pink-700 backdrop-blur-sm">
              <Palette className="h-4 w-4" />
              Digital Creativity
            </span>

            {/* Heading */}
            <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl">
              Beautiful{" "}
              <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Digital Designs
              </span>
              <br />
              for Everyone
            </h1>

            {/* Description */}
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg">
              We turn creativity into digital designs that reach thousands across the globe. 
              From customizable posters to special occasion templates, discover instant-access 
              digital products with high aesthetics and limitless creativity.
            </p>

            {/* Features */}
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                  <Star className="h-4 w-4" fill="currentColor" />
                </div>
                Instant Access
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                  <Palette className="h-4 w-4" />
                </div>
                High Quality
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                  <ShoppingBag className="h-4 w-4" />
                </div>
                Customizable
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="h-12 w-full bg-gradient-to-r from-pink-600 to-purple-600 px-6 text-sm font-semibold shadow-xl hover:from-pink-700 hover:to-purple-700 sm:w-auto sm:px-8 sm:text-base"
              >
                <a
                  href="https://www.etsy.com/shop/withbooster"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ShoppingBag className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Visit Our Etsy Store
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-pink-200 via-purple-200 to-pink-200 shadow-2xl">
              <img
                src="/withbooster_etsy.png"
                alt="Withbooster Digital Designs Showcase"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 top-8 rounded-2xl border border-white bg-white p-4 shadow-xl"
            >
              <div className="text-2xl font-bold text-pink-600">20+</div>
              <div className="text-xs text-slate-600">Products</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -left-4 bottom-8 rounded-2xl border border-white bg-white p-4 shadow-xl"
            >
              <div className="flex items-center gap-1 text-yellow-500">
                <Star className="h-4 w-4" fill="currentColor" />
                <span className="text-xl font-bold">5</span>
              </div>
              <div className="text-xs text-slate-600">5-Star Rating</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

