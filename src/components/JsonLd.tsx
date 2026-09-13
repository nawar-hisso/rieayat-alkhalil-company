import { company, siteUrl } from "@/config/company";
import type { Dictionary, Locale } from "@/content/types";

export function OrganizationJsonLd({ locale }: { locale: Locale }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/${locale}#organization`,
    name: company.nameEn,
    alternateName: company.nameAr,
    description: company.descriptionEn,
    url: `${siteUrl}/${locale}`,
    telephone: company.phonePrimaryDial,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: company.city,
      addressRegion: company.region,
      addressCountry: company.countryCode,
    },
    sameAs: [company.facebookUrl],
    hasMap: company.googleMapsUrl,
    knowsLanguage: ["Arabic", "English"],
    image: `${siteUrl}/brand/alkhalil-logo-lockup.webp`,
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
