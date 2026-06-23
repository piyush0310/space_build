import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Commercial Interior Designer Chandausi, UP | Vasterior",
  description: "Commercial Interior Designer in Chandausi, UP | Vasterior designs offices, retail spaces, and showrooms with professional layouts.",
  keywords: "commercial interior designer chandausi, office interior designer chandausi, retail interior design chandausi",
  alternates: {
    canonical: "https://www.vasterior.com/city/commercial-interior-designer-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/commercial-interior-designer-chandausi",
    title: "Commercial Interior Designer Chandausi, UP | Vasterior",
    description: "Commercial Interior Designer in Chandausi, UP | Vasterior designs offices, retail spaces, and showrooms with professional layouts.",
    images: [{
      url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
      width: 1200,
      height: 630,
      alt: "Commercial Interior Designer Chandausi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Commercial Interior Designer Chandausi, UP | Vasterior",
    description: "Commercial Interior Designer in Chandausi, UP | Vasterior designs offices, retail spaces, and showrooms with professional layouts.",
    images: ["https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function CommercialInteriorDesignerChandausi() {
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
