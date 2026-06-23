import type { Metadata } from "next"

import Hero from "@/components/Hero"
import Brandstory from "@/components/Brandstory"
import Aboutus from "@/components/Aboutus"
import Services from "@/components/Services"
import Portfolio from "@/components/Portfolio"
//import MagazineSection from "@/components/MagazineSection"
import Blog from "@/components/Blog"

//import Collaborators from "@/components/Colloborators"
import Testimonials from "@/components/Testimonials"

// ✅ SEO Meta Tags
export const metadata: Metadata = {
  title: "Vastu Consultant & Interior Design Services in India | Vasterior",
  description:
    "Vasterior provides professional Vastu consultation and interior design services across India. We offer complete Vastu Shastra and interior solutions for homes, offices, and commercial spaces.",
  keywords: [
    "vastu consultant india, vastu expert india, vastu shastra consultant india, interior designer india, vastu and interior design, interior design with vastu",
  ],

  // ✅ Canonical
  alternates: {
    canonical: "https://www.vasterior.com/",
  },

  openGraph: {
    title: "Vastu Consultant & Interior Design Services in India | Vasterior",
    description:
      "Vasterior provides professional Vastu consultation and interior design services across India. We offer complete Vastu Shastra and interior solutions for homes, offices, and commercial spaces.",
    url: "https://www.vasterior.com/",
    siteName: "Vasterior",
    images: [
      {
        url: "hhttps://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
        width: 1200,
        height: 630,
        alt: "Vastu Consultant & Interior Design Services in India | Vasterior",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vastu Consultant & Interior Design Services in India | Vasterior",
    description:
      "Vasterior provides professional Vastu consultation and interior design services across India. We offer complete Vastu Shastra and interior solutions for homes, offices, and commercial spaces.",
    images: [
      "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
    ],
  },

  icons: {
  icon: [
    { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    { url: "/favicon.ico", sizes: "any" }, // fallback
    ],
  },


  // ✅ Google site verification
  
}

export default function Home() {
  return (
    <>
      <Hero />
      <Brandstory />
      <Aboutus />
      <Services />
      <Portfolio />
      {/* <MagazineSection /> */}

      <Blog />
      {/* <Collaborators /> */}
      <Testimonials />
    </>
  )
}
