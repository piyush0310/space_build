import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Luxury Interior Design For Villas In Moradabad, UP| Vasterior",
  description: "Transform your villa with Luxury Interior Design for Villas in Moradabad by Vasterior, the expert in Luxury Interior Design for Villas in Moradabad.",
  keywords: "luxury interior design for villas Moradabad, premium villa interiors Moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/luxury-interior-design-for-villas-in-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/luxury-interior-design-for-villas-in-moradabad",
    title: "Luxury Interior Design For Villas In Moradabad, UP| Vasterior",
    description: "Transform your villa with Luxury Interior Design for Villas in Moradabad by Vasterior, the expert in Luxury Interior Design for Villas in Moradabad.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Luxury Interior Design For Villas In Moradabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Luxury Interior Design For Villas In Moradabad, UP| Vasterior",
    description: "Transform your villa with Luxury Interior Design for Villas in Moradabad by Vasterior, the expert in Luxury Interior Design for Villas in Moradabad.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function LuxuryInteriorDesignForVillasInMoradabad() {
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