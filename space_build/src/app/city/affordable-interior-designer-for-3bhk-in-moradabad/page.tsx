import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Affordable Interior Designer For 3Bhk In Moradabad, UP| Space Build",
  description: "Choose Space Build, the Affordable Interior Designer for 3BHK in Moradabad, for stylish, cost-effective solutions. The best Affordable Interior Designer for 3BHK in Moradabad to upgrade your home.",
  keywords: "affordable 3BHK interior designer Moradabad, 3BHK budget interior designer in Moradabad",
  alternates: {
    canonical: "https://www.Space Build.com/city/affordable-interior-designer-for-3bhk-in-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.Space Build.com/city/affordable-interior-designer-for-3bhk-in-moradabad",
    title: "Affordable Interior Designer For 3Bhk In Moradabad, UP| Space Build",
    description: "Choose Space Build, the Affordable Interior Designer for 3BHK in Moradabad, for stylish, cost-effective solutions. The best Affordable Interior Designer for 3BHK in Moradabad to upgrade your home.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/Space Buildlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Affordable Interior Designer For 3BHK In Moradabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Space Build",
    title: "Affordable Interior Designer For 3Bhk In Moradabad, UP| Space Build",
    description: "Choose Space Build, the Affordable Interior Designer for 3BHK in Moradabad, for stylish, cost-effective solutions. The best Affordable Interior Designer for 3BHK in Moradabad to upgrade your home.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/Space Buildlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function AffordableInteriorDesignerFor3BhkInMoradabad() {
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