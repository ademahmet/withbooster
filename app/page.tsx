import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PowerOfBoosterSection } from "@/components/sections/power-of-booster";
import { SectionReveal } from "@/components/sections/section-reveal";
import { TeamSection } from "@/components/sections/team-section";
import { ServicesSection } from "@/components/sections/services-section";

export default function Home() {
  return (
    <div className="relative overflow-hidden pb-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_farthest-corner_at_0%_0%,rgba(45,19,170,0.35)_0%,transparent_45%),radial-gradient(circle_farthest-corner_at_100%_0%,rgba(225,168,240,0.25)_0%,transparent_40%)]" />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pt-16 sm:gap-32 sm:pt-24">
        <SectionReveal>
          <HeroSection />
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <ServicesSection />
        </SectionReveal>
        <SectionReveal delay={0.2}>
          <PowerOfBoosterSection />
        </SectionReveal>
        <SectionReveal delay={0.3}>
          <TeamSection />
        </SectionReveal>
        <SectionReveal delay={0.4}>
          <ContactSection />
        </SectionReveal>
      </main>
    </div>
  );
}
