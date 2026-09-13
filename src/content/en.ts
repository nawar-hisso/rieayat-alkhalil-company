import type { Dictionary } from "./types";

export const en: Dictionary = {
  locale: "en",
  dir: "ltr",
  htmlLang: "en",

  meta: {
    title: "Plastic Raw Materials Supplier in Erbil | Rieayat Alkhalil",
    description:
      "Rieayat Alkhalil Company imports and supplies plastic raw materials in Erbil, Iraq, with sourcing from Iran, Saudi Arabia, Turkey and China. Request a quote.",
    socialTitle: "Rieayat Alkhalil Company | Plastic Raw Materials in Erbil",
    socialDescription:
      "Rieayat Alkhalil Company imports and supplies plastic raw materials in Erbil, Iraq, with sourcing from Iran, Saudi Arabia, Turkey and China.",
  },

  nav: {
    home: "Home",
    about: "About",
    materials: "Materials",
    industries: "Industries",
    sourcing: "Sourcing",
    contact: "Contact",
    cta: "Request a Quote",
    skipToContent: "Skip to content",
    menu: "Menu",
    closeMenu: "Close menu",
    language: "Language",
  },

  hero: {
    eyebrow: "PLASTIC RAW MATERIALS • ERBIL, IRAQ",
    heading: ["Reliable plastic raw materials", "for modern industry."],
    body:
      "Rieayat Alkhalil Company imports and supplies plastic raw materials for manufacturers, converters and traders, with sourcing from Iran, Saudi Arabia, Turkey and China.",
    ctaPrimary: "Request a Quote",
    ctaSecondary: "Talk to Sales",
    sourcingLine: "Sourcing across Iran • Saudi Arabia • Turkey • China",
  },

  about: {
    eyebrow: "ABOUT",
    heading: "A practical supply partner for the plastics industry.",
    paragraphs: [
      "Based in Erbil, Rieayat Alkhalil Company connects industrial buyers with plastic raw material sources across regional and international markets.",
      "Whether you are planning regular production or searching for a specific material or grade, the goal is to make the sourcing conversation straightforward: share your requirement and discuss suitable available supply options.",
    ],
  },

  materials: {
    eyebrow: "MATERIALS",
    heading: "Plastic raw materials for a wide range of applications",
    items: [
      {
        title: "Polyethylene — PE",
        tags: "HDPE • LDPE • LLDPE",
        body: "Widely used across film, packaging, containers, piping and general plastic manufacturing.",
      },
      {
        title: "Polypropylene — PP",
        body: "A versatile polymer widely used in injection molding, packaging, raffia and industrial applications.",
      },
      {
        title: "PVC",
        body: "Material inquiries for pipe, profile, cable and other PVC-related applications.",
      },
      {
        title: "PET",
        body: "Material commonly associated with packaging, bottles and other industrial applications.",
      },
      {
        title: "Masterbatch & Additives",
        body: "Color, filler and performance-related material inquiries for plastic manufacturing.",
      },
      {
        title: "Other Polymer Materials",
        body: "Looking for another resin, origin or grade? Send your specification and required quantity.",
      },
    ],
    disclaimer:
      "Material grades, origins and availability may vary. Contact us with your required specification to confirm current supply options.",
  },

  sourcing: {
    eyebrow: "SOURCING",
    heading: "A sourcing network across key markets",
    body:
      "Working across multiple sourcing markets gives industrial buyers greater flexibility when specifications, origin, availability and market conditions matter.",
    note: "Sourcing markets shown reflect current business activity, not exclusive supplier relationships.",
  },

  industries: {
    eyebrow: "INDUSTRIES",
    heading: "Common applications for plastic raw materials",
    body:
      "These reflect typical uses of plastic raw materials across industry — not confirmed named customer sectors.",
    items: [
      { title: "Packaging & Film" },
      { title: "Injection Molding" },
      { title: "Pipes & Profiles" },
      { title: "Bottles & Containers" },
      { title: "Trading & Distribution" },
      { title: "General Plastic Manufacturing" },
    ],
  },

  why: {
    eyebrow: "WHY RIEAYAT ALKHALIL",
    heading: "A straightforward approach to plastic raw material sourcing",
    items: [
      {
        title: "Multi-Market Sourcing",
        body: "Material sourcing across Iran, Saudi Arabia, Turkey and China.",
      },
      {
        title: "B2B Focused",
        body: "A straightforward approach built around the requirements of manufacturers, converters and traders.",
      },
      {
        title: "Specification-Based Inquiries",
        body: "Send the material, grade, quantity and preferred origin to discuss suitable options.",
      },
      {
        title: "Based in Erbil",
        body: "Direct contact with a commercial and industrial company based in Erbil, Iraq.",
      },
    ],
  },

  process: {
    eyebrow: "PROCESS",
    heading: "A simple way to request a quote",
    body: "Three steps to start the sourcing conversation with the Alkhalil team.",
    steps: [
      {
        number: "01",
        title: "Send Your Requirement",
        body: "Material, grade, quantity and preferred origin.",
      },
      {
        number: "02",
        title: "Discuss Available Options",
        body: "Share the details needed to identify suitable sourcing options.",
      },
      {
        number: "03",
        title: "Request Your Quote",
        body: "Continue directly with the Alkhalil team by WhatsApp, phone or email.",
      },
    ],
  },

  quoteForm: {
    eyebrow: "REQUEST A QUOTE",
    heading: "Send your requirement to the Alkhalil team",
    body:
      "Fill in what you know and continue on WhatsApp — the message is prepared for you automatically.",
    fields: {
      name: "Name",
      company: "Company",
      phone: "Phone",
      material: "Material / Product",
      grade: "Grade / Specification",
      quantity: "Quantity",
      origin: "Preferred Origin",
      message: "Message",
    },
    placeholders: {
      name: "Your full name",
      company: "Company name",
      phone: "+964 ...",
      material: "e.g. HDPE, PP, PVC…",
      grade: "Grade, standard or specification",
      quantity: "e.g. 5 tons / 1 container",
      message: "Any additional details",
    },
    originOptions: [
      { value: "no_preference", label: "No preference" },
      { value: "iran", label: "Iran" },
      { value: "saudi_arabia", label: "Saudi Arabia" },
      { value: "turkey", label: "Turkey" },
      { value: "china", label: "China" },
      { value: "other", label: "Other" },
    ],
    submit: "Continue on WhatsApp",
    helper: "This opens WhatsApp with your details pre-filled — nothing is sent until you press send there.",
    whatsappTemplate: {
      greeting: "Hello Rieayat Alkhalil Company,",
      intro: "I would like to request a quote.",
      nameLabel: "Name:",
      companyLabel: "Company:",
      phoneLabel: "Phone:",
      materialLabel: "Material:",
      gradeLabel: "Grade / Specification:",
      quantityLabel: "Quantity:",
      originLabel: "Preferred Origin:",
      messageLabel: "Message:",
    },
  },

  contact: {
    eyebrow: "CONTACT",
    heading: "Get in touch",
    body: "Reach the Alkhalil team directly by phone, WhatsApp or email, or find the office on Google Maps.",
    phonePrimaryLabel: "Primary phone",
    phoneSecondaryLabel: "Secondary phone",
    emailLabel: "Email",
    locationLabel: "Location",
    hoursLabel: "Working hours",
    hoursConfirmNote: "Hours shown are current public information and may be updated.",
    mapCta: "Open in Google Maps",
    facebookCta: "Visit our Facebook page",
    whatsappCta: "Chat on WhatsApp",
    callCta: "Call now",
  },

  faq: {
    eyebrow: "FAQ",
    heading: "Frequently asked questions",
    items: [
      {
        question: "What does Rieayat Alkhalil Company specialize in?",
        answer:
          "Rieayat Alkhalil Company is an Erbil-based commercial and industrial company focused on importing and supplying plastic raw materials.",
      },
      {
        question: "Which countries do you source materials from?",
        answer: "Current sourcing markets include Iran, Saudi Arabia, Turkey and China.",
      },
      {
        question: "Can I inquire about a specific polymer grade?",
        answer:
          "Yes. Send the material name, grade or specification, required quantity and preferred origin so available options can be discussed.",
      },
      {
        question: "Do material grades and availability change?",
        answer:
          "Yes. Plastic raw-material markets and availability can change, so current grades, origins and supply options should be confirmed when requesting a quote.",
      },
      {
        question: "Where is Rieayat Alkhalil Company located?",
        answer: "The company is based in Erbil, Erbil Governorate, Iraq.",
      },
      {
        question: "How can I request a quotation?",
        answer:
          "Send your requirements through WhatsApp, call the company directly or email alkhalilerbil@gmail.com.",
      },
    ],
  },

  footer: {
    tagline: "Plastic raw material sourcing and supply from Erbil, Iraq.",
    navTitle: "Navigate",
    contactTitle: "Contact",
    followTitle: "Follow",
    rights: "All rights reserved.",
  },

  common: {
    requestQuote: "Request a Quote",
    talkToSales: "Talk to Sales",
    whatsapp: "WhatsApp",
    call: "Call",
    openInMaps: "Open in Google Maps",
    switchTo: "العربية",
  },
};
