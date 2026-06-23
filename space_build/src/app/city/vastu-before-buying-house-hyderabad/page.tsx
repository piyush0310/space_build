import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Before Buying House Hyderabad | Vasterior",
  description:
    "Vastu Before Buying House Hyderabad offering detailed property analysis to ensure positive energy and growth.",
  keywords:
    "vastu before buying house hyderabad, home buying vastu check hyderabad, property vastu guidance",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/vastu-before-buying-house-hyderabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-before-buying-house-hyderabad",
    title: "Vastu Before Buying House Hyderabad | Vasterior",
    description:
      "Vastu Before Buying House Hyderabad offering detailed property analysis to ensure positive energy and growth.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Vastu Before Buying House Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Before Buying House Hyderabad | Vasterior",
    description:
      "Vastu Before Buying House Hyderabad offering detailed property analysis to ensure positive energy and growth.",
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
