import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog"

export const metadata: Metadata = {
  title: "Factory Vastu Consultant in Noida Extension, Uttar Pradesh | Vasterior",
  description: "Looking for a Factory Vastu Consultant in Noida Extension, Uttar Pradesh? Vasterior provides industrial solutions. Hire the best Factory Vastu Consultant in Noida Extension for balanced production units.",
  keywords: "factory vastu consultant, industrial vastu services, manufacturing unit vastu",
  alternates: {
    canonical: "https://www.vasterior.com/city/factory-vastu-consultant-in-noida-extension",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/factory-vastu-consultant-in-noida-extension",
    title: "Factory Vastu Consultant in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for a Factory Vastu Consultant in Noida Extension, Uttar Pradesh? Vasterior provides industrial solutions. Hire the best Factory Vastu Consultant in Noida Extension for balanced production units.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Factory Vastu Consultant in Noida Extension",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Factory Vastu Consultant in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for a Factory Vastu Consultant in Noida Extension, Uttar Pradesh? Vasterior provides industrial solutions. Hire the best Factory Vastu Consultant in Noida Extension for balanced production units.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function FactoryVastuConsultantNoidaExtension() {
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