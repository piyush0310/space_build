import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Services in South Delhi",
  description:
    "Need Vastu services in South Delhi? Vasterior provides complete Vastu consultation for homes, offices, plots & commercial properties.",
  keywords:
    "vastu services south delhi, vastu consultation south delhi, vastu expert south delhi",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-services-in-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-services-in-south-delhi",
    title: "Vastu Services in South Delhi ",
    description:
      "Need Vastu services in South Delhi? Vasterior provides complete Vastu consultation for homes, offices, plots & commercial properties.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Vastu Services in South Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Services in South Delhi ",
    description:
      "Need Vastu services in South Delhi? Vasterior provides complete Vastu consultation for homes, offices, plots & commercial properties.",
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
