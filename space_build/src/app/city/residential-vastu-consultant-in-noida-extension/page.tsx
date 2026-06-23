// File 7: app/city/residential-vastu-consultant-in-noida-extension/page.tsx
import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog"

export const metadata: Metadata = {
  title: "Residential Vastu Consultant in Noida Extension, Uttar Pradesh | Vasterior",
  description: "Looking for a Residential Vastu Consultant in Noida Extension, Uttar Pradesh? Vasterior specializes in home interiors. Hire the best Residential Vastu Consultant in Noida Extension for flats, villas & duplexes.",
  keywords: "residential vastu consultant, home vastu noida extension, apartment vastu services",
  alternates: {
    canonical: "https://www.vasterior.com/city/residential-vastu-consultant-in-noida-extension",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/residential-vastu-consultant-in-noida-extension",
    title: "Residential Vastu Consultant in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for a Residential Vastu Consultant in Noida Extension, Uttar Pradesh? Vasterior specializes in home interiors. Hire the best Residential Vastu Consultant in Noida Extension for flats, villas & duplexes.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Residential Vastu Consultant in Noida Extension",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Residential Vastu Consultant in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for a Residential Vastu Consultant in Noida Extension, Uttar Pradesh? Vasterior specializes in home interiors. Hire the best Residential Vastu Consultant in Noida Extension for flats, villas & duplexes.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function ResidentialVastuConsultantNoidaExtension() {
  return (
    <div className="min-h-screen bg-[#FFF1E0]">
      <Banner />
      <Content />
      
      
      <Portfolio />
      <Blog />
      <Testimonials />
    </div>
  );
}