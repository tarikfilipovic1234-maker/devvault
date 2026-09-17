import Image from "next/image";
import { site } from "@/content/site";

/** Profile portrait in a plain hairline frame. */
export function Portrait() {
  return (
    <div className="relative aspect-[4/5] w-full max-w-xs overflow-hidden rounded-lg border border-line bg-surface">
      <Image
        src={site.photo}
        alt={`${site.name}`}
        fill
        sizes="(max-width: 1024px) 100vw, 320px"
        className="object-cover"
        priority
      />
    </div>
  );
}
