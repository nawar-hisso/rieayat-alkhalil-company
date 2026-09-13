import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import {
  Cormorant_Garamond,
  Manrope,
  Noto_Kufi_Arabic,
  IBM_Plex_Sans_Arabic,
} from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { locales, isLocale, getDictionary } from "@/content";
import { alternates } from "@/lib/seo";
import { siteUrl, company } from "@/config/company";
import { OrganizationJsonLd } from "@/components/JsonLd";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyMobileActions } from "@/components/StickyMobileActions";

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const notoKufiArabic = Noto_Kufi_Arabic({
  variable: "--font-heading",
  weight: ["500", "600", "700"],
  subsets: ["arabic"],
  display: "swap",
});

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  subsets: ["arabic"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: "#f8f6f2",
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);

  return {
    metadataBase: new URL(siteUrl),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: alternates(locale),
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `${siteUrl}/${locale}`,
      siteName: company.nameEn,
      locale: locale === "ar" ? "ar_IQ" : "en_US",
      alternateLocale: locale === "ar" ? "en_US" : "ar_IQ",
      type: "website",
      images: [
        {
          url: "/brand/og-default.webp",
          width: 1200,
          height: 630,
          alt: company.nameEn,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: ["/brand/og-default.webp"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  const fontVars =
    locale === "ar"
      ? `${notoKufiArabic.variable} ${ibmPlexSansArabic.variable}`
      : `${cormorant.variable} ${manrope.variable}`;

  return (
    <html lang={dict.htmlLang} dir={dict.dir} className={`${fontVars} h-full antialiased`}>
      <body className="flex min-h-full flex-col pb-16 md:pb-0">
        <OrganizationJsonLd locale={locale} />
        <Header dict={dict} locale={locale} />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer dict={dict} locale={locale} />
        <StickyMobileActions dict={dict} />
      </body>
    </html>
  );
}
