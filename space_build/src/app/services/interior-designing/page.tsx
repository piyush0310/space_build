import type { Metadata } from "next"

import  Content  from "./content"

// ✅ SEO Meta Tags
export const metadata: Metadata = {
  title: "Luxury Interior Design Studio | Vastu-Aligned Interiors - Vasterior",
  description:
    "Vasterior offers luxury interior design for homes, offices & commercial spaces, blending timeless aesthetics with MahaVastu principles.",
  keywords: [
    "Luxury interior designer, Vastu interior design, Interior design studio, Residential interior design, Commercial interior design, Interior designers Delhi NCR",
  ],

  // ✅ Canonical
  alternates: {
    canonical: "https://www.vasterior.com/services/interior-designing",
  },

  openGraph: {
    title: "Luxury Interior Design Studio | Vastu-Aligned Interiors - Vasterior",
    description:
      "Vasterior offers luxury interior design for homes, offices & commercial spaces, blending timeless aesthetics with MahaVastu principles.",
    url: "https://www.vasterior.com/services/interior-designing",
    siteName: "Vasterior",
    images: [
      {
        url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
        width: 1200,
        height: 630,
        alt: "Luxury Interior Design Studio | Vastu-Aligned Interiors - Vasterior",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Luxury Interior Design Studio | Vastu-Aligned Interiors - Vasterior",
    description:
      "Vasterior offers luxury interior design for homes, offices & commercial spaces, blending timeless aesthetics with MahaVastu principles.",
    images: [
      "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
    ],
  },

  icons: {
    icon: "/favicon.ico",
  },

  // ✅ Google site verification
  
}

export default function InteriorDesigning() {
  return (
    <>
      <Content />
     
    </>
  )
}
