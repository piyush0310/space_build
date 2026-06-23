import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Industrial Vastu Consultant in Moradabad, UP | Vasterior",
  description: "Looking for an Industrial Vastu Consultant in Moradabad, UP? Get expert solutions to boost growth and stability with the best Industrial Vastu Consultant in Moradabad, UP.",
  keywords: "industrial vastu consultant moradabad, vastu for factories moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/industrial-vastu-consultant-in-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/industrial-vastu-consultant-in-moradabad",
    title: "Industrial Vastu Consultant in Moradabad, UP | Vasterior",
    description: "Looking for an Industrial Vastu Consultant in Moradabad, UP? Get expert solutions to boost growth and stability with the best Industrial Vastu Consultant in Moradabad, UP.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Industrial Vastu Consultant in Moradabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Industrial Vastu Consultant in Moradabad, UP | Vasterior",
    description: "Looking for an Industrial Vastu Consultant in Moradabad, UP? Get expert solutions to boost growth and stability with the best Industrial Vastu Consultant in Moradabad, UP.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function IndustrialVastuConsultantMoradabad() {
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
