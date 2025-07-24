"use client";
import * as React from "react";
import { createPortal } from "react-dom";
import { Button } from "./ui/button";

export default function JoinCommunityDialog({ open, setOpen }: { open: boolean, setOpen: (v: boolean) => void }) {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, setOpen]);

  if (!open || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 backdrop-blur-sm" style={{ minHeight: '100vh', minWidth: '100vw' }} onClick={() => setOpen(false)}>
      <div
        className="relative w-full max-w-md mx-auto flex flex-col items-center justify-center p-6 sm:p-10 rounded-2xl bg-white shadow-2xl border-0"
        style={{ boxShadow: '0 8px 40px 0 rgba(45,19,170,0.15), 0 1.5px 8px 0 rgba(0,0,0,0.10)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold focus:outline-none"
          aria-label="Close"
        >
          ×
        </button>
        <div className="w-full text-center mb-2">
          <h2 className="text-2xl font-bold text-[#2d13aa]">Join Our Community</h2>
        </div>
        {submitted ? (
          <div className="py-8 text-center">
            <p className="text-green-500 font-semibold text-lg">Thank you for joining our community!</p>
          </div>
        ) : (
          <>
            <p className="mb-6 text-base text-gray-700 text-center max-w-xs mx-auto">
              Subscribe to get the latest updates, product news, and exclusive content directly to your inbox. Be the first to know about our innovations!
            </p>
            <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} className="flex flex-col gap-4 w-full">
              <input
                type="text"
                required
                placeholder="Your full name"
                className="px-5 py-3 rounded-xl border border-gray-200 focus:border-[#2d13aa] outline-none text-black text-base font-normal bg-white shadow-sm transition w-full"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
              />
              <input
                type="email"
                required
                placeholder="Your email address"
                className="px-5 py-3 rounded-xl border border-gray-200 focus:border-[#2d13aa] outline-none text-black text-base font-normal bg-white shadow-sm transition w-full"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <Button type="submit" className="bg-[#2d13aa] text-white rounded-full py-3 text-base font-semibold shadow-lg hover:bg-[#1a237e] transition-all w-full mt-2">Join</Button>
            </form>
          </>
        )}
      </div>
    </div>,
    document.body
  );
} 