import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Bedroom Interior Designer Amroha | Vasterior Studios",
  description:
    "Bedroom Interior Designer Amroha – Vasterior Studios designs cozy, elegant, and functional bedroom interiors with smart layout planning.",
  keywords:
    "bedroom interior designer amroha, bedroom décor amroha, bedroom design amroha",
  alternates: {
    canonical: "https://www.vasterior.com/city/bedroom-interior-designer-amroha",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/bedroom-interior-designer-amroha",
    title: "Bedroom Interior Designer Amroha | Vasterior Studios",
    description:
      "Bedroom Interior Designer Amroha – Vasterior Studios designs cozy, elegant, and functional bedroom interiors with smart layout planning.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Bedroom Interior Designer Amroha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Bedroom Interior Designer Amroha | Vasterior Studios",
    description:
      "Bedroom Interior Designer Amroha – Vasterior Studios designs cozy, elegant, and functional bedroom interiors with smart layout planning.",
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
