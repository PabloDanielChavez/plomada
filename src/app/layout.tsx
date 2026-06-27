import type { Metadata, Viewport } from "next";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: "Plomero en Buenos Aires | Plomería y Mantenimiento | Plomada",
  description:
    "Servicio de plomería en Buenos Aires para hogares, empresas y consorcios. Pérdidas de agua, destapaciones, instalaciones, impermeabilización y mantenimiento.",
  keywords: [
    "plomero en Buenos Aires",
    "servicio de plomería",
    "plomería a domicilio",
    "reparación de pérdidas de agua",
    "destapaciones",
    "mantenimiento integral",
  ],
  applicationName: "Plomada",
  authors: [{ name: "Plomada" }],
  creator: "Plomada",
  publisher: "Plomada",
  formatDetection: { telephone: false, address: false, email: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Plomada",
    title: "Plomada | Plomería y mantenimiento en Buenos Aires",
    description:
      "Reparaciones, instalaciones, destapaciones y mantenimiento con respuesta rápida, trabajo prolijo y presupuesto claro.",
  },
  twitter: {
    card: "summary",
    title: "Plomada | Plomería y mantenimiento",
    description: "Soluciones técnicas para hogares, empresas y consorcios en Buenos Aires.",
  },
  icons: { icon: "/img/herramienta-de-construccion.png" },
};

export const viewport: Viewport = {
  themeColor: "#172329",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR">
      <body>{children}</body>
    </html>
  );
}
