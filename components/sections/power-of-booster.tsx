"use client";

import { motion } from "framer-motion";
import { Atom, Infinity, Sparkles } from "lucide-react";

const values = [
  {
    title: "Transformative",
    description:
      "We don’t just deliver services — we deliver transformation. Withbooster reshapes business processes, redefines how brands connect with users, and turns creativity into tangible results.",
    icon: Sparkles,
  },
  {
    title: "Seamless",
    description:
      "All our solutions are interconnected. AI, digital experiences, and creative products are not separate silos but parts of one vision. The result: integrated, fluid, and sustainable growth.",
    icon: Infinity,
  },
  {
    title: "Future-Driven",
    description:
      "While solving today’s challenges, we build tomorrow’s opportunities. With innovation at its core, Withbooster designs the digital future of both businesses and individuals — starting now.",
    icon: Atom,
  },
];

export function PowerOfBoosterSection() {
  return (
    <section className="space-y-12">
      <motion.div
        className="flex flex-col gap-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          The Power of withbooster
        </h2>
      </motion.div>
      <div className="grid gap-6 md:grid-cols-3">
        {values.map((value, index) => (
          <ValueCard key={value.title} value={value} index={index} />
        ))}
      </div>
    </section>
  );
}

function ValueCard({
  value,
  index,
}: {
  value: (typeof values)[number];
  index: number;
}) {
  const Icon = value.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-6 text-xl font-semibold text-slate-900">{value.title}</h3>
      <p className="mt-4 text-sm text-slate-600">{value.description}</p>
    </motion.article>
  );
}

