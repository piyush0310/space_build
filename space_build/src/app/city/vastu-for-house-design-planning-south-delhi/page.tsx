import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu for House Design & Planning South Delhi ",
  description:
    "Searching for Vastu for house design & planning in South Delhi? Vasterior delivers expert layout & planning consultations.",
  keywords:
    "house design vastu south delhi, vastu planning expert, vastu layout design",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/vastu-for-house-design-planning-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-for-house-design-planning-south-delhi",
    title: "Vastu for House Design & Planning South Delhi ",
    description:
      "Searching for Vastu for house design & planning in South Delhi? Vasterior delivers expert layout & planning consultations.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Vastu for House Design & Planning South Delhi ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu for House Design & Planning South Delhi",
    description:
      "Searching for Vastu for house design & planning in South Delhi? Vasterior delivers expert layout & planning consultations.",
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
