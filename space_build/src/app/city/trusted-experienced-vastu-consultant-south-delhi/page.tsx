import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Trusted & Experienced Vastu Consultant South Delhi",
  description:
    "Hire a trusted & experienced Vastu Consultant in South Delhi. Vasterior offers reliable Vastu advice for homes, offices & business success.",
  keywords:
    "trusted vastu consultant south delhi, experienced vastu expert, vastu services south delhi",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/trusted-experienced-vastu-consultant-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/trusted-experienced-vastu-consultant-south-delhi",
    title: "Trusted & Experienced Vastu Consultant South Delhi",
    description:
      "Hire a trusted & experienced Vastu Consultant in South Delhi. Vasterior offers reliable Vastu advice for homes, offices & business success.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Trusted & Experienced Vastu Consultant South Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Trusted & Experienced Vastu Consultant South Delhi ",
    description:
      "Hire a trusted & experienced Vastu Consultant in South Delhi. Vasterior offers reliable Vastu advice for homes, offices & business success.",
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
