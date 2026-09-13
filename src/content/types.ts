export type Locale = "ar" | "en";

export interface MaterialItem {
  title: string;
  tags?: string;
  body: string;
}

export interface IndustryItem {
  title: string;
}

export interface ValueItem {
  title: string;
  body: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  body: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Dictionary {
  locale: Locale;
  dir: "rtl" | "ltr";
  htmlLang: string;

  meta: {
    title: string;
    description: string;
    socialTitle: string;
    socialDescription: string;
  };

  nav: {
    home: string;
    about: string;
    materials: string;
    industries: string;
    sourcing: string;
    contact: string;
    cta: string;
    skipToContent: string;
    menu: string;
    closeMenu: string;
    language: string;
  };

  hero: {
    eyebrow: string;
    heading: [string, string];
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
    sourcingLine: string;
  };

  about: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
  };

  materials: {
    eyebrow: string;
    heading: string;
    items: MaterialItem[];
    disclaimer: string;
  };

  sourcing: {
    eyebrow: string;
    heading: string;
    body: string;
    note: string;
  };

  industries: {
    eyebrow: string;
    heading: string;
    body: string;
    items: IndustryItem[];
  };

  why: {
    eyebrow: string;
    heading: string;
    items: ValueItem[];
  };

  process: {
    eyebrow: string;
    heading: string;
    body: string;
    steps: ProcessStep[];
  };

  quoteForm: {
    eyebrow: string;
    heading: string;
    body: string;
    fields: {
      name: string;
      company: string;
      phone: string;
      material: string;
      grade: string;
      quantity: string;
      origin: string;
      message: string;
    };
    placeholders: {
      name: string;
      company: string;
      phone: string;
      material: string;
      grade: string;
      quantity: string;
      message: string;
    };
    originOptions: { value: string; label: string }[];
    submit: string;
    helper: string;
    whatsappTemplate: {
      greeting: string;
      intro: string;
      nameLabel: string;
      companyLabel: string;
      phoneLabel: string;
      materialLabel: string;
      gradeLabel: string;
      quantityLabel: string;
      originLabel: string;
      messageLabel: string;
    };
  };

  contact: {
    eyebrow: string;
    heading: string;
    body: string;
    phonePrimaryLabel: string;
    phoneSecondaryLabel: string;
    emailLabel: string;
    locationLabel: string;
    hoursLabel: string;
    hoursConfirmNote: string;
    mapCta: string;
    facebookCta: string;
    whatsappCta: string;
    callCta: string;
  };

  faq: {
    eyebrow: string;
    heading: string;
    items: FaqItem[];
  };

  footer: {
    tagline: string;
    navTitle: string;
    contactTitle: string;
    followTitle: string;
    rights: string;
  };

  common: {
    requestQuote: string;
    talkToSales: string;
    whatsapp: string;
    call: string;
    openInMaps: string;
    switchTo: string;
  };
}
