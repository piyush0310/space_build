import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Consultant for Hotels in Moradabad, UP | Vasterior",
  description: "Expert Vastu Consultant for Hotels in Moradabad, UP. Create prosperity and positive energy with the guidance of a professional Vastu Consultant for Hotels in Moradabad, UP.",
  keywords: "vastu consultant for hotels moradabad, hotel vastu expert moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-consultant-for-hotels-in-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-consultant-for-hotels-in-moradabad",
    title: "Vastu Consultant for Hotels in Moradabad, UP | Vasterior",
    description: "Expert Vastu Consultant for Hotels in Moradabad, UP. Create prosperity and positive energy with the guidance of a professional Vastu Consultant for Hotels in Moradabad, UP.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Vastu Consultant for Hotels in Moradabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Consultant for Hotels in Moradabad, UP | Vasterior",
    description: "Expert Vastu Consultant for Hotels in Moradabad, UP. Create prosperity and positive energy with the guidance of a professional Vastu Consultant for Hotels in Moradabad, UP.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuConsultantForHotelsMoradabad() {
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
