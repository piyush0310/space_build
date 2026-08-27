import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsappButton";
import CallButton from "@/components/CallButton";
import Popupform from "@/components/Popupform";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.spacebuild.co.in"),
  title: "Space Build",
  description: "Space Build",

  verification: {
    google: "u5B0uW9-E9SjJOb1T0Tzs3Cqh8y-56tc4fHOmEvDTvs",
  },

  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  other: {
    bingbot: "index,follow",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className="antialiased">
        <Header />

        <main>{children}</main>

        <Footer />
        <CallButton />
        <WhatsAppButton />
        <Popupform />
      </body>
    </html>
  );
}
