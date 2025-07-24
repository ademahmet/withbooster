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
        {/* Sağ: Sadece IG, LN, TikTok, Twitter ikonları */}
        <div className="flex flex-row items-center gap-6 min-w-[180px] justify-end mt-8 md:mt-0">
          {/* Instagram */}
          <Link href="https://instagram.com/withbooster" target="_blank" aria-label="Instagram" className="hover:opacity-80 transition">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path fill="white" d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5A4.25 4.25 0 0 1 16.25 20.5h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5zm8.25 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-4.25 2.25A5.25 5.25 0 1 0 17 12.5a5.25 5.25 0 0 0-5.25-5.25zm0 1.5A3.75 3.75 0 1 1 8.25 12.5a3.75 3.75 0 0 1 3.75-3.75z"/></svg>
          </Link>
          {/* LinkedIn */}
          <Link href="https://linkedin.com/in/withbooster" target="_blank" aria-label="LinkedIn" className="hover:opacity-80 transition">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path fill="white" d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM7 19H4v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm14.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.61 2.01 3.61 4.62v4.69z"/></svg>
          </Link>
          {/* TikTok */}
          <Link href="https://www.tiktok.com/@withbooster" target="_blank" aria-label="TikTok" className="hover:opacity-80 transition">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path fill="white" d="M21.5 7.5a5.5 5.5 0 0 1-5.5-5.5h-3v15.5a2.5 2.5 0 1 1-2.5-2.5c.17 0 .34.02.5.05v-2.07A5.5 5.5 0 1 0 14.5 22V9.5a8.5 8.5 0 0 0 7-2.5z"/></svg>
          </Link>
          {/* Twitter (X) */}
          <Link href="https://twitter.com/withbooster" target="_blank" aria-label="Twitter" className="hover:opacity-80 transition">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path fill="white" d="M22.46 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 11.5 9.482c0 .352.04.695.116 1.022-3.728-.187-7.034-1.972-9.244-4.684a4.48 4.48 0 0 0-.606 2.254c0 1.555.792 2.927 2.002 3.732a4.48 4.48 0 0 1-2.03-.561v.057a4.48 4.48 0 0 0 3.594 4.393 4.48 4.48 0 0 1-2.025.077 4.48 4.48 0 0 0 4.184 3.114A8.98 8.98 0 0 1 2 19.54a12.68 12.68 0 0 0 6.88 2.017c8.26 0 12.785-6.84 12.785-12.785 0-.195-.004-.39-.013-.583A9.14 9.14 0 0 0 24 4.59a8.98 8.98 0 0 1-2.54.697z"/></svg>
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