import type { MetadataRoute } from "next";
import { siteUrl } from "@/config/company";
import { locales } from "@/content";

export default function sitemap(): MetadataRoute.Sitemap {
  // No CMS/build timestamp reliably reflects a genuine content change, so
  // lastModified is intentionally omitted rather than stamped with the
  // build time (which would falsely signal the page changed on every deploy).
  return locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    changeFrequency: "monthly",
    priority: locale === "ar" ? 1 : 0.9,
    alternates: {
      languages: {
        ar: `${siteUrl}/ar`,
        en: `${siteUrl}/en`,
        "x-default": `${siteUrl}/ar`,
      },
    },
  }));
}
