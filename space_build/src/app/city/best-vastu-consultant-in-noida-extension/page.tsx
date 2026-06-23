// File 2: app/city/best-vastu-consultant-in-noida-extension/page.tsx
import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog"

export const metadata: Metadata = {
  title: "Best Vastu Consultant in Noida Extension, Uttar Pradesh | Vasterior",
  description: "Looking for the best Vastu Consultant in Noida Extension, Uttar Pradesh? Vasterior delivers expert remedies and tips. Hire the best Vastu Consultant in Noida Extension for homes, offices & businesses.",
  keywords: "best vastu consultant noida extension, top vastu services, famous vastu consultant",
  alternates: {
    canonical: "https://www.vasterior.com/city/best-vastu-consultant-in-noida-extension",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/best-vastu-consultant-in-noida-extension",
    title: "Best Vastu Consultant in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for the best Vastu Consultant in Noida Extension, Uttar Pradesh? Vasterior delivers expert remedies and tips. Hire the best Vastu Consultant in Noida Extension for homes, offices & businesses.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Best Vastu Consultant in Noida Extension",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Best Vastu Consultant in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for the best Vastu Consultant in Noida Extension, Uttar Pradesh? Vasterior delivers expert remedies and tips. Hire the best Vastu Consultant in Noida Extension for homes, offices & businesses.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function BestVastuConsultantNoidaExtension() {
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
