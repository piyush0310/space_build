import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Certified Vastu Consultant South Delhi",
  description:
    "Looking for a certified Vastu Consultant in South Delhi? Vasterior provides authentic, accurate Vastu solutions for residential & commercial properties.",
  keywords:
    "certified vastu consultant south delhi, vastu shastra expert, vastu consultant south delhi",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/certified-vastu-consultant-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/certified-vastu-consultant-south-delhi",
    title: "Certified Vastu Consultant South Delhi ",
    description:
      "Looking for a certified Vastu Consultant in South Delhi? Vasterior provides authentic, accurate Vastu solutions for residential & commercial properties.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Certified Vastu Consultant South Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Certified Vastu Consultant South Delhi ",
    description:
      "Looking for a certified Vastu Consultant in South Delhi? Vasterior provides authentic, accurate Vastu solutions for residential & commercial properties.",
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
