"use client";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { useState } from "react";

export default function JoinCommunityDialog({ open, setOpen }: { open: boolean, setOpen: (v: boolean) => void }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/community", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email })
    });
    const data = await res.json();
    if (res.ok) {
      setSubmitted(true);
    } else {
      setError(data.error || "Bir hata oluştu.");
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Topluluğumuza Katıl</DialogTitle>
        </DialogHeader>
        {submitted ? (
          <div className="py-6 text-center">
            <p className="text-green-500 font-semibold">Aramıza hoş geldin! E-posta adresine hoş geldin mesajı gönderdik.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              required
              placeholder="E-posta adresin"
              className="px-4 py-2 rounded border border-gray-300 text-black"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            {error && <span className="text-red-500 text-sm">{error}</span>}
            <Button type="submit" className="bg-primary text-white">Katıl</Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
} 