import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";


import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog"


export const metadata: Metadata = {
  title: "Vastu Expert in East Delhi, Delhi | Vasterior",
  description: "Vastu Expert in East Delhi offering professional Vastu consultation for home, office, shop and commercial spaces. Trusted Vastu services by Vasterior.",
  keywords: "vastu expert in east delhi, vastu consultant in east delhi, best vastu expert east delhi, vastu services east delhi, residential vastu east delhi",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-expert-in-east-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-expert-in-east-delhi ",
    title: "Vastu Expert in East Delhi, Delhi | Vasterior",
    description: "Vastu Expert in East Delhi offering professional Vastu consultation for home, office, shop and commercial spaces. Trusted Vastu services by Vasterior.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Vastu Expert in East Delhi, Delhi | Vasterior",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Expert in East Delhi, Delhi | Vasterior",
    description: "Vastu Expert in East Delhi offering professional Vastu consultation for home, office, shop and commercial spaces. Trusted Vastu services by Vasterior.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};


export default function VastuExpertForVillasSouthDelhi() {
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
