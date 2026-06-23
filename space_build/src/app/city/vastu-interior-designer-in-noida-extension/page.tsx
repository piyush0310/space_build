import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog"

export const metadata: Metadata = {
  title: "Vastu Interior Designer in Noida Extension, Uttar Pradesh | Vasterior",
  description: "Looking for a Vastu Interior Designer in Noida Extension, Uttar Pradesh? Vasterior blends interiors with Vastu. Choose the top Vastu Interior Designer in Noida Extension for homes & commercial projects.",
  keywords: "vastu interior designer, interior vastu services, home interior vastu",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-interior-designer-in-noida-extension",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-interior-designer-in-noida-extension",
    title: "Vastu Interior Designer in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for a Vastu Interior Designer in Noida Extension, Uttar Pradesh? Vasterior blends interiors with Vastu. Choose the top Vastu Interior Designer in Noida Extension for homes & commercial projects.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Vastu Interior Designer in Noida Extension",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Interior Designer in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for a Vastu Interior Designer in Noida Extension, Uttar Pradesh? Vasterior blends interiors with Vastu. Choose the top Vastu Interior Designer in Noida Extension for homes & commercial projects.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuInteriorDesignerNoidaExtension() {
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