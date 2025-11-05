"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CommunityPopup } from "@/components/shared/community-popup";

export function CTASection() {
  const [isCommunityOpen, setIsCommunityOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-purple-900 px-6 py-12 text-white sm:rounded-[32px] sm:px-12 sm:py-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.15)_0%,transparent_50%)]" />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:space-y-6"
          >
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
              Ready to Boost Your Future?
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-white/90 sm:text-base md:text-lg">
              Whether you need AI-powered solutions, digital experiences, or creative products—
              let's build something extraordinary together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:mt-10 sm:flex-row"
          >
            <Button
              asChild
              className="group h-12 w-full min-w-[200px] border-2 border-white bg-white px-6 text-sm font-semibold text-primary shadow-xl transition-all hover:scale-105 hover:shadow-2xl sm:w-auto sm:px-8 sm:text-base"
            >
              <a href="mailto:info.withbooster@gmail.com">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
              </a>
            </Button>
            <Button
              className="group h-12 w-full min-w-[200px] border-2 border-white bg-transparent px-6 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-white/10 sm:w-auto sm:px-8 sm:text-base"
              onClick={() => setIsCommunityOpen(true)}
            >
              <Users className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Join Community
            </Button>
          </motion.div>

          {/* Trust indicator */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-sm text-white/70"
          >
            Trusted by forward-thinking companies worldwide
          </motion.p>
        </div>
      </section>

      <CommunityPopup
        open={isCommunityOpen}
        onOpenChange={setIsCommunityOpen}
      />
    </>
  );
}

