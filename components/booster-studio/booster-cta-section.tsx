"use client";

import { motion } from "framer-motion";
import { Calendar, Play } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function BoosterCTASection() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-purple-700 to-primary px-8 py-16 text-white sm:px-12 sm:py-20 lg:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.3)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
      </div>

      {/* Floating elements */}
      <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-white/5 blur-2xl" />
      <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="mx-auto max-w-2xl text-base text-white/90 sm:text-lg">
            See Booster Studio in action. Book a personalized demo or schedule a call with our team 
            to discover how AI can revolutionize your operations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            asChild
            className="group h-14 min-w-[200px] border-2 border-white bg-white px-8 text-base font-semibold text-primary shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
          >
            <a href="mailto:info.withbooster@gmail.com">
              <Play className="mr-2 h-5 w-5" />
              Request Demo
            </a>
          </Button>
          <Button
            asChild
            className="group h-14 min-w-[200px] border-2 border-white bg-transparent px-8 text-base font-semibold text-white transition-all hover:scale-105 hover:bg-white/10"
          >
            <a href="https://calendly.com/info-withbooster/30min" target="_blank" rel="noopener noreferrer">
              <Calendar className="mr-2 h-5 w-5" />
              Book a Call
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

