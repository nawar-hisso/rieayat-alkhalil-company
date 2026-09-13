"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import type { Dictionary, Locale } from "@/content/types";
import { LocaleSwitch } from "./LocaleSwitch";

export function MobileMenu({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const [open, setOpen] = useState(false);

  const links = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}#about`, label: dict.nav.about },
    { href: `/${locale}#materials`, label: dict.nav.materials },
    { href: `/${locale}#industries`, label: dict.nav.industries },
    { href: `/${locale}#sourcing`, label: dict.nav.sourcing },
    { href: `/${locale}#contact`, label: dict.nav.contact },
  ];

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={dict.nav.menu}
        aria-expanded={open}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-border-warm text-charcoal"
      >
        <Menu size={20} aria-hidden="true" />
      </button>

      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-pearl">
          <div className="container-brand flex items-center justify-between py-5">
            <span className="font-display text-lg text-champagne-deep">
              {dict.nav.menu}
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={dict.nav.closeMenu}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border-warm text-charcoal"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>

          <nav className="container-brand flex flex-1 flex-col gap-1 py-4" aria-label={dict.nav.menu}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border-warm py-4 text-lg text-charcoal"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="container-brand flex flex-col gap-4 border-t border-border-warm py-6">
            <LocaleSwitch locale={locale} />
            <Link
              href={`/${locale}#quote`}
              onClick={() => setOpen(false)}
              className="rounded-full bg-champagne px-6 py-3 text-center font-medium text-white"
            >
              {dict.nav.cta}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
