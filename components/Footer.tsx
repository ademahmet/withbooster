import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-black/80 flex flex-col md:flex-row items-center justify-between px-6 gap-4">
      <span className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Withbooste LP. Tüm hakları saklıdır.</span>
      <div className="flex gap-4">
        <Link href="https://instagram.com/" target="_blank" aria-label="Instagram">
          <svg width="24" height="24" fill="currentColor" className="text-white hover:text-primary"><path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5A4.25 4.25 0 0 1 16.25 20.5h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5zm8.25 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-4.25 2.25A5.25 5.25 0 1 0 17 12.5a5.25 5.25 0 0 0-5.25-5.25zm0 1.5A3.75 3.75 0 1 1 8.25 12.5a3.75 3.75 0 0 1 3.75-3.75z"/></svg>
        </Link>
        <Link href="https://linkedin.com/" target="_blank" aria-label="LinkedIn">
          <svg width="24" height="24" fill="currentColor" className="text-white hover:text-primary"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.61 2.01 3.61 4.62v4.69z"/></svg>
        </Link>
        <Link href="https://youtube.com/" target="_blank" aria-label="YouTube">
          <svg width="24" height="24" fill="currentColor" className="text-white hover:text-primary"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.11-2.12C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.388.566a2.994 2.994 0 0 0-2.11 2.12C0 8.07 0 12 0 12s0 3.93.502 5.814a2.994 2.994 0 0 0 2.11 2.12C4.5 20.5 12 20.5 12 20.5s7.5 0 9.388-.566a2.994 2.994 0 0 0 2.11-2.12C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
        </Link>
      </div>
    </footer>
  );
} 