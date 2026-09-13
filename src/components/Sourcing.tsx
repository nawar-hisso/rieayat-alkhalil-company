import { MapPin } from "lucide-react";
import type { Dictionary, Locale } from "@/content/types";
import { company } from "@/config/company";
import { SectionHeading } from "./SectionHeading";

export function Sourcing({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <section id="sourcing" className="brand-surface relative overflow-hidden py-20 sm:py-28">
      <div className="container-brand">
        <SectionHeading
          eyebrow={dict.sourcing.eyebrow}
          heading={dict.sourcing.heading}
          body={dict.sourcing.body}
        />

        <div className="mt-14 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-0">
          {company.sourcingCountries.map((country, i) => (
            <div key={country.en} className="relative flex flex-1 items-center">
              <div className="flex w-full flex-col items-center gap-3 rounded-2xl border border-border-warm bg-pearl px-4 py-6 text-center sm:rounded-none sm:border-0 sm:bg-transparent sm:px-2">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-champagne bg-pearl font-display text-lg text-champagne-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-semibold text-charcoal">
                  {locale === "ar" ? country.ar : country.en}
                </span>
              </div>
              {i < company.sourcingCountries.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden h-px flex-1 border-t border-dashed border-champagne-deep/40 sm:block"
                />
              )}
            </div>
          ))}

          <div className="mt-3 flex flex-1 items-center gap-0 sm:mt-0">
            <div
              aria-hidden="true"
              className="hidden h-px flex-1 border-t border-dashed border-champagne-deep/40 sm:block"
            />
            <div className="flex w-full flex-col items-center gap-3 rounded-2xl border border-champagne bg-champagne/10 px-4 py-6 text-center sm:w-auto sm:rounded-2xl">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-champagne text-white">
                <MapPin size={22} aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold text-champagne-deep">
                {locale === "ar" ? company.cityAr : company.city}
              </span>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-muted">{dict.sourcing.note}</p>
      </div>
    </section>
  );
}
