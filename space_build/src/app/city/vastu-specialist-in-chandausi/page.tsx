import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Specialist in Chandausi, Uttar Pradesh| Vasterior",
  description: "Vastu Specialist in Chandausi, Uttar Pradesh by Vasterior. Specialized Vastu services for homes, offices, and property planning.",
  keywords: "vastu specialist in chandausi, vastu consultant chandausi, vastu solutions chandausi, vasterior",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-specialist-in-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-specialist-in-chandausi",
    title: "Vastu Specialist in Chandausi, Uttar Pradesh| Vasterior",
    description: "Vastu Specialist in Chandausi, Uttar Pradesh by Vasterior. Specialized Vastu services for homes, offices, and property planning.",
    images: [{
      url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
      width: 1200,
      height: 630,
      alt: "Vastu Specialist in Chandausi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Specialist in Chandausi, Uttar Pradesh| Vasterior",
    description: "Vastu Specialist in Chandausi, Uttar Pradesh by Vasterior. Specialized Vastu services for homes, offices, and property planning.",
    images: ["https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuSpecialistChandausi() {
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
