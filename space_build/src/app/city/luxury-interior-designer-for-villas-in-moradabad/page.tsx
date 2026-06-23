import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Luxury Interior Designer For Villas In Moradabad, UP| Vasterior",
  description: "Vasterior, the Luxury Interior Designer for Villas in Moradabad, creates lavish villa interiors. Trust the leading Luxury Interior Designer for Villas in Moradabad for timeless elegance.",
  keywords: "luxury villa interior designer Moradabad, villa luxury interiors Moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/luxury-interior-designer-for-villas-in-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/luxury-interior-designer-for-villas-in-moradabad",
    title: "Luxury Interior Designer For Villas In Moradabad, UP| Vasterior",
    description: "Vasterior, the Luxury Interior Designer for Villas in Moradabad, creates lavish villa interiors. Trust the leading Luxury Interior Designer for Villas in Moradabad for timeless elegance.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Luxury Interior Designer For Villas In Moradabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Luxury Interior Designer For Villas In Moradabad, UP| Vasterior",
    description: "Vasterior, the Luxury Interior Designer for Villas in Moradabad, creates lavish villa interiors. Trust the leading Luxury Interior Designer for Villas in Moradabad for timeless elegance.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function LuxuryInteriorDesignerForVillasInMoradabad() {
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