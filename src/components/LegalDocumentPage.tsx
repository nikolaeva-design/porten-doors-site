import PortenFooter from "@/components/porten/PortenFooter";
import PortenHeader from "@/components/porten/PortenHeader";

type LegalDocumentPageProps = {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
};

export default function LegalDocumentPage({
  title,
  lastUpdated,
  children,
}: LegalDocumentPageProps) {
  return (
    <>
      <PortenHeader />
      <main className="min-h-screen bg-white pt-24 text-neutral-900">
        <article className="mx-auto max-w-3xl px-6 py-14 lg:px-12 lg:py-20">
          <h1 className="font-[family-name:var(--font-archivo)] text-3xl font-bold uppercase tracking-tight text-neutral-900 sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-neutral-500">Last updated: {lastUpdated}</p>
          <div className="mt-12 space-y-10 text-sm leading-relaxed text-neutral-600">
            {children}
          </div>
        </article>
      </main>
      <PortenFooter />
    </>
  );
}
