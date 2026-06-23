import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog"

export const metadata: Metadata = {
  title: "Home Vastu Consultation in Noida Extension, Uttar Pradesh | Vasterior",
  description: "Looking for Home Vastu Consultation in Noida Extension, Uttar Pradesh? Vasterior provides personalized home solutions. Get expert Home Vastu Consultation in Noida Extension for apartments & villas.",
  keywords: "home vastu consultation, residential vastu services, apartment vastu consultation",
  alternates: {
    canonical: "https://www.vasterior.com/city/home-vastu-consultation-in-noida-extension",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/home-vastu-consultation-in-noida-extension",
    title: "Home Vastu Consultation in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for Home Vastu Consultation in Noida Extension, Uttar Pradesh? Vasterior provides personalized home solutions. Get expert Home Vastu Consultation in Noida Extension for apartments & villas.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Home Vastu Consultation in Noida Extension",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Home Vastu Consultation in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for Home Vastu Consultation in Noida Extension, Uttar Pradesh? Vasterior provides personalized home solutions. Get expert Home Vastu Consultation in Noida Extension for apartments & villas.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function HomeVastuConsultationNoidaExtension() {
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