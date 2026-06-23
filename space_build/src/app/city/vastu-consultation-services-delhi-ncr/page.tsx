import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";


import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog"


export const metadata: Metadata = {
  title: "Vastu Consultation Services Delhi NCR | Vasterior",
  description: "Looking for Vastu Consultation Services Delhi NCR? Vasterior - reliable Vastu Consultation Services Delhi NCR.",
  keywords: "Vastu Consultation Services Delhi NCR, Delhi NCR Vastu Experts, Complete Vastu Solutions Delhi",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-consultation-services-delhi-ncr",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-consultation-services-delhi-ncr",
    title: "Vastu Consultation Services Delhi NCR | Vasterior",
    description: "Looking for Vastu Consultation Services Delhi NCR? Vasterior - reliable Vastu Consultation Services Delhi NCR.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Vastu Consultation Services Delhi NCR",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Consultation Services Delhi NCR | Vasterior",
    description: "Looking for Vastu Consultation Services Delhi NCR? Vasterior - reliable Vastu Consultation Services Delhi NCR.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};


export default function VastuConsultationServicesDelhiNCR() {
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
