"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

// Product data - Withbooster Etsy products
const products = [
  {
    id: 1,
    title: "30 Day Plank Challenge: Printable Core Strength Fitness Tracker",
    image: "/Etsy_product1.jpg",
    etsyUrl: "https://www.etsy.com/listing/1888108077/30-day-plank-challenge-printable-core",
  },
  {
    id: 2,
    title: "Editable Baby Shower Invitation Template | Instant Download | Fun and Colorful Design",
    image: "/Etsy_product2.jpg",
    etsyUrl: "https://www.etsy.com/listing/4386678461/editable-baby-shower-invitation-template",
  },
  {
    id: 3,
    title: "2025 Planner Printable: Vision Board, Goal Tracker, Minimalist Design (PDF Download)",
    image: "/etsy_product3.jpg",
    etsyUrl: "https://www.etsy.com/listing/1836388986/2025-planner-printable-vision-board-goal",
  },
  {
    id: 4,
    title: "30-Day Belly Fat Workout Challenge: At-Home Fitness Plan (PDF Download)",
    image: "/Etsy_product4.jpg",
    etsyUrl: "https://www.etsy.com/listing/4334744301/30-day-belly-fat-workout-challenge-at",
  },
];

export function ProductGridSection() {
  return (
    <section className="space-y-8">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
              Our Products
            </h2>
            <p className="mt-2 text-xs text-slate-600 sm:text-sm">
              Browse our collection of high-quality digital designs
            </p>
          </div>
          <a
            href="https://www.etsy.com/shop/withbooster"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 text-sm font-medium text-pink-600 hover:text-pink-700 sm:flex"
          >
            View All on Etsy
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </motion.div>

      {/* Product Grid */}
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>

      {/* View More CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="pt-8 text-center"
      >
        <a
          href="https://www.etsy.com/shop/withbooster"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-xl transition-transform hover:scale-105"
        >
          Browse All Products on Etsy
          <ExternalLink className="h-5 w-5" />
        </a>
      </motion.div>
    </section>
  );
}

function ProductCard({ product, index }: { product: typeof products[number]; index: number }) {
  return (
    <motion.a
      href={product.etsyUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
    >
      {/* Product Image */}
      <div className="relative aspect-square w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity group-hover:opacity-100">
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg">
              View on Etsy
              <ExternalLink className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-1 flex-col p-3 sm:p-4">
        {/* Title */}
        <h3 className="text-sm font-semibold text-slate-900 line-clamp-2 group-hover:text-pink-600 sm:text-base">
          {product.title}
        </h3>
      </div>
    </motion.a>
  );
}

