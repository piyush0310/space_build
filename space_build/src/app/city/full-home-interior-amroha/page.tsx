import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Full Home Interior Amroha | Vasterior Studios",
  description:
    "Full Home Interior Amroha – Vasterior Studios provides complete home interiors with modern designs, premium execution & guaranteed quality.",
  keywords:
    "full home interior amroha, complete home interiors amroha, full house design amroha",
  alternates: {
    canonical: "https://www.vasterior.com/city/full-home-interior-amroha",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/full-home-interior-amroha",
    title: "Full Home Interior Amroha | Vasterior Studios",
    description:
      "Full Home Interior Amroha – Vasterior Studios provides complete home interiors with modern designs, premium execution & guaranteed quality.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Full Home Interior Amroha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Full Home Interior Amroha | Vasterior Studios",
    description:
      "Full Home Interior Amroha – Vasterior Studios provides complete home interiors with modern designs, premium execution & guaranteed quality.",
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
