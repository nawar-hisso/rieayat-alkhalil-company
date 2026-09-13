import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ExternalLink,
} from "lucide-react";
import type { Dictionary, Locale } from "@/content/types";
import { company } from "@/config/company";
import { simpleWhatsappUrl } from "@/lib/whatsapp";
import { SectionHeading } from "./SectionHeading";

export function Contact({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const weekdays = locale === "ar" ? company.hours.weekdaysAr : company.hours.weekdaysEn;
  const time = locale === "ar" ? company.hours.timeAr : company.hours.timeEn;
  const friday = locale === "ar" ? company.hours.fridayAr : company.hours.fridayEn;
  const region = locale === "ar" ? company.regionAr : `${company.city}, ${company.region}, ${company.country}`;

  return (
    <section id="contact" className="bg-pearl py-20 sm:py-28">
      <div className="container-brand">
        <SectionHeading
          eyebrow={dict.contact.eyebrow}
          heading={dict.contact.heading}
          body={dict.contact.body}
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <ContactCard
              icon={Phone}
              label={dict.contact.phonePrimaryLabel}
              value={company.phonePrimary}
              href={`tel:${company.phonePrimaryDial}`}
            />
            <ContactCard
              icon={Phone}
              label={dict.contact.phoneSecondaryLabel}
              value={company.phoneSecondary}
              href={`tel:${company.phoneSecondaryDial}`}
            />
            <ContactCard
              icon={Mail}
              label={dict.contact.emailLabel}
              value={company.email}
              href={`mailto:${company.email}`}
            />
            <ContactCard
              icon={MapPin}
              label={dict.contact.locationLabel}
              value={region}
              ltr={false}
            />

            <div className="rounded-2xl border border-border-warm bg-offwhite p-5 sm:col-span-2">
              <div className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 shrink-0 text-champagne-deep" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold tracking-wide text-champagne-deep">
                    {dict.contact.hoursLabel}
                  </p>
                  <p className="mt-1 text-sm text-charcoal">
                    {weekdays} · {time}
                  </p>
                  <p className="text-sm text-charcoal">{friday}</p>
                  <p className="mt-2 text-xs text-muted">{dict.contact.hoursConfirmNote}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-1 flex-col justify-between rounded-2xl border border-border-warm bg-champagne/10 p-6">
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-champagne text-white">
                  <MapPin size={20} aria-hidden="true" />
                </span>
                <p className="mt-4 text-sm font-semibold text-charcoal">
                  {company.mapReference}
                </p>
                <p className="mt-1 text-sm text-muted">{region}</p>
              </div>
              <Link
                href={company.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-champagne px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-champagne-deep"
              >
                {dict.contact.mapCta}
                <ExternalLink size={15} aria-hidden="true" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Link
                href={simpleWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl border border-border-warm bg-pearl px-4 py-4 text-sm font-semibold text-charcoal transition-colors hover:border-champagne-deep hover:text-champagne-deep"
              >
                <MessageCircle size={17} aria-hidden="true" />
                {dict.common.whatsapp}
              </Link>
              <Link
                href={company.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl border border-border-warm bg-pearl px-4 py-4 text-sm font-semibold text-charcoal transition-colors hover:border-champagne-deep hover:text-champagne-deep"
              >
                <ExternalLink size={17} aria-hidden="true" />
                Facebook
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  ltr = true,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
  ltr?: boolean;
}) {
  const content = (
    <>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-champagne/12 text-champagne-deep">
        <Icon size={17} aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-medium text-muted">{label}</span>
        <span
          className="block break-words text-sm font-semibold text-charcoal"
          dir={ltr ? "ltr" : undefined}
        >
          {value}
        </span>
      </span>
    </>
  );

  const className =
    "flex items-center gap-3 rounded-2xl border border-border-warm bg-offwhite p-4 transition-colors hover:border-champagne-deep";

  if (href) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }

  return <div className={className}>{content}</div>;
}
