import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Home Renovation Interior Designer Moradabad, UP| Vasterior",
  description: "Need a Home Renovation Interior Designer Moradabad? Trust Vasterior, the leading Home Renovation Interior Designer Moradabad, to transform old spaces into modern, elegant homes.",
  keywords: "home renovation interior designer in Moradabad, house renovation interiors Moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/home-renovation-interior-designer-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/home-renovation-interior-designer-moradabad",
    title: "Home Renovation Interior Designer Moradabad, UP| Vasterior",
    description: "Need a Home Renovation Interior Designer Moradabad? Trust Vasterior, the leading Home Renovation Interior Designer Moradabad, to transform old spaces into modern, elegant homes.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Home Renovation Interior Designer Moradabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Home Renovation Interior Designer Moradabad, UP| Vasterior",
    description: "Need a Home Renovation Interior Designer Moradabad? Trust Vasterior, the leading Home Renovation Interior Designer Moradabad, to transform old spaces into modern, elegant homes.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function HomeRenovationInteriorDesignerMoradabad() {
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