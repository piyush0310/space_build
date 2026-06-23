import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Retail Store Interior Designer Chandausi, UP | Vasterior",
  description: "Retail Store Interior Designer in Chandausi, UP | Vasterior designs attractive retail interiors to enhance customer experience.",
  keywords: "retail store interior designer chandausi, shop interior design chandausi, retail interiors chandausi",
  alternates: {
    canonical: "https://www.vasterior.com/city/retail-store-interior-designer-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/retail-store-interior-designer-chandausi",
    title: "Retail Store Interior Designer Chandausi, UP | Vasterior",
    description: "Retail Store Interior Designer in Chandausi, UP | Vasterior designs attractive retail interiors to enhance customer experience.",
    images: [{
      url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
      width: 1200,
      height: 630,
      alt: "Retail Store Interior Designer Chandausi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Retail Store Interior Designer Chandausi, UP | Vasterior",
    description: "Retail Store Interior Designer in Chandausi, UP | Vasterior designs attractive retail interiors to enhance customer experience.",
    images: ["https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RetailStoreInteriorDesignerChandausi() {
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
