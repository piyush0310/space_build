// File: vastu-tips-for-home-in-noida-extension/page.tsx
import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Tips for Home in Noida Extension, Uttar Pradesh | Vasterior",
  description: "Looking for Vastu Tips for Home in Noida Extension, Uttar Pradesh? Vasterior provides practical guidance. Get effective Vastu Tips for Home in Noida Extension to create harmony & positivity.",
  keywords: "vastu tips for home, home vastu guidance, residential vastu tips",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-tips-for-home-in-noida-extension",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-tips-for-home-in-noida-extension",
    title: "Vastu Tips for Home in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for Vastu Tips for Home in Noida Extension, Uttar Pradesh? Vasterior provides practical guidance. Get effective Vastu Tips for Home in Noida Extension to create harmony & positivity.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Vastu Tips for Home in Noida Extension",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Tips for Home in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for Vastu Tips for Home in Noida Extension, Uttar Pradesh? Vasterior provides practical guidance. Get effective Vastu Tips for Home in Noida Extension to create harmony & positivity.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuTipsForHomeNoidaExtension() {
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