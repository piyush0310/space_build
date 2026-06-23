// File: vastu-site-visit-in-noida-extension/page.tsx
import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Site Visit in Noida Extension, Uttar Pradesh | Vasterior",
  description: "Looking for Vastu Site Visit in Noida Extension, Uttar Pradesh? Vasterior provides on-site inspections. Book a professional Vastu Site Visit in Noida Extension for homes, offices & businesses.",
  keywords: "vastu site visit, onsite vastu consultant, property vastu inspection",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-site-visit-in-noida-extension",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-site-visit-in-noida-extension",
    title: "Vastu Site Visit in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for Vastu Site Visit in Noida Extension, Uttar Pradesh? Vasterior provides on-site inspections. Book a professional Vastu Site Visit in Noida Extension for homes, offices & businesses.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Vastu Site Visit in Noida Extension",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Site Visit in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for Vastu Site Visit in Noida Extension, Uttar Pradesh? Vasterior provides on-site inspections. Book a professional Vastu Site Visit in Noida Extension for homes, offices & businesses.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuSiteVisitNoidaExtension() {
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