import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "False Ceiling Designer Chandausi, UP",
  description: "False Ceiling Designer Chandausi, UP | Vasterior",
  keywords: "false ceiling designer chandausi, modern ceiling design chandausi, gypsum ceiling chandausi",
  alternates: {
    canonical: "https://www.vasterior.com/city/false-ceiling-designer-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/false-ceiling-designer-chandausi",
    title: "False Ceiling Designer in Chandausi, UP | Vasterior provides modern ceiling designs with lighting solutions for homes and offices.",
    description: "False Ceiling Designer in Chandausi, UP | Vasterior provides modern ceiling designs with lighting solutions for homes and offices.",
    images: [{
      url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
      width: 1200,
      height: 630,
      alt: "False Ceiling Designer Chandausi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "False Ceiling Designer Chandausi, UP | Vasterior",
    description: "False Ceiling Designer in Chandausi, UP | Vasterior provides modern ceiling designs with lighting solutions for homes and offices.",
    images: ["https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function HomeRenovationContractorChandausi() {
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
