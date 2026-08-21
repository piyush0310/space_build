import type { Metadata } from "next";

import Content from "./content";

// ✅ SEO Meta Tags
export const metadata: Metadata = {
  title:
    "Moduler Kitchen | Modern Kitchen Design & Installation Services – Space Build",

  description:
    "Transform your home with premium moduler kitchen design and installation services from Space Build. Get expert solutions for smart storage, modern layouts, customized designs, and elegant kitchen spaces.",

  keywords: [
    "Moduler Kitchen",
    "Moduler Kitchen Design",
    "Modern Kitchen Interior",
    "Kitchen Design Services",
    "Custom moduler Kitchen",
    "Luxury moduler Kitchen",
    "Kitchen Installation",
    "Kitchen Interior Design",
    "Space Build Moduler Kitchen",
  ],

  // ✅ Canonical
  alternates: {
    canonical:
      "https://www.spacebuild.com/services/moduler-kitchen",
  },

  openGraph: {
    title:
      "moduler Kitchen | Modern Kitchen Design & Installation Services – Space Build",

    description:
      "Create a stylish and functional kitchen with Space Build moduler kitchen solutions. We provide customized kitchen designs, smart storage solutions, premium materials, and professional installation.",

    url:
      "https://www.spacebuild.com/services/moduler-kitchen",

    siteName: "Space Build",

    images: [
      {
        url:
          "https://res.cloudinary.com/dv9tivfvq/image/upload/v1783504450/451ca8ad05dbfb7dd3078ef8a72971d5_rwbccc.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Moduler Kitchen Services",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "moduler Kitchen | Modern Kitchen Design & Installation Services – Space Build",

    description:
      "Premium moduler kitchen design services for modern homes. Space Build creates beautiful, functional, and customized kitchens with smart storage and elegant finishes.",

    images: [
      "https://res.cloudinary.com/dv9tivfvq/image/upload/v1783507357/premium_photo-1683141179507-734e6157ddba_nsmobc.avif",
    ],
  },

  icons: {
    icon: "/favicon.ico",
  },
};


export default function modulerKitchen() {
  return (
    <>
      <Content />
    </>
  );
}