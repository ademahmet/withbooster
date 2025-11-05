import { EntertainmentHeroSection } from "@/components/entertainment-tech/entertainment-hero-section";
import { VikizleSection } from "@/components/entertainment-tech/vikizle-section";
import { UpcomingProductsSection } from "@/components/entertainment-tech/upcoming-products-section";
import { SectionReveal } from "@/components/sections/section-reveal";

export default function EntertainmentTechPage() {
  return (
    <div className="relative overflow-hidden">
      <main className="mx-auto flex w-full flex-col">
        <SectionReveal>
          <EntertainmentHeroSection />
        </SectionReveal>
        <div className="mx-auto w-full max-w-6xl space-y-24 px-6 py-24 sm:space-y-32">
          <SectionReveal delay={0.1}>
            <VikizleSection />
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <UpcomingProductsSection />
          </SectionReveal>
        </div>
      </main>
    </div>
  );
}

