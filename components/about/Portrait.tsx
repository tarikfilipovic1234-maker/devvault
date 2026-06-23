import Image from "next/image";
import { site } from "@/content/site";

/** Profile portrait in a glass frame with an accent ring. */
export function Portrait() {
  return (
    <div className="ring-gradient relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-3xl">
      <Image
        src={site.photo}
        alt={`${site.name} — portrait`}
        fill
        sizes="(max-width: 1024px) 320px, 360px"
        className="object-cover"
        priority
      />
    </div>
  );
}
