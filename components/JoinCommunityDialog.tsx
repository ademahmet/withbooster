"use client";
import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { useState } from "react";

export default function JoinCommunityDialog({ open, setOpen }: { open: boolean, setOpen: (v: boolean) => void }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/community", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, fullName })
    });
    const data = await res.json();
    if (res.ok) {
      setSubmitted(true);
    } else {
      setError(data.error || "An error occurred. Please try again.");
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <div className="fixed inset-0 z-50 min-h-screen flex items-center justify-center">
          <div className="relative max-w-md w-[90vw] sm:w-full flex flex-col items-center justify-center p-4 sm:p-8 rounded-2xl bg-white/95 shadow-2xl border-0 mx-auto">
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold focus:outline-none"
              aria-label="Close"
            >
              ×
            </button>
            <div className="w-full text-center mb-2">
              <DialogHeader>
                <DialogTitle><span className="text-2xl font-bold text-[#2d13aa]">Join Our Community</span></DialogTitle>
              </DialogHeader>
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
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    className="px-5 py-3 rounded-xl border border-gray-300 focus:border-[#2d13aa] outline-none text-black text-base font-normal bg-white shadow-sm transition"
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    className="px-5 py-3 rounded-xl border border-gray-300 focus:border-[#2d13aa] outline-none text-black text-base font-normal bg-white shadow-sm transition"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                  {error && <span className="text-red-500 text-sm text-center">{error}</span>}
                  <Button type="submit" className="bg-[#2d13aa] text-white rounded-full py-3 text-base font-semibold shadow-lg hover:bg-[#1a237e] transition-all w-full mt-2">Join</Button>
                </form>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 