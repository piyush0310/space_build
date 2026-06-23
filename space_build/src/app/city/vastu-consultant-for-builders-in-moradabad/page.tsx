import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Consultant for Builders in Moradabad, UP | Vasterior",
  description: "Looking for a Vastu Consultant for Builders in Moradabad, UP? Get accurate Vastu planning and design with the most reliable Vastu Consultant for Builders in Moradabad, UP.",
  keywords: "vastu consultant for builders moradabad, vastu for builders moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-consultant-for-builders-in-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-consultant-for-builders-in-moradabad",
    title: "Vastu Consultant for Builders in Moradabad, UP | Vasterior",
    description: "Looking for a Vastu Consultant for Builders in Moradabad, UP? Get accurate Vastu planning and design with the most reliable Vastu Consultant for Builders in Moradabad, UP.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Vastu Consultant for Builders in Moradabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Consultant for Builders in Moradabad, UP | Vasterior",
    description: "Looking for a Vastu Consultant for Builders in Moradabad, UP? Get accurate Vastu planning and design with the most reliable Vastu Consultant for Builders in Moradabad, UP.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuConsultantForBuildersMoradabad() {
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
