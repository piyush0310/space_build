import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "High-End Home Interior Design Chandausi , UP | Vasterior",
  description:
    "High-End Home Interior Design in Chandausi, UP | Vasterior delivers luxury interiors with bespoke designs and premium craftsmanship.",
  keywords:
    "high end home interior design chandausi, luxury modern interiors chandausi, premium interior solutions chandausi",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/high-end-home-interior-design-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/high-end-home-interior-design-chandausi",
    title: "High-End Home Interior Design Chandausi, UP | Vasterior",
    description:
      "High-End Home Interior Design in Chandausi, UP | Vasterior delivers luxury interiors with bespoke designs and premium craftsmanship.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "High-End Home Interior Design Chandausi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "High-End Home Interior Design Chandausi, UP | Vasterior",
    description:
      "High-End Home Interior Design in Chandausi, UP | Vasterior delivers luxury interiors with bespoke designs and premium craftsmanship.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function HighEndHomeInteriorDesignChandausi() {
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
