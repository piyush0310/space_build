import type { Metadata } from "next";


import Aboutus from "@/components/Aboutus";
import Aboutcontent from "./Aboutcontent";





export const metadata: Metadata = {
  title: "Space Build – About Us | Bespoke Interior Design & Spatial Flow Consultants",
  description:
    "Discover Space Build’s story – a team of expert designers and architects redefining residential and commercial interiors with timeless elegance, spatial harmony, and bespoke design solutions.",
  keywords:
    "Space Build, about Space Build, interior design consultants, luxury interiors, bespoke design, residential interiors, commercial interiors, spatial flow consultant, elegant design, modern interior solutions",


  // ✅ Canonical
  alternates: {
    canonical: "https://www.Space Build.com/about",
  },

  openGraph: {
    type: "website",
    url: "https://www.Space Build.com/about",
    title: "Space Build – About Us | Bespoke Interior Design & Spatial Flow Consultants",
    description:
      "Discover Space Build’s story – a team of expert designers and architects redefining residential and commercial interiors with timeless elegance, spatial harmony, and bespoke design solutions.",
    images: [
      {
        url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/Space Buildlogo_bmzk0r.png",
        width: 1200,
        height: 630,
        alt: "Space Build – About Us | Bespoke Interior Design & Spatial Flow Consultants",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Space Build",
    title: "Space Build – About Us | Bespoke Interior Design & Spatial Flow Consultants",
    description:
      "Discover Space Build’s story – a team of expert designers and architects redefining residential and commercial interiors with timeless elegance, spatial harmony, and bespoke design solutions.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/Space Buildlogo_bmzk0r.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },

  // ✅ Google site verification
  
  
};

export default function about() {
  return (
    <div className="min-h-screen bg-[#FFF1E0]">
      <Aboutus />
      <Aboutcontent />
    
      
      
      
      

      
    </div>
  );
}
