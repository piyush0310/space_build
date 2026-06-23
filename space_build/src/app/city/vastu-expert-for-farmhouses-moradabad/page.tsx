import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";


import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog"


export const metadata: Metadata = {
  title: "Vastu Expert For Farmhouses Moradabad, UP| Vasterior",
  description: "Looking for a Vastu Expert for Farmhouses Moradabad? Vasterior is the trusted Vastu Expert for Farmhouses Moradabad to ensure balance and prosperity.",
  keywords: "vastu expert for farmhouses moradabad, farmhouse vastu consultant moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-expert-for-farmhouses-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-expert-for-farmhouses-moradabad",
    title: "Vastu Expert For Farmhouses Moradabad, UP| Vasterior",
    description: "Looking for a Vastu Expert for Farmhouses Moradabad? Vasterior is the trusted Vastu Expert for Farmhouses Moradabad to ensure balance and prosperity.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Vastu Expert For Farmhouses Moradabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Expert For Farmhouses Moradabad, UP| Vasterior",
    description: "Looking for a Vastu Expert for Farmhouses Moradabad? Vasterior is the trusted Vastu Expert for Farmhouses Moradabad to ensure balance and prosperity.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};


export default function VastuExpertForFarmhousesMoradabad() {
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
