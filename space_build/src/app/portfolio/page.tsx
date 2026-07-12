import type { Metadata } from "next";


import Portfoliocontent from "./Portfoliocontent";
import MagazineSection from "@/components/MagazineSection";





export const metadata: Metadata = {
  title: "space build – Portfolio | Luxury Residential & Commercial Interior Design Projects",
  description:
    "Explore space build’s portfolio of bespoke interior design projects. From luxury homes to corporate spaces, discover timeless designs crafted with elegance and spatial harmony.",
  keywords:
    "space build portfolio, interior design projects, residential interiors, commercial interiors, luxury design portfolio, bespoke interiors, space transformation",


  // ✅ Canonical
  alternates: {
    canonical: "https://www.space build.com/portfolio",
  },

  openGraph: {
    type: "website",
    url: "https://www.space build.com/portfolio",
    title: "space build – Portfolio | Luxury Residential & Commercial Interior Design Projects",
    description:
      "Explore space build’s portfolio of bespoke interior design projects. From luxury homes to corporate spaces, discover timeless designs crafted with elegance and spatial harmony.",
    images: [
      {
        url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/space buildlogo_bmzk0r.png",
        width: 1200,
        height: 630,
        alt: "space build – Portfolio | Luxury Residential & Commercial Interior Design Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@space build",
    title: "space build – Portfolio | Luxury Residential & Commercial Interior Design Projects",
    description:
      "Explore space build’s portfolio of bespoke interior design projects. From luxury homes to corporate spaces, discover timeless designs crafted with elegance and spatial harmony.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/space buildlogo_bmzk0r.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },

  // ✅ 
  
  
};

export default function portfolio() {
  return (
    <div className="min-h-screen bg-[#FFF1E0]">
      <Portfoliocontent />
      <MagazineSection />
      
      
      
      

      
    </div>
  );
}



