import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Office Interior Designer Chandausi, UP | Vasterior",
  description: "Office Interior Designer in Chandausi, UP | Vasterior creates productive, modern office interiors with turnkey solutions.",
  keywords: "office interior designer chandausi, corporate interior design chandausi, modern office interiors chandausi",
  alternates: {
    canonical: "https://www.vasterior.com/city/office-interior-designer-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/office-interior-designer-chandausi",
    title: "Office Interior Designer Chandausi, UP | Vasterior",
    description: "Office Interior Designer in Chandausi, UP | Vasterior creates productive, modern office interiors with turnkey solutions.",
    images: [{
      url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
      width: 1200,
      height: 630,
      alt: "Office Interior Designer Chandausi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Office Interior Designer Chandausi, UP | Vasterior",
    description: "Office Interior Designer in Chandausi, UP | Vasterior creates productive, modern office interiors with turnkey solutions.",
    images: ["https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function OfficeInteriorDesignerChandausi() {
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
