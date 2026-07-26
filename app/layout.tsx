import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { siteConfig } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Agência Sirius | Social media com direção",
  description:
    "Social media, direção criativa e produção de conteúdo com intenção, consistência e identidade.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Agência Sirius | Social media com direção",
    description:
      "Direção, narrativa e presença digital para marcas que querem ser reconhecidas.",
    url: "/",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Agência Sirius",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agência Sirius | Social media com direção",
    description:
      "Direção, narrativa e presença digital para marcas que querem ser reconhecidas.",
    images: ["/opengraph-image.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#076a79",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
