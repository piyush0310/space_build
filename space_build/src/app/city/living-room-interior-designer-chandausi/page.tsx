import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Living Room Interior Designer Chandausi, UP | Vasterior",
  description: "Living Room Interior Designer in Chandausi, UP | Vasterior designs stylish living spaces with modern décor and premium finishes.",
  keywords: "living room interior designer chandausi, modern living room interiors chandausi, luxury living space chandausi",
  alternates: {
    canonical: "https://www.vasterior.com/city/living-room-interior-designer-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/living-room-interior-designer-chandausi",
    title: "Living Room Interior Designer Chandausi, UP | Vasterior",
    description: "Living Room Interior Designer in Chandausi, UP | Vasterior designs stylish living spaces with modern décor and premium finishes.",
    images: [{
      url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
      width: 1200,
      height: 630,
      alt: "Living Room Interior Designer Chandausi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Living Room Interior Designer Chandausi, UP | Vasterior",
    description: "Living Room Interior Designer in Chandausi, UP | Vasterior designs stylish living spaces with modern décor and premium finishes.",
    images: ["https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function LivingRoomInteriorDesignerChandausi() {
  return (
    <div className="min-h-screen bg-[#FFF1E0]">
      <Banner />
      <Content />
      <Services />
      
      <Portfolio />
      <Blog />
      <Testimonials />
    </div>
  );
}
