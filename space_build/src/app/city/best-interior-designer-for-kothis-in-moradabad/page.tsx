import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Best Interior Designer For Kothis In Moradabad, UP| Vasterior",
  description: "Need the Best Interior Designer for Kothis in Moradabad? Vasterior, the trusted Best Interior Designer for Kothis in Moradabad, brings grandeur and comfort to every project.",
  keywords: "best kothi interior designer Moradabad, kothi luxury interior designer in Moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/best-interior-designer-for-kothis-in-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/best-interior-designer-for-kothis-in-moradabad",
    title: "Best Interior Designer For Kothis In Moradabad, UP| Vasterior",
    description: "Need the Best Interior Designer for Kothis in Moradabad? Vasterior, the trusted Best Interior Designer for Kothis in Moradabad, brings grandeur and comfort to every project.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Best Interior Designer For Kothis In Moradabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Best Interior Designer For Kothis In Moradabad, UP| Vasterior",
    description: "Need the Best Interior Designer for Kothis in Moradabad? Vasterior, the trusted Best Interior Designer for Kothis in Moradabad, brings grandeur and comfort to every project.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function BestInteriorDesignerForKothisInMoradabad() {
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