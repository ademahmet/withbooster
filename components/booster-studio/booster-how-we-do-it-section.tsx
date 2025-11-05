"use client";

import { motion } from "framer-motion";
import { Search, Cog, Rocket, BarChart } from "lucide-react";

const steps = [
  {
    title: "Analyze",
    description: "We deep-dive into your business processes, identify bottlenecks, and map opportunities for AI integration.",
    icon: Search,
    number: "01",
  },
  {
    title: "Design",
    description: "We architect custom AI solutions tailored to your specific needs, workflows, and business objectives.",
    icon: Cog,
    number: "02",
  },
  {
    title: "Deploy",
    description: "We implement and integrate AI systems seamlessly into your existing infrastructure with minimal disruption.",
    icon: Rocket,
    number: "03",
  },
  {
    title: "Optimize",
    description: "We continuously monitor, analyze performance, and refine AI models to ensure maximum ROI and efficiency.",
    icon: BarChart,
    number: "04",
  },
];

export function BoosterHowWeDoItSection() {
  return (
    <section className="space-y-12">
      <motion.div
        className="flex flex-col gap-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-slate-500">
          Our Process
        </p>
        <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          How We Do It
        </h2>
        <p className="mx-auto max-w-2xl text-sm text-slate-600">
          We implement and integrate AI systems seamlessly minimal disruption.
        </p>
      </motion.div>

      <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Connection line - hidden on mobile */}
        <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20 lg:block" />

        {steps.map((step, index) => (
          <motion.article
            key={step.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative flex flex-col items-center text-center"
          >
            {/* Number badge */}
            <div className="relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-primary to-purple-600 text-xl font-bold text-white shadow-lg">
              {step.number}
            </div>
            
            {/* Icon */}
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <step.icon className="h-7 w-7" />
            </div>

            <h3 className="mb-3 text-xl font-semibold text-slate-900">{step.title}</h3>
            <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

