"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { CommunityPopup } from "@/components/shared/community-popup";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCommunityOpen, setIsCommunityOpen] = useState(false);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/40 backdrop-blur-xl"
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link href="/" className="group flex items-center gap-3 transition-transform hover:scale-105">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl transition-all group-hover:bg-primary/20" />
              <Image
                src="/withbooster_logo.svg"
                alt="withbooster"
                width={160}
                height={36}
                className="relative h-9 w-auto"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-1 md:flex">
            <Link
              href="/"
              className="group relative px-4 py-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              <span className="relative z-10">Home</span>
              <span className="absolute inset-0 scale-0 rounded-full bg-white/5 transition-transform group-hover:scale-100" />
            </Link>
            <Link
              href="#ai-studio"
              className="group relative px-4 py-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              <span className="relative z-10">AI Studio</span>
              <span className="absolute inset-0 scale-0 rounded-full bg-white/5 transition-transform group-hover:scale-100" />
            </Link>
            <Link
              href="#services"
              className="group relative px-4 py-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              <span className="relative z-10">Ventures</span>
              <span className="absolute inset-0 scale-0 rounded-full bg-white/5 transition-transform group-hover:scale-100" />
            </Link>
            <Link
              href="#team"
              className="group relative px-4 py-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              <span className="relative z-10">Team</span>
              <span className="absolute inset-0 scale-0 rounded-full bg-white/5 transition-transform group-hover:scale-100" />
            </Link>
            <div className="ml-4 flex items-center gap-3">
              <Button
                variant="outline"
                className="group relative h-11 overflow-hidden border border-accent/30 px-6 text-sm font-semibold text-accent transition-all hover:border-accent/50 hover:bg-accent/5 hover:shadow-lg hover:shadow-accent/10"
                onClick={() => setIsCommunityOpen(true)}
              >
                <Sparkles className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
                Join Community
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex items-center justify-center rounded-lg p-2 text-white transition-colors hover:bg-white/5 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/5 bg-black/60 px-6 py-6 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-3">
              <Link
                href="/"
                className="rounded-lg px-4 py-3 text-sm font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#ai-studio"
                className="rounded-lg px-4 py-3 text-sm font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                AI Studio
              </Link>
              <Link
                href="#services"
                className="rounded-lg px-4 py-3 text-sm font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Ventures
              </Link>
              <Link
                href="#team"
                className="rounded-lg px-4 py-3 text-sm font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Team
              </Link>
              <Button
                variant="outline"
                className="mt-2 h-11 border border-accent/30 px-6 text-sm font-semibold text-accent"
                onClick={() => {
                  setIsOpen(false);
                  setIsCommunityOpen(true);
                }}
              >
                <Sparkles className="mr-2 h-4 w-4" />
                Join Community
              </Button>
            </div>
          </motion.div>
        )}
      </motion.nav>

      <CommunityPopup
        open={isCommunityOpen}
        onOpenChange={setIsCommunityOpen}
      />
    </>
  );
}

