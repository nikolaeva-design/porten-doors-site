import Image from "next/image";

import SectionHeading from "@/components/porten/SectionHeading";
import { HOW_IT_WORKS } from "@/constants/porten";

const SIDE_IMAGE =
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=85";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#F9F6F1] py-20 md:py-32">
      <div className="container-main">
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading title={HOW_IT_WORKS.heading} intro={HOW_IT_WORKS.intro} />

            <ol className="mt-12 list-none space-y-10 pl-0">
              {HOW_IT_WORKS.steps.map((step) => (
                <li key={step.title}>
                  <p className="font-[family-name:var(--font-archivo)] text-base font-bold uppercase tracking-tight text-neutral-900">
                    {step.title}
                  </p>
                  <p className="mt-2 text-sm font-normal normal-case leading-relaxed text-neutral-600">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>

            <blockquote className="mt-14 space-y-3 border-l-4 border-neutral-900/20 pl-6 text-base leading-relaxed text-neutral-700 md:text-lg">
              {HOW_IT_WORKS.bottomQuoteLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </blockquote>
          </div>

          <div className="lg:sticky lg:top-28">
            <div className="relative aspect-[3/4] max-h-[46rem] overflow-hidden rounded-[2rem] bg-neutral-300 shadow-xl shadow-neutral-900/10">
              <Image
                src={SIDE_IMAGE}
                alt="Door installation — Porten"
                fill
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover object-[center_35%]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-900/35 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
