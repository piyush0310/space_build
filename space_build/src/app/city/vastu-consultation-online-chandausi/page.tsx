import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Consultation Online Chandausi, Uttar Pradesh| Vasterior",
  description: "Vastu Consultation Online in Chandausi, Uttar Pradesh by Vasterior. Get expert Vastu guidance through online meetings and reports.",
  keywords: "vastu consultation online chandausi, online vastu guidance chandausi, virtual vastu expert chandausi, vasterior",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-consultation-online-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-consultation-online-chandausi",
    title: "Vastu Consultation Online Chandausi, Uttar Pradesh| Vasterior",
    description: "Vastu Consultation Online in Chandausi, Uttar Pradesh by Vasterior. Get expert Vastu guidance through online meetings and reports.",
    images: [{
      url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
      width: 1200,
      height: 630,
      alt: "Vastu Consultation Online Chandausi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Consultation Online Chandausi, Uttar Pradesh| Vasterior",
    description: "Vastu Consultation Online in Chandausi, Uttar Pradesh by Vasterior. Get expert Vastu guidance through online meetings and reports.",
    images: ["https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png"],
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
