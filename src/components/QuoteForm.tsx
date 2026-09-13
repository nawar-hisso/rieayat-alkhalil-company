"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { MessageCircle } from "lucide-react";
import type { Dictionary } from "@/content/types";
import { buildWhatsappUrl, type QuoteFormValues } from "@/lib/whatsapp";
import { SectionHeading } from "./SectionHeading";

const initialValues: QuoteFormValues = {
  name: "",
  companyName: "",
  phone: "",
  material: "",
  grade: "",
  quantity: "",
  origin: "no_preference",
  message: "",
};

export function QuoteForm({ dict }: { dict: Dictionary }) {
  const [values, setValues] = useState<QuoteFormValues>(initialValues);
  const f = dict.quoteForm.fields;
  const p = dict.quoteForm.placeholders;

  function update<K extends keyof QuoteFormValues>(key: K, value: QuoteFormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const url = buildWhatsappUrl(dict, values);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="quote" className="bg-offwhite py-20 sm:py-28">
      <div className="container-brand">
        <SectionHeading
          eyebrow={dict.quoteForm.eyebrow}
          heading={dict.quoteForm.heading}
          body={dict.quoteForm.body}
        />

        <form
          onSubmit={handleSubmit}
          className="mt-10 grid grid-cols-1 gap-5 rounded-3xl border border-border-warm bg-pearl p-6 sm:grid-cols-2 sm:p-8"
        >
          <Field label={f.name} htmlFor="q-name">
            <input
              id="q-name"
              required
              value={values.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder={p.name}
              className="input-brand"
            />
          </Field>

          <Field label={f.company} htmlFor="q-company">
            <input
              id="q-company"
              value={values.companyName}
              onChange={(e) => update("companyName", e.target.value)}
              placeholder={p.company}
              className="input-brand"
            />
          </Field>

          <Field label={f.phone} htmlFor="q-phone">
            <input
              id="q-phone"
              required
              type="tel"
              value={values.phone}
              onChange={(e) => update("phone", e.target.value)}
              placeholder={p.phone}
              className="input-brand"
            />
          </Field>

          <Field label={f.material} htmlFor="q-material">
            <input
              id="q-material"
              required
              value={values.material}
              onChange={(e) => update("material", e.target.value)}
              placeholder={p.material}
              className="input-brand"
            />
          </Field>

          <Field label={f.grade} htmlFor="q-grade">
            <input
              id="q-grade"
              value={values.grade}
              onChange={(e) => update("grade", e.target.value)}
              placeholder={p.grade}
              className="input-brand"
            />
          </Field>

          <Field label={f.quantity} htmlFor="q-quantity">
            <input
              id="q-quantity"
              value={values.quantity}
              onChange={(e) => update("quantity", e.target.value)}
              placeholder={p.quantity}
              className="input-brand"
            />
          </Field>

          <Field label={f.origin} htmlFor="q-origin">
            <select
              id="q-origin"
              value={values.origin}
              onChange={(e) => update("origin", e.target.value)}
              className="input-brand"
            >
              {dict.quoteForm.originOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </Field>

          <Field label={f.message} htmlFor="q-message" className="sm:col-span-2">
            <textarea
              id="q-message"
              rows={4}
              value={values.message}
              onChange={(e) => update("message", e.target.value)}
              placeholder={p.message}
              className="input-brand resize-none"
            />
          </Field>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-champagne px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-champagne-deep sm:w-auto"
            >
              <MessageCircle size={18} aria-hidden="true" />
              {dict.quoteForm.submit}
            </button>
            <p className="mt-3 text-xs text-muted">{dict.quoteForm.helper}</p>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
  className = "",
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-charcoal">
        {label}
      </label>
      {children}
    </div>
  );
}
