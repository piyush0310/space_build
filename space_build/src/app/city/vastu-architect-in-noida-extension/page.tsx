import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog"

export const metadata: Metadata = {
  title: "Vastu Architect in Noida Extension, Uttar Pradesh | Vasterior",
  description: "Looking for a Vastu Architect in Noida Extension, Uttar Pradesh? Vasterior creates spaces aligned with Vastu. Hire the best Vastu Architect in Noida Extension for homes, offices & showrooms.",
  keywords: "vastu architect, architectural vastu services, building vastu consultant",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-architect-in-noida-extension",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-architect-in-noida-extension",
    title: "Vastu Architect in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for a Vastu Architect in Noida Extension, Uttar Pradesh? Vasterior creates spaces aligned with Vastu. Hire the best Vastu Architect in Noida Extension for homes, offices & showrooms.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Vastu Architect in Noida Extension",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Architect in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for a Vastu Architect in Noida Extension, Uttar Pradesh? Vasterior creates spaces aligned with Vastu. Hire the best Vastu Architect in Noida Extension for homes, offices & showrooms.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuArchitectNoidaExtension() {
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