"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";

import {
  HERO,
  HERO_BACKGROUND_SLIDES,
  HERO_FEATURED_CARD,
  HERO_SLIDE_INTERVAL_MS,
  PORTEN_PHONE_TEL,
} from "@/constants/porten";

const HERO_FEATURED_IMAGE =
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&q=80";

function subscribePrefersReducedMotion(onChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getPrefersReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function HeroPrimaryCta() {
  return (
    <a
      href="#estimate"
      className="group inline-flex max-w-full items-center gap-1 rounded-full bg-white py-2 pr-2 pl-6 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-porten-charcoal shadow-lg shadow-black/25 transition hover:bg-porten-cream sm:pl-8 sm:text-xs sm:tracking-[0.16em]"
    >
      <span className="min-w-0 shrink leading-tight sm:whitespace-normal">{HERO.primaryCta}</span>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-porten-charcoal text-white transition-transform duration-300 group-hover:translate-x-0.5">
        <iconify-icon icon="mdi:arrow-right" width="22" height="22" aria-hidden />
      </span>
    </a>
  );
}

function HeroDecoration({ year, slideLabel }: { year: number; slideLabel: string }) {
  return (
    <div
      className="mt-10 hidden shrink-0 flex-col items-end gap-2 self-start lg:mt-24 lg:flex lg:pr-2"
      aria-hidden
    >
      <span className="font-mono text-[0.7rem] font-medium tracking-widest text-white/85">
        [{year}]
      </span>
      <div className="h-px w-40 bg-white/55 sm:w-48" />
      <span className="font-[family-name:var(--font-archivo)] text-4xl font-light leading-none text-white sm:text-5xl">
        {slideLabel}
      </span>
    </div>
  );
}

export default function PortenHero() {
  const year = new Date().getFullYear();
  const slideCount = HERO_BACKGROUND_SLIDES.length;
  const [activeSlide, setActiveSlide] = useState(0);
  const prefersReducedMotion = useSyncExternalStore(
    subscribePrefersReducedMotion,
    getPrefersReducedMotionSnapshot,
    () => false,
  );

  useEffect(() => {
    if (prefersReducedMotion || slideCount <= 1) return;
    const id = window.setInterval(() => {
      setActiveSlide((i) => (i + 1) % slideCount);
    }, HERO_SLIDE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [prefersReducedMotion, slideCount]);

  const slideLabel = String(activeSlide + 1).padStart(2, "0");

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] overflow-hidden text-white"
    >
      <div className="absolute inset-0">
        {HERO_BACKGROUND_SLIDES.map((slide, i) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={i === activeSlide ? slide.alt : ""}
            fill
            priority={i === 0}
            sizes="100vw"
            aria-hidden={i !== activeSlide}
            style={
              prefersReducedMotion ? undefined : { filter: `brightness(${slide.brightness})` }
            }
            className={`object-cover object-[center_40%] transition-opacity duration-[3600ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[opacity] motion-reduce:transition-none motion-reduce:duration-0 ${
              i === activeSlide ? "z-[1] opacity-100" : "pointer-events-none z-0 opacity-0"
            }`}
          />
        ))}
        {/* Layered scrims: uniform veil + directional gradients so type stays legible on every slide */}
        <div className="absolute inset-0 bg-black/38" aria-hidden />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/[0.97] via-black/82 to-black/64"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_105%_96%_at_17%_43%,rgba(0,0,0,0.64)_0%,transparent_68%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/54 to-black/44"
          aria-hidden
        />
      </div>

      <div className="container-main relative z-10 flex min-h-[100svh] flex-col pb-10 pt-[5.75rem] sm:pt-28 lg:pb-14 lg:pt-32">
        <div className="flex flex-1 flex-col gap-10 lg:flex-row lg:justify-between lg:gap-8">
          <div className="max-w-4xl pt-6 lg:pt-20">
            <h1 className="font-[family-name:var(--font-archivo)] text-[clamp(1.85rem,4.8vw,3.75rem)] font-extrabold uppercase leading-[1.03] tracking-[-0.02em] text-white [text-wrap:balance] [text-shadow:0_1px_3px_rgba(0,0,0,0.65),0_4px_32px_rgba(0,0,0,0.45)]">
              {HERO.h1}
            </h1>
            <p className="mt-8 max-w-2xl text-base font-normal leading-relaxed text-white/95 sm:text-lg [text-shadow:0_1px_2px_rgba(0,0,0,0.55)]">
              {HERO.subheadline}
            </p>
          </div>
          <HeroDecoration year={year} slideLabel={slideLabel} />
        </div>

        <div className="mt-auto flex flex-col gap-8 pt-12 lg:flex-row lg:items-end lg:justify-between lg:gap-10 lg:pt-16">
          <div className="flex max-w-xl flex-col gap-6">
            <p className="text-sm leading-relaxed text-white/65">{HERO.microcopy}</p>
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <HeroPrimaryCta />
              <a
                href={`tel:${PORTEN_PHONE_TEL}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/55 bg-transparent px-7 py-3.5 text-xs font-semibold tracking-[0.06em] text-white transition-colors hover:border-white hover:bg-white/10 sm:text-sm"
              >
                {HERO.secondaryCtaLabel}
              </a>
            </div>
          </div>

          <aside className="w-full max-w-md shrink-0 rounded-2xl border border-white/15 bg-white p-4 text-porten-charcoal shadow-2xl shadow-black/35 sm:p-5 lg:max-w-sm lg:self-end">
            <div className="flex gap-4 sm:gap-5">
              <div className="relative h-24 w-28 shrink-0 overflow-hidden rounded-xl bg-neutral-200 sm:h-28 sm:w-32">
                <Image
                  src={HERO_FEATURED_IMAGE}
                  alt="Recent door installation preview"
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </div>
              <div className="flex min-w-0 flex-1 flex-col justify-center gap-2">
                <p className="font-[family-name:var(--font-archivo)] text-sm font-bold uppercase leading-tight tracking-tight text-porten-charcoal sm:text-base">
                  {HERO_FEATURED_CARD.title}
                </p>
                <p className="text-xs leading-snug text-neutral-600 sm:text-sm">{HERO_FEATURED_CARD.text}</p>
                <Link
                  href={HERO_FEATURED_CARD.linkHref}
                  className="mt-1 inline-flex w-fit items-center gap-0.5 text-[0.7rem] font-bold uppercase tracking-wider text-porten-charcoal underline decoration-neutral-400 underline-offset-4 hover:decoration-porten-charcoal"
                >
                  {HERO_FEATURED_CARD.linkLabel}
                  <iconify-icon icon="mdi:chevron-right" width="18" height="18" aria-hidden />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
