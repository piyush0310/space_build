import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Professional Vastu Consultant Moradabad, UP | Vasterior",
  description: "Looking for a Professional Vastu Consultant in Moradabad, UP? Ensure trusted, accurate solutions with the guidance of a Professional Vastu Consultant in Moradabad, UP.",
  keywords: "professional vastu consultant moradabad, expert vastu services moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/professional-vastu-consultant-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/professional-vastu-consultant-moradabad",
    title: "Professional Vastu Consultant Moradabad, UP | Vasterior",
    description: "Looking for a Professional Vastu Consultant in Moradabad, UP? Ensure trusted, accurate solutions with the guidance of a Professional Vastu Consultant in Moradabad, UP.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Professional Vastu Consultant Moradabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Professional Vastu Consultant Moradabad, UP | Vasterior",
    description: "Looking for a Professional Vastu Consultant in Moradabad, UP? Ensure trusted, accurate solutions with the guidance of a Professional Vastu Consultant in Moradabad, UP.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function ProfessionalVastuConsultantMoradabad() {
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
