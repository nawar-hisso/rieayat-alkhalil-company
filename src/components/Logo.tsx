import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/content/types";
import { company } from "@/config/company";

export function Logo({ locale, className = "" }: { locale: Locale; className?: string }) {
  return (
    <Link
      href={`/${locale}`}
      className={`flex items-center gap-2.5 shrink-0 ${className}`}
      aria-label={company.nameEn}
    >
      <Image
        src="/brand/alkhalil-logo-lockup.webp"
        alt={`${company.nameEn} — ${company.wordmark}`}
        width={140}
        height={119}
        priority
        className="h-11 w-auto sm:h-12"
      />
    </Link>
  );
}
