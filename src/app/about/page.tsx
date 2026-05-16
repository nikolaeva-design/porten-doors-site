import type { Metadata } from "next";
import Link from "next/link";

import PortenFooter from "@/components/porten/PortenFooter";
import PortenHeader from "@/components/porten/PortenHeader";
import { ABOUT, PORTEN_BRAND } from "@/constants/porten";
import { OPEN_GRAPH_IMAGE_ALT, OPEN_GRAPH_PREVIEW_JPEG_PATH, SITE_URL } from "@/constants/site";

export const metadata: Metadata = {
  title: "About Porten Doors",
  description: ABOUT.paragraphs[0],
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    locale: "en_CA",
    title: `About ${PORTEN_BRAND.name}`,
    description: ABOUT.paragraphs[0],
    url: `${SITE_URL}/about`,
    images: [{ url: OPEN_GRAPH_PREVIEW_JPEG_PATH, alt: OPEN_GRAPH_IMAGE_ALT }],
  },
};

export default function AboutPage() {
  return (
    <>
      <PortenHeader />
      <main className="bg-white pb-24 pt-28">
        <div className="container-main max-w-3xl">
          <h1 className="font-[family-name:var(--font-archivo)] text-4xl font-bold uppercase leading-tight tracking-tight text-neutral-900">
            About {PORTEN_BRAND.name}
          </h1>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-neutral-600">
            {ABOUT.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <p className="mt-12">
            <Link
              href="/#estimate"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-neutral-900 underline decoration-neutral-300 underline-offset-8"
            >
              Get a free estimate
              <iconify-icon icon="mdi:arrow-right" width="20" height="20" />
            </Link>
          </p>
        </div>
      </main>
      <PortenFooter />
    </>
  );
}
