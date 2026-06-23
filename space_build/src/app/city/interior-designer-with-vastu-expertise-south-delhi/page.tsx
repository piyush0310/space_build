import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Interior Designer with Vastu Expertise South Delhi",
  description:
    "Looking for an interior designer with Vastu expertise in South Delhi with price details? Vasterior offers functional, premium & Vastu-based designs.",
  keywords:
    "interior designer with vastu expertise south delhi, vastu interior designer south delhi, home interior designer south delhi",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/interior-designer-with-vastu-expertise-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/interior-designer-with-vastu-expertise-south-delhi",
    title: "Interior Designer with Vastu Expertise South Delhi",
    description:
      "Looking for an interior designer with Vastu expertise in South Delhi with price details? Vasterior offers functional, premium & Vastu-based designs.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Interior Designer with Vastu Expertise South Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Interior Designer with Vastu Expertise South Delhi",
    description:
      "Looking for an interior designer with Vastu expertise in South Delhi with price details? Vasterior offers functional, premium & Vastu-based designs.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function InteriorDesignServicesChandausi() {
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
