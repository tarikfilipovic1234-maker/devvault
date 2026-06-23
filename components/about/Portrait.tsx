import Image from "next/image";
import { site } from "@/content/site";

/**
 * Profile portrait in a glass frame with an accent ring. Renders the real photo
 * when present; until then shows a designed monogram placeholder so the page
 * never has a broken image. Set NEXT_PUBLIC_HAS_PHOTO=1 once /public/tarik.jpg
 * exists.
 */
const HAS_PHOTO = process.env.NEXT_PUBLIC_HAS_PHOTO === "1";

export function Portrait() {
  return (
    <div className="ring-gradient relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-3xl">
      {HAS_PHOTO ? (
        <Image
          src={site.photo}
          alt={`${site.name} — portrait`}
          fill
          sizes="(max-width: 1024px) 320px, 360px"
          className="object-cover"
          priority
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-navy">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/25 via-transparent to-violet/25" />
          <span className="font-display text-7xl font-bold text-white/85 text-glow">
            TF
          </span>
        </div>
      )}
    </div>
  );
}
