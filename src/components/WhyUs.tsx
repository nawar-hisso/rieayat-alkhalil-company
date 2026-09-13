import { Globe2, Briefcase, ClipboardList, MapPinned } from "lucide-react";
import type { Dictionary } from "@/content/types";
import { SectionHeading } from "./SectionHeading";

const icons = [Globe2, Briefcase, ClipboardList, MapPinned];

export function WhyUs({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-offwhite py-20 sm:py-28">
      <div className="container-brand">
        <SectionHeading eyebrow={dict.why.eyebrow} heading={dict.why.heading} />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.why.items.map((item, i) => {
            const Icon = icons[i] ?? Globe2;
            return (
              <div key={item.title} className="rounded-2xl border border-border-warm bg-pearl p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-champagne text-white">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-sm font-bold tracking-wide text-charcoal">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
