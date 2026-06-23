import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Experienced Vastu Consultant Moradabad, UP | Vasterior",
  description: "Leading Experienced Vastu Consultant in Moradabad, UP. Ensure harmony and prosperity with accurate guidance from an Experienced Vastu Consultant in Moradabad, UP.",
  keywords: "experienced vastu consultant moradabad, senior vastu consultant moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/experienced-vastu-consultant-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/experienced-vastu-consultant-moradabad",
    title: "Experienced Vastu Consultant Moradabad, UP | Vasterior",
    description: "Leading Experienced Vastu Consultant in Moradabad, UP. Ensure harmony and prosperity with accurate guidance from an Experienced Vastu Consultant in Moradabad, UP.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Experienced Vastu Consultant Moradabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Experienced Vastu Consultant Moradabad, UP | Vasterior",
    description: "Leading Experienced Vastu Consultant in Moradabad, UP. Ensure harmony and prosperity with accurate guidance from an Experienced Vastu Consultant in Moradabad, UP.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function ExperiencedVastuConsultantMoradabad() {
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
