import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Residential Vastu Consultant South Delhi",
  description:
    "Need a residential Vastu Consultant in South Delhi? Vasterior offers complete Vastu solutions for flats, apartments & houses.",
  keywords:
    "residential vastu consultant south delhi, home vastu expert, vastu services south delhi",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/residential-vastu-consultant-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/residential-vastu-consultant-south-delhi",
    title: "Residential Vastu Consultant South Delhi",
    description:
      "Need a residential Vastu Consultant in South Delhi? Vasterior offers complete Vastu solutions for flats, apartments & houses.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Residential Vastu Consultant South Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Residential Vastu Consultant South Delhi ",
    description:
      "Need a residential Vastu Consultant in South Delhi? Vasterior offers complete Vastu solutions for flats, apartments & houses.",
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
