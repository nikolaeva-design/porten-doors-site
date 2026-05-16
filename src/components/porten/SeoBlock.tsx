import Image from "next/image";

import { SEO_BLOCK } from "@/constants/porten";

const SEO_SIDEBAR_IMAGE =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=85";

export default function SeoBlock() {
  const firstSentenceMatch = SEO_BLOCK.paragraphs[0].match(/^[^.?!]+[.?!]/u)?.[0]?.trim() ?? "";
  const pullQuote =
    firstSentenceMatch.length > 180 ? `${firstSentenceMatch.slice(0, 177)}…` : firstSentenceMatch;

  return (
    <section
      id="seo"
      className="border-y border-neutral-200/80 bg-[#fafaf8] py-20 md:py-28"
      aria-label="About door replacement in BC"
    >
      <div className="container-main">
        <div className="border-b border-neutral-900/10 pb-10 md:pb-14">
          <h2 className="max-w-5xl font-[family-name:var(--font-archivo)] text-[clamp(1.65rem,4vw,2.85rem)] font-bold uppercase leading-[1.06] tracking-tight text-neutral-900">
            {SEO_BLOCK.heading}
          </h2>
        </div>

        <div className="mt-12 lg:mt-16 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:gap-y-10">
          <div className="space-y-10 text-base leading-[1.75] text-neutral-600 sm:text-lg lg:col-span-8">
            {SEO_BLOCK.paragraphs.map((p, pi) => (
              <div key={p.slice(0, 24)} className="space-y-5">
                {p.split("\n\n").map((chunk, j) => (
                  <p
                    key={`${chunk.slice(0, 24)}-${j}`}
                    className={
                      pi === 1 && j === 0
                        ? "first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-[family-name:var(--font-archivo)] first-letter:text-5xl first-letter:font-bold first-letter:leading-none first-letter:text-neutral-900"
                        : undefined
                    }
                  >
                    {chunk}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <aside className="mt-14 lg:col-span-4 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <figure className="relative mb-8 aspect-[4/5] overflow-hidden rounded-lg bg-neutral-200 shadow-[0_24px_48px_-28px_rgba(0,0,0,0.18)] ring-1 ring-black/[0.06]">
                <Image
                  src={SEO_SIDEBAR_IMAGE}
                  alt="Modern home exterior — Porten service area"
                  fill
                  sizes="(min-width: 1024px) 28vw, 100vw"
                  className="object-cover object-[center_42%]"
                />
              </figure>
              {pullQuote ? (
                <blockquote className="border-l-[3px] border-neutral-900 pl-5 text-base font-medium leading-snug text-neutral-700 md:text-lg">
                  <span className="text-neutral-400">&ldquo;</span>
                  {pullQuote}
                  <span className="text-neutral-400">&rdquo;</span>
                </blockquote>
              ) : null}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
