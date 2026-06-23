import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Contemporary Interior Designer Chandausi , UP | Vasterior",
  description:
    "Contemporary Interior Designer in Chandausi, UP | Vasterior designs elegant, trend-driven interiors with premium finishes.",
  keywords:
    "contemporary interior designer chandausi, modern contemporary interiors chandausi, premium interior styling chandausi",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/contemporary-interior-designer-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/contemporary-interior-designer-chandausi",
    title: "Contemporary Interior Designer Chandausi, UP | Vasterior",
    description:
      "Contemporary Interior Designer in Chandausi, UP | Vasterior designs elegant, trend-driven interiors with premium finishes.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Contemporary Interior Designer Chandausi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Contemporary Interior Designer Chandausi, UP | Vasterior",
    description:
      "Contemporary Interior Designer in Chandausi, UP | Vasterior designs elegant, trend-driven interiors with premium finishes.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function ContemporaryInteriorDesignerChandausi() {
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
