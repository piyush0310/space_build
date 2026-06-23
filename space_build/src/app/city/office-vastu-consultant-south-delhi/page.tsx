import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Office Vastu Consultant South Delhi",
  description:
    "Looking for an office Vastu Consultant in South Delhi? Vasterior offers expert Vastu solutions to enhance productivity & success.",
  keywords:
    "office vastu consultant south delhi, workplace vastu expert, office vastu",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/office-vastu-consultant-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/office-vastu-consultant-south-delhi",
    title: "Office Vastu Consultant South Delhi",
    description:
      "Looking for an office Vastu Consultant in South Delhi? Vasterior offers expert Vastu solutions to enhance productivity & success.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Office Vastu Consultant South Delhi ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Office Vastu Consultant South Delhi ",
    description:
      "Looking for an office Vastu Consultant in South Delhi? Vasterior offers expert Vastu solutions to enhance productivity & success.",
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
