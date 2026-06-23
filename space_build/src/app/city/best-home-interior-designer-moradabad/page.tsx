import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Best Home Interior Designer Moradabad, UP| Vasterior",
  description: "Looking for the Best Home Interior Designer Moradabad? Vasterior, the Best Home Interior Designer Moradabad, creates luxurious, functional spaces that reflect your lifestyle.",
  keywords: "best home interior designer in Moradabad, top home interior designer Moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/best-home-interior-designer-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/best-home-interior-designer-moradabad",
    title: "Best Home Interior Designer Moradabad, UP| Vasterior",
    description: "Looking for the Best Home Interior Designer Moradabad? Vasterior, the Best Home Interior Designer Moradabad, creates luxurious, functional spaces that reflect your lifestyle.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Best Home Interior Designer Moradabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Best Home Interior Designer Moradabad, UP| Vasterior",
    description: "Looking for the Best Home Interior Designer Moradabad? Vasterior, the Best Home Interior Designer Moradabad, creates luxurious, functional spaces that reflect your lifestyle.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function BestHomeInteriorDesignerMoradabad() {
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