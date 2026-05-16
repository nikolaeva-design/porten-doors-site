type SectionHeadingProps = {
  title: string;
  intro?: string;
  /** Optional eyebrow above title */
  eyebrow?: string;
  className?: string;
  align?: "left" | "center";
  /** Omit default section spacing below the heading block */
  compact?: boolean;
};

export default function SectionHeading({
  title,
  intro,
  eyebrow,
  className = "",
  align = "left",
  compact = false,
}: SectionHeadingProps) {
  const alignCls = align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl";
  const spacing = compact ? "" : "mb-12 md:mb-16";

  return (
    <header className={`${spacing} ${alignCls} ${className}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-[family-name:var(--font-archivo)] text-3xl font-bold uppercase leading-tight tracking-tight text-neutral-900 sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {intro ? (
        <p className="mt-5 text-base leading-relaxed text-neutral-600 sm:text-lg">{intro}</p>
      ) : null}
    </header>
  );
}
