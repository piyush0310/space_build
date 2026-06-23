import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog"

export const metadata: Metadata = {
  title: "Top Vastu Consultant in Noida Extension, Uttar Pradesh | Vasterior",
  description: "Looking for a Top Vastu Consultant in Noida Extension, Uttar Pradesh? Vasterior ensures balanced living. Hire the Top Vastu Consultant in Noida Extension for home, office & business success.",
  keywords: "top vastu consultant, leading vastu services, best vastu experts",
  alternates: {
    canonical: "https://www.vasterior.com/city/top-vastu-consultant-in-noida-extension",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/top-vastu-consultant-in-noida-extension",
    title: "Top Vastu Consultant in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for a Top Vastu Consultant in Noida Extension, Uttar Pradesh? Vasterior ensures balanced living. Hire the Top Vastu Consultant in Noida Extension for home, office & business success.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Top Vastu Consultant in Noida Extension",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Top Vastu Consultant in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for a Top Vastu Consultant in Noida Extension, Uttar Pradesh? Vasterior ensures balanced living. Hire the Top Vastu Consultant in Noida Extension for home, office & business success.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function TopVastuConsultantNoidaExtension() {
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