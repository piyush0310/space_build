import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Consultant in Panchsheel Park, South Delhi | Vasterior",
  description:
    "Looking for a Vastu Consultant in Panchsheel Park, South Delhi? Vasterior provides expert Vastu advice.",
  keywords:
    "vastu consultant panchsheel park, vastu expert, vastu services",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/vastu-consultant-in-panchsheel-park-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-consultant-in-panchsheel-park-south-delhi",
    title: "Vastu Consultant in Panchsheel Park, South Delhi | Vasterior",
    description:
      "Looking for a Vastu Consultant in Panchsheel Park, South Delhi? Vasterior provides expert Vastu advice.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Vastu Consultant in Panchsheel Park, South Delhi | Vasterior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Consultant in Panchsheel Park, South Delhi | Vasterior",
    description:
      "Looking for a Vastu Consultant in Panchsheel Park, South Delhi? Vasterior provides expert Vastu advice.",
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
