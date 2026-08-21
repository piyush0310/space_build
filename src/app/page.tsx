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
  title: "Vastu Consultant & Interior Design Services in India | Space Build",
  description:
    "Space Build provides professional Vastu consultation and interior design services across India. We offer complete Vastu Shastra and interior solutions for homes, offices, and commercial spaces.",
  keywords: [
    "vastu consultant india, vastu expert india, vastu shastra consultant india, interior designer india, vastu and interior design, interior design with vastu",
  ],

  // ✅ Canonical
  alternates: {
    canonical: "https://www.spacebuild.co.in/",
  },

  openGraph: {
    title: "Vastu Consultant & Interior Design Services in India | Space Build",
    description:
      "Space Build provides professional Vastu consultation and interior design services across India. We offer complete Vastu Shastra and interior solutions for homes, offices, and commercial spaces.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build",
    images: [
      {
        url: "hhttps://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/Space Buildlogo_bmzk0r.png",
        width: 1200,
        height: 630,
        alt: "Vastu Consultant & Interior Design Services in India | Space Build",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vastu Consultant & Interior Design Services in India | Space Build",
    description:
      "Space Build provides professional Vastu consultation and interior design services across India. We offer complete Vastu Shastra and interior solutions for homes, offices, and commercial spaces.",
    images: [
      "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/Space Buildlogo_bmzk0r.png",
    ],
  },

  icons: {
  icon: [
   
    { url: "/favicon.ico", sizes: "any" }, // fallback
    ],
  },


  // ✅ 
  
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
