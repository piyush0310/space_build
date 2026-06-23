import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Residential and Vastu Interior Consultant South Delhi",
  description:
    "Looking for a residential and Vastu interior consultant in South Delhi with price details? Vasterior provides tailored, Vastu-compliant home interiors.",
  keywords:
    "residential and vastu interior consultant south delhi, vastu interior designer south delhi, home interior designer south delhi",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/residential-and-vastu-interior-consultant-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/residential-and-vastu-interior-consultant-south-delhi",
    title:
      "Residential and Vastu Interior Consultant South Delhi",
    description:
      "Looking for a residential and Vastu interior consultant in South Delhi with price details? Vasterior provides tailored, Vastu-compliant home interiors.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Residential and Vastu Interior Consultant South Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title:
      "Residential and Vastu Interior Consultant South Delhi",
    description:
      "Looking for a residential and Vastu interior consultant in South Delhi with price details? Vasterior provides tailored, Vastu-compliant home interiors.",
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
