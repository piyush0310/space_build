import type { Metadata } from "next"

import  Content  from "./content"

// ✅ SEO Meta Tags
export const metadata: Metadata = {
  title: "Space Build – Careers | Join Our Team of Creative Interior Designers",
  description:
    "Build your career with Space Build. Join our team of architects, designers, and consultants shaping the future of bespoke interiors and innovative design solutions.",
  keywords: [
    "Space Build careers, interior design jobs, architect jobs, join Space Build, careers in interiors, design consultancy jobs, creative careers",
  ],

  // ✅ Canonical
  alternates: {
    canonical: "https://www.Space Build.com/careers",
  },

  openGraph: {
    title: "Space Build – Careers | Join Our Team of Creative Interior Designers",
    description:
      "Build your career with Space Build. Join our team of architects, designers, and consultants shaping the future of bespoke interiors and innovative design solutions.",
    url: "https://www.Space Build.com/careers",
    siteName: "Space Build",
    images: [
      {
        url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/Space Buildlogo_bmzk0r.png",
        width: 1200,
        height: 630,
        alt: "Space Build – Careers | Join Our Team of Creative Interior Designers",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Space Build – Careers | Join Our Team of Creative Interior Designers",
    description:
      "Build your career with Space Build. Join our team of architects, designers, and consultants shaping the future of bespoke interiors and innovative design solutions.",
    images: [
      "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/Space Buildlogo_bmzk0r.png",
    ],
  },

  icons: {
    icon: "/favicon.ico",
  },

  // ✅ Google site verification
  
}

export default function Furniture() {
  return (
    <>
      <Content />
     
    </>
  )
}
