import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Interior Design Services South Delhi",
  description:
    "Looking for interior design services in South Delhi with price details? Vasterior offers premium, affordable & Vastu-aligned design solutions.",
  keywords:
    "interior design services south delhi, home interior designer south delhi, residential interior designer south delhi",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/interior-design-services-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/interior-design-services-south-delhi",
    title: "Interior Design Services South Delhi",
    description:
      "Looking for interior design services in South Delhi with price details? Vasterior offers premium, affordable & Vastu-aligned design solutions.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Interior Design Services South Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Interior Design Services South Delhi",
    description:
      "Looking for interior design services in South Delhi with price details? Vasterior offers premium, affordable & Vastu-aligned design solutions.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function InteriorDesignerNearMeMoradabadDistrict() {
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
