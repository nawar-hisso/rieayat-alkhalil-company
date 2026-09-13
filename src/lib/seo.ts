import { siteUrl } from "@/config/company";
import type { Locale } from "@/content/types";

export function localePath(locale: Locale) {
  return `${siteUrl}/${locale}`;
}

export function alternates(locale: Locale) {
  return {
    canonical: localePath(locale),
    languages: {
      ar: localePath("ar"),
      en: localePath("en"),
      "x-default": localePath("ar"),
    },
  };
}
