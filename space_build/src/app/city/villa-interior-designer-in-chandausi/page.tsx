import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Villa Interior Designer in Chandausi, UP | Vasterior",
  description:
    "Villa Interior Designer in Chandausi, UP | Vasterior offers bespoke villa interiors with luxury design, planning, and execution services.",
  keywords:
    "villa interior designer chandausi, luxury villa interiors chandausi, premium villa design chandausi",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/villa-interior-designer-in-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/villa-interior-designer-in-chandausi",
    title: "Villa Interior Designer in Chandausi, UP | Vasterior",
    description:
      "Villa Interior Designer in Chandausi, UP | Vasterior offers bespoke villa interiors with luxury design, planning, and execution services.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Villa Interior Designer Chandausi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Villa Interior Designer in Chandausi, UP | Vasterior",
    description:
      "Villa Interior Designer in Chandausi, UP | Vasterior offers bespoke villa interiors with luxury design, planning, and execution services.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VillaInteriorDesignerChandausi() {
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
