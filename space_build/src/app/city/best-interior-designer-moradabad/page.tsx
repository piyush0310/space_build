import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Best Interior Designer Moradabad, UP| Vasterior",
  description: "Looking for the Best Interior Designer in Moradabad? Vasterior, the Best Interior Designer in Moradabad, delivers premium designs, elegant spaces, and expert craftsmanship. Book your consultation today!",
  keywords: "best interior designer in Moradabad, top interior designers Moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/best-interior-designer-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/best-interior-designer-moradabad",
    title: "Best Interior Designer Moradabad, UP| Vasterior",
    description: "Looking for the Best Interior Designer in Moradabad? Vasterior, the Best Interior Designer in Moradabad, delivers premium designs, elegant spaces, and expert craftsmanship. Book your consultation today!",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Best Interior Designer Moradabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Best Interior Designer Moradabad, UP| Vasterior",
    description: "Looking for the Best Interior Designer in Moradabad? Vasterior, the Best Interior Designer in Moradabad, delivers premium designs, elegant spaces, and expert craftsmanship. Book your consultation today!",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function BestInteriorDesignerMoradabad() {
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