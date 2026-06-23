import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Services in Noida Extension, Uttar Pradesh | Vasterior",
  description: "Looking for Vastu Services in Noida Extension, Uttar Pradesh? Vasterior provides end-to-end solutions. Choose professional Vastu Services in Noida Extension for residential & commercial spaces.",
  keywords: "vastu services, complete vastu solutions, residential & commercial vastu",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-services-in-noida-extension",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-services-in-noida-extension",
    title: "Vastu Services in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for Vastu Services in Noida Extension, Uttar Pradesh? Vasterior provides end-to-end solutions. Choose professional Vastu Services in Noida Extension for residential & commercial spaces.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Vastu Services in Noida Extension",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Services in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for Vastu Services in Noida Extension, Uttar Pradesh? Vasterior provides end-to-end solutions. Choose professional Vastu Services in Noida Extension for residential & commercial spaces.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuServicesNoidaExtension() {
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