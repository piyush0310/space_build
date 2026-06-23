import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Consultant in Kalkaji, South Delhi",
  description:
    "Looking for a Vastu Consultant in Kalkaji, South Delhi? Vasterior offers expert Vastu services.",
  keywords:
    "vastu consultant kalkaji, vastu expert kalkaji, vastu services",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/vastu-consultant-in-kalkaji-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-consultant-in-kalkaji-south-delhi",
    title: "Vastu Consultant in Kalkaji, South Delhi ",
    description:
      "Looking for a Vastu Consultant in Kalkaji, South Delhi? Vasterior offers expert Vastu services.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Vastu Consultant in Kalkaji, South Delhi ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Consultant in Kalkaji, South Delhi ",
    description:
      "Looking for a Vastu Consultant in Kalkaji, South Delhi? Vasterior offers expert Vastu services.",
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
