import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu for Career Growth Chandausi, Uttar Pradesh| Vasterior",
  description:
    "Vastu for Career Growth in Chandausi, Uttar Pradesh by Vasterior. Vastu solutions to improve career opportunities and progress.",
  keywords:
    "vastu for career growth chandausi, office vastu solutions chandausi, professional growth vastu chandausi, vasterior",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/vastu-for-career-growth-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-for-career-growth-chandausi",
    title: "Vastu for Career Growth Chandausi, Uttar Pradesh| Vasterior",
    description:
      "Vastu for Career Growth in Chandausi, Uttar Pradesh by Vasterior. Vastu solutions to improve career opportunities and progress.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Vastu for Career Growth Chandausi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu for Career Growth Chandausi, Uttar Pradesh| Vasterior",
    description:
      "Vastu for Career Growth in Chandausi, Uttar Pradesh by Vasterior. Vastu solutions to improve career opportunities and progress.",
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
