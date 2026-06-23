import type { Metadata } from "next"

import  Content  from "./content"

// ✅ SEO Meta Tags
export const metadata: Metadata = {
  title: "Vastu Renovation Services | Energy-Aligned Renovation - Vasterior",
  description:
    "Renovate your home or office with MahaVastu-aligned planning, corrections & design guidance by Vasterior for harmony and prosperity.",
  keywords: [
    "Vastu renovation, Vastu correction renovation, Vastu remodelling,  Renovation with Vastu, Vastu renovation consultant, Energy aligned renovation",
  ],

  // ✅ Canonical
  alternates: {
    canonical: "https://www.vasterior.com/services/vastu-renovation",
  },

  openGraph: {
    title: "Vastu Renovation Services | Energy-Aligned Renovation - Vasterior",
    description:
      "Renovate your home or office with MahaVastu-aligned planning, corrections & design guidance by Vasterior for harmony and prosperity.",
    url: "https://www.vasterior.com/services/vastu-renovation",
    siteName: "Vasterior",
    images: [
      {
        url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
        width: 1200,
        height: 630,
        alt: "Vastu Renovation Services | Energy-Aligned Renovation - Vasterior",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vastu Renovation Services | Energy-Aligned Renovation - Vasterior",
    description:
      "Renovate your home or office with MahaVastu-aligned planning, corrections & design guidance by Vasterior for harmony and prosperity.",
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
