"use client";

import { motion } from "framer-motion";
import { Brain, Globe, Palette } from "lucide-react";

const features = [
  {
    title: "AI-Powered Operations",
    description:
      "We transform business operations with intelligent automation. From customer relations to content creation, our AI solutions eliminate repetitive tasks and scale your operations efficiently.",
    icon: Brain,
  },
  {
    title: "Digital Experiences",
    description:
      "We create engaging web platforms and entertainment technology that connect communities. Our digital products don't just function—they inspire interaction and foster long-term user engagement.",
    icon: Globe,
  },
  {
    title: "Creative Products",
    description:
      "We design innovative solutions for the global marketplace. From concept to execution, we blend creativity with technology to deliver products that stand out and drive real business value.",
    icon: Palette,
  },
];

export function WhyWithboosterSection() {
  return (
    <section id="why-withbooster" className="space-y-12">
      <motion.div
        className="flex flex-col gap-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl md:text-4xl">
          Why us?
        </h2>
        <p className="mx-auto max-w-2xl text-xs text-slate-600 sm:text-sm">
          We are a technology studio that combines artificial intelligence, digital innovation, 
          and creative design to help businesses scale, engage audiences, and compete globally.
        </p>
      </motion.div>
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard key={feature.title} feature={feature} index={index} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[number];
  index: number;
}) {
  const Icon = feature.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-primary/20 hover:shadow-xl sm:rounded-[28px] sm:p-8"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-purple-50 text-primary transition-transform group-hover:scale-110 sm:h-14 sm:w-14">
        <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-slate-900 sm:mt-6 sm:text-xl">{feature.title}</h3>
      <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:mt-4 sm:text-sm">{feature.description}</p>
    </motion.article>
  );
}

