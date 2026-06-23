import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Modular Kitchen Designer Chandausi, UP | Vasterior",
  description: "Modular Kitchen Designer in Chandausi, UP | Vasterior offers stylish, functional kitchens with smart storage and modern finishes.",
  keywords: "modular kitchen designer chandausi, modern kitchen interiors chandausi, custom modular kitchen chandausi",
  alternates: {
    canonical: "https://www.vasterior.com/city/modular-kitchen-designer-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/modular-kitchen-designer-chandausi",
    title: "Modular Kitchen Designer Chandausi, UP | Vasterior",
    description: "Modular Kitchen Designer in Chandausi, UP | Vasterior offers stylish, functional kitchens with smart storage and modern finishes.",
    images: [{
      url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
      width: 1200,
      height: 630,
      alt: "Modular Kitchen Designer Chandausi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Modular Kitchen Designer Chandausi, UP | Vasterior",
    description: "Modular Kitchen Designer in Chandausi, UP | Vasterior offers stylish, functional kitchens with smart storage and modern finishes.",
    images: ["https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function ModularKitchenDesignerChandausi() {
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
