import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Modern Farmhouse Interiors In Moradabad, UP| Vasterior",
  description: "Experience Modern Farmhouse Interiors in Moradabad with Vasterior, the specialist for Modern Farmhouse Interiors in Moradabad, blending chic and cozy styles.",
  keywords: "modern farmhouse interiors Moradabad, contemporary farmhouse interiors Moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/modern-farmhouse-interiors-in-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/modern-farmhouse-interiors-in-moradabad",
    title: "Modern Farmhouse Interiors In Moradabad, UP| Vasterior",
    description: "Experience Modern Farmhouse Interiors in Moradabad with Vasterior, the specialist for Modern Farmhouse Interiors in Moradabad, blending chic and cozy styles.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Modern Farmhouse Interiors In Moradabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Modern Farmhouse Interiors In Moradabad, UP| Vasterior",
    description: "Experience Modern Farmhouse Interiors in Moradabad with Vasterior, the specialist for Modern Farmhouse Interiors in Moradabad, blending chic and cozy styles.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function ModernFarmhouseInteriorsInMoradabad() {
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