import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Home Renovation Interior Designer Chandausi , UP | Vasterior",
  description:
    "Home Renovation Interior Designer in Chandausi, UP | Vasterior provides expert remodeling, modern upgrades, and turnkey renovation services.",
  keywords:
    "home renovation interior designer chandausi, interior renovation services chandausi, home remodeling chandausi",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/home-renovation-interior-designer-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/home-renovation-interior-designer-chandausi",
    title: "Home Renovation Interior Designer Chandausi, UP | Vasterior",
    description:
      "Home Renovation Interior Designer in Chandausi, UP | Vasterior provides expert remodeling, modern upgrades, and turnkey renovation services.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Home Renovation Interior Designer Chandausi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Home Renovation Interior Designer Chandausi, UP | Vasterior",
    description:
      "Home Renovation Interior Designer in Chandausi, UP | Vasterior provides expert remodeling, modern upgrades, and turnkey renovation services.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function HomeRenovationInteriorDesignerChandausi() {
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
