import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Interior Designer in Delhi NCR | Vasterior Studios",
  description:
    "Vasterior offers premium interior design & Vastu-based solutions in Delhi NCR. Luxury homes, villas & offices designed with precision. Call +917906086899.",
  keywords:
    "Interior Designer in Delhi NCR, Best Interior Designer Delhi NCR, Luxury Interior Design Delhi NCR",
  alternates: {
    canonical: "https://www.vasterior.com/city/interior-designer-in-delhi-ncr",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/interior-designer-in-delhi-ncr",
    title: "Interior Designer in Delhi NCR | Vasterior Studios",
    description:
      "Vasterior offers premium interior design & Vastu-based solutions in Delhi NCR. Luxury homes, villas & offices designed with precision. Call +917906086899.",
    images: [
      {
        url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
        width: 1200,
        height: 630,
        alt: "Interior Designer in Delhi NCR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Interior Designer in Delhi NCR | Vasterior Studios",
    description:
      "Vasterior offers premium interior design & Vastu-based solutions in Delhi NCR. Luxury homes, villas & offices designed with precision. Call +917906086899.",
    images: [
      "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function InteriorDesignerNearMeMoradabadDistrict() {
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
