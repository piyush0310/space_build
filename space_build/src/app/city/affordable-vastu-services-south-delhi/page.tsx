import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Affordable Vastu Services South Delhi",
  description:
    "Looking for affordable Vastu services in South Delhi? Space Build delivers quality consultation at reasonable costs.",
  keywords:
    "affordable vastu services south delhi, low cost vastu, vastu expert",
  alternates: {
    canonical:
      "https://www.Space Build.com/city/affordable-vastu-services-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.Space Build.com/city/affordable-vastu-services-south-delhi",
    title: "Affordable Vastu Services South Delhi ",
    description:
      "Looking for affordable Vastu services in South Delhi? Space Build delivers quality consultation at reasonable costs.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Affordable Vastu Services South Delhi ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Space Build",
    title: "Affordable Vastu Services South Delhi ",
    description:
      "Looking for affordable Vastu services in South Delhi? Space Build delivers quality consultation at reasonable costs.",
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
