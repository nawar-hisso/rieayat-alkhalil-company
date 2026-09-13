/**
 * Central company facts. Edit phone numbers, email, hours and links here —
 * every page and structured-data block reads from this single file.
 */

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";
// NEXT_PUBLIC_SITE_URL is set in the Netlify site's environment variables to the
// production domain — the localhost fallback only ever applies to local `next dev`.

export const company = {
  nameAr: "شركة رعاية الخليل",
  nameEn: "Rieayat Alkhalil Company",
  nameEnPublic: "Rieayat Alkhalil Company Erbil",
  wordmark: "ALKHALIL COMPANY",

  descriptionAr:
    "شركة رعاية الخليل مورّد ومستورد للمواد الأولية البلاستيكية (خامات وحبيبات البلاستيك) في أربيل، العراق.",
  descriptionEn:
    "Rieayat Alkhalil Company is a plastic raw materials importer and supplier, sourcing plastic resins and polymers for industrial buyers in Erbil, Iraq.",

  city: "Erbil",
  cityAr: "أربيل",
  region: "Erbil Governorate",
  regionAr: "أربيل، العراق",
  country: "Iraq",
  countryCode: "IQ",
  mapReference: "5XW7+GHP, Erbil, Erbil Governorate, Iraq",

  phonePrimary: "+964 750 500 0335",
  phonePrimaryDial: "+9647505000335",
  phoneSecondary: "+964 750 488 8836",
  phoneSecondaryDial: "+9647504888836",

  email: "alkhalilerbil@gmail.com",

  whatsappNumber: "9647505000335", // digits only, used for wa.me links — change here if it moves

  facebookUrl:
    "https://www.facebook.com/people/Rieayat-Alkhalil-Company-Erbil/100083525254385/",
  googleMapsUrl: "https://maps.app.goo.gl/CW4PprFEVnpu5nXb7?g_st=iwb",

  sourcingCountries: [
    { en: "Iran", ar: "إيران" },
    { en: "Saudi Arabia", ar: "السعودية" },
    { en: "Turkey", ar: "تركيا" },
    { en: "China", ar: "الصين" },
  ],

  hours: {
    weekdaysEn: "Saturday–Thursday",
    weekdaysAr: "السبت – الخميس",
    timeEn: "10:20 AM–6:00 PM",
    timeAr: "10:20 صباحاً – 6:00 مساءً",
    fridayEn: "Friday: Closed",
    fridayAr: "الجمعة: مغلق",
    // Raw values for structured data (openingHoursSpecification) — keep in sync
    // with the display strings above if hours ever change.
    opens: "10:20",
    closes: "18:00",
    openDays: [
      "Saturday",
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
    ] as const,
  },
} as const;

export type SourcingCountry = (typeof company.sourcingCountries)[number];
