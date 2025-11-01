import { ContactForm } from "@/components/shared/contact-form";

export function ContactSection() {
  return (
    <section className="space-y-10 pb-12">
      <div className="flex flex-col gap-3 text-left sm:gap-4">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">
          Collaborate
        </p>
        <h2 className="max-w-2xl text-3xl font-semibold sm:text-4xl">
          Let&apos;s Build the Future, Together.
        </h2>
        <p className="max-w-2xl text-sm text-white/70">
          Share your goals and we&apos;ll design an intelligent path forward — from
          AI automation to immersive digital experiences.
        </p>
      </div>
      <ContactForm />
    </section>
  );
}

