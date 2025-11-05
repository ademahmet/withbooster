import { BoosterHeroSection } from "@/components/booster-studio/booster-hero-section";
import { BoosterWhatWeDoSection } from "@/components/booster-studio/booster-what-we-do-section";
import { BoosterHowWeDoItSection } from "@/components/booster-studio/booster-how-we-do-it-section";
import { BoosterProductsSection } from "@/components/booster-studio/booster-products-section";
import { BoosterDemoSection } from "@/components/booster-studio/booster-demo-section";
import { BoosterCTASection } from "@/components/booster-studio/booster-cta-section";
import { SectionReveal } from "@/components/sections/section-reveal";

export default function BoosterStudioPage() {
  return (
    <div className="relative overflow-hidden">
      <main className="mx-auto flex w-full flex-col">
        <SectionReveal>
          <BoosterHeroSection />
        </SectionReveal>
        <div className="mx-auto w-full max-w-6xl space-y-24 px-6 py-24 sm:space-y-32">
          <SectionReveal delay={0.1}>
            <BoosterWhatWeDoSection />
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <BoosterHowWeDoItSection />
          </SectionReveal>
          <SectionReveal delay={0.3}>
            <BoosterProductsSection />
          </SectionReveal>
          <SectionReveal delay={0.4}>
            <BoosterDemoSection />
          </SectionReveal>
          <SectionReveal delay={0.5}>
            <BoosterCTASection />
          </SectionReveal>
        </div>
      </main>
    </div>
  );
}

