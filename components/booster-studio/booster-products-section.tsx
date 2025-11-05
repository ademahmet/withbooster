"use client";

import { motion } from "framer-motion";
import { Users, Headphones, TrendingUp, PieChart } from "lucide-react";

const products = [
  {
    title: "Lead Generation",
    description:
      "An automated, AI-powered lead generation system that identifies, qualifies, and nurtures potential customers at scale. Our smart agents research potential customers and present them to you with the data you need.",
    icon: Users,
    features: [
      "Automated lead research",
      "Smart lead scoring",
      "Access to required data",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "AI Call Center",
    description:
      "Build a fully autonomous AI call center that handles human-like conversations. From customer support to sales calls, our AI agents understand context, handle objections, and close deals 24/7.",
    icon: Headphones,
    features: [
      "Natural conversation AI",
      "Multi-language support",
      "Sentiment analysis",
    ],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Competitive Analysis & Content Creator",
    description:
      "AI-powered competitive intelligence platform that monitors your competitors, analyzes market trends, and generates strategic content. Stay ahead with real-time insights and automated content creation tailored to your brand.",
    icon: TrendingUp,
    features: [
      "Competitor monitoring",
      "Market trend analysis",
      "AI content generation",
      "SEO optimization",
    ],
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Competitor Presentations and Analyses",
    description:
      "Turn raw competitor data into compelling presentations and actionable insights. Our AI analyzes all the data your competitors need.",
    icon: PieChart,
    features: [
      "Strategic recommendations",
      "Ready-made insights",
      "Meaningful data",
    ],
    gradient: "from-green-500 to-emerald-500",
  },
];

export function BoosterProductsSection() {
  return (
    <section id="products" className="space-y-12">
      <motion.div
        className="flex flex-col gap-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-slate-500">
          Core Solutions
        </p>
        <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          Our Products
        </h2>
        <p className="mx-auto max-w-2xl text-sm text-slate-600">
          Powerful AI-driven products designed to transform your business operations 
          and give you a competitive edge in the market.
        </p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-2">
        {products.map((product, index) => (
          <motion.article
            key={product.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-2xl"
          >
            {/* Gradient accent */}
            <div
              className={`absolute right-0 top-0 h-32 w-32 bg-gradient-to-br ${product.gradient} opacity-10 blur-3xl transition-opacity group-hover:opacity-20`}
            />

            <div className="relative">
              {/* Icon */}
              <div
                className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${product.gradient} text-white shadow-lg`}
              >
                <product.icon className="h-8 w-8" />
              </div>

              {/* Content */}
              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {product.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                {product.description}
              </p>

              {/* Features list */}
              <ul className="mt-6 space-y-3">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-slate-700"
                  >
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary"
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
          </motion.article>
        ))}
      </div>
    </section>
  );
}

