import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog"

export const metadata: Metadata = {
  title: "Vastu Expert in Noida Extension, Uttar Pradesh | Vasterior",
  description: "Looking for an experienced Vastu Expert in Noida Extension, Uttar Pradesh? Vasterior offers professional guidance. Choose the best Vastu Expert in Noida Extension for residential & commercial spaces.",
  keywords: "vastu expert noida extension, professional vastu consultant, vastu services uttar pradesh",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-expert-in-noida-extension",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-expert-in-noida-extension",
    title: "Vastu Expert in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for an experienced Vastu Expert in Noida Extension, Uttar Pradesh? Vasterior offers professional guidance. Choose the best Vastu Expert in Noida Extension for residential & commercial spaces.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Vastu Expert in Noida Extension",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Expert in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for an experienced Vastu Expert in Noida Extension, Uttar Pradesh? Vasterior offers professional guidance. Choose the best Vastu Expert in Noida Extension for residential & commercial spaces.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuExpertNoidaExtension() {
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