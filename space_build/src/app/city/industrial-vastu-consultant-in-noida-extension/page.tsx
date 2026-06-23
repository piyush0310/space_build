
import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Industrial Vastu Consultant in Noida Extension, Uttar Pradesh | Vasterior",
  description: "Looking for an Industrial Vastu Consultant in Noida Extension, Uttar Pradesh? Vasterior specializes in factories & warehouses. Hire the top Industrial Vastu Consultant in Noida Extension for industries.",
  keywords: "industrial vastu consultant, warehouse vastu services, factory vastu expert",
  alternates: {
    canonical: "https://www.vasterior.com/city/industrial-vastu-consultant-in-noida-extension",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/industrial-vastu-consultant-in-noida-extension",
    title: "Industrial Vastu Consultant in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for an Industrial Vastu Consultant in Noida Extension, Uttar Pradesh? Vasterior specializes in factories & warehouses. Hire the top Industrial Vastu Consultant in Noida Extension for industries.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Industrial Vastu Consultant in Noida Extension",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Industrial Vastu Consultant in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for an Industrial Vastu Consultant in Noida Extension, Uttar Pradesh? Vasterior specializes in factories & warehouses. Hire the top Industrial Vastu Consultant in Noida Extension for industries.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function IndustrialVastuConsultantNoidaExtension() {
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