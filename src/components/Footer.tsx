import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import type { Dictionary, Locale } from "@/content/types";
import { company } from "@/config/company";
import { LocaleSwitch } from "./LocaleSwitch";

export function Footer({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const region = locale === "ar" ? company.regionAr : `${company.city}, ${company.region}, ${company.country}`;

  const links = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}#about`, label: dict.nav.about },
    { href: `/${locale}#materials`, label: dict.nav.materials },
    { href: `/${locale}#sourcing`, label: dict.nav.sourcing },
    { href: `/${locale}#industries`, label: dict.nav.industries },
    { href: `/${locale}#contact`, label: dict.nav.contact },
  ];

  return (
    <footer className="border-t border-border-warm bg-pearl-2">
      <div className="container-brand grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/brand/alkhalil-logo-lockup.webp"
            alt={company.nameEn}
            width={900}
            height={763}
            className="h-10 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            {dict.footer.tagline}
          </p>
          <div className="mt-4">
            <LocaleSwitch locale={locale} />
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-[0.14em] text-champagne-deep">
            {dict.footer.navTitle}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-charcoal/80 hover:text-champagne-deep">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-[0.14em] text-champagne-deep">
            {dict.footer.contactTitle}
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-charcoal/80">
            <li>
              <Link href={`tel:${company.phonePrimaryDial}`} className="hover:text-champagne-deep" dir="ltr">
                <span className="inline-flex items-center gap-2">
                  <Phone size={14} aria-hidden="true" /> {company.phonePrimary}
                </span>
              </Link>
            </li>
            <li>
              <Link href={`mailto:${company.email}`} className="hover:text-champagne-deep" dir="ltr">
                <span className="inline-flex items-center gap-2">
                  <Mail size={14} aria-hidden="true" /> {company.email}
                </span>
              </Link>
            </li>
            <li className="inline-flex items-start gap-2">
              <MapPin size={14} className="mt-0.5" aria-hidden="true" />
              <span>{region}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-[0.14em] text-champagne-deep">
            {dict.footer.followTitle}
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-charcoal/80">
            <li>
              <Link
                href={company.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-champagne-deep"
              >
                <ExternalLink size={14} aria-hidden="true" /> Facebook
              </Link>
            </li>
            <li>
              <Link
                href={company.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-champagne-deep"
              >
                <MapPin size={14} aria-hidden="true" /> {dict.common.openInMaps}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border-warm">
        <div className="container-brand flex flex-col items-center justify-between gap-2 py-5 text-xs text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {company.nameEn} · {dict.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
