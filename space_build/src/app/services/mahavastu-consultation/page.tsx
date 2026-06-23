import type { Metadata } from "next"

import  Content  from "./content"

// ✅ SEO Meta Tags
export const metadata: Metadata = {
  title: "Mahavastu Consultation | Goal-Based Vastu Alignment – Vasterior",
  description:
    "Book Vasterior’s MahaVastu consultation to manifest goals, resolve challenges & align your space through expert, scientific Vastu guidance.",
  keywords: [
    "Paid Vastu consultation, MahaVastu consultation, Vastu for manifestation, Vastu for success, Vastu problem solutions, Professional Vastu consultant",
  ],

  // ✅ Canonical
  alternates: {
    canonical: "https://vasterior.com/services/mahavastu-consultation",
  },

  openGraph: {
    title: "Mahavastu Consultation | Goal-Based Vastu Alignment – Vasterior",
    description:
      "Book Vasterior’s MahaVastu consultation to manifest goals, resolve challenges & align your space through expert, scientific Vastu guidance.",
    url: "https://vasterior.com/services/mahavastu-consultation",
    siteName: "Vasterior",
    images: [
      {
        url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
        width: 1200,
        height: 630,
        alt: "Vasterior Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mahavastu Consultation | Goal-Based Vastu Alignment – Vasterior",
    description:
      "Book Vasterior’s MahaVastu consultation to manifest goals, resolve challenges & align your space through expert, scientific Vastu guidance.",
    images: [
      "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
    ],
  },

  icons: {
    icon: "/favicon.ico",
  },

  // ✅ Google site verification
  
}

export default function SmartHome() {
  return (
    <>
      <Content />
     
    </>
  )
}
