import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Bedroom Interior Designer Chandausi, UP | Vasterior",
  description: "Bedroom Interior Designer in Chandausi, UP | Vasterior creates cozy, elegant bedroom interiors with customized designs.",
  keywords: "bedroom interior designer chandausi, modern bedroom interiors chandausi, luxury bedroom design chandausi",
  alternates: {
    canonical: "https://www.vasterior.com/city/bedroom-interior-designer-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/bedroom-interior-designer-chandausi",
    title: "Bedroom Interior Designer Chandausi, UP | Vasterior",
    description: "Bedroom Interior Designer in Chandausi, UP | Vasterior creates cozy, elegant bedroom interiors with customized designs.",
    images: [{
      url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
      width: 1200,
      height: 630,
      alt: "Bedroom Interior Designer Chandausi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Bedroom Interior Designer Chandausi, UP | Vasterior",
    description: "Bedroom Interior Designer in Chandausi, UP | Vasterior creates cozy, elegant bedroom interiors with customized designs.",
    images: ["https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function BedroomInteriorDesignerChandausi() {
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
