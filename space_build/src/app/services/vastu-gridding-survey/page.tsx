import type { Metadata } from "next"

import  Content  from "./content"

// ✅ SEO Meta Tags
export const metadata: Metadata = {
  title: "Vastu Gridding & Survey Services | MahaVastu Layout Planning – Space Build",
  description:
    "Accurate MahaVastu gridding, true-north alignment, and site surveying services for homes, offices & commercial spaces by Space Build.",
  keywords: [
    "Vastu gridding, MahaVastu survey, Vastu layout planning, True north Vastu, Vastu audit report, MahaVastu zones",
  ],

  // ✅ Canonical
  alternates: {
    canonical: "https://www.Space Build.com/services/vastu-gridding-survey",
  },

  openGraph: {
    title: "Vastu Gridding & Survey Services | MahaVastu Layout Planning – Space Build",
    description:
      "Accurate MahaVastu gridding, true-north alignment, and site surveying services for homes, offices & commercial spaces by Space Build.",
    url: "https://www.Space Build.com/services/vastu-gridding-survey",
    siteName: "Space Build",
    images: [
      {
        url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/Space Buildlogo_bmzk0r.png",
        width: 1200,
        height: 630,
        alt: "Vastu Gridding & Survey Services | MahaVastu Layout Planning – Space Build",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vastu Gridding & Survey Services | MahaVastu Layout Planning – Space Build",
    description:
      "Accurate MahaVastu gridding, true-north alignment, and site surveying services for homes, offices & commercial spaces by Space Build.",
    images: [
      "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/Space Buildlogo_bmzk0r.png",
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
