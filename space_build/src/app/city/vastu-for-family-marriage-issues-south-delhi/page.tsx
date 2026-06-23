import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu for Family & Marriage Issues South Delhi | Vasterior",
  description:
    "Need Vastu for family & marriage issues in South Delhi? Vasterior provides practical remedies for harmony.",
  keywords:
    "vastu for family issues south delhi, marriage vastu, family harmony vastu",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/vastu-for-family-marriage-issues-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-for-family-marriage-issues-south-delhi",
    title: "Vastu for Family & Marriage Issues South Delhi | Vasterior",
    description:
      "Need Vastu for family & marriage issues in South Delhi? Vasterior provides practical remedies for harmony.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Vastu for Family & Marriage Issues South Delhi | Vasterior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu for Family & Marriage Issues South Delhi | Vasterior",
    description:
      "Need Vastu for family & marriage issues in South Delhi? Vasterior provides practical remedies for harmony.",
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
