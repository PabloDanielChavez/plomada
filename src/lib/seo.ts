import type { Metadata, Viewport } from "next";
import type { LandingConfig, SeoConfig } from "@/types/landing.types";

type MetadataSource = Pick<LandingConfig, "brand" | "seo">;

export function createMetadata({ brand, seo }: MetadataSource): Metadata {
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    applicationName: seo.applicationName,
    authors: seo.authors.map((name) => ({ name })),
    creator: seo.creator,
    publisher: seo.publisher,
    formatDetection: { telephone: false, address: false, email: false },
    robots: {
      index: seo.robots.index,
      follow: seo.robots.follow,
      googleBot: {
        index: seo.robots.index,
        follow: seo.robots.follow,
        "max-image-preview": seo.robots.maxImagePreview,
        "max-snippet": seo.robots.maxSnippet,
      },
    },
    openGraph: {
      type: "website",
      locale: seo.locale,
      siteName: brand.name,
      title: seo.openGraph.title,
      description: seo.openGraph.description,
    },
    twitter: {
      card: "summary",
      title: seo.twitter.title,
      description: seo.twitter.description,
    },
    icons: { icon: seo.icon },
  };
}

export function createViewport(seo: SeoConfig): Viewport {
  return {
    themeColor: seo.themeColor,
    colorScheme: seo.colorScheme,
  };
}
