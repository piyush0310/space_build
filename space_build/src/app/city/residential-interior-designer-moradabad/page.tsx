import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Residential Interior Designer Moradabad, UP| Vasterior",
  description: "Searching for a Residential Interior Designer Moradabad? Vasterior, your top Residential Interior Designer Moradabad, delivers customized designs for stunning, comfortable living spaces.",
  keywords: "residential interior designer in Moradabad, best interior designer for homes Moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/residential-interior-designer-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/residential-interior-designer-moradabad",
    title: "Residential Interior Designer Moradabad, UP| Vasterior",
    description: "Searching for a Residential Interior Designer Moradabad? Vasterior, your top Residential Interior Designer Moradabad, delivers customized designs for stunning, comfortable living spaces.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Residential Interior Designer Moradabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Residential Interior Designer Moradabad, UP| Vasterior",
    description: "Searching for a Residential Interior Designer Moradabad? Vasterior, your top Residential Interior Designer Moradabad, delivers customized designs for stunning, comfortable living spaces.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function ResidentialInteriorDesignerMoradabad() {
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
