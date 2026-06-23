import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Interior Designer And Vastu Expert Rampur | Vasterior",
  description: "Interior Designer And Vastu Expert Rampur – Vasterior blends modern interior design with authentic Vastu principles. Call +917906086899.",
  keywords: "Interior + Vastu Rampur, Vastu Interior Designer Rampur, Vasterior Expert",
  alternates: {
    canonical: "https://www.vasterior.com/city/interior-designer-and-vastu-expert-rampur",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/interior-designer-and-vastu-expert-rampur",
    title: "Interior Designer And Vastu Expert Rampur | Vasterior",
    description: "Interior Designer And Vastu Expert Rampur – Vasterior blends modern interior design with authentic Vastu principles. Call +917906086899.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Interior Designer And Vastu Expert Rampur",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Interior Designer And Vastu Expert Rampur | Vasterior",
    description: "Interior Designer And Vastu Expert Rampur – Vasterior blends modern interior design with authentic Vastu principles. Call +917906086899.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function InteriorDesignerAndVastuExpertRampur() {
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
