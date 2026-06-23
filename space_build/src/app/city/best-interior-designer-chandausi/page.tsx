import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Best Interior Designer Chandausi, UP | Vasterior",
  description:
    "Best Interior Designer in Chandausi, UP | Vasterior offers modern, luxury & budget interiors, turnkey solutions, and Vastu-based designs for homes.",
  keywords:
    "best interior designer chandausi, top interior designer chandausi, premium interior designer chandausi, vasterior interiors",
  alternates: {
    canonical: "https://www.vasterior.com/city/best-interior-designer-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/best-interior-designer-chandausi",
    title: "Best Interior Designer Chandausi, UP | Vasterior",
    description:
      "Best Interior Designer in Chandausi, UP | Vasterior offers modern, luxury & budget interiors, turnkey solutions, and Vastu-based designs for homes.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Best Interior Designer Chandausi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Best Interior Designer Chandausi, UP | Vasterior",
    description:
      "Best Interior Designer in Chandausi, UP | Vasterior offers modern, luxury & budget interiors, turnkey solutions, and Vastu-based designs for homes.",
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
