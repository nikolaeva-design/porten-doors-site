import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import Script from "next/script";

import {
  DEFAULT_OG_IMAGE_PATH,
  OPEN_GRAPH_IMAGE_ALT,
  OPEN_GRAPH_PREVIEW_JPEG_PATH,
  SITE_URL,
} from "@/constants/site";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1a1a1a",
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Porten Doors | Door Replacement & Installation in BC",
    template: "%s | Porten Doors",
  },
  description:
    "Entry, patio, and interior door replacement in Greater Vancouver and Vancouver Island. In-house installers, 5-year warranty, built for BC rain — no subcontractors.",
  authors: [{ name: "Porten Doors" }],
  creator: "Porten Doors",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: SITE_URL,
    siteName: "Porten Doors",
    title: "Porten Doors | Door Replacement & Installation in BC",
    description:
      "No drafts. No shoulder-pushing. In-house crew, 5-year warranty, custom sizing — Greater Vancouver & Vancouver Island.",
    images: [
      { url: OPEN_GRAPH_PREVIEW_JPEG_PATH, alt: OPEN_GRAPH_IMAGE_ALT },
      { url: DEFAULT_OG_IMAGE_PATH, alt: OPEN_GRAPH_IMAGE_ALT },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Porten Doors | Door Replacement & Installation in BC",
    description:
      "Door replacement and installation across Greater Vancouver & Vancouver Island — in-house installers and a 5-year warranty.",
    images: [OPEN_GRAPH_PREVIEW_JPEG_PATH],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className="scroll-smooth">
      <head>
        <Script
          src="https://cdn.jsdelivr.net/npm/iconify-icon@2.1.0/dist/iconify-icon.min.js"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${inter.variable} ${archivo.variable} antialiased`}>{children}</body>
    </html>
  );
}
