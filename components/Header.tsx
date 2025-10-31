"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/ui/button";
import JoinCommunityDialog from "../components/JoinCommunityDialog";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-6 left-1/2 z-50 -translate-x-1/2 flex justify-center w-full">
      <div className="flex items-center justify-between gap-10 px-10 py-3 bg-gradient-to-r from-[#2d13aa]/15 via-[#1a237e]/20 to-[#2d13aa]/15 backdrop-blur-xl rounded-full shadow-2xl pointer-events-auto min-w-[420px] max-w-4xl w-full border border-[#2d13aa]/30 relative overflow-hidden">
        {/* Animated background with brand colors */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2d13aa]/8 via-[#1a237e]/12 to-[#2d13aa]/8 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2d13aa]/5 to-transparent animate-pulse" style={{ animationDuration: '4s' }}></div>
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full animate-pulse" style={{ animationDuration: '6s' }}></div>
        {/* Glass effect overlay with brand colors */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2d13aa]/5 to-[#1a237e]/8 rounded-full"></div>
        {/* Subtle border glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#2d13aa]/20 via-[#1a237e]/30 to-[#2d13aa]/20 blur-sm"></div>
        {/* Content */}
        <div className="relative z-10 flex items-center justify-between gap-10 w-full">
          {/* Logo with lighting effect */}
          <Link href="/" className="flex items-center relative group" style={{ minWidth: 56 }}>
            {/* Logo background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#2d13aa]/30 via-[#1a237e]/40 to-[#2d13aa]/30 rounded-2xl blur-md scale-110 group-hover:scale-125 transition-all duration-500"></div>
            {/* Logo container with lighting */}
            <div className="relative bg-gradient-to-r from-white/20 via-white/30 to-white/20 backdrop-blur-sm rounded-2xl p-2 border border-white/30 shadow-lg group-hover:shadow-xl transition-all duration-300">
              {/* Inner glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#2d13aa]/20 via-[#1a237e]/30 to-[#2d13aa]/20 rounded-xl blur-sm"></div>
              {/* Logo image */}
              <div className="relative z-10">
                <Image src="/logo.png" alt="withbooster Logo" width={120} height={120} priority className="drop-shadow-lg" />
              </div>
              {/* Shimmer overlay on logo */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-xl"></div>
            </div>
            <span className="sr-only">withbooster</span>
          </Link>
          {/* Navigation */}
          <nav className="flex-1 flex justify-center gap-10">
            <Link href="/products" className="hover:text-[#2d13aa] font-semibold transition-all duration-300 hover:scale-105 relative group text-white/90 hover:text-white">
              Products and Shop
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2d13aa] to-[#1a237e] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/about" className="hover:text-[#2d13aa] font-semibold transition-all duration-300 hover:scale-105 relative group text-white/90 hover:text-white">
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2d13aa] to-[#1a237e] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/contact" className="hover:text-[#2d13aa] font-semibold transition-all duration-300 hover:scale-105 relative group text-white/90 hover:text-white">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2d13aa] to-[#1a237e] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
          {/* Join Community */}
          <Button
            variant="default"
            className="bg-gradient-to-r from-[#2d13aa] to-[#1a237e] text-white rounded-full px-6 py-2 font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 h-10 flex items-center whitespace-nowrap relative overflow-hidden group border border-[#2d13aa]/50"
            onClick={() => setOpen(true)}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            <span className="relative z-10">Join Our Community!</span>
          </Button>
        </div>
        <JoinCommunityDialog open={open} setOpen={setOpen} />
      </div>
    </header>
  );
} 