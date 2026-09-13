import { isLocale, getDictionary } from "@/content";
import { notFound } from "next/navigation";
import { FaqJsonLd } from "@/components/JsonLd";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Materials } from "@/components/Materials";
import { Sourcing } from "@/components/Sourcing";
import { Industries } from "@/components/Industries";
import { WhyUs } from "@/components/WhyUs";
import { Process } from "@/components/Process";
import { QuoteForm } from "@/components/QuoteForm";
import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";

export default async function LocaleHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <FaqJsonLd dict={dict} />
      <Hero dict={dict} locale={locale} />
      <About dict={dict} />
      <Materials dict={dict} />
      <Sourcing dict={dict} locale={locale} />
      <Industries dict={dict} />
      <WhyUs dict={dict} />
      <Process dict={dict} />
      <QuoteForm dict={dict} />
      <Contact dict={dict} locale={locale} />
      <Faq dict={dict} />
    </>
  );
}
