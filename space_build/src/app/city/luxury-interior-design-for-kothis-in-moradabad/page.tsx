import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Luxury Interior Design For Kothis In Moradabad, UP| Vasterior",
  description: "Vasterior offers Luxury Interior Design for Kothis in Moradabad, creating stunning, regal spaces. Get the finest Luxury Interior Design for Kothis in Moradabad today.",
  keywords: "luxury interior design for kothis Moradabad, premium kothi interior design Moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/luxury-interior-design-for-kothis-in-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/luxury-interior-design-for-kothis-in-moradabad",
    title: "Luxury Interior Design For Kothis In Moradabad, UP| Vasterior",
    description: "Vasterior offers Luxury Interior Design for Kothis in Moradabad, creating stunning, regal spaces. Get the finest Luxury Interior Design for Kothis in Moradabad today.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Luxury Interior Design For Kothis In Moradabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Luxury Interior Design For Kothis In Moradabad, UP| Vasterior",
    description: "Vasterior offers Luxury Interior Design for Kothis in Moradabad, creating stunning, regal spaces. Get the finest Luxury Interior Design for Kothis in Moradabad today.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function LuxuryInteriorDesignForKothisInMoradabad() {
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