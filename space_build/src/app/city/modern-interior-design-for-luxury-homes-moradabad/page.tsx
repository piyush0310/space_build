import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Modern Interior Design For Luxury Homes Moradabad, UP| Vasterior",
  description: "Get Modern Interior Design for Luxury Homes Moradabad with Vasterior, the expert in Modern Interior Design for Luxury Homes Moradabad, for contemporary elegance.",
  keywords: "modern interior design for luxury homes Moradabad, Moradabad modern luxury interiors",
  alternates: {
    canonical: "https://www.vasterior.com/city/modern-interior-design-for-luxury-homes-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/modern-interior-design-for-luxury-homes-moradabad",
    title: "Modern Interior Design For Luxury Homes Moradabad, UP| Vasterior",
    description: "Get Modern Interior Design for Luxury Homes Moradabad with Vasterior, the expert in Modern Interior Design for Luxury Homes Moradabad, for contemporary elegance.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Modern Interior Design For Luxury Homes Moradabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Modern Interior Design For Luxury Homes Moradabad, UP| Vasterior",
    description: "Get Modern Interior Design for Luxury Homes Moradabad with Vasterior, the expert in Modern Interior Design for Luxury Homes Moradabad, for contemporary elegance.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function ModernInteriorDesignForLuxuryHomesMoradabad() {
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