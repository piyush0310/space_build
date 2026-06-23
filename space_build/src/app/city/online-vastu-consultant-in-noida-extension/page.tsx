import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog"

export const metadata: Metadata = {
  title: "Online Vastu Consultant in Noida Extension, Uttar Pradesh | Vasterior",
  description: "Looking for an Online Vastu Consultant in Noida Extension, Uttar Pradesh? Vasterior offers expert virtual guidance. Choose the best Online Vastu Consultant in Noida Extension for residential & commercial needs.",
  keywords: "online vastu consultant, virtual vastu services, vastu consultation online",
  alternates: {
    canonical: "https://www.vasterior.com/city/online-vastu-consultant-in-noida-extension",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/online-vastu-consultant-in-noida-extension",
    title: "Online Vastu Consultant in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for an Online Vastu Consultant in Noida Extension, Uttar Pradesh? Vasterior offers expert virtual guidance. Choose the best Online Vastu Consultant in Noida Extension for residential & commercial needs.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Online Vastu Consultant in Noida Extension",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Online Vastu Consultant in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for an Online Vastu Consultant in Noida Extension, Uttar Pradesh? Vasterior offers expert virtual guidance. Choose the best Online Vastu Consultant in Noida Extension for residential & commercial needs.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function OnlineVastuConsultantNoidaExtension() {
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