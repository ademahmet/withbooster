"use client";
import { useState } from "react";
import { Button } from "../../components/ui/button";

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
      body: JSON.stringify(form)
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
    <div className="container mx-auto py-20 px-4 max-w-lg">
      <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-8 font-gilroy">withbooster İletişim</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white p-8 rounded-lg shadow-lg text-black">
        <input
          type="text"
          required
          placeholder="Adınız"
          className="px-4 py-2 rounded border border-gray-300 font-gilroy font-normal"
          value={form.name}
          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
        />
        <input
          type="email"
          required
          placeholder="E-posta"
          className="px-4 py-2 rounded border border-gray-300 font-gilroy font-normal"
          value={form.email}
          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
        />
        <textarea
          required
          placeholder="Mesajınız"
          className="px-4 py-2 rounded border border-gray-300 min-h-[100px] font-gilroy font-normal"
          value={form.message}
          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
        />
        {status === "success" && <span className="text-green-600 font-gilroy">Mesajınız başarıyla gönderildi!</span>}
        {status === "error" && <span className="text-red-600 font-gilroy">{error}</span>}
        <Button type="submit" className="bg-primary text-white font-gilroy font-extrabold">Gönder</Button>
      </form>
    </div>
  );
} 