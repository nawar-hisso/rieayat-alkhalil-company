import Link from "next/link";
import type { Dictionary, Locale } from "@/content/types";
import { Logo } from "./Logo";
import { LocaleSwitch } from "./LocaleSwitch";
import { MobileMenu } from "./MobileMenu";

export function Header({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const links = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}#about`, label: dict.nav.about },
    { href: `/${locale}#materials`, label: dict.nav.materials },
    { href: `/${locale}#sourcing`, label: dict.nav.sourcing },
    { href: `/${locale}#industries`, label: dict.nav.industries },
    { href: `/${locale}#contact`, label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border-warm bg-pearl/90 backdrop-blur-md">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[100] focus:rounded-md focus:bg-champagne focus:px-4 focus:py-2 focus:text-white"
      >
        {dict.nav.skipToContent}
      </a>
      <div className="container-brand flex h-18 items-center justify-between gap-4 py-2.5">
        <Logo locale={locale} />

        <nav
          className="hidden items-center gap-6 xl:flex xl:gap-7"
          aria-label={dict.nav.menu}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium whitespace-nowrap text-charcoal/80 transition-colors hover:text-champagne-deep"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <LocaleSwitch locale={locale} />
          <Link
            href={`/${locale}#quote`}
            className="rounded-full bg-champagne px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-champagne-deep"
          >
            {dict.nav.cta}
          </Link>
        </div>

        <MobileMenu dict={dict} locale={locale} />
      </div>
    </header>
  );
}
