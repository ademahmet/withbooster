import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4 md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/withbooster_logo.svg"
                alt="withbooster"
                width={140}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <p className="max-w-sm text-sm text-white/60">
              Transformative AI workflows, entertainment technology, and digital
              design experiences for future-driven brands.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#ai-studio"
                  className="text-sm text-white/60 transition hover:text-white"
                >
                  AI Studio
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-sm text-white/60 transition hover:text-white"
                >
                  Our Ventures
                </Link>
              </li>
              <li>
                <Link
                  href="#team"
                  className="text-sm text-white/60 transition hover:text-white"
                >
                  Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:contact@withbooster.com"
                  className="text-sm text-white/60 transition hover:text-white"
                >
                  contact@withbooster.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} withbooster. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-white/50 transition hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-white/50 transition hover:text-white"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

