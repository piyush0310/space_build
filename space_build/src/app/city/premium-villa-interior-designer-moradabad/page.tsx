import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Premium Villa Interior Designer Moradabad, UP| Vasterior",
  description: "Need a Premium Villa Interior Designer Moradabad? Vasterior, the premier Premium Villa Interior Designer Moradabad, offers unmatched luxury solutions.",
  keywords: "premium villa interior designer in Moradabad, best villa interior designer Moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/premium-villa-interior-designer-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/premium-villa-interior-designer-moradabad",
    title: "Premium Villa Interior Designer Moradabad, UP| Vasterior",
    description: "Need a Premium Villa Interior Designer Moradabad? Vasterior, the premier Premium Villa Interior Designer Moradabad, offers unmatched luxury solutions.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Premium Villa Interior Designer Moradabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Premium Villa Interior Designer Moradabad, UP| Vasterior",
    description: "Need a Premium Villa Interior Designer Moradabad? Vasterior, the premier Premium Villa Interior Designer Moradabad, offers unmatched luxury solutions.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function PremiumVillaInteriorDesignerMoradabad() {
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