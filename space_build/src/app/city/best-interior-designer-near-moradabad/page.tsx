import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Best Interior Designer Near Moradabad, UP| Vasterior",
  description: "Searching for the Best Interior Designer near Moradabad? Vasterior, the top Best Interior Designer near Moradabad, delivers premium interiors with flawless execution.",
  keywords: "best interior designer near Moradabad, top interior designers around Moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/best-interior-designer-near-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/best-interior-designer-near-moradabad",
    title: "Best Interior Designer Near Moradabad, UP| Vasterior",
    description: "Searching for the Best Interior Designer near Moradabad? Vasterior, the top Best Interior Designer near Moradabad, delivers premium interiors with flawless execution.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Best Interior Designer Near Moradabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Best Interior Designer Near Moradabad, UP| Vasterior",
    description: "Searching for the Best Interior Designer near Moradabad? Vasterior, the top Best Interior Designer near Moradabad, delivers premium interiors with flawless execution.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function BestInteriorDesignerNearMoradabad() {
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