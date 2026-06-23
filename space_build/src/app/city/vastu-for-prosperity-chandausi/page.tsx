import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu for Prosperity Chandausi, Uttar Pradesh| Vasterior",
  description:
    "Vastu for Prosperity in Chandausi, Uttar Pradesh by Vasterior. Vastu solutions focused on stability, wealth, and growth.",
  keywords:
    "vastu for prosperity chandausi, vastu for wealth and growth chandausi, vastu solutions chandausi, vasterior",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/vastu-for-prosperity-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-for-prosperity-chandausi",
    title: "Vastu for Prosperity Chandausi, Uttar Pradesh| Vasterior",
    description:
      "Vastu for Prosperity in Chandausi, Uttar Pradesh by Vasterior. Vastu solutions focused on stability, wealth, and growth.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Vastu for Prosperity Chandausi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu for Prosperity Chandausi, Uttar Pradesh| Vasterior",
    description:
      "Vastu for Prosperity in Chandausi, Uttar Pradesh by Vasterior. Vastu solutions focused on stability, wealth, and growth.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuForHomeChandausi() {
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
