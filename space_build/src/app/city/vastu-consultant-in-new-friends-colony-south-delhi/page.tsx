import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Consultant in New Friends Colony, South Delhi ",
  description:
    "Looking for a Vastu Consultant in New Friends Colony, South Delhi? Vasterior delivers trusted Vastu consultation.",
  keywords:
    "vastu consultant new friends colony, vastu expert, vastu consultation",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/vastu-consultant-in-new-friends-colony-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-consultant-in-new-friends-colony-south-delhi",
    title:
      "Vastu Consultant in New Friends Colony, South Delhi ",
    description:
      "Looking for a Vastu Consultant in New Friends Colony, South Delhi? Vasterior delivers trusted Vastu consultation.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt:
          "Vastu Consultant in New Friends Colony, South Delhi ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title:
      "Vastu Consultant in New Friends Colony, South Delhi ",
    description:
      "Looking for a Vastu Consultant in New Friends Colony, South Delhi? Vasterior delivers trusted Vastu consultation.",
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
