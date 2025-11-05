import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-12">
          {/* Brand Section */}
          <div className="space-y-4 sm:col-span-2 md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/withbooster_logo.svg"
                alt="withbooster"
                width={140}
                height={32}
                className="h-7 w-auto sm:h-8"
              />
            </Link>
            <p className="max-w-sm text-sm text-slate-600 sm:text-base">
              Transformative AI workflows, entertainment technology, and digital
              design experiences for future-driven brands.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#booster-studio"
                  className="text-sm text-slate-600 transition hover:text-slate-900"
                >
                  Booster Studio
                </Link>
              </li>
              <li>
                <Link
                  href="#entertainment-tech"
                  className="text-sm text-slate-600 transition hover:text-slate-900"
                >
                  Entertainment Tech
                </Link>
              </li>
              <li>
                <Link
                  href="#digital-designs"
                  className="text-sm text-slate-600 transition hover:text-slate-900"
                >
                  Digital Designs
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-sm text-slate-600 transition hover:text-slate-900"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              Contact
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:info.withbooster@gmail.com"
                  className="text-sm text-slate-600 transition hover:text-slate-900"
                >
                  info.withbooster@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:mt-12 sm:pt-8 md:flex-row">
          <p className="text-xs text-slate-500 sm:text-sm">
            © {new Date().getFullYear()} withbooster. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link
              href="/privacy"
              className="text-xs text-slate-500 transition hover:text-slate-900 sm:text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-slate-500 transition hover:text-slate-900 sm:text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

