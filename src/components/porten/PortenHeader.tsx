"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useSyncExternalStore } from "react";

/** Past this scroll offset on "/", the header switches from hero (transparent) to solid. */
const HOME_NAV_SOLID_SCROLL_Y = 72;

type NavItem = {
  label: string;
  href: string;
  match: "home" | "about" | "hash";
  hash?: string;
};

const NAV: NavItem[] = [
  { label: "Home", href: "/", match: "home" },
  { label: "Catalog", href: "#catalogue", match: "hash", hash: "#catalogue" },
  { label: "About us", href: "/about", match: "about" },
  { label: "Contacts", href: "#estimate", match: "hash", hash: "#estimate" },
  { label: "Gallery", href: "#projects", match: "hash", hash: "#projects" },
];

const SOCIAL = [
  { label: "Instagram", href: "https://www.instagram.com", icon: "mdi:instagram" },
  { label: "Facebook", href: "https://www.facebook.com", icon: "mdi:facebook" },
] as const;

function subscribeHash(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  window.addEventListener("popstate", onChange);
  return () => {
    window.removeEventListener("hashchange", onChange);
    window.removeEventListener("popstate", onChange);
  };
}

function getHashSnapshot() {
  return window.location.hash || "";
}

function getHashServerSnapshot() {
  return "";
}

function subscribeScrollPastHero(onStoreChange: () => void) {
  const onScroll = () => onStoreChange();
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}

function getScrollPastHeroSnapshot() {
  return window.scrollY > HOME_NAV_SOLID_SCROLL_Y;
}

function getScrollPastHeroServerSnapshot() {
  return false;
}

function navItemActive(
  item: NavItem,
  pathname: string,
  hash: string,
): boolean {
  if (item.match === "home") {
    return pathname === "/" && hash === "";
  }
  if (item.match === "about") {
    return pathname === "/about" || pathname.startsWith("/about/");
  }
  if (item.match === "hash" && item.hash) {
    return hash === item.hash;
  }
  return false;
}

export default function PortenHeader() {
  const pathname = usePathname();
  const hash = useSyncExternalStore(subscribeHash, getHashSnapshot, getHashServerSnapshot);
  const scrollPastHero = useSyncExternalStore(
    subscribeScrollPastHero,
    getScrollPastHeroSnapshot,
    getScrollPastHeroServerSnapshot,
  );
  const [open, setOpen] = useState(false);

  const isHome = pathname === "/";
  const heroTransparentNav = isHome && !scrollPastHero && !open;

  const pillBase =
    "inline-flex items-center justify-center rounded-full border px-4 py-2 text-center text-[0.7rem] font-semibold uppercase tracking-[0.12em] transition-colors sm:text-xs sm:tracking-[0.14em]";

  const pillInactive =
    "border-porten-cream bg-transparent text-porten-cream hover:bg-porten-cream/10";
  const pillActive = "border-porten-cream bg-porten-cream text-porten-charcoal";

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-[background-color,border-color] duration-300 ease-out ${
        heroTransparentNav
          ? "border-white/15 bg-transparent"
          : "border-porten-cream/20 bg-porten-charcoal"
      }`}
    >
      <div className="container-main flex min-h-[4.25rem] items-center justify-between gap-4 py-3 sm:min-h-20 sm:gap-6 sm:py-4">
        <Link
          href="/"
          className="shrink-0 font-[family-name:var(--font-archivo)] text-base font-bold uppercase tracking-[0.28em] text-porten-cream sm:text-lg"
        >
          PORTEN
        </Link>

        <nav aria-label="Primary" className="hidden flex-1 justify-center px-4 lg:flex">
          <ul className="flex flex-wrap items-center justify-center gap-2">
            {NAV.map((item) => {
              const active = navItemActive(item, pathname, hash);
              const pill = `${pillBase} ${active ? pillActive : pillInactive}`;

              if (item.href.startsWith("#")) {
                return (
                  <li key={item.href}>
                    <a href={item.href} className={pill}>
                      {item.label}
                    </a>
                  </li>
                );
              }

              return (
                <li key={item.href}>
                  <Link href={item.href} className={pill}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden shrink-0 items-center gap-5 lg:flex">
          <div className="flex items-center gap-3 border-l border-porten-cream/25 pl-5">
            {SOCIAL.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-porten-cream transition-opacity hover:opacity-75"
                aria-label={s.label}
              >
                <iconify-icon icon={s.icon} width="22" height="22" />
              </a>
            ))}
          </div>

          <a
            href="#estimate"
            className="inline-flex items-center gap-2 rounded-full bg-porten-cream px-5 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-porten-charcoal transition-opacity hover:opacity-90 sm:text-xs"
          >
            Contact
            <iconify-icon icon="mdi:arrow-right" width="18" height="18" aria-hidden />
          </a>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="porten-mobile-nav"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-porten-cream/60 bg-transparent text-porten-cream lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <iconify-icon icon={open ? "mdi:close" : "mdi:menu"} width="24" height="24" />
        </button>
      </div>

      {open ? (
        <div
          id="porten-mobile-nav"
          className="border-t border-porten-cream/20 bg-porten-charcoal px-4 py-6 lg:hidden"
        >
          <ul className="flex flex-col gap-2">
            {NAV.map((item) => {
              const active = navItemActive(item, pathname, hash);
              const pill = `${pillBase} w-full ${active ? pillActive : pillInactive}`;
              const close = () => setOpen(false);

              if (item.href.startsWith("#")) {
                return (
                  <li key={item.href}>
                    <a href={item.href} className={pill} onClick={close}>
                      {item.label}
                    </a>
                  </li>
                );
              }

              return (
                <li key={item.href}>
                  <Link href={item.href} className={pill} onClick={close}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-6 flex items-center justify-center gap-4 border-t border-porten-cream/20 pt-6">
            {SOCIAL.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-porten-cream"
                aria-label={s.label}
              >
                <iconify-icon icon={s.icon} width="24" height="24" />
              </a>
            ))}
          </div>

          <a
            href="#estimate"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-porten-cream py-3 text-sm font-semibold uppercase tracking-wider text-porten-charcoal"
            onClick={() => setOpen(false)}
          >
            Contact
            <iconify-icon icon="mdi:arrow-right" width="20" height="20" aria-hidden />
          </a>
        </div>
      ) : null}
    </header>
  );
}
