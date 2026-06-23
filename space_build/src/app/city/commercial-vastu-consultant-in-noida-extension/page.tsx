import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog"

export const metadata: Metadata = {
  title: "Commercial Vastu Consultant in Noida Extension, Uttar Pradesh | Vasterior",
  description: "Looking for a Commercial Vastu Consultant in Noida Extension, Uttar Pradesh? Vasterior offers expert planning. Choose the top Commercial Vastu Consultant in Noida Extension for offices, shops & businesses.",
  keywords: "commercial vastu consultant, office vastu services, business vastu consultant",
  alternates: {
    canonical: "https://www.vasterior.com/city/commercial-vastu-consultant-in-noida-extension",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/commercial-vastu-consultant-in-noida-extension",
    title: "Commercial Vastu Consultant in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for a Commercial Vastu Consultant in Noida Extension, Uttar Pradesh? Vasterior offers expert planning. Choose the top Commercial Vastu Consultant in Noida Extension for offices, shops & businesses.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Commercial Vastu Consultant in Noida Extension",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Commercial Vastu Consultant in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for a Commercial Vastu Consultant in Noida Extension, Uttar Pradesh? Vasterior offers expert planning. Choose the top Commercial Vastu Consultant in Noida Extension for offices, shops & businesses.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function CommercialVastuConsultantNoidaExtension() {
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