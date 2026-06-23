import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Correction Services South Delhi",
  description:
    "Searching for Vastu correction services in South Delhi? Vasterior offers effective remedies to balance energies.",
  keywords:
    "vastu correction services south delhi, vastu remedies, vastu defect correction",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/vastu-correction-services-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-correction-services-south-delhi",
    title: "Vastu Correction Services South Delhi",
    description:
      "Searching for Vastu correction services in South Delhi? Vasterior offers effective remedies to balance energies.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Vastu Correction Services South Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Correction Services South Delhi",
    description:
      "Searching for Vastu correction services in South Delhi? Vasterior offers effective remedies to balance energies.",
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
