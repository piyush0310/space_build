import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Luxury Villa Interior Designer Amroha | Vasterior Studios",
  description:
    "Luxury Villa Interior Designer Amroha – Vasterior Studios designs opulent villa spaces with modern layouts, bespoke décor & signature luxury.",
  keywords:
    "luxury villa interior designer amroha, premium villa design amroha, villa décor amroha",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/luxury-villa-interior-designer-amroha",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/luxury-villa-interior-designer-amroha",
    title: "Luxury Villa Interior Designer Amroha | Vasterior Studios",
    description:
      "Luxury Villa Interior Designer Amroha – Vasterior Studios designs opulent villa spaces with modern layouts, bespoke décor & signature luxury.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Luxury Villa Interior Designer Amroha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Luxury Villa Interior Designer Amroha | Vasterior Studios",
    description:
      "Luxury Villa Interior Designer Amroha – Vasterior Studios designs opulent villa spaces with modern layouts, bespoke décor & signature luxury.",
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
