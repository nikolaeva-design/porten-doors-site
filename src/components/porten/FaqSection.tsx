"use client";

import { useState } from "react";

import { FAQ } from "@/constants/porten";

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-neutral-200/80 bg-white py-20 md:py-28">
      <div className="container-main">
        <header className="mb-12 md:mb-16 lg:flex lg:items-end lg:justify-between lg:gap-10">
          <div className="max-w-3xl">
            <h2 className="font-[family-name:var(--font-archivo)] text-[clamp(1.75rem,4vw,2.75rem)] font-bold uppercase leading-tight tracking-tight text-neutral-900">
              {FAQ.heading}
            </h2>
          </div>
          <div className="mt-8 hidden h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-neutral-200 lg:mt-0 lg:block" aria-hidden />
        </header>

        <div className="grid gap-4 md:grid-cols-2 lg:gap-5">
          {FAQ.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <article
                key={item.question}
                className={`overflow-hidden rounded-xl border border-neutral-200/90 bg-[#fafaf8] shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-shadow hover:shadow-md ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  className="flex w-full items-start gap-4 px-6 py-6 text-left sm:px-8 sm:py-7"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="mt-0.5 font-mono text-[0.65rem] tabular-nums text-neutral-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1 font-[family-name:var(--font-archivo)] text-base font-bold uppercase leading-snug tracking-tight text-neutral-900 sm:text-lg">
                    {item.question}
                  </span>
                  <iconify-icon
                    icon={isOpen ? "mdi:minus" : "mdi:plus"}
                    width="22"
                    height="22"
                    className="mt-1 shrink-0 text-neutral-500"
                  />
                </button>
                {isOpen ? (
                  <div className="border-t border-neutral-200/80 bg-white px-6 pb-6 pt-2 sm:px-8 sm:pb-8">
                    <div className="space-y-4 pl-0 pt-4 text-sm leading-relaxed text-neutral-600 sm:pl-10 sm:text-base">
                      {item.answer.split("\n\n").map((chunk) => (
                        <p key={chunk.slice(0, 48)}>{chunk}</p>
                      ))}
                    </div>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
