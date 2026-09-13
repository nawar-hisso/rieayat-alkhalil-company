"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import type { Dictionary, Locale } from "@/content/types";
import { LocaleSwitch } from "./LocaleSwitch";

export function MobileMenu({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const links = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}#about`, label: dict.nav.about },
    { href: `/${locale}#materials`, label: dict.nav.materials },
    { href: `/${locale}#industries`, label: dict.nav.industries },
    { href: `/${locale}#sourcing`, label: dict.nav.sourcing },
    { href: `/${locale}#contact`, label: dict.nav.contact },
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
          style={{ paddingTop: "env(safe-area-inset-top)", paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          <div className="container-brand flex items-center justify-between py-5">
            <span className="font-display text-lg text-champagne-deep">
              {dict.nav.menu}
            </span>
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label={dict.nav.closeMenu}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border-warm text-charcoal"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>

          <nav
            className="container-brand flex flex-1 flex-col gap-1 overflow-y-auto py-4"
            aria-label={dict.nav.menu}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
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
              onClick={close}
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
