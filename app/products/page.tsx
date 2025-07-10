"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Vikizle",
    color: "#FFD600",
    logo: "/vikizle_logo.png",
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
    color: "#FF3B30",
    logo: "/creahome_logo.png",
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
    color: "#FF9500",
    logo: "/araba_logo.png",
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

function ProductSection({ product, nextColor }: { product: typeof products[0]; nextColor?: string }) {
  const pcRef = useRef<HTMLImageElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  useInfiniteVerticalScroll(pcRef, sectionRef);
  return (
    <section
      ref={sectionRef}
      className="min-h-screen w-screen h-full flex flex-row items-center justify-center relative overflow-hidden"
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
      {/* Sol: Logo, başlık, açıklama, buton */}
      <div className="flex-1 flex flex-col justify-center items-start pl-16 min-w-[320px] max-w-[420px] h-full">
        <Image src={product.logo} alt={product.name + ' logo'} width={56} height={56} className="mb-6" />
        <h2 className="text-4xl font-extrabold mb-4 text-black/90">{product.name}</h2>
        <p className="mb-8 text-lg text-black/80 leading-relaxed">{product.description}</p>
        <Link href={product.website} target="_blank">
          <button className="px-7 py-3 rounded-full bg-black text-white font-semibold text-base shadow hover:bg-gray-900 transition">
            Visit Website
          </button>
        </Link>
      </div>
      {/* Orta: PC görseli + sadece glow */}
      <div className="flex-1 flex justify-center items-center relative h-full">
        <div className="absolute w-[420px] h-[320px] rounded-3xl bg-white opacity-40 blur-2xl z-0" style={{boxShadow:'0 0 120px 40px #fff'}} />
        <Image ref={pcRef} src="/pc.png" alt={product.name + ' screenshot'} width={380} height={300} className="relative z-10 transition-transform duration-500 will-change-transform" />
      </div>
      {/* Sağ: İstatistikler */}
      <div className="flex-1 flex flex-col items-center justify-center gap-8 h-full max-w-[320px] min-w-[220px] pr-16">
        <div className="bg-white/80 rounded-xl px-8 py-6 shadow text-black w-full flex flex-col items-center mb-2">
          <div className="text-xs font-semibold uppercase mb-1">Product Hunt</div>
          <div className="text-2xl font-bold mb-1">{product.stats.productHunt}</div>
          <div className="text-xs text-gray-700">Rating</div>
        </div>
        <div className="bg-white/80 rounded-xl px-8 py-6 shadow text-black w-full flex flex-col items-center mb-2">
          <div className="text-xs font-semibold uppercase mb-1">Active Users</div>
          <div className="text-2xl font-bold mb-1">{product.stats.users}</div>
          <div className="text-xs text-gray-700">Monthly</div>
        </div>
      </div>
    </section>
  );
}

export default function Products() {
  return (
    <div className="w-screen min-h-screen">
      {products.map((p, i) => (
        <ProductSection key={p.name} product={p} nextColor={products[i + 1]?.color} />
      ))}
    </div>
  );
} 