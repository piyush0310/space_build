import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Online Vastu Services South Delhi ",
  description:
    "Looking for online Vastu services in South Delhi? Vasterior delivers expert Vastu solutions through virtual consultation.",
  keywords:
    "online vastu services south delhi, virtual vastu expert, vastu consultation",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/online-vastu-services-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/online-vastu-services-south-delhi",
    title: "Online Vastu Services South Delhi ",
    description:
      "Looking for online Vastu services in South Delhi? Vasterior delivers expert Vastu solutions through virtual consultation.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Online Vastu Services South Delhi ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Online Vastu Services South Delhi ",
    description:
      "Looking for online Vastu services in South Delhi? Vasterior delivers expert Vastu solutions through virtual consultation.",
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
