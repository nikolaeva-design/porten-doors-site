"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import Button from "@/components/Button";
import { MICRO_CONVERSION } from "@/constants/porten";

export default function MicroConversion() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    router.push(`/thank-you?source=catalogue&email=${encodeURIComponent(email.trim())}`);
  }

  return (
    <section
      id="catalogue"
      className="relative border-y border-neutral-200/50 bg-gradient-to-b from-white via-neutral-50/25 to-white py-16 md:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,0,0,0.04),transparent)]"
        aria-hidden
      />

      <div className="container-main relative">
        <div className="overflow-hidden rounded-[1.75rem] border border-neutral-200/70 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_24px_48px_-28px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.03]">
          <div className="flex flex-col lg:flex-row lg:items-stretch">
            {/* Copy */}
            <div className="relative border-neutral-200/70 lg:w-[min(100%,26rem)] xl:w-[min(100%,30rem)] lg:shrink-0 lg:border-r lg:bg-gradient-to-br lg:from-neutral-50/80 lg:to-white lg:p-10 xl:p-12">
              <div
                className="pointer-events-none absolute -left-16 top-1/2 hidden h-48 w-48 -translate-y-1/2 rounded-full bg-neutral-200/25 blur-3xl lg:block"
                aria-hidden
              />
              <div className="relative flex gap-5 p-8 md:p-10 lg:p-0">
                <span
                  className="mt-1 hidden h-[4.5rem] w-1 shrink-0 rounded-full bg-neutral-900 sm:block"
                  aria-hidden
                />
                <div className="min-w-0 flex-1">
                  <h2 className="font-[family-name:var(--font-archivo)] text-[clamp(1.5rem,4vw,2.35rem)] font-bold uppercase leading-[1.08] tracking-tight text-neutral-900">
                    {MICRO_CONVERSION.heading}
                  </h2>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-neutral-600 sm:text-[1.05rem]">
                    {MICRO_CONVERSION.subtext}
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="flex flex-1 flex-col justify-center border-t border-neutral-200/70 p-8 md:p-10 lg:border-t-0 lg:p-10 xl:p-12">
              <form onSubmit={onSubmit} className="w-full max-w-xl lg:mx-auto lg:w-full lg:max-w-none">
                <label htmlFor="catalogue-email" className="sr-only">
                  Email for catalogue access
                </label>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-3">
                  <div className="relative min-w-0 flex-1">
                    <span
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
                      aria-hidden
                    >
                      <iconify-icon icon="mdi:email-outline" width="20" height="20" />
                    </span>
                    <input
                      id="catalogue-email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 w-full rounded-full border border-neutral-200/90 bg-neutral-50/50 py-3 pl-11 pr-5 text-sm text-neutral-900 outline-none transition-[border-color,box-shadow,background-color] placeholder:text-neutral-400 focus:border-neutral-900/25 focus:bg-white focus:shadow-[0_0_0_3px_rgba(0,0,0,0.06)] sm:h-[3.25rem] sm:text-[0.9375rem]"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="primary"
                    className="h-12 w-full shrink-0 px-8 shadow-[0_2px_8px_rgba(0,0,0,0.12)] transition-[transform,box-shadow] hover:shadow-[0_4px_14px_rgba(0,0,0,0.18)] sm:h-[3.25rem] sm:w-auto sm:min-w-[12rem]"
                  >
                    {MICRO_CONVERSION.cta}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
