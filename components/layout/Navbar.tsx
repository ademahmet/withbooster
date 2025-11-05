"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { CommunityPopup } from "@/components/shared/community-popup";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCommunityOpen, setIsCommunityOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "border-b border-slate-200 bg-white/95 backdrop-blur-xl shadow-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
          <Link href="/" className="group flex items-center gap-3 transition-transform hover:scale-105">
            <Image
              src="/withbooster_logo.svg"
              alt="withbooster"
              width={160}
              height={36}
              className="h-7 w-auto sm:h-9"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-1 md:flex">
            <Link
              href="/"
              className="group relative px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              <span className="relative z-10">Home</span>
              <span className="absolute inset-0 scale-0 rounded-full bg-slate-100 transition-transform group-hover:scale-100" />
            </Link>
            <Link
              href="/booster-studio"
              className="group relative px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              <span className="relative z-10">Booster Studio</span>
              <span className="absolute inset-0 scale-0 rounded-full bg-slate-100 transition-transform group-hover:scale-100" />
            </Link>
            <Link
              href="/entertainment-tech"
              className="group relative px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              <span className="relative z-10">Entertainment Tech</span>
              <span className="absolute inset-0 scale-0 rounded-full bg-slate-100 transition-transform group-hover:scale-100" />
            </Link>
            <Link
              href="/digital-designs"
              className="group relative px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              <span className="relative z-10">Digital Designs</span>
              <span className="absolute inset-0 scale-0 rounded-full bg-slate-100 transition-transform group-hover:scale-100" />
            </Link>
            <Link
              href="/about-us"
              className="group relative px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              <span className="relative z-10">About Us</span>
              <span className="absolute inset-0 scale-0 rounded-full bg-slate-100 transition-transform group-hover:scale-100" />
            </Link>
            <Link
              href="/blog"
              className="group relative px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              <span className="relative z-10">Blog</span>
              <span className="absolute inset-0 scale-0 rounded-full bg-slate-100 transition-transform group-hover:scale-100" />
            </Link>
            <div className="ml-2 flex items-center gap-3 sm:ml-4">
              <Button
                variant="outline"
                className="group relative h-10 overflow-hidden border-2 border-primary px-4 text-xs font-semibold text-primary transition-all hover:bg-primary hover:text-white sm:h-11 sm:px-6 sm:text-sm"
                onClick={() => setIsCommunityOpen(true)}
              >
                <Sparkles className="mr-1 h-3.5 w-3.5 transition-transform group-hover:rotate-12 sm:mr-2 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">Join Community</span>
                <span className="sm:hidden">Join</span>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex items-center justify-center rounded-lg p-2 text-slate-900 transition-colors hover:bg-slate-100 md:hidden"
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
            className={`border-t px-6 py-6 backdrop-blur-xl md:hidden ${
              isScrolled
                ? "border-slate-200 bg-white/95"
                : "border-slate-200 bg-white/95"
            }`}
          >
            <div className="flex flex-col gap-3">
              <Link
                href="/"
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/booster-studio"
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
                onClick={() => setIsOpen(false)}
              >
                Booster Studio
              </Link>
              <Link
                href="/entertainment-tech"
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
                onClick={() => setIsOpen(false)}
              >
                Entertainment Tech
              </Link>
              <Link
                href="/digital-designs"
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
                onClick={() => setIsOpen(false)}
              >
                Digital Designs
              </Link>
              <Link
                href="/about-us"
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/blog"
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Button
                variant="outline"
                className="mt-2 h-11 border-2 border-primary px-6 text-sm font-semibold text-primary hover:bg-primary hover:text-white"
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

