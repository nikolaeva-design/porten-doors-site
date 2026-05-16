import Image from "next/image";
import Link from "next/link";

import SectionHeading from "@/components/porten/SectionHeading";
import { ABOUT } from "@/constants/porten";

const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=85";

export default function AboutSection() {
  return (
    <section id="about" className="border-y border-neutral-200/80 bg-white py-20 md:py-28">
      <div className="container-main">
        <div className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-14">
          <div className="lg:col-span-6">
            <SectionHeading title={ABOUT.heading} className="lg:max-w-xl [&_h2]:leading-[1.08]" />

            <div className="mt-10 space-y-6 text-base leading-relaxed text-neutral-600 sm:text-lg lg:columns-2 lg:gap-10">
              {ABOUT.paragraphs.map((p) => (
                <p key={p.slice(0, 28)} className="break-inside-avoid-column">
                  {p}
                </p>
              ))}
            </div>

            <p className="mt-10">
              <Link
                href={ABOUT.linkHref}
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-neutral-900 underline decoration-neutral-300 underline-offset-8 transition-colors hover:decoration-neutral-900"
                aria-label={ABOUT.linkAnchorLabel}
              >
                {ABOUT.linkText}
              </Link>
            </p>
          </div>

          <div className="relative mt-14 lg:col-span-6 lg:mt-8">
            <figure className="relative aspect-[4/5] max-h-[32rem] overflow-hidden rounded-xl bg-neutral-200 shadow-[0_32px_64px_-36px_rgba(0,0,0,0.35)] ring-1 ring-black/[0.06] lg:mx-auto lg:max-w-md">
              <Image
                src={ABOUT_IMAGE}
                alt="Steel entry door detail — Porten installation standard"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-[center_40%]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" aria-hidden />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
