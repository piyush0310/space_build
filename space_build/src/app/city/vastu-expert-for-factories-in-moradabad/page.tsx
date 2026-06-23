import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";


export const metadata: Metadata = {
  title: "Vastu Expert For Factories In Moradabad, UP| Vasterior",
  description: "Need a Vastu Expert for Factories in Moradabad? Vasterior is the trusted Vastu Expert for Factories in Moradabad to enhance growth and prosperity.",
  keywords: "vastu expert for factories moradabad, factory vastu consultant moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-expert-for-factories-in-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-expert-for-factories-in-moradabad",
    title: "Vastu Expert For Factories In Moradabad, UP| Vasterior",
    description: "Need a Vastu Expert for Factories in Moradabad? Vasterior is the trusted Vastu Expert for Factories in Moradabad to enhance growth and prosperity.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Vastu Expert For Factories In Moradabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Expert For Factories In Moradabad, UP| Vasterior",
    description: "Need a Vastu Expert for Factories in Moradabad? Vasterior is the trusted Vastu Expert for Factories in Moradabad to enhance growth and prosperity.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};


export default function VastuExpertForFactoriesInMoradabad() {
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
