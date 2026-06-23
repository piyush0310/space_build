import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Home Renovation Interior Designer Amroha | Vasterior Studios",
  description:
    "Home Renovation Interior Designer Amroha – Vasterior Studios offers complete home renovation, layout redesign, smart interiors & premium finishing.",
  keywords:
    "home renovation amroha, renovation interior designer amroha, home remodeling amroha",
  alternates: {
    canonical: "https://www.vasterior.com/city/home-renovation-interior-designer-amroha",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/home-renovation-interior-designer-amroha",
    title: "Home Renovation Interior Designer Amroha | Vasterior Studios",
    description:
      "Home Renovation Interior Designer Amroha – Vasterior Studios offers complete home renovation, layout redesign, smart interiors & premium finishing.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Home Renovation Interior Designer Amroha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Home Renovation Interior Designer Amroha | Vasterior Studios",
    description:
      "Home Renovation Interior Designer Amroha – Vasterior Studios offers complete home renovation, layout redesign, smart interiors & premium finishing.",
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
