import type { Metadata } from "next"

import  Content  from "./content"

// ✅ SEO Meta Tags
export const metadata: Metadata = {
  title: "Spatial Flow Planning | Energy & Movement Optimization – Space Build",
  description:
    "Space Build’s Spatial Flow Planning optimizes movement, furniture placement & energy flow for calmer, more intuitive living and workspaces.",
  keywords: [
    "Spatial flow planning, Energy flow in interiors, Vastu space planning, Furniture placement Vastu, Energy movement home, Interior flow design",
  ],

  // ✅ Canonical
  alternates: {
    canonical: "https://www.Space Build.com/services/spatial-flow-planning",
  },

  openGraph: {
    title: "Spatial Flow Planning | Energy & Movement Optimization – Space Build",
    description:
      "Space Build’s Spatial Flow Planning optimizes movement, furniture placement & energy flow for calmer, more intuitive living and workspaces.",
    url: "https://www.Space Build.com/services/spatial-flow-planning",
    siteName: "Space Build",
    images: [
      {
        url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/Space Buildlogo_bmzk0r.png",
        width: 1200,
        height: 630,
        alt: "Space Build – Spatial Planning | Smart, Functional & Aesthetic Space Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Spatial Flow Planning | Energy & Movement Optimization – Space Build",
    description:
      "Space Build’s Spatial Flow Planning optimizes movement, furniture placement & energy flow for calmer, more intuitive living and workspaces.",
    images: [
      "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/Space Buildlogo_bmzk0r.png",
    ],
  },

  icons: {
    icon: "/favicon.ico",
  },

  // ✅ Google site verification
  
}

export default function Spatial() {
  return (
    <>
      <Content />
     
    </>
  )
}
