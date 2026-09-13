import { Plus } from "lucide-react";
import type { Dictionary } from "@/content/types";
import { SectionHeading } from "./SectionHeading";

export function Faq({ dict }: { dict: Dictionary }) {
  return (
    <section id="faq" className="bg-offwhite py-20 sm:py-28">
      <div className="container-brand">
        <SectionHeading eyebrow={dict.faq.eyebrow} heading={dict.faq.heading} align="center" />

        <div className="mx-auto mt-10 max-w-2xl divide-y divide-border-warm rounded-2xl border border-border-warm bg-pearl">
          {dict.faq.items.map((item) => (
            <details key={item.question} className="group p-5 sm:p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-start text-sm font-semibold text-charcoal marker:content-none">
                {item.question}
                <Plus
                  size={18}
                  className="shrink-0 text-champagne-deep transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
