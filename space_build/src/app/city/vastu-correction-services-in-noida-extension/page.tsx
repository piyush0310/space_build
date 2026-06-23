import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog"

export const metadata: Metadata = {
  title: "Vastu Correction Services in Noida Extension, Uttar Pradesh | Vasterior",
  description: "Looking for Vastu Correction Services in Noida Extension, Uttar Pradesh? Vasterior offers effective remedies. Get expert Vastu Correction Services in Noida Extension for residential & commercial needs.",
  keywords: "vastu correction services, vastu remedies noida, vastu dosha correction",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-correction-services-in-noida-extension",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-correction-services-in-noida-extension",
    title: "Vastu Correction Services in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for Vastu Correction Services in Noida Extension, Uttar Pradesh? Vasterior offers effective remedies. Get expert Vastu Correction Services in Noida Extension for residential & commercial needs.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Vastu Correction Services in Noida Extension",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Correction Services in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for Vastu Correction Services in Noida Extension, Uttar Pradesh? Vasterior offers effective remedies. Get expert Vastu Correction Services in Noida Extension for residential & commercial needs.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuCorrectionServicesNoidaExtension() {
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