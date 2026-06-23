import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Civil + Interior Work South Delhi",
  description:
    "Looking for civil + interior work in South Delhi with price details? Vasterior offers combined, high-quality & Vastu-aligned solutions.",
  keywords:
    "civil + interior work south delhi, interior contractor south delhi, turnkey interior designer south delhi",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/civil-interior-work-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/civil-interior-work-south-delhi",
    title: "Civil + Interior Work South Delhi",
    description:
      "Looking for civil + interior work in South Delhi with price details? Vasterior offers combined, high-quality & Vastu-aligned solutions.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Civil + Interior Work South Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Civil + Interior Work South Delhi",
    description:
      "Looking for civil + interior work in South Delhi with price details? Vasterior offers combined, high-quality & Vastu-aligned solutions.",
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
