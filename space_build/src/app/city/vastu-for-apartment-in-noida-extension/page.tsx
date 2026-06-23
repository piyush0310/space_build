
import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu for Apartment in Noida Extension, Uttar Pradesh | Vasterior",
  description: "Looking for Vastu for Apartment in Noida Extension, Uttar Pradesh? Vasterior offers personalized flat guidance. Get expert Vastu for Apartment in Noida Extension for peace & prosperity.",
  keywords: "vastu for apartment, flat vastu consultation, residential vastu services",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-for-apartment-in-noida-extension",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-for-apartment-in-noida-extension",
    title: "Vastu for Apartment in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for Vastu for Apartment in Noida Extension, Uttar Pradesh? Vasterior offers personalized flat guidance. Get expert Vastu for Apartment in Noida Extension for peace & prosperity.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Vastu for Apartment in Noida Extension",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu for Apartment in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for Vastu for Apartment in Noida Extension, Uttar Pradesh? Vasterior offers personalized flat guidance. Get expert Vastu for Apartment in Noida Extension for peace & prosperity.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuForApartmentNoidaExtension() {
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