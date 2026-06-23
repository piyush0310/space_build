
import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Best Vastu Consultancy in Noida Extension, Uttar Pradesh | Vasterior",
  description: "Looking for the Best Vastu Consultancy in Noida Extension, Uttar Pradesh? Vasterior provides complete Vastu services. Choose the Best Vastu Consultancy in Noida Extension for all property types.",
  keywords: "best vastu consultancy, trusted vastu services, top vastu solutions",
  alternates: {
    canonical: "https://www.vasterior.com/city/best-vastu-consultancy-in-noida-extension",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/best-vastu-consultancy-in-noida-extension",
    title: "Best Vastu Consultancy in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for the Best Vastu Consultancy in Noida Extension, Uttar Pradesh? Vasterior provides complete Vastu services. Choose the Best Vastu Consultancy in Noida Extension for all property types.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Best Vastu Consultancy in Noida Extension",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Best Vastu Consultancy in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for the Best Vastu Consultancy in Noida Extension, Uttar Pradesh? Vasterior provides complete Vastu services. Choose the Best Vastu Consultancy in Noida Extension for all property types.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function BestVastuConsultancyNoidaExtension() {
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