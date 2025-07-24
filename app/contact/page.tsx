"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // mailto linki ile kullanıcıyı yönlendir
    const subject = encodeURIComponent(`Contact Form: ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`);
    window.location.href = `mailto:info.withbooster@gmail.com?subject=${subject}&body=${body}`;
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 bg-black font-sans">
      <div className="max-w-lg w-full mx-auto flex flex-col items-center justify-center py-24">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 font-sans">Get In Touch With Us</h1>
        <p className="text-lg text-center text-white/80 mb-10 font-sans">For collab offers, university club reach-outs, and love-letters.</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full font-sans">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-base font-semibold font-sans">Name</label>
            <input
              id="name"
              type="text"
              required
              className="px-5 py-3 rounded-lg bg-[#2d13aa]/20 backdrop-blur-sm border border-[#2d13aa]/30 focus:border-[#2d13aa] outline-none text-white text-lg font-normal placeholder-white/60 font-sans"
              value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-base font-semibold font-sans">Email Address</label>
            <input
              id="email"
              type="email"
              required
              className="px-5 py-3 rounded-lg bg-[#2d13aa]/20 backdrop-blur-sm border border-[#2d13aa]/30 focus:border-[#2d13aa] outline-none text-white text-lg font-normal placeholder-white/60 font-sans"
              value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-base font-semibold font-sans">Message</label>
            <textarea
              id="message"
              required
              className="px-5 py-3 rounded-lg bg-[#2d13aa]/20 backdrop-blur-sm border border-[#2d13aa]/30 focus:border-[#2d13aa] outline-none text-white text-lg font-normal min-h-[120px] placeholder-white/60 font-sans"
              value={form.message}
              onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
            />
          </div>
          {status === "success" && <span className="text-green-400 font-semibold font-sans">If your mail app opened, your message will be sent.</span>}
          <button
            type="submit"
            className="w-full mt-2 py-3 rounded-full bg-[#2d13aa] text-white text-lg font-bold shadow-lg hover:bg-[#1a237e] transition border border-[#2d13aa]/50 font-sans"
          >
            Submit
          </button>
        </form>
        <div className="mt-6 text-center text-white/70 text-sm font-sans">
          Do you have any question or problem with us?<br />
          Get in touch
        </div>
      </div>
    </div>
  );
} 