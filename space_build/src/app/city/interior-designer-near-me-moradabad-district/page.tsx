import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Interior Designer Near Me Moradabad District, UP| Vasterior",
  description: "Find an Interior Designer near me Moradabad District with Vasterior, the leading Interior Designer near me Moradabad District, for stylish and personalized home interiors.",
  keywords: "interior designer near me Moradabad, nearby interior designer Moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/interior-designer-near-me-moradabad-district",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/interior-designer-near-me-moradabad-district",
    title: "Interior Designer Near Me Moradabad District, UP| Vasterior",
    description: "Find an Interior Designer near me Moradabad District with Vasterior, the leading Interior Designer near me Moradabad District, for stylish and personalized home interiors.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Interior Designer Near Me Moradabad District",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Interior Designer Near Me Moradabad District, UP| Vasterior",
    description: "Find an Interior Designer near me Moradabad District with Vasterior, the leading Interior Designer near me Moradabad District, for stylish and personalized home interiors.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function InteriorDesignerNearMeMoradabadDistrict() {
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
