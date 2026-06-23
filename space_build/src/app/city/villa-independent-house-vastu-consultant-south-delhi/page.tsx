import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Villa / Independent House Vastu Consultant South Delhi",
  description:
    "Searching for a villa Vastu Consultant in South Delhi? Vasterior delivers expert Vastu solutions for independent houses & luxury villas.",
  keywords:
    "villa vastu consultant south delhi, independent house vastu, luxury home vastu",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/villa-independent-house-vastu-consultant-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/villa-independent-house-vastu-consultant-south-delhi",
    title:
      "Villa / Independent House Vastu Consultant South Delhi ",
    description:
      "Searching for a villa Vastu Consultant in South Delhi? Vasterior delivers expert Vastu solutions for independent houses & luxury villas.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Villa / Independent House Vastu Consultant South Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title:
      "Villa / Independent House Vastu Consultant South Delhi ",
    description:
      "Searching for a villa Vastu Consultant in South Delhi? Vasterior delivers expert Vastu solutions for independent houses & luxury villas.",
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
