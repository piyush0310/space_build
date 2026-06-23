import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu for Health Problems Chandausi, Uttar Pradesh| Vasterior",
  description:
    "Vastu for Health Problems in Chandausi, Uttar Pradesh by Vasterior. Vastu guidance to support better health and well-being.",
  keywords:
    "vastu for health problems chandausi, vastu for better health chandausi, home vastu guidance chandausi, vasterior",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/vastu-for-health-problems-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-for-health-problems-chandausi",
    title: "Vastu for Health Problems Chandausi, Uttar Pradesh| Vasterior",
    description:
      "Vastu for Health Problems in Chandausi, Uttar Pradesh by Vasterior. Vastu guidance to support better health and well-being.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Vastu for Health Problems Chandausi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu for Health Problems Chandausi, Uttar Pradesh| Vasterior",
    description:
      "Vastu for Health Problems in Chandausi, Uttar Pradesh by Vasterior. Vastu guidance to support better health and well-being.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuConsultationOnlineChandausi() {
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
