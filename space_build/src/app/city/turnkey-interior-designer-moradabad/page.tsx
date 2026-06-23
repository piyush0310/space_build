import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Turnkey Interior Designer Moradabad, UP| Vasterior",
  description: "Hire Vasterior, the Turnkey Interior Designer Moradabad, for complete interior solutions. From concept to completion, the best Turnkey Interior Designer Moradabad is here.",
  keywords: "turnkey interior designer in Moradabad, complete turnkey interiors Moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/turnkey-interior-designer-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/turnkey-interior-designer-moradabad",
    title: "Turnkey Interior Designer Moradabad, UP| Vasterior",
    description: "Hire Vasterior, the Turnkey Interior Designer Moradabad, for complete interior solutions. From concept to completion, the best Turnkey Interior Designer Moradabad is here.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Turnkey Interior Designer Moradabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Turnkey Interior Designer Moradabad, UP| Vasterior",
    description: "Hire Vasterior, the Turnkey Interior Designer Moradabad, for complete interior solutions. From concept to completion, the best Turnkey Interior Designer Moradabad is here.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function TurnkeyInteriorDesignerMoradabad() {
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