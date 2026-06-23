import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Interior Designer Near Me South Delhi",
  description:
    "Interior Designer Near Me South Delhi, with Price | Vasteior. Looking for an interior designer near me in South Delhi with price details? Vasterior delivers convenient, premium & Vastu-compliant interiors.",
  keywords:
    "interior designer near me south delhi, home interior designer south delhi, residential interior designer south delhi",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/interior-designer-near-me-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/interior-designer-near-me-south-delhi",
    title: "Interior Designer Near Me South Delhi",
    description:
      "Interior Designer Near Me South Delhi, with Price | Vasteior. Looking for an interior designer near me in South Delhi with price details? Vasterior delivers convenient, premium & Vastu-compliant interiors.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Interior Designer Near Me South Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Interior Designer Near Me South Delhi",
    description:
      "Interior Designer Near Me South Delhi, with Price | Vasteior. Looking for an interior designer near me in South Delhi with price details? Vasterior delivers convenient, premium & Vastu-compliant interiors.",
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
