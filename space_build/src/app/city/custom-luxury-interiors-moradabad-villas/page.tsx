import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Custom Luxury Interiors Moradabad Villas, UP| Vasterior",
  description: "Experience Custom Luxury Interiors Moradabad Villas with Vasterior, the specialist in Custom Luxury Interiors Moradabad Villas, offering tailor-made designs.",
  keywords: "custom luxury interiors for Moradabad villas, bespoke villa interiors Moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/custom-luxury-interiors-moradabad-villas",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/custom-luxury-interiors-moradabad-villas",
    title: "Custom Luxury Interiors Moradabad Villas, UP| Vasterior",
    description: "Experience Custom Luxury Interiors Moradabad Villas with Vasterior, the specialist in Custom Luxury Interiors Moradabad Villas, offering tailor-made designs.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Custom Luxury Interiors Moradabad Villas",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Custom Luxury Interiors Moradabad Villas, UP| Vasterior",
    description: "Experience Custom Luxury Interiors Moradabad Villas with Vasterior, the specialist in Custom Luxury Interiors Moradabad Villas, offering tailor-made designs.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function CustomLuxuryInteriorsMoradabadVillas() {
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