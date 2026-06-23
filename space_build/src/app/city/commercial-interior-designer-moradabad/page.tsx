import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Commercial Interior Designer Moradabad, UP| Vasterior",
  description: "Looking for a Commercial Interior Designer Moradabad? Vasterior, the expert Commercial Interior Designer Moradabad, creates stylish and functional workspaces that inspire productivity and impress clients.",
  keywords: "commercial interior designer in Moradabad, office interior designer Moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/commercial-interior-designer-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/commercial-interior-designer-moradabad",
    title: "Commercial Interior Designer Moradabad, UP| Vasterior",
    description: "Looking for a Commercial Interior Designer Moradabad? Vasterior, the expert Commercial Interior Designer Moradabad, creates stylish and functional workspaces that inspire productivity and impress clients.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Commercial Interior Designer Moradabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Commercial Interior Designer Moradabad, UP| Vasterior",
    description: "Looking for a Commercial Interior Designer Moradabad? Vasterior, the expert Commercial Interior Designer Moradabad, creates stylish and functional workspaces that inspire productivity and impress clients.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function CommercialInteriorDesignerMoradabad() {
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