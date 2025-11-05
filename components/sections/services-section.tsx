"use client";

import { motion } from "framer-motion";
import { Brain, Palette, Sparkles } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

const services = [
  {
    id: "booster-studio",
    title: "Booster Studio",
    description: (
      <>
        We are redesigning business operations with AI.{" "}
        <strong>
          Booster Studio supports every complex task, from sales and operational processes to content creation and call centers.
        </strong>{" "}
        It eliminates repetitive tasks and focuses human capabilities on strategic goals.
      </>
    ),
    icon: Brain,
    gradient: "from-primary/5 via-white to-white",
    link: "/booster-studio",
  },
  {
    id: "entertainment-tech",
    title: "Entertainment Tech",
    description:
      "We don't just develop digital tools; we envision the future of entertainment. withbooster creates experiences where technology meets creativity, transforming simple applications into spaces that spark curiosity and joy. Our vision is not to develop applications that are forgotten over time, but to create products that will be used continuously.",
    icon: Sparkles,
    gradient: "from-purple-50 via-white to-white",
    link: "/entertainment-tech",
  },
  {
    id: "digital-designs",
    title: "Digital Designs",
    description:
      "We turn creativity into digital designs that reach thousands across the globe. Our Etsy store offers customizable posters, special occasion templates, and timeless digital décor products. With instant access, high aesthetics, and limitless creativity, we bring value into people's everyday lives.",
    icon: Palette,
    gradient: "from-pink-50 via-white to-white",
    link: "/digital-designs",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-4 text-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          <Sparkles className="h-3.5 w-3.5" />
          What We Lead
        </span>
        <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">Our Services</h2>
        <p className="max-w-2xl text-lg text-slate-600">
          Future-driven solutions in AI, entertainment technology, and digital design
        </p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const { id, title, description, icon: Icon, gradient, link } = service;

  const cardContent = (
    <div
      className={cn(
        "relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br p-8 shadow-lg transition-all duration-300",
        "hover:border-slate-300 hover:shadow-xl",
        link && "cursor-pointer hover:scale-[1.02]",
        gradient
      )}
    >
        {/* Glow Effect */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,19,170,0.08),transparent_50%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col">
          {/* Icon */}
          <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:border-primary/30">
            <Icon className="h-7 w-7 text-primary" />
          </div>

          {/* Title */}
          <h3 className="mb-4 text-2xl font-bold text-slate-900">{title}</h3>

          {/* Description */}
          <div className="mb-6 flex-1 text-sm leading-relaxed text-slate-600">
            {description}
          </div>
        </div>

        {/* Bottom Gradient Line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );

  return (
    <motion.article
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative h-full"
    >
      {link ? (
        <Link href={link} className="block h-full">
          {cardContent}
        </Link>
      ) : (
        cardContent
      )}
    </motion.article>
  );
}

