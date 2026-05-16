const CHUNKS = [
  { heavy: "REPLACE YOUR DOOR", light: " " },
  { heavy: "•", light: " IN-HOUSE CREW " },
  { heavy: "•", light: " BC RAIN READY " },
  { heavy: "•", light: " 5-YEAR WARRANTY " },
  { heavy: "•", light: " NO SUBS " },
] as const;

export default function MarqueeStrip() {
  const track = [...CHUNKS, ...CHUNKS, ...CHUNKS];

  return (
    <div className="border-y border-porten-cream/25 bg-porten-charcoal py-4 text-porten-cream md:py-5">
      <div className="relative overflow-hidden">
        <div className="flex w-max gap-8 pr-8 motion-safe:animate-[porten-marquee_32s_linear_infinite]">
          {track.map((c, i) => (
            <span key={`${c.heavy}-${i}`} className="flex shrink-0 items-baseline whitespace-nowrap">
              <span className="font-[family-name:var(--font-archivo)] text-lg font-extrabold uppercase tracking-tight md:text-2xl">
                {c.heavy}
              </span>
              <span className="text-lg font-light text-porten-cream/45 md:text-2xl">{c.light}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
