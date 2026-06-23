// File 10: app/city/office-vastu-consultant-in-noida-extension/page.tsx
import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";


import Blog from "@/components/Blog"

export const metadata: Metadata = {
  title: "Office Vastu Consultant in Noida Extension, Uttar Pradesh | Vasterior",
  description: "Looking for an Office Vastu Consultant in Noida Extension, Uttar Pradesh? Vasterior designs balanced workplaces. Hire the best Office Vastu Consultant in Noida Extension for cabins, halls & conference rooms.",
  keywords: "office vastu consultant, corporate vastu services, workplace vastu consultation",
  alternates: {
    canonical: "https://www.vasterior.com/city/office-vastu-consultant-in-noida-extension",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/office-vastu-consultant-in-noida-extension",
    title: "Office Vastu Consultant in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for an Office Vastu Consultant in Noida Extension, Uttar Pradesh? Vasterior designs balanced workplaces. Hire the best Office Vastu Consultant in Noida Extension for cabins, halls & conference rooms.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Office Vastu Consultant in Noida Extension",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Office Vastu Consultant in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for an Office Vastu Consultant in Noida Extension, Uttar Pradesh? Vasterior designs balanced workplaces. Hire the best Office Vastu Consultant in Noida Extension for cabins, halls & conference rooms.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function OfficeVastuConsultantNoidaExtension() {
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