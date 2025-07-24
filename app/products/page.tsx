"use client";
import Image from "next/image";

const products = [
  {
    name: "Roomia",
    color: "#742eff",
    logo: "/Roomia_logo.png",
    video: "/roomia.mp4",
    description: "Roomia turns a single photo into personalised layouts, colour schemes and furniture suggestions giving you a clear design vision in seconds.",
    website: "#",
    stats: {
      users: "100+"
    }
  },
  {
    name: "Wikiz",
    color: "#ffffff",
    logo: "/wikiz_logo.png",
    video: "/wikiz.mp4",
    description: "Wikiz is an entertaining and educational game.",
    website: "#",
    stats: {
      users: "1000+"
    }
  },
  {
    name: "CarStage",
    color: "#942626",
    logo: "/carstage_logo.png",
    video: "/carstage.mp4",
    description: "Accelerate sales and increase viewership with CarStage AI-powered solutions. You can also do fun things if you want :)",
    website: "#",
    stats: {
      singleUsers: "200+",
      partnerships: "22+"
    }
  }
];

function ModernDownloadBadge({ color, text }: { color: string; text: string }) {
  return (
    <div className="relative flex flex-col items-center mt-6 select-none">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-10 rounded-full" style={{ background: `${color}22` }} />
      <div className="relative flex items-center gap-2 px-7 py-2 rounded-full font-bold text-lg bg-white/10 backdrop-blur-md shadow border border-white/20 text-white">
        <svg className="w-5 h-5 text-white/80" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
        <span>{text}</span>
      </div>
    </div>
  );
}

function ModernVisitButton({ url, color, label = 'Visit Website' }: { url: string; color: string; label?: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 inline-flex items-center gap-2 px-7 py-2 rounded-full font-semibold text-base shadow border border-white/20 bg-white/10 backdrop-blur-md text-white transition hover:scale-105 hover:bg-white/20"
      style={{ color }}
    >
      <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7v7m0 0L10 21l-7-7 11-11z" /></svg>
      {label}
    </a>
  );
}

function ProductSection({ product }: { product: typeof products[0] }) {
  return (
    <section
      className="min-h-screen w-screen h-full flex flex-col items-center justify-center relative overflow-hidden bg-black"
    >
      <div className="flex flex-col items-center justify-center mb-2 pt-24">
        <Image
          src={product.logo}
          alt={product.name + ' logo'}
          width={160}
          height={160}
          className="rounded-2xl shadow-lg border-4 border-white/10 bg-white/10 p-2 object-contain scale-110"
          style={{ background: 'linear-gradient(120deg, #fff2 0%, transparent 100%)' }}
        />
      </div>
      {/* Modern bölme */}
      <div className="w-full flex justify-center my-4">
        <div className="h-1 w-40 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent blur-sm opacity-80" />
      </div>
      {/* Ortada çok büyük video/görsel ve parıltı */}
      <div className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto relative z-10">
        {/* Daha modern glow: çok katmanlı ve gradientli */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
          <div className="w-[1200px] h-[700px] rounded-full" style={{ background: `radial-gradient(ellipse at center, ${product.color}33 0%, transparent 80%)`, filter: 'blur(100px)', opacity: 0.7 }} />
          <div className="w-[900px] h-[400px] rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ background: `radial-gradient(ellipse at center, #fff2 0%, transparent 80%)`, filter: 'blur(60px)', opacity: 0.5 }} />
        </div>
        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10 bg-white/5 backdrop-blur-xl" style={{ width: 980, height: 540 }}>
          {product.video ? (
            <video
              src={product.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <Image src={product.logo} alt={product.name + ' logo'} width={980} height={540} className="w-full h-full object-cover" />
          )}
        </div>
        <ModernDownloadBadge color={product.color} text={product.name === 'CarStage' ? '200+ active users' : product.name === 'Wikiz' ? '1000+ download' : '100+ download'} />
        <ModernVisitButton url={product.website} color={product.color} />
      </div>
      {/* Açıklama */}
      <div className="mt-6 text-base md:text-lg text-white/80 leading-relaxed font-sans text-center max-w-xl mx-auto">
        {product.description}
      </div>
    </section>
  );
}

export default function Products() {
  return (
    <div className="w-screen min-h-screen bg-black">
      {/* Başlık kaldırıldı */}
      {/* Ürünler */}
      {products.map((p) => (
        <ProductSection
          key={p.name}
          product={p}
        />
      ))}
      {/* Shop Bölümü */}
      <section className="w-full flex flex-col items-center justify-center py-32 bg-black">
        <div className="flex flex-col items-center justify-center mb-16">
          <Image
            src="/etsy.png"
            alt="Etsy Logo"
            width={110}
            height={110}
            className="object-contain drop-shadow-lg"
          />
        </div>
        <div className="flex flex-row items-end justify-center gap-32 w-full max-w-7xl mx-auto">
          {/* İlk PC (video) */}
          <div className="relative flex flex-col items-center">
            {/* Sadece video etrafında glow */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[420px] rounded-full pointer-events-none" style={{ background: `#D5641C22`, filter: 'blur(70px)' }} />
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10 bg-white/5 backdrop-blur-xl" style={{ width: 520, height: 300 }}>
              <video
                src="/withbooster_etsy.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
            <ModernDownloadBadge color="#D5641C" text="5+ download" />
            <ModernVisitButton url="https://www.etsy.com/shop/withbooster" color="#D5641C" label="Visit Shop" />
          </div>
          {/* İkinci PC (video) */}
          <div className="relative flex flex-col items-center">
            {/* Sadece video etrafında glow */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[420px] rounded-full pointer-events-none" style={{ background: `#D5641C22`, filter: 'blur(70px)' }} />
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10 bg-white/5 backdrop-blur-xl" style={{ width: 520, height: 300 }}>
              <video
                src="/kırtasiye_etsy.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
            <ModernDownloadBadge color="#D5641C" text="5+ download" />
            <ModernVisitButton url="https://www.etsy.com/shop/withbooster" color="#D5641C" label="Visit Shop" />
          </div>
        </div>
      </section>
    </div>
  );
} 