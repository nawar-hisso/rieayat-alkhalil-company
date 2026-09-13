import { isLocale } from "@/content";
import { renderOgImage, OG_SIZE } from "@/lib/og-image";

export const contentType = "image/png";

export function generateImageMetadata({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? params.locale : "ar";
  const alt =
    locale === "ar"
      ? "شركة رعاية الخليل — مواد أولية بلاستيكية في أربيل، العراق"
      : "Rieayat Alkhalil Company — Plastic Raw Materials in Erbil, Iraq";

  return [{ id: locale, alt, size: OG_SIZE, contentType }];
}

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return renderOgImage(isLocale(locale) ? locale : "ar");
}
