import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Best Interior Designer For Flats In Moradabad, UP| Vasterior",
  description: "Hire Vasterior, the Best Interior Designer for Flats in Moradabad, to craft elegant, space-saving designs. Your dream flat deserves the Best Interior Designer for Flats in Moradabad.",
  keywords: "best flat interior designer Moradabad, interior designer for flats in Moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/best-interior-designer-for-flats-in-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/best-interior-designer-for-flats-in-moradabad",
    title: "Best Interior Designer For Flats In Moradabad, UP| Vasterior",
    description: "Hire Vasterior, the Best Interior Designer for Flats in Moradabad, to craft elegant, space-saving designs. Your dream flat deserves the Best Interior Designer for Flats in Moradabad.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Best Interior Designer For Flats In Moradabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Best Interior Designer For Flats In Moradabad, UP| Vasterior",
    description: "Hire Vasterior, the Best Interior Designer for Flats in Moradabad, to craft elegant, space-saving designs. Your dream flat deserves the Best Interior Designer for Flats in Moradabad.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function BestInteriorDesignerForFlatsInMoradabad() {
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