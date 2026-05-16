import type { Metadata } from "next";

import PortenFooter from "@/components/porten/PortenFooter";
import PortenHeader from "@/components/porten/PortenHeader";
import { PORTEN_BRAND, PROJECTS } from "@/constants/porten";
import { OPEN_GRAPH_IMAGE_ALT, OPEN_GRAPH_PREVIEW_JPEG_PATH, SITE_URL } from "@/constants/site";

export const metadata: Metadata = {
  title: "Door Replacement Projects",
  description: "Recent door replacements across Greater Vancouver — entry, patio, steel, and double doors.",
  alternates: { canonical: `${SITE_URL}/projects` },
  openGraph: {
    locale: "en_CA",
    title: `Projects | ${PORTEN_BRAND.name}`,
    description: PROJECTS.heading,
    url: `${SITE_URL}/projects`,
    images: [{ url: OPEN_GRAPH_PREVIEW_JPEG_PATH, alt: OPEN_GRAPH_IMAGE_ALT }],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <PortenHeader />
      <main className="bg-white pb-24 pt-28">
        <div className="container-main max-w-3xl">
          <h1 className="font-[family-name:var(--font-archivo)] text-4xl font-bold uppercase leading-tight tracking-tight text-neutral-900">
            Our Door Replacement Projects
          </h1>
          <p className="mt-6 text-lg text-neutral-600">{PROJECTS.heading}</p>
          <ul className="mt-10 space-y-4 text-neutral-800">
            {PROJECTS.items.map((p) => (
              <li key={p.title} className="border-b border-neutral-200 pb-4 text-sm font-semibold uppercase tracking-wide">
                {p.title}
              </li>
            ))}
          </ul>
          <p className="mt-10 text-sm text-neutral-500">
            Full project galleries and photography can be expanded here as you publish individual
            case studies.
          </p>
        </div>
      </main>
      <PortenFooter />
    </>
  );
}
