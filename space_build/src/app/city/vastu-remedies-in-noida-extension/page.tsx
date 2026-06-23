
import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Remedies in Noida Extension, Uttar Pradesh | Vasterior",
  description: "Looking for Vastu Remedies in Noida Extension, Uttar Pradesh? Vasterior offers powerful solutions. Apply effective Vastu Remedies in Noida Extension for home, office & business growth.",
  keywords: "vastu remedies, effective vastu solutions, vastu correction services",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-remedies-in-noida-extension",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-remedies-in-noida-extension",
    title: "Vastu Remedies in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for Vastu Remedies in Noida Extension, Uttar Pradesh? Vasterior offers powerful solutions. Apply effective Vastu Remedies in Noida Extension for home, office & business growth.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Vastu Remedies in Noida Extension",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Remedies in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for Vastu Remedies in Noida Extension, Uttar Pradesh? Vasterior offers powerful solutions. Apply effective Vastu Remedies in Noida Extension for home, office & business growth.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuRemediesNoidaExtension() {
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