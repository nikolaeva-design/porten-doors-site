"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useCallback } from "react";

import Button from "@/components/Button";
import { DOOR_TYPE_OPTIONS, FINAL_CTA } from "@/constants/porten";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export default function FinalCta() {
  const router = useRouter();

  const fireConversion = useCallback(() => {
    window.dataLayer?.push({
      event: "porten_estimate_submit",
      form: "final_estimate",
    });
    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", { send_to: "AW-PLACEHOLDER/ESTIMATE" });
    }
  }, []);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    fireConversion();
    const fd = new FormData(e.currentTarget);
    const first = String(fd.get("firstName") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const doorType = String(fd.get("doorType") ?? "").trim();
    const params = new URLSearchParams({
      firstName: first,
      email,
      phone,
      doorType,
      source: "estimate",
    });
    router.push(`/thank-you?${params.toString()}`);
  }

  return (
    <section id="estimate" className="bg-neutral-900 py-20 text-white md:py-28">
      <div className="container-main grid gap-14 lg:grid-cols-2 lg:items-start lg:gap-20">
        <div>
          <h2 className="font-[family-name:var(--font-archivo)] text-3xl font-bold uppercase leading-tight tracking-tight sm:text-4xl">
            {FINAL_CTA.heading}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            {FINAL_CTA.text}
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-sm border border-white/15 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-sm sm:p-8"
        >
          <div className="grid gap-4">
            <div>
              <label htmlFor="firstName" className="text-xs font-semibold uppercase tracking-wider text-white/70">
                First Name <span className="text-red-300">*</span>
              </label>
              <input
                id="firstName"
                name="firstName"
                required
                autoComplete="given-name"
                className="mt-2 h-12 w-full rounded-sm border border-white/20 bg-white/10 px-4 text-sm text-white outline-none placeholder:text-white/40 focus:border-white/40 focus:ring-1 focus:ring-white/30"
                placeholder="Jane"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-white/70">
                Email <span className="text-red-300">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="mt-2 h-12 w-full rounded-sm border border-white/20 bg-white/10 px-4 text-sm text-white outline-none placeholder:text-white/40 focus:border-white/40 focus:ring-1 focus:ring-white/30"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-white/70">
                Phone <span className="text-red-300">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                className="mt-2 h-12 w-full rounded-sm border border-white/20 bg-white/10 px-4 text-sm text-white outline-none placeholder:text-white/40 focus:border-white/40 focus:ring-1 focus:ring-white/30"
                placeholder="+1..."
              />
            </div>
            <div>
              <label htmlFor="doorType" className="text-xs font-semibold uppercase tracking-wider text-white/70">
                Door type <span className="text-red-300">*</span>
              </label>
              <select
                id="doorType"
                name="doorType"
                required
                defaultValue=""
                className="mt-2 h-12 w-full rounded-sm border border-white/20 bg-neutral-900 px-4 text-sm text-white outline-none focus:border-white/40 focus:ring-1 focus:ring-white/30"
              >
                {DOOR_TYPE_OPTIONS.map((opt) => (
                  <option key={opt.value || "empty"} value={opt.value} disabled={opt.value === ""}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-6">
            <Button type="submit" variant="inverse" className="w-full justify-center" size="lg">
              {FINAL_CTA.buttonLabel}
            </Button>
            <p className="mt-3 text-center text-xs text-white/55">{FINAL_CTA.microcopy}</p>
          </div>
        </form>
      </div>
    </section>
  );
}
