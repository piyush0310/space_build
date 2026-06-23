import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Commercial Interior Designer Rampur | Vasterior",
  description: "Commercial Interior Designer Rampur – Vasterior designs functional, branded commercial spaces that boost productivity. Call +917906086899.",
  keywords: "Commercial Interiors Rampur, Office Interiors Rampur, Vasterior Commercial",
  alternates: {
    canonical: "https://www.vasterior.com/city/commercial-interior-designer-rampur",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/commercial-interior-designer-rampur",
    title: "Commercial Interior Designer Rampur | Vasterior",
    description: "Commercial Interior Designer Rampur – Vasterior designs functional, branded commercial spaces that boost productivity. Call +917906086899.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Commercial Interior Designer Rampur",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Commercial Interior Designer Rampur | Vasterior",
    description: "Commercial Interior Designer Rampur – Vasterior designs functional, branded commercial spaces that boost productivity. Call +917906086899.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function CommercialInteriorDesignerRampur() {
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
