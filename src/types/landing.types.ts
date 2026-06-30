export type BenefitIconKey = "clock" | "fileText" | "shield" | "tool";

export type ServiceIconKey =
  | "plumbing"
  | "waterDrop"
  | "cleaning"
  | "fire"
  | "waterDamage"
  | "apartment";

export type ProcessIconKey =
  | "message"
  | "search"
  | "calendar"
  | "tool"
  | "checkCircle";

export type AudienceIconKey =
  | "home"
  | "briefcase"
  | "grid"
  | "map"
  | "key"
  | "users";

export interface NavigationItem {
  label: string;
  href: string;
}

export interface CtaContent {
  label: string;
  href?: string;
  ariaLabel?: string;
}

export interface ImageContent {
  src: string;
  alt: string;
}

export interface BrandConfig {
  name: string;
  tagline: string;
  monogram: string;
  description: string;
  homeAriaLabel: string;
}

export interface ContactConfig {
  whatsapp: {
    number: string;
    message: string;
    label: string;
    headerLabel: string;
    ariaLabel: string;
  };
}

export interface SeoConfig {
  title: string;
  description: string;
  keywords: string[];
  applicationName: string;
  authors: string[];
  creator: string;
  publisher: string;
  locale: string;
  icon: string;
  themeColor: string;
  colorScheme: "light" | "dark";
  robots: {
    index: boolean;
    follow: boolean;
    maxImagePreview: "none" | "standard" | "large";
    maxSnippet: number;
  };
  openGraph: {
    title: string;
    description: string;
  };
  twitter: {
    title: string;
    description: string;
  };
}

export interface HeroConfig {
  id: string;
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  primaryCta: CtaContent;
  secondaryCta: CtaContent;
  guaranteesLabel: string;
  guarantees: string[];
  image: ImageContent;
  serviceTag: {
    label: string;
    title: string;
  };
  location: {
    label: string;
    value: string;
  };
  experience: {
    number: string;
    lines: string[];
  };
  bottomNotes: string[];
}

export interface BenefitsConfig {
  headingId: string;
  eyebrow: string;
  title: string;
  items: Array<{
    icon: BenefitIconKey;
    title: string;
    text: string;
  }>;
}

export interface ServicesConfig {
  id: string;
  headingId: string;
  eyebrow: string;
  title: string;
  description: string;
  items: Array<{
    icon: ServiceIconKey;
    title: string;
    text: string;
  }>;
}

export interface ProcessConfig {
  id: string;
  headingId: string;
  eyebrow: string;
  titleLines: string[];
  description: string;
  items: Array<{
    icon: ProcessIconKey;
    title: string;
    text: string;
  }>;
}

export interface AboutConfig {
  id: string;
  headingId: string;
  eyebrow: string;
  title: string;
  quote: string;
  details: string[];
  paragraphs: string[];
  commitments: string[];
  cta: CtaContent;
}

export interface AudienceCoverageConfig {
  id: string;
  headingId: string;
  audience: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{
      icon: AudienceIconKey;
      label: string;
    }>;
  };
  coverage: {
    status: string;
    regionCode: string;
    mapLabel: string;
    compassLabel: string;
    eyebrow: string;
    title: string;
    description: string;
    map: {
      position: [number, number];
      zoom: number;
      popup: string;
    };
  };
}

export interface FinalCtaConfig {
  id: string;
  headingId: string;
  eyebrow: string;
  title: string;
  description: string;
  cta: CtaContent;
  microcopy: string;
}

export interface FooterConfig {
  navigationLabel: string;
  copyright: string;
  credit: string;
}

export interface LandingConfig {
  brand: BrandConfig;
  contact: ContactConfig;
  seo: SeoConfig;
  navigation: {
    mainLabel: string;
    menuOpenLabel: string;
    menuCloseLabel: string;
    main: NavigationItem[];
    footer: NavigationItem[];
  };
  hero: HeroConfig;
  benefits: BenefitsConfig;
  services: ServicesConfig;
  process: ProcessConfig;
  about: AboutConfig;
  audienceCoverage: AudienceCoverageConfig;
  finalCta: FinalCtaConfig;
  footer: FooterConfig;
  loadingText: string;
}
