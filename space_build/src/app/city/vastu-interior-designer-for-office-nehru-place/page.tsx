import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Interior Designer for Office Nehru Place",
  description:
    "Vastu Interior Designer for Office Nehru Place, with Price | Vasteior. Looking for a Vastu interior designer for office in Nehru Place with price details? Vasterior provides functional, modern & Vastu-aligned office interiors.",
  keywords:
    "vastu interior designer for office nehru place, office interior design as per vastu nehru place, commercial interior designer nehru place",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/vastu-interior-designer-for-office-nehru-place",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-interior-designer-for-office-nehru-place",
    title: "Vastu Interior Designer for Office Nehru Place",
    description:
      "Vastu Interior Designer for Office Nehru Place, with Price | Vasteior. Looking for a Vastu interior designer for office in Nehru Place with price details? Vasterior provides functional, modern & Vastu-aligned office interiors.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Vastu Interior Designer for Office Nehru Place",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Interior Designer for Office Nehru Place",
    description:
      "Vastu Interior Designer for Office Nehru Place, with Price | Vasteior. Looking for a Vastu interior designer for office in Nehru Place with price details? Vasterior provides functional, modern & Vastu-aligned office interiors.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuInteriorDesignerForOfficeNehruPlace() {
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
