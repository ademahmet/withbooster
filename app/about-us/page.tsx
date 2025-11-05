import { AboutHeroSection } from "@/components/about-us/about-hero-section";
import { TeamSection } from "@/components/about-us/team-section";
import { MetricsSection } from "@/components/about-us/metrics-section";
import { SectionReveal } from "@/components/sections/section-reveal";

export default function AboutUsPage() {
  return (
    <div className="relative overflow-hidden">
      <main className="mx-auto flex w-full flex-col">
        <SectionReveal>
          <AboutHeroSection />
        </SectionReveal>
        <div className="mx-auto w-full max-w-6xl space-y-24 px-6 py-24 sm:space-y-32">
          <SectionReveal delay={0.1}>
            <TeamSection />
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <MetricsSection />
          </SectionReveal>
        </div>
      </main>
    </div>
  );
}

