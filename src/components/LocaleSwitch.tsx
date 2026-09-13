import Link from "next/link";
import type { Locale } from "@/content/types";

export function LocaleSwitch({
  locale,
  className = "",
}: {
  locale: Locale;
  className?: string;
}) {
  const items: { code: Locale; label: string }[] = [
    { code: "ar", label: "AR" },
    { code: "en", label: "EN" },
  ];

  return (
    <div
      className={`inline-flex items-center gap-0.5 rounded-full border border-border-warm bg-pearl-2/60 p-0.5 text-xs font-medium tracking-wide ${className}`}
      role="group"
      aria-label="Language"
    >
      {items.map((item) => {
        const active = item.code === locale;
        return (
          <Link
            key={item.code}
            href={`/${item.code}`}
            hrefLang={item.code}
            aria-current={active ? "true" : undefined}
            className={`rounded-full px-2.5 py-1 transition-colors ${
              active
                ? "bg-champagne text-white"
                : "text-charcoal/70 hover:text-charcoal"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
