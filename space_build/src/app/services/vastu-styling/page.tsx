import type { Metadata } from "next"

import  Content  from "./content"

// ✅ SEO Meta Tags
export const metadata: Metadata = {
  title: "Vastu Styling Services | Non-Destructive Vastu Corrections – Vasterior",
  description:
    "Enhance your space with Vasterior’s Vastu Styling, modern, aesthetic object placements and remedies without renovation.",
  keywords: [
    "Vastu styling, Vastu remedies home, Non-destructive Vastu, Object placement Vastu, Modern Vastu remedies, Vastu décor",
  ],

  // ✅ Canonical
  alternates: {
    canonical: "https://www.vasterior.com/services/vastu-styling",
  },

  openGraph: {
    title: "Vastu Styling Services | Non-Destructive Vastu Corrections – Vasterior",
    description:
      "Enhance your space with Vasterior’s Vastu Styling, modern, aesthetic object placements and remedies without renovation.",
    url: "https://www.vasterior.com/services/vastu-styling",
    siteName: "Vasterior",
    images: [
      {
        url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
        width: 1200,
        height: 630,
        alt: "Vasterior – Wedding Designing Services | Luxury Event & Décor Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vasterior – Wedding Designing Services | Luxury Event & Décor Solutions",
    description:
      "Enhance your space with Vasterior’s Vastu Styling, modern, aesthetic object placements and remedies without renovation.",
    images: [
      "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
    ],
  },

  icons: {
    icon: "/favicon.ico",
  },

  // ✅ Google site verification
  
}

export default function WeddingDesigning() {
  return (
    <>
      <Content />
     
    </>
  )
}
