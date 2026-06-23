import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Premium Farmhouse Interior Designer Moradabad, UP| Vasterior",
  description: "Choose Vasterior, the Premium Farmhouse Interior Designer Moradabad, for elegant rustic charm. Your ideal Premium Farmhouse Interior Designer Moradabad is here.",
  keywords: "premium farmhouse interior designer Moradabad, farmhouse luxury interiors Moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/premium-farmhouse-interior-designer-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/premium-farmhouse-interior-designer-moradabad",
    title: "Premium Farmhouse Interior Designer Moradabad, UP| Vasterior",
    description: "Choose Vasterior, the Premium Farmhouse Interior Designer Moradabad, for elegant rustic charm. Your ideal Premium Farmhouse Interior Designer Moradabad is here.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Premium Farmhouse Interior Designer Moradabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Premium Farmhouse Interior Designer Moradabad, UP| Vasterior",
    description: "Choose Vasterior, the Premium Farmhouse Interior Designer Moradabad, for elegant rustic charm. Your ideal Premium Farmhouse Interior Designer Moradabad is here.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function PremiumFarmhouseInteriorDesignerMoradabad() {
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