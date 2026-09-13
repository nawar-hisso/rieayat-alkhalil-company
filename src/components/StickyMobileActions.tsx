import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import type { Dictionary } from "@/content/types";
import { company } from "@/config/company";
import { simpleWhatsappUrl } from "@/lib/whatsapp";

export function StickyMobileActions({ dict }: { dict: Dictionary }) {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex border-t border-border-warm bg-pearl/95 backdrop-blur-md xl:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <Link
        href={simpleWhatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-[44px] flex-1 items-center justify-center gap-2 border-e border-border-warm py-3.5 text-sm font-semibold text-charcoal"
      >
        <MessageCircle size={17} className="text-champagne-deep" aria-hidden="true" />
        {dict.common.whatsapp}
      </Link>
      <Link
        href={`tel:${company.phonePrimaryDial}`}
        className="flex min-h-[44px] flex-1 items-center justify-center gap-2 py-3.5 text-sm font-semibold text-charcoal"
      >
        <Phone size={17} className="text-champagne-deep" aria-hidden="true" />
        {dict.common.call}
      </Link>
    </div>
  );
}
