import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog"

export const metadata: Metadata = {
  title: "Vastu Consultation Services in Noida Extension, Uttar Pradesh | Vasterior",
  description: "Looking for reliable Vastu Consultation Services in Noida Extension, Uttar Pradesh? Vasterior provides personalized solutions. Get trusted Vastu Consultation Services in Noida Extension for homes, shops & offices.",
  keywords: "vastu consultation services, noida extension vastu, vastu shastra consultation",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-consultation-services-in-noida-extension",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-consultation-services-in-noida-extension",
    title: "Vastu Consultation Services in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for reliable Vastu Consultation Services in Noida Extension, Uttar Pradesh? Vasterior provides personalized solutions.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Vastu Consultation Services in Noida Extension",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Consultation Services in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for reliable Vastu Consultation Services in Noida Extension, Uttar Pradesh? Vasterior provides personalized solutions.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuConsultationServicesNoidaExtension() {
  return (
    <div className="min-h-screen bg-[#FFF1E0]">
      <Banner />
      <Content />
      
      
      <Portfolio />
      <Blog />
      <Testimonials />
    </div>
  );
}