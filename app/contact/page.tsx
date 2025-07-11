"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("idle");
    setError("");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, to: "info.withbooster@gmail.com" })
    });
    if (res.ok) {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
      const data = await res.json();
      setError(data.error || "Bir hata oluştu.");
    }
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-4">
      <div className="max-w-lg w-full mx-auto flex flex-col items-center justify-center py-24">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4">Get In Touch With Us</h1>
        <p className="text-lg text-center text-white/80 mb-10">For collab offers, university club reach-outs, and love-letters.</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-base font-semibold">Name</label>
            <input
              id="name"
              type="text"
              required
              className="px-5 py-3 rounded-lg bg-[#2d13aa] border border-white/20 focus:border-white outline-none text-white text-lg font-normal placeholder-white/60"
              value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-base font-semibold">Email Address</label>
            <input
              id="email"
              type="email"
              required
              className="px-5 py-3 rounded-lg bg-[#2d13aa] border border-white/20 focus:border-white outline-none text-white text-lg font-normal placeholder-white/60"
              value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-base font-semibold">Message</label>
            <textarea
              id="message"
              required
              className="px-5 py-3 rounded-lg bg-[#2d13aa] border border-white/20 focus:border-white outline-none text-white text-lg font-normal min-h-[120px] placeholder-white/60"
              value={form.message}
              onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
            />
          </div>
          {status === "success" && <span className="text-green-400 font-semibold">Mesajınız başarıyla gönderildi!</span>}
          {status === "error" && <span className="text-red-400 font-semibold">{error}</span>}
          <button
            type="submit"
            className="w-full mt-2 py-3 rounded-full bg-[#2d13aa] text-white text-lg font-bold shadow-lg hover:bg-[#1a237e] transition border border-white/30"
          >
            Submit
          </button>
        </form>
        <div className="mt-6 text-center text-white/70 text-sm">
          Do you have a question or problem with one of our apps?<br />
          Visit our <a href="#" className="text-white underline">Support Center</a>
        </div>
      </div>
    </div>
  );
} 