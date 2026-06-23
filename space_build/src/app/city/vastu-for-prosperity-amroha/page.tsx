import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu For Prosperity Amroha, Uttar Pradesh| Vasterior",
  description:
    "Vastu for Prosperity Amroha by Vasterior providing proven Vastu solutions to attract prosperity and growth in Amroha, UP.",
  keywords:
    "vastu for prosperity amroha, vastu for wealth amroha, vastu for financial growth amroha",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-for-prosperity-amroha",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-for-prosperity-amroha",
    title: "Vastu For Prosperity Amroha, Uttar Pradesh| Vasterior",
    description:
      "Vastu for Prosperity Amroha by Vasterior providing proven Vastu solutions to attract prosperity and growth in Amroha, UP.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Vastu For Prosperity Amroha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu For Prosperity Amroha, Uttar Pradesh| Vasterior",
    description:
      "Vastu for Prosperity Amroha by Vasterior providing proven Vastu solutions to attract prosperity and growth in Amroha, UP.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuForProsperityAmroha() {
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
