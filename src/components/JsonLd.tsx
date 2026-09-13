import { company, siteUrl } from "@/config/company";
import type { Dictionary, Locale } from "@/content/types";

const ORGANIZATION_ID = `${siteUrl}/#organization`;
const WEBSITE_ID = `${siteUrl}/#website`;

/**
 * One entity graph shared by every locale: a stable Organization/LocalBusiness
 * and WebSite (same @id regardless of /ar or /en, since it's the same company
 * and the same site), plus a per-locale WebPage referencing both.
 */
export function EntityGraphJsonLd({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pageUrl = `${siteUrl}/${locale}`;

  const organization = {
    "@type": "LocalBusiness",
    "@id": ORGANIZATION_ID,
    name: company.nameEn,
    alternateName: company.nameAr,
    description: locale === "ar" ? company.descriptionAr : company.descriptionEn,
    url: siteUrl,
    logo: `${siteUrl}/brand/alkhalil-logo-lockup.webp`,
    image: `${siteUrl}/brand/alkhalil-logo-lockup.webp`,
    telephone: company.phonePrimaryDial,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: company.city,
      addressRegion: company.region,
      addressCountry: company.countryCode,
    },
    areaServed: [
      { "@type": "City", name: "Erbil" },
      { "@type": "Country", name: "Iraq" },
    ],
    sameAs: [company.facebookUrl],
    hasMap: company.googleMapsUrl,
    knowsLanguage: ["Arabic", "English"],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: company.hours.openDays.map((day) => `https://schema.org/${day}`),
      opens: company.hours.opens,
      closes: company.hours.closes,
    },
  };

  const website = {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: siteUrl,
    name: company.nameEn,
    alternateName: company.nameAr,
    inLanguage: ["ar", "en"],
    publisher: { "@id": ORGANIZATION_ID },
  };

  const webPage = {
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: dict.meta.title,
    description: dict.meta.description,
    inLanguage: dict.htmlLang,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORGANIZATION_ID },
  };

  const data = {
    "@context": "https://schema.org",
    "@graph": [organization, website, webPage],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FaqJsonLd({ dict }: { dict: Dictionary }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dict.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
