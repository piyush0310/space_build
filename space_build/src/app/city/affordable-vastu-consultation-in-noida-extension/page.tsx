import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog"


export const metadata: Metadata = {
  title: "Affordable Vastu Consultation in Noida Extension, Uttar Pradesh | Space Build",
  description: "Looking for Affordable Vastu Consultation in Noida Extension, Uttar Pradesh? Space Build provides cost-effective remedies. Get expert and Affordable Vastu Consultation in Noida Extension for homes & offices.",
  keywords: "affordable vastu consultation, low cost vastu services, budget vastu consultant",
  alternates: {
    canonical: "https://www.Space Build.com/city/affordable-vastu-consultation-in-noida-extension",
  },
  openGraph: {
    type: "website",
    url: "https://www.Space Build.com/city/affordable-vastu-consultation-in-noida-extension",
    title: "Affordable Vastu Consultation in Noida Extension, Uttar Pradesh | Space Build",
    description: "Looking for Affordable Vastu Consultation in Noida Extension, Uttar Pradesh? Space Build provides cost-effective remedies. Get expert and Affordable Vastu Consultation in Noida Extension for homes & offices.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/Space Buildlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Affordable Vastu Consultation in Noida Extension",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Space Build",
    title: "Affordable Vastu Consultation in Noida Extension, Uttar Pradesh | Space Build",
    description: "Looking for Affordable Vastu Consultation in Noida Extension, Uttar Pradesh? Space Build provides cost-effective remedies. Get expert and Affordable Vastu Consultation in Noida Extension for homes & offices.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/Space Buildlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function AffordableVastuConsultationNoidaExtension() {
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