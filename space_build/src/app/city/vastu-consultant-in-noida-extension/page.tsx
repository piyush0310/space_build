import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog"

export const metadata: Metadata = {
  title: "Vastu Consultant in Noida Extension, Uttar Pradesh | Vasterior",
  description: "Looking for a trusted Vastu Consultant in Noida Extension, Uttar Pradesh? Vasterior offers expert Vastu Shastra solutions. Choose the best Vastu Consultant in Noida Extension for homes, offices, shops & businesses.",
  keywords: "vastu consultant noida extension, vastu services uttar pradesh, best vastu consultant",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-consultant-in-noida-extension",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-consultant-in-noida-extension",
    title: "Vastu Consultant in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for a trusted Vastu Consultant in Noida Extension, Uttar Pradesh? Vasterior offers expert Vastu Shastra solutions. Choose the best Vastu Consultant in Noida Extension for homes, offices, shops & businesses.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Vastu Consultant in Noida Extension",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Consultant in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for a trusted Vastu Consultant in Noida Extension, Uttar Pradesh? Vasterior offers expert Vastu Shastra solutions. Choose the best Vastu Consultant in Noida Extension for homes, offices, shops & businesses.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuConsultantNoidaExtension() {
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