import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Restaurant Interior Designer Amroha | Vasterior Studios",
  description:
    "Restaurant Interior Designer Amroha – Vasterior Studios builds stylish, themed restaurant interiors designed for comfort & brand appeal.",
  keywords:
    "restaurant interior designer amroha, restaurant décor amroha, themed restaurant design amroha",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/restaurant-interior-designer-amroha",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/restaurant-interior-designer-amroha",
    title: "Restaurant Interior Designer Amroha | Vasterior Studios",
    description:
      "Restaurant Interior Designer Amroha – Vasterior Studios builds stylish, themed restaurant interiors designed for comfort & brand appeal.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Restaurant Interior Designer Amroha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Restaurant Interior Designer Amroha | Vasterior Studios",
    description:
      "Restaurant Interior Designer Amroha – Vasterior Studios builds stylish, themed restaurant interiors designed for comfort & brand appeal.",
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
