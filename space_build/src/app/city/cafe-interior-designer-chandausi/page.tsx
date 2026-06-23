import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Café Interior Designer Chandausi, UP | Vasterior",
  description: "Café Interior Designer in Chandausi, UP | Vasterior creates trendy, inviting café interiors with modern and aesthetic designs.",
  keywords: "café interior designer chandausi, cafe interior design chandausi, modern cafe interiors chandausi",
  alternates: {
    canonical: "https://www.vasterior.com/city/café-interior-designer-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/café-interior-designer-chandausi",
    title: "Café Interior Designer Chandausi, UP | Vasterior",
    description: "Café Interior Designer in Chandausi, UP | Vasterior creates trendy, inviting café interiors with modern and aesthetic designs.",
    images: [{
      url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
      width: 1200,
      height: 630,
      alt: "Café Interior Designer Chandausi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Café Interior Designer Chandausi, UP | Vasterior",
    description: "Café Interior Designer in Chandausi, UP | Vasterior creates trendy, inviting café interiors with modern and aesthetic designs.",
    images: ["https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function BathroomInteriorRemodelingChandausi() {
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
