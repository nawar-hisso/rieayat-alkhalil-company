import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";
import type { Dictionary, Locale } from "@/content/types";
import { FlowingLine, PelletMotif } from "./decor/LineArt";

export function Hero({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <section
      id="hero"
      className="brand-surface relative overflow-hidden border-b border-border-warm"
    >
      <FlowingLine className="pointer-events-none absolute inset-x-0 top-10 h-[280px] w-full text-champagne opacity-[0.07] sm:h-[380px]" />

      <div className="container-brand relative grid grid-cols-1 gap-12 py-20 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-champagne-deep">
            {dict.hero.eyebrow}
          </p>
          <h1 className="font-display mt-5 text-4xl leading-[1.15] text-charcoal sm:text-5xl lg:text-[3.4rem]">
            {dict.hero.heading[0]}
            <br />
            {dict.hero.heading[1]}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {dict.hero.body}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href={`/${locale}#quote`}
              className="inline-flex items-center gap-2 rounded-full bg-champagne px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-champagne-deep"
            >
              {dict.hero.ctaPrimary}
              <Arrow size={16} aria-hidden="true" />
            </Link>
            <Link
              href={`/${locale}#contact`}
              className="inline-flex items-center gap-2 rounded-full border border-champagne-deep/40 px-7 py-3.5 text-sm font-semibold text-charcoal transition-colors hover:border-champagne-deep hover:text-champagne-deep"
            >
              {dict.hero.ctaSecondary}
            </Link>
          </div>

          <p className="mt-8 text-sm font-medium text-muted">
            {dict.hero.sourcingLine}
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="relative rounded-[2rem] border border-border-warm bg-pearl/70 p-8 shadow-[0_30px_60px_-30px_rgba(139,109,66,0.35)] sm:p-10">
            <Image
              src="/brand/alkhalil-logo-lockup.webp"
              alt="ALKHALIL COMPANY"
              width={900}
              height={763}
              priority
              className="w-full"
            />
            <PelletMotif className="absolute -bottom-6 -start-6 h-16 w-32 text-champagne opacity-70" />
          </div>
          <div
            aria-hidden="true"
            className="absolute -end-6 -top-6 h-24 w-24 rounded-full bg-champagne-light/40 blur-2xl"
          />
        </div>
      </div>
    </section>
  );
}
