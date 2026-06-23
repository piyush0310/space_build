import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Remedies for Home South Delhi ",
  description:
    "Need Vastu remedies for home in South Delhi? Vasterior provides practical solutions for harmony & positivity.",
  keywords:
    "vastu remedies for home south delhi, home vastu solutions, vastu correction",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/vastu-remedies-for-home-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-remedies-for-home-south-delhi",
    title: "Vastu Remedies for Home South Delhi",
    description:
      "Need Vastu remedies for home in South Delhi? Vasterior provides practical solutions for harmony & positivity.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Vastu Remedies for Home South Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Remedies for Home South Delhi ",
    description:
      "Need Vastu remedies for home in South Delhi? Vasterior provides practical solutions for harmony & positivity.",
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
