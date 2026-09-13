import { Info } from "lucide-react";
import type { Dictionary } from "@/content/types";
import { SectionHeading } from "./SectionHeading";

export function Materials({ dict }: { dict: Dictionary }) {
  return (
    <section id="materials" className="bg-offwhite py-20 sm:py-28">
      <div className="container-brand">
        <SectionHeading eyebrow={dict.materials.eyebrow} heading={dict.materials.heading} />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {dict.materials.items.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-border-warm bg-pearl p-6 transition-shadow hover:shadow-[0_20px_40px_-28px_rgba(139,109,66,0.4)]"
            >
              <h3 className="font-display text-xl text-charcoal">{item.title}</h3>
              {item.tags && (
                <p className="mt-1.5 text-xs font-medium tracking-wide text-champagne-deep">
                  {item.tags}
                </p>
              )}
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-border-warm bg-champagne-light/25 p-5">
          <Info size={18} className="mt-0.5 shrink-0 text-champagne-deep" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-charcoal/80">{dict.materials.disclaimer}</p>
        </div>
      </div>
    </section>
  );
}
