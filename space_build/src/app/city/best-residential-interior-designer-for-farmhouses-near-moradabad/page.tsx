import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Best Residential Interior Designer For Farmhouses Near Moradabad, UP| Vasterior",
  description: "Looking for the Best Residential Interior Designer for Farmhouses near Moradabad? Vasterior, the top Best Residential Interior Designer for Farmhouses near Moradabad, crafts elegant countryside homes.",
  keywords: "best residential interior designer for farmhouses near Moradabad, farmhouse residential interiors near Moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/best-residential-interior-designer-for-farmhouses-near-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/best-residential-interior-designer-for-farmhouses-near-moradabad",
    title: "Best Residential Interior Designer For Farmhouses Near Moradabad, UP| Vasterior",
    description: "Looking for the Best Residential Interior Designer for Farmhouses near Moradabad? Vasterior, the top Best Residential Interior Designer for Farmhouses near Moradabad, crafts elegant countryside homes.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Best Residential Interior Designer For Farmhouses Near Moradabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Best Residential Interior Designer For Farmhouses Near Moradabad, UP| Vasterior",
    description: "Looking for the Best Residential Interior Designer for Farmhouses near Moradabad? Vasterior, the top Best Residential Interior Designer for Farmhouses near Moradabad, crafts elegant countryside homes.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function BestResidentialInteriorDesignerForFarmhousesNearMoradabad() {
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