import type { Metadata } from "next";

import Button from "@/components/Button";
import PortenFooter from "@/components/porten/PortenFooter";
import PortenHeader from "@/components/porten/PortenHeader";
import { PORTEN_BRAND, PORTEN_PHONE_TEL } from "@/constants/porten";

export const metadata: Metadata = {
  title: "Thank you",
  robots: { index: false, follow: false },
};

type Props = { searchParams: Promise<Record<string, string | string[] | undefined>> };

export default async function ThankYouPage({ searchParams }: Props) {
  const sp = await searchParams;
  const source = typeof sp.source === "string" ? sp.source : "";

  return (
    <>
      <PortenHeader />
      <main className="min-h-[70vh] bg-white pb-24 pt-32">
        <div className="container-main max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Thank you
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-archivo)] text-3xl font-bold uppercase leading-tight tracking-tight text-neutral-900 sm:text-4xl">
            We&apos;ll be in touch within two hours
          </h1>
          <p className="mt-6 text-neutral-600">
            Thanks for reaching out to {PORTEN_BRAND.name}.{" "}
            {source === "catalogue"
              ? "We’ll send catalogue access to the email you provided."
              : "Your estimate request is logged — our team will respond shortly."}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/" variant="primary" icon="mdi:arrow-left">
              Back to home
            </Button>
            <Button href={`tel:${PORTEN_PHONE_TEL}`} variant="secondary">
              Call us
            </Button>
          </div>
          <p className="mt-8 text-sm text-neutral-500">
            A conversion event was fired in the browser when you submitted the form (for analytics tags
            you configure later).
          </p>
        </div>
      </main>
      <PortenFooter />
    </>
  );
}
