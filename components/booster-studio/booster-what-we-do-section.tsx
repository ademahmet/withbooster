"use client";

import { motion } from "framer-motion";
import { Target, Zap, TrendingUp, Shield } from "lucide-react";

const features = [
  {
    title: "Sales Support Automation",
    description: "Automate lead generation, qualification and follow-up with 24/7 active AI-powered workflows.",
    icon: Target,
  },
  {
    title: "Competitor Viewer",
    description: "Keep track of your competitors with AI-powered workflows that constantly monitor them and provide you with analyses.",
    icon: Zap,
  },
  {
    title: "Content Creation",
    description: "Generate high-quality, on-brand content at scale with AI that understands your voice and audience.",
    icon: TrendingUp,
  },
  {
    title: "Call Center Operations",
    description: "Deploy AI-powered call centers that handle inquiries, schedule appointments, and close deals 24/7.",
    icon: Shield,
  },
];

export function BoosterWhatWeDoSection() {
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
          Our Solutions
        </p>
        <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          What We Do
        </h2>
        <p className="mx-auto max-w-2xl text-sm text-slate-600">
          We provide AI-powered solutions that automate and optimize every aspect of your business operations, 
          allowing you to focus on growth and strategy.
        </p>
      </motion.div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <motion.article
            key={feature.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-primary/30 hover:shadow-xl"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
              <feature.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">{feature.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{feature.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

