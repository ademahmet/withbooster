import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
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
            <p className="max-w-sm text-sm text-slate-600">
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
                  href="mailto:contact@withbooster.com"
                  className="text-sm text-slate-600 transition hover:text-slate-900"
                >
                  contact@withbooster.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 md:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} withbooster. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-slate-500 transition hover:text-slate-900"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-slate-500 transition hover:text-slate-900"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

