import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Villa Interior Designer In Rampur | Vasterior",
  description: "Villa Interior Designer In Rampur – Vasterior designs luxurious, elegant villas with bespoke concepts and flawless execution. Call +917906086899 today.",
  keywords: "Villa Interior Design Rampur, Luxury Villa Interiors Rampur, Vasterior",
  alternates: {
    canonical: "https://www.vasterior.com/city/villa-interior-designer-in-rampur",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/villa-interior-designer-in-rampur",
    title: "Villa Interior Designer In Rampur | Vasterior",
    description: "Villa Interior Designer In Rampur – Vasterior designs luxurious, elegant villas with bespoke concepts and flawless execution. Call +917906086899 today.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Villa Interior Designer In Rampur",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Villa Interior Designer In Rampur | Vasterior",
    description: "Villa Interior Designer In Rampur – Vasterior designs luxurious, elegant villas with bespoke concepts and flawless execution. Call +917906086899 today.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VillaInteriorDesignerInRampur() {
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
