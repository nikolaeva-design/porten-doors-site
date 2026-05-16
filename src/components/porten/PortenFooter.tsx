import Link from "next/link";

import Button from "@/components/Button";
import { PORTEN_BRAND, PORTEN_PHONE_DISPLAY, PORTEN_PHONE_TEL } from "@/constants/porten";

const FOOTER_NAV = [
  { label: "Trust & proof", href: "#trust" },
  { label: "Services", href: "#services" },
  { label: "Service area", href: "#service-area" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
];

export default function PortenFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 pb-[max(env(safe-area-inset-bottom),0px)] pt-16">
      <div className="container-main grid gap-12 lg:grid-cols-[1.1fr_1fr_1fr] lg:gap-10">
        <div>
          <p className="font-[family-name:var(--font-archivo)] text-3xl font-bold uppercase leading-tight tracking-tight text-neutral-900 sm:text-4xl">
            Start Your Project
          </p>
          <Button href="#estimate" variant="primary" className="mt-6" icon="mdi:arrow-right">
            Get a Free Estimate
          </Button>
        </div>

        <nav aria-label="Footer">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">Explore</p>
          <ul className="mt-4 space-y-3">
            {FOOTER_NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-semibold uppercase tracking-wide text-neutral-800 transition-colors hover:text-neutral-950"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                href="/about"
                className="text-sm font-semibold uppercase tracking-wide text-neutral-800 transition-colors hover:text-neutral-950"
              >
                About Porten
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="text-sm font-semibold uppercase tracking-wide text-neutral-800 transition-colors hover:text-neutral-950"
              >
                All projects
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">Contact</p>
          <a
            href={`tel:${PORTEN_PHONE_TEL}`}
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-neutral-900"
          >
            <iconify-icon icon="mdi:phone" width="20" height="20" />
            {PORTEN_PHONE_DISPLAY}
          </a>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
            Social
          </p>
          <div className="mt-3 flex gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-900 transition-colors hover:bg-neutral-100"
              aria-label="Facebook"
            >
              <iconify-icon icon="simple-icons:facebook" width="20" height="20" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-900 transition-colors hover:bg-neutral-100"
              aria-label="Instagram"
            >
              <iconify-icon icon="simple-icons:instagram" width="20" height="20" />
            </a>
          </div>
        </div>
      </div>

      <div className="container-main mt-14 flex flex-col gap-3 border-t border-neutral-200 pt-8 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {PORTEN_BRAND.name}. Greater Vancouver &amp; Vancouver Island.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/privacy" className="hover:text-neutral-800">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-neutral-800">
            Terms
          </Link>
          <a href="#hero" className="inline-flex items-center gap-1 hover:text-neutral-800">
            Back to top
            <iconify-icon icon="mdi:arrow-up" width="16" height="16" />
          </a>
        </div>
      </div>
    </footer>
  );
}
