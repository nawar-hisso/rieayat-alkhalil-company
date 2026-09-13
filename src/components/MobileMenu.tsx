"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Home,
  Info,
  Package,
  Factory,
  Globe2,
  Phone,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import type { Dictionary, Locale } from "@/content/types";
import { LocaleSwitch } from "./LocaleSwitch";
import { FlowingLine } from "./decor/LineArt";

export function MobileMenu({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;

  const links = [
    { href: `/${locale}`, label: dict.nav.home, icon: Home },
    { href: `/${locale}#about`, label: dict.nav.about, icon: Info },
    { href: `/${locale}#materials`, label: dict.nav.materials, icon: Package },
    { href: `/${locale}#sourcing`, label: dict.nav.sourcing, icon: Globe2 },
    { href: `/${locale}#industries`, label: dict.nav.industries, icon: Factory },
    { href: `/${locale}#contact`, label: dict.nav.contact, icon: Phone },
  ];

  function close() {
    setOpen(false);
    triggerRef.current?.focus();
  }

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key !== "Tab") return;
      const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      );
      if (!focusable || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.documentElement.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="xl:hidden">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label={dict.nav.menu}
        aria-expanded={open}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-border-warm text-charcoal"
      >
        <Menu size={20} aria-hidden="true" />
      </button>

      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label={dict.nav.menu}
          className="fixed inset-0 z-[60] flex h-dvh flex-col bg-pearl"
          style={{ paddingTop: "env(safe-area-inset-top)" }}
        >
          {/* header */}
          <div className="container-brand flex shrink-0 items-center justify-between border-b border-border-warm py-3">
            <span className="font-display text-lg tracking-wide text-champagne-deep">
              {dict.nav.menu}
            </span>
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label={dict.nav.closeMenu}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border-warm text-charcoal transition-colors active:border-champagne-deep active:text-champagne-deep"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>

          {/* nav — the only scrollable region, so header and bottom actions stay put */}
          <nav
            className="container-brand flex min-h-0 flex-1 flex-col overflow-y-auto"
            aria-label={dict.nav.menu}
          >
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="flex min-h-[52px] items-center gap-3.5 border-b border-border-warm py-3 text-base font-medium text-charcoal transition-colors active:text-champagne-deep"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-champagne/10 text-champagne-deep">
                    <Icon size={16} aria-hidden="true" />
                  </span>
                  {link.label}
                </Link>
              );
            })}

            {/* fills any leftover height on taller screens with a brand motif instead of dead space */}
            <div aria-hidden="true" className="flex flex-1 items-center justify-center">
              <FlowingLine className="h-14 w-2/3 text-champagne opacity-[0.12]" />
            </div>
          </nav>

          {/* bottom actions — always visible, never pushed off-screen */}
          <div
            className="container-brand shrink-0 border-t border-border-warm pt-4"
            style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 1rem)" }}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
                {dict.nav.language}
              </span>
              <LocaleSwitch locale={locale} />
            </div>
            <Link
              href={`/${locale}#quote`}
              onClick={close}
              className="mt-3 flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-champagne px-6 text-sm font-semibold text-white transition-colors active:bg-champagne-deep"
            >
              {dict.nav.cta}
              <Arrow size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
