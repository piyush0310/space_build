import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Flat Vastu Consultant Hyderabad | Vasterior",
  description:
    "Flat Vastu Consultant Hyderabad providing accurate flat analysis, defect correction and effective Vastu remedies.",
  keywords:
    "flat vastu consultant hyderabad, apartment vastu services hyderabad, vastu for flat",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/flat-vastu-consultant-hyderabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/flat-vastu-consultant-hyderabad",
    title: "Flat Vastu Consultant Hyderabad | Vasterior",
    description:
      "Flat Vastu Consultant Hyderabad providing accurate flat analysis, defect correction and effective Vastu remedies.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Flat Vastu Consultant Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Flat Vastu Consultant Hyderabad | Vasterior",
    description:
      "Flat Vastu Consultant Hyderabad providing accurate flat analysis, defect correction and effective Vastu remedies.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function BestInteriorDesignerMoradabad() {
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
