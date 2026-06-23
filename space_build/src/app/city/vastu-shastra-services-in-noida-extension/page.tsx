// File: vastu-shastra-services-in-noida-extension/page.tsx
import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Shastra Services in Noida Extension, Uttar Pradesh | Vasterior",
  description: "Looking for Vastu Shastra Services in Noida Extension, Uttar Pradesh? Vasterior delivers authentic guidance. Get expert Vastu Shastra Services in Noida Extension for balanced living & working spaces.",
  keywords: "vastu shastra services, traditional vastu guidance, authentic vastu services",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-shastra-services-in-noida-extension",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-shastra-services-in-noida-extension",
    title: "Vastu Shastra Services in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for Vastu Shastra Services in Noida Extension, Uttar Pradesh? Vasterior delivers authentic guidance. Get expert Vastu Shastra Services in Noida Extension for balanced living & working spaces.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Vastu Shastra Services in Noida Extension",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Shastra Services in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for Vastu Shastra Services in Noida Extension, Uttar Pradesh? Vasterior delivers authentic guidance. Get expert Vastu Shastra Services in Noida Extension for balanced living & working spaces.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuShastraServicesNoidaExtension() {
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