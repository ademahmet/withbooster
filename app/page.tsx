import { HeroSection } from "@/components/sections/hero-section";
import { SectionReveal } from "@/components/sections/section-reveal";
import { ServicesSection } from "@/components/sections/services-section";
import { WhyWithboosterSection } from "@/components/sections/why-withbooster-section";
import { ReferencesSection } from "@/components/sections/references-section";
import { CTASection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <main className="mx-auto flex w-full flex-col">
        <SectionReveal>
          <HeroSection />
        </SectionReveal>
        <div className="mx-auto w-full max-w-6xl space-y-24 px-6 py-24 sm:space-y-32">
          <SectionReveal delay={0.1}>
            <ServicesSection />
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <WhyWithboosterSection />
          </SectionReveal>
          <SectionReveal delay={0.3}>
            <ReferencesSection />
          </SectionReveal>
          <SectionReveal delay={0.4}>
            <CTASection />
          </SectionReveal>
        </div>
      </main>
    </div>
  );
}
