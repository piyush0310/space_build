import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Consultation by Phone South Delhi | Vasterior",
  description:
    "Searching for Vastu consultation by phone in South Delhi? Vasterior provides reliable guidance with easy remote consultation.",
  keywords:
    "phone vastu consultation south delhi, vastu advice by phone, vastu services",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/vastu-consultation-by-phone-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-consultation-by-phone-south-delhi",
    title: "Vastu Consultation by Phone South Delhi | Vasterior",
    description:
      "Searching for Vastu consultation by phone in South Delhi? Vasterior provides reliable guidance with easy remote consultation.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Vastu Consultation by Phone South Delhi | Vasterior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Consultation by Phone South Delhi | Vasterior",
    description:
      "Searching for Vastu consultation by phone in South Delhi? Vasterior provides reliable guidance with easy remote consultation.",
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
