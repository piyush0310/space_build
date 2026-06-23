import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Affordable Interior Designer Moradabad, UP| Vasterior",
  description: "Want an Affordable Interior Designer Moradabad? Vasterior, the trusted Affordable Interior Designer Moradabad, provides budget-friendly interiors without compromising on style.",
  keywords: "affordable interior designer in Moradabad, budget interior designer Moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/affordable-interior-designer-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/affordable-interior-designer-moradabad",
    title: "Affordable Interior Designer Moradabad, UP| Vasterior",
    description: "Want an Affordable Interior Designer Moradabad? Vasterior, the trusted Affordable Interior Designer Moradabad, provides budget-friendly interiors without compromising on style.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Affordable Interior Designer Moradabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Affordable Interior Designer Moradabad, UP| Vasterior",
    description: "Want an Affordable Interior Designer Moradabad? Vasterior, the trusted Affordable Interior Designer Moradabad, provides budget-friendly interiors without compromising on style.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function AffordableInteriorDesignerMoradabad() {
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