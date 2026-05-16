import SectionHeading from "@/components/porten/SectionHeading";
import ServiceCard from "@/components/porten/ServiceCard";
import { SERVICES } from "@/constants/porten";

/** Staggered 12-column positions for an editorial masonry rhythm */
const STAGGER = [
  "lg:col-span-5 lg:col-start-1 lg:mt-0",
  "lg:col-span-4 lg:col-start-8 lg:mt-24 xl:mt-32",
  "lg:col-span-5 lg:col-start-2 lg:mt-12 xl:mt-16",
  "lg:col-span-4 lg:col-start-8 lg:mt-8 xl:mt-20",
  "lg:col-span-5 lg:col-start-1 lg:mt-16 xl:mt-24",
  "lg:col-span-4 lg:col-start-7 lg:mt-4 xl:mt-12",
] as const;

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-white py-20 md:py-32">
      <div className="container-main">
        <SectionHeading title={SERVICES.heading} className="lg:max-w-2xl" />

        <div className="relative mt-16 lg:mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-6">
            {SERVICES.items.map((item, i) => (
              <div key={item.slug} className={`${STAGGER[i] ?? ""}`}>
                <ServiceCard
                  title={item.title}
                  description={item.description}
                  imageSrc={item.image}
                  imageAlt={`${item.title} — Porten Doors installation and replacement`}
                  tall={i % 3 !== 1}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
