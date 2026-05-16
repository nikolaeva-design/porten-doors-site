type StatItemProps = {
  label: string;
  figure: string;
  detail: string;
  className?: string;
};

export default function StatItem({ label, figure, detail, className = "" }: StatItemProps) {
  return (
    <div className={`min-w-0 ${className}`}>
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-neutral-500">
        {label}
      </p>
      <p className="mt-3 font-[family-name:var(--font-archivo)] text-3xl font-bold uppercase leading-none tracking-tight text-neutral-900 sm:text-4xl">
        {figure}
      </p>
      <p className="mt-3 text-sm leading-snug text-neutral-600">{detail}</p>
    </div>
  );
}
