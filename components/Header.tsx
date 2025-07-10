"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/ui/button";
import JoinCommunityDialog from "../components/JoinCommunityDialog";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-6 left-1/2 z-50 -translate-x-1/2 flex justify-center w-full pointer-events-none">
      <div className="flex items-center justify-between gap-10 px-10 py-2 bg-white/80 backdrop-blur-md rounded-full shadow-lg pointer-events-auto min-w-[420px] max-w-4xl w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center" style={{ minWidth: 56 }}>
          <Image src="/logo.png" alt="withbooster Logo" width={120} height={120} priority />
          <span className="sr-only">withbooster</span>
        </Link>
        {/* Navigation */}
        <nav className="flex-1 flex justify-center gap-10">
          <Link href="/products" className="hover:text-primary font-semibold transition">Products</Link>
          <Link href="/about" className="hover:text-primary font-semibold transition">About</Link>
          <Link href="/contact" className="hover:text-primary font-semibold transition">Contact</Link>
        </nav>
        {/* Join Community */}
        <Button
          variant="default"
          className="bg-[#2d13aa] text-white rounded-full px-5 py-1.5 font-semibold text-sm shadow hover:bg-[#1a237e] transition-all h-10 flex items-center whitespace-nowrap"
          onClick={() => setOpen(true)}
        >
          Join Our Community!
        </Button>
        <JoinCommunityDialog open={open} setOpen={setOpen} />
      </div>
    </header>
  );
} 