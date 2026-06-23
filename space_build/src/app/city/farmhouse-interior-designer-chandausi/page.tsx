import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Farmhouse Interior Designer Chandausi , UP | Vasterior",
  description:
    "Farmhouse Interior Designer in Chandausi, UP | Vasterior designs rustic-modern farmhouse interiors with comfort and luxury appeal.",
  keywords:
    "farmhouse interior designer chandausi, modern farmhouse interiors chandausi, luxury farmhouse design chandausi",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/farmhouse-interior-designer-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/farmhouse-interior-designer-chandausi",
    title: "Farmhouse Interior Designer Chandausi, UP | Vasterior",
    description:
      "Farmhouse Interior Designer in Chandausi, UP | Vasterior designs rustic-modern farmhouse interiors with comfort and luxury appeal.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Farmhouse Interior Designer Chandausi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Farmhouse Interior Designer Chandausi, UP | Vasterior",
    description:
      "Farmhouse Interior Designer in Chandausi, UP | Vasterior designs rustic-modern farmhouse interiors with comfort and luxury appeal.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function FarmhouseInteriorDesignerChandausi() {
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
