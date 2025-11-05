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
      <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-primary via-primary to-purple-900 px-8 py-16 text-white sm:px-12 sm:py-20">
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
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Ready to Boost Your Future?
            </h2>
            <p className="mx-auto max-w-2xl text-base text-white/90 sm:text-lg">
              Whether you need AI-powered solutions, digital experiences, or creative products—
              let's build something extraordinary together.
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
              className="group h-12 min-w-[200px] border-2 border-white bg-white px-8 text-base font-semibold text-primary shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
            >
              <a href="mailto:info@withbooster.com">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              className="group h-12 min-w-[200px] border-2 border-white bg-transparent px-8 text-base font-semibold text-white transition-all hover:bg-white/10 hover:scale-105"
              onClick={() => setIsCommunityOpen(true)}
            >
              <Users className="mr-2 h-5 w-5" />
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

