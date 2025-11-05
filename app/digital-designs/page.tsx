import { DigitalDesignsHeroSection } from "@/components/digital-designs/digital-designs-hero-section";
import { ProductGridSection } from "@/components/digital-designs/product-grid-section";
import { SectionReveal } from "@/components/sections/section-reveal";

export default function DigitalDesignsPage() {
  return (
    <div className="relative overflow-hidden bg-slate-50">
      <main className="mx-auto flex w-full flex-col">
        <SectionReveal>
          <DigitalDesignsHeroSection />
        </SectionReveal>
        <div className="mx-auto w-full max-w-7xl px-6 py-16">
          <SectionReveal delay={0.1}>
            <ProductGridSection />
          </SectionReveal>
        </div>
      </main>
    </div>
  );
}

