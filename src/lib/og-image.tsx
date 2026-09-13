import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import type { Locale } from "@/content/types";
import { company } from "@/config/company";

export const OG_SIZE = { width: 1200, height: 630 };

const assetsDir = join(process.cwd(), "src", "assets");

let cachedFonts: Promise<
  { name: string; data: ArrayBuffer; weight: 500 | 700; style: "normal" }[]
> | null = null;

function loadFonts() {
  if (!cachedFonts) {
    cachedFonts = Promise.all([
      readFile(join(assetsDir, "og-fonts", "CormorantGaramond-Bold.woff")),
      readFile(join(assetsDir, "og-fonts", "Manrope-Bold.woff")),
      readFile(join(assetsDir, "og-fonts", "Manrope-Medium.woff")),
      readFile(join(assetsDir, "og-fonts", "IBMPlexSansArabic-Bold.woff")),
      readFile(join(assetsDir, "og-fonts", "IBMPlexSansArabic-Medium.woff")),
    ]).then(
      ([cormorantBold, manropeBold, manropeMedium, plexArabicBold, plexArabicMedium]) => [
        { name: "Heading Latin", data: cormorantBold.buffer as ArrayBuffer, weight: 700 as const, style: "normal" as const },
        { name: "Body Latin", data: manropeBold.buffer as ArrayBuffer, weight: 700 as const, style: "normal" as const },
        { name: "Body Latin", data: manropeMedium.buffer as ArrayBuffer, weight: 500 as const, style: "normal" as const },
        { name: "Heading Arabic", data: plexArabicBold.buffer as ArrayBuffer, weight: 700 as const, style: "normal" as const },
        { name: "Body Arabic", data: plexArabicMedium.buffer as ArrayBuffer, weight: 500 as const, style: "normal" as const },
      ]
    );
  }
  return cachedFonts;
}

let cachedLogo: Promise<string> | null = null;

function loadLogo() {
  if (!cachedLogo) {
    cachedLogo = readFile(join(assetsDir, "og-images", "alkhalil-logo-full.png")).then(
      (buf) => `data:image/png;base64,${buf.toString("base64")}`
    );
  }
  return cachedLogo;
}

const copy = {
  ar: {
    heading: company.nameAr,
    tagline: "مواد أولية بلاستيكية",
    place: "أربيل، العراق",
    domain: "rieayat-alkhalil-company.netlify.app",
    headingFont: "Heading Arabic",
    bodyFont: "Body Arabic",
    dir: "rtl" as const,
  },
  en: {
    heading: company.nameEn,
    tagline: "Plastic Raw Materials",
    place: "Erbil, Iraq",
    domain: "rieayat-alkhalil-company.netlify.app",
    headingFont: "Heading Latin",
    bodyFont: "Body Latin",
    dir: "ltr" as const,
  },
};

export async function renderOgImage(locale: Locale) {
  const [fonts, logoSrc] = await Promise.all([loadFonts(), loadLogo()]);
  const c = copy[locale];
  const isRtl = c.dir === "rtl";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "linear-gradient(180deg, #f8f6f2 0%, #f1efe9 100%)",
          fontFamily: c.bodyFont,
        }}
      >
        {/* decorative glows */}
        <div
          style={{
            position: "absolute",
            width: 520,
            height: 520,
            borderRadius: 9999,
            background: "#ddc9a3",
            opacity: 0.28,
            top: -220,
            [isRtl ? "left" : "right"]: -160,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 360,
            height: 360,
            borderRadius: 9999,
            background: "#b08d5c",
            opacity: 0.12,
            bottom: -180,
            [isRtl ? "right" : "left"]: -120,
            display: "flex",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: isRtl ? "row-reverse" : "row",
            alignItems: "center",
            width: "100%",
            height: "100%",
            padding: "0 88px",
            gap: 64,
          }}
        >
          {/* logo card */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 240,
              height: 240,
              flexShrink: 0,
              borderRadius: 32,
              background: "#ffffff",
              boxShadow: "0 18px 48px rgba(138,109,66,0.22)",
              border: "1px solid rgba(139,109,66,0.18)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- next/image cannot run inside next/og's ImageResponse renderer */}
            <img src={logoSrc} alt="" width={196} height={196} style={{ borderRadius: 20 }} />
          </div>

          {/* text block */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: isRtl ? "flex-end" : "flex-start",
              textAlign: isRtl ? "right" : "left",
              flex: 1,
            }}
          >
            <div
              style={{
                fontFamily: c.headingFont,
                fontSize: 62,
                fontWeight: 700,
                color: "#262420",
                lineHeight: 1.15,
                display: "flex",
              }}
            >
              {c.heading}
            </div>
            <div
              style={{
                marginTop: 22,
                fontFamily: c.bodyFont,
                fontSize: 34,
                fontWeight: 500,
                color: "#8a6d42",
                display: "flex",
              }}
            >
              {c.tagline}
            </div>
            <div
              style={{
                marginTop: 14,
                display: "flex",
                flexDirection: isRtl ? "row-reverse" : "row",
                alignItems: "center",
                gap: 14,
                fontFamily: c.bodyFont,
                fontSize: 28,
                fontWeight: 500,
                color: "#6f6a62",
              }}
            >
              <div style={{ width: 34, height: 2, background: "#b08d5c", display: "flex" }} />
              <div style={{ display: "flex" }}>{c.place}</div>
            </div>
          </div>
        </div>

        {/* footer domain strip */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            [isRtl ? "right" : "left"]: 88,
            display: "flex",
            fontFamily: "Body Latin",
            fontSize: 22,
            fontWeight: 500,
            color: "#6f6a62",
            letterSpacing: 1,
          }}
        >
          {c.domain}
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts,
    }
  );
}
