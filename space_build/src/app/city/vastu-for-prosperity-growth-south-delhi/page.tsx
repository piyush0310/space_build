import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu for Prosperity & Growth South Delhi",
  description:
    "Need Vastu for prosperity & growth in South Delhi? Vasterior provides expert solutions for success & stability.",
  keywords:
    "vastu for prosperity south delhi, growth vastu, success vastu",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/vastu-for-prosperity-growth-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-for-prosperity-growth-south-delhi",
    title: "Vastu for Prosperity & Growth South Delhi",
    description:
      "Need Vastu for prosperity & growth in South Delhi? Vasterior provides expert solutions for success & stability.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Vastu for Prosperity & Growth South Delhi ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu for Prosperity & Growth South Delhi ",
    description:
      "Need Vastu for prosperity & growth in South Delhi? Vasterior provides expert solutions for success & stability.",
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
