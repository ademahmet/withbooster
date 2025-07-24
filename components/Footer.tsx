import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#2d13aa] text-white pt-12 pb-6 px-4">
      {/* Üst katman */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8 pb-8 border-b border-white/20">
        {/* Sol: Logo ve altına menü */}
        <div className="flex flex-col items-start min-w-[220px]">
          <Image src="/withbooster_beyazlogo.png" alt="withbooster Logo" width={160} height={48} className="h-12 w-auto mb-4" />
          <nav className="flex flex-row gap-8 text-lg font-bold w-full mt-2">
            <Link href="/about" className="hover:text-white/80 transition">About Us</Link>
            <Link href="/products" className="hover:text-white/80 transition">Products</Link>
            <Link href="/contact" className="hover:text-white/80 transition">Contact</Link>
          </nav>
        </div>
        {/* Sağ: Sosyal medya ikonları */}
        <div className="flex flex-row items-center gap-6 min-w-[180px] justify-end mt-8 md:mt-0">
          <Link href="https://linkedin.com/" target="_blank" aria-label="LinkedIn" className="hover:opacity-80 transition">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path fill="white" d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM7 19H4v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm14.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.61 2.01 3.61 4.62v4.69z"/></svg>
          </Link>
          <Link href="https://instagram.com/" target="_blank" aria-label="Instagram" className="hover:opacity-80 transition">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path fill="white" d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5A4.25 4.25 0 0 1 16.25 20.5h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5zm8.25 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-4.25 2.25A5.25 5.25 0 1 0 17 12.5a5.25 5.25 0 0 0-5.25-5.25zm0 1.5A3.75 3.75 0 1 1 8.25 12.5a3.75 3.75 0 0 1 3.75-3.75z"/></svg>
          </Link>
          <Link href="https://facebook.com/" target="_blank" aria-label="Facebook" className="hover:opacity-80 transition">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path fill="white" d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0"/></svg>
          </Link>
          <Link href="https://x.com/" target="_blank" aria-label="X" className="hover:opacity-80 transition">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path fill="white" d="M17.53 2.477h3.964l-8.63 9.89 10.16 13.156h-7.98l-6.24-8.13-7.14 8.13H.7l9.19-10.53L0 2.477h8.09l5.77 7.53 6.67-7.53zm-1.36 18.01h2.2L6.62 4.64h-2.3l11.85 15.847z"/></svg>
          </Link>
          <Link href="mailto:info@withbooster.com" aria-label="Mail" className="hover:opacity-80 transition">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path fill="white" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z"/></svg>
          </Link>
        </div>
      </div>
      {/* Alt katman */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 pt-6 text-sm text-white/80">
        <span>&copy; 2025 Withbooster</span>
        <div className="flex gap-6 flex-wrap justify-center">
          <Link href="#" className="hover:text-white transition">Terms of Service</Link>
          <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition">Statements</Link>
          <Link href="#" className="hover:text-white transition">Cookie Settings</Link>
        </div>
      </div>
    </footer>
  );
} 