import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog"

export const metadata: Metadata = {
  title: "Certified Vastu Consultant in Noida Extension, Uttar Pradesh | Vasterior",
  description: "Looking for a Certified Vastu Consultant in Noida Extension, Uttar Pradesh? Vasterior offers authentic guidance. Choose a Certified Vastu Consultant in Noida Extension for residential & commercial solutions.",
  keywords: "certified vastu consultant, verified vastu expert, professional vastu services",
  alternates: {
    canonical: "https://www.vasterior.com/city/certified-vastu-consultant-in-noida-extension",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/certified-vastu-consultant-in-noida-extension",
    title: "Certified Vastu Consultant in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for a Certified Vastu Consultant in Noida Extension, Uttar Pradesh? Vasterior offers authentic guidance. Choose a Certified Vastu Consultant in Noida Extension for residential & commercial solutions.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Certified Vastu Consultant in Noida Extension",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Certified Vastu Consultant in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for a Certified Vastu Consultant in Noida Extension, Uttar Pradesh? Vasterior offers authentic guidance. Choose a Certified Vastu Consultant in Noida Extension for residential & commercial solutions.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function CertifiedVastuConsultantNoidaExtension() {
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