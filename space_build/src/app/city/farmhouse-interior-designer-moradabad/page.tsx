import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Farmhouse Interior Designer Moradabad, UP| Vasterior",
  description: "Looking for a Farmhouse Interior Designer Moradabad? Vasterior, the trusted Farmhouse Interior Designer Moradabad, creates beautiful rustic interiors.",
  keywords: "farmhouse interior designer in Moradabad, best farmhouse designer Moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/farmhouse-interior-designer-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/farmhouse-interior-designer-moradabad",
    title: "Farmhouse Interior Designer Moradabad, UP| Vasterior",
    description: "Looking for a Farmhouse Interior Designer Moradabad? Vasterior, the trusted Farmhouse Interior Designer Moradabad, creates beautiful rustic interiors.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Farmhouse Interior Designer Moradabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Farmhouse Interior Designer Moradabad, UP| Vasterior",
    description: "Looking for a Farmhouse Interior Designer Moradabad? Vasterior, the trusted Farmhouse Interior Designer Moradabad, creates beautiful rustic interiors.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function FarmhouseInteriorDesignerMoradabad() {
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