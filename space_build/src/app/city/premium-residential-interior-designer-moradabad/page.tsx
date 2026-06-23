import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Premium Residential Interior Designer Moradabad, UP| Vasterior",
  description: "Hire Vasterior, the Premium Residential Interior Designer Moradabad, for elegant, top-tier homes. The ultimate Premium Residential Interior Designer Moradabad for luxury living.",
  keywords: "premium residential interior designer in Moradabad, Moradabad premium home interiors",
  alternates: {
    canonical: "https://www.vasterior.com/city/premium-residential-interior-designer-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/premium-residential-interior-designer-moradabad",
    title: "Premium Residential Interior Designer Moradabad, UP| Vasterior",
    description: "Hire Vasterior, the Premium Residential Interior Designer Moradabad, for elegant, top-tier homes. The ultimate Premium Residential Interior Designer Moradabad for luxury living.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Premium Residential Interior Designer Moradabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Premium Residential Interior Designer Moradabad, UP| Vasterior",
    description: "Hire Vasterior, the Premium Residential Interior Designer Moradabad, for elegant, top-tier homes. The ultimate Premium Residential Interior Designer Moradabad for luxury living.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function PremiumResidentialInteriorDesignerMoradabad() {
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