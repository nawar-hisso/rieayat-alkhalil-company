import {
  PackageOpen,
  Cog,
  PocketKnife,
  Container,
  Handshake,
  Factory,
} from "lucide-react";
import type { Dictionary } from "@/content/types";
import { SectionHeading } from "./SectionHeading";

const icons = [PackageOpen, Cog, PocketKnife, Container, Handshake, Factory];

export function Industries({ dict }: { dict: Dictionary }) {
  return (
    <section id="industries" className="bg-pearl py-20 sm:py-28">
      <div className="container-brand">
        <SectionHeading
          eyebrow={dict.industries.eyebrow}
          heading={dict.industries.heading}
          body={dict.industries.body}
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dict.industries.items.map((item, i) => {
            const Icon = icons[i] ?? Factory;
            return (
              <div
                key={item.title}
                className="flex items-center gap-4 rounded-2xl border border-border-warm bg-offwhite px-5 py-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-champagne/12 text-champagne-deep">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-charcoal">{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
