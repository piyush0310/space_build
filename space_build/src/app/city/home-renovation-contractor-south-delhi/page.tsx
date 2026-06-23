import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Home Renovation Contractor South Delhi",
  description:
    "Looking for a home renovation contractor in South Delhi with price details? Vasterior provides modern, functional & Vastu-based home renovations.",
  keywords:
    "home renovation contractor south delhi, interior contractor south delhi, home interiors south delhi",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/home-renovation-contractor-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/home-renovation-contractor-south-delhi",
    title: "Home Renovation Contractor South Delhi",
    description:
      "Looking for a home renovation contractor in South Delhi with price details? Vasterior provides modern, functional & Vastu-based home renovations.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Home Renovation Contractor South Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Home Renovation Contractor South Delhi",
    description:
      "Looking for a home renovation contractor in South Delhi with price details? Vasterior provides modern, functional & Vastu-based home renovations.",
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
