import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Modular Kitchen And Wardrobe Designer Moradabad, UP| Vasterior",
  description: "Vasterior, the Modular Kitchen and Wardrobe Designer Moradabad, creates smart, elegant storage. Trust the best Modular Kitchen and Wardrobe Designer Moradabad today.",
  keywords: "modular kitchen and wardrobe designer in Moradabad, wardrobe and kitchen interiors Moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/modular-kitchen-and-wardrobe-designer-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/modular-kitchen-and-wardrobe-designer-moradabad",
    title: "Modular Kitchen And Wardrobe Designer Moradabad, UP| Vasterior",
    description: "Vasterior, the Modular Kitchen and Wardrobe Designer Moradabad, creates smart, elegant storage. Trust the best Modular Kitchen and Wardrobe Designer Moradabad today.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Modular Kitchen And Wardrobe Designer Moradabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Modular Kitchen And Wardrobe Designer Moradabad, UP| Vasterior",
    description: "Vasterior, the Modular Kitchen and Wardrobe Designer Moradabad, creates smart, elegant storage. Trust the best Modular Kitchen and Wardrobe Designer Moradabad today.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function ModularKitchenAndWardrobeDesignerMoradabad() {
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