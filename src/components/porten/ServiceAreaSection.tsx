import SectionHeading from "@/components/porten/SectionHeading";
import { SERVICE_AREA } from "@/constants/porten";

export default function ServiceAreaSection() {
  return (
    <section id="service-area" className="bg-neutral-50 py-20 md:py-28">
      <div className="container-main">
        <SectionHeading title={SERVICE_AREA.heading} intro={SERVICE_AREA.intro} />

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_AREA.areas.map((area) => (
            <li
              key={area}
              className="rounded-sm border border-neutral-200 bg-white px-5 py-4 text-sm font-semibold uppercase tracking-wide text-neutral-800 sm:text-base"
            >
              {area}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
