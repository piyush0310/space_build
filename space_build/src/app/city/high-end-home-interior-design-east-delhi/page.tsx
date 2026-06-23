import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";



import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";



export const metadata: Metadata = {
  title: "High-End Home Interior Design East Delhi | Vasterior",
  description: "Looking for High-End Home Interior Design East Delhi? Vasterior creates luxury spaces with precision and elegance. Choose High-End Home Interior Design East Delhi — choose Vasterior.",
  keywords: "high-end home interior design east delhi, luxury interior design east delhi, vasterior interiors",
  alternates: {
    canonical: "https://www.vasterior.com/city/high-end-home-interior-design-east-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/high-end-home-interior-design-east-delhi",
    title: "High-End Home Interior Design East Delhi | Vasterior",
    description: "Looking for High-End Home Interior Design East Delhi? Vasterior creates luxury spaces with precision and elegance. Choose High-End Home Interior Design East Delhi — choose Vasterior.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "High-End Home Interior Design East Delhi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "High-End Home Interior Design East Delhi | Vasterior",
    description: "Looking for High-End Home Interior Design East Delhi? Vasterior creates luxury spaces with precision and elegance. Choose High-End Home Interior Design East Delhi — choose Vasterior.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};



export default function HighEndHomeInteriorDesignEastDelhi() {
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
