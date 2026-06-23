
import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu for Business in Noida Extension, Uttar Pradesh | Vasterior",
  description: "Looking for Vastu for Business in Noida Extension, Uttar Pradesh? Vasterior helps design success-oriented workplaces. Apply expert Vastu for Business in Noida Extension for growth & prosperity.",
  keywords: "vastu for business, business vastu consultant, commercial vastu services",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-for-business-in-noida-extension",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-for-business-in-noida-extension",
    title: "Vastu for Business in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for Vastu for Business in Noida Extension, Uttar Pradesh? Vasterior helps design success-oriented workplaces. Apply expert Vastu for Business in Noida Extension for growth & prosperity.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Vastu for Business in Noida Extension",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu for Business in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for Vastu for Business in Noida Extension, Uttar Pradesh? Vasterior helps design success-oriented workplaces. Apply expert Vastu for Business in Noida Extension for growth & prosperity.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuForBusinessNoidaExtension() {
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