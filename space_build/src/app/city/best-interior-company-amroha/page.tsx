import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Best Interior Company Amroha | Vasterior Studios",
  description:
    "Best Interior Company Amroha – Vasterior Studios provides luxury interiors, modern designs & complete execution for all residential & commercial needs.",
  keywords:
    "best interior company amroha, top interior company amroha, interior services amroha",
  alternates: {
    canonical: "https://www.vasterior.com/city/best-interior-company-amroha",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/best-interior-company-amroha",
    title: "Best Interior Company Amroha | Vasterior Studios",
    description:
      "Best Interior Company Amroha – Vasterior Studios provides luxury interiors, modern designs & complete execution for all residential & commercial needs.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Best Interior Company Amroha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Best Interior Company Amroha | Vasterior Studios",
    description:
      "Best Interior Company Amroha – Vasterior Studios provides luxury interiors, modern designs & complete execution for all residential & commercial needs.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function AffordableInteriorDesignerFor3BhkInMoradabad() {
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
