"use client";

import { motion } from "framer-motion";
import { Brain, Palette, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

const services = [
  {
    id: "ai-studio",
    title: "AI Studio",
    description:
      "We redesign business operations with artificial intelligence. AI Studio accelerates and scales every process — from sales and customer relations to content creation and call centers. It eliminates repetitive tasks, focuses human talent on strategic goals, and gives brands a true competitive edge.",
    icon: Brain,
    gradient: "from-primary/40 via-primary/20 to-transparent",
    tags: ["AI Ops", "Customer CX", "Scalable Automation"],
  },
  {
    id: "entertainment-tech",
    title: "Entertainment Tech",
    description:
      "We don't just develop digital tools — we imagine the future of online interaction. Withbooster creates experiences where technology meets creativity, turning simple applications into spaces that inspire connection, curiosity, and joy. Our vision is not about building apps that fade; it's about shaping platforms that redefine how communities form and thrive in the digital age.",
    icon: Sparkles,
    gradient: "from-accent/30 via-accent/10 to-transparent",
    tags: ["Digital Experience", "Community", "Innovation"],
  },
  {
    id: "digital-designs",
    title: "Digital Designs",
    description:
      "We turn creativity into digital designs that reach thousands across the globe. Our Etsy store offers customizable posters, special occasion templates, and timeless digital décor products. With instant access, high aesthetics, and limitless creativity, we bring value into people's everyday lives.",
    icon: Palette,
    gradient: "from-purple-500/30 via-pink-500/10 to-transparent",
    tags: ["Digital Design", "Creativity", "E-commerce"],
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
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
          <Sparkles className="h-3.5 w-3.5" />
          What We Lead
        </span>
        <h2 className="text-4xl font-bold sm:text-5xl">Our Ventures</h2>
        <p className="max-w-2xl text-lg text-white/60">
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
  const { id, title, description, icon: Icon, gradient, tags } = service;

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
      <div
        className={cn(
          "relative h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br p-8 shadow-2xl transition-all duration-300",
          "hover:border-white/20 hover:shadow-[0_0_40px_rgba(225,168,240,0.15)]",
          gradient
        )}
      >
        {/* Glow Effect */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(225,168,240,0.15),transparent_50%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col">
          {/* Icon */}
          <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:border-white/20">
            <Icon className="h-7 w-7 text-white" />
          </div>

          {/* Title */}
          <h3 className="mb-4 text-2xl font-bold text-white">{title}</h3>

          {/* Description */}
          <p className="mb-6 flex-1 text-sm leading-relaxed text-white/70">
            {description}
          </p>

          {/* Tags */}
          {tags && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/60 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Gradient Line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
    </motion.article>
  );
}

