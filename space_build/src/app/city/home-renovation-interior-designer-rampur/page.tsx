import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Home Renovation Interior Designer Rampur | Vasterior",
  description: "Home Renovation Interior Designer Rampur – Vasterior upgrades homes with modern renovation and premium interior solutions. Call +917906086899.",
  keywords: "Home Renovation Rampur, Interior Makeover Rampur, Vasterior Designers",
  alternates: {
    canonical: "https://www.vasterior.com/city/home-renovation-interior-designer-rampur",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/home-renovation-interior-designer-rampur",
    title: "Home Renovation Interior Designer Rampur | Vasterior",
    description: "Home Renovation Interior Designer Rampur – Vasterior upgrades homes with modern renovation and premium interior solutions. Call +917906086899.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Home Renovation Interior Designer Rampur",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Home Renovation Interior Designer Rampur | Vasterior",
    description: "Home Renovation Interior Designer Rampur – Vasterior upgrades homes with modern renovation and premium interior solutions. Call +917906086899.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function HomeRenovationInteriorDesignerRampur() {
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
