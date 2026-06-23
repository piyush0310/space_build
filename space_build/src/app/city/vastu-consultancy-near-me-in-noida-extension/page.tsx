import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog"

export const metadata: Metadata = {
  title: "Vastu Consultancy Near Me in Noida Extension, Uttar Pradesh | Vasterior",
  description: "Looking for Vastu Consultancy Near Me in Noida Extension, Uttar Pradesh? Vasterior offers personalized guidance. Choose trusted Vastu Consultancy Near Me in Noida Extension for all spaces.",
  keywords: "vastu consultancy near me, nearby vastu consultant, local vastu services",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-consultancy-near-me-in-noida-extension",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-consultancy-near-me-in-noida-extension",
    title: "Vastu Consultancy Near Me in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for Vastu Consultancy Near Me in Noida Extension, Uttar Pradesh? Vasterior offers personalized guidance. Choose trusted Vastu Consultancy Near Me in Noida Extension for all spaces.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Vastu Consultancy Near Me in Noida Extension",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Consultancy Near Me in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for Vastu Consultancy Near Me in Noida Extension, Uttar Pradesh? Vasterior offers personalized guidance. Choose trusted Vastu Consultancy Near Me in Noida Extension for all spaces.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuConsultancyNearMeNoidaExtension() {
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