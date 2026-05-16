import SectionHeading from "@/components/porten/SectionHeading";
import { RISK_REVERSAL } from "@/constants/porten";

export default function RiskReversal() {
  const [a, b, c] = RISK_REVERSAL.cards;

  return (
    <section id="risk-reversal" className="bg-white py-20 md:py-28">
      <div className="container-main">
        <div className="lg:flex lg:items-end lg:justify-between lg:gap-12">
          <SectionHeading
            compact
            title={RISK_REVERSAL.heading}
            intro={RISK_REVERSAL.intro}
            className="lg:max-w-3xl [&_h2]:max-w-none"
          />
          <div className="mt-8 hidden h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent lg:mt-0 lg:block" aria-hidden />
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-12 lg:gap-5">
          <article className="flex min-h-[13rem] flex-col justify-between rounded-lg border border-neutral-200 bg-neutral-50 p-8 shadow-sm lg:col-span-7 lg:min-h-[16rem] lg:p-10">
            <span className="font-mono text-[0.65rem] text-neutral-400">01</span>
            <div>
              <h3 className="font-[family-name:var(--font-archivo)] text-lg font-bold uppercase leading-snug tracking-tight text-neutral-900 md:text-xl">
                {a.title}
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-base">{a.body}</p>
            </div>
          </article>

          <article className="flex min-h-[13rem] flex-col justify-between rounded-lg border border-neutral-900 bg-neutral-900 p-8 text-white shadow-lg lg:col-span-5 lg:min-h-[16rem] lg:p-10">
            <span className="font-mono text-[0.65rem] text-white/40">02</span>
            <div>
              <h3 className="font-[family-name:var(--font-archivo)] text-lg font-bold uppercase leading-snug tracking-tight text-white md:text-xl">
                {b.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/85 sm:text-base">{b.body}</p>
            </div>
          </article>

          <article className="rounded-lg border border-dashed border-neutral-300 bg-white px-8 py-10 lg:col-span-12 lg:flex lg:items-start lg:gap-8 lg:px-12 lg:py-11">
            <span className="font-mono text-[0.65rem] text-neutral-400 lg:mt-1">03</span>
            <div className="mt-6 min-w-0 flex-1 lg:mt-0">
              <h3 className="font-[family-name:var(--font-archivo)] text-xl font-bold uppercase leading-snug tracking-tight text-neutral-900 md:text-2xl">
                {c.title}
              </h3>
              <p className="mt-4 max-w-4xl text-base leading-relaxed text-neutral-600">{c.body}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
