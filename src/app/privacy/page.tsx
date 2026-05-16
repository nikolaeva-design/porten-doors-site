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
  title: "Privacy Policy",
  description:
    "How Image Logix collects, uses, and protects personal information when you use our website and services.",
  alternates: {
    canonical: `${SITE_URL}/privacy`,
  },
  robots: { index: true, follow: true },
  openGraph: {
    locale: "en_CA",
    title: "Privacy Policy | Image Logix",
    description:
      "How Image Logix handles personal information when you use imagelogix.com and our services.",
    url: `${SITE_URL}/privacy`,
    images: [{ url: OPEN_GRAPH_PREVIEW_JPEG_PATH, alt: OPEN_GRAPH_IMAGE_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Image Logix",
    images: [OPEN_GRAPH_PREVIEW_JPEG_PATH],
  },
};

export default function PrivacyPage() {
  return (
    <LegalDocumentPage title="Privacy Policy" lastUpdated="May 13, 2026">
      <section className="space-y-3">
        <h2 className="font-[var(--font-playfair)] text-xl font-semibold text-cognac">
          1. Who we are
        </h2>
        <p>
          Image Logix (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates{" "}
          <Link href="/" className="text-clay-rose underline underline-offset-4 hover:text-cognac">
            imagelogix.com
          </Link>{" "}
          (the &quot;Site&quot;) and provides creative and marketing-related services (the &quot;Services&quot;). This
          Privacy Policy explains how we collect, use, disclose, and safeguard personal information when you
          interact with us online or as a client or prospective client.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[var(--font-playfair)] text-xl font-semibold text-cognac">
          2. Information we collect
        </h2>
        <p>Depending on how you engage with us, we may collect:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium text-cognac">Contact and account details:</strong> such as your
            name, email address, phone number, company name, and messaging content when you contact us (for
            example via email, contact forms, or messaging apps).
          </li>
          <li>
            <strong className="font-medium text-cognac">Project-related information:</strong> such as
            briefs, brand assets, credentials shared for integrations (handled securely and only as needed),
            and correspondence related to deliverables.
          </li>
          <li>
            <strong className="font-medium text-cognac">Technical and usage data:</strong> such as IP
            address, device/browser type, general location derived from IP, pages viewed, and timestamps when
            you use the Site.
          </li>
          <li>
            <strong className="font-medium text-cognac">Cookies and similar technologies:</strong> as
            described in Section 6.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-[var(--font-playfair)] text-xl font-semibold text-cognac">
          3. How we use information
        </h2>
        <p>We use personal information to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Respond to inquiries and communicate about projects, proposals, and support;</li>
          <li>Deliver, invoice for, and improve our Services;</li>
          <li>Operate, secure, and analyze use of the Site;</li>
          <li>Comply with legal obligations and enforce our agreements;</li>
          <li>
            Send operational messages (for example about your account or project). Where permitted by law,
            we may send marketing communications; you can opt out at any time using the unsubscribe link or
            by contacting us.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-[var(--font-playfair)] text-xl font-semibold text-cognac">
          4. Legal bases (where applicable)
        </h2>
        <p>
          If privacy laws in your region require a legal basis for processing, we rely on one or more of:
          your consent (where required); performance of a contract with you; our legitimate interests (such
          as operating our business and securing our systems), balanced against your rights; or compliance
          with legal obligations.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[var(--font-playfair)] text-xl font-semibold text-cognac">
          5. Disclosure of information
        </h2>
        <p>We may share personal information with:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium text-cognac">Service providers</strong> who assist us (for
            example hosting, email delivery, analytics, payments, or collaboration tools), subject to
            appropriate safeguards;
          </li>
          <li>
            <strong className="font-medium text-cognac">Professional advisors</strong> (such as lawyers or
            accountants) where reasonably necessary;
          </li>
          <li>
            <strong className="font-medium text-cognac">Authorities</strong> when required by law or to
            protect rights, safety, and security.
          </li>
        </ul>
        <p>We do not sell your personal information.</p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[var(--font-playfair)] text-xl font-semibold text-cognac">
          6. Cookies and analytics
        </h2>
        <p>
          We may use cookies and similar technologies to remember preferences, maintain security, and
          understand how the Site is used. You can control cookies through your browser settings; disabling
          cookies may affect Site functionality.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[var(--font-playfair)] text-xl font-semibold text-cognac">
          7. Retention
        </h2>
        <p>
          We retain personal information only as long as necessary for the purposes described in this
          Policy, unless a longer period is required or permitted by law (for example tax, accounting, or
          dispute resolution). Project materials may be archived according to our backup and retention
          practices.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[var(--font-playfair)] text-xl font-semibold text-cognac">
          8. Security
        </h2>
        <p>
          We implement reasonable administrative, technical, and organizational measures designed to
          protect personal information. No method of transmission over the Internet is completely secure;
          we cannot guarantee absolute security.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[var(--font-playfair)] text-xl font-semibold text-cognac">
          9. International transfers
        </h2>
        <p>
          We are based in Canada. If you access the Site or work with us from another country, your
          information may be processed in Canada or in other locations where our service providers operate.
          Where required, we use appropriate safeguards for cross-border transfers.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[var(--font-playfair)] text-xl font-semibold text-cognac">
          10. Your rights and choices
        </h2>
        <p>
          Depending on applicable law, you may have the right to access, correct, delete, or restrict
          processing of your personal information, or to object to certain processing. You may also have the
          right to lodge a complaint with a supervisory authority. To exercise rights, contact us at{" "}
          <a href={MAILTO_INFO_URL} className="text-clay-rose underline underline-offset-4 hover:text-cognac">
            {CONTACT_EMAIL}
          </a>
          . We may need to verify your request.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[var(--font-playfair)] text-xl font-semibold text-cognac">
          11. Children&apos;s privacy
        </h2>
        <p>
          The Site and Services are not directed to children under the age where parental consent is
          required in their jurisdiction. We do not knowingly collect personal information from children.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[var(--font-playfair)] text-xl font-semibold text-cognac">
          12. Links to third parties
        </h2>
        <p>
          The Site may link to third-party websites or social platforms. Their privacy practices are
          governed by their own policies; we are not responsible for their content or practices.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[var(--font-playfair)] text-xl font-semibold text-cognac">
          13. Changes to this policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. We will post the updated version on the Site
          and revise the &quot;Last updated&quot; date. Where appropriate, we will provide additional notice.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[var(--font-playfair)] text-xl font-semibold text-cognac">14. Contact</h2>
        <p>
          Image Logix — Vancouver, British Columbia, Canada. Privacy inquiries:{" "}
          <a href={MAILTO_INFO_URL} className="text-clay-rose underline underline-offset-4 hover:text-cognac">
            {CONTACT_EMAIL}
          </a>
          . Please also see our{" "}
          <Link href="/terms" className="text-clay-rose underline underline-offset-4 hover:text-cognac">
            Terms &amp; Conditions
          </Link>
          .
        </p>
      </section>
    </LegalDocumentPage>
  );
}
