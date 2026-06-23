// File 2: app/city/best-vastu-consultant-in-noida-extension/page.tsx
import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog"

export const metadata: Metadata = {
  title: "Best Vastu Consultant in Delhi NCR | Vasterior Vastu Experts",
  description: "Looking for the best Vastu consultant in Delhi NCR? Vasterior offers expert Vastu consultation for homes, offices, and commercial spaces. Contact us today.",
  keywords: "Vastu Consultant in Delhi NCR, Vastu Expert in Delhi, Best Vastu Consultant, Home Vastu Consultant, Vastu for Office in Delhi NCR, Vastu Consultation Services, Vastu Tips for Home, Vasterior",
  alternates: {
    canonical: "https://www.vasterior.com/city/best-vastu-consultant-in-delhi-ncr",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/best-vastu-consultant-in-delhi-ncr",
    title: "Best Vastu Consultant in Delhi NCR | Vasterior Vastu Experts",
    description: "Looking for the best Vastu consultant in Delhi NCR? Vasterior offers expert Vastu consultation for homes, offices, and commercial spaces. Contact us today.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Best Vastu Consultant in Delhi NCR | Vasterior Vastu Experts",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Best Vastu Consultant in Delhi NCR | Vasterior Vastu Experts",
    description: "Looking for the best Vastu consultant in Delhi NCR? Vasterior offers expert Vastu consultation for homes, offices, and commercial spaces. Contact us today.",
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
