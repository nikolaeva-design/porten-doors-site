import Image from "next/image";

type ServiceCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  tall?: boolean;
};

export default function ServiceCard({
  title,
  description,
  imageSrc,
  imageAlt,
  tall = false,
}: ServiceCardProps) {
  return (
    <article className="group flex flex-col gap-4">
      <div
        className={`relative w-full overflow-hidden rounded-[2rem] bg-neutral-200 ${
          tall ? "aspect-[4/5]" : "aspect-[5/4]"
        }`}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 35vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="px-1">
        <h3 className="font-[family-name:var(--font-archivo)] text-lg font-bold uppercase tracking-tight text-neutral-900">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-neutral-600 sm:text-base">{description}</p>
      </div>
    </article>
  );
}
