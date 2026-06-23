import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Residential Interior Designer Amroha | Vasterior Studios",
  description:
    "Residential Interior Designer Amroha – Vasterior Studios specializes in modern home interiors, space planning, décor, modular solutions & custom designs.",
  keywords:
    "residential interior designer amroha, home interiors amroha, house interior design amroha",
  alternates: {
    canonical: "https://www.vasterior.com/city/residential-interior-designer-amroha",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/residential-interior-designer-amroha",
    title: "Residential Interior Designer Amroha | Vasterior Studios",
    description:
      "Residential Interior Designer Amroha – Vasterior Studios specializes in modern home interiors, space planning, décor, modular solutions & custom designs.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Residential Interior Designer Amroha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Residential Interior Designer Amroha | Vasterior Studios",
    description:
      "Residential Interior Designer Amroha – Vasterior Studios specializes in modern home interiors, space planning, décor, modular solutions & custom designs.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function AffordableInteriorDesignerFor3BhkInMoradabad() {
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
