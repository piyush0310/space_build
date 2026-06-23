import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Residential Interior Designer Rampur | Vasterior",
  description: "Residential Interior Designer Rampur – Vasterior creates stylish, functional home interiors with premium finishes and Vastu guidance. Call +917906086899 for expert design.",
  keywords: "Residential Interiors Rampur, Home Interior Designer Rampur, Vasterior Studio",
  alternates: {
    canonical: "https://www.vasterior.com/city/residential-interior-designer-rampur",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/residential-interior-designer-rampur",
    title: "Residential Interior Designer Rampur | Vasterior",
    description: "Residential Interior Designer Rampur – Vasterior creates stylish, functional home interiors with premium finishes and Vastu guidance. Call +917906086899 for expert design.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Residential Interior Designer Rampur",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Residential Interior Designer Rampur | Vasterior",
    description: "Residential Interior Designer Rampur – Vasterior creates stylish, functional home interiors with premium finishes and Vastu guidance. Call +917906086899 for expert design.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function ResidentialInteriorDesignerRampur() {
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
