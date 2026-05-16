import SectionHeading from "@/components/porten/SectionHeading";
import { SITUATION } from "@/constants/porten";

export default function SituationRecognition() {
  return (
    <section id="situations" className="border-y border-neutral-200/80 bg-neutral-50 py-20 md:py-28">
      <div className="container-main">
        <div className="items-start gap-12 lg:grid lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <SectionHeading
              title={SITUATION.heading}
              intro={SITUATION.intro}
              compact
              className="max-w-xl [&_h2]:leading-[1.08]"
            />
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:col-span-7 lg:mt-0 lg:gap-6">
            {SITUATION.cards.map((card, i) => (
              <article
                key={card.title}
                className="rounded-xl border border-neutral-200 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] md:p-7"
              >
                <div className="flex gap-4">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 font-[family-name:var(--font-archivo)] text-sm font-bold tabular-nums text-neutral-900"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-[family-name:var(--font-archivo)] text-base font-bold uppercase tracking-tight text-neutral-900 md:text-lg">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600 md:mt-3 md:text-base">
                      {card.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
