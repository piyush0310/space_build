import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Luxury Interior Designer Moradabad, UP| Vasterior",
  description: "Choose Vasterior, the Luxury Interior Designer Moradabad, for opulent, bespoke interiors. Experience the best with our Luxury Interior Designer Moradabad services.",
  keywords: "luxury interior designer in Moradabad, premium luxury interior designer Moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/luxury-interior-designer-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/luxury-interior-designer-moradabad",
    title: "Luxury Interior Designer Moradabad, UP| Vasterior",
    description: "Choose Vasterior, the Luxury Interior Designer Moradabad, for opulent, bespoke interiors. Experience the best with our Luxury Interior Designer Moradabad services.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Luxury Interior Designer Moradabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Luxury Interior Designer Moradabad, UP| Vasterior",
    description: "Choose Vasterior, the Luxury Interior Designer Moradabad, for opulent, bespoke interiors. Experience the best with our Luxury Interior Designer Moradabad services.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function LuxuryInteriorDesignerMoradabad() {
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