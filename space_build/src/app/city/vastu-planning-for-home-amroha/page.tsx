import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Planning For Home Amroha, Uttar Pradesh| Vasterior",
  description:
    "Vastu Planning for Home Amroha by Vasterior delivering professional Vastu planning for homes in Amroha, UP.",
  keywords:
    "vastu planning for home amroha, vastu remedies for home amroha, vastu check for house amroha",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-planning-for-home-amroha",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-planning-for-home-amroha",
    title: "Vastu Planning For Home Amroha, Uttar Pradesh| Vasterior",
    description:
      "Vastu Planning for Home Amroha by Vasterior delivering professional Vastu planning for homes in Amroha, UP.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Vastu Planning For Home Amroha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Planning For Home Amroha, Uttar Pradesh| Vasterior",
    description:
      "Vastu Planning for Home Amroha by Vasterior delivering professional Vastu planning for homes in Amroha, UP.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuPlanningForHomeAmroha() {
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
