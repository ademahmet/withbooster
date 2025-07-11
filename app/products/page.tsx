"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Vikizle",
    color: "#5800ff",
    logo: "/logo1.png",
    description: "Vikizle is a modern video collaboration platform for teams.",
    website: "https://vikizle.com",
    stats: {
      users: "10K+",
      productHunt: "4.8",
      rating: 4.8
    }
  },
  {
    name: "Creahome",
    color: "#283389",
    logo: "/logo2.png",
    description: "Creahome lets you design and share creative home layouts online.",
    website: "https://creahome.com",
    stats: {
      users: "5K+",
      productHunt: "4.6",
      rating: 4.6
    }
  },
  {
    name: "Araba Remover",
    color: "#373643",
    logo: "/logo3.png",
    description: "Remove cars from your photos with one click using AI.",
    website: "https://araba-remover.com",
    stats: {
      users: "20K+",
      productHunt: "4.7",
      rating: 4.7
    }
  }
];

function useInfiniteVerticalScroll(ref: React.RefObject<HTMLImageElement | null>, sectionRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const img = ref.current;
    const section = sectionRef.current;
    if (!img || !section) return;
    let animId: number;
    let running = false;
    let y = 0;
    function animate() {
      if (!img) return;
      y += 1; // Hızı burada ayarlayabilirsin
      if (y > 60) y = 0; // 60px aşağıya kadar kaydır, sonra başa sar
      img.style.transform = `translateY(${y}px)`;
      animId = requestAnimationFrame(animate);
    }
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!running) {
            running = true;
            animId = requestAnimationFrame(animate);
          }
        } else {
          running = false;
          cancelAnimationFrame(animId);
          img.style.transform = "translateY(0px)";
          y = 0;
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(section);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(animId);
    };
  }, [ref, sectionRef]);
}

function ProductSection({ product, nextColor, isLast }: { product: typeof products[0]; nextColor?: string, isLast?: boolean }) {
  const pcRef = useRef<HTMLImageElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  useInfiniteVerticalScroll(pcRef, sectionRef);
  return (
    <section
      ref={sectionRef}
      className="min-h-screen w-screen h-full flex items-center justify-center relative overflow-hidden"
      style={{ background: product.color }}
    >
      {/* Alt geçiş gradyanı */}
      {nextColor && (
        <div
          className="absolute left-0 bottom-0 w-screen h-40 pointer-events-none z-20"
          style={{
            background: `linear-gradient(180deg, transparent 0%, ${nextColor} 100%)`
          }}
        />
      )}
      {/* Son ürünse, alt geçişi ana site gradientine yumuşat */}
      {isLast && (
        <div
          className="absolute left-0 bottom-0 w-screen h-40 pointer-events-none z-20"
          style={{
            background: "linear-gradient(180deg, transparent 0%, #2d13aa 100%)"
          }}
        />
      )}
      {/* İçerik: 3 ana blok eşit genişlikte, ortalı ve aralıklı */}
      <div className="flex flex-row w-full max-w-[1400px] mx-auto items-center justify-between gap-8 px-16">
        {/* Sol: Büyük logo + glow ve yanında ürün ismi */}
        <div className="flex flex-col flex-1 justify-center items-start min-w-[320px] max-w-[420px]">
          <div className="flex flex-row items-center gap-6 mb-8">
            <div className="relative flex-shrink-0">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-white opacity-40 blur-2xl z-0" style={{boxShadow:'0 0 80px 20px #fff'}} />
              <Image src={product.logo} alt={product.name + ' logo'} width={120} height={120} className="relative z-10" />
            </div>
            <h2 className="text-5xl font-extrabold text-white drop-shadow-lg relative z-10">{product.name}</h2>
          </div>
          <p className="mb-8 text-lg text-white/90 leading-relaxed max-w-md">{product.description}</p>
          <Link href={product.website} target="_blank">
            <button className="px-7 py-3 rounded-full bg-black text-white font-semibold text-base shadow hover:bg-gray-900 transition">
              Visit Website
            </button>
          </Link>
        </div>
        {/* Orta: PC görseli + sadece glow, tam ortalı */}
        <div className="flex flex-1 justify-center items-center relative min-w-[320px]">
          <div className="absolute w-[420px] h-[320px] rounded-3xl bg-white opacity-40 blur-2xl z-0" style={{boxShadow:'0 0 120px 40px #fff'}} />
          <Image ref={pcRef} src="/pc.png" alt={product.name + ' screenshot'} width={380} height={300} className="relative z-10 transition-transform duration-500 will-change-transform" />
        </div>
        {/* Sağ: İstatistikler, sağa yaslı ve eşit aralıklı */}
        <div className="flex flex-col flex-1 items-end justify-center gap-8 max-w-[420px] min-w-[320px]">
          <div className="w-full flex flex-col items-end mb-2">
            <div className="text-sm font-semibold uppercase mb-1 text-white/80">Product Hunt</div>
            <div className="text-4xl font-extrabold mb-1 text-white">{product.stats.productHunt}</div>
            <div className="text-base text-white/60">Rating</div>
          </div>
          <div className="w-full flex flex-col items-end mb-2">
            <div className="text-sm font-semibold uppercase mb-1 text-white/80">Active Users</div>
            <div className="text-4xl font-extrabold mb-1 text-white">{product.stats.users}</div>
            <div className="text-base text-white/60">Monthly</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Products() {
  return (
    <div className="w-screen min-h-screen">
      {products.map((p, i) => (
        <ProductSection
          key={p.name}
          product={p}
          nextColor={products[i + 1]?.color}
          isLast={i === products.length - 1}
        />
      ))}
    </div>
  );
} 