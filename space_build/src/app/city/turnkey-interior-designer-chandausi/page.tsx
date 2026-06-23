import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Turnkey Interior Designer Chandausi, UP",
  description: "Turnkey Interior Designer in Chandausi, UP | Vasterior offers complete interior solutions from design to execution.",
  keywords: "turnkey interior designer chandausi, complete interior solutions chandausi, end to end interior services chandausi",
  alternates: {
    canonical: "https://www.vasterior.com/city/turnkey-interior-designer-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/turnkey-interior-designer-chandausi",
    title: "Turnkey Interior Designer Chandausi, UP | Vasterior",
    description: "Turnkey Interior Designer in Chandausi, UP | Vasterior offers complete interior solutions from design to execution.",
    images: [{
      url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
      width: 1200,
      height: 630,
      alt: "Turnkey Interior Designer Chandausi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Turnkey Interior Designer Chandausi",
    description: "Turnkey Interior Designer in Chandausi, UP | Vasterior offers complete interior solutions from design to execution.",
    images: ["https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function TurnkeyInteriorDesignerChandausi() {
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
