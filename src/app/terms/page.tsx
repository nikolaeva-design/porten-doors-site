import type { Metadata } from "next";
import Link from "next/link";

import LegalDocumentPage from "@/components/LegalDocumentPage";
import { CONTACT_EMAIL, MAILTO_INFO_URL } from "@/constants/contact";
import {
  OPEN_GRAPH_IMAGE_ALT,
  OPEN_GRAPH_PREVIEW_JPEG_PATH,
  SITE_URL,
} from "@/constants/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions governing use of the Image Logix website and creative services.",
  alternates: {
    canonical: `${SITE_URL}/terms`,
  },
  robots: { index: true, follow: true },
  openGraph: {
    locale: "en_CA",
    title: "Terms & Conditions | Image Logix",
    description: "Terms of use for imagelogix.com and Image Log creative services.",
    url: `${SITE_URL}/terms`,
    images: [{ url: OPEN_GRAPH_PREVIEW_JPEG_PATH, alt: OPEN_GRAPH_IMAGE_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | Image Logix",
    images: [OPEN_GRAPH_PREVIEW_JPEG_PATH],
  },
};

export default function TermsPage() {
  return (
    <LegalDocumentPage title="Terms & Conditions" lastUpdated="May 13, 2026">
      <section className="space-y-3">
        <h2 className="font-[var(--font-playfair)] text-xl font-semibold text-cognac">
          1. Agreement to these terms
        </h2>
        <p>
          These Terms &amp; Conditions (&quot;Terms&quot;) govern your access to and use of the website
          operated by Image Logix (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) at{" "}
          <Link href="/" className="text-clay-rose underline underline-offset-4 hover:text-cognac">
            imagelogix.com
          </Link>{" "}
          (the &quot;Site&quot;) and, where applicable, the creative, marketing, and related services we
          provide (the &quot;Services&quot;). By accessing the Site or engaging our Services, you agree to
          these Terms. If you do not agree, please do not use the Site or Services.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[var(--font-playfair)] text-xl font-semibold text-cognac">
          2. Services and reliance on information
        </h2>
        <p>
          Content on the Site is provided for general information purposes only. Project scope, timelines,
          deliverables, and fees for Services are defined in a separate proposal, statement of work,
          order form, or written agreement between you and Image Logix (&quot;Project Agreement&quot;). If
          there is any conflict between these Terms and a signed Project Agreement, the Project Agreement
          controls for that engagement.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[var(--font-playfair)] text-xl font-semibold text-cognac">
          3. Intellectual property
        </h2>
        <p>
          Unless otherwise stated in writing, Image Logix retains ownership of pre-existing materials,
          tools, templates, and methodologies. Upon receipt of full payment for the applicable deliverables,
          and subject to your compliance with the Project Agreement, we grant you the rights to use the
          final deliverables as set out in your Project Agreement. You represent that materials you
          provide to us (&quot;Client Materials&quot;) do not infringe third-party rights and that you have
          the right to grant us a license to use them to perform the Services.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[var(--font-playfair)] text-xl font-semibold text-cognac">
          4. Client responsibilities
        </h2>
        <p>
          You agree to provide timely feedback, approvals, access, assets, and accurate information
          reasonably required for us to deliver the Services. Delays caused by late responses, incomplete
          assets, or third-party dependencies may affect timelines and may incur additional fees where
          stated in your Project Agreement.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[var(--font-playfair)] text-xl font-semibold text-cognac">
          5. Fees, expenses, and taxes
        </h2>
        <p>
          Fees are as quoted in your Project Agreement or invoice. Unless otherwise agreed, invoices are
          due on the due date shown on the invoice. Late payments may bear interest or suspend work as
          described in your agreement. You are responsible for applicable taxes, duties, or government
          charges unless exempt by law and documented accordingly.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[var(--font-playfair)] text-xl font-semibold text-cognac">
          6. Revisions and change requests
        </h2>
        <p>
          Unless your Project Agreement specifies otherwise, rounds of revisions are limited as stated in
          your proposal. Additional revisions or changes outside the agreed scope may be quoted separately.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[var(--font-playfair)] text-xl font-semibold text-cognac">
          7. Confidentiality
        </h2>
        <p>
          Each party agrees to protect the other&apos;s confidential information using reasonable care and
          to use it only for the purpose of the engagement, except where disclosure is required by law.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[var(--font-playfair)] text-xl font-semibold text-cognac">
          8. Limitation of liability
        </h2>
        <p>
          To the fullest extent permitted by applicable law, Image Logix and its team members will not be
          liable for any indirect, incidental, special, consequential, or punitive damages, or for lost
          profits, revenues, data, or goodwill. Our aggregate liability arising out of or relating to the
          Site or Services will not exceed the greater of (a) the fees you paid to us for the specific
          Services giving rise to the claim during the three (3) months preceding the claim, or (b) one
          hundred Canadian dollars (CAD $100), except where liability cannot be limited by law.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[var(--font-playfair)] text-xl font-semibold text-cognac">
          9. Indemnity
        </h2>
        <p>
          You agree to indemnify and hold harmless Image Logix from claims, damages, liabilities, and
          expenses (including reasonable legal fees) arising from your Client Materials, your use of
          deliverables in breach of these Terms or applicable law, or your breach of your representations
          under these Terms.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[var(--font-playfair)] text-xl font-semibold text-cognac">
          10. Third-party platforms and tools
        </h2>
        <p>
          Work may involve third-party platforms (for example hosting, email, advertising, or analytics
          providers). Your use of those platforms is subject to their respective terms and policies. We are
          not responsible for outages, policy changes, or actions taken by third parties outside our
          reasonable control.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[var(--font-playfair)] text-xl font-semibold text-cognac">
          11. Termination
        </h2>
        <p>
          Either party may terminate an engagement as set out in the Project Agreement. We may suspend or
          terminate access to the Site or Services where necessary to comply with law or to address misuse,
          security risk, or non-payment.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[var(--font-playfair)] text-xl font-semibold text-cognac">
          12. Governing law
        </h2>
        <p>
          These Terms are governed by the laws of the Province of British Columbia and the federal laws of
          Canada applicable therein, without regard to conflict-of-law principles. You agree to submit to
          the exclusive jurisdiction of the courts located in Vancouver, British Columbia, except where
          prohibited by applicable consumer protection law.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[var(--font-playfair)] text-xl font-semibold text-cognac">
          13. Changes
        </h2>
        <p>
          We may update these Terms from time to time by posting a revised version on the Site and updating
          the &quot;Last updated&quot; date. Continued use of the Site after changes constitutes acceptance of
          the revised Terms, except where prohibited by law.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[var(--font-playfair)] text-xl font-semibold text-cognac">14. Contact</h2>
        <p>
          Questions about these Terms:{" "}
          <a href={MAILTO_INFO_URL} className="text-clay-rose underline underline-offset-4 hover:text-cognac">
            {CONTACT_EMAIL}
          </a>
          . Our{" "}
          <Link href="/privacy" className="text-clay-rose underline underline-offset-4 hover:text-cognac">
            Privacy Policy
          </Link>{" "}
          describes how we handle personal information.
        </p>
      </section>
    </LegalDocumentPage>
  );
}
