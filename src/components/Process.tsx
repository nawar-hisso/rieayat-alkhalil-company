import type { Dictionary } from "@/content/types";
import { SectionHeading } from "./SectionHeading";

export function Process({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-pearl py-20 sm:py-28">
      <div className="container-brand">
        <SectionHeading
          eyebrow={dict.process.eyebrow}
          heading={dict.process.heading}
          body={dict.process.body}
        />

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {dict.process.steps.map((step, i) => (
            <div key={step.number} className="relative">
              <span className="font-display text-5xl text-champagne-light">
                {step.number}
              </span>
              <h3 className="mt-3 text-lg font-bold text-charcoal">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
              {i < dict.process.steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="brand-divider mt-6 hidden sm:block"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
