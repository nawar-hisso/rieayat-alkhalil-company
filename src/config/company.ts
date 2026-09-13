/**
 * Central company facts. Edit phone numbers, email, hours and links here —
 * every page and structured-data block reads from this single file.
 */

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://example.com";
// NOTE: replace NEXT_PUBLIC_SITE_URL with the real production domain before launch.

export const company = {
  nameAr: "شركة رعاية الخليل",
  nameEn: "Rieayat Alkhalil Company",
  nameEnPublic: "Rieayat Alkhalil Company Erbil",
  wordmark: "ALKHALIL COMPANY",

  descriptionAr: "استيراد وبيع مواد أولية بلاستيكية",
  descriptionEn: "Plastic raw materials importing and supply company based in Erbil, Iraq.",

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
  },
} as const;

export type SourcingCountry = (typeof company.sourcingCountries)[number];
