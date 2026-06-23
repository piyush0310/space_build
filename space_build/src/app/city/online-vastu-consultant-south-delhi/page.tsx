import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Online Vastu Consultant South Delhi",
  description:
    "Looking for an online Vastu Consultant in South Delhi? Vasterior provides expert Vastu consultations from anywhere.",
  keywords:
    "online vastu consultant south delhi, virtual vastu consultation, vastu expert online",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/online-vastu-consultant-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/online-vastu-consultant-south-delhi",
    title: "Online Vastu Consultant South Delhi ",
    description:
      "Looking for an online Vastu Consultant in South Delhi? Vasterior provides expert Vastu consultations from anywhere.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Online Vastu Consultant South Delhi ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Online Vastu Consultant South Delhi ",
    description:
      "Looking for an online Vastu Consultant in South Delhi? Vasterior provides expert Vastu consultations from anywhere.",
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
