import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Home Interior Designer Chandausi , UP | Vasterior",
  description:
    "Home Interior Designer in Chandausi, UP | Vasterior delivers complete home interiors, modular kitchens, and modern design solutions.",
  keywords:
    "home interior designer chandausi, modern home interiors chandausi, vasterior home design",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/home-interior-designer-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/home-interior-designer-chandausi",
    title: "Home Interior Designer Chandausi, UP | Vasterior",
    description:
      "Home Interior Designer in Chandausi, UP | Vasterior delivers complete home interiors, modular kitchens, and modern design solutions.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Home Interior Designer Chandausi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Home Interior Designer Chandausi, UP | Vasterior",
    description:
      "Home Interior Designer in Chandausi, UP | Vasterior delivers complete home interiors, modular kitchens, and modern design solutions.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function HomeInteriorDesignerChandausi() {
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
