import type { Metadata } from "next";

import Allservicescontent from "./Allservicescontent";

// ✅ SEO Meta Tags
export const metadata: Metadata = {
  title:
    "Our Services | Vastu, Interior Design, Moduler Kitchen & Pest Control – SPACE BUILD",

  description:
    "Explore SPACE BUILD's complete range of services including Vastu Construction, Interior Designing, Vastu Renovation, Project Management Consultation (PMC), Moduler Kitchen, and Pest Control solutions for residential and commercial spaces.",

  keywords: [
    "SPACE BUILD Services",
    "Vastu Construction",
    "Interior Designing",
    "Vastu Renovation",
    "Project Management Consultation",
    "PMC Services",
    "Moduler Kitchen",
    "Pest Control Service",
    "Home Interior Design",
    "Commercial Interior Design",
    "Residential Construction",
    "Kitchen Design",
    "Professional Pest Control",
    "Vastu Consultant",
  ],

  // ✅ Canonical
  alternates: {
    canonical: "https://www.spacebuild.com/services",
  },

  openGraph: {
    title:
      "Our Services | Vastu, Interior Design, Moduler Kitchen & Pest Control – SPACE BUILD",

    description:
      "Discover SPACE BUILD's professional services including Vastu Construction, Interior Designing, Vastu Renovation, PMC, Moduler Kitchen, and Pest Control for homes and commercial spaces.",

    url: "https://www.spacebuild.com/services",

    siteName: "SPACE BUILD",

    images: [
      {
        url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/Space_Buildlogo_bmzk0r.png",
        width: 1200,
        height: 630,
        alt: "SPACE BUILD Services",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Our Services | Vastu, Interior Design, Moduler Kitchen & Pest Control – SPACE BUILD",

    description:
      "Explore SPACE BUILD's complete range of professional construction, interior, Moduler kitchen, and pest control services.",

    images: [
      "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/Space_Buildlogo_bmzk0r.png",
    ],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function Service() {
  return (
    <>
      <Allservicescontent />
    </>
  );
}