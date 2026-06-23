import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Villa Interior Designer Near Moradabad, UP| Vasterior",
  description: "Hire Vasterior, the Villa Interior Designer near Moradabad, to design luxurious, spacious villas. Your dream home needs the best Villa Interior Designer near Moradabad.",
  keywords: "villa interior designer near Moradabad, best villa interiors near Moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/villa-interior-designer-near-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/villa-interior-designer-near-moradabad",
    title: "Villa Interior Designer Near Moradabad, UP| Vasterior",
    description: "Hire Vasterior, the Villa Interior Designer near Moradabad, to design luxurious, spacious villas. Your dream home needs the best Villa Interior Designer near Moradabad.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Villa Interior Designer Near Moradabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Villa Interior Designer Near Moradabad, UP| Vasterior",
    description: "Hire Vasterior, the Villa Interior Designer near Moradabad, to design luxurious, spacious villas. Your dream home needs the best Villa Interior Designer near Moradabad.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VillaInteriorDesignerNearMoradabad() {
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