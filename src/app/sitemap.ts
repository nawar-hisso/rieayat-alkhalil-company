import type { MetadataRoute } from "next";
import { siteUrl } from "@/config/company";
import { locales } from "@/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified,
    changeFrequency: "monthly",
    priority: locale === "ar" ? 1 : 0.9,
    alternates: {
      languages: {
        ar: `${siteUrl}/ar`,
        en: `${siteUrl}/en`,
      },
    },
  }));
}
