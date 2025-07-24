"use client";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Roomia",
    color: "#5800ff",
    logo: "/Roomia_logo.png",
    description: "Roomia turns a single photo into personalised layouts, colour schemes and furniture suggestions giving you a clear design vision in seconds.",
    website: "#",
    stats: {
      users: "100+"
    }
  },
  {
    name: "Wikiz",
    color: "#283389",
    logo: "/wikiz_logo.png",
    description: "Wikiz is an entertaining and educational game.",
    website: "#",
    stats: {
      users: "1000+"
    }
  },
  {
    name: "CarStage",
    color: "#373643",
    logo: "/carstage_logo.png",
    description: "Accelerate sales and increase viewership with CarStage AI-powered solutions. You can also do fun things if you want :)",
    website: "#",
    stats: {
      singleUsers: "200+",
      partnerships: "22+"
    }
  }
];

function ProductSection({ product }: { product: typeof products[0] }) {
  return (
    <section
      className="min-h-screen w-screen h-full flex items-center justify-center relative overflow-hidden bg-black"
    >
      {/* Subtle animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2d13aa]/5 via-[#1a237e]/8 to-[#2d13aa]/5 animate-pulse" style={{ animationDuration: '10s' }}></div>
      {/* Modern grid pattern */}
      <div className="absolute inset-0 opacity-3 pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* İçerik: PC odaklı modern layout */}
      <div className="flex flex-col lg:flex-row w-full max-w-[1600px] mx-auto items-center justify-between gap-12 px-8 lg:px-16 relative z-10">
        {/* Sol: Logo ve ürün bilgileri */}
        <div className="flex flex-col flex-1 justify-center items-start max-w-[400px] order-2 lg:order-1">
          <div className="flex flex-row items-center gap-6 mb-8">
            <div className="relative flex-shrink-0">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-white/10 blur-xl z-0"></div>
              <Image src={product.logo} alt={product.name + ' logo'} width={100} height={100} className="relative z-10" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white font-sans">{product.name}</h2>
          </div>
          <p className="mb-8 text-lg text-white/80 leading-relaxed font-sans">{product.description}</p>
          <Link href={product.website} target="_blank">
            <button className="px-8 py-4 rounded-lg bg-[#2d13aa]/20 backdrop-blur-md text-white font-medium text-base shadow-lg hover:bg-[#2d13aa]/30 transition-all duration-300 border border-[#2d13aa]/30 font-sans">
              Visit Website
            </button>
          </Link>
        </div>
        
        {/* Orta: Büyük PC görseli - Sadece küçük bir glow ile, hareket yok */}
        <div className="flex flex-1 justify-center items-center relative order-1 lg:order-2 min-w-[800px] max-w-[1000px]">
          {/* Küçük glow efekti */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[320px] rounded-full bg-[#2d13aa]/30 blur-3xl z-0 pointer-events-none"></div>
          {/* PC görseli */}
          <div className="relative z-10">
            <Image 
              src="/pc.png" 
              alt={product.name + ' screenshot'} 
              width={700} 
              height={420} 
              className="relative z-10 transition-transform duration-500 will-change-transform"
            />
          </div>
        </div>
        
        {/* Sağ: İstatistikler */}
        <div className="flex flex-col flex-1 items-center justify-center gap-6 max-w-[300px] order-3">
          {product.name === "Roomia" && (
            <div className="flex flex-col items-center justify-center w-full">
              <div className="text-xs font-medium uppercase mb-2 text-white/60 tracking-wider font-sans">Active Users</div>
              <div className="text-3xl font-bold mb-1 text-white font-sans">{product.stats.users}</div>
            </div>
          )}
          {product.name === "Wikiz" && (
            <div className="flex flex-col items-center justify-center w-full">
              <div className="text-xs font-medium uppercase mb-2 text-white/60 tracking-wider font-sans">Active Users</div>
              <div className="text-3xl font-bold mb-1 text-white font-sans">{product.stats.users}</div>
            </div>
          )}
          {product.name === "CarStage" && (
            <div className="flex flex-col items-center justify-center w-full gap-2">
              <div>
                <div className="text-xs font-medium uppercase mb-1 text-white/60 tracking-wider font-sans">Active Single Users</div>
                <div className="text-2xl font-bold mb-2 text-white font-sans">{product.stats.singleUsers}</div>
              </div>
              <div>
                <div className="text-xs font-medium uppercase mb-1 text-white/60 tracking-wider font-sans">Active Partnerships</div>
                <div className="text-2xl font-bold mb-2 text-white font-sans">{product.stats.partnerships}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default function Products() {
  return (
    <div className="w-screen min-h-screen bg-black">
      {products.map((p, i) => (
        <ProductSection
          key={p.name}
          product={p}
        />
      ))}
    </div>
  );
} 