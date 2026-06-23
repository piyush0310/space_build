import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Top Interior Designer in Chandausi, UP | Vasterior",
  description:
    "Top Interior Designer in Chandausi, UP | Vasterior delivers premium home & commercial interiors with customized designs and turnkey execution.",
  keywords:
    "top interior designer chandausi, interior design firm chandausi, modern interior designer chandausi",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/top-interior-designer-in-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/top-interior-designer-in-chandausi",
    title: "Top Interior Designer in Chandausi, UP | Vasterior",
    description:
      "Top Interior Designer in Chandausi, UP | Vasterior delivers premium home & commercial interiors with customized designs and turnkey execution.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Top Interior Designer in Chandausi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Top Interior Designer in Chandausi, UP | Vasterior",
    description:
      "Top Interior Designer in Chandausi, UP | Vasterior delivers premium home & commercial interiors with customized designs and turnkey execution.",
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
