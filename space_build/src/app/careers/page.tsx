import type { Metadata } from "next"

import  Content  from "./content"

// ✅ SEO Meta Tags
export const metadata: Metadata = {
  title: "Vasterior – Careers | Join Our Team of Creative Interior Designers",
  description:
    "Build your career with Vasterior. Join our team of architects, designers, and consultants shaping the future of bespoke interiors and innovative design solutions.",
  keywords: [
    "Vasterior careers, interior design jobs, architect jobs, join Vasterior, careers in interiors, design consultancy jobs, creative careers",
  ],

  // ✅ Canonical
  alternates: {
    canonical: "https://www.vasterior.com/careers",
  },

  openGraph: {
    title: "Vasterior – Careers | Join Our Team of Creative Interior Designers",
    description:
      "Build your career with Vasterior. Join our team of architects, designers, and consultants shaping the future of bespoke interiors and innovative design solutions.",
    url: "https://www.vasterior.com/careers",
    siteName: "Vasterior",
    images: [
      {
        url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
        width: 1200,
        height: 630,
        alt: "Vasterior – Careers | Join Our Team of Creative Interior Designers",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vasterior – Careers | Join Our Team of Creative Interior Designers",
    description:
      "Build your career with Vasterior. Join our team of architects, designers, and consultants shaping the future of bespoke interiors and innovative design solutions.",
    images: [
      "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
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
