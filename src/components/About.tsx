import Image from "next/image";
import type { Dictionary } from "@/content/types";
import { CornerFlourish } from "./decor/LineArt";

export function About({ dict }: { dict: Dictionary }) {
  return (
    <section id="about" className="relative overflow-hidden bg-pearl py-20 sm:py-28">
      <CornerFlourish className="pointer-events-none absolute -top-6 start-0 h-40 w-40 text-champagne opacity-[0.08]" />

      <div className="container-brand grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="relative mx-auto w-full max-w-sm lg:mx-0">
          <div className="overflow-hidden rounded-[1.75rem] border border-border-warm">
            <Image
              src="/brand/alkhalil-logo-full.webp"
              alt=""
              width={640}
              height={640}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -end-5 rounded-2xl border border-border-warm bg-pearl px-5 py-4 shadow-sm">
            <p className="font-display text-2xl text-champagne-deep">IQ</p>
            <p className="text-xs text-muted">Erbil, Iraq</p>
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-champagne-deep">
            {dict.about.eyebrow}
          </p>
          <h2 className="font-display text-3xl leading-tight text-charcoal sm:text-4xl">
            {dict.about.heading}
          </h2>
          <div className="mt-5 space-y-4">
            {dict.about.paragraphs.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
