"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export function BoosterDemoSection() {
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
          See It In Action
        </p>
        <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          Product Demo
        </h2>
        <p className="mx-auto max-w-2xl text-sm text-slate-600">
          Watch how Booster Studio transforms business operations with AI-powered automation. 
          See real results from real businesses.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl bg-slate-100 shadow-2xl"
      >
        {/* Placeholder for video embed */}
        <div className="relative aspect-video w-full">
          {/* This will be replaced with actual video embed */}
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-110">
                <Play className="h-10 w-10 text-white" fill="white" />
              </div>
              <p className="text-lg font-medium text-white">Demo Video Coming Soon</p>
            </div>
          </div>

          {/* 
            Replace the placeholder above with your video embed, for example:
            
            <iframe
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Booster Studio Demo"
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            
            Or for Vimeo:
            
            <iframe
              src="https://player.vimeo.com/video/YOUR_VIDEO_ID"
              title="Booster Studio Demo"
              className="absolute inset-0 h-full w-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          */}
        </div>
      </motion.div>
    </section>
  );
}

