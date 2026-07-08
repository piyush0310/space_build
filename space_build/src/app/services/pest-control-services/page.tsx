import type { Metadata } from "next";

import Content from "./content";

// ✅ SEO Meta Tags
export const metadata: Metadata = {
  title:
    "Pest Control Service | Professional Pest Management Solutions – Space Build",

  description:
    "Protect your home, office, and commercial spaces with professional pest control services from Space Build. Get effective solutions for termites, cockroaches, mosquitoes, rodents, and other pest problems.",

  keywords: [
    "Pest Control Service",
    "Professional Pest Control",
    "Home Pest Control",
    "Commercial Pest Control",
    "Termite Control",
    "Cockroach Control",
    "Mosquito Control",
    "Rodent Control",
    "Pest Management Services",
    "Space Build Pest Control",
  ],

  // ✅ Canonical
  alternates: {
    canonical:
      "https://www.spacebuild.com/services/pest-control",
  },

  openGraph: {
    title:
      "Pest Control Service | Professional Pest Management Solutions – Space Build",

    description:
      "Get reliable pest control solutions from Space Build for residential, commercial, and industrial spaces. Protect your property with professional pest management services.",

    url:
      "https://www.spacebuild.com/services/pest-control",

    siteName: "Space Build",

    images: [
      {
        url:
          "https://res.cloudinary.com/dv9tivfvq/image/upload/v1783504714/7e2484e60abd3bf3a0e54289d82b62e3_fxnyiy.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Pest Control Services",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Pest Control Service | Professional Pest Management Solutions – Space Build",

    description:
      "Professional pest control services for homes, offices, and commercial properties. Space Build provides safe and effective pest management solutions.",

    images: [
      "https://res.cloudinary.com/dv9tivfvq/image/upload/v1783507178/photo-1629608934925-725d09a4eb9a_ycup8h.avif",
    ],
  },

  icons: {
    icon: "/favicon.ico",
  },
};


export default function PestControl() {
  return (
    <>
      <Content />
    </>
  );
}