import type { Metadata } from "next"

import  Content  from "./content"

// ✅ SEO Meta Tags
export const metadata: Metadata = {
  title: "Vastu Gridding & Survey Services | MahaVastu Layout Planning – Vasterior",
  description:
    "Accurate MahaVastu gridding, true-north alignment, and site surveying services for homes, offices & commercial spaces by Vasterior.",
  keywords: [
    "Vastu gridding, MahaVastu survey, Vastu layout planning, True north Vastu, Vastu audit report, MahaVastu zones",
  ],

  // ✅ Canonical
  alternates: {
    canonical: "https://www.vasterior.com/services/vastu-gridding-survey",
  },

  openGraph: {
    title: "Vastu Gridding & Survey Services | MahaVastu Layout Planning – Vasterior",
    description:
      "Accurate MahaVastu gridding, true-north alignment, and site surveying services for homes, offices & commercial spaces by Vasterior.",
    url: "https://www.vasterior.com/services/vastu-gridding-survey",
    siteName: "Vasterior",
    images: [
      {
        url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
        width: 1200,
        height: 630,
        alt: "Vastu Gridding & Survey Services | MahaVastu Layout Planning – Vasterior",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vastu Gridding & Survey Services | MahaVastu Layout Planning – Vasterior",
    description:
      "Accurate MahaVastu gridding, true-north alignment, and site surveying services for homes, offices & commercial spaces by Vasterior.",
    images: [
      "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
    ],
  },

  icons: {
    icon: "/favicon.ico",
  },

  // ✅ Google site verification
  
}

export default function InteriorStyling() {
  return (
    <>
      <Content />
     
    </>
  )
}
