import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Interior Designer Near Me Amroha | Vasterior Studios",
  description:
    "Interior Designer Near Me Amroha – Vasterior Studios offers complete interior solutions, modern designs, and affordable pricing for homes & commercial spaces.",
  keywords:
    "interior designer near me amroha, local interior designer amroha, home design amroha",
  alternates: {
    canonical: "https://www.vasterior.com/city/interior-designer-near-me-amroha",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/interior-designer-near-me-amroha",
    title: "Interior Designer Near Me Amroha | Vasterior Studios",
    description:
      "Interior Designer Near Me Amroha – Vasterior Studios offers complete interior solutions, modern designs, and affordable pricing for homes & commercial spaces.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Interior Designer Near Me Amroha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Interior Designer Near Me Amroha | Vasterior Studios",
    description:
      "Interior Designer Near Me Amroha – Vasterior Studios offers complete interior solutions, modern designs, and affordable pricing for homes & commercial spaces.",
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
