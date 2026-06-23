import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Consultant in Malviya Nagar, South Delhi ",
  description:
    "Looking for a Vastu Consultant in Malviya Nagar, South Delhi? Vasterior provides trusted Vastu solutions.",
  keywords:
    "vastu consultant malviya nagar, local vastu expert, vastu services south delhi",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/vastu-consultant-in-malviya-nagar-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-consultant-in-malviya-nagar-south-delhi",
    title: "Vastu Consultant in Malviya Nagar, South Delhi",
    description:
      "Looking for a Vastu Consultant in Malviya Nagar, South Delhi? Vasterior provides trusted Vastu solutions.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Vastu Consultant in Malviya Nagar, South Delhi ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Consultant in Malviya Nagar, South Delhi ",
    description:
      "Looking for a Vastu Consultant in Malviya Nagar, South Delhi? Vasterior provides trusted Vastu solutions.",
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
