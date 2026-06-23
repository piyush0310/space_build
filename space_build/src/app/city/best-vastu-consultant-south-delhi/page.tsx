import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Best Vastu Consultant South Delhi",
  description:
    "Looking for the best Vastu Consultant in South Delhi? Vasterior provides expert Vastu guidance for homes & offices with practical, result-oriented solutions.",
  keywords:
    "best vastu consultant south delhi, top vastu expert south delhi, vastu consultant south delhi",
  alternates: {
    canonical: "https://www.vasterior.com/city/best-vastu-consultant-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/best-vastu-consultant-south-delhi",
    title: "Best Vastu Consultant South Delhi ",
    description:
      "Looking for the best Vastu Consultant in South Delhi? Vasterior provides expert Vastu guidance for homes & offices with practical, result-oriented solutions.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Best Vastu Consultant South Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Best Vastu Consultant South Delhi",
    description:
      "Looking for the best Vastu Consultant in South Delhi? Vasterior provides expert Vastu guidance for homes & offices with practical, result-oriented solutions.",
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
