import type { Metadata } from "next";
import Script from "next/script";

import PortenHeader from "@/components/porten/PortenHeader";
import PortenHero from "@/components/porten/PortenHero";
import TrustBar from "@/components/porten/TrustBar";
import SituationRecognition from "@/components/porten/SituationRecognition";
import ServicesGrid from "@/components/porten/ServicesGrid";
import MicroConversion from "@/components/porten/MicroConversion";
import SeoBlock from "@/components/porten/SeoBlock";
import ServiceAreaSection from "@/components/porten/ServiceAreaSection";
import HowItWorks from "@/components/porten/HowItWorks";
import RiskReversal from "@/components/porten/RiskReversal";
import ProjectsPreview from "@/components/porten/ProjectsPreview";
import AboutSection from "@/components/porten/AboutSection";
import FaqSection from "@/components/porten/FaqSection";
import FinalCta from "@/components/porten/FinalCta";
import PortenFooter from "@/components/porten/PortenFooter";
import { FAQ, PORTEN_BRAND } from "@/constants/porten";
import {
  DEFAULT_OG_IMAGE_PATH,
  OPEN_GRAPH_IMAGE_ALT,
  OPEN_GRAPH_PREVIEW_JPEG_PATH,
  SITE_URL,
} from "@/constants/site";

export const metadata: Metadata = {
  title: "Door Replacement & Installation | Greater Vancouver & Vancouver Island",
  description:
    "Porten Doors replaces and installs entry, patio, and interior doors across BC. In-house installers, 5-year warranty, no subcontractors — free in-home estimate.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: SITE_URL,
    siteName: PORTEN_BRAND.name,
    title: "Porten Doors | Door Replacement & Installation in BC",
    description:
      "No drafts, no shoulder-pushing — built for BC rain with a 5-year warranty on doors and labour.",
    images: [
      { url: OPEN_GRAPH_PREVIEW_JPEG_PATH, alt: OPEN_GRAPH_IMAGE_ALT },
      { url: DEFAULT_OG_IMAGE_PATH, alt: OPEN_GRAPH_IMAGE_ALT },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Porten Doors | Door Replacement & Installation in BC",
    description:
      "Greater Vancouver & Vancouver Island door replacement — in-house crew, 5-year warranty.",
    images: [OPEN_GRAPH_PREVIEW_JPEG_PATH],
  },
  robots: { index: true, follow: true },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: PORTEN_BRAND.name,
  url: SITE_URL,
  image: `${SITE_URL}${OPEN_GRAPH_PREVIEW_JPEG_PATH}`,
  description: PORTEN_BRAND.tagline,
  areaServed: [
    { "@type": "Place", name: "Greater Vancouver" },
    { "@type": "Place", name: "Vancouver Island" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vancouver",
    addressRegion: "BC",
    addressCountry: "CA",
  },
};

export default function Home() {
  return (
    <>
      <Script
        id="porten-faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Script
        id="porten-local-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <PortenHeader />
      <main className="min-w-0">
        <PortenHero />
        <TrustBar />
        <SituationRecognition />
        <ServicesGrid />
        <MicroConversion />
        <SeoBlock />
        <ServiceAreaSection />
        <HowItWorks />
        <RiskReversal />
        <ProjectsPreview />
        <AboutSection />
        <FaqSection />
        <FinalCta />
      </main>
      <PortenFooter />
    </>
  );
}
