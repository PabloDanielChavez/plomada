import type { Metadata, Viewport } from "next";
import "@/styles/globals.scss";
import { landingData } from "@/data/site";
import { createMetadata, createViewport } from "@/lib/seo";

export const metadata: Metadata = createMetadata(landingData);

export const viewport: Viewport = createViewport(landingData.seo);

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR">
      <body>{children}</body>
    </html>
  );
}
