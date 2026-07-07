import type { Metadata } from "next";

import Content from "./content";

// ✅ SEO Meta Tags
export const metadata: Metadata = {
  title:
    "Vastu Construction | Expert Vastu Planning & Construction Guidance – Space Build",

  description:
    "Build your dream home, office, or commercial project with expert Vastu Construction guidance from Space Build. Get professional support for plot planning, layout design, construction stages, and final inspection.",

  keywords: [
    "Vastu Construction",
    "Vastu for house construction",
    "Vastu planning",
    "Construction Vastu consultant",
    "Home construction Vastu",
    "Commercial Vastu",
    "Office Vastu planning",
    "Vastu architect consultation",
    "Space Build Vastu Construction",
  ],

  // ✅ Canonical
  alternates: {
    canonical:
      "https://www.spacebuild.com/services/vastu-construction",
  },

  openGraph: {
    title:
      "Vastu Construction | Expert Vastu Planning & Construction Guidance – Space Build",

    description:
      "Plan and construct your home or commercial space with expert Vastu guidance. Space Build provides complete Vastu Construction consultation from planning to project completion.",

    url: "https://www.spacebuild.com/services/vastu-construction",

    siteName: "Space Build",

    images: [
      {
        url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/Space_Buildlogo_bmzk0r.png",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu Construction Services",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Vastu Construction | Expert Vastu Planning & Construction Guidance – Space Build",

    description:
      "Expert Vastu Construction services for homes, offices, villas, commercial buildings, and industrial projects. Build with confidence using authentic Vastu principles.",

    images: [
      "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/Space_Buildlogo_bmzk0r.png",
    ],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function VastuConstruction() {
  return (
    <>
      <Content />
    </>
  );
}