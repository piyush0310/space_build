import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog"

export const metadata: Metadata = {
  title: "Famous Vastu Consultant in Noida Extension, Uttar Pradesh | Vasterior",
  description: "Looking for a Famous Vastu Consultant in Noida Extension, Uttar Pradesh? Vasterior is trusted by many clients. Hire the most Famous Vastu Consultant in Noida Extension for home, office & business spaces.",
  keywords: "famous vastu consultant, renowned vastu expert, popular vastu consultant",
  alternates: {
    canonical: "https://www.vasterior.com/city/famous-vastu-consultant-in-noida-extension",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/famous-vastu-consultant-in-noida-extension",
    title: "Famous Vastu Consultant in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for a Famous Vastu Consultant in Noida Extension, Uttar Pradesh? Vasterior is trusted by many clients. Hire the most Famous Vastu Consultant in Noida Extension for home, office & business spaces.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Famous Vastu Consultant in Noida Extension",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Famous Vastu Consultant in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for a Famous Vastu Consultant in Noida Extension, Uttar Pradesh? Vasterior is trusted by many clients. Hire the most Famous Vastu Consultant in Noida Extension for home, office & business spaces.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function FamousVastuConsultantNoidaExtension() {
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