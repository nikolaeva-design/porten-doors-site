import Image from "next/image";

import { TRUST_ITEMS, TRUST_SECTION } from "@/constants/porten";

const TRUST_PRIMARY_IMAGE =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85";

/** Split "134+ Doors Installed" → hero figure + rest (uppercase lines). */
function splitLeadingStat(label: string): { figure: string; rest: string } | null {
  const m = label.match(/^(\d+\+)\s+(.+)$/);
  if (!m) return null;
  return { figure: m[1], rest: m[2].toUpperCase() };
}

export default function TrustBar() {
  const [primary, ...rest] = TRUST_ITEMS;
  const primarySplit = splitLeadingStat(primary.label);

  return (
    <section
      id="trust"
      aria-label="Trust highlights"
      className="relative w-full overflow-x-clip bg-porten-charcoal text-porten-cream"
    >
      {/* Bridge from hero — soft glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/35 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 top-20 h-72 w-72 max-w-[50vw] rounded-full bg-porten-cream/[0.06] blur-3xl"
        aria-hidden
      />

      <div className="container-main relative max-w-full py-16 md:py-20 lg:py-28">
        <header className="mb-12 flex flex-col gap-8 md:mb-16 lg:mb-20 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div className="min-w-0 max-w-xl lg:max-w-2xl">
            <p className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.35em] text-porten-cream/45">
              {TRUST_SECTION.eyebrow}
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-archivo)] text-[clamp(2rem,5vw,3.25rem)] font-bold uppercase leading-[1.02] tracking-tight text-porten-cream">
              {TRUST_SECTION.headline}
            </h2>
          </div>
          <div className="hidden min-w-0 flex-1 items-center gap-6 lg:flex">
            <div
              className="h-px min-w-[4rem] flex-1 bg-gradient-to-r from-transparent via-porten-cream/25 to-porten-cream/35"
              aria-hidden
            />
          </div>
        </header>

        <div className="grid w-full min-w-0 grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-12 lg:grid-rows-3 lg:gap-4">
          {/* Primary — background clipped internally so stats never get cropped */}
          <article className="group relative z-0 min-h-[19rem] w-full min-w-0 rounded-sm border border-porten-cream/15 lg:col-span-5 lg:row-span-3 lg:min-h-[22rem]">
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-sm">
              <Image
                src={TRUST_PRIMARY_IMAGE}
                alt="Modern home exterior — Porten door installations"
                fill
                sizes="(min-width: 1024px) 34vw, 100vw"
                className="object-cover object-[center_42%]"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-porten-charcoal from-[32%] via-porten-charcoal/40 via-[52%] to-porten-charcoal/15 lg:bg-[linear-gradient(108deg,rgba(26,26,26,0.93)_0%,rgba(26,26,26,0.72)_20%,rgba(26,26,26,0.38)_42%,rgba(26,26,26,0.12)_62%,transparent_84%)]"
                aria-hidden
              />
            </div>

            <div className="relative z-10 flex min-h-[19rem] w-full min-w-0 flex-col justify-between gap-10 overflow-visible px-7 py-9 sm:px-9 sm:py-10 lg:min-h-[22rem] lg:max-w-[58%] lg:justify-between lg:gap-12 lg:p-11 lg:pr-7">
              <div className="flex items-start justify-between gap-6">
                <span
                  className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/25 bg-black/35 text-porten-cream shadow-lg shadow-black/20 backdrop-blur-sm"
                  aria-hidden
                >
                  <iconify-icon icon={primary.icon} width="28" height="28" />
                </span>
                <span className="font-mono text-[0.7rem] tabular-nums tracking-widest text-porten-cream/45">
                  01
                </span>
              </div>

              <div className="mt-auto min-w-0">
                {primarySplit ? (
                  <>
                    <p className="font-[family-name:var(--font-archivo)] text-[clamp(3rem,9vw,5.25rem)] font-bold leading-none tracking-normal text-porten-cream drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)]">
                      {primarySplit.figure}
                    </p>
                    <p className="mt-3 max-w-[14rem] font-[family-name:var(--font-archivo)] text-xs font-bold uppercase leading-snug tracking-[0.2em] text-porten-cream/85 sm:text-sm sm:tracking-[0.22em]">
                      {primarySplit.rest}
                    </p>
                  </>
                ) : (
                  <p className="font-[family-name:var(--font-archivo)] text-xl font-bold uppercase leading-tight tracking-tight text-porten-cream">
                    {primary.label}
                  </p>
                )}
              </div>
            </div>
          </article>

          {rest.map((item, i) => {
            const lgPositions = [
              "lg:col-span-7 lg:row-start-1 lg:col-start-6",
              "lg:col-span-4 lg:row-start-2 lg:col-start-6",
              "lg:col-span-3 lg:row-start-2 lg:col-start-10",
              "lg:col-span-4 lg:row-start-3 lg:col-start-6",
              "lg:col-span-3 lg:row-start-3 lg:col-start-10",
            ];
            return (
              <article
                key={item.label}
                className={`flex min-w-0 max-w-full flex-col justify-between gap-5 rounded-sm border border-porten-cream/15 bg-white/[0.03] p-6 transition-colors hover:border-porten-cream/25 hover:bg-white/[0.055] sm:flex-row sm:items-center sm:gap-6 sm:p-8 ${lgPositions[i] ?? ""}`}
              >
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-porten-cream/20 bg-porten-charcoal text-porten-cream"
                  aria-hidden
                >
                  <iconify-icon icon={item.icon} width="22" height="22" />
                </span>
                <p className="min-w-0 flex-1 break-words font-[family-name:var(--font-archivo)] text-[0.65rem] font-bold uppercase leading-snug tracking-[0.14em] text-porten-cream/90 sm:text-xs sm:tracking-[0.16em] lg:text-[0.7rem]">
                  {item.label}
                </p>
                <span className="hidden shrink-0 font-mono text-[0.65rem] text-porten-cream/35 sm:block lg:w-8 lg:text-right">
                  {String(i + 2).padStart(2, "0")}
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
