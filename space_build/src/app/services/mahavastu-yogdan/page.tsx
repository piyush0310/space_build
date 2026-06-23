import type { Metadata } from "next"

import  Content  from "./content"

// ✅ SEO Meta Tags
export const metadata: Metadata = {
  title: "MahaVastu Yogdan | Free Vastu Guidance Every Wednesday – Vasterior",
  description:
    "MahaVastu Yogdan is Vasterior’s free, on-site Vastu service offering clarity, balance & guidance through MahaVastu principles every Wednesday.",
  keywords: [
    "MahaVastu Yogdan, Free Vastu consultation, MahaVastu guidance, Vastu help for problems, MahaVastu practitioner, Free Vastu service Delhi NCR",
  ],

  // ✅ Canonical
  alternates: {
    canonical: "https://www.vasterior.com/services/mahavastu-yogdan",
  },

  openGraph: {
    title: "MahaVastu Yogdan | Free Vastu Guidance Every Wednesday – Vasterior",
    description:
      "MahaVastu Yogdan is Vasterior’s free, on-site Vastu service offering clarity, balance & guidance through MahaVastu principles every Wednesday.",
    url: "https://www.vasterior.com/services/mahavastu-yogdan",
    siteName: "Vasterior",
    images: [
      {
        url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
        width: 1200,
        height: 630,
        alt: "Vasterior – PMC Services | Professional Project Management for Interiors",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "MahaVastu Yogdan | Free Vastu Guidance Every Wednesday – Vasterior",
    description:
      "MahaVastu Yogdan is Vasterior’s free, on-site Vastu service offering clarity, balance & guidance through MahaVastu principles every Wednesday.",
    images: [
      "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
    ],
  },

  icons: {
    icon: "/favicon.ico",
  },

  // ✅ Google site verification
  
}

export default function Pmc() {
  return (
    <>
      <Content />
     
    </>
  )
}
