"use client";

import { motion } from "framer-motion";
import { BookOpen, Eye, Target } from "lucide-react";

export function StorySection() {
  return (
    <section className="space-y-16">
      {/* Origin Story */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <div className="flex flex-col gap-4 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-slate-500">
            Our Story
          </p>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            How Withbooster Started
          </h2>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg sm:p-12">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <BookOpen className="h-6 w-6" />
              </div>
              <div className="space-y-4 text-slate-600">
                <p className="text-base leading-relaxed sm:text-lg">
                  Withbooster was born from a simple observation: businesses were drowning in repetitive tasks, 
                  communities lacked meaningful digital spaces, and creators struggled to monetize their work.
                </p>
                <p className="text-base leading-relaxed sm:text-lg">
                  In 2023, four visionaries came together with a shared belief—that technology should empower, 
                  not complicate. We started with a single AI automation project and quickly realized the potential 
                  to transform entire industries.
                </p>
                <p className="text-base leading-relaxed sm:text-lg">
                  Today, Withbooster is a multi-faceted technology studio, operating across three core verticals: 
                  AI-powered business operations (Booster Studio), digital entertainment platforms, and creative 
                  digital products. Our journey is just beginning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Vision & Mission */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-slate-200 bg-gradient-to-br from-primary/5 via-white to-white p-8 shadow-sm"
        >
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Eye className="h-7 w-7" />
          </div>
          <h3 className="mb-4 text-2xl font-bold text-slate-900">Our Vision</h3>
          <p className="leading-relaxed text-slate-600">
            To become the global standard for intelligent business automation, immersive digital experiences, 
            and accessible creative products—empowering businesses and individuals to achieve more with less effort.
          </p>
          <div className="mt-6 border-t border-slate-200 pt-6">
            <p className="text-sm font-medium text-slate-500">
              We envision a world where technology seamlessly integrates into daily operations, 
              freeing human potential for innovation and creativity.
            </p>
          </div>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-slate-200 bg-gradient-to-br from-purple-50 via-white to-white p-8 shadow-sm"
        >
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-purple-600">
            <Target className="h-7 w-7" />
          </div>
          <h3 className="mb-4 text-2xl font-bold text-slate-900">Our Mission</h3>
          <p className="leading-relaxed text-slate-600">
            To deliver cutting-edge AI solutions that transform business operations, build platforms that 
            foster genuine community connections, and create digital products that inspire creativity worldwide.
          </p>
          <div className="mt-6 space-y-3">
            <div className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-purple-600" />
              <p className="text-sm text-slate-600">
                Eliminate inefficiency through intelligent automation
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-purple-600" />
              <p className="text-sm text-slate-600">
                Build platforms that prioritize user experience and community
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-purple-600" />
              <p className="text-sm text-slate-600">
                Make high-quality digital design accessible to everyone
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

