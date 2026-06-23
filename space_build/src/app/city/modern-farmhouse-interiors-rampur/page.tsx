import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Modern Farmhouse Interiors Rampur | Vasterior",
  description: "Modern Farmhouse Interiors Rampur – Vasterior brings modern, rustic charm with sophisticated farmhouse interior concepts. Call +917906086899.",
  keywords: "Modern Farmhouse Design Rampur, Contemporary Farmhouse Interiors, Vasterior",
  alternates: {
    canonical: "https://www.vasterior.com/city/modern-farmhouse-interiors-rampur",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/modern-farmhouse-interiors-rampur",
    title: "Modern Farmhouse Interiors Rampur | Vasterior",
    description: "Modern Farmhouse Interiors Rampur – Vasterior brings modern, rustic charm with sophisticated farmhouse interior concepts. Call +917906086899.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Modern Farmhouse Interiors Rampur",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Modern Farmhouse Interiors Rampur | Vasterior",
    description: "Modern Farmhouse Interiors Rampur – Vasterior brings modern, rustic charm with sophisticated farmhouse interior concepts. Call +917906086899.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function ModernFarmhouseInteriorsRampur() {
  return (
    <div className="min-h-screen bg-[#FFF1E0]">
      <Banner />
      <Content />
      <Services />
      <Portfolio />
      <Blog />
      <Testimonials />
    </div>
  );
}
