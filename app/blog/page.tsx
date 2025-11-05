import { BlogHeroSection } from "@/components/blog/blog-hero-section";
import { BlogPostsGrid } from "@/components/blog/blog-posts-grid";
import { SectionReveal } from "@/components/sections/section-reveal";

export default function BlogPage() {
  return (
    <div className="relative overflow-hidden bg-slate-50">
      <main className="mx-auto flex w-full flex-col">
        <SectionReveal>
          <BlogHeroSection />
        </SectionReveal>
        <div className="mx-auto w-full max-w-7xl px-6 py-16">
          <SectionReveal delay={0.1}>
            <BlogPostsGrid />
          </SectionReveal>
        </div>
      </main>
    </div>
  );
}

