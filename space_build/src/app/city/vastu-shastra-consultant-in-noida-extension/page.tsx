// File 5: app/city/vastu-shastra-consultant-in-noida-extension/page.tsx
import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog"

export const metadata: Metadata = {
  title: "Vastu Shastra Consultant in Noida Extension, Uttar Pradesh | Vasterior",
  description: "Looking for a professional Vastu Shastra Consultant in Noida Extension, Uttar Pradesh? Vasterior provides expert advice. Hire a trusted Vastu Shastra Consultant in Noida Extension for homes & businesses.",
  keywords: "vastu shastra consultant, noida extension vastu expert, vastu shastra services",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-shastra-consultant-in-noida-extension",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-shastra-consultant-in-noida-extension",
    title: "Vastu Shastra Consultant in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for a professional Vastu Shastra Consultant in Noida Extension, Uttar Pradesh? Vasterior provides expert advice.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Vastu Shastra Consultant in Noida Extension",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Shastra Consultant in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for a professional Vastu Shastra Consultant in Noida Extension, Uttar Pradesh? Vasterior provides expert advice.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuShastraConsultantNoidaExtension() {
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