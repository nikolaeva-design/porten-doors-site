"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import { PROJECTS } from "@/constants/porten";

function projectTag(title: string) {
  const part = title.split("·")[0]?.trim() ?? "PROJECT";
  return part.toUpperCase();
}

export default function ProjectsPreview() {
  const scroller = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const updateActive = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-project-card]");
    if (!card) return;
    const step = card.offsetWidth + 24;
    if (!step) return;
    setActive(
      Math.min(
        PROJECTS.items.length - 1,
        Math.max(0, Math.round(el.scrollLeft / step)),
      ),
    );
  }, []);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const onScroll = () => updateActive();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [updateActive]);

  const scrollByDir = (dir: -1 | 1) => {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-project-card]");
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.85;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const scrollToIndex = (i: number) => {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-project-card]");
    const step = card ? card.offsetWidth + 24 : 0;
    el.scrollTo({ left: i * step, behavior: "smooth" });
  };

  return (
    <section id="projects" className="bg-[#F9F6F1] py-20 md:py-32">
      <div className="container-main">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-[family-name:var(--font-archivo)] text-3xl font-bold uppercase leading-tight tracking-tight text-neutral-900 sm:text-4xl md:text-[2.75rem]">
              {PROJECTS.heading}
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              aria-label="Previous projects"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-900 shadow-sm transition-colors hover:border-neutral-500"
              onClick={() => scrollByDir(-1)}
            >
              <iconify-icon icon="mdi:arrow-left" width="22" height="22" />
            </button>
            <button
              type="button"
              aria-label="Next projects"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-900 shadow-sm transition-colors hover:border-neutral-500"
              onClick={() => scrollByDir(1)}
            >
              <iconify-icon icon="mdi:arrow-right" width="22" height="22" />
            </button>
          </div>
        </div>

        <div className="-mx-4 mt-14 md:mx-0">
          <div
            ref={scroller}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-px-4 px-4 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] md:gap-8 md:px-0 [&::-webkit-scrollbar]:hidden"
          >
            {PROJECTS.items.map((p) => (
              <article
                key={p.title}
                data-project-card
                className="group relative min-w-[min(100%,18rem)] shrink-0 snap-center overflow-hidden rounded-[2rem] bg-neutral-300 shadow-lg shadow-neutral-900/10 sm:min-w-[20rem] md:min-w-[17rem] lg:min-w-[22rem] xl:min-w-[24rem]"
              >
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 1280px) 24rem, (min-width: 1024px) 22rem, 80vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full bg-white/20 px-3 py-1 text-[0.6rem] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                    {projectTag(p.title)}
                  </span>
                  <a
                    href={PROJECTS.linkHref}
                    className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-neutral-900 shadow-md transition-transform hover:scale-105"
                    aria-label={`Open ${PROJECTS.linkText}`}
                  >
                    <iconify-icon icon="mdi:arrow-top-right" width="20" height="20" />
                  </a>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-7">
                    <p className="font-[family-name:var(--font-archivo)] text-lg font-bold uppercase leading-snug tracking-tight md:text-xl">
                      {p.title}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-2 md:mt-8">
            {PROJECTS.items.map((p, i) => (
              <button
                key={p.title}
                type="button"
                aria-label={`Go to project ${i + 1}`}
                aria-current={i === active}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  i === active ? "bg-neutral-900" : "bg-neutral-900/25 hover:bg-neutral-900/45"
                }`}
                onClick={() => scrollToIndex(i)}
              />
            ))}
          </div>
        </div>

        <p className="mt-10 text-center md:mt-12">
          <Link
            href={PROJECTS.linkHref}
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-neutral-900 underline decoration-neutral-400 underline-offset-8 transition-colors hover:decoration-neutral-900"
            aria-label={PROJECTS.linkAnchorLabel}
          >
            {PROJECTS.linkText}
          </Link>
        </p>
      </div>
    </section>
  );
}
