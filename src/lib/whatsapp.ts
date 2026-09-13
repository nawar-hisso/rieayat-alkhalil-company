import { company } from "@/config/company";
import type { Dictionary } from "@/content/types";

export interface QuoteFormValues {
  name: string;
  companyName: string;
  phone: string;
  material: string;
  grade: string;
  quantity: string;
  origin: string;
  message: string;
}

function line(label: string, value: string) {
  return value.trim() ? `${label} ${value.trim()}` : `${label} —`;
}

export function buildWhatsappMessage(dict: Dictionary, values: QuoteFormValues) {
  const t = dict.quoteForm.whatsappTemplate;
  const originLabel =
    dict.quoteForm.originOptions.find((o) => o.value === values.origin)?.label ?? "";

  return [
    t.greeting,
    t.intro,
    "",
    line(t.nameLabel, values.name),
    line(t.companyLabel, values.companyName),
    line(t.phoneLabel, values.phone),
    line(t.materialLabel, values.material),
    line(t.gradeLabel, values.grade),
    line(t.quantityLabel, values.quantity),
    line(t.originLabel, originLabel),
    line(t.messageLabel, values.message),
  ].join("\n");
}

export function buildWhatsappUrl(dict: Dictionary, values: QuoteFormValues) {
  const message = buildWhatsappMessage(dict, values);
  return `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function simpleWhatsappUrl() {
  return `https://wa.me/${company.whatsappNumber}`;
}
