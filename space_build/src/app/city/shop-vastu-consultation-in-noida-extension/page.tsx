import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog"

export const metadata: Metadata = {
  title: "Shop Vastu Consultation in Noida Extension, Uttar Pradesh | Vasterior",
  description: "Looking for Shop Vastu Consultation in Noida Extension, Uttar Pradesh? Vasterior designs profitable layouts. Get expert Shop Vastu Consultation in Noida Extension for retail & commercial shops.",
  keywords: "shop vastu consultation, retail vastu services, store vastu consultant",
  alternates: {
    canonical: "https://www.vasterior.com/city/shop-vastu-consultation-in-noida-extension",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/shop-vastu-consultation-in-noida-extension",
    title: "Shop Vastu Consultation in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for Shop Vastu Consultation in Noida Extension, Uttar Pradesh? Vasterior designs profitable layouts. Get expert Shop Vastu Consultation in Noida Extension for retail & commercial shops.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Shop Vastu Consultation in Noida Extension",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Shop Vastu Consultation in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for Shop Vastu Consultation in Noida Extension, Uttar Pradesh? Vasterior designs profitable layouts. Get expert Shop Vastu Consultation in Noida Extension for retail & commercial shops.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function ShopVastuConsultationNoidaExtension() {
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