"use client";

import { motion } from "framer-motion";
import { Flag, Rocket, Users, Award, TrendingUp, Globe } from "lucide-react";

const milestones = [
  {
    date: "January 2023",
    title: "Company Founded",
    description: "Withbooster was officially established with a vision to transform digital operations.",
    icon: Flag,
    color: "from-blue-500 to-cyan-500",
  },
  {
    date: "March 2023",
    title: "First AI Product Launch",
    description: "Launched our first AI automation tool for sales operations.",
    icon: Rocket,
    color: "from-purple-500 to-pink-500",
  },
  {
    date: "June 2023",
    title: "Reached 1,000 Users",
    description: "Our platforms collectively reached 1,000 active users across all products.",
    icon: Users,
    color: "from-green-500 to-emerald-500",
  },
  {
    date: "September 2023",
    title: "First Enterprise Client",
    description: "Secured our first major B2B client for Booster Studio AI solutions.",
    icon: Award,
    color: "from-orange-500 to-red-500",
  },
  {
    date: "December 2023",
    title: "Product Portfolio Expansion",
    description: "Expanded into entertainment tech with the launch of Vikizle platform.",
    icon: TrendingUp,
    color: "from-indigo-500 to-purple-500",
  },
  {
    date: "2024",
    title: "Global Expansion",
    description: "Serving customers across 45+ countries with our digital products.",
    icon: Globe,
    color: "from-pink-500 to-rose-500",
  },
];

export function MilestonesSection() {
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
          Our Journey
        </p>
        <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          Key Milestones
        </h2>
        <p className="mx-auto max-w-2xl text-sm text-slate-600">
          A timeline of our growth, achievements, and the moments that shaped Withbooster.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line - hidden on mobile */}
        <div className="absolute left-1/2 hidden h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 lg:block" />

        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative grid gap-8 lg:grid-cols-2 lg:gap-12 ${
                index % 2 === 0 ? "" : "lg:flex-row-reverse"
              }`}
            >
              {/* Left side (or right on odd items) */}
              <div
                className={`${
                  index % 2 === 0 ? "lg:text-right" : "lg:col-start-2"
                } space-y-2`}
              >
                <div
                  className={`inline-block rounded-full bg-gradient-to-br ${milestone.color} px-4 py-1 text-xs font-semibold text-white ${
                    index % 2 === 0 ? "lg:float-right" : ""
                  }`}
                >
                  {milestone.date}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{milestone.title}</h3>
                <p className="text-sm text-slate-600">{milestone.description}</p>
              </div>

              {/* Center icon */}
              <div className="absolute left-1/2 hidden h-16 w-16 -translate-x-1/2 lg:block">
                <div
                  className={`flex h-full w-full items-center justify-center rounded-full border-4 border-white bg-gradient-to-br ${milestone.color} shadow-xl`}
                >
                  <milestone.icon className="h-7 w-7 text-white" />
                </div>
              </div>

              {/* Mobile icon */}
              <div className="flex items-start gap-4 lg:hidden">
                <div
                  className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${milestone.color}`}
                >
                  <milestone.icon className="h-6 w-6 text-white" />
                </div>
              </div>

              {/* Right side (or left on odd items) - placeholder for balance */}
              <div className={`hidden lg:block ${index % 2 === 0 ? "" : "lg:col-start-1"}`} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-xs text-slate-500"
      >
        * Placeholder milestones - Update with actual company achievements and dates
      </motion.p>
    </section>
  );
}

